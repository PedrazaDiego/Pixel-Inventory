import  React, {useState, useEffect} from 'react'
import axios from 'axios'
import Edit from '../subcomponents/Edit'
import Edit1 from '../subcomponents/Edit1'


const BASE_URL = 'http://localhost:3001/api/'



export default function Details(props) {

    const [productDetail, updateProductDetail] = useState([])
    const [productOrProvider, updatePorP] = useState('')
    const [renderEdit, updateRenderEdit] = useState(null)


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
        }
    }

    const confirmation = () => {
        updateRenderEdit(2)
    }

    const deletePro = async () => {
        await axios.delete(`${BASE_URL}${productOrProvider}/${props.match.params.id}`)
        console.log(`${productOrProvider} deleted`)
        props.history.push(`/`)
    }
    
    const updatePro = () => {
        if(productOrProvider === 'inventory'){
            updateRenderEdit(0)
        } else if(productOrProvider === 'provider'){
            updateRenderEdit(1)
        }
    }


    return (
        <div className='details'>     
            <h1>{productDetail.name}</h1>
            {productDetail.cost ? <span >Cost: {productDetail.cost}</span> : ''}
            {productDetail.price ? <span >Price: <img src='https://i.imgur.com/aQeGwOX.png' width={20}/> {productDetail.price} / {productDetail.quantity}</span> : ''}
            {productDetail.category ? <h3 >Category: {productDetail.category}</h3> : ''}
            {productDetail.description ? <p > Description: {productDetail.description}</p> : ''}
            {productDetail.provider ? <h4 >Provider: {productDetail.provider}</h4> : ''}
            {productDetail.details ? <p>Details: {productDetail.details}</p> : ''}
            {productDetail.url ? <p>Web Page: {<a href={`${productDetail.url}`}> {productDetail.name}</a>}</p> : ''}
            <h5>
                Creation date: {productDetail.createdAt}/
                Update date: {productDetail.updatedAt}
            </h5>
            <div>
                <button onClick={confirmation} id='delete'>.</button>
                {renderEdit === 2 ? <button onClick={deletePro}> Confirm Deletion </button> : null}
                <button onClick={updatePro} id='edit'>.</button>
                {renderEdit === 0 ? <Edit params={props.match.params.id}/> : null}
                {renderEdit === 1 ? <Edit1 params={props.match.params.id}/> : null}
            </div>
        </div>
    )
}
