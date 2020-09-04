import React from 'react';

const Footer = ({ data: { social } }) => {
  const networks = social.map(network => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className} />
      </a>
    </li>
  ));

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2020 Rafael Rocha</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
