---
layout: post
current: post
navigation: True
title: Libsecret - przechowuj bezpiecznie hasła dla Gita w Linux Mint oraz Ubuntu
date: 2019-06-07 06:00:00
modified_date: 2019-06-07 06:00:00
tags: credential-manager 
class: post-template
subclass: 'post tag-credential-manager'
author: tomasz-skraskowski
---

Nikt nie lubi wprowadzać login i hasło przy każdym pushu... na szczęście mamy libsecret jako git credential storage.

Gdy chcesz skorzystać z serwisów hostujących repozytoria gita takich jak _GitLab lub _GitHub_ musisz się zautoryzować.
Git posiada wbudowany mechanizmy zwany credential helper, który umożliwiają wybranie sposobu przechowywania hasła.
Od razu po instalacji mamy do dyspozycji 2 opcje, ale nie jesteśmy do nich ograniczeni - można doinstalowywać rozwiązania firm trzecich.

### _Cache_ credential helper (wbudowany)
Cache jest uznawany za bezpieczny, ponieważ trzyma dane jedynie w pamięci RAM. Jest to akceptowalne dla bezpieczeństwa, 
jednak wygoda użytkowania pozostawia wiele do życzenia - za każdy razem gdy zaczynasz nową sesję (np. po restarcie komputera), musisz wprowadzić credentiale ponownie.
Pamięć jest czyszczona domyślnie po 900 sekundach (15minut), ale można wartość tę zmienić za pomocą parametru `timeout`.

Jeżeli z jakiegoś powodu nie chcesz nic instalować, użyj przynajmniech cache, zawsze to jakieś odciążenie :)
{% highlight bash%}
git config --global credential.helper 'cache --timeout=300'
{% endhighlight %}
Oficjalna dokumentacja - [git-scm.com/docs/git-credential-cache](https://git-scm.com/docs/git-credential-cache)

### _Store_ credential helper (wbudowany)
Store keeps your username and password in... plain text file! It's totally insecure and use it only if you don't care about your account (for example during some kind of workshops).
{% highlight bash%}
git config --global credential.helper store
{% endhighlight %}
Official description - [git-scm.com/docs/git-credential-store](https://git-scm.com/docs/git-credential-store)

### _Git Credential Manager for Mac and Linux_ (autorstwa Microsoft)
Windows users are familiar with convenient _Git Credential Manager for Windows_ which is integrated with OS way of storing credentials. It can be installed with official wizard or during git installation on Windows (there is checkbox to select).
And recently Microsoft announced release of... _Git Credential Manager for Mac and Linux_. I was positively surprised, till I tried to use it on my _Linux Mint 19 Tara_. Installation was successful (but not without complications) and attempt to use it ended up with error:
{% highlight bash%}
Fatal: java.lang.RuntimeException encountered. Details: 
Secure credential storage is not available on this operating system. You may opt-in to store credentials in an unencrypted file under your user home directory by running 'git config --global credential.canFallBackToInsecureStore true'.
fatal: credential helper '!/usr/lib/jvm/java-11-openjdk-amd64/bin/java -Ddebug=false -Djava.net.useSystemProxies=true -jar /home/linuxbrew/.linuxbrew/Cellar/git-credential-manager/2.0.4/libexec/git-credential-manager-2.0.4.jar' told us to quit
{% endhighlight %}
I have opened the issue and till now I haven't received any response (more than 2 months) and recently I have seen the same issue created for _Ubuntu 18.04_. So currently it doesn't work on Linux Mint and Ubuntu.

Official description - [github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux](https://github.com/Microsoft/Git-Credential-Manager-for-Mac-and-Linux)

## _Libsecret_ git credential storage (autorstwa GNOME)
The best way to store Git credentials on Linux used to be _GNOME Keyring_ (libgnome-keyring), but as it is specific to GNOME, [it is deprecated since January 2014](https://mail.gnome.org/archives/commits-list/2014-January/msg01585.html).
For Git versions 2.11+ you should use credential helper based on _libsecret_.
Installation and configuration takes only 4 bash commands :)
{% highlight bash%}
sudo apt-get install libsecret-1-0 libsecret-1-dev
cd /usr/share/doc/git/contrib/credential/libsecret
sudo make
git config --global credential.helper /usr/share/doc/git/contrib/credential/libsecret/git-credential-libsecret
{% endhighlight %}
That's all, next time when you'll be asked for your username and password will be the last time on this device :)

Official description - [wiki.gnome.org/Projects/Libsecret](https://wiki.gnome.org/Projects/Libsecret)
