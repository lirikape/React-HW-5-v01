import { Link, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "pages/Home";
import { About } from "pages/About";
import Users from "pages/Users";
import NotFound from "pages/NotFound";
import DetailUser from "pages/DetailUser";
import UserPosts from "./UserPosts";

export const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<DetailUser />} >
          <Route path="about" element={<h3>wow</h3>} />
          <Route path="posts" element={<UserPosts/>} />
          </Route>
        </Route>
          <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  );
};
