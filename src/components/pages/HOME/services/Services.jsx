import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCArd/serviceCard";

const Services = () => {

    const [services,setService]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5002/services')
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[])






    return (
        <div className="my-10">
              <div className="text-center">
                   <h3 className="text-[#FF3811] font-bold text-lg">Service</h3>
                   <h2 className="font-semibold text-3xl ">Our Service Area</h2>
                   <p className="text-[#737373] py-2">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
              </div>


              <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {services.map(service=><ServiceCard
                  key={service._id}
                  service={service}
                ></ServiceCard>)}
              </div>
        </div>
    );
};

export default Services;