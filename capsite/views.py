from django.shortcuts import redirect
from django.http import HttpResponse


def redirect_view(request):
    response = redirect('/home')
    return response


def healthcheck(request):
    return HttpResponse("Healthcheck successful")
