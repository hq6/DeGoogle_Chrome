all:
	mkdir -p DeGoogle
	cp content.js  manifest.json icon32.png DeGoogle
	cd DeGoogle && zip DeGoogle.zip content.js  manifest.json icon32.png
	google-chrome --pack-extension=DeGoogle --pack-extension-key=DeGoogle.pem

clean:
	rm -rf DeGoogle
