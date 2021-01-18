import React from 'react';
import axios from 'axios';
class Post extends React.Component {
    state = {
        post: [],
    }

    componentDidMount() {
        axios.get(`https://jsonblob.com/api/jsonBlob/a7db6075-58e1-11eb-bd60-5bef0f35e980`)
            .then(res => {
                const post = res.data.posts.forEach((post) => {
                    let id = this.props.match.params.id;
                    if (post.id.toString() === id) {
                        this.setState({ post });
                    }

                });

            })
    }

    render() {

        return (this.state.post.length !== 0 ? (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mt5">
                            <img src={this.state.post.image_url} alt="nophoto" />
                        </div>
                        <div><h3>{this.state.post.title}</h3>
                            <h5>Author: {this.state.post.author}</h5>
                        </div>
                        <div><p>{this.state.post.content}</p></div>
                    </div>
                </div>

            </div>) : <div>No such post yet</div>);
    }
}
export default Post;