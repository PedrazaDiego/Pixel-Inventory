import React, {useState} from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api/'

export default function Edit1(props) {

    const [value, updateValue] = useState({
        name: '',
        details: '',
        url: '',
    })

    const handleChange = (e) => {
        updateValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const submitUpdate = async (e) => {
        // e.preventDefault()
        await axios.put(`${BASE_URL}provider/${props.params}`, value)
    }



    return (
        <div className='edit-form'>
            <form onSubmit={submitUpdate}>
                <div>
                    <input
                        type='text'
                        value={value.name}
                        onChange={handleChange}
                        name={'name'}
                        placeholder='update name'
                    />
                </div>
                <div>
                    <textarea
                        type='text'
                        value={value.details}
                        onChange={handleChange}
                        name={'details'}
                        placeholder='update details'
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={value.url}
                        onChange={handleChange}
                        name={'url'}
                        placeholder='update url'
                    />
                </div>
            <button id='save'>.</button> 
            </form>
        </div>
    )
}
