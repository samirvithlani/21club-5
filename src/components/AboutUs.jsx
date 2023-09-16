import React from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "./ButtonComponent";

export const AboutUs = () => {
  return (
    <div>
      AboutUs
      <ul>
        <li>
          <Link to="/aboutus/company">aboutcompany</Link>
        </li>
        <li>
          <Link to="/aboutus/country">aboutcountry</Link>
        </li>
      </ul>
      <ButtonComponent buttonName="AboutUs" />
    </div>
  );
};
