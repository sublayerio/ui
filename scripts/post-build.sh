mv demo/dist/index.html demo/dist/200.html

# https://stackoverflow.com/questions/16745988/sed-command-with-i-option-in-place-editing-works-fine-on-ubuntu-but-not-mac
sed -i.bak 's/src=\"demo/src=\"\/demo/g' demo/dist/200.html && rm demo/dist/200.html.bak
sed -i.bak 's/href=\"demo/href=\"\/demo/g' demo/dist/200.html && rm demo/dist/200.html.bak
