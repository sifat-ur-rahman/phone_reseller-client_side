import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyOrders = () => {

    const {user} = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email ],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

console.log( 'booking Data',bookings);


    return (
        <div>
            <h2> My orders</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Resale Price</th>
        <th>Use</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      
      {
        bookings?.map((booking, i) => <tr key={booking._id} className="hover">
        <th>{i+1}</th>
        <td>{booking.product}</td>
        <td>{booking.resalePrice}$</td>
        <td>{booking.use} Years</td>
        <td>{booking.location}</td>
      </tr>
      )
      }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyOrders;