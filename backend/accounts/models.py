from django.db import models
from django.contrib.auth.models import User


class FoodLog(models.Model):
    food_name = models.CharField(max_length=100)
    calories = models.IntegerField()
    quantity = models.IntegerField()
    meal_type = models.TextField()
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
