const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
const db = require("quick.db");
let botid = ('960536191856410624') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`**Jarvıs Bot Seviye Menüsüne Hoşgeldiniz**`)
        .setDescription(`
 
  **» -seviye** Mevcut Olduğunuz Seviyeyi Gösterir.
  **» -seviye-ayarlar** Sunucuda Aktif Olan Seviye Ayarlarını Gösterir.
  **» -seviye-rol**  İstenilen Seviyeye Gelince Verilecek Rolü Ayarlar.
  **» -seviye-sıfırla ** Mevcut Seviye Sistemini Sıfırlar
  **» -seviye-sınır ** Maksimum Kazanılanabilecek Seviyeyi Belirler.
  **» -seviye-xp **  Bir Mesaj Başına Verilecek Xp yi ayarlar.
  **» -seviye-top ** Sunucuda ki En yüksek 5 Kişiyi Gösterir
  **» -seviye-rütbeler ** Hangi Seviye de Rol Verilecek Onu Gösterir.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  -davet __Botu Davet Edebilirsiniz!__**
**»  -sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  -istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  -prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  -prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(``)
             .addField(`» Jarvıs Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/22YqX8sVRg) **|** [Oy Linki](http://bit.ly/Quinoy) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seviye-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'seviye-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'seviye-yardım'
};
