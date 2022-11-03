import React from 'react';
import { useEffect } from 'react'
import { List, ListItemText, Button, ListItem } from '@mui/material'
import { useSelector, useDispatch } from "react-redux"
import { CircularProgress } from '@mui/material';
import { selectArticlesList, selectArticlesLoading, selectArticlesError } from '../../store/articles/selectors'
import { getArticles } from '../../store/articles/actions'

import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';


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


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 1024, bgcolor: 'background.paper', marginTop: '50px' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader sx={{ fontSize: '22px' }} component="div" id="nested-list-subheader">
                    Список статей
                </ListSubheader>
            }
        >
            {isLoading ? (<CircularProgress />) : (
                <>

                    { !!isError && <h4>Error: {isError}</h4>}

                    {
                        articles?.map((article) => {
                            return <ListItem key={article.id}>
                                <ListItemButton onClick={handleClick} key={article.id}>
                                    <ListItemText>{article.newsSite}</ListItemText>

                                </ListItemButton>

                            </ListItem>
                        })
                    }
                    <Button sx={{ marginLeft: '20px' }} onClick={requestArticle}>Обновить</Button>
                </>)
            }
        </List >
    );
}
