import { combineReducers } from 'redux';
import images from './imageReducer';
import categories from './categoryReducer';

const createReducer = combineReducers({
  catImages: images,
  categories: categories
})

export default createReducer;