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
       .setTitle(` **Wexy Bot Moderasyon Menüsüne Hoşgeldiniz** `)
        .setDescription(` ${prefix}moderasyon2 Menümüze Bakmayı Unutmayın. 
  **» -giriş-çıkış-ayarla **  Resimli Hg-BB sistemini Açarsınız.
  **» -giriş-çıkış-kapat **  Ayarlanan Resimli Hg-BB Sistemini Kapatırsınız.
  **» -güvenlik **  Resimli Güvenlik Sistemini Belirlediğiniz Kanal Yapar..
  **» -güvenlik sıfırla **   Resimli Güvenlik Sistemini Kapatırsınız.
  **» -capslock-engelleme **   CapsLock Engelleme Sistemini Açıp Kapatırsınız (İlk Yazışta Açar 2.de kapar)
  **» -küfürengel**  Küfür Sistemini Açar/Kapatırsınız.
  **» -reklamengel** Reklam Engel Sistemini Açar/Kapatırsınız.
  **» -temizle ** Belirlenen Miktarda Mesaj Siler.
  **» -sunucupanel **   Sunucu Panel Açar.
  **» -unban ** İdsi Girelen Kullanıcıyı Banının Açar.
  **» -nuke ** Komutun Yazıldığı Kanalı Silip Aynı İsimde Yeni Kanal Oluşturur.

▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  -davet __Botu Davet Edebilirsiniz!__**
**»  -sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  -istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  -prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  -prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(``)
                .addField(`» Jarvıs Bot Bağlantıları`, `   [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/22YqX8sVRg) **|** [Oy Linki](sadmmsskksks) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};
