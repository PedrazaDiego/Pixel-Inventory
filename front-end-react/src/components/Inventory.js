import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Products from '../subcomponents/Products'

const BASE_URL = 'http://localhost:3001/api'

export default function Inventory() {

    const [products, updateProducts] = useState([])

    useEffect(() =>{
        loadInventory()
    }, [])

    const loadInventory = async () => {
        const load = await axios.get(`${BASE_URL}/inventory`)
        updateProducts(load.data.inventory)
        console.log(load)
        console.log(load.data.inventory)
    }


    return (
        <div>
            <section className='inventory-grid'>
                {products.map( (e) => (
                    <Products 
                        key={e._id}
                        name={e.name}
                    />
                ))}
            </section>
        </div>
    )
}
