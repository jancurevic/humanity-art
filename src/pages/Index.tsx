const Index = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Hero Section */}
      <section className="snap-start h-screen flex items-center justify-center bg-background border-b border-border">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
            Analog
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            A Photography Exhibition
          </p>
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
              <p className="text-muted-foreground">TBA</p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-muted-foreground">TBA</p>
            </div>
            <div className="border-l-2 border-foreground pl-6">
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-muted-foreground">TBA</p>
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
