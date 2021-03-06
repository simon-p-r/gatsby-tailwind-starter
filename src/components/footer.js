import * as React from 'react';

const Footer = () => (
  <footer className="mt-[2rem]">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
);

export default Footer;
