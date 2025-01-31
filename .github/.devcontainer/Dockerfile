FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm
# LABEL org.opencontainers.image.source=https://github.com/$OWNER/$REPO_NAME
LABEL org.opencontainers.image.description "A prebuilt Dev Container image."
RUN npm install -g playwright
RUN npx playwright install-deps
RUN npx playwright install