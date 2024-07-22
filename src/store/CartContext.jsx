import { createContext, useReducer } from "react";

const CartContext = createContext({
    item:[],
    addItem: (item) => {

    }
})
function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.item.id);
        const updateItems = [...state.items]
        if(existingCartItemIndex > -1){
            const updateItem = {
                ...state.items[existingCartItemIndex],
                quantity: state.items[existingCartItemIndex].quantity + 1
            };
            updateItems[existingCartItemIndex] = updateItem;
        }else{
            updateItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updateItems}
    }
    return state;
}
 export function CartContextProvider({children}){
     const [cart, dispatchCartAction] = useReducer(cartReducer, {items:[]});
     const cartContext = {
        items: cart.items,
        addItem: addItem
     };
     function addItem(item){
        dispatchCartAction({type:'ADD_ITEM', item})
     }
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
export default CartContext