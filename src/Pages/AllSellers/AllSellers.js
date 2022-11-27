import React from 'react';
import { useQuery } from '@tanstack/react-query';


const AllSellers = () => {

    const {data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/sellers')
            const data = await res.json()
            return data
        }
    })

   

    // console.log(users);

    return (
        <div>
            <h2 className='text-3xl'>
            All Sellers
            </h2>
                      <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Verify</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        users.map((user, i) => <tr key={user._id} className="hover">
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td> <button  className='btn btn-xs btn-primary'>Make verify</button></td>
        <td><button className='btn btn-xs btn-secondary'>Delete</button></td>
      </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSellers;