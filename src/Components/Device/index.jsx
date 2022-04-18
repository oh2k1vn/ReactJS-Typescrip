import classes from "./Device.module.css";
import Listdevice from "./Listdevice";
function Device() {
  return (
    <div className={classes.listlevel}>
      <div className={classes.listlevelright}>
        <Listdevice />
      </div>
    </div>
  );
}

export default Device;
