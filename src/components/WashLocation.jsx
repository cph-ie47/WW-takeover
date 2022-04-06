import React from "react";


export default function WashLocation(data) {
  return (
    
    <div className="locationContainer"> 
    
      <button
        className="btn btn-wash btn-lokalitet btn-location"
        onClick={data.locationClicked}
        disabled={data.location.status !== "available" ? "on" : ""}
        value={data.location.id}
      >
        {data.location.name}
      </button>
    </div>
  );
}
