import stripe
from env import CANCEL_URL, SUCCESS_URL
from fastapi import APIRouter, HTTPException, responses

router = APIRouter(tags=["Cart"])


@router.get("/checkout")
async def create_checkout_session(price: int):
    checkout_session = stripe.checkout.Session.create(
        payment_method_types=["card", "paypal"],
        line_items=[
            {
                "price_data": {
                    "currency": "usd",
                    "product_data": {
                        "name": "Test Product",
                        "images": ["https://placehold.co/600x400/EEE/31343C"],
                        "description": "This is a test product",
                    },
                    "unit_amount": price,
                },
                "quantity": 1,
            },
        ],
        mode="payment",
        success_url=SUCCESS_URL,
        cancel_url=CANCEL_URL,
    )

    redirect_url = checkout_session.url

    if redirect_url:
        return responses.RedirectResponse(url=redirect_url, status_code=303)
    else:
        return HTTPException(
            status_code=400, detail="Failed to create checkout session"
        )


@router.get("/success")
async def success():
    return responses.RedirectResponse(
        url="http://localhost:5173/cart/success", status_code=303
    )


@router.get("/cancel")
async def cancel():
    return responses.RedirectResponse(
        url="http://localhost:5173/cart/cancelled", status_code=303
    )
