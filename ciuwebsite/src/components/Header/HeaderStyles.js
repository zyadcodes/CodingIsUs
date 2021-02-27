// This is going to set the styles that are non-CSS for the Header component
import { makeStyles } from "@material-ui/core/styles";
import colors from "../../config/colors";

// Sets the correct styles for the material UI component "Tabs"
const tabsUseStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.white,
    height: '10vh',
    minHeight: '65px',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignSelf: "flex-end",
  },
  indicator: {
    backgroundColor: colors.blue,
    height: '7.5px'
  },
}));

const tabUseStyles = makeStyles((theme) => ({
  root: {
    width: '25vw'
  }
}))

export { tabsUseStyles, tabUseStyles };
