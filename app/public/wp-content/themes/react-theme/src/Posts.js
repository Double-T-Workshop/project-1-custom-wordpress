import { Component } from '@wordpress/element';

class Posts extends Component {
    state = {
        posts: [],
        isLoading: true,
        error: null,
    };

    // WebSocket instance variable
    ws = null;

    componentDidMount() {
        // Initial data fetch
        this.fetchPosts();

        // Initialize WebSocket connection
        this.ws = new WebSocket('http://localhost:10022/'); // Replace YOUR_PORT with your WebSocket port

        // Event listener for receiving messages
        this.ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            // Check if the message is about posts update
            if (message.type === 'post_update') {
                // Re-fetch posts when an update event is received
                this.fetchPosts();
            }
        };

        // Error handling for WebSocket
        this.ws.onerror = (error) => {
            console.error("WebSocket Error:", error);
        };
    }

    componentWillUnmount() {
        // Close WebSocket connection on unmount
        if (this.ws) {
            this.ws.close();
        }
    }

    fetchPosts = () => {
        fetch('http://localhost:10022/wp-json/wp/v2/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong while fetching posts');
                }
                return response.json();
            })
            .then(posts => this.setState({ posts, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    };

    render() {
        const { posts, isLoading, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {posts.map(post => (
                    <article key={post.id}>
                        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </article>
                ))}
            </div>
        );
    }
}

export default Posts;
