import '../styles/container.css'
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import FilterButton from './FilterButton';
import RemoveFilterButton from './RemoveFilterButton';

const Container = () => {
  const containerRef = useRef(null);
  const [motoList, motoSetter] = useState([]);

  const getMotoData = async () => {
    const response = await axios.get('http://localhost:8000/api/getMotos');
    let resp = [...response.data]
    resp = resp.sort((a,b) => ( a["brand"].localeCompare(b["brand"]) ));
    motoSetter([...resp]);
  };

  /**
   * Pretty sure below useEffect block makes runs the getMotoData func on page load
   */
  useEffect(() => {
    getMotoData();
  }, []);

  const handleClick = (moto, side=false) => {
    console.log(moto);
    const activeCards = containerRef.current.querySelectorAll('.active');
    activeCards.forEach((card) => card.remove());
  
    const card1El = document.createElement('div');
    card1El.classList.add('card', 'active');
    card1El.id = `${moto.name}_card`;
    card1El.innerHTML = `
      <p><span class="cardSpan">Brand:</span> ${moto.brand}</p>
      <p><span class="cardSpan">Name:</span> ${moto.name}</p>
      <p><span class="cardSpan">Year:</span> ${moto.year}</p>
      <p><span class="cardSpan">Engine:</span> ${moto.cc} CC's</p>
      <img src="https://drive.google.com/uc?export=view&id=${moto.motoImage}" alt="${moto.name}" />
    `;
    containerRef.current.appendChild(card1El);

    if(moto.data){
      const card2El = document.createElement('div');
      card2El.classList.add('card2','active');
      card2El.id = `${moto.name}_card2`;
      card2El.innerHTML = `
        <p><span class="cardSpan">Top Speed:</span> ${moto.data.top}</p>
        <p><span class="cardSpan">0-60:</span> ${moto.data.time}</p>
        <p><span class="cardSpan">Horse Power:</span> ${moto.data.hp}</p>
        <p><span class="cardSpan">Torque:</span> ${moto.data.torque}</p>
        <p><span class="cardSpan">Seat Height:</span> ${moto.data.seat}</p>
        <p><span class="cardSpan">Dry Weight:</span> ${moto.data.dry}</p>
        <p><span class="cardSpan">Wet Weight:</span> ${moto.data.wet}</p>
      `;
      containerRef.current.appendChild(card2El);
    }
  };

  return (
    <div id="main-container" className='container' ref={containerRef}>
      <ul id="left-list" className='left_ul'>
        <FilterButton motoProps={[motoList, motoSetter]}/>
        <RemoveFilterButton getMotoData={getMotoData}/><br/>
        {motoList.map((moto) => {
          return(
            <li key={moto.id} id={moto.id} onClick={() => handleClick(moto)}>
              <span className='liSpan'>{moto.name}</span>
            </li>)
        })}
      </ul>
    </div>
  );
  
}

export default Container;
