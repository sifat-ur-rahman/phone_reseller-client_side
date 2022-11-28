import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const {register, formState:{errors}, handleSubmit } = useForm();

    const handleAddProduct = data =>{
        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url =`https://api.imgbb.com/1/upload?key=a135457f4ca9a16c458962a3ed75df96`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
           if(imgData.success){
            console.log(imgData.data.url);
            const product ={
                name: data.name,
                originalPrice: data.original,
                resalePrice: data.resale,
                category: data.category,
                img: imgData.data.url,
                use: data.use,
                email: user.email

            }
            console.log(product);

            fetch('https://phone-server-side.vercel.app/products',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json',
                    
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // toast.success(`${data.name} is added successfully`)
                // navigate('/dashboard/manageDoctor')
            })
           }
        })
    }


    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'> Add A Product </h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
     
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">Name</span>
         </label>
         <input type="text" 
         {...register("name", {required: 'Name Address is required'})}
          className="input input-bordered w-full max-w-xs"/>
          {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
     </div>
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">Original Price</span>
         </label>
         <input type="text" 
         {...register("original", {required: 'Original price Address is required'})}
          className="input input-bordered w-full max-w-xs"/>
          {errors.original && <p className='text-red-600'>{errors.original?.message}</p>}
     </div>
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">Resale Price</span>
         </label>
         <input type="text" 
         {...register("resale", {required: 'resale price Address is required'})}
          className="input input-bordered w-full max-w-xs"/>
          {errors.resale && <p className='text-red-600'>{errors.resale?.message}</p>}
     </div>
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">use Years</span>
         </label>
         <input type="text" 
         {...register("use", {required: 'use is required'})}
          className="input input-bordered w-full max-w-xs"/>
          {errors.use && <p className='text-red-600'>{errors.use?.message}</p>}
     </div>
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">Specialty</span>
         </label>
         <select  {...register("category", {required: 'specialty is required'})} className="select select-bordered w-full max-w-xs">
         
         
             <option>3G</option> 
             <option>4G</option> 
             <option>5G</option> 
         
            
             
</select>
         
     </div>
     <div className="form-control w-full max-w-xs">
         <label className="label">
              <span className="label-text">Photo</span>
         </label>
         <input type="file" 
         {...register("img", {required: 'photo is required'})}
          className="input input-bordered w-full max-w-xs"/>
          {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
     </div>

     
         <input className='btn btn-accent w-full mt-5' value = 'Add Doctor' type="submit" />

         
  </form>
        </div>
    );
};

export default AddProduct;