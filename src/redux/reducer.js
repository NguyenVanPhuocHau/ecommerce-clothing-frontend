import {
    FETCH_CART_ITEMS_REQUEST,
    FETCH_CART_ITEMS_SUCCESS,
    FETCH_CART_ITEMS_FAILURE,
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    REMOVE_ITEM_REQUEST,
    REMOVE_ITEM_SUCCESS,
    REMOVE_ITEM_FAILURE,
    CLEAR_CART,
    UPDATENUM_ITEM_FAILURE,
    UPDATENUM_ITEM_SUCCESS,
    UPDATENUM_ITEM_REQUEST,
    FETCH_ADDRESS_ID,
    FETCH_NEW_ORDER_FAILURE,
    FETCH_NEW_ORDER_SUCCESS,
    FETCH_NEW_ORDER_REQUEST,
} from './constants';

const initialState = {
    items: [],
    addressId: 0,
    latestOrder: {},
    isLoading: false,
    error: null,
};

const hauReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_ITEMS_REQUEST:
        case ADD_ITEM_REQUEST:
        case UPDATENUM_ITEM_REQUEST:
        case REMOVE_ITEM_REQUEST:
        case FETCH_NEW_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case FETCH_CART_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                isLoading: false,
                error: null,
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                // items: [...state.items, action.payload],
                isLoading: false,
                error: null,
            };
        case UPDATENUM_ITEM_SUCCESS:
            return {
                ...state,
                // items: [...state.items, action.payload],
                isLoading: false,
                error: null,
            };
        case REMOVE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
                isLoading: false,
                error: null,
            };
        case FETCH_NEW_ORDER_SUCCESS:
            return {
                ...state,
                latestOrder: action.payload,
                isLoading: false,
                error: null,
            };
        case FETCH_CART_ITEMS_FAILURE:
        case ADD_ITEM_FAILURE:
        case UPDATENUM_ITEM_FAILURE:
        case REMOVE_ITEM_FAILURE:
        case FETCH_NEW_ORDER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case CLEAR_CART:
            return {
                ...state,
                items: [],
            };
        case FETCH_ADDRESS_ID:
            return {
                ...state,
                addressId: action.payload, // Lưu address_id từ action vào state
                isLoading: false,
                error: null,
            };
        default:
            return state;
    }
};
// export const addressId = (state) => state.hau.addressId;

export default hauReducer;
