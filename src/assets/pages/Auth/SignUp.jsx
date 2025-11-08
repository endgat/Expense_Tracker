import React, { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import { Link } from "react-router-dom";
import Input from "../../inputs/input";
import { validateEmail } from "../../Utils/helper";
import ProfilePhotoSelector from "../../inputs/ProfilePhotoSelector";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  // handles Signup submission format
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior


    // Basic validation
    if (!userName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
     if(!password){
    setError("Please Enter the password")
    return;
  }

    // Clear previous errors
    setError(null);
    // api call
  };

  return (
    <AuthLayout>
      <div className="lg:w-full h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          {" "}
          Join Us today by Entering your details below{" "}
        </p>
        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              label="Full Names"
              placeholder="User-Name"
              type="text"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="John*******@gmail.c**"
              type="text"
            />
            <div className="col-span-2">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                placeholder="••••••••"
                type="password"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm col-span-2">{error}</p>
            )}

            {/* Add a submit button */}
            <div className="col-span-2 mt-4">
              <button
                type="submit"
                className="btn-primary"
              >
                Sign Up
              </button>
            </div>

            {/* Add a link to log in */}
            <p className="col-span-2 text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
