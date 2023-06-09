import { useRef, useState, useEffect } from "react";
import axios from "axios";
import FilterBar from "./FilterBar";
import MotoCard from "./MotoCard";
import MotoForm from "./MotoForm";
import MotorcycleList from "./MotorcycleList";
import MotoDetailCard from "./MotoDetailCard";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

const Container = () => {
    const removeClass = document.querySelectorAll('to-front');
    removeClass.forEach(e => { e.classList.remove('to-front')});
    const containerRef = useRef(null);
    const contBottom = useRef(null);
    const [motoList, motoSetter] = useState([]);
    const styles = {userSelect: 'none'};

    const getMotoData = async () => {
        //console.log("getMotoData");
        const response = await axios.get(`${BASE_URL}/getMotos`);
        let resp = [...response.data];
        resp = resp.sort((a, b) => a["brand"].localeCompare(b["brand"]));
        motoSetter([...resp]);
    };

    useEffect(() => {
        //console.log("Getting all moto data from supabase with getMotoData");
        getMotoData();
    }, []);

    useEffect(() => {
        //console.log("Motolist state has been updated, re-rending list");
    }, [motoList]);

    const toggleModal = () => {
        const form = document.getElementById("moto-form-modal-div");
        const overLay = document.getElementById("overlay");
        overLay.classList.toggle("hide");
        form.classList.toggle("hide");
        form.classList.toggle("to-front");
    };

    //generating motorcycle card elements based on amount of motorcycles
    const motoCardElements = [];
    const motoCardDetailElements = [];
    motoList.map((moto, i) => {
        motoCardElements.push(
            <MotoCard key={`motoCard-${i}`} props={[moto, i, getMotoData]}/>
        );
        if(moto.data){
            motoCardDetailElements.push(
                <MotoDetailCard key={`motoDetailCard-${i}`} props={[moto, i]}/>
            );
        };
    });
    //moto cards end

    return (
        <div id="main-container" className={"container"} ref={containerRef}>
            <FilterBar key={'FilterBar'} motoList={motoList} />
            <MotoForm key={'MotoForm'} props={[toggleModal, getMotoData]} />
            <div id="container-bottom" className={"container-bottom"} ref={contBottom}>
                <div style={styles}>
                    <ul id="left-list" className={"left_ul"}>
                        <br/>
                        <MotorcycleList key={'MotorcycleList'} props={[motoList, contBottom]} />
                    </ul><br/>
                    <button className={"add-moto-li"} onClick={toggleModal}>Add Moto</button>
                </div>
                {motoCardElements}
                {motoCardDetailElements}
            </div>
        </div>
    );
};

export default Container;
