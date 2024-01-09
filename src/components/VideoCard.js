const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  let viewCount;
  if (statistics.viewCount >= 1000000) {
    viewCount = (statistics.viewCount / 1000000).toFixed(1) + "M";
  } else if (statistics.viewCount >= 1000) {
    viewCount = (statistics.viewCount / 1000).toFixed(1) + "K";
  } else {
    viewCount = statistics.viewCount;
  }

  return (
    <div className="w-[19vw] cursor-pointer">
      <img
        className="h-[22vh] w-full object-cover rounded-xl"
        src={thumbnails.standard.url}
        alt="thumbnail"
      />
      <div className="mt-2">
        <h1 className="text-base font-semibold">{title}</h1>
        <h2 className="text-sm">{channelTitle}</h2>
        <h3 className="text-sm">{viewCount} views</h3>
      </div>
    </div>
  );
};

export const BlueBorderVideoCard = ({ info }) => {
  return (
    <div className="border border-blue-400 bg-red-200">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
