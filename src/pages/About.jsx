import React from "react";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className="mt-24">
      <div className="flex justify-center">
        <h1 className="text-4xl  underline">About Us</h1>
      </div>
      <br />
      <br />
      <div className="flex justify-center flex-col">
        <h1 className="text-2xl underline text-center">
          What is Blood Donation?
        </h1>
        <br />
        <h1 className="text-4xl underline text-center ">Overview</h1>
        <br />
        <p className="text-center mx-52">
          Blood donation is a voluntary procedure that can help save lives.
          There are several types of blood donation. Each type helps meet
          different medical needs.
        </p>
        <br />
        <h1 className="text-4xl underline text-center">Whole blood donation</h1>
        <br />
        <p className="text-center mx-52">
          Whole blood donation is the most common type of blood donation. During
          this donation, you donate about a pint (about half a liter) of whole
          blood. The blood is then separated into its components — red cells,
          plasma and sometimes platelets.
        </p>
        <br />
        <h1 className="text-4xl underline text-center">Apheresis</h1>
        <br />
        <p className="text-center mx-52">
          During apheresis, you are hooked up to a machine that collects and
          separates different parts of your blood. These blood components
          include red cells, plasma and platelets. The machine then returns the
          remaining parts of the blood back to you.
        </p>
        <ul className="mx-56 list-disc">
          <li>
            <strong>Platelet donation (plateletpheresis)</strong> collects only
            platelets. Platelets are the cells that help stop bleeding by
            clumping and forming plugs in blood vessels (clotting).
          </li>
          <li>
            <strong>Double red cell donation</strong> allows you to donate a
            concentrated amount of red blood cells. Red blood cells deliver
            oxygen to your organs and tissues.
            <br />
            Donated red blood cells are typically given to people with severe
            blood loss, such as after an injury or accident, and people with
            anemia (low hemoglobin).
          </li>
          <li>
            <strong>Plasma donation (plasmapheresis)</strong> collects the
            liquid portion of the blood (plasma). Plasma helps blood clot and
            contains antibodies that help fight off infections.
            <br />
            Plasma is commonly given to people in emergency and trauma
            situations to help stop bleeding.
          </li>
        </ul>
        <br />
      </div>
      <Footer />
    </div>
  );
}
