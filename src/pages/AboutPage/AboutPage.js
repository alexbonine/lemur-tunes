'use strict'

import React from 'react';
// import { PureRenderMixin } from 'react/addons';
import './AboutPage.less'

export default class AboutPage extends React.Component {
  // mixins: [PureRenderMixin],  //agb immutable?

  render() {
    //todo serve via jade from the server
    let para1 = <h3>Growing up, I wasn’t always such a big live music fan but I did love making mixtapes.  Thankfully, my music tastes have changed since the days of burning CD-Rs 15 years ago but I still adhere to the 80-minute length and spend way too long crafting the right order.</h3>;
    let para2 = <h3>Since moving to Chicago, it’s been a great way to hear about new bands still playing tiny venues and bars around town. The kinds of places where the PBR is still $2, bands walk through the crowd to the stage, and you know every dollar spent at the merch table goes directly into the gas tank tomorrow.</h3>;
    let para3 = <h3>Looking for a project to learn React.JS and isomorphic javascript, I was inspired by a friend complaining she was always missing out on shows around town. She received all the venue emails but never remembered band names from mixes.</h3>;
    let para4 = <h3>I write web and mobile apps for a living.  You can checkout my personal page at <a href='http://www.alexbonine.com' targer='_blank'>alexbonine.com.</a></h3>;

    return (
      <div className='AboutPage'>
        <h2>Mixtapes &amp; Live Music</h2>
        {para1}
        {para2}
        <h2>The Site</h2>
        {para3}
        {para4}
      </div>
    );
  }

};