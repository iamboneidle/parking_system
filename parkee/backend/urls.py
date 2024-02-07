from django.urls import path
from .views import *


urlpatterns = [
    path('get-parking-grid', getParkingGrid),
    path('get-users', getUsers)
]
