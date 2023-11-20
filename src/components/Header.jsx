import React from 'react'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/react";
import Logo from "../assets/Logo.png"
const menuItems = [
  "Home",
  "Events",
  "Watch",
  "Team",
  "AboutUs",
  "ContactUs"
];
function Header() {
  return (
    <div className='p-2' style={{fontFamily:"Inter",width:"100%"}}>
    <Navbar disableAnimation isBordered style={{width:"100%"}}>
      <NavbarContent className="sm:hidden" justify='start'>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit"><img className='object-cover' src={Logo} style={{width: 70, height: 70,}} alt="" srcset="" /></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <div className='rounded-full'>
          <img className='object-cover' src={Logo} alt="" srcset="" style={{width: 70, height: 70,}}/>
          </div>
         
        </NavbarBrand>
        <NavbarItem>
          <Link style={{color:"#FBE4C1"}} href="#" className='text-2xl font-bold'>
          Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page"  style={{color:"#FBE4C1"}} className='text-2xl font-bold'>
          Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{color:"#FBE4C1"}} href="#" className='text-2xl font-bold'>
          Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{color:"#FBE4C1"}} href="#" className='text-2xl font-bold'>
          AboutUs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{color:"#FBE4C1"}} href="#" className='text-2xl font-bold'>
          ContactUs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
  )
}

export default Header
