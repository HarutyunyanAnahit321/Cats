import ActionTypes from "../types";
import { getCategories, getImages } from "../../api";

export function getCategoryList() {
  return async dispatch => {
    dispatch({
      type: ActionTypes.GET_CATEGORIES,
    });
    try {
      const response = await getCategories();
      dispatch({
        type: ActionTypes.GET_CATEGORIES_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_CATEGORIES_FAILURE,
        payload: error.message,
      });
    }
  };
}

export function getImageList(limit = 10, page = 1, category_ids = 1 ) {
  return async dispatch => {
    dispatch({
      type: ActionTypes.GET_IMAGES,
    });
    try {
      const response = await getImages(limit, page, category_ids);
      console.log('response', response);
      dispatch({
        type: ActionTypes.GET_IMAGES_SUCCESS,
        payload: response.data,
        page,
        category_ids,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_IMAGES_FAILURE,
        payload: error.message,
      });
    }
  };
}

export function getMoreImages(limit = 10, page , category_ids ) {
  return async dispatch => {
    dispatch({
      type: ActionTypes.GET_MORE_IMAGES,
    });
    try {
      const response = await getImages(limit, page, category_ids);
      dispatch({
        type: ActionTypes.GET_MORE_IMAGES_SUCCESS,
        payload: response.data,
        page,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_MORE_IMAGES_FAILURE,
        payload: error.message,
      });
    }
  };
}