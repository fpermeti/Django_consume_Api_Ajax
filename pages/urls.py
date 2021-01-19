from django.urls import path
from . import views

urlpatterns = [

    path('', views.base, name='base'),

    path('index', views.index, name='index'),

    path('info', views.info, name='info'),

    path('posts', views.posts, name='posts'),

    path('photos', views.photos, name='photos'),

]
