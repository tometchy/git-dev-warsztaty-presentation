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

System kontroli wersji przede wszystkim służy do utrzymywania zmian w kodzie i do współpracy pomiędzy programistami.
Okazuje się jednak, że Git oferuje znacznie więcej, niż tylko te 2 podstawowe funkcje, a ma wpływ na tempo pracy, a nawet na jej jakość!
Niejednokrotnie spotkałem się z zarzutem, że to stwierdzenie jest przesadzone, lub wręcz nieprawdziwe.
Jednakże dziwnym zbiegiem okoliczności, wyłącznie od osób, które Gita znają tylko powierzchownie i w zasadzie nie czują większej różnicy
pomiędzy tym, czy innym systemem kontroli wersji.

W tym artykule chciałbym uzasadnić swoje stanowisko na ten temat :)

## Małe i czyste commity
Ponieważ mamy nieograniczoną możliwość tworzenia commitów, które nie muszą wylądować od razu na produkcyjnym branchu, nowe funkcjonalności tworzymy _po kawałku_.
Cały czas obieramy sobie kurs: _jaką małą zmianę prowadzącą do celu w tym momencie wprowadzam_, a pomyślną realizację wieńczymy commitem.
W ten sposób zamykamy te zmiany jako zakończony i zatwierdzony etap i skupiamy się na kolejnym.
To zmniejsza efekt tak zwanego _multitaskingu_, o którym dowiedziono wielokrotnie, że jest niekorzystny.
Skupienie się na jednej rzeczy, u zdecydowanej większości ludzi, daje dużo optymalniejszy rezultat, niż robienie kilku rzeczy naraz.
Żeby nie być gołosłownym - w tym <a href="http://www.rozwojowiec.pl/3217/zwielokrotnianie-umyslu/" target="_blank">video z vloga Rozwojowiec</a>, Damian Redmer szerzej to objaśnia, podpierając badaniami naukowymi.

A co jeżeli commit, który już zatwierdziliśmy, okazał się złym kierunkiem? To nic! W każdej chwili możemy go zmodyfikować lub nawet usunąć całkowicie.

## Wipowanie
Czasem jest tak, że tworzymy zmiany, 
które jeszcze nie nadają się do zamknięcia w sensownego commita, ponieważ nie są jeszcze wystarczająco dokończone, ale wiemy już, że są dobre i nie chcemy ich niechcący stracić.  
Co robić w takim wypadku?
Tak czy siak, stworzyć commita, tylko w tej chwili nie skupiać się na nadaniu poprawnego commit message - tego commita później złączymy z innym
i dopiero wtedy nadamy poprawny tytuł i opis. Zazwyczaj takie commity nazywa się _WIP_ (_Work In Progress_). Sam często korzystam z tej praktyki, nawet stworzyłem sobie w Gicie alias
usprawniający _Wipowanie_ -
`wip = !git add --all && git commit -m "WIP"` -
wystarczy więc, że wpiszę w konsoli _git wip_ i pracuję dalej, wiedząc, że to, co już napisałem, jest bezpiecznie przechowane :)

## Kontrola nad sytuacją w IDE
Dzięki temu, że na bieżąco robimy commity, cały czas mamy pogląd na sytuację w IDE i jesteśmy świadomi każdej zmiany, którą wprowadzamy.

### Big picture zmian
Patrząc na ścieżki plików, które zmodyfikowaliśmy, widzimy _z lotu ptaka_ jak wygląda nasza sytuacja, nie musimy za każdy razem sprawdzać, co dokładnie _wydarzyło się_ w danym pliku.
Informacja o tym, jaki to plik i w jakim katalogu się znajduje, jest wystarczająca gdy, chcemy jedynie _rzucić okiem_ na stan working directory.
Daje to duże poczucie kontroli nad zmianami i zmniejsza zamieszanie, a jak wiadomo w trakcie zamieszania nie trudno o to, żeby do commita _wkradło się_ coś niechcący.

### Kontrola nad zmianami wprowadzanymi przez toole
Z Gitem przychodzi jeszcze jedna, bardzo wygodna praktyka - ilekroć zlecamy narzędziom większe zadanie, które ma wpływ na cały nasz kod - np. dostosowanie ścieżek, przestrzeni nazw, zmiana nazwy typów używanych w wielu miejscach itp.
Zanim wywołasz takie zmiany - najpierw dokończ to, nad czym pracowałeś w danej chwili, a duże zadanie toolowi zleć, dopiero gdy etap pracy zakończysz commitem.
W ten sposób zobaczysz co dokładnie tool zrobił, czy **dokładnie takiego efektu się spodziewałeś**, a jeżeli tool się nie sprawdził, za pomocą jednego polecenia możesz wycofać to, co wprowadził.

Czasem jest też tak, że zmienimy coś w kodzie niechcący i nawet tego nie zauważymy - np. nieświadomie wywołując jakiś skrót klawiszowy.
Jest to niebezpieczne zwłaszcza w przypadku języków luźno typowanych, ale również przy silnie typowanych, zdarza się, że taka zmiana pozostaje niezauważona.
Gdy często robimy małe commity, to zazwyczaj mamy mało zmian w working directory, dzięki czemu na bieżąco niepożądane zmiany wyłapujemy.

## Eksplorowanie kodu
Gdy musimy wprowadzić zmiany w kodzie, który jeszcze nie znamy dobrze, sprawne wspomaganie się Gitem robi ogromną różnicę, szczególnie jeżeli mamy do czynienia z kodem średniej jakości.
Jako przykład podam sytuację sprzed kilku tygodni ze swojej pracy.  
Dołączyłem do projektu, którego zupełnie nie znałem, doprowadzonego niestety do dość poplątanego stanu, tworzonego w technologii, którą znam jedynie w stopniu podstawowym (WPF), w dodatku, której nie lubię... 
Miałem za zadanie przenieść funkcjonalność książki kontaktów z jednej części aplikacji, do nowej - wysuwanego panelu. Zaznaczę, że był to dość kruchy kod - zmiany w jednym miejscu potrafiły popsuć aplikację w zupełnie innym, a potem potrzeba było czasu, żeby zorientować się gdzie leży przyczyna. Przyczyna mogła leżeć w logice biznesowej, w bindingu WPFowym, w warstwie dostępu do danych - ogólnie w wielu różnych miejscach.
No cóż, nie samym _green fieldem_ żyje programista, czasem trzeba założyć długie gumowe rękawice i _get shit done_.
<a href="https://teovincent.com/" target="_blank">Artur Wincenciak</a> mawia w takich sytuacjach: _Musiałem stanąć po pas w gnoju i na komendę KUCNIJ zrobić przysiad_.

Gdyby nie sposób pracy, jaki stosuję z Gitem, przypuszczam, że realizacja tego zadania zajęłaby mi co najmniej dwukrotnie więcej czasu, ponieważ gdy coś się rozjeżdżało lub przestawało działać, szybko potrafiłem określić, który commit wprowadził problem, a ponieważ commity były małe, łatwo było ustalić, która zmiana była kluczowa w tym kontekście.
Dodatkowo w ten sposób łatwo określałem jaki następny krok powinienem podjąć w ceu realizacji zadania, co było bardzo cenne w całej tej plątaninie.

Poniżej listuję commity, które składały się na pull requesta realizującego ww. zadanie - same tytuły commitów, które są tutaj widoczne, powinny dać mniej-więcej obraz, w jaki sposób pracowałem (najstarszy commit jest na górze).  
Jestem pewny, że wiele osób rypnęłoby to w jednym wielkim commicie, ewentualnie dwóch/trzech, których podział niewiele wnosi.

Oczywiście, pomiędzy tymi commitami pojawiła się niejedna zmiana, która jednak nie ujrzała światła dziennego, ale pracując w takim porządku, szybko naprowadzałem się na właściwy tor, nie tracąc tych zmian, które były dobre i zostały już zatwierdzone.
Połapanie się w zmianach mając jednego wielkiego commita, byłoby znacznie trudniejsze.

Nie tylko więc zaoszczędziłem dużo czasu - na pewno nie obyło się to bez wpływu na jakość tego, co tworzę - w chaosie zmian łatwo nie zwrócić uwagi na coś istotnego i rozwiązać zadanie gorzej albo zacommitować coś niechcący.

```
bda54862 Remove phone book button from main canvas
bb4efb64 Add phone book to shell resources
9cff0517 Add phone book image for slide panel
18b3ab24 Set phone book tab view model
251c65eb Remove not used catalog from phone book project
fa27d977 Use phone book view model from old module
836f9507 Clean phone book tab in side panel
98384dbb Move resources from old module to new phone book
b179f970 Move phone book view from old modules to side panel
882d2cb1 Remove referencs to old phone book module
3633f485 Merge old phone book module style with new in side panel
061441fb Set close phone book button to hide panel
9b54878f Remove unused button from phone book
153dbcd6 Remove no longer needed files from old phone book module
2895928d Remove old phone book module
6182277b Replace phone book buttons style to improve readibility
49ff42b6 Remove shadows from phone book
7d6584da Update entity migrations instruction
```

## Alternatywne wersje rzeczywistości
Branche  przede wszystkim usprawniają współpracę, umożliwiają tworzenie _pull requestów_ itd. jednak, 
pomimo że to bez wątpienia ich kluczowa rola, zdecydowanie niejedyna. Sam często w czasie pacy tworzę tymczasowe branche, na których np. eksperymentuję lub sprawdzam jakąś koncepcję.  
Co więcej, każdemu programiście zdarza się czasem sytuacja, w której orientuje się, że kod tworzony przez ostatnie kilka godzin (albo dni!) zawędrował w zupełnie złą stronę i trzeba go usunąć.
Czasem zdarza się jednak tak, że po pewnym czasie od usunięcia, uświadamiamy sobie, że jednak ten kod był dobry... Pisząc te słowa, mam przed oczami kolegę, który na porannym standupie powiedział, że zaczyna od zera pisać coś, co już raz napisał, właśnie z tego powodu...
Na jego nieszczęście, nie tworzył po drodze commitów, które nawet po usunięciu, da się jeszcze z Gita odzyskać.  
Osobiście w takich sytuacjach, zamiast zwyczajnie usuwać kod, który chcę porzucić, odkładam go do tymczasowego brancha. 
Dzięki temu po pierwsze - w każdej chwili mogę go jednak przywrócić, a po drugie - nawet jeżeli ogólnie koncepcja była nietrafiona, to część kodu może być dobra - przy takim rozwiązaniu mogę _podglądać_ jak wygląda kod na tym branchu - w Gicie ogólnie łatwo jest sprawdzić stan plików w repo z dowolnego commita.

## Zoptymalizowane szukanie błędów
Dzięki temu, że w Gicie łatwo jest przeglądać stan kodu z dowolnego commita, jak również _przepinać_ working directory na daną wersję, dużo łatwiej jest doszukiwać się zmian, które wprowadziły niepożądane zachowanie.
Gdy mamy błąd, który trudno jest zdebugować, możemy po kolei uruchamiać wcześniejsze wersje kodu i obserwować, czy dany błąd na nich już był. W Gicie jest nawet specjalne narzędzie do optymalizacji tego zadania - nazywa się _Git Bisect_,
a jeżeli mamy dobrze napisane testy automatyczne, możemy przy pomocy tego narzędzia odszukać błąd w sposób całkowicie automatyczny! XXI wiek... :)

## Modyfikowanie kodu wprost z Gita
Wszystkie komendy do modyfikowania commitów, czyszczenia working directory, staging area i usuwania nieśledzonych plików, są de facto, narzędziami do edytowania kodu.
Gdy opanujesz Gita, część zadań przestaniesz robić z IDE/edytora, a będziesz robił bezpośrednio z konsoli Gita :)

## Podsumowanie
Patrząc na swoje doświadczenia, nie mam cienia wątpliwości, że korzystanie z Gita pomaga mi pisać kod szybciej i w dodatku lepiej!
Mam nadzieję, że w tym artykule udało mi się merytorycznie uzasadnić swoje odczucia i przekonać do nich również i Ciebie.

W skrócie, kluczową kwestią przy optymalizowaniu czasu programowania i podnoszeniu jakości kodu, jest lepsza świadomość _sytuacji w kodzie_,
widok big picture wprowadzonych zmian, a dzięki temu większa kontrola i mniejszy chaos.

Jeżeli chcesz opanować sprawne posługiwanie się Gitem w [wymienionych w tym artykule obszarach oraz innych, równie ważnych]({{ site.url }}#co-zyskasz), a zamiast wysłuchiwać jedynie suchej teorii, spróbować wszystkiego w praktyce, [zapraszamy na GitWarsztaty]({{ site.url }}#kontakt), na których z pomocą trenerów przećwiczysz najważniejsze mechanizmy Gita.