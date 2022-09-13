import React from "react";

const Navbar = () => {
  return (
    <div style={{ height: "75px", background: "white", padding: "0 40px" }}>
      <div
        style={{
          display: "flex",
          paddingTop: "14px",
          alignItems: "center",
          justifyContent: "center",
          width:'100%',
          minWidth:'990px'
        }}
      >
        <img
          src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png"
          width="127px"
          height="40px"
        />
        <input
          placeholder="Search in Lazada"
          style={{
            width: "688px",
            padding: "13px 19px",
            background: "#eff0f5",
            border: "none",
            borderRadius: "2px",
            margin: "0 40px",
          }}
        />
        <div style={{ marginRight: "40px" }}>cart</div>
        <img
          src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18s7ESBr0gK0jSZFnXXbRRXXa.jpg"
          width="188px"
          height="45px"
        />
      </div>
    </div>
  );
};

export default Navbar;
