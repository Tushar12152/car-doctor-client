import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-100 py-10 ">
        <div className="hero-content flex-col lg:flex-row gap-10">
      <div className='lg:w-1/2 relative'>
      <img src={person} className="max-w-sm rounded-lg shadow-2xl w-[460px]" />
      <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-[250px] absolute lg:right-28 -right-2 -bottom-10" />

      </div>

          <div className='lg:w-1/2 space-y-1'>
            <p className='text-[#FF3811] font-bold text-lg'>About Us</p>
            <h1 className="text-3xl font-semibold">We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-2 text-[#737373]">There are many variations of passages of Lorem Ipsum <br /> available but the majority have suffered alteration in <br /> some  form, by injected humour, or randomised words which  donot look even slightly believable. </p>

            <p className="py-2 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
            <button className='btn bg-[#FF3811] hover:  border-2 border-[#FF3811] hover:text-[#FF3811]  text-white'> Get More Info</button>
          </div>

        </div>

      </div>
    );
};

export default About;