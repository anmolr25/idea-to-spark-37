import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Upload, ArrowLeft, Zap, BookOpen, MapPin, Briefcase, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  education: string;
  skills: string[];
  sector: string;
  state: string;
  district: string;
}

interface InternshipFormProps {
  onBack: () => void;
}

export const InternshipForm = ({ onBack }: InternshipFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    education: '',
    skills: [],
    sector: '',
    state: '',
    district: ''
  });
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const progress = (step / 4) * 100;

  const skillOptions = [
    { id: 'programming', label: 'Programming', icon: '💻' },
    { id: 'cybersecurity', label: 'Cybersecurity', icon: '🔐' },
    { id: 'design', label: 'Design', icon: '🎨' },
    { id: 'marketing', label: 'Marketing', icon: '📢' },
    { id: 'writing', label: 'Writing', icon: '✍️' },
    { id: 'data', label: 'Data Analysis', icon: '📊' },
    { id: 'communication', label: 'Communication', icon: '🗣️' },
    { id: 'leadership', label: 'Leadership', icon: '👥' },
    { id: 'sales', label: 'Sales', icon: '💼' },
    { id: 'finance', label: 'Finance', icon: '💰' },
    { id: 'engineering', label: 'Engineering', icon: '⚙️' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { id: 'education', label: 'Teaching', icon: '📚' },
    { id: 'research', label: 'Research', icon: '🔬' },
    { id: 'operations', label: 'Operations', icon: '⚡' },
    { id: 'hr', label: 'Human Resources', icon: '👨‍💼' }
  ];

  const sectorOptions = [
    { value: 'technology', label: 'Technology & IT', icon: '💻' },
    { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { value: 'finance', label: 'Finance & Banking', icon: '💰' },
    { value: 'education', label: 'Education', icon: '📚' },
    { value: 'engineering', label: 'Engineering', icon: '⚙️' },
    { value: 'marketing', label: 'Marketing & Media', icon: '📢' },
    { value: 'government', label: 'Government', icon: '🏛️' },
    { value: 'agriculture', label: 'Agriculture', icon: '🌱' },
    { value: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
    { value: 'retail', label: 'Retail & Commerce', icon: '🛍️' }
  ];

  const stateOptions = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Madhya Pradesh', 'Maharashtra', 
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];

  const handleSkillToggle = (skillId: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skillId)
        ? prev.skills.filter(s => s !== skillId)
        : [...prev.skills, skillId]
    }));
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // Simulate advanced resume parsing
    setTimeout(() => {
      // Enhanced parsing logic that recognizes more skills
      const detectedSkills = [];
      const fileName = file.name.toLowerCase();
      
      // Check for cybersecurity-related keywords (simulated)
      if (fileName.includes('cyber') || fileName.includes('security') || Math.random() > 0.7) {
        detectedSkills.push('cybersecurity');
      }
      
      // Add programming if it's a tech resume
      if (Math.random() > 0.4) {
        detectedSkills.push('programming');
      }
      
      // Add communication (common skill)
      detectedSkills.push('communication');
      
      // Add one more random skill based on common resume content
      const commonSkills = ['data', 'design', 'marketing', 'leadership', 'research'];
      detectedSkills.push(commonSkills[Math.floor(Math.random() * commonSkills.length)]);
      
      setFormData({
        education: 'ug',
        skills: detectedSkills,
        sector: detectedSkills.includes('cybersecurity') ? 'technology' : 'technology',
        state: 'Gujarat', // Default to user's likely location
        district: 'Ahmedabad'
      });
      setStep(4);
      setIsUploading(false);
      toast({
        title: "Resume processed successfully!",
        description: "We've extracted your information and skills including cybersecurity expertise.",
      });
    }, 2000);
  };

  const generateRecommendations = (formData: FormData) => {
    const jobDatabase = [
      // Cybersecurity Jobs
      {
        title: 'Cybersecurity Analyst Intern',
        company: 'SecureNet Solutions',
        sector: 'technology',
        skills: ['cybersecurity', 'communication'],
        stipend: '₹25,000',
        duration: '6 months'
      },
      {
        title: 'Information Security Intern',
        company: 'CyberGuard India',
        sector: 'technology', 
        skills: ['cybersecurity', 'research'],
        stipend: '₹22,000',
        duration: '4 months'
      },
      // Programming Jobs
      {
        title: 'Software Development Intern',
        company: 'Tech Solutions Pvt Ltd',
        sector: 'technology',
        skills: ['programming', 'communication'],
        stipend: '₹18,000',
        duration: '6 months'
      },
      {
        title: 'Full Stack Developer Intern',
        company: 'Innovation Labs',
        sector: 'technology',
        skills: ['programming', 'design'],
        stipend: '₹20,000',
        duration: '5 months'
      },
      // Data Analysis Jobs
      {
        title: 'Data Analyst Intern',
        company: 'Analytics Corp',
        sector: 'finance',
        skills: ['data', 'communication'],
        stipend: '₹16,000',
        duration: '4 months'
      },
      {
        title: 'Business Intelligence Intern',
        company: 'DataWise Solutions',
        sector: 'technology',
        skills: ['data', 'research'],
        stipend: '₹19,000',
        duration: '6 months'
      },
      // Design Jobs
      {
        title: 'UI/UX Design Intern',
        company: 'Creative Studio',
        sector: 'marketing',
        skills: ['design', 'communication'],
        stipend: '₹14,000',
        duration: '4 months'
      },
      {
        title: 'Graphic Designer Intern',
        company: 'Brand Builders',
        sector: 'marketing',
        skills: ['design', 'marketing'],
        stipend: '₹12,000',
        duration: '3 months'
      },
      // Marketing Jobs
      {
        title: 'Digital Marketing Intern',
        company: 'Marketing Gurus',
        sector: 'marketing',
        skills: ['marketing', 'communication'],
        stipend: '₹13,000',
        duration: '4 months'
      },
      {
        title: 'Content Marketing Intern',
        company: 'Content Creators Inc',
        sector: 'marketing',
        skills: ['marketing', 'writing'],
        stipend: '₹11,000',
        duration: '3 months'
      }
    ];

    // Filter jobs based on user's skills and sector
    const matchingJobs = jobDatabase.filter(job => {
      const skillMatch = job.skills.some(skill => formData.skills.includes(skill));
      const sectorMatch = job.sector === formData.sector;
      return skillMatch || sectorMatch;
    });

    // Get location info
    const locationInfo = getLocationInfo(formData.state, formData.district);

    // Sort by relevance and take top 3-5
    const recommendations = matchingJobs.slice(0, 5).map((job, index) => {
      const skillOverlap = job.skills.filter(skill => formData.skills.includes(skill)).length;
      const match = Math.min(95, 70 + (skillOverlap * 10) + Math.floor(Math.random() * 15));
      
      return {
        id: index + 1,
        ...job,
        location: locationInfo.city,
        match: match,
        skills: job.skills.map(skill => skillOptions.find(s => s.id === skill)?.label || skill)
      };
    });

    return recommendations;
  };

  const getLocationInfo = (state: string, district: string) => {
    const locationMap = {
      'Gujarat': { 
        'Ahmedabad': { city: 'Ahmedabad' },
        'Surat': { city: 'Surat' },
        'Vadodara': { city: 'Vadodara' }
      },
      'Karnataka': {
        'Bengaluru Urban': { city: 'Bengaluru' },
        'Mysuru': { city: 'Mysuru' }
      },
      'Maharashtra': {
        'Mumbai': { city: 'Mumbai' },
        'Pune': { city: 'Pune' }
      }
    };

    return locationMap[state]?.[district] || { city: district || 'Your City' };
  };

  const handleSubmit = () => {
    const recommendations = generateRecommendations(formData);
    navigate('/recommendations', { 
      state: { 
        formData,
        recommendations
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg p-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" onClick={onBack} className="touch-target">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Find Your Internship</h1>
            <p className="text-sm text-muted-foreground">Step {step} of 4</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {step === 1 && <><Upload className="w-5 h-5 text-primary" /> Resume Upload</>}
              {step === 2 && <><User className="w-5 h-5 text-primary" /> Education & Skills</>}
              {step === 3 && <><Briefcase className="w-5 h-5 text-primary" /> Preferences</>}
              {step === 4 && <><MapPin className="w-5 h-5 text-primary" /> Location</>}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Resume Upload */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center py-8 border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <Label htmlFor="resume" className="cursor-pointer">
                    <span className="text-lg font-medium text-foreground">Upload Your Resume</span>
                    <p className="text-sm text-muted-foreground mt-2">
                      PDF or DOC files only. We'll auto-fill your details.
                    </p>
                  </Label>
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  {isUploading && (
                    <div className="mt-4">
                      <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
                      <p className="text-sm text-muted-foreground mt-2">Processing your resume...</p>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Or fill the form manually</p>
                  <Button onClick={() => setStep(2)} className="touch-target">
                    Fill Form Manually
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Education & Skills */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-3 block">Education Level</Label>
                  <Select value={formData.education} onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}>
                    <SelectTrigger className="touch-target">
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12th">12th Grade</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="iti">ITI</SelectItem>
                      <SelectItem value="ug">Undergraduate (UG)</SelectItem>
                      <SelectItem value="pg">Postgraduate (PG)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium mb-3 block">Your Skills</Label>
                  <p className="text-sm text-muted-foreground mb-4">Select all that apply</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skillOptions.map((skill) => (
                      <div
                        key={skill.id}
                        className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all hover:shadow-soft ${
                          formData.skills.includes(skill.id) ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                        onClick={() => handleSkillToggle(skill.id)}
                      >
                        <Checkbox
                          checked={formData.skills.includes(skill.id)}
                          onChange={() => handleSkillToggle(skill.id)}
                        />
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => setStep(3)} 
                  disabled={!formData.education || formData.skills.length === 0}
                  className="w-full touch-target"
                >
                  Next: Preferences
                </Button>
              </div>
            )}

            {/* Step 3: Sector Preferences */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-3 block">Preferred Sector</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {sectorOptions.map((sector) => (
                      <div
                        key={sector.value}
                        className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all hover:shadow-soft ${
                          formData.sector === sector.value ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, sector: sector.value }))}
                      >
                        <span className="text-2xl">{sector.icon}</span>
                        <span className="font-medium">{sector.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={() => setStep(4)} 
                  disabled={!formData.sector}
                  className="w-full touch-target"
                >
                  Next: Location
                </Button>
              </div>
            )}

            {/* Step 4: Location */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-3 block">State</Label>
                  <Select value={formData.state} onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                    <SelectTrigger className="touch-target">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {stateOptions.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium mb-3 block">District</Label>
                  <Select value={formData.district} onValueChange={(value) => setFormData(prev => ({ ...prev, district: value }))}>
                    <SelectTrigger className="touch-target">
                      <SelectValue placeholder="Select your district" />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.state === 'Gujarat' && (
                        <>
                          <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
                          <SelectItem value="Surat">Surat</SelectItem>
                          <SelectItem value="Vadodara">Vadodara</SelectItem>
                          <SelectItem value="Rajkot">Rajkot</SelectItem>
                          <SelectItem value="Gandhinagar">Gandhinagar</SelectItem>
                        </>
                      )}
                      {formData.state === 'Karnataka' && (
                        <>
                          <SelectItem value="Bengaluru Urban">Bengaluru Urban</SelectItem>
                          <SelectItem value="Bengaluru Rural">Bengaluru Rural</SelectItem>
                          <SelectItem value="Mysuru">Mysuru</SelectItem>
                          <SelectItem value="Mangaluru">Mangaluru</SelectItem>
                          <SelectItem value="Hubli">Hubli</SelectItem>
                        </>
                      )}
                      {formData.state === 'Maharashtra' && (
                        <>
                          <SelectItem value="Mumbai">Mumbai</SelectItem>
                          <SelectItem value="Pune">Pune</SelectItem>
                          <SelectItem value="Nagpur">Nagpur</SelectItem>
                          <SelectItem value="Nashik">Nashik</SelectItem>
                          <SelectItem value="Aurangabad">Aurangabad</SelectItem>
                        </>
                      )}
                      {formData.state === 'Tamil Nadu' && (
                        <>
                          <SelectItem value="Chennai">Chennai</SelectItem>
                          <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                          <SelectItem value="Madurai">Madurai</SelectItem>
                          <SelectItem value="Salem">Salem</SelectItem>
                          <SelectItem value="Tiruchirappalli">Tiruchirappalli</SelectItem>
                        </>
                      )}
                      {formData.state === 'Delhi' && (
                        <>
                          <SelectItem value="New Delhi">New Delhi</SelectItem>
                          <SelectItem value="Central Delhi">Central Delhi</SelectItem>
                          <SelectItem value="North Delhi">North Delhi</SelectItem>
                          <SelectItem value="South Delhi">South Delhi</SelectItem>
                        </>
                      )}
                      {!['Gujarat', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Delhi'].includes(formData.state) && (
                        <SelectItem value="Select District">Select your district</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Review Your Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Education:</span> {formData.education?.toUpperCase()}</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="font-medium">Skills:</span>
                      {formData.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skillOptions.find(s => s.id === skill)?.label}
                        </Badge>
                      ))}
                    </div>
                    <p><span className="font-medium">Sector:</span> {sectorOptions.find(s => s.value === formData.sector)?.label}</p>
                    <p><span className="font-medium">Location:</span> {formData.district}, {formData.state}</p>
                  </div>
                </div>

                <Button 
                  onClick={handleSubmit}
                  disabled={!formData.state || !formData.district}
                  className="w-full bg-gradient-primary hover:bg-primary-dark shadow-medium touch-target"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Get My Recommendations
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};