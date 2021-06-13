import React from "react";
import {
  Grid,
  Paper,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import {
  makeStyles,
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Delete, KeyboardVoiceIcon, Send, SaveIcon } from "@material-ui/icons";
import { CloudUploadOutlined } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { purple, green } from "@material-ui/core/colors";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const Box = () => {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      "&:hover": {
        backgroundColor: purple[900],
      },
    },
  }))(Button);
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => (
    <Checkbox
      className={classes.favoriteButton}
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      name="checkedH"
      color="default"
      {...props}
    />
  ));
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#f7f7f7",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.primary,
    },
    button: {
      margin: theme.spacing(1),
    },
    cloudButtonIcon: {
      color: "#e7a6d9",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            xs=12
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              startIcon={<Delete />}
              endIcon={<Send />}
            ></Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            xs=12 sm=6
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              startIcon={<Delete />}
              endIcon={<Send />}
            ></Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            xs=12 sm=6
            <CloudUploadOutlined className={classes.cloudButtonIcon} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Custom CSS
            </ColorButton>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            xs=6 sm=3
            <FormGroup row>
              <FormControlLabel
                control={<GreenCheckbox />}
                label="Custom icon"
              />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Box;
