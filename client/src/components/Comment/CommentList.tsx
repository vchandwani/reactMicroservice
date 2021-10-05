import { CommentObj, CommentsObj } from '../../types/';

const CommentList = ({ comments }: CommentsObj): JSX.Element | null => {
  const renderComments = comments
    ? Object.values(comments).map((comment: CommentObj) => {
        let content: string | undefined;

        if (comment.status === 'approved') {
          content = comment.content;
        }

        if (comment.status === 'pending') {
          content = 'This comment is awaiting moderation';
        }

        if (comment.status === 'rejected') {
          content = 'This comment has been rejected';
        }
        return <li key={comment.id}>{content}</li>;
      })
    : null;
  return <ul>{renderComments}</ul>;
};
export default CommentList;
