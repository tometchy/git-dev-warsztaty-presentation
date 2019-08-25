---
layout: post
current: post
navigation: True
cover:  assets/images/git-key.jpg
title: Libsecret - przechowuj bezpiecznie hasła dla Gita w Linux Mint oraz Ubuntu
date: 2019-06-07 06:00:00
modified_date: 2019-06-07 06:00:00
tags: credential-manager 
class: post-template
subclass: 'post tag-credential-manager'
author: tomasz-skraskowski
---

Nikt nie lubi wprowadzać loginu i hasło przy każdym pushu... na szczęście mamy libsecret jako git credential storage.

Gdy chcesz skorzystać z serwisów hostujących repozytoria gita takich jak _GitLab_ lub _GitHub_ musisz się zautoryzować.
Git posiada wbudowany mechanizmy zwany credential helper, który umożliwia wybranie sposobu przechowywania hasła.
Od razu po instalacji mamy do dyspozycji 2 opcje, ale nie jesteśmy do nich ograniczeni - można doinstalowywać rozwiązania firm trzecich.

### _Cache_ credential helper (wbudowany)
Cache jest uznawany za bezpieczny, ponieważ trzyma dane jedynie w pamięci RAM. Jest to akceptowalne dla bezpieczeństwa, 
jednak wygoda użytkowania pozostawia wiele do życzenia - za każdy razem, gdy zaczynasz nową sesję (np. po restarcie komputera), musisz wprowadzić credentiale ponownie.
Pamięć jest czyszczona domyślnie po 900 sekundach (15 minut), ale można wartość tę zmienić za pomocą parametru `timeout`.

Jeżeli z jakiegoś powodu nie chcesz nic instalować, użyj przynajmniej cache, zawsze to jakieś odciążenie :)
{% highlight bash%}
git config --global credential.helper 'cache --timeout=300'
{% endhighlight %}
Oficjalna dokumentacja - [git-scm.com/docs/git-credential-cache](https://git-scm.com/docs/git-credential-cache)

### _Store_ credential helper (wbudowany)
Store trzyma login i hasło w... zwykłym pliku tekstowym! Jest to uznawane za niebezpieczne, korzystaj więc z tej opcji wyłącznie, gdy nie zależy Ci na koncie, z którego korzystasz np. jeżeli stworzyłeś konto jedynie dla warsztatów :)
{% highlight bash%}
git config --global credential.helper store
{% endhighlight %}
Oficjalna dokumentacja - [git-scm.com/docs/git-credential-store](https://git-scm.com/docs/git-credential-store)

### _Git Credential Manager for Mac and Linux_ (autorstwa Microsoft)
Użytkownicy Windowsa są zaznajomieni z wygodnym toolem _Git Credential Manager for Windows_, który jest zintegrowany z Windowsowym narzędziem do przechowywania credentiali (wbudowanym na poziomie OS, dostępnym z panelu sterowania).
Manager ten może być zainstalowany w trakcie instalacji Gita (wizard instalacyjny posiada checkbox do zaznaczenia).
A niedawno Microsoft ogłosił wydanie toola... _Git Credential Manager for Mac and Linux_. Byłem pozytywnie zaskoczony, niestety tylko do momentu gdy spróbowałem
użyć go na moim _Linux Mint 19 Tara_. Instalacja się powiodła (choć nie obyło się bez problemów), lecz próba użycia skończyła się z błędem:
{% highlight bash%}
Fatal: java.lang.RuntimeException encountered. Details: 
Secure credential storage is not available on this operating system. You may opt-in to store credentials in an unencrypted file under your user home directory by running 'git config --global credential.canFallBackToInsecureStore true'.
fatal: credential helper '!/usr/lib/jvm/java-11-openjdk-amd64/bin/java -Ddebug=false -Djava.net.useSystemProxies=true -jar /home/linuxbrew/.linuxbrew/Cellar/git-credential-manager/2.0.4/libexec/git-credential-manager-2.0.4.jar' told us to quit
{% endhighlight %}
Otworzyłem Microsoftowi issue na githubie i po dziś dzień nie otrzymałem żadnej odpowiedzi (a minęło ponad pół roku).
Taki sam błąd zgłosił również użytkownik zwykłego Ubuntu, w wersji 18.04 oraz 19.04, więc rozwiązanie to nie działa zarówno w Linux Mint, jak i w Ubuntu.

Oficjalna dokumentacja - [github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux)

## _Libsecret_ git credential storage (autorstwa GNOME)
Do niedawna najlepszym sposobem na przechowywanie credentiali w Linuxie był _GNOME Keyring_ (libgnome-keyring), ale ze względu na to, że rozwiązanie to jest
silnie związane z GNOME, [jest przestarzałe od stycznia 2014 roku](https://mail.gnome.org/archives/commits-list/2014-January/msg01585.html).

Dla wersji Gita 2.11+ powinieneś użyć credential helpera bazującego na rozwiązaniu _libsecret_.
Instalacja i konfiguracja wymaga jedynie 4 poleceń w bashu :)
{% highlight bash%}
sudo apt-get install libsecret-1-0 libsecret-1-dev
cd /usr/share/doc/git/contrib/credential/libsecret
sudo make
git config --global credential.helper /usr/share/doc/git/contrib/credential/libsecret/git-credential-libsecret
{% endhighlight %}
To wszystko, następnym razem, gdy zostaniesz poproszony o login i hasło, będzie to ostatni raz na tym urządzeniu :)

Oficjalna dokumentacja - [wiki.gnome.org/Projects/Libsecret](https://wiki.gnome.org/Projects/Libsecret)

Artykuł ten przetłumaczyłem z mojego anglojęzycznego bloga - [SoftwareDeveloper.Blog](https://www.softwaredeveloper.blog) - [Libsecret - remember Git credentials in Linux Mint and Ubuntu securely](https://www.softwaredeveloper.blog/git-credential-storage-libsecret).
