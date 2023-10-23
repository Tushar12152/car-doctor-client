import { Link, useNavigate } from "react-router-dom";
import logInPh from "../../../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import swal from "sweetalert";

const SignUp = () => {
const {createUser}=useContext(AuthContext)
const [show,setShow]=useState(true)
const navigate=useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)


        createUser(email,password)
        .then(()=>{
            // console.log(res.user)
            swal("Congratulations!", "your registration compleate successfully compleate", "success");
            navigate('/login')
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
          <h1 className="text-3xl p-5 text-center font-semibold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
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
                value="sign up"
              />
            </div>
            <p className="text-center p-5">
              Have an Account?
              <Link to="/login" className="text-[#FF3811]">
               Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;