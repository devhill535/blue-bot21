///////////////////////////////////////////////////////////////////////////////
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
///////////////////////////////////////////////////////////////////////////////
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "b/";
const cooldown = new Set();
const cdtime = 7;
/////////////////////////////////////
client.login("NzMzNDY5NjA3MTc1OTEzNTkz.XxDmzQ.yTqQIZg2vDrm2kCcMtAxeow--KU");
///////////////////////////////////////////////////////////////////////////////

client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(
    `  b/help  ${
      client.guilds.cache.size
    } Server,Users ${client.guilds.cache.reduce(
      (a, g) => a + g.memberCount,
      0
    )},`,
    { type: "PLAYING" }
  );
});

///////////////////////////////////////////////////////////////////////////////
client.on("warn", info => console.log(info));
client.on("error", console.error);
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<@${message.author.id}>,  Please wait for 10 second `)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.AvatarURL)
      .setThumbnail(message.author.avatarURL())
      .setTitle(`Click Here To Add : ${client.user.username}`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=733469607175913593&permissions=8&scope=bot`
      ).setDescription(`
      
** ❄| info **
${prefix}userinfo
${prefix}serverinfo
${prefix}invite
${prefix}support
${prefix}settings

** |Security**
${prefix}anti ban {number}
${prefix}anti kick     {number}
${prefix}anti channelD {number}
${prefix}anti channelC {number}
${prefix}anti roleD    {number}
${prefix}anti roleC    {number}
${prefix}anti  bot    {on/off}
${prefix}anti problem [on/off]

** ⚔|Modirator**
${prefix}ban
${prefix}kick
${prefix}lock
${prefix}unlock
${prefix}clear
${prefix}mute
${prefix}unmute
${prefix}bans
${prefix}ping

__ [𝗜𝗡𝗩𝗜𝗧𝗘 𝘽𝙊𝙏](https://discord.com/api/oauth2/authorize?client_id=733469607175913593&permissions=8&scope=bot) ____    ____ [𝗦𝗨𝗣𝗣𝗢𝗥𝗧](https://discord.gg/SG7fT5VEwZ) __
`);
    message.channel.send(help);
  }
});

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "invite")) {
    let invite = new Discord.MessageEmbed();

    message.channel.send("**Check Your DM**");
    message.author.send(
      "`invite link`https://discord.com/api/oauth2/authorize?client_id=733469607175913593&permissions=8&scope=bot"
    );
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "support")) {
    let support = new Discord.MessageEmbed();

    message.channel.send("**Check Your DM**");
    message.author.send("**BOT SUPPORT SERVER** https://discord.gg/SG7fT5VEwZ");
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "/p") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});

client.on("message", message => {
  var command = message.content;
  if (message.author.bot) return;

  switch (command) {
    case "avatjhyuyujujjhhhjuijjiar":
      message.channel.send(
        `وێنەی ئەکاونتەکەت ئەوەیە <:emoji_299:765347080515354654>: ${message.author.avatarURL}`
      );
      break;

    case "<@790600594838257696>":
      message.channel.send("فــەرمـــوو    ");
  }
});

client.on("message", msg => {
  if (msg.content === "slaw") {
    msg.reply("**baxer bey **");
  }
});

client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply("** farmw  https://discord.gg/99KsGZHrsv**");
  }
});

client.on("message", msg => {
  if (msg.content === "hi") {
    msg.reply("**baxer bey  **");
  }
});

client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply("**bo rol ba dasteki bnera dl   **");
  }
});

client.on("message", msg => {
  if (msg.content === "slaw reklam haya ") {
    msg.reply("**bale bo rol ba dasteki bnera gyan  **");
  }
});

client.on("message", msg => {
  if (msg.content === "mama") {
    msg.reply("**bale braza **");
  }
});

client.on("message", msg => {
  if (msg.content === "Slaw") {
    msg.reply("**xoy chwabt adatawa **");
  }
});

///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<@${message.author.id}>, Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setTitle(`CHANNEL LOCK`)
      .setColor("#808080")
      .setDescription(
        `
Locked Channel
<#${message.channel.id}>
locked by
<@${message.author.id}>
`
      );

    message.channel.send(lock);
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<@${message.author.id}>, Please wait for 10 second `)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()

      .setTitle(`CHANNEL UNLOCK`)
      .setColor("#808080")
      .setDescription(
        `
unloked Channel
<#${message.channel.id}>
unloked by
<@${message.author.id}>
`
      );
    message.channel.send(unlock);
  }
});
///////////////////////////////////////////////////////////////////////////////
const rast = "<a:emoji_26:809385634149826611>";
const rastw = "<a:emoji_26:809385634149826611>";
const ghallat = "<a:emoji_27:811585526913957894>";
const ghallatw = "<a:emoji_27:811585526913957894>";
const logosec = "<a:emoji_11:797914740033716224>";
const warn = "<a:emoji_11:797914740033716224>";
const color = "RANDOM";
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.ownerID)
      return message.channel.send("**Just Can Online Ownership**,");
    if (message.content.startsWith(prefix + "anti ban")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(`<@${message.author.id}>,  Please wait for 10 second `)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `** <@${message.author.id}>,  Successfully changed the anti ban to ${config[message.guild.id].banLimit}** ${rast}`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(`<@${message.author.id}>, Please wait for 10 second `)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti kick to ${config[message.guild.id].kickLimits}** ${rast}`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(`<@${message.author.id}>,  Please wait for 10 second `)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti roleC to ${config[message.guild.id].roleDelLimit}** ${rast}`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(`<@${message.author.id}>,  Please wait for 10 second `)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti roleD to ${config[message.guild.id].roleCrLimits}** ${rast}`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(`<@${message.author.id}>,  Please wait for 10 second `)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti channelC to ${config[message.guild.id].chaDelLimit}** ${rast}`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(`<@${message.author.id}>, Please wait for 10 second `)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**<@${message.author.id}>,  Successfully changed the anti channelD to ${config[message.guild.id].chaCrLimit}** ${rast}`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (cooldown.has(message.author.id)) {
        return message.channel
          .send(`<@${message.author.id}>,  Please wait for 10 second `)
          .then(m => {
            m.delete({ timeout: cdtime * 600 });
          });
      }
      cooldown.add(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, cdtime * 1000);
      if (!num)
        return message.channel.send("**" + ghallat + "  Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + "  Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `** <@${message.author.id}>,  Successfully changed the anti time to ${config[message.guild.id].time}** ${rast}`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} ${entry.username} Tryed To \`Create\` Many \`Channels\` ${warn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("channel delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} ${entry.username} Tryed To \`Delete\` Many \`Channels\` ${warn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role delete");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} ${entry.username} Tryed To \`Delete\` Many \`Role\` ${warn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("role create");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} ${entry.username} Tryed To \`Create\` Many \`Roles\` ${warn}**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("ban member");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${warn}**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 2,
      chaDelLimit: 2,
      roleDelLimit: 2,
      kickLimits: 2,
      chaCrLimit: 2,
      roleCrLimits: 2
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("member kick");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} ${entry.username} Tryed To \`Kick\` Many \`Members\` ${warn}**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }
  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 2,
        chaDelLimit: 2,
        roleDelLimit: 2,
        kickLimits: 2,
        chaCrLimit: 2,
        roleCrLimits: 2
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("kick member");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} ${entry.username} Tryed To \`Ban\` Many \`Members\` ${warn}**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "settings") {
    return message.channel.send("**you dont have a Permission**");
    if (message.member.hasPermission("ADMINISTRATOR")) return;
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<@${message.author.id}>,  Please wait for 10 second`)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (message.author.id !== message.guild.ownerID)
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const black = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setColor("#808080")
      .setThumbnail(client.user.avatarURL()).setDescription(`
AntiBan
Enabled:
Maximum Ban : ${config[message.guild.id].banLimit}

AntiKick
Enabled:
Maximum Kick : ${config[message.guild.id].kickLimits}

AntiChannelD
Enabled:
Maximum Delete : ${config[message.guild.id].chaDelLimit}

AntiChannelC
Enabled:
Maximum Create : ${config[message.guild.id].chaCrLimit}

AntiRoleD
Enabled:
Maximum Delete : ${config[message.guild.id].roleDelLimit}

AntiRoleC
Enabled:
Maximum Create : ${config[message.guild.id].roleCrLimits}

AntiTime
Enabled: 
Maximum Time : ${config[message.guild.id].time}
`);
    message.channel.send(black);
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  let cmd = messageArray[0];
  if (cmd === prefix + "ban") {
    let toBan =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("I need ``BAN_MEMBERS`` permission ");
    const reason = args[1] || "there was no reason";
    toBan.ban({
      reason: reason
    });
    message.channel.send(
      `${toBan} banned from the server! ✈️ \nReason: ${reason}`
    );
  }
  if (cmd === prefix + "unban") {
    let toBan = await client.users.fetch(args[0]);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.reply("I need ``BAN_MEMBERS`` permission ");
    message.guild.members.unban(toBan);
    message.channel.send(
      `<a:emoji_26:809385634149826611> has been unbanned from the server`
    );
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(JxA => {
          message.guild.unban(JxA);
        });
      });
      return message.channel.send(
        "<a:emoji_26:809385634149826611> Unban all members"
      );
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `<a:emoji_26:809385634149826611> Unban this member ${m.username}`
        );
      })
      .catch(stry => {
        message.channel.send(
          `**<a:emoji_27:811585526913957894> I can't find that person \`${args}\` in ban list**`
        );
      });
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}mute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Server Muted",
          color: "#808080",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission MUTE_MEBMERS");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission MUTE_MEBMERS");
    if (!user) return message.channel.send(`${prefix}unmute <@mention Or ID>`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`removed mute from ${user.username}!`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  //
  if (message.content.startsWith(prefix + "serverinfo")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    var EMBED = new Discord.MessageEmbed()
      .setTitle("server info")
      .addField("server name", `${message.guild.name}`)
      .addField("server id", `${message.guild.id}`)
      .addField("server owner", `${message.guild.owner}`)
      .addField("members", `${message.guild.memberCount}`)
      .addField("Server roles", `${message.guild.roles.cache.size}`)
      .addField("server channels", `${message.guild.channels.cache.size}`)
      .addField("server region", `${message.guild.region}`)
      .addField("created in", `${message.guild.createdAt.toLocaleString()}`)
      .addField("Boost", `${message.guild.premiumSubscriptionCount}`)
      .setThumbnail(message.author.avatarURL())
      .setColor("#808080")
      .setFooter(`Requsted by ${message.author.username}`);
    message.channel.send(EMBED);
  }
});
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
client.on("message", prof => {
  if (prof.content.startsWith(prefix + "userinfo")) {
    if (cooldown.has(prof.author.id)) {
      return prof.channel
        .send(`<@${prof.author.id}>,  Please wait for 10 second `)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(prof.author.id);
    setTimeout(() => {
      cooldown.delete(prof.author.id);
    }, cdtime * 1000);
    var professor = new Discord.MessageEmbed()
      .setThumbnail(prof.author.avatarURL())
      .setColor("#808080")
      .setTitle("Your Info User.")
      .addField("**Your Name**", `<@${prof.author.id}>`)
      .addField("**Your ID**", `${prof.author.id}`)
      .addField(
        "**Joined Server At**",
        moment(prof.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("**Create User**", prof.author.createdAt.toLocaleString());
    prof.channel.send(professor);
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.author.bot) return;
  var args = message.content.split(" ");
  if (args[0] === prefix + "kick") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<@${message.author.id}>,  Please wait for 10 second `)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.member.hasPermission("KICK_MEMBERS")) return;
    let user = message.mentions.members.first();
    if (!user) return;
    if (user.id === message.author.id)
      return message.reply("will you cant kick your self");
    if (!message.guild.member(user).bannable)
      return message.reply("i cant kick this user");
    var reason = args[2];
    if (!reason) reason = "No reason typed";
    user.kick();
    var embed = new Discord.MessageEmbed();
    message.channel.send(`${user.user.username} kicked ✈️`);
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(`<@${message.author.id}>,  Please wait for 10 second `)
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
    message.channel;
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`📋 Server Ban List : ${bans.size} `))
      .catch(console.error);
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.channel.send(`**Time taken: ${PinG} ms.**`);
    });
  }
});
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "warn")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let args = message.content.split(" ").slice(1);
    if (message.author.id !== message.guild.ownerID)
      return message.reply("you dont have a Permission");
    var user = message.mentions.users.first();
    var rn = args.slice(1).join(" ");
    let em = new Discord.MessageEmbed()
      .setTitle("Error :")
      .setColor("#808080")
      .setDescription(
        `
  **Usage:**
 ${prefix}warn (user) (reason)
  Ex :
  ${prefix}warn ${message.author} 
  ${prefix}warn ${message.author}  test
 
  `
      )
      .setAuthor(message.author.username, message.author.avatarURL());
    if (!user) return message.channel.send(em);
    let ffg = new Discord.MessageEmbed()
      .setColor("#080808")
      .setTimestamp()
      .setTitle("Warned!")
      .setDescription(
        `
 warned by  : ${message.author.username}
 reason     : ${rn}
  `
      )
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(``);
    message.channel.send(ffg);
    user.send(ffg);
    message.delete();
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "clear" || command == "clear") {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    message.delete({ timeout: 0 });
    if (!message.channel.guild)
      return message.reply(`This Command For Servers Only`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`You don't have perms`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`I don't have perms`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message.channel
        .send(
          `
i cant delete more than 100 messages 
`
        )
        .then(messages => messages.delete(5000));
    if (!messagecount) messagecount = "100";
    message.channel.messages
      .fetch({ limit: 100 })
      .then(messages => message.channel.bulkDelete(messagecount))
      .then(msgs => {
        message.channel
          .send(
            `
${msgs.size} messages cleared
`
          )
          .then(messages => messages.delete({ timeout: 5000 }));
      });
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "<a:emoji_27:811585526913957894> | You don't have Permissions do to this."
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user)
      return message.channel.send(
        "<a:emoji_27:811585526913957894> | Member not found!"
      );
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(
        `<a:emoji_27:811585526913957894> | You can't ${mode} the owner!`
      );
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `<a:emoji_27:811585526913957894> | You can't ${mode} people higher ranked than yourself!`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `<a:emoji_27:811585526913957894> | I can't ${mode} people who are higher ranked than me!`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `<a:emoji_27:811585526913957894> | Specified user is not ${mode}able.`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `<a:emoji_26:809385634149826611> ${
            mode == "ban" ? "Bann" : mode
          }ed __${user.user.tag}__`
        )
      )
      .catch(console.error);
  }
});
///////////////////////////////////////////////////////////////////////////////
let spread = JSON.parse(fs.readFileSync("./spread.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem off")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry , But You Dont Have `MANAGE_GUILD` <a:emoji_27:811585526913957894>**"
      );
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(
      `<@${message.author.id}>,**AntiProblem Is Disable${rast}** `
    );
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem on")) {
    if (cooldown.has(message.author.id)) {
      return message.channel
        .send(
          `<@${message.author.id}>, <a:emoji_13:798075791065350174> Please wait for 10 second <a:emoji_13:798075791065350174>`
        )
        .then(m => {
          m.delete({ timeout: cdtime * 600 });
        });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry , But You Dont Have `MANAGE_GUILD` Permission <a:emoji_27:811585526913957894>**"
      );
    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(
      `<@${message.author.id}>,**AntiProblem Is Enable${rast}** `
    );
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http")) {
    if (message.member.hasPermission("MANAGE_EMOJIS")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**You Dont Have \`MANAGE_EMOJIS\` Permission ${ghallatw}**`
    );
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("@everyone")) {
    if (message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**You Dont Have \`MENTION_EVERYONE\` Permission ${ghallatw}**`
    );
  }
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("@here")) {
    if (message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**You Dont Have \`MENTION_EVERYONE\` Permission ${ghallatw}**`
    );
  }
});
///////////////////////////////////////////////////////////////////////////////
