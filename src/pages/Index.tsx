import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Target, Users, Zap, CheckCircle } from 'lucide-react';
import { InternshipForm } from '@/components/InternshipForm';

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  if (showForm) {
    return <InternshipForm onBack={() => setShowForm(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PM Internship Finder</h1>
              <p className="text-sm text-muted-foreground">AI-Powered Career Matching</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-success/10 text-success border-success/20 hover:bg-success/20">
            ✨ AI Recommendations in 3 Seconds
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Internship Match
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get personalized internship recommendations from PM Scheme opportunities. 
            Simple form or resume upload - we'll find 3-5 perfect matches near you.
          </p>

          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-dark shadow-medium touch-target"
              onClick={() => setShowForm(true)}
            >
              <Zap className="w-5 h-5 mr-2" />
              Get My Recommendations
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How It Works
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI matches your skills, location, and interests with the best internship opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📝",
                title: "Simple Form",
                description: "Just 4 fields: education, skills, interests, and location. Or upload your resume for instant filling."
              },
              {
                icon: "🤖",
                title: "AI Matching",
                description: "Our smart engine analyzes 500+ internships to find your perfect matches in seconds."
              },
              {
                icon: "🎯",
                title: "Get Results",
                description: "Receive 3-5 personalized recommendations with distance, stipend, and company details."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "🔒 Secure & Private",
              "📱 Mobile Friendly", 
              "🌍 All Districts",
              "⚡ 3 Second Results"
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-2xl mb-2">{item.split(' ')[0]}</span>
                <span className="text-sm text-muted-foreground font-medium">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-card border-t py-8 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h4 className="text-xl font-semibold text-foreground mb-3">
            Ready to Find Your Dream Internship?
          </h4>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:bg-primary-dark shadow-medium touch-target"
            onClick={() => setShowForm(true)}
          >
            Start Your Journey
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;