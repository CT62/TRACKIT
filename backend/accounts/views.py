from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import login, logout
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import status, generics
from rest_framework.views import APIView

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class AuthCheckView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        return Response({
            "authenticated": True,
            "username": request.user.username
        })
