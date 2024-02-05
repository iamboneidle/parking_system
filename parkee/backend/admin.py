from django.contrib import admin
from .models import User, Parking


admin.site.register(User)
admin.site.register(model_or_iterable=Parking)
