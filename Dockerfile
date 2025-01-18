## Use Node Slim image
FROM node:20-slim
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . .

## Start the application
CMD ["node", "dist/quiz-angular/server/server.mjs"]
