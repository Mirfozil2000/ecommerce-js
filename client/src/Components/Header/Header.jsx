import React from "react";


const Header = () => {
    return(
        <header>
        <div className="left__content">
          <a href="/#/" className='brand'>Ecommerce</a>
        </div>
        <div className="right__content">
          <a href="/#/signin">Sign In</a>
          <a href="/#/card">Cart</a>
        </div>
      </header>
    )
}
export default Header