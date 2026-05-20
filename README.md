# Azoka
Azoka Fullstack Ecommerce Project

Refrences :
- [MedusaJS](https://github.com/medusajs/medusa-starter-default)
- [mobile-medusa](https://github.com/bidah/mobile-medusa)
- [Mercerjs (soon)](https://mercurjs.com/)
## Steps to run project:

- Clone repo ``git@github.com:Azoka-Project/azoka.git``

- ### Backend run:
- In vs code terminal , open 1 new Windows power shell tab 
- `cd azoka-backend-admin` 
- Then `npm i`
- After finishing install (make sure doocker database container running before before running the backend) , run `npm run dev`

- ### Expo App run:
- In new windows powershell terminal, run `npm i`
- After finishing install ,`cd mobile-medusa-main` then  run  `npm start`
- #### Note : you need to check the MEDUSA_BACKEND_URL in mobile-medusa-main\lib\config.ts , try instead of localhost change it with your ip : run `ipconfig` to know you ip , just changes it to expo go ip in the expo go`s connection string

## Docker (full stack)

Run everything with a single command:

```
docker compose up --build
```

If you hit `npm ERR! code EAI_AGAIN` during image builds, set Docker Desktop DNS servers to `8.8.8.8` and `1.1.1.1` then re-run.

What this includes:

- PostgreSQL database with persistent volume
- Medusa backend + Admin plugin
- Seed and migrations on first run
- Expo dev server for the mobile app

### Expo backend URL

The mobile app reads the backend URL from `EXPO_PUBLIC_MEDUSA_BACKEND_URL`.

- Default in Docker uses `http://host.docker.internal:9000`
- For Expo Go on a physical device, set it to your machine LAN IP, for example:

```
EXPO_PUBLIC_MEDUSA_BACKEND_URL=http://192.168.1.10:9000
```

You can auto-fill this using a helper script:

```
./scripts/set-expo-backend-url.ps1
```

That script writes the LAN IP into `.env` so Docker Compose picks it up.

### Expo Go across different networks

If you want Expo Go to connect from another network, start Expo with a tunnel:

```
npx expo start --tunnel
```

In that case your backend must be publicly accessible (deploy it, or expose it with a tunnel like ngrok).

If you want to override it locally without Docker, update `mobile-medusa-main/lib/config.ts`.
