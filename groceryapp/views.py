from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

# Create your views here.
def main(request):
    return render(request, 'main.html')

def home(request):
    return render(request, 'home.html')

def products(request):
    return render(request, 'products.html')

def cart(request):
    return render(request, 'cart.html')

def about(request):
    return render(request, 'about.html')

def login(request):
    return render(request, 'login.html')


def adminLogin(request):
    msg = None
    if request.method == "POST":
        
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        try:
            if user.is_staff:
                msg = "User login successfully"
            else:
                msg = "try Invalid Credentials"
        except:
            msg = "Invalid Credentials"
    dic = {'msg': msg}
        
    return render(request, 'admin-login.html', dic)

