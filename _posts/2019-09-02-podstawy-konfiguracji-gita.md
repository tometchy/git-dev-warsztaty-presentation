---
layout: post
current: post
navigation: True
cover:  assets/images/konfiguracja-gita.jpg
title: Podstawy konfiguracji Gita - przydatna wiedza w celu dostosowywania środowisk
date: 2019-09-02 06:00:00
modified_date: 2019-09-02 06:00:00
tags: wprowadzenie
class: post-template
subclass: 'post tag-wprowdzenie'
author: tomasz-skraskowski
advantages-list-title: Konfiguracja<br class="co-zyskasz-line-break"> Gita
advantages-list-cover: img/konfiguracja-gita.jpg
---

Mechanizm konfiguracji Gita jest bardzo prosty i warto go poznać, żeby potrafić usprawniać sobie środowiska pracy.

## Poziomy konfiguracji Gita
Git posiada trzy poziomy konfiguracji:

### System
_Najwyższy_ poziom konfiguracji - _System_ jest widoczny dla wszystkich użytkowników komputera (i wszyscy z niego korzystają).
Jest to plik tekstowy _gitconfig_ znajdujący się w globalnej lokalizacji np. _/etc/gitconfig_ lub dla Windowsa _%ProgramFiles(x86)%\Git\etc\gitconfig_ (ścieżki mogą się różnić w zależności od instalacji, np. znam również wersję _%ProgramFiles%\Git\mingw64\etc\gitconfig_).

### Global
Najczęściej modyfikowany poziom konfiguracji - _global_ jest globalny w obrębie zalogowanego użytkownika.
Jest to plik tekstowy _.gitconfig_ znajdujący się w katalogu użytkownika - _~/.gitconfig_, a w przypadku Windowsa - _%USERPROFILE%/.gitconfig_.

### Local
_Najniższy_ poziom konfiguracji - _local_ to plik tekstowy _config_, znajdujący się bezpośrednio w konkretnym repozytorium - dotyczy więc tylko danego repozytorium.

## Jak Git korzysta z poziomów konfiguracji
W skrócie można powiedzieć, że poziom _system_ jest nadpisywany przez poziom _global_, a poziom _global_ jest nadpisywany przez poziom _local_.
Czyli jeżeli np. dane ustawienie widnieje tylko w najwyższym poziomie, to Git je odczyta, ale jeżeli istnieje zarówno na poziomie _system_ i _global_ - to weźmie wersję z _global_.
Jeżeli np. dane ustawienie widnieje w poziomie _local_, wówczas ta wartość jest brana pod uwagę, bez względu na to, czy poziom _global_ lub _system_ też je określa.

## Odczytywanie i modyfikowanie konfiguracji
W celu ustawienia wartości dla danego ustawienia wpisujemy komendę:  
`git config --POZIOM SEKCJA.NAZWA "TREŚĆ"` - np.  
`git config --global user.name "John Doe"`.  
Jeżeli nie wskażemy poziomu explicite, to zmiany zostaną zapisane w poziomie _local_.

Druga opcja, żeby zmodyfikować ustawienia, to zwyczajna edycja pliku tekstowego ustawień wybranego poziomu.
Możemy to zrobić odszukując plik w wybranej ścieżce na dysku lub wywołać edytor tekstowy za pomocą polecenia:  
`git config --POZIOM --edit` - np.  
`git config --global -e`  
Tym samym sposobem możemy również podejrzeć, jakie mamy ustawienia na danym poziomie.

Odczytać wartości możemy również za pomocą polecenia:  
`git config --POZIOM --list` - np.  
`git config --list`

Trzeci sposób na odczytanie wartości to sprawdzenie konkretnego wpisu poleceniem:  
`git config (--POZIOM) SEKCJA.NAZWA` - np.  
`git config --get user.email`

## Jak w praktyce wykorzystuje się poziomy konfiguracji Gita
W praktyce nigdy nie modyfikowałem poziomu _system_, a wszelkie ustawienia, które tam miałem, zostały wrzucone przez zainstalowane programy.

Poziom _global_ to chleb powszedni, zazwyczaj to, co ustawiamy, chcemy ustawić dla siebie raz i już tego nie zmieniać.
W praktyce więc zmieniając ustawienia, zazwyczaj z odruchu będziesz dopisywał poziom _global_.

Poziom _local_ przydaje się wtedy, kiedy dane repozytorium jest pod jakimś kątem specyficzne, względem Twoich pozostałych repozytoriów na danym komputerze.

Dla przykładu na komputerze służbowym mam na poziomie _global_ ustawione swoje prawdziwe imię i nazwisko oraz służbowego maila - taka jest polityka firmy.
Czasami zdarza się jednak, że na służbowym laptopie dłubię coś w prywatnych projektach, w których posługuję się swoim prywatnym mailem i nickiem, zamiast imienia i nazwiska - wówczas na służbowym laptopie ustawiam prywatne dane, ale tylko w kontekście tych konkretnych repozytoriów.

Może się też zdarzyć tak, że Twoje ulubione narzędzie do diffowania/mergowania w kontekście jakiegoś projektu będzie miało lepszą alternatywę.
Przykładowo możesz ogólnie używać do oglądania różnic programu Kdiff3, ale w kontekście projektu C# woleć DiffToola dostarczanego rezem z programem Rider, który koloruje Ci składnię i wyszarza nieużywany kod.
Sam osobiście preferuję Kdiff3 do każdego projektu, a fajerwerki od JetBrainsów w tym konkretnym przypadku według mnie zaciemniają sprawę, ale są ludzie, którzy je wolą.

Zdarza się, że ktoś nie wiedząc o tym konfiguracji stosowanym przez Gita, męczy się z ogólnym ustawieniem, którego nie chce zmienić, zamiast po prostu dostosować sobie konfigurację na poziomie danego repozytorium, dlatego polecam każdemu zapoznać się z Gitową filozofią konfiguracji.
Nie trzeba wkuwać na pamięć ścieżek ani komend, wystarczy rozumieć, jak to działa, a w danym przypadku konkretną komendę czy ścieżkę zawsze można łatwo wyszukać w internecie.

## Przygotowanie Gita
Na początek, żeby wydajnie korzystać z Gita, wystarczy kilka prostych kroków.

### Instalacja
Niezbędne oprogramowanie to
- Git
  - Linuks - `sudo apt-get install git`
  - Windows - <a href="https://git-scm.com/download/win" target="_blank">oficjalny instalator</a>
  - MacOS - <a href="https://git-scm.com/download/mac" target="_blank">oficjalny instalator</a>
- gitk (narzędzie ułatwiające przeglądanie historii)
  - Linuks - `sudo apt-get install gitk`
  - Windows - jest preinstalowany razem z Gitem
  - MacOS - jest preinstalowany razem z Gitem
- KDiff3 (posłuży jako DiffTool oraz MergeTool) 
  - Linuks - `sudo apt-get install kdiff3`
  - Windows - <a href="https://sourceforge.net/projects/kdiff3/" target="_blank">oficjalny instalator</a>
  - MacOS - `brew install kdiff3`

### Konfiguracja
Twoje dane:
```
git config --global user.name "Twoje imię i nazwisko lub nick"
git config --global user.email "twoj@email"
```
Edytor tekstowy - bardzo ważne, żeby ustawić lekki edytor tekstowy, ponieważ korzystając z Gita, będzie on często otwierany, jeżeli więc będzie się długo uruchamiał, to wybije Cię z _flow_  pracy.
Jeżeli potrafisz obsługiwać konsolowy edytor np. Vim lub Nano, prawdopodobnie będzie to najlepszy wybór - w ogóle nie będziesz musiał _opuszczać_ konsoli:
- **Linux Mint** - Xed: `git config --global core.editor xed`
- **Ubuntu** - Gedit: `git config --global core.editor gedit`
- **Windows** - Notepad: `git config --global core.editor notepad`
- Any OS - Vim: `git config --global core.editor vim`

DiffTool oraz MergeTool - przeglądanie wprowadzonych zmian i rozwiązywanie konfliktów w kodzie jest codziennością.
Chociaż da się obejść bez dedykowanego narzędzia, to potrafi ono oszczędzić dużo czasu. Razem z drugim prowadzącym GitWarsztaty - Krzyśkiem Morcinkiem, polecamy KDiff3, zarówno jako diff jak i merge tool.
Jest prosty, ale właśnie w tej prostocie tkwi jego siła - wolę kdiffa zdecydowanie bardziej, niż rozbudowane narzędzia, kolorujące składnię, analizujące kod itp. - taka postać jest dla mnie czystsza, a co za tym idzie - czytelniejsza.
Świetnie nadaje się do każdego typu plików tekstowych, niezależnie od języka programowania, czy nawet nie programowania - dla przykładu tekst, który właśnie czytasz, piszę w formacie markdown i przechowuję w repozytorium Gita - Kdiff3 i w tym przypadku się świetnie sprawdza.

Otwieramy plik _.gitconfig_ w edytorze tekstowym, za pomocą polecenia:  
`git config --global -e`  
i ustawiamy następujące wartości (uwaga, żeby nie duplikować sekcji, jeżeli już istnieją):

Linux i MacOS:
``` ini
[merge]
tool = kdiff3

[diff]
guitool = kdiff3
```

Windows (jeżeli KDiff3 został zainstalowany pod inną ścieżką, należy ją dostosować):
``` ini
[merge]
tool = kdiff3

[mergetool "kdiff3"]
path = c:/Program Files/KDiff3/kdiff3.exe

[diff]
tool = kdiff3
guitool = kdiff3

[difftool "kdiff3"]
path = c:/Program Files/KDiff3/kdiff3.exe
```

## Podsumowanie
Jak widzisz, filozofia konfiguracji Gita jest bardzo prosta - opiera się o trzy, proste pliki tekstowe, a jednocześnie bardzo elastyczna - łatwo dopasować Gita do naszej sytuacji.

Podstawowy setup środowiska zajmuje kilka minut i składa się z zainstalowania 3 programów: Git, gitk oraz KDiff3, oraz skonfigurowaniu imienia i nazwiska, maila, edytora tekstowego i diff/merge toola.

Jeżeli chcesz szerzej poznać ten i [inne mechanizmy Gita]({{ site.url }}#co-zyskasz), a zamiast wysłuchiwać jedynie suchej teorii, spróbować wszystkiego w praktyce, [zapraszamy na GitWarsztaty]({{ site.url }}#kontakt), na których z pomocą trenerów przećwiczysz najważniejsze funkcje Gita.
