import type {BondEpisode,ExtraId} from './classroomMystery';
import {activityRoundsFor,type Activity} from '../engine/activities';
import {extraById,script} from './classroomMystery';
import {locationById} from './characters';
import type {LocationId} from '../types';

export function dailyBond(id:ExtraId,chapter:number,affection:number,trust:number,investigating=false):BondEpisode{
 const warm=affection>=40&&trust>=35;
 const topics=id==='juhan'?[
  ['커서가 멈춘 자리','발표 화면의 단축키를 누를 때마다 커서가 엉뚱한 칸으로 움직여. 내 설명을 네가 직접 따라 해 주면 어디서 헷갈리는지 보일 것 같아.','한 번 더 눌러 봐. 이번에는 내가 설명을 바꿔 볼게.'],
  ['복사하지 않는 이름','파일을 복제했더니 만든 사람 이름까지 복사됐어. 같이 작업한 사람을 새로 적는 칸을 만들고 있어.','기능이 아니라 네 이름을 남기고 싶었던 걸지도 몰라.'],
  ['설명 뒤의 빈 시간','오늘은 개발 노트를 일찍 닫으려고. 계속 고치다 보면 설명이 끝난 뒤에 할 말을 다 놓치더라.','꼭 도움이 필요할 때만 네가 오는 건 아니었으면 했어.'],
 ]:[
  ['점검표의 마지막 칸','점검표에는 완료 표시가 다 있는데 실제 교실에는 의자가 남아 있어. 종이랑 현장이 다른 이유를 같이 확인하자.','내가 틀린 칸도 표시해 줘. 반장이라고 지울 수는 없으니까.'],
  ['좋은 원칙의 거리','도와주려고 먼저 손을 뻗었는데 상대는 혼자 해 보고 싶었다더군. 먼저 묻는 절차를 또 빠뜨렸어.','네가 내 곁에 있는 건 업무를 대신하기 위해서가 아니지?'],
  ['쉬는 시간도 일정이다','오늘은 쉬는 시간을 지우지 않았다. 빈칸을 보고 있자니 아무것도 안 한다는 게 생각보다 어렵네.','같이 앉아 있으면 빈칸이 아니라 약속이 되겠군.'],
 ];
 const [title,problem,reply]=topics[chapter%topics.length];
 return {title,chapter,lines:script(`narrator|${investigating?'현장 조사를 잠시 쉬는 시간이다. 사건 자료와 별도로 하던 작업을 내려놓은':'방과 후 교내 방송이 끝났다. 하던 일을 멈춘'} ${extraById[id].name}이 내 쪽으로 몸을 돌렸다.
${id}|${warm?'기다렸어. 오늘은 네 목소리부터 듣고 싶었는데.':'왔구나. 잠깐 같이 확인해 줄 게 있어.'}
player|오늘은 뭘 하고 있었어?
${id}|${problem}
narrator|이야기는 오늘의 작업에서 시작됐지만, 끝까지 남은 건 누가 옆에 앉아 있는지였다.
${id}|${investigating?(warm?'조사를 마친 뒤에도 나랑 조금 더 있어 줄래?':'다시 조사하러 갈 때 말해 줘. 내 일로 붙잡아 두지는 않을게.'):(warm?'일이 끝나도 조금 더 있어 줄래?':'바쁘면 네 일정부터 말해 줘.')}`),choices:[
  {text:id==='juhan'?'설명대로 직접 해 보고, 헷갈린 순간에 손을 들어 알려 준다.':'현장을 함께 돌아보고 서로 놓친 점을 다른 색으로 표시한다.',affection:5,trust:6,reply:script(`${id}|${reply}
player|끝나면 같이 쉬자. 내 할 일도 그때 이야기할게.`)},
  {text:'작업을 잠깐 내려놓고, 나란히 앉아 오늘 좋았던 일을 하나씩 말한다.',affection:7,trust:3,reply:script(`${id}|${warm?'좋았던 일? 네가 이렇게 앉아 있는 지금.':'그건 아직 적어 놓지 않았네. 천천히 생각해 볼게.'}
narrator|급히 정답을 찾지 않자 어깨의 힘이 조금 풀렸다.`)},
  {text:'귀찮으니 확인하지 않고 완료 처리하라고 한다.',affection:-5,trust:-9,reply:script(`${id}|확인하지 않은 걸 완료라고 적을 수는 없어. 오늘은 내가 마저 할게.
narrator|마무리하자는 말과 함께 끝난 건 작업만이 아니었다.`)},
 ]};
}
export function schoolActivity(id:ExtraId,chapter:number,location:LocationId,seed:number):Activity{
 return {id:`school-${id}-${chapter}-${location}`,title:`${extraById[id].name} · ${id==='juhan'?'페어 디버깅':'현장 규율 점검'}`,subtitle:locationById[location].name,icon:id==='juhan'?'⌨':'✓',context:'서로 다른 세 가지 활동을 함께한다. 다시 시도하거나 한 활동만 건너뛰어도 대화는 이어진다.',rounds:activityRoundsFor(id,`${seed}:${chapter}:${location}`,chapter)};
}
