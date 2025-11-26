/*
  # Create Consultation Inquiries Table

  1. New Tables
    - `consultation_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `title` (text, required)
      - `company` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `program_stage` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)
      - `status` (text, default: 'new')

  2. Security
    - Enable RLS on `consultation_inquiries` table
    - Add policy allowing anonymous inserts (for form submissions)
    - Add policy allowing authenticated service role to read all inquiries
*/

CREATE TABLE IF NOT EXISTS consultation_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text,
  program_stage text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON consultation_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read"
  ON consultation_inquiries
  FOR SELECT
  TO authenticated
  USING (true);
