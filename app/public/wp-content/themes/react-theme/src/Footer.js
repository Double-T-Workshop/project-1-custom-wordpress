// import { Component } from '@wordpress/element';

// class Footer extends Component {
//     render() {
//         const { darkTheme } = this.props;
//         const footerStyle = {
//             backgroundColor: darkTheme ? '#333' : '#EEE',
//             color: darkTheme ? 'white' : '#333',
//             padding: '20px',
//             textAlign: 'center',
//         };
//         return (
//             <footer style={footerStyle}>
//                 © {new Date().getFullYear()} My WP Theme
//             </footer>
//         );
//     }
// }

// export default Footer;

import "./Footer.css"; 

const Footer = () => {
  return (
<footer class="footer">
  <div class="container">
    <div class="column">
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2135.8374062098546!2d18.054798215908436!3d59.342123381662096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d617ab0fedd%3A0x1a6d0ed5a2165c9!2sNorrtullsgatan%206%2C%20113%2029%20Stockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1698228718752!5m2!1sen!2sus"
        width="300"
        height="200"
        class="map"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>

    <div class="column">
      <h3 class="heading">Adress</h3>
      <p>Novo IT AB</p>
      <p>Norrtullsgatan 6</p>
      <p>113 29 Stockholm</p>
      <p>info@novoit.se</p>
      <p>0707-918177</p>
    </div>

    <div class="column">
      <h3 class="heading">Sidor</h3>
      <ul class="list">
        <li><a href="/hem">Hem</a></li>
        <li><a href="/tjanster">Tjänster</a></li>
        <li><a href="/nyheter">Nyheter</a></li>
        <li><a href="/villkor">Villkor</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
        <li><a href="/webshop">Webshop</a></li>
      </ul>
    </div>

    <div class="column">
      <h3 class="heading">Extra</h3>
      <ul class="list">
        <li><a href="/villkor">Allmänna villkor</a></li>
        <li><a href="/it-ordbok">IT-ordbok</a></li>
      </ul>
      <div class="logo">
        <img
          src="/path-to-logo.png"
          alt="Novo IT Logo"
          class="logo-image"
        />
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
