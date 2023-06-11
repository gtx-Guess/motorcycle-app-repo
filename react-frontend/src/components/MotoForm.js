import axios from 'axios';
import React, { useState } from 'react';
import '../styles/moto-form.css';
import ErrorBubble from './ErrorBubble';
const BASE_URL = process.env.REACT_APP_SERVER_URL;

const MotoForm = ({ props }) => {
    const toggleModal = props[0];
    const motoSetter = props[1];
    const [brandType, setBrandType] = useState();
    const [engineSize, setEngineSize] = useState();
    const [motoYear, setMotoYear] = useState();
    const [motoName, setMotoName] = useState();
    const [showError, setErrorState] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    async function motoFormSubmit (event) {
        event.preventDefault();
        if(brandType && engineSize && motoYear && motoName){
            const newMoto = {brand: brandType, cc: engineSize, year: motoYear, name: motoName};
            const resp = await axios.post(`${BASE_URL}/createMoto`, newMoto);
            if(resp.data.status_code === 200){
                console.log('Created new motorcycle, posted to supabase');
                motoSetter(oldMotos=> [...oldMotos, newMoto]);
            }else{
                console.log(`POST FAILED, status code: ${resp.data.status_code}`);
                setErrorMessage('Motorcycle was not created! Something went wrong');
                setErrorState(true);
                setTimeout(() => {
                    setErrorState(false);
                }, 6000);
                return;
            };
        }else{
            if(!brandType || !engineSize || !motoYear || !motoName){
                setErrorMessage('All fields have to be filled in!');
                setErrorState(true);
                setTimeout(() => {
                    setErrorState(false);
                }, 6000);
            };
            return;
        };
        document.getElementById('moto-form').reset();
        toggleModal();
    };

    const handleBrandTypeChange = (event) => {
        if(event.target.id === 'brand_type'){ setBrandType(event.target.value) };
        if(event.target.id === 'engine_size'){ setEngineSize(event.target.value) };
        if(event.target.id === 'moto_year'){ setMotoYear(event.target.value) };
        if(event.target.id === 'moto_name'){ setMotoName(event.target.value) };
    };

    return (
        <div id='moto-form-modal-div' className={'hide-moto-modal'}>
            <div id='moto-form-div' className={'moto-form'}>
                <form id='moto-form'>
                    <label htmlFor='brand_type'>Moto Brand:</label>
                    <input onChange={handleBrandTypeChange} id='brand_type' placeholder='please type brand...'/>
                    <label htmlFor='moto_name'>Moto Name:</label>
                    <input onChange={handleBrandTypeChange} id='moto_name' placeholder='please type moto name...'/>
                    <label htmlFor='engine_size'>Engine Size:</label>
                    <input onChange={handleBrandTypeChange} id='engine_size' placeholder='please type engine size in cc...'/>
                    <label htmlFor='moto_year'>Moto Year:</label>
                    <input onChange={handleBrandTypeChange} id='moto_year' placeholder='please type year...'/>
                    <input type="submit" value="Submit" onClick={motoFormSubmit}/>
                </form>
                <span className={"close"} onClick={toggleModal}>&times;</span>
                {showError && <ErrorBubble text={errorMessage}/>}
            </div>
        </div>
    );
};

export default MotoForm;