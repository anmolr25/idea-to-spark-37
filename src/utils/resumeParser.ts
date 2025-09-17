// Enhanced Resume Parser with ML-like capabilities
export interface ParsedResumeData {
  education: string;
  skills: string[];
  sector: string;
  experience?: string;
  location?: string;
}

export interface SkillCategory {
  category: string;
  keywords: string[];
  relatedSectors: string[];
}

// Comprehensive skill mapping with ML-like categorization
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'programming',
    keywords: [
      'javascript', 'python', 'java', 'react', 'node.js', 'html', 'css', 'sql', 'mongodb',
      'angular', 'vue', 'php', 'c++', 'c#', 'ruby', 'go', 'kotlin', 'swift', 'typescript',
      'django', 'flask', 'spring', 'laravel', 'express', 'git', 'github', 'api', 'rest',
      'graphql', 'docker', 'kubernetes', 'aws', 'azure', 'cloud', 'devops', 'ci/cd',
      'programming', 'coding', 'development', 'software', 'web development', 'app development'
    ],
    relatedSectors: ['technology', 'engineering']
  },
  {
    category: 'cybersecurity',
    keywords: [
      'cybersecurity', 'security', 'penetration testing', 'ethical hacking', 'firewall',
      'encryption', 'vulnerability', 'malware', 'antivirus', 'network security',
      'information security', 'cyber', 'infosec', 'security analyst', 'security engineer',
      'incident response', 'risk assessment', 'compliance', 'iso 27001', 'cissp',
      'ceh', 'oscp', 'security audit', 'threat analysis', 'forensics'
    ],
    relatedSectors: ['technology', 'government']
  },
  {
    category: 'data',
    keywords: [
      'data analysis', 'data science', 'machine learning', 'artificial intelligence',
      'statistics', 'python', 'r', 'sql', 'tableau', 'power bi', 'excel', 'analytics',
      'big data', 'hadoop', 'spark', 'tensorflow', 'pytorch', 'pandas', 'numpy',
      'visualization', 'reporting', 'business intelligence', 'predictive modeling',
      'data mining', 'etl', 'database', 'data warehouse', 'statistical analysis'
    ],
    relatedSectors: ['technology', 'finance', 'healthcare']
  },
  {
    category: 'design',
    keywords: [
      'graphic design', 'ui/ux', 'photoshop', 'illustrator', 'figma', 'sketch',
      'adobe creative suite', 'web design', 'visual design', 'branding', 'logo design',
      'typography', 'color theory', 'wireframing', 'prototyping', 'user experience',
      'user interface', 'creative', 'design thinking', 'canva', 'indesign',
      'after effects', 'video editing', 'animation', '3d modeling', 'autocad'
    ],
    relatedSectors: ['marketing', 'technology', 'retail']
  },
  {
    category: 'marketing',
    keywords: [
      'digital marketing', 'social media', 'seo', 'sem', 'google ads', 'facebook ads',
      'content marketing', 'email marketing', 'marketing strategy', 'brand management',
      'market research', 'analytics', 'campaign management', 'lead generation',
      'conversion optimization', 'influencer marketing', 'affiliate marketing',
      'marketing automation', 'crm', 'salesforce', 'hubspot', 'google analytics',
      'ppc', 'content creation', 'copywriting', 'public relations'
    ],
    relatedSectors: ['marketing', 'retail', 'technology']
  },
  {
    category: 'finance',
    keywords: [
      'accounting', 'financial analysis', 'bookkeeping', 'taxation', 'audit',
      'financial modeling', 'excel', 'quickbooks', 'tally', 'investment analysis',
      'risk management', 'banking', 'insurance', 'financial planning', 'budgeting',
      'cost accounting', 'management accounting', 'financial reporting', 'compliance',
      'gst', 'income tax', 'corporate finance', 'portfolio management', 'trading'
    ],
    relatedSectors: ['finance', 'government']
  },
  {
    category: 'engineering',
    keywords: [
      'mechanical engineering', 'electrical engineering', 'civil engineering',
      'chemical engineering', 'computer engineering', 'electronics', 'automation',
      'manufacturing', 'quality control', 'project management', 'cad', 'solidworks',
      'autocad', 'matlab', 'plc programming', 'robotics', 'instrumentation',
      'maintenance', 'production', 'lean manufacturing', 'six sigma', 'iso',
      'technical drawing', 'engineering design', 'testing', 'troubleshooting'
    ],
    relatedSectors: ['engineering', 'manufacturing', 'technology']
  },
  {
    category: 'healthcare',
    keywords: [
      'nursing', 'medical', 'healthcare', 'patient care', 'clinical', 'pharmacy',
      'medical coding', 'healthcare administration', 'medical records', 'laboratory',
      'radiology', 'physiotherapy', 'occupational therapy', 'public health',
      'epidemiology', 'biomedical', 'medical research', 'clinical trials',
      'healthcare management', 'medical billing', 'telemedicine', 'health informatics'
    ],
    relatedSectors: ['healthcare']
  },
  {
    category: 'education',
    keywords: [
      'teaching', 'education', 'curriculum development', 'lesson planning',
      'classroom management', 'educational technology', 'e-learning', 'training',
      'instructional design', 'academic research', 'student counseling',
      'educational assessment', 'pedagogy', 'child development', 'special education',
      'adult education', 'vocational training', 'educational administration'
    ],
    relatedSectors: ['education', 'government']
  },
  {
    category: 'agriculture',
    keywords: [
      'agriculture', 'farming', 'crop management', 'soil science', 'irrigation',
      'agricultural technology', 'organic farming', 'sustainable agriculture',
      'livestock management', 'veterinary', 'agricultural economics', 'food science',
      'agricultural engineering', 'horticulture', 'agronomy', 'plant pathology',
      'agricultural extension', 'rural development', 'food processing'
    ],
    relatedSectors: ['agriculture']
  },
  {
    category: 'communication',
    keywords: [
      'communication', 'public speaking', 'presentation', 'writing', 'editing',
      'journalism', 'content writing', 'technical writing', 'copywriting',
      'social media management', 'public relations', 'media relations',
      'customer service', 'client relations', 'team collaboration', 'leadership',
      'project coordination', 'event management', 'interpersonal skills'
    ],
    relatedSectors: ['marketing', 'education', 'government']
  },
  {
    category: 'leadership',
    keywords: [
      'leadership', 'team management', 'project management', 'strategic planning',
      'decision making', 'problem solving', 'conflict resolution', 'mentoring',
      'coaching', 'organizational skills', 'time management', 'delegation',
      'performance management', 'change management', 'business development',
      'stakeholder management', 'cross-functional collaboration'
    ],
    relatedSectors: ['government', 'finance', 'manufacturing']
  },
  {
    category: 'sales',
    keywords: [
      'sales', 'business development', 'client acquisition', 'relationship management',
      'negotiation', 'lead generation', 'sales strategy', 'account management',
      'customer retention', 'sales forecasting', 'crm', 'sales presentation',
      'cold calling', 'market penetration', 'territory management', 'retail sales',
      'b2b sales', 'b2c sales', 'inside sales', 'field sales'
    ],
    relatedSectors: ['retail', 'marketing', 'finance']
  },
  {
    category: 'research',
    keywords: [
      'research', 'data collection', 'analysis', 'literature review', 'methodology',
      'statistical analysis', 'qualitative research', 'quantitative research',
      'survey design', 'market research', 'academic research', 'scientific research',
      'research methodology', 'data interpretation', 'report writing',
      'research proposal', 'hypothesis testing', 'experimental design'
    ],
    relatedSectors: ['education', 'healthcare', 'technology']
  },
  {
    category: 'operations',
    keywords: [
      'operations', 'supply chain', 'logistics', 'inventory management',
      'process improvement', 'quality assurance', 'production planning',
      'warehouse management', 'vendor management', 'procurement',
      'operations research', 'lean operations', 'operational efficiency',
      'workflow optimization', 'resource planning', 'capacity planning'
    ],
    relatedSectors: ['manufacturing', 'retail', 'government']
  },
  {
    category: 'hr',
    keywords: [
      'human resources', 'recruitment', 'talent acquisition', 'employee relations',
      'performance management', 'training and development', 'compensation',
      'benefits administration', 'hr policies', 'employee engagement',
      'organizational development', 'hr analytics', 'payroll', 'compliance',
      'labor relations', 'diversity and inclusion', 'succession planning'
    ],
    relatedSectors: ['government', 'finance', 'manufacturing']
  }
];

// Education level mapping
const EDUCATION_KEYWORDS = {
  'pg': ['master', 'mba', 'mtech', 'msc', 'ma', 'postgraduate', 'post graduate', 'masters'],
  'ug': ['bachelor', 'btech', 'be', 'bsc', 'ba', 'bcom', 'undergraduate', 'degree', 'graduation'],
  'diploma': ['diploma', 'polytechnic', 'advanced diploma'],
  'iti': ['iti', 'industrial training', 'vocational', 'trade certificate'],
  '12th': ['12th', 'higher secondary', 'intermediate', '+2', 'class 12', 'senior secondary']
};

// Location extraction patterns
const INDIAN_STATES = [
  'andhra pradesh', 'arunachal pradesh', 'assam', 'bihar', 'chhattisgarh',
  'delhi', 'goa', 'gujarat', 'haryana', 'himachal pradesh', 'jammu and kashmir',
  'jharkhand', 'karnataka', 'kerala', 'ladakh', 'madhya pradesh', 'maharashtra',
  'manipur', 'meghalaya', 'mizoram', 'nagaland', 'odisha', 'punjab', 'rajasthan',
  'sikkim', 'tamil nadu', 'telangana', 'tripura', 'uttar pradesh',
  'uttarakhand', 'west bengal'
];

export class EnhancedResumeParser {
  private static normalizeText(text: string): string {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private static extractSkills(text: string): string[] {
    const normalizedText = this.normalizeText(text);
    const detectedSkills: string[] = [];
    const skillCounts: { [key: string]: number } = {};

    // Check each skill category
    SKILL_CATEGORIES.forEach(category => {
      category.keywords.forEach(keyword => {
        const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        const matches = normalizedText.match(regex);
        if (matches) {
          skillCounts[category.category] = (skillCounts[category.category] || 0) + matches.length;
        }
      });
    });

    // Select top skills based on frequency and relevance
    const sortedSkills = Object.entries(skillCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 6) // Limit to top 6 skills
      .map(([skill]) => skill);

    return sortedSkills;
  }

  private static extractEducation(text: string): string {
    const normalizedText = this.normalizeText(text);
    
    // Check for education keywords in order of priority
    for (const [level, keywords] of Object.entries(EDUCATION_KEYWORDS)) {
      for (const keyword of keywords) {
        if (normalizedText.includes(keyword)) {
          return level;
        }
      }
    }

    // Default fallback based on common patterns
    if (normalizedText.includes('university') || normalizedText.includes('college')) {
      return 'ug';
    }
    
    return 'ug'; // Default assumption
  }

  private static extractSector(text: string, skills: string[]): string {
    const normalizedText = this.normalizeText(text);
    const sectorScores: { [key: string]: number } = {};

    // Score sectors based on skills
    skills.forEach(skill => {
      const category = SKILL_CATEGORIES.find(cat => cat.category === skill);
      if (category) {
        category.relatedSectors.forEach(sector => {
          sectorScores[sector] = (sectorScores[sector] || 0) + 2;
        });
      }
    });

    // Score sectors based on text content
    const sectorKeywords = {
      'technology': ['software', 'it', 'tech', 'computer', 'digital', 'programming', 'development'],
      'healthcare': ['medical', 'health', 'hospital', 'clinic', 'patient', 'nursing'],
      'finance': ['bank', 'finance', 'accounting', 'investment', 'insurance', 'audit'],
      'education': ['school', 'university', 'teaching', 'education', 'academic', 'student'],
      'engineering': ['engineering', 'mechanical', 'electrical', 'civil', 'manufacturing'],
      'marketing': ['marketing', 'advertising', 'brand', 'campaign', 'promotion', 'sales'],
      'government': ['government', 'public', 'administration', 'policy', 'civic'],
      'agriculture': ['agriculture', 'farming', 'crop', 'rural', 'agricultural'],
      'manufacturing': ['manufacturing', 'production', 'factory', 'industrial', 'assembly'],
      'retail': ['retail', 'store', 'customer', 'merchandise', 'shopping', 'commerce']
    };

    Object.entries(sectorKeywords).forEach(([sector, keywords]) => {
      keywords.forEach(keyword => {
        if (normalizedText.includes(keyword)) {
          sectorScores[sector] = (sectorScores[sector] || 0) + 1;
        }
      });
    });

    // Return the highest scoring sector
    const topSector = Object.entries(sectorScores)
      .sort(([,a], [,b]) => b - a)[0];

    return topSector ? topSector[0] : 'technology'; // Default to technology
  }

  private static extractLocation(text: string): string | undefined {
    const normalizedText = this.normalizeText(text);
    
    // Look for Indian states
    for (const state of INDIAN_STATES) {
      if (normalizedText.includes(state)) {
        return state.split(' ').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
      }
    }

    return undefined;
  }

  public static parseResumeText(text: string): ParsedResumeData {
    const skills = this.extractSkills(text);
    const education = this.extractEducation(text);
    const sector = this.extractSector(text, skills);
    const location = this.extractLocation(text);

    return {
      education,
      skills,
      sector,
      location
    };
  }

  // Simulate file parsing (in real implementation, this would use actual file parsing libraries)
  public static async parseResumeFile(file: File): Promise<ParsedResumeData> {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate realistic parsed data based on file name and random selection
    const fileName = file.name.toLowerCase();
    
    // Enhanced parsing simulation with more realistic skill detection
    let detectedSkills: string[] = [];
    let sector = 'technology';
    let education = 'ug';

    // Simulate advanced parsing based on filename patterns
    if (fileName.includes('cyber') || fileName.includes('security')) {
      detectedSkills = ['cybersecurity', 'communication', 'research'];
      sector = 'technology';
    } else if (fileName.includes('data') || fileName.includes('analyst')) {
      detectedSkills = ['data', 'programming', 'communication'];
      sector = 'technology';
    } else if (fileName.includes('marketing')) {
      detectedSkills = ['marketing', 'communication', 'design'];
      sector = 'marketing';
    } else if (fileName.includes('engineer')) {
      detectedSkills = ['engineering', 'programming', 'leadership'];
      sector = 'engineering';
    } else if (fileName.includes('finance') || fileName.includes('account')) {
      detectedSkills = ['finance', 'data', 'communication'];
      sector = 'finance';
    } else {
      // Random but realistic skill combination
      const skillOptions = [
        ['programming', 'communication', 'leadership'],
        ['cybersecurity', 'research', 'communication'],
        ['data', 'programming', 'research'],
        ['marketing', 'design', 'communication'],
        ['finance', 'data', 'leadership'],
        ['engineering', 'operations', 'leadership'],
        ['healthcare', 'communication', 'research'],
        ['education', 'communication', 'leadership']
      ];
      
      const randomIndex = Math.floor(Math.random() * skillOptions.length);
      detectedSkills = skillOptions[randomIndex];
      
      // Set sector based on primary skill
      const primarySkill = detectedSkills[0];
      const skillCategory = SKILL_CATEGORIES.find(cat => cat.category === primarySkill);
      if (skillCategory && skillCategory.relatedSectors.length > 0) {
        sector = skillCategory.relatedSectors[0];
      }
    }

    // Simulate education detection
    if (fileName.includes('mba') || fileName.includes('master')) {
      education = 'pg';
    } else if (fileName.includes('diploma')) {
      education = 'diploma';
    } else if (fileName.includes('iti')) {
      education = 'iti';
    }

    return {
      education,
      skills: detectedSkills,
      sector,
      location: 'Gujarat' // Default location for demo
    };
  }
}