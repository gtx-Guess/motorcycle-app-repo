import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { sendBinaryStringObjectToS3 } from '../utils/helpers';
import '../styles/moto-form.css';
import ErrorBubble from './ErrorBubble';
import Dropzone from './Dropzone';

const BASE_URL = import.meta.env.VITE_SERVER_URL;

const MotoForm = ({ props }) => {
    const toggleModal = props[0];
    const getMotoData = props[1];

    const [brandType, setBrandType] = useState(null);
    const [engineSize, setEngineSize] = useState(null);
    const [motoYear, setMotoYear] = useState(null);
    const [motoName, setMotoName] = useState(null);
    const [showError, setErrorState] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [file, setFiles] = useState(null);
    const [count, setCount] = useState(0);
    const timeoutTime = 2000;

    useEffect(() => {
        //console.log('Files got a new file');
        //console.log(file);
    }, [file]);

    async function motoFormSubmit (event) {
        event.preventDefault();
        if(!file){
            setErrorMessage('Have to provide a file for motorcycle creation!');
            setErrorState(true);
            setTimeout(() => {
                setErrorState(false);
            }, timeoutTime);
            return;
        };
        const formData = new FormData();
        formData.append('file', file, file.name);
        const blobFile = new Blob([file], { type: 'image/jpeg' });
        await sendBinaryStringObjectToS3(blobFile, file.name);
 
        if(brandType && engineSize && motoYear && motoName && file){
            const newMoto = { brand: brandType, cc: engineSize, year: motoYear, name: motoName, imageLink: file.name };
            try {
                const resp = await axios.post(`${BASE_URL}/createMoto`, newMoto);
                //console.log('Created new motorcycle, posted to supabase');
                getMotoData();
                setFiles(null);
                setCount(0);
            } catch (error) {
                //console.log(`POST FAILED, status code: ${resp.data.status_code}`);
                setFiles(null);
                setCount(0);
                setErrorMessage('Motorcycle was not created! Something went wrong');
                setErrorState(true);
                setTimeout(() => {
                    setErrorState(false);
                }, timeoutTime);
                return;
            }
        }else{
            if(!brandType || !engineSize || !motoYear || !motoName){
                setFiles(null);
                setCount(0);
                setErrorMessage('All fields have to be filled in!');
                setErrorState(true);
                setTimeout(() => {
                    setErrorState(false);
                }, timeoutTime);
            };
            if(!file){
                setFiles(null);
                setCount(0);
                setErrorMessage('You have to upload a picture in order to submit a motorcycle!');
                setErrorState(true);
                setTimeout(() => {
                    setErrorState(false);
                }, timeoutTime);
            }
            return;
        };
        document.getElementById('moto-form').reset();
        toggleModal();
    };

    const handleChange = (event) => {
        if(event.target.id === 'brand_type'){ setBrandType(event.target.value) };
        if(event.target.id === 'engine_size'){ setEngineSize(event.target.value) };
        if(event.target.id === 'moto_year'){ setMotoYear(event.target.value) };
        if(event.target.id === 'moto_name'){ setMotoName(event.target.value) };
    };

    return (
        <div id='moto-form-modal-div' className={'hide'}>
            <div id='moto-form-div' className={'moto-form'}>
                <form id='moto-form'>
                    <label htmlFor='brand_type'>Moto Brand:</label>
                    <input type="text" onChange={handleChange} id='brand_type' placeholder='please type brand...'/>
                    <label htmlFor='moto_name'>Moto Name:</label>
                    <input type="text" onChange={handleChange} id='moto_name' placeholder='please type moto name...'/>
                    <label htmlFor='engine_size'>Engine Size:</label>
                    <input type="number" onChange={handleChange} id='engine_size' placeholder='please type engine size in cc...'/>
                    <label htmlFor='moto_year'>Moto Year:</label>
                    <input type="number" onChange={handleChange} id='moto_year' placeholder='please type year...'/>
                    <input type="submit" value="Submit" onClick={motoFormSubmit}/>
                </form>
                <span className={"close"} onClick={() => (
                    toggleModal(true), setCount(0), setFiles(null)
                )}>&times;</span>
                {showError && <ErrorBubble key={'ErrorBubble-MotoForm'} text={errorMessage}/>}
                <div id='upload-box'>
                    <Dropzone key={'DropZone-motoForm'} props={[setFiles, count, setCount]}/>
                </div>
            </div>
        </div>
    );
};

export default MotoForm;