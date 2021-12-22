FROM node:16 

WORKDIR /class_test/
COPY ./package.json /class_test/
COPY ./yarn.lock /class_test/
RUN yarn install

COPY . /class_test/
RUN yarn build:ssr

CMD yarn start
