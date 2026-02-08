from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Team(models.Model):
    name = models.CharField(max_length=50)
    shortName = models.CharField(max_length=10)
    logo_url = models.URLField(blank=True, null=True)
    players = models.JSONField(default=list, blank=True)
    losses = models.PositiveIntegerField(default=0)
    wins = models.PositiveIntegerField(default=0)
    points = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.name

class Game(models.Model):
    team1 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="games_as_team1")
    team2 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="games_as_team2")
    score_team1 = models.PositiveIntegerField(default=0)
    score_team2 = models.PositiveIntegerField(default=0)
    game_played = models.BooleanField(default=False)
    date_chosen = models.BooleanField(default=False)
    description = models.TextField(blank=True, null=True)
    opponents_selected = models.BooleanField(default=False)
    
    vod_link = models.URLField(blank=True, null=True)
    date = models.DateTimeField(blank=True, null=True)
    
    def __str__(self):
        game_date = self.date.strftime('%Y-%m-%d') if self.date else "TBD"
        return f"{self.team1} vs {self.team2} on ({game_date})"

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    pfp = models.ImageField(upload_to='pfps/', default='default_pfp.jpg')
    pickem_wins = models.PositiveIntegerField(default=0)
    pickem_losses = models.PositiveIntegerField(default=0)
    pickem_points = models.PositiveIntegerField(default=0)
    display_name = models.CharField(max_length=50, blank=True)
    
    def __str__(self):
        return f"{self.user.username}'s Profile"
    
    @property
    def win_percentage(self):
        total = self.pickem_wins + self.pickem_losses
        if total == 0:
            return 0
        return (self.pickem_wins / total) * 100

class Pick(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    team_chosen = models.ForeignKey(Team, on_delete=models.CASCADE)
    
    predicted_score_team1 = models.PositiveIntegerField(default=0)
    predicted_score_team2 = models.PositiveIntegerField(default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('user', 'game')
    
    def __str__(self) -> str:
        return f"{self.user.username} predicted {self.predicted_score_team1}-{self.predicted_score_team2} for {self.game}"

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, display_name=instance.username)

@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()