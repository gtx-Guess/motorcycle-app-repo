const MotorcycleList = ({ props }) => {
    //console.log('rendering motorcycle left list');
    const contBottom = props[1];
    const motoList = props[0];
    //console.log(props);

    const styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const handleClick = (moto) => {
        const activeCards = contBottom.current.querySelectorAll('.card');
        activeCards.forEach((card) => card.classList.add('hide-card'));
        const activeCards2 = contBottom.current.querySelectorAll('.card2');
        activeCards2.forEach((card) => card.classList.add('hide-card'));
    
        const card1 = document.getElementById(`${moto.name}_${moto.id}_card`);
        card1.classList.remove('hide-card');
        if(moto.data){
            const card2 = document.getElementById(`${moto.name}_${moto.id}_card2`);
            card2.classList.remove('hide-card');
        }
        return;
    };

    return (
        <div style={styles}>
            {motoList.map((moto, index) => {
                return(
                    <li className={"motoLi"} key={index} id={moto.id} onClick={() => handleClick(moto)}>
                        <span className={'liSpan'}>{moto.name}</span>
                    </li>
                )
            })}
        </div>
    );

};

export default MotorcycleList;