import os

# has to be run within an activated virtual environment and works with zsh / gnome-terminal


def main():
    os.system('gnome-terminal -- zsh -c "python manage.py runserver; exec zsh"')
    os.system('gnome-terminal -- zsh -c "cd js_css && npm run dev; exec zsh"')
    os.system('gnome-terminal -- zsh -c "cd js_css && npx tailwindcss -i ./src/input.css -o ./src/index.css --watch"')


if __name__ == "__main__":
    main()
