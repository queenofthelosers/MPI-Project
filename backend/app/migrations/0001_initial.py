# Generated by Django 3.0.7 on 2020-06-21 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30)),
                ('flat_num', models.CharField(max_length=10)),
                ('plate_num', models.CharField(max_length=20)),
                ('pswd', models.CharField(max_length=50)),
            ],
        ),
    ]
