#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');

const data = {
  // Basic data
  name: chalk.white('Onoyama Shodai (o-xian)'),
  handleName: chalk.hex('#FD9FBA')('oshanQQ'),
  twitter: chalk.hex('#1DA1F2')('https://twitter.com/oshanQQ'),
  github: chalk.hex('#888888')('https://github.com/oshanQQ'),
  qiita: chalk.hex('#55C500')('https://qiita.com/oshanQQ'),
  blog: chalk.white('https://o-xian.netlify.app/'),
  speakerdeck: chalk.hex('#009287')('https://speakerdeck.com/oshanqq'),

  // Tags
  nameTag: chalk.white.bold('       Name: '),
  handleNameTag: chalk.hex('#FD9FBA').bold(' HandleName: '),
  twitterTag: chalk.hex('#1DA1F2').bold('    Twitter: '),
  githubTag: chalk.hex('#888888').bold('     GitHub: '),
  qiitaTag: chalk.hex('#55C500').bold('      Qiita: '),
  blogTag: chalk.white.bold('       Blog: '),
  speakerdeckTag: chalk.hex('#009287').bold('SpeakerDeck: '),
};

const helloMesssage = `Hi👋 my name is ${data.name}`;
const newline = '\n';

const displayData = helloMesssage + newline
                  + newline
                  + newline
                  + data.handleNameTag + data.handleName + newline
                  + data.twitterTag + data.twitter + newline
                  + data.githubTag + data.github + newline
                  + data.qiitaTag + data.qiita + newline
                  + data.blogTag + data.blog + newline
                  + data.speakerdeckTag + data.speakerdeck;

const boxenStyle = {
  padding: 2,
  margin: 2,
  borderStyle: 'double',
  borderColor: 'red'
};

console.log(boxen(displayData, boxenStyle));
