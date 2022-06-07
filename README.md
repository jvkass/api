# rentalx

### docker container build

docker build -t rentx .

### project start in docker

docker run -p 3333:3333 rentx

### viewing the container

docker ps

### accessing project container

docker exec -it pensive_bhabha /bin/bash