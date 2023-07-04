import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Dropzone from './Dropzone';

const EditMoto = ({ moto }) => {

    const handleGearClick = (event) => {
        const card = document.getElementById(`${moto.name}_${moto.id}_card`);
        card.classList.add('to-front');
        const overLay = document.getElementById('overlay');
        overLay.classList.remove('hide');
        const gear = document.getElementById(`${moto.id}-update-gear`);
        gear.classList.add('block-click');
        const updateButton = card.querySelector('div');
        updateButton.classList.remove('hide-edit-btns');
        const brandSpan = document.getElementById(`${moto.id}-brand-value-span`);
        const nameSpan = document.getElementById(`${moto.id}-name-value-span`);
        const yearSpan = document.getElementById(`${moto.id}-year-value-span`);
        const ccSpan = document.getElementById(`${moto.id}-cc-value-span`);

        let inputs = [];
        for(let i = 0; i < 4; i++){
            const input = document.createElement('input');
            input.type = i < 2 ? 'text': 'number';
            input.placeholder = 'Current: ';
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
        <FontAwesomeIcon id={`${moto.id}-update-gear`} className={'edit-moto'} icon={faGear} spin spinReverse size="lg" onClick={handleGearClick}/>
    )

};

export default EditMoto;