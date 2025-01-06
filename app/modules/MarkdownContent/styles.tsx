import { Container } from '@mui/material';
import styled from '@emotion/styled'
import { colors } from '@/theme/schemes/BloomreachTheme';

export const StyledMarkdownContainer = styled(Container)(
  () => `
  h4 {
    margin-bottom: 0;
    margin-top: .5rem;
  }
  a {
    color: ${colors.primary.main};
  }
  code {
    background-color: ${colors.primary.light};
    color: ${colors.alpha.trueWhite[100]};
  }
  ul {
    margin-top: 0;
    margin-bottom: 0;
  }
  p,
  ul,
  ol {
    code {
      background-color: ${colors.primary.lighter};
      color: ${colors.primary.main};
    }
  }
  hr {
    border-color: ${colors.primary.lighter};
  }
  table {
    border: 1px solid ${colors.alpha.black[30]};
    border-collapse: collapse;
    tr:nth-of-type(even) {
      background-color: ${colors.primary.lighter};
    }
    thead {
      text-align: left;
      border-bottom: 1px solid ${colors.alpha.black[30]};
    }
    th,
    td {
      border-right: 1px solid ${colors.alpha.black[30]};
      padding: 0.25rem 0.5rem;
    }
    code {
      background-color: transparent;
      color: ${colors.primary.main};
      padding: 0;
    }
  }
`
);
