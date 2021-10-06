require("ts-node/register");

global.console = {
  log: (m) => process.stdout.write(`${m} \n`),
  // log: jest.fn(),
  warn: jest.fn(),
  error: (m) => process.stderr.write(`${m} \n`)
}
