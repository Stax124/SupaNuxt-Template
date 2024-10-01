import os

from dotenv import load_dotenv

load_dotenv()

STRIPE_SECRET_KEY = os.environ["STRIPE_SECRET_KEY"]
SUCCESS_URL = os.environ["STRIPE_SUCCESS_URL"]
CANCEL_URL = os.environ["STRIPE_CANCEL_URL"]
