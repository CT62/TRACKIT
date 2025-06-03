from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import login, logout
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from .serializers import UserSerializer, FoodLogSerializer
from rest_framework import status, generics
from rest_framework.views import APIView

class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    def current_user(self):
        print(self.request.user)

class AuthCheckView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "authenticated": True,
            "username": request.user.username
        })

class FoodLogCreate(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class FoodLogDelete(generics.DestroyAPIView):
    serializer_class = FoodLogSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

class FoodLogDetail(generics.RetrieveUpdateAPIView):
    serializer_class = FoodLogSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

