import React from 'react';
import Story from './Story';
import './styles.css';

//IMAGES
import rubenProfile from '../../images/people/ruben.jpg';
import eliezerProfile from '../../images/people/eliezer.jpg';
import asmiriaProfile from '../../images/people/asmiria.jpg';
import tomasProfile from '../../images/people/tomas.jpg';
import naldoProfile from '../../images/people/undefined-profile.jpg';

//Storys IMG  
import rubenStory from '../../images/storys/uba.jpg';
import tomasStory from '../../images/storys/farmony.jpg';
import asmiriaStory from '../../images/storys/bear-kawai.png';
import eliezerStory from '../../images/storys/vinicius.jpg';
import naldoStory from '../../images/storys/royale.jpg';

export default function StoryReel() {
    return (
        <div className="storyReel">

            <Story image={rubenStory} profileSrc={rubenProfile} title="Ruben Chirinos" />

            <Story image={eliezerStory} profileSrc={eliezerProfile} title="Eliezer Chirinos" />

            <Story image={asmiriaStory} profileSrc={asmiriaProfile} title="Asmiria Madriz" />

            <Story image={tomasStory} profileSrc={tomasProfile} title="Tomas Ernesto" />

            <Story image={naldoStory} profileSrc={naldoProfile} title="Reinaldo Colina" />
            
        </div>
    )
}

 
