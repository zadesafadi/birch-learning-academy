export const siteConfig = {
  name: "Birch Learning Academy",
  tagline: "Where Curiosity Blossoms",
  description:
    "A boutique early learning experience for children 6 weeks to Pre-K in Johnson County, Kansas. Play-based, nature-inspired education in the Leawood and Overland Park area.",
  url: "https://birchlearningacademy.com",
  phone: "(913) 555-0142",
  email: "hello@birchlearningacademy.com",
  address: {
    street: "8420 Birch Tree Lane",
    city: "Leawood",
    state: "KS",
    zip: "66206",
    full: "8420 Birch Tree Lane, Leawood, KS 66206",
  },
  hours: "Monday–Friday, 7:00 AM – 6:00 PM",
  social: {
    facebook: "https://facebook.com/birchlearningacademy",
    instagram: "https://instagram.com/birchlearningacademy",
    google: "https://g.page/birchlearningacademy",
  },
  announcement: "Now Enrolling for Fall 2026 — Limited Spots Available!",
};

export const trustBadges = [
  "Licensed by KDHE",
  "Degreed Lead Teachers",
  "Organic Meals Daily",
  "Low Student-Teacher Ratios",
  "Secure Biometric Entry",
  "NAEYC Standards-Aligned",
];

export const programs = [
  {
    slug: "infants",
    name: "Infants",
    ageRange: "6 weeks – 12 months",
    icon: "baby",
    shortDescription:
      "A warm, responsive environment where your baby's earliest discoveries are nurtured with love and intention.",
    description:
      "Our infant program provides a secure, sensory-rich environment where each baby follows their own rhythm. Degreed caregivers build deep bonds through responsive care, tummy time adventures, language-rich interactions, and gentle outdoor experiences.",
    milestones: [
      "Secure attachment and trust",
      "Sensory exploration",
      "Early language exposure",
      "Gross motor development",
      "Self-regulation foundations",
    ],
    schedule: [
      { time: "7:00 AM", activity: "Warm greetings & individual care routines" },
      { time: "8:30 AM", activity: "Sensory exploration & floor play" },
      { time: "10:00 AM", activity: "Outdoor stroller walk or garden time" },
      { time: "11:30 AM", activity: "Lunch & nap preparation" },
      { time: "2:00 PM", activity: "Afternoon enrichment & music" },
      { time: "4:00 PM", activity: "Quiet play & parent updates via app" },
    ],
    teacher: {
      name: "Ms. Elena Rodriguez",
      title: "Lead Infant Teacher",
      credentials: "M.Ed. Early Childhood, 12 years experience",
      bio: "Elena believes the first year of life is a masterpiece in progress. She creates calm, connected environments where every coo and crawl is celebrated.",
    },
    tuition: "$1,850/month",
  },
  {
    slug: "toddlers",
    name: "Toddlers",
    ageRange: "12 – 24 months",
    icon: "footprints",
    shortDescription:
      "Busy explorers build independence, language, and social skills through purposeful play and gentle guidance.",
    description:
      "Toddlers are natural scientists. Our program channels their boundless energy into meaningful learning through Montessori-inspired practical life activities, language immersion, outdoor exploration, and social-emotional coaching.",
    milestones: [
      "Language explosion",
      "Independence & self-help skills",
      "Social awareness",
      "Fine & gross motor mastery",
      "Emotional vocabulary",
    ],
    schedule: [
      { time: "7:30 AM", activity: "Morning circle & free exploration" },
      { time: "9:00 AM", activity: "Outdoor classroom & nature walk" },
      { time: "10:30 AM", activity: "Spanish immersion & music" },
      { time: "12:00 PM", activity: "Family-style lunch" },
      { time: "1:30 PM", activity: "Rest time & quiet activities" },
      { time: "3:30 PM", activity: "Art studio & yoga" },
    ],
    teacher: {
      name: "Mr. James Whitfield",
      title: "Lead Toddler Teacher",
      credentials: "B.S. Child Development, AMS Montessori Associate",
      bio: "James brings patience, humor, and deep respect for toddler autonomy. His classroom is a place where 'I do it myself!' is always celebrated.",
    },
    tuition: "$1,750/month",
  },
  {
    slug: "early-preschool",
    name: "Early Preschool",
    ageRange: "2 – 3 years",
    icon: "sprout",
    shortDescription:
      "Curious minds dive deeper into language, creativity, and collaboration in a Reggio-inspired setting.",
    description:
      "Early preschoolers are ready for more. Project-based learning emerges from their interests, documented through photos and portfolios. Daily Spanish, music, yoga, and garden time are all included.",
    milestones: [
      "Collaborative play",
      "Pre-literacy skills",
      "Problem-solving",
      "Self-expression",
      "Nature connection",
    ],
    schedule: [
      { time: "8:00 AM", activity: "Project work & choice time" },
      { time: "9:30 AM", activity: "Garden-to-table & outdoor learning" },
      { time: "11:00 AM", activity: "Music & movement class" },
      { time: "12:30 PM", activity: "Chef-prepared lunch" },
      { time: "2:00 PM", activity: "Rest & quiet reading" },
      { time: "3:30 PM", activity: "Art studio & mindfulness" },
    ],
    teacher: {
      name: "Ms. Priya Sharma",
      title: "Lead Early Preschool Teacher",
      credentials: "M.A. Early Childhood Education, Reggio Emilia trained",
      bio: "Priya sees every question as an invitation to explore. Her documentation walls tell the story of each child's unique learning journey.",
    },
    tuition: "$1,650/month",
  },
  {
    slug: "preschool",
    name: "Preschool",
    ageRange: "3 – 4 years",
    icon: "palette",
    shortDescription:
      "STEM, literacy, and creative expression come together in a play-based curriculum that prepares confident learners.",
    description:
      "Preschoolers engage in hands-on STEM challenges, emergent literacy, collaborative projects, and daily enrichment—all woven into a child-led framework that honors their natural curiosity.",
    milestones: [
      "Letter & number awareness",
      "Scientific inquiry",
      "Conflict resolution",
      "Creative storytelling",
      "Kindergarten readiness foundations",
    ],
    schedule: [
      { time: "8:00 AM", activity: "Morning meeting & literacy centers" },
      { time: "9:30 AM", activity: "STEM lab & outdoor classroom" },
      { time: "11:00 AM", activity: "Spanish & cultural exploration" },
      { time: "12:30 PM", activity: "Organic lunch & garden harvest" },
      { time: "2:00 PM", activity: "Quiet time & individual reading" },
      { time: "3:30 PM", activity: "Art studio & gross motor play" },
    ],
    teacher: {
      name: "Ms. Rachel Kim",
      title: "Lead Preschool Teacher",
      credentials: "B.A. Elementary Education, STEM certified",
      bio: "Rachel transforms everyday moments into 'aha!' discoveries. Her classroom buzzes with the energy of young inventors and storytellers.",
    },
    tuition: "$1,550/month",
  },
  {
    slug: "pre-k",
    name: "Pre-K",
    ageRange: "4 – 5 years",
    icon: "graduation-cap",
    shortDescription:
      "School-ready skills built through project-based learning, leadership opportunities, and joyful discovery.",
    description:
      "Our Pre-K program ensures children enter kindergarten with confidence, curiosity, and a love of learning. Advanced literacy, math concepts, social leadership, and nature-based projects prepare them for their next chapter.",
    milestones: [
      "Reading readiness",
      "Mathematical thinking",
      "Leadership & empathy",
      "Executive function",
      "Kindergarten transition",
    ],
    schedule: [
      { time: "8:00 AM", activity: "Literacy workshop & journaling" },
      { time: "9:30 AM", activity: "Project-based learning & STEM" },
      { time: "11:00 AM", activity: "Community helpers & field exploration" },
      { time: "12:30 PM", activity: "Farm-to-table lunch" },
      { time: "2:00 PM", activity: "Kindergarten prep & handwriting" },
      { time: "3:30 PM", activity: "Leadership roles & enrichment" },
    ],
    teacher: {
      name: "Ms. Angela Torres",
      title: "Lead Pre-K Teacher",
      credentials: "M.Ed. Curriculum & Instruction, 15 years experience",
      bio: "Angela partners with local kindergarten teachers to ensure seamless transitions. Her graduates arrive at elementary school ready to lead.",
    },
    tuition: "$1,450/month",
  },
  {
    slug: "summer",
    name: "Summer Program",
    ageRange: "2 – 5 years",
    icon: "sun",
    shortDescription:
      "Adventure-filled summer camps with water play, nature exploration, and creative workshops.",
    description:
      "Our summer program keeps the learning alive with themed weeks, splash days, nature hikes, visiting artists, and garden harvests. Flexible weekly enrollment for enrolled and community families.",
    milestones: [
      "Outdoor adventure",
      "Creative workshops",
      "Friendship building",
      "Nature immersion",
      "Flexible enrollment",
    ],
    schedule: [
      { time: "8:00 AM", activity: "Camp kickoff & team building" },
      { time: "9:30 AM", activity: "Nature hike or water play" },
      { time: "11:00 AM", activity: "Themed workshop (art, science, cooking)" },
      { time: "12:30 PM", activity: "Picnic lunch outdoors" },
      { time: "2:00 PM", activity: "Rest & quiet activities" },
      { time: "3:30 PM", activity: "Camp games & celebration" },
    ],
    teacher: {
      name: "Summer Camp Team",
      title: "Rotating Lead Teachers",
      credentials: "All degreed, CPR certified",
      bio: "Our summer team brings fresh energy and specialized expertise each week, from local artists to naturalists.",
    },
    tuition: "$350/week",
  },
];

export const differentiators = [
  {
    icon: "leaf",
    title: "Nature-Inspired Learning",
    description:
      "Large outdoor classroom, garden beds, mud kitchen, and daily nature immersion.",
  },
  {
    icon: "palette",
    title: "Enrichment Included",
    description:
      "Spanish, music & movement, yoga, and art studio—all included in tuition.",
  },
  {
    icon: "users",
    title: "Exceptional Teachers",
    description:
      "Degreed lead teachers with ongoing professional development and low turnover.",
  },
  {
    icon: "utensils",
    title: "Farm-to-Table Meals",
    description:
      "On-site chef preparing organic, locally-sourced meals and snacks daily.",
  },
  {
    icon: "shield",
    title: "Safety First",
    description:
      "Biometric entry, fenced grounds, CPR-certified staff, and strict health protocols.",
  },
  {
    icon: "smartphone",
    title: "Parent Connected",
    description:
      "Real-time updates, photos, and developmental tracking via the Brightwheel app.",
  },
];

export const testimonials = [
  {
    quote:
      "Birch Learning Academy feels like an extension of our home. The teachers know our daughter's quirks, celebrate her wins, and communicate with us throughout the day. We've never felt more confident in a childcare choice.",
    name: "Sarah & Michael Chen",
    child: "Emma, age 3",
    rating: 5,
  },
  {
    quote:
      "The transparent pricing alone sold us, but the nature program sealed the deal. Our son comes home muddy, happy, and telling us about the vegetables he helped grow. This place is magic.",
    name: "Jessica Martinez",
    child: "Lucas, age 4",
    rating: 5,
  },
  {
    quote:
      "We toured five centers in Johnson County. Birch was the only one that felt boutique without being pretentious. The enrichment included in tuition saved us hundreds compared to Primrose.",
    name: "David & Amanda Foster",
    child: "Olivia, age 2",
    rating: 5,
  },
  {
    quote:
      "As a pediatrician, I'm particular about childcare. Birch's health protocols, low ratios, and degreed staff exceed what I recommend to patient families.",
    name: "Dr. Karen Walsh",
    child: "Benjamin, age 1",
    rating: 5,
  },
  {
    quote:
      "The Pre-K program prepared our daughter beautifully for Blue Valley kindergarten. She arrived confident, curious, and already reading simple books.",
    name: "Rachel & Tom Nguyen",
    child: "Sophia, alumni",
    rating: 5,
  },
];

export const values = [
  {
    title: "Child-Led Discovery",
    description:
      "We follow the child's curiosity, not a rigid script. Every question is an invitation to explore.",
  },
  {
    title: "Nature as Teacher",
    description:
      "The outdoors is our second classroom. Rain, sunshine, and seasons are part of the curriculum.",
  },
  {
    title: "Partnership with Families",
    description:
      "Parents are co-educators. Open communication and transparency build trust that lasts.",
  },
  {
    title: "Excellence in Education",
    description:
      "Degreed teachers, ongoing training, and research-backed practices guide everything we do.",
  },
  {
    title: "Community Rooted",
    description:
      "We're proud Johnson County neighbors, invested in the families and communities we serve.",
  },
];

export const enrichmentPrograms = [
  {
    name: "Spanish Language Immersion",
    frequency: "Daily",
    description:
      "Native-speaking educators weave Spanish naturally throughout the day through songs, stories, and conversation.",
  },
  {
    name: "Music & Movement",
    frequency: "3× weekly",
    description:
      "Live music sessions develop rhythm, coordination, and joyful self-expression.",
  },
  {
    name: "Yoga & Mindfulness",
    frequency: "2× weekly",
    description:
      "Age-appropriate breathing, stretching, and mindfulness build emotional regulation skills.",
  },
  {
    name: "Art Studio",
    frequency: "Daily access",
    description:
      "Open-ended exploration with professional-grade materials in our dedicated art studio.",
  },
  {
    name: "Garden-to-Table",
    frequency: "Daily",
    description:
      "Children plant, tend, harvest, and cook with produce from our on-site garden.",
  },
];

export const tuitionTable = [
  { program: "Infants (6 weeks – 12 months)", monthly: "$1,850", annual: "$20,350" },
  { program: "Toddlers (12 – 24 months)", monthly: "$1,750", annual: "$19,250" },
  { program: "Early Preschool (2 – 3 years)", monthly: "$1,650", annual: "$18,150" },
  { program: "Preschool (3 – 4 years)", monthly: "$1,550", annual: "$17,050" },
  { program: "Pre-K (4 – 5 years)", monthly: "$1,450", annual: "$15,950" },
  { program: "Summer Program", monthly: "$350/week", annual: "Weekly enrollment" },
];

export const includedInTuition = [
  "All enrichment programs (Spanish, music, yoga, art)",
  "Organic breakfast, lunch, and PM snack",
  "Brightwheel parent communication app",
  "Diapers & wipes (Infant & Toddler programs)",
  "Sunscreen & basic supplies",
  "Field trips and special events",
];

export const enrollmentSteps = [
  {
    step: 1,
    title: "Schedule a Tour",
    description: "Visit our campus, meet teachers, and experience the Birch difference firsthand.",
  },
  {
    step: 2,
    title: "Submit Application",
    description: "Complete our online application with your family's information and preferences.",
  },
  {
    step: 3,
    title: "Family Meeting",
    description: "A warm conversation to ensure Birch is the right fit for your child and family.",
  },
  {
    step: 4,
    title: "Enrollment Confirmation",
    description: "Receive your welcome packet, sign enrollment agreements, and pay deposit.",
  },
  {
    step: 5,
    title: "Orientation & Transition",
    description: "Gradual transition days help your child feel safe, known, and excited.",
  },
];

export const faqs = [
  {
    question: "What are your student-teacher ratios?",
    answer:
      "We maintain ratios below Kansas state requirements: Infants 1:3, Toddlers 1:4, Preschool 1:6, Pre-K 1:8. This ensures individualized attention for every child.",
  },
  {
    question: "Is there a sibling discount?",
    answer:
      "Yes! Families enrolling two or more children receive a 10% discount on the older child's tuition.",
  },
  {
    question: "What is your illness policy?",
    answer:
      "Children must be fever-free for 24 hours without medication before returning. We follow KDHE guidelines and communicate promptly about any illness exposure.",
  },
  {
    question: "Do you offer part-time enrollment?",
    answer:
      "We offer full-time enrollment (5 days/week). Limited 3-day spots may be available for Preschool and Pre-K—contact us for current availability.",
  },
  {
    question: "How does the waitlist work?",
    answer:
      "After your tour, you may join our waitlist at no charge. We contact families in order of application date when spots open. Waitlist status is updated monthly.",
  },
  {
    question: "What meals do you serve?",
    answer:
      "Our on-site chef prepares organic, locally-sourced breakfast, lunch, and afternoon snack daily. We accommodate allergies, cultural preferences, and dietary restrictions.",
  },
];

export const teamMembers = [
  {
    name: "Dr. Lauren Birch",
    role: "Founder & Director",
    credentials: "Ed.D. Early Childhood Leadership, 20+ years",
    bio: "Lauren founded Birch Learning Academy after a decade in public education convinced her that children deserve better—smaller classes, nature every day, and teachers who are truly valued. The birch tree, with its resilience and grace, became her symbol for what early childhood should be.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "Marcus Williams",
    role: "Assistant Director",
    credentials: "M.Ed. Educational Administration",
    bio: "Marcus ensures every operational detail supports our educational mission. Parents know him as the friendly face at drop-off who remembers every child's name.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
  },
  {
    name: "Chef Maria Santos",
    role: "Executive Chef",
    credentials: "Culinary Institute graduate, nutrition certified",
    bio: "Maria transforms local ingredients into meals children actually eat—and love. Her garden-to-table philosophy means kids often eat what they grew that morning.",
    image: "https://images.unsplash.com/photo-1595273670150-447a04d18696?w=400&h=500&fit=crop",
  },
];

export const blogPosts = [
  {
    slug: "choosing-childcare-johnson-county",
    title: "How to Choose the Right Childcare in Johnson County",
    excerpt:
      "A parent's guide to evaluating daycare and preschool options in Overland Park, Leawood, and beyond.",
    category: "Parenting Resources",
    date: "2026-04-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1503454537845-b83146933a1b?w=800&h=500&fit=crop",
  },
  {
    slug: "benefits-nature-based-learning",
    title: "5 Benefits of Nature-Based Learning for Young Children",
    excerpt:
      "Research shows outdoor play builds resilience, creativity, and cognitive skills. Here's what that looks like daily.",
    category: "Child Development",
    date: "2026-04-01",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=500&fit=crop",
  },
  {
    slug: "farm-to-table-nutrition-toddlers",
    title: "Farm-to-Table Nutrition: Why It Matters for Toddlers",
    excerpt:
      "How fresh, whole foods support brain development and healthy eating habits from the earliest ages.",
    category: "Nutrition",
    date: "2026-03-18",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525cd34?w=800&h=500&fit=crop",
  },
  {
    slug: "spring-activities-kansas-city-families",
    title: "10 Spring Activities for Kansas City Families",
    excerpt:
      "Local parks, festivals, and hidden gems perfect for weekend adventures with little ones.",
    category: "Local Family Activities",
    date: "2026-03-05",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
  },
];

export const careers = [
  {
    title: "Lead Preschool Teacher",
    type: "Full-time",
    description:
      "Seeking a passionate, degreed educator to lead our Preschool classroom. Montessori or Reggio experience preferred.",
  },
  {
    title: "Assistant Toddler Teacher",
    type: "Full-time",
    description:
      "Join our toddler team supporting independence, language development, and joyful exploration.",
  },
  {
    title: "Part-Time Substitute Teacher",
    type: "Part-time",
    description:
      "Flexible substitute opportunities across all age groups. Early childhood coursework required.",
  },
];

export const navLinks = {
  programs: programs.map((p) => ({
    label: p.name,
    href: `/programs/${p.slug}`,
  })),
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Meet Our Team", href: "/team" },
    { label: "Our Facility", href: "/about#facility" },
  ],
  main: [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Nutrition", href: "/nutrition" },
    { label: "Safety", href: "/safety" },
    { label: "Enrollment", href: "/enrollment" },
    { label: "Blog", href: "/blog" },
  ],
};
