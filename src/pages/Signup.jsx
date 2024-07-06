import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Custom_Input_Field } from "../components/Custom_Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link, useNavigate } from "react-router-dom";
import {
  create_account,
  write_user_data,
} from "../config/firebase/firebase_methods";
import { useDispatch, useSelector } from "react-redux";
import { set_user_auth } from "../store/slices/user_auth_slice";

export const Signup = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user_auth.user_ID);
  const change_handle = (e) => {
    const { id, value } = e.target;

    setData((pre_data) => {
      return { ...pre_data, [id]: value };
    });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    const { email, password } = data;
    create_account(email, password)
      .then((res) => {
        const user_id = res.user.uid;

        write_user_data(user_id, data).then((res) => {
          dispatch(set_user_auth({ data, auth: true, user: user_id }));
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        alert(error);
      });
  };
  // console.log(userId);
  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center mt-">
      <Box
        component="form"
        onSubmit={submit_handle}
        className="max-w-md w-[100%] mt-16 space-y-5 bg-white py-5 px-4 rounded"
      >
        <Typography
          className="text-primary"
          align="center"
          fontWeight="bold"
          fontSize={28}
        >
          {" "}
          Signup
        </Typography>
        <div className="space-y-5">
          <div className="flex justify-around">
            <TextField
              sx={{ width: "45%", display: "inline-block" }}
              required={true}
              id="Full_Name"
              onChange={change_handle}
              placeholder="Enter Full Name"
              type="text"
            />
            <TextField
              sx={{ width: "45%", display: "inline-block" }}
              required={true}
              id="Father_Name"
              onChange={change_handle}
              placeholder="Enter Father Name"
              type="text"
            />
          </div>
          <div className="flex justify-around">
            <TextField
              sx={{ width: "45%", display: "inline-block" }}
              required={true}
              id="Age"
              onChange={change_handle}
              placeholder="Enter Your Age"
              type="number"
            />
            <TextField
              sx={{ width: "45%", display: "inline-block" }}
              required={true}
              id="CNIC"
              onChange={change_handle}
              placeholder="Enter Your CNIC"
              type="Number"
            />
          </div>
          <div className="flex justify-around">
            <TextField
              sx={{ width: "45%", display: "inline-block" }}
              required={true}
              id="email"
              onChange={change_handle}
              placeholder="Enter Email Address"
              type="email"
            />
            <TextField
              sx={{ width: "45%", display: "inline-block" }}
              required={true}
              id="password"
              onChange={change_handle}
              placeholder="Enter Your Password"
              type="password"
            />
          </div>
          <div className="flex justify-around">
            <FormControl sx={{ width: "45%" }} fullWidth>
              <InputLabel id="Blood Group">Blood Group</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Blood Group"
                onChange={change_handle}
              >
                <MenuItem id="A Negative" value={"A+"}>
                  A Negative
                </MenuItem>
                <MenuItem id="A Positive" value={"A-"}>
                  A Positive
                </MenuItem>
                <MenuItem id="B Negative" value={"B+"}>
                  B Negative
                </MenuItem>
                <MenuItem id="B Positive" value={"B-"}>
                  B Positive
                </MenuItem>
                <MenuItem id="AB Negative" value={"AB+"}>
                  AB Negative
                </MenuItem>
                <MenuItem id="AB Positive" value={"AB-"}>
                  AB Positive
                </MenuItem>
                <MenuItem id="O Negative" value={"O+"}>
                  O Negative
                </MenuItem>
                <MenuItem id="O Positive" value={"O-"}>
                  O Positive
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ width: "45%", display: "inline-block" }}
              required={true}
              id="Phone Number"
              onChange={change_handle}
              placeholder="Enter Your Phone Number"
              type="number"
            />
          </div>
          <Custom_Input_Field
            required={true}
            id="Address"
            onChange={change_handle}
            placeholder="Enter Your Address"
            type="text"
          />
        </div>

        <Custom_Button type="submit">Signup</Custom_Button>

        <div className="text-center">
          Don't have account{" "}
          <Link to="/login" className="text-primary underline">
            Login Now
          </Link>
        </div>
      </Box>
    </div>
  );
};
