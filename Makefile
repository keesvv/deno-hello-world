.DEFAULT_GOAL := install

install:
	deno cache --unstable src/app/index.ts

run:
	@deno run --allow-net --unstable src/app/index.ts
