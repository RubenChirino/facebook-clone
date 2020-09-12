import React from 'react';
import './styles.css';

//IMAGES
import postOneProfile from '../../images/people/ruben.jpg';
import postOneImg from '../../images/post/summer.jpg';

import postTwoProfile from '../../images/people/undefined-profile.jpg';
import postTwoImg from '../../images/post/chill.jpg';

//COMPONENTS
import StoryReel from '../StoryReel';
import MessageSender from '../MessageSender';
import Post from '../Post';

export default function Feed() {
    return (
        <div className="feed">
 
            <StoryReel />
       
            <MessageSender />

            {/* MessageSender */}
            <Post profilePic={postOneProfile}
            message="🌊🌞 Nice #TBT! 🌊🌞" image={postOneImg} 
            timestamp="This is a timestamp" username="Ruben Chirinos" />
            
            <Post profilePic={postTwoProfile}
            message="🥃 Chilling 🥃" image={postTwoImg} 
            timestamp="This is a timestamp" username="Victor Ceballos" />

            <Post />

        </div>
    )
}


 
