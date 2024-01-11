
from django.urls import path
from .views import *

urlpatterns = [
    path('', getNotes, name='Home'),
    path('postNote', postNote, name='postNote'),
    path('deleteNote/<id>', deleteNote, name='deleteNote'),
]
