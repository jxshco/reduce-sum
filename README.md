<h1 align="center">
  reduce-sum
</h1>

<p align="center">
  <a href="https://travis-ci.org/jxshco/reduce-sum"><img src="https://travis-ci.org/jxshco/reduce-sum.svg?branch=master" alt="travis"></a>
  <a href="https://www.npmjs.com/package/reduce-sum"><img src="https://img.shields.io/npm/v/reduce-sum.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/reduce-sum"><img src="https://img.shields.io/npm/dt/reduce-sum.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

<p align="center">Returns a total sum of specific key of an array of objects</p>

## Table of Contents

* Quick start
  * [Install](#install)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Licence](#usage)

## Install

Add reduce-sum to your project using npm or yarn.

Install (NPM):

```bash
$ npm install reduce-sum --save
```

Install (Yarn):

```bash
$ yarn add reduce-sum
```

## Usage

Import ReduceSum into Your Project

```js
import ReduceSum from 'reduce-sum'
```

Use ReduceSum

```js
ReduceSum([{ a: 139, c: 22 }, { a: 233, b: 'hi' }, { a: 112, b: 18 }], 'a')
// 484

let cart = [{ name: 'Jeans', quantity: 1 }, { name: 'Socks', quantity: 3 }, { name: 'T-Shirt', quantity: 6 }]
let totalItems = ReduceSum(cart, 'quantity')
// 10
```

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!

## License

[MIT](https://github.com/jxshco/reduce-sum/blob/master/LICENSE)
