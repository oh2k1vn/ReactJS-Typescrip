import React from "react";
import Level from "..";
import classes from "./Listlevel.module.css";

function Listlevel() {
  return (
    <div className={classes.listlevel}>
      <div className={classes.listlevelright}>
        <Level />
      </div>
    </div>
  );
}

export default Listlevel;
