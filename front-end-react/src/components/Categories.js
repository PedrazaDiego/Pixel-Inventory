import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Category from '../subcomponents/Category'
import { BASE_URL } from '../globals/globals'




export default function Categories() {

    const [category, updateCategory] = useState([])

    useEffect(() =>{
        getCategories()
    }, [])

    const getCategories = async () => {
        const load = await axios.get(`${BASE_URL}/inventory`)
        updateCategory(load.data.inventory)
    }

    const newCategories = [...new Set(category.map(c => c.category))]
 
    return (
        <div>
            <section className='category-list'>
                {newCategories.map( (e, e2) => (
                    <Category 
                        key={e2}
                        category={e}
                    />
                    ))}
            </section>
        </div>
    )
}


// {category.map( (e) => (
//     <Category
//         key={e._id}
//         category={e.category}
//         {...category}
//     />
// ))}