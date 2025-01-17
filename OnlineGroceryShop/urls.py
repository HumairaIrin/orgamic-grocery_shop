"""
URL configuration for OnlineGroceryShop project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from groceryapp.views import * 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', main, name="main"),
    path('home/', home, name="home"),
    path('products/<int:pid>/', products, name="products"),
    path('product-detail/<int:pid>/', product_detail, name="product_detail"),
    path('cart/', cart, name="cart"),
    path('add-to-cart/<int:pid>/', addToCart, name="addToCart"),
    path('incredecre/<int:pid>/', incredecre, name="incredecre"),
    path('deletecart/<int:pid>/', deletecart, name="deletecart"),
    path('booking/', booking, name="booking"),
    path('my-order/', myOrder, name="myorder"),
    path('user-order-track/<int:pid>/', user_order_track, name="user_order_track"),
    path('change-order-status/<int:pid>/', change_order_status, name="change_order_status"),
    path('about/', about, name="about"),
    path('registration/', registration, name="registration"),
    path('login/', login, name="login"),
    path('update-profile/', updateProfile, name="update-profile"),
    path('change-password/', change_password, name="change-password"),
    path('logout/', logOut, name="logout"),
    path('admin-login/', adminLogin, name="admin-login"),
    path('admin-dashboard/', adminDashboard, name="admin-dashboard"),
    path('admin-home/', adminBase, name="admin-home"),
    path('add-category/', addCategory, name="add-category"),
    path('view-category/', viewCategory, name="view-category"),
    path('edit-category/<int:pid>/', editCategory, name="edit-category"),
    path('delete-category/<int:pid>/', deleteCategory, name="delete-category"),
    path('add-product/', addProduct, name='add-product'),
    path('view-product/', viewProduct, name='view-product'),
    path('edit-product/<int:pid>/', editProduct, name="edit-product"),
    path('delete-product/<int:pid>/', deleteProduct, name="delete-product"),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
