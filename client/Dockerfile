FROM node:alpine as BUILD

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=BUILD /app/dist /dist

COPY nginx/nginx.conf /nginx.conf

CMD ["nginx", "-g", "daemon off;", "-c", "/nginx.conf"]