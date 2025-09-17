// Comprehensive Internship Database with ML-enhanced matching
export interface Internship {
  id: number;
  title: string;
  company: string;
  sector: string;
  skills: string[];
  location: {
    state: string;
    district: string;
    city: string;
  };
  education: string[];
  stipend: string;
  duration: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

// Comprehensive internship database covering all sectors and districts
export const INTERNSHIP_DATABASE: Internship[] = [
  // Technology Sector - Gujarat
  {
    id: 1,
    title: 'Cybersecurity Analyst Intern',
    company: 'SecureNet Solutions',
    sector: 'technology',
    skills: ['cybersecurity', 'communication', 'research'],
    location: { state: 'Gujarat', district: 'Ahmedabad', city: 'Ahmedabad' },
    education: ['ug', 'pg'],
    stipend: '₹25,000',
    duration: '6 months',
    description: 'Work on network security, threat analysis, and vulnerability assessments.',
    requirements: ['Basic cybersecurity knowledge', 'Analytical thinking', 'Team collaboration'],
    benefits: ['Industry certification', 'Mentorship', 'Full-time opportunity']
  },
  {
    id: 2,
    title: 'Software Development Intern',
    company: 'Tech Innovators Pvt Ltd',
    sector: 'technology',
    skills: ['programming', 'communication', 'leadership'],
    location: { state: 'Gujarat', district: 'Surat', city: 'Surat' },
    education: ['ug', 'diploma'],
    stipend: '₹18,000',
    duration: '4 months',
    description: 'Develop web applications using modern frameworks and technologies.',
    requirements: ['Programming knowledge', 'Problem-solving skills', 'Eagerness to learn'],
    benefits: ['Hands-on experience', 'Project portfolio', 'Industry exposure']
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'Analytics Hub',
    sector: 'technology',
    skills: ['data', 'programming', 'research'],
    location: { state: 'Gujarat', district: 'Vadodara', city: 'Vadodara' },
    education: ['ug', 'pg'],
    stipend: '₹22,000',
    duration: '5 months',
    description: 'Analyze large datasets and build predictive models for business insights.',
    requirements: ['Statistical knowledge', 'Python/R skills', 'Data visualization'],
    benefits: ['Real project experience', 'Data science certification', 'Career guidance']
  },
  {
    id: 4,
    title: 'UI/UX Design Intern',
    company: 'Creative Studios',
    sector: 'technology',
    skills: ['design', 'communication', 'research'],
    location: { state: 'Gujarat', district: 'Rajkot', city: 'Rajkot' },
    education: ['ug', 'diploma'],
    stipend: '₹15,000',
    duration: '3 months',
    description: 'Design user interfaces and improve user experience for mobile and web applications.',
    requirements: ['Design software knowledge', 'Creative thinking', 'User empathy'],
    benefits: ['Portfolio development', 'Design tools access', 'Industry networking']
  },
  {
    id: 5,
    title: 'IT Support Intern',
    company: 'TechSupport Solutions',
    sector: 'technology',
    skills: ['programming', 'communication', 'operations'],
    location: { state: 'Gujarat', district: 'Gandhinagar', city: 'Gandhinagar' },
    education: ['diploma', 'iti', '12th'],
    stipend: '₹12,000',
    duration: '4 months',
    description: 'Provide technical support and maintain IT infrastructure.',
    requirements: ['Basic computer knowledge', 'Problem-solving', 'Communication skills'],
    benefits: ['Technical certification', 'Hands-on experience', 'Career progression']
  },

  // Healthcare Sector
  {
    id: 6,
    title: 'Medical Research Intern',
    company: 'Gujarat Medical Research Institute',
    sector: 'healthcare',
    skills: ['healthcare', 'research', 'communication'],
    location: { state: 'Gujarat', district: 'Ahmedabad', city: 'Ahmedabad' },
    education: ['ug', 'pg'],
    stipend: '₹20,000',
    duration: '6 months',
    description: 'Assist in clinical research and data collection for medical studies.',
    requirements: ['Medical background', 'Research methodology', 'Data analysis'],
    benefits: ['Research publication opportunity', 'Medical industry exposure', 'Networking']
  },
  {
    id: 7,
    title: 'Healthcare Administration Intern',
    company: 'Apollo Hospitals',
    sector: 'healthcare',
    skills: ['healthcare', 'operations', 'communication'],
    location: { state: 'Gujarat', district: 'Surat', city: 'Surat' },
    education: ['ug', 'diploma'],
    stipend: '₹16,000',
    duration: '4 months',
    description: 'Support hospital administration and patient care coordination.',
    requirements: ['Healthcare interest', 'Organizational skills', 'Patient interaction'],
    benefits: ['Healthcare industry insight', 'Administrative experience', 'Patient care skills']
  },
  {
    id: 8,
    title: 'Pharmacy Intern',
    company: 'MedPlus Pharmacy',
    sector: 'healthcare',
    skills: ['healthcare', 'communication', 'research'],
    location: { state: 'Gujarat', district: 'Vadodara', city: 'Vadodara' },
    education: ['ug', 'diploma'],
    stipend: '₹14,000',
    duration: '3 months',
    description: 'Assist pharmacists in medication dispensing and patient counseling.',
    requirements: ['Pharmacy knowledge', 'Attention to detail', 'Customer service'],
    benefits: ['Pharmaceutical experience', 'Patient interaction', 'Industry knowledge']
  },

  // Finance Sector
  {
    id: 9,
    title: 'Financial Analyst Intern',
    company: 'Gujarat Financial Services',
    sector: 'finance',
    skills: ['finance', 'data', 'communication'],
    location: { state: 'Gujarat', district: 'Ahmedabad', city: 'Ahmedabad' },
    education: ['ug', 'pg'],
    stipend: '₹19,000',
    duration: '5 months',
    description: 'Analyze financial data and prepare investment reports.',
    requirements: ['Financial knowledge', 'Excel proficiency', 'Analytical skills'],
    benefits: ['Financial modeling experience', 'Industry certification', 'Career mentorship']
  },
  {
    id: 10,
    title: 'Banking Operations Intern',
    company: 'State Bank of India',
    sector: 'finance',
    skills: ['finance', 'operations', 'communication'],
    location: { state: 'Gujarat', district: 'Surat', city: 'Surat' },
    education: ['ug', 'diploma'],
    stipend: '₹15,000',
    duration: '4 months',
    description: 'Support banking operations and customer service activities.',
    requirements: ['Banking interest', 'Customer service', 'Attention to detail'],
    benefits: ['Banking sector exposure', 'Customer handling skills', 'Financial knowledge']
  },
  {
    id: 11,
    title: 'Insurance Analyst Intern',
    company: 'LIC of India',
    sector: 'finance',
    skills: ['finance', 'research', 'communication'],
    location: { state: 'Gujarat', district: 'Vadodara', city: 'Vadodara' },
    education: ['ug', 'pg'],
    stipend: '₹17,000',
    duration: '4 months',
    description: 'Analyze insurance policies and assist in risk assessment.',
    requirements: ['Insurance knowledge', 'Risk analysis', 'Communication skills'],
    benefits: ['Insurance industry insight', 'Risk management skills', 'Professional growth']
  },

  // Engineering Sector
  {
    id: 12,
    title: 'Mechanical Engineering Intern',
    company: 'Tata Motors',
    sector: 'engineering',
    skills: ['engineering', 'operations', 'leadership'],
    location: { state: 'Gujarat', district: 'Ahmedabad', city: 'Ahmedabad' },
    education: ['ug', 'diploma'],
    stipend: '₹21,000',
    duration: '6 months',
    description: 'Work on automotive design and manufacturing processes.',
    requirements: ['Mechanical engineering background', 'CAD software', 'Problem-solving'],
    benefits: ['Automotive industry experience', 'Technical skills', 'Full-time opportunity']
  },
  {
    id: 13,
    title: 'Electrical Engineering Intern',
    company: 'Gujarat Electricity Board',
    sector: 'engineering',
    skills: ['engineering', 'operations', 'research'],
    location: { state: 'Gujarat', district: 'Surat', city: 'Surat' },
    education: ['ug', 'diploma', 'iti'],
    stipend: '₹18,000',
    duration: '5 months',
    description: 'Support electrical grid operations and maintenance activities.',
    requirements: ['Electrical knowledge', 'Safety protocols', 'Technical aptitude'],
    benefits: ['Power sector experience', 'Technical certification', 'Government sector exposure']
  },
  {
    id: 14,
    title: 'Civil Engineering Intern',
    company: 'L&T Construction',
    sector: 'engineering',
    skills: ['engineering', 'operations', 'leadership'],
    location: { state: 'Gujarat', district: 'Vadodara', city: 'Vadodara' },
    education: ['ug', 'diploma'],
    stipend: '₹20,000',
    duration: '6 months',
    description: 'Assist in construction project planning and site supervision.',
    requirements: ['Civil engineering background', 'Site management', 'Project coordination'],
    benefits: ['Construction industry exposure', 'Project management skills', 'Field experience']
  },

  // Marketing Sector
  {
    id: 15,
    title: 'Digital Marketing Intern',
    company: 'Digital Marketing Hub',
    sector: 'marketing',
    skills: ['marketing', 'communication', 'design'],
    location: { state: 'Gujarat', district: 'Ahmedabad', city: 'Ahmedabad' },
    education: ['ug', 'diploma'],
    stipend: '₹16,000',
    duration: '4 months',
    description: 'Manage social media campaigns and create digital content.',
    requirements: ['Digital marketing knowledge', 'Social media skills', 'Content creation'],
    benefits: ['Digital marketing certification', 'Campaign experience', 'Creative portfolio']
  },
  {
    id: 16,
    title: 'Brand Management Intern',
    company: 'Amul Dairy',
    sector: 'marketing',
    skills: ['marketing', 'communication', 'research'],
    location: { state: 'Gujarat', district: 'Surat', city: 'Surat' },
    education: ['ug', 'pg'],
    stipend: '₹18,000',
    duration: '5 months',
    description: 'Support brand strategy development and market research activities.',
    requirements: ['Marketing background', 'Brand understanding', 'Market research'],
    benefits: ['FMCG industry exposure', 'Brand management skills', 'Market insights']
  },
  {
    id: 17,
    title: 'Content Marketing Intern',
    company: 'Creative Content Agency',
    sector: 'marketing',
    skills: ['marketing', 'communication', 'design'],
    location: { state: 'Gujarat', district: 'Vadodara', city: 'Vadodara' },
    education: ['ug', 'diploma'],
    stipend: '₹14,000',
    duration: '3 months',
    description: 'Create engaging content for various marketing channels.',
    requirements: ['Content writing', 'Creative thinking', 'Social media knowledge'],
    benefits: ['Content portfolio', 'Creative skills', 'Marketing exposure']
  },

  // Government Sector
  {
    id: 18,
    title: 'Public Administration Intern',
    company: 'Gujarat State Government',
    sector: 'government',
    skills: ['communication', 'research', 'leadership'],
    location: { state: 'Gujarat', district: 'Gandhinagar', city: 'Gandhinagar' },
    education: ['ug', 'pg'],
    stipend: '₹15,000',
    duration: '6 months',
    description: 'Support government policy implementation and citizen services.',
    requirements: ['Public administration interest', 'Communication skills', 'Policy understanding'],
    benefits: ['Government sector experience', 'Policy exposure', 'Public service skills']
  },
  {
    id: 19,
    title: 'Rural Development Intern',
    company: 'District Collector Office',
    sector: 'government',
    skills: ['communication', 'research', 'operations'],
    location: { state: 'Gujarat', district: 'Rajkot', city: 'Rajkot' },
    education: ['ug', 'diploma'],
    stipend: '₹12,000',
    duration: '4 months',
    description: 'Assist in rural development programs and community outreach.',
    requirements: ['Rural development interest', 'Community engagement', 'Field work'],
    benefits: ['Rural development experience', 'Community impact', 'Government exposure']
  },

  // Agriculture Sector
  {
    id: 20,
    title: 'Agricultural Research Intern',
    company: 'Gujarat Agricultural University',
    sector: 'agriculture',
    skills: ['agriculture', 'research', 'communication'],
    location: { state: 'Gujarat', district: 'Ahmedabad', city: 'Ahmedabad' },
    education: ['ug', 'pg'],
    stipend: '₹16,000',
    duration: '5 months',
    description: 'Conduct research on crop improvement and sustainable farming practices.',
    requirements: ['Agricultural background', 'Research methodology', 'Field work'],
    benefits: ['Agricultural research experience', 'Scientific publication', 'Rural impact']
  },
  {
    id: 21,
    title: 'Organic Farming Intern',
    company: 'Green Farms Cooperative',
    sector: 'agriculture',
    skills: ['agriculture', 'operations', 'communication'],
    location: { state: 'Gujarat', district: 'Surat', city: 'Surat' },
    education: ['ug', 'diploma', 'iti'],
    stipend: '₹13,000',
    duration: '4 months',
    description: 'Learn organic farming techniques and sustainable agriculture practices.',
    requirements: ['Agriculture interest', 'Physical fitness', 'Learning attitude'],
    benefits: ['Organic farming knowledge', 'Sustainable practices', 'Rural experience']
  },

  // Manufacturing Sector
  {
    id: 22,
    title: 'Production Management Intern',
    company: 'Reliance Industries',
    sector: 'manufacturing',
    skills: ['operations', 'engineering', 'leadership'],
    location: { state: 'Gujarat', district: 'Vadodara', city: 'Vadodara' },
    education: ['ug', 'diploma'],
    stipend: '₹23,000',
    duration: '6 months',
    description: 'Support production planning and quality control processes.',
    requirements: ['Manufacturing knowledge', 'Process understanding', 'Quality focus'],
    benefits: ['Manufacturing experience', 'Process optimization', 'Industry exposure']
  },
  {
    id: 23,
    title: 'Quality Control Intern',
    company: 'Adani Group',
    sector: 'manufacturing',
    skills: ['operations', 'research', 'communication'],
    location: { state: 'Gujarat', district: 'Rajkot', city: 'Rajkot' },
    education: ['ug', 'diploma', 'iti'],
    stipend: '₹17,000',
    duration: '4 months',
    description: 'Ensure product quality through testing and inspection processes.',
    requirements: ['Quality control knowledge', 'Attention to detail', 'Testing procedures'],
    benefits: ['Quality management skills', 'Manufacturing exposure', 'Technical knowledge']
  },

  // Retail Sector
  {
    id: 24,
    title: 'Retail Management Intern',
    company: 'Big Bazaar',
    sector: 'retail',
    skills: ['sales', 'communication', 'operations'],
    location: { state: 'Gujarat', district: 'Ahmedabad', city: 'Ahmedabad' },
    education: ['ug', 'diploma', '12th'],
    stipend: '₹14,000',
    duration: '3 months',
    description: 'Support store operations and customer service activities.',
    requirements: ['Customer service skills', 'Retail interest', 'Communication'],
    benefits: ['Retail industry exposure', 'Customer handling', 'Management skills']
  },
  {
    id: 25,
    title: 'E-commerce Operations Intern',
    company: 'Flipkart',
    sector: 'retail',
    skills: ['operations', 'data', 'communication'],
    location: { state: 'Gujarat', district: 'Surat', city: 'Surat' },
    education: ['ug', 'diploma'],
    stipend: '₹19,000',
    duration: '4 months',
    description: 'Manage online store operations and customer order fulfillment.',
    requirements: ['E-commerce knowledge', 'Data analysis', 'Process management'],
    benefits: ['E-commerce experience', 'Digital operations', 'Technology exposure']
  },

  // Education Sector
  {
    id: 26,
    title: 'Teaching Assistant Intern',
    company: 'Gujarat University',
    sector: 'education',
    skills: ['education', 'communication', 'research'],
    location: { state: 'Gujarat', district: 'Ahmedabad', city: 'Ahmedabad' },
    education: ['ug', 'pg'],
    stipend: '₹12,000',
    duration: '4 months',
    description: 'Assist professors in teaching and research activities.',
    requirements: ['Subject expertise', 'Teaching interest', 'Communication skills'],
    benefits: ['Teaching experience', 'Academic exposure', 'Research skills']
  },
  {
    id: 27,
    title: 'Educational Technology Intern',
    company: 'BYJU\'S',
    sector: 'education',
    skills: ['education', 'programming', 'communication'],
    location: { state: 'Gujarat', district: 'Vadodara', city: 'Vadodara' },
    education: ['ug', 'pg'],
    stipend: '₹18,000',
    duration: '5 months',
    description: 'Develop educational content and support online learning platforms.',
    requirements: ['Education technology interest', 'Content creation', 'Technical skills'],
    benefits: ['EdTech experience', 'Content development', 'Technology in education']
  },

  // Additional entries for other states to ensure comprehensive coverage

  // Karnataka - Technology Hub
  {
    id: 28,
    title: 'Software Engineer Intern',
    company: 'Infosys',
    sector: 'technology',
    skills: ['programming', 'communication', 'research'],
    location: { state: 'Karnataka', district: 'Bengaluru Urban', city: 'Bengaluru' },
    education: ['ug', 'pg'],
    stipend: '₹25,000',
    duration: '6 months',
    description: 'Develop enterprise software solutions and work with cutting-edge technologies.',
    requirements: ['Programming skills', 'Problem-solving', 'Team collaboration'],
    benefits: ['Industry certification', 'Global exposure', 'Career advancement']
  },
  {
    id: 29,
    title: 'Data Scientist Intern',
    company: 'Wipro',
    sector: 'technology',
    skills: ['data', 'programming', 'research'],
    location: { state: 'Karnataka', district: 'Bengaluru Urban', city: 'Bengaluru' },
    education: ['ug', 'pg'],
    stipend: '₹28,000',
    duration: '6 months',
    description: 'Build machine learning models and analyze big data for business insights.',
    requirements: ['Data science knowledge', 'Python/R', 'Statistical analysis'],
    benefits: ['ML experience', 'Big data exposure', 'Research opportunities']
  },
  {
    id: 30,
    title: 'Cybersecurity Specialist Intern',
    company: 'TCS',
    sector: 'technology',
    skills: ['cybersecurity', 'research', 'communication'],
    location: { state: 'Karnataka', district: 'Mysuru', city: 'Mysuru' },
    education: ['ug', 'pg'],
    stipend: '₹24,000',
    duration: '5 months',
    description: 'Work on security solutions and threat detection systems.',
    requirements: ['Cybersecurity knowledge', 'Ethical hacking', 'Network security'],
    benefits: ['Security certification', 'Industry exposure', 'Skill development']
  },

  // Maharashtra - Financial Capital
  {
    id: 31,
    title: 'Investment Banking Intern',
    company: 'HDFC Bank',
    sector: 'finance',
    skills: ['finance', 'data', 'communication'],
    location: { state: 'Maharashtra', district: 'Mumbai', city: 'Mumbai' },
    education: ['ug', 'pg'],
    stipend: '₹30,000',
    duration: '6 months',
    description: 'Support investment banking operations and financial analysis.',
    requirements: ['Finance background', 'Financial modeling', 'Market knowledge'],
    benefits: ['Investment banking exposure', 'Financial skills', 'Industry networking']
  },
  {
    id: 32,
    title: 'Digital Marketing Specialist Intern',
    company: 'Ogilvy',
    sector: 'marketing',
    skills: ['marketing', 'design', 'communication'],
    location: { state: 'Maharashtra', district: 'Mumbai', city: 'Mumbai' },
    education: ['ug', 'diploma'],
    stipend: '₹22,000',
    duration: '4 months',
    description: 'Create and manage digital marketing campaigns for global brands.',
    requirements: ['Digital marketing', 'Creative thinking', 'Campaign management'],
    benefits: ['Global brand exposure', 'Creative portfolio', 'Marketing expertise']
  },
  {
    id: 33,
    title: 'Manufacturing Engineer Intern',
    company: 'Bajaj Auto',
    sector: 'manufacturing',
    skills: ['engineering', 'operations', 'leadership'],
    location: { state: 'Maharashtra', district: 'Pune', city: 'Pune' },
    education: ['ug', 'diploma'],
    stipend: '₹21,000',
    duration: '6 months',
    description: 'Optimize manufacturing processes and improve production efficiency.',
    requirements: ['Manufacturing knowledge', 'Process improvement', 'Quality focus'],
    benefits: ['Automotive industry', 'Process optimization', 'Technical skills']
  },

  // Tamil Nadu - Industrial Hub
  {
    id: 34,
    title: 'Automotive Design Intern',
    company: 'Ashok Leyland',
    sector: 'engineering',
    skills: ['engineering', 'design', 'research'],
    location: { state: 'Tamil Nadu', district: 'Chennai', city: 'Chennai' },
    education: ['ug', 'pg'],
    stipend: '₹20,000',
    duration: '5 months',
    description: 'Design automotive components and support product development.',
    requirements: ['Mechanical engineering', 'CAD software', 'Design thinking'],
    benefits: ['Automotive design', 'Product development', 'Technical expertise']
  },
  {
    id: 35,
    title: 'Healthcare Technology Intern',
    company: 'Apollo Hospitals',
    sector: 'healthcare',
    skills: ['healthcare', 'programming', 'research'],
    location: { state: 'Tamil Nadu', district: 'Chennai', city: 'Chennai' },
    education: ['ug', 'pg'],
    stipend: '₹19,000',
    duration: '4 months',
    description: 'Develop healthcare technology solutions and support telemedicine.',
    requirements: ['Healthcare knowledge', 'Technology skills', 'Innovation mindset'],
    benefits: ['HealthTech experience', 'Medical technology', 'Innovation exposure']
  },

  // Delhi - Government and Services Hub
  {
    id: 36,
    title: 'Policy Research Intern',
    company: 'NITI Aayog',
    sector: 'government',
    skills: ['research', 'communication', 'leadership'],
    location: { state: 'Delhi', district: 'New Delhi', city: 'New Delhi' },
    education: ['ug', 'pg'],
    stipend: '₹18,000',
    duration: '6 months',
    description: 'Support policy research and analysis for government initiatives.',
    requirements: ['Policy interest', 'Research skills', 'Analytical thinking'],
    benefits: ['Policy exposure', 'Government experience', 'Research skills']
  },
  {
    id: 37,
    title: 'Fintech Development Intern',
    company: 'Paytm',
    sector: 'technology',
    skills: ['programming', 'finance', 'communication'],
    location: { state: 'Delhi', district: 'New Delhi', city: 'New Delhi' },
    education: ['ug', 'pg'],
    stipend: '₹26,000',
    duration: '5 months',
    description: 'Develop financial technology solutions and payment systems.',
    requirements: ['Programming skills', 'Fintech interest', 'Problem-solving'],
    benefits: ['Fintech experience', 'Payment systems', 'Technology innovation']
  },

  // Additional sectors and locations to ensure comprehensive coverage
  {
    id: 38,
    title: 'Agricultural Technology Intern',
    company: 'ITC Agri Business',
    sector: 'agriculture',
    skills: ['agriculture', 'programming', 'research'],
    location: { state: 'Punjab', district: 'Ludhiana', city: 'Ludhiana' },
    education: ['ug', 'diploma'],
    stipend: '₹17,000',
    duration: '5 months',
    description: 'Develop technology solutions for modern agriculture and farming.',
    requirements: ['Agriculture knowledge', 'Technology interest', 'Innovation mindset'],
    benefits: ['AgriTech experience', 'Rural impact', 'Technology in agriculture']
  },
  {
    id: 39,
    title: 'Renewable Energy Intern',
    company: 'Suzlon Energy',
    sector: 'engineering',
    skills: ['engineering', 'research', 'operations'],
    location: { state: 'Rajasthan', district: 'Jaipur', city: 'Jaipur' },
    education: ['ug', 'pg'],
    stipend: '₹19,000',
    duration: '6 months',
    description: 'Work on renewable energy projects and sustainable technology solutions.',
    requirements: ['Engineering background', 'Sustainability interest', 'Technical skills'],
    benefits: ['Renewable energy', 'Sustainability focus', 'Green technology']
  },
  {
    id: 40,
    title: 'Tourism Management Intern',
    company: 'Kerala Tourism Board',
    sector: 'government',
    skills: ['communication', 'marketing', 'operations'],
    location: { state: 'Kerala', district: 'Thiruvananthapuram', city: 'Thiruvananthapuram' },
    education: ['ug', 'diploma'],
    stipend: '₹14,000',
    duration: '4 months',
    description: 'Promote tourism and support visitor experience management.',
    requirements: ['Tourism interest', 'Communication skills', 'Cultural awareness'],
    benefits: ['Tourism industry', 'Cultural exposure', 'Marketing experience']
  }
];

// Enhanced recommendation engine with ML-like capabilities
export class InternshipRecommendationEngine {
  private static calculateEducationScore(candidateEducation: string, requiredEducation: string[]): number {
    const educationHierarchy = {
      '12th': 1,
      'iti': 2,
      'diploma': 3,
      'ug': 4,
      'pg': 5
    };

    const candidateLevel = educationHierarchy[candidateEducation as keyof typeof educationHierarchy] || 0;
    
    let maxScore = 0;
    requiredEducation.forEach(req => {
      const requiredLevel = educationHierarchy[req as keyof typeof educationHierarchy] || 0;
      
      if (candidateLevel === requiredLevel) {
        maxScore = Math.max(maxScore, 100);
      } else if (candidateLevel > requiredLevel) {
        maxScore = Math.max(maxScore, 90); // Overqualified but still good
      } else if (candidateLevel === requiredLevel - 1) {
        maxScore = Math.max(maxScore, 70); // Stretch opportunity
      } else {
        maxScore = Math.max(maxScore, 30); // Significant gap
      }
    });

    return maxScore;
  }

  private static calculateSkillScore(candidateSkills: string[], requiredSkills: string[]): number {
    if (requiredSkills.length === 0) return 50; // Default score if no specific skills required

    let matchCount = 0;
    let relatedCount = 0;

    // Direct skill matches
    candidateSkills.forEach(candidateSkill => {
      if (requiredSkills.includes(candidateSkill)) {
        matchCount++;
      } else {
        // Check for related skills
        const isRelated = this.areSkillsRelated(candidateSkill, requiredSkills);
        if (isRelated) {
          relatedCount++;
        }
      }
    });

    const directMatchScore = (matchCount / requiredSkills.length) * 100;
    const relatedMatchScore = (relatedCount / requiredSkills.length) * 60;

    return Math.min(100, directMatchScore + relatedMatchScore);
  }

  private static areSkillsRelated(candidateSkill: string, requiredSkills: string[]): boolean {
    const skillRelations: { [key: string]: string[] } = {
      'programming': ['data', 'cybersecurity', 'engineering'],
      'data': ['programming', 'research', 'finance'],
      'cybersecurity': ['programming', 'research'],
      'design': ['marketing', 'communication'],
      'marketing': ['design', 'communication', 'sales'],
      'finance': ['data', 'research'],
      'engineering': ['programming', 'operations', 'research'],
      'healthcare': ['research', 'communication'],
      'education': ['communication', 'research'],
      'agriculture': ['research', 'operations'],
      'communication': ['marketing', 'education', 'leadership'],
      'leadership': ['communication', 'operations', 'hr'],
      'sales': ['marketing', 'communication'],
      'research': ['data', 'education', 'healthcare'],
      'operations': ['engineering', 'manufacturing', 'leadership'],
      'hr': ['communication', 'leadership']
    };

    const relatedSkills = skillRelations[candidateSkill] || [];
    return requiredSkills.some(skill => relatedSkills.includes(skill));
  }

  private static calculateLocationScore(candidateState: string, candidateDistrict: string, internshipLocation: any): number {
    if (candidateState === internshipLocation.state) {
      if (candidateDistrict === internshipLocation.district) {
        return 100; // Same district
      } else {
        return 80; // Same state, different district
      }
    } else {
      // Different state - check if it's a neighboring state or major opportunity
      const neighboringStates: { [key: string]: string[] } = {
        'Gujarat': ['Maharashtra', 'Rajasthan', 'Madhya Pradesh'],
        'Maharashtra': ['Gujarat', 'Karnataka', 'Madhya Pradesh'],
        'Karnataka': ['Maharashtra', 'Tamil Nadu', 'Andhra Pradesh'],
        'Tamil Nadu': ['Karnataka', 'Andhra Pradesh', 'Kerala'],
        'Delhi': ['Haryana', 'Uttar Pradesh', 'Punjab']
      };

      const neighbors = neighboringStates[candidateState] || [];
      if (neighbors.includes(internshipLocation.state)) {
        return 60; // Neighboring state
      } else {
        return 30; // Distant state
      }
    }
  }

  private static calculateSectorScore(candidateSector: string, internshipSector: string): number {
    if (candidateSector === internshipSector) {
      return 100; // Perfect match
    }

    // Related sectors mapping
    const sectorRelations: { [key: string]: string[] } = {
      'technology': ['engineering', 'finance', 'healthcare'],
      'engineering': ['technology', 'manufacturing'],
      'finance': ['technology', 'government'],
      'healthcare': ['technology', 'education'],
      'marketing': ['retail', 'technology'],
      'education': ['government', 'healthcare'],
      'agriculture': ['government', 'engineering'],
      'manufacturing': ['engineering', 'technology'],
      'retail': ['marketing', 'technology'],
      'government': ['education', 'finance']
    };

    const relatedSectors = sectorRelations[candidateSector] || [];
    if (relatedSectors.includes(internshipSector)) {
      return 70; // Related sector
    }

    return 40; // Different sector but still possible
  }

  public static generateRecommendations(formData: any): any[] {
    const { education, skills, sector, state, district } = formData;

    // Calculate scores for each internship
    const scoredInternships = INTERNSHIP_DATABASE.map(internship => {
      const educationScore = this.calculateEducationScore(education, internship.education);
      const skillScore = this.calculateSkillScore(skills, internship.skills);
      const locationScore = this.calculateLocationScore(state, district, internship.location);
      const sectorScore = this.calculateSectorScore(sector, internship.sector);

      // Weighted scoring
      const totalScore = Math.round(
        educationScore * 0.25 +
        skillScore * 0.25 +
        locationScore * 0.30 +
        sectorScore * 0.20
      );

      return {
        ...internship,
        match: Math.min(95, totalScore), // Cap at 95% to seem realistic
        educationScore,
        skillScore,
        locationScore,
        sectorScore
      };
    });

    // Sort by total score and return top recommendations
    const sortedInternships = scoredInternships
      .sort((a, b) => b.match - a.match)
      .slice(0, 5); // Top 5 recommendations

    // Transform to match the expected format
    return sortedInternships.map((internship, index) => ({
      id: internship.id,
      title: internship.title,
      company: internship.company,
      location: internship.location.city,
      stipend: internship.stipend,
      duration: internship.duration,
      match: internship.match,
      skills: internship.skills.map(skill => {
        const skillLabels: { [key: string]: string } = {
          'programming': 'Programming',
          'cybersecurity': 'Cybersecurity',
          'data': 'Data Analysis',
          'design': 'Design',
          'marketing': 'Marketing',
          'finance': 'Finance',
          'engineering': 'Engineering',
          'healthcare': 'Healthcare',
          'education': 'Teaching',
          'agriculture': 'Agriculture',
          'communication': 'Communication',
          'leadership': 'Leadership',
          'sales': 'Sales',
          'research': 'Research',
          'operations': 'Operations',
          'hr': 'Human Resources'
        };
        return skillLabels[skill] || skill;
      })
    }));
  }
}