//src/components/PostCard.tsx

import { Post } from '../redux/api';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostCard;