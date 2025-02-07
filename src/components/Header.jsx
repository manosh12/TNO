import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import '../App.css';
import { TopScroll } from "./TopScroll.jsx";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "ご挨拶", link: "/#intro" },
    { name: "会社概要", link: "/company-info" },
    { name: "業務内容", link: "/business-content" },
    { name: "お問い合わせ", link: "/#contact" },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link to="/" onClick={TopScroll} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
            <p className="font-bold text-inherit mt-2 text-lg">TNOソリューション株式会社</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10 justify-end">
          {menuItems.map((item, index) => (
            <NavbarItem key={index} isActive={index === 0}>
              <Link
                to={item.link}
                className="nav-link font-bold text-lg hover:text-red-700"
                onClick={TopScroll}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="mobile-menu-item">
            <Link
              to={item.link}
              className="w-full"
              onClick={() => {
                handleMenuClose();
                TopScroll();
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
