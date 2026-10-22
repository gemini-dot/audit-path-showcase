# Déploiement sur le VPS (Node.js + PM2) — https://gemini.chinasamy.com/cv

## 1. Construire et lancer

```bash
cd /var/www/gemini-cv          # dossier du projet (à adapter)
npm install
npm run build:vps              # produit .output/ (serveur Node + fichiers publics)
pm2 start ecosystem.config.cjs # lance "gemini-cv" sur 127.0.0.1:3001
pm2 save
```

Le port 3001 est défini dans `ecosystem.config.cjs` (à changer s'il est déjà pris par Karmalio).

Mise à jour ultérieure :

```bash
git pull && npm install && npm run build:vps && pm2 reload gemini-cv
```

## 2. Nginx (dans le bloc `server` de gemini.chinasamy.com)

```nginx
# Fichiers statiques du CV (JS, CSS, favicon)
location /cv/assets/ {
    alias /var/www/gemini-cv/.output/public/assets/;
    expires 1y;
    add_header Cache-Control "public, immutable";
}
location = /cv/favicon.png {
    alias /var/www/gemini-cv/.output/public/favicon.png;
}

# Photos et PDF du CV (hébergés sur le stockage Lovable)
location /__l5e/ {
    proxy_pass https://audit-path-showcase.lovable.app;
    proxy_set_header Host audit-path-showcase.lovable.app;
    proxy_ssl_server_name on;
}

# Pages du CV
location = /cv { return 301 /cv/; }
location /cv/ {
    proxy_pass http://127.0.0.1:3001;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Puis : `sudo nginx -t && sudo systemctl reload nginx`.
