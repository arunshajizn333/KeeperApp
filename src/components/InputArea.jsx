import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function InputArea(props) {
  const[isExpanded,setExpanded]=useState(false)
  const [data, setData] = useState({
    Title: "",
    TextArea: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(data);
    setData({ Title: "", TextArea: "" });
  }

  function expand(){
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && 
         <input
          onChange={handleChange}
          name="Title"
          placeholder="Title"
          value={data.Title}
        />}
       
        <textarea
        onClick={expand}
          onChange={handleChange}
          name="TextArea"
          placeholder="Take a note..."
          rows={isExpanded ? 3:1}
          value={data.TextArea}
        />
        <Zoom in={isExpanded}>
        <Fab type="submit"><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
