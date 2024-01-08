import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapseMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(collapseMenu());
  }, []);

  return (
    <div>
      <iframe
        className=" my-3 mx-14 w-[67vw] h-[77vh] aspect-video rounded-xl"
        src={
          "https://www.youtube.com/embed/" + videoId + "?si=xv7BSDpIF2ehpqH-"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default WatchPage;
