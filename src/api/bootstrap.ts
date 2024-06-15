import { Express } from 'express'

// async function registerControllers(app: Express) {
//   const controllerFiles = import.meta.glob('./api/**/*.ts')
//   for (const file in controllerFiles) {
//     const controllerModule = await controllerFiles[file]()
//     const controllerName = controllerModule.default.name || file.slice(2, -3)
//     app.use(`/${controllerName}`, controllerModule.default)
//   }
// }

export function bootstrap(app: Express) {
  console.log('bootstrap')
  // registerControllers(app)
}
