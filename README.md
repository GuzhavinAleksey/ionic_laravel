<!-- PROJECT LOGO -->
<br />
<p align="center">


  <h3 align="center">IONIC-VUE-LARAVEL</h3>

</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Getting Started](#getting-started)
  * [Installation](#installation)
* [License](#license)
* [Contact](#contact)


<!-- GETTING STARTED -->
## Getting Started
you need PHP,NODE,Composer,


### Installation

1. Clone the repository

```sh
git clone https://github.com/larago-go/larago.git
```
2. Install Ionic
```sh
npm install -g @ionic/cli
```
3. Install NPM packages
```sh
npm install
```
and
```sh
ionic build
```
3. Rename the file .env.example
```sh
mv .env.example .env
```

4. Сreate a database by default this is mysql(when creating use utf8mb4)

5. configure the file .env

6. configure the file connect resources/js/confconnect.ts

7. Copy index.php in directory public 
```sh
cp index.php public/
```
8. Copy public/index.html in directory resources/views/welcome.blade.php 
```sh
cp public/index.html resources/views/welcome.blade.php
```
9. inside your project run the command
```sh
php artisan serve --host 0.0.0.0 --port 80
```

10. go to address
```sh
http://127.0.0.1/
```
enjoy!

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact


Author Link: [https://github.com/GuzhavinAleksey](https://github.com/GuzhavinAleksey)


