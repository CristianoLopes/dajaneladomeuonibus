# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-10-05 20:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0009_auto_20161005_2005'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='imagem',
            field=models.ImageField(blank=True, null=True, upload_to='media/'),
        ),
    ]
