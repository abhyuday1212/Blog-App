import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// *-**--*-*-*--*-*-*--*-*-*-*-*-**--*--*-* 
import Navbar from "./components/navbar/Navbar";
import ProjectsHome from "./components/projectshome/ProjectsHome";
import NoMatch from "./components/nomatch/NoMatch";
import About from "./components/about/About";
import Login from "./components/account/Login";
import Profile from "./components/account/Profile";
import Test from "./components/jsx/test";
import CreatePost from "./components/create/CreatePost";
import DetailView from "./components/details/DetailView"; 
 


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Navbar />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false)

  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

     

        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<ProjectsHome />} />
        </Route>

        <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path='/create' element={<CreatePost />} />
        </Route>

  

        <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/details/:id' element={<DetailView />} />
        </Route>

        <Route path='/test' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/test" element={<Test />} />
        </Route>

        <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/about" element={<About />} />
        </Route>

        <Route path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
};

export default App;
