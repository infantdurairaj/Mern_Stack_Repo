import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function UpdateProduct() {
    const [name, setName] = useState('');
    const [company, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setBrand(result.company);
        setPrice(result.price);
        setCategory(result.category);
    }

    const updatePro = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, company, price, category }),
            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json();
        if (result) {
            navigate('/');
        }

    }

    return (
        <section className='section1'>
            <div className='formboxx'>
            <form action=''>
                    <h2>Update Product</h2>
                <div className='input-box'>
                    <input type="text" 
                        value={name} onChange={(e) => { setName(e.target.value) }} />
                        <label for=''> Product</label>
                </div>
                <div className='input-box'>
                    <input type="text"
                        value={company} onChange={(e) => { setBrand(e.target.value) }} />
                        <label for=''> Brand</label>
                </div>
                <div className='input-box'>
                    <input  type="text"
                        value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        <label for=''> Price</label>
                </div>
                <div className='input-box'>
                    <input type="text"
                        value={category} onChange={(e) => { setCategory(e.target.value) }} />
                        <label for=''> Category</label>
                </div>
                <div>
                    <button onClick={updatePro} className='Inup-button'>Update</button>
                </div>
                </form>
            </div>
        </section>

    )
}

export default UpdateProduct;