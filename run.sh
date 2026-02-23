#!/usr/bin/env bash
# DEBUG=myapp:* npm start

npx tsc --esModuleInterop express.ts && mv express.js express.cjs && node express.cjs
