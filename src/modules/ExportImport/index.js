'use client'

import React, { useContext, useEffect, useState } from 'react';

// API
import { getAllProjects } from 'bloomreach-content-management-apis';

// Components
import { Container, Grid } from '@mui/material';
import ExportComponent from './Export';
import ImportComponent from './Import';

// Contexts
import { ConfigurationContext } from 'src/contexts';


const ExportImportModule = () => {
  const { appConfiguration } = useContext(ConfigurationContext)
  const { environment, xAuthToken, projectId } = appConfiguration.environments?.source
  const { environment: targetEnvironment, xAuthToken: targetXAuthToken, projectId: targetProjectId } = appConfiguration.environments?.target

  const [projectsList, setProjectsList] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [targetProjectsList, setTargetProjectsList] = useState([])
  const [targetSelectedProject, setTargetSelectedProject] = useState(null)

  useEffect(() => {
    // Get source projects list
    if (environment && xAuthToken) {
      getAllProjects(environment, xAuthToken)
        .then((response) => {
          let projects = response.data
          if (projectId) {
            projects.find(project => project.id === projectId)
          }
          setProjectsList(response.data)
          setSelectedProject(projectId ? projects.find(project => project.id === projectId) : projects[0])
        })
    }

    // Get target projects list
    if (targetEnvironment && targetXAuthToken) {
      getAllProjects(targetEnvironment, targetXAuthToken)
        .then((response) => {
          let projects = response.data
          if (targetProjectId) {
            projects.find(project => project.id === targetProjectId)
          }
          setTargetProjectsList(response.data)
          setTargetSelectedProject(targetProjectId ? projects.find(project => project.id === targetProjectId) : projects[0])
        })
    }
  }, [appConfiguration])

  return (
    <Container maxWidth='xl'>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='stretch'
        spacing={3}
      >
        <Grid item xs={6}>
          <ExportComponent
            environment={environment}
            xAuthToken={xAuthToken}
            projectsList={projectsList}
            setProjectsList={setProjectsList}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </Grid>

        {targetEnvironment.trim() === '' && targetXAuthToken.trim() === ''
          ? <Grid item xs={6}>
              <ImportComponent
                environment={environment}
                xAuthToken={xAuthToken}
                projectsList={projectsList}
                setProjectsList={setProjectsList}
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            </Grid>
          : <Grid item xs={6}>
              <ImportComponent
                environment={targetEnvironment}
                xAuthToken={targetXAuthToken}
                projectsList={targetProjectsList}
                setProjectsList={setTargetProjectsList}
                selectedProject={targetSelectedProject}
                setSelectedProject={setTargetSelectedProject}
              />
            </Grid>
        }
      </Grid>
    </Container>
  )
}

export default ExportImportModule;
