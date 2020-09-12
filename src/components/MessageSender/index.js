import React, { useState } from 'react';
import './styles.css';

//MATERIAL UI
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

//PROVIDER
import { useStateValue } from '../../Context/StateProvider';

//IMAGES
import rubenProfile from '../../images/people/ruben.jpg';

export default function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    
    //const [{ user }, dispatch] = useStateValue();

    const handleSubmit = e => {
        e.preventDefault();

        //Reset the values
        setInput('');
        setImageUrl('');
    }

    return (
        <div className="messageSender">
            
             <div className="messageSender__top">
                <Avatar src={rubenProfile} /> {/* user.photoURL */}
                <form>
                    <input value={input} type="text" placeholder={`What's on your mind, Ruben?`}  className="messageSender__input" onChange={(e) => setInput(e.target.value)} /> 
                    {/* ${user.displayName} */}

                    <input placeholder="image URL (Optional)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
             
                    <button onClick={handleSubmit} type="submit" >
                      Send
                    </button>

                </form>
             </div>

             <div className="messageSender__botton">

                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "green"}} />
                    <h3>Feeling/Activity</h3>
                </div>
 
             </div>

        </div>
    )
}


