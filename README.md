# rentalx

### docker container build

docker build -t rentx .

### project start in docker with dockerfile

docker run -p 3333:3333 rentx

### viewing the container

docker ps

### accessing project container

docker exec -it pensive_bhabha /bin/bash

### docker-compose comands

docker-compose up -d

docker logs -f rentx

docker-compose stop

### execute migration

yarn typeorm migration:run