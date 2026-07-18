import "../App.css";
import {Link} from 'react-router-dom'
import logo from '../assets/codedroplogo.jpg'

function Login(){

 return <section className='login-container  flex items-center justify-center  flex-col  text-white'> 
        <div className='w-full max-w-sm flex  items-end gap-4 p-3 justify-center '>
      <img className='logo' src={logo}/>
    <h2 className='text-white text-[28px] flex  items-center justify-center font-semibold'>
        CodeDrop
      </h2>
      </div>
        <div className='form-wrapper bg-white flex flex-col gap-4 items-center'>
             <article className='form-header text-center '>
                <h1>Welcome back 👨‍💼</h1>
                <p> Log in to your account</p>
             </article>
             <form className='form flex flex-col '>
                <div className="w-full input-wrapper">
                  <label>Email</label>
                    <input type="email" name="email" id="number"
                placeholder="you@gmail.com" required autocomplete="off"/>
                </div>
                <div className="w-full input-wrapper ">
                  <label>Password</label>
                    <input className="w-full " type="password" name="password" id="number"
                 required autocomplete="off"/>
                </div>
                <button className="btn login-btn">Log in</button>
             </form>
             <div className='flex items-center gap-3 w-[90%]'>
         <div className='h-px flex-1 bg-gray-300'>
         </div>
         <span className='text-sm text-gray-500 font-medium'>or</span>
         <div className='h-px flex-1 bg-gray-300'>
        </div>
      </div>
               < button className="btn">Continue width Github</button>
               <p className="form-footer">Don't have an account<span><Link to='/'>Sign up</Link>
               </span></p>

        </div>
         
           
       </section>
}

export default Login;


