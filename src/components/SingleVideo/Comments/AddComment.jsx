import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const AddComment = () => {
  const [submit, setSubmit] = useState(false);

  const handleShowSubmit = bool => {
    setSubmit(bool);
  };

  return (
    <>
      <TextField
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="Add a public comment..."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        onClick={() => handleShowSubmit(true)}
      />
      {submit && (
        <div style={{ position: "absolute", left: "10px" }}>
          <Button style={{ backgroundColor: "#C3CBB4" }}>Submit</Button>
          <Button onClick={() => handleShowSubmit(false)}>Cancel</Button>
        </div>
      )}
    </>
  );
};

export default AddComment;
