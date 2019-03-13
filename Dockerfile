FROM node:8.15.0-alpine

WORKDIR /cryptoring

COPY . /cryptoring

ENV REACT_APP_API_KEY=525b33ffe0dcd742632651f78743f158


RUN yarn jest
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"] 

