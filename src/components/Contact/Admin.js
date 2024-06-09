import axios from "axios";
import React, { useEffect, useState } from "react";
import adminbg from "../Images/package-bg.png";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const authResponse = await axios.post(
        "https://sunshine-backend.vercel.app/api/password",
        { password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (authResponse.status === 200 && Array.isArray(authResponse.data)) {
        setIsAuthenticated(true);
        setData(authResponse.data);
        setError("");
        setIsDeleted(authResponse.data.length === 0);
      } else {
        setIsAuthenticated(false);
        setError("Incorrect Password");
        setData([]);
      }
    } catch (err) {
      setIsAuthenticated(false);
      setError("An Error Occurred");
      setData([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteResponse = await axios.delete(
        `https://sunshine-backend.vercel.app/api/contact/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (deleteResponse.status === 200 && deleteResponse.data.Success) {
        setDeleteMessage("Message Deleted successfully");
        
        const updatedData = data.filter((item) => item._id !== id);
        setData(updatedData);
        if (updatedData.length === 0) {
          setIsDeleted(true);
        }
      }
    } catch (error) {
      console.log(error.message);
      setDeleteMessage("An Error Occured while deleting");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = async () => {
        try {
          const authResponse = await axios.post(
            "https://sunshine-backend.vercel.app/api/password",
            { password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (authResponse.status === 200 && Array.isArray(authResponse.data)) {
            setData(authResponse.data);
            setIsDeleted(authResponse.data.length === 0);
          } else {
            setData([]);
            setIsDeleted(true);
          }
        } catch (err) {
          setData([]);
          setIsDeleted(true);
        }
      };

      fetchData();
    }
  }, [isAuthenticated]);

  return (
    <div
      className="flex flex-col items-center"
      style={{ backgroundImage: `url(${adminbg})` }}
    >
      {!isAuthenticated && (
        <div
          style={{ boxShadow: "rgb(173, 216, 230) 0px 5px 15px" }}
          className="py-10 my-24 flex flex-col px-5 max-w-fit bg-white max-h-fit rounded-xl dark:border-white border-[5px] shadow-md"
        >
          <form onSubmit={handleSubmit} className="">
            <h1 className="text-lg font-semibold text-center opacity-85 mb-5">
              Admin
            </h1>
            <label htmlFor="password">Admin Password:</label>
            <br />
            <input
              type="password"
              id="password"
              className="outline-none border-2 my-4"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <br />
            <input
              type="submit"
              className="px-4 py-[6px] border-2 text-white bg-[#ff7a59] text-sm font-bold hover:opacity-85 transition-all duration-200 opacity-100 cursor-pointer rounded-md"
            />
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </form>
        </div>
      )}

      {isAuthenticated &&
        Array.isArray(data) &&
        data.length > 0 && (
          <div className="flex flex-col items-center py-16">
            <h1 className="font-bold text-2xl sm:text-6xl my-5 opacity-85">
              Messages
            </h1>
            <div className="flex flex-row flex-wrap sm:px-52 py-5 justify-center sm:justify-start">
              {data.map((item, index) => (
                <div
                  key={item._id || index}
                  className="flex flex-col px-5 py-4 border mx-2 my-2 bg-white rounded-md items-start"
                >
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {item.email}
                  </p>
                  <p>
                    <strong>Mobile Number:</strong> {item.mobileNumber}
                  </p>
                  <p className="w-[300px] h-[50px]">
                    <strong>Message:</strong> {item.message}
                  </p>
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => handleDelete(item._id)}
                    className="px-5 my-2 py-[6px] border-2 text-white bg-[#ff7a59] text-sm font-bold hover:opacity-85 transition-all duration-200 opacity-100 cursor-pointer rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      {isAuthenticated && (data.length === 0 || isDeleted) && (
        <div className="flex items-start justify-center py-16">
          <h1 className="text-3xl font-bold opacity-85">No Message Available To Display</h1>
        </div>
      )}
    </div>
  );
};

export default Admin;
