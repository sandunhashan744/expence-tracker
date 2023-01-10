import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    categories:[],
    transaction:[]
}

export const expenseSlice = createSlice({
    name:'expense',
    initialState,
    reducers:{
        getTransaction:(state) => {
            //to use get Transaction
        }
    }
})

export const {getTransaction} = expenseSlice.actions;
export default expenseSlice.reducer;
