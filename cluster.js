// cluster.js

const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length - 1; // Use one less than available parallelism
  console.log("numCPUs", numCPUs)

  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
  
} else {
  const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: `http://localhost:${4000 + cluster.worker.id}` });
  });

  server.listen(4000 + cluster.worker.id, () => {
    console.log(`Worker ${cluster.worker.id} listening on http://localhost:${4000 + cluster.worker.id}`);
  });
}
