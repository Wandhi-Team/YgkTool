module.exports = [
	{
		name: "自律神器：积分奖手册",
		channel: 4,
		icon: "/icon/tasks.png",
		statu: "hidden",
		link: "point_brochure",
		icon_color: "",
		description: "利用多巴胺机制帮助你自律",
	},
	{
		name: "离子方程式配平",
		channel: 4,
		icon: "/icon/lens.png",
		link: "coming",
		statu: "hidden",
		icon_color: "teal",
	},
	{
		name: "种子转磁链",
		channel: 4,
		icon: "cloud_download",
		statu: "hidden",
		link: "coming",
		icon_color: "deblue-300",
		description: "将种子文件转换为磁力链接",
	},
	{
		name: "文字识别",
		channel: 1,
		icon: "font_download",
		link: "ocr",
		statu: "hidden",
		icon_color: "blue-400",
		description: "识别图片中的文字，支持多语言",
	},
	{
		name: "服务协议生成",
		channel: 3,
		icon: "lock",
		link: "policy_generator",
		icon_color: "grey-500",
		description: "定制化生成服务协议和隐私政策",
	},
	{
		name: "AI图像识别",
		link: "aic",
		statu: "hidden",
		icon: "photo_album",
		icon_color: "blue-500",
		help: "",
		description: "识别图中的物体，支持植物/动物/汽车/菜品等等",
		channel: 1,
	},
	{
		name: "屏幕录制",
		link: "screenrecord",
		icon: "videocam",
		icon_color: "orange-400",
		help: "仅支持新版本的Chromium/Firefox内核的PC浏览器使用",
		channel: 2,
	},
	{
		name: "UA解析",
		link: "ua",
		icon: "devices",
		icon_color: "teal-300",
		help: "默认为本机UA(UserAgent)",
		channel: 3,
	},
	{
		name: "网页资源抓取",
		link: "console",
		icon: "language",
		icon_color: "indigo-300",
		help: "动态生成的内容可能无法抓取到",
		channel: 3,
	},
	{
		name: "翻译",
		link: "translate",
		icon: "/icon/translation.png",
		icon_color: "blue-400",
		help: "使用百度翻译引擎",
		channel: 4,
	},
	{
		statu: "ready",
		name: "日期&时间计算",
		link: "date_calculator",
		icon: "/icon/Google_Calendar_icon_(2020).svg",
		help: "输入负数可以向前推算",
		description:
			"计算两个日期间隔的天数和时间，或推算几天前后是哪一天，可以算算你活了多久 :)",
		channel: 4,
	},
	{
		name: "番茄钟",
		link: "pomodoro",
		statu: "development",
		icon: "/icon/pomodoro.png",
		description:
			"番茄工作法极大地提高了工作的效率，还会有意想不到的成就感。",
		channel: 4,
	},
	{
		name: "跨设备文本互传",
		link: "clipboard",
		icon: "call_split",
		icon_color: "green",
		help: "大文件可能会有很大延迟",
		network: true,
		statu: "hidden",
		channel: 4,
	},
	{
		name: "GIF分解",
		link: "gif_lib",
		icon: "collections",
		icon_color: "teal",
		description: "将GIF图片逐帧分解",
		channel: 2,
	},
	{
		name: "二维码生成",
		link: "qrcode",
		icon: "/icon/qrcode.png",
		help: "",
		description: "支持自定义颜色和大小；支持生成WiFi码",
		channel: 2,
	},
	{
		name: "B站封面获取",
		statu: "ready",
		link: "bilibili_cover",
		icon: "photo_size_select_actual",
		icon_color: "pink-300",
		description: "下载Bilibili上的视频和番剧封面",
		help: "番号请使用md开头，例：md425（《某科学的超电磁炮》）；视频请使用av开头，例：av32211954。点击图片链接地址可以快速复制。",
		channel: 4,
	},
	{
		name: "PornHub风格Logo生成",
		statu: "ready",
		link: "fake_pornhub_logo",
		icon: "/icon/imagesearch_roller-orange/icon-192-maskable.png",
		help: "仅供娱乐，产生任何后果自负",
		channel: 2,
	},
	// {
	// 	name: "便签",
	// 	link: "note",
	// 	icon: "/icon/scratchpad.png",
	// 	icon_color: "amber",
	// 	help: "所有内容保存在本地浏览器缓存中，不会上传到服务器。",
	// 	channel: 4,
	// },
	{
		statu: "development",
		name: "manifest生成",
		link: "manifest",
		icon: "settings_applications",
		icon_color: "grey",
		help: "语言类型请自行百度。如美式英语是en-us",
		channel: 3,
	},
	{
		name: "简繁转换",
		link: "sctc",
		statu: "development",
		icon: "font_download",
		icon_color: "red",
		statu: "ready",
		help: "",
		description: "作者：憂郁的烏龜",
		channel: 4,
	},
	{
		name: "做决定",
		link: "decision",
		statu: "development",
		icon: "widgets",
		icon_color: "indigo",
		description: "随机选取，选择困难症患者福音",
		help: "",
		channel: 4,
	},
	{
		name: "文本生成",
		link: "text_create",
		icon: "/icon/text_snippet-grey/icon-192-maskable.png",
		description: "批量生成有规律的文本，或模板文本，例如营销号文案",
		help: "使用“${}”代表关键字，如“${5}表示首项为5的关键字。暂时只支持统一的公差/公比（其实是因为作者懒）",
		channel: 4,
	},
	{
		name: "文件树生成",
		statu: "ready",
		link: "folder_tree",
		icon: "/icon/file.jpg",
		description: "生成文件夹结构",
		help: "不支持移动端使用；文件数量过多可能会有卡顿",
		channel: 3,
	},
	{
		name: "GIF制作",
		statu: "hidden",
		link: "gif",
		icon: "/icon/file.jpg",
		icon_color: "light-green",
		help: "过大的视频可能会有卡顿，所有操作均在本地执行，不消耗数据流量",
		channel: 2,
	},
	{
		statu: "ready",
		name: "樱花动漫视频解析",
		link: "imomoe_parse",
		icon: "/icon/video.svg",
		help: "部分番剧无法解析（因为是流视频）",
		channel: 2,
		network: true,
	},
	{
		name: "九格切图",
		link: "img_split",
		icon: "apps",
		icon_color: "blue",
		description: "将图片切成九宫格，在社交媒体发布逼格更高",
		help: "",
		channel: 2,
	},
	{
		name: "正则表达式测试",
		link: "regexp_test",
		icon: "sort_by_alpha",
		icon_color: "green-200",
		description: "测试正则表达式与文本是否匹配",
		statu: "ready",
		help: "",
		channel: 3,
	},
	{
		statu: "ready",
		name: "HTML转JSX",
		link: "html2jsx",
		icon: "/icon/code-html-green/icon-192-maskable.png",
		help: "不支持部分Html属性，请手动改为小驼峰命名法，所有操作均在本地执行，不消耗数据流量",
		channel: 3,
	},
	{
		name: "MIME-type查询",
		statu: "ready",
		link: "mimetype",
		icon: "/icon/file_present-green/icon-192-maskable.png",
		description: "查询文件的MIME-type，支持正反查询",
		channel: 3,
	},
	{
		name: "运动计分板",
		link: "scoreboard",
		icon: "today",
		icon_color: "lime",
		help: "",
		statu: "hidden",
		channel: 4,
	},
	{
		name: "表情制作",
		link: "meme_maker",
		icon: "/icon/fun.png",
		statu: "ready",
		help: "",
		channel: 2,
	},
	{
		name: "全能文本转换",
		statu: "ready",
		link: "endecode",
		icon: "wb_auto",
		icon_color: "cyan-200",
		description: "可能是最全的文本转换工具，支持多达7种文本",
		help: "",
		channel: 3,
	},
	{
		name: "图片转Base64",
		statu: "ready",
		link: "img2base64",
		icon: "photo",
		icon_color: "green-300",
		help: "图片过大可能有卡顿",
		channel: 2,
	},
	{
		statu: "ready",
		name: "图片&字幕拼接",
		link: "img_mosaic",
		icon: "view_column",
		icon_color: "amber-600",
		help: "图片过大可能会卡顿；拉动阴影部分可调整拼接范围，适合字幕或长图拼接",
		channel: 2,
	},
	{
		name: "化学方程式配平",
		statu: "ready",
		link: "cem",
		icon: "/icon/magic-line-blue/icon-192-maskable.png",
		channel: 4,
	},
	{
		name: "云音乐歌单对比",
		link: "songlist",
		icon: "queue_music",
		icon_color: "red-600",
		channel: 4,
		network: true,
	},
	{
		statu: "ready",
		name: "图片压缩",
		link: "img_compress",
		icon: "/icon/finance.png",
		icon_color: "brown-300",
		help: "太小的图片可能没有效果",
		channel: 2,
	},
	{
		name: "词云图制作",
		link: "word_cloud",
		icon: "cloud_circle",
		icon_color: "green-300",
		help: "点击图片可保存；不填写文字尺寸则会采用随机大小",
		statu: "hidden",
		channel: 2,
	},
	{
		name: "文字转语音",
		link: "tts",
		icon: "/icon/audio.svg",
		help: "每次最多合成500字符",
		description: "将文字转成mp3朗读音频，支持多种声线/速度/音调/音量自定义",
		statu: "hidden",
		channel: 1,
		network: true,
	},
	{
		name: "金额数字大写",
		link: "num2chinese",
		icon: "attach_money",
		icon_color: "yellow-600",
		help: "生成结果仅供参考",
		statu: "ready",
		channel: 4,
	},
	{
		name: "取色器",
		link: "color_picker",
		icon: "colorize",
		icon_color: "amber-800",
		help: "可以通过键盘方向键精准调节",
		channel: 2,
	},
	{
		name: "词典",
		statu: "ready",
		link: "dic_ci",
		icon: "/icon/book.png",
		description: "便捷查询常用词",
		channel: 4,
		network: true,
	},
	{
		name: "歇后语查询",
		statu: "ready",
		link: "xiehouyu",
		icon: "/icon/book.png",
		description: "支持谜面谜底互查",
		channel: 4,
		network: true,
	},
	{
		name: "成语词典",
		link: "dic_idiom",
		icon: "/icon/book.png",
		statu: "ready",
		help: "支持缩写哦",
		channel: 4,
		network: true,
	},
	{
		statu: "ready",
		name: "字典",
		link: "dic_word",
		icon: "/icon/book.png",
		help: "暂不支持太简单的字查询",
		description: "我们中国的汉字，落笔成画留下五千年的历史",
		channel: 4,
		network: true,
	},
	{
		name: "JS键盘码查询",
		statu: "ready",
		link: "js_keycode",
		icon: "/icon/code-js-yellow/icon-192-maskable.png",
		channel: 3,
	},
	{ name: "Hello Tool", link: "http://hellotool.htm.kim", channel: 5 },
	{
		name: "精品网站导航",
		link: "https://imyshare.com/?from=ygktool",
		channel: 5,
	},
];
