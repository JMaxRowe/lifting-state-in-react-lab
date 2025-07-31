// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    const handleRemoveFromBurger = (ingredient) => {
        props.removeFromBurger(props.stack.filter((i) => i !== ingredient))
    }
    return <ul>
        {props.stack.map((ingredient, index) =>{
            return (
            <li 
                key={index}
                style={{backgroundColor: ingredient.color}}
                >
                    {ingredient.name} 
                    <button onClick={() => handleRemoveFromBurger(ingredient)}>x</button>
            </li>)
        })}
    </ul>;
};

export default BurgerStack;
