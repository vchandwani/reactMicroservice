import { useEffect, useState } from 'react';
import axios from 'axios';
import { CommentObj, ReqParam } from '../../types/';

const CommentList = ({ postId }: ReqParam): JSX.Element => {
  const [comments, setComments] = useState<Array<CommentObj>>([]);

  const fetchComment = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };
  useEffect(() => {
    fetchComment();
  }, []);
  const renderComments = Object.values(comments).map((comment: CommentObj) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderComments}</ul>;
};
export default CommentList;
