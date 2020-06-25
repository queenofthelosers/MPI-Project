from rest_framework import serializers
from .models import *

class AppSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppModel
        fields = ('username', 'flat_num', 'plate_num', 'pswd')

class VisitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitorModel
        fields = ('username', 'plate_num', 'owner_flag', 'purpose_visit', 'time_visit', 'accepted')
