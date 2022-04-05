import React from 'react';
import { useEffect, useState } from 'react'
import { apiURL } from '../../utils/constants'
import { List, ListItem, ListItemText } from '@mui/material'

import { CircularProgress } from '@mui/material';

export const Gallery = () => {

    const [articles, setArticle] = useState([])
    const [err, setErr] = useState(false)
    const [loadings, setLoading] = useState(false)

    const requestArticle = async () => {
        setLoading(true)
        try {
            const response = await fetch(apiURL)

            if (!response.ok) {
                throw new Error('not ok')
            }

            const result = await response.json()

            setErr(false)
            setArticle(result)
        } catch (err) {
            console.warn(err)
            setErr(true)
        } finally {
            setLoading(false)
        }
    }

    // const URL = 'https://docs.api.amethyste.moe/api-reference/image'

    useEffect(() => {
        requestArticle()
        // setLoading(true)
        // fetch(apiURL)
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('not ok')
        //         }

        //         return response.json()
        //     })
        //         .then(response => {
        //     setErr(false)
        //     setArticle(response)
        //     console.log(response)
        // })
        //     .catch(err => {
        //         console.warn(err)
        //         setErr(true)
        //     })
        //     .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h1>Gallery</h1>
            {loadings ? (<CircularProgress />) : (
                <>
                    <button onClick={requestArticle}>REQUEST</button>
                    { err && <h4>Error</h4>}
                    <List>
                        {
                            articles?.map((article) => {
                                return <List>
                                    <ListItem key={article.id}>

                                        <ListItemText>{article.title}</ListItemText>
                                        <ListItemText>{article.summary}</ListItemText>
                                    </ListItem>
                                </List>
                            })
                        }
                    </List >
                </>)}
        </div>
    )
}