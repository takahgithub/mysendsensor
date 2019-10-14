FROM node:10.16.3
WORKDIR /app
COPY app/ /app/
EXPOSE 3000
CMD ["node", "index.js"]
