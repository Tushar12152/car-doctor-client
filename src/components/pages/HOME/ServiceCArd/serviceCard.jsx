import PropTypes from "prop-types";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
//   console.log(service)
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[314px] h-[200px]"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body ml-5">
   <div className="flex justify-between">
      <div>
      <h2 className="card-title">{title}</h2>
        <p className="text-[#FF3811] font-semibold text-lg">{price}</p>
      </div>
      <button className="text-xl text-[#FF3811]"><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>
  </div>
      
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
