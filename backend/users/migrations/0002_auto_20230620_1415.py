# Generated by Django 3.2.19 on 2023-06-20 13:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shopuser',
            name='basket',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='orders.basket'),
        ),
        migrations.AlterField(
            model_name='shopuser',
            name='role',
            field=models.CharField(choices=[('moderator', 'Модератор'), ('vendor', 'Продавец'), ('customer', 'Покупатель')], default='customer', max_length=15),
        ),
    ]
