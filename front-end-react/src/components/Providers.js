import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Vendor from '../subcomponents/Vendor'
import {BASE_URL} from '../globals/globals'



export default function Providers(props) {

    const [providers, updateProviders] = useState([])

    useEffect(() =>{
        loadProviders()
    }, [])

    const loadProviders = async () => {
        const load = await axios.get(`${BASE_URL}/providers`)
        updateProviders(load.data.provider)
    }
  
    return (
        <div>
            <section className='inventory-grid'>
                {providers.map( (e) =>(

                    <Vendor 
                        key={e._id}
                        name={e.name}
                        {...providers}
                        onClick={() => props.history.push(`/${e._id}`)}
                    />
                    
                ))}
            </section>
        </div>
    )
}
