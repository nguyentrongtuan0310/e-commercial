import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        listCart : 
            {
                item: [],
                totalItem: 0,
                totalPrice: [],
        
                
            }
    },
    reducers: {
        countToatalItem  (state,action) {
            let data = [...state.listCart.item]
          
            if(data.length > 0){
             
                const index = data.findIndex(product => product.id === action.payload.product.id)
                if(index < 0){

                    return {
                        ...state,
                        listCart: {
                            ...state.listCart,
                            totalItem: state.listCart.totalItem + action.payload.count,
                            item: [...state.listCart.item,action.payload.product]
                        }
                       }
                }
               
            }else {
                return {
                    ...state,
                    listCart: {
                        ...state.listCart,
                        totalItem: state.listCart.totalItem + action.payload.count,
                        item: [...state.listCart.item,action.payload.product]
                    }
                   }
        }
          
          
        },
        priceTotalItem :  (state,action) => {
            const data = [...state.listCart.totalPrice]
            if(data.length > 0){
                const index =data.findIndex(item => item.item.id === action.payload.item.id)
               if(index < 0){
                return {
                    ...state,
                    listCart : {
                        ...state.listCart,
                        totalPrice: [...state.listCart.totalPrice,{item: action.payload.item,countTotal:action.payload.countTotal + 1}],
                       
                    }
                }
               }else{
                
                state.listCart.totalPrice =  state.listCart.totalPrice.filter((item,i) => {
                       if(index === i){
                            item.countTotal = action.payload.countTotal + 1
                       }
                       return item
                })
               
             
               }

            }else{
                return {
                    ...state,
                    listCart : {
                        ...state.listCart,
                        totalPrice: [...state.listCart.totalPrice,{item: action.payload.item,countTotal:action.payload.countTotal + 1}],
                       
                    }
                }

            }
        },
        priceDecreseTotalItem :  (state,action) => {
            const data = [...state.listCart.totalPrice]
            if(data.length > 0){
                const index =data.findIndex(item => item.item.id === action.payload.item.id)
               if(index < 0){
                return {
                    ...state,
                    listCart : {
                        ...state.listCart,
                        totalPrice: [...state.listCart.totalPrice,{item: action.payload.item,countTotal:action.payload.countTotal}],
                       
                    }
                }
               }else{
                
                state.listCart.totalPrice =  state.listCart.totalPrice.filter((item,i) => {
                       if(index === i){
                            item.countTotal = action.payload.countTotal - 1
                       }
                       return item
                })
               
             
               }

            }else{
                return {
                    ...state,
                    listCart : {
                        ...state.listCart,
                        totalPrice: [...state.listCart.totalPrice,{item: action.payload.item,countTotal:action.payload.countTotal }],
                       
                    }
                }

            }
        },
        deleteCart : (state,action) => {
            const totalPrice = [...state.listCart.totalPrice]
         
            const data = [...state.listCart.item]
            data.splice(action.payload.index,1)
            
            state.listCart.item = data
             state.listCart.totalItem = data.length

             const index = totalPrice.findIndex(item => item.item.id === action.payload.id)
                totalPrice.splice(index,1)
                state.listCart.totalPrice = totalPrice
        }
        },

    

})
export const {actions, reducer} = CartSlice;
export const {countToatalItem,priceTotalItem , priceDecreseTotalItem ,deleteCart} = actions
export default reducer
