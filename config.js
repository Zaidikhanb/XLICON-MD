const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "966534392612"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'dripmobiles@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'hasilpur Pak'
global.gurl = 'https://instagram.com/zahidashiqbadana/' // add your username
global.sudo = process.env.SUDO || '923157652451' 
global.devs = '923157652451';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtMZmhBK2J1YnVzTC8vZGJKejVXaEt1Q1MzS1prWURyTlRUbjFUV0EyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU81eVZFYlltenhkQTZuL0xqZk1FOEdDRU42ZmNzQmdaUU1LUEViWGFtZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQnlBTmlWWmdWZ25XUUdXSy8wWmxDaHNQVUdKTUErcktyOURsbHNXRTBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1WmFFSDRKQlIyTGJEUmhBalJXNkJFNndyN2xvUWNLZlZsaDRJMkhpdFJvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPdHYwVFpxVFE2TkNneTNDS2loMDdSbSthc0owWXJwVUhHRFVnVXh4MXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFnNzF0RWxtQnh5b21uUWI3Nzg1ckxEOWRFdUNrRU1mekEzSWU0WnJIbVE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMUnRpdmtZMStnTnIrcDdPcGlLaTA2ZFRFcFdvTkdsR3pXeXNkUWoyRzByQXZ3ckg2K3hGanV5UzVHeHR1TVBpeUxUQ1ZOdnFnRm0yVVlmRndCU0Rndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0OSwiYWR2U2VjcmV0S2V5IjoiK1kvOXRGUk1YOVRWTGdoblVEeE5pZ05jQ2NPVmhFMGwzRzdHQUVvTUFaQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQlg4VDREQmRRbXE5QWx6Sk44ZGF4USIsInBob25lSWQiOiI5ZTg3MmQ2Ni1hZDFiLTRlOTQtODFjYy1lMjYwZGYwODI1YzEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTB1L1IybDhhYlQxWkQ1ZkEyY3dZT2RCdG1vPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3TCs0SWpyMWt6WSszVDkreGRDamVuS3dBYlE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMekl2clFHRVBtbmg2b0dHQVE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpreXkzT2t1TCtKSm8ycXFvZUJKRkdjZE5keW1EdnZ0YkFJQUExdnZWWGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlxZVhBZDVKUU94UlZQN2dabjVIcHA1NytUNzllRG5mSUtFWFhta1Z1c09OeWR1WENieEtySFcwYWRHWWNHa2JVUldZendQSkJOTnZ2a3UrTVVoZkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEQ29qQ20xOFRNU3FzbnNFZ0lmYWd0S01JRFQzREJUR1IxdzdHTCtGZGhEWUs3L2RodFJRWGdlbnpmR2FvNERnREo1Qm1maUEvRlJQdzJpMHgyMEhqZz09In0sIm1lIjp7ImlkIjoiOTY2NTM0MzkyNjEyOjE3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk2NjUzNDM5MjYxMjoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXWk1zdHpwTGkvaVNhTnFxcUhnU1JSbkhUWGNwZzc3N1d3Q0FBTmI3MVY1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk4ODEyOTI0fQ== ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'ZAIDI',
  packname:  process.env.PACK_NAME || 'KING',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'الســــلام و علـــــیکم!
My self 
NAME:
Zahid Ashiq💔🅰️
 GENDER:
MALE 🙎‍♂️
AGE: 
18 YEARS 🔞
LOCATION:
PAKISTAN 🇵🇰
PASSION:
HACKING 💫

How can i help you???

.video (video name or link)
.song (song name or link)
.apk (app name or link)
.menu for details

Please place your
 name:
Gender:
Age:
Location:
Passion:
☝️ Requirements are used to add you to my group😊

https://chat.whatsapp.com/KatJ0CWohfqHgY7ecp4KmS' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
