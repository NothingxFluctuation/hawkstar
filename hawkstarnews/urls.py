"""hawkstarnews URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from mainApp import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^$',views.home, name='home'),
    url(r'^show',views.show_article),
    url(r'^article/(?P<cat>[-\w]+)/(?P<subcat>[-\w]+)/(?P<art>[-\w]+)/$',
        views.show_article,name='show_article'),
    url(r'^cat/(?P<cat>[-\w]+)/$',views.show_cat, name='show_cat'),
    url(r'^subcat/(?P<cat>[-\w]+)/(?P<subcat>[-\w]+)/$',views.show_subcat, name='show_subcat'),
    url(r'^search/$',views.search,name='search'),
    url(r'^privacy/$', views.privacy, name='privacy'),
    url(r'^terms/$', views.terms, name='terms'),
    url(r'^martor/',include('martor.urls')),
    url(r'^admin/', include(admin.site.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
