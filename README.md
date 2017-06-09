# Fields Date formatting
Fields formatting mask in angularJs

<p>
  <a href="https://gitter.im/miamarti/ngDate" target="_blank"><img src="https://img.shields.io/gitter/room/nwjs/nw.js.svg"></a>
  <img src="https://img.shields.io/badge/ngDate-release-green.svg">
  <img src="https://img.shields.io/badge/version-1.2.2-blue.svg">
  <img src="https://img.shields.io/github/license/mashape/apistatus.svg">
  <a href="https://github.com/miamarti/ngDate/tarball/master"><img src="https://img.shields.io/github/downloads/atom/atom/latest/total.svg"></a>
</p>

AngularJS component responsible for formatting date fields.

```
<input type="text" placeholder="__/__/____" ng-date>
```

## Config

| Tag             | Info                           |
|:----------------|:-------------------------------|
|no-time="true"   | Remove time                    |
|format="%d/%m/%Y"| Informs the correct formatting |

## Bower install de dependency
```
$ bower install ngDate --save
```

## Module AngularJS include
```
angular.module('example', ["ngDate"]);
```
