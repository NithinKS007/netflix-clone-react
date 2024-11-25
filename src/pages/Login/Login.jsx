import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../fireBase/fireBase";


const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false)

  const userAuth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false)
  };
  return (
    loading ? <p>Loading...</p> :
    <div
      className="h-screen px-8 py-2"
      style={{
        background:
          "linear-gradient(#00000076, #00000076), url('/background_banner.jpg')",
        paddingTop: "-20px",
        paddingBottom: "-20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={logo} className="w-36" alt="" />
      <div class="w-full max-w-md bg-black bg-opacity-75 rounded p-8 m-auto">
        <h1 class="text-3xl font-medium mb-7">{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Your Name"
              className="w-full h-12 bg-gray-800 text-white my-3 border-0 outline-0 rounded-md px-4 py-3 text-sm"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email"
            className="w-full h-12 bg-gray-800 text-white my-3 border-0 outline-0 rounded-md px-4 py-3 text-sm"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            placeholder="Your Password"
            className="w-full h-12 bg-gray-800 text-white my-3 border-0 outline-0 rounded-md px-4 py-3 text-sm"
          />
          <button
            onClick={userAuth}
            type="submit"
            className="w-full h-12 bg-red-600 text-white my-3 border-0 outline-0 rounded-md px-4 py-3 text-sm cursor-pointer"
          >
            {signState}
          </button>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-gray-400">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p className="text-gray-400">Need Help</p>
          </div>
        </form>

        <div className="mt-10  text-gray-400">
          {signState === "Sign Up" ? (
            <p className="font-medium text-sm">
              Already have account ?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
                className="ml-1 text-white font-medium text-sm cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          ) : (
            <p className="font-medium text-sm">
              New to Netflix ?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
                className="ml-1 text-white font-medium text-sm cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
