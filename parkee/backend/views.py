from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from rest_framework import status


@api_view(['GET'])
def getParkingGrid (request):
    parking = Parking.objects.all()
    serializer = ParkingSerializer(parking, many=True)
    if not serializer.data:
        return Response(data=serializer.data, status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def getUsers(request):
    users = User.objects.all()
    serializers = UserSerializer(users, many=True)
    if not serializers.data:
        return Response(data=serializers.data, status=status.HTTP_204_NO_CONTENT)
    return Response(data=serializers.data, status=status.HTTP_200_OK)
