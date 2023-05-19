const Motorcycles = ({ props }) => {
    const containerRef = props[1];
    const motoList = props[0];

    const handleClick = (moto) => {
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
        };
    };

    const styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    return (
        <div style={styles}>
            {motoList.map((moto) => {
                return(
                <li key={moto.id} id={moto.id} onClick={() => handleClick(moto)}>
                    <span className='liSpan'>{moto.name}</span>
                </li>)
            })}
        </div>
    );

};

export default Motorcycles;