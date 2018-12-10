## Konfiguracja narzędzi do zainstalowania przed warsztatami wysłana przez Pawła 2 dni wcześnie (przez meetup)
Krzysiek ma napisać blog posta o tym.

## Wydrukować ludziom wszystkie komendy 

Wydrukować ludziom wszystkie komendy które bedziemu używali, z wszystkimi flagami, włącznie z git config editor (i pokazane jak ustawić w linuksie gedit, na macu nie wiem co i na windowsie notepada). I tak samo na wszystkich trzech systemach ustawienie kdiff3
* windows wiemy jak zrobić. Sprawdzić jak na Mac/Unix.
* jeśli będziemy używali np 'touch' to też go tutaj dorzucić.

## CZYM JEST git - TOMEK
- Git to rozproszona baza danych, oparta na streamie snapshotow plikow, reprezentowanych za pomocą hashy SHA-1. Dokładnie tak samo jak transakcję w bitcoinie.
OBRAZEK z kolejka SHA i chmurkami co każdy SHA symbolizuje 

## Jak działa git - TOMEK
Git w podstawowym scenariuszu tylko dodaje dane
OBRAZEK  poprzedni dalej jesteśmy na tym samym slajdzie, ale dodaje dopisek że nawet commit revertujacy to dodanie danych

## Wytłumaczyć working, staging, commited - TOMEK

Twoj projekt (Twoje pliki - absolutnie każdy plik który stworzysz/zedytujesz/usuniesz) zawsze jest w którymś z 3 "obszarow":
Obszarze roboczym (working directory)
Staging area - bycia oznaczonym (staged) do dodania do bazy danych (zacommitowania)
.git directory (repozytorium) - dodanym do bazy danych (commited) - czyli zabezpieczonym, który można odnaleźć znając SHA snapschota bazy danych.

* pokazać że przy przechodzeniu między branchami - pliki na dysku są podmieniane

Synchronizowanie baz danych między soba, pokazanie że wskazujesz jakiegoś remota i w raczej niespotykanym scenariuszu możesz wkazac nawet komputer kolegi obok - żadna roznica.

## Przykładowe flow na slajdzie - KRZYSIEK

* W SourceTree pokazać jak poszczególne chunki się dodaje.

Uwaga do zapamietania, że "-" przy pojedynczej fladze, a "--" przy całym słowie, gdzieś w trakcie, może później.

### Example flow - KRZYSIEK

git init
  git init -> obok widać że powstał katalog gita
otworz w explorerze
z PPM->New file->txt
pokaz w SourceTree, i tutaj te 3 stany
~ dodawanie kolejnego,
~ dodawanie tekstu w utworzonym
~ zamiast screenshot pokazujemy równolegle w SourceTree.
? Czy oni powinni mieć SourceTree. Oni nie mieli my też nie wymagamy, można doinstalować.


używać jedno z dwóch: staging / index. STAGING


Nie pokazywać obrazków git-flow ani github-flow. Wytłumaczymy że prosta historia jest celem. ?Linki do TrunkBasedDevelopment i znaleźć proste wytłumaczenie?


### Cwiczenia powyższego

// to są zmiany lokalne
## Edytowanie istniejących zmian - TOMEK

revertowanie oraz reset i commit --amend/ czy coś takiego
- https://github.com/SkillsTemple/git-devWarsztaty-reset-revert


## rebase --interactive - KRZYSIEK

* dużo wprowadzenia, jak edytować (bo otworzy się plik w notatniku), kilka opcji, zamykamy plik
* pokazać że można to zrobić 'rebase --interactive'
* ćwiczenie:

```sh
git clone https://github.com/SkillsTemple/git-devWarsztaty-reset-revert exercise-2
cd exercise-2
git rebase --interactive
```

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

```sh
$ git pull --rebase
$ git config --global rebase.true
```

zasymulować, że:
* jeden wypushował kod i pushujemy 
* -> dostajemy rejected 
* -> ściągamy zmiany, pull (z rebasem), zapytać czy to jest to czego logiczne oczekiwali
* alternatywnie tutaj może być merge.
  * bez rebase będzie commit mergujący i to jest złe, pokazać screenshoty jak historia może być prosta, a może mieć co chwilę "merge master from master".
  * //wytłumaczyliśmy sobie dlaczego to nie będzie ćwiczenie, może ktoś coś wymyśli


## merge i rebase - KRZYSIEK

* pracujemy nad featurem, na branch feature_light
* mamy kilka commitów // 'git log' z consoli, ?SourceTree?
* synchronizujemy mastera
  * checkout, pulll, checkout z powrotem, pokazanie historii
* robimy merge
* push
 

https://github.com/SkillsTemple/git-devWarsztaty-rebase
- robienie rebase między branchami jest trudne i chyba mało kto to zrozumiał. ??? Może za trudne/ może tylko pokazać.
reflog tylko pokazać.
gdzieś pokazać na przykładzie problem że gdy zmienimy historię to już nie zrobimy pusha.
* nie można edytować wypushowanego bo już z powrotem tego nie wbijemy, a jeśli spróbujemy (trudniejsze poza dzisiejszym scopem) to:
* Linus powiedział "jeżeli tak zrobisz to nikt z firmy nie będzie Cię lubił" - to check
* 

Czasowo: 9-17 z czego odpada:
* jest obiad 1h?
* nieprzewidziane problemy rzutnikowe które zabiorą czas
* a pod koniec część ludzi wychodzi bo musi, są zmęczeni, atmosfera się rozluźnia.
* 
?

Przed prezentacją usunąć wszystkie aliasy z własne .gitconfig
Skracarka linków i link do naszego pliku linki z prezentacji.html
Może 'git diff' wcześniej pokazać.

### Feedback który spisałem (Krzysiek)

* wspomnieć o problem ze spolszczaniem angielskich terminów - używamy angielskich nazw gdy mówimy i to brzmi ok, ale gdy to piszemy to wygląda dziwnie, ale lepsze nie będzie
* "gitk master" - jeszcze nie zrozumiane gdy nie było branchy
* **gdy jest wytłumaczone ćwiczenie i czas na zrobienie to na rzutniku powinien być widoczne spis komend potrzebnych do zrobienia:
  * git co branch-name
  * git br
  * git reset --hard branch-name
  * git rebase master
  * git merge branch-name
* linki do guitar hero git obrazki
* pytanie z sali było: 'git cherry-pick master' wzieło nam cały branch. Nie było dobrze wytłumaczone że "master" to wskaźnik. tzn było, ale to jest kolejne dobre miejsce żeby pokazać jak dziają te wskaźniki. To bylo pokazanane na learningBranching i mogło nie być jasne.
* IMHO możemy mniej mówić o deploymencie, bardziej skupić się na takich rzeczach jak własny .gitignore, aby sami mogli własne repo utrzymywać.
* może pierwsze ćwiczenie z flow przenieść wcześniej, jako taki przerywnik między teorią.
* w ćwiczenieach z rebase/merge nie było wprost pokazane że należy "git checkout branch-a" po sklonowaniu

### Nie pamiętamy dlaczego taki feedback

* Wytłumaczyć że w commit jest "message" i "detailed message" - przed robieniem "rebase interactive"