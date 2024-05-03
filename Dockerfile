FROM --platform=$BUILDPLATFORM python:3.11-slim-bookworm AS builder

WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt


RUN mkdir -p /app/static
COPY . /app/
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "core.wsgi"]