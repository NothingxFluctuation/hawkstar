# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='editors_pick',
            field=models.BooleanField(default=False),
        ),
    ]
