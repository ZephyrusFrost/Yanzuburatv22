module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by Kyle
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `

█░█ ▄▀▄ █▄░█ ▀▀▀█ █░█
▀▄▀ █▀█ █░▀█ ░▄▀░ █░█
░▀░ ▀░▀ ▀░░▀ ▀▀▀▀ ▀▀▀
━━━━━━━━━━━━━━━━━━━

Hello! It look's like you're not familiar with my prefix!, here's a guide, use this :➡

🌐 SYSTEM PREFIX:➡ 【 × 】
📩 BOX CHAT PREFIX:➡【 × 】

📜 𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘
ai ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ᴄᴀᴋᴇ
yanzu ᴡʜᴀᴛ ᴜs ᴄᴀᴘɪᴛᴀʟ ᴏғ ғʀᴀɴᴄ

⚙ 𝗠𝗢𝗥𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
➖ ✅ [ ×quiz ]
➖ 🎰 [ ×slot ]
➖ 🎯 [ ×spin ]
➖ 🏦 [ ×bank ]
➖ 📝 [ ×bal ]
➖ 💰 [ ×daily ]
➖ 💵 [ ×pay ]
➖ 📃 [ ×help ]
𝙁𝘽𝙇𝙄𝙉𝙆➤ https://www.facebook.com/profile.php?id=100052395031835
━━━━━━━━━━━━━━━━━━━
\n𝙊𝙬𝙣𝙚𝙧 ➢ 𝗞𝗬𝗟𝗘 𝗕𝗔𝗜𝗧-𝗜𝗧`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/0CpWTJm.mp4")
 });
 }
 }
}