import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json()
            if (result) {
                setProducts(result)
                console.warn(result)
            }
        } else {
            getProducts();
        }
    }
    return (

        <>
            <div className='product-list'>
                <h1>Product</h1>
                <input type='search' className='search-product' placeholder='Search Product' onChange={searchHandle} />
                <ul className='product-ul'>
                    <li>S.No</li>
                    <li>Brand</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Operation</li>
                </ul>
                {
                    products.length > 0 ? products.map((item, index) =>
                        <ul key={item._id}>
                            <li>{index + 1}</li>
                            <li>{item.company}</li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li>{item.category}</li>
                            <li><button className='app-Button' onClick={() => deleteProduct(item._id)}>Delete</button>
                                <Link className='update-list' to={"/update/" + item._id}> / Update</Link></li>
                        </ul>)
                        : <h1>No Data Found</h1>
                }
            </div>
        </>
    )
}

export default Product;