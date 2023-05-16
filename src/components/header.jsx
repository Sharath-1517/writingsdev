import React from 'react'

const Header = () => {
  return (
    <header className='header container'>
        <nav className='nav'>
            <h2 className='nav__heading'>writings.dev</h2>
            <ul className='nav--elements'>
                <li className="nav--elements__element">categories</li>
                <li className="nav--elements__element">articles</li>
                <li className="nav--elements__element">about</li>
            </ul>
        </nav>
        <div className="header--content container">
            <img src="images/logo.png" className='header__logo'/>
            <h1>Writings for Developers</h1>
            <h2>Curated collection of articles for busy developers</h2>
        </div>
    </header>
  )
}

export default Header