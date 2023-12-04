import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsPerson } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import "./Navbar.css"
import axios from "axios";

const Navbar = () => {
  const [tohomepage, settohomepage] = useState(false);
  const [tomenpage, settomenpage] = useState(false);
  const [towomenpage, settowomenpage] = useState(false);
  const [tokidspage, settokidspage] = useState(false);
  const [tohalpage, settohalpage] = useState(false);
  const [tobeautypage, settobeautypage] = useState(false); 
  const [tostudiopage, settostudiopage] = useState(false);

  const handlePageChange = (pageSetter) => {
    settohomepage(false);
    settomenpage(false);
    settowomenpage(false);
    settokidspage(false);
    settohalpage(false);
    settobeautypage(false);
    settostudiopage(false);
  };

  const handletohomepage = () => {
    settohomepage(true);
    settomenpage(false);
    settowomenpage(false);
    settokidspage(false);
    settohalpage(false);
    settobeautypage(false);
    settostudiopage(false);
  };

  const handletomenpage = () => {
    settohomepage(false);
    settomenpage(true);
    settowomenpage(false);
    settokidspage(false);
    settohalpage(false);
    settobeautypage(false);
    settostudiopage(false);
  };

  const handletowomenpage = () => {
    settohomepage(false);
    settomenpage(false);
    settowomenpage(true);
    settokidspage(false);
    settohalpage(false);
    settobeautypage(false);
    settostudiopage(false);
  };

  const handletokidspage = () => {
    settohomepage(false);
    settomenpage(false);
    settowomenpage(false);
    settokidspage(true);
    settohalpage(false);
    settobeautypage(false);
    settostudiopage(false);
  };

  const handletohalpage = () => {
    settohomepage(false);
    settomenpage(false);
    settowomenpage(false);
    settokidspage(false);
    settohalpage(true);
    settobeautypage(false);
    settostudiopage(false);
  };

  const handletobeautypage = () => {
    settohomepage(false);
    settomenpage(false);
    settowomenpage(false);
    settokidspage(false);
    settohalpage(false);
    settobeautypage(true);
    settostudiopage(false);
  };

  const handletostudiopage = () => {
    settohomepage(false);
    settomenpage(false);
    settowomenpage(false);
    settokidspage(false);
    settohalpage(false);
    settobeautypage(false);
    settostudiopage(true);
  };

  return (
    <div>
      <div
        className="Navbar"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p onClick={handletohomepage}>
          <img
            src="https://rb.gy/549onu"
            style={{ width: "100px", height: "40px" }}
          />
        </p>
        <p className="Navtext" onClick={handletomenpage}>MEN</p>
        <p className="Navtext" onClick={handletowomenpage}>WOMEN</p>
        <p className="Navtext" onClick={handletokidspage}>KIDS</p>
        <p className="Navtext" onClick={handletohalpage}>HOME & LIVING</p>
        <p className="Navtext" onClick={handletobeautypage}>BEAUTY</p>
        <p className="Navtext" onClick={handletostudiopage}>STUDIO <sup>NEW</sup></p>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <p className="icon"> <BsPerson /> <br/> Profile </p>
        <p className="icon"> <CiHeart /> <br/>Wishlist </p>
        <p className="icon"> <MdOutlineShoppingBag /> <br/>Bag</p>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Navbar;
