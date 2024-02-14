from django.urls import path
from .views import *


urlpatterns = [
    path('get-parking-grid', getParkingGrid),
    path('get-users', getUsers),
    path('post-user', postUser),
    path('login-user', loginUser)
]
