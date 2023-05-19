const FilterButton = ({ motoProps }) => {
    let motoSetter = motoProps[1];
    let motoList = motoProps[0]
    const filterClicked = () => {
        return () => {
            console.log('filter clicked!');
            let filtered = motoList.filter( (moto) => (moto.brand === 'Honda'));
            motoSetter([...filtered]);
        }
    };

    return (
        <li id="filter-button" onClick={filterClicked()}>filter button</li>
    )

};

export default FilterButton;