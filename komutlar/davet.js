const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("Discord Stats", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("Discord Stats")
    .setURL(
      "https://discord.com/oauth2/authorize?client_id=756906546818187294&scope=bot&permissions=272067711"
    )
    .setDescription(`Sunucuna İstatistik Paneli Yapmak İçin Davet Edebilirsin`)

    .addField("Davet Linki.", `https://discord.com/oauth2/authorize?client_id=756906546818187294&scope=bot&permissions=272067711`)

    .setFooter("© Ξ U R O", client.user.avatarURL);
  message.channel.send(Embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "davet",
  description: "Davet Et.",
  usage: "davet"
};
