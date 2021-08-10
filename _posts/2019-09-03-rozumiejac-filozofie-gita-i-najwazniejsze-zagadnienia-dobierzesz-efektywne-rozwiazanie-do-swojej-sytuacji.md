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

Znajomość filozofii Gita i podstawowych zagadnień jest bardzo ważna do optymalnej pracy.

Git to system kontroli wersji (_ang. version control system - VCS_), to oczywiste.
Niestety sposób, w jaki w nim pracujemy, już taki oczywisty nie jest.

## Commitujemy lokalnie
Wydaje mi się, że większość osób stawiających pierwsze kroki w naszej branży, 
o _VCS_ myśli w sposób [scentralizowany]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) -
dokonuję zmiany w kodzie i zapisuję ją we wspólnym dla wszystkich repozytorium kodu.

W Gicie i każdym innym [zdecentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna)
oczywiście zapisujemy zmiany kodu (_commity_) w repozytorium, ale nie współdzielonym.
Commitujemy do naszego własnego repo, znajdującego się na naszym prywatnym komputerze.
I jest to różnica znacząca.

## Synchronizujemy repozytoria
Dlaczego ma to takie znaczenie? Ponieważ w Gicie gdy udostępniamy innym programistom nasze zmiany, to
nie wysyłamy pojedynczego _diffa_ plików. To, co robimy w Gicie, to 
synchronizowanie między sobą dwóch niezależnych repozytoriów.

Zazwyczaj jest tak, że podczas naszej pracy, gdy commitowaliśmy lokalnie, ktoś inny również commitował i zdążył już swoje commity _wypchnąć_ do
Gitowego repo współdzielonego przez wszystkich. Wówczas nasza synchronizacja nie polega na zwykłym _wypchnięciu_ naszych commitów - najpierw musimy
ujednolicić stan naszego repozytorium, ze stanem ze zdalnego repozytorium, żeby wypychane commity _pasowały_, a repozytoria pozostały spójne.

## Dbamy nie tylko o schludny kod, ale również o schludne repozytorium
Co więcej, nasza praca jako programistów, nie musi, a nawet nie powinna, ograniczać się tylko do zatwierdzania zmian w kodzie.
Oprócz dbania o czysty kod powinniśmy dbać również o czyste repozytorium.
Zanim zsynchronizujemy swoje repozytrium z innymi, powinniśmy zadbać o to, że to, co udostępniamy, jest schludne i czytelne.
Historia commitów powinna umożliwić osobom trzecim (i nam samym w przyszłości) zrozumienie kontekstu naszej pracy i powodów powstania poszczególnych zmian.
Rzut oka na tytuły commitów powinien dać obraz pracy, która była wykonywana.

W [scentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) moment
wysłania zmian w kodzie do repo jest momentem _finalnym_ naszej pracy, jest to moment udostępnienia zmian innym
programistom. Jest to moment, w uproszczeniu mówiąc, nieodwracalny, to co wysłaliśmy, już nie zmienimy.

W [zdecentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) moment
wysłania zmian w kodzie do repo odbywa się w trakcie naszej pracy, a momentem finalnym jest (mówiąc w uproszczeniu) synchronizowanie
swojego repozytorium ze zdalnym repozytorium (jednym lub więcej).
Wcześniej wielokrotnie wysyłaliśmy zmiany do repo ([tworzyliśmy commity]({{ site.url }}/blog/opanowanie-podstawowych-komend-gita-jest-fundamentem-codziennej-pracy)),
na bieżąco dbając o czystość naszego repozytorium, czyli mówiąc konkretniej,
[poprawiając historię commitów, którą tworzymy]({{ site.url }}/blog/popraw-czytelnosc-swojej-pracy-ulepszajac-historie-commitow).
A jeżeli w trakcie pracy zostawiliśmy coś do _posprzątania później_, to przed opublikowaniem - sprzątamy. Synchronizujemy swoją historię commitów z innymi, dopiero gdy kod, który dopisaliśmy jest schludny i nasz _wkład w repo projektu_ - tak samo. 

Do dbania o schludność repozytorium służy wiele poleceń i dobrych praktyk niebędących tematem tego artykułu, ale warto odnotować, że kluczowe polecenia na ten temat to [_reset_ i _rebase interactive_, opisane w innym poście]({{ site.url }}/blog/popraw-czytelnosc-swojej-pracy-ulepszajac-historie-commitow).

## Rozgałęziamy się - _branche_
W Gicie  każdego dnia (wielokrotnie) korzystamy z możliwości rozgałęziania historii commitów, czyli [tworzenia tak zwanych branchy]({{ site.url }}/blog/branche-w-gicie-usprawnienie-wspolpracy-nawet-z-samym-soba).
Dzięki temu możemy nie tylko dobudowywać nasze (i cudze) repozytorium o nowe commity. Możemy to robić różnymi _ścieżkami_.
Temat ten szerzej opisuję w [poście dedykowanym branchom w Gicie]({{ site.url }}/blog/branche-w-gicie-usprawnienie-wspolpracy-nawet-z-samym-soba),
w tym miejscu jednak chciałbym zwrócić uwagę, że skoro jest to kolejny sposób, w jaki modyfikujemy nasze (i cudze) repozytorium,
to również powinniśmy to robić schludnie. Bardzo łatwo poprzez zaniedbanie stworzyć historię trudną do przyszłych inwestygacji - doprowadzić do tak
zwanego _Git guitar hero_:
![Screenshot from Gitk tool with commits history with many merges, which looks like guitar hero game](/assets/images/git-guitar-hero-small.jpg "Git guitar hero")

Z tematyką branchy wiąże się wiele poleceń i rozwiązań, np. [cherry-pick do 'podkradania' commita/commitów z innego brancha]({{ site.url }}/blog/cherry-pick-rozwiaz-problem-podkradajac-kod-z-innego-brancha), czy wspomniane wcześniej _rebase_ lub _merge_.

## Zrozumienie filozofii Gita a wpływ na codzienną pracę
Przed oswojeniem się z zasadą działania [zdecentralizowanego _VCS_]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna),
naturalne jest, że do repo próbuje się po prostu dosyłać nowe zmiany i nie myśli się o niczym więcej.
Oczywiście takie podejście do pracy jest możliwe, a nawet [wiele tooli]({{ site.url }}/blog/naucz-sie-gita-z-konsoli-a-poradzisz-sobie-z-dowolnym-toolem-chociaz-i-tak-pozostaniesz-przy-konsoli)
do niego zachęca, oferując _jeden magiczny przycisk_, który wystarczy kliknąć i efekt pracy po prostu jest udostępniany innym - _jakoś_, nie wiedząc jak.

Niestety ta niewiedza ma swoją cenę:
- Po pierwsze, niemal zawsze przy takim podejściu tworzy się bałagan w historii, co w przyszłości odbija się np. trudniejszym inwestygowaniem
przy _debugowaniu_ jakiegoś problemu, albo głowieniem, dlaczego coś zostało zaimplementowane tak, a nie inaczej.
- Po drugie, przy takim podejściu nie wykorzystuje się pełnego potencjału Gita, np. jako narzędzia [usprawniającego nam codzienną pracę]({{ site.url }}/blog/sprawna-obsluga-gita-pomaga-pisac-lepszej-jakosci-kod-w-krotszym-czasie).

## Podsumowanie
Podsumowując: w Gicie nie ograniczamy się do commitowania zmian w kodzie.
W Gicie jednocześnie (świadomie lub nieświadomie) administrujemy całym repozytorium, które regularnie synchronizujemy z innymi.
Powinniśmy dbać o to, aby to, co zobaczą inni, było schludne i czytelne, aby w przyszłości można było z łatwością do tego wrócić.

Jeżeli masz pytania, nie wahaj się zadać je w komentarzu lub napisać do mnie maila. Oczywiście zachęcam również do [naszych szkoleń z Gita (i nie tylko Gita)]({{ site.url }}/#o-warsztatach), na których w fajnej atmosferze ćwiczymy na różnym poziomie zaawansowania, zarówno dla programistów, ale również np. dla wdrożeniowców czy testerów :)