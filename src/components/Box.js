import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Radio,
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
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  console.log({ state, value });
  console.log({ value });
  console.log({ error });

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
    formControl: {
      margin: theme.spacing(3),
    },
    buttonRadio: {
      margin: theme.spacing(1, 1, 0, 0),
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
                control={
                  <GreenCheckbox
                    checked={state.checkedG}
                    onChange={handleChange}
                    name="checkedG"
                  />
                }
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
      <form onSubmit={handleSubmit}>
        <FormControl
          component="fieldset"
          error={error}
          className={classes.formControl}
        >
          <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="The best!"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="The worst."
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.buttonRadio}
          >
            Check Answer
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default Box;
