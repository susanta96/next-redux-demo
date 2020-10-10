import React, {useState } from 'react'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from "ckeditor5-classic-plus";

const editor = () => {
  const [data, setData] = useState('');
  const onChange = (e) => {
    console.log(e);
    console.log(e.target.value);
  }
  return (
    <div>
      <CKEditor
          editor={ClassicEditor}
          data={data}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
          }}
          config={{
            simpleUpload: {
              // The URL that the images are uploaded to.
              uploadUrl: "https://ik.imagekit.io/awyxdnbjsr",
     
              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                "Access-Control-Allow-Origin": "true",
              }
            }
          }}
        />
    </div>
  )
}
export default editor;