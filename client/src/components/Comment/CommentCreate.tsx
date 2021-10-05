import React, { useState } from 'react';
import axios from 'axios';
import { ReqParam } from '../../types';

const CommentCreate = ({ postId }: ReqParam): JSX.Element => {
  const [content, setContent] = useState<string>('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
