import React from "react";
import femalLogo from "./img/femalLogo.png";
import one from "./img/one.jpg"
import "./App.css";

function App() {
  return (
    <div>
      <div className="page">
      <header>
 <div className="logo">kalpna<span>.D</span></div>
        <nav className="navbar">
          <a href="#home" >Home</a>
          <a href="#about" >About</a>
          <a href="#skills" >Skills</a>
          <a href="#projects" >projects</a>
                   </nav>
        <a href="#contact" className="btn-header">Contact</a>

    </header>
<main>
    <section className="sec-one" id="home">
        <div className="sec-one-part">
            <div className="sec-one-part-text">
          <h1>Building <span>Modern</span><br/>Web Interfaces</h1>
              <p>I am a passionate developer specializing in creating clean, fast, and user-friendly websites using modern web technologies.</p>
              <br/><br/>
  <div className="sec-one-button">
    <button className="sec-one-button-btn-one">View My Work</button>
    <button className="sec-one-button-btn-two">Let's Talk</button>
  </div>
        </div>
        <div className="sec-one-part-img">
           
        <img src={femalLogo} alt="femalLogo"/>
            
        </div>
        </div>
    </section>
    <section className="sec-two" id="about">
       <div className="sec-two-part">
         <div className="sec-two-part-text">
            <h1> My <span>About</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veritatis recusandae tempore numquam excepturi voluptas vel quam illum eos repellat aperiam natus, tempora architecto quae atque labore perferendis velit.</p>
        </div>
       <div className="sec-two-part-inside">
         <div className="sec-two-part-inside-one">
            <h3>Education</h3>
            <h4>BS Computer Science</h4>
            <h5>2022 - 2026</h5>
        </div>
        <div className="sec-two-part-inside-one">
            <h3>Certifications</h3>
             <ul>
                            <li>Frontend Developer Course</li>
                            <li>Backend Developer Course</li>
                            <li>Logo Design Masterclass</li>
                        </ul>
        </div>
    </div>
</div>
    </section>
    <section className="sec-three" id="skills">
        <div className="sec-three-text">
            <h1>My <span>Tech Stach</span></h1>
            
        </div>
        <br/><br/>
        <div className="sec-three-main-part">
            <div className="sec-three-part">
<div className="sec-three-part-icon">
     🌐
      {/* <!-- icon --> */}
      </div>
<div className="sec-three-part-text">
      <h3>HTML5 & CSS3</h3>
        <p>Building semantic, accessible, and beautiful web pages.</p>
</div>
        </div>

        <div className="sec-three-part">
<div className="sec-three-part-icon">
     ⚡ 
     {/* <!-- icon --> */}
     </div>
<div className="sec-three-part-text">
      <h3>JavaScript</h3>
   <p>Adding rich dynamic functionality and interactive elements.</p>
</div>
        </div>

        <div className="sec-three-part">
<div className="sec-three-part-icon">
     ⚛️ 
     {/* <!-- icon --> */}
     </div>
<div className="sec-three-part-text">
      <h3>React.js</h3>
                    <p>Creating fast single-page applications with reusable components.</p>
</div>
        </div>

        <div className="sec-three-part">
<div className="sec-three-part-icon">
     🟢 
     {/* <!-- icon --> */}
     </div>
<div className="sec-three-part-text">
       <h3>Node & Express</h3>
                    <p>Developing scalable and secure backend server architectures.</p>
</div>
        </div>
        <div className="sec-three-part">
<div className="sec-three-part-icon">
     🍃 
     {/* <!-- icon --> */}
     </div>
<div className="sec-three-part-text">
       <h3>MongoDB</h3>
                    <p>Managing data efficiently with Mongoose database models.</p>
</div>
        </div>

        <div className="sec-three-part">
<div className="sec-three-part-icon">
     🌐 
     {/* <!-- icon --> */}
     </div>
<div className="sec-three-part-text">
      <h3>HTML5 & CSS3</h3>
        <p>Building semantic, accessible, and beautiful web pages.</p>
</div>
        </div>
        </div>
    </section>
    <br/><br/>
    <section className="sec-four" id="projects">
        <div className="sec-four-text">
            <h1>My <span>Projects</span></h1>
            <br/><br/>
        </div>
      
<div className="sec-four-part">
  <div className="sec-four-part-inside">
    <div className="sec-four-part-inside-text">
      <div className="sec-four-part-inside-img">
        <img src={one} alt="one"/>
           <div className="overlay">
        <div className="sec-overlay">
          <button className="overlay-btn">click me!</button>
        </div>
      </div>
    </div>
<div className="sec-four-part-inside-text-one">
 
  <h2>E-Commerce Website</h2>
                    <h4>Built with React and Node.js</h4>
</div>
    </div>


     <div className="sec-four-part-inside-text">
      <div className="sec-four-part-inside-img">
       <img src={one} alt="one"/>
      <div className="overlay">
         <div className="sec-overlay">
          <button className="overlay-btn">click me!</button>
        </div>
      </div>
    </div>
<div className="sec-four-part-inside-text-one">
 
<h2>E-Commerce Website</h2>
                    <h4>Built with React and Node.js</h4></div>
    </div>

     <div className="sec-four-part-inside-text">
      <div className="sec-four-part-inside-img">
   <img src={one} alt="one"/>
      <div className="overlay">
         <div className="sec-overlay">
          <button className="overlay-btn">click me!</button>
        </div>
      </div>
    </div>
<div className="sec-four-part-inside-text-one">
 
  <h2>E-Commerce Website</h2>
                    <h4>Built with React and Node.js</h4>
</div>
    </div>

     <div className="sec-four-part-inside-text">
      <div className="sec-four-part-inside-img">
      <img src={one} alt="one"/>
      <div className="overlay">
        <div className="sec-overlay">
          <button className="overlay-btn">click me!</button>
        </div>
      </div>
    </div>
<div className="sec-four-part-inside-text-one">
 <h2>E-Commerce Website</h2>
                    <h4>Built with React and Node.js</h4>
</div>
    </div>



     <div className="sec-four-part-inside-text">
      <div className="sec-four-part-inside-img">
  <img src={one} alt="one"/>
      <div className="overlay">
         <div className="sec-overlay">
          <button className="overlay-btn">click me!</button>
        </div>
      </div>
    </div>
<div className="sec-four-part-inside-text-one">
 
 <h2>E-Commerce Website</h2>
                    <h4>Built with React and Node.js</h4>
</div>
    </div>

      <div className="sec-four-part-inside-text">
      <div className="sec-four-part-inside-img">
      <img src={one} alt="one"/>
      <div className="overlay">
         <div className="sec-overlay">
          <button className="overlay-btn">click me!</button>
        </div>
      </div>
    </div>
<div className="sec-four-part-inside-text-one">
 <h2>E-Commerce Website</h2>
                    <h4>Built with React and Node.js</h4>
</div>
    </div>

  </div>

</div>


        

    </section>

  
    <section className="sec-five" id="contact">
          <div className="sec-five-text">
     <h2>My  <span>Contact</span> </h2>
   </div>
 
     <div className="container">
 
    <form action="/contact" method="POST">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="name" placeholder="Your first name.." required />

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email.." required />

      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Write something.." required />
<br/>
      <button type="submit" id="btn">Send Message</button>
    </form>
  </div>

    </section>
</main>
   {/* <!-- footer design--> */}
     <footer className="footer">
        <div className="footer-text">
            <p>Copyright &copy; 2026 by Kalpna Devi | All Right Reserved.</p>
        </div>

        <div className="footer-iconTop">
            <a href="#"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
     </footer>
    </div>
    </div>
  );
}

export default App;
