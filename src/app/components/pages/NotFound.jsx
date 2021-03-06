import React from 'react';
import SvgImage from 'app/components/elements/SvgImage';
import {Link} from 'react-router';
import Icon from 'app/components/elements/Icon';

class NotFound extends React.Component {

  render() {
    return (
      <div>
        <div className="Header__top header">
          <div className="columns">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="Header__top-logo">
                  <Link to='/'><img src='/images/logo.png'/></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="NotFound float-center">
          <div>
            <img src='/images/404.png'/>
            <h4 className="NotFound__header">Sorry! This page doesn't exist.</h4>
            <p>Not to worry. You can head back to <a style={{fontWeight: 800}} href="/">our homepage</a>,
              or check out some great posts.
            </p>
            <ul className="NotFound__menu">
              <li><a href="/created">new posts</a></li>
              <li><a href="/trending">trending posts</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = {
  path: '*',
  component: NotFound
};
