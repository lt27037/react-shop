import * as actionTypes from './shopping-types';

const products = [
   {
      id: 1,
      name: 'Produkt ABC',
      url: 'https://picsum.photos/id/815/800/1000',
      price: 345,
   },
   {
      id: 2,
      name: 'Produkt DEF',
      url: 'https://picsum.photos/id/274/800/1000',
      price: 454,
   },
   {
      id: 3,
      name: 'Produkt GHI',
      url: 'https://picsum.photos/id/936/800/1000',
      price: 280,
   },
   {
      id: 4,
      name: 'Produkt JKL',
      url: 'https://picsum.photos/id/366/800/1000',
      price: 391,
   },
]

const INITIAL_STATE = {
   products, // {id, title, price, img}
   cart: [], // {id, title, price, img, qty}
   currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case actionTypes.ADD_TO_CART:
         const item = state.products.find(product => product.id === action.payload.id);
         const isInCart = state.cart.find(item => item.id === action.payload.id ? true : false);
         return {
            ...state,
            cart: isInCart 
            ? state.cart.map(item => 
               item.id === action.payload.id 
                  ? {...item, qty: item.qty + 1}
                  : item
               ) 
            : [...state.cart, {...item, qty: 1}]
         }
      case actionTypes.REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id)
         }
      case actionTypes.ADJUST_QTY:
         return {
            ...state,
            cart: state.cart.map(item => 
               item.id === action.payload.id 
               ? {...item, qty: action.payload.qty} 
               : item
            )
         }
      case actionTypes.LOAD_CURRENT_ITEM:
         return {
            ...state,
            currentItem: action.payload,
         }
      default:
         return state;
   }
}; 

export default shopReducer; 