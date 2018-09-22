from django.shortcuts import render, get_object_or_404, redirect
from .models import Article, Category, SubCategory, Video
from django.db.models import F

# Create your views here.




def home(request):
    q = request.GET.get('newsemail',False)
    if q:
        print(q)
    total_articles = Article.objects.all().order_by('-created')
    articles = total_articles[:16]
    cats = Category.objects.all()
    vids = Video.objects.all().order_by('-created')[:11]
    top_art = articles[:7]
    rem_art = articles[7:]
    trending = sorted(total_articles, key=lambda instance:instance.page_views, reverse=True)[:7]
    editpicks = Article.objects.filter(editors_pick=True).order_by('-created')
    hot_topics = total_articles[:3]
    Republican = SubCategory.objects.get(title='Republican')
    Headlines = SubCategory.objects.get(title='Headlines - World')
    hot_stories = SubCategory.objects.get(title='Hot Stories - Business')
    hollywood = SubCategory.objects.get(title='Hollywood')
    cricket = SubCategory.objects.get(title='Cricket')
    headlines_technology = SubCategory.objects.get(title='Headlines - Technology')
    smartphones = SubCategory.objects.get(title='Smartphones')
    xgroup = [Republican, Headlines, hot_stories, hollywood, cricket, headlines_technology, smartphones]
    return render(request,'home.html',{'top_art':top_art,
                                       'rem_art':rem_art,
                                       'editpicks':editpicks,
                                       'trending':trending,
                                       'vids':vids,
                                       'xgroup':xgroup,
                                       'hot_topics':hot_topics})


def show_article(request, cat, subcat, art):
    article = get_object_or_404(Article,
                                subcategory__slug=subcat,
                                slug=art)
    Article.objects.filter(id=article.id).update(page_views=F('page_views')+1)
    trending = Article.objects.filter(subcategory=article.subcategory)
    trending = sorted(trending, key=lambda instance:instance.page_views, reverse=True)[:4]
    hot_topics = Article.objects.all().order_by('-created')[:3]
    return render(request,'show_article.html',{'article':article,
                                               'trending':trending,
                                               'hot_topics':hot_topics})

def show_cat(request, cat):
    cat = Category.objects.get(slug=cat)
    subcats = cat.sub_cat.all()
    arts = Article.objects.filter(subcategory__in=subcats)
    trending = sorted(arts, key=lambda instance:instance.page_views, reverse=True)[:4]
    arts6 = arts[:6]
    artsrem = arts[6:]
    vids = Video.objects.filter(subcategory__in=subcats).order_by('-created')[:4]
    hot_topics = Article.objects.all().order_by('-created')[:3]
    return render(request,'show_cat.html',{'cat':cat,'arts6':arts6,
                                           'artsrem':artsrem,'subcats':subcats,
                                           'trending':trending,
                                           'vids':vids,
                                           'hot_topics':hot_topics})


def show_subcat(request, cat,subcat):
    subcat = SubCategory.objects.get(slug=subcat,
                                     category__slug=cat)
    arts = Article.objects.filter(subcategory=subcat)
    arts6 = arts[:6]
    artsrem = arts[6:]
    vids = Video.objects.filter(subcategory=subcat).order_by('-created')[:4]
    trending = sorted(arts, key=lambda instance:instance.page_views, reverse=True)[:4]
    hot_topics = Article.objects.all().order_by('-created')[:3]
    return render(request,'show_subcat.html',{'subcat':subcat,
                                              'arts':arts,
                                              'arts6':arts6,
                                              'artsrem':artsrem,
                                              'trending':trending,
                                              'vids':vids,
                                              'hot_topics':hot_topics})



def search(request):
    q = request.GET['q']
    if q:
        arts_list = Article.objects.filter(title__icontains=q)
        articles = Article.objects.all()
        trending = sorted(articles, key=lambda instance:instance.page_views, reverse=True)[:4]
        vids = Video.objects.order_by('-created')[:4]
        hot_topics = Article.objects.all().order_by('-created')[:3]
        return render(request,
                      'search_results.html',
                      {'q':q,
                       'arts_list':arts_list,
                       'trending':trending,
                       'vids':vids})
    else:
        return redirect('home')
    
                      


def privacy(request):
    return render(request, 'privacy.html')

def terms(request):
    return render(request, 'terms.html')

