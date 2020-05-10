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

Znajomość filozofii Gita i podstawowych zagadnień jest kluczowa do optymalnej pracy.

Git to system kontroli wersji (_ang. version control system - VCS_), to oczywiste.
Niestety sposób, w jaki w nim pracujemy, już taki oczywisty nie jest.

## Commitujemy lokalnie
Wydaje mi się, że większość osób stawiających pierwsze kroki w naszej branży, 
o _VCS_ myśli w sposób [scentralizowany]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) -
dokonuję zmiany w kodzie i zapisuję ją we wspólnym dla wszystkich repozytorium kodu.

W Gicie i każdym innym [zdecentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna),
oczywiście zapisujemy zmiany kodu (_commity_) w repozytorium, ale nie wspóldzielonym.
Commitujemy do naszego własnego repo znajdującego się na naszym prywatnym komputerze.
I jest to różnica znacząca.

## Synchronizujemy repozytoria
Dlaczego ma to takie znaczenie? Ponieważ do repo współdzielonego z innymi programistami,
nie wysyłamy po prostu naszych zmian, pojedynczego _diffa_ plików. To co robimy w Gicie, to 
synchronizowanie między sobą dwóch niezależnych repozytoriów.

Jeżeli podczas naszej pracy (gdy commitowaliśmy lokalnie) ktoś inny również commitował i zdążył już swoje commity _wypchnąć_ do
współdzielonego repo, to nasza synchronizacja nie polega na zwykłym _wypchnięciu_ naszych commitów. Najpierw musimy
ujednolicić stan naszego repozytorium, ze stanem ze zdalnego repozytorium.

## Dbamy nie tylko o schludny kod, ale również o schludne repozytorium
Co więcej, nasza praca jako programistów, nie musi, a nawet nie powinna, ograniczać się tylko do zatwierdzania zmian w kodzie.
Oprócz dbania o czysty kod, powinniśmy dbać również o czyste repozytorium.
Mamy je na swoim komputerze, zanim zsynchronizujemy je z innymi, powinniśmy zadbać, że to co udostępniamy jest schludne i czytelne.
Historia commitów powinna umożliwić osobom trzecim zrozumienie kontekstu naszej pracy i powodów powstania poszczególnych zmian.
Rzut oka na tytuły commitów powinien dać obraz co zostało wprowadzone.

W [scentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) moment
wysłania zmian w kodzie do repo, jest momentem _finalnym_ naszej pracy, jest to moment udostępnienia zmian innym
programistom. Jest to moment, w uproszczeniu mówiąc, nieodwracalny, to co wysłaliśmy, już nie zmienimy.

W [zdecentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) moment
wysłania zmian w kodzie do repo odbywa się w trakcie naszej pracy, a momentem finalnym jest (mówiąc w uproszczeniu) synchronizowanie
swojego repozytorium z innymi.
Wcześniej wielokrotnie wysyłaliśmy zmiany do repo ([tworzyliśmy commity]({{ site.url }}/blog/opanowanie-podstawowych-komend-gita-jest-fundamentem-codziennej-pracy)),
na bieżąco dbając o czystość naszego repozytorium, czyli mówiąc konkretniej,
[poprawiając historię commitów, którą tworzymy]({{ site.url }}/blog/popraw-czytelnosc-swojej-pracy-ulepszajac-historie-commitow).

Synchronizujemy swoją historię commitów z innymi dopiero gdy kod który dopisaliśmy jest schludny i nasz _wkład w repo projektu_ - tak samo. 

## Rozgałęziamy się
W Gicie  każdego dnia (wielokrotnie) korzystamy z możliwości rozgałęziania historii commitów - [tworzenia tak zwanych branchy]({{ site.url }}/blog/branche-w-gicie-usprawnienie-wspolpracy-nawet-z-samym-soba).
Czyli możemy nie tylko dobudowywać nasze (i cudze) repozytorium o nowe commity. Możemy to robić różnymi _ścieżkami_.
Temat ten szerzej opisuję w [poście dedykowanym branchom w Gicie]({{ site.url }}/blog/branche-w-gicie-usprawnienie-wspolpracy-nawet-z-samym-soba),
w tym miejscu jednak chciałbym zwrócić uwagę, że skoro jest to kolejny sposób w jaki modyfikujemy nasze (i cudze) repozytorium,
to również powinniśmy to robić schludnie. Bardzo łatwo poprzez zaniedbanie stworzyć historię trudną do inwestygowania, doprowadzić do tak
zwanego _Git guitar hero_:
obrazek git guitar hero

## Zrozumienie filozofii Gita a wpływ na codzienną pracę
Dopóki się nie załapie zasady działania [zdecentralizowanego _VCS_]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna),
naturalnym jest, że do repo próbuje się poprostu dosyłać nowe zmiany i nie myśli się o niczym więcej.
Oczywiście takie podejście do pracy jest możliwe, ponieważ jest wspierane przez [wiele tooli]({{ site.url }}/blog/naucz-sie-gita-z-konsoli-a-poradzisz-sobie-z-dowolnym-toolem-chociaz-i-tak-pozostaniesz-przy-konsoli)
w których wystarczy kliknąć _jeden magiczny przycisk_ i efekt pracy po prostu jest udostępniana innym - _jakoś_.

Niestety ta niewiedza ma swoją cenę:
- Po pierwsze, niemal zawsze przy takim podejściu tworzy się bałagan w historii, co w przyszłości odbija się np. trudniejszym inwestygowaniem
przy debugowaniu, albo głowieniem dlaczego coś zostało zaimplementowane tak a nie inaczej.
- Po drugie, przy takim podejściu nie wykorzystuje się pełnego potencjału Gita, np. jako narzędzia [usprawniającego nam codzienną pracę](http://localhost:4000/blog/sprawna-obsluga-gita-pomaga-pisac-lepszej-jakosci-kod-w-krotszym-czasie)

## Podsumowanie
Podsumowując: w Gicie nie ograniczamy się do commitowania zmian w kodzie.
W Gicie jednocześnie (świadomie lub nieświadomie) administrujemy całym repozytorium, które regularnie synchronizujemy z innymi.
Powinniśmy dbać, aby to co zobaczą inni, było schludne i czytelne, aby w przyszłości można było z łatwością do tego wrócić.

Jeżeli chcesz XXX