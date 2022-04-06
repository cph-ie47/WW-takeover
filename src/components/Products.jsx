import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "../info";
import Logo from '../img/WW-logo-sort-tekst.svg';

export default function Products(data) {
  useEffect(() => {
    axios.get(info.backendUrl + "/products/" + data.lpn).then((result) => {
      data.setProducts(result.data.response.products);
    });
  }, []);
  return (
    <div className="blue-page">
      <div className="nav-container">
            <img src={Logo} alt="" className='logo' />
      </div>

      {data.products.map((product) => {
        return (
          <div
            key={product.productid}
            className="card productCards "
            id={"card-" + product.productid}
          >
            <div className="card-body">
              <h5 className="card-title program-name">{product.name}</h5>
              <p className="card-text program-price">{product.price}</p>
              <p className="card-text program-text">{product.description}</p>
              
              <button
                className="btn btn-wash btn-card btnProgram"
                onClick={data.chooseWash}
                value={product.program}
              >
                Vælg program
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
