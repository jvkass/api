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

### Testes Unitários 

yarn add jest @types/jest -D

yarn jest --init

#### Config inicial

√ Would you like to use Jest when running "test" script 
in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... yes
√ Choose the test environment that will be used for testing » node
√ Do you want Jest to add coverage reports? ... no      
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes

yarn add ts-jest -D

Procurar a propriedade preset no arquivo jest.config e descomentar e colocar ts-jest

`preset: "ts-jest",`

Mapeamento das classes no testMatch

`testMatch: ["**/*.spec.ts"],`

Alterar o bail para caso algum teste venha a falha parar os testes mudando o valor default para true
  
`bail: true,`

### Testes de Integração

-> routes -> controllers -> useCases -> repository
<- repository <- useCases <- controllers <- routes

Aplicação da metodologia do TDD(Test Driven Development)