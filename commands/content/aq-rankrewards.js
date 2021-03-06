const commando = require('discord.js-commando');
const request = require('request-promise');

class aqrankrewardsCommand extends commando.Command {
constructor(client) {
        super(client, {
            name: 'aqrankrewards',
            aliases: [
                'aq-rankrewards',
                'rankrewards',
                'rankreward',
                'aqrankreward',
                'aq_rankrewards'
            ],
            group: 'content',
            memberName: 'aqrankrewards',
            description: 'Returns AQ Rank Rewards',
            examples: ['!aqrankrewards'],
        });   
    }
    async run(msg) {
        const response = await request({
            method: 'GET',
            uri: 'https://assgardians.000webhostapp.com/mcoc_db/content.php?c=aqrankrewards',
            followAllRedirects: true,
            headers: { 'User-Agent': `Commando` },
            json: false
        });
        return msg.say(response);
    }
}
module.exports = aqrankrewardsCommand;
