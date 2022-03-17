import { useNavigate, useParams } from "react-router-dom";
import './Posts.css'


function FullPost() {
    const { post } = useParams();
    const back = useNavigate();

    return (
        <section>
            <div className="FullPost">
                <p>{post.split('-').join(' ')}</p>
            </div>
            <button className="back" onClick={() => back(-1)} >back</button>
        </section>
    )
}

export default FullPost;