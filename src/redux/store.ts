import { configureStore, createReducer, createAction} from "@reduxjs/toolkit";

const shopInitState:{products:Props.Product[],cart:Props.Product[]} = {
    products:[
        {
        name:'iphone',
        price:100,
        quantity:5
        },
        {
        name:'ipad',
        price:200,
        quantity:5
        },
        {
        name:'macbook',
        price:300,
        quantity:5
        }
    ],
    cart:[]
};
export const decrement= createAction<Props.Product>('decrement')
export const checkout= createAction('checkout')
export const shopReducer = createReducer(shopInitState,(builder)=>{
    builder.addCase(decrement,(state,action)=>{
        const productIndex = state.products.findIndex(product=>product.name===action.payload.name)
        if(state.products[productIndex].quantity===0){
            return state;
        }
        state.products[productIndex].quantity--;
        if(!state.cart.find(product=> product.name === action.payload.name)){
            state.cart.push({name:action.payload.name, price:action.payload.price, quantity:1})
        }
        else{
            const productIndex = state.cart.findIndex(product=>product.name===action.payload.name)
            state.cart[productIndex].quantity++;
        }
    })
    .addCase(checkout,(state,action)=>{
        console.log('im here')
        state.cart=[];
    })
})
export const store = configureStore({reducer:shopReducer})