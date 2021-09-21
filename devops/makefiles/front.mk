### FRONT
# ¯¯¯¯¯¯¯¯¯¯¯

front.install: ## Install front with its dependencies
	docker-compose run --rm front npm install

front.start:
	docker-compose up front

front.bash: ## Connect to front to launch commands
	docker-compose exec front bash

front.daemon: ## Start daemon front in its docker container
	docker-compose up -d front

front.stop: ## Stop front in its docker container
	docker-compose stop front

front.logs:
	docker-compose logs -f front
