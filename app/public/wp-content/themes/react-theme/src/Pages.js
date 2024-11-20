// import { Component } from '@wordpress/element';

// class Pages extends Component {
//     state = {
//         pages: [],
//         isLoading: true,
//         error: null,
//     };

//     // WebSocket instance variable
//     ws = null;

//     componentDidMount() {
//         // Initial data fetch
//         this.fetchPages();

//         // Initialize WebSocket connection
//         this.ws = new WebSocket('http://localhost:10022/'); // Replace YOUR_PORT with your WebSocket port

//         // Event listener for receiving messages
//         this.ws.onmessage = (event) => {
//             const message = JSON.parse(event.data);
//             // Check if the message is about pages update
//             if (message.type === 'page_update') {
//                 // Re-fetch pages when an update event is received
//                 this.fetchPages();
//             }
//         };

//         // Error handling for WebSocket
//         this.ws.onerror = (error) => {
//             console.error("WebSocket Error:", error);
//         };
//     }

//     componentWillUnmount() {
//         // Close WebSocket connection on unmount
//         if (this.ws) {
//             this.ws.close();
//         }
//     }

//     fetchPages = () => {
//         fetch('http://localhost:10022/wp-json/wp/v2/pages')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Something went wrong while fetching pages');
//                 }
//                 return response.json();
//             })
//             .then(pages => this.setState({ pages, isLoading: false }))
//             .catch(error => this.setState({ error, isLoading: false }));
//     };

//     render() {
//         const { pages, isLoading, error } = this.state;

//         if (error) {
//             return <div>Error: {error.message}</div>;
//         }

//         if (isLoading) {
//             return <div>Loading...</div>;
//         }

//         return (
//             <div>
//                 {pages.map(page => (
//                     <article key={page.id}>
//                         <h2 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
//                         <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
//                     </article>
//                 ))}
//             </div>
//         );
//     }
// }

// export default Pages;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pages = () => {
    const { slug } = useParams(); // Get the slug from the URL
    const [page, setPage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (slug) {
            fetchPageBySlug(slug);
        }
    }, [slug]);

    const fetchPageBySlug = (slug) => {
        fetch(`http://localhost:10022/wp-json/wp/v2/pages?slug=${slug}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong while fetching the page');
                }
                return response.json();
            })
            .then((data) => {
                if (data.length > 0) {
                    setPage(data[0]); // The API returns an array
                } else {
                    throw new Error('Page not found');
                }
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <article>
            <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </article>
    );
};

export default Pages;
