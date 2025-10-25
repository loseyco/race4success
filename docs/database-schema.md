# Race4Success.org Database Schema

This document outlines the database schema for Race4Success.org using Supabase with the `r4s_` table prefix.

## Table Structure

### r4s_users
User accounts and profiles for Race4Success.org

```sql
CREATE TABLE r4s_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(50) DEFAULT 'user', -- user, admin, school_admin
  school_id UUID REFERENCES r4s_schools(id),
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### r4s_schools
Educational institutions participating in Race4Success programs

```sql
CREATE TABLE r4s_schools (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(50),
  zip_code VARCHAR(10),
  phone VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  school_type VARCHAR(50), -- elementary, middle, high, k12
  enrollment INTEGER,
  contact_name VARCHAR(255),
  contact_title VARCHAR(100),
  status VARCHAR(20) DEFAULT 'active', -- active, inactive, pending
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### r4s_programs
STEM racing programs implemented at schools

```sql
CREATE TABLE r4s_programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID REFERENCES r4s_schools(id) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  program_type VARCHAR(50), -- simulator, curriculum, both
  grade_levels VARCHAR(100), -- 6-8, 9-12, 6-12
  start_date DATE,
  end_date DATE,
  status VARCHAR(20) DEFAULT 'planning', -- planning, active, completed, paused
  simulator_count INTEGER DEFAULT 0,
  student_count INTEGER DEFAULT 0,
  instructor_name VARCHAR(255),
  instructor_email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### r4s_events
Events, competitions, and activities organized by Race4Success

```sql
CREATE TABLE r4s_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  event_type VARCHAR(50), -- competition, workshop, exhibition, meeting
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  location VARCHAR(255),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(50),
  max_participants INTEGER,
  registration_url VARCHAR(255),
  status VARCHAR(20) DEFAULT 'upcoming', -- upcoming, active, completed, cancelled
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### r4s_contact_submissions
Contact form submissions from the website

```sql
CREATE TABLE r4s_contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  phone VARCHAR(20),
  school VARCHAR(255),
  role VARCHAR(100),
  status VARCHAR(20) DEFAULT 'new', -- new, read, replied, closed
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### r4s_newsletter_subscriptions
Newsletter subscription management

```sql
CREATE TABLE r4s_newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(20) DEFAULT 'active', -- active, unsubscribed, bounced
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### r4s_race_results
Individual race results and performance data

```sql
CREATE TABLE r4s_race_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id UUID REFERENCES r4s_programs(id) NOT NULL,
  student_name VARCHAR(255) NOT NULL,
  student_id VARCHAR(100), -- Optional student identifier
  race_track VARCHAR(255) NOT NULL,
  race_time DECIMAL(10,3), -- Time in seconds
  best_lap_time DECIMAL(10,3),
  total_laps INTEGER,
  position INTEGER,
  race_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### r4s_curriculum_modules
Educational curriculum modules and content

```sql
CREATE TABLE r4s_curriculum_modules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  module_type VARCHAR(50), -- lesson, activity, assessment
  grade_level VARCHAR(20), -- 6-8, 9-12, 6-12
  subject VARCHAR(50), -- science, technology, engineering, math
  duration_minutes INTEGER,
  learning_objectives TEXT[],
  materials_needed TEXT[],
  content_url VARCHAR(255),
  status VARCHAR(20) DEFAULT 'draft', -- draft, published, archived
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Indexes

```sql
-- Performance indexes
CREATE INDEX idx_r4s_schools_state ON r4s_schools(state);
CREATE INDEX idx_r4s_schools_status ON r4s_schools(status);
CREATE INDEX idx_r4s_programs_school_id ON r4s_programs(school_id);
CREATE INDEX idx_r4s_programs_status ON r4s_programs(status);
CREATE INDEX idx_r4s_events_date ON r4s_events(event_date);
CREATE INDEX idx_r4s_events_status ON r4s_events(status);
CREATE INDEX idx_r4s_contact_status ON r4s_contact_submissions(status);
CREATE INDEX idx_r4s_race_results_program_id ON r4s_race_results(program_id);
CREATE INDEX idx_r4s_race_results_race_date ON r4s_race_results(race_date);
```

## Row Level Security (RLS)

```sql
-- Enable RLS on all tables
ALTER TABLE r4s_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE r4s_schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE r4s_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE r4s_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE r4s_contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE r4s_newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE r4s_race_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE r4s_curriculum_modules ENABLE ROW LEVEL SECURITY;

-- Public read access for events and schools
CREATE POLICY "Public read access for events" ON r4s_events FOR SELECT USING (true);
CREATE POLICY "Public read access for schools" ON r4s_schools FOR SELECT USING (status = 'active');

-- Authenticated users can read their own data
CREATE POLICY "Users can read own profile" ON r4s_users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON r4s_users FOR UPDATE USING (auth.uid() = id);

-- Contact submissions are public for creation
CREATE POLICY "Public can create contact submissions" ON r4s_contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can create newsletter subscriptions" ON r4s_newsletter_subscriptions FOR INSERT WITH CHECK (true);
```

## API Endpoints

### Schools
- `GET /api/schools` - Get all schools
- `GET /api/schools/:id` - Get school by ID
- `POST /api/schools` - Create new school
- `PUT /api/schools/:id` - Update school

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/school/:schoolId` - Get programs by school
- `POST /api/programs` - Create new program
- `PUT /api/programs/:id` - Update program

### Events
- `GET /api/events` - Get all events
- `GET /api/events/upcoming` - Get upcoming events
- `POST /api/events` - Create new event

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter` - Get all subscriptions (admin)

## Environment Variables

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Usage Examples

### Frontend React Hook
```javascript
import { useEvents, useContactForm } from '../hooks/useSupabase';

function EventsPage() {
  const { events, loading, error } = useEvents();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {events.map(event => (
        <div key={event.id}>{event.name}</div>
      ))}
    </div>
  );
}
```

### Backend API Usage
```javascript
import { db } from '../src/lib/supabase';

// Get all schools
const schools = await db.schools.getAll();

// Create new program
const program = await db.programs.create({
  school_id: 'uuid',
  name: 'STEM Racing Program',
  description: 'Program description'
});
```
