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
      background: "/assets/backgrounds/beach_noon.png",
      bgm: "/assets/bgm/cicada.mp3",
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
          sprite: "/assets/characters/heroine/normal.png",
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
          sprite: "/assets/characters/heroine/normal.png",
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
      background: "/assets/backgrounds/old_room_sunset.png",
      bgm: "/assets/bgm/fan_waves.mp3",
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
          sprite: "/assets/characters/heroine/scared.png",
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
          sprite: "/assets/characters/heroine/normal.png",
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
          sprite: "/assets/characters/heroine/sad.png",
        },
        {
          character: "heroine",
          text: "名字……过去……什么都……脑子里只有一片蓝色……",
          sprite: "/assets/characters/heroine/sad.png",
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
          sprite: "/assets/characters/heroine/normal.png",
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
          sprite: "/assets/characters/heroine/happy.png",
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
          sprite: "/assets/characters/heroine/surprised.png",
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
    },
  }
}
