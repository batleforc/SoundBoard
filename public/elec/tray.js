const open = require("open");
const pack = require("../../package.json");
const { Tray, Menu } = require("electron");
const path = require("path");

let tray = null;

async function openInBrowser() {
  open("http://localhost:5000");
}

function createMenu(quit, openInClient) {
  return new Menu.buildFromTemplate([
    {
      label: `${pack.name} ${pack.version}`,
      enabled: false,
    },
    { type: "separator" },
    {
      label: "Open in browser",
      click: () => openInBrowser(),
    },
    {
      label: "Open in client",
      click: openInClient,
    },
    { type: "separator" },
    { label: "Exit", click: () => quit() },
  ]);
}

async function createTray(icon, mainWindow, openInClient, quit) {
  tray = new Tray(icon);
  tray.setToolTip(`${pack.name} ${pack.version}`);
  tray.setContextMenu(createMenu(quit, async () => await mainWindow()));
  tray.setIgnoreDoubleClickEvents(true);
  tray.on("click", async () => await mainWindow());

  return tray;
}

module.exports = (icon, MainWindow, openInClient, quit) =>
  tray || createTray(icon, MainWindow, openInClient, quit);
