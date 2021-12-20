import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Vendor from '../subcomponents/Vendor'

const BASE_URL = 'http://localhost:3001/api'

export default function Providers(props) {

    const [providers, updateProviders] = useState([])

    useEffect(() =>{
        loadProviders()
    }, [])

    const loadProviders = async () => {
        const load = await axios.get(`${BASE_URL}/providers`)
        updateProviders(load.data.provider)
    }

    // let filtered = [... new Set(providers.map(p => p.name))]
    // console.log(filtered)
    //filters the name but loses acces to the rest of the object
    

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
