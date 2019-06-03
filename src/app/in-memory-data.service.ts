import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 1, name: '曹操', formword: '孟德' , img:'曹操.jpg' , stunt:'虚实' , stuntType:'计略',
      stuntDescription:`对智力低的敌人全计略必成功`,
      commander: 96 , force: 72 , intellect: 91 , politics: 94 , charm: 96  ,
      introduction:`本名吉利，字孟德，小名阿瞒，沛国谯县（今安徽亳州）人。东汉末年杰出的政治家、军事家、文学家、书法家，
      三国时期魏国奠基人，太尉曹嵩之子。`},

      { id: 2, name: '周瑜', formword: '公瑾' , img:'周瑜.jpg' , stunt:'火神' , stuntType:'计略',
      stuntDescription:`智力低于者，火计必成功，威力加倍，敌火计全免`,
      commander: 97 , force: 71 , intellect: 96 , politics: 87 , charm: 93  ,
      introduction:`字公瑾，庐江（今安徽庐江县西南）人 。东汉末年名将，洛阳令周异之子，堂祖父周景、堂叔周忠，都官至太尉。
      长壮有姿貌、精音律，江东有“曲有误，周郎顾”之语。`},

      { id: 3, name: '司马懿', formword: '仲达' , img:'司马懿.jpg' , stunt:'深谋' , stuntType:'计略',
      stuntDescription:`对敌部队计略成功必使其混乱`,
      commander: 98 , force: 63 , intellect: 96 , politics: 93 , charm: 87 ,
      introduction:`字仲达，河内郡温县孝敬里（今河南省焦作市温县）人。三国时期魏国政治家、军事谋略家，魏国权臣，西晋王朝的奠基人。`},

      { id: 4, name: '陆逊', formword: '伯言' , img:'陆逊.jpg' , stunt:'鬼谋' , stuntType:'计略',
      stuntDescription:`计略影响范围扩大一`, 
      commander: 96 , force: 69 , intellect: 95 , politics: 87 , charm: 90  ,
      introduction:`本名陆议，字伯言，吴郡吴县（今江苏苏州）人。三国时期吴国政治家、军事家。`},

      { id: 5, name: '关羽', formword: '云长' , img:'关羽.jpg' , stunt:'神将' , stuntType:'攻击',
      stuntDescription:`对武力低于己者，普通攻击或全战法成功时发动暴击`,
      commander: 95 , force: 97 , intellect: 75 , politics: 62 , charm: 93  ,
      introduction:`本字长生，后改字云长，河东郡解县（今山西运城）人，被称为“美髯公”。早年跟随刘备颠沛流离，辗转各地，和刘备、
      张飞情同兄弟，因而虽然受到了曹操的厚待，
      但关羽仍然借机离开曹操，去追随刘备。赤壁之战后，关羽助刘备、周瑜攻打曹仁所驻守的南郡，而后刘备势力逐渐壮大，关羽则长期镇守荆州。`},

      { id: 6, name: '邓艾', formword: '士载' , img:'邓艾.jpg' , stunt:'强行' , stuntType:'行军',
      stuntDescription:`兵器、输送队等陆上部队移动力增加`,
      commander: 94 , force: 87 , intellect: 89 , politics: 81 , charm: 70  ,
      introduction:`字士载，义阳棘阳（今河南新野）人。三国时期魏国杰出的军事家、将领。其人文武全才，深谙兵法，对内政也颇有建树。本名邓范，
      后因与同乡人同名而改名。邓艾多年在曹魏西边战线防备蜀汉姜维。`},
      
      { id: 11, name: '吕布', formword: '奉先' , img:'吕布.jpg' , stunt:'飞将' , stuntType:'行军',
      stuntDescription:`陆地障碍无视，敌部队武力低施展战法成功后暴击`,
      commander: 87 , force: 100 , intellect: 26 , politics: 33 , charm: 40 ,
      introduction:`字奉先，五原郡九原县（今内蒙古包头市九原区麻池镇西北）人。历史上吕布以勇武闻名，号称“飞将”，时有“人中吕布，
      马中赤兔”之说。《三国演义》及民间其他艺术形象，吕布多被塑造成三国第一猛将。`},
      
      { id: 12, name: '张飞', formword: '翼德' , img:'张飞.jpg' , stunt:'斗神' , stuntType:'攻击',
      stuntDescription:`发动枪兵、戟兵战法成功时发动暴击`, 
      commander: 88 , force: 99 , intellect: 36 , politics: 42 , charm: 62  ,
      introduction:`字益德（《华阳国志》作翼德），幽州涿郡（今河北涿州市）人，三国时期蜀汉名将。张飞勇武过人，与其兄关羽并称为“万人敌”。`},
      
      { id: 14, name: '赵云', formword: '子龙' , img:'赵云.jpg' , stunt:'洞察' , stuntType:'计略',
      stuntDescription:`敌部队计略必看破`,
      commander: 91 , force: 96 , intellect: 76 , politics: 65 , charm: 81  ,
      introduction:`字子龙，常山真定（今河北省正定）人。身长八尺，姿颜雄伟，三国时期蜀汉名将。`},
      
      { id: 17, name: '马超', formword: '孟起' , img:'马超.jpg' , stunt:'骑神' , stuntType:'攻击',
      stuntDescription:`发动骑兵战法成功时发动暴击`,
      commander: 88 , force: 97 , intellect: 44 , politics: 31 , charm: 82  ,
      introduction:`字孟起，扶风茂陵（今陕西兴平县）人。东汉末年军阀、三国时期蜀汉名将，伏波将军马援之后，卫尉马腾长子。`},
      
      { id: 19, name: '孙策', formword: '伯符' , img:'孙策.jpg' , stunt:'勇将' , stuntType:'攻击',
      stuntDescription:`对武力低于己者，发动全部战法成功时发动暴击`, 
      commander: 92 , force: 92 , intellect: 69 , politics: 70 , charm: 92  ,
      introduction:`字伯符，吴郡富春（今浙江杭州富阳区）人。孙坚长子、吴大帝孙权长兄。东汉末年割据江东一带的军阀，汉末群雄之一，孙吴的奠基者之一。`},
      
      { id: 20, name: '孙权', formword: '仲谋' , img:'孙权.jpg' , stunt:'指导' , stuntType:'内政',
      stuntDescription:`技巧研究时，费用减半`,
      commander: 76 , force: 67 , intellect: 80 , politics: 89 , charm: 95  ,
      introduction:`字仲谋。吴郡富春县（今浙江省杭州市富阳区）人。三国时代孙吴的建立者（229年－252年在位）。`},
      
      { id: 21, name: '猪哥亮', formword: '孔明', img:'猪哥亮.jpg' , stunt:'神算' , stuntType:'计略',
      stuntDescription:`对智力低的敌部队计略必成功，全计略优待`,
      commander: 92 , force: 38 , intellect: 100 , politics: 95 , charm: 92  ,
      introduction:`字孔明，号卧龙，徐州琅琊阳都（今山东临沂市沂南县）人 [2]  ，三国时期蜀国丞相，杰出的政治家、军事家、外交家、文学家、书法家、发明家。`},
      
      { id: 22, name: '刘备', formword: '玄德' , img:'刘备.jpg' , stunt:'遁走' , stuntType:'行军',
      stuntDescription:`陆地障碍无视`,
      commander: 75 , force: 73 , intellect: 74 , politics: 78 , charm: 99  ,
      introduction:`字玄德，东汉末年幽州涿郡涿县（今河北省涿州市）人，西汉中山靖王刘胜之后，三国时期蜀汉开国皇帝、政治家。史家多称其为先主。`}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
