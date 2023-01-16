# node:16.19-alpine3.17
FROM node@sha256:1298fd170c45954fec3d4d063437750f89802d72743816663664cfe9aa152b4b

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g expo-cli@latest
RUN npm i --unsafe-perm --allow-root -g npm-check-updates

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

EXPOSE 19000 19001 19002 19006

RUN mkdir /opt/react_native_app
COPY ./package.json ./package-lock.json /opt/react_native_app/
ENV PATH /opt/react_native_app/.bin:$PATH
RUN chown -R node:node /opt/react_native_app

WORKDIR /opt/react_native_app

USER node
RUN npm install

ENTRYPOINT [ "npm","start"]
