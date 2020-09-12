import React from 'react';
import './styles.css';

//IMAGES
import fbLogo from '../../images/fb-logo.png';
import rubenProfile from '../../images/people/ruben.jpg';

//MATERIAL UI 
import { Avatar, IconButton } from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//PROVIDER
import { useStateValue } from '../../Context/StateProvider';

export default function Navbar() {

    //const [{ user }, dispatch] = useStateValue();

    return (
        <header className="navbar">
            
            <div className="navbar__search">
               <img src={fbLogo} alt="Facebook Logo"/>
               <div className="navbar__input">
                    <SearchIcon /> 
                    <input placeholder="Search Facebook" type="text" />
               </div>
            </div>

            <div className="navbar__center">
                <div className="navbar__option navbar__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="navbar__option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="navbar__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="navbar__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="navbar__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="navbar__right">

                <div className="navbar__info">
                    <Avatar src={rubenProfile} /> {/* user.photoURL */}
                    <h4>Ruben Chirinos</h4> {/* {user.displayName} */}
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>

        </header>
    )
}

 
