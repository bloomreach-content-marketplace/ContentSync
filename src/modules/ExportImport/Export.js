'use client'
import React, { useContext, useState } from 'react'

// API
import {
  downloadExportedFiles,
  getOperationDetails,
  requestAnExport,
} from 'bloomreach-content-management-apis';

// Components
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

// Constants
import { DATA_TYPES } from 'src/lib/constants';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { ErrorContext } from '@/contexts'

const ExportComponent = ({
  environment,
  xAuthToken,
  projectsList,
  selectedProject,
  setSelectedProject,
}) => {
  // State
  const [dataTypes, setDataTypes] = useState(DATA_TYPES)
  const [sourcePath, setSourcePath] = useState('')

  const [skippedExportItems, setSkippedExportItems] = useState(0)
  const [elapsedExportTime, setElapsedExportTime] = useState(0)
  const [exportOperationId, setExportOperationId] = useState(null)
  const [exportJobStatus, setExportJobStatus] = useState('')
  const [exportJobRunning, setExportJobRunning] = useState(false)
  const [downloadReady, setDownloadReady] = useState(false)

  const [value, setValue] = useState(null)

  const { handleShowSnackbar } = useContext(ErrorContext)

  const handleDataTypesChange = async (event) => {
    const name = event.target.name
    const checked = event.target.checked

    if (checked) {
      await setDataTypes([...dataTypes, name])
    } else {
      await setDataTypes(dataTypes.filter(dataType => dataType !== name))
    }
  };

  const handleProjectChange = (e) => {
    e.preventDefault()
    if (e.target.value === 'core') {
      setSelectedProject('core')
    } else {
      setSelectedProject(projectsList.find(project => project.id === e.target.value))
    }
  }

  const handleSubmitExport = (event) => {
    const isoWithoutMs = value && dayjs(value).toISOString().replace(/\.\d{3}Z$/, 'Z');
    event.preventDefault();
    requestAnExport(environment, xAuthToken, sourcePath, isoWithoutMs? isoWithoutMs : null, selectedProject.id, dataTypes)
      .then(resp => {
        if(resp.data.status === 'STARTING') {
          setExportOperationId(resp.data.operationId)
          handleExportOperation(resp.data.operationId)
        }}
      ).catch(error => handleShowSnackbar('error', `Export request failed: ${error.response.data}`))
  }

  const handleExportOperation = (operationId)  => {
    setExportJobRunning(true)
    setDownloadReady(false)
    let elapsedTime = 0;
    const mainLoopId = setInterval(function () {
      getOperationDetails(environment, xAuthToken, operationId)
        .then(resp => {
          if (resp.data.status === 'COMPLETED') {
            setExportJobRunning(false)
            setDownloadReady(true)
            setElapsedExportTime(0)
            clearInterval(mainLoopId)
          } else {
            setExportJobStatus(resp.data.status)
            elapsedTime += 1
            setElapsedExportTime(elapsedTime)
            setSkippedExportItems(resp.data.skipCount+skippedExportItems)
          }
        })
    }, 1000);
  }

  const handleExportDownload = (event) => {
    event.preventDefault()
    downloadExportedFiles(environment, xAuthToken, exportOperationId)
      .then(response => {
        const blob = new Blob([response.data], {type: 'application/octet-stream'})
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `${exportOperationId}.zip`)
        document.body.appendChild(link)
        link.click()

        window.URL.revokeObjectURL(url)
        link.remove()
      })
  }

  return (
    <Card>
      <CardHeader title='Export' />
      <Divider />
      <CardContent>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '90%' }
          }}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmitExport}
        >
          <div>
            <FormControl required sx={{ p: 1, width: '100%' }}>
              <FormLabel component='legend'><strong>Data Types</strong></FormLabel>
              <FormGroup sx={{ padding: 1, display: 'flex', flexDirection: 'row' }}>
                {DATA_TYPES.map((dataType) => (
                  <FormControlLabel
                    key={dataType}
                    control={
                      <Checkbox
                        name={dataType}
                        checked={dataTypes.indexOf(dataType) > -1}
                        onChange={handleDataTypesChange}
                      />
                    }
                    label={dataType}
                  />
                ))}
              </FormGroup>
            </FormControl>

            <FormControl
              variant='outlined'
              sx={{ m: 1, minWidth: 240, marginTop: 2 }}
            >
              <InputLabel id='channel'>Project</InputLabel>
              <Select
                id='projectId'
                labelId='projectId'
                label='Project ID'
                value={selectedProject === 'core' ? selectedProject : (selectedProject?.id || '')}
                onChange={(e) => handleProjectChange(e)}
              >
                <MenuItem value='core'>Core</MenuItem>
                <Divider />
                {projectsList.map(project => (
                  <MenuItem key={project.id} value={project.id}>
                    {project.name} ({project.id})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              required
              id='sourcePath'
              name='sourcePath'
              label='Source Path'
              helperText='/content/documents/<folder>'
              placeholder='/content/documents/'
              value={sourcePath}
              onChange={(e) => setSourcePath(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDateTimePicker
                ampm={false}
                disableFuture={true}
                value={value}
                onChange={(newValue) => setValue(newValue)}
                slotProps={{
                  textField: {
                    error: false,
                    helperText: 'Date is optional. This will be used for the modifiedAfter parameter.',
                  },
                }}
              />
            </LocalizationProvider>
          </div>
          <div>
            <Button
              sx={{ margin: 1 }}
              variant='contained'
              type='submit'
              disabled={!sourcePath || !selectedProject}
            >
              Start export
            </Button>
            { exportJobRunning && <p>Job status: {exportJobStatus} time: {elapsedExportTime}s skipped: {skippedExportItems}</p>}
            { downloadReady &&
              <Button
                sx={{ margin: 1 }}
                variant='contained'
                onClick={(e) => handleExportDownload(e)}
              >
                Download
              </Button>
            }
          </div>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ExportComponent;
