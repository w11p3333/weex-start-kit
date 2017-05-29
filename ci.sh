set -e
# test web
cd Web
npm i -f
npm run lint
npm run build