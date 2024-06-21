/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './app/index.css'

// // import '@fontsource/roboto/300.css'
// // import '@fontsource/roboto/400.css'
// // import '@fontsource/roboto/500.css'
// // import '@fontsource/roboto/700.css'
// // import '@fontsource/bai-jamjuree/300.css'
// // import '@fontsource/bai-jamjuree/400.css'
// // import '@fontsource/bai-jamjuree/500.css'
// // import '@fontsource/bai-jamjuree/700.css'
// // import '@fontsource/roboto-mono/300.css'

// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import AppLogger from './api/utils/appLogger'
import './app/App'

console.log(
  '👋 This message is being logged by "renderer.ts", included via Vite',
)
console.log(
  `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`,
)

const func = async () => {
  const response = await versions.ping()
  console.log(response) // prints out 'pong'
}

func()
