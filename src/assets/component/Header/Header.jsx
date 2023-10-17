import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const link = <>
        <li className="text-teal-400 font-bold text-xl"><NavLink to={'/'} >Home</NavLink></li>
        <li className="text-teal-400 font-bold text-xl"><NavLink to={'/services'} >Services</NavLink></li>
        <li className="text-teal-400 font-bold text-xl "><NavLink to={'/about'} >About</NavLink></li>
        <li className="text-teal-400 font-bold text-xl"><NavLink to={'/contact'} >Contact</NavLink></li>


    </>

    return (
        <div>
            <div className="navbar bg-pink-300  p-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <img src="https://i.ibb.co/tBz3dw7/Screenshot-85.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={"https://i.ibb.co/fQ15fh8/ben-sweet-2-Lowvi-VHZ-E-unsplash.jpg"} />
                    </div>
                </label>
                <Link to={'/login'} ><button className="btn ">Login</button></Link>


            </div>
        </div>
        </div>
    );
};

export default Header;