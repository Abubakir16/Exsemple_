import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [a, setA] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
    setError(" ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hadzhicars.pythonanywhere.com/api/auth/register/",
        formData
      );
      setA(!a);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("admin", JSON.stringify(response.data));
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Error: Bad Request: Please check your inputs.");
      }
    }
  };

  return (
    <div className="fixed top-0 w-[100vw] h-[100vh] flex items-center justify-center flex-col">
      {console.log(window.innerWidth)}
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center border-2 w-[500px] min-h-[200px] px-[10px] rounded-[20px] py-[20px] relative`}
      >
        <Link
          to="/"
          className="absolute top-[-14px] left-[-5px]  bg-[red] w-[40px] h-[40px] flex items-center justify-center rounded-[50%] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
        </Link>
        <p className="text-[32px]">Register</p>
        <input
          required
          className="w-[100%] mt-[20px] bg-[transparent] border-2 border-[#bc53be] outline-none rounded-[10px] px-[10px] py-[5px] mb-[10px]"
          type="text"
          id="name"
          name="first_name"
          value={formData.name}
          onChange={handleChange}
          placeholder="first name"
        />
        <input
          required
          className="w-[100%] mt-[20px] bg-[transparent] border-2 border-[#bc53be] outline-none rounded-[10px] px-[10px] py-[5px] mb-[10px]"
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="last name"
        />
        <input
          required
          className="w-[100%] mt-[20px] bg-[transparent] border-2 border-[#bc53be] outline-none rounded-[10px] px-[10px] py-[5px] mb-[10px]"
          type="email"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <input
          required
          className="w-[100%] mt-[20px] bg-[transparent] border-2 border-[#bc53be] outline-none rounded-[10px] px-[10px] py-[5px] mb-[10px] placeholder:text-[red]"
          type="tel"
          placeholder="You should start with +996"
          value={formData.phone}
          name="phone"
          onChange={handleChange}
        />
        <input
          required
          className="w-[100%] mt-[20px] bg-[transparent] border-2 border-[#bc53be] outline-none rounded-[10px] px-[10px] py-[5px] mb-[10px]"
          type="password"
          placeholder="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />

        {error && <div className="bg-[red] px-[30px]  font-[800]">{error}</div>}

        <button
          type="submit"
          className="bg-[#bc53be] px-[30px] py-[5px] mt-[20px] rounded-[20px] "
        >
          Register
        </button>

        <Link to="/login" className="mt-[20px]">
          If you have account{" "}
          <span className="text-[#1111ff] text-[18px]">Login</span>
        </Link>
      </form>

      <div
        className={`fixed top-0 left-0 w-[100vw]  h-[100vh] bg-[#0000005e] z-10 items-center justify-center ${
          a ? "flex" : "hidden"
        }`}
      >
        <div className="w-[300px] h-[200px] bg-[#fff] rounded-[20px] flex items-center justify-center flex-col relative">
          <h1 className="text-[#000] text-[16px] w-[170px]">
            Congralatulations you succesfuly registered!
          </h1>
          <Link to="/">
            <button className="absolute bottom-[10px] right-[10px] bg-[red] px-[10px] text-[#fff] rounded">
              Thank you
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
