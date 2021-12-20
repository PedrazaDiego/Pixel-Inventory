import  React, {useState, useEffect} from 'react'
import axios from 'axios'
import Edit from '../subcomponents/Edit'


const BASE_URL = 'http://localhost:3001/api/'



export default function Details(props) {

    const [productDetail, updateProductDetail] = useState([])
    const [productOrProvider, updatePorP] = useState('')
    const [renderEdit, updateRenderEdit] = useState(false)


    useEffect(() =>{
        loadDetails()
    }, [])


    const loadDetails = async () => {
        const findDetails = await axios.get(`${BASE_URL}find/${props.match.params.id}`)
        if (findDetails.data.product){
            console.log('this is a product')
            updatePorP('inventory')
            updateProductDetail(findDetails.data.product)
        } else if (findDetails.data.provider){
            console.log('this is a provider')
            updatePorP('provider')
            updateProductDetail(findDetails.data.provider)
            console.log(productOrProvider)
        }
    }

    const deletePro = async () => {
        await axios.delete(`${BASE_URL}${productOrProvider}/${props.match.params.id}`)
        console.log(`${productOrProvider} deleted`)
    }
    
    const updatePro = () => {
        updateRenderEdit(true)
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

                <div>
                    <button onClick={deletePro}>Delete</button>
                    <button onClick={updatePro}>Edit</button>
                    {renderEdit ? <Edit /> : null}
                </div>
            </section>
        </div>
    )
}
