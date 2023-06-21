import axios from 'axios';
import { log, warn, error } from './logs/log.js';
import fs from 'fs';
import { jsonPlaceholderClient } from './utils/axios.util.js';

const URL = '/posts';

const response = await jsonPlaceholderClient.get(URL);
const keyOfResponse = Object.keys(response);
const typeOfKeyOfResponse = keyOfResponse.map(key => typeof key);
const valueOfResponse = Object.values(response);
const typeOfValueOfResponse = valueOfResponse.map(value => typeof value);
console.log(keyOfResponse); // [ 'status', 'statusText', 'headers', 'config', 'request', 'data' ]
console.log(typeOfKeyOfResponse); // [''string', 'string', 'string', 'string', 'string', 'string']

console.log(valueOfResponse);
console.log(typeOfValueOfResponse); // [ 'number', 'string', 'object', 'object', 'object', 'object' ]

const { data, status } = response;
console.log(data);
