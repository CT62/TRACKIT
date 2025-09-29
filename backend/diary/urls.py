from django.urls import path
from . import views

urlpatterns = [
    path('create/', FoodLogCreate.as_view(), name="signup"),
    path('delete/', FoodLogDelete.as_view(), name="signup"),
    path('detail/', FoodLogDetail.as_view(), name="signup"),
]
