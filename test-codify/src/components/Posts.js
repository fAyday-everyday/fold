import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import StateContext from "../StateContext";
import './Posts.css'


export default function Posts() {
    const{ setPosts, posts } = useContext(StateContext);

    const FetchPosts = async () => {
        const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
        const result = await response.json()
        setPosts(result)
    }

    useEffect(() => {
        if(!posts.length) {
            FetchPosts()
        } 
    }, [])

    return (
        <div className="cont">
            <div className="Cards">
                {posts.map((post) => {
                    return (
                        <Link to={`/${post.split(' ').join('-')}`} className="card" key={post}>
                            <h4>{post.split('.')[0]}</h4>
                        </Link>
                    )
                })}
            </div>
            <button className="next" onClick={() => FetchPosts()}>next</button>
        </div>
    )
}