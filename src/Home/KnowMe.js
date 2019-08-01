import React from 'react';
import './styles/know-me.css';
import DevIcons from './DevIcons';
import DevLogo from './DevLogo'

export class KnowMe extends React.Component {
         render() {
           return (
             <section id="know-me">
               <h3 className="titles">KNOW ME !</h3>

               <section className="lucy-know">
                 <h4 className="lucy-know-text">HI !</h4>
                 <p>
                   It’s a pleasure to have you here! My name is Lucy and
                   I’m an <b>industrial designer</b> with a strong focus
                   on <b>usability and design.</b>
                   That way when I decided to grow my profession towards{" "}
                   <b>technology</b> and digital products it was much
                   easier to understand the <b>user's experience</b>
                   in products. My dev tools are:
                 </p>
               </section>
               <section className="icons-all">
                 <DevIcons
                   icon="devicon-javascript-plain dev-icons"
                   iconText="Javascript"
                 />

                 <DevIcons
                   icon="devicon-html5-plain dev-icons"
                   iconText="HTML5"
                 />

                 <DevIcons
                   icon="devicon-css3-plain dev-icons"
                   iconText="CSS3"
                 />

                 <DevIcons
                   icon="devicon-react-original dev-icons"
                   iconText="React JS"
                 />

                 <DevIcons
                   icon="devicon-nodejs-plain dev-icons"
                   iconText="Node JS"
                 />

                <DevLogo 
                 gral = "icon-with-name logos-icon"
                 icon="scrum"
                 iconText="SCRUM"
                 />

                 <DevIcons
                   icon="devicon-git-plain dev-icons"
                   iconText="GIT"
                 />

                 <DevIcons
                   icon="devicon-github-plain dev-icons"
                   iconText="Github"
                 />

                <DevLogo 
                 gral = "icon-with-name logos-icon"
                 icon="figma"
                 iconText="Figma"
                 />

                 <DevIcons
                   icon="devicon-illustrator-line dev-icons"
                   iconText="Illustrator"
                 />

                 <DevIcons
                   icon="devicon-photoshop-line dev-icons"
                   iconText="Photoshop"
                 />

                 <DevIcons
                   icon="devicon-visualstudio-plain dev-icons"
                   iconText="Visual Studio"
                 />

                 <DevLogo 
                 gral = "icon-with-name logos-icon"
                 icon="firebase"
                 iconText="Firebase"
                 />


               </section>

               <section className="lucy-know">
               <p>
                 When I’m not coding or designing you can find me doing
                 any kind of exercise, like: Crossfit, swimming, biking,
                 and so on or just reading, <b>I LOVE IT!</b>
               </p>
               <p>And basically that's me, I hope to see you soon!</p>
               </section>
             </section>
           );
         }
       }