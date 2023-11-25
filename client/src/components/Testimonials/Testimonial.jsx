import React from 'react'
import './testimon.css'

const Testimonial = () => {
  return (
    <div>

    <section className="testimonials-container">
        <h2 id='test-heading'>What Our Users Are Saying </h2>
        <div className="testimonials">
            <div className="testimonial">
                <h3>"A go to website for all house recommendations"</h3>
                <p> It has been really helpful to me to gain more knowledge about all the things required to construct my house, all the products available were also helpful. <span className="testimonal-author">Akshat</span></p>
            </div>
            <div className="testimonial">
                <h3>"A bona-fido game-changer"</h3>
                <p>Baxters are at the top of the food chain! Maximus is a picky eater but he loves these treats. <span
                        className="testimonal-author">Aditya</span>
                </p>
            </div>
            <div className="testimonial">
                <h3>"Treat time has never been so dog-gone amazing"</h3>
                <p> Our little Mabel gives them two paws up and a whole lot of slobbery kisses. <span
                        className="testimonal-author">Gaurav</span> </p>
            </div>
        </div>

    </section>

    

    </div>
  )
}

export default Testimonial