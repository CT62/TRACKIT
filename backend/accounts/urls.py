from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CreateUserView, AuthCheckView, FoodLogCreate, FoodLogDetail, FoodLogDelete, me

urlpatterns = [
    path('signup/', CreateUserView.as_view(), name="signup"),
    path('token/', TokenObtainPairView.as_view(), name="get_token"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path('user/', AuthCheckView.as_view(), name="check_user"),
    path('foodlog/', FoodLogCreate.as_view(), name="foodlog"),
    path('foodlog/<int:pk>/', FoodLogDetail.as_view(), name="foodlog_detail"),
    #path('foodlog/<int:pk>/update/', FoodLogUpdate.as_view(), name="foodlog_update")
    path('foodlog/<int:pk>/delete/', FoodLogDelete.as_view(), name="foodlog_delete"),
    path('me/',me,name="me"),

]
