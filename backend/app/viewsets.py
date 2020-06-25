from .serializers import *
from .models import *
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from django.http import Http404

class AppViewset(viewsets.ModelViewSet):
    serializer_class = AppSerializer
    queryset = AppModel.objects.all()

    @action(detail=False, methods=['post'])
    def check_plate(self, request, pk=None):
        if request.method == 'POST':
            plate_num = request.data["plate_num"]
            try:
                plate_entry = get_object_or_404(AppModel, plate_num=plate_num)
                field_name = 'username'
                field_value = getattr(plate_entry, field_name)
                serializer = AppSerializer(data=plate_entry.__dict__)
                if serializer.is_valid():
                    return Response(field_value, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Http404:
                return Response("Not found!", status=status.HTTP_201_CREATED)

class VisitorViewset(viewsets.ModelViewSet):
    serializer_class = VisitorSerializer
    queryset = VisitorModel.objects.all()

    @action(detail=False, methods=['post','get'])
    def visitor_status(self, request, pk=None):
        if request.method == 'POST':
            time_visit = request.data["time_visit"]
            plate_num = request.data["plate_num"]
            owner_flag = request.data["owner_flag"]
            if (owner_flag == "True"):
                username = request.data["username"]
            else:
                username = "None"
            data = VisitorModel.objects.create(username=username, plate_num=plate_num, owner_flag=owner_flag, time_visit=time_visit)
            serializer = VisitorSerializer(data=data.__dict__)
            if serializer.is_valid():
                return Response("Success", status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        if request.method == 'GET':
            num = len(VisitorModel.objects.all())-1
            if num>=0:
                visitor = VisitorModel.objects.all()[num]
                while num >= 0:
                    if (visitor.owner_flag == "True"):
                        num-=1
                    else:
                        break
                visitor = VisitorModel.objects.all()[num]
                serializer = VisitorSerializer(data=visitor.__dict__)
                if serializer.is_valid():
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response("No Visitors", status=status.HTTP_400_BAD_REQUEST)
            
    
    @action(detail=False, methods=['post'])
    def update_visitor(self, request, pk=None):
        if request.method == 'POST':
            num = len(VisitorModel.objects.all())
            visitor_entry = VisitorModel.objects.all()[num-1]
            username = request.data["username"]
            purpose_visit = request.data["purpose_visit"]
            visitor_entry.purpose_visit = purpose_visit
            visitor_entry.username = username
            visitor_entry.save()
            serializer = VisitorSerializer(data=visitor_entry.__dict__)
            if serializer.is_valid():
                return Response("Success", status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

