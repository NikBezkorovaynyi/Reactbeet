import Button from "../../component/button/Button";
import "./footer.scss";

function Footer(){
    return(
        <footer className="footer">
        <div className="container footer__container" id="Cont">
           <Button className="yolo" name="Like this" id="butt"></Button>
                
                <h2 className="title">Contacts</h2>

            <ul className="footer__social-row">
                <li className="footer__nav">
                    <a className="footer__text" href="https://www.facebook.com/">
                        Facebook
                    </a>
                </li>
                <li className="footer__nav">
                    <a className="footer__text" href="https://www.instagram.com/" target="_blank">
                        Instagram
                    </a>
                </li>
                <li className="footer__nav">
                    <a className="footer__text" href="https://dribbble.com/" target="_blank">
                        Dribbble
                    </a>
                </li>
                <li className="footer__nav">
                    <a className="footer__text" href="https://ua.linkedin.com/" target="_blank"> 
                        Linkedin
                    </a>
                </li>
            </ul>
        </div>
        
    </footer>
    )
}
export default Footer
