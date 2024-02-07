from django.db import models
import string, random


def generateUniqueCode():
    length = 10

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if User.objects.filter(code=code).count() == 0:
            break
    
    return code


class Parking(models.Model):
    parking_lot = models.AutoField(primary_key=True)
    parking_lot_id = models.IntegerField(default = 0)
    is_available = models.BooleanField(default=True)
    start_reservation = models.DateTimeField(null=True, default=None, blank=True)
    stop_reservation = models.DateTimeField(null=True, default=None, blank=True)
    user_id = models.IntegerField(null=True, default=None, blank=True)


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    # user_unique_code = models.CharField(default=generateUniqueCode, unique=True, max_length=50)
    car_reg_number = models.CharField(default='', max_length=15)
    phone_number = models.CharField(default='', max_length=20)
    email = models.CharField(default='', max_length=50)
    name = models.CharField(default='', max_length=50)
    surname = models.CharField(default='', max_length=100)
    password = models.CharField(default='', max_length=50)
