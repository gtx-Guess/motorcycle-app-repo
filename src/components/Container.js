import '../styles/container.css'
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import FilterButton from './FilterButton';
import RemoveFilterButton from './RemoveFilterButton';
import Motorcycles from './Motorcycles';

const Container = () => {
  const containerRef = useRef(null);
  const contBottom = useRef(null);
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

  const styles = {
    backgroundColor: "lightblue"
  }

  return (
    <div id="main-container" className='container' ref={containerRef}>
      <div id='container-top' style={styles}>          
        <FilterButton motoProps={[motoList, motoSetter]}/>
      </div>
      <div id='container-bottom' className='container-bottom' ref={contBottom}>
        <ul id="left-list" className='left_ul'>
          <RemoveFilterButton getMotoData={getMotoData}/><br/>
          <Motorcycles props={[motoList, contBottom]} />
        </ul>
      </div>
    </div>
  );
};

export default Container;