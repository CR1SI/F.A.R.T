from rest_framework import serializers
from .models import Game, Team, Pick, Profile

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
    class Meta:
        model = Pick
        fields = '__all__'
        read_only_fields = ['user']

class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    class Meta:
        model = Profile
        fields = '__all__'