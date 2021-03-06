import React, { Component } from "react";
import "./navbar.css";
let monthName = 'all';
let cityName = 'nainital';
class Navbar extends Component {

  componentDidMount() {
    
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light nav__formatting">
          <h1 className="navbar__brand">healthViz</h1>
          <div className="row top-buffer ml-auto">
            <div className="col">
              <div className="dropdown">
                <button
                  className="btn btn-success dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  Month selection
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button className="dropdown-item" onClick={this.props.monthNameHandler('all')}>All months</button>
                  <button className="dropdown-item" onClick={this.props.monthNameHandler('jan')}>January</button>
                  <button className="dropdown-item" onClick={this.props.monthNameHandler('feb')}>February</button>
                  <button className="dropdown-item" onClick={this.props.monthNameHandler('march')}>March</button>
                  <button className="dropdown-item" onClick={this.props.monthNameHandler('sep')}>September</button>
                  <button className="dropdown-item" onClick={this.props.monthNameHandler('nov')}>November</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row top-buffer ml-auto">
            <div className="col">
              <div className="dropdown">
                <button
                  className="btn btn-success dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  City selection
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button className="dropdown-item" onClick={this.props.cityNameHandler('nainital')}>Nainital</button>
                  <button className="dropdown-item" onClick={this.props.cityNameHandler('haridwar')}>Haridwar</button>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </>
      //TODO: modification to a variable file
    );
  }
}

export default Navbar;
