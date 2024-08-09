import react from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../Style/Navbar.css'

const Navbar =({size, setShow}) => {
    return(
        <nav>
            <div className='nav-box'>
                <span className='my-shop' onClick={()=>setShow(true)}>COMIC SHOP</span>
                <div className='cart'  onClick={()=>setShow(false)}>
                    <span>
                        <i className='fas fa-shopping-cart'/>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar