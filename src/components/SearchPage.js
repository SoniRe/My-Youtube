import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchVideo from "./SearchVideo";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const SearchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchTextParams] = useSearchParams();
  const searchQuery = searchTextParams.get("q");
  const dispatch = useDispatch();

  dispatch(openMenu());

  useEffect(() => {
    getSearchResults(searchQuery);
  }, [searchQuery]);

  const getSearchResults = async (searchQuery) => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=" +
        searchQuery +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API_SECOND_KEY
    );
    const json = await data.json();

    const promiseData = await json?.items?.map((info) => {
      return getDataAboutVideos(info.id.videoId);
    });

    const videosDetails = await Promise.all(promiseData);

    setVideos(videosDetails);
  };

  const getDataAboutVideos = async (videoId) => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        videoId +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API_SECOND_KEY
    );
    const json = await data.json();
    return json;
  };

  if (videos.length === 0) return;

  return (
    <div className="flex flex-col py-10 px-40 w-[85vw]">
      {videos.map(
        (video) =>
          video.items.length > 0 && (
            <Link key={video.items[0].id} to={"/watch?v=" + video.items[0].id}>
              <SearchVideo data={video} />
            </Link>
          )
      )}
    </div>
  );
};

export default SearchPage;
