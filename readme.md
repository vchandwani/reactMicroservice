React with NodeJS using Docker containers

Query service is main service and even if other services fail, user can still see the data on the application though new data won't be posted

Folder structure

Client : run npm start : Runs on 3000 Port

Posts : run npm start : Runs on 4000 Port

Comments : run npm start : Runs on 4001 Port

Query : run npm start : Runs on 4002 Port

Moderation : run npm start : Runs on 4003 Port

Event Bus : run npm start : Runs on 4005 Port

Application uses Packages such as Axios, Nodemon, Express for execution

Dockers
Application uses docker container, to run individual services. Helps in running copy of a services.

Kubernetes
Tool for running bunch of containers together. Contains configuration having how to run our containers together.
It will make communication straightforward and easy to manage.

Docker commands
Go to a specific directory and run > docker build . or > docker build -t [dockerId/posts] .
Run docker image > docker run ##image_id or > docker run [dockerId/posts]

Example:
docker build -t [dockerID/posts] . (Example: docker build -t varunchandwani/event-bus .)
docker run [dockerID/posts] or docker run [imageId]
docker run -it [dockerID/posts] sh , Executes shell inside service
docker ps -> status of running containers
docker logs [container_id]
