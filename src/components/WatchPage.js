import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(collapseMenu());
  }, []);

  return (
    <div className="flex w-full">
      <div className="flex flex-col my-3 ml-14">
        <div>
          <iframe
            className="  w-[67vw] h-[77vh] aspect-video rounded-xl"
            src={
              "https://www.youtube.com/embed/" +
              videoId +
              "?si=xv7BSDpIF2ehpqH-&autoplay=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <CommentsContainer />
      </div>

      <div>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
