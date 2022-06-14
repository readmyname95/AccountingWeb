import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./ReciptInputStyle.css";

function ReciptInput() {
  const [imageChosen, setImageChosen] = useState();
  const [imagePreview, setImagePreview] = useState();
  const fileInputRef = useRef();
  const [fileName, setFileName] = useState();

  useEffect(() => {
    if (imageChosen) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(imageChosen);
    } else {
      setImagePreview(null);
    }
  }, [imageChosen]);

  return (
    <div>
      <form>
        <Box
          className="inputBox"
          type="image"
          sx={{ border: "1px dashed grey" }}
        >
          <img
            id="imageName"
            className="previewImage"
            src={imagePreview}
            resizemode="contain"
          />
        </Box>
      </form>
      <form>
        <br></br>
        <div>
          <Button
            variant="contained"
            size="small"
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            Choose File
          </Button>
          <div className="fileName"> {fileName}</div>
        </div>
        <input
          className="ImageInput"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          hidden
          onChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              setImageChosen(file);
              setFileName(file.name);
            } else {
              setImageChosen(null);
              setFileName(null);
            }
            console.log(fileName);
          }}
        ></input>
      </form>
    </div>
  );
}

export default ReciptInput;
