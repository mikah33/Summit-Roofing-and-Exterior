const { app, BrowserWindow, shell, Menu } = require("electron");

// The live site the desktop app displays.
const SITE_URL = "https://summitroofing.work";

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: "#0f1b2d",
    title: "Summit Roofing & Exterior",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL(SITE_URL);

  // Open external links (tel:, mailto:, other sites) in the user's real browser
  // instead of trapping them inside the app window.
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith(SITE_URL)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  // If the site can't load (e.g. no internet), show a simple message.
  win.webContents.on("did-fail-load", () => {
    win.loadURL(
      "data:text/html;charset=utf-8," +
        encodeURIComponent(
          `<body style="font-family:system-ui;background:#0f1b2d;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center">
             <div>
               <h1 style="margin:0 0 8px">Summit Roofing &amp; Exterior</h1>
               <p style="opacity:.7">Couldn't reach the site. Check your internet connection, then reopen the app.</p>
             </div>
           </body>`,
        ),
    );
  });
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
