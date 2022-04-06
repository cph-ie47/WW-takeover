import React, { useEffect } from "react";
import axios from "axios";
import info from "../info";
import Logo from '../img/WW-logo-sort-tekst.svg';

export default function WashStatus(data) {
  useEffect(() => {
    axios
      .post(
        info.backendUrl + "/" + data.locationID + "/start/" + data.programID
      )
      .then((result) => {
        console.log(result.data);
        data.setProducts(result.data.response.products);
      });
  }, []);

  return (
    <div className="another-page">
      <div className="nav-container">
            <img src={Logo} alt="" className='logo' />
      </div>
      <h1 className="statusText">Kør venligst ind i vaskehallen og bliv siddende i bilen </h1>
    </div>
  );
}
