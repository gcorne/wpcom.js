
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
	@echo $(BRSFY)
	@$(BRSFY) main.js -o dist/bundle.js

.PHONY: test
