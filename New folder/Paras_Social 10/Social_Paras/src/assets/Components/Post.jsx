import 'bootstrap/dist/css/bootstrap.css';
import styles from "./Post.module.css";
import { BsArchiveFill } from "react-icons/bs";
import { useContext } from 'react';
import Content from './store/Content';

function Post({ ele }) {
  const { delete1 } = useContext(Content);

  const handleDelete = () => {
    
      delete1(ele.Title);
    
  };

  return (
    <>
      <div className={`card ${styles.container}`} style={{ width: '18rem' }}>
        {delete1 && <span onClick={handleDelete} style={{ cursor: "pointer" }}><BsArchiveFill /></span>}

        <div className={`card-body`}>
          <h5 className="card-title">{ele.Title}</h5>
          <p className="card-text">{ele.content}</p>
          <span className='btn btn-primary'>{ele.Hashtags}</span>
        </div>
      </div>
    </>
  );
}

export default Post;
