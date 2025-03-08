import { User, Activity, MousePointer, MapPin, Scale, Eye, Ear, Moon, Apple, Heart, Timer, Gauge, Droplet, HeartPulse, Shield, Smile, Battery, StretchVertical as Stretch, Dumbbell, Target, Compass, Zap, Clock, Settings as Lungs, Thermometer, Skull, Ban as Bandage, Flame, Droplets, Bone, Beef, Percent, Brain, Stethoscope, Microscope, Pill, LucideKey as Kidney, FlaskConical, Waves, Sun, Music, Fingerprint, ThermometerSnowflake as ThermometerSnow, Lightbulb, Volume2, Hand, Users, Network, Home, UserPlus, UserCheck, Briefcase, HeartHandshake, MessageSquare, Trophy, UsersRound, Handshake, SmilePlus, Coffee, UserCircle, BookOpen, CheckCircle, Laugh, FileCheck, UserCog, Share2, Heart as HeartCog, Footprints, Glasses, Megaphone, HelpingHand, Building2, Palette, Globe2, Vote, Church, Users2, UserX, Puzzle, Lightbulb as LightbulbIcon, Wifi, Code, ShoppingCart, BarChart, Mail, Video, Cloud, Globe, Camera, Book, Cpu, Database, Headphones, Image, Key, Laptop, Map, Printer, Rocket, Scissors, Truck, Wallet, Gamepad2, Award, LineChart, Smartphone, Bot, Headset as VrHeadset, MonitorPlay, PenTool, Coins, Store, Brush, Blocks, Boxes, Cog, Crosshair, FileCode2, Gift, Infinity, Layers, Lightbulb as LightbulbAlt, Lock, Milestone, Orbit, Plug2, QrCode, Radar, Shapes, Sparkles, Star, Link } from "lucide-react"
import type React from "react"

export type Integration = {
  id: string
  name: string
  description: string
  category: string
  world: string
  icon: React.ComponentType
  color: string
}

export const categories = {
  physical: [
    "All",
    "Basic Metrics",
    "Vital Functions",
    "Physical Abilities",
    "Body Systems",
    "Health Status",
    "Sensory Systems",
    "Physical Response",
    "Body Composition"
  ],
  social: [
    "All",
    "Social Activity",
    "Relationships",
    "Personality",
    "Social Skills",
    "Community",
    "Participation",
    "Social Traits",
    "Social Dynamics"
  ],
  digital: [
    "All",
    "Digital Skills",
    "Gaming",
    "Technical",
    "Online Activity",
    "Web3",
    "Crypto",
    "Development",
    "Digital Identity"
  ],
  spiritual: [
    "All",
    "Beliefs",
    "Intelligence",
    "Emotional",
    "Mindset",
    "Growth",
    "Spiritual Practice",
    "Inner State",
    "Consciousness"
  ]
}

const colorPalette = {
  physical: [
    "#FF4A00", "#96BF48", "#E37400", "#FFE01B", "#F06A6A",
    "#FFCC22", "#6772E5", "#F22F46", "#2D8CFF", "#0061FF"
  ],
  social: [
    "#00A1E0", "#D32D27", "#4CAF50", "#9C27B0", "#FF9800",
    "#795548", "#607D8B", "#3F51B5", "#00BCD4", "#FFC107"
  ],
  digital: [
    "#1E88E5", "#43A047", "#FB8C00", "#8E24AA", "#F4511E",
    "#546E7A", "#EC407A", "#7CB342", "#F57C00", "#00ACC1"
  ],
  spiritual: [
    "#9575CD", "#4DB6AC", "#FF7043", "#5C6BC0", "#66BB6A",
    "#FFA726", "#AB47BC", "#26A69A", "#EC407A", "#7E57C2"
  ]
}

// Helper function to get a random color from a world's palette
const getRandomColor = (world: string) => {
  const palette = colorPalette[world as keyof typeof colorPalette]
  return palette[Math.floor(Math.random() * palette.length)]
}

// Create the integrations array with all DNA entries
// Create the integrations array with all DNA entries
export const integrations: Integration[] = [
  // Physical World (0000-003F)
  {
    id: "0000",
    name: "Humanity Index",
    description: "Determines if the user is a real human or an automated bot using behavioral and biometric data.",
    category: "Basic Metrics",
    world: "physical",
    icon: User,
    color: getRandomColor("physical")
  },
  {
    id: "0001",
    name: "Physical Fitness Score",
    description: "Uses movement data, biometrics, and exercise frequency to assess fitness.",
    category: "Physical Abilities",
    world: "physical",
    icon: Activity,
    color: getRandomColor("physical")
  },
  {
    id: "0002",
    name: "Movement Tracking",
    description: "Analyzes walking patterns, posture, and daily physical activity.",
    category: "Physical Abilities",
    world: "physical",
    icon: Footprints,
    color: getRandomColor("physical")
  },
  {
    id: "0003",
    name: "Sleep Quality",
    description: "Monitors sleep cycles, duration, and overall rest quality.",
    category: "Vital Functions",
    world: "physical",
    icon: Moon,
    color: getRandomColor("physical")
  },
  {
    id: "0004",
    name: "Heart Rate",
    description: "Tracks cardiovascular performance and heart health metrics.",
    category: "Vital Functions",
    world: "physical",
    icon: HeartPulse,
    color: getRandomColor("physical")
  },
  {
    id: "0005",
    name: "Blood Pressure",
    description: "Monitors systolic and diastolic blood pressure levels.",
    category: "Vital Functions",
    world: "physical",
    icon: Activity,
    color: getRandomColor("physical")
  },
  {
    id: "0006",
    name: "Body Temperature",
    description: "Tracks core body temperature and thermal regulation.",
    category: "Vital Functions",
    world: "physical",
    icon: Thermometer,
    color: getRandomColor("physical")
  },
  {
    id: "0007",
    name: "Respiratory Rate",
    description: "Measures breathing patterns and lung capacity.",
    category: "Vital Functions",
    world: "physical",
    icon: Lungs,
    color: getRandomColor("physical")
  },
  {
    id: "0008",
    name: "Hydration Level",
    description: "Monitors body water content and fluid balance.",
    category: "Body Systems",
    world: "physical",
    icon: Droplet,
    color: getRandomColor("physical")
  },
  {
    id: "0009",
    name: "Muscle Strength",
    description: "Evaluates muscular power and endurance capabilities.",
    category: "Physical Abilities",
    world: "physical",
    icon: Dumbbell,
    color: getRandomColor("physical")
  },
  {
    id: "000A",
    name: "Flexibility Score",
    description: "Measures joint mobility and muscle elasticity.",
    category: "Physical Abilities",
    world: "physical",
    icon: Stretch,
    color: getRandomColor("physical")
  },
  {
    id: "000B",
    name: "Balance Rating",
    description: "Assesses stability and coordination abilities.",
    category: "Physical Abilities",
    world: "physical",
    icon: Scale,
    color: getRandomColor("physical")
  },
  {
    id: "000C",
    name: "Visual Acuity",
    description: "Tests eyesight quality and visual perception.",
    category: "Sensory Systems",
    world: "physical",
    icon: Eye,
    color: getRandomColor("physical")
  },
  {
    id: "000D",
    name: "Hearing Ability",
    description: "Evaluates auditory perception and sound processing.",
    category: "Sensory Systems",
    world: "physical",
    icon: Ear,
    color: getRandomColor("physical")
  },
  {
    id: "000E",
    name: "Reaction Time",
    description: "Measures speed of response to various stimuli.",
    category: "Physical Response",
    world: "physical",
    icon: Timer,
    color: getRandomColor("physical")
  },
  {
    id: "000F",
    name: "Energy Level",
    description: "Tracks vitality and stamina throughout the day.",
    category: "Health Status",
    world: "physical",
    icon: Battery,
    color: getRandomColor("physical")
  },

  // Social World (0040-007F)
  {
    id: "0040",
    name: "Social Frequency",
    description: "Tracks the frequency of face-to-face and online communication.",
    category: "Social Activity",
    world: "social",
    icon: Users,
    color: getRandomColor("social")
  },
  {
    id: "0041",
    name: "Social Media Influencer",
    description: "Evaluates social media reach, engagement, and follower interactions.",
    category: "Social Activity",
    world: "social",
    icon: Share2,
    color: getRandomColor("social")
  },
  {
    id: "0042",
    name: "Network Size",
    description: "Measures the extent of social connections and relationships.",
    category: "Relationships",
    world: "social",
    icon: Network,
    color: getRandomColor("social")
  },
  {
    id: "0043",
    name: "Leadership Score",
    description: "Evaluates ability to guide and influence others.",
    category: "Social Skills",
    world: "social",
    icon: UserCheck,
    color: getRandomColor("social")
  },
  {
    id: "0044",
    name: "Empathy Rating",
    description: "Measures ability to understand and share others' feelings.",
    category: "Social Skills",
    world: "social",
    icon: Heart,
    color: getRandomColor("social")
  },
  {
    id: "0045",
    name: "Communication Style",
    description: "Analyzes patterns in verbal and non-verbal expression.",
    category: "Social Skills",
    world: "social",
    icon: MessageSquare,
    color: getRandomColor("social")
  },
  {
    id: "0046",
    name: "Team Collaboration",
    description: "Tracks effectiveness in group settings and projects.",
    category: "Social Skills",
    world: "social",
    icon: Users2,
    color: getRandomColor("social")
  },
  {
    id: "0047",
    name: "Social Impact",
    description: "Measures influence on community and social causes.",
    category: "Community",
    world: "social",
    icon: Globe2,
    color: getRandomColor("social")
  },
  {
    id: "0048",
    name: "Relationship Quality",
    description: "Evaluates depth and health of personal connections.",
    category: "Relationships",
    world: "social",
    icon: HeartHandshake,
    color: getRandomColor("social")
  },
  {
    id: "0049",
    name: "Social Adaptability",
    description: "Tracks ability to adjust to different social contexts.",
    category: "Social Skills",
    world: "social",
    icon: UserCog,
    color: getRandomColor("social")
  },
  {
    id: "004A",
    name: "Conflict Resolution",
    description: "Measures effectiveness in managing disagreements.",
    category: "Social Skills",
    world: "social",
    icon: Handshake,
    color: getRandomColor("social")
  },
  {
    id: "004B",
    name: "Social Trust",
    description: "Evaluates reliability and trustworthiness in relationships.",
    category: "Social Traits",
    world: "social",
    icon: Shield,
    color: getRandomColor("social")
  },
  {
    id: "004C",
    name: "Community Engagement",
    description: "Tracks participation in local and online communities.",
    category: "Community",
    world: "social",
    icon: Building2,
    color: getRandomColor("social")
  },
  {
    id: "004D",
    name: "Social Creativity",
    description: "Measures innovative approaches to social interaction.",
    category: "Social Skills",
    world: "social",
    icon: Palette,
    color: getRandomColor("social")
  },
  {
    id: "004E",
    name: "Networking Ability",
    description: "Evaluates skill in building professional connections.",
    category: "Social Skills",
    world: "social",
    icon: Briefcase,
    color: getRandomColor("social")
  },
  {
    id: "004F",
    name: "Social Learning",
    description: "Tracks ability to learn and grow from social interactions.",
    category: "Social Skills",
    world: "social",
    icon: BookOpen,
    color: getRandomColor("social")
  },

  // Digital World (0080-00BF)
  {
    id: "0080",
    name: "Internet OG Sharing",
    description: "Tracks posting frequency and originality of digital content.",
    category: "Online Activity",
    world: "digital",
    icon: Share2,
    color: getRandomColor("digital")
  },
  {
    id: "0081",
    name: "Digital Literacy",
    description: "Measures proficiency in navigating online platforms, software, and tools.",
    category: "Digital Skills",
    world: "digital",
    icon: Laptop,
    color: getRandomColor("digital")
  },
  {
    id: "0082",
    name: "Coding Proficiency",
    description: "Evaluates programming skills and technical knowledge.",
    category: "Development",
    world: "digital",
    icon: Code,
    color: getRandomColor("digital")
  },
  {
    id: "0083",
    name: "Digital Security",
    description: "Assesses cybersecurity awareness and practices.",
    category: "Digital Skills",
    world: "digital",
    icon: Lock,
    color: getRandomColor("digital")
  },
  {
    id: "0084",
    name: "Cloud Computing",
    description: "Tracks usage of cloud services and infrastructure.",
    category: "Technical",
    world: "digital",
    icon: Cloud,
    color: getRandomColor("digital")
  },
  {
    id: "0085",
    name: "Data Analysis",
    description: "Measures ability to interpret and visualize data.",
    category: "Digital Skills",
    world: "digital",
    icon: BarChart,
    color: getRandomColor("digital")
  },
  {
    id: "0086",
    name: "Digital Content Creation",
    description: "Evaluates quality and impact of created digital content.",
    category: "Digital Skills",
    world: "digital",
    icon: PenTool,
    color: getRandomColor("digital")
  },
  {
    id: "0087",
    name: "Gaming Achievement",
    description: "Tracks success in various gaming platforms.",
    category: "Gaming",
    world: "digital",
    icon: Gamepad2,
    color: getRandomColor("digital")
  },
  {
    id: "0088",
    name: "Blockchain Activity",
    description: "Monitors engagement with cryptocurrency and NFTs.",
    category: "Web3",
    world: "digital",
    icon: Link,
    color: getRandomColor("digital")
  },
  {
    id: "0089",
    name: "AI Interaction",
    description: "Measures proficiency with artificial intelligence tools.",
    category: "Technical",
    world: "digital",
    icon: Bot,
    color: getRandomColor("digital")
  },
  {
    id: "008A",
    name: "Digital Innovation",
    description: "Tracks creation of new digital solutions.",
    category: "Development",
    world: "digital",
    icon: Lightbulb,
    color: getRandomColor("digital")
  },
  {
    id: "008B",
    name: "Virtual Reality",
    description: "Evaluates engagement with VR technologies.",
    category: "Technical",
    world: "digital",
    icon: VrHeadset,
    color: getRandomColor("digital")
  },
  {
    id: "008C",
    name: "Digital Commerce",
    description: "Tracks online business and transaction activities.",
    category: "Digital Skills",
    world: "digital",
    icon: ShoppingCart,
    color: getRandomColor("digital")
  },
  {
    id: "008D",
    name: "Network Management",
    description: "Assesses ability to maintain digital infrastructure.",
    category: "Technical",
    world: "digital",
    icon: Wifi,
    color: getRandomColor("digital")
  },
  {
    id: "008E",
    name: "Digital Identity",
    description: "Measures presence and reputation in digital spaces.",
    category: "Digital Identity",
    world: "digital",
    icon: Fingerprint,
    color: getRandomColor("digital")
  },
  {
    id: "008F",
    name: "Smart Contract Usage",
    description: "Tracks interaction with blockchain contracts.",
    category: "Web3",
    world: "digital",
    icon: FileCode2,
    color: getRandomColor("digital")
  },

  // Spiritual World (00C0-00FF)
  {
    id: "00C0",
    name: "Religion",
    description: "Tracks engagement in religious activities, rituals, and faith-based community involvement.",
    category: "Beliefs",
    world: "spiritual",
    icon: Church,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C1",
    name: "MBTI",
    description: "Categorizes users into 16 personality types, influencing decision-making and social interactions.",
    category: "Intelligence",
    world: "spiritual",
    icon: Brain,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C2",
    name: "Meditation Practice",
    description: "Measures frequency and quality of meditation sessions.",
    category: "Spiritual Practice",
    world: "spiritual",
    icon: Moon,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C3",
    name: "Emotional Intelligence",
    description: "Evaluates ability to understand and manage emotions.",
    category: "Emotional",
    world: "spiritual",
    icon: Heart,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C4",
    name: "Mindfulness Level",
    description: "Tracks present-moment awareness and attention.",
    category: "Spiritual Practice",
    world: "spiritual",
    icon: Eye,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C5",
    name: "Inner Peace",
    description: "Measures mental calmness and emotional stability.",
    category: "Inner State",
    world: "spiritual",
    icon: Sun,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C6",
    name: "Personal Growth",
    description: "Tracks progress in self-development journey.",
    category: "Growth",
    world: "spiritual",
    icon: Milestone,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C7",
    name: "Wisdom Level",
    description: "Evaluates depth of understanding and insight.",
    category: "Intelligence",
    world: "spiritual",
    icon: Book,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C8",
    name: "Consciousness",
    description: "Measures awareness of self and surroundings.",
    category: "Consciousness",
    world: "spiritual",
    icon: Brain,
    color: getRandomColor("spiritual")
  },
  {
    id: "00C9",
    name: "Life Purpose",
    description: "Tracks clarity of personal mission and goals.",
    category: "Mindset",
    world: "spiritual",
    icon: Target,
    color: getRandomColor("spiritual")
  },
  {
    id: "00CA",
    name: "Gratitude",
    description: "Evaluates appreciation for life experiences.",
    category: "Mindset",
    world: "spiritual",
    icon: Heart,
    color: getRandomColor("spiritual")
  },
  {
    id: "00CB",
    name: "Spiritual Connection",
    description: "Measures sense of connection to higher purpose.",
    category: "Beliefs",
    world: "spiritual",
    icon: Infinity,
    color: getRandomColor("spiritual")
  },
  {
    id: "00CC",
    name: "Inner Harmony",
    description: "Tracks balance between mind, body, and spirit.",
    category: "Inner State",
    world: "spiritual",
    icon: Scale,
    color: getRandomColor("spiritual")
  },
  {
    id: "00CD",
    name: "Compassion",
    description: "Evaluates empathy and care for others.",
    category: "Emotional",
    world: "spiritual",
    icon: HeartHandshake,
    color: getRandomColor("spiritual")
  },
  {
    id: "00CE",
    name: "Enlightenment",
    description: "Tracks progress in spiritual awakening.",
    category: "Consciousness",
    world: "spiritual",
    icon: Sparkles,
    color: getRandomColor("spiritual")
  },
  {
    id: "00CF",
    name: "Soul Purpose",
    description: "Measures alignment with spiritual calling.",
    category: "Beliefs",
    world: "spiritual",
    icon: Compass,
    color: getRandomColor("spiritual")
  }
]