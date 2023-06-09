import { Routes , Route } from "react-router-dom";
import { Navbar, Home, CreatePost, PostDetail } from "./";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/post/:postid" element={<PostDetail/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
