import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Products from '../subcomponents/Products'
import {BASE_URL} from '../globals'

BASE_URL = 'http://localhost:3001/api'

export default function Inventory(props) {

    const [products, updateProducts] = useState([])

    useEffect(() =>{
        loadInventory()
    }, [])

    const loadInventory = async () => {
        const load = await axios.get(`${BASE_URL}/inventory`)
        updateProducts(load.data.inventory)
    }


    return (
        <div>
            <section className='inventory-grid'>
                {products.map( (e) => (
                    <Products 
                        key={e._id}
                        name={e.name}
                        {...products}
                        onClick={() => props.history.push(`/${e._id}`)}
                    />
                ))}
            </section>
        </div>
    )
}
