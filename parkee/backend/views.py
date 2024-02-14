from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from rest_framework import status
from hashlib import sha256


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


@api_view(['POST'])
def postUser(request):
    data = request.data
    data.update({'password': sha256(data.get('password').encode('utf-8')).hexdigest()})
    serializer = UserSerializer(data=data)
    if not User.objects.filter(email=data.get('email')).exists():
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'error': 'Bad data'}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'error': 'User with this email already exists'}, status=status.HTTP_409_CONFLICT)


@api_view(['POST'])
def loginUser(request):
    data = request.data
    queryset = User.objects.filter(email=data.get('email'))
    if queryset.exists():
        user = queryset[0]
        if user.password == sha256(data.get('password').encode('utf-8')).hexdigest():
            return Response({'message': 'Logged in!'}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid Password'}, status=status.HTTP_403_FORBIDDEN)
    return Response({'error': 'No such user'}, status=status.HTTP_404_NOT_FOUND)
    