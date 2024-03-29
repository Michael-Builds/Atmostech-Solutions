import React from "react";
import { NavLink, Link } from 'react-router-dom';
import "../../index.css";
import "../../main.css"
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Logo2 from './Navs.png';

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,

} from "@heroicons/react/24/outline";
import { CiGlobe } from 'react-icons/ci';
import { VscVmConnect } from 'react-icons/vsc';
import { TbDeviceMobileStar } from 'react-icons/tb';
import { AiOutlineApi } from 'react-icons/ai';
import { AiOutlineCloudSync } from 'react-icons/ai';
import { BsBarChartFill } from 'react-icons/bs'

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "green",
    icon: VscVmConnect,
    title: "Software Development",
    path: "/software"
  },

  {
    color: "teal",
    icon: CiGlobe,
    title: "Web Development",
    path: "/web"
  },
  {
    color: "teal",
    icon: TbDeviceMobileStar,
    title: "Mobile App Development",
    path: "/mobile"
  },
  {
    color: "cyan",
    icon: AiOutlineApi,
    title: "API Integration",
    path: "/api"
  },
  {
    color: "green",
    icon: AiOutlineCloudSync,
    title: "EDI",
    path: "/edi"
  },
  {
    color: "orange",
    icon: BsBarChartFill,
    title: "Data Analytics and Visualization",
    path: "/analytics"
  },

];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ icon, title, color, path }, key) => (
    <Link to={path} key={key}>
      <MenuItem className="flex items-center gap-2 rounded-lg">
        <div className={`rounded-lg p-5 ${colors[color]}`}>
          {React.createElement(icon, {
            strokeWidth: 1,
            className: "h-6 w-6",
          })}
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" className="flex items-center text-sm">
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >

        <MenuHandler>
          <NavLink
            to="/service"
            variant="small"
            className="p-1 font-normal font-exo hover:none"
            activeClassName="active"
          >

            <ListItem
              className="flex items-center gap-2 py-2 pr-4 link"
              style={{ fontSize: "17px", border: "none" }}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >

              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </NavLink>
        </MenuHandler>

        {/* Dropdown menu list for the Services NavLink */}
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="p-0 mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1" style={{ marginRight: '80px' }}>
      <NavLink to="/" variant="small" activeClassName="active" color="white" className="p-1 font-normal font-exo">
        <ListItem className="flex items-center gap-2 py-2 pr-4 link" style={{ fontSize: "17px" }}>
          Home
        </ListItem>
      </NavLink>

      <NavLink to="/company" variant="small" color="white" activeClassName="active" className="p-1 font-normal font-exo">
        <ListItem className="flex items-center gap-2 py-2 pr-4 link" style={{ fontSize: "17px" }}>
          Company
        </ListItem>
      </NavLink>

      <NavListMenu />

      <NavLink to="/industry" variant="small" color="white" activeClassName="active" className="p-1 font-normal font-exo">
        <ListItem className="flex items-center gap-2 py-2 pr-4 link" style={{ fontSize: "17px" }}>
          Industries
        </ListItem>
      </NavLink>

      <NavLink to="/blogs" variant="small" color="white" activeClassName="active" className="p-1 font-normal font-exo">
        <ListItem className="flex items-center gap-2 py-2 pr-4 link" style={{ fontSize: "17px" }}>
          Blogs
        </ListItem>
      </NavLink>

      <NavLink to="/contact" variant="small" color="white" activeClassName="active" className="p-1 font-normal font-exo">
        <ListItem className="flex items-center gap-2 py-2 pr-4 link" style={{ fontSize: "17px" }}>
          Contact
        </ListItem>
      </NavLink>

    </List>
  );
}
export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="fixed top-0 left-0 z-50 w-full max-w-full px-6 py-3 mx-auto rounded-none main-menu">
      <div id='main-navbar' className="flex items-center justify-between">
        <NavLink to='/' className="ml-3 mr-4 cursor-pointer">
          <img id='navbar-image' src={Logo2} alt="Atmos Tech Logo" className="mr-4 cursor-pointer py-1.5 lg:ml-2 logo-image" />
        </NavLink>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton variant="text" color="white" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <XMarkIcon className="w-6 h-6" strokeWidth={2} /> : <Bars3Icon className="w-6 h-6" strokeWidth={2} />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>

  );
}