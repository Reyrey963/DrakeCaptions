import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import Axios from 'axios';

const ImageBox = (props) => {

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles[0].arrayBuffer()
            .then(data => {
                const image = Buffer.from(data).toString('base64');
                Axios.post('http://localhost:8000/api/vision/getlabels', {image: image})
                    .then(res =>{
                        console.log(res.data);
                    })
                    .catch(err =>{
                        console.log(err);
                    })
            })
        
      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return ( 
        <div className="imageBox" {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
     );
}
 
export default ImageBox;