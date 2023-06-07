import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Motorcycles from './Motorcycles';
import FilterBar from './FilterBar';
import MotoForm from './MotoForm';

const Container = () => {
  const containerRef = useRef(null);
  const contBottom = useRef(null);
  const [motoList, motoSetter] = useState([]);

  const getMotoData = async () => {
    const response = await axios.get('http://localhost:8000/api/getMotos');
    let resp = [...response.data];
    resp = resp.sort( (a,b) => ( a["brand"].localeCompare(b["brand"]) ) );
    motoSetter([...resp]);
  };

  /**
   * Pretty sure below useEffect hook runs the getMotoData func on page load
   */
  useEffect(() => {
    getMotoData();
  }, []);

  const toggleModal = () => {
      const form = document.getElementById('moto-form-modal-div');
      const blur = document.getElementById('background-blur');
      blur.classList.toggle('hide-moto-modal');
      form.classList.toggle('hide-moto-modal');
  };
  return (
    <div id="main-container" className={'container'} ref={containerRef}>      
      <FilterBar motoList={motoList}/>
      <MotoForm props={[toggleModal]}/>
      <div id='container-bottom' className={'container-bottom'} ref={contBottom}>
        <ul id="left-list" className={'left_ul'} >
          <br/>
          <Motorcycles props={[motoList, contBottom]}/>
          <br/><br/><br/>
          <li className={'add-moto-li'} onClick={toggleModal}>Add Moto</li>
          <li className={'add-moto-li'}>Delete Moto</li>
        </ul>
      </div>
    </div>
  );
};

export default Container;