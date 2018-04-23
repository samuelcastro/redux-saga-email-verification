import { EMAIL_FAILURE, EMAIL_REQUEST, EMAIL_SUCCESS } from '../actions/types'

const defaultState = {
  isFetching: false,
  items: [],
}

const email = (state = defaultState, action: any) => {
  switch (action.type) {
    case EMAIL_REQUEST:
      return {
        ...state,
        isFetching: true
       }

    case EMAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.posts
      }

    case EMAIL_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }

    default:
      return state
  }
}

export default email;

// function products(state, action) {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return {
//         ...state,
//         inventory: state.inventory - 1
//       }
//       case REMOVE_FROM_CART:
//         return {
//           ...state,
//           inventory: state.inventory + 1
//         }
//     default:
//       return state
//   }
// }
//
// function byId(state = {}, action) {
//   switch (action.type) {
//     case RECEIVE_PRODUCTS:
//       return {
//         ...state,
//         ...action.products.reduce((obj, product) => {
//           obj[product.id] = product
//           return obj
//         }, {})
//       }
//     default:
//       const { productId } = action
//       if (productId) {
//         return {
//           ...state,
//           [productId]: products(state[productId], action)
//         }
//       }
//       return state
//   }
// }
