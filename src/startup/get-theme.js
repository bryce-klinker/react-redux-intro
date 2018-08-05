import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

export function getTheme() {
  return createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      error: red,
    },
  });
}
