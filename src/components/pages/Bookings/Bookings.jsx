import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import swal from "sweetalert";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5002/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url,{credentials:"include"})
    
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookings(data);
      });
  }, [url]);



  const handleDelete=id=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
        
            // console.log(id)
            fetch(`http://localhost:5002/bookings/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
               if(data.deletedCount>0){
                swal("Poof! Your booking has been deleted!", {
                    icon: "success", });

                    const remaining=bookings.filter(booking=> booking._id !== id)
                    setBookings(remaining)
               }

            })


        } 
        else {
          swal("Your imaginary file is safe!");
        }
      });
}


 const handleBookingConfirm=id=>{
    fetch(`http://localhost:5002/bookings/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({status:"confirm"})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            // swal('confirmed')

            const remaing=bookings.filter(booking=>booking._id!==id)
            const updated=bookings.find(booking=>booking._id==id)
            updated.status='confirm'
            const newBookings=[updated,...remaing]
            setBookings(newBookings)
        }
    })
 }


  return (
    <div>
      <h1 className="text-center">your bookings:{bookings.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* rows  */}
          
           {
            bookings.map(booking=><BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm={handleBookingConfirm}
            ></BookingRow>)
           }
           
         
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default Bookings;
