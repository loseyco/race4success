# Set Supabase environment variables for development
$env:SUPABASE_URL="https://kwimvushxtorslnwrnuf.supabase.co"
$env:SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3aW12dXNoeHRvcnNsbndybnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NDE4ODUsImV4cCI6MjA3MzIxNzg4NX0.e4C8vr5nWdRzWeHzTsu7Ou_IWjKcOIGmRqBFnJHhzPI"
$env:SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3aW12dXNoeHRvcnNsbndybnVmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzY0MTg4NSwiZXhwIjoyMDczMjE3ODg1fQ.W7vKMY8j4ltV6wY4qzoXnAQRofsxy9GWluL73295E3U"
$env:NODE_ENV="development"
$env:PORT="3001"

Write-Host "Supabase environment variables set successfully!"
Write-Host "SUPABASE_URL: $env:SUPABASE_URL"
Write-Host "NODE_ENV: $env:NODE_ENV"
Write-Host "PORT: $env:PORT"
