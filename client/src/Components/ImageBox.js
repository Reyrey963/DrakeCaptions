import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

const ImageBox = (props) => {

    const onDrop = useCallback(acceptedFiles => {
        console.log("Got Image");
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