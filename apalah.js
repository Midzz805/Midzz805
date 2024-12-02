case "xbtn": {
	let mgmenu = await prepareWAMessageMedia({ image: B1 }, { upload: Midz.waUploadToServer })
	const msgii = await generateWAMessageFromContent(m.chat, {
	viewOnceMessageV2Extension: {
	message: {
	messageContextInfo: {
	deviceListMetadata: {},
	deviceListMetadataVersion: 2
	}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
	body: proto.Message.InteractiveMessage.Body.fromObject({
	text:`${global.footer}`
	}),
	carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
	cards: [{
	body: proto.Message.InteractiveMessage.Body.fromObject({
				  }),
				  footer: proto.Message.InteractiveMessage.Footer.fromObject({
				  }),
				  header: proto.Message.InteractiveMessage.Header.fromObject({
					title: `t.me/htmlxin\n#XeonAmpas`,
					hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: B1 }, { upload: Midz.waUploadToServer }))
				  }),
	nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
	buttons: [{
	"name": "single_select",
									"buttonParamsJson": `{"title":"sᴇʟᴇᴄᴛ ᴍᴇɴᴜ",
								"sections":[{
								"title":"ʙᴏᴛ ɪɴғᴏʀᴍᴀᴛɪᴏɴ",
								"highlight_label":"ʙᴏᴛ ɪɴғᴏʀᴍᴀᴛɪᴏɴ",
								"rows":[
								{
								"title":"• ɪɴғᴏ ᴍᴇɴᴜ",
								 "description":"sʜᴏᴡ ᴛʜᴇ ( ᴀʟʟ ᴍᴇɴᴜ )",
								"id":".allmenu"
							     },
							     {
							     "title":"• ɪɴғᴏ sᴄʀɪᴘᴛ",
							      "description":"sʜᴏᴡ ᴛʜᴇ (  sᴄʀɪᴘᴛ  )",
							      "id":".script"
							     },
							     {
							     "title":"• ɪɴғᴏ ᴄʀᴇᴀᴛᴏᴛ",
							      "description":"sʜᴏᴡ ᴛʜᴇ (  ᴏᴡɴᴇʀ  )",
							      "id":".owner"
							     }]
							      }]}`
								},
								{
									"name": "nigga twerk",
									"buttonParamsJson": `{\"display_text\":\"quick_reply\",\"id\":\".mute on\"}`
								},
								{
									"name": "cta_url",
									"buttonParamsJson": `{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}`
								},
								{
									"name": "cta_call",
									"buttonParamsJson": `{\"display_text\":\"call\",\"id\":\"message\"}`
								},
								{
									"name": "cta_copy",
									"buttonParamsJson": `{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}`
								},
								{
									"name": "cta_reminder",
									"buttonParamsJson": `{\"display_text\":\"cta_reminder\",\"id\":\"message\"}`
								},
								{
									"name": "cta_cancel_reminder",
									"buttonParamsJson": `{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}`
								},
								{
									"name": "address_message",
									"buttonParamsJson": `{\"display_text\":\"address_message\",\"id\":\"message\"}`
								},
								{
									"name": "send_location",
									"buttonParamsJson": ""
	}]
	})
	}
	]
	})
	})}
	}}, {userJid: m.sender, quoted: Midzchannel})
	await Midz.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
	}
	break


case 'panel': {
let t = text.split(',');
if (t.length < 2) return reply(`ᴇxᴀᴍᴘʟᴇ : .𝟷ɢʙ ɴᴀᴍᴀ,ɴᴏᴍᴏʀ`)
let username2 = t[0];
let u2 = t[1];
let mgmenu = await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/7fdd3220f15080293dbca.jpg" } }, { upload: Midz.waUploadToServer })
	const msgii = await generateWAMessageFromContent(m.chat, {
	viewOnceMessageV2Extension: {
	message: {
	messageContextInfo: {
	deviceListMetadata: {},
	deviceListMetadataVersion: 2
	}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
	body: proto.Message.InteractiveMessage.Body.fromObject({
	text: "𝙲𝙸𝙽𝙶𝚉𝚉 𝚅𝟷,𝟸"
	}),
	carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
	cards: [{
	body: proto.Message.InteractiveMessage.Body.fromObject({
				  }),
				  footer: proto.Message.InteractiveMessage.Footer.fromObject({
				  }),
				  header: proto.Message.InteractiveMessage.Header.fromObject({
					title: `ʜᴇʟʟᴏ,@${m.sender.replace(/@.+/g, '')}\n
					
ᴘʟᴇᴀsᴇ ᴄʜᴏᴏsᴇ ᴛʜᴇ sɪᴢᴇ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʙᴜʏ\n
> © ᴜʟᴛʀᴀᴍᴀɴ`,
					hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/7fdd3220f15080293dbca.jpg" } }, { upload: Midz.waUploadToServer }))
				  }),
	nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
	buttons: [{
	"name": "single_select",
									"buttonParamsJson": `{"title":"sᴇʟᴇᴄᴛ ᴍᴇɴᴜ",
								"sections":[{
								"title":"ʟɪsᴛ ʀᴀᴍ ᴍᴇɴᴜ",
								"highlight_label":"ʀᴇᴄᴏᴍᴇɴᴅᴇᴅ",
								"rows":[
								{
								"title":"ᴜɴʟɪ",
								 "description":"ᴜɴʟɪᴍɪᴛᴇᴅ ʀᴀᴍ/ᴄᴘᴜ",
								"id":".unli ${username2},${u2}"
							     },
							     {
							     "title":"𝟷ɢʙ",
							      "description":"𝟷ɢʙ ʀᴀᴍ/𝟹𝟶 ᴄᴘᴜ",
							      "id":".1gb ${username2},${u2}"
							      }, 
							      {
							     "title":"𝟸ɢʙ",
							      "description":"𝟸ɢʙ ʀᴀᴍ/𝟼𝟶 ᴄᴘᴜ",
							      "id":".2gb ${username2},${u2}"
							     },
							     {
							     "title":"𝟹ɢʙ",
							      "description":"𝟹ɢʙ ʀᴀᴍ/𝟿𝟶 ᴄᴘᴜ",
							      "id":".3gb ${username2},${u2}"
							     },
							     {
							     "title":"𝟺ɢʙ",
							      "description":"𝟺ɢʙ ʀᴀᴍ/𝟷𝟸𝟶 ᴄᴘᴜ",
							      "id":".4gb ${username2},${u2}"
							     },
							     {
							     "title":"𝟻ɢʙ",
							      "description":"𝟻ɢʙ ʀᴀᴍ/𝟷𝟻𝟶 ᴄᴘᴜ",
							      "id":".5gb ${username2},${u2}"
							     },
							     {
							     "title":"𝟼ɢʙ",
							      "description":"𝟼ɢʙ ʀᴀᴍ/𝟷𝟾𝟶 ᴄᴘᴜ",
							      "id":".6gb ${username2},${u2}"
							     },
							     {
							     "title":"𝟽ɢʙ",
							      "description":"𝟽ɢʙ ʀᴀᴍ/𝟸𝟷𝟶 ᴄᴘᴜ",
							      "id":".7gb ${username2},${u2}"
							     },
							     {
							     "title":"𝟾ɢʙ",
							      "description":"𝟾ɢʙ ʀᴀᴍ/𝟸𝟺𝟶 ᴄᴘᴜ",
							      "id":".8gb ${username2},${u2}"
							     },
							     {
							     "title":"𝟿ɢʙ",
							      "description":"𝟿ɢʙ ʀᴀᴍ/𝟸𝟽𝟶 ᴄᴘᴜ",
							      "id":".9gb ${username2},${u2}"
							      }]
							      }]}`
	}]
	})
	}
	]
	})
	})}
	}}, {userJid: m.sender, quoted: Midzchannel})
	await Midz.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
	}
	break
	
	
const MidzStickTes = () => {
        let MidzStikRep = fs.readFileSync('./database/image/sticker_reply/tes.webp')
        Midz.sendMessage(from, { sticker: MidzStikRep }, { quoted: m })
        }