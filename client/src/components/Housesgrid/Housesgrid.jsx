/* eslint-disable no-unused-vars */
import React from 'react'
import './Housegrid.css'

const Housesgrid = () => {
  return (
    <div>
    <div className="grid-cols-1 rounded-lg sm:grid md:grid-cols-2 mx-10 transition ease-in-out delay-150 my-5">
   <div
    className="mx-5 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
    id="card1"
    >
    <a href="#!">
      <img
        className="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
        alt="Hollywood Sign on The Hill" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Small Houses
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      
        A small house is a cozy, compact dwelling that emphasizes simplicity and minimalism. It provides an intimate and uncluttered living experience, perfect for those who appreciate the beauty of less.
      </p>
    </div>
  </div>
  <div
    className="mx-5 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
    id='card2'
    >
    <a href="#!">
      <img
        className="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
        alt="Palm Springs Road" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Medium Houses
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        
       A medium house is a comfortably-sized dwelling, ideal for the average family or household. It strikes a balance between space and coziness, offering practicality without unnecessary excess.
      </p>
    </div>
  </div>
  <div
    className="mx-5 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
    id='card3'
    >
    <a href="#!">
      <img
        className="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
        alt="Skyscrapers" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Large Houses
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      A large house is a spacious, expansive dwelling that's meticulously designed for luxury and comfort. With generous room sizes and elegant features, it offers ample space for an extravagant and opulent living experience.
      </p>
    </div>
  </div>
  <div
    className="mx-5 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0"
    id='card4'
    >
    <a href="#!">
      <img
        className="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
        alt="Los Angeles Skyscrapers" />
    </a>
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Mansons
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      A mansion is an opulent, grandiose residence that epitomizes luxury and sophistication. With its generous proportions and lavish features, it provides an abundance of space for an extravagant and opulent living experience, setting the stage for an unparalleled lifestyle of grandeur and prestige.
      </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Housesgrid