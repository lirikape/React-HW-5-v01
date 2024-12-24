import { UserContext } from 'context/UserProvider';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom';


export const RegisterForm = () => {
    const {login, isLoggedIn}= useContext(UserContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submit=data=>{
        console.log(data);
        login()
        reset()
    }
    if(isLoggedIn){
       return <Navigate to='/'/>
    }
  
    return (
        <div className='w-[450px] h-[700px] border flex justify-center'>
            <form onSubmit={handleSubmit(submit)}>
                <h1>Register Form</h1>
                <h3>Name</h3>
                <input            {...register('name', { 
                            required: 'Field is required!', 
                            minLength: { value: 3, message: 'Must be at least 3 characters!' } 
                        })} 
                        className={`border rounded outline-none focus:outline-2 ${
                            errors?.name 
                                ? 'border-red-500 focus:border-red-500 focus:outline-red-500' // Червоний бордер і аутлайн для помилки
                                : 'border-blue-500 focus:border-blue-500 focus:outline-blue-500' // Блакитний бордер і аутлайн для нормального стану
                        }`} />
{errors?.name ? <p className="text-red-500">{errors.name.message}</p> : null}
                <br />
                <h3>Email</h3>
                <input {...register('email')} className='border rounded'/>
                <br />
                <h3>Password</h3>
                <input {...register('password')} className='border rounded'/>
                <br />
                

                <br />
                <h3>Country</h3>
                <select  {...register('country')}>
                    <option value="ukraine">Ukraine</option>
                    <option value="sri-lanka">Sri-lanka</option>
                    <option value="usa">USA</option>
                </select>
                <br />
                <div className='flex'>

                <input type='checkbox' {...register('agree')} className='border rounded'/>
                <h3>i agree</h3>
                </div>
                <br />
                <button type='submit' className='border'>Register</button>
            </form>
        </div>
    )
}