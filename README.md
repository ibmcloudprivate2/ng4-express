
# ng4-express
to test drive deploying a simple angular 4 app to IBM Cloud (Bluemix) and also a IBM Cloud Private. With the same codebase deploy as PaaS (Cloud Foundry) and CaaS (Docker) both for off and on prem cloud.

The demo demonstrate the same codebase
- consistent of choice for deploying app to private or public for our users.
- cater to different deployment for cost, security, capacity, performance, scales
- high availability of app for different platform of choice
- used of open technologies

# pre requisite
- cloud foundry CLI
- Bluemix account
- IBM Cloud Private environment
- Git
- angular
- express
- Docker

## TODO
- [x] angular get-started app push to IBM Cloud **Private** - Cloud Foundry
- [x] angular get-started app push to IBM Cloud **Bluemix** - Cloud Foundry
- [ ] angular get-started app push to IBM Cloud **Private**  - Kubernetes
- [ ] angular get-started app push to IBM Cloud **Bluemix** - Kubernetes
- [ ] create CI / CD pipeline using Git and Jenkins
- [ ] load balancer in IBM Cloud **Private** to app in private and public Cloud
- [ ] package a Ubuntu environment with Vagrant and Virtualbox

# About the demo
a [quick start](https://angular.io/guide/quickstart) demo hosted using express.

We will deploy the demo to our IBM Cloud Private first.

# IBM Cloud Private
IBM Cloud Private is setup internal in Singapore IBM Client Centre.

## set the cloud foundry endpoint
skip validation for self-signed cert in my environment
```
cf api https://api.mgmt.cf.sgcc.demo.lan --skip-ssl-validation
```
## login using UAA
```
cf login -u <userid> -p <password>
```
## push the app
the app uses node engines 6, my default environment does not have node 6 buildpack
```
cf push -b https://github.com/cloudfoundry/nodejs-buildpack
```
## list the running apps
```
cf apps
```
my environment display
```
Getting apps in org org / space myspace as cfadmin...
OK

name                        requested state   instances   memory   disk   urls
asean-discovery-news-demo   started           1/1         512M     1G     asean-discovery-news-demo.apps.cf.sgcc.demo.lan
ng4-demo                    started           1/1         512M     1G     ng4-demo.apps.cf.sgcc.demo.lan
```
## access and test the app
use the urls shown in the apps listing above
```
https://ng4-demo.apps.cf.sgcc.demo.lan
```
## scale the running apps
from above we can see there is only 1 instance running, we can scale it easily to 2 instance.
```
cf scale ng4-demo -i 2
```
## delete the running apps
```
cf delete ng4-demo
```


# IBM Cloud
Let deploy the same app to IBM Cloud

## set the cloud foundry endpoint
```
cf api https://api.ng.bluemix.net
```
## login using UAA
```
cf login
```
## push the app
IBM Cloud supports node 6 engine, thus no need reference to node 6 buildpack
```
cf push
```
## list the running apps
```
cf apps
```
```
name                             requested state   instances   memory   disk   urls
ng4-demo                         started           1/1         512M     1G     ng4-demo.mybluemix.net
```
## access and test the app
use the urls shown in the apps listing above
```
https://ng4-demo.mybluemix.net
```
# Containerization of the application
To package the application as a docker image for deployment in Kubernetes.

## Build the docker image
```
docker build -t ng4-express .
```
## Run the Docker Container
```
docker run -p 3000:3000 ng4-express
```
## Access the application
```
http://localhost:3000
```

# IBM Cloud Private - Kubernetes
*TODO*
- [ ] Push image to IBM Cloud Private
- [ ] Deploy docker application
- [ ] Access application
- [ ] Scale application

# References
- [Cloud Foundry CLI](http://docs.cloudfoundry.org/cf-cli/)
