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
       .setTitle(`**Jarvıs Bot  Eğlence Menüsüne Hoşgeldiniz** `)
        .setDescription(`
 
        **-çıkma-teklif-et** Etiketlediğiniz Kişiye Çıkma Teklif Edersiniz.
        **-tersyazı** Yazdığınız Yazıyı Tersine Çevirir.
        **-sarıl**  Etiketlediğiniz Kişiye Sarılırsınız.
        **-fbi** FBI Gif Atar
        **-espri**  Rastgele Espri Atar.
        **-elyazısı**  Yazdığınız Yazıyı El Yazısına Çevirir.
        **-doğrulukcesaret**  Doğruluk Veya Cesaret Cümlesi Atar.
        **-banner**  Yazdığınız YAZIYI Bannera Çevirir.
        **-aşkölçer** Etiketlediğiniz Kişiyle Aranızdaki Aşkı Ölçer. (Şaka Amaçlıdır)
	    **-tkm** Bot ile tkm Oynarsınız (t-k-m)
        **-ys** Yıldız Savaşı Oynarsınız')
        **-bg**  Bilek Güreşi Oynarsınız
        **-1vs1**  Düello Oynarsınız
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  -davet __Botu Davet Edebilirsiniz!__**
**»  -sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  -istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  -prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  -prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(``)
                .addField(`» Jarvıs Bot Bağlantıları`, `   [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/22YqX8sVRg) **|** [Oy Linki](http://bit.ly/Quinoy) **|** `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: 'a!davet-sistemi Menüsü',
  usage: 'eğlence'
};
