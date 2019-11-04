import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  textField: {
    margin: 8
  },
  textBlack: {
    color: "#000000"
  },
  textWhite: {
    color: "#fff"
  },
  buttons: {
    float: "right"
  },
  submitButton: {
    backgroundColor: "#3EA6FF",
    "&:hover": {
      backgroundColor: "#3EA6FF"
    }
  },
  disabledButton: {
    backgroundColor: "#717171",
    "&:hover": {
      backgroundColor: "#717171"
    }
  }
}));

const AddComment = () => {
  const classes = useStyles();

  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState("");

  const handleOnChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    console.log("input", input);
    setInput("");
    setSubmit(false);
  };

  React.useEffect(() => {}, []);

  const handleShowSubmit = bool => {
    setSubmit(bool);
    setInput("");
  };

  return (
    <>
      <TextField
        id="standard-full-width"
        placeholder="Add a public comment..."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          className: classes.textWhite
        }}
        onClick={() => handleShowSubmit(true)}
        classes={{
          root: clsx(classes.textField, classes.textWhite)
        }}
        onChange={handleOnChange}
        value={input}
      />

      {submit && (
        <div className={classes.buttons}>
          <Button
            onClick={() => handleShowSubmit(false)}
            className={classes.textWhite}
          >
            Cancel
          </Button>
          <Button
            classes={{
              root: clsx(
                input.length > 0 && classes.submitButton,
                !(input.length > 0) && classes.disabledButton
              ),
              label: clsx(classes.textBlack)
            }}
            onClick={handleSubmit}
            disabled={!input.length > 0}
          >
            COMMENT
          </Button>
        </div>
      )}
    </>
  );
};

export default AddComment;
