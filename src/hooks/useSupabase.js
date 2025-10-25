import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Custom hook for Supabase operations
export const useSupabase = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeOperation = async (operation) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await operation();
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    executeOperation
  };
};

// Hook for fetching schools
export const useSchools = () => {
  const [schools, setSchools] = useState([]);
  const { loading, error, executeOperation } = useSupabase();

  const fetchSchools = async () => {
    const result = await executeOperation(async () => {
      const response = await fetch('/api/schools');
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error);
      }
      
      return data.data;
    });
    
    setSchools(result);
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return {
    schools,
    loading,
    error,
    refetch: fetchSchools
  };
};

// Hook for fetching events
export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const { loading, error, executeOperation } = useSupabase();

  const fetchEvents = async () => {
    const result = await executeOperation(async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error);
      }
      
      return data.data;
    });
    
    setEvents(result);
  };

  const fetchUpcomingEvents = async () => {
    const result = await executeOperation(async () => {
      const response = await fetch('/api/events/upcoming');
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error);
      }
      
      return data.data;
    });
    
    setEvents(result);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents,
    fetchUpcoming: fetchUpcomingEvents
  };
};

// Hook for contact form submission
export const useContactForm = () => {
  const { loading, error, executeOperation } = useSupabase();

  const submitContactForm = async (formData) => {
    const result = await executeOperation(async () => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error);
      }
      
      return data;
    });
    
    return result;
  };

  return {
    submitContactForm,
    loading,
    error
  };
};

// Hook for newsletter subscription
export const useNewsletter = () => {
  const { loading, error, executeOperation } = useSupabase();

  const subscribeToNewsletter = async (email) => {
    const result = await executeOperation(async () => {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error);
      }
      
      return data;
    });
    
    return result;
  };

  return {
    subscribeToNewsletter,
    loading,
    error
  };
};

export default useSupabase;
