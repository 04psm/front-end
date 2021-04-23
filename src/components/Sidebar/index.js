import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink , SideBtnWrap,SidebarRoute } from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
    return (
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
             <CloseIcon />
         </Icon>
         <SidebarWrapper>
                <SidebarMenu>
                     <SidebarLink to="home" onClick={toggle}>
                     Home  
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                     Discover  
                    </SidebarLink>
                    <SidebarLink to="courses" onClick={toggle}>
                    Courses  
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                    Sign Up  
                </SidebarLink>
            </SidebarMenu>
                <SideBtnWrap>
                     <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
     </SidebarContainer>
    );
};

export default Sidebar;
