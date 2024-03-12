import { useContext } from "react";
import Post from "./Post";
import Content from "./store/Content.jsx";


function PostList() {
  let { state } = useContext(Content);

  return (
    <div>
      {state.map((ele, index) => (
        <Post key={index} ele={ele} />
      ))}
    </div>
  );
}

export default PostList;
