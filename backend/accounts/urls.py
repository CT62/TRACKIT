from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CreateUserView, AuthCheckView

urlpatterns = [
    path('signup/', CreateUserView.as_view(), name="signup"),
    path('token/', TokenObtainPairView.as_view(), name="get_token"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path('user/', AuthCheckView.as_view(), name="check_user")
]
