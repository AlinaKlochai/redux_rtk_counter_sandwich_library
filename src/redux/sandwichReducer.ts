import SandwichAction from "./sandwichAction";


const initialState = {
  ingredients: [] as string[]
}

//управления состоянием ингредиентов
export default function sandwichReducer(state = initialState, action: SandwichAction) {
  switch (action.type) {
    case 'sandwich/add':
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case 'sandwich/remove':
      return { ...state, ingredients: [] };
    default:
      return state;
  }
}