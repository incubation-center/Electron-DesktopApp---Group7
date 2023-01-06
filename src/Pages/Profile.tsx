import Avatar from "@/Components/Avatar";
import { getUserProfile } from "@/services/profile";
import { useEffect, useState } from "react";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [userProfile, setUserProfile] = useState<any>({});
  useEffect(() => {
    getUserProfile().then((res) => {
      console.log(res);
      setUserProfile(res);
    });
    return () => {};
  }, []);

  return (
    <div className="flex justify-center items-center mb-auto mt-20 w-screen">
      <div className="mr-10">
        <Avatar />
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-flex"
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
              <div className="bg-blue-300 w-96 rounded-xl">
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
                          type="password"
                          value={userProfile.name}
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
                          placeholder="*********"
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
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Your Profile</h1>
              <div className="grid grid-cols-2">
                <h3 className="pl-1 pb-2">Name : </h3>
                <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                  {userProfile.name}
                </div>
                <h3 className="pl-1 pb-2">Email Address : </h3>
                <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                  {userProfile.email}
                </div>
                <h3 className="pl-1 pb-2">Phone Number : </h3>
                <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                  {userProfile.phone || "0123456789"}
                </div>
                <h3 className="pl-1 pb-2">Address : </h3>
                <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                  {userProfile.address}
                </div>
                <h3 className="pl-1 pb-2">Role : </h3>
                <div className="block border border-grey-light w-full rounded mb-4 pl-3">
                  {userProfile.role}
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
