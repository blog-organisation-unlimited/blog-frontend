import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import Comment from '../components/CommentCard'
import IconLike from '../images/thumbs-up.svg'
import IconDislike from '../images/thumbs-down.svg'
import { useParams } from "react-router";

// POST DETAILS view - Full text + comments

const PostDetail = () => {

  const { posts } = useContext( DataContext )
  const { id: postId } = useParams()

  const post = posts.find(post => post._id === postId) // grab post by ID

  // RENDER COMMENTS
  const jsxComments = post.comments.map( (comment, i) => (
    <Comment key={comment._id} comment={ comment } index={i} />
  ))

  // RENDER POST VIEW
  return ( <div className="post-view">
    <div className="post-details">
      <h2>{ post.title }</h2>
      <div className="post-author">
        By: {post.author}
      </div>
      <div className="post-date">
        {post.createdAt}
      </div>
      <div className="post-text">
        {post.text}
      </div>
    </div>
    { post.stats && (
      <div className="stats">      
        <span><img src={ IconLike } alt="like" />{ post.stats.likes }</span>  
        <span><img src={ IconDislike } alt="diss" />{ post.stats.dislikes } </span> 
      </div>
    ) }
    <div className="comments-count">
      { post.comments.length } Comments
    </div>
    <div className="comments">{ jsxComments }</div>
  </div> );
}
 
export default PostDetail;