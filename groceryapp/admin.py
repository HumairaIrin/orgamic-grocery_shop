from django.contrib import admin
from .models import Category

# Register your models here.
admin.site.register(Category)


from .models import Product
admin.site.register(Product)