
const Avatar = () => {
  return (
    <div className={`overflow-hidden relative w-40 h-40  bg-gray-100 rounded-full dark:bg-gray-600`}>
      <svg
        className="absolute -left-1 w-44 h-44 text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        >
           <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/06/13/909277-ima-pop.jpg"/>
        </path>
      </svg>
    </div>
  );
};

export default Avatar;
