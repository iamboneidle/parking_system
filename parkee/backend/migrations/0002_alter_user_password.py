# Generated by Django 5.0.1 on 2024-02-14 18:13

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("backend", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="password",
            field=models.CharField(default="", max_length=1000),
        ),
    ]