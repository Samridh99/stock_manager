from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'stocks', views.StockViewSet)

urlpatterns = [
  path('', views.index, name='index'),
  path('api/', include(router.urls)),
]