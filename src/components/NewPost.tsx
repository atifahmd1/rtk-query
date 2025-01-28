// src/components/NewPost.tsx

import { useState } from "react";
import { Post, useCreatePostMutation } from "../redux/api";



const NewPost: React.FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [createPost, { isLoading }] = useCreatePostMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const post: Post = {
            id: Math.floor(Math.random() * 100),
            title,
            body,
        }
        await createPost(post);
        setTitle('');
        setBody('');
    };

    return (
        <>
            <h4>Create a new post</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        placeholder="Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Create Post'}
                </button>
            </form>
        </>
    );
};

export default NewPost;