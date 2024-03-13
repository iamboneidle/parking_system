from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from rest_framework import status
from hashlib import sha256


@api_view(['GET'])
def getParkingGrid(request):
    parking = Parking.objects.all()
    serializer = ParkingSerializer(parking, many=True)
    if not serializer.data:
        return Response(data=serializer.data, 
                        status=status.HTTP_204_NO_CONTENT)
    
    return Response(data=serializer.data, 
                    status=status.HTTP_200_OK)


@api_view(["GET"])
def getUsers(request):
    users = User.objects.all()
    serializers = UserSerializer(users, many=True)
    if not serializers.data:
        return Response(data=serializers.data, 
                        status=status.HTTP_204_NO_CONTENT)
    
    return Response(data=serializers.data, 
                    status=status.HTTP_200_OK)


@api_view(['POST'])
def postUser(request):
    data = request.data
    data.update({'password': sha256(data.get('password').encode('utf-8')).hexdigest()})
    user = UserSerializer(data=data)
    if not User.objects.filter(email=data.get('email')).exists():
        if user.is_valid():
            user.save()
            return Response(data=user.data, 
                            status=status.HTTP_200_OK)
        
        return Response(data={'error': 'Bad data'}, 
                        status=status.HTTP_400_BAD_REQUEST)
    
    return Response(data={'error': 'User with this email already exists'}, 
                    status=status.HTTP_409_CONFLICT)


@api_view(['POST'])
def loginUser(request):
    data = request.data
    queryset = User.objects.filter(email=data.get('email'))
    if queryset.exists():
        user = queryset[0]
        if user.password == sha256(data.get('password').encode('utf-8')).hexdigest():
            return Response(data={'message': 'Logged in!'}, 
                            status=status.HTTP_200_OK)
        
        return Response(data={'error': 'Invalid Password'}, 
                        status=status.HTTP_403_FORBIDDEN)
    
    return Response(data={'error': 'No such user'}, 
                    status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def reserveParkingLot(request):
    data = request.data
    queryset = User.objects.filter(email=data.get('email'))
    if queryset.exists():
        lot = Parking.objects.filter(parking_lot_id=data.get('id'))[0]
        print(lot)
        if lot.is_available == True:
            lot.user_id = queryset[0].user_id
            lot.start_reservation = data.get('time_start')
            lot.stop_reservation = data.get('time_stop')
            lot.is_available = False
            lot.save(update_fields=['user_id', 'start_reservation', 'stop_reservation', 'is_available'])
            return Response({'message': 'Reserved!'} ,status=status.HTTP_200_OK)

        return Response(data={'error': f'Lot {lot.parking_lot_id} is unavailable'}, 
                        status=status.HTTP_403_FORBIDDEN)
    
    return Response(data={'error': f"User with {data.get('email')} email doesn't exist"}, 
                    status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def relieveParkingLot(request):
    data = request.data
    try:
        lot = Parking.objects.get(parking_lot_id=data.get('id'))
        lot.user_id = None
        lot.is_available = True
        lot.stop_reservation = None
        lot.start_reservation = None
        lot.save(update_fields=['user_id', 'start_reservation', 'stop_reservation', 'is_available'])
        return Response(data={'message': f'Lot {lot.parking_lot_id} is now available!'}, 
                        status=status.HTTP_200_OK)
    except Parking.DoesNotExist:
        return Response(data={'error': 'Lot not found'}, 
                        status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response(data={'error': f'We have some troubles on our side: {str(e)}'}, 
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)
