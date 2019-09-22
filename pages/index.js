import React from 'react';

export default () => (
  <article>
    <header>
      <div className="container">
        <h1>Bitcoin Lightning Candy Dispenser</h1>
        <a className="action" href="#">Buy</a>
        <a className="action" href="https://connect.sweetbit.io">Connect</a>
        <a href="#">Learn more</a>
      </div>
    </header>
    <section>
      <div className="container">
        <h1>FAQ</h1>
        <p>Started as ...</p>
        <p>Kinda went viral</p>
        <p>Lightning Hackday Berlin</p>
        <p>Demonstrated in senate</p>
        <p>Further improved</p>
        <p>Plug and play</p>
        <p>Testbed for new technologies</p>
        <p>Exploring the limits, at the moment seem endless</p>
      </div>
    </section>
    <section>
      <div className="container">
        <h1>FAQ</h1>
      </div>
    </section>
    <section>
      <div className="container">
        <h1>FAQ</h1>
      </div>
    </section>
    <section id="faq">
      <div className="container">
        <h1>FAQ</h1>
        <h2>What?</h2>
        <p></p>
        <h2>Why?</h2>
        <p></p>
        <h2>Other coins?</h2>
        <p>No.</p>
      </div>
    </section>
    <footer>
      <div className="container">
        The Lightning Land
      </div>
    </footer>
    <style jsx>{`
      header {
        display: block;
        height: 90vh;
      }

      header .action {
        display: inline-block;
        background-color: white;
        padding: 10px 40px;
        line-height: 60px;
        height: 60px;
        border-radius: 20px;
        vertical-align: middle;
        line-height: 40px;
        text-decoration: none;
      }

      header .action:not(:last-of-type) {
        margin-right: 10px;
      }

      .container {
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        padding: 0 15px;
      }

      section {
        background-color: #f2f2f2;
        padding: 60px 0;
      }

      section:nth-child(odd) {
        background-color: white;
      }

      footer {
        padding: 80px;
      }
    `}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html {
      }

      body {
        background: linear-gradient(36deg, #8C1A6A, #FF0054);
        margin: 0;
      }
    `}</style>
  </article>
);
