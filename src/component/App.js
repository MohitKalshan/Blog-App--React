import { Routes , Route } from "react-router-dom";
import { Navbar, Home, CreatePost, PostDetail } from "./";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" Component={<Home/>} />
        <Route exact path="/post/:postid" Component={<PostDetail/>} />
        <Route exact path="/create-post" Component={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
