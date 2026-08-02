import { useContext } from 'react';
import Post from './Post';
import { PostList as PostListData } from '../store/post-list-store';
import WelcomeMessage from './WelcomeMessage';

const PostList = () => {
    const { postList } = useContext(PostListData);

    const handleGetPostsClick = () => {
        console.log('Get Posts button clicked');
    }

    return (
        <>
            {postList.length === 0 && (
                <WelcomeMessage onGetPostsClick={handleGetPostsClick} />)}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
}

export default PostList;