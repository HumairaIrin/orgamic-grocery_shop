from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages
from .models import Category
from .models import Product

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

def adminBase(request):
    return render(request, 'admin-base.html')

def adminDashboard(request):
    return render(request, 'admin-dashboard.html')






def adminLogin(request):
    msg = None
    if request.method == "POST":
        
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        try:
            if user.is_staff:
                msg = "User login successfully"
                dic = {'msg': msg}
                return redirect('/admin-dashboard')
            else:
                msg = "try Invalid Credentials"
        except:
            msg = "Invalid Credentials"
    dic = {'msg': msg}   
    return render(request, 'admin-login.html', dic)








def addCategory(request):
    if request.method == "POST":
        name = request.POST['name']
        Category.objects.create(name=name)
        messages.success(request, "Category added")
        return redirect('view-category')
    return render(request, 'add-category.html', locals())






def viewCategory(request):
    category = Category.objects.all()
    return render(request, 'view-category.html', locals())






def editCategory(request, pid):
    category = Category.objects.get(id=pid)
    if request.method == "POST":
        name = request.POST['name']
        category.name = name
        category.save()
        msg = "Category Updated"
        return redirect('view-category')
    return render(request, 'edit-category.html', locals())





def deleteCategory(request, pid):
    category = Category.objects.get(id=pid)
    category.delete()
    return redirect('view-category')






def addProduct(request):
    category = Category.objects.all()
    if request.method == "POST":
        name = request.POST['name']
        price = request.POST['price']
        cat = request.POST['category']
        discount = request.POST['discount']
        desc = request.POST['desc']
        image = request.FILES['image']
        catobj = Category.objects.get(id=cat)
        Product.objects.create(name=name, price=price, discount=discount, category=catobj, description=desc, image=image)
        messages.success(request, "Product added")
    return render(request, 'add-product.html', locals())






def viewProduct(request):
    product = Product.objects.all()
    return render(request, 'view-product.html', locals())