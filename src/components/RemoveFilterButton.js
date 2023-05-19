const RemoveFilterButton = ({ getMotoData }) => {
    const removeFilterClicked = () => {
        return () => {
            console.log('remove filter clicked!');
            getMotoData()
        };
    };
    return (
        <li id='remove-filter' onClick={removeFilterClicked()}>remove filter</li>
    );
};

export default RemoveFilterButton;