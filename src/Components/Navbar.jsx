


import icondash from "../assets/icondash.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  console.log(isLogin);
  const handleLinkClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 py-1   ">
      <div className=" flex items-center justify-between text-sm font-bold font-serif py-   border-b-gray-400">
        <h1
          onClick={() => {
            
            navigate("/");
          }}
          className="w-54 ml-5 font-thin text-xl">
        CRYPTO TRACKER
          </h1>
        
        <ul className="hidden md:flex items-start gap-5 font-medium`">
         
            <NavLink to="/dashboard" >
              <li className="py-1">DASHBOARD</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
            </NavLink>
          

          <NavLink to="/about" >
            <li className="py-1  ">ABOUT</li>
            <hr className="border-none outline-none h-0.5  w-3/5 m-auto hidden " />
          </NavLink>

          <NavLink to="/contact">
            <li className="py-1">CONTACT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden " />
          </NavLink>
        </ul>

        <div className="flex items-center gap-4">
          <div className=" flex items-center gap-2 cursor-pointer group relative">
            <img className="w-10 rounded-full mr-4" src={icondash} alt="" />
            {/* <img className='w-2 mr-4' src="https://cdn-icons-png.flaticon.com/512/203/203484.png" alt="" /> */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                {/* <p onClick={()=> navigate('/dashboard')} className='hover: text-black cursor-pointer'>Dashboard</p> */}

                <p
                  onClick={() => {
                   
                    navigate("/dashboard");
                  }}
                  className="hover: text-black cursor-pointer"
                >
                  Dashboard
                </p>

                <p
                  onClick={() => {
                    
                    navigate("/about");
                  }}
                  className="text-black bg-b cursor-pointer"
                >
                  About
                </p>

                <p className="hover: text-black cursor-pointer">Contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
