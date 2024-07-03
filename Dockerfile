FROM node:20 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM node:20 AS runner
ARG EXPOSE_PORT=3000
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY --from=builder /app/dist ./
EXPOSE ${EXPOSE_PORT}
CMD ["node", "main"]