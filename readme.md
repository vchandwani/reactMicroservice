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

Commands :
kubectl version

MiniKube commands:

minikube start --vm=true
minikube start --driver=hyperv
minikube start --driver=virtualbox

Kubernetes Cluster : Collection of nodes + a master to manage them

Node : A virtual Machine that will run our containers

Pod : More or less similar to containers, it can run multiple containers

Deployment : Monitors a set of pods, make sure they are running and restarts them if they crash

Service : Provides an easy-to-remember url to access a running container

Creating a POD:

In terminal:

cd posts
docker build -t varunchandwani/posts:0.0.1 .
docker ps

Create yaml file for posts under infra/k8s folder
Then execute : kubectl apply -f posts.yaml
Alternatively execute from main directory : run kubectl apply -f infra/k8s/

Docker and K8s Commands

| Docker                                                 | K8S                                 |
| :----------------------------------------------------- | :---------------------------------- |
| docker ps -> status of running containers              | kubectl get pods                    |
| "docker run -it [dockerID/posts] sh ,                  |                                     |
| Executes shell inside service"                         | kubectl exec -t [pod_name] [cmd]    |
| docker run [dockerID/posts] or docker run [imageId]    | kubectl logs [pod_name]             |
| docker logs [container_id]                             | kubectl delete pod [pod_name]       |
| "docker build -t [dockerID/posts] .                    |                                     |
| (Example: docker build -t varunchandwani/event-bus .)" | kubectl apply -f [config file name] |
|                                                        | kubectl describe pod [pod_name]     |

Minikube Users:
If you are using a vm driver, you will need to tell Kubernetes to use the Docker daemon running inside of the single node cluster instead of the host.

Run the following command:
eval $(minikube docker-env)

Note - This command will need to be repeated anytime you close and restart the terminal session.

Afterward, you can build your image:
docker build -t USERNAME/REPO .

Update, your pod manifest as shown above and then run:
kubectl apply -f infra/k8s/
