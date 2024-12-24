import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "pages/Home";
import { About } from "pages/About";
import Users from "pages/Users";
import NotFound from "pages/NotFound";
import DetailUser from "pages/DetailUser";
import UserPosts from "./UserPosts";
import Register from "pages/Register";
import { useContext } from "react";
import { UserContext } from "context/UserProvider";

export const App = () => {
  const {isLoggedIn}=useContext(UserContext)
  return (
    <>
    {isLoggedIn ? (

<Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/register" element={<Register />} />
  <Route path="/users" element={<Users />} />
  <Route path="/users/:userId" element={isLoggedIn ?<DetailUser />: <Navigate to='/register'/>} >
  <Route path="about" element={<h3>wow</h3>} />
  <Route path="posts" element={<UserPosts/>} />
  </Route>
</Route>
  <Route path="*" element={<NotFound />} />

</Routes>

    ) : (
      <Routes>
        
          <Route path="/register" element={<Register />} />
      
          <Route path="*" element={<Navigate to='/register'/>} />

      </Routes>

    )}

     

    </>
  );
};
