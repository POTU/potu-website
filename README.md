POTU website
============

To build the website, run:

```shell
npm install
.\node_modules\.bin\browserify .\src\js\main.js -t reactify | .\node_modules\.bin\uglifyjs > .\dist\bundle.js
```

After the operation the website is available in .\dist.
