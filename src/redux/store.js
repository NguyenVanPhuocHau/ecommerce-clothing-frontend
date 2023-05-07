import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlide';
import avatarReducer from './avatarSlice';
import cartReducer from './cartSlice';
import hauReducer from './reducer';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'auth',
    storage,
    blacklist: ['authentication'],
};
const persistAvatarConfig = {
    key: 'avatar',
    storage,
    blacklist: ['avatar'],
};
const persistCartConfig = {
    key: 'cart',
    storage,
    blacklist: ['cart'],
};
const persistHauConfig = {
    key: 'hau',
    storage,
    blacklist: ['hau'],
};
const persistedReducer = persistReducer(persistConfig, authenticationReducer);
const persistedAvatarReducer = persistReducer(persistAvatarConfig, avatarReducer);
const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedHauReducer = persistReducer(persistHauConfig, hauReducer);

export default configureStore({
    reducer: {
        authentication: persistedReducer,
        avatar: persistedAvatarReducer,
        cart: persistedCartReducer,
        hau: persistedHauReducer,
    },
    middleware: [thunk],
});
