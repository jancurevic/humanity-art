import heroImage from "../assets/hero.JPG";
import ethiopiaTitle from "../assets/ethiopia-title.svg";
import humanityTitle from "../assets/humanity.svg";
import detailsImage from "../assets/hero2.JPG";
import aboutImage from "../assets/hero3.JPG";
import prevImage from "../assets/prev.jpg";
import contactImage from "../assets/contact.jpg";

import Voting from "./Voting";

const Index = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Hero Section */}
      <section
        id="hero"
        className="snap-start h-screen flex items-center justify-center bg-background border-b border-border relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" w-full h-full text-center px-4 relative z-10 bg-black p-2 rounded-md bg-opacity-30 flex flex-col items-center justify-center">
          <img
            src={humanityTitle}
            alt="Humanity"
            className="mx-auto mb-6 max-w-[90%] md:max-w-2xl h-auto invert blur-[0.5px]"
          />
          <img
            src={ethiopiaTitle}
            alt="Ethiopia - Land of Origins"
            className="mx-auto max-w-[90%] md:max-w-2xl h-auto invert blur-[0.5px]"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="snap-start h-screen flex items-center justify-center bg-secondary border-b border-border relative">
        <div 
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-2xl px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            About
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            The Humanity Exhibition by <span className="whitespace-nowrap">Jake Lewis-Hurn</span> is a global journey through photography, capturing people from every walk of life and culture. At its heart, it’s a reminder that while we may look different on the outside, we share the same human spirit within. This exhibition invites us to travel deeper — not as tourists, but as participants — immersing ourselves in the stories, traditions, and connections that make us one humanity.
          </p>
        </div>
      </section>

      {/* Voting Section */}
      <section id="voting" className="snap-start min-h-screen py-16 bg-background border-b border-border">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Voting />
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="snap-start h-screen flex items-center justify-center bg-secondary border-b border-border relative">
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage: `url(${detailsImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-2xl px-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-foreground text-center">
            Exhibition Details
          </h2>
          <div className="space-y-6 text-foreground">
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-bold mb-2">Exhibition Schedule</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-gray-300">Friday, 04.10.2025</span>
                  <span className="text-sm text-gray-300">•</span>
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">1PM - 10PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium text-gray-300">Saturday, 05.10.2025</span>
                  <span className="text-sm text-gray-300">•</span>
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">12PM - 5PM</span>
                </div>
              </div>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/XkEe3s2gxVa5G8a49"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-primary font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Pawilon Bliska 12</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Previous exhibition */}
      <section id="previous" className="snap-start h-screen flex items-center justify-center bg-background border-b border-border relative">
        <div 
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage: `url(${prevImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="w-full max-w-6xl px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground text-center">
            Previous Exhibition
          </h2>
          <div className="w-full h-[70vh] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://my.matterport.com/show/?m=qG6tZVZsqRM"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              allow="xr-spatial-tracking"
              className="rounded-lg"
              title="Previous Exhibition Virtual Tour"
            />
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="snap-start h-screen flex items-center justify-center bg-background relative">
        <div 
          className="absolute inset-0 opacity-30 z-0 bg-cover bg-right md:bg-center"
          style={{
            backgroundImage: `url(${contactImage})`,
          }}
        />
        <div className="text-center px-4 max-w-2xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Connect with us and stay updated
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-white text-lg">Founder: </span>
              <a href="https://instagram.com/the_cockneyrebel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">
                @the_cockneyrebel
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-white text-lg">Photography: </span>
              <a href="https://instagram.com/cockneytravels" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">
                @cockneytravels
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white text-lg">Email: </span>
              <a href="mailto:jakelewishurn@gmail.com" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">
                jakelewishurn@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-white text-lg">YouTube: </span>
              <a href="https://youtube.com/@soultravelers_st?si=U7EWaZs3hVjuPa2Z" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">
                @soultravelers_st
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-600">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-white text-lg">Page by: </span>
              <a href="https://instagram.com/jancurevic" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors text-lg font-medium">
                @jancurevic
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
