import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div>
      <div>Content
      <input type="text" placeholder='Title'/>
      <div>
      return <ReactQuill theme="snow" value={value} onChange={setValue} />;
      </div>
      </div>
      
      <div>
        <div>item1</div>
        <div>item2</div>
      </div>
    </div>
  )
}
