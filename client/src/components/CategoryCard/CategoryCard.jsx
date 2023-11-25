/* eslint-disable no-unused-vars */
import React from 'react'
import './CategoryCard.css'
import './Categoryscss.scss'
const CategoryCard = () => {

  const imgUrl = ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523216847009-1dbdf2ca6236?auto=format&fit=crop&q=80&w=3052&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1577670552647-6ce12a463e7d?auto=format&fit=crop&q=80&w=3024&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1627251050091-001e93fbe32e?auto=format&fit=crop&q=80&w=3024&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

  return (
    <>
    <div className="background"></div>
    <div className="background-texture"></div>

    {/* <section className="carousel">
      <h2 className="categories__title">EXPLORE DIFFERENT CATEGORIES: </h2>
      <div className="carousel__container">
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
         <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div> */}
        {/*
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div> */}
 <section className="carousel">
 <div className='carousel-container'>
  <div class="card-hover">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
        Make your <span>choice</span> right now!
      </h3>
      <p class="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
      <a href="#" class="card-hover__link">
        <span>Learn How</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src={imgUrl[0]} alt=""/>
  </div>

  <div class="card-hover">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
      Explore more about<span> Walls</span> right now!
      </h3>
      <p class="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
      <a href="#" class="card-hover__link">
        <span>Learn How</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src={imgUrl[1]} alt=""/>
  </div>

  <div class="card-hover">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
      Explore more about<span> Doors</span> right now!
      </h3>
      <p class="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
      <a href="#" class="card-hover__link">
        <span>Learn How</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src={imgUrl[2]} alt=""/>
  </div>

  <div class="card-hover">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
        Explore more about<span> Windows</span> right now!
      </h3>
      <p class="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
      <a href="#" class="card-hover__link">
        <span>Learn How</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src={imgUrl[3]} alt=""/>
  </div>
  </div>
  </section>
    </>
  )
}

export default CategoryCard