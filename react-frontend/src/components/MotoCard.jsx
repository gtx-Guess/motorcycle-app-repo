import axios from 'axios';
import { useState } from 'react';
import EditMoto from "./EditMoto";
import ErrorBubble from "./ErrorBubble";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
const BASE_URL = import.meta.env.VITE_SERVER_URL;

const MotoCard = ({ props }) => {
    const [showError, setErrorState] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [showClose, setShowClose] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const moto = props[0];
    const index = props[1];
    const getMotoData = props[2];
    const S3_BASE_URL = import.meta.env.VITE_S3_BASE_URL;

    const motoImageLink = S3_BASE_URL + moto.imageLink;
    const overLay = document.getElementById("overlay");


    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const resetMotoHtmlValues = (closeBtn=false) => {
        const brandSpan = document.getElementById(`${moto.id}-brand-value-span`);
        const updatedBrand = !brandSpan.querySelector("input").value ? moto.brand  : brandSpan.querySelector("input").value;
        brandSpan.innerHTML = updatedBrand;

        const nameSpan = document.getElementById(`${moto.id}-name-value-span`);
        const updatedName = !nameSpan.querySelector("input").value ? moto.name : nameSpan.querySelector("input").value;
        nameSpan.innerHTML = updatedName;

        const yearSpan = document.getElementById(`${moto.id}-year-value-span`);
        const updatedYear = !yearSpan.querySelector("input").value ? moto.year : yearSpan.querySelector("input").value;
        yearSpan.innerHTML = updatedYear;

        const ccSpan = document.getElementById(`${moto.id}-cc-value-span`);
        const updatedCC = !ccSpan.querySelector("input").value ? moto.cc : ccSpan.querySelector("input").value;
        ccSpan.innerHTML = updatedCC;

        if(closeBtn){
            setShowClose(false);
            const card = document.getElementById(`${moto.name}_${moto.id}_card`);
            card.classList.toggle('to-front');
    
            const gear = document.getElementById(`${moto.id}-update-gear`);
            gear.classList.toggle('hide-edit-btns');
    
            const updateButtonsDiv = card.querySelector('#edit-buttons-div');
            updateButtonsDiv.classList.toggle('hide-edit-btns');
            overLay.classList.toggle("hide");
            return;
        };
        
        return [updatedBrand, updatedName, updatedYear, updatedCC];
    };

    const handleUpdateMotoBtnClick = async (event) => {
        let reset = true;
        const [updatedBrand, updatedName, updatedYear, updatedCC] = resetMotoHtmlValues();

        const updatedMotoData = {
            "id": moto.id,
            "brand": updatedBrand,
            "name": updatedName,
            "year": parseInt(updatedYear),
            "cc": parseInt(updatedCC)
        };

        if(updatedMotoData.brand !== moto.brand){reset = false};
        if(updatedMotoData.name !== moto.name){reset = false};
        if(updatedMotoData.year !== moto.year){reset = false};
        if(updatedMotoData.cc !== moto.cc){reset = false};
        if(!reset){
            try {
                const resp = await axios.put(`${BASE_URL}/updateMoto`, updatedMotoData);
                //console.log(resp);
                getMotoData();
            } catch (error) {
                setErrorMessage('Motorcycle was not updated!');
                setErrorState(true);
                setTimeout(() => {
                    setErrorState(false);
                }, 3000);
            };
        };

        const card = document.getElementById(`${moto.name}_${moto.id}_card`);
        card.classList.toggle('to-front');

        const gear = document.getElementById(`${moto.id}-update-gear`);
        gear.classList.toggle('hide-edit-btns');

        const updateButtonsDiv = card.querySelector('#edit-buttons-div');
        updateButtonsDiv.classList.toggle('hide-edit-btns');
        overLay.classList.toggle("hide");
    };

    const handleDeleteMotoBtn = async (event) => {
        const listItem = document.getElementById(moto.id);
        const cardItem = document.getElementById(`${moto.name}_${moto.id}_card`);
        try {
            const resp = await axios.delete(`${BASE_URL}/deleteMoto/${moto.year}`);
            //console.log(resp);
            listItem.remove();
            cardItem.remove();
            overLay.classList.toggle("hide");
            const nextCard = document.getElementsByClassName('card')[0];
            nextCard.classList.remove('hide-card');
        } catch (error) {
            setErrorMessage('Motorcycle was not deleted!');
            setErrorState(true);
            setTimeout(() => {
                setErrorState(false);
            }, 3000);
        };
        return
    };

    return(
        <div className={index === 0 ? "card" : "card hide-card"} id={`${moto.name}_${moto.id}_card`}>
            <div className={"edit-top-div"}>
                <p className={'edit-moto-brand-p-tag'}><span className={"cardSpan"}>Brand:</span> <span id={`${moto.id}-brand-value-span`}>{moto.brand}</span></p>
                <EditMoto props={[moto, setShowClose]}/>
                { showClose &&  <FontAwesomeIcon id={"fa-x-btn"} className={"x-btn"} icon={faX} onClick={() => resetMotoHtmlValues(showClose)}/>}
            </div>
            <p><span className={"cardSpan"}>Name:</span> <span id={`${moto.id}-name-value-span`}>{moto.name}</span></p>
            <p><span className={"cardSpan"}>Year:</span> <span id={`${moto.id}-year-value-span`}>{moto.year}</span></p>
            <p><span className={"cardSpan"}>Engine:</span> <span id={`${moto.id}-cc-value-span`}>{moto.cc}</span> CC"s</p>
            <img src={motoImageLink} alt={moto.name}/>
            <div id={'edit-buttons-div'} className={"hide-edit-btns edit-buttons-div"}>
                <button className={"update-moto-btn"} onClick={handleUpdateMotoBtnClick}>Update</button>
                <button className={"delete-moto-btn"} onClick={handleDeleteMotoBtn}>Delete Moto</button>
            </div>
            {showError && <ErrorBubble key={'ErrorBubble-MotoForm'} text={errorMessage}/>}
        </div>
    );
};

export default MotoCard;