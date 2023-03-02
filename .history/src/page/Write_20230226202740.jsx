import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className='container mx-auto flex p-10'>
      <div className=''>
      <input type="text" placeholder='Title'/>
      <div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />;
      </div>
      </div>
      
      <div>
        <div>item1</div>
        <div>item2</div>
      </div>
    </div>
  )
}
