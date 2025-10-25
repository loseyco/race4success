const { createClient } = require('@supabase/supabase-js')

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Database helper functions with r4s_ prefix
const db = {
  // Users table
  users: {
    async getById(id) {
      const { data, error } = await supabase
        .from('r4s_users')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    },

    async create(userData) {
      const { data, error } = await supabase
        .from('r4s_users')
        .insert(userData)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    async update(id, updates) {
      const { data, error } = await supabase
        .from('r4s_users')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    async delete(id) {
      const { error } = await supabase
        .from('r4s_users')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      return true
    }
  },

  // Schools table
  schools: {
    async getAll() {
      const { data, error } = await supabase
        .from('r4s_schools')
        .select('*')
        .order('name')
      
      if (error) throw error
      return data
    },

    async getById(id) {
      const { data, error } = await supabase
        .from('r4s_schools')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    },

    async create(schoolData) {
      const { data, error } = await supabase
        .from('r4s_schools')
        .insert(schoolData)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    async update(id, updates) {
      const { data, error } = await supabase
        .from('r4s_schools')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return data
    }
  },

  // Programs table
  programs: {
    async getAll() {
      const { data, error } = await supabase
        .from('r4s_programs')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    },

    async getBySchoolId(schoolId) {
      const { data, error } = await supabase
        .from('r4s_programs')
        .select('*')
        .eq('school_id', schoolId)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    },

    async create(programData) {
      const { data, error } = await supabase
        .from('r4s_programs')
        .insert(programData)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    async update(id, updates) {
      const { data, error } = await supabase
        .from('r4s_programs')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return data
    }
  },

  // Events table
  events: {
    async getAll() {
      const { data, error } = await supabase
        .from('r4s_events')
        .select('*')
        .order('event_date', { ascending: true })
      
      if (error) throw error
      return data
    },

    async getUpcoming() {
      const { data, error } = await supabase
        .from('r4s_events')
        .select('*')
        .gte('event_date', new Date().toISOString())
        .order('event_date', { ascending: true })
      
      if (error) throw error
      return data
    },

    async create(eventData) {
      const { data, error } = await supabase
        .from('r4s_events')
        .insert(eventData)
        .select()
        .single()
      
      if (error) throw error
      return data
    }
  },

  // Contact submissions table
  contactSubmissions: {
    async create(submissionData) {
      const { data, error } = await supabase
        .from('r4s_contact_submissions')
        .insert(submissionData)
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    async getAll() {
      const { data, error } = await supabase
        .from('r4s_contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    }
  },

  // Newsletter subscriptions table
  newsletterSubscriptions: {
    async create(email) {
      const { data, error } = await supabase
        .from('r4s_newsletter_subscriptions')
        .insert({ email })
        .select()
        .single()
      
      if (error) throw error
      return data
    },

    async getAll() {
      const { data, error } = await supabase
        .from('r4s_newsletter_subscriptions')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data
    }
  }
}

module.exports = {
  supabase,
  db
}
