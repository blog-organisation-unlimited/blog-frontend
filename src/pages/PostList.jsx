import { useContext } from "react";
import Post from "../components/PostCard";
import { DataContext } from '../contexts/DataProvider'

const PostList = () => {

  const { posts } = useContext( DataContext )

  //  render list of Posts
  const jsxPosts = posts.map((post, i) => (
    <Post key={post._id} post={post} index={i} />
  ))
  
  return ( <div className="posts">{ jsxPosts }</div> );
}
 
export default PostList;