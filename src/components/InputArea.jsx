import React, { useState } from "react";

function InputArea(props) {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="Title"
          placeholder="Title"
          value={data.Title}
        />
        <textarea
          onChange={handleChange}
          name="TextArea"
          placeholder="Take a note..."
          rows="3"
          value={data.TextArea}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default InputArea;
