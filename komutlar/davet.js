const westra = require('discord.js')
const westraclient = new westra.Client()
const westraembed = new westra.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Selam!\n **Jarvıs** Botu Ekleyerek Bize Destek Sağlayabilirsiniz.\nBotu Eklemek İçin [BURAYA](https://discord.com/oauth2/authorize?client_id=966324540768657478&scope=bot&permissions=8) Tıkla!`)
exports.run = async (westraclient, message, args) => {
	message.channel.send(westraembed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davetet"],
    permLevel: 0,
}
exports.help = {
    name: 'davet',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'sunucutanıt'
}
