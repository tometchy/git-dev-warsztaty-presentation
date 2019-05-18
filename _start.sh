if [ "$1" = 'screen' ]; then
	if [ -z "$STY" ]; then exec screen -dm -S screenName /bin/bash "$0"; fi
fi
echo "Removing _site"
rm -r _site
bundle exec jekyll serve --incremental

