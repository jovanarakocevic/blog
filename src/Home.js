import React from 'react';
import Card from './Card';
import axios from 'axios';
class Home extends React.Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        axios.get(`https://jsonblob.com/api/jsonBlob/a7db6075-58e1-11eb-bd60-5bef0f35e980`)
            .then(res => {
                const posts =res.data.posts;
                this.setState({ posts });
            })
    }
    render() {
        return (
            <div className="row" >

                {
                    this.state.posts.map((post) => {
                        return <Card key={post.id} postInfo={post}></Card>
                    })
                }
            </div>
        );
    }

}
export default Home;
