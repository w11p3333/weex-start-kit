set -e
# test web
cd Web
npm install
npm run lint
npm run build