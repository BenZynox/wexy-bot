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
       .setTitle(` **Jarvıs Bot  Ekonomi Menüsüne Hoşgeldiniz** `)
        .setDescription(`

  **» -soygun** Soygun yaparsınız.
  **» -profil** Profil bilgilerinizi gösterir.
  **» -altın-yolla**  İstediğiniz kişiye altın yollayabilirsiniz.
  **» -altınal** Paranızla altın alıp marketten eşya satın alabilirsiniz.
  **» -elmasal**  Altınınızla elmas alıp marketten eşya satın alabilirsiniz.
  **» -elmas-yolla** İstediğiniz kişiye elmas yollayabilirsiniz.
  **» -günlük** Günlük maaşınızı verir.
  **» -market**  Eşya satın alabilirsiniz gösterir.
  **» -meslek** Meslek sahibi olarak daha hızlı para kazanabilirsiniz
  **» -para-yolla**  İstediğiniz kişiye para yollayabilirsiniz.
  **» -soygun** Etiketlediğiniz Kişiden Para Çalarsınız.
  **» -kazı-kazan**  Kazı kazan oynarsınız.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  -davet __Botu Davet Edebilirsiniz!__**
**»  -sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  -istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  -prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  -prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
            .addField(`» Jarvıs Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/22YqX8sVRg) **|** [Oy Linki](http://bit.ly/Quinoy) **|**`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekonomi'],
  permLevel: 0,
};

exports.help = {
  name: 'ekonomi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'oyun'
};
