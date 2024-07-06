import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Custom_Button } from "../components/Custom_Button";
import { useDispatch, useSelector } from "react-redux";
import { form_Setup, set_user_auth } from "../store/slices/user_auth_slice";
import { child, push, ref, set } from "firebase/database";
import { database } from "../config/firebase";
import { uid } from "uid";
import { useNavigate } from "react-router-dom";

const donate_Obj = [
  {
    name: "A Negative",
    value: "A Negative",
  },
  {
    name: "A Positive",
    value: "A Positive",
  },
  {
    name: "B Negative",
    value: "B Negative",
  },
  {
    name: "B Positive",
    value: "B Positive",
  },
  {
    name: "AB Negative",
    value: "AB Negative",
  },
  {
    name: "AB Positive",
    value: "AB Positive",
  },
  {
    name: "O Negative",
    value: "O Negative",
  },
  {
    name: "O Positive",
    value: "O Positive",
  },
];
export default function Donrec() {
  const [data, setData] = useState({});
  const [gender, setGender] = useState({});
  const [donrec, setDonrec] = useState({});
  const [blood, setBlood] = useState({});
  const navigate = useNavigate();
  const handle_change = (e) => {
    const { value } = e.target;

    setBlood({ Blood_Group: value });
  };
  const change_handle_donrec = (e) => {
    const { value } = e.target;

    setDonrec({ donrec: value });
  };
  const change_handle_gender = (e) => {
    const { value } = e.target;

    setGender({ Gender: value });
  };

  const change_handle = (e) => {
    e.preventDefault();
    const { id, value } = e.target;

    setData({ ...data, [id]: value });
  };
  const onsubmit_Handle_Check = (e) => {
    e.preventDefault();
  };
  const submit_handle = (e) => {
    e.preventDefault();
    const uidd = uid();
    const massage_key = push(child(ref(database), "donate-receiver")).key;
    set(ref(database, `donate-receiver/${massage_key}`), {
      ...data,
      ...blood,
      ...gender,
      ...donrec,
      uidd: uidd,
    });
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <Paper
        className="max-w-md w-[100%] mt-16 space-y-5 bg-white py-5 px-4 rounded "
        elevation={3}
      >
        <Typography
          className="text-primary"
          align="center"
          fontWeight="bold"
          fontSize={28}
        >
          {" "}
          Donoter/Receiver
        </Typography>
        <form onSubmit={submit_handle}>
          <div className="space-y-5">
            <div className="flex justify-around">
              <TextField
                placeholder="Enter Your name"
                sx={{ display: "inline-block", width: "45%" }}
                required={true}
                type="text"
                onChange={change_handle}
                id="name"
              />
              <TextField
                placeholder="Enter Father name"
                sx={{ display: "inline-block", width: "45%" }}
                required={true}
                type="text"
                onChange={change_handle}
                id="father_name"
              />
            </div>
            <div className="flex justify-around">
              <TextField
                placeholder="Enter Your Age"
                sx={{ display: "inline-block", width: "45%" }}
                required={true}
                type="number"
                onChange={change_handle}
                id="age"
              />
              <TextField
                placeholder="Enter Your Phone number"
                sx={{ display: "inline-block", width: "45%" }}
                required={true}
                type="number"
                onChange={change_handle}
                id="phone_number"
              />
            </div>
            <div className="flex justify-around">
              <TextField
                placeholder="Enter Your CNIC"
                sx={{ display: "inline-block", width: "45%" }}
                required={true}
                type="number"
                onChange={change_handle}
                id="CNIC"
              />
              <TextField
                placeholder="Enter Your Email"
                sx={{ display: "inline-block", width: "45%" }}
                required={true}
                type="email"
                onChange={change_handle}
                id="email"
              />
            </div>
            <div className="flex justify-around">
              <TextField
                placeholder="Enter Your Weight"
                sx={{ display: "inline-block", width: "45%" }}
                required={true}
                type="number"
                onChange={change_handle}
                id="weight"
              />
              <FormControl sx={{ width: "45%" }} fullWidth>
                <InputLabel id="Blood Group">Blood Group</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder="Blood Group"
                  onChange={handle_change}
                >
                  {donate_Obj.map((item, key) => {
                    return (
                      <MenuItem key={key} id="A Negative" value={item.value}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="flex justify-around">
              <TextField
                placeholder="Enter Your CNIC"
                sx={{ display: "inline-block", width: "45%" }}
                required={true}
                type="date"
                onChange={change_handle}
                id="date"
              />
              <FormControl sx={{ width: "45%" }} fullWidth>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  placeholder="Gender"
                  onChange={change_handle_gender}
                >
                  <MenuItem id="Male" value={"Male"}>
                    Male
                  </MenuItem>
                  <MenuItem id="Female" value={"Female"}>
                    Female
                  </MenuItem>
                  <MenuItem id="Others" value={"Others"}>
                    Others
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <FormControl sx={{ width: "100%" }} fullWidth>
              <InputLabel id="gender">Donte or receive</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                placeholder="Gender"
                onChange={change_handle_donrec}
              >
                <MenuItem id="Donater" value={"Donater"}>
                  Donater
                </MenuItem>
                <MenuItem id="Receiver" value={"Receiver"}>
                  Receiver
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              onChange={change_handle}
              placeholder="Enter Your Address"
              id="Address"
              sx={{ width: "100%" }}
            />
          </div>
          <TextField
            id="Reason"
            sx={{ width: "100%" }}
            multiline
            rows={2}
            placeholder="What is the reason why you want to donate/receive"
          />
          <br />
          <br />
          <Custom_Button type="submit">Request</Custom_Button>
        </form>
      </Paper>
    </div>
  );
}
