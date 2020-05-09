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

## W Gicie commitujemy lokalnie
Wydaje mi się, że większość osób stawiających pierwsze kroki w naszej branży, 
o _VCS_ myśli w sposób [scentralizowany]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) -
dokonuję zmiany w kodzie i zapisuję ją we wspólnym dla wszystkich repozytorium kodu.

W Gicie i każdym innym [zdecentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna)
oczywiście zapisujemy zmiany kodu (_commity_) w repozytorium, ale nie wspóldzielonym.
Commitujemy do naszego własnego repo znajdującego się na naszym prywatnym komputerze.
I jest to różnica znacząca.

## W Gicie synchronizujemy repozytoria
Dlaczego to ma takie wielkie znaczenie? Ponieważ do repo współdzielonego z innymi programistami,
nie wysyłamy po prostu naszych zmian, pojedynczego _diffa_ plików. To co my robimy, to 
synchronizowanie między sobą dwóch niezależnych repozytoriów.

Jeżeli podczas naszej pracy, gdy commitowaliśmy lokalnie, ktoś inny również commitował i zdążył już swoje commity _wypchnąć_ do
współdzielonego repo, to nasza synchronizacja nie polega na zwykłym _wypchnięciu_ naszych commitów, najpierw musimy
ujednolicić stan naszego repozytorium i zdalnego repozytorium.

## Dbamy nie tylko o schludny kod, ale również o schludne repozytorium
Co więcej, nasza praca jako programistów, nie musi, a nawet nie powinna, ograniczać się do dodawania zmian w kodzie do repo.
Oprócz dbania o czysty kod, powinniśmy dbać również o czyste repozytorium.
W końcu mamy je na swoim komputerze, zanim je zsynchronizujemy z innymi, powinniśmy zadbać, że to co udostępniamy innym, jest schludne i czytelne.

W [scentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) moment
wysłania zmian w kodzie do repo, jest momentem _finalnym_ naszej pracy, jest to moment udostępnienia zmian innym
programistom. Jest to moment, w uproszczeniu mówiąc, nieodwracalny, to co wysłaliśmy, już nie zmienimy.

W [zdecentralizowanym systemie kontroli wersji]({{ site.url }}/blog/dvcs-vs-cvcs-o-co-ta-wojna) moment
wysłania zmian w kodzie do repo odbywa się w trakcie naszej pracy, a momentem finalnym jest (mówiąc w uproszczeniu) synchronizowanie
swojego repozytorium z innymi.
Wcześniej wielokrotnie wysyłaliśmy zmiany do repo ([tworzyliśmy commity]({{ site.url }}/blog/opanowanie-podstawowych-komend-gita-jest-fundamentem-codziennej-pracy)),
na bieżąco dbając o czystość naszego repozytorium, czyli mówiąc konkretniej,
[poprawiając historię commitów, którą tworzymy]({{ site.url }}/blog/popraw-czytelnosc-swojej-pracy-ulepszajac-historie-commitow).

Synchronizujemy swoją historię commitów z innymi, dopiero gdy kod który dopisaliśmy jest schludny i nasz _wkład w repo projektu_ - tak samo. 

## Rozgałęziamy się
W 