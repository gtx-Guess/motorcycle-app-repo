// import styles from '../styles/container.module.css'
import '../styles/container.css'
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const stages = {
  dev: 'dev',
  prod: 'prod'
}
const stage = stages.dev;

const Container = () => {
  const containerRef = useRef(null);
  const [motos, setMotos] = useState([
    {
      id: 1,
      name: "Honda",
      year: "2008",
      cc: "600",
      motoImage: '1G2wBbIqy7O_wUtS4tbk_aQjv3hqM8eOq',
      data: {
        top: '160',
        time: '3.28',
        hp: '118',
        torque: '66 Nm',
        seat: '32.3 in',
        dry: '345 lb',
        wet: '410 lb'
      }
    },
    {
      id: 2,
      name: "Kawasaki",
      year: "2021",
      cc: "1000",
      motoImage: '1MwIXs2s9v9D8d8g8r1RySsep5EzYyFHF'
    },
    {
      id: 3,
      name: "Harley-Davidson",
      year: "2019",
      cc: "1200",
      motoImage: '1GFmZKQP26j51kxA8ON3NUPkx6zLgCsXV'
    }
  ]);
  const [response, setResponseData] = useState(null);

  const getMotoData = async () => {
    const response = await axios.get('http://localhost:5000/api/motos');
    setResponseData(response.data);
  };
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
      <p><span class="cardSpan">Brand:</span> ${moto.name}</p>
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

  const addMoto = () => {
    return () => {
      setMotos([...motos, response])
    }
  };

  return (
    <div id="main-container" className='container' ref={containerRef}>
      <ul id="left-list" className='left_ul'>
        {motos.map((moto) => {
            return(
              <li key={moto.id} id={moto.id} onClick={() => handleClick(moto)}>
                <span className='liSpan'>{moto.name}</span>
              </li>
            )
            //[ if(stage === 'dev'){
            //   if(moto.name === 'Honda'){
            //     return (
            //       <ul className='honda' key={moto.id} id={moto.id} onClick={click2(response)}>
            //         <span className='liSpan'>{moto.name}</span>
            //       </ul>
            //     );
            //   }else{
            //     return(
            //     <li key={moto.id} id={moto.id} onClick={() => handleClick(moto)}>
            //       <span className='liSpan'>{moto.name}</span>
            //     </li>
            //   )}
            // }else{
            //   return(
            //     <li key={moto.id} id={moto.id} onClick={() => handleClick(moto)}>
            //       <span className='liSpan'>{moto.name}</span>
            //     </li>
            //   )
            // };]
        })}
        <br/><br/><br/>
        <li onClick={addMoto()}>Add moto</li>
      </ul>
    </div>
  );
  
}

export default Container;
