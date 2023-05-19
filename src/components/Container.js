import '../styles/container.css'
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import FilterButton from './FilterButton';
import RemoveFilterButton from './RemoveFilterButton';
import Motorcycles from './Motorcycles';

const Container = () => {
  const containerRef = useRef(null);
  const [motoList, motoSetter] = useState([]);

  const getMotoData = async () => {
    const response = await axios.get('http://localhost:8000/api/getMotos');
    let resp = [...response.data];
    resp = resp.sort((a,b) => ( a["brand"].localeCompare(b["brand"]) ));
    motoSetter([...resp]);
  };

  /**
   * Pretty sure below useEffect hook runs the getMotoData func on page load
   */
  useEffect(() => {
    getMotoData();
  }, []);

  return (
    <div id="main-container" className='container' ref={containerRef}>
      <ul id="left-list" className='left_ul'>
        <FilterButton motoProps={[motoList, motoSetter]}/>
        <RemoveFilterButton getMotoData={getMotoData}/><br/>
        <Motorcycles props={[motoList, containerRef]} />
      </ul>
    </div>
  );
};

export default Container;