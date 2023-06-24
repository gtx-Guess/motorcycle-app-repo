import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import '../styles/dropzone.css'

const Dropzone = ({ setFiles, count, setCount }) => {
    const [success, setSuccess] = useState(false);

    const onDrop = useCallback((acceptedFile) => {
        setFiles(acceptedFile[0]);
        setCount(1);
        setTimeout(() => {
            setSuccess(true); 
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }, 2000);

    }, [setCount, setFiles]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept:{
            'image/*': []
        },
        maxFiles:1,
    });

    return (
        <form className={'dropZoneForm'}>
            <div {...getRootProps({
                className: 'input-area'
            })}>
                <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the motorcycle picture here...</p>
                    ) : (
                        <p>Drag and drop the motorcycle picture here, or click to select file</p>
                    )}
            </div>
            <p>File Count: {count}</p>
            {success &&
                    <div id='success-message'>File was uploaded!</div>
            }
        </form>
    );
}

export default Dropzone;
