---
layout: post
current: post
navigation: True
cover:  assets/images/dvcs-vs-cvcs.jpg
title: DVCS vs CVCS - o co ta wojna?
date: 2019-09-01 06:00:00
modified_date: 2019-10-13 06:00:00
tags: wprowadzenie
class: post-template
subclass: 'post tag-wprowdzenie'
author: tomasz-skraskowski
advantages-list-title: DVCS<br class="co-zyskasz-line-break"> vs CVCS
advantages-list-cover: img/dvcs-vs-cvcs.jpg
---

Git jest zdecentralizowanym systemem kontroli wersji, a to znacząco wpływa na jakość pracy.

Kluczowa różnica polega na tym, że w przypadku centralnego systemu tylko jeden komputer (centralny serwer) ma 
wszystkie informacje (historię zmian, branche, tagi etc.), a użytkownicy mają jedynie ostatnią wersję kodu.

![CVCS vs DVCS](/assets/images/dvcs-vs-cvcs-diagram.jpg "Diagram porównujący DVCS do CVCS")

## CVCS a niewydajna praca
W przypadku scentralizowanego systeu kontroli wersji, użytkownik chcący otrzymać jakiekolwiek informacje, każdorazowo musi pytać serwer centralny, w dodatku zazwyczaj odbywa się to po sieci.
Jest to więc wysoce niewydajne, a w dodatku istnieje tak zwany _single point of failure_, więc w przypadku problemów z siecią lub serwerem, jesteś zablokowany.
Nie masz jak stworzyć commita albo sprawdzić potrzebnej informacji, co nierzadko wiąże się ze wstrzymaniem pracy.

Temat wydajności w najpopularniejszym zdecentralizowanym systemie kontroli wersji - Gicie, szczegółowo opisałem w [artykule o wpływie Gita na tempo i jakość pracy]({{ site.url }}/blog/sprawna-obsluga-gita-pomaga-pisac-lepszej-jakosci-kod-w-krotszym-czasie).

## CVCS a problemy bezpieczeństwa
Serwer centralny w rzadkich sytuacjach powoduje problemy bezpieczeństwa - chociaż mnie osobiście nigdy to nie spotkało, od znajomych znam 2 przypadki:
- Po pobraniu wersji z repozytorium, kod w niezrozumiały sposób się nie kompilował. Długo analiza wskazała problem - dysk komputera centralnego wyużył się, a uszkodzone sektory po cichu zaburzyły repozytorium. Backup serwera okazał się jedynym ratunkiem - w przypadku DVCS każdy użytkownik jest jednocześnie pełnym backupem repozytorium :)
- Nieuczciwy pracownik wszedł na serwer centralny i... zmienił wprowadzony przez siebie kod, pozbywając się wcześniejszej wersji. Przyznam, że trudno mi sobie to wyobrazić, nie mniej historię tę znam od osoby pracującej w firmie, w której taka sytuacja miała miejsce. W przypadku DVCS musiałby dostać się nie tylko na serwer centralny, ale również na komputery wszystkich współpracowników, co powinno skutecznie powstrzymać takie występki.

## Podsumowanie
Git jest dużo optymalniejszy od każdego scentralizowanego systemu kontroli wersji, np. od SVN'a - przez sam fakt rozproszenia repozytoriów po komputerach wszystkich użytkowników.

Jeżeli chcesz szerzej poznać tę i [inne zalety Gita]({{ site.url }}#co-zyskasz), a zamiast wysłuchiwać jedynie suchej teorii, spróbować wszystkiego w praktyce, [zapraszamy na GitWarsztaty]({{ site.url }}#kontakt), na których z pomocą trenerów przećwiczysz najważniejsze mechanizmy Gita.
