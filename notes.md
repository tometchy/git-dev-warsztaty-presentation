


używać jedno z dwóch: staging / index. STAGING


## Branche - KRZYSIEK
### Pobawic sie w https://learngitbranching.js.org/?NODEMO
Cases:
* 2 commity do przodu na masterze
* branch 'work' i do przodu 2 commity, ktoś do nas przyszedł i chcemy mu pokazać stabilny master
* branch 'bug' 2 commity wczesniej, poprawiamy nowym commitem
* rebase na master'a



Zwrocic uwage, ze ludzie czasem nie rozumieja jak mozna odwrocic kolejnosc commitow (cherry-pick / rebase, obawy ze mozna miec commit z edycja plikow ktory powstal w innym commicie. Zwrocic uwage, ze tutaj mamy proste sytuacje w ktorych pliki sa, a do trudniejszych sytuacji dojdziemy pozniej - w skrocie - powstana konflikty i git zapyta co zrobic bo nie wie jak to rozwiazac).


## pushowanie i pullowanie zmian - TOMEK

### pull z rebase - TOMEK

zasymulować, że:
* jeden wypushował kod i pushujemy 
* -> dostajemy rejected 
* -> ściągamy zmiany, pull (z rebasem), zapytać czy to jest to czego logiczne oczekiwali
* alternatywnie tutaj może być merge.
  * bez rebase będzie commit mergujący i to jest złe, pokazać screenshoty jak historia może być prosta, a może mieć co chwilę "merge master from master".
  * //wytłumaczyliśmy sobie dlaczego to nie będzie ćwiczenie, może ktoś coś wymyśli

