import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
    const loadedPosts = useLoaderData();
    const { postList } = useContext(PostListData);

    const allPosts = [...postList, ...loadedPosts];

    return (
        <>
            {allPosts.length === 0 && <WelcomeMessage />}

            {allPosts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

// eslint-disable-next-line
export const postLoader = () => {
    return fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
            return data.posts;
        });
};

export default PostList;