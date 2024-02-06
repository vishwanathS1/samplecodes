import React,{useState} from 'react'
import {AppBar, Tab, Toolbar,Button, useMediaQuery,useTheme} from '@mui/material';
import { Typography,Tabs} from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import BadgeIcon from '@mui/icons-material/Badge';
import DrawerCopm from './DrawerCopm';
const ALL=["product","services","ContactUs","About"];
const Header =() => {
    const [value, setValue]=useState();
    return (
        <React.Fragment>
            <AppBar sx={{background: '#96e6a1'}}>
            <Toolbar>
                <Typography>
                <BadgeIcon/>
                <Tabs textcolor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor="secondary">
                    {
                        ALL.map((page,index)=>(
                            <Tab key={index} label={page} />

                        ))
                    }
                   
                    {/* <Tab label="services" />
                    <Tab label="ContactUs" />
                    <Tab label="About" /> */}
                </Tabs>
                <div style={{marginLeft:'1000px',padding:'10px'}}>
                <Button variant="contained" style={{margin:'5px'}}>Logout</Button>
                <Button variant="contained">Home</Button></div>
                </Typography>
                </Toolbar>
                <DrawerCopm/>
            </AppBar>
        </React.Fragment>
      )
}
export default Header;
 
