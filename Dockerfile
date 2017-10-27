FROM node:6.11.5-alpine
MAINTAINER Jaric Sng <jaric.sng@gmail.com>

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/ng4-express && cp -a /tmp/node_modules /opt/ng4-express

# Setup workdir
WORKDIR /opt/ng4-express
COPY . /opt/ng4-express

# run
EXPOSE 3000
CMD ["npm", "start"]
