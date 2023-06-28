import MotoCards from "./MotoCards";

export const handleClick = (moto, containerRef) => {
    const activeCards = containerRef.current.querySelectorAll('.card');
    activeCards.forEach((card) => card.classList.add('hide'));
    const activeCards2 = containerRef.current.querySelectorAll('.card2');
    activeCards2.forEach((card) => card.classList.add('hide'));

    const card1 = document.getElementById(`${moto.name}_${moto.id}_card`);
    card1.classList.remove('hide');
    if(moto.data){
        const card2 = document.getElementById(`${moto.name}_${moto.id}_card2`);
        card2.classList.remove('hide');
    }
    return;
};

const Motorcycles = ({ props }) => {
    console.log('rendering motorcycles');
    const S3_BASE_URL = 'https://moto-pics.s3.us-west-1.amazonaws.com/';
    const containerRef = props[1];
    const motoList = props[0];


    const createCards = (moto, index) => {
        if(document.getElementById(`${moto.name}_${moto.id}_card`)){return};
        const card1El = document.createElement('div');
        if(index === 0){
            card1El.classList.add('card');
        }else{
            card1El.classList.add('card', 'hide');
        };
        card1El.id = `${moto.name}_${moto.id}_card`;

        card1El.innerHTML = `
            <p><span class="cardSpan">Brand:</span> ${moto.brand}</p>
            <p><span class="cardSpan">Name:</span> ${moto.name}</p>
            <p><span class="cardSpan">Year:</span> ${moto.year}</p>
            <p><span class="cardSpan">Engine:</span> ${moto.cc} CC's</p></div>
            <img src="${S3_BASE_URL}${moto.imageLink}" alt="${moto.name}" />
        `;
        containerRef.current.appendChild(card1El);

        if(moto.data){
          const card2El = document.createElement('div');
          card2El.classList.add('card2','hide');
          card2El.id = `${moto.name}_${moto.id}_card2`;
          card2El.innerHTML = `
            <p><span class="cardSpan">Top Speed:</span>${moto.data.top}</p>
            <p><span class="cardSpan">0-60:</span> ${moto.data.time}</p>
            <p><span class="cardSpan">Horse Power:</span> ${moto.data.hp}</p>
            <p><span class="cardSpan">Torque:</span> ${moto.data.torque}</p>
            <p><span class="cardSpan">Seat Height:</span> ${moto.data.seat}</p>
            <p><span class="cardSpan">Dry Weight:</span> ${moto.data.dry}</p>
            <p><span class="cardSpan">Wet Weight:</span> ${moto.data.wet}</p>
          `;
          containerRef.current.appendChild(card2El);
        };
        if(index===0){handleClick(moto)};
        return;
    };

    const styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    return (
        <div style={styles}>
            {motoList.map((moto, index) => {
                createCards(moto, index);
                return(
                    <li className={"motoLi"} key={index} id={moto.id} onClick={() => handleClick(moto, containerRef)}>
                        <span className={'liSpan'}>{moto.name}</span>
                    </li>
                )
            })}
        </div>
    );

};

export default Motorcycles;