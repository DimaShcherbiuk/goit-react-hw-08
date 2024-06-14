import { PulseLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <PulseLoader
        color="#4fa94d"
        cssOverride={null}
        size={15}
        speedMultiplier={0.7}
      />
    </div>
  );
};

export default Loader;
