import Rating from "react-rating";
import {AiFillStar,AiOutlineStar  } from 'react-icons/ai';

import product1 from "../../../src/assets/images/products/1.png";
import product2 from "../../../src/assets/images/products/2.png";
import product3 from "../../../src/assets/images/products/3.png";
import product4 from "../../../src/assets/images/products/4.png";
import product5 from "../../../src/assets/images/products/5.png";
import product6 from "../../../src/assets/images/products/6.png";

const Product = () => {
  return (
    <div>
      <div className="space-y-3">
        <h3 className="font-bold text-xl text-center text-[#FF3811]">
          Popular Products
        </h3>
        <h1 className="font-bold text-5xl text-center">Browse Our Products</h1>
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
              src={product1}
              alt="product"
              className="rounded-xl w-[148px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
            className="text-[#FF912C]"
            emptySymbol={  <AiOutlineStar></AiOutlineStar>}
            fullSymbol={<AiFillStar></AiFillStar> }
            initialRating={5}
             readonly />
            <h2 className="card-title">Cools Led Light!</h2>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>

        <div className="card  w-[364px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product2}
              alt="product"
              className="rounded-xl w-[148px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
            className="text-[#FF912C]"
            emptySymbol={  <AiOutlineStar></AiOutlineStar>}
            fullSymbol={<AiFillStar></AiFillStar> }
            initialRating={5}
             readonly />
            <h2 className="card-title">Cools Led Light!</h2>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>


        <div className="card  w-[364px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product3}
              alt="product"
              className="rounded-xl w-[148px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
            className="text-[#FF912C]"
            emptySymbol={  <AiOutlineStar></AiOutlineStar>}
            fullSymbol={<AiFillStar></AiFillStar> }
            initialRating={5}
             readonly />
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>



        <div className="card w-[364px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product4}
              alt="product"
              className="rounded-xl w-[148px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
            className="text-[#FF912C]"
            emptySymbol={  <AiOutlineStar></AiOutlineStar>}
            fullSymbol={<AiFillStar></AiFillStar> }
            initialRating={5}
             readonly />
            <h2 className="card-title">Cools Led Light!</h2>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>


        <div className="card w-[364px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product5}
              alt="product"
              className="rounded-xl w-[148px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
            className="text-[#FF912C]"
            emptySymbol={  <AiOutlineStar></AiOutlineStar>}
            fullSymbol={<AiFillStar></AiFillStar> }
            initialRating={5}
             readonly />
            <h2 className="card-title">Cools Led Light!</h2>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>


        <div className="card w-[364px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={product6}
              alt="product"
              className="rounded-xl w-[148px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <Rating
            className="text-[#FF912C]"
            emptySymbol={  <AiOutlineStar></AiOutlineStar>}
            fullSymbol={<AiFillStar></AiFillStar> }
            initialRating={5}
             readonly />
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-[#FF3811]">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
