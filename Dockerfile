FROM node:12.13.0-alpine
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 3000
ENTRYPOINT [ "yarn" ]
CMD [ "start" ]