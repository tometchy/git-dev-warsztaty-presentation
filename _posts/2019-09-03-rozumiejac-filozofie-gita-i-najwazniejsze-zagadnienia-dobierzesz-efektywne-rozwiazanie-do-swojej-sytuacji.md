---
layout: post
current: post
navigation: True
cover:  assets/images/filozofia-gita.jpg
title: Rozumiejąc filozofię Gita i najważniejsze zagadnienia dobierzesz efektywne rozwiązanie do swojej sytuacji
date: 2019-09-03 06:00:00
modified_date: 2019-09-03 06:00:00
tags: wprowadzenie
class: post-template
subclass: 'post tag-wprowdzenie'
author: tomasz-skraskowski
advantages-list-title: Filozofia<br class="co-zyskasz-line-break"> Gita
advantages-list-cover: img/filozofia-gita.jpg
---

Znajomość filozofii Gita i podstawowych komend jest kluczowa do optymalnej pracy.

Na wstępie, ważne jest aby załapać, że [Git jest zdecentralizowany]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna).

Co to właściwie oznacza? Jeżeli dopiero zaczynasz korzystanie z systemów kontroli wersji, może nie być to dla Ciebie takie zaskakujące, jeżeli jednak przesiadasz się ze scentralizowanego systemu kontroli wersji np. _SVN_, może to być nieco zaskakujące.
W DVCS całość instalujesz u siebie na komputerze. Czyli wszystko to co wykonywało się np. w _Subversion_ zdalnie, łącząc się do serwera systemu kontoli wersji (zazwyczaj przez sieć), tutaj odbywa się lokalnie.

A co w Gicie odbywa się zdalnie? Jedynie synchronizowanie ropozytoriów między sobą, czyli np. ja mam swoje repozytorium, którego odpowiednik jest na serwerze Gitlab, którego odpowiednik ma również kolega w pracy, więc ja po dodaniu nowych commitów z kodem zscynchronizuję się z Gitlabem (uaktualnię go), a następnie zsynchronizuje się z Gitlabem kolega, który to z kolei uaktualni swoje repozytorium.

Coś o tym, że rebasujemy zawsze siebie.