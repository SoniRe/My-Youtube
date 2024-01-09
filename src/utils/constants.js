export const list = [
  "All",
  "Gaming",
  "Music",
  "Wildlife",
  "Rivers",
  "Podcasts",
  "Live",
  "Recently Uploaded",
  "New To You",
  "Cats",
  "Dinosaurs",
  "Mixes",
  "Hot Wheels",
  "Oceans",
];

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "/complete/search?client=firefox&ds=yt&q=";
