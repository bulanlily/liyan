1, install required package globally

npm install -g karma

npm install -g karma-junit-reporter

2, run the following under "liyan/src/main/resources/app" to start http server

python -m SimpleHTTPServer 8888

3, run the following under root repo to run unit test

karma start src/test/karma.conf.js
