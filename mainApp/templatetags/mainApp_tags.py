from django import template
from django.utils.safestring import mark_safe
import markdown

register = template.Library()

@register.filter(name='markdown')
def markdown_format(text):
    return mark_safe(markdown.markdown(text))

@register.filter(name='reverse_order')
def reverse_order(r):
    return sorted(r, key=lambda instance:instance.created, reverse=True)
