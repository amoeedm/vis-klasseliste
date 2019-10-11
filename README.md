# VIS klasseliste

## About
Visma VIS is an LMS used by Norwegian upper secondary schools in certain regions. VIS klasseliste is a Google Chrome extension with the aim of generating printer-friendly grid of students and their names.

## Demonstration

<img src="https://raw.githubusercontent.com/amoeedm/vis-klasseliste/master/docs/demo.gif">

## Installation

1. Make a local folder named `VIS-klasseliste`.
2. Add the files from `app` folder.
3. Navigate to `chrome://extensions/` in the Chrome browser.
4. Enable `Developer mode` (Norwegian: `Utviklermodus`).
5. Click on the `Load unpacked extension` (Norwegian: `Last inn upakket`) and choose the local folder `VIS-klasseliste`.
6. Look for the icon <img src="https://raw.githubusercontent.com/amoeedm/vis-klasseliste/master/app/icon.png" width="20"> on your toolbar.

## Tips and tricks

You can permanently change the default number of columns of the grid by editing `klasseliste.js` and removing or adding `1fr` to `elevGrid.style.gridTemplateColumns`.

## Troubleshooting

The extension assumes that the url is of the form `https://*.inschool.visma.no/#/app/attendance/*`

