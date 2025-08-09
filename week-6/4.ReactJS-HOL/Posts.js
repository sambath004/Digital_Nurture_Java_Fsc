import React from "react";
import Post from "./Post";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts() {
        const demoPosts = [
            new Post(1, "First Post", "This is the first post."),
            new Post(2, "Second Post", "This is the second post."),
            new Post(3, "Third Post", "This is the third post.")
        ];
        this.setState({ posts: demoPosts });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        const { posts, error } = this.state;
        if (error) {
            return <div style={{ color: "red" }}>Error: {error.message}</div>;
        }
        return (
            <div>
                <h2>Posts</h2>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    componentDidCatch(error, info) {
        this.setState({ error });
    }
}

export default Posts;
