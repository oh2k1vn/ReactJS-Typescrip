import Listitem from "../../Listitem";
import Update from "../Update";
import classes from "./Updateaccount.module.css";
function Updateaccount() {
  return (
    <div className={classes.listaccount}>
      <Listitem />
      <div className={classes.listlevelright}>
        <Update />
      </div>
    </div>
  );
}

export default Updateaccount;
