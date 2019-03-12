FROM node:8.15.0-alpine

WORKDIR /cryptoring

COPY . /cryptoring

RUN yarn test
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"] 

