import "./header.scss";

function Header(){
    return (
        <header className="header">
            <div className="container header__container">                
                   <ul className="header__nav-row">
                        <li className="nav">
                            <a className="header__text" href="/">Home</a>
                        </li>
                        <li className="header__nav">
                            <a className="header__text" href="#img">Img</a>
                        </li>
                        <li className="header__nav">
                            <a className="header__text" href="#butt">Button</a>
                        </li>
                        <li className="header__nav">
                            <a className="header__text" href="#Cont">Contact</a>
                        </li>
                   </ul>              
            </div>
        </header>
    )
}

export default Header