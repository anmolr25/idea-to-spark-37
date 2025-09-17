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
    { id: 'education', label: 'Teaching', icon: '📚' }
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
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
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
    
    // Simulate resume parsing
    setTimeout(() => {
      setFormData({
        education: 'UG',
        skills: ['programming', 'communication', 'data'],
        sector: 'technology',
        state: 'Karnataka',
        district: 'Bengaluru Urban'
      });
      setStep(4);
      setIsUploading(false);
      toast({
        title: "Resume processed successfully!",
        description: "We've extracted your information and filled the form.",
      });
    }, 2000);
  };

  const handleSubmit = () => {
    // Simulate form submission and navigate to results
    navigate('/recommendations', { 
      state: { 
        formData,
        recommendations: [
          {
            id: 1,
            title: 'Software Development Intern',
            company: 'Tech Solutions Pvt Ltd',
            location: 'Bengaluru',
            distance: '5 km',
            stipend: '₹15,000',
            match: 95,
            skills: ['Programming', 'Communication'],
            duration: '6 months'
          },
          {
            id: 2,
            title: 'Data Analyst Intern',
            company: 'Analytics Corp',
            location: 'Bengaluru',
            distance: '8 km',
            stipend: '₹12,000',
            match: 88,
            skills: ['Data Analysis', 'Communication'],
            duration: '4 months'
          },
          {
            id: 3,
            title: 'Product Manager Trainee',
            company: 'StartupXY',
            location: 'Bengaluru',
            distance: '12 km',
            stipend: '₹18,000',
            match: 82,
            skills: ['Leadership', 'Communication'],
            duration: '6 months'
          }
        ]
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
                      <SelectItem value="Bengaluru Urban">Bengaluru Urban</SelectItem>
                      <SelectItem value="Bengaluru Rural">Bengaluru Rural</SelectItem>
                      <SelectItem value="Mysuru">Mysuru</SelectItem>
                      <SelectItem value="Mangaluru">Mangaluru</SelectItem>
                      <SelectItem value="Hubli">Hubli</SelectItem>
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