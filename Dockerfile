FROM node:12.5.0-alpine

COPY node_modules node_modules/
COPY src src/
COPY index.js index.js

CMD ["index.js"]
