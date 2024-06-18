import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux_rtk/sandwichSlice';
import { RootState } from '../redux_rtk/storeRTK';

const Sandwich: React.FC = () => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();
  
    const addIngredient = (ingredient: string) => {
      //dispatch({ type: 'sandwich/add', payload: ingredient });
      dispatch(add(ingredient));
    }
  
    const removeIngredients = () => {
      //dispatch({ type: 'sandwich/remove' });
      dispatch(remove());
    }

    console.log(ingredients);
  
    return (
        <div className='sandwichDiv'>
          <h2>Choose your sandwich:</h2>
          <div>Sandwich: {ingredients.join(', ')}</div>
          <div>
          <button className='btnSandwich' onClick={() => addIngredient('bread')}>Add bread</button>
          <button className='btnSandwich' onClick={() => addIngredient('sausage')}>Add sausage</button>
          <button className='btnSandwich' onClick={() => addIngredient('cheese')}>Add cheese</button>
          <button className='btnSandwich' onClick={removeIngredients}>Remove all ingredients</button>
          </div>
        </div>
      );
    }

export default Sandwich