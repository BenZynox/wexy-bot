const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('966324540768657478') 
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`**Jarvıs Bot Premium Menüsüne Hoşgeldiniz** `)
	   .setDescription(`
   **» -reklamlog ** Reklam engel logunu ayarlarsınız.
   **» -küfürlog **  Küfür engel logunu ayarlarsınız.
   **» -rol ** Ayarlamalı rol alma/verme sistemidir.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  -davet __Botu Davet Edebilirsiniz!__**
**»  -sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  -prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  -prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» Jarvıs Bot Bağlantıları`, ` [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/22YqX8sVRg) **|** [Oy Linki](http://bit.ly/Quinoy) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['premium-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'premiumsistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};
