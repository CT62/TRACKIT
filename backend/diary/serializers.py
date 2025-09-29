from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import FoodLog

class FoodLogSerializer(serializers.ModelSerializer):
    author_username = serializers.CharField(source='author.username', read_only=True)

    class Meta:
        model = FoodLog
        fields = ["id", "food_name", "calories", "quantity", "meal_type", "notes", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
    
    def validate_calories(self, value):
        if value is not None and value < 0:
            raise serializers.ValidationError("Calories cannot be negative")
        return value
