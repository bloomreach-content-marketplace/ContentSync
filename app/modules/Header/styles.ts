import styled from '@emotion/styled'
import { config, colors } from '@/theme/schemes/BloomreachTheme'
import {
  alpha,
  Box,
} from '@mui/material';

export const StyledHeaderWrapper = styled(Box)(() => `
  align-items: center;
  background-color: ${alpha(config.header.background, 1)};
  backdrop-filter: blur(3px);
  box-shadow:
    0px 2px 8px -3px ${alpha(colors.alpha.black[100], 0.2)},
    0px 5px 22px -4px ${alpha(colors.alpha.black[100], 0.1)};
  color: ${config.header.textColor};
  display: ${config.header.height != '0' ? 'flex' : 'none'};
  height: ${config.header.height};
  padding: 0 18px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 6;
  @media (min-width: 1200px) {
    left: ${config.sidebar.width};
    width: auto;
  }
`);
