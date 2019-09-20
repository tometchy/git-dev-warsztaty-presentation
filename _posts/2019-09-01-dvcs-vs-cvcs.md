---
layout: post
current: post
navigation: True
cover:  assets/images/dvcs-vs-cvcs.jpg
title: DVCS vs CVCS
date: 2019-09-01 06:00:00
modified_date: 2019-09-01 06:00:00
tags: wprowadzenie
class: post-template
subclass: 'post tag-wprowdzenie'
author: tomasz-skraskowski
advantages-list-title: DVCS<br class="co-zyskasz-line-break"> vs CVCS
---

Co oznacza, że Git jest zdecentralizowanym systemem kontroli wersji i co odróżnia go od scentralizowanego systemu kontroli wersji?

Kluczowa różnica polega na tym, że w przypadku centralnego systemu tylko jeden komputer (centralny serwer) posiada
wszystkie informacje (historię zmian, branche, tagi etc.) a użytkownicy mają jedynie ostatnią wersję kodu.

Użytkownik chcący dostać dodatkowe informacje każdorazowo musi pytać serwer centralny, w dodatku zazwyczaj odbywa się to po sieci.
Jest to więc wysoce niewydajne.

![CVCS vs DVCS](/assets/images/dvcs-vs-cvcs-diagram.jpg "Diagram porównujący DVCS do CVCS")
