import { Component } from '@wordpress/element';
import Navbar from './Navbar';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'SE', // Default language
        };
    }

    toggleLanguage = () => {
        this.setState((prevState) => ({
            language: prevState.language === 'SE' ? 'EN' : 'SE',
        }));
    };

    render() {
        const { language } = this.state;

        const headerStyle = {
            backgroundColor: '#FFF', // Static background color
            color: '#333', // Static text color
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for design
        };

        const buttonStyle = {
            padding: '10px 20px',
            backgroundColor: '#63ab65',
            color: '#FFF',
            textDecoration: 'none',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginLeft: '20px',
        };

        return (
            <header style={headerStyle}>
                {/* Logo */}
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#63ab65' }}>
                    novoit
                </div>

                {/* Navbar */}
                <Navbar />

                {/* Language Switcher */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        onClick={this.toggleLanguage}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: 'transparent',
                            border: '1px solid #63ab65',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            color: '#63ab65',
                            marginRight: '20px',
                        }}
                    >
                        {language}
                    </button>

                    {/* Webshop Button */}
                    <a href="/webshop" style={buttonStyle}>
                        Webshop
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
