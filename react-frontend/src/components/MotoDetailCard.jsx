
const MotoDetailCard = ( { props } ) => {
    const moto = props[0];
    const index = props[1];
    const motoData = JSON.parse(moto.data.replace(/'/g, '"'))

    return (
        <div id={`${moto.name}_${moto.id}_card2`} className={index === 0 ? 'card2': 'card2 hide-card'}>
            <p><span className={"cardSpan"}>Horse Power:</span> {motoData.hp}</p>
            <p><span className={"cardSpan"}>Torque:</span> {motoData.torque}</p>
            <p><span className={"cardSpan"}>Seat Height:</span> {motoData.seat_height}</p>
            <p><span className={"cardSpan"}>Engine:</span> {motoData.engine}</p>
            <p><span className={"cardSpan"}>Fuel Capacity:</span> {motoData.fuel_capacity}</p>
            <p><span className={"cardSpan"}>Fuel Consumption:</span> {motoData.mpg}</p>
        </div>
    )
};

export default MotoDetailCard;