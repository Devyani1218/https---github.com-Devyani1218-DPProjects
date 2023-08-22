import React, { useState } from 'react'
import Mysignup from './signup';
import "./login.css"
import { Link } from 'react-router-dom';

    function MyForm(){
    const [inputs, setInputs] = useState({});
   

const handlechange =(event)=> {
    const mail = event.target.mail;
    const pass=event.target.pass;
    setInputs(values => ({...pass, [mail]: pass}))
    console.log(inputs);
}
   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    
  }

return(
        <form onSubmit={handleSubmit}>
         <div className='container'>
             <div className='design'> LOGIN </div>
            <label>
           
                        <div className='maildesign'>Email</div> 
          
                <input type="email"
                autoFocus  
                value={inputs.mail} 
                placeholder='Enter your MailId'
                onChange= {handlechange} required/>

           </label>
                
           <label>
                <div className='pass'>Password</div> 
                <input type="password"
                value={inputs.pass} 
                placeholder='Enter Password'
                onChange= {handlechange} required/>
           </label>
           
           <label>
                <div>
                <input value = "test" type = "checkbox" onChange = {handlechange} />
                <span className='checkedbox' > Remember Me </span>
                </div>
            </label>
           
           
        
           <div className='button'>
           <>
           <button type="submit">Login</button>
           </> 
           </div>
           
           <div>
          
             <span style={{  fontSize: '1em', color: 'white' }} > Create a Account? </span> 
            <Link to="/Mysignup" className='btn1'>Click Here</Link>
           
           </div>
           
        </div>
           
        </form>

)
}

export default MyForm;