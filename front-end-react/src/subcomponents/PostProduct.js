import React, {useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'

BASE_URL = 'http://localhost:3001/api/'

export default function PostProduct(props) {

    const [value, updateValue] = useState({
       name: undefined,
       cost: undefined,
       price: undefined,
       category: undefined,
       description: undefined,
       quantity: undefined,
    //    provider: undefined, 
    })

    const handleChange = (e) => {
        updateValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const submitUpdate = async (e) => {
        // e.preventDefault()
        await axios.post(`${BASE_URL}addinventory`, value)
    }

    return (
        <div className='edit-form'>
            <form onSubmit={submitUpdate}> 
                <div>
                    <input 
                        text='text'
                        value={value.name}
                        onChange={handleChange}
                        name={'name'}
                        placeholder='product name'
                    />
                </div>
                <div>
                    <input 
                        text='text'
                        value={value.cost}
                        onChange={handleChange}
                        name={'cost'}
                        placeholder='product cost'
                    />
                </div>
                <div>
                    <input 
                        text='text'
                        value={value.price}
                        onChange={handleChange}
                        name={'price'}
                        placeholder='product price'
                    />
                </div>
                <div>
                    <input 
                        text='text'
                        value={value.category}
                        onChange={handleChange}
                        name={'category'}
                        placeholder='product category'
                    />
                </div>
                <div>
                    <textarea 
                        text='text'
                        value={value.description}
                        onChange={handleChange}
                        name={'description'}
                        placeholder='description'
                    />
                </div>
                <div>
                    <input 
                        text='text'
                        value={value.quantity}
                        onChange={handleChange}
                        name={'quantity'}
                        placeholder='quantity'
                    />
                </div>
                <div>
                    {/* <input 
                        text='text'
                        value={value.provider}
                        onChange={handleChange}
                        name={'provider'}
                        placeholder='provider'
                    /> */}
                </div>
            <button id='save'>.</button>
            </form>
        </div>
    )
}
