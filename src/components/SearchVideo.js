const SearchVideo = ({ data }) => {
  const { items } = data;
  const [item] = items;
  const { statistics } = item;

  let viewCount;
  if (statistics.viewCount >= 1000000) {
    viewCount = (statistics.viewCount / 1000000).toFixed(1) + "M";
  } else if (statistics.viewCount >= 1000) {
    viewCount = (statistics.viewCount / 1000).toFixed(1) + "K";
  } else {
    viewCount = statistics.viewCount;
  }

  return (
    <div className="grid grid-cols-3 gap-4 pt-5 cursor-pointer">
      <img
        className="col-span-1 w-[22vw] h-[24vh] object-cover rounded-xl"
        src={item.snippet.thumbnails.medium.url}
        alt=""
      />

      <div className="mx-5 col-span-2">
        <h1 className="text-lg ">{item.snippet.title}</h1>
        <h2>{viewCount} views</h2>
        <h2 className="mt-3">{item.snippet.channelTitle}</h2>
      </div>
    </div>
  );
};

export default SearchVideo;
