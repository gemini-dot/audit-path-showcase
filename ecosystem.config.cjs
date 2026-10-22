// PM2 config for the VPS: build with `npm run build:vps`, then `pm2 start ecosystem.config.cjs`.
module.exports = {
  apps: [
    {
      name: "gemini-cv",
      script: ".output/server/index.mjs",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        HOST: "127.0.0.1",
      },
    },
  ],
};
