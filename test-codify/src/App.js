import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FullPost from "./components/FullPost";
import Posts from "./components/Posts";
import StateContext from "./StateContext";



function App() {
  const [ posts , setPosts ] = useState([])

  return (
    <StateContext.Provider value={{ setPosts , posts}}>
      <Routes>
        <Route index element={<Posts/>}/>
        <Route path='/:post' element={<FullPost/>}/>
      </Routes>
    </StateContext.Provider>
  );
}

export default App;
