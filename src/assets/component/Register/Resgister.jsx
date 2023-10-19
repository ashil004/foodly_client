import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import swal from 'sweetalert';



const Register = () => {
    const {createUser }= useContext(AuthContext)
    const [ragsuss , setragsuss] =useState('');
    const [registerError,setregisterError] = useState('');
    const [manages,setmanages] =useState('');

    const [showPasswords,setshowPasswords] = useState(false)
    const OnClicking = event =>{
        event.preventDefault();
        const from = event.target;
        const name = from. name.value;
        const email = from. email.value;
        const password = from. password.value;
        console.log(name, email, password);
        createUser( email, password)
        .then((result)=>{ 
            const user = result.user;
            console.log(user);
            setragsuss( swal('Good job','For your Registration'));
            setmanages(user.email);
        })
        
        .catch((error)=>{
            const errorMessage = error.massage;
            console.log(errorMessage);
            setregisterError(errorMessage);
        })

        if (password .length < 8){
            setregisterError('Password must be at least 8 characters long')
            return;
        }else if( !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test ( password) ){
            setregisterError('Password must contain at least one number and one uppercase and lowercase letter')
            return;
        }

        setregisterError('')
        setragsuss('')



    }
    return (
        <div>
            <div className='max-w-2xl mx-auto'>

                <h3 className='text-2xl text-center font-bold'>Register your account</h3>
                <form onSubmit={OnClicking} className=' md:w-3/4 lg:w-1/2 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800">Password</span>
                        </label>
                        <input type= "password" name='password' placeholder="password" className="input input-bordered" required />

                       
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn order-blue-400 rounded-lg bg-blue-400 text-white hover:text-black">Register</button>

                        <div className='flex items-center gap-4'>
                            <p className='text-xl'>Already You have an Account? </p>
                            <Link to="/login" className="label-text-alt link link-hover text-blue-800 text-xl">Login</Link>
                        </div>
                    </div>

                </form>
                


            </div>

        </div>
    );
};

export default Register;