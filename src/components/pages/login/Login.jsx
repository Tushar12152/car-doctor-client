import { Link, useNavigate } from "react-router-dom";
import logInPh from "../../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../../Provider/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const {signIn,googlePopUp}=useContext(AuthContext)
   const navigate=useNavigate()
    const [show,setShow]=useState(true)


    const handleGooglePopUp=()=>{
      googlePopUp()
      .then(()=>{
        swal('wow','you are logged in successfully',"success")
        navigate('/')
      })
      .catch(err=>{
        console.log(err)
      })
    }


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email,password)
    .then(()=>{
        // console.log(res)
        swal('wow','you are logged in successfully',"success")
        navigate('/')
    })
    .catch(err=>{
        console.log(err)
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col  items-center justify-between gap-36 lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={logInPh} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl p-5 text-center font-semibold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
             <input
                name="password"
                type={show?'text':"password"}
                placeholder="password"
                className="input input-bordered w-full"
                required
              />

              <span className="top-4 right-1 absolute " onClick={()=>setShow(!show)}>{show?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>
             </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#FF3811] text-white"
                type="submit"
                value="sign in"
              />
            </div>
            <p className="text-center p-5">
              Have No Account?
              <Link to="/signUp" className="text-[#FF3811]">
                Sign up
              </Link>
            </p>

            <div>
            <p className="text-center font-semibold border-b-2 pb-4">Sign Up With</p>
            <button onClick={handleGooglePopUp} className="p-4 ml-36 text-3xl  "><FcGoogle></FcGoogle></button>
            </div>
          </form>

         
        </div>
      </div>
    </div>
  );
};

export default Login;
