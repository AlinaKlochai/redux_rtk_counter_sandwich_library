import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ISandwichState {
    ingredients: string[];
}

const initialState: ISandwichState = {
    ingredients: [] 
}

export const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers:{
        add(state, action: PayloadAction<string>) {
            state.ingredients.push(action.payload) 
        },
        remove(state){
            state.ingredients = [];
        }
    }
});

export const { add, remove } = sandwichSlice.actions;

export default sandwichSlice.reducer;