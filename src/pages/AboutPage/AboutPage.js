'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import './AboutPage.less'

export default class AboutPage extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  render() {
    //todo serve via jade from the server
    let para1 = 'Growing up, I wasn’t always such a big live music fan but I did love making mixtapes.  Thankfully, my music tastes have changed since the days of burning CD-Rs 15 years ago but I still adhere to the 80-minute length and spend way too long crafting the right order.';
    let para2 = 'Since moving to Chicago, it’s been a great way to hear about new bands still playing tiny venues and bars around town. The kinds of places where the PBR is still $2, bands walk through the crowd to the stage, and you know every dollar spent at the merch table goes directly into the gas tank tomorrow.';
    let para3 = 'Looking for a project to learn React.JS and isomorphic javascript, I was inspired by a friend complaining she was always missing out on shows around town. She received all the venue emails but never remembered band names from mixes.';

    return (
      <div className='AboutPage'>
        <h4>Mixtapes &amp; Live Music</h4>
        <p className='mui-font-style-subhead-1'>{para1}</p>
        <p className='mui-font-style-subhead-1'>{para2}</p>
        <h4>The Site</h4>
        <p className='mui-font-style-subhead-1'>{para3}</p>
        <p className='mui-font-style-subhead-1'><strong>Front-End:</strong> JavaScript using React and Flux</p>
        <p className='mui-font-style-subhead-1'><strong>Back-End:</strong> Python using Google App Engine and Cloud datastores</p>
        <h4>Me</h4>
        <p className='mui-font-style-subhead-1'>I write web and mobile apps for a living.  You can check out my personal page at <a href='http://www.alexbonine.com' targer='_blank'>alexbonine.com</a>.</p>
      </div>
    );
  }

};