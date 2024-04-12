module.exports = {
  apps : [{
    name: "app-api-express",
    script: 'ts-node',
    args: '-r tsconfig-paths/register -r ts-node/register ./src/app.ts',
    watch: false,
    interpreter: 'node',
    interpreter_args: '--require ts-node/register --require tsconfig-paths/register'
  }]
}