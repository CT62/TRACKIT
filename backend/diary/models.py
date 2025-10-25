from django.db import models
from django.conf import settings


class FoodLog(models.Model):
    food_name = models.CharField(max_length=100)
    calories = models.IntegerField()
    quantity = models.IntegerField()
    meal_type = models.TextField()
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.food_name
