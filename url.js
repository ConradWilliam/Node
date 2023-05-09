const http = require('http');

const url = 'http://example.com/users/25/projects?type=personal&month=january';

// Make a GET request with the URL and process the response.
http.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(data);
  });
});

const url = require('url');


const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

const myUrl = new URL('https://www.example.com/p/a/t/h?prop1=value1&prop2=value2');

const hostname = myUrl.hostname;
const pathname = myUrl.pathname;
const searchParams = myUrl.searchParams;




const querystring = require('querystring');


const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

const queryToParse = url.split('?')[1];

const parsedQuery = querystring.parse(queryToParse);
parsedQuery.exercise = 'querystring';
const modifiedQueryString = querystring.stringify(parsedQuery);