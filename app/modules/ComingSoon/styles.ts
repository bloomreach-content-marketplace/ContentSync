import {
  Box,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled'

export const MainContent = styled(Box)(() => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

export const TopWrapper = styled(Box)(() => `
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 54px;
`
);

export const TypographyH1 = styled(Typography)(() => `
  font-size: 75px;
`
);
