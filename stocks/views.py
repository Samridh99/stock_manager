from django.shortcuts import render
from rest_framework import viewsets
from .models import Stock
from .serializers import StockSerializer

class StockViewSet(viewsets.ModelViewSet):
  queryset = Stock.objects.all()
  serializer_class = StockSerializer

def index(request):
  return render(request, 'stocks/index.html')