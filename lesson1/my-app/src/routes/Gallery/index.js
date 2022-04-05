import React from 'react';
import { useEffect } from 'react'

import { List, ListItem, ListItemText } from '@mui/material'
import { useSelector, useDispatch } from "react-redux"
import { CircularProgress } from '@mui/material';
import { selectArticlesList, selectArticlesLoading, selectArticlesError } from '../../store/articles/selectors'
import { getArticles } from '../../store/articles/actions'
// const URL = 'https://docs.api.amethyste.moe/api-reference/image'

export const Gallery = () => {

    const dispatch = useDispatch()
    const articles = useSelector(selectArticlesList)
    const isLoading = useSelector(selectArticlesLoading)
    const isError = useSelector(selectArticlesError)


    const requestArticle = async () => {
        // Диспатчим в миддлвар
        dispatch(getArticles())
    }

    useEffect(() => {
        requestArticle()
    }, [])

    return (
        <div>
            <h1>Gallery</h1>
            {isLoading ? (<CircularProgress />) : (
                <>
                    {/* " !! " - приведение значения к булевому типу */}
                    <button onClick={requestArticle}>REQUEST</button>
                    { !!isError && <h4>Error: {isError}</h4>}

                    {
                        articles?.map((article) => {
                            return <List>
                                <ListItem key={article.id}>

                                    <ListItemText>{article.title}</ListItemText>
                                    {/* <ListItemText>{article.summary}</ListItemText> */}
                                </ListItem>
                            </List>
                        })
                    }

                </>)}
        </div>
    )
}
