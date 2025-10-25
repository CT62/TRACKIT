from django.db import models
from django.contrib.auth.models import User, AbstractUser


class CustomUser(AbstractUser):
    age = models.PositiveIntegerField(null=True, blank=False)
    goal_calories = models.PositiveIntegerField(null=True, blank=True)
    weight = models.PositiveIntegerField(null=True, blank=False)

    def __str__(self):
        return self.username
