import React from 'react'
import { Link } from 'react-router';

import setup from '../../setup'
import User from '../../models/users'

import ListItems from './listItems'

class PublicView extends React.Component {
  render () {
    return (
      <div className="homePage">
        <div className="publicWrap">
                  <h1>Public View</h1>
          <div className="publicView">
            <section className="column1">
              <h1>box1</h1>
            </section>
            <section className="column2">
              <h1>box2</h1>
            </section>
            <section className="column3">
              <h1>box3</h1>
            </section>
          </div>
          <div className="publicView2">
            <section className="column4">
              <h1>box4</h1>
            </section>
            <section className="column5">
              <h1>box5</h1>
            </section>
            <section className="column6">
              <h1>box6</h1>
            </section>
          </div>
          <div className="publicView3">
            <section className="column7">
              <h1>box7</h1>
            </section>
            <section className="column8">
              <h1>box8</h1>
            </section>
            <section className="column9">
              <h1>box9</h1>
            </section>
          </div>
          <div className="publicView4">
            <section className="column10">
              <h1>box10</h1>
            </section>
            <section className="column11">
              <h1>box11</h1>
            </section>
            <section className="column12">
              <h1>box12</h1>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default PublicView;
