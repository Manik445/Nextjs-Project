'use client'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setProducts(data.products); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };    
        fetchData();
    }, []); 

    // fun() 
   // const data = await data.json(); 
   // return data.product // use this 
   // 
    return (
        <div>
            <h2>ProductList data</h2>
            {
                products.length > 0 && products.map((item) => (
                    <div>
                    <h2 key={item.id}>Name: {item.title}, Price: {item.price}</h2>
                    {
                        item.images.map((imageUrl , index)=>(
                            <img
                                key={index}
                                src={imageUrl}
                                style={{ width: '150px', height: '150px', margin: '5px' }}
                            />
                        ))
                    }
                    </div> 
                    
                )) 
            }    
        </div>
    );
      
};

export default Page;
