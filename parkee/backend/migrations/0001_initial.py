# Generated by Django 5.0.1 on 2024-02-05 18:04

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Parking",
            fields=[
                ("parking_lot_id", models.AutoField(primary_key=True, serialize=False)),
                ("is_available", models.BooleanField(default=True)),
                ("start_reservation", models.DateTimeField(null=True)),
                ("stop_reservation", models.DateTimeField(null=True)),
                ("user_id", models.IntegerField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                ("user_id", models.AutoField(primary_key=True, serialize=False)),
                ("car_reg_number", models.CharField(default="", max_length=15)),
                ("phone_number", models.CharField(default="", max_length=20)),
                ("email", models.CharField(default="", max_length=50)),
                ("name", models.CharField(default="", max_length=50)),
                ("surname", models.CharField(default="", max_length=100)),
                ("password", models.CharField(default="", max_length=50)),
            ],
        ),
    ]
