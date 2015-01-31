POTU website
============

To build the website, run:

```shell
npm install
.\node_modules\.bin\browserify .\src\js\main.js -o .\dist\bundle.js -t reactify
```

After the operation the website is available in .\dist.
