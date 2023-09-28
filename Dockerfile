FROM  node:18.18-alpine3.17

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3456

CMD ["npm","run","production"]