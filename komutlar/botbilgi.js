const Discord = require("discord.js");
const db = require("wio.db");
const moment = require("moment");
const Jimp = require("jimp");

exports.run = (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
  const duration = client.uptime;
  const embed = new Discord.RichEmbed()
    .setAuthor("Discord Stats", client.user.avatarURL)
    .setTitle("Discord Stats")
    .setURL("https://discord.com/oauth2/authorize?client_id=756906546818187294&scope=bot&permissions=272067711")
    .setDescription(
      "Ξ U R O Tarafından Hazırlanmış Botdur İstatistik Listeleme İçindir !yardım"
    )
    .setColor("BLUE")
    .setTimestamp()
    .setFooter("© Ξ U R O", client.user.avatarURL)
    .addField(
      "Kullanılan RAM miktarı",
      `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
    )
    .addField(
      "Bilgi",
      `
${client.guilds.size.toLocaleString()}, Sunucu!. / ${
        client.users.size
      }, Üye! / `
    );
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botbilgi"],
  permLevel: 0
};

exports.help = {
  name: "bot-bilgi",
  description: "taslak",
  usage: "bot-bilgi"
};
