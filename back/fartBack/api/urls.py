from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, GameViewSet, ProfileViewSet, PickViewSet, RegisterView, send_message, ChatHistory

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
    path('send_msg/', send_message.as_view(), name='send_msg'),
    path('chat_history/', ChatHistory.as_view(), name='chat_history'),
]
