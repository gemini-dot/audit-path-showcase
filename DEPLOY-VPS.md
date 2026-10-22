# Déploiement sur le VPS (Node.js + PM2) — https://www.chinasamy.com/gemini/cv

La racine `www.chinasamy.com/` reste libre pour un futur site.

## Étape 1 — DNS (chez votre fournisseur de nom de domaine)

Créez (ou modifiez) deux enregistrements de type **A** pointant vers l'IP du VPS :

| Nom   | Type | Valeur          |
|-------|------|-----------------|
| `@`   | A    | IP_DE_VOTRE_VPS |
| `www` | A    | IP_DE_VOTRE_VPS |

Vérification depuis le Terminal du Mac (peut prendre jusqu'à quelques heures) :
```bash
ping -c 1 www.chinasamy.com
```

## Étape 2 — Récupérer et lancer le CV (Terminal du Mac, connecté au VPS)

```bash
ssh root@IP_DE_VOTRE_VPS
cd /var/www
git clone <URL_DE_VOTRE_DEPOT_GITHUB> gemini-cv
cd gemini-cv
npm install
npm run build:vps
pm2 start ecosystem.config.cjs   # lance "gemini-cv" sur le port 3001
pm2 save
curl -I http://127.0.0.1:3001/gemini/cv/   # doit répondre "200 OK"
```

Mise à jour ultérieure :
```bash
cd /var/www/gemini-cv && git pull && npm install && npm run build:vps && pm2 reload gemini-cv
```

## Étape 3 — Page d'attente pour la racine

```bash
mkdir -p /var/www/chinasamy
echo '<!doctype html><meta charset="utf-8"><title>chinasamy.com</title><p>Bientôt.</p>' > /var/www/chinasamy/index.html
```

## Étape 4 — Configuration Nginx

```bash
sudo nano /etc/nginx/sites-available/chinasamy.com
```
Collez ceci, puis enregistrez (Ctrl+O, Entrée, Ctrl+X) :

```nginx
server {
    listen 80;
    server_name chinasamy.com www.chinasamy.com;

    # Racine : libre pour un futur site
    root /var/www/chinasamy;
    index index.html;
    location / { try_files $uri $uri/ =404; }

    # Fichiers du CV (mise en page, icône)
    location /gemini/cv/assets/ {
        alias /var/www/gemini-cv/.output/public/assets/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    location = /gemini/cv/favicon.png {
        alias /var/www/gemini-cv/.output/public/favicon.png;
    }

    # Photos et PDF du CV
    location /__l5e/ {
        proxy_pass https://audit-path-showcase.lovable.app;
        proxy_set_header Host audit-path-showcase.lovable.app;
        proxy_ssl_server_name on;
    }

    # Pages du CV
    location = /gemini/cv { return 301 /gemini/cv/; }
    location /gemini/cv/ {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Activez et rechargez :
```bash
sudo ln -s /etc/nginx/sites-available/chinasamy.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## Étape 5 — HTTPS gratuit (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx   # si pas déjà installé
sudo certbot --nginx -d chinasamy.com -d www.chinasamy.com
```
Choisissez la redirection automatique vers HTTPS si on vous le propose.

Testez : https://www.chinasamy.com/gemini/cv

## Étape 6 (optionnelle) — Rediriger l'ancienne adresse gemini.chinasamy.com

Uniquement si `gemini.chinasamy.com` pointe vers le VPS. Ajoutez dans le même fichier :
```nginx
server {
    listen 80;
    server_name gemini.chinasamy.com;
    return 301 https://www.chinasamy.com/gemini/cv/;
}
```
Puis : `sudo certbot --nginx -d gemini.chinasamy.com && sudo systemctl reload nginx`.
