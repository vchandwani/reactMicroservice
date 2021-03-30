import { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from '../Comment/CommentCreate';
import CommentList from '../Comment/CommentList';
import { PostObj } from '../../types';

const PostList: React.FC = (): JSX.Element => {
  const [posts, setPosts] = useState<Array<PostObj>>([]);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const renderPosts = Object.values(posts).map((post: PostObj) => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
        <CommentList postId={post.id} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}
    </div>
  );
};
export default PostList;
