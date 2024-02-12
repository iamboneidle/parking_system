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


@api_view(["POST"])
def postUser(request):
    data = request.data
    serializer = UserSerializer(data=data)

    if not User.objects.filter(email=data.get('email')).exists():
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'error': 'Bad data'}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'error': 'User with this email already exists'}, status=status.HTTP_409_CONFLICT)
    