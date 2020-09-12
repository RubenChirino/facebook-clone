import React from 'react';
import './styles.css';

//IMAGES
import rubenProfile from '../../images/people/ruben.jpg';

//COMPONENTS 
import SidebarRow from './SidebarRow';

//MATERIAL UI ICON
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

//PROVIDER
import { useStateValue } from '../../Context/StateProvider';

export default function Sidebar() {  

    //const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">

            <SidebarRow title='Ruben Chirinos' src={rubenProfile} />
            {/* title={user.displayName} src={user.photoURL} */}
            
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 information Center' />

            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />

            <SidebarRow Icon={PeopleIcon} title='Friends' />

            <SidebarRow Icon={ChatIcon} title='Messenger' />

            <SidebarRow Icon={StorefrontIcon} title='MarketPlace' />

            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />

            <SidebarRow Icon={ExpandMoreOutlined} title='MarketPlace' />

        </div>
    )
}

 
