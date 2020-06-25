from django.urls import path
from . import views
from .viewsets import *

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'checker', AppViewset, basename='check')
router.register(r'visitor', VisitorViewset, basename='visit')
urlpatterns = router.urls
