import { createContext, useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
// import { useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostList = createContext({
    postList: [],
    fetching: false,
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    }
    else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    const [fetching, setFetching] = useState(false);


    const addPost = (post) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: post,
        });
    };

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts,
            }
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId,
            },
        });
    };

    useEffect(() => {
        setFetching(true);

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', { signal })
            .then((res) => res.json())
            .then((data) => {
                addInitialPosts(data.posts);
                setFetching(false);
            });

        return () => {
            console.log('Cleaning up UseEffect..');
            controller.abort();
        }
        // eslint-disable-next-line
    }, []);


    // const deletePost = useCallback(
    //         (postId) => {
    //             dispatchPostList({
    //                 type: 'DELETE_POST',
    //                 payload: {
    //                     postId,
    //                 },
    //             });
    //         },
    //         [dispatchPostList]
    //     );

    // eslint-disable-next-line
    // const arr = [5, 2, 6, 7, 4];
    // const sortedArr = useMemo(
    //     () => [...arr].sort((a, b) => a - b),
    //     [arr]
    // );
    // console.log("Original Array:", arr);
    // console.log("Sorted Array:", sortedArr);

    return (
        <PostList.Provider value={
            {
                postList,
                fetching,
                addPost,
                deletePost
            }
        }> {children}</PostList.Provider >);
}

PostListProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PostListProvider;