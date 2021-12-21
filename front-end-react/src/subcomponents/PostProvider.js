import React, {useState} from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api/'

export default function PostProvider(props) {

    const [value, updateValue] = useState({
        name: '',
        details: '',
        url: ''
    })

    const handleChange = (e) => {
        updateValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const submitUpdate = async (e) => {
        // e.preventDefault()
        await axios.post(`${BASE_URL}addprovider`, value)
    }

    return (
        <div className='edit-form'>
            <form onSubmit={submitUpdate}>
                <div>
                    <input 
                      value={value.name}
                      onChange={handleChange}
                      name={'name'}
                      placeholder='provider name'
                    />
                </div>
                <div>
                    <textarea
                        type='text'
                        value={value.details}
                        onChange={handleChange}
                        name={'details'}
                        placeholder='provider details'
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={value.url}
                        onChange={handleChange}
                        name={'url'}
                        placeholder='provider url'
                    />
                </div>
            <button id='save'>.</button> 
            </form>
            
        </div>
    )
}
