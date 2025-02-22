from django.contrib import admin
from django.urls import path, include
from account import views


urlpatterns = [
    path('account/', include('account.urls')),
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
]
