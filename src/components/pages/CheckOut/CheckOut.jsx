import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./../../../Provider/AuthProvider";
import swal from "sweetalert";

const CheckOut = () => {
  const services = useLoaderData();
  const { _id, price, title,img } = services;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    // const amount=form.amount.value;

    const order = {
      customarName: name,
      email,
      date,
      img,
      service_id: _id,
      service: title,
      price: price,
    };

    console.log(order);

    fetch("http://localhost:5002/bookings", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }).then(res => res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        swal("Good job!", "Your order is confirmed", "success");

      }
    })
  };

  return (
    <div>
      <p className="text-center text-3xl">book cheak out :{title}</p>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={`$${price}`}
              name="amount"
              placeholder="Due Amount"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn bg-[#FF3811] text-white hover:text-black"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
