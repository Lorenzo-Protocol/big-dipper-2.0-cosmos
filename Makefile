# FILTER get name from package.json
PACKAGE_NAME = $(shell jq -r '.name' package.json)

all: codegen start

start:
	@echo "Starting $(PACKAGE_NAME)..."
	@corepack enable
	@yarn dev --filter $(PACKAGE_NAME)

codegen:
	@echo "Generating code for $(PACKAGE_NAME)..."
	@cd apps/$(PACKAGE_NAME) && yarn graphql:codegen

.PHONY: start codegen