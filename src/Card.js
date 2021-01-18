import React from 'react';
import { Link, withRouter } from 'react-router-dom'
const shortenInfo = (content) => {
    if (content.length <= 20) {
        return content;
    }
    return content.slice(0, 20) + '...';
}
function Card(props) {
    return (
        <div className="col s12 m7">
            <div className="card">
                <Link to={`/post/${props.postInfo.id}`}>
                    <div className="card-image">
                        <img src={props.postInfo.image_url} height='450px' width='450px' />
                        <span className="card-title">{props.postInfo.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{shortenInfo(props.postInfo.content)}</p>
                    </div>
                    <div className="card-action">
                        <span>Author: {props.postInfo.author}</span>
                    </div>

                </Link>
            </div>
        </div>



    );
}

export default withRouter(Card);