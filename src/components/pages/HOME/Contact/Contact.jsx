import { SlCalender,SlLocationPin } from 'react-icons/sl';
import { PiPhoneCallBold } from 'react-icons/pi';

const Contact = () => {
    return (
        <div className='flex justify-around items-center bg-[#151515] text-white p-16 my-24 rounded-xl '>
              <div className="flex gap-6 items-center ">
                  <div>
                      <SlCalender></SlCalender>
                  </div>
                  <div>
                    <p>We are open monday-friday</p>
                    <h2 className='font-bold text-2xl'>7:00 am - 9:00 pm</h2>
                  </div>
              </div>


              <div className="flex gap-6 items-center">
                  <div>
                      <PiPhoneCallBold></PiPhoneCallBold>
                  </div>
                  <div>
                    <p>Have a question?</p>
                    <h2 className='font-bold text-2xl'>+2546 251 2658</h2>
                  </div>
              </div>


              <div className="flex gap-6 items-center">
                  <div>
                      <SlLocationPin></SlLocationPin>
                  </div>
                  <div>
                    <p>Need a repair? our address</p>
                    <h2 className='font-bold text-2xl'>Liza Street, New York</h2>
                  </div>
              </div>
              
        </div>
    );
};

export default Contact;