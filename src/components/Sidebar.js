import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const showSidebar = useSelector((store) => store.app.isMenuOpen);

  if (!showSidebar) return;

  return (
    <div className="p-4 ">
      <Link to="/">
        <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
          <i className="ri-home-4-line text-xl"></i>Home
        </h2>
      </Link>

      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-smartphone-line text-xl"></i>Shorts
      </h2>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-history-line text-xl"></i>History
      </h2>

      <div className="h-[1.5px] w-full bg-neutral-200 my-3"></div>

      <h1 className="font-semibold mt-2">You</h1>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-user-line text-xl"></i>Your Channel
      </h2>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-video-line text-xl"></i>Your Videos
      </h2>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-thumb-up-line text-xl"></i>Liked Videos
      </h2>

      <div className="h-[1.5px] w-full bg-neutral-200 my-3"></div>

      <h1 className="font-semibold mt-2">Subscriptions</h1>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-music-line text-xl"></i>Music
      </h2>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-trophy-line text-xl"></i>Sports
      </h2>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-gamepad-line text-xl"></i>Gaming
      </h2>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-handbag-line text-xl"></i>Fashion & Beauty
      </h2>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-movie-2-line text-xl"></i>Movies
      </h2>
      <h2 className=" hover:bg-neutral-100 rounded-xl  cursor-pointer p-2 flex items-center gap-4">
        <i className="ri-shopping-bag-line text-xl"></i>Shopping
      </h2>
    </div>
  );
};

export default Sidebar;
