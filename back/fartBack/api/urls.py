from django.urls import path, include
from rest_framework.routers import DefaultRouter
#import the view from .views

router = DefaultRouter()
#router.register(r'name', viewsetName) #make sure to register viewsets

urlpatterns = [
    path('', include(router.urls))
]
