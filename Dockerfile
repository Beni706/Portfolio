# docker run -p 4321:4321 astro-portfolio (Pour lancer le conteneur)
# docker build -t astro-portfolio .      (Pour construire l'image)

# Stage 1: Build the Astro site
# Utilise une image Node.js légère pour builder le site Astro
FROM node:20-alpine AS builder
WORKDIR /app
# Copie les fichiers de dépendances pour installer les modules
COPY package.json pnpm-lock.yaml ./
# Installe pnpm et les dépendances du projet
RUN npm install -g pnpm && pnpm install --frozen-lockfile
# Copie tout le code source dans l'image
COPY . .
# Build le site Astro (génère le dossier dist)
RUN pnpm build

# Stage 2: Serve the built site
# Utilise une nouvelle image Node.js légère pour servir le site
FROM node:20-alpine AS runner
WORKDIR /app
# Copie le site généré depuis l'étape de build
COPY --from=builder /app/dist ./dist
# Copie le package.json pour la cohérence
COPY --from=builder /app/package.json ./
# Installe le serveur statique 'serve' pour héberger le site
RUN npm install -g serve
# Expose le port 4321 (le site sera accessible dessus)
EXPOSE 4321
# Commande de démarrage du conteneur : lance le serveur sur le dossier dist
CMD ["serve", "./dist", "-l", "4321"]
