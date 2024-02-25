module.exports = {
  config: {
    name: "autorespondv7",
    version: "2.0.0",
    author: "Lorenzo",
    cooldowns: 5,
    role: 0,
    shortDescription: "Autoresponds with reactions and replies",
    longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
    category: "fun",
    guide: "-autorespondv7",
  },
  onStart: async ({ api, event }) => {
    // Blank onStart function as per the request
  },
  onChat: async ({ api, event }) => {
    const { body, messageID, threadID } = event;

    // Reactions based on words
    const emojis = {
"🕒": ["ai","Ai","ask","bard"], 
"🫡": ["yanzu","Yanzu"],    
"💜": ["xyl", "zunair", "purple", "violet", "lila", "oi", "owemjii", "hmm", "Kyle","kyle"],     
"💚": ["dia", "seyj", "ginanun", "gaganunin", "pfft", "Kyle", "gumanun"], 
"😏": ["Jo", "Ariii", "talong", "galit","umai","omai"], 
"😕": ["wtf", "fck", "haaays", "naku", "ngi ", "ngek", "nge ", "luh", "lah"], 
"🤣": ["pill", "laugh", "lt ", "gagi"," HAHAHAHA","hahahaha"],
"⏱️": ["prodia", "sdxl", "bardv3", "tanongv2", "-imagine", "genimg", "Tanongv4", "kamla", "-shortcut"],  
"🤖": ["bot","Bot"],   
"🗣️": ["fak","picture","video"," attachment🔗"], 
      "👋": ["hi"," hello","heyow","wassup","kamusta?","yoo"],     
      "😆": ["baliw","bolok","bobo","puke"," raul","tanga","suntukan","wati","buang", "bawal","jabol","jakol","attachment"," 😆","🤣","🥲","😠","🤪","pwetan","hoy"],      
      "🖕🏻": ["😡","bwkangshitt","nigga","loser","ulol"," tanga","olol","gago","puta","pota","putangina","putang ina","ywa","yawa","🖕","animal","bayot","bakla","bekki","bayut"], 
      "😢": ["😢","🥲","😞","☹️","lungkot"," kaiyak","naiiyak","umiiyak","lonely","sad","sakit","agoi","agoy","broken","masakit"],           
        "🎉": ["congratulations","congrats"," welcome","happy birthday"],  
      "💜": ["Kylepogi", "purple", "Fritz", "Sab", "Haru", "Xuazane", "Kim","Kyle","kyle"],
      "❌": ["no","wrong","error","syntax"," ❌"],
      "✔️": ["ok","Bein","pastebin","attachment🔗"],
      "✅": ["yes","correct","right","✅"," okay","attachment","successful"], 
  
    };

// Replies to specific words    
const replies = {      
  "*": "Sige, correct mo typo mo, tanga ka kasi🤦🏻‍♂️",
  "geh": "geh bahala karin dyan inamoka",
  "lakas": "lakas ng baho ng hininga mo lods", 
  "tagal": "mag hintay ka  wag aporado😒", 
  "yanzu": "yess my boss?", 
  "pafork": "ano? kung ayaw ko?",
  "robot": "ano nanaman nag rerecharge panga e😒",
  "fakyou": "fakyou karin gago bulok tete mo mapanghe pweee tapon kita sa Mars.", 
  "bayot": "pwetan kita😋💦",
  "🖕": "isa pang pakyou tamo isasako kitang tanginaka😠👊",
  "wag": "wag mo kalimutan na bobo ka.",
  "⚠︎":  "━━━━━━━━━━━━\nHi I'm 𝙔𝘼𝙉𝙕𝙐 🤖\n\n⛔𝗨𝗡𝗗𝗘𝗥 𝗣𝗥𝗢𝗧𝗘𝗖𝗧𝗜𝗢𝗡 𝗕𝗬 𝗞𝗬𝗟𝗘⛔\n━━━━━━━━━━━━━", 
"owner": "━━━━━━━━━━━━━\n\n『 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 』\n\n👤owner: Kyle\n🗓age: 19\n🌏country: Philippines🇵🇭\n🗒status: N/A\n\n🌐facebook: https://www.facebook.com/100052395031835\n━━━━━━━━━━━━━━", 
"prefix?": "tanong mo sa pagong",  
"ito ba prefix ×?": "yan nga prefix ko tanga kaba?",    
"kyle": "busy pa si boss Kyle, nakikipag bebetime pa sa mga chix nya wag mo isturbohin gago",
"collab": "Sige collab kayo, magbabasa ako",            
"×rank": "nagrarank ka na naman naka off eh",        
"pafork": "ano kung ayaw ko??",  
"hello": "Hi I'm 𝗬𝗮𝗻𝘇𝘂 🤖 I'm here to assist you how can I help you today/night?",      
"hahahaha": "Bhwahahhahha what if e pm mo owner ko na si 𝗞𝘆𝗹𝗲. para mas sasaya ka lalo sakanya..\n\n🌐𝗙𝗯➥https://www.facebook.com/Itzkyleigopjk",


};

    // React based on words
    for (const [emoji, words] of Object.entries(emojis)) {
      for (const word of words) {
        if (body.toLowerCase().includes(word)) {
          api.setMessageReaction(emoji, messageID, () => {}, true);
        }
      }
    }

    // Reply based on triggers
    for (const [trigger, reply] of Object.entries(replies)) {
      if (body.toLowerCase().includes(trigger)) {
        api.sendMessage(reply, threadID, messageID);
      }
    }
  },
};