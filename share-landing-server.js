// Serves ONLY the landing page, read fresh on every request, so edits show on refresh.
const http = require('http'), fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'ai-receptionist-landing.html');
const port = +process.argv[2] || 8080;
const server = http.createServer((req, res) => {
  const p = req.url.split('?')[0];
  if (p !== '/' && p !== '/index.html') { res.writeHead(404); return res.end('Not found'); }
  fs.readFile(file, (e, d) => {
    if (e) { res.writeHead(500); return res.end('Error'); }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(d);
  });
});
server.on('error', e => { console.log(e.code === 'EADDRINUSE' ? 'Port ' + port + ' is already in use. The page is probably already being shared - check for another open window.' : 'Error: ' + e.message); });
server.listen(port, '0.0.0.0', () => { const ips = Object.values(require('os').networkInterfaces()).flat().filter(i => i && i.family === 'IPv4' && !i.internal).map(i => 'http://' + i.address + ':' + port); console.log('Landing page is live. Share this link with people on your WiFi:\n  ' + ips.join('\n  ') + '\nKeep this window open. Close it to stop sharing.'); });
