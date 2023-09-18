import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar,Typography } from '@mui/material';
import {NavLink} from 'react-router-dom';
import logo from '../logo.png'

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx = {{ backgroundColor : "#232F3D"}} position='sticky'>
          <Toolbar>
          <Typography>
            <img src={logo} style={{height:100,width:250,objectFit:"cover"}}/>
          </Typography>
          <Tabs 
          sx ={{ml:"auto"}}
          textColor='inherit' 
          indicatorColor='primary' 
          value ={value} 
          onChange={(e,val) => setValue(val)}>
            <Tab LinkComponent={NavLink} to = "/" label='Home'></Tab> 
            <Tab LinkComponent={NavLink} to = "/India" label='India'></Tab>
            <Tab LinkComponent={NavLink} to = "/Technology" label='Technology'></Tab>
            <Tab LinkComponent={NavLink} to = "/Stocks" label='Stocks'></Tab>
            <Tab LinkComponent={NavLink} to = "/Sports" label='Sports'></Tab>
            <Tab LinkComponent={NavLink} to = "/entern" label='Entertainment'></Tab>
            <Tab LinkComponent={NavLink} to = "/panch" label='Panchang'></Tab>
          </Tabs>
          </Toolbar>

        </AppBar>
    </div>
  )
}

export default Header;