import React, {useState} from 'react'

export default function Edit() {

    const [value, updateValue] = useState({
        name: '',
        price: '',
        description: ''
    })

    const handleChange = (e) => {
        updateValue({
            ...value,
            [e.target.name]: e.target.value
        })
        console.log(value)
    }




    return (
        <div>
            <form onSubmit={null}>
            <input
                type="text"
                value={value.name}
                onChange={handleChange}
                name={'name'}
                placeholder='name'
            />
            <input 
                type="text"
                value={value.price}
                onChange={handleChange}
                name={'price'}
                placeholder='update price'
            />
            <button>Submit</button>
            </form>
        </div>
    )
}
