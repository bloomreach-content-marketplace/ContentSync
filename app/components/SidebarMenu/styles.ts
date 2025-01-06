import { alpha, Box } from '@mui/material';
import styled from '@emotion/styled'
import { colors } from '@/theme/schemes/BloomreachTheme'

export const MenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      padding: 9px;
      & > .MuiList-root {
        padding: 0 0 9px;
      }
    }
    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      color: ${colors.alpha.trueWhite[50]};
      padding: 0 22.5px;
      line-height: 1.4;
    }
`
);

export const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: 28.8px;
        }

        .MuiButton-root {
          display: flex;
          color: ${colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: 10.8px 27px;

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${colors.alpha.trueWhite[30]};
            font-size: 20px;
            margin-right: 9px;
          }

          .MuiButton-endIcon {
            color: ${colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: 20px;
          }

          &.active,
          &:hover {
            background-color: ${alpha(colors.alpha.trueWhite[100], 0.06)};
            color: ${colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: 63px;
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: 9px 0;
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: 7.2px 27px;

              .MuiBadge-root {
                right: 28.8px;
              }

              &:before {
                content: ' ';
                background: ${colors.alpha.trueWhite[100]};
                opacity: 0;
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: 16.2px;
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);
