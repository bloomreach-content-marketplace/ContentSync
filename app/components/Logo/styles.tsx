import styled from '@emotion/styled'
import Link from 'next/link'

import {
  Tooltip,
  tooltipClasses,
} from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { colors, config } from '@/theme/schemes/BloomreachTheme';

interface LogoTooltipProps {
  title: string;
  arrow: boolean;
  className: string;
}

export const StyledLogoWrapper = styled(Link)(
  (theme: ThemeOptions) => `
      color: ${colors.primary.main};
      display: flex;
      text-decoration: none;
      width: 153px;
      margin: 0;
      font-weight: 700;
    .cls-1{fill:#ffffff;}
    .cls-2{fill:#ffd500;}
    .cls-3{fill:#002840;}
`);

export const StyledLogoTooltipWrapper = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} title='logo'><></></Tooltip>
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: colors.alpha.trueWhite[100],
    color: colors.alpha.trueWhite[100],
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: config.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: colors.alpha.trueWhite[100]
  }
}));
