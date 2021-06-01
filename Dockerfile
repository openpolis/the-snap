FROM node:16-slim

ENV HUSKY=0

RUN apt-get update && \
    apt-get install -y wget gnupg ca-certificates vim less && \
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && \
    apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/* 

RUN mkdir -p /usr/src && \
    groupadd -r runner && \
    useradd -r -g runner -G audio,video runner && \
    mkdir -p /home/runner/Downloads && \
    chown -R runner:runner /usr/src && \
    chown -R runner:runner /home/runner && \
    chown -R runner:runner /usr/src


USER runner
COPY . /usr/src/
WORKDIR /usr/src/

RUN npm ci
