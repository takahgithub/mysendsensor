FROM node:10.16.3
WORKDIR /app

COPY app/package.json /app/package.json
RUN cd /app; npm install --production

COPY app/ /app/
EXPOSE 3000
CMD ["node", "index.js"]
