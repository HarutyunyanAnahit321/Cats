import ActionTypes from '../types';

const initialState = {
  images: [],
  success: false,
  error: null,
  loading: false,
  page: 1,
  category_ids: 1,
};

function images(state = initialState , action) {
  switch (action.type) {
    case ActionTypes.GET_MORE_IMAGES:
      return { ...state, loading: true };
    case ActionTypes.GET_MORE_IMAGES_SUCCESS:
      return { ...state, loading: false, success: true, images: [...state.images,...action.payload], page: action.page };
    case ActionTypes.GET_MORE_IMAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ActionTypes.GET_IMAGES:
      return { ...state, loading: true };
    case ActionTypes.GET_IMAGES_SUCCESS:
      return { ...state, loading: false, success: true, images: action.payload, page: action.page, category_ids: action.category_ids };
    case ActionTypes.GET_IMAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default: return { ...state };
  }
}
 
export default images;