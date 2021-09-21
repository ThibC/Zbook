### API
# ¯¯¯¯¯¯¯¯¯¯¯

back.install: ## Install express server with its dependencies
	docker-compose run --rm back npm i

back.start: ## Start express server in its docker container
	docker-compose up back

back.bash: ## Connect to express server to lauch commands
	docker-compose exec back bash

back.daemon: ## Start daemon express server in its docker container
	docker-compose up -d back

back.stop: ## Start express server in its docker container
	docker-compose stop back

back.logs:
	docker-compose logs -f back
