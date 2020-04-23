
# Demo

## DEMO "Powtarzające się uwagi" whitespace

* MR "Add AutomaticBuildingChanger" który tylko pokaże jako że to już się pojawiło.

* MR "Add ArtificialIntelligence" w którym jest jedno wytknięcie błędu.

(w trakcie żeby nie było ciszy, można:
    - zobaczymy może Tomek odpuścić
    - o, nie odpuścił
    - impas
    - i mimo że ktoś nawet więcej racji to robota nie pójdzie do przodu)
przykładowa rozmowa:
T: linie39: przenieś klamrę do poprzedniej linii (już ostatnio było to ustalone)
K: ale nie wszędzie tak jest ...
T: taką mamy konwencję, nowy kod jest tylko tak pisany
K: ale ostatnio Marcin wrzucił i tak nie było
T: jak to nie było, to może przeoczenie jakieś i też trzeba poprawić
K: ja nie będę po Marcinie poprawiał. Jego przeszedł a ja od niego kopiowałem. Ja już tutaj chcę mergować
T: ...
K: ...

- te kropki na końcu są istotne żeby pokazać że obydwoje mogą być wkurzeni. Tak naprawdę każda z tych stron mogłaby odpuścić wcześniej.

jeśli ktoś wymaga konwencji to ją automatyzuj. Test konwencji.

git co feature/add-artificial-intelligence
git rebase ci-test-lint
git push

poczekać gdy się wywali na CI. ok minuta.


## Demo 2 MR'y

Na starcie jest MR stworzony
push na slack.

Komendy na boku żeby się nie pogubić.

slack

zacząć od sytuacji gdy MR już jest zrobiony.

git com
git co -b feature/refactor-to-use-armymove-structure
git cp start/feature/refactor-to-use-armymove-structure
git push

walnąć na slacka.

git com
git pull
git co feature/move-soldiers
git rem
tylko opowiedzieć i pokazać w VSCode że teraz bym poprawił ten kod.

#git push
#git pushf
#slack można wrócić do review.

T: "już kolejny raz widzę przekazywanie tych 3 parametrów, stwórzmy obiekt który to encapsuluje, biznesowo/domenowo taki obiekt ma sens"
K: "tak, ale ja najpierw muszę feature skończyć"
(...?...)
T: "jak teraz nie zrobisz to nigdy nie będzie zrobione, a tak już każdy będzie mógł z tego korzystać"
T: "ale zrób to w osobnym MR przed featurem"
K: "ok robię"
/ alternatywnie T: "tak, ale zaraz po zakończeniu zrób ten rafactoring jako osobny MR"
bo presja czasu. Każdy sam wyważy.

- jakie są lepsze przykłady że coś takiego trzeba będzie robić?
  - ktoś korzysta ze statycznej konfiguracji z pliku, a jest już w planach żeby przerobić na konfigurajcę z bazy danych. 
  - 