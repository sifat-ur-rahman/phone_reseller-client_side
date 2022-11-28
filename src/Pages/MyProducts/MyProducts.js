import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {


    const {user} = useContext(AuthContext)

    const url = `https://phone-server-side.vercel.app/addProduct?email=${user?.email}`

    const {data: products = []} = useQuery({
        queryKey: ['products', user?.email ],
        queryFn: async () => {
            const res = await fetch(url, {
               
            })
            const data = await res.json()
            return data
        }
    })

console.log( 'booking Data',products);

    return (
        <div>
            <h2>My Products</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>originalPrice</th>
        <th>resalePrice</th>
        <th>use</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        products.map((product, i) => <tr  key={product._id} className="hover">
        <th>{i+1}</th>
        <td>{product.name}</td>
        <td>{product.originalPrice} $</td>
        <td>{product.resalePrice} $</td>
        <td>{product.use} years</td>
        
      </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProducts;