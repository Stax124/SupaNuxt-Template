# Build stage
FROM python:3.12-alpine AS builder
WORKDIR /app
COPY requirements.txt .
RUN --mount=type=cache,target=/root/.cache pip install --user -r requirements.txt

# Development stage
FROM python:3.12-alpine as development
WORKDIR /app
COPY --from=builder /root/.local /root/.local
ENV PATH=/root/.local/bin:$PATH

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000", "--reload"]