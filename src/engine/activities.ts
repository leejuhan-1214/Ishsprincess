import {characterById,locationById} from '../data/characters';
import type {CharacterId,LocationId} from '../types';

export type ActivityQuestion={prompt:string;options:string[];answer:number;explain:string};
export type Activity={id:string;title:string;subtitle:string;icon:string;questions:ActivityQuestion[]};
type Kind='dance'|'music'|'lab'|'sky'|'art'|'code'|'team';

const banks:Record<Kind,ActivityQuestion[]>={
 dance:[
  {prompt:'거울 속 태우가 “오른발부터”라고 외쳤다. 내 기준 첫 동작은?',options:['오른발 앞으로','왼발 앞으로','두 발 점프'],answer:0,explain:'방향을 자기 기준으로 확인해야 대형이 꼬이지 않는다.'},
  {prompt:'발목에 통증을 느낀 동료가 있다. 먼저 할 일은?',options:['한 번만 더 반복','연습 중단과 상태 확인','영상만 찍고 계속'],answer:1,explain:'통증 신호에서는 기록보다 안전이 먼저다.'},
  {prompt:'네 박자 중 강조된 박자가 2, 4라면 손뼉 순서는?',options:['약-강-약-강','강-약-강-약','강-강-약-약'],answer:0,explain:'두 번째와 네 번째 박자에 힘을 싣는다.'},
  {prompt:'센터가 빠진 대형을 맞출 때 가장 좋은 기준은?',options:['각자 감으로 이동','바닥 기준점과 간격 확인','제일 빠른 사람 따라가기'],answer:1,explain:'공통 기준점이 있어야 모두의 위치를 재현할 수 있다.'},
 ],
 music:[
  {prompt:'합주 중 한 악기만 계속 늦는다. 먼저 맞출 기준은?',options:['볼륨','공통 박자','의상 색'],answer:1,explain:'공통 박자를 먼저 맞춰야 각 파트를 비교할 수 있다.'},
  {prompt:'녹음 파일에 갑작스러운 잡음이 들어왔다. 가장 안전한 선택은?',options:['원본 보존 후 복사본 편집','원본 즉시 삭제','잡음 구간 전체 음소거'],answer:0,explain:'원본을 보존해야 편집 실수를 되돌릴 수 있다.'},
  {prompt:'서율이 미완성 곡은 공개하지 말아 달라고 했다. 영상 업로드는?',options:['친한 친구에게만 공개','허락 전까지 보류','얼굴만 가리고 공개'],answer:1,explain:'공개 범위는 창작자가 직접 정해야 한다.'},
  {prompt:'세계의 보컬과 키보드가 서로 묻힌다. 먼저 조정할 것은?',options:['둘 다 최대 음량','주파수와 밸런스','곡을 삭제'],answer:1,explain:'각 파트가 차지하는 영역과 음량을 함께 확인한다.'},
 ],
 lab:[
  {prompt:'비커가 깨졌다. 가장 먼저 할 행동은?',options:['손으로 큰 조각 줍기','주변에 알리고 접근 막기','휴지로 빠르게 쓸기'],answer:1,explain:'주변 안전을 확보한 뒤 도구와 절차에 따라 처리한다.'},
  {prompt:'라벨이 없는 시약을 발견했다. 어떻게 할까?',options:['냄새로 확인','소량 섞어 확인','사용 중지 후 담당자 확인'],answer:2,explain:'정체가 확인되지 않은 시약은 사용하면 안 된다.'},
  {prompt:'측정값 하나가 예상과 크게 다르다. 기록은?',options:['지우고 평균값 입력','그대로 남기고 원인 확인','가장 비슷한 값 복사'],answer:1,explain:'이상값도 기록하고 조건을 검토해야 한다.'},
  {prompt:'준연의 자료를 현솔이 크게 수정했다. 발표자 표기는?',options:['현솔만 표기','준연만 표기','각자의 기여를 함께 표기'],answer:2,explain:'실제 기여를 투명하게 남기는 것이 연구 윤리다.'},
 ],
 sky:[
  {prompt:'구름이 두꺼워 별이 보이지 않는다. 관측일지에는?',options:['실패로 삭제','구름량과 시간을 기록','맑았다고 가정'],answer:1,explain:'관측 불가 조건도 중요한 데이터다.'},
  {prompt:'예보와 실제 날씨가 달랐다. 다음 분석에 필요한 것은?',options:['예보 삭제','예상과 실제를 나란히 기록','날씨 탓만 하기'],answer:1,explain:'차이를 남겨야 다음 예측을 개선할 수 있다.'},
  {prompt:'별의 위치를 비교할 때 먼저 통일할 기준은?',options:['관측 시각과 방향','감상 문장 길이','망원경 색'],answer:0,explain:'시간과 방향이 다르면 위치를 직접 비교하기 어렵다.'},
  {prompt:'야간 옥상 관측에서 가장 먼저 확인할 것은?',options:['사진 필터','안전 동선과 날씨','시의 제목'],answer:1,explain:'야간 활동은 동선과 기상 안전을 먼저 확인한다.'},
 ],
 art:[
  {prompt:'서율의 미완성 그림을 촬영하려 한다. 먼저 필요한 것은?',options:['좋은 조명','작가의 허락','고화질 카메라'],answer:1,explain:'작품의 공개와 촬영 범위는 창작자가 정한다.'},
  {prompt:'전시 화면에서 글자가 배경에 묻힌다. 우선 조정할 것은?',options:['대비','파일 이름','마우스 속도'],answer:0,explain:'명도와 색 대비를 높여 읽기 쉽게 만든다.'},
  {prompt:'원본 그림을 수정할 때 안전한 방법은?',options:['원본에 바로 덮어쓰기','버전을 복제해 수정','모든 레이어 합치기'],answer:1,explain:'버전과 원본을 보존해야 수정 이력을 되돌릴 수 있다.'},
  {prompt:'두 사람이 만든 작품의 표기는?',options:['유명한 사람만','먼저 제출한 사람만','역할과 기여를 함께'],answer:2,explain:'공동 창작은 각자의 기여를 명시한다.'},
 ],
 code:[
  {prompt:'공동 파일이 열리지 않는다. 가장 먼저 확인할 것은?',options:['무작정 재설치','오류 메시지와 백업','파일 삭제'],answer:1,explain:'오류 정보와 복구 가능한 백업부터 확인한다.'},
  {prompt:'수정본이 세 개 생겼다. 충돌을 줄이는 방법은?',options:['가장 큰 파일 선택','버전명과 수정 기록 비교','전부 합치기'],answer:1,explain:'버전과 변경 기록을 비교해야 누락을 줄일 수 있다.'},
  {prompt:'모르는 프로그램 설치 창이 떴다. 어떻게 할까?',options:['관리자 권한으로 실행','출처와 담당자 확인','일단 설치 후 검사'],answer:1,explain:'출처가 불분명한 프로그램은 설치하지 않는다.'},
  {prompt:'발표 자료에 개인정보가 보인다. 우선 할 일은?',options:['화면 확대','공개 중지 후 비식별 처리','그대로 발표'],answer:1,explain:'불필요한 개인정보는 공개 전에 제거한다.'},
 ],
 team:[
  {prompt:'두 부탁의 마감이 겹쳤다. 먼저 할 일은?',options:['둘 다 된다고 말하기','시간과 우선순위 공유','한쪽 연락 끊기'],answer:1,explain:'가능한 범위를 솔직히 공유해야 신뢰를 지킬 수 있다.'},
  {prompt:'친구가 대답을 망설인다. 어떻게 할까?',options:['대신 결론 내리기','기다리고 필요한 질문만 하기','다른 사람에게 묻기'],answer:1,explain:'대답할 시간과 선택권을 남겨 둔다.'},
  {prompt:'역할이 한 사람에게 몰렸다. 해결 방법은?',options:['잘하는 사람이 계속','작업을 보이고 재분배','마감까지 숨기기'],answer:1,explain:'현재 작업량을 공유하고 역할을 다시 나눈다.'},
  {prompt:'실수가 발견됐다. 가장 좋은 보고는?',options:['원인과 영향, 수정안을 함께','실수한 사람 이름만','아무도 모르게 수정'],answer:0,explain:'문제의 범위와 해결 방법을 투명하게 알린다.'},
 ],
};

const kindFor=(location:LocationId):Kind=>location==='dance'?'dance':(['band','auditorium'].includes(location))?'music':location==='chemistry'?'lab':(['observatory','roof'].includes(location))?'sky':(['art','media'].includes(location))?'art':location==='computer'?'code':'team';
const labels:Record<Kind,[string,string,string]>={dance:['리듬 싱크','거울 없이 세 박자 맞추기','♪'],music:['사운드 체크','합주의 빈틈을 함께 찾기','♫'],lab:['세이프티 체크','실험 절차를 안전하게 복구하기','⚗'],sky:['관측 노트','구름 사이의 단서를 고르기','✦'],art:['컬러 & 컷','작품의 의도와 권리를 지키기','◐'],code:['디버그 페어','공동 파일의 오류를 추적하기','</>'],team:['팀워크 퍼즐','상황에 맞는 다음 행동 고르기','◇']};

export function activityFor(id:CharacterId,location:LocationId,seed:number,chapter:number,visit:number):Activity{
 const kind=kindFor(location),bank=banks[kind],start=(seed+chapter*5+visit*3+Object.keys(characterById).indexOf(id))%bank.length;
 const questions=Array.from({length:3},(_,i)=>bank[(start+i)%bank.length]);
 const [title,subtitle,icon]=labels[kind];
 return {id:`${id}-${location}-${chapter}-${visit}`,title:`${characterById[id].name} · ${title}`,subtitle:`${locationById[location].name}에서 ${subtitle}`,icon,questions};
}
