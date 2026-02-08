from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, GameViewSet, ProfileViewSet, PickViewSet, RegisterView

#import the view from .views

router = DefaultRouter()
#router.register(r'name', viewsetName) #make sure to register viewsets
router.register(r'teams', TeamViewSet)
router.register(r'games', GameViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'picks', PickViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'),
]
