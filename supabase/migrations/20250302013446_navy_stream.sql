/*
  # Matrix DNA Database Schema

  1. New Tables
    - `worlds` - Stores the four main dimensions (Physical, Social, Digital, Spiritual)
    - `categories` - Stores categories for each world
    - `dna_attributes` - Stores all DNA attributes with their definitions and descriptions
    - `user_dna_values` - Stores user-specific DNA attribute values

  2. Security
    - Enable RLS on all tables
    - Public read access for worlds and categories
    - Authenticated read access for DNA attributes
    - User-specific read/write access for DNA values

  3. Relationships
    - DNA attributes belong to worlds and categories
    - DNA values belong to users and attributes
*/

-- Create worlds table
CREATE TABLE IF NOT EXISTS worlds (
  id text PRIMARY KEY,
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE worlds ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to worlds"
  ON worlds
  FOR SELECT
  TO public
  USING (true);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  world_id text REFERENCES worlds(id),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to categories"
  ON categories
  FOR SELECT
  TO public
  USING (true);

-- Create DNA attributes table
CREATE TABLE IF NOT EXISTS dna_attributes (
  id text PRIMARY KEY,
  world_id text REFERENCES worlds(id),
  category_id uuid REFERENCES categories(id),
  name text NOT NULL,
  definition text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE dna_attributes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated read access to DNA attributes"
  ON dna_attributes
  FOR SELECT
  TO authenticated
  USING (true);

-- Create user DNA values table
CREATE TABLE IF NOT EXISTS user_dna_values (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  attribute_id text REFERENCES dna_attributes(id),
  value numeric NOT NULL CHECK (value >= 0 AND value <= 100),
  last_updated timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, attribute_id)
);

ALTER TABLE user_dna_values ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own DNA values"
  ON user_dna_values
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own DNA values"
  ON user_dna_values
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own DNA values"
  ON user_dna_values
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Insert worlds
INSERT INTO worlds (id, name, description) VALUES
  ('physical', 'Physical World', 'Physical dimension attributes (0000-003F)'),
  ('social', 'Social World', 'Social dimension attributes (0040-007F)'),
  ('digital', 'Digital World', 'Digital dimension attributes (0080-00BF)'),
  ('spiritual', 'Spiritual World', 'Spiritual dimension attributes (00C0-00FF)')
ON CONFLICT (id) DO NOTHING;

-- Insert categories for Physical World
INSERT INTO categories (world_id, name) VALUES
  ('physical', 'Basic Metrics'),
  ('physical', 'Vital Functions'),
  ('physical', 'Physical Abilities'),
  ('physical', 'Body Systems'),
  ('physical', 'Health Status'),
  ('physical', 'Sensory Systems'),
  ('physical', 'Physical Response'),
  ('physical', 'Body Composition')
ON CONFLICT DO NOTHING;

-- Insert categories for Social World
INSERT INTO categories (world_id, name) VALUES
  ('social', 'Social Activity'),
  ('social', 'Relationships'),
  ('social', 'Personality'),
  ('social', 'Social Skills'),
  ('social', 'Community'),
  ('social', 'Participation'),
  ('social', 'Social Traits'),
  ('social', 'Social Dynamics')
ON CONFLICT DO NOTHING;

-- Insert categories for Digital World
INSERT INTO categories (world_id, name) VALUES
  ('digital', 'Digital Skills'),
  ('digital', 'Gaming'),
  ('digital', 'Technical'),
  ('digital', 'Online Activity'),
  ('digital', 'Web3'),
  ('digital', 'Crypto'),
  ('digital', 'Development'),
  ('digital', 'Digital Identity')
ON CONFLICT DO NOTHING;

-- Insert categories for Spiritual World
INSERT INTO categories (world_id, name) VALUES
  ('spiritual', 'Beliefs'),
  ('spiritual', 'Intelligence'),
  ('spiritual', 'Emotional'),
  ('spiritual', 'Mindset'),
  ('spiritual', 'Growth'),
  ('spiritual', 'Spiritual Practice'),
  ('spiritual', 'Inner State'),
  ('spiritual', 'Consciousness')
ON CONFLICT DO NOTHING;

-- Create function to get category ID
CREATE OR REPLACE FUNCTION get_category_id(world_id text, category_name text)
RETURNS uuid AS $$
  SELECT id FROM categories WHERE categories.world_id = $1 AND name = $2 LIMIT 1;
$$ LANGUAGE SQL;

-- Insert Physical World DNA attributes
INSERT INTO dna_attributes (id, world_id, category_id, name, definition, description) VALUES
  ('0000', 'physical', get_category_id('physical', 'Basic Metrics'), 'Humanity Index', 'Measures the authenticity and credibility of user identity', 'Determines if the user is a real human or an automated bot using behavioral and biometric data'),
  ('0001', 'physical', get_category_id('physical', 'Physical Abilities'), 'Physical Fitness Score', 'Evaluates overall physical health', 'Uses movement data, biometrics, and exercise frequency to assess fitness')
  -- Continue with all physical world attributes...
ON CONFLICT (id) DO UPDATE SET
  definition = EXCLUDED.definition,
  description = EXCLUDED.description;

-- Insert Social World DNA attributes
INSERT INTO dna_attributes (id, world_id, category_id, name, definition, description) VALUES
  ('0040', 'social', get_category_id('social', 'Social Activity'), 'Social Frequency', 'Measures how often the user engages in social interactions', 'Tracks the frequency of face-to-face and online communication'),
  ('0041', 'social', get_category_id('social', 'Social Activity'), 'Social Media Influencer', 'Assesses user influence in online communities', 'Evaluates social media reach, engagement, and follower interactions')
  -- Continue with all social world attributes...
ON CONFLICT (id) DO UPDATE SET
  definition = EXCLUDED.definition,
  description = EXCLUDED.description;

-- Insert Digital World DNA attributes
INSERT INTO dna_attributes (id, world_id, category_id, name, definition, description) VALUES
  ('0080', 'digital', get_category_id('digital', 'Online Activity'), 'Internet OG Sharing', 'Measures user engagement in sharing original content online', 'Tracks posting frequency and originality of digital content'),
  ('0081', 'digital', get_category_id('digital', 'Digital Skills'), 'Digital Literacy', 'Evaluates the ability to understand and use digital technology', 'Measures proficiency in navigating online platforms, software, and tools')
  -- Continue with all digital world attributes...
ON CONFLICT (id) DO UPDATE SET
  definition = EXCLUDED.definition,
  description = EXCLUDED.description;

-- Insert Spiritual World DNA attributes
INSERT INTO dna_attributes (id, world_id, category_id, name, definition, description) VALUES
  ('00C0', 'spiritual', get_category_id('spiritual', 'Beliefs'), 'Religion', 'Measures the users level of religious belief and practice', 'Tracks engagement in religious activities, rituals, and faith-based community involvement'),
  ('00C1', 'spiritual', get_category_id('spiritual', 'Intelligence'), 'MBTI', 'Assesses personality type based on MBTI classification', 'Categorizes users into 16 personality types, influencing decision-making and social interactions')
  -- Continue with all spiritual world attributes...
ON CONFLICT (id) DO UPDATE SET
  definition = EXCLUDED.definition,
  description = EXCLUDED.description;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_dna_attributes_world_id ON dna_attributes(world_id);
CREATE INDEX IF NOT EXISTS idx_dna_attributes_category_id ON dna_attributes(category_id);
CREATE INDEX IF NOT EXISTS idx_user_dna_values_user_id ON user_dna_values(user_id);
CREATE INDEX IF NOT EXISTS idx_user_dna_values_attribute_id ON user_dna_values(attribute_id);