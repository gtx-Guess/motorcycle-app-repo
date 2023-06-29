import { useRef, useState, useEffect } from "react";
import EditMoto from "./EditMoto";

const MotoCard = ({ props }) => {
    const moto = props[0];
    const index = props[1];
    const S3_BASE_URL = 'https://moto-pics.s3.us-west-1.amazonaws.com/';

    const motoImageLink = S3_BASE_URL + moto.imageLink;
    let classes;
    if(index === 0){
        classes = "card"
    }else{
        classes = "card hide"
    };

    return(
        <div className={classes} id={`${moto.name}_${moto.id}_card`}>
            <EditMoto/>
            <p><span className={"cardSpan"}>Brand:</span> {moto.brand}</p>
            <p><span className={"cardSpan"}>Name:</span> {moto.name}</p>
            <p><span className={"cardSpan"}>Year:</span> {moto.year}</p>
            <p><span className={"cardSpan"}>Engine:</span> {moto.cc} CC's</p>
            <img src={motoImageLink} alt={moto.name} />
        </div>
    )
};

export default MotoCard;