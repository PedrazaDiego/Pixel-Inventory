import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Vendor from '../subcomponents/Vendor'
import Category from '../subcomponents/Category'

const BASE_URL = 'http://localhost:3001/api'


export default function Categories() {

    const [category, updateCategory] = useState([])

    useEffect(() =>{
        getCategories()
    }, [])

    const getCategories = async () => {
        const load = await axios.get(`${BASE_URL}/inventory`)
        updateCategory(load.data.inventory)
    }

    return (
        <div>
            <section className='inventory-grid'>
                {category.map( (e) => (
                    <Category
                        key={e._id}
                        category={e.category}
                        {...category}
                    />
                ))}
            </section>
        </div>
    )
}
