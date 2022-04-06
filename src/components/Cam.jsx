import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "../info";
import Logo from '../img/WW-logo-sort-tekst.svg';

export default function Cam(data) {
  const [backendLpn, setBackendLpn] = useState({});

  useEffect(() => {
    axios.get(info.backendUrl + "/cam/" + data.LocationID).then((result) => {
      setBackendLpn(result.data);
      console.log(result.data.lpn);
    });
  }, []);

  function getRandomLPN(lpn) {
    const chars = lpn.slice(0, 2);
    const numbers = lpn.slice(2) - Math.round(Math.random() * 1);
    return chars + numbers;
  }

  const lpn = getRandomLPN("BV99123");

  function confirmLpn() {
    data.setLPN(lpn);
  }
  return (
    <div className="component green-page">
      <div className="nav-container">
            <img src={Logo} alt="" className='logo' />
      </div>
      <div className="confirmContainer">
        <h3 className="titleConfirm">Er dette dit nummerplade: {lpn} </h3>
        <button className="btnConfirmLPN btn" onClick={confirmLpn}>Bekræft nummerplade</button>
      </div>
    </div>
  );
}
