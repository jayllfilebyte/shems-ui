# SHEMS - UI

SHEMS - Short for **_Smart Home Energy Management System_**

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## My environment

npm: 10.9.2
node: 22.13.0
Next.js: 15.1.4

## How to build and run

```bash
npm run build
npm run start
# or
npm run dev
```

## Before open the browser

Replace the content in [./node_modules/dotted-map/index.js](./node_modules/dotted-map/index.js) with the content in [./src/components/world-map-patched-file.js](./src/components/world-map-patched-file.js) **_(Only required for the first time)_**

And then you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can find admin's username, admin's password and user's password in [./src/constants/constants.ts](./src/constants/constants.ts)

You can disable global toast in the file mentioned above also.

## Screenshots

### **_For both user and admin_**

#### Login

![login](./screenshots/login.png)

#### Login dialog

![login-dialog](./screenshots/login-dialog.png)

---

### **_For user_**

#### Dashboard

![user-dashboard](./screenshots/user-dashboard.png)

#### Dashboard solar drawer

![user-dashboard-solar-drawer](./screenshots/user-dashboard-solar-drawer.png)

#### Dashboard battery drawer

![user-dashboard-battery-drawer](./screenshots/user-dashboard-battery-drawer.png)

#### Dashboard grid drawer

![user-dashboard-grid-drawer](./screenshots/user-dashboard-grid-drawer.png)

#### Appliance

![user-appliance](./screenshots/user-appliance.png)

#### Appliance detail

![user-appliance-item](./screenshots/user-appliance-item.png)

#### Grid

![user-grid](./screenshots/user-grid.png)

#### Trading

![user-trading-map](./screenshots/user-trading-map.png)
![user-trading-trading](./screenshots/user-trading-trading.png)

---

### **_For admin_**

#### Dashboard

![admin-dashboard](./screenshots/admin-dashboard.png)
