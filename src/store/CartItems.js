import { createSlice } from "@reduxjs/toolkit";


const CartItemsReducer = createSlice({
    name: 'cartItems',
    initialState: {
        items:[],
        totalQuantity :0,
     
    },
    reducers:{
        addItemsinCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find((item)=> item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
            state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
               
            }   
            else{
                existingItem.quantity++;
                existingItem.price = parseInt(existingItem.totalPrice + newItem.price);
              
            }       

            state.totalCartPrice = state.totalCartPrice + newItem.price
 
        },
        removeItemsinCart(state, action){
            const newItemId = action.payload;
            const existingItem = state.items.find((item)=> item.id === newItemId.id);
            state.totalQuantity--;
           if(existingItem.quantity === 1){
            state.items = state.items.filter((item)=>{
                return item.id !== newItemId.id
            })
    
           }
            else{
                existingItem.quantity--;
                console.log(existingItem.totalPrice)
                console.log(existingItem.price)
                existingItem.price = parseInt(existingItem.price - existingItem.totalPrice);
         
            }


        }

    }

})

export const cartItemsActions = CartItemsReducer.actions

export default CartItemsReducer