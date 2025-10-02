import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import meeting1 from "@/assets/meeting-1.jpg";
import meeting2 from "@/assets/meeting-2.jpg";
import meeting3 from "@/assets/meeting-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="1or0 Logo" className="h-12 w-12" />
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">1or0</h1>
          </div>
          <nav className="flex gap-3">
            <Button variant="outline" size="lg" asChild>
              <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Hack Club
              </a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Dashboard
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <img src={logo} alt="1or0 Logo" className="h-32 w-32 mx-auto mb-8" />
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Welcome to 1or0
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A student-run coding club where we build cool projects, learn together, and have fun with technology!
        </p>
        <Button size="lg" className="text-lg px-8 py-6" asChild>
          <a href="#signup">Join Our Club</a>
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="bg-card border-y border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-8">About 1or0</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
              1or0 (pronounced "one or zero") is our school's Hack Club chapter. We're a community of students who love coding, building projects, and learning new technologies together.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Whether you're a complete beginner or an experienced coder, everyone is welcome! We work on individual and group projects, participate in hackathons, and support each other's learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Info */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-2xl md:text-3xl font-bold mb-4">Where We Meet</h4>
              <p className="text-xl text-muted-foreground">
                Check with club leaders for our current meeting location and schedule!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h4 className="text-2xl md:text-3xl font-bold mb-4">Club Leaders</h4>
              <p className="text-xl text-muted-foreground mb-2">
                <strong>Jagrit</strong>
              </p>
              <p className="text-xl text-muted-foreground">
                <strong>Advithya</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Photos Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">Club Meetings</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden border-4 border-border">
              <img src={meeting1} alt="Club meeting" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden border-4 border-border">
              <img src={meeting2} alt="Club meeting" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden border-4 border-border">
              <img src={meeting3} alt="Club meeting" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up CTA */}
      <section id="signup" className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join?</h3>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Sign up now and become part of our awesome coding community!
        </p>
        <Button size="lg" variant="default" className="text-lg px-8 py-6" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Sign Up Form
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            1or0 is a Hack Club chapter
          </p>
          <a 
            href="https://hackclub.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline text-lg"
          >
            Learn more about Hack Club →
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
