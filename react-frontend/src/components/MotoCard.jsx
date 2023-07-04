import EditMoto from "./EditMoto";
import axios from 'axios';
import ErrorBubble from "./ErrorBubble";
const BASE_URL = import.meta.env.VITE_SERVER_URL;
const MotoCard = ({ props }) => {
    const moto = props[0];
    const index = props[1];
    const reload = props[2];
    const S3_BASE_URL = "https://moto-pics.s3.us-west-1.amazonaws.com/";

    const motoImageLink = S3_BASE_URL + moto.imageLink;

    const handleUpdateMotoBtnClick = (event) => {
        const brandSpan = document.getElementById(`${moto.id}-brand-value-span`);
        const updatedBrand = !brandSpan.querySelector("input").value ? moto.brand  : brandSpan.querySelector("input").value;
        brandSpan.innerHTML = updatedBrand;

        const nameSpan = document.getElementById(`${moto.id}-name-value-span`);
        const updatedName = !nameSpan.querySelector("input").value ? moto.name : nameSpan.querySelector("input").value;
        nameSpan.innerHTML = updatedName;

        const yearSpan = document.getElementById(`${moto.id}-year-value-span`);
        const updatedYear = !yearSpan.querySelector("input").value ? moto.name : yearSpan.querySelector("input").value;
        yearSpan.innerHTML = updatedYear;

        const ccSpan = document.getElementById(`${moto.id}-cc-value-span`);
        const updatedCC = !ccSpan.querySelector("input").value ? moto.name : ccSpan.querySelector("input").value;
        ccSpan.innerHTML = updatedCC;

        reload();
        const overLay = document.getElementById("overlay");
        overLay.classList.toggle("hide");
    };

    const handleDeleteMotoBtn = async (event) => {
        const resp = await axios.delete(`${BASE_URL}/deleteMoto/${moto.id}`);
        console.log(resp);
        reload();
    };

    return(
        <div className={index === 0 ? "card" : "card hide-card"} id={`${moto.name}_${moto.id}_card`}>
            <EditMoto moto={moto}/>
            <p><span className={"cardSpan"}>Brand:</span> <span id={`${moto.id}-brand-value-span`}>{moto.brand}</span></p>
            <p><span className={"cardSpan"}>Name:</span> <span id={`${moto.id}-name-value-span`}>{moto.name}</span></p>
            <p><span className={"cardSpan"}>Year:</span> <span id={`${moto.id}-year-value-span`}>{moto.year}</span></p>
            <p><span className={"cardSpan"}>Engine:</span> <span id={`${moto.id}-cc-value-span`}>{moto.cc}</span> CC"s</p>
            <img src={motoImageLink} alt={moto.name} />
            <div className={"edit-buttons-div"}>
                <button className={"update-moto-btn"} onClick={handleUpdateMotoBtnClick}>Update</button>
                <button className={"delete-moto-btn"} onClick={handleDeleteMotoBtn}>Delete Moto</button>
            </div>
        </div>
    )
};

export default MotoCard;