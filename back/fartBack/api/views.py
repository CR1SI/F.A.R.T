from rest_framework import viewsets, status
from rest_framework.decorators import action
from .models import Team, Game, Profile, Pick, ChatMessage
from .serializers import TeamSerializer, GameSerializer, ProfileSerializer, PickSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from pusher import Pusher
from django.views.decorators.cache import never_cache
from django.utils.decorators import method_decorator

# Create your views here.
class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAuthenticated]
    
    @action(detail=False, methods=['get', 'patch'])
    def me(self, request):
        profile = Profile.objects.get(user=request.user)
        if(request.method == 'PATCH'):
            serializer = self.get_serializer(profile, data = request.data, partial = True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = self.get_serializer(profile)
        return Response(serializer.data)

class PickViewSet(viewsets.ModelViewSet):
    queryset = Pick.objects.all()
    serializer_class = PickSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        
        if not username or not password:
            return Response({'error': 'Username and password required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password, email=email)
        
        token, created = Token.objects.get_or_create(user=user)
        
        return Response({'token': token.key}, status=status.HTTP_201_CREATED)


pusher_client = Pusher(
    app_id = '2113006',
    key = 'c2603b982d0221f74186',
    secret = '25f2cb2a6c87d170f1ad',
    cluster = 'us2',
    ssl=True,
)
class send_message(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        profile = request.user.profile
        content = request.data.get('content')
        
        if not content:
            return Response({'error': 'Content is required'}, status=400)
        
        msg = ChatMessage.objects.create(profile=profile, content=content)
        
        pusher_client.trigger('fart-chat', 'chat-event', {
            'profile': profile.display_name,
            'pfp': request.build_absolute_uri(profile.pfp.url),
            'message': content,
            'timestamp': msg.timestamp.isoformat()
        })
        
        return Response({'status': 'sent'})

@method_decorator(never_cache, name='dispatch')
class ChatHistory(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        messages = ChatMessage.objects.all().order_by('-timestamp')[:50]
        data = []
        for msg in messages:
            data.append({
                'username': msg.profile.display_name,
                'pfp': request.build_absolute_uri(msg.profile.pfp.url),
                'message': msg.content,
                'timestamp': msg.timestamp
            })
        return Response(data[::-1])