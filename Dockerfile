FROM 8.15.0-alpine

WORKDIR ~/experiments/cryptoring
RUN yarn jest
RUN yarn build
CMD ["yarn", "start"] 
