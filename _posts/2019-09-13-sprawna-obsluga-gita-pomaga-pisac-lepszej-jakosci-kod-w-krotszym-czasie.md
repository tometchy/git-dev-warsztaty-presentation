---
layout: post
current: post
navigation: True
cover:  assets/images/code-quality.jpg
title: Git to narzędzie do edycji i zarządzania kodem - programuj szybciej i twórz mniej błędów
date: 2019-09-13 06:00:00
modified_date: 2019-09-13 06:00:00
tags: wprowadzenie
class: post-template
subclass: 'post tag-wprowdzenie'
author: tomasz-skraskowski
advantages-list-title: Lepsza jakość kodu<br class="co-zyskasz-line-break"> w krótszym czasie
advantages-list-cover: img/code-quality.jpg
---

Git wykracza poza wersjonowanie i kolaborację m.in. dając Ci wysokie poczucie kontroli sytuacji w kodzie oraz zestaw narzędzi do jego sprawnej edycji. 

Podać przykładu wpływu na czas implementajcji i jakość kodu
- Dodawanie nowego feature po kawałku
- Modyfikacja legacy code
- WIPowanie
- Kontrola nad toolami (rename, przenosiny pliku itd.) wystarczy mieć czysty index i można łatwo podejrzeć co tool zrobił i jedną komendą się z tego wycofać
- Porzucone koncepcje odkladać na branche, zamiast je wyrzucać. Na pewno jeszcze kiedś dojdziesz do wniosku że nie potrzebnie je porzuciłeś, albo będziesz chciał podejrzeć coś stamtąd. Kiedyś w tym momencie już byś ten kod miał usunięty.
- Wyższa jakość kodu dzięki większej świadomości zmian które się wprowadza, widoku big picture feature, mniejszym zamieszaniu i haosie, kontroli nad kodem.
- Z poziomu gita często usuwa się zmiany, czyli jakby edytuje się kod
- Niechcący zmieniony kod po wciśnięciu jakiegoś klawisza/skrótu klawiaturowego. Niebezpieczne zwłaszcza przy językach nie silnie typowanych, ale i przy silnie typowanych mogłoby to pozostać niezauważone. Gdy mamy mało zmian w working directory GITa, na bieżąco takie rzeczy wyłapujemy.
- Pokazać przykład jak ja się odnajnowałem z przenoszeniem listy kontaktów do panelu bocznego w projekcie który zupełnie nie znałem w technologi którą znam tylko w podstawowym stopniu, a w dodatku nie lubię. Zrobić screena gitk jakie były commity.
Jestem pewny, że wiele osób rypnęło by to w jednym wielkim commicie.
- Możliwość szybkiego przeglądania kodu ze straszych/atlernatywnych wersji, możliwość szybkiego usuwania wybranych commitów i sprawdzanie efektu, możliwość wyciachania którychś zmian z commita, możliwość rozłożenia commita -> niezastąpione przy szukaniu błędu którego trudno zdebugować a wiemy w jakim jest commicie, ale przy implementacji nowych rzeczy też potrafi bardzo usprawnić proces implementacji.


Call to action
W stylu "Jeżeli chcesz lepiej zrozumieć, to na warsztatach chętnie Ci to dokładnie wytłumaczymy", albo "Jeżeli czujesz, że nie wyciskasz z GITa istotnych optymalizacji pracy, na warsztatach pokażemy Ci drogę żeby to zmienić".
Call to action to link do index.html#kontakt