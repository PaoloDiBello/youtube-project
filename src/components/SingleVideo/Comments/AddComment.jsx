import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    margin: 8
  },
  buttons: {
    float: "right"
  },
  submitButton: {
    backgroundColor: "#3EA6FF"
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
  };

  React.useEffect(() => {}, []);

  const handleShowSubmit = bool => {
    setSubmit(bool);
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
        onClick={() => handleShowSubmit(true)}
        className={classes.textField}
        onChange={handleOnChange}
        value={input}
      />
      {submit && (
        <div className={classes.buttons}>
          <Button
            className={classes.submitButton}
            onClick={handleSubmit}
            disabled={input.length > 0}
          >
            Submit
          </Button>
          <Button onClick={() => handleShowSubmit(false)}>Cancel</Button>
        </div>
      )}
    </>
  );
};

export default AddComment;
