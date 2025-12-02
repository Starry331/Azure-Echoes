// 游戏剧本数据
// 蔚蓝回响 (Azure Echo)

export const scenario = {
  // 游戏基本信息
  title: "蔚蓝回响",
  subtitle: "Azure Echo",
  
  // 角色定义
  characters: {
    protagonist: {
      name: "我",
      color: "#6bb3ff",
    },
    heroine: {
      name: "神秘少女",
      color: "#7dd3fc",
    },
    xiyin: {
      name: "汐音",
      color: "#7dd3fc",
    },
    neighbor: {
      name: "山田大婶",
      color: "#f9a8d4",
    }
  },

  // 表情映射
  // greeting - 打招呼 | normal - 正常说话 | sad - 伤心 | angry - 生气
  // playful - 俏皮 | scared - 害怕 | surprised - 惊讶 | happy - 开心

  // 场景定义
  scenes: {
    // ═══════════════════════════════════════
    // 序章：潮汐的赠礼
    // ═══════════════════════════════════════
    
    start: {
      background: "./assets/backgrounds/beach_noon.png",
      bgm: "./assets/bgm/cicada.mp3",
      dialogs: [
        {
          character: null,
          text: "【序章：潮汐的赠礼】",
          effect: "fade",
        },
        {
          character: null,
          text: "热。",
        },
        {
          character: null,
          text: "空气粘稠得像是融化的胶水，每一次呼吸都伴随着灼烧感。",
        },
        {
          character: null,
          text: "逃离了东京那个巨大的水泥蒸笼，我本以为老家的海边能给我带来一丝清凉。",
        },
        {
          character: null,
          text: "结果，迎接我的只是更加肆无忌惮的太阳。",
        },
        {
          character: null,
          text: "我眯着眼睛，看着前方被热浪扭曲的海岸线。",
        },
        {
          character: null,
          text: "沙滩上除了我，没有半个人影。",
        },
        {
          character: null,
          text: "只有几只海鸥不知疲倦地在低空盘旋。",
        },
        {
          character: "protagonist",
          text: "嗯……？那是什么？",
        },
        {
          character: null,
          text: "在海浪与沙滩的交界处，有一抹刺眼的白色。",
        },
        {
          character: null,
          text: "是被冲上岸的垃圾吗？还是……",
        },
        {
          character: null,
          text: "我加快了脚步，鞋子陷进滚烫的沙子里，发出沉闷的声响。",
        },
        {
          character: null,
          text: "走近后，心脏猛地收缩了一下。",
        },
        {
          character: null,
          text: "那不是垃圾。",
        },
        {
          character: null,
          text: "那是一个人。",
        },
        {
          character: null,
          text: "一个穿着白色连衣裙的少女，侧卧在浅滩上，半个身子浸泡在海水里。",
        },
        {
          character: "protagonist",
          text: "喂！你没事吧？！",
        },
        {
          character: null,
          text: "我冲过去跪在她身边，顾不上被海水打湿的裤腿。",
        },
        {
          character: null,
          text: "她的皮肤在阳光下白得近乎透明，湿透的银蓝色长发如同海藻般散落在沙滩上。",
        },
        {
          character: null,
          text: "我颤抖着伸出手，触碰到她肩膀的瞬间，一股刺骨的寒意顺着指尖传来。",
        },
        {
          character: null,
          text: "简直就像是触碰到了一块深海的坚冰。",
        },
        {
          character: "protagonist",
          text: "好冰……喂！醒醒！能听到我说话吗？",
        },
        {
          character: null,
          text: "我焦急地拍了拍她的脸颊。",
        },
        {
          character: null,
          text: "几秒钟后，她的睫毛微微颤动了一下，缓缓睁开了眼睛。",
        },
        {
          character: null,
          text: "那是一双深邃得仿佛能吸入灵魂的蔚蓝色瞳孔，里面没有倒映出我的脸，只有一片虚无。",
        },
        {
          character: "heroine",
          text: "……好吵。",
          sprite: "./assets/characters/heroine/normal.png",
          position: "center",
        },
        {
          character: null,
          text: "她的声音空灵且冷漠，不带一丝情感波动，仿佛这个世界的嘈杂与她无关。",
        },
        {
          character: "protagonist",
          text: "你……你还好吗？需要叫救护车吗？",
        },
        {
          character: "heroine",
          text: "海的……声音……消失了……",
          sprite: "./assets/characters/heroine/normal.png",
        },
        {
          character: null,
          text: "还没等我理解她这句莫名其妙的话，她眼中的光芒再次涣散。",
        },
        {
          character: null,
          text: "头一歪，她再次失去了意识，软软地倒在了我的怀里。",
        },
        {
          character: null,
          text: "只剩下冰冷的触感，和依旧嘈杂的蝉鸣。",
        },
        {
          character: null,
          text: "【序章 END】",
          effect: "fade",
        },
      ],
      nextScene: "chapter1",
    },

    // ═══════════════════════════════════════
    // 第一章：陆地上的第一口空气
    // ═══════════════════════════════════════
    
    chapter1: {
      background: "./assets/backgrounds/old_room_sunset.png",
      bgm: "./assets/bgm/fan_waves.mp3",
      dialogs: [
        {
          character: null,
          text: "【第一章：陆地上的第一口空气】",
          effect: "fade",
        },
        {
          character: null,
          text: "我坐在床边的木椅上，看着躺在床上的少女。",
        },
        {
          character: null,
          text: "电风扇费力地摇着头，吹出微弱的热风。",
        },
        {
          character: null,
          text: "把她从海滩一路抱回来废了我不少力气，好在她的体重轻得不可思议。",
        },
        {
          character: null,
          text: "我已经给她盖上了薄毯子，但她身上的体温依然低得吓人。",
        },
        {
          character: "protagonist",
          text: "（叹气）这下可真是捡了个大麻烦回来啊……",
        },
        {
          character: null,
          text: "床上的少女动了一下。",
        },
        {
          character: null,
          text: "她缓缓撑起上半身，盖在身上的毯子滑落。",
        },
        {
          character: null,
          text: "她环顾着这个陌生的旧房间，眼神中充满了像被捕获的小动物一样的警惕。",
        },
        {
          character: null,
          text: "最终，她的目光锁定在了我的身上，身体不由自主地向后缩了缩，双手抓紧了被角。",
        },
        {
          character: "heroine",
          text: "这里是……哪里？你……是谁？",
          sprite: "./assets/characters/heroine/scared.png",
          position: "center",
        },
        {
          character: "protagonist",
          text: "别紧张，这里是我家。我是个趁暑假回来的大学生。",
        },
        {
          character: "protagonist",
          text: "你在海边晕倒了，我把你带了回来。不然你大概会被晒成人干。",
        },
        {
          character: null,
          text: "她听完我的话，稍微放松了一些警惕，抓着被角的手松开了一些。",
        },
        {
          character: "heroine",
          text: "是你……救了我？",
          sprite: "./assets/characters/heroine/normal.png",
        },
        {
          character: "protagonist",
          text: "算是吧。话说回来，你叫什么名字？家住在哪里？需要我帮你联系家人吗？",
        },
        {
          character: null,
          text: "听到我的问题，她愣住了。",
        },
        {
          character: null,
          text: "她低下头，眉头微微皱起，似乎在努力思索着什么。",
        },
        {
          character: null,
          text: "过了好一会儿，她摇了摇头，声音变得低落起来，眼神里充满了迷茫。",
        },
        {
          character: "heroine",
          text: "我……想不起来了。",
          sprite: "./assets/characters/heroine/sad.png",
        },
        {
          character: "heroine",
          text: "名字……过去……什么都……脑子里只有一片蓝色……",
          sprite: "./assets/characters/heroine/sad.png",
        },
        {
          character: null,
          text: "失忆？真是教科书般的展开啊。",
        },
        {
          character: null,
          text: "看着她那双因为迷茫而显得脆弱的眼睛，我实在无法怀疑她在撒谎。",
        },
        {
          character: null,
          text: "总不能一直叫她『喂』或者『那个谁』，既然如此……",
        },
        {
          character: "protagonist",
          text: "既然想不起来，那就先取个暂时的名字吧？",
        },
        {
          character: "protagonist",
          text: "我看你的头发颜色很像大海，又是顺着潮汐被冲上来的……",
        },
        {
          character: "protagonist",
          text: "不如就叫你 汐音 吧。潮汐的汐，声音的音。",
        },
        {
          character: null,
          text: "她抬起头，低声重复着这个名字。",
        },
        {
          character: "xiyin",
          text: "汐……音……",
          sprite: "./assets/characters/heroine/normal.png",
        },
        {
          character: null,
          text: "她似乎在品味这两个字的发音。",
        },
        {
          character: null,
          text: "随后，她的嘴角微微上扬，露出了一个极淡的、如释重负般的微笑。",
        },
        {
          character: null,
          text: "那个瞬间，昏暗的房间仿佛都被照亮了一瞬。",
        },
        {
          character: "xiyin",
          text: "汐音……是个好听的名字。我喜欢。",
          sprite: "./assets/characters/heroine/happy.png",
        },
        {
          character: null,
          text: "【音效：咕——】",
        },
        {
          character: null,
          text: "温馨的气氛瞬间被打破了。",
        },
        {
          character: null,
          text: "声音清晰地从她肚子里传了出来。",
        },
        {
          character: null,
          text: "汐音愣住了，她瞪大了眼睛，双手慌乱地按住自己的肚子，一脸不可思议地看着我。",
        },
        {
          character: "xiyin",
          text: "刚才……身体里……发出了奇怪的雷鸣？",
          sprite: "./assets/characters/heroine/surprised.png",
        },
        {
          character: "protagonist",
          text: "（忍不住笑出声）那不是雷鸣，那是你肚子饿了在抗议。",
        },
        {
          character: "protagonist",
          text: "看来在找回记忆之前，我得先负责把你喂饱了。走吧，我去弄点吃的。",
        },
        {
          character: null,
          text: "【第一章 END】",
          effect: "fade",
        },
      ],
      nextScene: "chapter2",
    },

    // ═══════════════════════════════════════
    // 第二章：危险的温度
    // ═══════════════════════════════════════
    
    chapter2: {
      background: "./assets/backgrounds/living_room_night.png",
      bgm: "./assets/bgm/night_static.mp3",
      dialogs: [
        {
          character: null,
          text: "【第二章：危险的温度】",
          effect: "fade",
        },
        {
          character: null,
          text: "把汐音安顿在沙发上后，我翻遍了橱柜，只找到了两盒速食杯面。",
        },
        {
          character: null,
          text: "随着开水注入，人工调味料浓烈的香气在狭窄的空间里弥漫开来。",
        },
        {
          character: "protagonist",
          text: "条件有限，今晚先凑合一下。这叫杯面，等三分钟就能吃了。",
        },
        {
          character: null,
          text: "汐音蜷缩在沙发角落，死死盯着那两个冒着白气的纸杯。",
        },
        {
          character: "xiyin",
          text: "那个白色的烟雾……是它的灵魂吗？",
          sprite: "./assets/characters/heroine/surprised.png",
          position: "center",
        },
        {
          character: "protagonist",
          text: "不，那是热气。说明它很烫，很危险。",
        },
        {
          character: null,
          text: "三分钟到。我揭开盖子，递给她一杯。",
        },
        {
          character: null,
          text: "她犹豫地接过，模仿我的动作拿起叉子，挑起一缕面条。",
        },
        {
          character: null,
          text: "还没等我提醒，她就直接送进了嘴里。",
        },
        {
          character: "xiyin",
          text: "！！！",
          sprite: "./assets/characters/heroine/surprised.png",
        },
        {
          character: null,
          text: "她猛地捂住嘴，身体剧烈颤抖，眼角瞬间泛起了生理性的泪花。",
        },
        {
          character: "xiyin",
          text: "好痛……舌头……被咬了……",
          sprite: "./assets/characters/heroine/scared.png",
        },
        {
          character: null,
          text: "看着她痛苦的样子，我必须做点什么。",
        },
        {
          character: null,
          text: "【关键抉择】",
          effect: "fade",
        },
        {
          choices: [
            // A. 侧重保护：好感+5, 异化+0, 适应-2
            { text: "快吐出来！喝点冷水！", nextScene: "chapter2_choiceA", affection: 5, alienation: 0, adaptation: -2 },
            // B. 侧重教导：好感+3, 异化-2, 适应+3
            { text: "要吹一吹再吃，像这样。", nextScene: "chapter2_choiceB", affection: 3, alienation: -2, adaptation: 3 },
          ],
        },
      ],
    },

    // 第二章 选择A：保护欲过强
    chapter2_choiceA: {
      background: "./assets/backgrounds/living_room_night.png",
      bgm: "./assets/bgm/night_static.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "快吐出来！别咽下去！",
        },
        {
          character: "protagonist",
          text: "那是开水泡的，会烫伤食道的！",
        },
        {
          character: null,
          text: "我慌忙倒了一杯凉水递到她嘴边。",
        },
        {
          character: null,
          text: "汐音听话地吐掉了面条，大口喝着凉水，胸口剧烈起伏。",
        },
        {
          character: null,
          text: "过了好一会儿，她才缓过劲来，眼泪汪汪地看着我。",
        },
        {
          character: "xiyin",
          text: "陆地上的食物……好可怕……",
          sprite: "./assets/characters/heroine/sad.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "如果没有你在……我刚才可能就被它杀死了。",
          sprite: "./assets/characters/heroine/normal.png",
        },
        {
          character: "protagonist",
          text: "没那么夸张……不过以后吃东西前一定要问我。",
        },
        {
          character: "xiyin",
          text: "嗯……我会听话的。只要听你的话，就不会痛了对吧？",
          sprite: "./assets/characters/heroine/happy.png",
        },
        {
          character: null,
          text: "她抓住了我的袖口，眼神中充满了依赖。",
        },
        {
          character: null,
          text: "但这似乎并不是什么好事，她变得更加畏惧这个世界了。",
        },
        {
          character: null,
          text: "【第二章 END】",
          effect: "fade",
        },
      ],
      nextScene: "chapter3",
    },

    // 第二章 选择B：引导适应
    chapter2_choiceB: {
      background: "./assets/backgrounds/living_room_night.png",
      bgm: "./assets/bgm/night_static.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "别急着吞下去。人类的食物大都是热的，你要学会让它降温。",
        },
        {
          character: "protagonist",
          text: "看我的口型，轻轻吹气——呼——",
        },
        {
          character: null,
          text: "汐音含着眼泪，看着我示范的动作。",
        },
        {
          character: null,
          text: "她试探性地嘟起嘴唇，对着叉子上的面条轻轻吹气。",
        },
        {
          character: "xiyin",
          text: "呼……呼……是这样吗？",
          sprite: "./assets/characters/heroine/normal.png",
          position: "center",
        },
        {
          character: "protagonist",
          text: "对，再试试。",
        },
        {
          character: null,
          text: "这次她小心翼翼地吃了一口。",
        },
        {
          character: null,
          text: "虽然眉头还是皱着，但紧接着，她的表情舒展开来，眼中闪烁着新奇的光芒。",
        },
        {
          character: "xiyin",
          text: "奇怪的感觉……痛觉消失了，变成了……暖洋洋的味道。",
          sprite: "./assets/characters/heroine/happy.png",
        },
        {
          character: "xiyin",
          text: "陆地上的生物，原来是靠吃这种『痛觉』活着的吗？真有趣。",
          sprite: "./assets/characters/heroine/playful.png",
        },
        {
          character: null,
          text: "她似乎接受了这个设定，开始笨拙地模仿我吹气的动作。",
        },
        {
          character: null,
          text: "这孩子，适应力也许比我想象的要强。",
        },
        {
          character: null,
          text: "【第二章 END】",
          effect: "fade",
        },
      ],
      nextScene: "chapter3",
    },

    // ═══════════════════════════════════════
    // 第三章：干涸的焦虑
    // ═══════════════════════════════════════
    
    chapter3: {
      background: "./assets/backgrounds/bathroom_night.png",
      bgm: "./assets/bgm/dripping_ambient.mp3",
      dialogs: [
        {
          character: null,
          text: "【第三章：干涸的焦虑】",
          effect: "fade",
        },
        {
          character: null,
          text: "深夜，我发现汐音不见了。",
        },
        {
          character: null,
          text: "最后，我在浴室里发现了她。",
        },
        {
          character: null,
          text: "她穿着我不合身的衬衫，整个人蜷缩在没有放水的空浴缸里，",
        },
        {
          character: null,
          text: "像是一个被遗弃在岸边、即将干涸的贝壳。",
        },
        {
          character: "protagonist",
          text: "汐音？不回房间睡吗？浴缸里很硬吧。",
        },
        {
          character: null,
          text: "听到我的声音，她缓缓抬起头。",
        },
        {
          character: null,
          text: "借着月光，我看到她的皮肤虽然依旧白皙，但似乎失去了一些光泽，显得有些干燥粗糙。",
        },
        {
          character: "xiyin",
          text: "那个房间……空气太干了。",
          sprite: "./assets/characters/heroine/sad.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "感觉就像……肺里吸满了沙子。皮肤也……很难受。",
          sprite: "./assets/characters/heroine/scared.png",
        },
        {
          character: null,
          text: "离开水太久，对她来说或许不仅仅是不适，更是威胁生命的事。",
        },
        {
          character: null,
          text: "【关键抉择】",
          effect: "fade",
        },
        {
          choices: [
            // A. 精神安抚：好感+5, 异化-5, 适应+0
            { text: "只要你在我身边我就放心了。", nextScene: "chapter3_trueRoute", affection: 5, alienation: -5, adaptation: 0 },
            // B. 尊重天性：好感+3, 异化+5, 适应-2
            { text: "我帮你放点温水，今晚就睡在水里吧。", nextScene: "chapter3_deathRoute", affection: 3, alienation: 5, adaptation: -2 },
            // C. 残酷磨练：好感-3, 异化-10, 适应+5
            { text: "必须忍耐，想在陆地生活就得适应干燥。", nextScene: "chapter3_badRoute", affection: -3, alienation: -10, adaptation: 5 },
          ],
        },
      ],
    },

    // 第三章 选择A：精神安慰 → 死亡结局路线
    chapter3_deathRoute: {
      background: "./assets/backgrounds/bathroom_night.png",
      bgm: "./assets/bgm/dripping_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "别怕，只是还不习惯而已。",
        },
        {
          character: "protagonist",
          text: "我会一直陪着你的，直到你睡着。",
        },
        {
          character: null,
          text: "我伸手握住了她冰凉的手。",
        },
        {
          character: null,
          text: "汐音看着我，眼中的恐惧稍微消退了一些。",
        },
        {
          character: "xiyin",
          text: "真的吗？……你在身边的话，那种刺痛感好像稍微好一点了。",
          sprite: "./assets/characters/heroine/normal.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "那我……就忍耐一下吧。虽然这里很难受，但我不想离开你。",
          sprite: "./assets/characters/heroine/sad.png",
        },
        {
          character: null,
          text: "她强撑着露出一个虚弱的笑容，闭上了眼睛。",
        },
        {
          character: null,
          text: "我并不知道，我的这句安慰，正在让她透支生命来对抗本能。",
        },
        {
          character: null,
          text: "【第三章 END - 死亡路线开启】",
          effect: "fade",
        },
      ],
      nextScene: "chapter4",
    },

    // 第三章 选择B：照顾天性 → 真/好结局路线
    chapter3_trueRoute: {
      background: "./assets/backgrounds/bathroom_night.png",
      bgm: "./assets/bgm/dripping_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "抱歉，是我考虑不周。",
        },
        {
          character: "protagonist",
          text: "既然很难受，那就不要勉强了。我给你放水。",
        },
        {
          character: null,
          text: "我拧开水龙头。水流哗啦啦地涌出。",
        },
        {
          character: null,
          text: "随着水位慢慢上涨，没过她的身体，汐音紧绷的肩膀终于放松了下来。",
        },
        {
          character: null,
          text: "原本干燥的皮肤在接触到水的瞬间，仿佛重新获得了生命力。",
        },
        {
          character: "xiyin",
          text: "水……啊……",
          sprite: "./assets/characters/heroine/normal.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "谢谢你……这样我就安心了……水的声音，就像摇篮曲一样。",
          sprite: "./assets/characters/heroine/happy.png",
        },
        {
          character: null,
          text: "她把脸颊贴在膝盖上，在水中露出了安心的笑容，",
        },
        {
          character: null,
          text: "尾椎处甚至隐约泛起了鳞片的光泽。",
        },
        {
          character: "xiyin",
          text: "晚安……你要是敢偷看的话，我会生气的哦？",
          sprite: "./assets/characters/heroine/playful.png",
        },
        {
          character: null,
          text: "【第三章 END - 真/好结局路线开启】",
          effect: "fade",
        },
      ],
      nextScene: "chapter4",
    },

    // 第三章 选择C：强迫适应 → 坏结局路线
    chapter3_badRoute: {
      background: "./assets/backgrounds/bathroom_night.png",
      bgm: "./assets/bgm/dripping_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "汐音，你不能总依赖水。",
        },
        {
          character: "protagonist",
          text: "既然来到了陆地，如果不适应这种干燥，你是没法在这里活下去的。站起来，回房间去。",
        },
        {
          character: null,
          text: "我的语气严厉了一些。",
        },
        {
          character: null,
          text: "汐音愣住了，她难以置信地看着我，身体颤抖了一下。",
        },
        {
          character: "xiyin",
          text: "你是说……这种痛苦，是必须的吗？",
          sprite: "./assets/characters/heroine/surprised.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "……我知道了。因为这是你们人类的规矩，对吧？",
          sprite: "./assets/characters/heroine/angry.png",
        },
        {
          character: null,
          text: "她咬着嘴唇，强忍着不适站了起来，走出了浴缸。",
        },
        {
          character: null,
          text: "经过我身边时，她没有看我。",
        },
        {
          character: "xiyin",
          text: "我会适应的……就算皮肤裂开也会适应的。你满意了吗？",
          sprite: "./assets/characters/heroine/angry.png",
        },
        {
          character: null,
          text: "看着她倔强却孤单的背影，我感觉到我们之间产生了一道看不见的裂痕。",
        },
        {
          character: null,
          text: "【第三章 END - 坏结局路线开启】",
          effect: "fade",
        },
      ],
      nextScene: "chapter4",
    },

    // ═══════════════════════════════════════
    // 第四章：清晨的不速之客
    // ═══════════════════════════════════════
    
    chapter4: {
      background: "./assets/backgrounds/living_room_morning.png",
      bgm: "./assets/bgm/morning_birds.mp3",
      dialogs: [
        {
          character: null,
          text: "【第四章：清晨的不速之客】",
          effect: "fade",
        },
        {
          character: null,
          text: "清晨的阳光透过窗帘缝隙刺痛了我的眼睛。",
        },
        {
          character: null,
          text: "昨晚折腾到很晚，我感觉全身酸痛。",
        },
        {
          character: null,
          text: "我迷迷糊糊地走到客厅，眼前的景象让我瞬间清醒了。",
        },
        {
          character: null,
          text: "汐音正跪坐在电视机前，脸贴得离屏幕只有五厘米。",
        },
        {
          character: null,
          text: "她身上还穿着我那件宽大的白衬衫，光着两条腿，随着电视里早操的节奏，奇怪地晃动着脑袋。",
        },
        {
          character: "protagonist",
          text: "……你在干什么？",
        },
        {
          character: null,
          text: "她吓了一跳，像受惊的猫一样猛地回过头。",
        },
        {
          character: "xiyin",
          text: "这个黑色的箱子……里面关着小人。",
          sprite: "./assets/characters/heroine/surprised.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "他们在做奇怪的动作……是在求救吗？",
          sprite: "./assets/characters/heroine/normal.png",
        },
        {
          character: "protagonist",
          text: "那是电视，里面的人不是真的……算了，很难解释。",
        },
        {
          character: null,
          text: "就在我准备去刷牙的时候——",
        },
        {
          character: null,
          text: "【咚咚咚！】",
          effect: "shake",
        },
        {
          character: null,
          text: "响亮的敲门声传来。",
        },
        {
          character: "neighbor",
          text: "在吗？我是住在隔壁的山田啊！给你送自家种的西瓜来了！",
          sprite: "./assets/characters/neighbor/Yamada-san.png",
          position: "center",
        },
        {
          character: null,
          text: "心脏骤停。",
        },
        {
          character: null,
          text: "是隔壁那个以『大嘴巴』著称的山田大婶。",
        },
        {
          character: null,
          text: "要是被她看到家里有个穿着男式衬衫、来历不明的美少女……",
        },
        {
          character: null,
          text: "不出半天，整个镇子都会传遍『某家的小儿子拐带未成年少女』的谣言。",
        },
        {
          character: "protagonist",
          text: "遭了！汐音，快躲……",
        },
        {
          character: null,
          text: "来不及了。",
        },
        {
          character: null,
          text: "玄关的大门并没有锁（乡下的坏习惯），随着『嘎吱』一声，门被拉开了。",
        },
        {
          character: "neighbor",
          text: "哎呀门没锁呢！我就直接进来了哦——诶？",
        },
        {
          character: null,
          text: "时间仿佛静止了。",
        },
        {
          character: null,
          text: "大婶手里抱着西瓜，僵在原地，目光落在了衣衫不整的汐音身上。",
        },
        {
          character: null,
          text: "汐音也愣住了，她看着陌生的大婶，本能地感到了威胁，身体微微紧绷。",
        },
        {
          character: "xiyin",
          text: "这个人类……气息很强。是敌人吗？",
          sprite: "./assets/characters/heroine/angry.png",
        },
        {
          character: null,
          text: "必须立刻解释！否则就完蛋了！",
        },
        {
          character: null,
          text: "【关键抉择】",
          effect: "fade",
        },
        {
          choices: [
            // A. 掩饰：好感+1, 异化+0, 适应+5
            { text: "这是我远房表妹！来海边度假的！", nextScene: "chapter4_cousin", affection: 1, alienation: 0, adaptation: 5 },
            // B. 接纳：好感+5, 异化+0, 适应+3
            { text: "她是我女朋友。我们正在同居。", nextScene: "chapter4_girlfriend", affection: 5, alienation: 0, adaptation: 3, flag: "girlfriendDeclared" },
            // C. 隔离：好感-5, 异化+5, 适应-5
            { text: "哇！别进来！快藏起来！", nextScene: "chapter4_hide", affection: -5, alienation: 5, adaptation: -5 },
          ],
        },
      ],
    },

    // 第四章 选择A：远房表妹
    chapter4_cousin: {
      background: "./assets/backgrounds/living_room_morning.png",
      bgm: "./assets/bgm/morning_birds.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "啊哈哈……山田阿姨早啊！这是我……远房表妹！汐音！",
        },
        {
          character: "protagonist",
          text: "她刚到，还没来得及换衣服呢！哈哈……",
        },
        {
          character: null,
          text: "我一边干笑，一边不动声色地挡在汐音面前。",
        },
        {
          character: null,
          text: "大婶狐疑地打量了一下汐音那头罕见的银蓝色头发。",
        },
        {
          character: "neighbor",
          text: "表妹？长得真不像啊……这头发是染的吧？现在的年轻人真时髦。",
        },
        {
          character: "protagonist",
          text: "对对，COSPLAY嘛！现在很流行的！",
        },
        {
          character: "protagonist",
          text: "汐音，快跟阿姨打招呼。",
        },
        {
          character: null,
          text: "我给汐音使了个眼色。",
        },
        {
          character: null,
          text: "汐音虽然不懂『表妹』是什么意思，但她似乎理解了现在的状况需要『伪装』。",
        },
        {
          character: null,
          text: "她收起了敌意，笨拙地模仿电视里的人挥了挥手。",
        },
        {
          character: "xiyin",
          text: "你好……我是……表妹。",
          sprite: "./assets/characters/heroine/greeting.png",
          position: "center",
        },
        {
          character: "neighbor",
          text: "哎呀，声音真好听。行吧，那我不打扰你们年轻人了，西瓜放这儿了啊！",
        },
        {
          character: null,
          text: "大婶放下西瓜离开了。汐音松了一口气，瘫坐在地上。",
        },
        {
          character: "xiyin",
          text: "『表妹』……是某种隐身术的咒语吗？那个敌人好像相信了。",
          sprite: "./assets/characters/heroine/playful.png",
        },
        {
          character: null,
          text: "【第四章 END - 汐音获得虚假身份】",
          effect: "fade",
        },
      ],
      nextScene: "chapter5",
    },

    // 第四章 选择B：女朋友（真结局必要条件）
    chapter4_girlfriend: {
      background: "./assets/backgrounds/living_room_morning.png",
      bgm: "./assets/bgm/morning_birds.mp3",
      dialogs: [
        {
          character: null,
          text: "我深吸一口气。",
        },
        {
          character: "protagonist",
          text: "其实……阿姨，这是我女朋友。我们正在……同居。",
        },
        {
          character: null,
          text: "空气凝固了一秒，随即大婶的脸上爆发出了八卦的笑容。",
        },
        {
          character: null,
          text: "汐音听到『女朋友』这个词，歪了歪头。",
        },
        {
          character: "xiyin",
          text: "女……朋友？那是……什么？",
          sprite: "./assets/characters/heroine/normal.png",
          position: "center",
        },
        {
          character: null,
          text: "我小声对她说：",
        },
        {
          character: "protagonist",
          text: "就是最重要的人的意思。",
        },
        {
          character: null,
          text: "听到『最重要的人』，汐音的眼睛瞬间亮了。",
        },
        {
          character: null,
          text: "她原本紧绷的身体彻底放松，甚至主动从我身后探出头来，脸上带着自豪的表情。",
        },
        {
          character: "xiyin",
          text: "对！我是他的……女朋友！",
          sprite: "./assets/characters/heroine/happy.png",
        },
        {
          character: "xiyin",
          text: "最重要的人！",
          sprite: "./assets/characters/heroine/happy.png",
        },
        {
          character: "neighbor",
          text: "哎哟喂！现在的大学生真是热情啊！好好好，阿姨懂的，西瓜给你们补补身子！",
        },
        {
          character: null,
          text: "大婶带着意味深长的笑容离开了。",
        },
        {
          character: null,
          text: "虽然误会加深了，但看着汐音开心的样子，我竟然觉得这样也不坏。",
        },
        {
          character: null,
          text: "【第四章 END - 确立『女友』身份】",
          effect: "fade",
        },
      ],
      nextScene: "chapter5",
    },

    // 第四章 选择C：藏起来
    chapter4_hide: {
      background: "./assets/backgrounds/living_room_morning.png",
      bgm: "./assets/bgm/morning_birds.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "汐音！快躲起来！",
        },
        {
          character: null,
          text: "我不由分说，一把抓起汐音，将她塞进了旁边的壁橱里，并用力拉上了推拉门。",
        },
        {
          character: null,
          text: "动作一气呵成，就在大婶进来的前一秒。",
        },
        {
          character: "neighbor",
          text: "你在跟谁说话呢？",
        },
        {
          character: "protagonist",
          text: "没、没有！我在看电视！电视声音太大了！",
        },
        {
          character: null,
          text: "我满头大汗地应付走了大婶。",
        },
        {
          character: null,
          text: "等她一走，我赶紧拉开壁橱门。",
        },
        {
          character: null,
          text: "汐音蜷缩在黑暗狭窄的壁橱角落里，抱着膝盖，浑身发抖。",
        },
        {
          character: null,
          text: "她抬头看着我，眼神里充满了惊恐和委屈。",
        },
        {
          character: "xiyin",
          text: "好黑……好挤……",
          sprite: "./assets/characters/heroine/scared.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "我是……见不得光的东西吗？为什么要像藏垃圾一样把我藏起来？",
          sprite: "./assets/characters/heroine/sad.png",
        },
        {
          character: null,
          text: "看着她受伤的眼神，我心中充满了愧疚。",
        },
        {
          character: null,
          text: "我似乎做了一个最差劲的选择。",
        },
        {
          character: null,
          text: "【第四章 END - 汐音对人类社会产生恐惧】",
          effect: "fade",
        },
      ],
      nextScene: "chapter5",
    },

    // ═══════════════════════════════════════
    // 第五章：鳞片下的秘密
    // ═══════════════════════════════════════
    
    chapter5: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: null,
          text: "【第五章：鳞片下的秘密】",
          effect: "fade",
        },
        {
          character: null,
          text: "打发走了隔壁的山田太太后，我意识到一个严峻的问题。",
        },
        {
          character: null,
          text: "汐音现在身上还穿着我的旧衬衫，不仅不合身，而且……作为女生来说，一直『真空』确实不太方便。",
        },
        {
          character: null,
          text: "更重要的是，昨晚在月光下，我隐约看到了她背上的异样。为了确认她的身体状况，必须让她把背露出来。",
        },
        {
          character: null,
          text: "我手里拿着刚从便利店买回来的袋子，站在卧室门口。",
        },
        {
          character: null,
          text: "袋子里是牙刷、毛巾，还有……",
        },
        {
          character: null,
          text: "【消费抉择】",
          effect: "fade",
        },
        {
          choices: [
            // A. 买内衣：好感+2, 资金-60
            { text: "拿出咬牙买下的女士内衣套装", nextScene: "chapter5_underwear", affection: 2, alienation: 0, adaptation: 0, money: 60 },
            // B. 不买：好感-1
            { text: "没钱买那个，只能用旧T恤", nextScene: "chapter5_tshirt", affection: -1, alienation: 0, adaptation: 0 },
          ],
        },
      ],
    },

    // 第五章 内衣分支
    chapter5_underwear: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "汐音，把这个换上。总穿我的衬衫也不舒服吧。",
        },
        {
          character: null,
          text: "汐音接过那两块小小的布料，脸瞬间红了。",
        },
        {
          character: null,
          text: "她钻进被窝，经过一番悉悉索索的艰难穿戴，终于慢慢掀开了被子。",
        },
        {
          character: "xiyin",
          text: "这种布料……好少。感觉像是什么都没穿一样……",
          sprite: "./assets/characters/heroine/underwear_shy.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "而且……正好贴在皮肤上。这就是陆地上的『壳』吗？",
          sprite: "./assets/characters/heroine/underwear_shy.png",
        },
        {
          character: null,
          text: "她跪坐在床上，双手不自在地护在胸前，脸颊绯红。",
        },
        {
          character: null,
          text: "那套简单的白色内衣穿在她身上，产生了一种纯洁与色气并存的破坏力。",
        },
      ],
      nextScene: "chapter5_examine_underwear",
    },

    // 第五章 T恤分支
    chapter5_tshirt: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: null,
          text: "便利店的内衣太贵了，生活费要紧。",
        },
        {
          character: null,
          text: "我从衣柜底翻出一件面料稍微薄一点的旧T恤。",
        },
        {
          character: "protagonist",
          text: "汐音，换上这个吧。之前的衬衫脏了。",
        },
        {
          character: null,
          text: "汐音乖乖换上了。领口很大，露出了锁骨，衣服松松垮垮地挂在身上。",
        },
        {
          character: "xiyin",
          text: "这件……有点磨皮肤。",
          sprite: "./assets/characters/heroine/normal.png",
          position: "center",
        },
        {
          character: "xiyin",
          text: "还是水里比较舒服……",
          sprite: "./assets/characters/heroine/sad.png",
        },
      ],
      nextScene: "chapter5_examine_tshirt",
    },

    // 第五章 检查（内衣状态）
    chapter5_examine_underwear: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "咳……衣服还合身吗？接下来，转过去，背对着我。",
        },
        {
          character: "protagonist",
          text: "我要检查一下你昨晚说的『刺痛』的地方。",
        },
        {
          character: null,
          text: "汐音愣了一下，虽然有些迟疑，但还是乖乖地转过身去，背对着我跪坐着。",
        },
        {
          character: null,
          text: "她银蓝色的长发滑落到胸前，露出了整个后背。",
        },
        {
          character: "xiyin",
          text: "是……这样吗？感觉后背凉飕飕的……",
          sprite: "./assets/characters/heroine/underwear_back.png",
        },
        {
          character: null,
          text: "我的视线落在她的脊柱两侧。",
        },
        {
          character: null,
          text: "果然。",
        },
        {
          character: null,
          text: "在她的脊柱周围，原本白皙的皮肤上，覆盖着一片片半透明的、淡蓝色的鳞片。",
        },
        {
          character: null,
          text: "它们像某种精美的刺绣一样镶嵌在她背上，但在鳞片边缘，皮肤呈现出一种缺水干裂的纹理，甚至渗着血丝。",
        },
        {
          character: "protagonist",
          text: "果然有鳞片……而且周围的皮肤开始干裂了。",
        },
        {
          character: null,
          text: "听到我的话，汐音光滑的背脊猛地颤抖了一下。",
        },
        {
          character: "xiyin",
          text: "这就是……那种痛觉的来源吗？",
          sprite: "./assets/characters/heroine/underwear_back.png",
        },
        {
          character: null,
          text: "她试图扭过头看自己的后背，但角度受限。她侧过脸，眼神中充满了不安和恐惧。",
        },
        {
          character: "xiyin",
          text: "我会变成……怪物吗？",
          sprite: "./assets/characters/heroine/underwear_scared.png",
        },
        {
          character: "xiyin",
          text: "如果变得满身都是这种东西……你还会让我留在这里吗？",
          sprite: "./assets/characters/heroine/underwear_scared.png",
        },
        {
          character: null,
          text: "看着她脆弱的样子，我的手指悬停在那片鳞片上方。",
        },
        {
          character: null,
          text: "现在的应对，将决定她如何看待自己的『异类』身份。",
        },
        {
          character: null,
          text: "【关键抉择】",
          effect: "fade",
        },
        {
          choices: [
            // A. 审美认同：好感+5, 异化+5
            { text: "好美……简直就像蓝宝石一样。", nextScene: "chapter5_praise_underwear", affection: 5, alienation: 5, adaptation: 0, flag: "scalesPraised" },
            // B. 理性记录：好感-2, 异化-2, 适应+5
            { text: "别动，我需要记录一下扩散范围。", nextScene: "chapter5_record_underwear", affection: -2, alienation: -2, adaptation: 5 },
            // C. 排斥：好感-10, 异化-10, 适应+5
            { text: "有点吓人……还是想办法把它遮住吧。", nextScene: "chapter5_hide", affection: -10, alienation: -10, adaptation: 5 },
          ],
        },
      ],
    },

    // 第五章 检查（T恤状态）
    chapter5_examine_tshirt: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "咳……接下来，转过去，背对着我。",
        },
        {
          character: "protagonist",
          text: "我要检查一下你昨晚说的『刺痛』的地方。",
        },
        {
          character: null,
          text: "汐音愣了一下，虽然有些迟疑，但还是乖乖地转过身去。",
        },
        {
          character: null,
          text: "她撩起T恤的后摆，露出了后背。",
        },
        {
          character: "xiyin",
          text: "是……这样吗？感觉后背凉飕飕的……",
          sprite: "./assets/characters/heroine/back.png",
        },
        {
          character: null,
          text: "我的视线落在她的脊柱两侧。",
        },
        {
          character: null,
          text: "果然。",
        },
        {
          character: null,
          text: "在她的脊柱周围，原本白皙的皮肤上，覆盖着一片片半透明的、淡蓝色的鳞片。",
        },
        {
          character: null,
          text: "它们像某种精美的刺绣一样镶嵌在她背上，但在鳞片边缘，皮肤呈现出一种缺水干裂的纹理，甚至渗着血丝。",
        },
        {
          character: "protagonist",
          text: "果然有鳞片……而且周围的皮肤开始干裂了。",
        },
        {
          character: null,
          text: "听到我的话，汐音光滑的背脊猛地颤抖了一下。",
        },
        {
          character: "xiyin",
          text: "这就是……那种痛觉的来源吗？",
          sprite: "./assets/characters/heroine/back.png",
        },
        {
          character: null,
          text: "她试图扭过头看自己的后背，但角度受限。她侧过脸，眼神中充满了不安和恐惧。",
        },
        {
          character: "xiyin",
          text: "我会变成……怪物吗？",
          sprite: "./assets/characters/heroine/scared.png",
        },
        {
          character: "xiyin",
          text: "如果变得满身都是这种东西……你还会让我留在这里吗？",
          sprite: "./assets/characters/heroine/scared.png",
        },
        {
          character: null,
          text: "看着她脆弱的样子，我的手指悬停在那片鳞片上方。",
        },
        {
          character: null,
          text: "现在的应对，将决定她如何看待自己的『异类』身份。",
        },
        {
          character: null,
          text: "【关键抉择】",
          effect: "fade",
        },
        {
          choices: [
            // A. 审美认同：好感+5, 异化+5
            { text: "好美……简直就像蓝宝石一样。", nextScene: "chapter5_praise_tshirt", affection: 5, alienation: 5, adaptation: 0, flag: "scalesPraised" },
            // B. 理性记录：好感-2, 异化-2, 适应+5
            { text: "别动，我需要记录一下扩散范围。", nextScene: "chapter5_record_tshirt", affection: -2, alienation: -2, adaptation: 5 },
            // C. 排斥：好感-10, 异化-10, 适应+5
            { text: "有点吓人……还是想办法把它遮住吧。", nextScene: "chapter5_hide", affection: -10, alienation: -10, adaptation: 5 },
          ],
        },
      ],
    },

    // 第五章 选择A：赞美与接纳（内衣版）
    chapter5_praise_underwear: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "不，不是怪物。很漂亮。",
        },
        {
          character: "protagonist",
          text: "你看，它在光线下会发光，就像大海的碎片一样。",
        },
        {
          character: null,
          text: "我轻轻用指腹抚摸那片微凉的鳞片，动作轻柔，像是在触碰珍宝。",
        },
        {
          character: null,
          text: "汐音愣住了。她原本紧绷的背脊慢慢软化，转过身来，惊讶地看着我。",
        },
        {
          character: "xiyin",
          text: "漂亮……？你真的……这么觉得吗？",
          sprite: "./assets/characters/heroine/underwear_shy.png",
          position: "center",
        },
        {
          character: "protagonist",
          text: "嗯。这是你独特的地方。无论你变成什么样，我都觉得很美。",
        },
        {
          character: null,
          text: "汐音的脸瞬间红透了，但这次不是因为羞耻，而是因为某种满溢出来的喜悦。",
        },
        {
          character: null,
          text: "她稍微挺起了胸膛，向我靠近了一点，眼神湿润而闪亮。",
        },
        {
          character: "xiyin",
          text: "嘿嘿……如果是那样的话……",
          sprite: "./assets/characters/heroine/underwear_expect.png",
        },
        {
          character: "xiyin",
          text: "再多摸摸也可以哦？你的手……热热的，很舒服。",
          sprite: "./assets/characters/heroine/underwear_expect.png",
        },
        {
          character: null,
          text: "【第五章 END - 汐音接受自己的非人特征】",
          effect: "fade",
        },
      ],
      nextScene: "chapter6",
    },

    // 第五章 选择A：赞美与接纳（T恤版）
    chapter5_praise_tshirt: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "不，不是怪物。很漂亮。",
        },
        {
          character: "protagonist",
          text: "你看，它在光线下会发光，就像大海的碎片一样。",
        },
        {
          character: null,
          text: "我轻轻用指腹抚摸那片微凉的鳞片，动作轻柔，像是在触碰珍宝。",
        },
        {
          character: null,
          text: "汐音愣住了。她原本紧绷的背脊慢慢软化，转过身来，惊讶地看着我。",
        },
        {
          character: "xiyin",
          text: "漂亮……？你真的……这么觉得吗？",
          sprite: "./assets/characters/heroine/shy.png",
          position: "center",
        },
        {
          character: "protagonist",
          text: "嗯。这是你独特的地方。无论你变成什么样，我都觉得很美。",
        },
        {
          character: null,
          text: "汐音的脸瞬间红透了，但这次不是因为羞耻，而是因为某种满溢出来的喜悦。",
        },
        {
          character: null,
          text: "她稍微挺起了胸膛，向我靠近了一点，眼神湿润而闪亮。",
        },
        {
          character: "xiyin",
          text: "嘿嘿……如果是那样的话……",
          sprite: "./assets/characters/heroine/happy.png",
        },
        {
          character: "xiyin",
          text: "再多摸摸也可以哦？你的手……热热的，很舒服。",
          sprite: "./assets/characters/heroine/happy.png",
        },
        {
          character: null,
          text: "【第五章 END - 汐音接受自己的非人特征】",
          effect: "fade",
        },
      ],
      nextScene: "chapter6",
    },

    // 第五章 选择B：理性观察（内衣版）
    chapter5_record_underwear: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "情况不太乐观，好像比昨晚扩散了。",
        },
        {
          character: "protagonist",
          text: "别动，保持这个姿势。我拍个照记录一下，以后好对比变化。",
        },
        {
          character: null,
          text: "我拿出手机，对准她的后背。",
        },
        {
          character: null,
          text: "『咔嚓』一声快门响。",
        },
        {
          character: null,
          text: "汐音像是被鞭子抽到一样，猛地缩成一团，双手反手捂住自己的后背。",
        },
        {
          character: "xiyin",
          text: "不要！那个黑盒子……在吸走什么东西！",
          sprite: "./assets/characters/heroine/back.png",
          position: "center",
        },
        {
          character: "protagonist",
          text: "只是记录而已，为了治好你。",
        },
        {
          character: null,
          text: "汐音慢慢转过身，低着头，身体微微发抖。",
        },
        {
          character: null,
          text: "她觉得自己此刻不像是一个人，而是一条案板上的标本。",
        },
        {
          character: "xiyin",
          text: "治好……意思是，现在的我是『坏掉』的吗？",
          sprite: "./assets/characters/heroine/underwear_scared.png",
        },
        {
          character: "xiyin",
          text: "果然……我不该让别人看到的……",
          sprite: "./assets/characters/heroine/underwear_shy.png",
        },
        {
          character: null,
          text: "【第五章 END - 汐音对自己的身体产生焦虑】",
          effect: "fade",
        },
      ],
      nextScene: "chapter6",
    },

    // 第五章 选择B：理性观察（T恤版）
    chapter5_record_tshirt: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "情况不太乐观，好像比昨晚扩散了。",
        },
        {
          character: "protagonist",
          text: "别动，保持这个姿势。我拍个照记录一下，以后好对比变化。",
        },
        {
          character: null,
          text: "我拿出手机，对准她的后背。",
        },
        {
          character: null,
          text: "『咔嚓』一声快门响。",
        },
        {
          character: null,
          text: "汐音像是被鞭子抽到一样，猛地缩成一团，双手反手捂住自己的后背。",
        },
        {
          character: "xiyin",
          text: "不要！那个黑盒子……在吸走什么东西！",
          sprite: "./assets/characters/heroine/back.png",
          position: "center",
        },
        {
          character: "protagonist",
          text: "只是记录而已，为了治好你。",
        },
        {
          character: null,
          text: "汐音慢慢转过身，低着头，身体微微发抖。",
        },
        {
          character: null,
          text: "她觉得自己此刻不像是一个人，而是一条案板上的标本。",
        },
        {
          character: "xiyin",
          text: "治好……意思是，现在的我是『坏掉』的吗？",
          sprite: "./assets/characters/heroine/scared.png",
        },
        {
          character: "xiyin",
          text: "果然……我不该让别人看到的……",
          sprite: "./assets/characters/heroine/shy.png",
        },
        {
          character: null,
          text: "【第五章 END - 汐音对自己的身体产生焦虑】",
          effect: "fade",
        },
      ],
      nextScene: "chapter6",
    },

    // 第五章 选择C：排斥与嫌弃（通用）
    chapter5_hide: {
      background: "./assets/backgrounds/bedroom_curtain.png",
      bgm: "./assets/bgm/heartbeat_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "这看起来……有点像严重的皮肤病。密密麻麻的，要是被别人看到就麻烦了。",
        },
        {
          character: "protagonist",
          text: "快把衣服穿上吧，别露出来了。",
        },
        {
          character: null,
          text: "我移开了视线，把衬衫丢给她。",
        },
        {
          character: null,
          text: "汐音背对着我的动作停滞了。",
        },
        {
          character: "xiyin",
          text: "……皮肤病……吓人……",
          sprite: "./assets/characters/heroine/back.png",
          position: "center",
        },
        {
          character: null,
          text: "她喃喃自语着，声音里失去了温度。",
        },
        {
          character: null,
          text: "她默默地抓起衬衫，动作机械地套在身上，将那些鳞片死死遮住，然后才转过身来。",
        },
        {
          character: null,
          text: "她看着我，眼中的光芒彻底熄灭了。",
        },
        {
          character: "xiyin",
          text: "……对不起。",
          sprite: "./assets/characters/heroine/sad.png",
        },
        {
          character: "xiyin",
          text: "我会藏好的。绝对……不会再恶心到你了。",
          sprite: "./assets/characters/heroine/sad.png",
        },
        {
          character: null,
          text: "【第五章 END - 汐音产生自我厌恶】",
          effect: "fade",
        },
      ],
      nextScene: "chapter6",
    },

    // ═══════════════════════════════════════
    // 第六章：便利店的微光与三厘米距离
    // ═══════════════════════════════════════
    
    chapter6: {
      background: "./assets/backgrounds/slope_afternoon.png",
      bgm: "./assets/bgm/wind_cicada.mp3",
      dialogs: [
        {
          character: null,
          text: "【第六章：便利店的微光与三厘米距离】",
          effect: "fade",
        },
        {
          character: "protagonist",
          text: "并不是为了约会，绝对不是。",
        },
        {
          character: "protagonist",
          text: "只是家里的牙刷和毛巾不够了，而且总让她穿着我的旧衬衫也不合适。",
        },
        {
          character: "protagonist",
          text: "这是一场必要的『物资补给行动』。",
        },
        {
          character: null,
          text: "为了避开人群，我特意选了人少的坡道。",
        },
        {
          character: null,
          text: "汐音戴着一顶宽边的遮阳帽，穿着不合身的长裙，走在我身后大约三步远的地方。",
        },
        {
          character: null,
          text: "我不敢频繁回头，生怕引人注目，但我能清晰地听到她拖沓的脚步声。",
        },
        {
          character: null,
          text: "沙沙、沙沙。",
        },
        {
          character: null,
          text: "就像海浪在追逐着海岸，始终保持着一个微妙的距离。",
        },
        {
          character: "xiyin",
          text: "……",
          sprite: "./assets/characters/heroine/normal.png",
          position: "center",
        },
        {
          character: null,
          text: "身后的脚步声突然停了。",
        },
        {
          character: null,
          text: "我回过头，发现她正蹲在一个自动贩卖机前。",
        },
        {
          character: null,
          text: "她的脸几乎贴在玻璃面板上，那一双蔚蓝色的眼睛死死盯着里面排列整齐的饮料罐。",
        },
        {
          character: null,
          text: "贩卖机发出『嗡嗡』的低频压缩机运作声，在寂静的坡道上显得格外清晰。",
        },
        {
          character: "xiyin",
          text: "这个发光的方块……在震动。",
          sprite: "./assets/characters/heroine/curious.png",
        },
        {
          character: "xiyin",
          text: "里面的水被封印在铁罐子里……它们是活的吗？一直在这个狭窄的牢笼里发光，等待着什么。",
          sprite: "./assets/characters/heroine/curious.png",
        },
        {
          character: "protagonist",
          text: "那是自动贩卖机。那些是商品，不是活的，也不会痛。",
        },
        {
          character: "protagonist",
          text: "……别贴那么近，会被路人奇怪的。",
        },
        {
          character: null,
          text: "她没有动，依旧盯着那一排排饮料。",
        },
        {
          character: null,
          text: "那种眼神，既不是想要，也不是喜欢，而是一种纯粹的、跨越物种的『无法理解』。",
        },
        {
          character: null,
          text: "在她眼里，陆地上的一切似乎都是某种残酷的牢笼。",
        },
        {
          character: null,
          text: "【关键抉择】",
          effect: "fade",
        },
        {
          choices: [
            // A. 物质讨好：好感+2, 适应-1, 资金-3
            { text: "想喝吗？我买给你。", nextScene: "chapter6_buyDrink", affection: 2, alienation: 0, adaptation: -1, money: 3 },
            // B. 理性解释：适应+3, 异化+1
            { text: "那不是牢笼，那是为了便利而存在的商品。", nextScene: "chapter6_explain", affection: 0, alienation: 1, adaptation: 3 },
            // C. 沉默共鸣：好感+4, 异化-2
            { text: "（默默站在她身边，陪她看了一会儿）", nextScene: "chapter6_accompany", affection: 4, alienation: -2, adaptation: 0 },
          ],
        },
      ],
    },

    // 第六章 选择A：买饮料
    chapter6_buyDrink: {
      background: "./assets/backgrounds/slope_afternoon.png",
      bgm: "./assets/bgm/wind_cicada.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "（叹气）……真是的，只是想喝水了吧？想喝哪个？",
        },
        {
          character: null,
          text: "我走过去，投下硬币。随着『咣当』一声，一罐冰镇柠檬汽水滚落下来。",
        },
        {
          character: null,
          text: "我把它贴在她的脸颊上。",
        },
        {
          character: "xiyin",
          text: "呀！好凉！",
          sprite: "./assets/characters/heroine/surprised.png",
        },
        {
          character: null,
          text: "她像受惊的猫一样缩了一下，接过汽水。",
        },
        {
          character: null,
          text: "眼神中那份深邃的『探究』消失了，变成了单纯的快乐。",
        },
        {
          character: "xiyin",
          text: "这就是……陆地的味道吗？冰冰的，甜甜的。",
          sprite: "./assets/characters/heroine/happy.png",
        },
      ],
      nextScene: "chapter6_store",
    },

    // 第六章 选择B：理性解释
    chapter6_explain: {
      background: "./assets/backgrounds/slope_afternoon.png",
      bgm: "./assets/bgm/wind_cicada.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "汐音，不要把什么都想成是有生命的。那是商品，是为了被买走而放在那里的。",
        },
        {
          character: "xiyin",
          text: "商品……等待被选中的东西……",
          sprite: "./assets/characters/heroine/normal.png",
        },
        {
          character: null,
          text: "她若有所思地站起来，拍了拍裙角，眼神变得有些黯淡。",
        },
        {
          character: "xiyin",
          text: "那我……也是被你选中的『商品』吗？",
          sprite: "./assets/characters/heroine/sad.png",
        },
        {
          character: "protagonist",
          text: "……别问这种傻问题。快走吧。",
        },
      ],
      nextScene: "chapter6_store",
    },

    // 第六章 选择C：沉默陪伴
    chapter6_accompany: {
      background: "./assets/backgrounds/slope_afternoon.png",
      bgm: "./assets/bgm/wind_cicada.mp3",
      dialogs: [
        {
          character: null,
          text: "我没有催促她，也没有买水。",
        },
        {
          character: null,
          text: "我看了看四周，确定没人后，也在她身边蹲了下来。",
        },
        {
          character: null,
          text: "两个人的影子在夕阳下被拉得很长，重叠在一起。",
        },
        {
          character: null,
          text: "距离拉近了，我能闻到她身上淡淡的海盐味，和周围草木的香气混合在一起。",
        },
        {
          character: "xiyin",
          text: "……如果是我的话，一定会疯掉的。",
          sprite: "./assets/characters/heroine/scared.png",
        },
        {
          character: "xiyin",
          text: "一直待在同一个地方，不能游动，不能说话，只能发光……",
          sprite: "./assets/characters/heroine/sad.png",
        },
        {
          character: "protagonist",
          text: "……也许吧。所以大家才需要买走它们。",
        },
        {
          character: "protagonist",
          text: "因为不想让它们孤独，也不想让自己孤独。",
        },
        {
          character: null,
          text: "汐音转过头。",
        },
        {
          character: null,
          text: "遮阳帽的阴影下，那双蔚蓝色的眼睛直直地看着我。",
        },
        {
          character: null,
          text: "我们的脸离得很近，近到我能看清她睫毛的颤动。",
        },
        {
          character: "xiyin",
          text: "那你呢？",
          sprite: "./assets/characters/heroine/curious.png",
        },
        {
          character: "xiyin",
          text: "你捡到我……也是因为不想孤独吗？",
          sprite: "./assets/characters/heroine/curious.png",
        },
        {
          character: null,
          text: "这个问题像一颗石子投入了我的心湖。",
        },
        {
          character: null,
          text: "我张了张嘴，却发现喉咙发干，无法回答。",
        },
        {
          character: null,
          text: "我慌乱地移开视线，站起身来掩饰般地拍了拍裤腿。",
        },
        {
          character: "protagonist",
          text: "咳……腿麻了，快走吧。",
        },
      ],
      nextScene: "chapter6_store",
    },

    // 第六章 场景二：便利店
    chapter6_store: {
      background: "./assets/backgrounds/convenience_store.png",
      bgm: "./assets/bgm/store_ambient.mp3",
      dialogs: [
        {
          character: null,
          text: "走进便利店，冷气扑面而来。",
        },
        {
          character: null,
          text: "汐音缩了缩脖子，下意识地向我靠近了一步，几乎贴到了我的后背。",
        },
        {
          character: null,
          text: "这种如影随形的依赖感，让我既满足又紧张。",
        },
        {
          character: "protagonist",
          text: "我们要买牙刷、毛巾，还有……",
        },
        {
          character: null,
          text: "我正看着货架，突然听到身后传来『哗啦』一声纸张撕裂的声音。",
        },
        {
          character: null,
          text: "回头一看，汐音正站在杂志区前面。",
        },
        {
          character: null,
          text: "她手里拿着一本封面花花绿绿的时尚杂志，因为不知道怎么翻页，用力过猛，把封面撕下来了一角。",
        },
        {
          character: null,
          text: "旁边的店员投来了怀疑的目光。",
        },
        {
          character: "xiyin",
          text: "啊……坏、坏掉了……",
          sprite: "./assets/characters/heroine/flustered.png",
        },
        {
          character: "xiyin",
          text: "我只是……想看看里面的人为什么皮肤那么亮……可是纸太薄了……",
          sprite: "./assets/characters/heroine/flustered.png",
        },
        {
          character: null,
          text: "她慌乱地拿着那张碎纸片，手指绞在一起，不知所措地站在原地。",
        },
        {
          character: null,
          text: "像个做错事的孩子，眼神游移，不敢看我，也不敢看店员。",
        },
        {
          character: null,
          text: "周围的空气仿佛凝固了。",
        },
        {
          character: null,
          text: "【关键抉择】",
          effect: "fade",
        },
        {
          choices: [
            // A. 逃避责任：好感-3, 适应-5
            { text: "（一把夺过杂志，拉着她快步离开）", nextScene: "chapter6_escape", affection: -3, alienation: 0, adaptation: -5 },
            // B. 成熟担当：好感+5, 适应+2, 资金-25
            { text: "没关系，这本我们买下来。", nextScene: "chapter6_buyMag", affection: 5, alienation: 0, adaptation: 2, money: 25 },
            // C. 越界陷阱：好感-10, 异化+5
            { text: "笨手笨脚的……来，我教你。", nextScene: "chapter6_boundary", affection: -10, alienation: 5, adaptation: 0 },
          ],
        },
      ],
    },

    // 第六章 便利店选择A：逃避
    chapter6_escape: {
      background: "./assets/backgrounds/convenience_store.png",
      bgm: "./assets/bgm/store_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "快走！别看了！",
        },
        {
          character: null,
          text: "我因为不想惹麻烦，一把抓起那本杂志塞回货架深处，拉着她的手腕就往外走。",
        },
        {
          character: null,
          text: "汐音踉踉跄跄地跟着我，出门后甩开了我的手。",
        },
        {
          character: "xiyin",
          text: "痛……明明是你带我来的……为什么要逃跑？",
          sprite: "./assets/characters/heroine/angry.png",
        },
        {
          character: null,
          text: "【第六章 END - 信任受损】",
          effect: "fade",
        },
      ],
      nextScene: "chapter7",
    },

    // 第六章 便利店选择B：买下杂志
    chapter6_buyMag: {
      background: "./assets/backgrounds/convenience_store.png",
      bgm: "./assets/bgm/store_ambient.mp3",
      dialogs: [
        {
          character: "protagonist",
          text: "别怕。弄坏了买下来就是了。",
        },
        {
          character: null,
          text: "我从她手中轻轻抽走那本杂志，夹在腋下，语气平静。",
        },
        {
          character: null,
          text: "汐音惊讶地抬起头，原本紧绷的肩膀松弛了下来。",
        },
        {
          character: "xiyin",
          text: "诶？可是……它已经破了……",
          sprite: "./assets/characters/heroine/surprised.png",
        },
        {
          character: "protagonist",
          text: "破了也能看。而且，比起杂志，你的手没被纸划伤吧？",
        },
        {
          character: null,
          text: "汐音愣住了。",
        },
        {
          character: null,
          text: "她看了看自己的手，又看了看我，嘴角微微抿起，露出了安心的神色。",
        },
        {
          character: null,
          text: "她向我靠近了一点，手指轻轻捏住了我的衣角。",
        },
        {
          character: "xiyin",
          text: "……没有。谢谢。",
          sprite: "./assets/characters/heroine/normal.png",
        },
        {
          character: "xiyin",
          text: "刚才的你……看起来有一点点……帅气。",
          sprite: "./assets/characters/heroine/underwear_shy.png",
        },
        {
          character: null,
          text: "【第六章 END - 信任加深】",
          effect: "fade",
        },
      ],
      nextScene: "chapter7",
    },

    // 第六章 便利店选择C：越界
    chapter6_boundary: {
      background: "./assets/backgrounds/convenience_store.png",
      bgm: "./assets/bgm/store_ambient.mp3",
      dialogs: [
        {
          character: null,
          text: "看着她笨拙的样子，我叹了口气，走到她身后。",
        },
        {
          character: null,
          text: "我没有拿走杂志，而是直接伸出手，覆盖在她拿着杂志的手背上。",
        },
        {
          character: null,
          text: "身体前倾，将她圈在怀里和货架之间。",
        },
        {
          character: "protagonist",
          text: "别用力，要用指腹……像这样。",
        },
        {
          character: null,
          text: "我以为这会是一个浪漫的教学时刻，甚至能闻到她发丝的香气。",
        },
        {
          character: null,
          text: "然而——",
        },
        {
          character: "xiyin",
          text: "！！！",
          sprite: "./assets/characters/heroine/alert.png",
        },
        {
          character: null,
          text: "在我的皮肤触碰到她的瞬间，汐音猛地倒吸一口凉气。",
        },
        {
          character: null,
          text: "那是生理性的排斥。",
        },
        {
          character: null,
          text: "她像是一条被鱼网突然缠住的鱼，剧烈地挣扎了一下，猛地向旁边缩去，直接撞到了旁边的零食货架。",
          effect: "shake",
        },
        {
          character: "xiyin",
          text: "别碰我！！",
          sprite: "./assets/characters/heroine/scared.png",
        },
        {
          character: null,
          text: "她的声音很大，带上了颤音。",
        },
        {
          character: null,
          text: "她抱着肩膀缩在角落里，用一种看敌人的眼神死死盯着我。",
        },
        {
          character: null,
          text: "那是恐惧，是对被束缚、被捕获的本能恐惧。",
        },
        {
          character: "xiyin",
          text: "背后……不要站在背后抓我……",
          sprite: "./assets/characters/heroine/scared.png",
        },
        {
          character: "xiyin",
          text: "像……网一样……恶心。",
          sprite: "./assets/characters/heroine/angry.png",
        },
        {
          character: null,
          text: "『恶心』。",
        },
        {
          character: null,
          text: "这两个字像冰锥一样刺进我心里。",
        },
        {
          character: null,
          text: "周围的顾客和店员都看了过来，窃窃私语。",
        },
        {
          character: null,
          text: "我举着双手僵在原地，尴尬得想找个地缝钻进去。",
        },
        {
          character: null,
          text: "我搞砸了。在这个陌生的环境中，过度的亲密只会让她感到威胁。",
        },
        {
          character: "protagonist",
          text: "抱、抱歉……我只是想教你……",
        },
        {
          character: "xiyin",
          text: "……离我远点。",
          sprite: "./assets/characters/heroine/alert.png",
        },
        {
          character: null,
          text: "接下来的结账过程，她一直离我两米远，再也没有跟我说过一句话。",
        },
        {
          character: null,
          text: "回家的路上，夕阳把我们的影子拉得很远，中间隔着无法跨越的鸿沟。",
        },
        {
          character: null,
          text: "【第六章 END - 触发戒备】",
          effect: "fade",
        },
      ],
      nextScene: "chapter7",
    },

    // ═══════════════════════════════════════
    // 第七章（占位，等待剧本）
    // ═══════════════════════════════════════
    
    chapter7: {
      background: "./assets/backgrounds/living_room_morning.png",
      bgm: "./assets/bgm/morning_peace.mp3",
      dialogs: [
        {
          character: null,
          text: "【第七章：待续...】",
          effect: "fade",
        },
        {
          character: null,
          text: "（剧情开发中，敬请期待）",
        },
      ],
    },
  }
}
