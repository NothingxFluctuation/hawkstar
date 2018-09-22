from django.db import models
from django.utils import timezone
from django.core.urlresolvers import reverse
from autoslug import AutoSlugField
from martor.models import MartorField
from django.contrib.auth.models import User
from django.conf import settings
from django.core.urlresolvers import reverse
# Create your models here.



class Writer(models.Model):
    name = models.CharField(max_length = 500, blank=True, null=True)
    dp = models.ImageField(upload_to='dps/',blank=True, null=True)
    bio = models.CharField(max_length=500, blank=True,null=True)
    created = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return self.name




class Category(models.Model):
    title = models.CharField(max_length=500, unique=True)
    slug = AutoSlugField(populate_from='title',unique=True)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now =True)

    def get_absolute_url(self):
        return reverse('show_cat',
                       args=[self.slug])
    def __str__(self):
        return self.title

class SubCategory(models.Model):
    category = models.ForeignKey(Category, related_name='sub_cat')
    title = models.CharField(max_length=500)
    slug = AutoSlugField(populate_from ='title')
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now = True)

    def get_absolute_url(self):
        return reverse('show_subcat',
                       args=[self.category.slug,
                             self.slug])
    def __str__(self):
        return self.title
    
class Article(models.Model):
    subcategory = models.ForeignKey(SubCategory, related_name='sub_articles')
    writer = models.ForeignKey(Writer, related_name='written_articles',null=True, blank=True)
    title = models.CharField(max_length=500, unique = True, blank=True, null=True)
    slug = AutoSlugField(populate_from='title',unique=True)
    featured_photo = models.ImageField(upload_to='featured_photos/',null=True)
    content = MartorField()
    page_views = models.IntegerField(default=0)
    editors_pick = models.BooleanField(default=False)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(auto_now=True)

    def get_absolute_url(self):
        return reverse('show_article',
                       args=[self.subcategory.category.slug,
                             self.subcategory.slug,
                             self.slug])
    

    def __str__(self):
        return self.title

    


class Video(models.Model):
    subcategory = models.ForeignKey(SubCategory, related_name='sub_videos')
    title = models.CharField(max_length=500)
    thumbnail = models.URLField()
    video_embed_link = models.URLField()
    created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title





class Newsletter(models.Model):
    email = models.CharField(max_length=100)
    created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.email

    
