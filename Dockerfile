FROM --platform=$BUILDPLATFORM nikolaik/python-nodejs:latest AS builder

WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt


RUN mkdir -p /app/static
COPY . /app/
RUN python manage.py migrate
RUN cd js_css && npm install && npm run build && rm -rf node_modules
RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "core.wsgi"]