import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import { GoogleAuthProvider,  getAuth, signInWithPopup, } from "firebase/auth";
import app from "../FireBase/firebase.config";




const Login = () => {
    const { singIn } = useContext(AuthContext);
    
    const LoginOnclick = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
        singIn(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })


    }


    const logingwithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const Auth  = getAuth(app);
        signInWithPopup(Auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setmanages(user.email);


            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

        })
    
    }
    return (
        <div>
            <div className='max-w-2xl mx-auto'>
                <h3 className='text-4xl font-bold text-center '>Please Login </h3>
                <form onSubmit={LoginOnclick} className=' md:w-3/4 lg:w-1/2 mx-auto' >
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-blue-800">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn order-blue-400 rounded-lg bg-blue-400 text-white hover:text-black">Login</button>
                        <button onClick={logingwithGoogle}  className="btn order-blue-400 rounded-lg bg-blue-400 text-white hover:text-black"> Login In Google</button>
                        <div className='flex items-center gap-4'>
                            <p className='text-xl'>Don't have an account?  </p>
                            <Link to='/register' className="label-text-alt link link-hover text-blue-800 text-xl">Register</Link>
                        </div>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Login;