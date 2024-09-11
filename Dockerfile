# -----------------------------------------
# Stage: build
# Build the app and bundle it into one file
# -----------------------------------------
FROM node:20-alpine as build

RUN mkdir -p /usr/app
WORKDIR /usr/app

RUN yarn global add uglify-js @vercel/ncc

COPY package.json ./
COPY yarn.lock ./
RUN yarn --frozen-lockfile

COPY ./ ./

RUN yarn build
RUN ncc build dist/main.js -m -o build
RUN uglifyjs build/index.js -c -m -o app.js

# -----------------------------------------
# Stage: Production
# this will save a lot of image size
# -----------------------------------------
FROM node:20-alpine as production

COPY --from=build /usr/app/app.js /usr/app/

EXPOSE 80

CMD ["node", "/usr/app/app.js"]