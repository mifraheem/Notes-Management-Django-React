from django.db import models

# Create your models here.


class Note(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=80)
    content = models.TextField(max_length=300)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
