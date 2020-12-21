.DEFAULT_GOAL := install

install:
	deno cache --unstable index.ts

run:
	@deno run --allow-net --unstable index.ts
