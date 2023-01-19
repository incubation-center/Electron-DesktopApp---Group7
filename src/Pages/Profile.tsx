import Avatar from "@/Components/Avatar";
import { userInfo } from "@/services/auth";
import { getUserProfile } from "@/services/profile";
import Modal from "react-modal";
import { useEffect, useState } from "react";

const Profile = () => {
  const user = userInfo();
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "100%",
      left: "100%",
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [userProfile, setUserProfile] = useState<any>({});
  useEffect(() => {
    getUserProfile().then((res) => {
      console.log(res);
      setUserProfile(res);
    });
    return () => {};
  }, []);
  return (
    <div className="items-center mb-auto mt-20 w-screen">
      <h1 className="mb-8 text-3xl text-center font-bold">Your Profile</h1>
      {/* <button type="button" className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold border-solid rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Your Profile</button> */}
      <div className="flex justify-center">
        <div className="mr-10">
          <Avatar />
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-indigo-400 to-blue-400 rounded-md p-2 px-6 text-gray-50-text-lg text-white button flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                role="img"
                viewBox="0 0 320 512"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z" />
              </svg>
              Edit
            </button>
            {showModal ? (
              <div className="justify-center items-center flex fixed inset-0 ">
                {/* ....... content ....... */}
                <div className="bg-blue-400 w-96 rounded-xl">
                  {/* ....... body ....... */}
                  <div className="m-5">
                    <div className="w-full max-w-lg">
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Name
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            value={userProfile.firstname}
                            placeholder="Name"
                          />
                          <input
                            className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            value={userProfile.lastname}
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Password
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="password"
                            placeholder="******************"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                            Address
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-blue-500"
                            type="text"
                            placeholder="Address"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                            Phone
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
                            type="text"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Name
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="role"
                            value={userProfile.role}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      onClick={() => setShowModal(false)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                  {/* ....... end body ....... */}
                </div>
                {/* ....... end content ....... */}
              </div>
            ) : null}
          </div>
        </div>
        <div>
          <div className="bg-gray-lighter ml-10">
            <div className="container flex-1 flex flex-col items-center justify-center px-2">
              {/* <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full"> */}
              <div>
                {/* <h1 className="mb-8 text-3xl text-center font-bold">Your Profile</h1> */}
                <div className="grid grid-cols-2">
                  {user.role == "admin" ? (
                    <>
                      <h3 className="pl-1 pb-2">Name : </h3>
                      <div className="w-full mb-4 pl-3">
                        {userProfile.name}
                      </div>
                    </>
                  ) :
                  <>
                    <h3 className="pl-1 pb-2 font-bold">Name : </h3>
                    <div className="flex space-x-2 mb-4 pl-3 ">
                        <div>{userProfile.firstname}</div>
                        <div>{userProfile.lastname}</div>
                    </div>
                  </>}
                  <h3 className="pl-1 pb-2 font-bold">Email Address : </h3>
                  <div className="w-full mb-4 pl-3">
                    {userProfile.email}
                  </div>
                  <h3 className="pl-1 pb-2 font-bold">Phone Number : </h3>
                  <div className="w-full mb-4 pl-3">
                    {userProfile.phone || "0123456789"}
                  </div>
                  <h3 className="pl-1 pb-2 font-bold">Address : </h3>
                  <div className="w-full mb-4 pl-3">
                    {userProfile.address}
                  </div>
                  <h3 className="pl-1 pb-2 font-bold">Role : </h3>
                  <div className="w-full mb-4 pl-3">
                    {userProfile.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
