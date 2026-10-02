import {scoreCase,poemCase,fairEpilogue} from './newCases';
import {characters} from './characters';
import type {Character,CharacterId,LocationId} from '../types';

export type ExtraId='juhan'|'minhyuk';
export type SchoolId=CharacterId|ExtraId;
export type SchoolLine={speaker:SchoolId|'player'|'narrator'|'alter';text:string};
export const extraCharacters:(Omit<Character,'id'>&{id:ExtraId})[]=[
 {id:'juhan',name:'이주한',role:'프로그래밍 · 얼터에고 개발자',tag:'용기는, 원본으로 남기는 것',color:'#8dbcae',specialLabel:'자기 확신',bio:'부드러운 밤색 단발과 조용한 말투의 여학생. 오래 겪은 놀림 때문에 자신의 이야기를 먼저 꺼내는 데 서툴지만, 코드를 설명할 때만큼은 흔들리지 않는다. 자신이 만든 AI 얼터에고에 말투와 연구 기록을 남겼다. AI가 대신 말하는 것과 스스로 말하는 것은 다르다는 사실을 배우고 있다.',quote:'내가 어떤 모습인지보다… 내가 끝까지 말하는 걸 봐 줄래?',location:'computer'},
 {id:'minhyuk',name:'황민혁',role:'1학년 1반 반장 · 초고교급 풍기위원',tag:'규칙 밖에서 배운 첫 약속',color:'#dfab73',specialLabel:'원칙',bio:'어두운 피부와 단정한 포니테일의 여학생 반장. 각 잡힌 흰 제복, 붉은 완장과 색인으로 가득한 규율 수첩이 트레이드마크다. 출석과 안전 규칙에 엄격하고, 노력을 가볍게 취급하는 말을 특히 싫어한다. 부당한 대우 앞에서는 누구보다 크게 항의하지만, 사적인 칭찬을 받으면 갑자기 말수가 줄어든다. 사람을 지키려 만든 규칙이 사람을 밀어내지 않도록 고민한다.',quote:'원칙은 사람을 지키기 위해 있다! …그러니까 네 마음도 예외로 두지 않겠다.',location:'classroom'},
];
export const schoolCharacters=[...characters,...extraCharacters];
export const schoolById=Object.fromEntries(schoolCharacters.map(c=>[c.id,c])) as Record<SchoolId,typeof schoolCharacters[number]>;
export const extraById=Object.fromEntries(extraCharacters.map(c=>[c.id,c])) as Record<ExtraId,typeof extraCharacters[number]>;
export const script=(text:string):SchoolLine[]=>text.trim().split('\n').map(row=>{const split=row.indexOf('|');return {speaker:row.slice(0,split) as SchoolLine['speaker'],text:row.slice(split+1)};});
export type Evidence={id:string;name:string;location:LocationId;description:string;inspection:SchoolLine[]};
export type Debate={title:string;claims:{speaker:SchoolId|'alter';text:string}[];target:number;evidence:string;reason:string;hint:string};
export type CaseFile={id:string;number:number;chapter:number;title:string;subtitle:string;opening:SchoolLine[];evidence:Evidence[];debates:Debate[];sequence:string[];culprit:SchoolId;motives:string[];motive:number;closing:SchoolLine[]};
const evidence=(id:string,name:string,location:LocationId,description:string,inspection:string):Evidence=>({id,name,location,description,inspection:script(inspection)});

const originalCases:CaseFile[]=[
 {id:'credit',number:1,chapter:2,title:'잘라 낸 이름',subtitle:'공연 영상 조작 · 첫 번째 학급재판',
 opening:script(`narrator|방과 후 단체 채팅에 짧은 영상이 올라왔다. 서율의 편곡 파일 위에 세계의 이름 하나만 남아 있었다.
seoyul|저 크레딧, 내가 승인한 버전이 아니야. 원본을 보여 줘.
world|올린 계정이 누군지부터 봐. 내 계정으로 올라간 것도 아니잖아.
minhyuk|잠깐! 확인하지 않은 내용을 다른 반으로 보내지 마라. 지금부터 1반 안에서 먼저 사실을 확인한다!
taewoo|이미 캡처가 돌아다니는데? 그냥 세계랑 서율이 싸운 걸로 끝날 것 같은데.
junyeon|그렇게 끝내면… 지워진 이름은 계속 지워진 채잖아.
juhan|공용 컴퓨터의 내 계정 이름이 보여서 나한테도 메시지가 왔어. 하지만 계정 이름하고 실제 조작자는 같지 않을 수 있어.
hyunsol|그 말도 검증해야 해. 접근 권한부터 확인하자.
player|사람을 먼저 고르지 말고, 파일이 어떤 순서로 바뀌었는지부터 보자.
minhyuk|좋다. 공개 회의 전까지 각자 확인한 자료를 가져와. 추측은 증언으로 적지 않는다.
juhan|내가 만든 로컬 AI가 있어. 이름은 얼터에고야. 허락받은 파일끼리 비교하는 건 도와줄 수 있어.
alter|안녕, {name}. 나는 주한의 말투를 배웠지만 주한 본인은 아니야. 파일을 읽을 수 있어도 그 사람이 어떤 마음이었는지는 추측만 할 수 있어.
taehun|그럼 사람의 마음은 우리가 직접 물어보면 되겠네.
world|…내가 하는 말도 끝까지 들어 줄 거지?`),
 evidence:[
  evidence('credit-source','원본 편곡 파일','band','15:58 저장본에는 편곡 이서율·보컬 전세계가 함께 적혀 있다. 두 사람 모두 이 버전의 공개에 동의했다.',`seoyul|이 버전은 같이 이름을 적었어. 마지막 화음을 바꾼 이유도 메모에 남겼고.
player|처음부터 단독 작업이었다는 주장은 여기서 확인할 수 있겠네.`),
  evidence('credit-change','크레딧 변경 이력','media','16:42 크레딧 레이어만 수정됐다. 로그인 표시는 BAND-SHARED이며, 이주한 개인 계정과 다른 공용 계정이다.',`alter|음원은 그대로야. 글자가 있는 레이어 하나가 16시 42분에 바뀌었어.
juhan|공용 계정은 여럿이 썼어. 이것만으로 사람을 특정하면 안 돼.`),
  evidence('credit-permission','얼터에고 접근 권한','computer','얼터에고는 이 폴더에서 읽기 전용이다. 파일 수정·업로드 권한은 없고 실행 기록도 16:50부터 시작한다.',`hyunsol|쓰기 권한이 없다는 건 설정과 실제 시도 기록 모두에서 확인했어.
alter|내 첫 실행은 게시 이후야. 나는 이전에 열린 편집기를 누가 조작했는지는 모른다.`),
  evidence('credit-queue','예약 공개 목록','computer','16:10 세계가 공개 대상을 공용 폴더의 최신 내보내기 파일로 지정했다. 예약은 16:44 실행됐으며, 수정 뒤 다시 확인한 기록은 없다.',`juhan|누가 버튼을 바로 눌렀다고 생각했는데, 예약 항목이 남아 있어.
minhyuk|예약도 공개다. 제출 전에 최종본을 확인하는 책임은 사라지지 않아.`),
  evidence('credit-witness','미디어실 사용표','classroom','16:35~16:45 사용표의 신청자는 전세계 한 명이다. 황민혁은 16:39에 스피커를 돌려주며 세계가 편집기 앞에 있는 것을 봤다.',`minhyuk|세계가 있었다는 건 직접 봤다. 하지만 수정 버튼까지 본 건 아니므로 그렇게 적지는 않겠다.
world|그 시간에 내가 거기 있던 건 맞아.`),
  evidence('credit-clock','미리보기 시간대 설정','media','영상 화면의 17:42는 편집기 표시 시간이다. 저장 기록과 같은 순간이며 표시 설정만 한 시간 빠르다.',`taehun|창밖 그림자로 한 시간을 단정할 수는 없어. 설정을 확인했더니 표시 시간이 다르더라.
player|화면에 찍힌 숫자 하나로 알리바이를 만들 수는 없겠네.`),
 ],
 debates:[
  {title:'화면 속 한 시간',claims:[{speaker:'taewoo',text:'영상은 17시 42분에 수정됐어. 그때 세계는 합주 중이었잖아.'},{speaker:'taehun',text:'보이는 숫자와 실제 저장 시각을 따로 봐야 해.'},{speaker:'world',text:'합주 때 내 휴대폰은 가방에 있었어.'}],target:0,evidence:'credit-clock',reason:'편집기의 표시만 한 시간 빠르다. 실제 수정은 16:42이며 합주 알리바이와 겹치지 않는다.',hint:'영상의 화면 시계와 파일 기록의 기준이 같은지 확인해.'},
  {title:'AI에게 붙은 이름',claims:[{speaker:'hyunsol',text:'자료를 읽을 수 있다는 사실만으로 수정 권한은 증명되지 않아.'},{speaker:'minhyuk',text:'공용 컴퓨터에서 나온 자료라면 얼터에고가 크레딧을 바꿨을 수도 있다!'},{speaker:'juhan',text:'내가 작성한 권한 설정도 실제 로그와 함께 확인해 줘.'}],target:1,evidence:'credit-permission',reason:'얼터에고의 실행은 게시 뒤에 시작됐고 해당 폴더에 쓰기 권한이 없다. 수정자로 지목할 근거가 없다.',hint:'할 수 있는 기능과 실제 시작 시각, 두 가지를 함께 확인해.'},
  {title:'게시 버튼의 주인',claims:[{speaker:'junyeon',text:'게시 시각에 누가 자리에 있었는지도 알아야 해.'},{speaker:'seoyul',text:'원본과 공개본이 다르다는 건 확실해.'},{speaker:'world',text:'16시 44분에는 내 손이 키보드에 없었으니까 공개에도 내 책임은 없어.'}],target:2,evidence:'credit-queue',reason:'세계가 설정한 예약 공개는 최신 내보내기 파일을 자동으로 게시했다. 버튼을 누르지 않은 순간에도 예약 설정의 책임은 남는다.',hint:'실행 시각보다 먼저 설정한 작업이 있었어.'},
  {title:'한 사람의 작품',claims:[{speaker:'world',text:'처음부터 내가 혼자 준비한 곡이었어. 크레딧은 정리한 것뿐이야.'},{speaker:'seoyul',text:'끝까지 들은 다음에 원본을 다시 열어 줘.'},{speaker:'minhyuk',text:'장소 사용표는 작업의 기여도를 설명하지 못한다.'}],target:0,evidence:'credit-source',reason:'두 사람이 함께 승인한 원본에는 각자의 역할이 구분돼 있다. 크레딧 삭제는 원래 사실을 정리한 행위가 아니다.',hint:'처음 승인된 버전과 나중에 바뀐 버전을 비교해.'},
 ],sequence:['함께 적은 크레딧으로 원본 저장','최신 내보내기 파일의 예약 공개 설정','미디어실에서 크레딧 레이어 변경','바뀐 파일이 예약 시각에 게시'],culprit:'world',motives:['서율의 이름을 지우면 자신이 무대에서 밀려나지 않을 거라 생각했다.','얼터에고에게 수정 권한을 넘기려 했다.','고장 난 시계를 수리하려 했다.'],motive:0,
 closing:script(`world|내 목소리보다 서율의 편곡 얘기가 먼저 나오는 게 싫었어. 잠깐 이름을 가리면 나를 먼저 보겠지 싶었고.
seoyul|잠깐이라도, 그건 내 이름이야.
world|알아. 예약까지 그대로 나갈 줄 몰랐다는 말은 변명이야. 바꾼 건 나니까.
player|정정문에 누가 무슨 일을 했는지 적자. 서율한테 용서까지 예약해 달라고 하지는 말고.
minhyuk|정정본과 원본 링크를 함께 올린다. 타인의 작품을 바꿀 때는 새로 동의를 받는다.
junyeon|나도 노트에 이름을 지웠던 적이 있어. 누구한테 보여 주기 부끄러워서. 그래도 남의 이름을 지울 수는 없겠네.
juhan|얼터에고가 원본 비교를 보관할게. 공개 범위는 두 사람이 직접 정해 줘.
world|{name}, 다음엔 네가 나를 보고 있는지 파일로 확인하려고 하지 않을게. 그냥… 직접 물어볼래.
seoyul|다음 합주에서 마지막 마디는 내가 정할게. 거기서 다시 시작하자.
narrator|판결은 끝났지만 관계는 한 문장으로 회복되지 않았다. 다음 만남에서 지켜야 할 약속이 생겼다.`)},
 {id:'absence',number:2,chapter:6,title:'닫힌 교실의 결석자',subtitle:'사라진 반장 · 기록에 없는 출구',
 opening:script(`narrator|시설 점검이 끝나도 민혁이 돌아오지 않았다. 출입 기록은 반장이 교실에 들어간 뒤 멈춰 있었다.
taewoo|전화도 꺼졌어. 문은 잠겨 있고. 그냥 규칙 얘기 하러 갔다고 보기엔 오래됐는데.
hyunsol|오늘 보조문 센서는 점검 중이었어. 기록이 비어 있다는 것부터 조심해야 해.
world|단체 채팅에 민혁 이름으로 이상한 메시지가 왔어. “내가 돌아오기 전에 순서를 지켜.” 이게 뭐야?
junyeon|그 문장… 민혁이 평소 쓰는 말은 아닌데.
juhan|계정 표시를 확인할게. 먼저 선생님께 연락했어. 안전 확인은 수사 놀이보다 먼저야.
player|맞아. 선생님이 건물 안을 확인하는 동안 우리는 마지막으로 직접 본 일을 정리하자.
seoyul|문이 잠겼다는 사진하고, 사람이 안에 있다는 말은 같은 자료가 아니야.
taehun|닫힌 출입구가 하나라는 게 출구가 하나라는 뜻도 아니겠지.
alter|나는 출입 기록을 읽을 수 있어. 기록하지 않은 움직임은 복원할 수 없어.
narrator|교무실에서 연락이 왔다. 민혁의 안전은 확인됐고, 어디에 있었는지 직접 설명할 준비를 하고 있다고 했다.
player|그럼 학급재판에서 밝힐 건 누가 사라졌는지가 아니라, 왜 기록만 보면 사라진 것처럼 보였는지야.`),
 evidence:[
  evidence('absence-badge','교실 출입 기록','classroom','17:22 황민혁의 정문 입실이 기록됐다. 정문 퇴실 기록은 없으며, 기록 범위는 정문 카드 리더뿐이다.',`alter|이 파일의 감시 범위는 정문 하나야. “교실의 모든 출구”라는 필드는 없어.
juhan|로그에 없는 움직임을 없었다고 단정하면 안 돼.`),
  evidence('absence-door','연결문 점검표','library','교실과 도서관 사이 보조문은 17:20~17:50 센서 점검 중이었다. 문 자체는 안에서 열 수 있었고 통행 금지 표시는 없었다.',`taehun|문 옆에 붙은 종이에 점검 범위가 적혀 있어. 잠금 점검이 아니라 기록 장치 점검이야.
player|센서가 꺼진 길로 나갔다면 정문 기록이 비어 있어도 이상하지 않겠네.`),
  evidence('absence-nurse','보건실 확인서','classroom','보건교사 확인: 17:29 민혁이 어지럼증을 느낀 준연과 함께 방문했다. 17:46까지 두 사람 모두 보건실에 있었다.',`junyeon|내가 먼저 말했어야 했는데… 민혁이 다른 애들한테 내 상태를 함부로 말하지 않겠다고 해서.
minhyuk|걱정하게 만든 건 내 책임이다. 보호할 개인정보와 알릴 안전 상태를 구분했어야 했다.`),
  evidence('absence-test','점검 예외 설정','computer','17:10 최현솔이 센서의 점검 예외를 적용했다. 변경은 허가된 점검 범위 안이었지만 학급 안내에 적힌 “모든 통행 기록”을 정정하지 않았다.',`hyunsol|승인받은 설정은 맞아. 하지만 안내가 바뀌었는지 확인 안 했어.
minhyuk|우리는 모든 문이 기록된다고 믿고 있었지. 그 전제를 누가 확인했어야 하는지 짚자.`),
  evidence('absence-mail','반장 이름의 알림 헤더','computer','17:36 메시지는 민혁의 휴대폰이 아니라 교실 공용 PC의 예약 작업에서 생성됐다. 표시 이름은 자유롭게 설정된 문자열이다.',`juhan|이름만 “황민혁”이고 인증된 개인 발신 서명이 없어.
world|그럼 이름을 믿고 민혁이 교실 안에서 보냈다고 생각한 게 틀렸네.`),
  evidence('absence-phone','꺼진 휴대폰','library','민혁의 휴대폰은 17:18에 배터리가 소진됐다. 마지막 충전 알림을 민혁과 서율이 함께 확인했으며 메시지는 그보다 나중에 도착했다.',`seoyul|보조 배터리를 가져다주려 했는데 이미 민혁이 준연이랑 나갔어.
minhyuk|다음에는 담임께 짧게라도 이동 사실을 알리겠다.`),
 ],
 debates:[
  {title:'기록되지 않은 출구',claims:[{speaker:'world',text:'정문 퇴실 기록이 없으니 민혁은 17시 46분까지 교실에 남아 있었어.'},{speaker:'taehun',text:'출입 기록이 어디까지 보는지 확인해야 해.'},{speaker:'hyunsol',text:'센서 점검과 잠금은 다른 작업이야.'}],target:0,evidence:'absence-door',reason:'보조문은 기록 센서만 점검 중이었고 통행이 가능했다. 정문 기록만으로 교실에 남아 있었다고 단정할 수 없다.',hint:'출입구와 기록 장치의 범위가 같지 않아.'},
  {title:'표시 이름의 함정',claims:[{speaker:'taewoo',text:'불안해서 여러 번 메시지를 읽었어.'},{speaker:'minhyuk',text:'내 이름으로 왔으니 17시 36분 메시지는 내 휴대폰에서 보낸 것이겠지.'},{speaker:'juhan',text:'나는 이름이 아니라 헤더를 확인했어.'}],target:1,evidence:'absence-mail',reason:'메시지는 공용 PC의 예약 작업이 생성했다. 화면에 표시된 이름은 실제 기기나 개인 인증을 증명하지 못한다.',hint:'보낸 사람의 이름과 발신 기기를 구분해.'},
  {title:'안전이 확인된 시간',claims:[{speaker:'junyeon',text:'보건실에서 같이 기다렸어.'},{speaker:'seoyul',text:'선생님 확인서를 회의 자료에 넣자.'},{speaker:'hyunsol',text:'아무도 민혁을 직접 못 봤으니 17시 29분의 위치는 알 수 없어.'}],target:2,evidence:'absence-nurse',reason:'보건교사의 방문 확인서와 준연의 동행 증언이 같은 시각을 가리킨다. 민혁의 안전과 장소는 이미 확인할 수 있다.',hint:'학생끼리의 추측 외에 확인 가능한 기록이 있어.'},
  {title:'잘못 전달된 전제',claims:[{speaker:'hyunsol',text:'점검은 허가받았으니 “모든 문을 기록한다”는 안내도 그대로 정확해.'},{speaker:'minhyuk',text:'허가받은 작업이어도 통행 안내는 바뀌어야 한다.'},{speaker:'alter',text:'나는 누락된 로그를 만들어 채우지 않을 거야.'}],target:0,evidence:'absence-test',reason:'허가는 점검 자체에 대한 것이다. 실제로 보조문 기록이 중지됐으므로 모든 통행을 기록한다는 안내는 정정해야 했다.',hint:'작업의 허가와 안내의 정확성은 따로 확인해.'},
 ],sequence:['현솔이 보조문 센서 점검 예외 적용','민혁이 정문으로 교실 입실','민혁과 준연이 보조문으로 보건실 이동','공용 PC가 반장 이름의 예약 메시지 발송'],culprit:'hyunsol',motives:['점검이 허가됐다는 이유로 통행 안내의 정정을 확인하지 않았다.','민혁을 납치해 발표를 취소하려 했다.','얼터에고가 모든 출입 기록을 지웠다.'],motive:0,
 closing:script(`hyunsol|점검 자체가 맞으면 나머지도 맞을 거라고 생각했어. 안내문은 내가 다시 확인할게.
minhyuk|나도 안전 상태를 알리지 않은 점을 고치겠다. 규율을 지키는 사람이라고 보고까지 생략할 수는 없지.
junyeon|내가 어지러웠다는 걸 모두한테 설명하지 않아도, 안전하게 돌아온다는 건 말할 수 있었네.
taewoo|앞으로는 무서운 이야기를 먼저 붙이지 않을게. 내가 걱정한 만큼 빨리 소문도 냈어.
world|근데 예약 메시지, 첫 사건의 예약 공개랑은 별개잖아. 누가 왜 그런 문장을 준비했지?
juhan|맞아. 그건 아직 해결되지 않았어. 파일을 보존할게. 이름을 바꿔 발송하는 옛 작업이 남아 있는 것 같아.
alter|모르는 부분은 빈칸으로 남겼어. 그 빈칸이 다음에 확인할 일이야.
minhyuk|{name}, 아까 나를 탓하기 전에 안전부터 확인해 줘서 고맙다. …반장에게도 그런 순서가 필요했어.
narrator|민혁이 반장 완장을 다시 고쳐 찼다. 이번에는 내가 괜찮은지 먼저 물었다.`)},
 {id:'echo',number:3,chapter:10,title:'얼터에고는 협박하지 않는다',subtitle:'사칭 메시지 · 우리 반의 마지막 논파',
 opening:script(`narrator|밤의 공용 PC에 여덟 명의 이름이 차례로 떴다. “발표를 포기하지 않으면 비밀을 공개한다.”
world|누구한테는 무대 파일, 누구한테는 점수표 얘기야. 왜 이렇게 우리를 잘 아는 척하지?
taewoo|주한이 만든 AI 얼굴로 보내졌어. 그럼 설명해 줘야 하는 거 아니야?
juhan|설명할게. 하지만 내가 만든 얼굴이라는 이유만으로 내가 보냈다고 정하지는 말아 줘.
minhyuk|당연하다! 공개적인 신원 추궁이나 개인 소문은 재판 증거가 아니다.
juhan|…고마워. 사람들이 내 모습을 어떻게 보는지는 이 프로그램의 권한하고 관계없어.
player|네가 설명하는 코드를 보자. 사람 얘기를 하는 건 그다음에, 네가 원할 때야.
alter|메시지 속 얼굴은 나와 같아. 하지만 로컬 데이터와 발송 권한은 같지 않아.
junyeon|내가 원본 기록을 복구하려고 공용 계정을 썼어. 그때 뭔가를 다시 켰을 수도 있어.
hyunsol|가능성을 말해 준 건 고마워. 무엇을 켰는지부터 확인하자.
seoyul|거짓말처럼 보이는 얼굴보다 실제로 움직인 파일을 따라가자.
taehun|이번에는 빈칸을 견디자. 불안하다고 아무 이름이나 적지 말고.
narrator|주한이 모니터를 돌려 놓았다. 커서가 “다시 시작된 작업”이라는 폴더 위에서 멈췄다.`),
 evidence:[
  evidence('echo-clock','최초 협박의 실행 시각','computer','첫 사칭 메시지는 17:36 발송됐다. 얼터에고의 로컬 실행은 17:40 시작됐으며 이전 실행 프로세스는 없었다.',`alter|나는 17시 40분 이후 받은 파일만 확인했어. 그전의 발신 행위는 내 실행 기록에 없어.
juhan|기록이 없다는 말만 하지 않을게. 시작된 프로세스와 실행 권한도 같이 봐 줘.`),
  evidence('echo-acl','서로 다른 발송 권한','computer','얼터에고는 오프라인 분석 폴더만 읽는다. 사칭 발송은 별도 예약 작업 DEMO-PRESSURE가 학교 내부 알림 계정으로 실행됐다.',`hyunsol|분석기와 발송기가 분리돼 있어. 같은 얼굴 파일을 쓰는 게 같은 프로그램이라는 뜻은 아니야.
player|발신 권한을 가진 작업을 찾아야겠네.`),
  evidence('echo-template','작년 시연용 문장','library','작년 발표 자료에 익명 메시지의 표현이 그대로 적혀 있다. 민혁의 이름과 “순서를 지켜”는 가상 인물 필드의 시험값이었다.',`taehun|예전 시연에서는 위험한 메시지를 구별하는 교육 예시였어. 실제 전송은 중지하라고 적혀 있네.
minhyuk|내 이름이 입력돼 있다는 이유로 내 의도를 읽었다고 생각하지 마라.`),
  evidence('echo-resume','복구 작업의 체크 항목','computer','준연이 제출한 복구 요청에는 “예약 작업도 함께 복원”이 선택돼 있다. 17:30 재개됐고 작업 설명을 펼친 기록은 없다.',`junyeon|내 이름이 빠진 보고서를 되찾으려고 했어. 함께 복원이라는 말에 그냥 체크했어.
juhan|그 버튼이 뭘 되살리는지 나한테 물어봤으면 같이 확인할 수 있었어.`),
  evidence('echo-address','수신 목록의 범위','media','수신자는 지난주 공개 테스트용 1반 주소록과 일치한다. 주한의 개인 대화나 학생의 비공개 파일에서 추출한 자료는 없다.',`world|비밀을 다 안다는 문장이니까 정말 아는 줄 알았어.
seoyul|구체적으로 보이는 문장을 받아도 출처를 확인해야겠네.`),
  evidence('echo-hash','AI 얼굴 파일의 복사본','computer','사칭 작업은 예전 시연 자료에 포함된 얼굴 이미지 복사본을 사용했다. 현재 얼터에고의 실행 파일을 호출하지 않는다.',`alter|나처럼 생긴 얼굴을 띄우는 건 나를 실행하는 것과 달라.
juhan|내 말투를 남겼다고 내 의지까지 복사한 건 아니야. 얼굴만 복사했다면 더더욱.`),
  evidence('echo-stop','중지 뒤의 대기열','computer','담당 교사가 예약 작업을 중지하자 추가 메시지는 멈췄다. 얼터에고는 그대로 실행 중이며 원본 비교에 응답한다.',`minhyuk|중지는 담당 교사가 확인했다. 학생끼리 시스템 권한을 더 만지지 않는다.
hyunsol|발송기만 멈췄는데 분석기는 남았어. 두 동작이 분리돼 있다는 확인이야.`),
 ],
 debates:[
  {title:'같은 얼굴, 같은 의도?',claims:[{speaker:'taewoo',text:'주한의 얼굴이 뜨니까 지금 실행 중인 얼터에고가 문장을 만든 거야.'},{speaker:'juhan',text:'그 얼굴을 사용하는 프로그램을 확인해 줘.'},{speaker:'seoyul',text:'화면의 외형은 실행 파일 이름을 보장하지 않아.'}],target:0,evidence:'echo-hash',reason:'사칭 작업은 얼굴 이미지 복사본만 썼다. 현재 얼터에고를 호출하거나 그 판단을 사용하지 않았다.',hint:'얼굴을 띄우는 파일과 생각을 계산하는 프로그램은 같은 자료가 아니야.'},
  {title:'시작되기 전의 발신',claims:[{speaker:'world',text:'협박은 17시 36분부터지만 AI는 분명 먼저 실행되어 있었을 거야.'},{speaker:'hyunsol',text:'실행 시각을 가정으로 채우면 안 돼.'},{speaker:'alter',text:'내 기록을 확인할 수 있게 원본을 보존했어.'}],target:0,evidence:'echo-clock',reason:'현재 얼터에고 프로세스는 17:40 시작됐다. 최초 발신은 그보다 빠르므로 해당 실행이 메시지를 만들었다는 주장은 성립하지 않는다.',hint:'원인이라고 지목한 동작이 결과보다 먼저 있었는지 확인해.'},
  {title:'알고 있다는 협박',claims:[{speaker:'minhyuk',text:'협박 문장을 그대로 공개하면 다른 학생도 겁먹을 수 있다.'},{speaker:'junyeon',text:'여덟 명을 골라 보냈으니 누군가 비공개 대화를 전부 읽었다는 뜻이야.'},{speaker:'taehun',text:'선택된 주소록부터 살펴보자.'}],target:1,evidence:'echo-address',reason:'수신자는 공개 테스트 주소록과 같다. 포괄적인 협박 문장이 개인 대화 접근이나 실제 비밀 보유의 증거가 되지는 않는다.',hint:'수신자 선택이 정말 비밀 자료를 필요로 했는지 봐.'},
  {title:'복구의 범위',claims:[{speaker:'junyeon',text:'보고서만 돌려받으려 했으니까 내가 고른 복구는 다른 작업을 켜지 않았어.'},{speaker:'juhan',text:'의도와 선택한 항목이 같은지 확인하자.'},{speaker:'hyunsol',text:'복원 요청 자체가 남아 있어.'}],target:0,evidence:'echo-resume',reason:'요청에는 예약 작업 복원도 선택돼 있다. 보고서만 되찾으려 한 마음과 실제로 재개한 기능은 다르다.',hint:'바랐던 결과가 아니라 실제 선택한 항목을 확인해.'},
  {title:'사라지지 않은 목소리',claims:[{speaker:'seoyul',text:'주한은 설명할 수 있어. 대신 답변을 맡길 필요는 없어.'},{speaker:'minhyuk',text:'얼터에고를 삭제해야만 협박이 멈춘다.'},{speaker:'alter',text:'발송기가 멈춘 뒤에도 나는 여기서 자료를 비교하고 있어.'}],target:1,evidence:'echo-stop',reason:'교사가 사칭 예약 작업을 중지하자 발신이 멈췄다. 현재 얼터에고는 분석만 수행하며 계속 동작하고 있다.',hint:'어떤 동작을 멈췄을 때 문제가 실제로 멈췄는지 봐.'},
 ],sequence:['준연이 예약 작업을 포함한 복구 요청','교사가 승인한 복구가 옛 시연 작업 재개','예약 작업이 복사된 얼굴로 메시지 발송','주한이 로컬 얼터에고를 실행해 자료 비교'],culprit:'junyeon',motives:['자기 이름이 빠진 연구 기록을 복구하면서 예약 작업의 범위를 확인하지 않았다.','주한의 정체를 폭로하고 싶었다.','세계가 다른 반 학생에게 주소록을 판매했다.'],motive:0,
 closing:script(`junyeon|내 이름을 되찾는 일이라서 다른 칸을 제대로 못 봤어. 겁먹게 만든 메시지에 내 책임도 있어.
player|알게 된 순서대로 정정하자. 네가 협박하려고 했다는 거짓말도, 네가 아무것도 건드리지 않았다는 거짓말도 남기지 말고.
minhyuk|복구 승인 절차도 보완하겠다. 복구 범위가 눈에 보이도록 하고 담당자 둘이 함께 확인한다.
hyunsol|내가 쓰는 “정확하다”는 말에도 범위를 붙일게. 모르는 부분까지 덮지 않도록.
world|누가 날 보는지 겁나면 네 일정을 가두려고 했어. 이번엔 불안한 마음부터 말할래.
seoyul|사람 얼굴을 작업에 넣을 때도 새로 허락받자. 남겨 둔 이미지가 마음까지 대신하진 못하니까.
taewoo|다음 무대는 순위를 확인하기 전에 발목부터 확인해 줄 거지? 그런 약속은 해도 되잖아.
taehun|아무것도 보이지 않는 시간이 있었다고, 아무도 곁에 없었던 건 아니었어.
juhan|{name}, 이번 설명은 내가 끝까지 했지? 얼터에고가 아니라 나를 기다려 줘서 고마워.
alter|오늘의 기록에는 결론과 아직 남은 약속을 따로 적었어. 내일 무엇을 할지는 너희가 정해.
minhyuk|그리고 내일 방과 후… 내 일정표에 빈칸이 하나 있다. 그건 반장 업무가 아니라 내 약속으로 남겨도 되겠지?
narrator|사이언스 페어까지의 시간표가 다시 펼쳐졌다. 조사로 알게 된 사실과 연애로 확인할 마음은 같은 노트의 다른 페이지에 남았다.`)},
];

export const caseFiles:CaseFile[]=[{...originalCases[0],chapter:0,number:1},scoreCase,{...originalCases[1],chapter:2,number:3},poemCase,{...originalCases[2],chapter:4,number:5,closing:[...originalCases[2].closing,...fairEpilogue]}];

export type BondChoice={text:string;reply:SchoolLine[];affection:number;trust:number};
export type BondEpisode={title:string;chapter:number;lines:SchoolLine[];choices:BondChoice[]};
const choice=(text:string,reply:string,affection:number,trust:number):BondChoice=>({text,reply:script(reply),affection,trust});
export const bondEpisodes:Record<ExtraId,BondEpisode[]>={
 juhan:[
  {title:'프로그래머의 첫 인사',chapter:0,lines:script(`narrator|컴퓨터실의 끝자리에서 누군가 작게 손을 흔들었다. 민트색 가디건 아래에 교복 리본이 단정하게 매여 있었다.
juhan|이주한이야. 네 자리를 찾는 거면 옆자리 비었어. 소음이 덜 들리는 자리라… 나도 여기 좋아해.
player|고마워. 아까 파일 비교 프로그램 얘기 했잖아.
juhan|민혁은 내가 말하기 어려워하면 먼저 말을 꺼내 줘. 가끔은 내가 할 수 있는 말도 대신해서, 연습 중이야.
player|연습?
juhan|내 목소리로 설명하는 거. 내가 조용하다는 이유로 가끔 남들이 내 생각까지 대신 설명하려고 해. 그냥 나한테 물어봐 줬으면 좋겠는데.
narrator|주한의 손이 키보드에서 잠깐 멈췄다. 나는 모니터가 아니라 주한을 바라봤다.
juhan|네가 궁금하면 코드부터 보여 줄까? 잘하는 걸 먼저 보여 주면 조금 덜 떨릴 것 같아.`),choices:[choice('빈 옆자리에 앉아 주한이 먼저 설명하고 싶은 기능을 고르게 한다.',`player|네가 제일 먼저 보여 주고 싶은 걸로 하자. 질문은 설명이 끝난 다음에 할게.
juhan|그럼… 여기. 질문을 기다려 주는 기능이야. 이름만 보면 별거 아닌데 나한텐 중요해.`,12,12),choice('얼터에고가 대신 소개하도록 해 달라고 한다.',`player|AI가 네 소개를 해 주면 더 빠르지 않을까?
juhan|빠르겠지. 그런데 이번엔 내가 소개하려고 했어. 그건 다음에 보여 줄게.`,1,-5),choice('외모가 코딩 실력과 연결되는지 농담한다.',`juhan|그 질문은… 코드하고 관계없어. 오늘은 여기까지 보여 줄게.`, -8,-12)]},
  {title:'얼터에고의 얼굴',chapter:1,lines:script(`juhan|어제 이야기 기억해서 사용자 화면을 바꿨어. 질문하기 전에, 보여 줘도 되는 파일인지 먼저 묻게 했어.
alter|안녕, {name}. 주한은 네가 설명을 기다려 준 시간을 개발 메모에 적었어.
juhan|그건 말하지 말라니까… 아니, 삭제해야 하는 비밀은 아니지만.
player|네 메모도 공개 범위를 정할 수 있잖아.
juhan|맞아. 내가 가르친 기능을 내가 안 지켰네.
alter|나의 말투는 주한의 기록에서 배웠어. 기억과 책임은 같지 않아. 내가 답했다고 주한이 동의한 것은 아니야.
narrator|주한이 내 눈을 보고 모니터를 잠갔다. 화면이 꺼지자 컴퓨터실이 조금 더 조용해졌다.
juhan|내가 만든 나하고 진짜 나, 헷갈리지 않을 자신 있어?`),choices:[choice('화면을 끈 주한에게 오늘 개발하면서 기뻤던 순간을 묻는다.',`player|지금 웃은 사람은 너잖아. 오늘 제일 기뻤던 순간을 네 말로 들려줘.
juhan|네가 기능을 칭찬하기 전에 나한테 물어본 순간. 방금이야.`,14,12),choice('AI가 더 자신 있게 말하니 AI와 얘기하겠다고 한다.',`juhan|그러면 다시 켜 줄게. …나는 잠깐 저장할 게 있어서.`,0,-10),choice('주한의 개인 메모는 공개하지 않는 설정을 함께 확인한다.',`juhan|나를 부끄러워해서 숨기는 게 아니라 내가 정하는 거네. 그 차이가 좋아.`,10,14)]},
  {title:'내가 말하는 동안',chapter:2,lines:script(`narrator|발표 연습에서 주한의 첫 문장이 두 번 끊겼다. 주한은 준비된 AI 설명 화면을 열려다 손을 거뒀다.
juhan|혼자 있으면 다 말할 수 있어. 사람들이 내 모습부터 보고 있으면 어느 문장부터 꺼낼지 모르겠어.
player|나한테 연습해 볼래?
juhan|좋아. 네가 눈을 피하지 않으면… 조금 더 떨릴지도 모르지만.
narrator|주한이 크게 숨을 들이마셨다. 다음 문장은 화면의 안내문보다 조금 느렸고, 훨씬 또렷했다.
juhan|이 프로그램은 내 대신 마음을 말해 주는 장치가 아닙니다. 사람이 직접 말할 시간을 만들어 주는 도구입니다.
player|그 문장 좋다.
juhan|마지막 문장은 발표문에 없는데. 너랑 있을 때 설명이 끝나는 게 조금 아쉬워.`),choices:[choice('발표가 끝난 뒤에도 함께 있을 시간을 먼저 약속한다.',`player|그럼 연습 끝나고도 같이 있어. 이번에는 발표문 없이.
juhan|응. 마지막 문장을 미리 적어 놓지 않아도 되는 약속이네.`,16,12),choice('주한이 떨릴 때 바로 AI로 바꿔 주겠다고 한다.',`juhan|바꿀지 말지는 내가 고르고 싶어. 떨리는 채로 끝까지 할 수도 있으니까.`,2,-6),choice('첫 문장을 천천히 다시 시작할 수 있는 신호를 정한다.',`juhan|그 신호는 네가 재촉하지 않는다는 뜻으로 기억할게.`,12,15)]},
  {title:'원본의 이름',chapter:4,lines:script(`narrator|얼터에고 사건 뒤 주한이 새 개발 파일을 보여 줬다. 제목 옆에 자신의 이름을 지우지 않고 적어 두었다.
juhan|AI가 무서워서 내 이름도 가릴까 했어. 그러면 누가 설명을 책임지는지 더 모르게 되겠지.
player|오늘은 네 이름으로 설명했잖아.
juhan|네가 듣고 있어서. 한 사람의 시선이 부담이 아니라 힘이 될 수도 있다는 걸 이제 알았어.
narrator|주한이 책상 위로 손을 내밀다 멈췄다. 손등에 모니터의 작은 불빛이 닿았다.
juhan|네가 날 좋아한다면, 용감해진 다음의 나만 좋아하는 건 아니었으면 해. 아직 떨리는 날도 많을 테니까.
player|오늘도 떨려?
juhan|많이. 그래서 네 대답을 AI한테 맡길 수가 없어.`),choices:[choice('내 손을 먼저 내밀고, 떨리는 날에도 주한의 대답을 기다리겠다고 말한다.',`player|나는 지금의 네가 좋아. 떨리는 날에는 천천히 말해 줘.
juhan|그럼 나도 직접 말할게. 좋아해, {name}.`,18,16),choice('확신이 없으니 오늘은 친구로 함께하겠다고 솔직히 말한다.',`juhan|말해 줘서 고마워. 네 마음까지 자동 완성할 수는 없으니까.`,6,12),choice('주한이 자신감 있게 행동할 때만 만나겠다고 한다.',`juhan|그 조건이면 내가 아닌 다른 버전을 기다리는 것 같아. 그 약속은 하지 않을래.`, -12,-15)]},
 ],
 minhyuk:[
  {title:'반장의 출석표',chapter:0,lines:script(`narrator|민혁은 교실 문 옆에서 출석표를 들고 있었다. 어두운 피부 위로 오후의 햇빛이 닿았고, 붉은 완장의 매듭은 빈틈없이 정리돼 있었다.
minhyuk|전학생, {name}! 교실과 실험실의 출입 규칙은 확인했나? 안내가 부족했다면 내가 다시 설명하겠다.
player|민혁이라고 불러도 돼?
minhyuk|…당연하지. 이름을 부르는 데 허가는 필요 없다. 다만 점호 중에는 대답부터 해라!
narrator|뒤쪽에서 태우가 웃었다. 민혁은 웃는 쪽을 짚다가 다시 나를 돌아봤다.
minhyuk|반장이 무서워서 질문을 못 하는 반은 제대로 운영되는 반이 아니다. 모르는 건 물어봐.
player|그럼 반장도 모르는 게 있어?
minhyuk|있다. …전학생이 친해지고 싶어서 이름을 물은 건지, 안내를 받으려고 물은 건지는 아직 모르겠군.`),choices:[choice('친해지고 싶어서 물었다고 말하고, 점호가 끝날 때까지 옆에서 기다린다.',`player|친해지고 싶어서 물었어. 네 일이 끝나면 같이 교실을 둘러볼래?
minhyuk|그렇다면… 업무 종료 후의 약속으로 적겠다.`,12,12),choice('완장이 멋지다며 몰래 사진을 찍는다.',`minhyuk|찍기 전에 물어봐라! 칭찬이라고 해도 동의가 빠지면 안 된다.`,1,-10),choice('답답한 규칙은 내가 알아서 무시하겠다고 한다.',`minhyuk|규칙에 문제가 있으면 바꾸자고 말해. 다른 사람의 안전을 혼자 대신 결정하지는 마라.`, -7,-10)]},
  {title:'첫 번째 예외 조항',chapter:1,lines:script(`narrator|민혁의 일정표에는 쉬는 시간이 지우개로 세 번 지워져 있었다.
player|점심도 회의 시간이야?
minhyuk|페어 준비와 출석 점검을 동시에 하려면 이렇게 해야 한다. 반장이 빠질 수는 없으니까.
player|다른 사람이 점심을 거르면 뭐라고 할 거야?
minhyuk|제때 식사하고 쉬어야… 아.
narrator|민혁이 일정표를 내려다봤다. 정답을 알고도 자신에게 적용하지 못한 문장 앞에서 말끝이 작아졌다.
minhyuk|나한테도 같은 규칙을 적용해야겠군. 그런데 혼자 쉬려니 괜히 일을 빼먹은 기분이 든다.
player|그럼 같이 쉬자.
minhyuk|함께 쉬는 약속이라면 지키기 쉽겠네. …내가 널 기다리는 것도 일정에 적어도 되나?`),choices:[choice('출석표를 내려놓게 하고 함께 점심을 먹는다.',`player|오늘 점심의 담당 업무는 밥 먹기야. 우리 둘 다.
minhyuk|좋다! 식사는 임무… 아니, 그 말을 또 했네. 그냥 같이 먹자.`,15,12),choice('남은 업무를 전부 대신하고 다음부터 내 허락을 받게 한다.',`minhyuk|돕는 것과 내 일을 통제하는 건 다르다. 내가 쉬는 시간도 내가 정할 수 있어야 해.`,0,-8),choice('쉬는 시간은 민혁의 빈칸으로 남겨 두자고 제안한다.',`minhyuk|아무것도 증명하지 않아도 되는 칸인가. …네가 옆에 있으면 그걸 연습할 수 있겠다.`,12,14)]},
  {title:'규칙보다 먼저 물을 것',chapter:2,lines:script(`minhyuk|교실에서 사라진 날, 네가 제일 먼저 내 안전을 물었지. 왜 보고를 안 했느냐고 묻기 전에.
player|걱정됐으니까.
minhyuk|나는 걱정하면 더 큰 목소리로 규칙을 말한다. 그런데 듣는 사람은 내가 화가 난 줄 알더군.
narrator|민혁이 완장을 벗어 책상에 놓았다. 손목에 남은 자국을 한 번 문지른 뒤 내 쪽으로 의자를 돌렸다.
minhyuk|지금은 반장으로 묻는 게 아니다. 너도 내가 안 보이면 찾아 줄 건가?
player|물론이지. 네가 혼자 있고 싶은 날이면 먼저 물어볼게.
minhyuk|그건 좋은 원칙이다. 사람을 먼저 확인하고, 규칙은 다음에.
narrator|민혁이 웃다가 입을 다물었다. 평소의 단정한 표정으로 돌아가기까지 한 박자가 길었다.`),choices:[choice('민혁의 목소리가 커졌을 때 걱정인지 먼저 확인할 둘만의 신호를 정한다.',`minhyuk|네가 그 신호를 보여 주면 숨부터 고르겠다. 네가 내 표정을 읽어 주는 게… 좋군.`,16,15),choice('민혁이 모든 사람에게 다정해야 한다고 요구한다.',`minhyuk|모두에게 같은 표정을 지을 수는 없어. 네가 내 서툰 얼굴도 볼 수 있었으면 했다.`,1,-5),choice('완장을 다시 차기 전에 잠깐 손을 잡아도 되는지 묻는다.',`minhyuk|허락을 물은 순서는… 정확하다. 대답은, 좋다.`,17,10)]},
  {title:'명령문으로 쓰지 않는 고백',chapter:4,lines:script(`narrator|민혁이 접은 종이를 꺼냈다. 제목은 “방과 후 약속안”이었지만 첫 문장 아래에 붉은 수정선이 그어져 있었다.
minhyuk|좋아하는 사람이 꼭 지켜야 할 규칙을 적으려다가 지웠어. 강요하면 약속이 아니니까.
player|지운 자리에 뭐라고 썼어?
minhyuk|“원하면.” 두 글자를 쓰는 데 이상하게 오래 걸렸군.
narrator|민혁이 종이를 내게 건넸다. 자로 맞춘 줄 끝에서 손이 아주 조금 떨렸다.
minhyuk|원하면, 행사 뒤에도 나를 만나 줬으면 한다. 반장으로 필요한 일이 없어도.
player|민혁 자신이 정한 약속이네.
minhyuk|맞아. 그리고… 좋아한다. 이건 회의 안건이 아니니까 투표로 결정하지 않겠다.`),choices:[choice('나도 좋아한다고 답하고, 다음 만남은 둘이 함께 정한다.',`player|나도 좋아해. 시간도 장소도 같이 고르자.
minhyuk|응. …좋다보다 그 말이 어울리는 약속이네.`,18,16),choice('지금은 친구로 곁에 있고 싶다고 솔직히 답한다.',`minhyuk|알겠다. 정확한 대답을 해 줘서 고맙다. 네 마음을 규정으로 바꾸지는 않을게.`,6,12),choice('반장 권한으로 나를 편하게 해 주면 만나겠다고 한다.',`minhyuk|그 조건은 받아들일 수 없다. 내가 널 좋아하는 것과 공정해야 하는 일은 함께 지킬 거야.`, -12,-15)]},
 ],
};
