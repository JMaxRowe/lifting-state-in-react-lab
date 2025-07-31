// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    const handleAddToBurger = (ingredient) => {
        console.log(ingredient.name)
    }

    return <ul>
        {props.availableIngredients.map((ingredient, index) =>{
            return (
            <li 
                key={index}
                style={{backgroundColor: ingredient.color}}
                >
                    {ingredient.name} 
                    <button onClick={() => handleAddToBurger(ingredient)}>+</button>
            </li>)
        })}
    </ul>;
};

export default IngredientList;
