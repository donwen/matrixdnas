import type { LucideIcon } from 'lucide-react'
import { User, Activity, MousePointer, Scale, Eye, Ear, Moon, Heart, Timer, Droplet, HeartPulse, Battery, StretchVertical as Stretch, Dumbbell, Target, Brain, Thermometer, Settings as Lungs, Globe, Users, Network, UserCheck, MessageSquare, Users2, Globe2, HeartHandshake, UserCog, Handshake, Building2, Palette, Briefcase, BookOpen, Share2, Laptop, Code, Lock, Cloud, BarChart, PenTool, Gamepad2, Link, Bot, Lightbulb, Headset as VrHeadset, ShoppingCart, Wifi, Fingerprint, FileCode2, Church, Infinity, Sun, Milestone, Book, Compass, Sparkles, Scale as Balance } from 'lucide-react'

export type DNA = {
  id: string
  name: string
  definition: string
  description: string
  category: string
  world: 'physical' | 'social' | 'digital' | 'spiritual'
  icon: LucideIcon
  color: string
}

export type World = {
  id: string
  name: string
  description: string
  icon: LucideIcon
}

export const worlds: World[] = [
  {
    id: 'physical',
    name: 'Physical World',
    description: 'Physical dimension attributes (0000-003F)',
    icon: Globe
  },
  {
    id: 'social',
    name: 'Social World',
    description: 'Social dimension attributes (0040-007F)',
    icon: Heart
  },
  {
    id: 'digital',
    name: 'Digital World',
    description: 'Digital dimension attributes (0080-00BF)',
    icon: Share2
  },
  {
    id: 'spiritual',
    name: 'Spiritual World',
    description: 'Spiritual dimension attributes (00C0-00FF)',
    icon: Brain
  }
]

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

const getRandomColor = (world: string) => {
  const palette = colorPalette[world as keyof typeof colorPalette]
  return palette[Math.floor(Math.random() * palette.length)]
}

// 图标映射表
export const getIconForDNA = (name: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    // Physical icons
    'Humanity Index': User,
    'Physical Fitness Score': Activity,
    'Movement Tracking': MousePointer,
    'Sleep Quality': Moon,
    'Heart Rate': HeartPulse,
    'Blood Pressure': Activity,
    'Body Temperature': Thermometer,
    'Respiratory Rate': Lungs,
    'Hydration Level': Droplet,
    'Muscle Strength': Dumbbell,
    'Flexibility Score': Stretch,
    'Balance Rating': Scale,
    'Visual Acuity': Eye,
    'Hearing Ability': Ear,
    'Reaction Time': Timer,
    'Energy Level': Battery,

    // Social icons
    'Social Frequency': Users,
    'Social Media Influencer': Share2,
    'Network Size': Network,
    'Leadership Score': UserCheck,
    'Communication Style': MessageSquare,
    'Team Collaboration': Users2,
    'Social Impact': Globe2,
    'Relationship Quality': HeartHandshake,
    'Social Adaptability': UserCog,
    'Conflict Resolution': Handshake,
    'Community Engagement': Building2,
    'Social Creativity': Palette,
    'Networking Ability': Briefcase,
    'Social Learning': BookOpen,

    // Digital icons
    'Internet OG Sharing': Share2,
    'Digital Literacy': Laptop,
    'Programming Level': Code,
    'Digital Security': Lock,
    'Cloud Computing': Cloud,
    'Data Analysis': BarChart,
    'Digital Content Creation': PenTool,
    'Gaming Achievement': Gamepad2,
    'Blockchain Activity': Link,
    'AI Interaction': Bot,
    'Digital Innovation': Lightbulb,
    'Virtual Reality': VrHeadset,
    'Digital Commerce': ShoppingCart,
    'Network Management': Wifi,
    'Digital Identity': Fingerprint,
    'Smart Contract Usage': FileCode2,

    // Spiritual icons
    'Religion': Church,
    'MBTI': Brain,
    'Meditation Practice': Moon,
    'Emotional Intelligence': Heart,
    'Mindfulness Level': Eye,
    'Inner Peace': Sun,
    'Personal Growth': Milestone,
    'Wisdom Level': Book,
    'Consciousness': Brain,
    'Life Purpose': Target,
    'Gratitude': Heart,
    'Spiritual Connection': Infinity,
    'Inner Harmony': Balance,
    'Compassion': HeartHandshake,
    'Enlightenment': Sparkles,
    'Soul Purpose': Compass
  }

  return iconMap[name] || Brain // Default to Brain icon if not found
}

// Import DNA data from dnaData.ts and convert to DNA objects
import { dnaData as rawDnaData } from './dnaData'

// Convert DNAAttribute from dnaData.ts to our DNA type
export const dnaData: DNA[] = rawDnaData.map(item => ({
  id: item.id,
  name: item.name,
  definition: item.definition,
  description: item.definition, // 使用definition作为description的默认值
  category: item.category,
  world: item.world as 'physical' | 'social' | 'digital' | 'spiritual',
  icon: getIconForDNA(item.name),
  color: getRandomColor(item.world)
}))