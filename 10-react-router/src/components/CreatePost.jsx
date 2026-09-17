import { Form, useActionData, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
    const post = useActionData();
    const navigate = useNavigate();
    const { addPost } = useContext(PostList);

    useEffect(() => {
        if (post) {
            addPost(post);
            navigate("/");
        }
        // eslint-disable-next-line
    }, [post]);

    return (
        <Form method="POST" className="create-post">

            <div className="mb-3">
                <label htmlFor="userId" className="form-label">
                    Enter your User Id here
                </label>

                <input
                    type="text"
                    name="userId"
                    className="form-control"
                    id="userId"
                    placeholder="Your User Id"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Post Title
                </label>

                <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                    placeholder="How are you feeling today..."
                />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label">
                    Post Content
                </label>

                <textarea
                    name="body"
                    rows="4"
                    className="form-control"
                    id="body"
                    placeholder="Tell us more about it..."
                />
            </div>

            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">
                    Number of Reactions
                </label>

                <input
                    type="text"
                    name="reactions"
                    className="form-control"
                    id="reactions"
                    placeholder="How many people reacted to this post"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="dislikes" className="form-label">
                    Number of Dislikes
                </label>

                <input
                    type="text"
                    name="dislikes"
                    className="form-control"
                    id="dislikes"
                    placeholder="How many people disliked this post?"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="tags" className="form-label">
                    Enter your hashtags here
                </label>

                <input
                    type="text"
                    name="tags"
                    className="form-control"
                    id="tags"
                    placeholder="Please enter tags using space"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Post
            </button>

        </Form>
    );
};

// eslint-disable-next-line
export async function createPostAction(data) {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    const likes = Number(postData.reactions);
    const dislikes = Number(postData.dislikes);
    postData.userId = Number(postData.userId);
    postData.reactions = {
        likes: likes,
        dislikes: dislikes,
    };
    delete postData.dislikes;
    postData.tags = postData.tags.split(" ");
    console.log("SENDING:", postData);
    const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    });
    const post = await response.json();
    post.reactions = {
        likes: likes,
        dislikes: dislikes,
    };
    console.log("CREATED POST:", post);
    return post;
}

export default CreatePost;