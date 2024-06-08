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
