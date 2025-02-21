import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка загрузки постов:", error);
                setLoading(false);
            });
    }, []);
    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Список постов</h1>
            <Link to="/">Назад к задачам</Link> {}

            {loading ? (
                <p>Загрузка постов...</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default PostList;
