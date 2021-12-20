import  React, {useState, useEffect} from 'react'
import axios from 'axios'


const BASE_URL = 'http://localhost:3001/api/find/'
const BASE_INVENTORY = 'http://localhost:3001/api'


export default function Details(props) {

    const [productDetail, updateProductDetail] = useState([])


    useEffect(() =>{
        loadDetails()
    }, [])


    const loadDetails = async () => {
        const findDetails = await axios.get(`${BASE_URL}${props.match.params.id}`)
        if (findDetails.data.product){
            console.log('this is a product')
            updateProductDetail(findDetails.data.product)
        } else if (findDetails.data.provider){
            console.log('this is a provider')
            updateProductDetail(findDetails.data.provider)
        }
        
        console.log(findDetails.data)
        console.log(productDetail)
    }

    
    


    return (
        <div>
            <section className='details'>
                <h1>{productDetail.name}</h1>
                {productDetail.price ? <span>${productDetail.price} / {productDetail.quantity}</span> : ''}
                {productDetail.description ? <p> Description: {productDetail.description}</p> : ''}

                {productDetail.provider ? <h5>Provider: {productDetail.provider}</h5> : ''}
                <h5>Creation date: {productDetail.createdAt}</h5>
                <h5>Update date: {productDetail.updatedAt}</h5>

                <button>X</button>
                <button>Edit</button>
            </section>
        </div>
    )
}
