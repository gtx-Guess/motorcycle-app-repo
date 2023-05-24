import axios from 'axios';
import React, { useState } from 'react';
import '../styles/moto-form.css';

const MotoForm = ({ props }) => {
    const toggleModal = props[0];
    const [brandType, setBrandType] = useState('Honda');
    async function formSubmit (event) {
        event.preventDefault();
        const requestBody = {brand_type: brandType};
        const resp = await axios.post('http://localhost:8000/submit', requestBody);

        if(resp.status === 200){
            console.log('Form Submit successfully');
        }else{
            console.log(`Form didnt go through, status code: ${resp.status}`);
        };
    };

    const handleBrandTypeChange = (event) => {
        setBrandType(event.target.value);
    };

    return (
        <div id='moto-form-modal-div' className='hide-moto-modal'>
            <div id='moto-form-div' className='moto-form'>
                <form id='moto-form'>
                    <label htmlFor="brand_type">Brand:</label>
                    <input id='brand_type' placeholder='please type brand...'/>
                    <label htmlFor='engine-size'>Engine Size:</label>
                    <input id='engine-size' placeholder='please type engine size in cc...'/>
                    <label htmlFor='moto-year'>Year:</label>
                    <input id='moto-year' placeholder='please type year...'/>
                    <input type="submit" value="Submit" onClick={formSubmit}/>
                </form>
                <span className="close" onClick={toggleModal}>&times;</span>
            </div>
            <div className='attachment-box'>drop picture here</div>
        </div>
    );
};

export default MotoForm;