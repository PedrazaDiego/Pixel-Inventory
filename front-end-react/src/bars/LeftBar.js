import React, {useState} from 'react'
import axios from 'axios'
import PostProduct from '../subcomponents/PostProduct'
import PostProvider from '../subcomponents/PostProvider'



export default function LeftBar() {


    return (
        <div>
            post
            <PostProduct />
            <PostProvider />
        </div>
    )
}
