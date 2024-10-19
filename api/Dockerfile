# Build stage
FROM python:3.13-alpine
WORKDIR /app

## Install poetry
RUN apk add --no-cache curl fish vim
RUN curl -sSL https://install.python-poetry.org | python3 -
    
## Add poetry to PATH
ENV PATH="${PATH}:/root/.local/bin"

## Extra environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

## Install Python dependencies
COPY pyproject.toml ./
RUN --mount=type=cache,target=/root/.cache poetry config virtualenvs.create false \
    && poetry install --no-dev

## Copy application code
COPY . .

# Run stage
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "9000"]