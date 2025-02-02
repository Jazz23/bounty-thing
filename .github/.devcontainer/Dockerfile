FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm
# LABEL org.opencontainers.image.source=https://github.com/$OWNER/$REPO_NAME TODO
LABEL org.opencontainers.image.description "A prebuilt Dev Container image."

# Install playwright's dependencies and browsers
RUN npm install -g playwright
RUN npx playwright install-deps

# Configure act to use their medium image
RUN mkdir -p /home/node/.config/act
RUN echo "-P ubuntu-latest=catthehacker/ubuntu:act-latest" > /home/node/.config/act/actrc
RUN chmod -R 777 /home/node/.config/act