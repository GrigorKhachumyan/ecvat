import React from "react";
import "../tools.css";

function PhotoTools(props) {

  return (
    <div className="ToolsClick">
      <input type="file" onChange={(e)=>props.changePhoto(e)} className="file"/>
    </div>
  );
}

export default PhotoTools;
