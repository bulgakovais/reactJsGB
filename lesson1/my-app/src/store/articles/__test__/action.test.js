import { getArticlesLoading, REQUEST_ARTICLES_LOADING } from '../actions'


it('should return obj with certain type', () => {
    // ожидаемое
    const expected = {
        type: REQUEST_ARTICLES_LOADING
    }
    // получаемое
    const received = getArticlesLoading()

    expect(received).toEqual(expected)
})
