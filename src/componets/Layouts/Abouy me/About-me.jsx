import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Computer, Atom, Smartphone } from 'lucide-react';
import './About-Me.css';

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section className="expertise">
      <h1 data-aos="fade-up">My Expertise</h1>
      
      <div className="expertise-grid">
        <div className="expertise-card" data-aos="fade-right" data-aos-duration="1000">
          <div className="card-icon">
            <Computer size={40} />
          </div>
          <h2>Software Development</h2>
          <h3>
            Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.
          </h3>
        </div>

        <div className="expertise-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="card-icon">
            <Atom size={40} />
          </div>
          <h2>Frontend Dev</h2>
          <h3>
            Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
          </h3>
        </div>

        <div className="expertise-card" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
          <div className="card-icon">
            <Smartphone size={40} />
          </div>
          <h2>Flutter Dev</h2>
          <h3>
            Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.
          </h3>
        </div>
      </div>
    </section>
  );
};

