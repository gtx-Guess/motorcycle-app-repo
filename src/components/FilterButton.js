import '../styles/button.css'
const FilterButton = ({ motoProps }) => {
    let motoSetter = motoProps[1];
    let motoList = motoProps[0];

    const filterClicked = () => {
        return () => {
            console.log('filter clicked!');
            let filtered = motoList.filter( (moto) => (moto.brand === 'Honda'));
            motoSetter([...filtered]);
        };
    };

    return (
        <button id="filter-button"
        className='button' onClick={filterClicked()}>filter button</button>
    );

};

export default FilterButton;