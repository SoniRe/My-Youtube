import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "./../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  dispatch(openMenu());

  return (
    <div className="w-[85vw]">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
