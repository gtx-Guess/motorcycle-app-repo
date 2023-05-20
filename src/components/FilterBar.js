const FilterBar = ({ motoPropss }) => {
    const motoList = motoPropss[0];
    const motoSetter = motoPropss[1];
    const getMotoData = motoPropss[2];

    const filterClicked = () => {
        return () => {
            console.log('filter clicked!');
            const filtered = motoList.filter( (moto) => (moto.brand === 'Honda'));
            motoSetter([...filtered]);
        };
    };
    const removeFilterClicked = () => {
        return () => {
            console.log('remove filter clicked!');
            getMotoData();
        };
    };

    return (
        <div id='container-top' className='container-top'>
            <button id="filter-button" className='button' onClick={filterClicked()}>filter button</button>
            <button id='remove-filter' className="button" onClick={removeFilterClicked()}>remove filter</button>
        </div>
    );
};

export default FilterBar;