import React, { Component } from 'react';
import "bootstrap/js/src/collapse.js";
import { Link , withRouter} from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.currentPage = this.currentPage.bind(this)

        this.state = {
            hidden: "none"
        }

    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            console.log('Route change!')
            this.render()
        }
    }

     currentPage(path) {
        return window.location.pathname === path || window.location.pathname === path + '/' ? "nav-item active" : "nav-item"
    }

    render() {
        console.log(window.location.pathname)
        console.log(window.location.pathname === "/")
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">Star Wars Holocron</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className={this.currentPage("/")}>
                <Link to="/" className="nav-link">Home</Link>
                </li>
                <div style = {{"display": this.state.hidden}}>
                    <li className={this.currentPage("/content")}>
                    <Link to="/content" className="nav-link">Submit Content</Link>
                    </li>
                </div>
                <li className={this.currentPage("/contact")}>
                <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className={this.currentPage("/about")}>
                <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className={this.currentPage("/blog")}>
                <Link to="/blog" className="nav-link">Blog</Link>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">

                <a className="btn btn-outline-primary my-2 my-sm-0" href="https://twitter.com/sw_holocron"><i className="fab fa-twitter">&nbsp;</i>Follow on Twitter!</a>

            </form>
            </div>
            </nav>
        
        );
    }
}
export default withRouter(props => <Navbar {...props}/>);
