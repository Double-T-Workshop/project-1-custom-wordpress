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

import { useBlockProps } from "@wordpress/block-editor";
import "./Footer.css"; 

const Footer = () => {
  const blockProps = useBlockProps.save(); 

  return (
    <footer {...blockProps} className="footer">
      <div className="container">
       
        <div className="column">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2135.8374062098546!2d18.054798215908436!3d59.342123381662096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d617ab0fedd%3A0x1a6d0ed5a2165c9!2sNorrtullsgatan%206%2C%20113%2029%20Stockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1698228718752!5m2!1sen!2sus"
            width="300"
            height="200"
            className="map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

       
        <div className="column">
          <h3 className="heading">Adress</h3>
          <p>Novo IT AB</p>
          <p>Norrtullsgatan 6</p>
          <p>113 29 Stockholm</p>
          <p>info@novoit.se</p>
          <p>0707-918177</p>
        </div>

        
        <div className="column">
          <h3 className="heading">Sidor</h3>
          <ul className="list">
            <li>Hem</li>
            <li>Tjänster</li>
            <li>Nyheter</li>
            <li>Villkor</li>
            <li>Kontakt</li>
            <li>Webshop</li>
          </ul>
        </div>

        
        <div className="column">
          <h3 className="heading">Extra</h3>
          <ul className="list">
            <li>Allmänna villkor</li>
            <li>IT-ordbok</li>
          </ul>
          <div className="logo">
            <img
              src="/path-to-logo.png"
              alt="Novo IT Logo"
              className="logo-image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
