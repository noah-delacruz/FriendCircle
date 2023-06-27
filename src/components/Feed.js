import {Box} from '@mui/material'
import React from 'react'
import Post from './Post'

export default function Feed() {
    return (
        <Box flex={4} px={2}>
            <Post 
                name="John Doe"
                date="June 27, 2023"
                image="https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                text="First time in Hawaii!"
            />
            <Post 
                name="Jane Smith"
                date="June 26, 2023"
                image="https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                text="My favorite food <3"
            />
            <Post 
                name="Ryan Doan"
                date="June 24, 2023"
                image="https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                text="Sports is life"
            />
        </Box>
    )
}