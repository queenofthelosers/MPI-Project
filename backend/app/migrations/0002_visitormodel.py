# Generated by Django 3.0.5 on 2020-06-24 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='VisitorModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(default='None', max_length=30)),
                ('plate_num', models.CharField(default='None', max_length=20)),
                ('purpose_visit', models.CharField(default='None', max_length=40)),
            ],
        ),
    ]