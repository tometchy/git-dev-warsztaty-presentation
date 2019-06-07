---
layout: page
current: tag 
title: Tagi z GitWarsztaty Blog
navigation: true
logo: 'assets/images/favicon.ico'
class: page-template
subclass: 'post page'
description: Lista wszystkich tagów z GitWarsztaty Blog.
---

<ul class="tags" style="list-style: none">
    {% for tag in site.tags %}
    {% assign t = tag | first %}
    {% assign posts = tag | last %}
    {% assign number = posts | size %}
    <li><a href="/tag/{{ t }}">{{t | upcase | replace:"-"," " }} ({{ number }} {% if number == 1 %}post{% else %}posts{% endif %})</a></li>
    {% endfor %}
</ul>

![Bilety z numerkami](/assets/images/tags.jpg "Przejrzyj wszystkie tagi")
