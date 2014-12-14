
# this dir
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

NM := node_modules

# BIN directory
BIN := $(THIS_DIR)/$(NM)/.bin

# applications
NODE ?= node
BROWSERIFY ?= $(NODE) $(BIN)/browserify
JADE ?= $(NODE) $(BIN)/jade
STYLUS ?= $(NODE) $(BIN)/stylus

build:
	$(JADE) index.jade -o site/
	$(STYLUS) style.styl -o site/
	@$(BROWSERIFY) app.js > site/app.js

init:
	npm install
	make build

gh:
	make build
	mkdir -p gh-tmp
	cp site/* gh-tmp/
	git checkout gh-pages
	git pull origin gh-pages
	cp gh-tmp/* .
	git add ./ -v
	git commit -m "gh-pages: updated"
	git push origin gh-pages
	git checkout stage
	rm -rf gh-tmp

.PHONY: build init