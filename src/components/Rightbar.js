import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function Rightbar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"}}}>
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight="300" mt={2} mb={2}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/3646160/pexels-photo-3646160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="John Doe" src="https://images.pexels.com/photos/6608313/pexels-photo-6608313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Jane Doe" src="https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Ryan Baker" src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Avatar alt="Kelly Lam" src="https://images.pexels.com/photos/5682847/pexels-photo-5682847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight="300" mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img 
                            src="https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img 
                            src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img 
                            src="https://images.pexels.com/photos/4022082/pexels-photo-4022082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight="300" mt={2} mb={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}