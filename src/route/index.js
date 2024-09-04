import Home from "../pages/Home/Home";
import Library from "../pages/Library/Library";
import BXH from "../pages/BXH";
import createPlaylist from "../pages/createPlaylist";
import radio from "../pages/radio";
import top100 from "../pages/top100";
import topicAndGenre from "../pages/topicAndGenre";
import zingchart from "../pages/zingchart";

//public Route
const publicRoute = [
    { path: "/", page: Home, layout: null },
    { path: "/library", page: Library, layout: null },
    { path: "/bxh", page: BXH, layout: null },
    { path: "/createPlaylist", page: createPlaylist, layout: null },
    { path: "/radio", page: radio, layout: null },
    { path: "/top100", page: top100, layout: null },
    { path: "/topicandgenre", page: topicAndGenre, layout: null },
    { path: "/zingchart", page: zingchart, layout: null },
];

export default publicRoute;