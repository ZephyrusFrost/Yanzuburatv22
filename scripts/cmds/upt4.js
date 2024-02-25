module.exports = {
	config: {
		name: "uptime4",
		aliases: ["upt4"],
		role: 0,
		shortDescription: {
			en: "Show server uptime",
			tl: "Ipakita ang uptime ng server",
		},
		longDescription: {
			en: "Shows the duration for which the server has been running",
			tl: "Ipapakita ang tagal na gumagana ang server",
		},
		category: "goatBot",
		guide: {
			en: "{p}uptime",
			tl: "{p}uptime",
		},
	},

	onStart: async function ({ api, message, threadsData }) {
		const os = require("os");
		const uptime = os.uptime();

		const days = Math.floor(uptime / (3600 * 24));
		const hours = Math.floor((uptime % (3600 * 24)) / 3600);
		const mins = Math.floor((uptime % 3600) / 60);
		const seconds = Math.floor(uptime % 60);

		const system = `OS: ${os.platform()} ${os.release()}`;
		const cores = `Cores: ${os.cpus().length}`;
		const arch = `Architecture: ${os.arch()}`;
		const totalMemory = `Total Memory: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`;
		const freeMemory = `Free Memory: ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB`;
		const uptimeString = `𝗨𝗽𝘁𝗶𝗺𝗲: ${days} days, ${hours} hours, ${mins} minutes, and ${seconds} seconds`;

		const response = `🕒 ${uptimeString}\n\n━━━━━━━━━━━━━━━\n📡 ${system}\n🛡 ${cores}\n🤖[𝗔𝗜]𝗦𝗧𝗔𝗧𝗨𝗦: online🟢\n\n📈 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿𝘀: ${threadsData.size}\n📉 𝗧𝗼𝘁𝗮𝗹 𝗧𝗵𝗿𝗲𝗮𝗱𝘀: ${threadsData.size}\n⚖ 𝗔𝗜 𝗨𝘀𝗮𝗴𝗲: 0.0\n📊 𝗥𝗔𝗠 𝗨𝘀𝗮𝗴𝗲: ${Math.round(process.memoryUsage().rss / (1024 * 1024))} MB\n💽 𝗧𝗼𝘁𝗮𝗹(𝗥𝗔𝗠): ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB\n💾 𝗖𝘂𝗿𝗿𝗲𝗻𝘁(𝗥𝗔𝗠): ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB\n🛫 𝗣𝗶𝗻𝗴: 15 ms\n🤖 𝗨𝗽𝘁𝗶𝗺𝗲(𝗦𝗲𝗰𝗼𝗻𝗱𝘀): ${Math.floor(process.uptime())}\n━━━━━━━━━━━━━━━\n\n📩𝗔𝗗𝗠𝗜𝗡 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗜𝗡𝗙𝗢:https://www.facebook.com/profile.php?id=100052395031835`;

		message.reply(response);
	},
};