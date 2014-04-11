
THIS_MAKEFILE_PATH:=$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR:=$(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

BIN := $(THIS_DIR)/node_modules/.bin

# apps
NODE ?= node
BRSFY ?= $(NODE) $(BIN)/browserify

test:
	@./node_modules/.bin/mocha \
		--require should \
		--timeout 10s \
		--slow 3s \
		--bail \
		--reporter spec

build:
	@$(BRSFY) main.js -o dist/wpcom.js

bundle: build
	cp dist/bundle.js example/browser/public/wpcom.js

.PHONY: test
