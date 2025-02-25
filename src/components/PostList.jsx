import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../store/postSlice";
const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(fetchPosts()); 
    }, [dispatch]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Список постов</h1>
            <Link to="/">Назад к задачам</Link>

            {loading ? (
                <p>Загрузка постов...</p>
            ) : error ? (
                <p>Ошибка загрузки постов: {error}</p>
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