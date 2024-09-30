import os

from supabase import Client, create_client

url: str = os.environ["SUPABASE_URL"]
key: str = os.environ["SUPABASE_SERVICE_KEY"]
supabase: Client = create_client(url, key)
