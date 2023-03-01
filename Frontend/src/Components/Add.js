import React from 'react'
import '../Compcss/profile.css';
import  { useState } from 'react'

const Profile = () => {
    const [name, setName] = useState('');
    const [company, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState(false);

    const add = async () => {

        if (!name || !company || !price || !category) {
            setError(true)
            return false
        }
        console.warn(name, company, price, category);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
        let result = await fetch("http://localhost:5000/add-product", {
            method: 'post',
            body: JSON.stringify({ name, company, price, category, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Product Added")
        }
    }

  return (
    <section className='section2'>
            <div className='form-box2'>
                <div className='form-value'>
            <form action=''>
                    <h2 className='form-h2'>Add Product</h2>
                <div className='input-box2'>
                    <input type="text" 
                                                value={name} onChange={(e) => { setName(e.target.value) }} />
                    {error && !name && <span className='invalid-input'>Enter Valid Name</span>}
                        <label for=''>Name</label>
                </div>
                <div className='input-box2'>
                    <input type="text"
                                                value={company} onChange={(e) => { setBrand(e.target.value) }} />
                                                {error && !company && <span className='invalid-input'>Enter Valid Brand</span>}
                        <label for=''>Brand</label>
                </div>
                <div className='input-box2'>
                    <input  type="text" 
                                                value={price} onChange={(e) => { setPrice(e.target.value) }} />
                                                {error && !price && <span className='invalid-input'>Enter Valid Price</span>}
                        <label for=''>Price</label>
                </div>
                <div className='input-box2'>
                    <input type="text" 
                                                value={category} onChange={(e) => { setCategory(e.target.value) }} />
                                                {error && !category && <span className='invalid-input'>Enter Valid Category</span>}
                        <label for=''>Category</label>
                </div>
                <div>
                    <button onClick={add} className='button2'>Add Product</button>
                </div>
                </form>
                </div>
            </div>
        </section>

  )
}

export default Profile