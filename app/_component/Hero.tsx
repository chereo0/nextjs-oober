import React from 'react'

function Hero() {
  return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://www.dentistfriend.com//uploads/praxisimages/Find-a-Job.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Searching for a job</h1>
      <p className="mb-5">join our app to find the best job with best out just from your Home any job you will find just in WhoobleTask.</p>
      <button className="btn btn-secondry">join Whooble</button>
    </div>
  </div>
</div>
  )
};

export default Hero
