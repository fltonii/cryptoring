FROM node:8.15.0-alpine

WORKDIR /cryptoring

COPY . /cryptoring

RUN yarn install
RUN yarn jest
RUN yarn build
CMD ["yarn", "start"] 
