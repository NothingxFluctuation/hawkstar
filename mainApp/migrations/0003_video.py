# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0002_article_editors_pick'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=500)),
                ('thumbnail', models.URLField()),
                ('video_embed_link', models.URLField()),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('subcategory', models.ForeignKey(related_name='sub_videos', to='mainApp.SubCategory')),
            ],
        ),
    ]
