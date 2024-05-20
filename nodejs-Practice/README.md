Node.js Web develop
===

# Long term Target
Trying to use the Docker build a node.js server that can interact with Nginx and MySQL

* 2024/04/20 build a docker container to run a node.js

## Beginners Guide

If you are a total beginner to this, start here!

1. download the docker
    1. For mac user https://docs.docker.com/desktop/install/mac-install/
   
    2. For windows user https://docs.docker.com/desktop/install/windows-install/
       
  
2. open your command line and pull the node.js official image
```
docker pull node:lastest
```
3. clone the code from git to your personal directory or download the file
```
git clone git@github.com:humbeatbox/WebProject.git
```


How to build the project
---
1. move to directory

```bash=
cd firstExpress
```
2. Use the docker file to build the image (name: first-node:v1)

```dockerfile=
sudo docker build -t first-node:v1 .
```
3. run the docker and set the listen port in 9090
```dockerfile=
docker run -p 9090:3333 --name express-node -d first-node:v1
```

4. open the web page and connect to "localhost:9090"


## Appendix and FAQ

:::info
**Find this document incomplete?** Leave a comment!
:::

###### tags: `Node.js` `Docker`
