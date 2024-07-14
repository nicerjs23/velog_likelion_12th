import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/postDetailPage";

const router = createBrowserRouter([
  {
    path: "/", //앱을 렌더링한다? 
    element: <App />,
    children: [{ path: "/", element: <HomePage /> },
      { path: "detail/:postId", element: <PostDetailPage/> }
    ],
  },
]);

export default router;
