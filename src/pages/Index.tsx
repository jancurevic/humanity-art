import heroImage from "../assets/hero.JPG";
import ethiopiaTitle from "../assets/ethiopia-title.svg";
import humanityTitle from "../assets/humanity.svg";

const Index = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Hero Section */}
      <section 
        className="snap-start h-screen flex items-center justify-center bg-background border-b border-border relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* <div className="absolute inset-0 bg-background/10" /> */}
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
      <section className="snap-start h-screen flex items-center justify-center bg-secondary border-b border-border">
        <div className="max-w-2xl px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            About
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Experience the timeless beauty of analog photography. 
            Each frame captured on film tells a unique story, 
            preserving moments in their purest form.
          </p>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="snap-start h-screen flex items-center justify-center bg-background border-b border-border">
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Coming soon: A curated collection of analog photographs
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="snap-start h-screen flex items-center justify-center bg-secondary border-b border-border">
        <div className="max-w-2xl px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-foreground text-center">
            Exhibition Details
          </h2>
          <div className="space-y-6 text-foreground">
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-bold mb-2">Date</h3>
              <p className="text-muted-foreground">04.10.2025 - 05.10.2025</p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-muted-foreground">Pawilon Bliska 12</p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-muted-foreground">1PM - 10PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="snap-start h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            For inquiries and more information
          </p>
          <a 
            href="mailto:info@analogexhibition.com" 
            className="text-xl text-foreground underline hover:text-muted-foreground transition-colors"
          >
            info@analogexhibition.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
