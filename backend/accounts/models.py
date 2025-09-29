from django.db import models
from django.contrib.auth.models import User


class CustomUser(AbstractUser):
    age = models.PositiveIntegerField(null=True, blank=True)
    goal_calories = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return self.username
