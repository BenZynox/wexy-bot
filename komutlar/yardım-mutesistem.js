const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('966324540768657478') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` **Jarvıs Bot Yardım Menüsüne Hoşgeldiniz** `)
        .setDescription(`
  **» -mute-ayarla**   Mute Sistemini Ayarlarsınız.
  **» -mute**   Mute Atarsınız.
  **» -süresiz-mute** Süresiz Mute Atarsınız.		
  **» -unmute** Etiketlediğiniz Kişinin Mutesini Kaldırırsınız.		



▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  -davet __Botu Davet Edebilirsiniz!__**
**»  -sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  -istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  -prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  -prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .addField(`» Jarvıs Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/22YqX8sVRg) **|** [Oy Linki](http://bit.ly/yaknda) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0,
};

exports.help = {
  name: 'mute-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};
