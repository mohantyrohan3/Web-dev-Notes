# Docker - Build share and run applications with container

# Images are templates of a project
    - kind of ready to use software
    - made with source codes , libraries , external dependencies and tools
    - to make change in image you have to make a new image

# Container - Running instance of Image
    - runnable instance of an image

# In Docker Hub we have to create from an parent image , because we cant create images for entire nodejs, we can create image for our application which will use nodejs


# In a docker file , theres the base image , then theres layer1 , layer2 etc



Making a Docker Nodejs

- docker pull node
- docker run -it node /bin/bash



Making my Own Node js Project and containarizing it

- Make a folder inside it run npm init and make a simple express app 
- Create a dockerfile which will be helpful in creating image 

FROM node:latest   // base image
COPY . .      //Source all files and destination folder
RUN npm install
EXPOSE 3000   // Exposing the port
CMD [ "node","index.js" ]    // the commands


- Now run command ---------      docker build -t Name_OF_IMAGE .   ---------- Here . represents where to create the dockerimage
- Then run the image in an container

- You can also use .dockerignore to ignore files  (*.txt)


For deleting docker images

- docker images
- docker image rm image_name
- docker image rm image_name -f  (for forcefully deleting the image)

- docker ps -a   // for getting the containers
- docker container rm cont_name -f  (for forcefully)


Building Versions
- docker build -t app_name:v2   // builds specific version

For running the containers
- docker run --name container_name -p 3000:3000 image_name:v2


Docker Volumes
- Ask ChatGpt


Docker Compose File

- Multiple commands can put inside compose file(.yaml) , because many time commands cant be remembered
- Create a compose.yaml file

services:
    img:
        build: .
        container_name: name_cont
        ports:
            - 5500:5500
    

- docker compose up



Sharing Image on DockerHub
- Create an image with name of repository created in the docker hub
- then use docker push name_of_repo

