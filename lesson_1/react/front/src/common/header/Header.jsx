import Button from '../../component/Button/Button'
import './header.css'

function Header(){
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a>home</a>
                        </li>
                        <li>
                            <a>home</a>
                        </li>
                        <li>
                            <a>home</a>
                        </li>
                        <li>
                            <a>home</a>
                        </li>
                        <li>
                            <a>home</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Button className='header__btn' name='yolkon'/>
        </header>
    )
}

export default Header