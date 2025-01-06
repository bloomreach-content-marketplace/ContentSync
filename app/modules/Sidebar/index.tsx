'use client'

import { useContext } from 'react'
import styled from '@emotion/styled'

// Config
import { config } from '@/theme/schemes/BloomreachTheme'

// Components
import { Logo, SidebarMenu, Scrollbar } from '@/components'
import {
  Box,
  Button,
  Drawer,
  Divider,
  useTheme,
  lighten,
  darken,
  ThemeOptions
} from '@mui/material';

// Context
import { SidebarContext } from '@/contexts'
import { colors } from '@/theme/schemes/BloomreachTheme'

const SidebarWrapper = styled(Box)(
  () => `
    color: ${colors.alpha.trueWhite[70]};
    height: 100vh;
    min-width: ${config.sidebar.width};
    padding-bottom: 68px;
    width: ${config.sidebar.width};
    z-index: 7;
`
);

const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme: ThemeOptions = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          overflow: 'hidden',
          left: 0,
          top: 0,
          background: `radial-gradient(circle at top left, ${lighten(config.sidebar.background, 0.2)}, ${darken(config.sidebar.background, 0.3)})`,
          '&::before': {
            display: 'block',
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(to right, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.3) 100%)`
          }
        }}
      >
        <Scrollbar>
          <Box mt={2}>
            <Box mx={2}>
              <Logo />
            </Box>
          </Box>
          <Divider
            sx={{
              mt: 1,
              mx: 2,
              background: colors.alpha.trueWhite[10]
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider sx={{ background: colors.alpha.trueWhite[10] }}
        />
        <Box p={2}>
          <Button
            href='/release-notes'
            variant='text'
            color='primary'
            size='small'
            sx={{ color: colors.alpha.trueWhite[70] }}
          >
            Release Notes
          </Button>
          <Button
            href='/contributing'
            variant='text'
            color='primary'
            size='small'
            sx={{ color: colors.alpha.trueWhite[70] }}
          >
            Contributing
          </Button>
        </Box>
      </SidebarWrapper>
      <Drawer
        // sx={{ boxShadow: `${config.sidebar.boxShadow}` }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant='temporary'
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? colors.alpha.white[100]
                : config.sidebar.background
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box mx={2}>
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: 3,
                mx: 2,
                background: colors.alpha.trueWhite[10]
              }}
            />
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  )
}

export default Sidebar;
