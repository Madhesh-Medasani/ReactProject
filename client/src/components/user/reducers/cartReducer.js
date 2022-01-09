const initialState = {
    cart: [],
  };
  
  export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    DELETE_FROM_CART: "DELETE_FROM_CART",
    RESET_CART: "RESET_CART",
    ADJUST_QUANTITY : "ADJUST_QUANTITY"

  };
  
  const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        const isPre = state.cart.find((i) => i.id === action.payload.item.id);
        console.log(isPre)
        return {
        //   ...state,
        //   cart:
        //     isPre !== undefined
        //       ? [...state.cart, {...isPre, qty : isPre.qty + 1}  ]
        //       : [...state.cart, { ...action.payload.item, qty : 1 }],

            ...state,
            cart: isPre !== undefined ? 
            state.cart.map((item)=> item.id === action.payload.item.id ? {...item, qty: item.qty +1}: item ):
            [...state.cart,{...action.payload.item, qty: 1}],
        };
  
      case actionTypes.DELETE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((i) => i.id !== action.payload.item.id),
        };
  
      case actionTypes.RESET_CART:
        return {
          ...state,
          cart: [],
        };

        case actionTypes.ADJUST_QUANTITY:
            console.log('true? '+ action.payload.item.id);
            return {
                ...state,
                cart: state.cart.map((item)=>item.id === action.payload.item.id ? {...item,qty: +action.payload.qty}: item )
            }
  
      default:
        return state;
    }
  };
  
  export default CartReducer;