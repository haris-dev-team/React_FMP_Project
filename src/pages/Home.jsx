import React from "react";
import SwipeableTextMobileStepper from "../components/Carousel";
import { Paper } from "@mui/material";
import { Footer } from "../components/Footer";

export function Home() {
  const arr_Of_Obj = [
    {
      title: "Type B Negative",
      list_Text_01: "Type B Negative",
      list_Text_02:
        "B negative red blood cells can be given to both B and AB patients. B negative patients can only receive blood from other B negative donors or from type O negative donors.",
    },
    {
      title: "Type B Positive",
      list_Text_01: "About 9% of the population have B positive blood.",
      list_Text_02:
        "B positive patients can receive blood from B positive, B negative, O positive and O negative donors. ",
    },

    {
      title: "Type A Negative",
      list_Text_01:
        "A negative red blood cells can be used to treat around 40% of the population.",
      list_Text_02:
        "However, A negative platelets are particularly important because they can be given to people from all blood groups. That's why A negative platelets are called the 'universal platelet type'.",
    },
    {
      title: "Type A Positive",
      list_Text_01:
        "If your blood is A positive (A+), it means that your blood contains type-A antigens with the presence of a protein called the rhesus (Rh) factor",
      list_Text_02:
        "Antigens are markers on the surface of a blood cell. According to the American Red Cross, this is one of the most common blood types.",
    },
    {
      title: "Type AB Negative",
      list_Text_01:
        "Only 3% of the population has AB+ blood, making it one of the rarest blood types.",
      list_Text_02:
        "Donors who are AB+ are the universal plasma donor because this component can be transfused into any patient, regardless of the recipient's blood type. Your platelets and plasma are the most powerful parts of your AB+ blood.",
    },
    {
      title: "Type AB Positive",
      list_Text_01:
        "Why is AB negative blood so important? AB negative donations are extremely versatile, but because it is the rarest blood type finding new donors can be a challenge.",
      list_Text_02:
        "Plasma from AB negative donations can help treat patients of all blood types, however fresh frozen plasma is only produced from male donations.",
    },
    {
      title: "Type O Negative",
      list_Text_01:
        "O negative blood can be used in transfusions for any blood type.",
      list_Text_02:
        "Type O is routinely in short supply and in high demand by hospitals – both because it is the most common blood type and because type O negative blood is the universal blood type needed for emergency transfusions and for immune deficient infants.",
    },
    {
      title: "Type O Positive",
      list_Text_01:
        "38% of the population has O positive blood, making it the most common blood type.",
      list_Text_02:
        "O positive red blood cells are not universally compatible to all types, but they are compatible to any red blood cells that are positive (A+, B+, O+, AB+).",
    },
  ];
  return (
    <div>
      <SwipeableTextMobileStepper />

      <div className="mt-10">
        {arr_Of_Obj.map((item, key) => {
          return (
            <div key={key}>
              <Paper elevation={3} key={key} className="mx-52 flex">
                <div className="w-[400px] bg-red-500 flex justify-center items-center text-white rounded-md">
                  <h1 className="text-6xl p-5">{item.title}</h1>
                </div>
                <div className="mx-9 my-3">
                  <h1 className="text-4xl ">{item.title}</h1>
                  <br />
                  <ul className="list-disc">
                    <li>{item.list_Text_01}</li>
                    <br />
                    <li className="">{item.list_Text_02}</li>
                  </ul>
                </div>
              </Paper>
              <br />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
