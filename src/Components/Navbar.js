import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import NavMenu from "./NavMenu";
import { IconContext } from "react-icons/lib";
import { Scrollbars } from "react-custom-scrollbars";
import "./Navbar.scss";





const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          
         
          <a className="menu" href="/Menu">Menu</a>
          <a className="cart" href="/Cart">Cart</a>
        
          <a className="logout" href="/">Logout</a>

      
        </Nav>
      

        <SidebarNav sidebar={sidebar}>
          <Scrollbars style={{ width: "100%", height: "100%" }}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <NavMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </Scrollbars>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
            
};

export default Sidebar;
