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



        
