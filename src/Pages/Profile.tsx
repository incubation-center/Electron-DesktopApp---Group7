import Avatar from "@/Components/Avatar";
import Button from "@/Components/Button";

const Profile = () => {
  return (
    <div className="flex justify-center items-center mb-auto mt-20 w-screen">
        <div className="mr-10">
          <Avatar />
          <div className="flex items-center justify-center mt-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded grid">
              Update Info
            </button>
          </div>
        </div>
        <div>
          <div className="bg-gray-lighter ml-10">
            <div className="container flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Your Profile</h1>
                <div className="grid grid-cols-2">
                  <h3 className="pl-1 pb-2">Name : </h3>
                  <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                    Lim Kimsea
                  </div>
                  <h3 className="pl-1 pb-2">Email Address : </h3>
                  <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                    lim.kimsea19@kit.edu.kh
                  </div>
                  <h3 className="pl-1 pb-2">Phone Number : </h3>
                  <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                    012123456
                  </div>
                  <h3 className="pl-1 pb-2">Address : </h3>
                  <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                    Kampong Cham, Cambodia
                  </div>
                  <h3 className="pl-1 pb-2">Role : </h3>
                  <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                    Lecturer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    // <div className='antialiased w-full justify-center items-center shadow-lg'>
    //   <div className='flex flex-col bg-white rounded-xl shadow-lg'>
    //     <div className='flex justify-between p-10 space-x-16'>
    //       <div className='p-2 space-y-5'>
    //         <Avatar></Avatar>
    //         <Button className='rounded-sm p-1 font-bold w-full'>Update</Button>
    //       </div>
    //       <div className='flex flex-col p-2 space-y-6'>
    //         <div>
    //           <label htmlFor="" className='text-lg font-bold'>First Name</label>
    //           <input type="email" placeholder='Enter your email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 mb-2' />
    //         </div>
    //         <div>
    //           <label htmlFor="" className='text-lg font-bold'>Last Name</label>
    //           <input type="email" placeholder='Enter your email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 mb-2' />
    //         </div>
    //         <p>Your email address example123@gmail.com</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Profile;
