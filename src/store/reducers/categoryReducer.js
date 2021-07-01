import ActionTypes from '../types';

const initialState = {
  categories: [],
  success: false,
  error: null,
  loading: false,
};

function categories(state = initialState , action) {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES:
      return { ...state, loading: true };
    case ActionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, success: true, categories: action.payload };
    case ActionTypes.GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default: return { ...state };
  }
}
 
export default categories;