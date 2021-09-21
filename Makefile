.DEFAULT_GOAL := help


### QUICK
# ¯¯¯¯¯¯¯

install: back.install front.install ## Install

daemon: back.daemon front.daemon nginx.daemon ## Start

stop: back.stop front.stop ## Stop

logs:
	docker-compose logs -f


include devops/makefiles/back.mk
include devops/makefiles/front.mk
include devops/makefiles/nginx.mk
