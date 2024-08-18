import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const LoginForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      navigate('/main-dashboard'); // Redirect to dashboard on successful login
    } else {
      setError('Invalid username or password');
    }
  };

  const togglePassword = () => {
    const passwordField = document.getElementById("password");
    const eyeOffIcon = document.querySelector(".ri-eye-off-line");
    const eyeOnIcon = document.querySelector(".ri-eye-line");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeOffIcon.classList.add("hidden");
      eyeOnIcon.classList.remove("hidden");
    } else {
      passwordField.type = "password";
      eyeOffIcon.classList.remove("hidden");
      eyeOnIcon.classList.add("hidden");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-khmer">
      <div
        className="flex items-center justify-center min-h-screen p-4 bg-gray-100 sm:p-10"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-2xl md:flex-row">
          <div className="w-full p-6 md:w-1/2 md:p-10">
            <img
              src="/LOGO PPAP.png"
              alt="Logo"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h2 className="text-[20px] md:text-[23px] font-normal mb-6 text-center">
              ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យកុំព្យូទ័រ
            </h2>
            {error && <p className='mb-4 text-red-500'>{error}</p>}
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="mb-4 text-[16px] md:text-[18px]">
                <input
                  type='text'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}          
                  name="email"
                  required
                  placeholder="ឈ្មោះគណនីរបស់អ្នក"
                  className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="relative mb-6 text-[16px] md:text-[18px]">
                <input
                   type='password'
                   id='password'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  required
                  placeholder="បញ្ចូលពាក្យសម្ងាត់"
                  className="w-full px-3 py-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  id="togglePassword"
                  className="absolute inset-y-0 right-0 flex items-center px-3 mr-3 text-gray-500"
                  onClick={togglePassword}
                >
                  <i className="ri-eye-off-line"></i>
                  <i className="hidden ri-eye-line"></i>
                </button>
              </div>
              <div className="flex justify-center mb-4 text-[14px] md:text-[15px] gap-2">
                <p>មិនទាន់មានគណនី?</p>
                <a href="#" className="text-blue-800 hover:underline">
                  ទាក់ទងការិយាល័យព័ត៌មានវិទ្យា
                </a>
              </div>
              <button className="relative inline-block w-full px-4 py-4 font-medium rounded-lg group">
                <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1.5 bg-gray-400 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-md"></span>
                <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-l from-gray-700 to-slate-500"></span>
                <span className="relative text-white text-[18px] font-light">
                  បញ្ចូលគណនី
                </span>
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center justify-center w-full px-6 rounded-b-lg md:w-1/2 bg-gradient-to-br from-gray-800 to-slate-500 md:rounded-r-lg md:rounded-bl-none">
            <h2 className="text-2xl font-semibold text-center text-white md:text-3xl">
              សូមស្វាគមន៍ការត្រឡប់មកវិញ!
            </h2>
            <br />
            <p className="text-sm font-light text-center text-white md:text-base">
              សូមស្វាគមន៍ការត្រឡប់មកវិញ! យើងរីករាយណាស់ដែលមានអ្នកនៅទីនេះ។ វាល្អណាស់ដែលបានជួបអ្នកម្តងទៀត។ យើងសង្ឃឹមថាអ្នកមានពេលវេលាដ៏មានសុវត្ថិភាព និងរីករាយពីចម្ងាយ។
            </p>
            <div className="flex items-center justify-center gap-4 py-6 mt-4 border-t border-white/50">
              <button className="py-3 px-3 border border-gray-500 flex gap-3 text-[13px] text-white rounded-lg font-extralight hover:text-zinc-400 duration-300">
                <img src="/Google-icon.png" className="w-4 h-4" alt="Google" /> ភ្ជាប់គណនី Google
              </button>
              <button className="py-3 px-3 border border-gray-500 flex gap-3 text-[13px] text-white rounded-lg font-extralight hover:text-zinc-400 duration-300">
                <img src="/Facebook_Logo.png" className="w-4 h-4" alt="Facebook" /> គេហទំព័រ Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
