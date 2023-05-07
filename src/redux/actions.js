// actions.js

import axios from 'axios';
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
    UPDATENUM_ITEM_REQUEST,
    UPDATENUM_ITEM_SUCCESS,
} from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { myuser } from 'redux/authenticationSlide';
export const fetchCartItems = (userId) => {
    // alert("hau")
    return (dispatch) => {
        dispatch({ type: FETCH_CART_ITEMS_REQUEST });
        axios
            .get(`http://localhost:8080/api/v1/cart/cartItems/${userId}`)
            .then((response) => {
                dispatch({
                    type: FETCH_CART_ITEMS_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_CART_ITEMS_FAILURE,
                    payload: error.message,
                });
            });
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    };
};

export const addItem = (idProduct, idUser, idColor, idSize, quantity) => {
    return (dispatch) => {
        dispatch({ type: ADD_ITEM_REQUEST });
        axios
            .post(`http://localhost:8080/api/v1/cart/add`, { idProduct, idUser, idColor, idSize, quantity })
            .then((response) => {
                dispatch({
                    type: ADD_ITEM_SUCCESS,
                    // payload: response.data,
                });
                // dispatch({
                //   type: FETCH_CART_ITEMS_SUCCESS,
                //   payload: response.data,
                // });
                dispatch(fetchCartItems(idUser));
            })
            .catch((error) => {
                dispatch({
                    type: ADD_ITEM_FAILURE,
                    payload: error.message,
                });
            });
    };
};

export const updateNumItem = (cartItemId,num,idUser) => {
    return (dispatch) => {
        dispatch({ type: UPDATENUM_ITEM_REQUEST });
        axios
            .post(`http://localhost:8080/api/v1/cart/cartItems/updateNum`, { cartItemId, num })
            .then((response) => {
                dispatch({
                    type: UPDATENUM_ITEM_SUCCESS,
                    // payload: response.data,
                });
                dispatch(fetchCartItems(idUser));
            })
            .catch((error) => {
                dispatch({
                    type: UPDATENUM_ITEM_FAILURE,
                    payload: error.message,
                });
            });
    };
};

export const removeItem = (cartItemId,userId) => {
    // alert(cartItemId)
    return (dispatch) => {
        dispatch({ type: REMOVE_ITEM_REQUEST });
        axios
            .post(`http://localhost:8080/api/v1/cart/remove`, {cartItemId})
            .then((response) => {
                dispatch({
                    type: REMOVE_ITEM_SUCCESS,
                    payload: cartItemId,
                });
                dispatch(fetchCartItems(userId));
            })
            .catch((error) => {
                // alert("sai")
                dispatch({
                    type: REMOVE_ITEM_FAILURE,
                    payload: error.message,
                });
            });
    };
};
