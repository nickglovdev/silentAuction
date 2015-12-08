import React, { PropTypes } from 'react'
import { Link } from 'react-router';

import Login from './login';
import Register from './register';

class Home extends React.Component {
  render () {
    return(
      <div className="homePage">
        <aside>
          <nav>
            <Link to="register">Register</Link>
            <Link to="login">Login</Link>
            <Link to="#">Home</Link>
          </nav>
        </aside>
        <div className="pageWrap">
          <main>
            {this.props.children}
          </main>
          <section className="siteDescription">
            <h2>Silence!</h2>
            <p>Hoodie bespoke kickstarter 90's seitan venmo godard poutine ramps.
              Taxidermy waistcoat butcher, iPhone meh 90's retro kale chips food
              truck hammock squid polaroid trust fund chambray affogato. Try-hard
              wayfarers brooklyn ramps kale chips, shoreditch scenester mlkshk
              pour-over roof party health goth pickled green juice sriracha.
              Lumbersexual paleo whatever, distillery drinking vinegar chicharrones
              sartorial chillwave. Small batch meggings occupy, food truck blog migas
              butcher schlitz. Readymade authentic sriracha, food truck lomo migas
              typewriter flannel raw denim pug you probably haven't heard of them
              williamsburg fanny pack photo booth art party. Letterpress fap
              farm-to-table +1 tacos flannel.
            </p>
          </section>
        </div>
      </div>
    )
  }
}

export default Home;
