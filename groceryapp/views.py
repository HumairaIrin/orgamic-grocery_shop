from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages
from .models import *

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






def editProduct(request, pid):
    product = Product.objects.get(id=pid)
    category = Category.objects.all()
    if request.method == "POST":
        name = request.POST['name']
        price = request.POST['price']
        cat = request.POST['category']
        discount = request.POST['discount']
        desc = request.POST['desc']
        try:
            image = request.FILES['image']
            product.image = image
            product.save()
        except:
            pass
        catobj = Category.objects.get(id=cat)
        Product.objects.filter(id=pid).update(name=name, price=price, discount=discount, category=catobj, description=desc)
        messages.success(request, "Product Updated")
        return redirect('view-product')
    return render(request, 'edit-product.html', locals())




def deleteProduct(request, pid):
    product = Product.objects.get(id=pid)
    product.delete()
    messages.success(request, "Product Deleted")
    return redirect('view-product')



def registration(request):
    if request.method == "POST":
        name = request.POST['user_name']
        email = request.POST['email']
        password = request.POST['password']
        address = request.POST['address']
        mobile = request.POST['mobile']
        user = User.objects.create_user(email=email, username=name, password=password)
        UserProfile.objects.create(user=user, mobile=mobile, address=address)
        messages.success(request, "Registration Successful")
        pass
    return render(request, 'login.html', {'sign_up_mode': True})





def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            messages.success(request, "User login successfully")
            return redirect('home')
        else:
            messages.success(request,"Invalid Credentials")
    return render(request, 'login.html', locals())