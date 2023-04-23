import './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="map-section">
                <img src="/assets/img/Capture.PNG" alt="" />
            </div>
            <div className="socials-list">
                <a href="/"><i className="fa-brands fa-facebook"></i></a>
                <a href="/"><i className="fa-brands fa-instagram"></i></a>
                <a href="/"><i className="fa-brands fa-youtube"></i></a>
                <a href="/"><i className="fa-brands fa-pinterest"></i></a>
                <a href="/"><i className="fa-brands fa-twitter"></i></a>
                <a href="/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="copyright">Powered by <a href="/">w3.css</a> </div>
        </div>
    )
}

export default Footer;