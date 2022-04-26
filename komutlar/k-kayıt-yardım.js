const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db =  require("quick.db");
const talkedRecently = new Set();

let botid = ('966324540768657478') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`**Jarvıs Bot Kayıt Menüsüne Hoşgeldiniz** `)
        .setDescription(`
 
  **» -alınacak-rol** Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.
  **» -alınacak-rol sıfırla **  Kayıt Edilen Kişiden Alınacak Rolü Sıfırlar.
  **» -kayıt-kanal** Kayıtın Yapılacağı Kanalı Belirlersiniz.
  **» -kayıt-kanal sıfırla**  Kayıtın Yapılacağı Kanalı Sıfırlarsınız.
  **» -kayıt-hg ** Gelen Kullanıcılara Kayıt Bilgisi Verir.
  **» -kayıt-hg sıfırla **  Kayıt Hg sistemini sıfırlar.
  **» -kayıt-yetkili**  Kayıt Edebilecek Yetkiyi Ayarlar.
  **» -kayıt-yetkili sıfırla**  Kayıt Edebilecek Yetkiyi Sıfırlar.
  **» -erkek-rol ** Kayıt Edilince Verilecek Erkek Rolü Ayarlar.
  **» -erkek-rol sıfırla **  Kayıt Edilince Verilecek Erkek Rolünü Sıfırlar.
  **» -kız-rol** Kayıt Edilince Verilecek Kız Rolü Ayarlar.
  **» -kız-rol sıfırla** Kayıt Edilince Verilecek Kız Rolünü Sıfırlar.
  **» -kayıt-tag** Kayıt Tag Ayarlarsınız.
  **» -kayıt-tag-sıfırla** Kayıtda Kullanılcak Tagı Sıfırlar.
  **» -kayıt-gif** Kayıt Gifi Ayarlar.
  **» -kayıt-gif-sıfırla** Kayıt Gifi Sıfırlar.
  **» -kayıt-log** Kayıt Log Ayarlar.
  **» -kayıt-log-sıfırla** Kayıt Log Sıfırlar(Kayıt Logu Kayıt Kanalına Atar).
  **» -kayıt-sayısı** Sunucuda Kaç Kayıt Etdiğinizi Görürsünüz.
  **» -kayıt-bilgi** Kayıt Ayarları Hakkında Bilgi Verir.
  **» -erkek ** Erkekleri Kayıt Etmeye Yarar.
  **» -kız ** Kızları Kayıt Etmeye Yarar.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  -davet __Botu Davet Edebilirsiniz!__**
**»  -sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  -istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  -prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  -prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(``)
               .addField(`» Jarvıs Bot Bağlantıları`, ` [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/22YqX8sVRg) **|** [Oy Linki](http://bit.ly/Quinoy) **|**  `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};
