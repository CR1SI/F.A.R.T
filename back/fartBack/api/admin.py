from django.contrib import admin
from .models import Team, Game, Profile, Pick, ChatMessage

#from .models import #database name
#admin.site.register(database name)

# Register your models here.
admin.site.register(Team)
admin.site.register(Game)
admin.site.register(Profile)
admin.site.register(Pick)
admin.site.register(ChatMessage)