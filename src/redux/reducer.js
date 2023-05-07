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
} from './constants';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const hauReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_ITEMS_REQUEST:
        case ADD_ITEM_REQUEST:
        case UPDATENUM_ITEM_REQUEST:
        case REMOVE_ITEM_REQUEST:
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
        case FETCH_CART_ITEMS_FAILURE:
        case ADD_ITEM_FAILURE:
        case UPDATENUM_ITEM_FAILURE:
        case REMOVE_ITEM_FAILURE:
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
        default:
            return state;
    }
};

export default hauReducer;
