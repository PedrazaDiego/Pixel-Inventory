import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Vendor from '../subcomponents/Vendor'

const BASE_URL = 'http://localhost:3001/api'

export default function Providers() {

    const [providers, updateProviders] = useState([])

    useEffect(() =>{
        loadProviders()
    }, [])

    const loadProviders = async () => {
        const load = await axios.get(`${BASE_URL}/providers`)
        updateProviders(load.data.provider)
        console.log(load.data.provider)
    }

    return (
        <div>
            <section className='inventory-grid'>
                {providers.map( (e) =>(
                    <Vendor 
                        key={e._id}
                        name={e.name}
                    />
                ))}
            </section>
        </div>
    )
}
