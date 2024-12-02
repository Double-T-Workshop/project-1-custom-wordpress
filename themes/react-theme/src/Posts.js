import { Component } from '@wordpress/element';

class Posts extends Component {
    state = {
        post: null,
        posts: [],
        isLoading: true,
        error: null,
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        if (id) {
            this.fetchPostById(id);
        } else {
            this.fetchPosts();
        }
    }

    fetchPosts = () => {
        fetch('http://localhost:10022/wp-json/wp/v2/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong while fetching posts');
                }
                return response.json();
            })
            .then((posts) => this.setState({ posts, isLoading: false }))
            .catch((error) => this.setState({ error, isLoading: false }));
    };

    fetchPostById = (id) => {
        fetch(`http://localhost:10022/wp-json/wp/v2/posts/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong while fetching the post');
                }
                return response.json();
            })
            .then((post) => this.setState({ post, isLoading: false }))
            .catch((error) => this.setState({ error, isLoading: false }));
    };

    render() {
        const { posts, post, isLoading, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (post) {
            return (
                <article>
                    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </article>
            );
        }

        return (
            <div>
                {posts.map((post) => (
                    <article key={post.id}>
                        <a href={`/posts/${post.id}`}>
                            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </a>
                    </article>
                ))}
            </div>
        );
    }
}

export default Posts;
