import React from 'react';
import { useEffect } from 'react'

import { Link, List, ListItemText, Button } from '@mui/material'
import { useSelector, useDispatch } from "react-redux"
import { CircularProgress } from '@mui/material';
import { selectArticlesList, selectArticlesLoading, selectArticlesError } from '../../store/articles/selectors'
import { getArticles } from '../../store/articles/actions'
// const URL = 'https://docs.api.amethyste.moe/api-reference/image'

import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



export const Gallery = () => {

    const dispatch = useDispatch()
    const articles = useSelector(selectArticlesList)
    console.log(articles)
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
            sx={{ width: '100%', maxWidth: 1024, bgcolor: 'background.paper', margin: '50px' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader sx={{ fontSize: '22px', color: 'secondary' }} component="div" id="nested-list-subheader">
                    Список статей
                </ListSubheader>
            }
        >
            {isLoading ? (<CircularProgress />) : (
                <>
                    {/* " !! " - приведение значения к булевому типу */}

                    { !!isError && <h4>Error: {isError}</h4>}

                    {
                        articles?.map((article) => {
                            return <>
                                <ListItemButton onClick={handleClick}>
                                    <ListItemText>{article.newsSite}</ListItemText>
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton >

                                            <ListItemText>{article.title}</ListItemText>
                                            <Link href='#'>Фото</Link>
                                        </ListItemButton>
                                    </List>
                                </Collapse> </>
                        })
                    }
                    <Button sx={{ marginLeft: '50px' }} onClick={requestArticle}>Обновить</Button>
                </>)
            }
        </List >
    );
}

    // return (
    //     <div>
    //         <h1>Gallery</h1>
    //         {isLoading ? (<CircularProgress />) : (
    //             <>
    //                 {/* " !! " - приведение значения к булевому типу */}
    //                 <button onClick={requestArticle}>REQUEST</button>
    //                 { !!isError && <h4>Error: {isError}</h4>}

    //                 {
    //                     articles?.map((article) => {
    //                         return <List>
    //                             <ListItem key={article.id}>

    //                                 <ListItemText>{article.title}</ListItemText>
    //                                 {/* <ListItemText>{article.summary}</ListItemText> */}
    //                             </ListItem>
    //                         </List>
    //                     })
    //                 }

    //             </>)}
    //     </div>
    // )
// }
