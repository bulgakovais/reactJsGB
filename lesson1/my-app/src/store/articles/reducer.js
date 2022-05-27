import { REQUEST_ARTICLES_SUCCESS } from './actions'
import { REQUEST_ARTICLES_FAILURE } from './actions'
import { REQUEST_ARTICLES_LOADING } from './actions'
import { REQUEST_STATUS } from '../../utils/constants'


const initialState = {
    articlesList: [],
    request: {
        status: REQUEST_STATUS.IDLE,
        error: ''
    },

}

export const articlesReducer = (state = initialState, action) => {

    switch (action.type) {
        case REQUEST_ARTICLES_LOADING:
            {
                return {
                    ...state,
                    request: {
                        ...state.request,
                        status: REQUEST_STATUS.IDLE
                    }
                }
            }
        case REQUEST_ARTICLES_SUCCESS:
            {
                return {
                    ...state,
                    articlesList: action.payload,
                    request: {
                        status: REQUEST_STATUS.SUCCESS,
                        error: ''
                    }
                }
            }
        case REQUEST_ARTICLES_FAILURE:
            {

                return {
                    request: {
                        status: REQUEST_STATUS.FAILURE,
                        error: action.payload
                    }
                }
            }
        default:
            return state;

    }
}