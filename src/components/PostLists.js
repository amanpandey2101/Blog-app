import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import PostItem from "./PostItem"

const PostLists = () =>{
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.posts);
    const loading = useSelector((state)=> state.loading);
    const error = useSelector((state)=>state.error);

    useEffect(()=>{
        dispatch(fetchPosts());   
    },[dispatch]);

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div> Error: {error}</div>
    }
    return(
        <div>
            <h2>Blog Posts</h2>
            {posts.map((post)=> (
                <PostItem key = {post.id} post={post}/>
            ))}
        </div>
    )
}
export default PostLists;