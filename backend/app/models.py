from django.db import models

# Create your models here

class AppModel(models.Model):
    username = models.CharField(max_length=30)
    flat_num = models.CharField(max_length=10)
    plate_num = models.CharField(max_length=20)
    pswd = models.CharField(max_length=50)

class VisitorModel(models.Model):
    username = models.CharField(max_length=30, default="None")
    plate_num = models.CharField(max_length=20, default="None")
    owner_flag = models.CharField(max_length=5, default="False")
    purpose_visit = models.CharField(max_length=40, default="None")
    time_visit = models.CharField(max_length=50, default="None")
    accepted = models.CharField(max_length=3, default="N/A")

