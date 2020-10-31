const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setTimestamp()
    .setAuthor("Discord Stats", client.user.avatarURL)
    .setColor("BLUE")
    .setTitle("Discord Stats BOT")
    .setURL(
      "https://discord.com/oauth2/authorize?client_id=756906546818187294&scope=bot&permissions=272067711"
    )
    .setDescription(`Sunucu İstatistiklerini Sunan Bir Botdur.`)

    .addField(
      "!kurulum / !panelkapat",
      `Stats Odası Açıp Kapatmak İçin Bu 2 Komut Yeterlidir.`
    )

    .addField("!botbilgi", `Discord Stats Bot Hakkında Bilgi Alırsınız!`)

    .addField("!davet", `Discord Stats Botunu Davet Edebilirsiniz!`)

    
    .setFooter("© Ξ U R O", client.user.avatarURL);
  message.channel.send(Embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım", "help", "h", "help"],
  permLevel: 0
};

module.exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "Yardım"
};
