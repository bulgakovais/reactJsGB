
import { apiURL } from '../../utils/constants'


export const REQUEST_ARTICLES_LOADING = 'ARTICLES_LOADING'
export const REQUEST_ARTICLES_FAILURE = 'ARTICLES_FAILURE'
export const REQUEST_ARTICLES_SUCCESS = 'ARTICLES_SUCCESS'

export const getArticlesLoading = () => ({
    type: REQUEST_ARTICLES_LOADING
})

export const getArticlesSuccess = (articles) => ({
    type: REQUEST_ARTICLES_SUCCESS,
    payload: articles
})

export const getArticlesFailure = (err) => ({
    type: REQUEST_ARTICLES_FAILURE,
    payload: err
})

// Thunk middleware
export const getArticles = () => async (dispatch) => {
    dispatch(getArticlesLoading())

    try {
        const response = await fetch(apiURL)
        console.log(response)
        if (!response.ok) {
            throw new Error('not ok')
        }

        const result = await response.json()
        dispatch(getArticlesSuccess(result))

    } catch (err) {
        console.warn(err)
        dispatch(getArticlesFailure(err.message))
    }
}
