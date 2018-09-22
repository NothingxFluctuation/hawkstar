from django.contrib import admin
from .models import Category, SubCategory, Article, Writer, Video, Newsletter
from martor.widgets import AdminMartorWidget
from django.db import models

# Register your models here.
@admin.register(Writer)
class WriterAdmin(admin.ModelAdmin):
    list_display = ('name','bio','created')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title','created','updated')

@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ('category','title','created','updated')

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    #formfield_overrides = {
        #models.TextField: {'widget':AdminMartorWidget},
    #}
    list_display = ('title','subcategory','writer','created','updated')


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title','subcategory','created')
    

@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('email','created')
    
