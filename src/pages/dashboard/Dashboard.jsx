import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { database } from "../../config/firebase";
import { onValue, ref } from "firebase/database";
import { set_user_auth } from "../../store/slices/user_auth_slice";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./dsh.css"
export default function Dashboard() {
  const userId = useSelector((state) => state.user_auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data1, setData1] = useState([]);
  const [data, setData] = useState([]);
  // Fetch users data when component mounts
  useEffect(() => {
    if (userId !== null && !data.length) getUserData();
    if (userId !== null && !data1.length) Donrec_User_Data();
  }, []);

  const getUserData = async () => {
    try {
      let dbRef = await ref(database, `users/${userId.user_ID}`);
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        // console.log("DATA: ", data);
        if (!data) return;
        else {
          setData({ ...data });
          dispatch(set_user_auth({ auth: true, data: data }));
        }
      });
    } catch (err) {
      console.error(`Error fetching user data: ${err}`);
    }
  };
  // dispatch(set_user_auth({ auth: true, data: data }));

  const Donrec_User_Data = () => {
    const data_ref = ref(database, "donate-receiver/");
    onValue(data_ref, (snapshot) => {
      const data1 = snapshot.val();

      const array = Object.values(data1);
      setData1(array);
      // console.log(data);
    });
  };
  const onclik_handle = () => {
    navigate("/donoter-receiver");
  };
  console.log(data1);

  return (
    <div>
      <div className="">
        <div className="ok  flex items-center justify-center leading-3">
          <div className="text-white mx-5 my-20">
            {data ? (
              <div className="flex justify-center items-center">
                <div>
                  <h1 className="text-2xl">Name:{data.Full_Name}</h1>
                  <br />
                  <h1 className="text-2xl">Father Name:{data.Father_Name}</h1>
                  <br />
                  <h1 className="text-2xl">Age:{data.Age}</h1>
                  <br />
                  <h1 className="text-2xl">CNIC Number:{data.CNIC}</h1>
                  <br />
                  <h1 className="text-2xl">Blood Group:{data.undefined}</h1>
                  <br />
                  <h1 className="text-2xl">Email:{data.email}</h1>
                  <br />
                  <div className="flex space-x-4">
                    <button
                      className="flex justify-center bg-secondary py-2 px-16"
                      onClick={onclik_handle}
                    >
                      Reveiver/Donote
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <CircularProgress color="secondary" />
              </div>
            )}
          </div>
        </div>
        <div className=" ">
          <div className="flex justify-center  ">
            <h1 className="text-4xl bg-primary w-full text-center py-10 text-white">User Requests</h1>
          </div>
          <div className=" overflow-auto">
            {data1.map((item, key) => {
              return (
                <div key={key}>
                  <h1 className="text-center text-3xl py-5">Date:{item.date}</h1>
                  <div className="flex justify-center">
                    <div className="mx-2 flex border border-slate-500 overflow-auto w-[1120px]">
                      <div className="border text-center border-slate-500 border-s-0 border-t-0 border-b-0 w-[160px]">
                        <h1>Name</h1>
                        <h1>{item.name}</h1>
                      </div>
                      <div className="border text-center border-slate-500 border-s-0 border-t-0 border-b-0 w-[160px]">
                        <h1>Blood Group</h1>
                        <h1>{item.Blood_Group}</h1>
                      </div>
                      <div className="border text-center border-slate-500 border-s-0 border-t-0 border-b-0 w-[160px]">
                        <h1>Gender</h1>
                        <h1>{item.Gender}</h1>
                      </div>
                      <div className="border text-center border-slate-500 border-s-0 border-t-0 border-b-0 w-[160px]">
                        <h1>CNIC</h1>
                        <h1>{item.CNIC}</h1>
                      </div>
                      <div className="border text-center border-slate-500 border-s-0 border-t-0 border-b-0 w-[160px]">
                        <h1>Contact</h1>
                        <h1>{item.phone_number}</h1>
                      </div>

                      <div className="border text-center border-slate-500 border-s-0 border-t-0 border-b-0 w-[160px]">
                        <h1>Weight</h1>
                        <h1>{item.weight}</h1>
                      </div>
                      <div className="border text-center border-slate-500 border-s-0 border-e-0 border-t-0 border-b-0 w-[160px]">
                        <h1>Type</h1>
                        <h1>{item.donrec}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
