import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import fauieee from '../../assets/fauieee.jpeg';
import { Tooltip } from '@mui/material';
import discord from '../../assets/discord.svg';
import instagram from '../../assets/instagram.svg';
import x from '../../assets/x.svg';
import tiktok from '../../assets/tiktok.svg';
import linkedin from '../../assets/linkedin.svg';



const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <div className='logo'>
          <img src={fauieee}/>
          <h1>FAU IEEE Student Branch</h1>
        </div>
        <div className='links'>
          <Link className='link' to={"/"}>Home</Link>
          <Link className='link' to={"/about"}>About</Link>
        </div>
      </nav>
      <header>
      </header>
      <footer>
        <div className='links'>
          <Tooltip title="Discord" placement="top" arrow>
            <a href='https://discord.gg/EPbNQ3NG'>
              <img src={discord} alt='discord'/>
            </a>
          </Tooltip>
          <Tooltip title="Instagram" placement="top" arrow>
            <a href='https://www.instagram.com/fau.ieee/'>
              <img src={instagram} alt='instagram'/>
            </a>
          </Tooltip>
          <Tooltip title="X" placement="top" arrow>
            <a href='https://x.com/fau_ieee' className='bg-white'>
              <img src={x} alt='x'/>
            </a>
          </Tooltip>
          <Tooltip title="TikTok" placement="top" arrow>
            <a href='https://www.tiktok.com/@fau.ieee'>
              <img src={tiktok} alt='tiktok'/>
            </a>
          </Tooltip>
          <Tooltip title="LinkedIn" placement="top" arrow>
            <a href='https://www.linkedin.com/company/fau-iee-student-branch/about/?viewAsMember=true'>
              <img src={linkedin} alt='linkedin'/>
            </a>
          </Tooltip>
        </div>
      </footer>
      <Outlet />
    </div>
  );
};

export default Layout;