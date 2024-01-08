import { useDispatch } from "react-redux";
import headerLogo from "./../assets/header-logo.png";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

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

      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          className="text-sm border-neutral-200 py-2 px-4 border-2 focus:outline-blue-400 rounded-l-full w-[40vw]"
        />
        <i className=" bg-neutral-100 cursor-pointer text-base ri-search-line border-l-0 border-neutral-200 px-4 py-2 border-2 rounded-r-full"></i>
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
