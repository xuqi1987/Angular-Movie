### 拉取angular-cli Docker

	$ docker container run --rm -it -v $(pwd):/opt -w /opt teracy/angular-cli /bin/bash
	Starting virtual X frame buffer: Xvfb.
	Executing command /bin/bash
	root@265dcf6e7241:/opt# ng --version
	    _                      _                 ____ _     ___
	   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
	  / △ \ | ‘_ \ / _` | | | | |/ _` | ‘__|   | |   | |    | |
	 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
	/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
	               |___/
	@angular/cli: 1.0.0-rc.2
	node: 6.10.0
	os: linux x64
	root@265dcf6e7241:/opt# ng new new-ng2-app --style scss -sg -si
	root@265dcf6e7241:/opt# cd new-ng2-app
	root@265dcf6e7241:/opt/new-ng2-app# ng set --global packageManager=yarn
	
“exit" the running container and then run a new container with:

	$ cd new-ng2-app
	$ docker container run --name new-ng2-app -it -v $(pwd):/opt/app -w /opt/app -p 4200:4200 teracy/angular-cli /bin/bash
	Starting virtual X frame buffer: Xvfb.
	Executing command /bin/bash
	root@0273ddf59943:/opt/app# yarn
	root@0273ddf59943:/opt/app# ng serve --host=0.0.0.0
	
	
退出后再运行
	docker exec -it new-ng2-app  ng serve --host=0.0.0.0

	
### 安装angular-cli
	https://github.com/angular/angular-cli
	
	

	


