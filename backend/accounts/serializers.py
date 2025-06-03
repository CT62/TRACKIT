from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from .models import FoodLog

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "first_name", "last_name"]
        extra_kwargs = {
            "password": {"write_only": True},
            "first_name": {"required": True},
            "last_name": {"required": True},
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class FoodLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodLog
        fields = ["id","title","content","created_at","author"]
        extra_kwargs = {"author": {"read_only": True}}
