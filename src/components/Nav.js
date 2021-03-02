import React from 'react'

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/*Link to the About page*/}
                        <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
                        {/*Link to the Contact page*/}
                        <a className="nav-link" href="/contact">Contact</a>
                        {/*Link to the Portfolio page*/}
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
