import team1 from "../../../../assets/images/team/1.jpg"
import team2 from "../../../../assets/images/team/2.jpg"
import team3 from "../../../../assets/images/team/3.jpg"
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram } from 'react-icons/ai';



const Team = () => {
  return (
    <div>
      <div className="space-y-3">
        <h3 className="font-bold text-xl text-center text-[#FF3811]">Team</h3>
        <h1 className="font-bold text-5xl text-center">Meet Our Team</h1>
        <p className="text-center text-[#737373] lg:w-[620px] mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      <div className="card w-[364px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={team1}
              alt="team"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
           
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="">Engine Expert</p>
             <div className="text-3xl flex gap-4">
                 <span className="text-[#395185]"><FaFacebook></FaFacebook></span>
                <span className="text-[#55ACEE]"><AiFillTwitterCircle></AiFillTwitterCircle></span>
                <span className="text-[#0A66A2] rounded-full"><AiFillLinkedin></AiFillLinkedin></span>

                <span className=""><AiFillInstagram className=""></AiFillInstagram></span>
             </div>
          </div>
        </div>

        <div className="card w-[364px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={team2}
              alt="team"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
           
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="">Engine Expert</p>
             <div className="text-3xl flex gap-4">
                 <span className="text-[#395185]"><FaFacebook></FaFacebook></span>
                <span className="text-[#55ACEE]"><AiFillTwitterCircle></AiFillTwitterCircle></span>
                <span className="text-[#0A66A2] rounded-full"><AiFillLinkedin></AiFillLinkedin></span>

                <span className=""><AiFillInstagram className=""></AiFillInstagram></span>
             </div>
          </div>
        </div>


        <div className="card w-[364px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={team3}
              alt="team"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
           
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="">Engine Expert</p>
             <div className="text-3xl flex gap-4">
                 <span className="text-[#395185]"><FaFacebook></FaFacebook></span>
                <span className="text-[#55ACEE]"><AiFillTwitterCircle></AiFillTwitterCircle></span>
                <span className="text-[#0A66A2] rounded-full"><AiFillLinkedin></AiFillLinkedin></span>

                <span className=""><AiFillInstagram className=""></AiFillInstagram></span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
