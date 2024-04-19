import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
const pages = ["Products", "Pricing", "Blog"];

const Footer = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl">
      <div className="flex flex-col gap-10">
        <div className=" grid gap-4 lg:grid-cols-3  items-center ">
          <div className="">
            <div className="flex items-center gap-2">
              <img src="/assets/logo.svg" alt="" />
              <h1 className=" text-base font-semibold">Brands.io</h1>
            </div>
          </div>
          <div className="flex max-sm:flex-col justify-around">
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Services</Link>
            <Link href="#">Contact Us</Link>
          </div>
          <div className="flex justify-end gap-4">
            <Link href="#">
              <img src="/assets/fb.svg" alt="" />
            </Link>
            <Link href="#">
              <img src="/assets/insta.svg" alt="" />
            </Link>
            <Link href="#">
              <img src="/assets/yt.svg" alt="" />
            </Link>
          </div>
        </div>
        <hr className=" border-black" />
        <p className=" opacity-50 text-center">
          Copyright © Brands.io creative
        </p>
      </div>
    </Container>
  );
};

export default Footer;
