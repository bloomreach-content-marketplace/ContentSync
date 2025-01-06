'use client'

import { Box, alpha } from '@mui/material';
import styled from '@emotion/styled'
import { colors } from '@/theme/schemes/BloomreachTheme';

const PageTitle = styled(Box)(
  () => `
    padding: 36px;
    margin-bottom: 36px;
    background: ${colors.alpha.white[100]};
    box-shadow: 0px 2px 4px -3px ${alpha(colors.alpha.black[100],0.1)},
          0px 5px 12px -4px ${alpha(colors.alpha.black[100],0.05)}
  `
);

const PageTitleWrapper = ({ children }) => {
  return (
    <PageTitle className='MuiPageTitle-wrapper'>
      {children}
    </PageTitle>
  );
};


export default PageTitleWrapper;
