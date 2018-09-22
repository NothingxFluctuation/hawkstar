# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import autoslug.fields
import martor.models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('title', models.CharField(unique=True, max_length=500, blank=True, null=True)),
                ('slug', autoslug.fields.AutoSlugField(unique=True, editable=False, populate_from='title')),
                ('featured_photo', models.ImageField(null=True, upload_to='featured_photos/')),
                ('content', martor.models.MartorField()),
                ('page_views', models.IntegerField(default=0)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('title', models.CharField(unique=True, max_length=500)),
                ('slug', autoslug.fields.AutoSlugField(unique=True, editable=False, populate_from='title')),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('title', models.CharField(max_length=500)),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='title')),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('category', models.ForeignKey(related_name='sub_cat', to='mainApp.Category')),
            ],
        ),
        migrations.CreateModel(
            name='Writer',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(null=True, max_length=500, blank=True)),
                ('dp', models.ImageField(null=True, blank=True, upload_to='dps/')),
                ('bio', models.CharField(null=True, max_length=500, blank=True)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.AddField(
            model_name='article',
            name='subcategory',
            field=models.ForeignKey(related_name='sub_articles', to='mainApp.SubCategory'),
        ),
        migrations.AddField(
            model_name='article',
            name='writer',
            field=models.ForeignKey(related_name='written_articles', to='mainApp.Writer', blank=True, null=True),
        ),
    ]
