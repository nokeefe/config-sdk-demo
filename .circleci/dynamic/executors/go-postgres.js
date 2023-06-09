const CircleCI = require("@circleci/circleci-config-sdk");
const go = new CircleCI.executors.DockerExecutor(
    "cimg/go:1.19.5",
    "medium"
);
module.exports = go;

const postgres = new CircleCI.executors.DockerExecutor(
    "cimg/postgres:15.1",
    "medium"
);
module.exports = postgres;
