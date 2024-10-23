import { Outlet, Link } from 'react-router-dom';
import fauieee from '../assets/fauieee.jpeg';
import { Tooltip } from '@mui/material';
import discord from '../assets/discord.svg';
import instagram from '../assets/instagram.svg';
import x from '../assets/x.svg';
import tiktok from '../assets/tiktok.svg';
import calendar from '../assets/calendar.svg';

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
            <a href='https://www.instagram.com/ieeefau/'>
              <img src={instagram} alt='instagram'/>
            </a>
          </Tooltip>
          <Tooltip title="X" placement="top" arrow>
            <a href='https://x.com/fau_ieee'>
              <img src={x} alt='x'/>
            </a>
          </Tooltip>
          <Tooltip title="TikTok" placement="top" arrow>
            <a href='https://www.tiktok.com/@fau.ieee'>
              <img src={tiktok} alt='tiktok'/>
            </a>
          </Tooltip>
          <Tooltip title="Events" placement='top' arrow>
            <a href="https://fau.campuslabs.com/engage/organization/ieee/events">
              <img src={calendar} alt='Events'/>
            </a>
          </Tooltip>
        </div>
      </footer>
      <Outlet />
    </div>
  );
};

export default Layout;