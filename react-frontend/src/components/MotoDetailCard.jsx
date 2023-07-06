
const MotoDetailCard = ( { props } ) => {
    const moto = props[0];
    const index = props[1];

    return (
        <div id={`${moto.name}_${moto.id}_card2`} className={index === 0 ? 'card2': 'card2 hide-card'}>
            <p><span className={"cardSpan"}>Top Speed:</span>{moto.data.top}</p>
            <p><span className={"cardSpan"}>0-60:</span> {moto.data.time}</p>
            <p><span className={"cardSpan"}>Horse Power:</span> {moto.data.hp}</p>
            <p><span className={"cardSpan"}>Torque:</span> {moto.data.torque}</p>
            <p><span className={"cardSpan"}>Seat Height:</span> {moto.data.seat}</p>
            <p><span className={"cardSpan"}>Dry Weight:</span> {moto.data.dry}</p>
            <p><span className={"cardSpan"}>Wet Weight:</span> {moto.data.wet}</p>
        </div>
    )
};

export default MotoDetailCard;