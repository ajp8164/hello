/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const defaultMiddlewares = jsonServer.defaults();
const helloMiddlewares = require('./middleware.js');

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '50mb' }));

// Router options.
router.db._.id = '_id';

server.use(defaultMiddlewares);
server.use(helloMiddlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running at http://localhost:3000');
});
