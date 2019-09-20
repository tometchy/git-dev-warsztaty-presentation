---
layout: post
current: post
navigation: True
cover:  assets/images/konfiguracja-gita.jpg
title: Konfiguracja Gita
date: 2019-09-02 06:00:00
modified_date: 2019-09-02 06:00:00
tags: wprowadzenie
class: post-template
subclass: 'post tag-wprowdzenie'
author: tomasz-skraskowski
---

Opisać po krótce pliki .gitconfig i możliwości odczytu i modyfikacji

Do warsztatów potrzebne będzie zainstalowane następujące oprogramowanie

git (Linux - sudo apt-get install git, Windows - https://git-scm.com/download/win)
gitk (Linux - sudo apt-get install gitk, Windows - jest preinstalowany razem z gitem)
kdiff3 (Linux - sudo apt-get install kdiff3, Windows - https://sourceforge.net/projects/kdiff3/)
Do warsztatów trzeba będzie skonfigurować gita

Imię i nazwisko / nick - https://help.github.com/en/articles/setting-your-username-in-git
Mail - https://help.github.com/en/articles/setting-your-commit-email-address-in-git
Zrozumiały edytor tekstu, najlepiej
Linux Mint - git config --global core.editor xed
Ubuntu - git config --global core.editor gedit
Windows - git config --global core.editor notepad
Kdiff3 jako difftool i mergetool
W katalogu użytkownika jest plik .gitconfig w nim trzeba dopisać następujące sekcje
Windows:
[merge]
tool = kdiff3
[mergetool "kdiff3"]
path = c:/Program Files/KDiff3/kdiff3.exe
[diff]
tool = kdiff3
guitool = kdiff3
[difftool "kdiff3"]
path = c:/Program Files/KDiff3/kdiff3.exe
Linux:
[merge]

tool = kdiff3

[diff]

guitool = kdiff3

Proszę przez powyższe kroki przejść przed warsztatami, ale gdyby ktoś sobie z którymś punktem nie poradził, to oczywiście na początku warsztatów się tym zajmiemy 🙂
