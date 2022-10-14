import { Environment } from "./type/environment.type";

const environment = require('../../../assets/environment.json');

export const getEnvironment = () => environment as Environment;