import React from 'react'
import bgImg from '../assests/ats1.jpg'; 
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Avatar} from '@mui/material'

export default function SignUp() {

  const{register,handleSubmit,watch,formState:{errors}}=useForm()
//   const onSubmit= data => console.log(data);
 
  console.log(watch('username'));
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://65bc783652189914b5bdee93.mockapi.io/ATS ', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
    console.log('values:',data);
  };

  console.log(watch('username'));

  return (
   <section>

    <div className="register">

    <div className='col-2'>
        <img src={bgImg} alt=''/>

    </div>
    <div className='col-1'>
    <Avatar src='./img1.jpeg' style={{marginLeft:'125px',padding:'10px'}} />
        <h2></h2>
        <span>Register form</span>
        <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("username")} placeholder='username'/>
            <input type='text' {...register("password")}placeholder='password'/>
            <input type='text' {...register("confirm password")}placeholder='Confirm password'/>
            <input type='text' {...register("mobile",{required:true,maxLength:10})}placeholder='mobile'/>
            {errors.mobile?.type === "required" && "mobile number is required"}
            {errors.mobile?.type === "maxLength" && "max length exceed"}

            <button className='btn' >Sign Up</button>
        </form>
    </div>
   
    </div>
   </section>
  )
}