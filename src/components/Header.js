import React from 'react'
import { Link } from 'gatsby'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar">
                        <img src={avatar} alt="" />
                    </Link>
                    <h1>
                        <strong>iCenter Tech Data Science</strong>, portal de
                        artigos, dicas, tutoriais e muito mais sobre data
                        science
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
