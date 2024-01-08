import Button from "./Button";
import { list } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btnName) => {
        return <Button key={btnName} name={btnName} />;
      })}
    </div>
  );
};

export default ButtonList;
