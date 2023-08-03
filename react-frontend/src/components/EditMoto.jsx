import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const EditMoto = ({ props }) => {
    const moto = props[0];
    const setShowClose = props[1];
    const setShowImageDropzone = props[2];

    const handleGearClick = (event) => {
        setShowClose(true);
        const card = document.getElementById(`${moto.name}_${moto.id}_card`);
        card.classList.add('to-front');
        const overLay = document.getElementById('overlay');
        overLay.classList.remove('hide');
        const gear = document.getElementById(`${moto.id}-update-gear`);
        gear.classList.add('hide-edit-item');
        const updateButtonsDiv = card.querySelector('#edit-buttons-div');
        updateButtonsDiv.classList.remove('hide-edit-item');
        const brandSpan = document.getElementById(`${moto.id}-brand-value-span`);
        const nameSpan = document.getElementById(`${moto.id}-name-value-span`);
        const yearSpan = document.getElementById(`${moto.id}-year-value-span`);
        const ccSpan = document.getElementById(`${moto.id}-cc-value-span`);

        //image stuff
        const img = document.getElementById(`${moto.id}-image`);
        img.classList.add('hide-edit-item');
        setShowImageDropzone(true);
        //image stuff end

        let inputs = [];
        for(let i = 0; i < 4; i++){
            const input = document.createElement('input');
            input.type = i < 2 ? 'text': 'number';
            input.placeholder = 'Current: ';
            input.style.width = '170px';
            input.style.marginLeft = i === 0 ? '20px' : i === 1 ? '20px' : i === 2 ? '32px' : '9px';
            input.placeholder += i === 0 ? brandSpan.innerHTML : i === 1 ? nameSpan.innerHTML : i === 2 ? yearSpan.innerHTML : ccSpan.innerHTML;
            inputs.push(input);
        };

        brandSpan.innerHTML = '';
        brandSpan.appendChild(inputs[0]);

        nameSpan.innerHTML = '';
        nameSpan.appendChild(inputs[1]);

        yearSpan.innerHTML = '';
        yearSpan.appendChild(inputs[2]);

        ccSpan.innerHTML = '';
        ccSpan.appendChild(inputs[3]);
    };

    return (
        <FontAwesomeIcon id={`${moto.id}-update-gear`} className={'edit-moto'} icon={faBars} size="xl" onClick={handleGearClick}/>
    )

};

export default EditMoto;