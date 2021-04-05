import { CommentObj, CommentsObj } from '../../types/';

const CommentList = ({ comments }: CommentsObj): JSX.Element | null => {
  const renderComments = comments
    ? Object.values(comments).map((comment: CommentObj) => {
        return <li key={comment.id}>{comment.content}</li>;
      })
    : null;
  return <ul>{renderComments}</ul>;
};
export default CommentList;
