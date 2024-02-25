module.exports = {
config: {
name: "autorespondv3",
version: "6.0",
author: "Haru",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "fun",
guide: "?autorespondv3",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"👋": ["hi"," hello","heyow","wassup","kamusta?","yoo"],     
"😆": ["baliw","bolok","bobo","puke"," raul","tanga","suntukan","wati","buang", "bawal","jabol","jakol","attachment"," 😆","🤣","🥲","😠","🤪","pwetan","hoy"],      
"🖕🏻": ["😡","bwkangshitt","nigga","loser","ulol"," tanga","olol","gago","puta","pota","putangina","putang ina","ywa","yawa","🖕","animal","bayot","bakla","bekki","bayut"], 
"😢": ["😢","🥲","😞","☹️","lungkot"," kaiyak","naiiyak","umiiyak","lonely","sad","sakit","agoi","agoy","broken","masakit"],           
  "🎉": ["congratulations","congrats"," welcome","happy birthday"],  
"💜": ["Kylepogi", "purple", "Fritz", "Sab", "Haru", "Xuazane", "Kim","Kyle","kyle"],
"❌": ["no","wrong","error","syntax"," ❌"],
"✔️": ["ok","Bein","pastebin","attachment🔗"],
"✅": ["yes","correct","right","✅"," okay","attachment","successful"],
"👋": ["hi ", "hello ", "kumusta"],
"🔥": ["apoy", "lakas", "astig", "damn", "angas", "galing", "husay"],
};

// Replies to specific words
const replies = {
"angas": "uwu ako lang to lods😎", 
"bye": "wag mo daw iiwan owner ko.",
"@kyle": "ano nanaman yung Kaylangan mo sa admin ko?🙂",
"kyle": "kaylangan mo sa pogi kung admin?", 
"hi po": "Hello Can U attracted my admin na pogi👉https://www.facebook.com/100052395031835",  


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