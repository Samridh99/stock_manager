# Stock Manager

This is a simple full stack web application that allows users to manage a list of stocks. The application includes both backend and frontend features.

## Features

- Add new stocks
- View existing stocks
- Edit stock entries
- Delete stock entries

## Technologies Used

- Backend: Django
- Frontend: HTML, CSS, JavaScript
- Database: PostgreSQL
- API: Django Rest Framework
- Styling: Bootstrap

## Setup and Installation

1. Clone the repository:
git clone https://github.com/yourusername/stock-manager.git
cd stock-manager


2. Create a virtual environment and activate it:
python -m venv venv
source venv/bin/activate  # On Windows, use venv\Scripts\activate


3. Install the required packages:
pip install -r requirements.txt


4. Set up the PostgreSQL database and update the `DATABASES` configuration in `stock_manager/settings.py` with your database credentials.

5. Run migrations:
python manage.py makemigrations
python manage.py migrate


6. Create a superuser (optional):
python manage.py createsuperuser


7. Run the development server:
python manage.py runserver


8. Open your web browser and navigate to `http://localhost:8000` to use the application.

## Project Structure

- `stock_manager/`: Main project directory
  - `settings.py`: Project settings
  - `urls.py`: Main URL configuration
- `stocks/`: Main application directory
  - `models.py`: Database models
  - `serializers.py`: API serializers
  - `views.py`: Views and API viewsets
  - `urls.py`: URL patterns for the stocks app
  - `static/`: Static files (CSS, JavaScript)
  - `templates/`: HTML templates
- `manage.py`: Django management script
- `requirements.txt`: List of Python dependencies

