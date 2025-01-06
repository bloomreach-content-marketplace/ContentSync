import { Scrollbars } from 'react-custom-scrollbars-2';
import { Box, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { colors, config } from '@/theme/schemes/BloomreachTheme';

export const Scrollbar = ({ children, ...rest }) => {
  const theme: ThemeOptions = useTheme();

  return (
    <Scrollbars
      autoHide
      universal
      renderThumbVertical={() => {
        return (
          <Box
            sx={{
              width: 5,
              background: `${colors.alpha.black[10]}`,
              borderRadius: `${config.general.borderRadiusLg}`,
              transition: `${theme.transitions.create(['background'])}`,

              '&:hover': {
                background: `${colors.alpha.black[30]}`
              }
            }}
          />
        );
      }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};
