import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ props }) => {
    const [success, setSuccess] = useState(false);
    const setFiles = props[0];
    const count = props[1];
    const setCount = props[2];
    const zoneType = props[3];
    const moto = props[4];

    const onDrop = useCallback((acceptedFile) => {
        setFiles(acceptedFile[0]);
        setCount(1);
        setTimeout(() => {
            setSuccess(true); 
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }, 2000);

    }, [setFiles, setCount]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept:{
            'image/*': []
        },
        maxFiles:1,
    });

    return (
        <form id={ zoneType === 'create-moto' ? 'add-moto-dropzone' : `${moto.id}-image-update-dropzone`} className={zoneType === 'create-moto' ? 'dropZoneForm' : 'dropzone-image-update'} >
            {/* {zoneType === 'update-moto' &&
                <div >
                    <p>what up what uppppp</p>
                </div>
            }
            {zoneType === 'create-moto' &&
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
            } */}
            <div {...getRootProps({
                className: 'input-area'
            })}>
                <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the motorcycle picture here...</p>
                    ) : (
                        <p style={{width: '60%'}}>Drag and drop the motorcycle picture here, or click to select file</p>
                    )}
            </div>
            <p>File Count: {count}</p>
            {success &&
                    <div id='success-message' className={'success-message'}>File was uploaded!</div>
            }
        </form>
    );
}

export default Dropzone;
