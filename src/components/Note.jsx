import React from "react";
import { FiTrash2 } from "react-icons/fi";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><FiTrash2 /></button>
    </div>
  );
}

export default Note;
