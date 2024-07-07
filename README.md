#CAP_TOGETHER

## A boilerplate repo for integrating django/wagtail cms with vite, react, tailwindcss, daisy.ui and gsap.

### Using the dev environment with hot reload:

- install python requirements in your virtual environment:
`pip install -r requirements.txt`
- install node modules:
`cd js_css && npm install`

- `python dev.py` launches the complete dev environment but requires gnome-terminal.
- alternatively:
```
python manage.py runserver
cd js_css
npm run dev
npx tailwindcss -i ./src/input.css -o ./src/index.css --watch
```
In dev mode with DEBUG True, django collects asset directly from the vite dev server localhost:5173 as configured in 
`capsite/index.html`. 

Further react components can be added into the django templates:
- add a <div id="my_react_component"></div>
- js_css/src/main.jsx can then be extended to render further react components into the django template.

###  Build for production
```
pip install -r requirements.txt
python manage.py migrate
cd js_css && npm install && npm run build && rm -rf node_modules
python manage.py collectstatic --noinput
gunicorn core.wsgi
```