from django.db import models


class Parking(models.Model):
    parking_lot_id = models.AutoField(primary_key=True)
    is_available = models.BooleanField(default=True)
    start_reservation = models.DateTimeField(null=True)
    stop_reservation = models.DateTimeField(null=True)
    user_id = models.IntegerField(null=True)


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    car_reg_number = models.CharField(default='', max_length=15)
    phone_number = models.CharField(default='', max_length=20)
    email = models.CharField(default='', max_length=50)
    name = models.CharField(default='', max_length=50)
    surname = models.CharField(default='', max_length=100)
    password = models.CharField(default='', max_length=50)
