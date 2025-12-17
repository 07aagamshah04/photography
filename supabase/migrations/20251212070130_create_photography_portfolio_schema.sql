/*
  # Photography Portfolio Website Schema

  1. New Tables
    - `portfolio_images`
      - `id` (uuid, primary key)
      - `title` (text)
      - `category` (text) - Wedding, Pre-wedding, Maternity, Kids, Events, Corporate
      - `image_url` (text) - URL to the image
      - `description` (text, optional)
      - `display_order` (integer) - for sorting
      - `created_at` (timestamptz)
    
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `display_order` (integer)
      - `created_at` (timestamptz)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `client_name` (text)
      - `client_image_url` (text, optional)
      - `review_text` (text)
      - `rating` (integer) - 1-5 stars
      - `display_order` (integer)
      - `created_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Allow public read access for portfolio_images, services, and testimonials
    - Allow public insert for contact_submissions
    - Restrict other operations
*/

-- Create portfolio_images table
CREATE TABLE IF NOT EXISTS portfolio_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  description text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_image_url text DEFAULT '',
  review_text text NOT NULL,
  rating integer DEFAULT 5,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for portfolio_images
CREATE POLICY "Anyone can view portfolio images"
  ON portfolio_images
  FOR SELECT
  USING (true);

-- RLS Policies for services
CREATE POLICY "Anyone can view services"
  ON services
  FOR SELECT
  USING (true);

-- RLS Policies for testimonials
CREATE POLICY "Anyone can view testimonials"
  ON testimonials
  FOR SELECT
  USING (true);

-- RLS Policies for contact_submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);