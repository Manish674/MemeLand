import { useState } from "react";
import gradientBg from "../public/images/gradientBg.png";

const SignIn = () => {
  const [loginDetail, setLoginDetail] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnChange = (e) => {
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
    console.log(loginDetail);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(loginDetail);
    const promise = await fetch("../api/createUser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: loginDetail.name,
        email: loginDetail.email,
        password: loginDetail.password,
        passwordConfirm: loginDetail.passwordConfirm,
      }),
    });
    // console.log(promise);
    setLoginDetail({
      ...loginDetail,
      name: "",
      password: "",
      passwordConfirm: "",
      email: "",
    });
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="hidden md:flex h-full w-[40%] ">
        <div className="top-[40vh] left-[10vw] absolute z-10 font-bold text-2xl">
          <h3 className="text-[white]">Social Media</h3>
          <h3>for Memers</h3>
        </div>
        <img
          className="w-[100%] relative z-0"
          alt="bg.png"
          src={gradientBg.src}
        />
      </div>
      <form
        className="mx-auto w-full md:w-[60%] h-full flex flex-col justify-center items-center"
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <h3 className="font-mono text-xl">SignUp</h3>

        <input
          className="border focus:outline-none max-w-[432.2px] w-[50%] p-[0.5rem] rounded-md mt-[1rem] "
          name="name"
          autoComplete="off"
          placeholder="Name"
          value={loginDetail.name}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className="border focus:outline-none max-w-[432.2px] w-[50%] p-[0.5rem] rounded-md mt-[1rem] "
          name="email"
          type="email"
          value={loginDetail.email}
          autoComplete="off"
          placeholder="email"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className="border focus:outline-none max-w-[432.2px] w-[50%] p-[0.5rem] rounded-md mt-[1rem] "
          name="password"
          type="password"
          value={loginDetail.password}
          autoComplete="off"
          placeholder="password"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          className="border focus:outline-none max-w-[432.2px] w-[50%] p-[0.5rem] rounded-md mt-[1rem] "
          name="passwordConfirm"
          type="password"
          placeholder="confirm password"
          value={loginDetail.passwordConfirm}
          autoComplete="off"
          onChange={(e) => handleOnChange(e)}
        />
        <button className="border max-w-[432.2px] bg-[#3898EF] rounded-md font-bold text-white w-[50%] mt-[1rem] py-[0.5rem] ">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
