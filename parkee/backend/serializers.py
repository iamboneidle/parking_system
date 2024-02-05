from rest_framework import serializers
from .models import User, Parking


class ParkingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parking
        fields = ('parking_lot_id', 'is_available',
                   'start_reservation', 'stop_reservation', 'user_id')
        

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'car_reg_number', 'phone_number',
                   'email', 'name', 'surname', 'password')
