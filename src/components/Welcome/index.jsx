import React from 'react';
import { Link as Anchor } from 'react-router-dom';

export default function Welcome() {
  return (
    <>
      <div className="container d-flex flex-row">
        <div className="col-8 pe-4">
          <h2>Find your perfect destination</h2>
          <p className="my-4">Our app will help you find the perfect path for your next trip. With an esay-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button className="px-4 py-2 btn btn-primary fs-5" type="button">
            View More
          </button>
        </div>
        <div className="col-4">
          <img className="img-fluid rounded" src="/welcome/welcome.jpg" alt="welcome" />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Anchor to="/cities">
          <button className="px-4 py-2 btn btn-primary fs-5" type="button">
            <i class="bi bi-magic"></i> Let's visit more magical cities
          </button>
        </Anchor>
      </div>
    </>
  );
}