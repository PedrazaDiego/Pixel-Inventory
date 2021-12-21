import React, {useState} from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api/'

export default function Edit(props) {

    const [value, updateValue] = useState({
        name: '',
        cost: '',
        price: '',
        category: '',
        description: '',
        quantity: '',
    })

    const handleChange = (e) => {
        updateValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const submitUpdate = async (e) => {
        e.preventDefault()
        await axios.put(`${BASE_URL}inventory/${props.params}`, value)
    }



    return (
        <div className='edit-form'>
            <form onSubmit={submitUpdate}>
                <div>
                    <input
                    type="text"
                    value={value.name}
                    onChange={handleChange}
                    name={'name'}
                    placeholder='update name'
                    />
                </div>
                <div>
                    <input
                    type="text"
                    value={value.cost}
                    onChange={handleChange}
                    name={'cost'}
                    placeholder='update cost'
                    />
                </div>
                <div>
                    <input 
                    type="text"
                    value={value.price}
                    onChange={handleChange}
                    name={'price'}
                    placeholder='update price'
                    />
                </div>
                <div>
                    <input
                    type="text"
                    value={value.category}
                    onChange={handleChange}
                    name={'category'}
                    placeholder='update category'
                    />
                </div>
                <div>
                    <textarea
                    type="text"
                    value={value.description}
                    onChange={handleChange}
                    name={'description'}
                    placeholder='description'
                    />
                </div>
                <div>
                    <input
                    type="text"
                    value={value.quantity}
                    onChange={handleChange}
                    name={'quantity'}
                    placeholder='quantity'
                    />
                </div>
                <div>
                {/* <input
                    type="text"
                    value={value.provider}
                    onChange={handleChange}
                    name={'provider'}
                    placeholder='provider'
                    /> */}
                </div>
  
            <button>Submit</button>
            </form>
        </div>
    )
}
