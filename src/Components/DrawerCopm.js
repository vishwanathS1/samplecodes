import React, { useState } from 'react'
import { Drawer,IconButton,List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const ALL=["product","services","ContactUs","About","Login","Home"];
const DrawerCopm = () => {
    const [openDrawer,setOpenDrawer]=useState(false)
  return (
    <React.Fragment>

   <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}> 
    <List>
        {
            ALL.map((pages,index)=>(
                <ListItemButton key={index}>
            <ListItemIcon>
                <ListItemText>
                    {pages}
                </ListItemText>
            </ListItemIcon>xno
        </ListItemButton>
            ))
        }
        
    </List>
   </Drawer>
   {/* <IconButton /> */}
   <MenuIcon onClick={()=> setOpenDrawer(!openDrawer)} sx={{color:"white",marginLeft:"auto"}}/>
    </React.Fragment>

  );
  };
export default DrawerCopm;
