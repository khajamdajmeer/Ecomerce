import {configureStore} from '@reduxjs/toolkit';
import CardReducer from './CartCounter';

export default configureStore({
    reducer:{
        counter:CardReducer,
    },
})