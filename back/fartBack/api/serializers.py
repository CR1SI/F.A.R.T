from rest_framework import serializers
from .models import Game, Team, Pick, Profile, ChatMessage

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class GameSerializer(serializers.ModelSerializer):
    team1_info = TeamSerializer(source='team1', read_only=True)
    team2_info = TeamSerializer(source='team2', read_only=True)
    
    class Meta:
        model = Game
        fields = '__all__'


class PickSerializer(serializers.ModelSerializer):
    team_name = serializers.CharField(source='team_chosen.name', read_only=True)
    
    class Meta:
        model = Pick
        fields = '__all__'
        read_only_fields = ['user', 'created_at']

class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    win_percentage = serializers.ReadOnlyField()
    class Meta:
        model = Profile
        fields = ['id', 'username', 'display_name', 'pfp', 
            'pickem_wins', 'pickem_losses', 'pickem_points', 
            'win_percentage'
            ]

class ChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatMessage
        fields = '__all__'