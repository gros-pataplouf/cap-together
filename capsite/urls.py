from django.urls import path
from . import views

urlpatterns = [path('', views.redirect_view, name="redirect_view")]
