import img1 from '../../../../assets/images/banner/1.jpg'
import img2 from '../../../../assets/images/banner/2.jpg'
import img3 from '../../../../assets/images/banner/3.jpg'
import img4 from '../../../../assets/images/banner/4.jpg'
// import img5 from '../../../../assets/images/banner/5.jpg'
// import img6 from '../../../../assets/images/banner/6.jpg'



const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex lg:flex-col items-center lg:items-start justify-center lg:justify-start  rounded-xl  transform -translate-y-1/2 left-0 right-5 top-1/2 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className='text-white w-2/3 pt-40 pl-20'>
                 <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                 <p className='py-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

            </div>

            <div className='flex gap-5 flex-col lg:flex-row  pl-20'>
                  <button className='btn bg-[#FF3811] hover:  border-2 border-[#FF3811] hover:text-[#FF3811] '> Discover More</button>
                  <button className="btn btn-outline border-2 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-[white]">Latest Project</button>
            </div>

          </div>


          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a  href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❮</a> 
            <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
          </div>


        </div> 



        
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full  rounded-xl" />

          <div className=" rounded-xl absolute flex lg:flex-col items-center lg:items-start justify-center lg:justify-start  transform -translate-y-1/2 left-0 right-5 top-1/2 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className='text-white w-2/3 pt-40 pl-20'>
                 <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                 <p className='py-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

            </div>

            <div className='flex gap-5 flex-col lg:flex-row  pl-20'>
                  <button className='btn bg-[#FF3811] hover:  border-2 border-[#FF3811] hover:text-[#FF3811] '> Discover More</button>
                  <button className="btn btn-outline border-2 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-[white]">Latest Project</button>
            </div>

          </div>


          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❮</a> 
            <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
          </div>



        </div> 
        <div id="slide3" className="carousel-item relative w-full rounded-lg">

        <div className=" rounded-xl absolute flex lg:flex-col items-center lg:items-start justify-center lg:justify-start  transform -translate-y-1/2 left-0 right-5 top-1/2 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className='text-white w-2/3 pt-40 pl-20'>
                 <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                 <p className='py-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

            </div>

            <div className='flex gap-5 flex-col lg:flex-row  pl-20'>
                  <button className='btn bg-[#FF3811] hover:  border-2 border-[#FF3811] hover:text-[#FF3811] '> Discover More</button>
                  <button className="btn btn-outline border-2 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-[white]">Latest Project</button>
            </div>

          </div>



          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">❮</a> 
            <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
          </div>
        </div> 



        <div id="slide4" className="carousel-item relative w-full rounded-lg">
          <img src={img4} className="w-full rounded-xl" />


          <div className=" rounded-xl absolute flex lg:flex-col items-center lg:items-start justify-center lg:justify-start  transform -translate-y-1/2 left-0 right-5 top-1/2 gap-5  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
          <div className='text-white w-2/3 pt-40 pl-20'>
                 <h2 className="text-6xl font-bold">Affordable <br /> Price For Car <br /> Servicing</h2>
                 <p className='py-6'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>

            </div>

            <div className='flex gap-5 flex-col lg:flex-row  pl-20'>
                  <button className='btn bg-[#FF3811] hover:  border-2 border-[#FF3811] hover:text-[#FF3811] '> Discover More</button>
                  <button className="btn btn-outline border-2 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-[white]">Latest Project</button>
            </div>

          </div>


          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">❮</a> 
            <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;