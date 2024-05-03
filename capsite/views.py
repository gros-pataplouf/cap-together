from django.shortcuts import redirect

def redirect_view(request):
    response = redirect('/home')
    return response
