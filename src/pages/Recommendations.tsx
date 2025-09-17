import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, DollarSign, Clock, Star, ExternalLink, RefreshCw } from 'lucide-react';

interface Recommendation {
  id: number;
  title: string;
  company: string;
  location: string;
  distance: string;
  stipend: string;
  match: number;
  skills: string[];
  duration: string;
}

const Recommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedInternship, setSelectedInternship] = useState<number | null>(null);
  
  const { formData, recommendations } = location.state || {};

  if (!recommendations) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">No Recommendations Found</h2>
            <p className="text-muted-foreground mb-4">Please complete the form first to get your personalized recommendations.</p>
            <Button onClick={() => navigate('/')}>Go Back Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleApply = (internshipId: number) => {
    setSelectedInternship(internshipId);
    // Simulate application process
    setTimeout(() => {
      setSelectedInternship(null);
      // Here you would typically open the application form or redirect to the company's website
      alert('Application process would start here!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <header className="bg-card border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="touch-target">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-foreground">Your Recommendations</h1>
              <p className="text-sm text-muted-foreground">
                Found {recommendations.length} perfect matches for you
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Success Message */}
        <Card className="mb-8 border-success/20 bg-success/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-success-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Great News!</h3>
                <p className="text-sm text-muted-foreground">
                  We found {recommendations.length} high-quality internships that match your profile
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 text-sm">
              <Badge variant="secondary">📍 {formData?.state}</Badge>
              <Badge variant="secondary">🎓 {formData?.education?.toUpperCase()}</Badge>
              <Badge variant="secondary">💼 {formData?.skills?.length} Skills</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations List */}
        <div className="space-y-6">
          {recommendations.map((rec: Recommendation, index: number) => (
            <Card 
              key={rec.id} 
              className={`shadow-medium hover:shadow-strong transition-all duration-300 ${
                index === 0 ? 'border-primary/30 bg-primary/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                      {index === 0 && (
                        <Badge className="bg-gradient-primary text-primary-foreground">
                          ⭐ Best Match
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground font-medium">{rec.company}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{rec.match}%</div>
                    <div className="text-xs text-muted-foreground">Match</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{rec.location}</div>
                      <div className="text-muted-foreground">{rec.distance}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{rec.stipend}</div>
                      <div className="text-muted-foreground">per month</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{rec.duration}</div>
                      <div className="text-muted-foreground">duration</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Match Score</div>
                      <div className="text-muted-foreground">{rec.match}%</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {rec.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => handleApply(rec.id)}
                    disabled={selectedInternship === rec.id}
                    className="flex-1 bg-gradient-primary hover:bg-primary-dark touch-target"
                  >
                    {selectedInternship === rec.id ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Applying...
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply Now
                      </>
                    )}
                  </Button>
                  
                  <Button variant="outline" className="touch-target">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 text-center space-y-4">
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Need Different Options?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Modify your preferences to get new recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/')}
                  className="touch-target"
                >
                  Update Preferences
                </Button>
                <Button 
                  variant="outline" 
                  className="touch-target"
                >
                  Save These Results
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-muted-foreground">
            💡 Tip: Click on multiple internships to compare them side by side
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;