import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {Link} from "react-router-dom";
import '../App.css';
import {TopScroll} from "./TopScroll.jsx";
export const Header = ()  =>{
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" onClick={TopScroll}>
            <p className="font-bold text-inherit">
              <span className="text-3xl font-serif text-red-700">T</span>eam
              <span className="text-3xl font-serif ml-2 text-red-700">N</span>ext
              <span className="text-3xl font-serif ml-2 text-red-700">O</span>ne
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10 justify-end">
        <NavbarItem>
          <Link to="/" className="nav-link font-bold text-lg text-gray-800 hover:text-cyan-700" onClick={TopScroll}>
            ホーム
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to={"/#intro"} className="nav-link font-bold text-lg text-gray-800 hover:text-cyan-700">
            ご挨拶
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="/business-content" className="nav-link font-bold text-lg text-gray-800 hover:text-cyan-700" onClick={TopScroll}>
            事業内容
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/#contact"} className="nav-link font-bold text-lg text-gray-800 hover:text-cyan-700" onClick={TopScroll}>
            お問い合せ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
