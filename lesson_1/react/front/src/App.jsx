import Footer from "./common/footer/Footer"
import Header from "./common/header/Header"

import Button from "./component/Button/Button"
import Cart from "./component/Cart/Cart"

import treeimg from "./img/tree-736885__480.jpg"
import './style/main.css'

function App(){


    return  (
        <>
        <Header/>

    <section>
    <h2>dwdwadwa</h2>
        <Button />
        <Button name='run' className='yolo'/>
        <img src={treeimg} alt=""/>
        <Cart title='Ricich' text='hello'/>

    </section>
    
        <Footer/>
        </>
        
    )
}

export default App