const Discord = require('discord.js');
const bot = new Discord.Client()
const express = require('express');
const app = express();
const http = require(`http`)
const scarew = new Discord.ShardingManager('./bot.js', {// Ana dosyanızın adını yazınız.
   totalShards: 'auto',
   token: "NzM2Nzk2MTYyNTM0NjcwMzc2.Xx0A5g.Dk2c3sICa_vVZNn7KxO3llg8Tws"// Buraya botunuzun tokeninizi yazınız.
});

scarew.spawn();

scarew.on('launch', shard => {
  console.log(`*${shard.id}* ID shard started.`)
});

setTimeout(() => {
   scarew.broadcastEval("process.exit()");
}, 21600000);