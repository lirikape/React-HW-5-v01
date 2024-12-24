import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const About = () => {
    const navigate = useNavigate()
    const [login, setLogin]=useState(true)
    const handleBack=()=>{
        navigate('/')
    }
    if(login===false){
        return <Navigate to='/login'/>
    }
    return (
        <div>
            <Link to='/' className='text-blue-500'>Go to home</Link>
            <button 
            onClick={handleBack} 
            className='text-red-500'
            >
                Go to Home
            </button>
            <button 
            onClick={()=>navigate(-1)} 
            className='text-green-500'
            >
                Go Back
            </button>
            <button onClick={()=>setLogin(false)}>Logout</button>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate molestias autem quod voluptatum, repellendus reprehenderit laboriosam similique repudiandae libero voluptatibus deleniti alias sint iste. Eligendi minima consequatur quibusdam ab.
            Ut error ipsum numquam. Voluptatem tenetur ex voluptate quidem debitis dolor nostrum consequatur tempora, iste sit nulla placeat expedita perspiciatis doloremque, adipisci neque, iure necessitatibus alias laudantium repellendus doloribus? Laudantium.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur reprehenderit soluta repellendus numquam voluptates accusantium sunt similique officiis! Accusantium, nesciunt. Corporis esse maiores sed repellendus totam. Perferendis vitae libero quo.
            Non, cupiditate aut, unde deleniti cum sunt debitis magnam labore omnis nisi voluptate. Quos aperiam nostrum veritatis mollitia corrupti itaque, labore voluptas. Nesciunt qui similique et earum odio facere quia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, saepe voluptas. Rem enim adipisci unde at voluptate voluptas, minima officiis dolorem quaerat vel, ipsum, repellendus asperiores quibusdam ea sequi cumque!
            Deserunt officia rem itaque repellendus ea rerum architecto corporis. Delectus animi, assumenda ut mollitia, illum, molestias quos eveniet explicabo ipsum tenetur iusto cum nihil voluptas fuga at eaque nulla nostrum!
            Vero, quo. Asperiores eos laboriosam dolore aliquid earum vitae ipsum labore provident. Nobis voluptatem ducimus reprehenderit eius cupiditate nihil, a magni reiciendis in magnam eligendi architecto ipsam! Tenetur, neque inventore.
            Veniam voluptas unde laborum quod maxime voluptate corporis dicta nostrum doloremque praesentium placeat consequatur distinctio porro consequuntur earum perferendis animi natus deleniti veritatis, est facere? Unde odit perferendis illum ex.
            Iste labore quisquam tenetur voluptate neque consectetur eligendi ut quis architecto, sequi unde dicta iure illum nulla vel, amet repellat exercitationem sit, dolorum aut nobis impedit. Accusamus unde autem laudantium!
            Exercitationem consectetur quae distinctio quidem. Voluptates ducimus provident quia et blanditiis minima, nobis similique numquam quis, quae vel a illo nemo minus iusto vero. Illo quam natus commodi inventore nostrum.
            Hic optio similique quia quisquam doloribus, explicabo reprehenderit corporis id fugit, exercitationem suscipit doloremque non ea assumenda? Quae sunt ad cumque vero quam ut, beatae dicta officia. Nulla, porro asperiores!
            Nesciunt veritatis nisi obcaecati dolorem in placeat, quas numquam, pariatur rem incidunt voluptatem earum doloremque voluptate quod aut esse ullam? Nam autem aperiam totam sit delectus excepturi vero repudiandae vel!
            Odio similique nemo maxime laborum nesciunt temporibus iusto aliquam commodi necessitatibus. Quod labore animi culpa repellat recusandae commodi nobis in exercitationem distinctio saepe, porro nostrum officiis quas rem tempore. Officiis.
            Nisi cumque placeat laboriosam provident obcaecati alias rem officiis cupiditate dolorum fugiat, eius quod assumenda qui neque dicta error accusantium repellat ad dignissimos sit distinctio quaerat quo. Cum, provident aliquid.</p>
        </div>
    )
}
