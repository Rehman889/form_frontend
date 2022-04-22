import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Main = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalcode, setPostalcode] = useState("");

  async function handleClick(e) {
    e.preventDefault();

    var urlencoded = new URLSearchParams();
    urlencoded.append("first_name", firstname);
    urlencoded.append("last_name", lastname);
    urlencoded.append("email", email);
    urlencoded.append("phone", phone);
    urlencoded.append("address", address);
    urlencoded.append("postal_code", postalcode);

    var requestOptions = {
      method: "POST",
      body: urlencoded,
    };

    const response = await fetch(
      "http://localhost:5000/api/addform",
      requestOptions
    ).then((response) => response.json());
    console.log(response);
  }

  return (
    <div className="">
      <div className="flex justify-center mt-6 font-bold">
        <h1>Let's build the form builder right now</h1>
      </div>
      <div className="flex justify-center mt-12 ">
        <div className="flex-col border-8 w-[38rem] h-[25rem]">
          <p className="font-bold mt-4 ml-4">Personnel Information</p>
          <form className="">
            <div className="flex-1 mt-6 space-x-5 px-14">
              <TextField
                id="firstname"
                label="Firstname"
                variant="outlined"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <TextField
                id="lastname"
                label="Lastname"
                variant="outlined"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="flex-1 mt-6 space-x-5 px-14">
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex-1 mt-6 space-x-5 px-14">
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                id="postalcode"
                label="Postal Code"
                variant="outlined"
                value={postalcode}
                onChange={(e) => setPostalcode(e.target.value)}
              />
            </div>
            <div className="flex mt-6 justify-center">
              <Button onClick={handleClick} variant="contained" color="success">
                Success
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
