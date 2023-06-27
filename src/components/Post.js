import React from 'react'
import { AccountCircle, Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import {Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

export default function Post(props) {
    return (
        <Card sx={{margin:5}}>
            <CardHeader
                avatar={
                <AccountCircle></AccountCircle>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title={props.name}
                subheader={props.date}
            />
            <CardMedia
                component="img"
                height="1%"
                image={props.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {props.text}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}