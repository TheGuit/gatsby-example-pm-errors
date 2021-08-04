ARG NODE_VERSION
ARG UID=1000
ARG GID=1000

FROM node:${NODE_VERSION}-alpine

ARG UID
ARG GID

RUN apk --no-cache add shadow \
    gcc \
    musl-dev \
    autoconf \
    automake \
    make \
    libtool \
    nasm \
    tiff \
    jpeg \
    libwebp-tools \
    tiff \
    giflib \
    libjpeg-turbo \
    libwebp \
    musl \
    zlib \
    zlib-dev \
    file \
    pkgconf \
    util-linux \
    python \
    make \
    g++ \
 && usermod --uid "$UID" node ; groupmod --gid "$GID" node \
 && npm install -g pnpm

USER node