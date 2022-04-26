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
       .setTitle(`**Jarvıs  Bot Moderasyon Menüsüne Hoşgeldiniz** `)
        .setDescription(`
  **» -mod-log**  Mod-Log Kanalını Belirlersiniz.
  **» -mod-log kapat**  Ayarlanan Mod-Log Kanalı Kapatılır.
  **» -oylama **  Oylama Yaparsınız
  **» -yasaklı-tag **  Yasaklı Tag Ayarlar.
  **» -otorol-ayarla**  Otorol Ayarlar.
  **» -otorol-mesaj** Otorol Mesajı Ayarlar.
  **» -otorol-sıfırla**  Otorol Sıfırlar.
  **» -sayaç-ayarla**   Sayaç Ayarlar.
  **» -ban **  Etiketlenen Kullanıcıyı Banlar.
  **» -kick ** Etiketlenen Kullanıcıyı Kickler.
  **» -sa-as aç **   SA-AS Sistemini Açar.
  **» -sa-as kapat **  SA-AS Sistemini Kapatır.
  **» -emoji-ekle **  Emoji Ekler.
  **» -çekiliş **  Çekiliş yaparsınız.
  **» -ban-say **Banlı Üye Sayısını Öğrenirsiniz.

▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  -davet __Botu Davet Edebilirsiniz!__**
**»  -sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  -istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  -prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  -prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» Jarvıs  Bot Bağlantıları`, ` [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/22YqX8sVRg) **|** [Oy Linki](sjusjjsjsjs) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon2'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon2',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};
