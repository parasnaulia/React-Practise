import { useRef, useContext } from "react";
import Content from "./store/Content.jsx";

function CreatePost() {
  const { insert } = useContext(Content);
  let Title = useRef("");
  let Like = useRef("");
  let Hashtags = useRef("");
  let content = useRef("");

  function handler() {
    let obj1 = {
      Title: Title.current.value,
      Like: Like.current.value,
      Hashtags: Hashtags.current.value,
      content: content.current.value,
    };
   
    insert(obj1);
    
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="WhatsUp Brother"
          ref={Title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
         Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={content}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Hashtags
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={Hashtags}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Likes
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          ref={Like}
        ></textarea>
      </div>

      <button onClick={handler}>Add Post</button>
    </>
  );
}

export default CreatePost;
