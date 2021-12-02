import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditPost = ({ postObj, updateData }) => {
  const [text, setText] = useState(postObj.text);
  const [image, setImage] = useState("");

  const handleChangeImage = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }

      reader.readAsDataURL(e.target.files[0]);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newobj = {
      text,
      image,
    };
    updateData(postObj.id, newobj);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <TextField
            type="text"
            id="text"
            variant="standard"
            onChange={(e) => setText(e.target.value)}
            value={text}
            label="Enter Text"
          />
        </div>
        <div>
          <label htmlFor="picture-file">
            <Button variant="contained" component="span">
              <input
                accept="image/*"
                id="picture-file"
                variant="outlined"
                name="picture"
                type="file"
                size="small"
                value={image}
                onChange={(e) => handleChangeImage(e)}
              />
            </Button>
          </label>
        </div>
        <div>
          <Button type="submit" variant="contained" className="my-2">
            submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
