import { useDispatch } from "react-redux";
import headerLogo from "./../assets/header-logo.png";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Make an API Call after every key press
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
    // but if difference between 2 API call is < 200ms
    // decline the API call

    /*
    key -i
    - render the component
    - useEffect()
    - start timer => make api call after 200 ms

    key - ip
    - destroy the component(useEffect return method)
    - render the component
    - useEffect()
    - start timer => make api call after 200 ms

    */
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSearchSuggestion(json[1]);
    // console.log(json[1]);
  };

  const handleSidebarMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="my-4 mx-2 flex justify-between">
      <div className="flex items-center gap-2">
        <i
          onClick={handleSidebarMenu}
          className="ri-menu-line text-xl cursor-pointer hover:bg-neutral-100 py-2 px-3 rounded-full"
        ></i>

        <img
          className="w-24 cursor-pointer"
          src={headerLogo}
          alt="youtube header"
        />
      </div>

      <div className="flex relative">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="text-sm border-neutral-200 py-2 px-4 border-2 focus:outline-blue-400 rounded-l-full w-[40vw]"
        />
        <i className=" bg-neutral-100 cursor-pointer text-base ri-search-line border-l-0 border-neutral-200 px-4 py-2 border-2 rounded-r-full"></i>

        <div className="bg-white absolute  top-12 w-[40vw] rounded-lg overflow-hidden shadow-inner">
          {searchSuggestion.map((suggestion) => {
            return (
              <h2 className="py-3 px-4 hover:bg-neutral-100 cursor-default">
                <i class="ri-search-line mr-3"></i> {suggestion}
              </h2>
            );
          })}
        </div>
      </div>

      <div>
        <img
          className=" w-8 mr-4 rounded-full cursor-pointer"
          src="https://preview.redd.it/high-resolution-remakes-of-the-old-default-youtube-avatar-v0-bgwxf7bec4ob1.png?width=640&crop=smart&auto=webp&s=99d5fec405e0c7fc05f94c1e1754f7dc29ccadbd"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
