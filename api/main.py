import stripe
from env import STRIPE_SECRET_KEY
from fastapi import FastAPI
from routers import cart, master

stripe.api_key = STRIPE_SECRET_KEY

app = FastAPI()


# Routers
app.include_router(master.router)
app.include_router(cart.router, prefix="/api/cart")
