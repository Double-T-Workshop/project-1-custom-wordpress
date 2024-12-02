import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Pages = () => {
    const location = useLocation(); // Get current location

    console.log(location); // Log the current location for debugging


    const slug = location.pathname.split("/").pop(); 
    const [page, setPage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(slug);
    

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
                    setPage(data[0]); 
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