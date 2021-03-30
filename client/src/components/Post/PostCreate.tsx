import React, { useState } from 'react';
import axios from 'axios';

const PostCreate: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
    });
    setTitle('');
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
