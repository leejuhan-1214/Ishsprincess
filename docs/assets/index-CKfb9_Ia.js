var ir=Object.defineProperty;var or=(e,t,s)=>t in e?ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var Yn=(e,t,s)=>or(e,typeof t!="symbol"?t+"":t,s);import{j as n,r as f,M as sn,L as Zn,U as lr,F as cr,B as Le,a as gt,T as ur,C as Ne,S as zn,H as ne,P as vt,R as Rn,A as ee,b as kt,c as re,d as dr,e as En,V as wt,Z as pr,f as hr,D as mr,g as Qn,h as fr,i as yr,k as jr,l as et,m as xr,N as Oe,n as nt,o as br,X as gr,p as Nt,q as vr}from"./vendor-C1omI3nk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();const ze=e=>e.trim().split(`
`).map(t=>{const s=t.indexOf("|");return{speaker:t.slice(0,s),text:t.slice(s+1)}}),te=(e,t,s,r,a)=>({id:e,name:t,location:s,description:r,inspection:ze(a)}),kr={id:"score",number:2,chapter:1,title:"멈춘 영상의 99점",subtitle:"센서 점수 조작 · 동일 조건의 함정",opening:ze(`narrator|임시 비공개한 점수 표가 조사 화면에 떴다. 태우 이름 옆의 99점과 멈춘 발끝이 같은 화면에 있었다.
taewoo|난 좋은 기록도 있어. 오늘 영상 하나로 다 못 춘다고 하지 마.
hyunsol|잘 춘 적이 있는지 말고, 공개한 비교가 같은 조건인지를 묻는 거야.
juhan|세션 ID, 기준 파일, 화면 내보내기 순서를 보자. 점수는 원자료를 대신하지 않아.
world|사람 얼굴부터 자르지 말자. 필요한 동작 구간만 검토하자.
player|다른 학생 기록도 같은 기준으로 다시 계산해. 태우만 특별히 낮추는 재판도 아니야.
taewoo|……그럼 내 원본도 가져올게.
minhyuk|공개 표를 만든 책임과 센터 선정은 구분한다. 선정은 담당 교사가 재검토한다.
seoyul|우리가 정할 건 보기 좋게 만든 값이 아니라, 어떤 조건을 숨겼는지겠네.
narrator|태우는 99점보다 옆자리의 빈 의자를 더 오래 봤다.`),evidence:[te("score-session","영상의 세션 ID","dance","공개 영상은 S-28, 원자료는 84점이다. 태우가 완주한 전날 세션 S-27은 97점이며 두 파일은 별도 ID다.",`juhan|둘 다 실제 태우 기록이지만 다른 시도야. 서로 바꾸면 같은 영상의 결과가 아니지.
taewoo|97점은 내가 춘 게 맞아. 그래도 오늘 영상 위에 붙이면 틀린 거네.`),te("score-baseline","개인 기준 파일","computer","공개 표의 태우 행만 reference=TAEWOO-S27이다. 나머지 학생은 공통 기준 REF-01을 쓴다. 자기 기록과 비교한 99는 공통 기준 점수가 아니다.",`hyunsol|기준이 달라졌어. 숫자가 높다는 것만으로 우열을 말할 수 없어.
player|전체 재채점은 공통 기준으로 해야겠네.`),te("score-edit","설정 변경 이력","computer","16:18 태우가 담당 계정으로 자신의 reference만 바꿨다. 변경 전 공통 기준 점수는 84. 권한 있는 설정이지만 공정한 비교를 위한 변경은 아니었다.",`taewoo|연습용으로 내 기록을 기준 삼으면 차이를 잘 볼 수 있거든.
juhan|그 목적으론 가능해. 하지만 공개 순위용 설정은 아니야.`),te("score-export","내보내기 화면 녹화","media","태우는 기준이 개인 기록인 화면을 보고 16:22 순위 표를 내보냈다. 설명의 “동일 기준” 문구는 유지됐다. 원자료에는 손대지 않았다.",`world|알고 본 화면하고 밖에 보인 설명이 달랐네.
taewoo|그 숫자가 내려가면 나도 내려가는 것 같았어. 설명을 고쳐야 했는데.`),te("score-recheck","공통 기준 재계산","dance","교사 승인하에 공통 REF-01로 재계산하면 모든 행이 원자료와 일치한다. 센서 고장은 확인되지 않았다. 점수는 동작 미학을 평가하지 않는다.",`alter|기준 파일만 통일했을 때 불일치가 사라진다. 전체 센서 오류라고 할 근거는 없어.
seoyul|기계보다 화면의 설명이 문제였네.`)],debates:[{title:"같은 사람이면 같은 시도?",claims:[{speaker:"taewoo",text:"둘 다 내가 춘 기록이니 S-27 점수를 S-28 영상에 붙여도 같은 자료야."},{speaker:"junyeon",text:"시도마다 조건과 결과는 따로 있어."},{speaker:"juhan",text:"세션 ID를 확인하자."}],target:0,evidence:"score-session",reason:"같은 사람의 기록이어도 시도가 다르면 다른 원자료다. S-28 영상의 공통 기준 점수는 84다.",hint:"사람 이름이 아니라 촬영 시도를 구분하는 ID를 봐."},{title:"높은 숫자 하나",claims:[{speaker:"world",text:"99가 제일 높으니까 적어도 같은 표 안에선 태우가 가장 정확해."},{speaker:"hyunsol",text:"동일 조건인지 먼저 확인해야 해."},{speaker:"minhyuk",text:"표의 제목은 모든 학생에게 같은 조건을 약속한다."}],target:0,evidence:"score-baseline",reason:"태우 행만 개인 기준으로 계산됐다. 공통 기준을 사용한 다른 행과 숫자를 직접 비교할 수 없다.",hint:"서로 같은 기준 파일을 썼는지 살펴봐."},{title:"고장이라는 설명",claims:[{speaker:"seoyul",text:"설정과 공개 설명은 별개로 봐야 해."},{speaker:"taewoo",text:"센서가 고장이라 점수가 달랐던 거야. 내가 숨긴 조건은 없어."},{speaker:"alter",text:"재계산 결과를 검토할 수 있어."}],target:1,evidence:"score-recheck",reason:"공통 기준으로 계산하면 원자료와 일치한다. 확인된 문제는 센서 고장이 아니라 기준 불일치다.",hint:"어떤 조건을 바꿨을 때 문제가 사라졌지?"},{title:"연습에서 공개로",claims:[{speaker:"taewoo",text:"개인 기준은 연습용으로만 바꿨으니까 공개 표를 만든 책임은 없어."},{speaker:"world",text:"최종 내보내기한 화면을 확인하자."},{speaker:"juhan",text:"허가된 기능을 썼다는 사실이 공개 설명을 정확하게 만들지는 않아."}],target:0,evidence:"score-export",reason:"태우가 개인 기준임을 보고도 동일 기준 문구를 유지한 순위 표를 내보냈다. 연습용 설정이 공개용 자료로 이어진 책임이 있다.",hint:"설정을 바꾼 순간과 공개 파일을 만든 순간을 나눠 봐."}],sequence:["태우가 공통 기준으로 S-28 촬영","태우가 자신의 기준 파일을 개인 기록으로 변경","같은 세션 점수가 99로 재계산","동일 기준 문구를 유지한 순위 표 공개"],culprit:"taewoo",motives:["낮아진 점수가 관심과 센터 자리를 빼앗을 것 같아 개인 기준 결과를 공통 점수처럼 공개했다.","센서가 다른 학생 이름을 자동으로 지웠다.","주한에게 메신저 발송 권한을 주려 했다."],motive:0,closing:ze(`taewoo|점수가 내려가면 네가 안 올까 봐. 그래서 내가 비교하는 기준까지 바꿔 버렸어.
player|그 이유는 들을게. 그래도 다른 사람 점수를 낮은 것처럼 보이게 한 표는 고쳐야 해.
taewoo|응. 공통 기준 결과랑 설명 모두 정정할게. 원자료는 그대로 남겨 두고.
minhyuk|공개 순위는 철회한다. 센터 선정은 동일 조건을 확인한 뒤 담당 교사가 다시 결정한다.
hyunsol|연습용 기준도 쓸 수는 있어. 용도와 한계가 보이는 별도 화면에서.
junyeon|좋은 기록도 같이 남으면 좋겠어. 실수 한 번이 네 전부는 아니니까.
seoyul|전시는 점수 없는 마지막 여덟 박자로 바꾸자. 관객은 직접 보고 자기 말을 할 수 있게.
world|높은 숫자 없는 너를 보는 것도 그렇게 무서워?
taewoo|무서워. 근데…… 여기 온다고 한 사람이 있어서 한 번은 해 볼래.
narrator|태우가 내 쪽으로 손바닥을 펼쳤다. 이번에는 숫자 대신 첫 박자를 기다렸다.
player|다음 연습엔 네가 쉬기로 하는 신호부터 볼게.
taewoo|알았어. 나도 다른 애 시선을 점수로 이기려고 하진 않을게. 그래도 네 시선은 받고 싶어.
narrator|정정된 표는 사라졌지만 그 부탁은 남았다. 다음 장의 만남은 순위 밖에서 시작됐다.`)},wr={id:"poem",number:4,chapter:3,title:"전시에 걸린 비공개 한 줄",subtitle:"시 초안 무단 공개 · 출처와 허락의 차이",opening:ze(`narrator|태훈 시집의 책갈피와 복도 포스터가 나란히 놓였다. 문장과 줄바꿈까지 같았다.
taehun|관측 설명은 줬어. 이 시는 아직 아니라고 말했고.
seoyul|공유 폴더에서 봤어. 제목 없고 이름도 없어서 공개 초안인 줄 알았어.
world|그럼 파일 위치와 실제 허락을 나눠 봐야겠네.
juhan|원본 메모는 자동 동기화됐어. 공유 위치에 들어갔다고 동의를 만들어 내지는 않아.
minhyuk|포스터는 임시 비공개다. 새 전시를 막는 게 아니라 사용 범위를 먼저 확인하는 거야.
player|누가 쓴 문장인지와 누가 공개할 수 있는지는 다른 질문이야.
junyeon|이름을 적어 주기만 하면 괜찮은 것도 아니었네.
narrator|서율은 자기 붓을 책상 위에 놓았다. 손에 아무것도 들지 않은 채 태훈 말을 듣기 시작했다.`),evidence:[te("poem-original","책갈피 초안 원본","library","태훈의 비공개 시 초안이다. 14:10 작성 시각과 세 번의 수정 이력이 있으며 포스터의 문장·줄바꿈·특이한 오자가 동일하다.",`taehun|이 오자는 아직 고치기 전이었어. 관측값 설명 파일엔 없는 문장이야.
player|서로 독립적으로 같은 문장을 썼다는 설명과는 안 맞네.`),te("poem-allowed","제공한 관측 설명","observatory","태훈이 전시 사용을 허락한 파일은 weather-note.txt 하나다. 날짜·구름량·관측 불가 조건만 있고 해당 시 문장은 없다.",`taehun|이건 써도 된다고 직접 줬어. 감상 문장은 새로 완성해서 주겠다고 했고.
hyunsol|허락한 자료의 범위가 구체적으로 남아 있네.`),te("poem-sync","메모 폴더 동기화","computer","시 초안은 개인 메모 폴더의 자동 동기화로 작업 폴더에 복사됐다. 읽기 권한은 있지만 공개 사용 허락 필드는 없다.",`juhan|읽을 수 있다는 설정은 공개에 써도 된다는 동의가 아니야.
seoyul|내가 파일 위치를 허락이라고 읽었네.`),te("poem-message","인용 전 대화","media","서율이 “지금 시를 넣어도 돼?”라고 물었고 태훈은 “지금 초안은 아니야. 새로 완성해서 줄게”라고 답했다. 두 사람 동의로 이 관련 구간만 제출됐다.",`world|대화를 전부 가져온 게 아니라 필요한 문장만 두 사람이 같이 골랐어.
taehun|아직 아니라고 말한 부분이야. 그걸 시간 지나면 예스로 바꿀 수는 없어.`),te("poem-layout","포스터 편집 이력","art","15:02 서율이 동기화 사본에서 문장을 가져와 포스터에 삽입하고 15:20 공개본을 내보냈다. 자동 삽입 기능은 사용되지 않았다.",`seoyul|내가 직접 골랐어. 빈 의자 그림에 가장 어울린다고 생각해서.
player|그림에 맞는지와 사용해도 되는지는 따로 확인했어야겠네.`)],debates:[{title:"우연히 같은 문장",claims:[{speaker:"seoyul",text:"같은 장면을 봤으니 비슷한 문장을 쓴 걸 수도 있어."},{speaker:"taehun",text:"초안의 흔적도 비교해 줘."},{speaker:"juhan",text:"독립 작성과 복사에는 다른 흔적이 남아."}],target:0,evidence:"poem-original",reason:"문장뿐 아니라 줄바꿈과 특이한 오자가 원본과 일치하고 수정 이력이 남아 있다. 독립 작성이라는 설명을 지지하지 않는다.",hint:"뜻이 비슷한 것 외에 그대로 옮겨진 흔적이 있지?"},{title:"폴더에 들어온 허락",claims:[{speaker:"minhyuk",text:"파일의 접근 범위와 사용 범위를 구분해야 한다."},{speaker:"seoyul",text:"공유 폴더에 있었으니까 공개 사용도 허락한 파일이야."},{speaker:"alter",text:"권한 필드를 확인할 수 있어."}],target:1,evidence:"poem-sync",reason:"동기화와 읽기 권한은 공개 사용 동의가 아니다. 파일 위치만으로 당사자 의사를 확정할 수 없다.",hint:"볼 수 있음과 게시할 수 있음이 같은 칸에 적혀 있어?"},{title:"다 같이 받은 자료",claims:[{speaker:"world",text:"전시 설명을 받았다면 그 시까지 같은 자료로 사용할 수 있겠지."},{speaker:"taehun",text:"내가 건넨 파일을 확인해."},{speaker:"hyunsol",text:"파일명보다 내용과 허락 범위가 중요해."}],target:0,evidence:"poem-allowed",reason:"전시 사용을 허락한 관측 설명에는 시 문장이 없다. 데이터 설명 허락을 개인 시 초안까지 확대할 근거가 없다.",hint:"실제로 제공한 파일 안에 그 문장이 들어 있었나?"},{title:"물어봤다는 답변",claims:[{speaker:"seoyul",text:"공개 전에 물어봤으니까 사용 동의는 받은 셈이야."},{speaker:"junyeon",text:"물은 것과 허락받은 건 다르지."},{speaker:"taehun",text:"내 대답까지 읽어 줘."}],target:0,evidence:"poem-message",reason:"질문에 대한 답은 지금 초안은 사용하지 말라는 뜻이었다. 질문했다는 사실이 거절을 동의로 바꾸지 않는다.",hint:"질문 뒤에 어떤 대답이 남았는지 봐."}],sequence:["태훈이 비공개 시 초안 작성","자동 동기화로 작업 폴더에 사본 생성","서율이 사용 질문에 아직 아니라는 답을 받음","서율이 초안을 포스터에 삽입해 공개"],culprit:"seoyul",motives:["전시 그림의 빈칸을 채우고 싶어 어울리는 시를 당사자가 정한 범위보다 앞서 사용했다.","태훈이 공개 홍보를 먼저 요청했다.","얼터에고가 자동으로 시를 삽입해 게시했다."],motive:0,closing:ze(`seoyul|이름이 지워지는 게 얼마나 싫은지 알면서 네 대답을 지웠어. 그림에 맞는다는 생각부터 해서.
taehun|내 이름을 붙였어도 오늘은 공개하면 안 됐어.
seoyul|응. 출처 고치기만 하면 끝난다고 생각하지 않을게. 문장은 내리고 그림 여백은 남길게.
world|이번엔 내 편인지 네 편인지 나누고 싶지 않아. 태훈이 말한 범위부터 지켜야겠네.
minhyuk|이미 배포한 포스터는 회수와 정정 안내를 함께 진행한다. 원문 재게시 없이 변경 사실을 알린다.
juhan|작업 폴더의 자동 동기화 범위도 줄일게. 설정이 바뀐 사실을 사용자에게 보여 주고.
player|태훈, 그 문장 다음 줄은 네가 쓰고 싶을 때 써. 전시 마감 때문에 답까지 서두르지 않아도 돼.
taehun|그럼 아직 다음 줄은 남아 있네.
seoyul|새 전시 문장은 부탁해도 돼? 안 되면 그림만으로 갈게.
taehun|응. 새 문장을 완성해서 읽어 줄게. 사용은 그때 다시 정하자.
narrator|서율이 빈 의자 그림을 다시 펼쳤다. 채우지 않은 칸이 더 이상 훔쳐 온 문장을 기다리지 않았다.
seoyul|{name}, 네 초상도 다음에 보여 줄게. 네 대답을 작품 제목으로 미리 붙이지 않고.
narrator|다음 장의 약속은 완성된 파일이 아니라, 다시 물어볼 수 있다는 믿음으로 남았다.`)},Nr=ze(`narrator|다음 날, 사이언스 페어 첫 심사. 개장 전 확인한 발송기 중지와 정정문은 담당 교사의 검토를 받았다.
junyeon|방준연입니다. 이 노트는 제가 썼습니다. 예상과 다른 값도 원자료에 남겼습니다.
hyunsol|제가 확인한 조건은 여기까지입니다. 아직 모르는 원인은 재시험 계획에 적었습니다.
taewoo|화면 점수는 좌표 차이예요. 춤의 아름다움이나 사람의 가치는 아닙니다. 마지막 여덟 박자는 직접 봐 주세요!
world|전세계의 보컬과 기타, 이서율의 작곡과 편곡입니다. 크레딧은 마지막 화면에도 남아 있습니다.
seoyul|그림의 빈자리는 삭제된 자리가 아니라 보는 사람이 서는 자리예요.
taehun|관측 불가도 기록했습니다. 기상 기준을 넘으면 내일은 실내 전시로 바꿉니다. 시는 새로 쓴 문장입니다.
juhan|이주한입니다. 얼터에고는 파일 차이를 찾는 도구입니다. 제 마음에 대한 대답은 제가 직접 하겠습니다.
minhyuk|질문할 사람의 이름과 공개 범위는 이쪽! 동선은 비워 주세요!
narrator|첫 심사는 끝났다. 서로 다른 답이 남아서 오래 서 있게 되는 전시였다.
player|처음엔 같은 반이라는 것만 알았는데.
taehun|이제 같은 반인데도 다르게 보이지?
hyunsol|오늘 일은 여기까지. 다음에 내 시간 있어?
junyeon|내 발표도 끝났어. 말할 건 아직 남았고.
world|홍보 화면 끌게. 네 대답을 관객에게 보여 줄 필요 없잖아.
taewoo|나도 센서 끄고. 이제 네가 오는 이유를 점수로 만들 일 없으니까.
seoyul|그림 한 장 가져왔어. 네가 볼 거라고 생각하고 그렸어.
juhan|프로그램 끈 다음에…… 네가 날 보러 오면 좋겠어.
minhyuk|업무 종료. 개인 약속은 이제 내가 물을 거야.
player|한 사람을 만나면 다른 사람에게도 직접 말할게. 못 지킬 약속을 남기고 싶지 않아.
world|싫어할 수도 있어. 그래도 네가 말해 줘.
taehun|오늘 일지는 여기까지. 다음 페이지는 아직 제목 없어.
narrator|페어는 이틀 더 남았다. 다섯 재판은 끝났지만 연애는 해결된 사건처럼 닫히지 않았다.
player|그럼 다음 페이지는 내가 찾아갈게.
narrator|이제 어느 쪽에 설지 내가 직접 말할 차례였다.`),$t=[{id:"world",name:"전세계",role:"밴드부 · 보컬 & 기타",tag:"너에게만 들려줄게",color:"#d997a6",specialLabel:"집착",bio:"무대 위에서는 누구보다 빛나는 사람. 웃음 뒤에 숨긴 불안은 아직 누구에게도 들려준 적 없다.",quote:"카메라가 꺼져도 내 옆에 있을 거야?",location:"band"},{id:"junyeon",name:"방준연",role:"화학 탐구 · 연구 기록",tag:"빈 옆자리의 온도",color:"#c2a37b",specialLabel:"위축",bio:"조금 느린 말투와 손때 묻은 노트. 주눅 든 모습 너머에는 누구보다 집요한 호기심이 있다.",quote:"내가 말할 때, 옆에 있어 줘.",location:"chemistry"},{id:"hyunsol",name:"최현솔",role:"화학 탐구 · 실험 설계",tag:"마음에도 오차가 있을까",color:"#85b6ad",specialLabel:"짜증",bio:"정확한 숫자와 틀림없는 절차를 믿는다. 마음까지 정답으로 설명할 수 있을 거라고 생각했다.",quote:"맞는 말이어도, 상처가 될 수 있겠지.",location:"chemistry"},{id:"taewoo",name:"김태우",role:"댄스부 · 센터",tag:"여덟 번째 카운트",color:"#d99c79",specialLabel:"경쟁심",bio:"누구보다 무대를 사랑하는 자신만만한 센터. 박수 소리가 멎은 뒤의 자신도 사랑받고 싶다.",quote:"실수해도, 끝까지 봐 줄 거지?",location:"dance"},{id:"taehun",name:"고태훈",role:"지구과학 · 문학",tag:"별과 문장 사이",color:"#93a8cd",specialLabel:"감성 동조",bio:"관측일지 가장자리에 시를 쓰는 문학소녀. 확률과 여백을 함께 사랑하는 조금 특별한 과학도.",quote:"별이 안 보여도, 기다리는 이유는 있어.",location:"observatory"},{id:"seoyul",name:"이서율",role:"밴드부 · 키보드 & 아트",tag:"미완성의 색",color:"#b2a0cd",specialLabel:"영감",bio:"음악과 그림으로 하루를 기억한다. 누군가에게 완성되지 않은 작업을 보여 주는 일은 작은 고백이다.",quote:"아직 그리는 중이야. 우리 이야기도.",location:"art"}];Object.fromEntries($t.map(e=>[e.id,e]));const Se=[{id:"gate",name:"정문",sub:"새로운 하루",bg:"locations/gate",x:46,y:88},{id:"classroom",name:"1학년 1반",sub:"우리의 시작점",bg:"classroom",x:47,y:52},{id:"hallway",name:"복도",sub:"계단 옆 창가",bg:"locations/hallway",x:60,y:39},{id:"garden",name:"중앙정원",sub:"점심의 햇살",bg:"locations/garden",x:50,y:72},{id:"cafeteria",name:"학생식당",sub:"비어 있는 옆자리",bg:"locations/cafeteria",x:78,y:77},{id:"library",name:"도서관",sub:"조용한 문장들",bg:"locations/library",x:76,y:31},{id:"chemistry",name:"화학실",sub:"실험과 작은 실수",bg:"lab",x:23,y:36},{id:"media",name:"미디어실",sub:"남겨 두는 순간",bg:"locations/media",x:23,y:61},{id:"computer",name:"컴퓨터실",sub:"코드와 마음의 디버깅",bg:"computer",x:34,y:20},{id:"observatory",name:"천문대",sub:"별을 기다리는 시간",bg:"night",x:21,y:14},{id:"band",name:"밴드연습실",sub:"둘만의 앙코르",bg:"band",x:74,y:53},{id:"art",name:"미술준비실",sub:"아직 마르지 않은 색",bg:"locations/art",x:88,y:13},{id:"dance",name:"댄스연습실",sub:"여덟 번의 카운트",bg:"dance",x:10,y:79},{id:"auditorium",name:"대강당",sub:"조명이 켜지는 곳",bg:"locations/auditorium",x:8,y:52},{id:"roof",name:"옥상 휴게공간",sub:"바람이 쉬어 가는 곳",bg:"locations/roof",x:51,y:17},{id:"walk",name:"학교 뒤 산책로",sub:"조금 더 걸을까",bg:"locations/walk",x:91,y:94}],xe=Object.fromEntries(Se.map(e=>[e.id,e]));function St(e){const t=xe[e].bg;return`assets/${t}.${t.startsWith("locations/")?"png":"webp"}`}const Ct=[{id:"juhan",name:"이주한",role:"프로그래밍 · 얼터에고 개발자",tag:"용기는, 원본으로 남기는 것",color:"#8dbcae",specialLabel:"자기 확신",bio:"긴 밤색 머리에 흰 꽃과 회로 모양 머리핀을 꽂은 여학생. 청록색 카디건과 리본 교복, 늘 안고 다니는 노트북이 트레이드마크다. 조용한 말투에 자신의 이야기를 먼저 꺼내는 데는 서툴지만, 코드를 설명할 때만큼은 흔들리지 않는다. 자신이 만든 AI 얼터에고에 말투와 연구 기록을 남겼다. AI가 대신 말하는 것과 스스로 말하는 것은 다르다는 사실을 배우고 있다.",quote:"내가 어떤 모습인지보다… 내가 끝까지 말하는 걸 봐 줄래?",location:"computer"},{id:"minhyuk",name:"황민혁",role:"1학년 1반 반장 · 초고교급 풍기위원",tag:"규칙 밖에서 배운 첫 약속",color:"#dfab73",specialLabel:"원칙",bio:"어두운 피부와 단정한 포니테일의 여학생 반장. 각 잡힌 흰 제복, 붉은 완장과 색인으로 가득한 규율 수첩이 트레이드마크다. 출석과 안전 규칙에 엄격하고, 노력을 가볍게 취급하는 말을 특히 싫어한다. 부당한 대우 앞에서는 누구보다 크게 항의하지만, 사적인 칭찬을 받으면 갑자기 말수가 줄어든다. 사람을 지키려 만든 규칙이 사람을 밀어내지 않도록 고민한다.",quote:"원칙은 사람을 지키기 위해 있다! …그러니까 네 마음도 예외로 두지 않겠다.",location:"classroom"}],$r=[...$t,...Ct],Ce=Object.fromEntries($r.map(e=>[e.id,e]));Object.fromEntries(Ct.map(e=>[e.id,e]));const B=e=>e.trim().split(`
`).map(t=>{const s=t.indexOf("|");return{speaker:t.slice(0,s),text:t.slice(s+1)}}),D=(e,t,s,r,a)=>({id:e,name:t,location:s,description:r,inspection:B(a)}),Xe=[{id:"credit",number:1,chapter:2,title:"잘라 낸 이름",subtitle:"공연 영상 조작 · 첫 번째 학급재판",opening:B(`narrator|방과 후 단체 채팅에 짧은 영상이 올라왔다. 서율의 편곡 파일 위에 세계의 이름 하나만 남아 있었다.
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
world|…내가 하는 말도 끝까지 들어 줄 거지?`),evidence:[D("credit-source","원본 편곡 파일","band","15:58 저장본에는 편곡 이서율·보컬 전세계가 함께 적혀 있다. 두 사람 모두 이 버전의 공개에 동의했다.",`seoyul|이 버전은 같이 이름을 적었어. 마지막 화음을 바꾼 이유도 메모에 남겼고.
player|처음부터 단독 작업이었다는 주장은 여기서 확인할 수 있겠네.`),D("credit-change","크레딧 변경 이력","media","16:42 크레딧 레이어만 수정됐다. 로그인 표시는 BAND-SHARED이며, 이주한 개인 계정과 다른 공용 계정이다.",`alter|음원은 그대로야. 글자가 있는 레이어 하나가 16시 42분에 바뀌었어.
juhan|공용 계정은 여럿이 썼어. 이것만으로 사람을 특정하면 안 돼.`),D("credit-permission","얼터에고 접근 권한","computer","얼터에고는 이 폴더에서 읽기 전용이다. 파일 수정·업로드 권한은 없고 실행 기록도 16:50부터 시작한다.",`hyunsol|쓰기 권한이 없다는 건 설정과 실제 시도 기록 모두에서 확인했어.
alter|내 첫 실행은 게시 이후야. 나는 이전에 열린 편집기를 누가 조작했는지는 모른다.`),D("credit-queue","예약 공개 목록","computer","16:10 세계가 공개 대상을 공용 폴더의 최신 내보내기 파일로 지정했다. 예약은 16:44 실행됐으며, 수정 뒤 다시 확인한 기록은 없다.",`juhan|누가 버튼을 바로 눌렀다고 생각했는데, 예약 항목이 남아 있어.
minhyuk|예약도 공개다. 제출 전에 최종본을 확인하는 책임은 사라지지 않아.`),D("credit-witness","미디어실 사용표","classroom","16:35~16:45 사용표의 신청자는 전세계 한 명이다. 황민혁은 16:39에 스피커를 돌려주며 세계가 편집기 앞에 있는 것을 봤다.",`minhyuk|세계가 있었다는 건 직접 봤다. 하지만 수정 버튼까지 본 건 아니므로 그렇게 적지는 않겠다.
world|그 시간에 내가 거기 있던 건 맞아.`),D("credit-clock","미리보기 시간대 설정","media","영상 화면의 17:42는 편집기 표시 시간이다. 저장 기록과 같은 순간이며 표시 설정만 한 시간 빠르다.",`taehun|창밖 그림자로 한 시간을 단정할 수는 없어. 설정을 확인했더니 표시 시간이 다르더라.
player|화면에 찍힌 숫자 하나로 알리바이를 만들 수는 없겠네.`)],debates:[{title:"화면 속 한 시간",claims:[{speaker:"taewoo",text:"영상은 17시 42분에 수정됐어. 그때 세계는 합주 중이었잖아."},{speaker:"taehun",text:"보이는 숫자와 실제 저장 시각을 따로 봐야 해."},{speaker:"world",text:"합주 때 내 휴대폰은 가방에 있었어."}],target:0,evidence:"credit-clock",reason:"편집기의 표시만 한 시간 빠르다. 실제 수정은 16:42이며 합주 알리바이와 겹치지 않는다.",hint:"영상의 화면 시계와 파일 기록의 기준이 같은지 확인해."},{title:"AI에게 붙은 이름",claims:[{speaker:"hyunsol",text:"자료를 읽을 수 있다는 사실만으로 수정 권한은 증명되지 않아."},{speaker:"minhyuk",text:"공용 컴퓨터에서 나온 자료라면 얼터에고가 크레딧을 바꿨을 수도 있다!"},{speaker:"juhan",text:"내가 작성한 권한 설정도 실제 로그와 함께 확인해 줘."}],target:1,evidence:"credit-permission",reason:"얼터에고의 실행은 게시 뒤에 시작됐고 해당 폴더에 쓰기 권한이 없다. 수정자로 지목할 근거가 없다.",hint:"할 수 있는 기능과 실제 시작 시각, 두 가지를 함께 확인해."},{title:"게시 버튼의 주인",claims:[{speaker:"junyeon",text:"게시 시각에 누가 자리에 있었는지도 알아야 해."},{speaker:"seoyul",text:"원본과 공개본이 다르다는 건 확실해."},{speaker:"world",text:"16시 44분에는 내 손이 키보드에 없었으니까 공개에도 내 책임은 없어."}],target:2,evidence:"credit-queue",reason:"세계가 설정한 예약 공개는 최신 내보내기 파일을 자동으로 게시했다. 버튼을 누르지 않은 순간에도 예약 설정의 책임은 남는다.",hint:"실행 시각보다 먼저 설정한 작업이 있었어."},{title:"한 사람의 작품",claims:[{speaker:"world",text:"처음부터 내가 혼자 준비한 곡이었어. 크레딧은 정리한 것뿐이야."},{speaker:"seoyul",text:"끝까지 들은 다음에 원본을 다시 열어 줘."},{speaker:"minhyuk",text:"장소 사용표는 작업의 기여도를 설명하지 못한다."}],target:0,evidence:"credit-source",reason:"두 사람이 함께 승인한 원본에는 각자의 역할이 구분돼 있다. 크레딧 삭제는 원래 사실을 정리한 행위가 아니다.",hint:"처음 승인된 버전과 나중에 바뀐 버전을 비교해."}],sequence:["함께 적은 크레딧으로 원본 저장","최신 내보내기 파일의 예약 공개 설정","미디어실에서 크레딧 레이어 변경","바뀐 파일이 예약 시각에 게시"],culprit:"world",motives:["서율의 이름을 지우면 자신이 무대에서 밀려나지 않을 거라 생각했다.","얼터에고에게 수정 권한을 넘기려 했다.","고장 난 시계를 수리하려 했다."],motive:0,closing:B(`world|내 목소리보다 서율의 편곡 얘기가 먼저 나오는 게 싫었어. 잠깐 이름을 가리면 나를 먼저 보겠지 싶었고.
seoyul|잠깐이라도, 그건 내 이름이야.
world|알아. 예약까지 그대로 나갈 줄 몰랐다는 말은 변명이야. 바꾼 건 나니까.
player|정정문에 누가 무슨 일을 했는지 적자. 서율한테 용서까지 예약해 달라고 하지는 말고.
minhyuk|정정본과 원본 링크를 함께 올린다. 타인의 작품을 바꿀 때는 새로 동의를 받는다.
junyeon|나도 노트에 이름을 지웠던 적이 있어. 누구한테 보여 주기 부끄러워서. 그래도 남의 이름을 지울 수는 없겠네.
juhan|얼터에고가 원본 비교를 보관할게. 공개 범위는 두 사람이 직접 정해 줘.
world|{name}, 다음엔 네가 나를 보고 있는지 파일로 확인하려고 하지 않을게. 그냥… 직접 물어볼래.
seoyul|다음 합주에서 마지막 마디는 내가 정할게. 거기서 다시 시작하자.
narrator|판결은 끝났지만 관계는 한 문장으로 회복되지 않았다. 다음 만남에서 지켜야 할 약속이 생겼다.`)},{id:"absence",number:2,chapter:6,title:"닫힌 교실의 결석자",subtitle:"사라진 반장 · 기록에 없는 출구",opening:B(`narrator|시설 점검이 끝나도 민혁이 돌아오지 않았다. 출입 기록은 반장이 교실에 들어간 뒤 멈춰 있었다.
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
player|그럼 학급재판에서 밝힐 건 누가 사라졌는지가 아니라, 왜 기록만 보면 사라진 것처럼 보였는지야.`),evidence:[D("absence-badge","교실 출입 기록","classroom","17:22 황민혁의 정문 입실이 기록됐다. 정문 퇴실 기록은 없으며, 기록 범위는 정문 카드 리더뿐이다.",`alter|이 파일의 감시 범위는 정문 하나야. “교실의 모든 출구”라는 필드는 없어.
juhan|로그에 없는 움직임을 없었다고 단정하면 안 돼.`),D("absence-door","연결문 점검표","library","교실과 도서관 사이 보조문은 17:20~17:50 센서 점검 중이었다. 문 자체는 안에서 열 수 있었고 통행 금지 표시는 없었다.",`taehun|문 옆에 붙은 종이에 점검 범위가 적혀 있어. 잠금 점검이 아니라 기록 장치 점검이야.
player|센서가 꺼진 길로 나갔다면 정문 기록이 비어 있어도 이상하지 않겠네.`),D("absence-nurse","보건실 확인서","classroom","보건교사 확인: 17:29 민혁이 어지럼증을 느낀 준연과 함께 방문했다. 17:46까지 두 사람 모두 보건실에 있었다.",`junyeon|내가 먼저 말했어야 했는데… 민혁이 다른 애들한테 내 상태를 함부로 말하지 않겠다고 해서.
minhyuk|걱정하게 만든 건 내 책임이다. 보호할 개인정보와 알릴 안전 상태를 구분했어야 했다.`),D("absence-test","점검 예외 설정","computer","17:10 최현솔이 센서의 점검 예외를 적용했다. 변경은 허가된 점검 범위 안이었지만 학급 안내에 적힌 “모든 통행 기록”을 정정하지 않았다.",`hyunsol|승인받은 설정은 맞아. 하지만 안내가 바뀌었는지 확인 안 했어.
minhyuk|우리는 모든 문이 기록된다고 믿고 있었지. 그 전제를 누가 확인했어야 하는지 짚자.`),D("absence-mail","반장 이름의 알림 헤더","computer","17:36 메시지는 민혁의 휴대폰이 아니라 교실 공용 PC의 예약 작업에서 생성됐다. 표시 이름은 자유롭게 설정된 문자열이다.",`juhan|이름만 “황민혁”이고 인증된 개인 발신 서명이 없어.
world|그럼 이름을 믿고 민혁이 교실 안에서 보냈다고 생각한 게 틀렸네.`),D("absence-phone","꺼진 휴대폰","library","민혁의 휴대폰은 17:18에 배터리가 소진됐다. 마지막 충전 알림을 민혁과 서율이 함께 확인했으며 메시지는 그보다 나중에 도착했다.",`seoyul|보조 배터리를 가져다주려 했는데 이미 민혁이 준연이랑 나갔어.
minhyuk|다음에는 담임께 짧게라도 이동 사실을 알리겠다.`)],debates:[{title:"기록되지 않은 출구",claims:[{speaker:"world",text:"정문 퇴실 기록이 없으니 민혁은 17시 46분까지 교실에 남아 있었어."},{speaker:"taehun",text:"출입 기록이 어디까지 보는지 확인해야 해."},{speaker:"hyunsol",text:"센서 점검과 잠금은 다른 작업이야."}],target:0,evidence:"absence-door",reason:"보조문은 기록 센서만 점검 중이었고 통행이 가능했다. 정문 기록만으로 교실에 남아 있었다고 단정할 수 없다.",hint:"출입구와 기록 장치의 범위가 같지 않아."},{title:"표시 이름의 함정",claims:[{speaker:"taewoo",text:"불안해서 여러 번 메시지를 읽었어."},{speaker:"minhyuk",text:"내 이름으로 왔으니 17시 36분 메시지는 내 휴대폰에서 보낸 것이겠지."},{speaker:"juhan",text:"나는 이름이 아니라 헤더를 확인했어."}],target:1,evidence:"absence-mail",reason:"메시지는 공용 PC의 예약 작업이 생성했다. 화면에 표시된 이름은 실제 기기나 개인 인증을 증명하지 못한다.",hint:"보낸 사람의 이름과 발신 기기를 구분해."},{title:"안전이 확인된 시간",claims:[{speaker:"junyeon",text:"보건실에서 같이 기다렸어."},{speaker:"seoyul",text:"선생님 확인서를 회의 자료에 넣자."},{speaker:"hyunsol",text:"아무도 민혁을 직접 못 봤으니 17시 29분의 위치는 알 수 없어."}],target:2,evidence:"absence-nurse",reason:"보건교사의 방문 확인서와 준연의 동행 증언이 같은 시각을 가리킨다. 민혁의 안전과 장소는 이미 확인할 수 있다.",hint:"학생끼리의 추측 외에 확인 가능한 기록이 있어."},{title:"잘못 전달된 전제",claims:[{speaker:"hyunsol",text:"점검은 허가받았으니 “모든 문을 기록한다”는 안내도 그대로 정확해."},{speaker:"minhyuk",text:"허가받은 작업이어도 통행 안내는 바뀌어야 한다."},{speaker:"alter",text:"나는 누락된 로그를 만들어 채우지 않을 거야."}],target:0,evidence:"absence-test",reason:"허가는 점검 자체에 대한 것이다. 실제로 보조문 기록이 중지됐으므로 모든 통행을 기록한다는 안내는 정정해야 했다.",hint:"작업의 허가와 안내의 정확성은 따로 확인해."}],sequence:["현솔이 보조문 센서 점검 예외 적용","민혁이 정문으로 교실 입실","민혁과 준연이 보조문으로 보건실 이동","공용 PC가 반장 이름의 예약 메시지 발송"],culprit:"hyunsol",motives:["점검이 허가됐다는 이유로 통행 안내의 정정을 확인하지 않았다.","민혁을 납치해 발표를 취소하려 했다.","얼터에고가 모든 출입 기록을 지웠다."],motive:0,closing:B(`hyunsol|점검 자체가 맞으면 나머지도 맞을 거라고 생각했어. 안내문은 내가 다시 확인할게.
minhyuk|나도 안전 상태를 알리지 않은 점을 고치겠다. 규율을 지키는 사람이라고 보고까지 생략할 수는 없지.
junyeon|내가 어지러웠다는 걸 모두한테 설명하지 않아도, 안전하게 돌아온다는 건 말할 수 있었네.
taewoo|앞으로는 무서운 이야기를 먼저 붙이지 않을게. 내가 걱정한 만큼 빨리 소문도 냈어.
world|근데 예약 메시지, 첫 사건의 예약 공개랑은 별개잖아. 누가 왜 그런 문장을 준비했지?
juhan|맞아. 그건 아직 해결되지 않았어. 파일을 보존할게. 이름을 바꿔 발송하는 옛 작업이 남아 있는 것 같아.
alter|모르는 부분은 빈칸으로 남겼어. 그 빈칸이 다음에 확인할 일이야.
minhyuk|{name}, 아까 나를 탓하기 전에 안전부터 확인해 줘서 고맙다. …반장에게도 그런 순서가 필요했어.
narrator|민혁이 반장 완장을 다시 고쳐 찼다. 이번에는 내가 괜찮은지 먼저 물었다.`)},{id:"echo",number:3,chapter:10,title:"얼터에고는 협박하지 않는다",subtitle:"사칭 메시지 · 우리 반의 마지막 논파",opening:B(`narrator|밤의 공용 PC에 여덟 명의 이름이 차례로 떴다. “발표를 포기하지 않으면 비밀을 공개한다.”
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
narrator|주한이 모니터를 돌려 놓았다. 커서가 “다시 시작된 작업”이라는 폴더 위에서 멈췄다.`),evidence:[D("echo-clock","최초 협박의 실행 시각","computer","첫 사칭 메시지는 17:36 발송됐다. 얼터에고의 로컬 실행은 17:40 시작됐으며 이전 실행 프로세스는 없었다.",`alter|나는 17시 40분 이후 받은 파일만 확인했어. 그전의 발신 행위는 내 실행 기록에 없어.
juhan|기록이 없다는 말만 하지 않을게. 시작된 프로세스와 실행 권한도 같이 봐 줘.`),D("echo-acl","서로 다른 발송 권한","computer","얼터에고는 오프라인 분석 폴더만 읽는다. 사칭 발송은 별도 예약 작업 DEMO-PRESSURE가 학교 내부 알림 계정으로 실행됐다.",`hyunsol|분석기와 발송기가 분리돼 있어. 같은 얼굴 파일을 쓰는 게 같은 프로그램이라는 뜻은 아니야.
player|발신 권한을 가진 작업을 찾아야겠네.`),D("echo-template","작년 시연용 문장","library","작년 발표 자료에 익명 메시지의 표현이 그대로 적혀 있다. 민혁의 이름과 “순서를 지켜”는 가상 인물 필드의 시험값이었다.",`taehun|예전 시연에서는 위험한 메시지를 구별하는 교육 예시였어. 실제 전송은 중지하라고 적혀 있네.
minhyuk|내 이름이 입력돼 있다는 이유로 내 의도를 읽었다고 생각하지 마라.`),D("echo-resume","복구 작업의 체크 항목","computer","준연이 제출한 복구 요청에는 “예약 작업도 함께 복원”이 선택돼 있다. 17:30 재개됐고 작업 설명을 펼친 기록은 없다.",`junyeon|내 이름이 빠진 보고서를 되찾으려고 했어. 함께 복원이라는 말에 그냥 체크했어.
juhan|그 버튼이 뭘 되살리는지 나한테 물어봤으면 같이 확인할 수 있었어.`),D("echo-address","수신 목록의 범위","media","수신자는 지난주 공개 테스트용 1반 주소록과 일치한다. 주한의 개인 대화나 학생의 비공개 파일에서 추출한 자료는 없다.",`world|비밀을 다 안다는 문장이니까 정말 아는 줄 알았어.
seoyul|구체적으로 보이는 문장을 받아도 출처를 확인해야겠네.`),D("echo-hash","AI 얼굴 파일의 복사본","computer","사칭 작업은 예전 시연 자료에 포함된 얼굴 이미지 복사본을 사용했다. 현재 얼터에고의 실행 파일을 호출하지 않는다.",`alter|나처럼 생긴 얼굴을 띄우는 건 나를 실행하는 것과 달라.
juhan|내 말투를 남겼다고 내 의지까지 복사한 건 아니야. 얼굴만 복사했다면 더더욱.`),D("echo-stop","중지 뒤의 대기열","computer","담당 교사가 예약 작업을 중지하자 추가 메시지는 멈췄다. 얼터에고는 그대로 실행 중이며 원본 비교에 응답한다.",`minhyuk|중지는 담당 교사가 확인했다. 학생끼리 시스템 권한을 더 만지지 않는다.
hyunsol|발송기만 멈췄는데 분석기는 남았어. 두 동작이 분리돼 있다는 확인이야.`)],debates:[{title:"같은 얼굴, 같은 의도?",claims:[{speaker:"taewoo",text:"주한의 얼굴이 뜨니까 지금 실행 중인 얼터에고가 문장을 만든 거야."},{speaker:"juhan",text:"그 얼굴을 사용하는 프로그램을 확인해 줘."},{speaker:"seoyul",text:"화면의 외형은 실행 파일 이름을 보장하지 않아."}],target:0,evidence:"echo-hash",reason:"사칭 작업은 얼굴 이미지 복사본만 썼다. 현재 얼터에고를 호출하거나 그 판단을 사용하지 않았다.",hint:"얼굴을 띄우는 파일과 생각을 계산하는 프로그램은 같은 자료가 아니야."},{title:"시작되기 전의 발신",claims:[{speaker:"world",text:"협박은 17시 36분부터지만 AI는 분명 먼저 실행되어 있었을 거야."},{speaker:"hyunsol",text:"실행 시각을 가정으로 채우면 안 돼."},{speaker:"alter",text:"내 기록을 확인할 수 있게 원본을 보존했어."}],target:0,evidence:"echo-clock",reason:"현재 얼터에고 프로세스는 17:40 시작됐다. 최초 발신은 그보다 빠르므로 해당 실행이 메시지를 만들었다는 주장은 성립하지 않는다.",hint:"원인이라고 지목한 동작이 결과보다 먼저 있었는지 확인해."},{title:"알고 있다는 협박",claims:[{speaker:"minhyuk",text:"협박 문장을 그대로 공개하면 다른 학생도 겁먹을 수 있다."},{speaker:"junyeon",text:"여덟 명을 골라 보냈으니 누군가 비공개 대화를 전부 읽었다는 뜻이야."},{speaker:"taehun",text:"선택된 주소록부터 살펴보자."}],target:1,evidence:"echo-address",reason:"수신자는 공개 테스트 주소록과 같다. 포괄적인 협박 문장이 개인 대화 접근이나 실제 비밀 보유의 증거가 되지는 않는다.",hint:"수신자 선택이 정말 비밀 자료를 필요로 했는지 봐."},{title:"복구의 범위",claims:[{speaker:"junyeon",text:"보고서만 돌려받으려 했으니까 내가 고른 복구는 다른 작업을 켜지 않았어."},{speaker:"juhan",text:"의도와 선택한 항목이 같은지 확인하자."},{speaker:"hyunsol",text:"복원 요청 자체가 남아 있어."}],target:0,evidence:"echo-resume",reason:"요청에는 예약 작업 복원도 선택돼 있다. 보고서만 되찾으려 한 마음과 실제로 재개한 기능은 다르다.",hint:"바랐던 결과가 아니라 실제 선택한 항목을 확인해."},{title:"사라지지 않은 목소리",claims:[{speaker:"seoyul",text:"주한은 설명할 수 있어. 대신 답변을 맡길 필요는 없어."},{speaker:"minhyuk",text:"얼터에고를 삭제해야만 협박이 멈춘다."},{speaker:"alter",text:"발송기가 멈춘 뒤에도 나는 여기서 자료를 비교하고 있어."}],target:1,evidence:"echo-stop",reason:"교사가 사칭 예약 작업을 중지하자 발신이 멈췄다. 현재 얼터에고는 분석만 수행하며 계속 동작하고 있다.",hint:"어떤 동작을 멈췄을 때 문제가 실제로 멈췄는지 봐."}],sequence:["준연이 예약 작업을 포함한 복구 요청","교사가 승인한 복구가 옛 시연 작업 재개","예약 작업이 복사된 얼굴로 메시지 발송","주한이 로컬 얼터에고를 실행해 자료 비교"],culprit:"junyeon",motives:["자기 이름이 빠진 연구 기록을 복구하면서 예약 작업의 범위를 확인하지 않았다.","주한의 정체를 폭로하고 싶었다.","세계가 다른 반 학생에게 주소록을 판매했다."],motive:0,closing:B(`junyeon|내 이름을 되찾는 일이라서 다른 칸을 제대로 못 봤어. 겁먹게 만든 메시지에 내 책임도 있어.
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
narrator|사이언스 페어까지의 시간표가 다시 펼쳐졌다. 조사로 알게 된 사실과 연애로 확인할 마음은 같은 노트의 다른 페이지에 남았다.`)}],Sr=[{...Xe[0],chapter:0,number:1},kr,{...Xe[1],chapter:2,number:3},wr,{...Xe[2],chapter:4,number:5,closing:[...Xe[2].closing,...Nr]}],R=(e,t,s,r)=>({text:e,reply:B(t),affection:s,trust:r});B(`narrator|컴퓨터실의 끝자리에서 누군가 작게 손을 흔들었다. 민트색 가디건 아래에 교복 리본이 단정하게 매여 있었다.
juhan|이주한이야. 네 자리를 찾는 거면 옆자리 비었어. 소음이 덜 들리는 자리라… 나도 여기 좋아해.
player|고마워. 아까 파일 비교 프로그램 얘기 했잖아.
juhan|민혁은 내가 말하기 어려워하면 먼저 말을 꺼내 줘. 가끔은 내가 할 수 있는 말도 대신해서, 연습 중이야.
player|연습?
juhan|내 목소리로 설명하는 거. 내가 조용하다는 이유로 가끔 남들이 내 생각까지 대신 설명하려고 해. 그냥 나한테 물어봐 줬으면 좋겠는데.
narrator|주한의 손이 키보드에서 잠깐 멈췄다. 나는 모니터가 아니라 주한을 바라봤다.
juhan|네가 궁금하면 코드부터 보여 줄까? 잘하는 걸 먼저 보여 주면 조금 덜 떨릴 것 같아.`),R("빈 옆자리에 앉아 주한이 먼저 설명하고 싶은 기능을 고르게 한다.",`player|네가 제일 먼저 보여 주고 싶은 걸로 하자. 질문은 설명이 끝난 다음에 할게.
juhan|그럼… 여기. 질문을 기다려 주는 기능이야. 이름만 보면 별거 아닌데 나한텐 중요해.`,12,12),R("얼터에고가 대신 소개하도록 해 달라고 한다.",`player|AI가 네 소개를 해 주면 더 빠르지 않을까?
juhan|빠르겠지. 그런데 이번엔 내가 소개하려고 했어. 그건 다음에 보여 줄게.`,1,-5),R("외모가 코딩 실력과 연결되는지 농담한다.","juhan|그 질문은… 코드하고 관계없어. 오늘은 여기까지 보여 줄게.",-8,-12),B(`juhan|어제 이야기 기억해서 사용자 화면을 바꿨어. 질문하기 전에, 보여 줘도 되는 파일인지 먼저 묻게 했어.
alter|안녕, {name}. 주한은 네가 설명을 기다려 준 시간을 개발 메모에 적었어.
juhan|그건 말하지 말라니까… 아니, 삭제해야 하는 비밀은 아니지만.
player|네 메모도 공개 범위를 정할 수 있잖아.
juhan|맞아. 내가 가르친 기능을 내가 안 지켰네.
alter|나의 말투는 주한의 기록에서 배웠어. 기억과 책임은 같지 않아. 내가 답했다고 주한이 동의한 것은 아니야.
narrator|주한이 내 눈을 보고 모니터를 잠갔다. 화면이 꺼지자 컴퓨터실이 조금 더 조용해졌다.
juhan|내가 만든 나하고 진짜 나, 헷갈리지 않을 자신 있어?`),R("화면을 끈 주한에게 오늘 개발하면서 기뻤던 순간을 묻는다.",`player|지금 웃은 사람은 너잖아. 오늘 제일 기뻤던 순간을 네 말로 들려줘.
juhan|네가 기능을 칭찬하기 전에 나한테 물어본 순간. 방금이야.`,14,12),R("AI가 더 자신 있게 말하니 AI와 얘기하겠다고 한다.","juhan|그러면 다시 켜 줄게. …나는 잠깐 저장할 게 있어서.",0,-10),R("주한의 개인 메모는 공개하지 않는 설정을 함께 확인한다.","juhan|나를 부끄러워해서 숨기는 게 아니라 내가 정하는 거네. 그 차이가 좋아.",10,14),B(`narrator|발표 연습에서 주한의 첫 문장이 두 번 끊겼다. 주한은 준비된 AI 설명 화면을 열려다 손을 거뒀다.
juhan|혼자 있으면 다 말할 수 있어. 사람들이 내 모습부터 보고 있으면 어느 문장부터 꺼낼지 모르겠어.
player|나한테 연습해 볼래?
juhan|좋아. 네가 눈을 피하지 않으면… 조금 더 떨릴지도 모르지만.
narrator|주한이 크게 숨을 들이마셨다. 다음 문장은 화면의 안내문보다 조금 느렸고, 훨씬 또렷했다.
juhan|이 프로그램은 내 대신 마음을 말해 주는 장치가 아닙니다. 사람이 직접 말할 시간을 만들어 주는 도구입니다.
player|그 문장 좋다.
juhan|마지막 문장은 발표문에 없는데. 너랑 있을 때 설명이 끝나는 게 조금 아쉬워.`),R("발표가 끝난 뒤에도 함께 있을 시간을 먼저 약속한다.",`player|그럼 연습 끝나고도 같이 있어. 이번에는 발표문 없이.
juhan|응. 마지막 문장을 미리 적어 놓지 않아도 되는 약속이네.`,16,12),R("주한이 떨릴 때 바로 AI로 바꿔 주겠다고 한다.","juhan|바꿀지 말지는 내가 고르고 싶어. 떨리는 채로 끝까지 할 수도 있으니까.",2,-6),R("첫 문장을 천천히 다시 시작할 수 있는 신호를 정한다.","juhan|그 신호는 네가 재촉하지 않는다는 뜻으로 기억할게.",12,15),B(`narrator|얼터에고 사건 뒤 주한이 새 개발 파일을 보여 줬다. 제목 옆에 자신의 이름을 지우지 않고 적어 두었다.
juhan|AI가 무서워서 내 이름도 가릴까 했어. 그러면 누가 설명을 책임지는지 더 모르게 되겠지.
player|오늘은 네 이름으로 설명했잖아.
juhan|네가 듣고 있어서. 한 사람의 시선이 부담이 아니라 힘이 될 수도 있다는 걸 이제 알았어.
narrator|주한이 책상 위로 손을 내밀다 멈췄다. 손등에 모니터의 작은 불빛이 닿았다.
juhan|네가 날 좋아한다면, 용감해진 다음의 나만 좋아하는 건 아니었으면 해. 아직 떨리는 날도 많을 테니까.
player|오늘도 떨려?
juhan|많이. 그래서 네 대답을 AI한테 맡길 수가 없어.`),R("내 손을 먼저 내밀고, 떨리는 날에도 주한의 대답을 기다리겠다고 말한다.",`player|나는 지금의 네가 좋아. 떨리는 날에는 천천히 말해 줘.
juhan|그럼 나도 직접 말할게. 좋아해, {name}.`,18,16),R("확신이 없으니 오늘은 친구로 함께하겠다고 솔직히 말한다.","juhan|말해 줘서 고마워. 네 마음까지 자동 완성할 수는 없으니까.",6,12),R("주한이 자신감 있게 행동할 때만 만나겠다고 한다.","juhan|그 조건이면 내가 아닌 다른 버전을 기다리는 것 같아. 그 약속은 하지 않을래.",-12,-15),B(`narrator|민혁은 교실 문 옆에서 출석표를 들고 있었다. 어두운 피부 위로 오후의 햇빛이 닿았고, 붉은 완장의 매듭은 빈틈없이 정리돼 있었다.
minhyuk|전학생, {name}! 교실과 실험실의 출입 규칙은 확인했나? 안내가 부족했다면 내가 다시 설명하겠다.
player|민혁이라고 불러도 돼?
minhyuk|…당연하지. 이름을 부르는 데 허가는 필요 없다. 다만 점호 중에는 대답부터 해라!
narrator|뒤쪽에서 태우가 웃었다. 민혁은 웃는 쪽을 짚다가 다시 나를 돌아봤다.
minhyuk|반장이 무서워서 질문을 못 하는 반은 제대로 운영되는 반이 아니다. 모르는 건 물어봐.
player|그럼 반장도 모르는 게 있어?
minhyuk|있다. …전학생이 친해지고 싶어서 이름을 물은 건지, 안내를 받으려고 물은 건지는 아직 모르겠군.`),R("친해지고 싶어서 물었다고 말하고, 점호가 끝날 때까지 옆에서 기다린다.",`player|친해지고 싶어서 물었어. 네 일이 끝나면 같이 교실을 둘러볼래?
minhyuk|그렇다면… 업무 종료 후의 약속으로 적겠다.`,12,12),R("완장이 멋지다며 몰래 사진을 찍는다.","minhyuk|찍기 전에 물어봐라! 칭찬이라고 해도 동의가 빠지면 안 된다.",1,-10),R("답답한 규칙은 내가 알아서 무시하겠다고 한다.","minhyuk|규칙에 문제가 있으면 바꾸자고 말해. 다른 사람의 안전을 혼자 대신 결정하지는 마라.",-7,-10),B(`narrator|민혁의 일정표에는 쉬는 시간이 지우개로 세 번 지워져 있었다.
player|점심도 회의 시간이야?
minhyuk|페어 준비와 출석 점검을 동시에 하려면 이렇게 해야 한다. 반장이 빠질 수는 없으니까.
player|다른 사람이 점심을 거르면 뭐라고 할 거야?
minhyuk|제때 식사하고 쉬어야… 아.
narrator|민혁이 일정표를 내려다봤다. 정답을 알고도 자신에게 적용하지 못한 문장 앞에서 말끝이 작아졌다.
minhyuk|나한테도 같은 규칙을 적용해야겠군. 그런데 혼자 쉬려니 괜히 일을 빼먹은 기분이 든다.
player|그럼 같이 쉬자.
minhyuk|함께 쉬는 약속이라면 지키기 쉽겠네. …내가 널 기다리는 것도 일정에 적어도 되나?`),R("출석표를 내려놓게 하고 함께 점심을 먹는다.",`player|오늘 점심의 담당 업무는 밥 먹기야. 우리 둘 다.
minhyuk|좋다! 식사는 임무… 아니, 그 말을 또 했네. 그냥 같이 먹자.`,15,12),R("남은 업무를 전부 대신하고 다음부터 내 허락을 받게 한다.","minhyuk|돕는 것과 내 일을 통제하는 건 다르다. 내가 쉬는 시간도 내가 정할 수 있어야 해.",0,-8),R("쉬는 시간은 민혁의 빈칸으로 남겨 두자고 제안한다.","minhyuk|아무것도 증명하지 않아도 되는 칸인가. …네가 옆에 있으면 그걸 연습할 수 있겠다.",12,14),B(`minhyuk|교실에서 사라진 날, 네가 제일 먼저 내 안전을 물었지. 왜 보고를 안 했느냐고 묻기 전에.
player|걱정됐으니까.
minhyuk|나는 걱정하면 더 큰 목소리로 규칙을 말한다. 그런데 듣는 사람은 내가 화가 난 줄 알더군.
narrator|민혁이 완장을 벗어 책상에 놓았다. 손목에 남은 자국을 한 번 문지른 뒤 내 쪽으로 의자를 돌렸다.
minhyuk|지금은 반장으로 묻는 게 아니다. 너도 내가 안 보이면 찾아 줄 건가?
player|물론이지. 네가 혼자 있고 싶은 날이면 먼저 물어볼게.
minhyuk|그건 좋은 원칙이다. 사람을 먼저 확인하고, 규칙은 다음에.
narrator|민혁이 웃다가 입을 다물었다. 평소의 단정한 표정으로 돌아가기까지 한 박자가 길었다.`),R("민혁의 목소리가 커졌을 때 걱정인지 먼저 확인할 둘만의 신호를 정한다.","minhyuk|네가 그 신호를 보여 주면 숨부터 고르겠다. 네가 내 표정을 읽어 주는 게… 좋군.",16,15),R("민혁이 모든 사람에게 다정해야 한다고 요구한다.","minhyuk|모두에게 같은 표정을 지을 수는 없어. 네가 내 서툰 얼굴도 볼 수 있었으면 했다.",1,-5),R("완장을 다시 차기 전에 잠깐 손을 잡아도 되는지 묻는다.","minhyuk|허락을 물은 순서는… 정확하다. 대답은, 좋다.",17,10),B(`narrator|민혁이 접은 종이를 꺼냈다. 제목은 “방과 후 약속안”이었지만 첫 문장 아래에 붉은 수정선이 그어져 있었다.
minhyuk|좋아하는 사람이 꼭 지켜야 할 규칙을 적으려다가 지웠어. 강요하면 약속이 아니니까.
player|지운 자리에 뭐라고 썼어?
minhyuk|“원하면.” 두 글자를 쓰는 데 이상하게 오래 걸렸군.
narrator|민혁이 종이를 내게 건넸다. 자로 맞춘 줄 끝에서 손이 아주 조금 떨렸다.
minhyuk|원하면, 행사 뒤에도 나를 만나 줬으면 한다. 반장으로 필요한 일이 없어도.
player|민혁 자신이 정한 약속이네.
minhyuk|맞아. 그리고… 좋아한다. 이건 회의 안건이 아니니까 투표로 결정하지 않겠다.`),R("나도 좋아한다고 답하고, 다음 만남은 둘이 함께 정한다.",`player|나도 좋아해. 시간도 장소도 같이 고르자.
minhyuk|응. …좋다보다 그 말이 어울리는 약속이네.`,18,16),R("지금은 친구로 곁에 있고 싶다고 솔직히 답한다.","minhyuk|알겠다. 정확한 대답을 해 줘서 고맙다. 네 마음을 규정으로 바꾸지는 않을게.",6,12),R("반장 권한으로 나를 편하게 해 주면 만나겠다고 한다.","minhyuk|그 조건은 받아들일 수 없다. 내가 널 좋아하는 것과 공정해야 하는 일은 함께 지킬 거야.",-12,-15);const Cr={world:[1024,1536],junyeon:[1024,1536],hyunsol:[1145,1374],taewoo:[1145,1374],taehun:[1145,1374],seoyul:[1214,1295],juhan:[1086,1448],minhyuk:[1086,1448]};function Er(e){return`./assets/mystery/cast-${e}.png${e==="juhan"||e==="minhyuk"?"?v=cel-match-3":""}`}function le({id:e,className:t=""}){const[s,r]=Cr[e];return n.jsx("div",{role:"img","aria-label":Ce[e].name,className:`portrait school-portrait ${t}`,style:{"--portrait-ratio":`${s} / ${r}`,"--portrait-aspect":s/r,backgroundImage:`url(${Er(e)})`,backgroundSize:"cover",backgroundPosition:"center 12%"}})}function Ar(e,t){if(t)return"관계 조건 필요";const s=e.filter(r=>r.available).length;return s?`만남 가능 ${s}명`:e.length?e.some(r=>r.waiting)?"재판 후 약속":e.every(r=>r.visited)?"오늘 만남 완료":"지금은 만날 수 없어요":"장소 살펴보기"}const tt=[{id:"research",name:"탐구동",sub:"실험 · 관측 · 프로그래밍",icon:cr,places:["chemistry","computer","observatory","roof"],color:"#8be0d4"},{id:"school",name:"생활동",sub:"교실 · 도서관 · 식당",icon:Le,places:["classroom","hallway","library","cafeteria"],color:"#ffe36e"},{id:"arts",name:"예술동",sub:"연습 · 공연 · 미디어",icon:gt,places:["band","dance","art","media","auditorium"],color:"#ff87b4"},{id:"outdoor",name:"야외",sub:"정문 · 정원 · 산책로",icon:ur,places:["gate","garden","walk"],color:"#aabaef"}];function zr({selected:e,students:t,locked:s,onSelect:r,discoveries:a={}}){const[c,l]=f.useState("all"),o=t.filter(p=>p.available).length,d=Se.find(p=>p.id===e);function h(p){r(p)}return n.jsxs("div",{className:"campus-directory",children:[n.jsxs("div",{className:"campus-controls",children:[n.jsxs("div",{className:"campus-current","aria-live":"polite",children:[n.jsx(sn,{size:15,"aria-hidden":"true"}),n.jsx("span",{children:"선택한 장소"}),n.jsx("b",{children:d.name}),s(e)&&n.jsx(Zn,{size:14,"aria-label":"잠김"})]}),n.jsxs("div",{className:"campus-heading",children:[n.jsx("span",{children:n.jsx("b",{children:"학교 지도"})}),n.jsxs("i",{children:[n.jsx(lr,{size:15}),o,"명"]})]}),n.jsx("div",{className:"campus-filters",role:"group","aria-label":"지도 구역 필터",children:[{id:"all",name:"전체"},{id:"people",name:"친구"},{id:"clues",name:"확인할 곳"},...tt].map(p=>n.jsx("button",{"aria-pressed":c===p.id,onClick:()=>l(p.id),children:p.name},p.id))}),c==="people"&&n.jsx("div",{className:"campus-friend-finder",role:"group","aria-label":"친구가 있는 장소로 이동",children:t.filter(p=>p.available).map(p=>{var j;return n.jsxs("button",{"aria-pressed":e===p.place,onClick:()=>h(p.place),children:[n.jsx("b",{children:p.name}),n.jsx("small",{children:(j=Se.find(b=>b.id===p.place))==null?void 0:j.name})]},p.id)})})]}),n.jsx("div",{className:"campus-zones",children:tt.filter(p=>c==="all"||c==="people"||c==="clues"||c===p.id).map(p=>{const j=Se.filter(m=>p.places.includes(m.id)&&(c!=="people"||t.some(g=>g.place===m.id&&g.available))&&(c!=="clues"||(a[m.id]??0)>0));if(!j.length)return null;const b=p.icon;return n.jsxs("section",{className:"campus-zone",style:{"--zone-color":p.color},children:[n.jsxs("header",{children:[n.jsx(b,{size:18}),n.jsx("div",{children:n.jsx("h3",{children:p.name})})]}),n.jsx("div",{className:"campus-place-grid",children:j.map(m=>{const g=t.filter(v=>v.place===m.id),z=s(m.id);return n.jsxs("button",{className:`campus-place ${e===m.id?"selected":""} ${z?"is-locked":""}`,"aria-pressed":e===m.id,"aria-label":`${m.name}${z?" · 잠김":""}${a[m.id]?` · 확인할 기록 ${a[m.id]}개`:""} · ${g.length?g.map(v=>v.name).join(", "):"아무도 없음"}`,onClick:()=>h(m.id),children:[n.jsx("img",{className:"campus-place-thumb",src:St(m.id),alt:"",loading:"lazy"}),n.jsxs("div",{className:"campus-place-title",children:[z?n.jsx(Zn,{size:13}):n.jsx(sn,{size:13}),n.jsx("b",{children:m.name}),n.jsx(Ne,{size:13})]}),n.jsx("div",{className:"campus-occupants",children:g.length?g.map(v=>n.jsxs("span",{className:v.available?"available":v.visited?"visited":"unavailable",children:[n.jsx(le,{id:v.id}),n.jsx("small",{children:v.name})]},v.id)):n.jsx("small",{className:"campus-quiet",children:"—"})}),!!a[m.id]&&n.jsxs("span",{className:"campus-clue-badge",children:[n.jsx(zn,{size:12}),"확인 ",a[m.id]]}),n.jsx("span",{className:"campus-place-status",children:Ar(g,z)})]},m.id)})})]},p.id)})}),c==="people"&&!o&&n.jsx("p",{className:"campus-empty",children:"지금 만날 수 있는 친구가 없어요."}),c==="clues"&&!Object.values(a).some(p=>!!p)&&n.jsx("p",{className:"campus-empty",children:"새로 확인할 기록이 없어요."})]})}function be(e,t){const s=e.map((l,o)=>({value:l,index:o}));let r=2166136261;for(let l=0;l<t.length;l++)r=Math.imul(r^t.charCodeAt(l),16777619);r=Math.imul(r^r>>>16,2246822507),r=Math.imul(r^r>>>13,3266489909),r=(r^r>>>16)>>>0;const a=()=>{let l=r=r+1831565813>>>0;return l=Math.imul(l^l>>>15,l|1),l^=l+Math.imul(l^l>>>7,l|61),(l^l>>>14)>>>0},c=l=>{const o=Math.floor(4294967296/l)*l;let d=a();for(;d>=o;)d=a();return d%l};for(let l=s.length-1;l>0;l--){const o=c(l+1);[s[l],s[o]]=[s[o],s[l]]}return s}const vn=(e,t,s)=>({kind:"mix",channels:e,moods:t,notes:s}),kn=(e,t,s)=>({kind:"rhythm",gestures:e,pattern:t,bpm:s}),ye=(e,t,s,r)=>({kind:"compose",pieces:e,required:t,footer:s,paper:r}),wn=(e,t,s,r)=>({kind:"debug",code:e,tests:t,patches:s,answer:r}),we=(e,t,s,r)=>({kind:"pack",bag:e,items:t,capacity:s,required:r}),C=(e,t)=>({label:e,size:t}),oe=(e,t,s)=>({input:e,expected:t,actual:s}),Nn=(e,t,s,r)=>({kind:"ratio",components:e.map((a,c)=>({label:a,color:["#637bd1","#e4b165","#81bca6"][c],parts:t[c]})),total:s,unit:"칸",caption:r}),J=(e,t,s,r)=>({kind:"compare",before:e,after:t,rows:s,differences:s.flatMap((a,c)=>a.left!==a.right?[c]:[]),caption:r}),x=(e,t,s=t)=>({label:e,left:t,right:s}),$n=(e,t,s,r)=>({kind:"stars",nodes:e.map((a,c)=>({label:a,x:[8,30,28,57,65,91][c],y:[52,17,83,30,80,47][c]})),edges:[[0,1],[0,2],[1,2],[1,3],[2,4],[3,4],[3,5],[4,5]],start:0,end:5,via:t,blocked:s,caption:r}),w=(e,t)=>({context:e,task:t}),Rr={world:[w(["이어폰 한쪽의 첫 관객","세계가 막 녹음한 세 소리를 들려준다. 공개할 음원이 아니라, 네가 편하게 들을 작은 연주를 같이 만들자는 부탁이다.","세 소리의 크기를 직접 바꾸고 원하는 분위기를 고른 뒤 들어 본다. 음악 취향에 정답은 없다.","이렇게 들으니까 네가 어디를 듣는지 알겠다. 다음 곡도 제일 먼저 들려줄게.","세계는 완성한 설정에 「첫 관객」이라는 이름을 붙인다."],vn(["가까운 기타","낮은 베이스","작은 벨"],["조용한 복도","따뜻한 햇빛","장난스러운 앙코르"],[261.63,130.81,523.25])),w(["목을 쉬게 하는 합주","목이 잠긴 세계가 노래 대신 책상 위 손장단을 제안한다. 큰 소리를 내지 않고도 후렴을 같이 만들 수 있다.","왼쪽·오른쪽·쉼의 짧은 장단을 이어 본다. 순서 모드로 천천히 눌러도 같은 보상을 받는다.","내가 안 불러도 후렴이 있네. 네 박자까지 들어가니까 더 좋다.","세계는 노래를 더 부르지 않고 물을 마신다. 둘의 손장단만 악보에 남는다."],kn(["왼손 톡","오른손 톡","한 박 쉼"],[0,1,0,2,1,2],76)),w(["찍지 않는 날의 작은 티켓","오늘은 카메라를 쉬기로 했다. 세계가 대신 네 손으로 만든 「관객 한 명」 티켓을 갖고 싶다고 한다.","다섯 조각 중 세 개를 배치한다. 「관객 한 명」은 넣고 「사진 없이 기억하기」는 맨 아래에 둔다.","사진보다 네가 오래 만졌네, 이 종이. 구기지 않고 케이스에 넣어야겠다.","세계는 티켓의 빈 뒷면에 너에게만 들려준 후렴을 적는다."],ye(["관객 한 명","작은 기타 그림","창가의 오후","사진 없이 기억하기","손글씨 별표"],0,3,"ONE LISTENER")),w(["두 버전의 앙코르","세계가 관객에게 건넬 곡 소개를 네 옆에 펼친다. 리허설 때 정한 내용과 바뀐 초안을 비교해서, 함께 합의한 부분이 어디까지인지 표시해 보자고 한다.","왼쪽 메모와 오른쪽 초안에서 달라진 칸만 모두 고른다. 같은 내용을 바뀌었다고 표시하면 다시 확인한다.","후렴 말고 내 인사도 기억했네. 그러면 내일 그 부분은 네 쪽 보고 할게.","세계는 달라진 부분을 직접 확인한 뒤, 네가 읽기 쉬운 크기로 최종본을 다시 쓴다."],J("둘이 정한 리허설","인쇄 전 초안",[x("첫 곡","푸른 오후"),x("앙코르","짧은 후렴","전체 곡"),x("인사","연주 후","연주 전"),x("촬영","동의한 사람만"),x("기타 조율","시작 전"),x("관객 자리","둘째 줄","셋째 줄")],"공연 전에 둘이 다시 확인하는 메모")),w(["공연이 끝난 뒤의 한 소절","세계가 공연 녹음 대신 빈 밴드실에서 새 코드를 친다. 큰 무대를 위한 소리가 아니라 네 옆에서 작게 들려줄 버전을 골라 달라고 한다.","세 음색의 크기를 바꾸고 분위기를 고른다. 직접 듣거나 소리 설명을 확인하면 저장할 수 있다.","무대에선 못 들었던 소리네. 네가 이렇게 가까이 앉아서 그런가.","세계는 완성한 소리를 다음 공연 후보가 아닌, 둘이 다시 만날 때 들을 폴더에 남긴다."],vn(["기타의 첫음","낮은 현의 울림","후렴의 끝음"],["조용한 뒷풀이","다음 만남의 예고","조금 더 머무는 저녁"],[220,110,329.63]))],hyunsol:[w(["창가의 같은 색","현솔이 실제 실험 기구를 치운 뒤 태블릿의 색물 모형을 켠다. 방금 본 색을 재현해 보자며, 농도가 아니라 같은 비율부터 확인하자고 한다.","색물과 맑은 물을 1:3 비율로 총 12칸 채운다. +와 −로 조절한다. 실제 약품을 섞는 활동이 아니다.","딱 3칸만 진하게 했네. 감으로 붓지 않고 먼저 나눠 본 거, 좋다.","현솔은 맞춘 화면을 관찰 메모 옆에 놓고 네가 붙였던 색 이름을 조용히 적는다."],Nn(["파란 색물","맑은 물"],[1,3],12,"태블릿 속 가상 색물 · 실제 화학 실험 아님")),w(["취향을 묻는 관찰자","점심을 다 먹은 현솔이 네가 기억하는 자기 취향을 궁금해한다. 방금 나눈 대화를 적은 메모와 일부러 틀리게 적은 카드를 나란히 놓는다.","대화 메모와 카드에서 달라진 항목만 모두 짚는다. 취향은 카드의 추측보다 본인이 한 말을 기준으로 삼는다.","매운 건 못 먹는다고 했지. 말한 걸 기억해 주는 게 결과 맞히는 것보다 좋네.","현솔은 장난 카드를 접고 다음 점심에도 같은 자리를 비워 두겠다고 말한다."],J("직접 들은 취향","장난으로 쓴 카드",[x("매운맛","순한 쪽","매운 쪽"),x("음료","찬 보리차"),x("좋아하는 반찬","감자조림"),x("식사 속도","천천히","아주 빠르게"),x("후식","귤"),x("점심 자리","창가")],"남의 마음을 추측하기 전에 실제로 들은 말부터")),w(["정원 관찰의 준비물","실험실을 정리한 현솔이 이번에는 밖에서 점심시간을 보내자고 한다. 휴대용 관찰 노트와 마실 물만 잊지 않으면 된다고 덧붙인다.","일곱 칸 안에 노트와 물을 넣는다. 실험실 기구나 약품은 가지고 나가지 않는다.","너랑 나갈 때까지 실험이라고 부를 필요는 없겠네. 오늘은 산책.","현솔이 가방 끈을 한 번 확인하고 먼저 정원 쪽 문을 연다."],we("정원 산책 주머니",[C("관찰 노트",2),C("마실 물",2),C("색연필",2),C("작은 간식",2),C("접는 방석",3),C("손수건",1)],7,[0,1])),w(["관찰표의 두 얼굴","교실에서 발표 자료를 접던 현솔이 그림에 맞춰 줄바꿈을 하다가 숫자 칸까지 옮겼다고 한다. 실험 노트 원본과 인쇄용 표를 함께 맞춰 보기로 한다.","숫자·단위·조건 중 원본과 달라진 칸만 고른다. 실제 재측정 결과를 추측해서 덮어쓰지 않는다.","보기 좋게 만드는 데 정신 팔려서 단위까지 옮길 뻔했네. 이건 네가 먼저 봤다.","현솔은 틀린 칸만 고친 뒤 자료를 덮는다. 남은 쉬는 시간은 너와 보내겠다고 한다."],J("관찰 노트","편집한 표",[x("빛 방향","왼쪽"),x("시간","14:10","14:01"),x("온도","22 ℃"),x("관찰 횟수","3회","2회"),x("배경","흰 종이"),x("기록 방식","같은 위치에서")],"평범한 편집 실수 확인 · 사건 자료가 아님")),w(["두 사람 몫의 보라색","정원에서 다음 전시의 색 카드를 보던 현솔이 파랑과 빨강을 같은 방식으로 늘려 보자고 한다. 실험을 다시 시작하는 대신 화면 속 색 조각만 나눠 갖는다.","파랑·빨강·흰색을 2:1:1 비율로 총 16칸 맞춘다. 비율과 전체 양을 동시에 확인한다.","양은 늘었는데 비율은 같네. 다음에도 이렇게 둘이 나눠 맡으면 되겠다.","현솔은 완성한 색 카드 뒷면에 실험 번호 대신 다음에 만날 날짜를 적는다."],Nn(["파랑 조각","빨강 조각","흰색 조각"],[2,1,1],16,"가상 색 조각 · 실제 안료 혼합색을 예측하는 모델 아님"))],taewoo:[w(["첫 여덟 박자 중 네 박자","태우는 방금 맞춘 마지막 포즈 앞에 손동작 네 개를 붙여 보자고 한다. 이번에는 시범만 보는 게 아니라 나란히 한 소절을 완성해 보자는 제안이다.","손동작의 순서를 따라 한다. 박자 도전을 켜면 간격도 맞추지만, 천천히 해도 끝까지 함께할 수 있다.","방금 나 따라 하다가 웃었지? 그게 더 잘 어울리는데.","태우는 어려운 동작으로 넘어가지 않고 방금 둘이 맞춘 부분을 한 번 더 춘다."],kn(["손 위로","옆으로 톡","가슴 앞 박수"],[0,1,2,1],84)),w(["거울이 아니라 같은 쪽","태우가 네 옆에 서서 연습 메모 두 장을 보여 준다. 거울처럼 좌우를 바꿔 따라 하던 부분을 알아챘으니, 이번에는 둘이 같은 방향을 보는 표를 고치자고 한다.","기준 동작표와 복사한 표에서 달라진 박자를 모두 고른다. 좌우는 화면을 보는 사람의 왼쪽·오른쪽이다.","이젠 같은 쪽으로 가네. 부딪힐 걱정 말고 조금만 더 가까이 서도 되겠다.","태우는 맞춘 부분까지만 천천히 걸어 본 뒤, 물병 두 개를 나란히 세운다."],J("같은 방향 기준","옮겨 적은 동작",[x("1박","← 왼발","→ 오른발"),x("2박","● 멈춤"),x("3박","↑ 손 위로"),x("4박","→ 오른발","← 왼발"),x("5박","● 멈춤"),x("6박","↗ 오른쪽 대각선")],"서로 마주 보는 거울 안무가 아닌 나란히 선 기준")),w(["앉아서 만드는 새 후렴","태우는 오늘 무리하지 않고 의자에 앉아 손동작만 짜기로 한다. 네가 한 번 보여 주고 자기가 이어 붙일 수 있는 짧은 후렴이 목표다.","동작을 살펴본 뒤 기억해서 이어 본다. 순서 안내를 켜거나 박자 도전을 끌 수 있다. 다리 동작은 없다.","발 안 써도 재밌네. 네가 만든 마지막 박수는 공연 때도 써도 돼?","태우는 새 안무를 더 늘리지 않고 저장한다. 잠깐 쉬자는 약속도 끝까지 지킨다."],kn(["왼손 펴기","오른손 톡","두 손 박수"],[2,0,1,0,2,1,2],72)),w(["커튼 뒤에서 물병 찾기","공연 준비가 끝난 태우가 대기 가방을 함께 확인한다. 소품을 전부 넣기보다 꼭 필요한 것을 가볍게 가져가기로 했다.","여섯 칸 안에 물과 작은 수건을 넣는다. 나머지는 무대 뒤에서 실제로 쓰고 싶은 물건을 고른다.","과하게 챙기지 않은 거 마음에 든다. 네가 여기 있는 것도 준비물로 쳐도 돼?","태우는 물을 한 모금 마신 뒤 가방을 네 옆에 내려놓는다."],we("커튼 뒤 대기 가방",[C("물병",2),C("작은 수건",1),C("머리끈",1),C("간단한 간식",2),C("큰 스피커",5),C("여벌 티셔츠",3)],6,[0,1])),w(["네가 기억한 마지막 포즈","공연을 마친 태우가 동작표를 정리하며 네가 객석에서 본 장면을 묻는다. 촬영 영상이 아니라 둘이 확인한 표를 기준으로 잘못 옮긴 부분만 찾아본다.","리허설 기준과 새 메모를 비교해 달라진 세부 동작을 고른다. 시간을 재지 않으니 천천히 확인한다.","다른 사람은 마지막 포즈만 보던데, 너는 그 전 동작도 봤네. 좀 뿌듯하다.","태우는 동작표를 가방에 넣고 네 옆으로 온다. 이번에는 연습 말고 같이 걸어가자고 한다."],J("리허설 때의 약속","공연 후 옮긴 메모",[x("시작 위치","왼쪽 뒤"),x("손 방향","손바닥 위","손등 위"),x("멈추는 박자","넷","셋"),x("시선","객석 가운데"),x("마지막 발","나란히","교차"),x("인사","모두 함께")],"연습을 함께 기억하는 동작표"))],taehun:[w(["책갈피 위의 작은 별길","태훈이 문학책의 빈 책갈피에 별 여섯 개를 그린다. 실제 별자리를 외우는 시험이 아니라, 둘이 읽은 문장을 이어 보는 그림이다.","첫 문장에서 좋아한 문장을 지나 마지막 페이지까지 잇는다. 잉크가 번진 별은 피한다.","너는 이 문장을 지나가네. 나도 거기서 조금 오래 멈췄어.","태훈은 연결된 그림 아래에 책 제목과 오늘 날짜를 적는다."],$n(["첫 문장","좋아한 문장","잉크 번짐","쉼표","뒷문장","마지막 장"],1,2,"우리가 만든 책갈피 별그림 · 실제 천문 지도 아님")),w(["책 속 구름과 창밖 구름","관측 대신 도서관에 머문 태훈이 구름 도감의 표시를 종이에 옮긴다. 창밖에서 본 것을 멋진 이름으로 바꾸기 전에, 옮기다 달라진 설명부터 찾아 달라고 한다.","도감의 관찰 항목과 필사 메모를 비교한다. 별명을 떠올리는 것과 관찰 사실을 적는 것은 다른 칸이다.","솜사탕은 별명 칸에 둘게. 네가 구분해 주니까 둘 다 안 지워도 되겠네.","태훈은 과학 메모 아래에 짧은 문장을 덧붙이고, 네가 빌린 책에도 책갈피를 끼워 준다."],J("도감 옆 관찰 항목","태훈의 필사",[x("윤곽","덩어리 모양"),x("색","밝은 흰색","짙은 회색"),x("사이 하늘","보임"),x("움직임","천천히 동쪽"),x("관찰 시각","12:40","12:04"),x("개인적인 별명","솜사탕")],"구름 이름을 단정하는 시험이 아닌 관찰 메모 대조")),w(["옥상에서 읽을 한 페이지","태훈이 네게 소리 내 읽어 줄 짧은 글을 고른다. 본문 앞뒤에 어떤 여백을 둘지 함께 정해 보자고 한다.","「함께 읽을 문장」을 넣고 「작가와 책 제목」을 마지막에 둔다. 남은 한 칸은 읽기 전이나 읽은 뒤의 기분으로 고른다.","그 여백이면 말을 조금 늦게 끝내도 되겠네. 나한테는 좋은 편집이야.","태훈은 네가 만든 순서대로 천천히 한 페이지를 읽는다."],ye(["함께 읽을 문장","바람 소리의 여백","작은 구름 스케치","작가와 책 제목","서로의 짧은 감상"],0,3,"ONE PAGE, TWO READERS")),w(["두 가지 하늘의 약속","태훈이 맑으면 관측, 흐리면 독서라는 두 계획을 노트에 그린다. 오늘은 흐린 쪽으로 가기로 했으니 젖은 계단을 피해서 책 읽을 자리까지 선을 잇는다.","관측동 입구에서 구름 메모를 확인하고 독서 자리까지 연결한다. 젖은 계단은 지나지 않는다.","관측 못 했다고 끝나는 길이 아니네. 네가 기다리는 자리가 남아 있어서 좋다.","태훈은 지도를 접고 망원경을 덮는다. 대신 네가 골라 준 책을 들고 일어난다."],$n(["관측동 입구","구름 메모","젖은 계단","연결 복도","게시판","독서 자리"],1,2,"흐린 날의 대체 계획 · 실제 별자리 지도가 아님")),w(["오늘을 틀리지 않게 적기","별이 잘 보이지 않는 산책길에서도 태훈은 기록장을 편다. 멋있게 고친 문장과 실제 본 것을 나란히 적고, 사실이 바뀐 칸만 같이 짚어 보자고 한다.","처음 관찰한 내용과 다듬은 글을 대조한다. 표현이 같지 않은 게 아니라 기록 값이 달라진 항목을 찾는다.","별이 안 보였다는 말도 남기자. 그래야 너랑 걸은 얘기를 꾸며 쓰지 않아도 되니까.","태훈은 사실을 고친 문장 옆에 감상을 따로 적는다. 마지막 줄은 네가 직접 채우도록 남긴다."],J("처음 관찰","정리한 기록",[x("달","구름에 가림"),x("밝은 별","확인 못 함","세 개 확인"),x("바람","약함"),x("기록 장소","산책로"),x("함께 걸은 시간","20분","12분"),x("하늘 상태","흐림")],"보이지 않은 것은 보았다고 기록하지 않기"))],seoyul:[w(["네 시선으로 만드는 엽서","서율이 빈 엽서를 건넨다. 예쁘게 정렬하는 시험이 아니라, 네가 먼저 본 장면을 앞에 두는 작업이라고 말한다.","「창가의 오후」와 마지막의 「우리의 서명」을 넣는다. 나머지 한 칸은 네 시선대로 고른다.","나는 손부터 그렸는데 너는 창부터 봤네. 같이 보면 그림이 넓어지는구나.","서율이 네 배치를 바꾸지 않고 그 위에 얇은 선을 더한다."],ye(["창가의 오후","책상 위 손","작은 건반 그림","우리의 서명","열린 스케치북"],0,3,"A POSTCARD FOR TWO")),w(["건반과 빗소리 사이","밴드 연습을 마친 서율이 짧은 건반 소리를 세 가지 음색으로 나눠 놓았다. 그림처럼 소리에도 여백을 만들어 보고 싶다고 한다.","세 음색의 비율을 바꿔 보고 곡의 풍경을 고른다. 작게 남겨 둔 소리가 있어도 괜찮다.","다 채우지 않았네. 그 빈자리 마음에 든다. 너도 여기 앉아 있을 자리 같아서.","서율은 네가 남긴 여백만큼 다음 건반을 늦게 누른다."],vn(["느린 건반","둥근 낮은음","가느다란 종"],["비 오는 창가","맑아진 오후","집에 가기 전"],[329.63,164.81,659.25])),w(["겹친 선을 찾아서","서율이 둘이 그린 스케치의 복사본을 들고 웃는다. 원본의 빈 공간은 살리고 싶다며 옮기는 동안 달라진 구성 요소만 먼저 찾아 달라고 한다.","원본과 복사본에서 위치·개수가 달라진 요소를 고른다. 취향 평가가 아니라 의도한 구성을 복원하는 작업이다.","그 빈자리를 알아봤네. 나도 거기는 안 채우고 싶었어. 네 시선이 머물 자리 같아서.","서율은 네가 고른 차이를 고친 뒤, 원래 선 옆에 너의 짧은 서명을 부탁한다."],J("함께 그린 원본","옮긴 스케치",[x("창","왼쪽 위"),x("컵","두 개","한 개"),x("책","오른쪽 아래"),x("빈 의자","창 옆","책상 뒤"),x("별 낙서","다섯 개"),x("서명","둘 다")],"그림 요소를 글자로도 확인할 수 있는 구성 대조")),w(["걷다가 멈춘 곳의 엽서","서율이 산책하다 본 색과 모양을 세 칸짜리 엽서에 담아 보자고 한다. 전시 동선을 설계하는 대신 방금 둘이 멈춘 벤치를 작은 그림의 중심으로 삼는다.","「둘이 앉은 벤치」를 포함하고 「함께 본 날짜」를 마지막에 둔다. 가운데 장면은 네가 고른다.","이렇게 놓으니까 우리 시선이 같은 데서 멈추네. 네가 먼저 고른 하늘도 마음에 든다.","서율은 엽서를 바로 완성하려 하지 않고 밑그림만 남긴다. 다음 만남에 채색하기로 한다."],ye(["둘이 앉은 벤치","길 끝의 노을","네 손의 작은 잎","함께 본 날짜","공중에 뜬 씨앗"],0,3,"산책 엽서")),w(["우리 그림의 세 가지 색","전시 정리를 끝낸 서율이 남은 팔레트 메모를 화면에 띄운다. 같은 색을 재현하는 조색 계산이 아니라 엽서에 쓸 세 색 면적의 균형을 맞춰 보자는 제안이다.","남색·살구색·연두색을 3:2:1 비율로 총 18칸 나눈다. 실제 물감을 섞는 활동이 아니라 화면의 면적 구성이다.","작은 연두색까지 남겼네. 네가 고른 잎도 그림에서 안 사라지겠다.","서율은 비율을 정한 뒤 펜을 내려놓는다. 남은 칸에 누구의 이름을 먼저 쓸지 장난스럽게 묻는다."],Nn(["남색 면","살구색 면","연두색 면"],[3,2,1],18,"엽서의 색 면적 배분 · 물감 혼합 비율 아님"))],juhan:[w(["엔딩에서 잊어버린 이름","주한이 방금 함께 빠져나온 픽셀 게임의 종료 화면을 다시 연다. 이름을 바꿔도 첫 사용자만 부르는 실수라며, 네가 시험 입력을 눌러 주길 기다린다.","세 입력의 결과를 확인하고 저장된 첫 이름 대신 지금 입력한 이름을 사용하도록 고친다.","이제 네 이름을 제대로 부르네. 내가 직접 부르는 건 아직 조금 연습 중이고.","주한은 프로그램을 닫고 화면이 아니라 너를 보며 다시 인사한다."],wn(['처음_이름 = "첫 방문자"',"입력 받기: 지금_이름","인사(처음_이름)"],[oe("이름: 새 친구","안녕, 새 친구","안녕, 첫 방문자"),oe("이름: 별","안녕, 별","안녕, 첫 방문자"),oe("이름: 우리 반","안녕, 우리 반","안녕, 첫 방문자")],["인사창을 숨긴다","모든 이름을 첫 방문자로 바꾼다","인사에 지금_이름을 전달한다"],2)),w(["둘이 눌러야 열리는 문","주한이 지난번 함께 하던 픽셀 게임에 협동 문을 추가했다. 그런데 한 사람만 눌러도 열려 버려서, 네가 테스트를 맡고 자기는 코드를 고치기로 한다.","서로 다른 입력을 두 개 이상 실행하고, 두 사람이 모두 준비했을 때만 문이 열리게 고친다.","혼자 먼저 달려가면 열리면 안 되지. 기다렸다가 같이 가는 문이니까.","주한은 수정한 게임에서 네 캐릭터가 올 때까지 멈춰 선다. 이번에는 코드가 아니라 직접 기다린다."],wn(["왼쪽_준비 = 버튼 A","오른쪽_준비 = 버튼 B","문열기 = 왼쪽_준비 또는 오른쪽_준비"],[oe("A만 누름","닫힘","열림"),oe("B만 누름","닫힘","열림"),oe("둘 다 누름","열림","열림")],["또는 대신 그리고 조건을 쓴다","열림 그림을 더 크게 만든다","한쪽 버튼을 화면에서 지운다"],0)),w(["컴퓨터를 끄고 갈 준비","주한이 쉬는 시간에도 자꾸 화면을 보자 네가 산책을 제안했다. 가방에는 노트와 물 정도만 넣기로 한다.","여섯 칸 안에 아이디어 노트와 물을 넣는다. 모니터까지 챙길 필요는 없다.","컴퓨터 없이 가도 말할 게 있겠지? 방금 그 질문부터 말할 게 생겼네.","주한은 저장을 확인한 뒤 모니터를 끄고 네 쪽으로 의자를 돌린다."],we("화면 밖의 산책 가방",[C("아이디어 노트",2),C("물",2),C("이어폰",1),C("작은 사탕",1),C("두꺼운 기술서",4),C("휴대용 키보드",3)],6,[0,1])),w(["약속 시간을 지우지 않는 저장","주한이 개인 일정 도우미의 연습용 파일을 보여 준다. 항목을 하나 추가하면 그전에 쓴 약속이 사라진다며 실제 일정에 쓰기 전에 같이 점검하고 싶다고 한다.","두 입력 이상을 확인하고 기존 목록을 지우지 않으면서 새 항목만 더하는 수정안을 고른다.","새 약속 하나 생겼다고 앞의 약속이 없어지면 곤란하지. 네 시간도 지우고 싶지 않고.","주한은 연습 파일만 저장한 뒤 화면을 닫는다. 너와의 약속은 다시 한번 직접 말해 확인한다."],wn(["목록 = [점심 약속]","새_항목 = 입력 받기","목록 = [새_항목]"],[oe("산책 추가","점심 약속, 산책","산책"),oe("도서관 추가","점심 약속, 도서관","도서관"),oe("아무것도 추가 안 함","점심 약속","점심 약속")],["새 항목 이름을 짧게 바꾼다","기존 목록 뒤에 새 항목을 덧붙인다","기존 목록도 함께 삭제한다"],1)),w(["네 이름으로 끝나는 화면","주한이 마지막으로 완성한 작은 게임의 엔딩 화면을 보여 준다. 첫 기획과 달리 표시되는 부분을 찾으면, 게임을 닫고 진짜 간식을 먹으러 가자는 내기다.","기획 메모와 현재 화면에서 다른 항목을 모두 선택한다. 외형이 바뀐 것만으로 프로그램 전체가 틀렸다고 판단하지 않는다.","마지막에 네 이름 나오는 건 맞았네. 그건 내가 제일 여러 번 확인했거든.","주한은 두 군데를 고치고 컴퓨터를 끈다. 화면 속 엔딩 뒤에도 너와 보낼 시간이 남아 있다."],J("함께 정한 엔딩","현재 출력",[x("주인공 이름","현재 입력한 이름"),x("함께한 사람","두 명"),x("다시 시작 버튼","물어본 뒤 시작","곧바로 시작"),x("소리","선택할 때만"),x("나가기 버튼","보임","숨김"),x("제작자 서명","주한과 첫 플레이어")],"주한이 만든 게임의 화면 점검"))],minhyuk:[w(["비를 피해 넣어 둘 것들","정류장 지붕 아래에 도착한 민혁이 가방을 잠깐 연다. 바깥에 끼워 둔 공지 봉투가 젖지 않도록 안쪽 물건의 자리를 함께 바꿔 본다.","여섯 칸 안에 공지 봉투와 작은 수건을 넣는다. 바깥에 남길 물건은 젖지 않게 따로 들고, 필요한 것부터 안쪽에 챙긴다.","봉투만 챙기려 했는데 수건도 넣었네. 그럼 네 젖은 손부터 닦고 다시 우산 잡자.","민혁은 가방 지퍼를 닫은 뒤 수건을 네 쪽으로 건넨다. 비가 그칠 때까지 잠깐 같은 지붕 아래 서 있는다."],we("우산 아래의 마른 가방",[C("공지 봉투",2),C("작은 수건",1),C("물병",2),C("작은 간식",2),C("접은 머플러",3),C("여분 펜",1)],6,[0,1])),w(["줄을 세우지 않는 점심 카드","민혁은 모두에게 공평하게 하려다 자기 점심 약속도 공지처럼 적었다. 오늘은 두 사람만 읽는 편한 메모를 만들어 보기로 한다.","「같이 먹을 자리」를 포함하고 「쉬는 시간 끝 확인」을 마지막에 둔다. 가운데에는 민혁이 하고 싶은 일을 하나 넣는다.","규칙보다 내 점심부터 보이네. 이런 순서도 괜찮구나.","민혁이 카드의 딱딱한 제목을 지우고 작은 웃는 얼굴을 그린다."],ye(["같이 먹을 자리","후식 반씩 나누기","오늘 들은 웃긴 말","쉬는 시간 끝 확인","말없이 천천히 먹기"],0,3,"LUNCH FOR TWO")),w(["내 시간도 들어간 표","민혁이 식사 뒤 역할표 사본을 펼치지만 오늘은 자기 약속 시간도 남겨 두기로 한다. 모두가 확인한 표와 옮겨 적은 메모에서 바뀐 칸을 찾아 달라고 한다.","확인한 역할표와 사본을 대조한다. 다른 사람의 차례나 쉬는 시간을 임의로 바꾸지 않고 차이만 표시한다.","내 쉬는 시간부터 찾아 줬네. 반장 칸에도 빈칸이 있어도 되는 건데 자꾸 잊는다.","민혁은 차이가 난 칸에 확인 표시만 남기고 표를 접는다. 수정은 당사자와 함께 하기로 한다."],J("확인한 역할표","옮긴 메모",[x("첫 점검","민혁·지원자"),x("점검 시간","15:30","15:03"),x("자료 담당","두 명"),x("민혁 휴식","16:00","비어 있음"),x("변경 방식","당사자 확인"),x("종료","16:30")],"실제 학급 명단이 아닌 둘이 확인하는 역할표")),w(["점검이 끝나면 쉬는 곳으로","공연장 최종 점검을 마친 민혁이 또 한 바퀴 돌려 하자, 너는 확인한 구역을 약도에서 이어 보여 준다. 마지막에는 쉬는 자리를 넣는다.","교실에서 점검한 통로를 거쳐 휴게 의자까지 잇는다. 정리 중인 창고는 지나지 않는다.","마지막 목적지가 의자인 줄 알았으면 더 빨리 끝냈을 텐데. 같이 앉을 거지?","민혁은 펜을 내려놓고 너와 함께 의자로 향한다."],$n(["교실","창고 정리 중","점검한 통로","안내판","물 마시는 곳","휴게 의자"],2,1,"점검을 마친 뒤의 휴식 동선")),w(["일정표의 빈칸 지키기","민혁이 정문에서 접힌 개인 일정표를 꺼낸다. 너와 같이 갈 시간을 실수로 업무로 채우지 않았는지, 두 버전을 맞춰 보면 마음이 놓일 것 같다고 한다.","직접 정한 약속과 정리한 일정표에서 달라진 곳을 찾는다. 일을 더 넣는 것이 무조건 좋은 답은 아니다.","그 빈칸은 고칠 곳이 아니라 남겨 둘 곳이었네. 네가 안 짚었으면 또 약속을 일처럼 만들 뻔했다.","민혁은 일정표를 가방에 넣고 네 쪽으로 몸을 돌린다. 이제 어디로 갈지는 둘이 천천히 정한다."],J("직접 정한 약속","정리한 일정",[x("만나는 곳","정문"),x("시작 시간","15:00","15:30"),x("첫 행선지","각자 한 곳씩"),x("중간 시간","비워 두기","추가 점검"),x("귀가 확인","서로 직접"),x("업무표","오늘은 두고 가기","늘 지참")],"학급 공지가 아닌 두 사람의 개인 일정"))],junyeon:[w(["비어 있지 않은 역할 카드","준연은 자기 역할 칸을 적다가 지우기를 반복한다. 대신 정해 주기보다 본인이 고를 수 있는 빈 부분을 남겨 둔 카드를 함께 만든다.","「내가 맡겠다고 한 일」을 넣고 「어려우면 말하기」를 마지막에 둔다. 약속할 일을 지나치게 늘리지 않는다.","많이 적지 않아도 되는 거네. 이 정도면 내가 직접 해 볼 수 있을 것 같아.","준연은 지우개를 내려놓고 자기 이름을 작게 적는다."],ye(["내가 맡겠다고 한 일","도움받을 사람","함께 확인할 시간","어려우면 말하기","끝낸 뒤의 작은 표시"],0,3,"MY PART / ONE STEP")),w(["정원 벤치까지의 준비","준연이 사람 많은 곳은 오늘 조금 부담스럽다고 말한다. 둘은 짧게 정원에 다녀올 만큼만 챙기기로 한다.","다섯 칸 안에 물과 작은 메모장을 넣는다. 부담 없이 돌아올 수 있는 짧은 산책이다.","금방 돌아와도 괜찮지? 그 말 듣고 나니까 오히려 조금 더 걷고 싶네.","준연은 가방을 꽉 쥐지 않고 한 손으로 들고 일어난다."],we("짧은 산책 주머니",[C("물",2),C("메모장",1),C("작은 간식",1),C("휴지",1),C("큰 담요",4),C("무거운 도감",4)],5,[0,1])),w(["빠진 칸은 같이 확인하기","준연이 정원에서 가져온 간식 목록을 보여 준다. 급하게 옮겨 쓰다가 빠뜨린 것이 있다며 네가 원래 메모를 읽고 자기가 사본을 확인하기로 한다.","처음 적은 목록과 옮긴 목록에서 달라진 항목만 고른다. 사람의 의도 대신 적힌 내용만 확인한다.","과자가 없어진 게 아니라 내가 줄을 빠뜨렸네. 알았으니까 다음엔 천천히 옮겨야겠다.","준연은 목록을 직접 고친 뒤 네가 고른 간식을 기억해 두겠다고 말한다."],J("처음 적은 목록","옮긴 목록",[x("음료","복숭아 두 개"),x("작은 과자","한 봉지","빈칸"),x("휴지","챙김"),x("마실 시간","지금"),x("남은 봉투","둘이 정리","내일 정리"),x("다음 약속","직접 확인")],"둘이 챙긴 간식 목록 확인")),w(["한 번에 한 줄씩","준연이 교실에서 다음에 맡을 작은 일을 적다가 문장을 길게 지운다. 네가 할 일을 대신 정하지 않고, 준연이 말한 범위가 카드에 남도록 함께 정리한다.","「내가 고른 한 가지」를 넣고 「끝나면 직접 알리기」를 마지막에 둔다. 중간에는 확인할 사항 하나만 고른다.","한 번에 다 하겠다는 말은 빼자. 이건 내가 말한 만큼만 적혀 있네.","준연은 완성한 카드를 자기 노트에 넣는다. 너는 대신 끝내 주겠다는 약속을 더하지 않는다."],ye(["내가 고른 한 가지","필요한 준비물","시작할 시간","끝나면 직접 알리기","도움이 필요한 부분"],0,3,"한 번에 한 가지")),w(["다시 맡은 일의 확인표","용서 이후, 준연은 감독 아래 다시 맡은 작은 일을 확인한다. 잘 보이기 위한 선물이 아니라, 약속한 물건을 빠짐없이 돌려놓는 것부터 시작한다.","여섯 칸 안에 반납 목록과 확인받을 자료를 넣는다. 대신 처리해 주지 않고 준연이 직접 확인하도록 돕는다.","이번에는 내가 들고 가서 확인받을게. 네가 해 줬다고 말하지 않을 거야.","준연이 직접 목록을 들고 담당 선생님에게 간다. 바뀌는 과정은 오늘 한 번으로 끝나지 않는다."],we("확인받고 반납할 자료 가방",[C("반납 목록",1),C("확인받을 자료",3),C("여분 펜",1),C("작은 물병",2),C("사과 선물 상자",4),C("개인 메모장",1)],6,[0,1]))]},rt={mix:"소리 만들기",rhythm:"동작 기억하기",compose:"종이 편집",debug:"프로그램 고치기",stars:"경로 연결",pack:"준비물 챙기기",ratio:"비율 맞추기",compare:"다른 부분 찾기"};function Tr(e,t,s){return Number.isInteger(t)&&t>=0&&t<5&&s===1}function Et(e,t,s=1,r=0){const a=Math.max(0,Math.min(4,Math.trunc(t))),c=Rr[e][a],[l,o,d,h,p]=c.context,j=`together-${e}-${a+1}-${s}`;return{id:j,person:e,chapter:a,title:l,invitation:o,goal:d,success:h,after:p,retry:"괜찮아. 서두르지 않고 다시 해 보거나, 여기서 멈추고 이야기를 이어 가도 돼.",task:Mr(c.task,`${r}:${j}`)}}function Mr(e,t){if(e.kind==="compose"){const s=be(e.pieces,t);return{...e,pieces:s.map(r=>r.value),required:s.findIndex(r=>r.index===e.required),footer:s.findIndex(r=>r.index===e.footer)}}if(e.kind==="pack"){const s=be(e.items,t);return{...e,items:s.map(r=>({...r.value})),required:e.required.map(r=>s.findIndex(a=>a.index===r))}}if(e.kind==="debug"){const s=be(e.patches,t);return{...e,patches:s.map(r=>r.value),answer:s.findIndex(r=>r.index===e.answer)}}if(e.kind==="compare"){const s=be(e.rows,t);return{...e,rows:s.map(r=>({...r.value})),differences:s.flatMap((r,a)=>e.differences.includes(r.index)?[a]:[])}}return e.kind==="stars"&&t.includes("taehun-4-")?{...e,nodes:e.nodes.map((s,r)=>({...s,x:[8,32,28,56,68,91][r],y:[45,18,81,71,21,49][r]})),edges:[[0,1],[0,2],[1,4],[2,3],[3,4],[4,5],[3,5]]}:structuredClone(e)}function Fr(e,t){return t.length===3&&new Set(t).size===3&&t.every(s=>Number.isInteger(s)&&s>=0&&s<e.pieces.length)&&t.includes(e.required)&&t[2]===e.footer}function Ir(e,t){return new Set(t).size===t.length&&t.every(s=>Number.isInteger(s)&&s>=0&&s<e.items.length)&&e.required.every(s=>t.includes(s))&&t.reduce((s,r)=>s+e.items[r].size,0)<=e.capacity}function Or(e,t){return t.length>=2&&t[0]===e.start&&t.at(-1)===e.end&&t.includes(e.via)&&!t.includes(e.blocked)&&new Set(t).size===t.length&&t.every((s,r)=>Number.isInteger(s)&&s>=0&&s<e.nodes.length&&(r===0||e.edges.some(([a,c])=>a===t[r-1]&&c===s||c===t[r-1]&&a===s)))}function Dr(e,t,s,r){if(t.length!==e.pattern.length||t.some((c,l)=>c!==e.pattern[l]))return!1;if(!r)return!0;if(s.length!==t.length)return!1;const a=6e4/e.bpm;return s.slice(1).every((c,l)=>Number.isFinite(c)&&Math.abs(c-s[l]-a)<=a*.65)}function qr(e,t,s){return new Set(t.filter(r=>Number.isInteger(r)&&r>=0&&r<e.tests.length)).size>=2&&s===e.answer}function Pr(e,t){const s=e.components.reduce((r,a)=>r+a.parts,0);return t.length===e.components.length&&t.every(r=>Number.isInteger(r)&&r>=0)&&t.reduce((r,a)=>r+a,0)===e.total&&t.every((r,a)=>r*s===e.total*e.components[a].parts)}function Lr(e,t){return t.length===e.differences.length&&new Set(t).size===t.length&&t.every(s=>Number.isInteger(s)&&e.differences.includes(s))}const st={world:"전세계",hyunsol:"최현솔",taewoo:"김태우",taehun:"고태훈",seoyul:"이서율",juhan:"이주한",minhyuk:"황민혁",junyeon:"방준연"};function Kr({person:e,chapter:t,encounter:s,seed:r,paused:a=!1,onFinish:c}){const l=f.useMemo(()=>Et(e,t,s,r),[e,t,s,r]);return n.jsx(Br,{activity:l,paused:a,onFinish:c},l.id)}function Br({activity:e,paused:t,onFinish:s}){const[r,a]=f.useState(null),[c,l]=f.useState(0),[o,d]=f.useState(document.hidden),h=f.useRef(!1),p=f.useRef(!1),j=f.useRef(null),b=f.useRef(null),m=t||o;f.useEffect(()=>{var A;(A=j.current)==null||A.focus({preventScroll:!0});const k=()=>d(document.hidden);return document.addEventListener("visibilitychange",k),()=>document.removeEventListener("visibilitychange",k)},[]),f.useEffect(()=>{r&&b.current&&(b.current.scrollTop=b.current.scrollHeight)},[r]);function g(k,A=""){m||p.current||h.current||(p.current=!0,a({ok:k,detail:A}))}function z(k){m||h.current||(h.current=!0,s(k))}function v(){m||h.current||(p.current=!1,a(null),l(k=>k+1),b.current&&(b.current.scrollTop=0))}return n.jsx("section",{className:"romance-together","aria-label":`${st[e.person]}${e.person==="world"||e.person==="taewoo"?"와":"과"} ${e.title}`,children:n.jsxs("div",{className:"rt-card",children:[n.jsxs("header",{className:"rt-header",children:[n.jsxs("span",{className:"rt-kicker",children:[n.jsx(ne,{size:14}),"함께하기"]}),n.jsx("span",{className:"rt-person",children:st[e.person]}),n.jsx("h2",{ref:j,tabIndex:-1,children:e.title}),n.jsxs("span",{className:"rt-kind",children:[rt[e.task.kind]," · 선택 활동"]})]}),n.jsxs("div",{className:"rt-scroll",ref:b,children:[n.jsx("p",{className:"rt-invitation",children:e.invitation}),n.jsx("p",{className:"rt-goal",children:e.goal}),m&&n.jsxs("p",{className:"rt-pause",role:"status",children:[n.jsx(vt,{size:15}),"잠시 멈췄어요. 돌아오면 이어 할 수 있어요."]}),n.jsxs("fieldset",{className:"rt-fieldset",disabled:m||r!==null,children:[n.jsx("legend",{className:"rt-sr-only",children:rt[e.task.kind]}),n.jsx(Vr,{task:e.task,paused:m||r!==null,settle:g},`${e.id}-${c}`)]}),r&&n.jsxs("div",{className:`rt-result ${r.ok?"is-complete":"is-retry"}`,role:"status",children:[n.jsx("b",{children:r.ok?"함께 만든 작은 순간":"다시 해도, 여기서 멈춰도 괜찮아"}),r.detail&&n.jsx("p",{children:r.detail}),n.jsx("blockquote",{children:r.ok?e.success:e.retry}),r.ok&&n.jsx("p",{className:"rt-after",children:e.after})]})]}),n.jsx("footer",{className:"rt-footer",children:r?n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",className:"rt-secondary",onClick:v,disabled:m,children:[n.jsx(Rn,{size:16}),r.ok?"다르게 해 보기":"다시 해 보기"]}),n.jsxs("button",{type:"button",className:"rt-primary",onClick:()=>z(r.ok?3:0),disabled:m,children:["함께한 시간 마치기",n.jsx(ee,{size:17})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"rt-no-pressure",children:"실패·건너뛰기 모두 관계 손실 없음"}),n.jsxs("button",{type:"button",className:"rt-secondary",onClick:()=>z(0),disabled:m,children:[n.jsx(kt,{size:16}),"이야기로 돌아가기"]})]})})]})})}function Vr({task:e,paused:t,settle:s}){switch(e.kind){case"mix":return n.jsx(_r,{task:e,paused:t,settle:s});case"rhythm":return n.jsx(Wr,{task:e,paused:t,settle:s});case"compose":return n.jsx(Hr,{task:e,paused:t,settle:s});case"debug":return n.jsx(Gr,{task:e,paused:t,settle:s});case"stars":return n.jsx(Ur,{task:e,paused:t,settle:s});case"pack":return n.jsx(Jr,{task:e,paused:t,settle:s});case"ratio":return n.jsx(Xr,{task:e,paused:t,settle:s});case"compare":return n.jsx(Yr,{task:e,paused:t,settle:s})}}function _r({task:e,paused:t,settle:s}){const[r,a]=f.useState([35,35,35]),[c,l]=f.useState(null),[o,d]=f.useState(!1),[h,p]=f.useState(!1),[j,b]=f.useState(""),m=f.useRef(null);f.useEffect(()=>()=>{var v;(v=m.current)==null||v.close().catch(()=>{})},[]),f.useEffect(()=>{t&&m.current&&(m.current.close().catch(()=>{}),m.current=null)},[t]);const g=r.indexOf(Math.max(...r));async function z(){if(!t){p(!0),b("소리를 들을 수 없어도 아래 설명만 확인하고 완성할 수 있어요.");try{m.current&&await m.current.close().catch(()=>{});const v=new AudioContext;if(m.current=v,await v.resume(),t||m.current!==v)return;const k=v.currentTime;e.notes.forEach((A,M)=>{const S=v.createOscillator(),E=v.createGain();S.type=M===1?"sine":"triangle",S.frequency.value=A,E.gain.setValueAtTime(0,k),E.gain.linearRampToValueAtTime(r[M]/100*.065,k+.08),E.gain.exponentialRampToValueAtTime(1e-4,k+1.45),S.connect(E),E.connect(v.destination),S.start(k+M*.055),S.stop(k+1.5)})}catch{b("기기에서 소리를 재생하지 못했어요. 소리 설명을 읽고 그대로 완성해도 괜찮아요.")}}}return n.jsxs("div",{className:"rt-mixer",children:[n.jsxs("div",{className:"rt-mixer-head","aria-hidden":"true",children:[n.jsx(gt,{size:27}),n.jsx("span",{children:"OUR LITTLE MIX"}),n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{})]}),n.jsx("div",{className:"rt-channels",children:e.channels.map((v,k)=>n.jsxs("label",{children:[n.jsxs("span",{children:[v,n.jsxs("output",{children:[r[k],"%"]})]}),n.jsx("input",{"aria-label":`${v} 크기`,type:"range",min:"0",max:"100",step:"5",value:r[k],onChange:A=>{const M=Number(A.target.value);a(S=>S.map((E,q)=>q===k?M:E)),d(!0),p(!1)}})]},v))}),n.jsx("div",{className:"rt-moods",role:"group","aria-label":"우리가 만들 분위기",children:e.moods.map((v,k)=>n.jsx("button",{type:"button","aria-pressed":c===k,className:c===k?"is-picked":"",onClick:()=>l(k),children:v},v))}),n.jsxs("div",{className:"rt-inline-actions",children:[n.jsxs("button",{type:"button",className:"rt-secondary",onClick:()=>void z(),children:[n.jsx(wt,{size:16}),"짧게 들어 보기"]}),n.jsx("button",{type:"button",className:"rt-quiet",onClick:()=>{p(!0),b("소리 없이 설명으로 확인했어요. 같은 방식으로 완성할 수 있어요.")},children:"소리 없이 살펴보기"})]}),n.jsxs("p",{className:"rt-preview","aria-live":"polite",children:[Math.max(...r)===0?"지금은 모든 소리가 쉬고 있어요.":`${e.channels[g]}이 가장 가까이 들리는 소리예요.`,c!==null&&` 분위기는 「${e.moods[c]}」.`]}),j&&n.jsx("p",{className:"rt-help",role:"status",children:j}),n.jsxs("button",{type:"button",className:"rt-submit",disabled:!o||c===null||!h,onClick:()=>s(!0,`${e.moods[c??0]} · ${e.channels.map((v,k)=>`${v} ${r[k]}%`).join(" / ")}`),children:[n.jsx(re,{size:17}),"이 소리를 우리 버전으로 남기기"]}),(!o||c===null||!h)&&n.jsx("p",{className:"rt-help",children:"슬라이더 하나 이상을 바꾸고 → 분위기를 고른 뒤 → 듣거나 설명으로 살펴봐요."})]})}function Wr({task:e,paused:t,settle:s}){const[r,a]=f.useState([]),[c,l]=f.useState([]),[o,d]=f.useState(!1),[h,p]=f.useState(!1),[j,b]=f.useState(!1),[m,g]=f.useState(!1),[z,v]=f.useState(!1);f.useEffect(()=>{if(!h||t)return;const S=window.setInterval(()=>b(E=>!E),6e4/e.bpm);return()=>window.clearInterval(S)},[h,t,e.bpm]);function k(S){t||r.length>=e.pattern.length||(a(E=>[...E,S]),l(E=>[...E,performance.now()]))}function A(){a([]),l([]),p(!1),g(!1)}const M=r.length===e.pattern.length;return n.jsxs("div",{className:"rt-rhythm",children:[n.jsxs("div",{className:"rt-mode-switch",children:[n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",checked:o,disabled:r.length>0,onChange:S=>{d(S.target.checked),p(!1)}}),"박자 간격도 맞춰 보기 ",n.jsx("small",{children:"(선택)"})]}),n.jsx("span",{children:o?`${e.bpm} BPM`:"시간 제한 없음"})]}),n.jsxs("label",{className:"rt-sequence-assist",children:[n.jsx("input",{type:"checkbox",checked:z,onChange:S=>v(S.target.checked)}),"순서를 보면서 하기"]}),n.jsx("ol",{className:"rt-pattern","aria-label":m&&!z?"기억해서 이을 동작":"함께 따라 할 동작",children:e.pattern.map((S,E)=>n.jsxs("li",{className:M?r[E]===S?"is-right":"is-different":E===r.length&&m?"is-next":"",children:[n.jsx("span",{children:E+1}),n.jsx("b",{children:!m||z||M?e.gestures[S]:E<r.length?e.gestures[r[E]]:"?"}),M&&r[E]!==S&&n.jsx("small",{children:e.gestures[r[E]]})]},E))}),!m&&n.jsx("button",{type:"button",className:"rt-submit",onClick:()=>g(!0),children:"기억했어 · 시작"}),o&&n.jsxs("button",{type:"button",className:"rt-tempo",onClick:()=>p(S=>!S),"aria-pressed":h,children:[n.jsx("i",{className:h&&j?"is-lit":""}),h?"박자 불빛 끄기":"박자 불빛 켜기",n.jsx("span",{children:"불빛이 바뀔 때 한 번씩"})]}),n.jsx("div",{className:"rt-gesture-buttons",children:e.gestures.map((S,E)=>n.jsxs("button",{type:"button",onClick:()=>k(E),disabled:!m||M,children:[n.jsx("span",{"aria-hidden":"true",children:["●","✦","—"][E]}),S]},S))}),n.jsxs("div",{className:"rt-inline-actions",children:[n.jsxs("button",{type:"button",className:"rt-secondary",onClick:A,disabled:r.length===0&&!h,children:[n.jsx(Rn,{size:15}),"처음부터"]}),n.jsxs("span",{className:"rt-help","aria-live":"polite",children:[r.length," / ",e.pattern.length," 동작"]})]}),n.jsxs("button",{type:"button",className:"rt-submit",disabled:!M,onClick:()=>{p(!1);const S=Dr(e,r,c,o);s(S,S?o?"같은 간격으로 짧은 합주를 마쳤어요.":"서두르지 않고 서로의 차례를 끝까지 맞췄어요.":"순서나 간격이 살짝 달랐어요. 다음에는 시간 제한 없는 순서 모드로 해도 같은 보상을 받아요.")},children:[n.jsx(re,{size:17}),"둘의 호흡 확인하기"]})]})}function Hr({task:e,paused:t,settle:s}){const[r,a]=f.useState([]);function c(l){t||a(o=>o.includes(l)?o.filter(d=>d!==l):o.length<3?[...o,l]:o)}return n.jsxs("div",{className:"rt-compose",children:[n.jsxs("div",{className:"rt-paper","aria-label":"종이 미리보기",children:[n.jsx("small",{children:e.paper}),[0,1,2].map(l=>n.jsxs("button",{type:"button",className:`rt-paper-slot slot-${l}`,onClick:()=>{r[l]!==void 0&&a(o=>o.filter((d,h)=>h!==l))},"aria-label":`${l+1}번째 칸: ${r[l]!==void 0?e.pieces[r[l]]:"비어 있음"}${r[l]!==void 0?", 누르면 빼기":""}`,children:[n.jsx("span",{children:["첫 시선","가운데 여백","마지막 한 줄"][l]}),n.jsx("b",{children:r[l]!==void 0?e.pieces[r[l]]:"아래 조각을 골라 주세요"})]},l))]}),n.jsx("div",{className:"rt-pieces",role:"group","aria-label":"순서대로 놓을 종이 조각",children:e.pieces.map((l,o)=>n.jsxs("button",{type:"button",className:r.includes(o)?"is-picked":"","aria-pressed":r.includes(o),disabled:r.length===3&&!r.includes(o),onClick:()=>c(o),children:[l,r.includes(o)&&n.jsx(re,{size:13})]},l))}),n.jsx("p",{className:"rt-help",children:"고른 순서대로 위에서 아래로 놓여요. 종이의 칸이나 선택한 조각을 누르면 다시 뺄 수 있어요."}),n.jsxs("button",{type:"button",className:"rt-submit",disabled:r.length!==3,onClick:()=>{const l=Fr(e,r);s(l,l?`「${r.map(o=>e.pieces[o]).join(" → ")}」 순서로 우리만의 종이가 완성됐어요.`:`「${e.pieces[e.required]}」를 포함하고, 마지막에는 「${e.pieces[e.footer]}」를 놓아 봐요. 나머지 한 칸은 자유예요.`)},children:[n.jsx(re,{size:17}),"이 배치로 함께 읽기"]})]})}function Gr({task:e,paused:t,settle:s}){const[r,a]=f.useState([]),[c,l]=f.useState(null),[o,d]=f.useState(null);function h(p){t||(d(p),a(j=>j.includes(p)?j:[...j,p]))}return n.jsxs("div",{className:"rt-debug",children:[n.jsxs("div",{className:"rt-terminal",children:[n.jsxs("div",{className:"rt-terminal-dots","aria-hidden":"true",children:[n.jsx("i",{}),n.jsx("i",{}),n.jsx("i",{}),n.jsx("span",{children:"작은 연습 프로그램 · 실제 데이터와 연결되지 않음"})]}),n.jsx("ol",{children:e.code.map((p,j)=>n.jsx("li",{children:n.jsx("code",{children:p})},j))})]}),n.jsx("div",{className:"rt-test-inputs",role:"group","aria-label":"시험 입력",children:e.tests.map((p,j)=>n.jsxs("button",{type:"button",className:o===j?"is-picked":"",onClick:()=>h(j),children:[r.includes(j)&&n.jsx(re,{size:13}),"입력 ",j+1,": ",p.input]},j))}),n.jsx("div",{className:"rt-test-result","aria-live":"polite",children:o===null?n.jsx("p",{children:"입력을 하나 눌러 보면 무엇이 달라지는지 확인할 수 있어요."}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsx("span",{children:"기대한 결과"}),n.jsx("b",{children:e.tests[o].expected})]}),n.jsxs("div",{className:e.tests[o].expected!==e.tests[o].actual?"is-unexpected":"",children:[n.jsx("span",{children:"지금 나온 결과"}),n.jsx("b",{children:e.tests[o].actual})]})]})}),n.jsxs("p",{className:"rt-help",children:["서로 다른 입력을 두 개 이상 확인한 뒤, 바꿀 부분을 골라요. 확인 ",r.length," / ",e.tests.length]}),n.jsx("div",{className:"rt-patches",role:"group","aria-label":"한 군데 고칠 방법",children:e.patches.map((p,j)=>n.jsx("button",{type:"button",disabled:r.length<2,"aria-pressed":c===j,className:c===j?"is-picked":"",onClick:()=>l(j),children:p},p))}),n.jsxs("button",{type:"button",className:"rt-submit",disabled:c===null||r.length<2,onClick:()=>{const p=qr(e,r,c??-1);s(p,p?"같은 입력을 다시 넣었을 때 기대한 결과가 나왔어요. 작은 원인 하나를 함께 확인했어요.":"이 수정만으로는 기대한 결과와 실제 결과의 차이가 사라지지 않아요. 다른 입력도 함께 살펴볼까요?")},children:[n.jsx(En,{size:16}),"고친 뒤 다시 실행하기"]})]})}function Ur({task:e,paused:t,settle:s}){const[r,a]=f.useState([e.start]),[c,l]=f.useState("");function o(d){if(!t){if(d===e.blocked){l("이 지점은 지금 지나갈 수 없어요. 다른 연결선을 찾아봐요.");return}if(d===r.at(-1)&&r.length>1){a(h=>h.slice(0,-1)),l("마지막 선을 지웠어요.");return}if(r.includes(d)){l("이미 지난 지점이에요. 마지막 점을 누르면 한 칸 되돌아갈 수 있어요.");return}if(!e.edges.some(([h,p])=>h===r.at(-1)&&p===d||p===r.at(-1)&&h===d)){l("현재 점에서 얇은 선으로 연결된 다음 지점을 골라요.");return}a(h=>[...h,d]),l(`${e.nodes[d].label}까지 이었어요.`)}}return n.jsxs("div",{className:"rt-stars",children:[n.jsxs("div",{className:"rt-star-board",children:[n.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:[e.edges.map(([d,h])=>n.jsx("line",{x1:e.nodes[d].x,y1:e.nodes[d].y,x2:e.nodes[h].x,y2:e.nodes[h].y,className:"rt-star-possible"},`${d}-${h}`)),r.slice(1).map((d,h)=>n.jsx("line",{x1:e.nodes[r[h]].x,y1:e.nodes[r[h]].y,x2:e.nodes[d].x,y2:e.nodes[d].y,className:"rt-star-drawn"},h))]}),e.nodes.map((d,h)=>n.jsxs("button",{type:"button",style:{left:`${d.x}%`,top:`${d.y}%`},className:`rt-star-node ${r.includes(h)?"is-linked":""} ${h===e.blocked?"is-blocked":""} ${h===r.at(-1)?"is-current":""}`,onClick:()=>o(h),"aria-label":`${d.label}${h===e.start?" · 시작":h===e.end?" · 도착":h===e.via?" · 꼭 들를 곳":h===e.blocked?" · 지나갈 수 없음":""}`,children:[n.jsx("i",{"aria-hidden":"true",children:h===e.blocked?"×":h===e.end?"☆":r.includes(h)?"●":"✧"}),n.jsx("span",{children:d.label})]},h))]}),n.jsx("p",{className:"rt-board-caption",children:e.caption}),n.jsx("p",{className:"rt-path-readout","aria-live":"polite",children:r.map(d=>e.nodes[d].label).join(" → ")}),n.jsxs("div",{className:"rt-inline-actions",children:[n.jsxs("button",{type:"button",className:"rt-secondary",disabled:r.length<2,onClick:()=>{a(d=>d.slice(0,-1)),l("마지막 선을 지웠어요.")},children:[n.jsx(dr,{size:15}),"한 선 뒤로"]}),n.jsxs("span",{className:"rt-help",children:[e.nodes[e.via].label,"을 거쳐요."]})]}),c&&n.jsx("p",{className:"rt-help",role:"status",children:c}),n.jsxs("button",{type:"button",className:"rt-submit",disabled:r.at(-1)!==e.end,onClick:()=>{const d=Or(e,r);s(d,d?"우리의 시작과 잠깐 머물 곳, 마지막 자리가 한 선으로 이어졌어요.":`도착하기 전에 「${e.nodes[e.via].label}」에도 들러 봐요.`)},children:[n.jsx(re,{size:17}),"이 길을 함께 따라가기"]})]})}function Jr({task:e,paused:t,settle:s}){const[r,a]=f.useState([]),c=r.reduce((o,d)=>o+e.items[d].size,0);function l(o){t||a(d=>d.includes(o)?d.filter(h=>h!==o):[...d,o])}return n.jsxs("div",{className:"rt-pack",children:[n.jsxs("div",{className:"rt-bag",children:[n.jsx("div",{className:"rt-bag-handle","aria-hidden":"true"}),n.jsx("h3",{children:e.bag}),n.jsx("div",{className:"rt-capacity",role:"img","aria-label":`${e.capacity}칸 중 ${c}칸 사용${c>e.capacity?", 가방이 넘쳐요":""}`,children:Array.from({length:Math.max(e.capacity,c)},(o,d)=>n.jsx("span",{className:`${d<c?"is-full":""} ${d>=e.capacity?"is-over":""}`},d))}),n.jsxs("b",{className:c>e.capacity?"rt-overflow":"",children:[c," / ",e.capacity,"칸"]}),n.jsx("p",{children:r.length?r.map(o=>e.items[o].label).join(" · "):"아직 비어 있어요. 필요한 만큼만 담아 봐요."})]}),n.jsx("div",{className:"rt-pack-items",role:"group","aria-label":"가방에 넣거나 뺄 물건",children:e.items.map((o,d)=>n.jsxs("button",{type:"button","aria-pressed":r.includes(d),className:r.includes(d)?"is-picked":"",onClick:()=>l(d),children:[n.jsx("span",{children:o.label}),n.jsxs("small",{children:[o.size,"칸 ",r.includes(d)?"· 빼기":"· 넣기"]})]},o.label))}),n.jsxs("button",{type:"button",className:"rt-submit",disabled:r.length===0,onClick:()=>{const o=Ir(e,r);s(o,o?`${r.map(d=>e.items[d].label).join(", ")}. 필요한 것을 챙기고 ${e.capacity-c}칸의 여유를 남겼어요.`:c>e.capacity?"가방이 조금 넘쳤어요. 오늘 꼭 필요하지 않은 것을 하나 내려놓아도 괜찮아요.":`「${e.required.map(d=>e.items[d].label).join("」「")}」는 이번 약속에 꼭 필요해요. 다시 확인해 볼까요?`)},children:[n.jsx(re,{size:17}),"이 가방으로 같이 가기"]})]})}function Xr({task:e,paused:t,settle:s}){const[r,a]=f.useState(()=>e.components.map(()=>0)),c=r.reduce((o,d)=>o+d,0);function l(o,d){t||a(h=>h.map((p,j)=>j===o?Math.max(0,Math.min(e.total,p+d)):p))}return n.jsxs("div",{className:"rt-ratio",children:[n.jsxs("div",{className:"rt-ratio-target",children:[n.jsx("b",{children:e.components.map(o=>o.parts).join(" : ")}),n.jsxs("span",{children:[e.components.map(o=>o.label).join(" : "),n.jsx("br",{}),"전체 ",e.total,e.unit]})]}),n.jsx("div",{className:"rt-ratio-vessel",role:"img","aria-label":`지금 ${r.map((o,d)=>`${e.components[d].label} ${o}${e.unit}`).join(", ")}`,children:e.components.map((o,d)=>n.jsx("span",{style:{width:`${r[d]/Math.max(c,e.total)*100}%`,background:o.color},children:r[d]>0?r[d]:""},o.label))}),n.jsxs("p",{className:`rt-ratio-total ${c>e.total?"is-over":""}`,"aria-live":"polite",children:[c," / ",e.total,e.unit,c>e.total?" · 전체 양을 줄여 주세요":""]}),n.jsx("div",{className:"rt-ratio-controls",children:e.components.map((o,d)=>n.jsxs("div",{children:[n.jsxs("b",{children:[n.jsx("i",{style:{background:o.color},"aria-hidden":"true"}),o.label]}),n.jsx("button",{type:"button","aria-label":`${o.label} 1${e.unit} 줄이기`,disabled:r[d]===0,onClick:()=>l(d,-1),children:"−"}),n.jsx("output",{"aria-label":`${o.label} 양`,children:r[d]}),n.jsx("button",{type:"button","aria-label":`${o.label} 1${e.unit} 늘리기`,disabled:r[d]===e.total,onClick:()=>l(d,1),children:"+"})]},o.label))}),n.jsx("p",{className:"rt-board-caption",children:e.caption}),n.jsxs("button",{type:"button",className:"rt-submit",disabled:c===0,onClick:()=>{const o=Pr(e,r);s(o,o?"전체 양과 각 부분의 비율이 모두 맞아요.":c!==e.total?"비율을 살펴보기 전에 전체 양부터 맞춰 봐요.":"전체 양은 맞아요. 비율의 숫자를 모두 더해 한 부분의 크기부터 구해 볼까요?")},children:[n.jsx(re,{size:17}),"비율 확인"]})]})}function Yr({task:e,paused:t,settle:s}){const[r,a]=f.useState([]);function c(l){t||a(o=>o.includes(l)?o.filter(d=>d!==l):[...o,l])}return n.jsxs("div",{className:"rt-compare",children:[n.jsxs("div",{className:"rt-compare-head",children:[n.jsx("span",{children:"항목"}),n.jsx("b",{children:e.before}),n.jsx("b",{children:e.after})]}),n.jsx("div",{className:"rt-compare-rows",role:"group","aria-label":"서로 달라진 항목",children:e.rows.map((l,o)=>n.jsxs("button",{type:"button",className:r.includes(o)?"is-picked":"","aria-pressed":r.includes(o),onClick:()=>c(o),children:[n.jsxs("span",{children:[r.includes(o)&&n.jsx(re,{size:13}),n.jsx("b",{children:l.label})]}),n.jsx("span",{children:l.left}),n.jsx("span",{children:l.right})]},l.label))}),n.jsxs("p",{className:"rt-help","aria-live":"polite",children:["달라진 칸만 선택 · ",r.length,"개 표시"]}),n.jsx("p",{className:"rt-board-caption",children:e.caption}),n.jsxs("button",{type:"button",className:"rt-submit",disabled:r.length===0,onClick:()=>{const l=Lr(e,r),o=r.filter(h=>e.differences.includes(h)).length,d=r.length-o;s(l,l?"달라진 항목을 빠짐없이 확인했어요. 같은 항목은 그대로 두었어요.":d>0?"같은 내용인 항목도 표시됐어요. 두 칸을 차례로 다시 읽어 봐요.":`${o}곳은 정확하게 찾았어요. 아직 표시하지 않은 차이가 남아 있어요.`)},children:[n.jsx(re,{size:17}),"둘이 확인하기"]})]})}const U=["world","hyunsol","taewoo","taehun","seoyul","juhan","minhyuk","junyeon"],an={world:{location:"media",text:`n@media|세계가 편집실 모니터를 내 쪽으로 돌렸다. 업로드 버튼 위에서 커서가 멈춰 있었다.
w|오늘의 문제. 노래가 끝났는데 영상은 끝내기 싫어.
p|뒤에 뭐가 있는데?
n|화면 속 세계가 기타 피크를 떨어뜨렸다. 카메라 밖에서 내가 웃자 세계도 허리를 접고 웃었다.
w|서율이는 이걸 예고편으로 쓰래. 내가 평소에 안 짓는 표정이라나.
p|기타를 놓칠 뻔했네. 나는 웃느라 못 봤는데.
w|응. 나도 화면 확인을 안 했어. 조회수 잘 나올 순간에 조회수 생각 안 했다는 게 웃기지.
p|너는 어느 쪽이 좋아?
w|좋아서 보여 주고 싶고, 좋아서 안 보여 주고 싶어. 말이 안 되지?
p|나도 방금은 네 영상인지 우리 영상인지 모르겠었어.
n|세계는 공개용 자막을 지우지 않고 다른 창으로 옮겼다. 내 의견을 기다리는 동안 피크를 손안에서 굴렸다.
w|대신 다 귀엽다고만 하지는 마. 그러면 내가 어느 쪽에 마음 쏟는지 나도 모를 것 같아.
p|편집해 달라는 부탁인 줄 알고 왔는데 좀 더 어려운 부탁이네.
w|응. 네가 나를 좋아 보이게 하는 사람인지, 그냥 좋아하는 사람인지 알고 싶은 날인가 봐.
n|재생 막대는 웃음소리 한가운데 멈춰 있었다. 버튼 하나로 대신 답할 수는 없었다.`,options:[["웃음소리는 남기되 공개용 영상에서는 내 목소리를 뺀다.",`p|네가 좋아하는 표정은 남겼으면 해. 나는 아직 인터넷에 목소리가 나오는 건 어색하고.
w|응, 그건 네가 정하는 거지. 혼자 웃는 것처럼 보이지 않게 내가 설명 붙일게.
n|세계는 원본을 그대로 두고 공개용 사본을 만들었다.`,2,4,"public-boundary"],["원본은 둘이 간직하고, 다음 주 공개용 영상을 따로 찍자고 한다.",`p|오늘 건 우리한테 남겨 두자. 다음 주 수요일에는 내가 카메라를 잡을게.
w|조회수 없는 촬영 약속을 먼저 잡네. 수요일, 잊지 마.
p|그날도 잘 웃기지는 못할 수 있어.
w|너까지 연기하지는 마. 내가 보고 싶은 건 그쪽이니까.`,4,5,"commitment"],["세계가 고를 때까지 함께 보고, 내 감상은 말로 들려준다.",`p|피크 놓치고 나를 쳐다보는 데서 가장 웃었어. 네가 실수한 것보다 내가 거기 있었다는 게 좋아서.
w|나를 예쁘게 찍은 장면이 아닌데도?
p|응. 공개 여부는 네가 좀 더 생각해.
w|그런 감상이면 오늘 업로드는 미뤄도 안 아쉽겠다.`,5,2,"unperformed"]],callback:["공개용에는 네 목소리 뺐어. 나 혼자 웃는 것처럼 보일까 봐 자막을 세 번 고쳤지만.","수요일 촬영표에 네 이름 적었어. 원본 폴더는 우리 둘만 보기로 한 그대로야.","그날 영상, 아직 공개 안 했어. 네 감상부터 떠오르는 게 좋아서."]},hyunsol:{location:"library",text:`n@library|현솔은 도서관 반납함 앞에서 책 한 권을 뒤집었다. 표지에는 오래된 추리소설 제목이 적혀 있었다.
h|표정 관리 연습 좀 도와줘.
p|실험 발표 말하는 거야?
h|아니. 여기 주인공이 틀린 추리를 아주 당당하게 하는데, 네가 읽을 때 내가 웃으면 범인 들키잖아.
p|너도 처음엔 틀렸어?
h|틀렸지. 그래서 재밌었어. 그런데 내가 고르면 다 답부터 알고 있을 것처럼 보이나 봐.
n|현솔은 책을 내 쪽으로 밀었다가 대출 기한을 확인하고 멈췄다.
h|내일까지 반납이라 다 읽기는 어렵겠다. 마지막 장만 권하면 최악의 추천이고.
p|이 부분에 종이 끼워 놨네. 중요한 단서야?
h|아니. 둘이 점심 먹는 장면. 사건 설명은 한 줄도 없는데 이상하게 여기서 오래 멈췄어.
p|누가 뭘 먹는지 말다툼하는 부분이네.
h|상대가 싫어하는 걸 아는데, 좋아하는 건 한 번 더 묻거든. 그게 좋았나 봐.
n|현솔은 실험 노트처럼 밑줄을 긋지 않았다. 책갈피만 문장 아래로 조금 내렸다.
p|이번에는 네가 답 아는 문제를 푸는 시간이 아니구나.
h|응. 그냥 나랑 같은 데서 웃을지 궁금했어. 다른 데서 웃어도 말해 주고.`,options:[["지금 읽을 수 있는 첫 장을 읽고 내 추리를 들려준다.",`p|범인은 몰라도 이 사람 말투는 마음에 드네.
h|나는 그 사람 처음엔 싫었는데. 이유가 궁금하다.
n|현솔은 정답을 알려 주려던 입을 다물고 내 설명을 끝까지 들었다.`,3,2,"different-reading"],["다음 대출일에 같은 책을 빌려, 점심 장면부터 이야기하자고 한다.",`p|이번 주는 다 못 읽겠어. 다음 대출일에 빌리고 금요일 점심에 얘기할까?
h|못 읽었다고 완벽한 독후감 지어 오면 바로 들킨다.
p|그러면 읽은 데까지만.
h|좋아. 나도 결말 말고 좋아한 문장부터 가져올게.`,3,5,"commitment"],["현솔이 끼워 둔 장면을 먼저 읽고 왜 멈췄는지 더 묻는다.",`p|너도 좋아하는 걸 다시 물어봐 주는 쪽이 좋아?
h|매일 같은 답이라는 보장은 없으니까. 오늘은 단 음료도 괜찮거든.
p|그럼 내려가서 오늘 답으로 골라 줄래?
h|응. 관찰 결과 갱신할 기회 줄게.`,5,3,"curiosity"]],callback:["네가 좋아한 인물, 다시 읽으니까 전보다 덜 밉더라. 정답을 바꾼 건 아니고 시선이 하나 늘었어.","금요일 점심 얘기 잊지 않았어. 책 다 못 읽었어도 와. 약속한 건 독서 시험이 아니니까.","오늘 취향 다시 물어본 거 좋았어. 외웠다고 안 물어보는 사람보다 네 쪽이 더 정확해."]},taewoo:{location:"auditorium",text:`n@auditorium|강당 불이 반만 켜져 있었다. 태우는 무대가 아닌 세 번째 줄 객석에 앉아 안무 영상을 멈춰 놓고 있었다.
t|오늘은 평가위원 해 줘. 단, 잘한다는 말은 한 번만 허용.
p|이미 다른 사람한테 많이 들었어?
t|다들 잘한대. 그러고 누구도 마지막까지 안 봐. 그러면 내가 어디를 고쳐야 하는지 모르잖아.
n|영상 속 태우는 회전 뒤에 반 박자 빨리 멈췄다. 실제 태우의 손도 무릎 위에서 같이 멈췄다.
p|이 부분이 마음에 안 들어?
t|동작은 맞아. 내 표정이 대회 끝나고 채점 기다리는 것 같아. 이번 무대는 즐기자고 했는데.
p|그럼 점수 말고 어떻게 보였는지 말하면 돼?
t|응. 친구들 앞에서는 내가 제일 자신 있는 애잖아. 나부터 불안하다고 하면 다들 힘 빠질까 봐.
p|나한테는 불안한 얘기 해도 돼.
t|그 말 듣고도 멋있는 답 하고 싶네. 아, 나 진짜 승부욕 쓸데없이 넓다.
n|태우는 운동화 끈을 풀었다. 지금 바로 무대로 뛰어가 답을 찾지는 않았다.
t|너 같으면 어려운 회전을 뺄래? 성공하면 제일 멋진 부분이긴 해.
p|네가 춤추고 싶어서 남기는 건지, 못 할까 봐 남기는 건지부터 듣고 싶은데.
t|그거 둘 다라서 여기 앉아 있는 거야. 나 오늘은 네가 무조건 내 편만 들지는 않았으면 좋겠어.`,options:[["어려운 회전을 남기고, 관객으로서 느낀 긴장을 구체적으로 말한다.",`p|성공했을 때 네가 웃는 게 좋아. 대신 회전 전부터 웃어야 한다는 숙제는 빼도 되지 않을까.
t|불안해 보이는 것도 내 얼굴이니까?
p|응. 그다음 진짜 웃는 얼굴이 더 잘 보였어.
t|그건 처음 듣는 평가네. 영상 다시 한 번만 보자.`,4,2,"honest-audience"],["이번 주 금요일에도 객석에서 연습을 보겠다고 먼저 약속한다.",`p|오늘 당장 고르지 말고 두 버전 다 해 봐. 금요일 네 시, 나는 여기서 끝까지 볼게.
t|일정부터 확인해. 나 기다리면서 괜히 폼 잡을 거란 말이야.
p|확인했어. 여기 세 번째 줄.
t|그럼 다음에는 내 생각부터 말할게. 네가 정해 주는 춤은 싫으니까.`,3,5,"commitment"],["한 번은 회전을 빼고, 더 춤추고 싶어지는 버전을 찾아보자고 한다.",`p|쉬운 버전이 패배는 아니잖아. 둘 다 해 보고 네가 한 번 더 하고 싶은 걸 골라.
t|잠깐 자존심 상했는데, 한 번 더 하고 싶은 거라니까 알겠네.
p|지금은 말로만. 끈 풀었잖아.
t|응. 오늘은 앉아서 상상 연습. 너도 옆자리 비우지 마.`,2,5,"rest-without-score"]],callback:["회전 전에 불안해 보여도 된다는 말, 다음 영상에서 써먹었어. 마지막 웃음은 덜 억지더라.","금요일 객석 약속, 네가 먼저 말한 거 아직 기억해. 춤 다 끝나기 전에 박수로 마무리하지는 말고.","쉬운 버전도 해 봤어. 잘하는 걸 줄인 게 아니라 내가 좋아하는 걸 찾는 기분이었어."]},taehun:{location:"garden",text:`n@garden|벤치 옆 돌길에 빗물이 마르고 있었다. 태훈은 손바닥 크기 돌 표본과 시집을 나란히 꺼냈다.
o|오늘은 하늘 안 봐. 발밑에 좋은 페이지가 있어서.
p|이 돌을 책처럼 읽는 거야?
o|표본이야. 학교 전시용. 여기 알갱이 보이지? 만들어진 시간을 생각하면 내 숙제 마감 정도는 별일 아닌 것 같아.
p|그러면 숙제 안 해도 된다는 결론은 아니겠네.
o|응. 돌은 출석 확인을 안 받으니까.
n|태훈이 웃다가 표본을 내려놓았다. 시집 사이에서 자신이 쓴 짧은 글 한 장이 떨어졌다.
p|읽어도 돼?
o|첫 줄만. 아니, 끝까지. 첫 줄만 보면 괜히 멋있는 척한 애가 돼.
n|글에는 파도에 닳은 돌과, 기다리는 동안 조금 달라진 사람 이야기가 있었다. 누군가의 이름은 없었다.
p|마지막 문장이 두 개네.
o|하나는 내가 좋아할 만한 문장. 하나는 실제로 하고 싶었던 말. 어느 쪽인지 네가 맞히는 게임은 안 할래.
p|하고 싶었던 쪽은?
o|내일도 네가 와 줬으면 좋겠다고. 그걸 돌 이야기로 너무 멀리 돌아왔네.
n|태훈은 종이를 다시 접지 않았다. 돌의 이름보다 그 문장을 틀리지 않게 듣고 싶었다.`,options:[["비유를 남긴 쪽을 고르고, 어떤 장면이 떠올랐는지 말한다.",`p|나는 돌아온 문장이 좋아. 네가 뭘 오래 보는 사람인지 알 것 같아서.
o|바로 말하지 못한 걸 좋게만 보는 건 아니지?
p|응. 하지만 한 번 더 읽고 싶어지는 쪽이었어.
o|그러면 밑에 짧은 말을 따로 붙일래. 글과 약속을 섞어 숨기지는 않게.`,4,2,"read-between"],["내일 같은 벤치에서 내 문장도 한 줄 읽어 주겠다고 한다.",`p|내일 네 시에 여기서 보자. 대신 나도 한 줄 써 올게. 돌 이야기는 못 할 수도 있어.
o|점심 얘기도 괜찮아. 네가 정말 본 거면.
p|네가 내 글 보고 웃으면?
o|같이 웃고 왜 웃었는지 말해 줄게. 그건 약속할 수 있어.`,3,5,"commitment"],["마지막 문장에 바로 답하고, 돌 표본 이야기는 그다음에 듣는다.",`p|나도 다시 오고 싶어. 내일 시간은 확인하고 알려 줄게.
o|지금 당장 날짜를 붙이지 않아도, 오고 싶다는 건 들었어.
p|그럼 이제 돌이 어떻게 만들어졌는지 들을 차례네.
o|응. 이번엔 천천히 돌아가도 되는 이야기다.`,5,3,"plain-answer"]],callback:["돌 이야기 밑에 한 줄 더 썼어. 기다리는 건 긴 시간이지만 만나자는 말은 짧아도 된다고.","내일 같은 벤치 약속, 예보보다 먼저 확인했어. 비 오면 현관 옆으로 같이 옮기자.","오고 싶다는 대답 들은 날에는 날씨를 안 적었더라. 처음엔 빠뜨린 줄 알았어."]},seoyul:{location:"band",text:`n@band|서율은 건반 위에 그림 세 장을 세워 놓았다. 음표 대신 겨울나무와 버스 창문과 비어 있는 의자가 있었다.
s|제목 맞히기는 금지. 네가 다른 걸 들어도 틀린 건 아니니까.
p|그림으로 곡을 만들었어?
s|정확히는 색을 놓는 순서. 오른쪽이 파랑이면 이 음부터.
n|서율이 짧은 화음을 쳤다. 나는 소리가 사라질 때까지 그림을 보았다.
p|버스 타고 돌아갈 때처럼 들린다. 피곤한데 내릴 정류장 지나치기는 싫은 날.
s|나는 기다리는 사람을 그렸는데. 돌아가는 사람도 있네.
p|네가 생각한 것과 다르면 다시 들어 볼게.
s|아니. 그게 궁금해서 불렀어. 정답을 확인하고 싶으면 혼자 들어도 되잖아.
n|서율은 의자 그림을 내려놓고 빈 종이 한 장을 올렸다.
s|그런데 이 부분은 아직 못 정했어. 소리가 끝나면 바로 다음 곡을 틀까, 조용한 데를 남길까.
p|공연에서는 조용하면 다들 끝난 줄 알 수도 있겠다.
s|응. 네가 있으면 끝났냐고 물어볼 테니까 괜찮은데, 객석은 모르니까.
p|나한테는 어떤 쪽을 들려주고 싶었는데?
s|조용한 쪽. 네가 그 뒤에 무슨 말을 할지 기다리는 음악으로.`,options:[["공연용에는 연결음을 제안하고, 조용한 버전은 따로 남긴다.",`p|무대에서는 작은 음 하나만 연결해 볼까. 지금 들은 버전은 바꾸지 말고.
s|두 개의 끝을 가져도 되겠네.
p|둘 다 네 곡이고, 듣는 자리가 다른 거니까.
s|그럼 네가 두 버전 이름을 구별해 줘. 잊지 않게.`,2,4,"two-versions"],["다음 연습에도 와서 조용한 마지막을 끝까지 듣겠다고 한다.",`p|목요일 네 시에 다시 와도 돼? 그때도 조용해지면 바로 박수 안 칠게.
s|박수 안 치려고 약속 잡는 사람 처음 봐.
p|네 다음 말을 듣고 싶어서.
s|그럼 목요일에는 악보 옆에 의자부터 놓을래.`,4,5,"commitment"],["말 대신 빈 종이에 방금 떠오른 버스 창문을 그린다.",`n|내 창문은 사다리꼴로 기울었다. 서율은 선을 바로잡지 않고 창밖에 작은 불빛을 더했다.
s|네가 들은 쪽도 여기에 들어왔네.
p|곡이랑 다르게 생겨도 돼?
s|그래서 좋은데. 오늘은 이걸 마지막 그림으로 두자.`,5,2,"own-interpretation"]],callback:["두 끝에 다른 이름 붙인 거 기억해. 공연용이 정답이고 다른 건 연습본인 건 아니니까.","목요일 의자, 건반 옆 말고 네 그림이 잘 보이는 쪽에 놨어. 조용해지면 그쪽 볼 거야.","네 버스 창문은 안 고쳤어. 내 곡 듣고 네가 떠올린 곳이니까."]},juhan:{location:"cafeteria",text:`n@cafeteria|주한은 컴퓨터 대신 작은 종이 상자를 꺼냈다. 안에는 모양이 제각각인 쿠키 네 개가 들어 있었다.
j|오류 보고서는 받는데, 심사 점수는 안 받아.
p|오늘 시연은 먹는 거야?
j|영상에서 분명 같은 크기로 하랬는데 반죽은 배열이 아니더라. 자르면 자른 대로 안 남아.
p|이건 별이고 이건 구름인가?
j|둘 다 별. 하나는 사양 변경이 많았어.
n|주한은 가장 예쁜 쿠키를 내 쪽으로 밀었다. 자신의 것에는 작은 균열이 있었다.
p|너는 왜 갈라진 걸 골라?
j|내가 만들었으니까 잘된 건 너한테 주고 싶지. 그런데 먹어 보고 솔직히 말해. 나 실패작 들키기 싫어서 포장만 잘한 걸 수도 있으니까.
p|실패작부터 찾아내는 버릇은 잠깐 쉬어도 되지 않을까.
j|그러면 할 말이 없어질까 봐. 컴퓨터실 밖에서 너 만나는 건 내가 먼저 고른 거거든.
n|주한은 소매를 정리하고 나를 보았다. 화면 속 얼터에고가 대신 꺼낼 문장은 없었다.
p|그럼 쿠키 만든 날 이야기해 줘. 어디서부터 별이 구름이 됐는지.
j|반죽을 냉장고에 넣고 기다리는 동안. 자꾸 문 열어서 엄마한테 세 번 혼났어.
n|맛을 평가하기도 전에 웃음이 먼저 났다. 주한의 어깨도 조금 풀렸다.`,options:[["갈라진 쿠키도 반으로 나눠 두 종류를 같이 맛본다.",`p|어느 쪽이 더 맛있는지는 같이 먹어 봐야 알지.
j|모양이 결과에 영향을 주지 않을 수 있다, 같은 건가.
p|그 설명은 주한다운 식사 인사네.
j|아. 또 설명부터 했네. 그러면 이번엔 그냥, 같이 먹어 줘서 좋아.`,4,3,"share-imperfect"],["다음에는 내가 간식을 준비해 같은 자리에서 만나자고 한다.",`p|다음 화요일은 내 차례로 할래. 잘 만든 걸 가져온다는 약속은 못 하고.
j|시연 참가자 다음은 공급자야?
p|아니, 그냥 같이 간식 먹고 싶은 사람.
j|응. 그 호칭은 수정 안 할게. 화요일 같은 자리, 저장했어.`,3,5,"commitment"],["맛과 굽기를 구체적으로 말하고 주한이 원한 결과를 묻는다.",`p|가장자리는 바삭하고 안은 부드러워. 너는 어느 쪽을 만들고 싶었어?
j|바삭한 쪽. 그런데 네가 부드러운 데서 한 번 더 먹으니까 좀 고민돼.
p|내 취향으로 바꾸라는 건 아니야.
j|알아. 내 취향도 말하고 네 것도 듣는 중이라는 거지.`,2,4,"author-not-avatar"]],callback:["갈라진 것도 나눠 먹으니까 어느 게 실패작이었는지 표시할 이유가 없더라.","화요일 간식 시간은 자동 알림에 안 맡겼어. 내가 먼저 너를 부를래.","가장자리 얘기 듣고 조금 더 구워 봤어. 네 취향 말고 내가 만들고 싶은 쪽으로. 다음에 비교해 줘."]},minhyuk:{location:"roof",text:`n@roof|점심시간 옥상 쉼터. 민혁은 출입 가능 시간을 확인한 뒤 벤치에 앉았다. 완장은 가방 밖에 반쯤 나와 있었다.
m|누가 찾으면 여기 있다고 알려 줘. 아니, 점심 끝나면 내가 갈 거라고만.
p|둘 중 어느 쪽으로 말하면 돼?
m|두 번째. 입으로 말하니까 첫 번째가 또 일하겠다는 뜻이네.
n|민혁이 작은 디저트 가게 전단을 펼쳤다. 업무표보다 접힌 자국이 많았다.
p|행사 답사야?
m|아니. 내가 가고 싶은 곳. 설명이 이렇게 짧아도 이상하지 않지?
p|메뉴에 동그라미가 세 개네. 하나 고르기 어려웠어?
m|가격이랑 문 닫는 시간이랑 버스 시간을 맞추다 보니까 못 갔어. 생각해 보면 혼자 들어가는 게 어색해서 다른 걸 계산한 것 같아.
p|반장은 어디든 먼저 들어가는 사람인 줄 알았는데.
m|학교 밖에서는 반장석이 없잖아. 문 열고 어디 앉아도 되는지 나도 몰라.
n|민혁은 전단 모서리를 손바닥으로 폈다. 내 쪽에 있던 완장을 가방 안으로 밀어 넣었다.
m|너라면 미리 갈 곳을 정하는 게 편해, 걷다가 고르는 게 편해?
p|같이 가는 사람에 따라 다를 것 같은데.
m|그럼 오늘은 내 성격 검사 말고 네가 원하는 것도 말해. 내가 다 맞추겠다고 하면 그것도 막아 주고.`,options:[["가게부터 정하되 메뉴는 도착해서 각자 고르자고 한다.",`p|입구 하나만 정하자. 안에서 먹는 건 각자 그때 고르고.
m|최소한의 계획. 그 정도면 내 계산기도 쉴 수 있겠네.
p|안 쉬면 내가 메뉴판으로 가릴게.
m|실행 방법은 조금 무식한데 효과는 있을 것 같다.`,2,4,"limited-plan"],["이번 주 토요일에는 민혁의 가게, 다음에는 내 장소에 가자고 한다.",`p|토요일 두 시는 돼? 이번에는 네가 고른 가게로 가고, 다음에는 내가 안내할게.
m|두 번 만나는 약속을 한 문장에 넣었네.
p|한 번씩 좋아하는 곳 보여 주고 싶어서.
m|응, 두 시. 두 번째 날은 내가 먼저 물어볼게. 네가 전부 준비하는 건 싫으니까.`,4,5,"commitment"],["아직 날짜는 정하지 않고 민혁이 고른 세 메뉴의 이유를 듣는다.",`p|일정부터 맞추면 또 회의 같겠다. 이 케이크에는 왜 동그라미 두 번이야?
m|사진보다 실물이 크대. 같이 먹으면 좋을 것 같아서.
p|그러면 후보에서 그건 빼지 말자.
m|응. 오늘은 가고 싶다는 얘기만 해도 좀 다녀온 기분이네.`,4,2,"personal-wish"]],callback:["정할 건 입구 하나뿐이라는 말 덕에 전단 뒷면을 안 채웠어. 아직은 좀 허전하지만.","토요일 두 시, 내가 고른 가게. 두 번째 만남은 네가 안내하기. 이건 업무 인수인계 아니지?","케이크 얘기 다 들어 준 날부터 동그라미 더 안 쳤어. 같이 먹을 사람한테 말했으니까."]}},Zr={world:[["오늘 마음에 든 목소리를 세계의 말로 먼저 듣고 싶다고 한다.",`w|네 감상 듣는 게 좋아서 내 건 안 물어볼 줄 알았네.
p|오늘 듣고 싶은 사람 목소리가 생겼다는 건 나도 같으니까.
w|그럼 하나씩 말하자. 나는 네가 웃다가 다시 진지해지는 목소리.`,3,4,"her-voice"],["다음 만남에는 카메라를 내가 가져오겠다고 한다.",`w|내가 늘 찍으니까 대신 해 주려는 거야?
p|응. 너도 화면 신경 안 쓰고 쉬었으면 해서.
w|고마워. 다만 그날 찍고 싶은지는 먼저 물어봐 줘. 안 찍히는 게 늘 쉬는 건 아니더라.`,3,-1,"camera-first"],["헤어지기 전에 오늘의 짧은 음성 인사를 서로 녹음한다.",`w|공개 안 하는 인사말이지?
p|응. 듣고 싶을 때 자기 것만 꺼내 듣기.
w|그럼 멋있게 인사 못 해도 다시 찍지 말자. 잘 가, 그리고……오늘 와서 좋았어.`,4,2,"voice-postcard"]],hyunsol:[["오늘 가장 뜻밖이었던 현솔의 말을 골라 들려준다.",`h|내가 읽다 틀린 부분도 말해 준 게 의외였어?
p|너는 틀린 답을 바로 지우는 사람인 줄 알았거든.
h|남이 볼 노트는 정리하지. 네 앞에서는 수정선 좀 보여도 되나 싶었고.`,4,2,"unpolished"],["다음에는 내가 좋아하는 책 한 권을 가져오겠다고 한다.",`h|장르 달라도 괜찮아. 독서 취향 맞추는 시험 아니니까.
p|그러면 진짜 좋아하는 걸로. 네가 싫어하면 이유도 들을게.
h|그런 식이면 한 권 읽고 할 얘기가 꽤 생기겠다.`,2,5,"reciprocal"],["추천받은 책의 결말을 맞혀서 보여 주겠다고 한다.",`h|맞히면 자랑은 들어 줄게. 그런데 내가 네 정답 확인하려고 빌려준 건 아니야.
p|같이 얘기할 준비 하고 싶어서 조금 서둘렀네.
h|그럼 모르는 문장도 하나 가져와. 나도 같이 모르고 싶을 때가 있으니까.`,2,-1,"score-reading"]],taewoo:[["공연 얘기 대신 오늘 내가 긴장했던 순간도 하나 말한다.",`t|너는 네가 떨렸다는 얘기 이렇게 잘하네.
p|잘하는 척하는 걸 잠깐 쉬어 보려고.
t|그러면 나도 한 번 더 쉴래. 실은 지금도 네 대답이 좀 신경 쓰여.`,3,4,"share-nerve"],["새 안무를 평가하는 날과 그냥 만나는 날을 따로 정한다.",`t|둘 다 나한테 와야 하는 건 알고 있지?
p|응. 네가 춤 안 춰도 볼 일이 없어진 건 아니니까.
t|좋아. 그냥 만나는 날에는 운동화 설명부터 안 할게. 다른 얘기도 많거든.`,4,3,"without-stage"],["선택을 고민할 때마다 내 의견부터 물어보라고 한다.",`t|그러면 나 네 점수 받으려고 춤추게 될 수도 있잖아.
p|혼자 고민하지 말라는 뜻이었어.
t|그쪽은 좋아. 내 생각 먼저 하고 너한테 들려줄게. 네 생각은 그다음에.`,2,-1,"my-score"]],taehun:[["아까 들은 문장을 내 기억대로 다시 말해 본다.",`o|한 단어 다른데. 근데 네가 기억한 쪽도 괜찮다.
p|고쳐 줘. 네가 쓴 문장으로 알고 싶은 부분도 있어.
o|그럼 두 줄로 남기자. 내가 쓴 것, 네가 기억한 것.`,3,4,"two-lines"],["다음 글은 내 이야기가 없어도 읽고 싶다고 한다.",`o|네 얘기를 넣어야 와 주는 건 아니라는 거지?
p|응. 태훈이 뭘 오래 보고 있었는지 궁금해서.
o|그 말이면 혼자 있는 날에도 쓸 게 많아지겠다.`,2,5,"her-world"],["좋아하는 문장을 모두 외워 다음엔 바로 알아보겠다고 한다.",`o|나 다음에 고칠 수도 있는데. 그러면 네가 외운 쪽이 아깝겠다.
p|좋아서 기억하고 싶다는 말이 너무 커졌네.
o|한 줄만 기억해도 돼. 다음에 다른 줄이 좋아지면 그것도 들려주고.`,4,0,"memorise"]],seoyul:[["같은 색을 고르지 않아도 계속 감상을 바꿔 듣자고 한다.",`s|그러면 내 그림이 네 취향 아닌 날에도 와?
p|응. 왜 다르게 보이는지 얘기할 수 있잖아.
s|좋아. 마음에 든다는 말만 기다리면 그림도 자꾸 좁아지니까.`,2,5,"different-colours"],["다음 그림에는 둘의 얼굴을 꼭 넣어 달라고 한다.",`s|얼굴이 없어도 우리였는데.
p|조금 더 티 나는 기억이 갖고 싶어서.
s|그 마음은 알겠어. 꼭이라는 말만 빼면 나도 생각해 볼래.`,4,-1,"visible-us"],["그림과 상관없는 오늘의 작은 일을 서로 하나씩 말한다.",`s|그것도 나중에 그리게 될 수 있는데.
p|그리기 전에 그냥 수다로 들려줘도 되잖아.
s|그럼 오늘 도시락 뚜껑을 반대로 닫았어. 이상하게 그 얘길 너한테 하고 싶었어.`,3,4,"ordinary-talk"]],juhan:[["잘 만든 결과물 말고 만들며 웃었던 순간을 기억한다고 말한다.",`j|그럼 내가 망한 얘기를 또 해도 듣겠네.
p|망한 것만 고를 필요는 없고. 네가 들려주고 싶은 쪽으로.
j|응. 성공 로그랑 오류 로그 말고 하루 이야기가 되는 거구나.`,3,4,"whole-day"],["다음 만남은 주한이 편한 컴퓨터실로 정하자고 한다.",`j|편하긴 한데 오늘은 일부러 밖으로 나왔어.
p|내가 너무 쉽게 네 자리를 정했네.
j|컴퓨터실도 좋지만 그날 내가 어디서 만나고 싶은지 한번 물어봐 줘.`,2,-1,"safe-default"],["다음에는 내가 서툰 취미를 하나 보여 주겠다고 한다.",`j|완성해서 보여 주는 거야, 만들 때 부르는 거야?
p|만들 때. 네가 실수 보고 웃으면 나도 좀 편해질 것 같아서.
j|그럼 이번엔 내가 옆자리에서 기다리는 쪽. 멋있게 보이려고 안 할게.`,4,3,"other-beginner"]],minhyuk:[["내가 원하는 것도 미루지 않고 한 가지 말한다.",`m|내 취향에 맞춰 준 게 아니었어?
p|오늘은 조금 더 걷고 싶어. 네가 버스 탈 시간이면 다음에 가고.
m|아직 괜찮아. 서로 원하는 걸 말하니까 오히려 고르기 쉽네.`,3,4,"both-wishes"],["남은 일정은 내가 전부 알아보고 보내 주겠다고 한다.",`m|도와주려는 건 아는데, 그러면 내가 너 대신 혼자 정하던 것과 같은데.
p|맞네. 내가 맡을 부분부터 정할까?
m|길은 네가, 메뉴는 내가. 그리고 마음 바뀌면 둘 다 말하기.`,2,-1,"take-over"],["급하지 않은 약속 하나는 빈칸으로 남겨 보자고 한다.",`m|아무것도 안 하겠다는 뜻은 아니지?
p|그날 얘기하다 정할 일이 하나쯤 있어도 좋을 것 같아서.
m|좋아. 대신 만날 시간은 남겨 둬. 그 빈칸까지 없어지면 나도 아쉬우니까.`,4,3,"leave-a-blank"]]},Qr={world:{"1:0":["내 이름 이제 제대로 부르네. 전학생 안내 방송 담당은 퇴직해도 되겠다.","퇴직하면 그냥 세계랑 얘기하러 와야겠네."],"1:1":["기다린 시간이 길면 혼자 상상하게 돼. 바쁜 거겠지 하다가, 나만 기대했나 싶고.","혼자 끝까지 답 내리기 전에 나한테도 물어봐. 오늘 답은 여기 있잖아."],"1:2":["친구들한테 답하느라 너 놓칠 뻔했네. 잠깐, 이 인사는 화면 말고 너한테 하는 거야.","그럼 나도 휴대전화 넣을게. 오늘 세계 목소리는 바로 들으면 되니까."],"2:1":["무대에서 안 보이는 건 그냥 어두워서라고 생각할 수 있거든. 약속에서는 그게 잘 안 되더라.","어디서 기다렸는지 지금은 아니까, 다음 답까지 상상하지 말고 같이 확인하자."],"2:2":["오늘은 네 앞에서 말 고르는 게 티 나도 그냥 둘래. 편집할 수 없다고 망한 건 아니잖아.","응. 나도 멋있는 대답 못 찾았다고 입 다물고 있지는 않을게."],"3:0":["내일 소개 멘트에 우리 반 전부 넣었더니 너무 길어졌어. 이름은 빼기 싫은데.","이름 말하는 만큼 악기를 한 번씩 울리면 어때? 너 혼자 외우지 말고."],"3:1":["박수가 없어도 좋다고는 못 하겠어. 좋아서 하는 일인데 잘했다고도 듣고 싶거든.","둘 중 하나만 진심일 필요는 없잖아. 내일은 내가 들은 걸 내 말로 말해 줄게."],"4:1":["무대 끝나고 카메라부터 찾았는데 네가 거기 있더라. 그래서 잠깐 잊었어.","오늘 영상에 빠진 순간 하나는 내가 기억해 둘게. 네가 숨 돌리던 얼굴."],"4:2":["집에 가서 댓글 확인은 할 거야. 그런데 오늘 네가 한 말이 먼저 생각날 것 같아.","그러면 나도 뭔가 써 둬야겠다. 내일 네가 뭐라고 했는지 물어보면 안 틀리게."]},hyunsol:{"1:0":["네 필통에 있던 연필, 심이 부러졌더라. 책상 흔들릴 때 또 떨어뜨리기 전에 깎아 왔어.","질문하기도 전에 답부터 받은 기분인데. 이번엔 내가 뭐 도와줄까?"],"1:1":["네가 늦은 걸 설명하는 문장과 네가 무심하다는 문장은 달라. 하나를 안다고 둘 다 알지는 못하니까.","오늘은 앞 문장만 같이 확인해 줘. 뒷문장은 내가 행동으로 말할게."],"1:2":["점심 메뉴 외우지 마. 나 오늘 좋아하는 반찬 바뀌었어. 정확히는 둘 다 좋아.","관찰 대상이 너무 적극적으로 조건을 바꾸는데. 내일은 그냥 물어볼게."],"2:1":["지금 짜증 나는 건 맞아. 그렇다고 옆에서 말 거는 너한테까지 화난 건 아니야.","말해 줘서 다행이다. 뭘 해야 안 거슬릴지 혼자 계산하고 있었거든."],"2:2":["내가 농담한 뒤에 너 한 박자 늦게 웃는 거 알아? 틀린 말인가 확인하는 것 같아.","조금 그래. 이제는 너도 장난친다는 변수 넣어 둘게."],"3:0":["질문 카드에 예상 못 한 게 하나 있어. 좋아하는 사람이 부스에 오면 설명이 달라지느냐고.","과학 질문은 아닌데 어려운 질문이네. 일단 단위는 빼먹지 마."],"3:1":["아까 목소리 떨린 거 들었어? 아무도 못 들은 척해서 내가 혼자 과장한 줄 알았네.","들었어. 그래도 중요한 설명은 다 들렸고. 둘 다 말해 주면 되지?"],"4:1":["초등학생 손님이 내 설명보다 네 그림을 먼저 이해하더라. 조금 억울하고 꽤 유용했어.","다음에는 네 설명 옆에 작게 붙일까? 억울함이 줄어드는 크기로."],"4:2":["오늘은 결과표 안 쓸 거야. 잘한 것만 적으면 이상하게 네가 빠질 것 같아서.","그러면 기억나는 것부터 적자. 내가 옆에서 물 쏟을 뻔한 것도 남기고."]},taewoo:{"1:0":["복도에서 음악 듣고 걷다가 혼자 돌 뻔했어. 너 봤지? 못 본 척하기엔 너무 웃었는데.","넘어지는 줄 알고 손부터 나간 거야. 웃은 건 그다음이고."],"1:1":["나 방금 짜증 낸 목소리까지 기억할 거지? 멋있는 장면만 남기고 싶은데 이미 늦었네.","네가 다시 시작하자고 먼저 말한 것도 같이 기억할게."],"1:2":["춤 못 춘다는 핑계 이제 그만 써. 내 얘기 듣는 데는 자격시험 없거든.","그럼 오늘은 내 얘기도 하나 할게. 듣는 쪽은 네가 해."],"2:1":["누가 일부러 늦은 건 아니라고 알았는데도 속상한 건 안 없어져. 나 좀 못됐나?","알아낸 사실이랑 오늘 속상한 건 따로 있을 수 있지. 다 풀린 척은 안 해도 돼."],"2:2":["가끔 네가 아무 준비 없이 웃으면 부러워. 나는 웃는 얼굴까지 연습하거든.","나도 네 앞에서는 준비한 말이 맨날 없어져. 공평한 부분도 있네."],"3:0":["내일 객석에서 나 보자마자 소리 지르면 안 돼. 내가 먼저 웃으면 시작 동작 놓친다.","그럼 시작 전에는 조용히, 네가 자리 잡으면 제대로 응원할게."],"3:1":["아까 다시 춰 보니까 화난 박자랑 신나는 박자가 다르더라. 너 있으면 후자가 조금 빨리 와.","기분 좋다는 이유로 속도 올리지는 마. 내 박수 아직 느리니까."],"4:1":["마지막에 한 발 틀렸어. 지금 먼저 말해 놓는 거야. 잘한 척하다 들키기는 싫어서.","봤어. 다음 발로 돌아오는 것도 봤고. 네가 웃길래 나도 웃었어."],"4:2":["내일 근육통 오면 오늘 자랑한 말 다 취소할 수도 있어. 그때도 웃으면 같이 걸어 줘.","웃는 건 자신 있고, 걷는 속도는 네가 정해. 오늘처럼 경쟁 안 할게."]},taehun:{"1:0":["복도 창문에 구름 그림자 지나갔어. 네가 오기 전이어서 사진 찍으려다 놓쳤네.","그럼 나한테 설명해 줘. 사진에 없는 모양으로 상상해 볼게."],"1:1":["예보 틀리면 하늘은 그냥 그대로인데 사람만 약속을 다시 잡잖아. 오늘은 약속 쪽이 더 어렵네.","구름 탓할 수 없는 날이네. 대신 오늘 우리가 본 건 정확히 남기자."],"1:2":["아까 네 말 웃겨서 메모했는데 나중에 보면 왜 웃었는지 모를 것 같아.","그럼 표정도 적어. 읽고 또 모르겠으면 나한테 다시 물어보고."],"2:1":["관측 노트에는 본 것만 쓰는데, 빈 의자를 보면 안 본 장면부터 생각하게 돼.","오늘 비어 있던 이유는 같이 봤잖아. 상상한 장면 옆에 그 사실도 적어 줘."],"2:2":["너는 같은 얘기를 다시 들으면 지루해? 나는 읽었던 문장도 옆사람이 달라지면 새로 보이거든.","똑같이 다시 말하기보다 지금 어떻게 들리는지 얘기해 줘. 그건 처음 듣는 거니까."],"3:0":["전시 설명에서 영원이라는 말을 지웠어. 지질 시간 길다고 정말 영원한 건 아니니까.","그러면 오래 좋아했다는 말에도 끝나는 날짜를 붙여야 해?"],"3:1":["내일 맑겠다는 말은 못 하겠고, 내일도 만나고 싶다는 말은 내가 확인할 수 있네.","그 답은 예보보다 정확하겠다. 나도 지금 같은 생각이니까."],"4:1":["아이 하나가 돌 표본 보고 달 같다고 했어. 달은 아니라고 설명하면서도 그 눈은 좀 좋더라.","틀린 이름은 고쳐 주고 발견한 기분은 남겨 준 거네. 너다운 설명이다."],"4:2":["오늘 하늘 메모를 비워 뒀어. 못 봐서. 하루가 비었다는 뜻은 아니고.","그러면 마지막 줄은 같이 봐 두자. 지금 구름이 창문 모서리에 걸렸네."]},seoyul:{"1:0":["네 이름 적어 봤는데 글자 사이가 조금 넓어. 불렀을 때는 더 가까운 느낌이었는데.","글씨 고치지 말고 한 번 더 불러 봐. 내가 조금 가까이 가면 되지."],"1:1":["예약표는 같은 검정인데 지워진 줄이 더 눈에 띄어. 안 보이게 지웠는데 남았네.","오늘 우리가 보던 시간도 안 없어진 거겠지. 따로 적어 두자."],"1:2":["네가 가방 멘 방향으로 그림자가 기울어. 먼저 가라는 그림 같아서 조금 싫다.","가방 내려놓을까? 아니면 같이 걸으면 그림자도 나란해지려나."],"2:1":["다른 문 앞에서 기다린 사람들을 그리면 한 장에 못 넣겠네. 거리보다 표정이 달라서.","모였을 때 표정은 한 장에 들어가겠다. 오늘이 기다린 그림으로만 끝나진 않았으니까."],"2:2":["말을 안 하면 네가 그림 보는 줄 알았어. 내 대답 기다리는 거였네.","응. 그림은 급하게 안 봐도 되는데, 네가 지금 하고 싶은 말은 듣고 싶어."],"3:0":["전시 제목 글씨는 크게 썼어. 내 이름은 작게. 그런데 네가 못 찾으면 좀 서운할 것 같아.","작아도 찾을게. 대신 내가 못 읽는 글씨면 옆에서 한 번 읽어 줘."],"3:1":["정리된 그림만 보여 주려다가 연필 자국도 남겼어. 네가 처음 본 건 이쪽이었으니까.","중간을 지우지 않은 게 좋다. 나는 완성 전에 네가 어떻게 고민했는지 봤거든."],"4:1":["건반에서 손 뗐는데 잠깐 아무도 박수 안 쳤어. 끝인 줄 몰랐나 봐. 그 틈이 좋았어.","소리가 아직 남아 있는 줄 알았어. 나는 그 틈까지 듣고 싶었고."],"4:2":["전시 그림은 다 가져갔는데 여기 앉은 자리 색은 못 떼겠네. 빛이라서.","내일 오면 다른 색일 텐데, 같은 자리인지 같이 확인해 볼까?"]},juhan:{"1:0":["네 이름 입력 칸 테스트하다 내 이름을 열 번 썼어. 버그는 없고 자의식만 남았네.","입력 칸이 고생했겠다. 이번에는 내가 쓰고 네 이름을 불러 줄게."],"1:1":["화면 이름에 내가 만든 이름이 있으면 내가 전부 알아야 할 것처럼 보일까 봐 걱정돼.","모르는 건 모른다고 해 줘. 네가 실제로 아는 부분을 들으려고 온 거니까."],"1:2":["대답 오래 생각하는 거 오류 난 건 아니야. 방금 네 말이 예상 입력에 없어서.","내 말도 쓰기 전에 테스트 못 해 봤어. 조금 어색해도 서로 한 번 들어 주자."],"2:1":["작동 원리 설명하면 변명처럼 들릴까 봐 문장을 줄였는데, 줄이니까 더 이상했어.","이번에는 길어도 들을게. 모르는 부분이 나오면 내가 끊고 물을게."],"2:2":["컴퓨터는 저장 누르면 남잖아. 네가 한 말은 내가 기억 잘못하면 어떡하지 하고 자꾸 다시 생각해.","그러면 다시 물어봐. 똑같은 문장보다 내가 지금 뜻하는 걸 말해 줄게."],"3:0":["시연 버튼을 크게 했더니 내가 숨을 데가 없어졌어. 사람들이 화면 보고 바로 나를 봐.","만든 사람한테 궁금한 게 생겼나 봐. 나도 그랬으니까."],"3:1":["오늘 설명하다 막히면 화면으로 넘기지 않으려고. 네가 기다려 준 적이 있어서 가능한 계획이야.","말 막히면 물 한 모금 마셔. 나는 그동안 다음 질문 생각하고 있을게."],"4:1":["아이들이 프로그램보다 내가 만든 쿠키 그림을 더 눌렀어. 기능 목록에는 없는 인기였어.","다음에는 쿠키 버튼 눌러도 화면 속에서만 나오는 거라고 크게 써 두자."],"4:2":["로그 저장 끝냈어. 이제 컴퓨터 꺼도 오늘 만난 사람들까지 꺼지는 건 아니네.","그러면 첫 오프라인 일정은 천천히 내려가기. 재시작은 필요 없고."]},minhyuk:{"1:0":["교문에서 네 이름 부르다가 출석 확인처럼 됐지. 다음에는 손만 흔들까 고민했어.","다음에도 불러 줘. 대답은 내가 출석이라고 안 할게."],"1:1":["내가 확인했다고 말한 일정이라 더 미안해. 두 번 확인했는데도 이렇게 될 수 있네.","네가 혼자 보증하는 시간표로 만들지 말자. 쓰는 사람들끼리 같이 확인하면 되지."],"1:2":["가방을 가볍게 하고 나왔더니 뭘 안 한 것 같아. 오늘 할 일은 끝났는데.","그러면 나랑 돌아가는 걸 남은 일이라고 적지 말고, 그냥 하고 싶은 걸로 둬."],"2:1":["다시 모이라고 큰소리부터 낼 뻔했어. 흩어진 이유를 알기 전에는 혼낼 일이 아닌데.","네가 멈추고 물어봐 줘서 나도 내가 어디서 기다렸는지 말할 수 있었어."],"2:2":["나 오늘 체크리스트 안 꺼냈어. 네 얘기 듣다가 생각났는데 굳이 안 펴도 되더라.","그럼 잘했는지 검사 안 할게. 지금 무슨 얘기 하던 중이었지?"],"3:0":["정리 담당을 나누고 나니까 빈 시간이 생겼어. 사람한테 맡기고도 기다릴 수는 있는 거였네.","네가 쉬는 걸 보면 맡은 사람도 자기가 진짜 맡았다고 느낄 것 같아."],"3:1":["내일 내가 너무 바빠 보이면 묻고 도와줘. 말없이 전부 가져가면 고맙고 조금 서운할 것 같아서.","알겠어. 내가 할 수 있는 걸 먼저 말할게. 네가 남기고 싶은 일도 듣고."],"4:1":["행사 끝났는데 다들 바로 안 가네. 해산이라고 말할 뻔했다가 참았어.","명령 없이 남아 있는 사람들도 있으니까. 너도 남고 싶으면 조금 더 있어."],"4:2":["완장 자국이 손목에 남았네. 벗었다고 바로 사라지는 건 아니구나.","그럼 돌아가는 동안은 손목 말고 네가 가고 싶은 쪽을 볼게. 어디로 갈까?"]}},N=(e,t,s,r,a)=>({title:e,location:t,callbacks:s,lines:r,options:a}),es={world:[N("앨범에 들어가지 않는 목소리","band",["네가 골랐던 두 번째 곡, 오늘도 목록 첫 줄에 뒀어.","이어폰 선에 붙인 종이표 아직 있어. 네 글씨라 바로 알아보겠더라.","네가 혼자 들어 보라던 부분 들었어. 확실히 숨소리까지 녹음됐더라."],["보컬 소개 녹음하는 중인데 들어 볼래? 전세계입니다, 잘 부탁…… 아, 또 딱딱해.","평소처럼 하면 안 돼? 방금 나한테 말한 목소리로.","평소엔 나한테 말을 걸 사람이 있잖아. 마이크는 아무 말도 안 해서.","내가 질문할게. 오늘 제일 마음에 든 소리가 뭐였어?","문 열리는 소리. 네가 왔을 때 난 거.","그 답까지 앨범 소개에 넣으면 다른 사람들도 듣겠는데.","그럼 공개용은 다시. 방금 파일은 지우지 말고 따로 이름 붙여 줘.","파일 이름을 내가 정해도 돼?"],[["파일을 「첫 관객 전용」으로 저장한다.","전용? 네가 먼저 그렇게 이름 붙였어.","내가 질문했으니까 편집권도 있지.","좋아. 대신 네 목소리도 지우지 마. 혼자 한 말처럼 들리잖아.",8,7],["소개 멘트를 주고받는 짧은 인터뷰로 바꾼다.","너도 녹음에 나오는 거야?","관객 하나가 있다는 건 들려줘야지.","그러면 이어폰 가져와. 둘이 들어 보고 공개할 만큼만 고르자.",6,10],["방금 답을 직접 한 번 더 듣고 싶다고 한다.","파일 있는데 굳이? 지금 날 보고 들으려고?","이번엔 녹음 중이라고 생각하지 말고.","문 열리는 소리가 좋았어. 됐지? 두 번째가 훨씬 어렵네.",11,3]]),N("객석에 없는 카메라","garden",["네가 알아본 높은 음, 그날 악보에 표시했어. 다음엔 다른 데도 들어 봐.","지난번 물 챙겨 준 덕에 끝나고 목이 덜 아팠어. 오늘 건 내가 샀고.","네가 악보에 그려 놓은 웃는 얼굴 아직 있어. 말로 덧붙인 감상도 기억하고."],["영상 썸네일 후보 세 장. 다 비슷해 보여도 고른 이유가 다르거든.","이건 너무 멀리 찍혔는데.","내 얼굴 말고 밴드 전체가 나와. 가운데 건 내가 제일 잘 나왔고.","마지막은 네가 웃다가 고개 숙인 사진이네.","서율이가 찍었어. 화면 확인 안 하는 순간이 좋았대.","지금 올리려고?","아니, 오늘은 후보만. 네가 고르면 왜 그걸 골랐는지 궁금해서.","조회수 많이 나올 사진을 고르는 문제는 아닌 거구나."],[["밴드 모두가 나온 사진을 가리킨다.","너는 내 옆에 있는 사람들까지 보네.","네가 자랑하던 무대니까 전부 보고 싶어.","이유까지 들으니까 좋다. 내 얼굴 안 보여서 실망했다고 할 뻔했어.",5,11],["고개를 숙이고 웃는 사진을 고른다.","표정이 하나도 안 보이는데?","네가 정말 웃을 때 어깨가 올라가는 건 보여.","그런 걸 언제 봤어. 잠깐, 이 사진은 공개 말고 내가 더 생각할래.",11,5],["잘 나온 독사진을 고르고 같은 포즈를 흉내 낸다.","내가 그렇게 고개를 기울여? 과장하지 마.","지금 각도도 똑같은데.","웃겨서 후보를 못 보겠잖아. 좋아, 네 사진도 한 장 남길 거야.",8,4]]),N("셔터를 누르는 사람","garden",["지난번 걸으면서 만든 다음 소절, 네 발소리까지 생각나.","악보 여백에 네가 쓴 감상은 사진보다 자주 보게 되더라.","노래보다 내 표정이 기억난다고 했지. 오늘은 내가 네 표정을 남겨 보고 싶어."],["오늘은 내가 사진 찍고 싶어. 네가 서 있는 쪽에 빛이 예쁘게 들거든.","공연 홍보에 쓰는 사진이야?","아니. 네 사진. 싫으면 풍경만 찍을게.","찍혀 보는 건 익숙하지 않은데 어디 봐야 해?","휴대전화 말고 나. 지금처럼 물어보는 얼굴이면 돼.","사진 찍을 때도 계속 말 거는구나.","누가 완성된 포즈를 하면 나도 좀 딱딱해져서. 자, 하나만 부탁해도 돼?","사진 말고 또?"],[["찍은 사진 중 한 장만 함께 고른다.","전부 달라고 안 해?","네가 어떤 내 표정을 골랐는지 궁금해.","그럼 이거. 카메라 봤을 때 말고 내가 웃었을 때 네가 따라 웃은 거.",10,8],["이번엔 내가 세계의 평소 모습을 찍어 준다.","갑자기 교대? 머리 정리할 시간도 줘.","아까 너도 지금 그대로면 된다고 했잖아.","맞네. 그러면 지금 그대로. 단, 나중에 공개하기 전에는 물어봐.",8,10],["풍경 속에 두 사람의 그림자만 찍자고 한다.","얼굴 안 나오게?","찍히는 게 조금 어색해서. 대신 같이 나온 걸 갖고 싶어.","그럼 여기 붙어 서. 이 정도 거리면 그림자도 겹치겠다.",7,9]]),N("앵콜을 남겨 놓는 방식","band",["네 응원 쪽지는 너무 멀리서 보려고 연습하지 마. 내가 먼저 찾을게.","우리가 적은 밴드실 약속, 내 달력에도 같은 시간으로 표시했어.","목 쉬게 하자는 말 듣고 인사 연습은 줄였어. 생각은 더 늘었지만."],["셋리스트 마지막에 빈칸 있어. 여기에 네가 골랐던 곡을 넣을까 해.","공연 전체 마지막 곡을 내가 골라도 돼?","전체 공연 말고 정리 끝난 뒤. 관객 한 명짜리 추가 공연.","그럼 티켓은 어디서 사?","지금 예약받는 중입니다. 대신 신청 곡에 이유 한 줄 첨부.","이유가 너무 길면?","끝까지 읽지. 노래 한 곡보다 길어도.","빈칸이 생각보다 작네. 뒷면도 써야겠다."],[["처음 함께 들은 곡을 신청한다.","그 곡이면 이어폰부터 챙겨야겠네.","이번에는 옆에서 직접 들으려고.","첫날이랑 같은 노래인데 관객 자리는 더 가까워졌네.",11,7],["세계가 아직 들려주지 않은 자작곡을 부탁한다.","그건 완성 안 됐는데. 끝이 아직 없어.","완성될 때까지 들어 줄 관객은 있어.","그 말 메모해 둘래. 마지막 가사에 써도 돼?",8,11],["노래 사이에 오늘 일을 말해 달라고 적는다.","신청 곡 대신 토크라니. 이런 관객 처음이야.","무대에서 어떤 생각 했는지 네가 말해 줘야 알잖아.","그럼 박수 대신 질문 준비해 와. 내가 전부 대답할지는 모르지만.",9,8]]),N("다음 곡을 고르는 저녁","walk",["우리 같이 부른 후렴은 녹음 안 했어. 틀린 음도 기억으로 남겨 둘래.","내가 무대 내려올 때가 좋았다는 말, 아직 생각나. 네가 기다리고 있었지.","다음 주 평범하게 만나자던 거, 나 진짜 달력에 적었어."],["오늘은 무대에 관한 얘기 금지해 볼까? 다들 그 얘기만 물어봐서.","그럼 이 길이 네 집 방향인지부터 물어볼게.","정반대. 같이 좀 걷고 버스 타려고.","내가 먼저 버스 정류장 쪽으로 갔어야 했네.","아직 안 갔으면 됐어. 편의점까지는 멀리 돌아갈 수 있잖아.","무대 얘기 금지인데 방금 또 흥얼거렸어.","이건 오늘 만든 거라 무대에서 안 했거든. 제목 지어 줄래?","돌아가는 길에 만든 노래라……"],[["「정반대 방향」이라고 이름 붙인다.","제목만 보면 이별 노래인데?","그래도 같이 걷잖아. 돌아가도 되고.","그 반전은 마음에 든다. 버스 한 대만 더 보내자.",11,6],["제목 대신 내가 생각난 멜로디를 흥얼거린다.","음 하나가 이상한데 되게 잘 붙는다.","틀려도 네가 받아 준다며.","응. 이건 틀린 음으로 안 부를래. 네가 만든 부분.",8,11],["오늘은 제목 없이 남겨 두자고 한다.","미완성으로?","다음에 걸을 때 이어서 정하면 되니까.","너도 약속 만들 핑계가 늘었네. 좋아, 다음 곡까지 보류.",9,9]])],hyunsol:[N("빛을 옮기는 작은 실험","chemistry",["네가 적은 관찰값은 정식 표로 옮겼어. 색 이름만 내 노트에 남겼고.","네가 붙인 결정 이름, 생각보다 계속 입에 붙네. 선생님 앞에서는 안 쓸게.","음료는 실험대 밖에서라고 했지? 오늘은 다 정리한 뒤에 고르자."],["완성된 전시병 놓을 자리를 정해야 해. 창가랑 검은 판 앞 중에.","창가에서 본 게 더 반짝이던데.","직사광선 오래 받으면 전시 상태가 달라질 수 있어. 그래서 사진으로 비교 중.","사진 속에는 내 손도 같이 찍혔네.","네가 받쳐 줬잖아. 자르려다 크기 비교가 돼서 남겼어.","내 손이 기준 눈금이 된 거야?","공식 측정값으로 쓸 건 아니고. 이 사진 설명에 손 모델 이름 적을까?","이름 밑에 소개도 들어가나?"],[["「빛을 잡고 있던 사람」이라고 써 달라고 한다.","너 때문에 설명문이 실험 보고서에서 멀어지고 있어.","사진 옆 한 줄만. 수치는 제대로 두고.","한 줄은 허용. 글씨는 내가 쓸게. 네가 쓰면 또 길어질 것 같아.",10,4],["두 배경 사진을 나란히 붙여 차이를 보여 주자고 한다.","관객이 직접 비교하게? 그건 좋다.","둘 중 하나를 버리기엔 둘 다 잘 나왔어.","그럼 네 손 나온 쪽도 남긴다. 삭제 요청은 오늘까지만 받아.",6,11],["손 모델 대신 사진 촬영자로 내 이름을 적는다.","이번엔 내가 잡고 네가 찍겠다는 말?","역할도 한 번 바꿔 봐야 공평하지.","좋아. 내 손 흔들리면 빨리 찍지 말고 기다려 줘.",8,7]]),N("냉장고에 없는 메뉴","cafeteria",["네가 먼저 잡은 다음 점심, 그래서 오늘 자리 비워 둔 거야.","지난번 반으로 나눈 달걀말이, 네 쪽이 조금 작았던 거 알아.","다음 메뉴 내기라더니 오늘도 희망 섞어서 맞힐 생각이야?"],["급식 만족도 조사란에 한 칸 남았어. 새 메뉴 추천.","현솔 추천은 이미 적었어?","후보 셋인데 하나를 못 버리겠네. 그냥 좋아하는 걸 쓰면 너무 평범해서.","급식 메뉴에 논문 심사까지 하는 거야?","네가 먹고 싶다던 것도 넣어 봤어. 기억 맞는지 확인하려고.","맞아. 근데 이건 같이 먹으러 가도 되겠다.","그럼 급식에서는 한 개 빼고, 그건 다른 종이에 적지.","메뉴 추천하다가 외출 계획까지 생겼네."],[["현솔의 최애 메뉴에 한 표 더 보탠다.","취향 겹치는 척하는 거 아니지?","먹어 본 적은 없어. 네가 그렇게 좋아하니까 궁금해서.","그럼 먼저 먹어 보고 투표해. 내가 좋아해도 네 입맛은 다를 수 있잖아.",5,10],["둘이 아직 먹어 보지 않은 메뉴를 고른다.","실패하면 책임은 반반이야.","성공하면 추천자는 너라고 해 줄게.","그건 반반 안 해도 돼. 대신 첫 숟갈은 같이 먹자.",9,7],["외출 계획 종이에 작은 지도부터 그린다.","조사는 뒤로 미뤄졌네.","음식 얘기보다 너랑 갈 길 고르는 게 더 재밌어서.","지도 화살표가 이상해. 이쪽이야.……그 말은 들었어.",10,3]]),N("틀린 설명을 접는 순서","chemistry",["네가 맞춰 준 차 덕분에 책 한 장 더 읽었어. 오늘도 너무 달진 않게.","추리소설 좋아한다니까 진짜 찾아왔네. 오늘 범인 맞히는 건 안 할 거야.","우리 차 배합 메모, 책갈피로 넣었더니 계속 간식 생각이 나."],["실험은 끝났어. 오늘 네가 봐 줄 건 이 설명 카드. 어린 손님도 읽을 수 있게 쓰랬는데.","정확하긴 한데 단어가 어려워. 이 문장은 두 번 읽었어.","줄이면 틀릴 것 같고, 다 쓰면 아무도 안 읽네. 내가 어려운 문제를 좋아하는 이유를 알겠어.","정답이 정해져 있어서?","응. 이건 네가 고개를 끄덕여도 진짜 알아들었는지 또 물어봐야 하잖아.","이번엔 내가 이해한 대로 말해 볼게. 네가 틀린 데만 고쳐 줘.","좋아. 대신 내 설명이 별로였다는 말도 해. 너한테까지 쉬운 척해 달라는 부탁은 아니니까.","내가 모르는 걸 말해도 괜찮다면 설명 듣는 쪽도 덜 긴장하겠네."],[["내가 어려웠던 단어 세 개를 표시하고 설명은 현솔에게 맡긴다.","왜 다 지우지 않고 표시만 해?","맞는 말인지 결정하는 건 네가 더 잘하니까. 내가 막힌 자리는 내가 알려 주고.","그렇게 역할 나누면 되겠네. 네가 다 고쳐 오는 것보다 좋다.",7,11],["정확한 본문 옆에 내가 이해한 비유를 작은 말풍선으로 붙인다.","실험 설명에 수다 칸을 만드는 거야?","네가 나한테 설명할 땐 옆말 덕에 기억나는 게 많아서.","그럼 내 옆말도 정식 출연이네. 틀린 비유는 고칠 테니까 또 써 봐.",10,8],["카드를 잠깐 덮고 실험을 처음 좋아했던 날부터 묻는다.","설명 고쳐 달랬더니 인터뷰로 바뀌네.","네가 왜 좋아하는지 알면 처음 읽을 문장도 떠오를 것 같아서.","좋아. 다만 그 얘기는 카드 한 장에 안 끝날 텐데. 정리 시간 조금 남겨 줘.",9,4]]),N("남기고 싶은 실수","classroom",["시간을 직접 읽어 준 거 기억해. 오늘은 메뉴만 다시 보고 싶어서 불렀어.","반씩 먹을 메뉴, 네가 고른 것도 주문 가능하대. 찾아봤지.","설명 연습 들어 준 덕에 중간에 덜 버벅였어. 아직 한 군데는 자꾸 틀려."],["발표 연습 영상을 봤는데 내가 웃는 부분만 길어.","내가 색 이름 또 말했을 때네.","정식 영상에서는 잘랐어. 이건 지워도 되는데 손이 안 가네.","틀린 부분 말고 재미있는 부분이라고 해도 되잖아.","보관 폴더 이름을 네가 정해 봐. 실험 실패 모음은 금지.","지금까지 정리한 파일 중 제일 중요한 질문 같은데.","중요하지. 다음에 누르면 다시 네가 웃길 테니까.","그럼 내가 혼자 놀린 것처럼 남으면 안 되겠다."],[["현솔이 나를 웃겼던 장면도 찾아 넣는다.","이때 내가 뭐랬더라?","억울함은 색 좌표에 없다고. 진지해서 더 웃겼어.","내가 당한 줄 알았는데 서로였네. 그러면 공평한 폴더다.",10,9],["음성을 빼고 사진 한 장만 남긴다.","영상은 안 남기려고?","발표 때마다 생각나면 또 웃을까 봐. 사진은 네가 보고 싶을 때 보면 돼.","괜찮네. 내 실수까지 자꾸 재생되는 건 조금 민망했거든.",5,12],["폴더를 「정리 뒤 다섯 시」로 이름 짓는다.","사진 폴더에 약속 시간을 써?","열어 볼 때마다 다음에 같이 웃을 시간을 기억하게.","시간을 바꾸게 되면 파일명부터 바꿔야겠네. 직접 말하는 것도 잊지 마.",11,5]]),N("새 노트의 첫 줄","garden",["계산기 핑계는 끝났는데 네가 또 찾아왔네. 이제 숫자 물어볼 것도 없는데.","설명문 뒷면 메뉴 목록은 옮겨 적었어. 아무래도 종이가 더 필요하더라.","천천히 정리하자던 날, 평소보다 훨씬 오래 걸렸지. 일부러 서두르진 않았어."],["새 노트 샀어. 실험용 말고 종이 아무거나 써도 되는 거.","첫 줄 쓰는 데 이렇게 오래 걸리는 사람 처음 봐.","제목부터 붙이려니까 용도가 정해지잖아. 아직 그건 싫어서.","그럼 오늘 본 것부터 적어.","너. 바로 앞에 있는데.","그 정도로 간단해도 되는 거야?","해 보려고. 수치도 설명도 없는 기록.","내가 두 번째 줄 적어도 돼?"],[["「현솔이 새 노트 첫 장을 나에게 보여 줬다」라고 쓴다.","그걸 적으면 관찰 안에 관찰이 들어가잖아.","계속 쓰면 페이지가 금방 채워지겠네.","그럼 다음 줄은 내가. 네가 이걸 읽고 웃었다.",10,9],["오늘 두 사람이 마신 음료의 색을 그린다.","글씨 대신 색부터야?","네가 보던 색을 이번엔 내가 기억하려고.","제목 없어도 어떤 날인지 알겠다. 이 노트 그렇게 써 보자.",9,11],["첫 장은 비워 두고 두 번째 장에 내일을 적는다.","왜 꼭 첫 장을 피하는데?","처음이 너무 어렵다면 중간부터 시작해도 되니까.","너답다. 그럼 첫 장 제목은 우리가 나중에 정하자.",8,7]])],taewoo:[N("거울 밖의 무대","dance",["네가 붙잡은 손이 마지막 박자까지 안 놓여서 나도 한 박자 더 서 있었어.","마지막 포즈를 네 식으로 바꾸니까 사진에서 더 자연스럽더라.","천천히 보자고 한 덕에 어깨 먼저 움직이는 건 제대로 보였겠네."],["오늘은 거울 가릴 거야. 문에 붙은 종이 말고 내 쪽 봐.","내가 틀려도 확인을 못 하잖아.","그래서 둘이 하는 거지. 내가 맞추는 게 아니라 서로 따라 하는 거.","네가 내 춤을 따라 한다고?","응. 네 차례에는 네가 대장. 이상한 거 시키면 조금 원망할 수는 있어.","준비 운동처럼 평범한 건 안 되겠네.","네가 평소에 하는 동작이면 뭐든. 기다릴 때, 신날 때, 지각했을 때.","마지막 건 네가 제일 놀릴 것 같은데."],[["지각 직전 가방을 메는 동작을 리듬에 넣는다.","그 어깨 급하게 올리는 거 너무 똑같아.","이제 네가 반대쪽 가방을 메면 돼.","우리 무대 제목 지각생 듀오다. 완성하면 민혁한테는 숨기자.",10,5],["두 사람이 같은 방향을 보는 마지막 포즈를 만든다.","하이파이브 말고 나란히?","이번엔 관객 있는 쪽을 같이 보고 싶어서.","그거 멋있네. 마지막 카운트는 네가 해. 나도 네 박자에 맞출게.",8,10],["아무 동작 없이 먼저 태우와 눈을 맞춘다.","시작 안 해? 나 지금 계속 기다리는데.","신호가 눈 맞추는 거야. 지금부터 하나.","아, 그런 신호. 말로 안 하니까 더 긴장되잖아. 다시 해 보자.",11,3]]),N("운동화 끈의 소원","walk",["마지막 여덟 박자 맞춘 뒤에 너 웃은 거 봤어. 내가 성공한 것처럼 좋더라.","네가 채워 준 물병은 오늘도 가져왔어. 이번에는 비어 있지 않아.","지난번 같이 내려갈 때는 다리가 무거웠는데 오늘은 괜찮아. 뛰진 말고 걷자."],["잠깐. 신발 끈 풀렸다. 이 벤치까지만 기다려 줘.","끈 색이 양쪽 다르네. 일부러 한 거야?","연습화 구별하려고. 왼쪽은 자신 있게, 오른쪽은 안 다치게.","두 발에 소원이 따로 붙어 있구나.","네 신발은 같은 색이네. 하나 붙여 줄까? 말로만.","운동 못 하는 소원도 신청할 수 있어?","신청은 다 받아. 이뤄 주는 건 별개고.","그럼 네가 심사하기 쉬운 걸로 골라 볼게."],[["「내일도 네 옆에서 같은 속도로 걷기」를 고른다.","그건 오늘도 할 수 있는데.","내일도라는 부분이 중요해.","접수. 대신 네가 먼저 가 버리면 무효야. 지금부터 속도 맞추고.",11,7],["「오늘 배운 스텝을 까먹지 않기」를 고른다.","그건 소원 말고 복습을 해야…… 아, 내가 너무 진지했나.","너한테 한 번 더 배우고 싶다는 신청이기도 해.","그렇게 말하면 알아듣지. 다음 시간 네 자리 남겨 둘게.",8,10],["태우의 양쪽 소원에 내 소원도 하나씩 보탠다.","한꺼번에 두 개? 욕심쟁이네.","멋지게 추기. 그리고 끝나고 꼭 같이 간식 먹기.","두 번째가 빠지면 섭섭할 뻔했어. 그럼 끈 단단히 묶고 간다.",9,8]]),N("서로 다른 첫 동작","dance",["느리게 같이 걸어 줬던 날 기억해. 오늘은 내가 쉬는 시간부터 정했어.","그날 같이 본 영상에서 네가 좋아한 부분, 후배한테 설명하다 보니 어디가 어려운지 보이더라.","쉬면서 네 실수 이야기 듣느라 웃었던 거 기억나. 내 얘기도 교대로 했고."],["후배가 첫 동작 어렵다고 메시지 보냈어. 나한테 처음 배웠을 때도 어려웠어?","솔직히 말하면 설명은 들었는데 어디부터 봐야 할지 몰랐어.","그때는 네가 장난치는 줄 알았는데. 나 좀 못된 선생님이었네.","재밌었던 것도 사실이야. 다만 처음 배우는 속도는 너랑 달랐지.","내가 못하던 때를 너무 잊었나 봐. 오늘은 네가 선생님 해. 내가 네 설명대로만 움직일게.","아는 동작 먼저 해 버리면 반칙이야.","알았어. 우승 경력 지금부터 십 분간 반납. 그렇다고 아무렇게나 시키지는 마.","그러면 발보다 어깨부터. 네가 나한테 알려 줬던 것 중 그건 기억나."],[["태우가 모른다고 말할 때까지 설명을 한 동작씩 끊는다.","아는 척 안 하고 묻는 것도 어렵네. 여기서 어느 발이 먼저야?","바로 그 질문을 나도 못 했어. 이상하게 보일까 봐.","내가 다음엔 먼저 물어볼게. 너한테도, 후배한테도.",8,12],["둘이 처음 익힌 동작을 후배에게 보내는 짧은 설명으로 만든다.","이 문장은 네 말투인데. 발이 길을 잃기 전에 어깨부터.","내가 이해한 설명도 한 줄 넣어 줘. 어려우면 후배가 또 바꿔도 되고.","그럼 공동 안무 말고 공동 설명. 네 이름도 작게 넣어도 돼?",10,8],["태우의 설명에서 가장 도움이 됐던 순간부터 다시 해 본다.","잘 가르친 부분도 있었어? 지금은 틀린 것만 생각났는데.","있었지. 네가 같은 방향으로 서 줬을 때. 그건 말보다 빨리 알았어.","그럼 오늘은 내가 네 옆에 설게. 선생님 바뀌어도 자리는 같네.",11,5]]),N("무대 뒤의 열쇠고리","auditorium",["우리 객석 신호, 좌우 바꿔도 내가 알아보더라. 연습 많이 했지?","표시 옆에 그린 별, 정리할 때 버리면 안 된다고 적어 뒀어.","공연 뒤 먹을 간식은 기억하고 있어. 아직 뜯으면 안 돼, 그건 나도 알아."],["가방에 이거 달까 말까? 연습실 열쇠고리인데 무대 의상에는 안 맞아서.","손바닥 크기 별이네. 네가 골랐어?","어릴 때 첫 발표회에서 받은 거. 그때는 무대에서 울었대.","지금은 먼저 관객 찾는 사람이 됐는데.","내일도 안 떨린다는 뜻은 아니야. 그래서 잠깐 네가 갖고 있을래?","잃어버릴까 봐 긴장하겠는데.","끝나면 내가 직접 찾으러 갈 거야. 도망만 안 가면 돼.","맡는 방법도 좀 정성스럽게 골라야겠다."],[["가방 안 작은 주머니를 비워 별만 넣는다.","왜 그렇게 귀한 거 맡은 얼굴이야.","첫 무대부터 같이 있었던 거라며.","그러네. 내일은 네 주머니에도 같이 있는 거네. 잘 부탁해.",8,12],["내 가방 바깥에 달아 태우가 보게 한다.","객석에서 별부터 찾으라고?","나는 네가 찾기 쉬운 자리에서 기다릴게.","신호 두 개나 생겼다. 긴장하면 별 보고 한 번 숨 쉴래.",11,7],["끝나고 돌려줄 때 작은 기념을 더 달아 주겠다고 한다.","뭘 더 달 건데? 미리 말하면 안 돼?","네 오늘 무대 보고 고를래.","그거 때문에 잘하려고 욕심나는데. 아니, 원래대로 추고 받을래.",10,5]]),N("박수 소리가 없는 산책","gate",["손등 표시는 떨어졌어도 돼. 네가 조심히 폈던 손은 기억나.","춤 없는 산책 약속 지키러 왔다. 운동화도 연습화 말고 이걸로.","바로 앞에서 해 준 신호는 좀 웃겼어. 그래서 무대보다 더 기억나."],["축제 끝났는데 몸이 아직 마지막 박자를 기다리는 것 같아.","박수 쳐 줄까?","아니. 오늘은 박수 없이 만나 보려고. 잘한 거 없어도 괜찮게.","그럼 목적지 정하는 건 네 차례야. 어제는 내가 골랐으니까.","횡단보도 건너면 아이스크림 가게 있어. 녹기 전에 먹는 건 자신 있어.","그것도 실력 자랑이잖아.","들켰다. 습관이네. 오늘은 네가 잘하는 것도 하나 알려 줘.","춤보다 평범한 건데 괜찮아?"],[["아이스크림을 안 떨어뜨리는 쪽으로 소소한 내기를 건다.","지고도 웃을 수 있는 내기네. 좋아.","이긴 사람이 다음 맛 고르기.","너 다음 만남까지 걸었구나. 그럼 져도 덜 억울하겠다.",10,8],["사람의 걷는 속도를 기억하는 편이라고 말한다.","그게 잘하는 거야?","너는 피곤하면 오른발이 조금 느려져. 오늘은 아니고.","아. 그런 것도 봤구나. 나 지금은 아이스크림보다 그 말이 좋다.",12,8],["별말 없이 옆에서 오래 있을 수 있다고 한다.","오래가 몇 분인데?","아이스크림 다 먹고도 집 가기 아쉬울 만큼.","그럼 천천히 먹자. 박수 안 받아도 오늘은 괜찮은 것 같아.",9,10]])],taehun:[N("빌려 가지 않는 책갈피","library",["네가 찾았던 별 옆에 연필 점 찍어 놨어. 잉크 말고, 다음에 지워도 되게.","성도 옆에 붙인 네 문장은 시집 속에서 옮겨 적었어. 아직 내 글씨가 더 작지?","그날 책을 받쳐 줘서 바람에도 안 넘어갔어. 오늘은 바람 없는 자리야."],["이 책 반납해야 하는데 책갈피를 빼기 싫어.","책갈피만 가져오면 되잖아.","문장 옆에 있을 때랑 혼자 있을 때가 조금 달라서.","좋아한 페이지를 따로 적어 줄까?","그럼 네가 생각한 제목도 붙여 줘. 원래 제목 말고.","책 한 권을 한 장으로 줄이기엔 아까운데.","줄이는 거 아니야. 우리가 읽었던 부분만 다른 책에 데려가는 거지.","도서관 규정에 그런 대출은 없을 것 같네."],[["책갈피에 「구름 때문에 남은 시간」이라고 쓴다.","날씨가 책 제목이 됐네.","맑았으면 이 페이지를 같이 안 읽었을 수도 있으니까.","그러면 흐린 날도 책장에 하나씩 넣어 둬야겠다.",10,7],["각자 고른 한 문장을 서로 다른 면에 적는다.","앞뒤가 다르면 뒤집어 보고 싶겠지?","네 쪽 문장은 네가 써 줘.","한 장에 글씨 두 개. 책 없이도 누가 같이 읽었는지 알겠네.",8,11],["아무것도 적지 않고 다음에 펼칠 페이지에 꽂는다.","그 책은 아직 안 읽었는데.","끝난 곳 말고 다음에 만날 곳도 표시해 두고 싶어.","좋아. 다음엔 여기서 시작하자. 먼저 읽고 싶어져도 이 장은 남길게.",9,9]]),N("둘만의 잘못 붙인 제목","library",["같이 읽기로 한 페이지는 남겨 뒀어. 그 앞에서 멈추는 게 조금 어려웠지만.","네가 추천한 책 여기. 표지 접힐까 봐 가방 맨 앞에 넣고 다녔어.","흐린 날 사진을 보니까 책보다 그날 네가 고른 우산 색이 먼저 생각나."],["책 반납함 앞에서 제목만 보고 이야기를 맞히는 놀이 해 볼래?","실제 줄거리 알면 반칙이지?","알아도 모르는 척 새로 만들면 돼. 틀리는 쪽이 목적이니까.","그러면 이건 밤에만 여는 빵집 이야기.","천문 관측 입문서인데? 왜 빵집이야?","표지의 달이 식빵처럼 보여서.","밤마다 손님이 별자리를 주문하면 빵으로 구워 주는 거네.","태훈이가 더 멀리 가 버렸는데."],[["둘이 빵집 손님으로 등장하는 다음 장면을 만든다.","나는 어떤 빵 주문해?","너는 아직 이름 없는 별을 골랐어.","그러면 넌 반으로 나누자고 해 줘. 처음 먹는 건 같이 먹고 싶으니까.",11,6],["실제 책을 펼쳐 상상과 달랐던 점을 찾는다.","정답 확인도 하는 거야?","다른 게 재밌어서. 별은 진짜로도 충분히 이상하잖아.","좋다. 상상이랑 관찰을 같은 노트 다른 쪽에 쓰자.",7,12],["태훈의 이야기에 어울리는 짧은 삽화를 그린다.","빵집 간판이 삐뚤다. 바람 부는 밤인가 봐.","내 그림 실력이라고 하면 안 될까?","난 바람이라고 할래. 네 그림 덕에 날씨도 생겼어.",9,8]]),N("지구가 먼저 움직이는 편지","roof",["네가 그린 구름 벤치 그림, 내 노트 오른쪽에 붙였어. 나란히 보게.","내가 기다리면서 만든 이야기 기억해? 끝부분을 오늘 조금 고쳤어.","그날 말없이 봤던 하늘을 쓰려고 하니까 오히려 문장이 길어지더라."],["같은 시각에 찍은 그림자인데 길이가 달라. 며칠 사이에도 보이네.","그림자가 움직이는 거야, 우리가 움직이는 거야?","지구가 돌고 공전하니까 태양이 보이는 위치가 달라져. 우리도 같이 움직이고.","가만히 기다렸어도 사실은 멀리 갔네.","그 말 적어도 돼? 지구과학 숙제 말고 편지에.","누구한테 쓰는데?","미래의 나. 한 달 뒤에 열어 보려고. 네가 한 줄 넣어도 되고.","한 달 뒤 태훈이한테는 어떤 말투로 말해야 하지?"],[["오늘 둘이 서 있던 자리를 작은 지도로 그린다.","나중에 같은 자리에 와 보라는 뜻?","그때 그림자도 재 보면 오늘이랑 다르겠지.","그럼 지도 끝에 네 자리도 그려 줘. 혼자만 다시 오기는 싫어.",10,10],["「이 문장 쓴 사람이랑 다시 읽어」라고 남긴다.","미래의 나한테 명령이네.","네가 안 잊게 힌트 주는 거야.","그러면 날짜도 써. 그날 네가 먼저 잊으면 내가 편지 들고 찾아갈 거야.",12,6],["열어 볼 날의 하늘을 예측하고 이유를 적는다.","정확한 날씨는 지금 맞힐 수 없는데.","예측이 틀리면 같이 이유를 찾아보자고 쓰려고.","맞힌 날보다 틀린 날에 더 오래 이야기할 수도 있겠네. 그건 좋아.",8,11]]),N("불 꺼진 관측실의 사전 답사","observatory",["도감 옆 두 가지 계획을 읽었어. 날씨가 어느 쪽이든 같은 이름이 있네.","흐릴 때 읽을 책 골라 온 거 여기 놨어. 벌써 그쪽도 기다려진다.","지난번 별 이야기가 길어졌지. 오늘은 네 질문 하나부터 받을게."],["망원경 덮개는 그대로 둬. 오늘은 선생님 오시기 전까지 자리만 확인하는 거야.","불은 켤까?","출입등은 켜 두고. 창가에서는 하늘이 얼마나 가리는지만 보자.","여기 서면 학교 불빛이 조금 줄어드네.","맞아. 근데 이쪽은 두 명이 서기엔 좁아.","나는 한 발 뒤에서 봐도 되는데.","그러면 내가 설명할 때 네 얼굴이 안 보여. 옆으로 조금만.","별자리보다 서 있는 위치부터 정해야겠네."],[["태훈과 어깨가 닿지 않을 만큼 나란히 선다.","이 정도면 둘 다 하늘 보여.","설명하는 사람 표정도 보여.","나 지금 하늘 보고 있는데 네 말 때문에 자꾸 옆 보게 돼.",11,7],["관측할 순서와 교대 시간을 작은 종이에 적는다.","이렇게 하면 뒤에서 기다리는 사람도 덜 심심하겠다.","네가 내 차례에 질문 하나씩 해 줘.","대답 맞히는 문제 말고, 뭘 봤는지부터 물어볼게.",7,12],["창가 대신 난간 밖 밝은 휴게 자리를 고른다.","별은 조금 덜 보일 텐데.","이야기는 더 잘 들릴 것 같아. 오늘은 답사니까.","그럼 오늘은 이쪽. 관측하는 날이랑 너 만나는 날이 꼭 같을 필요는 없네.",9,9]]),N("봉투의 빈 받는 사람","walk",["네가 이어 쓴 문장 덕분에 그날 노트가 일기가 아니라 대화 같아졌어.","그날 별 못 봤지만 걷던 길은 외웠어. 오늘은 내가 앞장설 수 있어.","맑은 날, 흐린 날 약속 둘 다 달력에 있어. 날짜 겹치면 두 번 만나나?"],["편지 봉투에 받는 사람을 아직 안 썼어.","미래의 태훈이한테 보내는 거 아니었어?","원래는. 다시 읽어 보니까 둘이 쓴 부분을 나 혼자 열면 이상할 것 같아서.","그럼 이름 두 개 쓰면 되겠네.","그 사이를 뭐로 이을까. 쉼표, 그리고, 그냥 띄어쓰기.","이런 데도 오래 고민하는구나.","책 제목보다 오래. 사람이 들어가는 칸이라서.","그럼 여백 조금 남겨 둬. 내가 같이 쓸게."],[["두 이름 사이에 작은 별 하나를 그린다.","실제로 있는 별자리야?","아니. 이 봉투에서만 쓰는 표시.","좋아. 도감에는 없어도 어디에 있는지 둘은 알겠네.",11,8],["「같은 페이지를 읽을 두 사람」이라고 쓴다.","이름 없이도 우리한테 오겠지?","주소를 우리가 직접 알고 있으니까.","그럼 우편함 말고 내 책 속에 넣을게. 다음에 같이 꺼내자.",10,10],["받는 사람을 비워 두고 함께 날짜를 적는다.","아직 정하지 말자는 거야?","열어 보는 날의 우리가 쓰게 남겨 두자.","미래의 문장 하나를 남기는 거네. 그날 나는 뭐라고 쓸지 궁금해.",8,9]])],seoyul:[N("닮지 않은 초상화 교환","art",["네가 포스터 여백에 붙인 색은 그대로 뒀어. 다른 색 덮지 않았고.","그날 종이 마를 때까지 기다려 줘서 얼굴 선을 조금 더 볼 수 있었어.","내가 고르고 싶던 색 물어봤지? 그래서 오늘은 그 색 연필부터 꺼냈어."],["이번엔 네가 나 그려 봐. 나는 계속 모델만 시켰잖아.","나 사람 그리면 다 동그라미인데.","괜찮아. 동그라미가 뭘 보고 있는지만 정하면 돼.","그럼 네 시선을 어디로 두면 좋겠어?","네가 그리기 편한 쪽. 아니, 손이 어떻게 움직이는지 보고 싶어서 네 쪽 볼래.","보고 있으면 더 못 그릴 것 같은데.","그럼 교대하자. 삼십 초씩. 서로 종이 뺏어 보지는 말기.","완성한 다음에는 동시에 보여 주는 거야."],[["표정 대신 서율의 손과 연필을 크게 그린다.","얼굴이 안 나오네.","너 생각하면 제일 먼저 떠오르는 모습이 그리는 손이라서.","그런 초상화도 있겠다. 이건 내 거 해도 돼?",8,11],["서율이 웃기 직전의 삐뚤한 입꼬리를 그린다.","왜 이렇게 웃음을 참고 있어?","지금 나 그리는 거 보고 있는 표정이야.","아, 들켰어. 놀려서가 아니라 네가 너무 집중해서 귀여웠는데.",12,4],["그림 속 두 동그라미 사이에 종이 한 장을 그린다.","나 혼자 그리라니까 너도 들어갔네.","누가 보고 그렸는지도 남겨야 할 것 같아서.","그럼 내 그림에도 너 넣을래. 종이 바꾸는 건 조금만 늦추자.",10,8]]),N("틀린 음에 붙이는 색","band",["네가 끝까지 맡았던 한 음, 오늘 악보에 같은 색 점 찍어 뒀어.","동그라미 낙서에 네 선이 들어가니까 혼자 그린 것보다 더 낯설어서 좋더라.","녹음 없이 치자던 날이 더 잘 떠올라. 틀린 데에서 둘이 웃었잖아."],["곡 하나 듣고 색 세 개만 골라 줘. 이번 포스터 배경 시험이야.","밝은 곡이라고 꼭 노랑이어야 해?","아니. 너한테는 어두운 색일 수도 있지. 왜인지만 궁금해.","지금은 파란색. 다음 음이 어디로 갈지 기다리는 느낌.","난 네가 들어왔을 때부터 빨강 골랐는데.","왜 빨강?","문 열리고 방이 좀 시끄러워졌잖아. 싫은 쪽 말고, 멈춰 있던 게 움직여서.","두 색이 생각보다 멀리 있네."],[["빨강과 파랑의 경계를 섞어 본다.","보라가 됐네. 둘 중 하나를 고른 게 아니라.","같은 곡을 같이 들었으니까 중간 색도 있겠지.","그럼 이 부분은 둘이 만든 색. 이름은 나중에 붙여.",10,10],["두 색을 섞지 않고 나란히 붙인다.","경계가 되게 선명하다.","다르게 들었다는 게 그대로 보여도 좋을 것 같아.","맞아. 꼭 같은 색을 골라야 같이 듣는 건 아니지.",7,12],["곡이 끝난 뒤 세 번째 색을 새로 고른다.","왜 이제 고르는 거야?","네 얘기 듣고 나니까 처음이랑 다르게 들려서.","그러면 한 번만 더 틀자. 이번엔 내가 네 색을 들어 볼게.",11,6]]),N("책상 아래 숨긴 전시회","art",["네가 좋다고 한 입꼬리 선은 지우지 않았어. 다른 데 고칠 때도 거기는 남겼고.","그림 끝날 때까지 있어 준 날, 마지막 선이 평소보다 빨리 그어졌어.","네가 채운 여백은 딱 보면 알아. 내가 일부러 안 따라 그렸거든."],["이 상자 열어 봐. 전시 못 한 그림이 들어 있어.","못 그려서 숨긴 그림들?","아니. 설명하라고 하면 길어지는 그림들. 이건 네가 창밖 보다가 하품한 날.","하품까지 전시하면 항의하고 싶은데.","그래서 개인 전시야. 관람객 본인에게 먼저 허락받는 중.","다른 건 뭐가 있는데?","네가 기다리면서 만지던 종이컵. 가방 끈. 빈 자리. 얼굴은 별로 없어.","얼굴 없어도 다 나라고 알아보겠네."],[["설명 카드에 내가 기억하는 그날을 덧붙인다.","하품한 이유가 새벽까지 과제해서였구나.","네 그림 보고 지루해서 한 건 아니라는 기록도 필요하지.","그건 알고 있었어. 그래도 네 글씨로 읽으니까 좋네.",8,12],["전시 제목을 「아무도 안 보는 줄 알았던 날」로 짓는다.","조금 무서운 제목 아니야?","실은 누가 봐 줬다는 게 좋아서.","그러면 작은 글씨로 좋은 쪽이라고 적어. 나도 제목 보면 웃게.",12,5],["한 장은 공개 전시에 내도 괜찮다고 고른다.","내가 혼자 고를 때보다 긴장되는데.","종이컵 그림. 나만 알아볼 수 있는 자화상 같아.","그건 좋다. 설명문에는 네 이름 안 쓰고, 너한테만 알려 줄게.",10,9]]),N("초대장에 없는 장소","walk",["가방에 달아 준 리본 매듭 풀리지 않았네. 내일도 그 모양이면 알아볼게.","네가 그린 내 초상화는 지갑에 넣었어. 동그라미 얼굴이라 잘 접히더라.","세 번째 만남 초대장, 네가 기다린다고 해서 장소를 더 오래 골랐어."],["초대장 다 만들었어. 날짜는 있는데 주소는 비워 뒀지.","비밀 장소야?","둘 중에 못 골라서. 작은 전시랑 낡은 문구점.","둘 다 가면 너무 멀어?","갈 수는 있는데 그러면 중간에 그냥 앉을 시간이 없어.","빈 시간이 더 중요할 수도 있네.","응. 그림 보러 가서 그림만 보고 돌아오면 좀 아깝잖아.","그럼 목적지 말고 그 사이부터 정해 볼까."],[["전시 한 곳만 보고 좋아한 그림 이야기를 오래 하자고 한다.","너도 고를 그림이 있어야 해. 내 감상만 듣지 말고.","다르게 골라도 서로 설득하지 않기.","좋아. 좋아하는 게 다르면 이야기할 시간이 더 필요하겠다.",8,12],["문구점에서 같은 크기 빈 노트를 하나씩 고르자고 한다.","같은 표지도 골라?","크기만. 안에 채우는 건 다르게 하고 가끔 바꿔 보자.","이건 하루짜리 초대장이 아닌데. 다음 만남 칸도 필요하겠네.",11,8],["초대장 주소 칸에 「서율 옆자리」라고 장난친다.","그 주소로 검색하면 안 나오는데.","직접 안내해 줘야겠네.","그래서 고르기 싫다는 건 아니지? 알겠어, 오늘은 내가 안내할게.",10,4]]),N("액자 밖의 여백","art",["그림 속에 네가 그린 다음 약속, 전시 끝나도 지우지 말자.","번갈아 쓴 연필이 짧아졌어. 버리기엔 어제 손에 쥔 느낌이 남아서.","풍경과 그림을 나란히 보니까 네가 좋아한 나무가 실제보다 크게 그려졌더라."],["액자 후보를 종이로 만들어 봤어. 검정, 나무색, 아무것도 없음.","아무것도 없음도 후보야?","응. 우리가 계속 그릴 거면 닫지 않는 것도 괜찮으니까.","완성된 그림처럼 걸고 싶은 마음도 있지?","있어. 그런데 끝났다는 표시 같을까 봐.","액자 걸고도 다음 종이를 꺼낼 수 있잖아.","그 말 그림 뒤에 적어 줘. 내가 또 못 걸고 고민하면 읽게.","글씨도 그림 일부로 남겨 주는 거야?"],[["나무색 액자를 고르고 다음 종이를 나란히 둔다.","벌써 두 번째 전시 자리 예약이네.","첫 그림을 걸어도 옆자리는 비어 있으니까.","그럼 여기 걸자. 다음엔 빈 종이부터 너랑 고를래.",10,11],["여백을 넓게 두고 가장 작은 액자를 고른다.","그림이 작아 보이지 않을까?","둘이 그린 부분을 가까이서 보게 될 것 같아.","가까이 와야 보이는 그림. 그거 우리한테 좀 어울린다.",12,7],["오늘은 액자 없이 그림을 펼쳐 둔다.","완성을 미루는 거야?","지금도 좋아서. 오늘 한 번 더 보고 내일 걸어도 되잖아.","좋아. 그러면 정리 조금 늦게 하자. 의자 하나 더 가져와.",8,9]])],juhan:[N("엔딩 다음 칸의 초대","computer",["네가 직접 눌렀던 마지막 버튼, 지금은 확인 창 하나 더 넣었어. 잘못 누르면 아쉬우니까.","숨겨 둔 하트 찾고 웃던 얼굴 때문에 이스터에그를 못 지우겠어.","게임 처음 만든 날 물어봤지? 그날 파일을 찾아서 오늘 가져왔어."],["내 첫 게임 열어 볼래? 실행은 되는데 그림은 웃으면 안 돼.","네모 두 개가 서로 인사하네.","그때는 움직이게 하는 것만 해도 신기했거든. 대사는 안 넣었고.","지금 인사말을 붙인다면 뭐라고 할 거야?","와 줘서 고마워. 너무 평범한가?","말 안 하는 네모보다는 훨씬 친절한데.","그러면 이 네모한테 답장도 해 줘. 그때는 한 명만 만들어 놔서.","몇 년 늦은 첫 방문객이네."],[["「다음 화면도 같이 볼래?」라는 답장을 붙인다.","다음 화면은 아직 없는데.","그럼 같이 만들면 되지. 네모 둘부터.","이제 혼자 끝나는 게임은 아니네. 저장할 이름에도 둘 다 넣을래.",11,8],["대사 없이 다른 네모가 한 칸 다가오게 한다.","이동 한 번으로 답하는 거구나.","길게 말 못 하는 캐릭터도 있을 테니까.","그때 나였으면 이쪽이 편했을 거야. 지금은 말도 조금 붙이고 싶고.",8,12],["첫 화면의 서툰 그림은 그대로 두자고 한다.","새로 그리면 훨씬 예쁘게 만들 수 있는데?","처음 혼자 만든 네모라는 게 좋잖아.","그러면 복사해서 다음 버전 만들자. 네가 처음 본 이 파일도 남겨 둘게.",7,10]]),N("종료 버튼 없는 휴식","garden",["네가 찾은 불편한 부분 고쳤어. 오늘은 오류 찾는 일 쉬어도 돼.","농담 옆에 적은 내 답은 아직 수정 중이야. 네 문장만큼 잘 안 웃겨서.","제과 영상 좋아한다니까 진짜 쿠키 얘기하러 온 거야? 준비는 했는데."],["화면 안 보고 십 분 쉬기. 타이머는 이미 켰어.","휴식까지 프로그램으로 관리하는구나.","안 그러면 조금만 더 고치다가 종례 끝나더라. 대신 오늘은 할 일 정해 왔어.","뭔데?","쿠키 맛 맞히기. 포장 뒤에 써 있어서 안 보이게 접었지.","틀리면 벌칙 있어?","없어. 내가 만든 것도 아니라 자랑할 건 없는데 같이 먹으면 좋잖아.","타이머 울리기 전에 다 먹는 건 자신 있어."],[["맛 이름을 맞히는 대신 이상한 새 이름을 붙인다.","그게 무슨 맛인데? 실행 취소하고 싶은 월요일?","단데 조금 씁쓸한 맛.","그럼 이건 저장 성공한 금요일이다. 이름 짓다가 다 먹겠네.",10,5],["주한이 제일 좋아하는 한 조각을 마지막에 남긴다.","나 주려고 남겨 둔 거야?","네가 그 맛 나올 때만 포장을 오래 봤잖아.","내가 화면 밖에서도 그렇게 티가 나는구나. 고마워, 반은 너 먹어.",11,9],["타이머가 울려도 잠깐 더 쉬자고 제안한다.","그럼 계획보다 삼 분 늦어지는데.","돌아가서 할 일은 남아 있지만 쿠키 얘기가 아직 안 끝났어.","좋아. 내가 직접 삼 분 늘릴래. 자동으로 말고 내가 골라서.",7,10]]),N("종이에는 실행 취소가 없어서","art",["네가 기다려 준 순서 덕에 지난번 구덩이는 이제 안 떨어져. 가끔은.","같이 떨어지고 웃던 부분, 영상 없는데도 머릿속에서 계속 재생돼.","우리 엉뚱한 공략 그림 여기 붙였어. 이상한데 실제로 도움 되더라."],["서율이한테 자투리 종이 빌렸어. 작은 상자 만드는 중인데 전개도가 안 친절해.","네가 설명 화면 만들 때랑 반대 입장이네.","맞아. 접는 사람은 당연히 알겠지, 라는 문장의 피해자가 됐어. 여기 산 접기라는 게 어느 쪽이야?","내가 한쪽 잡을게. 이 선부터 바깥으로 접어 보면?","잠깐, 그 선은 아까 틀리게 접은 거야. 종이에는 실행 취소가 없네.","펴면 자국은 남는데 상자는 될 것 같아.","반듯한 걸 만들면 누군가한테 간식 담아 주고 싶었는데. 네가 틀린 부분부터 다 봐 버렸어.","상자 받는 사람이 제작 과정까지 아는 건 드문 일이겠다."],[["접힌 자국을 살려 뚜껑에 작은 길 모양을 그린다.","틀린 선에 새 기능을 붙이는 거야?","여기서 접다가 우리가 동시에 고개 기울인 길.","좋다. 상자 여는 쪽에는 도착이라고 쓸래. 내가 직접 줄 테니까.",10,8],["다음 상자는 주한이 접고 내가 설명 순서를 적는다.","한 명이 손을 쓰고 한 명이 기록하면 훨씬 낫겠네.","처음 상자는 원본으로 남겨 두자. 설명이 어디서 필요했는지 보이니까.","너 내 실수를 지우는 쪽보다 함께 쓰는 쪽이구나. 그게 오늘은 마음에 들어.",7,12],["종이를 잠깐 내려놓고 누구에게 무슨 간식을 주고 싶었는지 묻는다.","누구인지는 거의 공개된 정보 같은데.","그래도 주한이 말해 주는 걸 듣고 싶어.","너. 내가 만든 걸 네가 먹으면 좋겠어. 이렇게 짧은 입력에 대답이 오래 걸리네.",11,4]]),N("보내지 않은 알림창","computer",["네가 직접 다섯 시라고 확인해 줘서 알림을 안 켜도 기억하고 있어.","쿠키 반씩 바꾸기로 했지? 가게 메뉴 보고 맛 두 개까지 골라 놨어.","말 빨라져도 괜찮다고 했지만 이번엔 미리 천천히 연습했어. 들어 볼래?"],["개인 알림 기능을 시험하다가 팝업을 하나 만들었어. 실행은 안 했고.","이거 네가 쓴 거야? 수고했어, 창밖도 좀 봐.","혼자 작업하다가 나한테 띄우려고. 근데 네가 읽으면 조금 다르게 들리네.","왜 실행을 안 했어?","뜨면 닫아 버릴 것 같아서. 누가 직접 말해 주는 거랑은 다르잖아.","창밖에는 운동장밖에 안 보이는데.","너랑 보면 뭘 봤는지 물어볼 수는 있지.","그러면 오늘만 알림 담당을 맡아 볼까."],[["주한의 의자를 창 쪽으로 돌릴지 먼저 묻는다.","응. 모니터 저장만 하고.","기다릴게. 보고 싶은 게 있으면 네가 고르고.","오늘은 운동장 그림자. 우리 자리보다 천천히 움직이는 것 같아서.",8,12],["창밖을 본 뒤 돌아와 보인 풍경을 낙서한다.","나무를 네모로 그리면 게임 배경 같잖아.","네가 만든 첫 게임이 생각나서.","그럼 나도 네모 둘 추가할게. 이번엔 둘 다 창문 밖 보고 있어.",11,7],["팝업에 내 목소리 대신 빈 답장 칸을 넣자고 한다.","알림이 질문이 되는 거네.","오늘 본 것 하나 적고 닫게. 나도 쓸게.","그러면 종료할 때마다 하루가 조금 남겠다. 공개 안 하는 일기로 만들래.",9,10]]),N("새 게임 말고 이어 하기","computer",["게임 없이도 만나겠다는 답, 코드에 안 넣었어. 내가 직접 들은 거로 두려고.","다음 이야기 만들자는 말 때문에 빈 프로젝트를 하나 열었다가 닫았어. 오늘 같이 열려고.","첫날 찾았던 비밀 길 기억하고 있네. 다른 길이 생겨도 그 하트는 남겨 뒀어."],["이 게임, 새 게임 버튼만 있고 이어 하기가 없어.","짧아서 저장할 필요 없다고 했잖아.","그때는 네가 이렇게 여러 번 올 줄 몰랐어. 계속 첫 화면으로 돌려보내는 게 아까워졌고.","저장할 건 점수야, 우리가 고른 대사야?","대사. 틀린 길도. 네가 급하게 누른 이름도.","조금 부끄러운 기록까지 남기네.","너도 남기고 싶은 것만 고르면 돼. 지우는 기능도 만들 수 있어.","그러면 지금 둘이 있는 화면부터 저장할까."],[["저장 파일 이름을 두 사람이 번갈아 한 글자씩 정한다.","이상한 단어가 돼도 바꾸기 없기야.","네가 먼저 시작해.","같. 다음은 너.……아, 벌써 무슨 이름 될지 알겠다.",12,7],["첫 게임 원본과 지금 버전을 나란히 보관한다.","중간에 서툰 것도 남기는 거구나.","달라진 걸 보려면 처음도 있어야 하니까.","다음에도 둘이 비교하자. 나 혼자 좋다고 말하는 거랑 다를 테니까.",8,12],["컴퓨터를 끄고 오늘은 산책을 이어 하자고 한다.","저장은 지금 안 해도 돼?","방금 네가 만든 이어 하기 버튼 눌러 뒀어.","그럼 돌아와도 여기부터구나. 좋아, 오늘은 밖에서 다음 대사 만들자.",10,10]])],minhyuk:[N("우산을 돌려주는 방법","classroom",["네가 우산을 가운데로 맞춰 준 덕에 공지 봉투는 하나도 안 젖었어. 네 어깨는 조금 젖었지만.","웅덩이 피하는 길로 돌아가니까 생각보다 늦었지. 나는 그 길 괜찮았어.","정류장까지만이라고 정한 거리 덕분에 편했어. 더 가고 싶어도 억지로 안 늘릴 수 있었고."],["우산은 말려서 가져왔어. 그런데 손잡이에 이게 남았더라.","우리 반 준비물 목록? 비 맞아서 잉크가 번졌네.","업무 칸은 읽히는데 맨 아래 네 낙서는 그대로야. 웃는 우산.","반장 우산이 너무 근엄해 보여서.","그럼 한 장 더 그려 줘. 분실물 표시 말고 내가 알아보는 표시로.","완장에도 붙일 거야?","아니. 그건 공식 표식이잖아. 이건 내 물건에만.","개인 표식 제작 의뢰네."],[["우산 손잡이에 붙일 작은 빗방울을 그린다.","웃는 표정도 넣어?","이번엔 네가 그려. 우산 주인이니까.","내 그림은 너무 반듯한데. 네 것 옆에 두면 조금 덜 딱딱하겠네.",8,11],["「둘이 써도 비가 새지 않음」이라고 적는다.","성능 보증 문구 같은데 네 어깨는 젖었잖아.","그러면 다음에 같이 검사해야겠네.","알겠다. 다음 검사 때는 네 쪽부터 확인할 거야.",11,6],["낙서 대신 우산을 쓰고 갈 다음 행선지를 적는다.","비 오는 날 약속부터 잡는 거야?","같이 걸어 보니까 비가 와도 갈 만해서.","그럼 길은 내가 찾을게. 우산은 이번엔 네가 가운데 잡아.",10,9]]),N("반장이 고르지 못한 자리","cafeteria",["지난번 같은 자리에서 천천히 먹은 간식, 그때는 종 치는 소리가 아쉽더라.","가 보고 싶던 가게 이름 기억하지? 오늘 지도도 가져왔어.","다음 정리도 함께하겠다고 했지만 오늘은 업무표 안 가져왔어. 일부러."],["가게 좌석 사진인데 창가랑 안쪽 중에 어디가 좋아?","반 모임 장소 정하는 거야?","아니. 두 명 예약하는 연습. 아직 실제로 전화는 안 했고.","두 명이면 네 취향대로 골라도 되지 않아?","늘 다수결로 골라서 그런가. 나한테 편한 자리 고르는 게 어색해.","편하게 말할 수 있는 쪽은?","창가는 밖을 보며 말을 돌릴 수 있고, 안쪽은 네 말이 잘 들릴 것 같아.","장점 설명에 벌써 내 자리가 들어가 있네."],[["창가를 고르고 풍경 얘기를 번갈아 하자고 한다.","말이 끊겨도 밖 볼 게 있겠네.","침묵까지 업무처럼 처리할 필요 없으니까.","그럼 나도 가게 들어가자마자 대화 주제 안 정할래.",7,12],["안쪽 자리를 고르고 민혁의 얘기를 길게 듣는다.","내 얘기라고 해 봐야 별거 없는데.","디저트 가게 보는 걸 좋아한다는 말부터 흥미로웠어.","그럼 사진첩 보여 줄게. 생각보다 많이 저장했으니까 놀라지 마.",11,8],["자리 두 개를 그려 민혁이 먼저 앉을 곳을 고르게 한다.","왜 반대쪽 자리는 벌써 네 이름이 있어?","너 고르면 내 자리가 정해지는 거라서.","그러네. 어딜 골라도 맞은편에 있네. 그럼 이번엔 내가 고를게.",10,6]]),N("빈 시간의 출석부","garden",["반찬 반씩 바꾼 뒤로 내 좋아하는 메뉴만 기다리진 않게 됐어. 네 것도 보게 돼서.","식사 때 업무표 꺼내지 말자고 한 약속, 오늘은 가방 맨 아래 넣고 왔어.","정리까지 남아 준 건 고마운데 오늘은 내가 미리 끝냈어. 같이 쉬려고."],["오늘 할 일 다 끝냈는데 이상하게 자꾸 확인하게 된다.","종이 닫고 손 비워 봐. 지금 들고 있는 건 뭐야?","출석부. 아, 이건 교무실에 갖다 놓아야……","그건 아까 갖다 놓고 온 빈 표지잖아.","맞다. 습관 무섭네. 빈 종이니까 다른 거 적어도 되겠지?","오늘 안 해도 되는 일 목록?","괜찮다. 네가 한 줄 써. 나는 그걸 안 할게.","반장에게 안 해도 되는 일을 지시하는 날이 오네."],[["「간식 먹는 속도 재지 않기」를 적는다.","내가 그렇게 급하게 먹나?","마지막 한 입 먹기 전에 다음 할 일부터 보더라.","오늘은 다음 한 입만 볼게. 네가 먹고 싶은 쪽 남겨 놓고.",9,10],["「내 기분 대신 결정하지 않기」를 적는다.","너 지루할까 봐 자꾸 일어나자고 했던 거?","응. 나는 아직 여기 있고 싶어.","알겠다. 추측 말고 물을게. 조금 더 같이 있어도 돼?",11,12],["「완벽하게 쉬려고 노력하지 않기」를 적는다.","노력도 금지야? 어려운 규칙인데.","어색하면 어색한 대로 앉아 있어 보자.","좋아. 대신 웃으면 나도 따라 웃을 수는 있지?",8,8]]),N("매듭을 풀기 전","classroom",["개인 약속 칸의 두 이름은 그대로야. 공무 늘어도 그 아래까지 덮진 않을 거야.","완장 매듭 고칠 때 기다려 줬지. 오늘은 조금 덜 서두를 수 있을 것 같아.","행사 뒤 첫 행선지를 같이 골라 둬서 끝난 다음이 전보다 빨리 떠올라."],["새 완장 끈이 뻣뻣하네. 혼자 묶으면 매듭이 자꾸 뒤집혀.","도와줄까?","끈 끝만 잡아 줘. 너무 당기지는 말고.","이렇게 가까이서 보니까 바느질 직접 했네.","밤에 조금 고쳤어. 오래 쓴 거라 모양은 아는데 버리기 아까워서.","네가 쓴 시간이 붙어 있구나.","그런 말 하면 새것 살 생각 더 못 하잖아. 자, 이제 놓아도 돼.","매듭은 완성됐는데 아직 다음 말이 남은 얼굴이네."],[["오늘 수선한 날짜를 안쪽에 작게 적어 준다.","겉에 안 보이게?","다음에 풀 때 누가 같이 고쳤는지 알게.","그러면 매듭 풀 때마다 보겠네. 글씨 작아도 읽을 수 있어.",11,8],["끈이 다시 풀렸을 때 혼자 묶는 방법을 같이 연습한다.","다음에도 부탁하면 안 되는 거야?","부탁해도 돼. 그래도 혼자 있어도 불편하지 않았으면 해서.","그럼 방법도 배우고, 다음에 보면 또 부탁할래.",7,12],["완장을 벗은 민혁의 빈 손을 잠깐 바라본다.","내 손에 뭐 묻었어?","아니. 일 안 들고 있는 모습이 생각보다 드물어서.","그럼 조금만 더 이렇게 있을게. 네가 보고 싶던 모습이라면.",12,4]]),N("계획표에 없는 사진","gate",["계획표 접고 걸었더니 생각보다 다른 길도 많더라. 네가 고른 첫 골목도 기억해.","내가 가고 싶던 가게를 기억해 준 건 아직 놀라워. 말하고 잊은 줄 알았거든.","한 곳씩 고르고 중간은 비워 둔 계획, 오늘도 그대로 해 보자."],["반 행사 사진 정리하다가 이게 나왔어. 내가 카메라 안 보고 웃는 사진.","옆에서 내가 뭐라고 했을 때네.","무슨 말이었지? 일정표 얘기는 아닌 것 같은데.","너도 정확히 기억 못 하는 날이 있구나.","그러게. 그래도 사진은 마음에 들어. 설명을 못 붙여서 아직 저장을 못 했지만.","설명 없이 저장해도 돼.","그럼 네가 기억하는 쪽만 말해 줘. 맞는지 틀린지는 검사 안 할게.","내가 기억하는 건 네가 계속 웃었다는 건데."],[["사진 이름을 날짜 대신 「일찍 끝난 오후」로 정한다.","일찍 끝난 업무 말고 오후?","끝난 게 아쉬워서 둘이 더 걸었던 날이니까.","그럼 이 사진 옆에는 다음에 늦게 끝난 오후도 넣자.",10,10],["같은 장소에서 오늘 사진도 남기자고 한다.","똑같이 웃을 수 있을까?","똑같을 필요는 없지. 오늘은 내가 네 옆에도 나오고 싶어.","타이머 맞출게. 이번엔 정렬 완벽하게 안 해도 되지?",12,7],["사진에 없는 그날의 작은 실수를 이야기한다.","내가 길을 반대로 안내했던 거? 그건 잊어 줘도 되는데.","그 덕분에 더 걸어서 좋았어.","좋아. 그럼 삭제 사유가 아니라 설명 한 줄로 남길게.",8,12]])],junyeon:[N("창가에 남은 연습장","classroom",["같이 복숭아 음료 마셨던 날, 네가 다시 온 시간은 기억해. 괜히 시계를 봤거든.","내 연구 노트 보고 싶다고 했지. 낙서 없는 장을 찾다가 그냥 다 가져왔어.","짧게 만나고 다음 시간을 정하니까 덜 기다리게 되더라. 오늘이 그 다음이고."],["이 문제, 답은 맞았는데 중간 계산이 조금 돌아갔어.","돌아간 계산도 보면 왜 그랬는지 알 수 있잖아.","다른 애한테 보여 주면 느리다고 할 것 같아서.","누가 그렇게 말한 적 있어?","직접은 없어. 그냥 빨리 끝내고 나가는 걸 보면 그런 생각이 들어.","끝낸 이유는 사람마다 다를 것 같은데. 나는 이 줄이 궁금해.","그거 두 번 계산한 거야. 처음 값이 맞는데도 못 믿어서.","두 번째 값까지 같이 비교해 볼까?"],[["준연이 쓴 두 풀이를 나란히 놓고 다른 점을 찾는다.","이쪽이 더 짧네. 내가 돌아가긴 했구나.","대신 처음 풀이에는 왜 그 값인지 설명이 남아 있어.","그럼 지우지 않을래. 다음 장에 짧은 쪽을 옮겨 쓰고.",6,11],["내가 틀린 풀이도 꺼내 서로 한 줄씩 읽는다.","네 것도 틀렸어? 웃기려고 만든 거 아니지?","진짜야. 나도 계산하면 종종 틀려.","아. 그러면 나도 네 줄 하나 볼게. 여기 부호부터.",9,7],["계산을 접고 오늘 남은 시간에 하고 싶은 일을 묻는다.","노트 보자고 했는데 벌써 지루해?","아니. 문제 말고 네가 고르는 걸 같이 해 보고 싶어서.","그럼 매점까지 걸을래. 오늘은 내가 먼저 가자고 하는 거야.",7,8]]),N("같은 조가 아닌 날","garden",["목요일 시간을 같이 확인해 둔 건 좋았어. 다른 칸 봐도 내 약속은 남아 있으니까.","정리 뒤 노트 보기로 했지. 그래서 오늘은 복사본 말고 원본 가져왔어.","다른 사람을 밀어내는 약속은 못 한다고 한 말, 듣기 싫었지만 아직 기억해."],["조 편성표에 네 이름이 다른 칸에 있으니까 좀 이상하네.","같이 맡은 일은 달라도 목요일 약속은 있잖아.","응. 아는데, 적힌 것만 보면 그 칸에 있는 사람이 전부인 것 같아서.","표에는 할 일만 적혀 있지 친구 목록이 적힌 건 아니야.","네가 그렇게 말하면 잠깐은 쉬워져. 혼자 다시 보면 달라지고.","그럴 때 네가 확인하고 싶은 걸 먼저 물어봐도 돼.","그럼 지금 물을게. 오늘 노트 보는 시간은 정리 도와준 답례야?","그게 제일 궁금했구나."],[["노트가 궁금해서 따로 잡은 약속이라고 말한다.","그러면 정리 안 도와준 날에도 볼 수 있어?","시간이 맞으면. 일을 해야만 만나는 건 아니니까.","알겠어. 오늘은 문제를 잘 풀어 보여야 한다는 생각 조금 내려놓을게.",9,9],["답례의 마음도 있지만 지금은 준연과 얘기하고 싶다고 한다.","한 가지 이유만 있는 게 아니네.","응. 고맙고 궁금하고. 여러 마음이 같이 있을 수 있지.","그렇게 딱 잘라 말하지 않는 답은 익숙하지 않은데, 오늘은 적어 둘래.",6,12],["오늘 약속을 어떻게 이해했는지 준연에게 먼저 묻는다.","나는 필요할 때만 불리는 줄 알았어.","그러면 내가 초대한 날도 그렇게 보였겠네. 그 부분은 달랐어.","내가 먼저 정해 버린 게 있네. 바로 바뀌진 않아도 네 말은 들었어.",5,11]]),N("쓰다 만 이름","garden",["오늘 좋았던 일부터 얘기하자고 했었지. 자꾸 다음 걱정으로 건너뛰는 건 나였고.","다른 일정 옆에 내 시간도 남겨 둔 걸 봤어. 지워진 칸만 보는 버릇이 있나 봐.","짧게 만난 날에도 노트 한 장은 끝냈어. 네가 떠나면 아무것도 못 할 줄 알았는데."],["이 명찰 뒷면, 이름 하나 써도 돼?","네 명찰인데 네가 정하면 되지. 누구 이름?","그냥…… 행사 같이 볼 사람. 네 이름 쓰면 곤란할까?","행사 때 지켜야 할 약속은 이미 몇 개 있어.","그렇지. 나도 알아. 물어본 내가 이상한 건 아니지?","물어보는 건 괜찮아. 답 듣기 전에 이름부터 쓰는 건 좀 곤란하고.","아직 안 썼어. 자국만 남았네. 지우개 좀 빌려 줘.","여기. 종이 찢어지지 않게 살살 지워."],[["함께할 수 있는 짧은 시간을 명찰 대신 일정표에 적는다.","이 시간 뒤에는 다른 약속으로 가는 거지.","응. 그래서 끝나는 시간도 같이 적을게.","아쉽긴 한데 그때 없어지는 건 아니네. 나도 내 할 일 적어 둘게.",7,11],["명찰에는 준연 자신이 하고 싶은 일을 적자고 한다.","혼자 할 일부터 생각하라는 거야?","누구 이름보다 네가 보고 싶은 게 먼저 있어도 되니까.","그럼 전시 한 곳. 같이 못 가도 나중에 뭐 봤는지는 말할 수 있겠네.",4,10],["오늘은 다음 약속 대신 이미 지킨 약속을 세어 본다.","세 번. 내가 기다린 건 더 많지만 실제 약속은 세 번이네.","그 세 번은 내가 오겠다고 말하고 온 날이야.","기다린 마음이 약속 횟수는 아니었구나. 그건 조금 아프게 들려.",5,12]]),N("접지 못한 초대장","classroom",["나 돌아올 때 간식 나눠 준 거 기억해. 부스러기까지 다 먹었잖아.","피곤할 때 얘기 안 이어 가도 됐던 건 좋았어. 맛있다는 말만 두 번 했지만.","내일 정리 끝나면 정류장까지 같이 가기로 했지. 버스 시간도 봐 뒀어."],["초대장을 잘못 접어서 가운데가 찢어졌어. 새로 뽑으면 되는데.","그래도 이걸 계속 들고 있네.","이건 내가 처음 고른 색이야. 다시 뽑을 종이는 흰색밖에 없어서.","테이프로 붙이면 글씨는 다 보이겠네. 누구한테 주려고?","친구. 아직 한 장도 못 줬어. 다들 약속이 있으니까.","올 수 있는지 물어보는 건 해 봐도 되잖아.","괜찮다고 웃고 나서 정말 안 오면 내가 너무 민망할 것 같아.","와 달라고 말하기 전부터 대답까지 상상해 버렸네."],[["일정이 맞는 시간만 짧게 적어 초대를 받는다.","조금만 와도 초대장 가져가도 되나?","그 시간에는 내가 가고 싶어서 가는 거니까.","그럼 빈칸에 네가 가능한 시간을 써 줘. 길게 채우려고 하진 않을게.",3,12],["초대하고 싶은 친구에게 직접 물어볼 말을 같이 고른다.","네가 대신 물어보는 건 아니고?","네가 불러야 준연이 만나고 싶다는 걸 알잖아.","응. 내일 전시 잠깐 볼래, 이 정도면 되겠다. 끝까지 말해 볼게.",5,11],["찢어진 초대장을 테이프로 잇고 새 종이는 따로 둔다.","붙인 자국이 가운데를 가로지르는데.","그 줄 위에 별 그리면 어때. 색은 네가 고른 걸 남기고.","네가 그려 봐. 나는 양쪽 잡고 있을게. 조금 비뚤어도 괜찮고.",7,8]]),N("돌아오지 않은 답장","classroom",["정정문에서 내가 바꿨다는 말을 남긴 뒤로 읽는 데 더 오래 걸렸어. 그래도 빼진 않았어.","쉬면서 책 이야기한 날은 수습이 끝났다는 뜻이 아니라는 거 알아. 오늘도 확인 받을 게 있고.","확인 시간 지키라고 먼저 일어나 줬지. 오늘은 내가 시계부터 봤어."],["사과문 읽었다는 표시는 왔는데 답장은 안 왔어.","그걸 보면서 기다리고 있었구나.","한 번 더 보내면 설명이 될까 하다가 멈췄어. 답을 받고 싶어서였으니까.","설명할 새 사실이 있는 거랑 답을 요구하는 건 다르지.","응. 오늘 교사 확인표에는 발송 시간만 적었어. 용서받음 같은 칸은 안 만들었고.","다음 수습은 뭐야?","어긋난 예약 비용 정리. 내가 해야 할 몫부터 계산해 둔 게 있어.","그러면 오늘은 그 숫자부터 같이 확인하자."],[["재발 방지용 공동 확인 칸이 제대로 남아 있는지 본다.","다른 사람이 확인해야 발송되는 방식은 그대로야.","불편해도 당분간 그 절차가 필요해.","알아. 네가 믿는다고 절차를 빼 달라는 말은 안 할게.",6,12],["확인을 마친 뒤 약속했던 십 분만 함께 걷는다.","조금만 더 걸으면 안 되냐고 하고 싶네.","오늘 약속은 십 분이야. 다음 시간은 새로 정할 수 있고.","응. 이번에는 끝을 늘리지 않고 지키는 데서 시작할래.",9,10],["답장 창을 닫고 오늘 마친 일만 기록하게 한다.","답이 없는 걸 지워 버리는 기분이 들었는데.","닫는다고 상대의 선택이 없어지는 건 아니야. 지금 할 수 있는 일을 보자.","오늘 정정 확인 두 건. 비용 정리 한 건. 기다리는 사람의 답은 쓰지 않을게.",5,12]])]},ns={world:["listening","unperformed","privacy","invitation","next-song"],hyunsol:["process","attention","curiosity","shared-work","no-pretext"],taewoo:["rhythm","recovery","rest","signal","offstage"],taehun:["observation","reading","uncertainty","weather","shared-page"],seoyul:["looking","silence","unfinished","exchange","coauthor"],juhan:["cooperation","authorship","imperfection","own-voice","offline"],minhyuk:["balance","delegation","personal","unscheduled","shared-plan"],junyeon:["presence","boundaries","separate-time","ordinary","accountability"]},at={world:[1,2,2,0,0],hyunsol:[1,2,0,0,0],taewoo:[1,0,2,0,0],taehun:[2,0,2,0,0],seoyul:[0,2,0,0,0],juhan:[1,2,1,0,0],minhyuk:[1,2,2,0,0],junyeon:[1,0,1,0,0]},ts={world:1,hyunsol:1,taewoo:2,taehun:1,seoyul:2,juhan:1,minhyuk:2,junyeon:2};function on(e,t,s,r){if(e==="junyeon"||t<0||t>4)return[];const c=(s===1?r!==at[e][t]:r!==(at[e][t]+1)%3)?[`route:${e}:${t+1}:${ns[e][t]}`]:[];return s===1&&t===3&&r===ts[e]&&c.push(`route:${e}:commitment`),c}function Ye(e,t,s,r){const a=on(e,t,s,r).some(c=>c!==`route:${e}:commitment`);return e==="junyeon"?{affection:0,trust:0}:a?{affection:-2,trust:-2}:{affection:-3,trust:-7}}const $=(e,t,s,r)=>({title:e,lines:t,options:s,again:r}),rs={world:["band","band","garden","band","band"],hyunsol:["chemistry","cafeteria","garden","classroom","garden"],taewoo:["dance","dance","dance","auditorium","auditorium"],taehun:["roof","library","roof","observatory","walk"],seoyul:["art","band","art","walk","art"],juhan:["computer","computer","computer","computer","computer"],minhyuk:["gate","cafeteria","cafeteria","classroom","gate"],junyeon:["classroom","garden","garden","classroom","classroom"]},ss={world:[$("새 줄에서 나는 소리",["이 봉투 끝 좀 잡아 줘. 기타 줄이 자꾸 탈출하려고 해.","내가 힘으로 이기면 되는 일이야?","힘 말고 인내. 지금 당기면 나랑 기타 둘 다 놀란다.","그럼 여기만 잡고 있을게. 이 줄이 제일 가늘네.","응. 잘 안 보이는데 없으면 바로 티 나. 첫 음 들어 볼래?","새 줄은 소리도 좀 긴장하는 것 같은데.","그 표현 괜찮다. 네가 옆에서 보고 있어서 내가 긴장한 걸 수도 있고.","그럼 고개 돌려 줄까?","그건 싫어. 보고 있어. 틀리면 같이 웃으면 되지.","알겠어. 오늘 첫 관객은 안 도망갈게."],[["첫 코드를 한 번 더 들려 달라고 한다.","똑같은 걸 두 번 듣고 싶다는 말, 연주하는 사람한테 꽤 좋아.",8,4],["빈 줄 봉투에 오늘 날짜를 적는다.","그걸 기념으로 남겨? 그럼 나도 사인. 둘이 조립한 소리니까.",6,7],["손이 아픈지 묻고 잠깐 쉬자고 한다.","조금 따갑긴 해. 들켰네. 다음 음은 매점 다녀와서 듣자.",5,8]],"그날 갈았던 줄이 이제 손에 익었어. 네가 붙잡았던 봉투는 케이스에 넣어 뒀고."),$("마이크 높이를 맞추는 둘",["조금만 내려 줄래? 마이크가 나보다 키 크겠어.","여기? 네 얼굴이 가려지는데.","아, 그러네. 이쪽으로 돌리면 네 표정도 보이겠다.","관객 표정까지 확인하면서 부르는 거야?","다 보진 않아. 오늘은 한 명만 보면 되잖아.","그 한 명이 가사를 못 외웠어도 괜찮아?","후렴만 따라 해. 틀리면 내가 더 크게 부를게.","목 아프다더니 너무 크게는 하지 말고.","맞아. 오늘은 한 번만. 대신 끝나고 어땠는지 길게 말해 줘.","그러면 잘 들어 둬야겠다. 준비됐어."],[["한 번의 후렴을 듣고 좋았던 부분을 말한다.","두 번째 음 올라가는 데? 거기 고친 거 어떻게 알았어. 다시 들려주고 싶다.",8,7],["물부터 건네고 악보를 함께 넘긴다.","연주 순서 말고 내 목부터 챙기네. 고마워, 좀 쉬었다 할게.",6,8],["긴 감상 대신 악보에 지금 내 표정을 그려 남긴다.","웃는 얼굴인 건 알겠는데……길게 말해 달랬잖아. 네 그림이 웃기긴 하다.",10,-2]],"마이크는 지난번 높이로 표시해 뒀어. 이번에는 네가 손을 놓아도 안 내려가."),$("카메라를 쉬게 하는 오후",["오늘 사진은 좀 쉬고 싶다. 연습 영상만 열 번 찍었어.","그럼 휴대전화부터 가방에 넣을게.","대신 귀는 빌려 줘. 아직 아무한테도 안 들려준 후렴이 있어.","오늘은 첫 청취자가 되는 건가?","응. 표정 숨기지 말기. 너무 열심히 웃어 줄 필요도 없고.","그 부분 좋다. 끝날 줄 알았는데 한 번 더 이어지는 거.","네가 지난번에 한 곡 더 듣고 싶다고 해서 생각났어.","내가 한 말이 노래에 들어갈 줄은 몰랐네.","정식 가사는 아니야. 그래도 네가 먼저 들었으면 했어.","기억해 둘게. 화면에 안 남겨도 잊지는 않으니까."],[["운동장을 걸으며 후렴을 다시 흥얼거린다.","걸음에 맞추니까 더 괜찮네. 다음 소절도 같이 생각해 줘.",9,5],["카메라는 넣어 두고 악보 여백에 감상을 쓴다.","녹화 대신 네 글씨가 남네. 이건 내가 가져도 되지?",6,9],["노래에 대한 감상보다 세계의 웃는 표정이 기억난다고 한다.","좋다는 말인 건 알겠어. 그래도 오늘은 내 노래를 조금 더 듣고 싶었는데.",11,-2]],"오늘은 내가 사진 찍고 싶어. 지난번엔 쉬고 싶었고, 지금은 이 하늘을 남기고 싶거든."),$("객석을 향한 한 문장",["무대 인사 연습 좀 들어 줘. 길면 바로 손 들어.","선생님처럼 채점하면 되는 거야?","아니, 제일 듣고 싶었던 사람이 와 줘서 좋다는 말이거든.","그러면 심사위원 자격이 없는 것 같은데.","알고 시킨 거야. 네가 듣고 어떤 얼굴 하는지 보고 싶어서.","이런 얼굴? 나 지금 좀 웃고 있는데.","응. 내일도 그 자리에서 그렇게 해 줘.","공연 끝나면 어디서 만날까?","무대 옆 말고 밴드실. 공개 앙코르 뒤에 한 곡 남겨 둘게.","시간까지 적어 둘게. 오늘은 둘이 같이 확인하자."],[["내일 들고 갈 작은 응원 쪽지를 만든다.","객석 멀어도 그 글씨는 찾을 것 같아. 접지 말고 보여 줘.",9,6],["밴드실에서 만날 시간을 함께 적는다.","이번에는 같은 시간. 그리고 둘 다 직접 말했어. 좋아.",6,10],["목을 아껴 두고 인사는 여기까지 연습하자고 한다.","나 계속 떠들 뻔했다. 고마워. 나머지는 내일 네 앞에서 할게.",7,8]],"어제 쓴 인사말을 지웠다 썼어. 결국 네 앞에서 했던 첫 문장이 제일 좋더라."),$("축제 끝의 비공개 앙코르",["카메라 다 껐어. 이번 곡은 나랑 너만 듣는 거야.","관객 한 명인데도 긴장해?","오늘 제일 긴장되는데. 박수로 얼버무릴 수도 없잖아.","끝나도 바로 박수 안 칠게. 네 얘기부터 듣고.","후렴 기억해? 우리가 손뼉 박자 못 맞췄던 그거.","응. 이번에는 네가 부르는 쪽으로 맞출게.","틀려도 돼. 같이 끝내면 되니까.","마지막 음 길게 가는 것도?","그건 네가 옆에 조금 더 있으라는 뜻으로 해석해도 되고.","그러면 노래 끝나도 바로 일어나지는 않을게."],[["첫 후렴을 함께 부른다.","이번에는 진짜 같이 끝났다. 나 이 순간 오래 기억할 것 같아.",10,8],["노래가 끝난 뒤 오늘 가장 좋았던 순간을 말한다.","무대 말고 나 내려오는 순간? 그런 답은 예상 못 했는데. 좋다.",8,10],["다음 주에도 평범하게 만나자고 제안한다.","공연 없어도? 그 말 기다렸어. 다음에는 내가 간식 살게.",9,9]],"축제 곡은 잠깐 접어 뒀어. 이번엔 우리만 아는 후렴부터 새로 붙여 보려고.")],hyunsol:[$("색 이름은 정답이 없어",["보호 안경 먼저. 색만 바뀌어도 눈은 하나씩밖에 없어.","알겠어. 이쪽이 준비한 지시약이지?","응. 선생님이 확인한 양만. 나는 기록할 테니까 천천히 넣어.","색이 바뀌었다. 딸기 우유보다 좀 억울한 색인데.","억울함은 색 좌표에 없는데. 일단 네 이름으로 적어 둘게.","정식 기록에 들어가면 어떡해.","개인 메모야. 나중에 읽고 웃으려고.","지금 웃어도 되는데.","지금 웃으면 네가 더 이상한 이름을 붙일 것 같아서.","이미 하나 더 생각났지만 참고 있을게."],[["변화한 색을 같은 순서로 기록한다.","순서를 잘 봤네. 네 메모 옆에 내 측정값도 적어 둘게.",6,8],["새 색 이름을 조용히 하나 더 들려준다.","잠깐. 웃으면 손 흔들려. 다 내려놓고 다시 말해 봐.",8,4],["정리 뒤 마실 음료를 함께 고른다.","음료는 밖에서. 실험 끝난 다음까지 같이 있을 거면 좋고.",7,6]],"네가 붙인 색 이름이 아직 메모에 있어. 새 실험에도 쓰자는 건 아니고, 그냥 웃겨서."),$("관찰 보상",["오늘 급식, 메뉴판 안 보고 맞혀 봐.","실험 결과보다 어려운 문제인데.","아까 급식실 쪽에서 냄새 났잖아. 관찰력 시험.","달걀말이. 자신은 없지만 희망은 있어.","맞혔네. 내가 좋아하는 반찬까지 맞히면 추가 점수.","너는 매운 거 먹을 때 물을 먼저 받아 두던데.","그런 것도 봤어? 별것까지 기억하네.","같이 먹으니까 보이지. 너도 내가 뭘 남기는지 알잖아.","응. 그래서 네가 좋아하는 건 하나 더 받아 왔어. 관찰 보상.","그럼 나도 네가 좋아하는 반찬을 남겨 둘게."],[["고맙다고 하고 다음 점심을 먼저 약속한다.","밥 한 번 더 먹는 약속 정도는 오차 없이 지켜 줘.",8,8],["접시에 반씩 나누어 놓는다.","계산은 정확하네. 근데 네 쪽에 조금 더 둬도 돼.",7,7],["오늘 내기를 다음 메뉴까지 이어 간다.","좋아. 맞히면 보상은 또 같이 먹는 거. 이건 나도 이득이네.",9,5]],"오늘은 메뉴판 봤어. 그러니까 내기 말고 그냥 같이 먹자. 네 몫도 자리 맡아 뒀고."),$("취향의 농도",["실험대는 다 닦고 왔어. 이제 여기서 쉬어도 돼.","종이컵이 두 개네. 내 것도 준비했어?","응. 지난번엔 너무 달다고 했잖아. 오늘은 덜 넣었어.","내가 그 말 한 거 기억해?","실험 노트보다 네 투덜거림이 더 기억에 남더라.","칭찬인지 모르겠는데, 차는 딱 좋아.","그럼 좋은 쪽으로 해석해. 농도는 자신 없고 네 취향은 외웠어.","이번에는 내가 타 볼까?","내 건 많이 달지 않게. 대충 말고 네가 마셔 보고.","같은 컵 말고 새 컵으로 맛만 확인할게."],[["현솔이 말한 정도로 차를 준비한다.","맞네. 내가 말한 걸 그대로 들어 줬구나. 다음에도 부탁할게.",7,10],["차를 마시며 실험 외의 좋아하는 것을 묻는다.","추리소설. 결말 맞히는 것보다 중간 대화가 좋아. 의외야?",10,5],["오늘의 배합을 둘만의 메모에 적는다.","너도 기록 남기는 버릇 생겼네. 이건 실험 노트에 섞지 말자.",8,7]],"오늘은 내가 덜 달게 마시고 싶어. 전에 적어 둔 것보다 지금 말한 쪽으로 부탁해."),$("오차 없는 저녁 약속",["설명문 마지막 줄만 봐 줘. 숫자 말고 그 아래.","행사 끝나고 5시, 학교 앞 분식집?","응. 그건 손님한테 보여 줄 내용 아니니까 외웠으면 접어.","메뉴도 벌써 골랐네.","내일 결정하면 너 배고파서 아무거나라고 할 것 같아서.","맞는 말이라 반박을 못 하겠어.","떡볶이는 덜 맵게. 네가 좋아하는 건 추가해도 돼.","끝나는 시간이 늦어지면 직접 알려 줄게.","좋아. 이 약속에는 오차 범위 없어. 기다리는 사람 배고프니까.","실험 설명보다 더 열심히 외워 둘게."],[["약속 시간을 직접 읽어 확인한다.","응. 같은 말 두 번 듣는 게 오늘은 안 지루하네.",7,10],["내일 저녁은 각자 고른 메뉴를 나누고, 다음 주엔 내가 초대하겠다고 한다.","내일 메뉴 얘기하다 다음 주까지 생겼네. 그쪽은 네가 좋아하는 걸로 골라.",9,7],["설명 연습을 들어 준 뒤 같이 내려간다.","일 끝날 때까지 같이 있어 주네. 그럼 저녁 얘기하면서 가자.",8,9]],"메뉴는 그대로야. 너 오는 시간도 그대로였으면 좋겠어. 오늘 확인하러 온 거지?"),$("계산기 없이 만나는 법",["계산기 돌려줘야 하는데, 네 가방에 넣을 뻔했어.","아직 내가 빌려 가도 되는 줄 알았네.","그거 없으면 또 물어보러 올 줄 알았는데.","계산기 때문에만 오는 건 아니잖아.","알아. 그래도 핑계 하나 있으면 편하니까.","다음에는 밥 먹자고 그냥 말할게.","그럼 나도 실험 도와 달라고 안 둘러댈게.","처음에는 진짜 실험 도와 달라는 말 아니었어?","처음에는. 중간부터는 네가 오는 시간을 기다렸어.","나도. 계산기 돌려줘도 그 시간은 남겨 두고 싶어."],[["계산기는 돌려주고 다음 만남을 정한다.","물건 없이도 또 오는 거네. 그쪽이 더 좋다.",10,9],["빈 설명문 뒷면에 함께 먹고 싶은 메뉴를 적는다.","여백이 부족한데. 다음 장까지 써도 되는 약속이지?",9,9],["오늘은 천천히 정리하며 더 이야기하자고 한다.","급하게 끝내지 않아도 돼. 나도 아직 할 말 있어.",8,10]],"계산기 없어도 찾아왔네. 그럼 이제 핑계 안 찾아도 되겠다.")],taewoo:[$("여덟 박자의 첫 수업",["발부터 보지 마. 어깨가 먼저 가면 발은 따라온다니까.","내 발은 네 설명을 못 들었나 봐.","그럼 내가 발한테 직접 설명할까? 하나, 둘, 셋.","잠깐. 여덟까지 갔는데 난 아직 다섯인데.","괜찮아. 여덟이 다시 와. 이번에는 옆에서 해 줄게.","같은 쪽으로 움직이니까 조금 덜 헷갈린다.","그렇지. 방금 맞았어. 손!","하이파이브까지가 마지막 동작이야?","그건 잘했다고 내가 주는 보너스. 싫으면 안 줘.","아니. 다음에도 맞히면 또 줘."],[["마지막 여덟 박자만 한 번 더 배운다.","좋아. 지금 감 잡았을 때 딱 한 번만. 옆에 서.",9,5],["방금 맞춘 동작을 서로의 말로 설명한다.","너 설명 웃긴데 잘 외워진다. 내가 다음부터 써도 돼?",7,8],["잠깐 물 마시며 좋아하는 춤을 묻는다.","쉬는 시간에 그 얘기 시작하면 길어진다? 나 진짜 좋아하거든.",8,6]],"지난번에 헷갈린 다섯째 박자부터 해 볼까? 오늘은 내 옆자리를 이미 잘 찾네."),$("빈 물병의 비밀",["마지막 박자 일부러 나랑 다르게 한 거야?","내 발이 독립 선언을 했어. 협상 중이야.","그럼 내가 중재해 줄게. 거울 말고 내 어깨를 봐.","기다리고 연습하고 나까지 가르치면 힘들지 않아?","발은 괜찮아. 오늘 계속 안 맞아서 오기가 좀 났어.","아까 빈 물병 두 번 마시려고 하던데.","그건 못 본 걸로. 대신 네 박자 틀린 건 나만 알게.","거래할게. 딱 한 번 더 알려 줄 수 있어?","응. 이번엔 발 말고 나 봐. 손 내밀면 마지막 동작이야.","그러면 이번에는 놓치지 않을게."],[["의욕이 남은 마지막 여덟 박자를 같이 맞춘다.","그거야! 방금 같은 박자였어. 나 지금 진짜 기분 좋다.",10,7],["물병부터 채우고 돌아와 연습하자고 한다.","연습 안 끝내고 물만 챙겨 오는 거네. 좋아, 기다릴게.",8,9],["오늘은 여기까지 하고 편히 걸어 내려가자고 한다.","조금 아쉽지만 내일 해도 되지. 내려가면서 네 얘기 듣자.",6,7]],"지난번에 맞췄던 부분은 이제 된다. 오늘은 다리가 좀 풀려서 걸으면서 얘기하고 싶어."),$("오늘은 걸어서 내려가자",["오늘 계단만 올라가도 다리가 풀리더라.","그럼 연습 영상은 내일 봐도 되겠다.","응. 동작 한 번만 더 하려다가 그냥 껐어.","다음 춤 가르쳐 달라는 말은 다음에 할게.","고맙다. 대신 옆에 좀 앉아 줘. 쉬는 건 같이 해도 되잖아.","이렇게? 물병은 내가 갖다 줄게.","응. 오늘은 나 멋있게 움직이는 모습 없어도 실망하지 마.","쉬면서 말하는 것도 너인데.","그 말 은근 좋다. 나 오늘은 그냥 수다 떨래.","매점 닫기 전에 천천히 내려가자."],[["가방을 함께 챙기고 매점까지 천천히 걷는다.","속도 맞춰 줘서 고마워. 나 오늘 이야기할 건 많아.",8,10],["앉아서 최근에 본 춤 영상을 이야기한다.","보는 건 좋지. 내가 좋아하는 부분 찾으면 같이 보자.",9,7],["춤 이야기는 잠시 덮고 내가 오늘 실수한 이야기를 꺼낸다.","네 얘기 듣고 싶긴 했어. 그런데 내가 먼저 하려던 얘기도 조금 있었는데.",10,-2]],"오늘은 다리 괜찮아. 지난번에 천천히 같이 내려가 준 건 고마웠어. 오늘 뭐 할까?"),$("둘만 아는 객석 신호",["이 손동작 기억해 둬. 공연 끝나면 객석에서 해 주는 거야.","생각보다 어렵네. 시험에 나와?","내가 너 찾는 시험에 나와. 다른 애들은 정답 몰라.","내가 반대로 하면?","그럼 웃다가 마지막 포즈 망할 수도 있어.","안 하는 게 안전한가?","그건 또 싫어. 해 줘. 내가 찾고 싶으니까.","끝난 뒤에는 어디로 가면 돼?","지금 앉은 자리. 내가 내려와서 같이 표시 떼자.","그럼 여기서 기다릴게. 손동작도 외워 둘게."],[["신호를 다시 맞춰 보고 서로 확인한다.","맞아. 내일 그 손 찾을게. 사람 많아도 찾을 수 있어.",9,9],["객석 표시 옆에 작은 별을 그린다.","내 자리는 무대인데 네 자리 꾸미는 게 더 재밌네.",10,6],["공연 뒤 간식을 고르고, 무대 없는 다음 주에도 같이 먹자고 한다.","다음 주엔 공연이 없는데……응, 알아듣고 괜히 물었어. 그날은 내가 먼저 기다릴게.",8,8]],"신호 한 번만 보여 줘. 응, 맞았어. 내일은 멀리서도 알겠네."),$("무대가 없어도 같은 자리",["찾았어. 마지막 포즈 끝나자마자 너 봤다.","난 네가 못 본 줄 알고 신호 두 번 했어.","그래서 내가 웃었잖아. 영상 보면 딱 걸릴 텐데.","오늘 영상은 네가 보고 싶을 때 같이 보자.","지금은 이거부터. 객석에 붙여 둔 표시 떼도 돼?","이미 네 공연 끝났으니까. 가져갈 거야?","아니, 네 손등에. 다음에도 여기라는 뜻.","다음 공연 때?","무대가 없어도. 그냥 나 기다리러 와도 돼.","그러면 너도 내 옆자리 그냥 찾아와."],[["표시가 떨어지지 않게 손을 펴서 보여 준다.","너 그거 진지하게 챙기니까 내가 더 부끄럽잖아. 그래도 좋아.",10,8],["다음 만남은 춤 없이 산책으로 정한다.","좋아. 못 춰도 되는 약속. 걷는 박자는 맞출 수 있지?",9,10],["둘만의 손 신호를 한 번 더 보낸다.","바로 앞에서 하니까 좀 웃긴데. 응, 나도 확인했어.",9,8]],"손등 표시는 떼었어도 돼. 네 자리까지 없어지는 건 아니니까.")],taehun:[$("구름 아래의 책갈피",["저 구름, 뭐처럼 보여?","찢어진 솜사탕. 너무 배고픈 답인가?","나는 고래라고 생각했는데. 솜사탕이면 급식 먼저 먹어야겠다.","도감에는 이름이 있을 텐데 일부러 안 보는 거야?","이름 알아도 다른 걸 떠올릴 수는 있잖아.","그러네. 이 책도 구름 이야기야?","시집. 오늘 하늘하고 닮은 문장 찾는 중이야.","이 부분이 좋다. 늦게 와도 기다리고 있다는 말.","나도 거기 표시하려던 참이었어. 네가 골랐으니까 책갈피 넣을게.","다음에 와도 그 페이지부터 볼 수 있겠네."],[["같은 페이지에서 다른 좋은 문장을 찾는다.","같은 걸 읽어도 네가 고르는 데가 다르네. 그래서 재밌다.",8,7],["구름이 바뀔 때까지 잠깐 함께 본다.","이제 고래 꼬리 없어졌다. 같이 안 봤으면 나만 아쉬웠겠다.",9,5],["점심 뒤 도감도 같이 펼쳐 보자고 한다.","좋아. 배고픈 솜사탕 감상부터 해결하고 오자.",7,8]],"지난번 책갈피 아직 거기 있어. 오늘 네가 고를 문장이 궁금해서 다른 건 안 꽂았어."),$("흐린 날에 고른 책",["오늘 관측은 접어야겠어. 하늘이 완전히 닫혔네.","그럼 약속도 다음으로 미룰까?","관측만 접는다고 했는데. 너까지 돌려보낸다는 말은 안 했어.","다행이다. 나도 바로 가기는 싫었어.","도서관 갈래? 서로 읽을 책 골라 주자.","너무 어려운 건 나 오래 걸릴 텐데.","빨리 읽는 시험 아니야. 마음에 든 문장 하나면 돼.","이 책엔 작은 메모가 있네.","내가 넣었어. 좋은 문장 찾으면 보여 달라고.","그러면 다음에 만날 이유도 책 안에 있네."],[["다음에 함께 읽을 페이지를 정한다.","혼자 먼저 다 읽어도 그 페이지는 같이 보자. 기다릴게.",8,9],["태훈에게 권하고 싶은 책을 직접 고른다.","네가 좋아하는 쪽을 먼저 알겠네. 다 읽으면 감상 말해 줄게.",9,6],["책을 빌린 뒤 구름 사진 한 장을 남긴다.","관측 실패 기념? 아니, 계획이 바뀌어도 만난 날 기념으로 하자.",8,7]],"네가 골라 준 책 읽다가 밑줄 긋고 싶어서 참았어. 빌린 책이니까 메모만 가져왔지."),$("네가 본 쪽의 하늘",["기다리면서 구름 세다가 그만뒀어. 자꾸 모양이 바뀌어서.","지금은 뭐처럼 보여?","좀 삐뚤어진 우산. 너는?","둘이 앉은 벤치. 오른쪽이 조금 비어 있네.","그쪽이 네 자리야? 그렇게 보니까 앉고 싶어지네.","실제 벤치는 여기 있는데.","응. 오늘은 네가 본 쪽이 더 마음에 든다.","그 말 노트에 적어도 돼?","내 말이라고만 적지 말고 네가 본 모양도 그려 줘.","그림은 좀 삐뚤어도 괜찮으면."],[["같은 구름을 서로 다르게 그린다.","두 그림을 나란히 놓으니까 더 재밌다. 하나는 네가 가져.",10,6],["기다리면서 떠올린 이야기를 듣는다.","별거 아닌 얘기야. 그래도 네가 듣고 싶다면 해 볼게.",8,9],["음료를 나누고 말없이 하늘을 더 본다.","말 안 해도 괜찮네. 옆에 누가 있다는 건 이런 건가 봐.",9,7]],"오늘 구름은 네가 먼저 이름 붙여. 내가 그쪽 그림으로 볼 수 있는지 해 볼게."),$("흐려도 바뀌지 않는 약속",["행사 끝난 뒤 예보 봤어. 구름이 좀 있을 것 같아.","별 보는 건 또 어려우려나?","그럼 도서관. 너 만나는 건 그대로.","대체 계획까지 다 세워 둔 거야?","날씨한테 우리 약속까지 맡기기 싫어서.","이 도감은 내가 받치고 있을게. 여기 적으면 돼?","응. 맑으면 운동장, 흐리면 창가 자리. 둘 다 같은 시간.","비 오면?","우산 쓰고 도서관. 질문이 더 생겨도 결국 만나게 해 둘 거야.","그 답 마음에 든다. 나도 잊지 않을게."],[["도감 옆에 두 가지 계획을 함께 적는다.","이렇게 적으니까 어느 하늘이어도 괜찮겠네.",8,10],["도서관에서 같이 읽을 책을 고르고, 맑아도 만날 시간을 적는다.","너는 흐린 쪽만 대비하는 게 아니구나. 좋아, 맑아도 이 페이지는 같이 읽자.",10,7],["태훈이 좋아하는 별 이야기를 더 듣는다.","시간 괜찮아? 이건 길어져. 대신 내일 이어도 돼.",9,7]],"예보는 또 바뀌었어. 그래도 두 가지 중 하나면 되니까 이번에는 덜 초조해."),$("별 대신 적은 이야기",["역시 구름이 이겼네. 관측회는 취소래.","우리 산책은?","그건 구름이 결정하는 일정 아니지.","노트도 가져왔네. 별을 못 봐도 쓸 게 있어?","오늘 쓸 건 별 말고 네 얘기인데.","갑자기 자세를 똑바로 해야 할 것 같은데.","그냥 걸어. 네가 아까 간식 고르다 오래 고민한 것도 쓰려고.","그렇게 사소한 것도?","내가 같이 있었잖아. 그래서 안 사소해졌어.","그러면 다음 문장은 내가 읽을 자리 남겨 줘."],[["노트의 다음 문장을 함께 적는다.","네 글씨가 섞이니까 오늘이 더 정확해졌네.",10,9],["별 없는 하늘 아래 천천히 한 바퀴 걷는다.","오늘 보이는 건 적어도 같이 걷는 시간은 길어졌어.",9,10],["다음 맑은 날과 흐린 날의 약속을 둘 다 잡는다.","둘 다 기다려지는 계획이네. 나 달력에 옮겨 적을게.",10,8]],"그날 쓴 노트를 다시 읽었어. 별 이름은 없는데 장면은 선명하더라.")],seoyul:[$("손등에 묻은 여백",["그 종이 가장자리만 잡아 줘. 가운데는 아직 안 말랐어.","알겠어. 그런데 손등이 먼저 색을 골랐네.","아, 묻었다. 잠깐, 닦을 거 줄게.","이 색도 포스터에 들어가?","네가 고르면 넣을 수 있어. 아직 여백 많아.","그럼 여기. 너무 눈에 띄지는 않게.","왜 작게? 마음에 든 색이라며.","나만 어디 있는지 알면 재밌을 것 같아서.","그럼 나도 아니까 둘만 아는 거네.","응. 다음에 포스터 걸리면 먼저 찾아볼게."],[["작은 색 조각을 포스터 여백에 붙인다.","잘 안 보이는데 없으면 허전하겠다. 그 자리에 두자.",9,5],["손을 닦고 종이가 마를 때까지 같이 기다린다.","말리는 시간은 늘 지루했는데 오늘은 괜찮네.",6,9],["서율이 고르고 싶었던 다른 색도 묻는다.","이쪽. 사실 네가 물어봐 주길 조금 기다렸어.",8,7]],"우리만 아는 색 아직 여기 있어. 네가 들어오자마자 그쪽 보는 것도 봤고."),$("같은 순간에 멈춘 반주",["이 음만 눌러 줘. 내가 고개 끄덕일 때.","여기? 옆 건반이랑 너무 가까워.","하나만. 두 개 누르면 곡이 조금 놀라.","곡이 방금 많이 놀란 것 같은데.","괜찮아. 나도 너 보고 웃다가 다음 음 놓쳤어.","그러면 같이 틀린 거네.","응. 이상하게 그 부분이 제일 기억나.","포스터 구석에 그린 건 뭐야?","둘이 동시에 멈춘 장면. 손은 그리기 어려워서 동그라미로 했어.","그래도 어느 쪽이 나인지는 알겠다."],[["한 음만 맡아 끝까지 함께 연주한다.","이번에는 안 멈췄다. 그래도 아까 웃은 건 지우지 말자.",8,9],["낙서 옆에 자신의 동그라미를 더 그린다.","내 그림에 네 선이 들어가네. 생각보다 잘 어울린다.",10,5],["완벽하게 치려 하지 말고 편하게 한 번 더 해 본다.","응. 오늘은 녹음 안 해. 우리만 들으면 돼.",8,7]],"그때 동그라미 그림에 팔을 붙였어. 둘이 같이 틀리는 모양이 더 잘 보이게."),$("빈 의자에 채운 옆모습",["가만히 있어 봐. 방금 그쪽 보고 있었잖아.","나 늦게 와서 벌 서는 거야?","아니. 빈 의자만 그리다가 네가 와서 채우는 중이야.","그래서 여기만 선이 연하네.","응. 아무것도 안 그리려다가 자리만 남겨 뒀어.","이제 그림이 덜 휑해?","많이. 네 가방이 생각보다 커서 화면도 거의 다 찼고.","가방이 주인공이네.","그건 큰 그림이고, 이 작은 낙서는 네 거. 얼굴은 좀 덜 자신 있지만.","내가 받아도 돼? 오래 가지고 있을게."],[["낙서를 받고 좋아하는 부분을 구체적으로 말한다.","그 표정 알아봤어? 너 웃을 때 한쪽이 먼저 올라가더라.",10,7],["완성될 때까지 옆에서 같은 풍경을 본다.","조금만 더 있어 줘. 오늘은 혼자 마무리하기 싫어.",8,10],["빈 여백 한쪽을 그려도 되는지 묻는다.","응. 그 부분은 네가 보고 있는 쪽으로 채워 줘.",9,8]],"받아 간 작은 그림, 구겨져도 괜찮아. 가지고 다니다 생긴 자국이면 나는 좋거든."),$("세 번째 만남은 내가",["그림 보지 마. 아직 선 고치는 중이야.","그거 내 소매지? 주름까지 똑같은데.","내일 객석에서 빨리 알아보는 연습.","얼굴을 그리면 더 빠르지 않아?","그건 자꾸 오래 보게 돼서 시간이 걸려.","나는 무대에서 너 바로 찾을 수 있는데.","키보드 한 대잖아. 너무 쉬운 문제로 잘난 척하지 마.","끝나고는 아까 고른 가게 같이 가자.","아침에도 만나. 그러면 하루에 두 번이네. 세 번째는 내가 만들어 볼게.","세 번째 만남은 네가 골라. 나는 갈게."],[["가방에 알아보기 쉬운 리본을 달아 달라고 한다.","이렇게 묶으면 돼. 내일 객석에서 네 가방부터 찾을게.",9,9],["서로의 서툰 초상화를 바꿔 가진다.","안 닮았는데 마음에 든다. 뒷면에 날짜 적어 둬.",10,7],["서율이 고를 세 번째 만남을 기다리겠다고 한다.","주말에 작은 전시 보러 가자. 초대장은 내가 그려 줄게.",8,10]],"세 번째 약속 초대장 다 그렸어. 아직 접지는 않았는데, 네가 직접 가져가도 좋겠다."),$("완성하지 않은 한쪽",["이건 전시에 안 걸었어. 보여 줄 사람이 따로 있어서.","우리 같이 앉아 있던 그림이네.","응. 한쪽 비어 있는 거 보이지?","아직 못 그린 거야?","같이 그리려고 남겨 둔 거야. 네가 보는 쪽은 네가 그려.","내 선 좀 삐뚤 텐데.","그건 알지. 같이 반주했을 때부터 알고 있었어.","그 기억이 여기까지 오네.","응. 완벽한 한 장보다 같이 만든 한 장이 더 좋아졌거든.","그러면 마지막 선도 같이 그리자."],[["빈 여백에 두 사람의 다음 약속을 그린다.","그림 안에 다음 그림이 생겼네. 그날도 같이 앉자.",10,9],["같은 연필을 번갈아 쓰며 풍경을 완성한다.","네 선 다음에 내 선. 구별돼도 괜찮다. 그래서 우리 그림이니까.",9,10],["그림을 들고 오늘의 풍경과 나란히 본다.","지금보다 종이에 남은 쪽이 조금 더 다정해 보이네.",10,8]],"그 그림 액자는 아직 안 골랐어. 같이 골라야 마무리한 느낌일 것 같아서.")],juhan:[$("프로그램보다 먼저 웃는 사람",["새 인사말 테스트 중이야. 아무 말이나 입력해 봐.","안녕. 너는 급식 줄을 대신 서 줄 수 있니?","잠깐, 왜 바로 그런 걸 물어봐. 기능 목록에 없잖아.","자기가 학생회장이라고 답했는데?","초기 문장을 내가 잘못 붙였네. 지워야겠다.","좀 아까운데. 테스트용 농담으로 남겨 둘까?","정식 화면 말고 연습 화면에만. 이름도 네 농담이라고 적을게.","내 이름이 버그 옆에 남는 건가?","버그 아니고 공동 아이디어. 웃겼으니까.","방금은 프로그램보다 네가 먼저 웃었네."],[["문장을 직접 고쳐서 다시 실행한다.","고친 뒤 처음 뜨는 인사, 네가 눌러 줘. 같이 만든 거니까.",7,9],["재미있는 연습용 대사를 하나 더 제안한다.","그건 좀 웃긴데. 잠깐, 적을게. 말 너무 빨리 하지 마.",10,5],["주한이 처음 프로그램을 만든 계기를 묻는다.","그 얘기는 길어. 그래도 지금 시간 있으면 해 줄게.",8,8]],"급식 줄 대신 서 달라는 질문 아직 테스트 목록에 있어. 이제는 제대로 못 한다고 답하고."),$("둘만 아는 시험 응답",["오늘 테스트, 어디서 웃을지 맞혀 볼까?","또 학생회장 나온다고?","그건 고쳤어. 대신 마지막 문장 읽어 봐.","내 발이 독립 선언? 우리가 했던 농담이네.","네가 지난번에 비슷한 말 해서 적어 뒀어. 싫으면 빼고.","좋아. 여기서 보니까 우리가 만든 표시 같네.","그럼 남길게. 아무나 보는 화면에는 안 나가고.","지금은 뭘 도와주면 돼?","한 번 끝까지 같이 눌러 줘. 혼자 보면 이상한 곳을 놓치더라.","다 끝나면 화면 밖에서도 좀 얘기하자."],[["처음부터 끝까지 사용해 보고 불편한 곳을 말한다.","이 부분 내가 너무 익숙해서 못 봤다. 같이 보길 잘했어.",7,10],["농담 옆에 주한의 답도 한 줄 남긴다.","내 답까지? 그럼 진짜 대화가 남겠네. 조금만 생각할게.",10,6],["잠깐 화면을 닫고 취미 이야기를 나눈다.","나 게임 말고도 이야기할 거 있어. 의외로 제과 영상 좋아해.",9,7]],"지난번에 같이 누르던 순서 기억하지? 오늘은 네가 찾은 부분부터 고쳤어."),$("같은 데서 떨어진 두 사람",["두 번째 조작기 잡아. 오늘은 테스트 말고 그냥 하는 거야.","협동 게임이네. 내가 못하면 너도 떨어져?","응. 근데 내가 먼저 떨어질 수도 있으니까 너무 긴장하지 마.","왼쪽으로 가면 될 것 같은데.","나도 그 생각 했는데…… 아, 둘 다 떨어졌다.","이건 누구 책임이라고 해야 하지?","같은 생각 한 책임. 방금 표정도 똑같았을 것 같은데.","다시 하면 이번엔 반대로 가자.","잠깐, 어깨 조금 붙여도 돼? 화면이 여기서 잘 보여.","응. 이번에는 화면도 같은 쪽으로 보자."],[["한 사람이 먼저 움직이고 다른 사람이 기다린다.","이번엔 통과했어. 네가 기다리는 걸 보니까 나도 덜 급해지네.",8,10],["동시에 다시 도전하고 실수를 함께 웃는다.","또 떨어졌는데 아까보다 재밌다. 한 번만 더 하자.",11,5],["쉬면서 둘의 엉뚱한 공략법을 그림으로 적는다.","이런 공략은 인터넷에 없겠다. 우리만 쓰자.",9,8]],"이번에는 지난번 구덩이 앞에서 멈췄어. 같이 배운 게 몸에 남았나 봐."),$("얼터에고를 끈 다음",["시연 끝. 이제 창 닫아도 돼.","다음 안내도 프로그램이 해 주는 거 아니야?","그건 내가 말할 건데. 잠깐만 기다려.","응. 천천히 말해.","내일 시연 끝나고 나랑 간식 먹으러 갈래?","좋아. 몇 시쯤이면 될까?","네 시 반. 아니, 정리 생각하면 다섯 시. 지금 좀 말이 빨랐지?","응. 그래도 중요한 건 알아들었어. 네가 같이 가자고 한 거.","그 문장은 다시 실행 안 해도 저장해 줘.","직접 기억할게. 다섯 시에 같이 가자."],[["시간을 함께 확인하고 약속을 직접 말한다.","응. 화면으로 보여 주는 것보다 이렇게 듣는 게 좋네.",8,10],["쿠키를 나눠 먹을 날을 정하고 다음번 간식은 내가 준비하겠다고 한다.","나는 쿠키. 다음에는 네가 고르는 맛도 먹어 볼래. 시연 끝나도 간식 약속은 남는 거지?",10,7],["말이 빨라져도 괜찮다고 웃으며 기다린다.","나 지금 또 빨라지려는데. 그래도 네가 웃어 주니까 덜 급해.",9,8]],"내일 약속은 프로그램에 안 넣었어. 잊어서가 아니라 내가 기억하고 싶어서."),$("화면을 가리고 묻는 말",["마지막 스테이지야. 이번에는 우리가 만든 엔딩까지 가 보자.","첫날 인사말도 그대로 남았네.","고친 것도 있고 남겨 둔 것도 있어. 둘이 웃었던 건 남겼어.","이제 선택지 떴다. 내일도 같이 할래?","잠깐. 그건 화면 보면서 대답하지 말고.","왜 화면을 가려?","내가 직접 물어보고 싶어서. 내일도 나랑 같이 할래?","게임을?","게임도. 그냥 밥 먹는 것도. 딱히 할 일 없는 날도.","그럼 이 대답은 네가 직접 들어 줘."],[["게임 없이도 함께 만나고 싶다고 답한다.","응. 그게 내가 듣고 싶었던 쪽이야. 화면은 이제 꺼도 되겠다.",11,9],["다음에 같이 만들 작은 이야기를 제안한다.","좋아. 이번에는 일정부터 같이 짜자. 중간에 쉬는 시간도 넣고.",9,10],["첫날의 숨겨진 하트 이야기를 다시 꺼낸다.","그 막다른 길까지 들어온 사람이 너라서 지금도 기억나.",10,8]],"엔딩은 봤는데 같이 할 일은 아직 많네. 새 게임보다 오늘 간식부터 고를까?")],minhyuk:[$("계단참의 짧은 휴식",["상자 아래를 받쳐. 계단에서는 앞이 보여야 한다.","너도 두 개 다 들지 말고 하나 나눠 줘.","이 정도는 괜찮…… 아니, 같이 옮기기로 했지. 하나 가져가.","여기서 잠깐 쉬어도 될까?","좋아. 음료도 있다. 준비물 목록에는 없지만.","반장답게 휴식까지 준비했네.","그런 말 들으면 또 일을 찾아야 할 것 같잖아.","그럼 그냥 같이 쉬는 친구답게?","그쪽이 낫다. 나도 지금은 계단 숫자 세기 싫어.","다 마실 때까지 상자는 여기 두자."],[["음료를 나누고 천천히 쉬어 간다.","서두르지 않으니까 여기 바람이 부는 것도 알겠네.",7,9],["남은 상자를 정확히 반으로 나눈다.","내가 혼자 하려던 거 알아챘구나. 고맙다. 다음에도 말해 줘.",6,10],["민혁이 일 말고 좋아하는 것을 묻는다.","디저트 가게 보는 거. 보는 것만 잘하고 가는 건 좀 서툴지만.",10,5]],"이번에는 상자를 처음부터 반으로 나눴어. 네가 또 말하게 만들기 싫어서."),$("폐점 직전의 마지막 간식",["체크리스트 끝. 더 확인할 건 없어.","그럼 매점 닫기 전에 갈 수 있겠다.","지금? 잠깐, 뛰면 교칙…… 복도 말고 운동장으로 가자.","네가 먼저 뛰는 거 처음 봐.","마지막 간식이 남았는지는 중요한 문제니까.","하나 남았다. 나눠 먹을까?","응. 이번에는 정확히 반으로 자를 자신 없어.","큰 쪽 가져도 돼. 너 오늘 정리 많이 했잖아.","일한 양으로 간식 나누지 말자. 오늘은 같이 먹을 사람으로 남고 싶어.","그럼 반은 조금 삐뚤어도 괜찮겠다."],[["간식을 반으로 나누고 같은 자리에 앉는다.","빨리 먹을 이유 없어. 오늘 목록은 이미 끝났으니까.",9,8],["민혁이 가 보고 싶던 가게를 묻는다.","말하면 진짜 같이 가 줄 거야? 그러면 한 군데 골라 볼게.",10,6],["오늘은 수고했다고 말하고 다음 정리도 함께 약속한다.","함께한다는 쪽이 좋다. 맡겨 두겠다는 말보다.",7,10]],"오늘은 매점 시간부터 확인했어. 지난번처럼 달릴 필요는 없고, 같이 갈 시간은 있어."),$("마지막에 남긴 반찬",["천천히 먹어. 누가 식판 가져가는 것도 아닌데.","네가 남아서 정리하는 줄 알고 빨리 왔어.","나도 같이 먹으려고 기다린 거야. 일은 잠깐 접었고.","좋아하는 반찬을 마지막까지 남겨 놨네.","어떻게 알았어?","항상 그 순서로 먹더라.","그런 것도 보네. 반 줄까?","네가 좋아하는 건데 괜찮아?","그래서 주는 거야. 별로인 걸 나눠 주자는 게 아니고.","그러면 나도 좋아하는 쪽을 줄게."],[["서로 좋아하는 반찬을 반씩 바꾼다.","좋아하는 걸 두 가지 먹게 됐네. 괜찮은 교환이다.",10,7],["오늘만큼은 업무표를 꺼내지 말자고 제안한다.","응. 가방 닫을게. 네 얘기를 먼저 들을 차례네.",9,9],["식사 후 함께 정리하겠다고 말한다.","혼자 남겨 두지 않겠다는 말이지? 고마워. 밥부터 천천히 먹자.",7,10]],"오늘은 네가 천천히 먹는지 내가 안 봐도 되겠네. 자리는 지난번처럼 여기야."),$("업무표 아래의 개인 약속",["공동 업무는 여기까지. 아래 칸은 비워 두려고 했는데.","내 이름 써도 돼?","잠깐. 거기는 반장이 아니라 내가 적는 거다.","그러면 네가 써 줘. 나는 기다릴 자리 말할게.","행사 끝나고 교문 옆. 시간은 다섯 시 반.","완장도 그대로 차고 나올 거야?","그건 정리 끝나면 벗을 거야. 그때까지 반장으로 불러야 하는 건 아니고.","그럼 지금부터 민혁이라고 부를게.","이미 그렇게 부르잖아. 그런데 지금은 좀 다르게 들린다.","나도 그 칸에 적힌 이름이 다르게 보여."],[["개인 약속 칸에 두 사람의 시간을 나란히 적는다.","이 줄은 지우지 않을게. 일이 늘어도 직접 이야기하고 바꿀게.",8,11],["완장 매듭을 고칠 시간을 주며 조용히 기다린다.","그렇게 보고 있으면 더 안 묶이는데. 그래도 먼저 가지는 마.",10,7],["행사 뒤에는 민혁이 고른 가게, 다음에는 내 장소로 가자고 한다.","한 번씩 안내하는 거네. 그럼 다음 약속은 네가 잡아 줘. 나는 따라가는 연습 할게.",9,9]],"업무표 아래 네 이름 보고 또 확인했어. 틀린 게 없는데 그냥 한 번 더 보고 싶어서."),$("완장을 벗고 남은 시간",["정리 끝. 이제 완장 벗어도 돼.","내가 기다릴 자리는 제대로 찾았네.","내가 쓴 약속인데 놓칠 수 없지. 이것도 가져왔어.","주말 일정표? 수정선이 엄청 많다.","가게 시간 맞추다가 산책도 넣고, 비 오면 어디 갈지 적다가.","모든 칸 안 채워도 괜찮아.","그러네. 이번엔 계획 없어도 괜찮을 것 같다.","첫 행선지는 내가 골라도 돼?","응. 내가 모르는 길이어도 같이 갈게.","그럼 천천히 걷는 데부터 시작하자."],[["계획표를 접고 가까운 길부터 함께 걷는다.","빈칸이 있어도 불안하지 않네. 네가 옆에 있으니까.",11,9],["가고 싶었다던 가게를 첫 장소로 고른다.","그때 말한 걸 기억했구나. 지금 같이 가는 건 더 좋다.",10,10],["각자 한 곳씩 고르고 중간 시간은 비워 둔다.","반반 계획. 이 정도면 내가 힘 빼는 연습도 되겠다.",9,10]],"오늘 일정표에는 빈칸이 있어. 네가 고를 곳을 남겨 둔 거니까 걱정 말고.")],junyeon:[$("인쇄실의 작은 농담",["그 묶음까지 네가 들려고? 조금 무거울 텐데.","반씩 나누면 되잖아. 어디 놓을까?","창가 책상. 네가 여기까지 올 줄 몰랐어.","정리 끝나면 매점 갈래? 네가 고르는 음료 궁금한데.","난 복숭아 맛. 그런데 다른 애가 너 부르는 것 같아.","잠깐 대답하고 돌아올게. 같이 가자는 말은 그대로야.","먼저 가도 돼. 기다리는 건 익숙하니까.","네가 가고 싶은지도 듣고 싶어.","가고 싶어. 그러니까…… 이 마지막 묶음만 같이 놓자.","응. 그다음 음료는 네가 골라."],[["함께 정리하고 약속한 매점에 간다.","진짜 다시 왔네. 나도 가방 챙겼어. 복숭아 맛 아직 있으면 좋겠다.",8,9],["준연이 적어 둔 연구 노트를 물어본다.","낙서도 많아. 그래도 보고 싶으면 다음 장부터 보여 줄게.",10,5],["오늘은 짧게 마시고 다음 만남의 시간을 정한다.","조금 아쉽지만 언제 다시 오는지 들으니까 덜 헷갈리네.",7,8]],"오늘 음료는 내가 골랐어. 네가 또 올지 몇 번이나 문을 봤지만, 지금은 왔네."),$("두 이름 사이의 작은 칸",["달력에 이름이 계속 두 개씩 적히네.","준비하는 조가 정해져서 그런가 봐.","응. 나는 옮겨 적기만 하니까 잘 보이거든.","다음 정리 작업은 같이 할래?","좋아. 그런데 그 사람 안 오는 날이면?","각자 먼저 한 약속을 보고 가능한 날을 정하면 되지.","아, 응. 그렇게 말하면 되는 거였지.","목요일은 어때? 나도 그날은 비어 있어.","목요일. 적었어. 다른 약속 생기면 말은 해 줘.","응. 갑자기 사라지지는 않을게."],[["서로 가능한 목요일 시간을 직접 확인한다.","두 번 확인했다고 웃지는 마. 이번에는 나도 확실히 기억하고 싶어.",8,10],["정리 뒤 잠깐 노트를 보며 쉬자고 한다.","내 노트도 약속에 들어가? 그럼 정리만 기다리는 날은 아니겠네.",10,6],["다른 사람을 밀어내는 약속은 할 수 없다고 솔직히 말한다.","알아. 듣고 조금 움츠러들었지만, 모르는 척하는 것보다는 낫겠지.",4,9]],"목요일이라는 말은 아직 기억해. 오늘은 정리할 양이 적어서 노트 볼 시간이 더 남아."),$("음료 두 개 사이",["여기 앉아도 돼. 옆자리 아직 비어 있어.","음료도 두 개네. 하나는 내 거야?","응. 네가 올지 몰라서 그냥 두 개 샀어.","내가 오기로 했잖아. 다음에도 같이 먹자.","그때도 나부터 찾을 거야?","먼저 한 약속에 맞춰 올게. 네가 기다리는 시간은 지키고 싶어.","그게 같은 말은 아니네.","응. 그래도 지금 같이 있는 게 거짓말은 아니야.","알아. 지금은 좋아. 다음 생각하면 자꾸 말을 더 하고 싶어져.","오늘 마실 음료가 미지근해지기 전까지는 여기 앉아 있을게."],[["지금 좋았던 사소한 일을 서로 이야기한다.","오늘은 네가 그냥 앉아 준 게 좋았어. 나도 그걸 먼저 말하면 됐는데.",10,7],["다음 만남 시간을 함께 고르되 다른 일정도 확인한다.","네 다른 약속이 적힌 걸 보니까 조금 아쉽다. 그래도 내 시간은 지우지 않았네.",7,10],["오늘은 짧게 만나고 각자 할 일을 마치자고 한다.","짧다고 없었던 시간은 아니겠지. 응, 내 노트도 마저 써야 해.",5,8]],"오늘은 내가 먼저 음료 마셨다. 기다리다가 미지근해지는 건 싫어서. 네 것도 여기 있어."),$("서류 옆에 남긴 간식",["내일 끝나면 다들 자기 약속대로 가겠지.","너는 끝난 뒤에 하고 싶은 게 있어?","별로. 아니, 아직 생각 안 했어.","정리 끝내고 지금 간식부터 먹자. 네 것도 남겨 뒀어.","나 때문에 남긴 거야? 모두 남아서 먹는 거 말고?","네가 아까 먹고 싶다고 했잖아.","그랬지. 네가 들었네.","할 말 있어 보였는데, 지금 해도 돼.","행사 끝나고 하자. 지금은…… 이 서류만 놓고 올게.","그러면 간식은 여기 둘게. 돌아오면 같이 먹자."],[["돌아온 뒤 말없이 간식을 반으로 나눈다.","내 몫 안 먹었네. 조금 눅눅해졌어도 같이 먹으면 되지.",8,8],["준연이 하고 싶다는 다음 이야기를 재촉하지 않는다.","지금 다 말해야 하는 건 아니네. 오늘은 좀 피곤해서 단어가 잘 안 떠올라.",6,10],["내일 각자의 일정과 함께 정리할 시간을 확인한다.","끝나고 십 분 정도는 남네. 그 시간에 같이 내려가도 돼?",7,9]],"간식 봉투 접어 뒀어. 그냥 버리려다가 그때 네가 남겨 둔 걸 생각해서."),$("정정문을 읽은 다음",["지금은 문서 확인을 민혁이랑 같이 해. 혼자 바꾸는 일은 안 하고.","오늘 정정할 건 어디까지 했어?","예약을 잘못 안내받은 사람들한테 원래 시간과 내가 바꾼 시간을 설명했어.","답이 오지 않은 사람도 있겠네.","응. 그런데 답 달라고 또 보내지는 않을 거야.","정리 끝나면 잠깐 쉬어도 되겠어.","너랑 쉬는 걸 잘한 일의 대가로 생각하지 않으려고 해.","지금 함께 쉬기로 한 건 지금의 약속이야.","알겠어. 오늘은 십 분 있다가 선생님께 확인받으러 가야 해.","그러면 그 시간까지 이야기하자. 할 일은 늦추지 말고."],[["정정한 내용을 함께 읽고 애매한 표현을 고친다.","내가 바꿨다는 말을 빼면 안 되겠네. 이 문장부터 고칠게.",7,11],["짧게 쉬며 요즘 읽는 책 이야기를 묻는다.","그 얘기를 해도 되는구나. 요즘은 결말보다 중간을 천천히 읽고 있어.",10,8],["선생님과의 확인 시간을 지키도록 먼저 일어난다.","아쉽지만 시간 됐네. 응, 내가 먼저 다녀올게. 고마워.",6,12]],"오늘은 정정문 대신 선생님 확인을 받은 목록을 가져왔어. 답을 안 한 사람 칸도 그대로 두었고.")]},as={world:{title:"이어폰 한쪽의 거리",art:"world-earbud",reveal:4,lines:["녹음 비교 좀 해 줘. 스피커로는 옆방 합주랑 섞여서 안 들리네.","이어폰 하나밖에 없는데 내가 가져온 걸 꺼낼까?","한쪽씩 끼면 되지. 싫으면 내가 먼저 듣고 넘겨줄 수도 있고.","한쪽씩 듣자. 어느 쪽이 내 거야?","오른쪽. 선 짧으니까 의자 조금만 붙여. 응, 그 정도.","같은 곡인데 옆에서 들으니까 네가 숨 들이쉬는 것도 들려.","노래에 녹음된 거야, 지금 내 거야?……대답 안 해도 돼.","후렴이 좋다. 방금 끝난 곡 말고 다음 것도 들을 수 있어?","아직 목록에만 있는 건데. 너도 한 곡 고를래? 오늘 첫 공동 재생목록.","순서가 중요하겠네. 첫 곡 다음에 뭘 놓을지."],options:[["조용한 두 번째 곡을 골라 둘이 끝까지 듣는다.","평소엔 빠른 곡부터 고르는데 오늘은 이쪽도 좋네.",9,6],["이어폰 선에 작은 종이표를 붙여 첫 재생목록 이름을 쓴다.","작아서 네 글씨 읽으려면 가까이 봐야 하잖아. 일부러 그랬어?",11,4],["세계가 먼저 끝까지 듣고 느낀 점을 말해 달라고 한다.","내 감상부터? 보통 자기한테 어땠는지만 물어보는데.",5,11]]},hyunsol:{title:"창가의 작은 결정",art:"hyunsol-crystal",reveal:4,lines:["실험은 끝났어. 이 전시병 뚜껑은 열지 말고 바깥에서만 봐.","아까 만든 결정이야? 조명 아래에선 잘 안 보였는데.","선생님 확인받고 밀봉해 뒀어. 창가에서 잠깐 색만 비교할 거야.","흰 종이를 병 뒤에 받쳐 줄까? 색이 더 잘 보이겠는데.","응. 종이 아래쪽만 잡아. 병은 내가 들게. 빛에 비치니까 모서리가 보이지?","작은 별을 병에 넣어 둔 것 같네.","별은 아니고 결정. 그래도 그 말은 개인 노트에만 적어 둘게.","지금 웃었지? 정확한 설명만 좋아하는 줄 알았는데.","틀린 설명은 고칠 거야. 네가 어떻게 봤는지는 듣고 싶고.","그러면 관찰 기록이랑 별명은 따로 적으면 되겠네."],options:[["빛이 닿는 방향과 색을 차례로 적는다.","같은 조건으로 보면 다른 날에도 비교할 수 있겠네. 네 글씨 옆에 내 값 쓸게.",6,11],["결정에 「현솔이가 숨긴 별」이라는 별명을 붙인다.","숨긴 적은 없는데. 네가 이제 보러 온 거지.",11,3],["기록을 마친 뒤 마실 음료의 색도 같이 고른다.","실험병이랑 음료를 헷갈리지는 말고. 손 씻고 나가자.",8,7]]},taewoo:{title:"마지막 포즈의 빈손",art:"taewoo-hand",reveal:6,lines:["오늘은 여덟 박자만. 음악보다 내 숫자에 맞춰 봐.","넷까지 왔는데 난 셋이야. 내 발이 한 박자 늦었어.","기다려 줄게. 마지막은 빨리 가는 동작 아니니까.","이렇게 나란히 서는 게 끝이야?","한 동작 남았어. 내가 손 내밀면 네가 잡고 멈추는 거.","너만 안 흔들리면 되는 줄 알았는데 나도 중심 잡아야겠네.","응. 이번엔 내 손 봐. 하나, 둘……여기. 잡아 줄래?","잡았어. 지금이 마지막 박자야?","이미 끝났어. 네가 생각보다 진지하게 보고 있어서 나도 못 움직였네.","끝났다고 말해 줘야 알지. 음악 없이도 좀 긴장되는데."],options:[["맞잡은 손으로 마지막 박자를 다시 확인한다.","이번엔 네가 세어 봐. 내가 네 숫자에 맞출게.",10,7],["둘이 나란히 서는 새로운 끝 동작을 제안한다.","수업 첫날부터 안무 바꾸네. 어떤 모양인데?",7,10],["천천히 시범을 한 번 더 보며 어깨 움직임을 익힌다.","손 말고 어깨부터 보는 거 맞아. 이번엔 내가 천천히 갈게.",5,11]]},taehun:{title:"성도 아래 남은 손자리",art:"taehun-atlas",reveal:4,lines:["옥상 쉼터 열려 있어. 해 지기 전에 책만 잠깐 보고 내려가자.","아직 밝은데 별을 볼 수 있어?","지금은 성도 읽는 연습. 눈에 안 보이는 별까지 봤다고 하진 않을 거야.","책이 생각보다 커. 양손으로 잡아야겠다.","왼쪽 끝 좀 잡아 줘. 나는 여기. 두 사람이 잡으니까 페이지가 안 날리네.","이 별에서 다음 별로 가려면 이쪽이야?","응. 성도 방향 맞추면 돼. 네 손가락 옆이 오늘 찾으려던 자리.","도감 옆에 시집 문장도 적어 놨네.","알아보는 이름이랑 좋아하는 문장은 다른 거니까. 둘 다 있으면 좋고.","오늘 페이지에는 어느 쪽을 하나 더 남길까?"],options:[["성도에서 다음에 찾을 별을 함께 고른다.","이쪽은 밝아서 처음 보기 좋아. 다음 맑은 날에 실제로 찾아보자.",7,11],["성도 여백에 어울리는 시집 문장을 같이 고른다.","네가 고른 줄 옆에 내 문장도 써도 돼? 종이는 아직 넓으니까.",11,5],["책을 받치며 태훈이 좋아하는 별 이야기를 듣는다.","그럼 이 페이지 조금만 더 잡아 줘. 바람 멎을 때까지 이야기할게.",8,9]]},seoyul:{title:"그림 밖에서 보는 얼굴",art:"seoyul-sketch",reveal:4,lines:["거기 의자 비어 있어. 창문 쪽 보고 앉아 줄래?","포스터 도와주러 왔는데 내가 모델이야?","포스터는 말리는 중. 기다리는 동안 얼굴 연습 조금만.","얼마나 가만히 있어야 해?","지금처럼 이야기해도 돼. 네가 웃을 때 선이 어디서 바뀌는지 보고 싶어서.","엄지에 물감 묻은 건 알지? 지우개 잡으면 번지겠는데.","아, 또 묻었네. 네가 그쪽 보고 웃은 거구나. 잠깐만, 그 표정.","잡아 둘 수 있는 표정은 아닌데.","그래서 빨리 그리려는 거야. 완벽하진 않아도 네가 보면 알아보게.","나는 여기 앉아서 네가 집중하는 얼굴을 먼저 외우겠네."],options:[["내가 고른 색 조각을 말리는 포스터 여백에 붙인다.","네 초상화에도 그 색 조금 넣을래. 오늘 네가 고른 색이니까.",10,5],["그림이 끝날 때까지 앉아 물감 묻은 엄지를 슬쩍 가리킨다.","나 또 얼굴 만질 뻔했네. 고마워. 대신 웃는 건 멈추지 마.",7,11],["서율이 오늘 가장 쓰고 싶었던 색을 묻는다.","이 녹색. 네가 앉은 쪽 빛이 조금 그렇게 보여.",9,8]]},juhan:{title:"픽셀 하트의 숨겨진 입구",art:"juhan-pixel",reveal:6,lines:["얼터에고 말고 내가 만든 작은 게임도 해 볼래? 방향키만 쓰면 돼.","출구가 왼쪽인데 오른쪽에 길이 하나 더 있네.","그건 그냥 막다른 길……아, 들어갔구나.","화면 구석에 작은 네모들이 켜졌어. 하트 모양인데?","이스터에그. 혼자 만들 땐 누가 저쪽까지 가 볼지 몰랐어.","누르면 글씨가 나오네. 찾아와 줘서 고마워.","읽었다고 소리 내지 마. 아니, 지울 건 아니야. 지금 네 표정을 보고 싶어서.","출구보다 이쪽이 더 기억날 것 같은데.","그럼 마지막 버튼도 네가 눌러. 화면 안 네모 둘이 같이 나오거든.","두 번째 네모는 네가 움직이는 거야?"],options:[["주한이 조작기를 잡을 때까지 마지막 버튼을 기다린다.","응. 지금 잡았어. 같이 누르면 돼. 하나, 둘.",7,12],["하트 옆에 나만 알아볼 작은 대사를 하나 제안한다.","비밀 길 안에 비밀 대사까지? 어떤 말인지 먼저 들려줘.",11,5],["이런 게임을 처음 만들었던 날을 묻는다.","처음엔 하트도 못 그렸어. 그 파일 아직 있는데 보고 싶어?",8,10]]},minhyuk:{title:"교문 앞 한 사람만큼의 우산",art:"minhyuk-rain",reveal:4,lines:["우산 없으면 잠깐 기다려. 내 것 가져올게. 공지 봉투는 가방 안에 넣고.","너도 쓰고 가야 하잖아. 비 좀 약해지면 갈게.","같이 정류장까지 가면 되지. 우산 하나에 사람이 꼭 하나일 필요는 없어.","그럼 네 가방 젖지 않게 내가 이쪽으로 들게.","조금 더 안쪽으로 와. 네 어깨가 밖에 있잖아. 응, 그 정도면 돼.","민혁이 쪽으로 너무 기울어졌는데 가운데로 맞출까?","내가 손잡이 높이를 너무 높게 잡았네. 이제 같이 잡아 봐.","서류 옮길 때보다 속도 맞추기가 어렵다.","오늘은 빨리 갈 필요 없어. 신호 하나 놓쳐도 다음 게 오니까.","그 말은 반장이 아니라 민혁이가 한 걸로 기억할게."],options:[["우산을 가운데로 맞추고 두 사람의 걸음을 맞춘다.","이번엔 네 쪽도 안 젖네. 계속 그 속도로 가자.",8,11],["웅덩이 없는 쪽으로 조금 돌아가자고 제안한다.","가까운 길보다 덜 젖는 길? 괜찮다. 오늘은 돌아가도 돼.",11,6],["정류장까지 함께 쓰고 거기서 비 상태를 보자고 한다.","끝까지 데려다주겠다는 약속보다 지금 갈 곳이 분명하네. 좋아.",6,10]]}},it={world:[[["끝나기 전까지는 이어폰 안 뺄게.","그럼 나도. 오늘은 다음 곡 빨리 넘기지 말자."],["같이 만든 목록이니까 네가 마지막 글자 써 줘.","좋아. 선 잡아 줘. 글씨 핑계로 조금 더 가까이 와도 돼."],["너한테 어떤 곡이었는지 먼저 듣고 싶어서.","처음 녹음했던 날보다 지금이 덜 부끄럽네. 네가 들으니까."]],[["올라가는 음을 오래 끌지 않는데도 편하게 들렸어.","맞아, 거기만 바꿨어. 내가 말하기 전에 알아보는 사람은 처음이야."],["쉬는 동안 내가 넘길 페이지에 표시해 둘까?","응. 네 표시 있으면 안 놓치겠다. 다음엔 내 눈도 한번 봐 주고."],["그림이면 바로 보일 줄 알았어. 말로도 얘기할게.","그럼 이 얼굴은 남겨 둬. 감상은 지금 듣고, 웃고 싶으면 그림 볼래."]],[["끝이 안 나면 운동장 한 바퀴 더 돌아야겠네.","내가 일부러 후렴 늘린 건 아니야. 늘리고 싶은 건 맞지만."],["다른 사람에게 보여 줄 감상은 아니야.","그러면 접어서 악보 안에 둘게. 내 것인 줄 알게."],["노래 듣다 네가 웃어서 그쪽에 먼저 시선이 갔어.","그 말은 좋네. 다음 소절까지 들으면 왜 웃었는지도 알려 줄게."]],[["너무 큰 글씨면 다른 관객이 가려지겠다.","그럼 작게 들고 있어. 내가 찾을 수 있을 만큼만."],["내가 늦어지면 여기 쓰인 시간 전에 직접 말할게.","좋아. 네 연락 기다리면서 혼자 결론 내리지는 않을게."],["남은 인사는 내일 내 자리에서 들을게.","그 약속 때문에 지금도 자꾸 연습하고 싶네. 오늘은 참아 볼게."]],[["조금 틀렸는데 이번엔 멈추지 않았네.","내가 너 듣고 있었거든. 혼자라면 다시 시작했을 텐데."],["무대에서는 멀었는데 내려올 때 네가 나를 봤어.","그 순간 나도 반가웠어. 잘했냐고 묻기 전에 네가 웃어서."],["아무 공연도 없을 때도 네 얘기는 들을 수 있잖아.","그럼 다음에는 노래 빼고도 약속 잡아 보자. 조금 어색해도."]]],hyunsol:[[["내가 놓친 숫자가 있으면 옆에 고쳐 줘.","빈칸은 틀린 답 아니니까 남겨도 돼. 다음에 같이 채우고."],["이름을 내가 붙였으니 분실하면 내가 찾으러 와야겠네.","병은 여기 두고 가. 대신 별명은 다음에 네가 직접 불러 줘."],["네가 고른 음료도 한 입 궁금해지겠다.","컵은 따로. 맛은 설명해 줄 수 있어. 실험 끝났어도 그건 지키자."]],[["메뉴가 별로여도 약속은 그대로야.","그러면 실패해도 같이 투덜거릴 사람은 있네. 괜찮다."],["조금 더 두면 네가 덜 먹게 되잖아.","내가 더 주고 싶어서 주는 건데. 오늘은 받아 둬도 돼."],["같이 먹는 게 보상이면 둘 다 맞혀야겠네.","둘 다 틀려도 점심은 먹어야지. 내기 결과랑 약속은 따로야."]],[["정답 외우기보다 네가 오늘 말한 걸 들었어.","그러면 내일 취향 바뀌어도 물어봐 줘. 오늘이랑 다를 수 있잖아."],["네가 좋아한 대사 한 줄만 들려줘.","한 줄만 읽으면 주인공이 이상해 보일 텐데. 책부터 빌려줄까?"],["제목은 취향의 농도라고 해 둘까?","너답다. 정확한 농도는 안 적혔는데 다시 보면 기억날 것 같아."]],[["잘 들었어. 오시, 분식집, 덜 맵게.","마지막은 네가 바꿔도 돼. 둘이 먹는 약속이니까."],["실패한 메뉴는 다음 목록에서 빼면 되지.","성공한 건 또 먹어도 돼. 매번 새로 고르는 시험은 아니고."],["설명 끝나면 내가 이해한 걸 말해 볼게.","그럼 정확하지 않은 데만 고쳐 줄게. 네 말투까지 바꾸진 않을 거야."]],[["이번엔 빈손으로 와도 알아봐 줘.","네가 오면 계산기보다 먼저 보거든. 이미."],["다음 장은 네가 채워 줘. 내가 생각 못 한 것도 먹게.","좋아. 맵기 표시도 해 둘게. 네가 힘들어할 정도 말고."],["정리 끝나기 싫어서 천천히 하는 건 아닌데.","나는 조금 그래. 끝나면 같이 내려가면 되는데도 자꾸 한 번 더 닦네."]]],taewoo:[[["하나, 둘, 셋. 이번엔 내 쪽으로 조금 돌아와.","네가 박자 말하니까 느낌 다르다. 같은 끝 동작인데."],["관객 쪽을 보다가 끝에서 서로 한번 보는 거.","좋아. 끝까지 앞만 보는 것보다 덜 외로워 보이네."],["이제 알겠다. 손은 따라오는 거고 몸이 먼저네.","맞아. 마지막 손은 놓치지 말고. 오늘 한 번 제대로 맞춰 보자."]],[["이번에는 네가 웃는 게 거울에 먼저 보였어.","너까지 웃길래 박자 잊을 뻔했어. 그래도 방금은 성공이지."],["빈 물병 두 번 마신 건 약속대로 비밀로 할게.","나도 네 발 독립 선언은 안 퍼뜨린다. 우리 꽤 큰 비밀 가진다?"],["오늘 네가 잘 맞췄던 부분만 얘기해 줘.","그럼 네가 처음 따라온 부분. 내가 혼자 춘 것보다 그게 먼저 떠올라."]],[["매점 안 열었으면 벤치에서 좀 더 쉬면 되지.","오늘은 대체 계획도 느리네. 그거 좋아. 가방은 내가 들 수 있어."],["보면서 네가 어디서 감탄하는지도 보고 싶어.","나 엄청 떠들 텐데? 그럼 이 부분부터. 발보다 어깨를 봐."],["내가 이야기를 너무 먼저 돌렸네. 네 얘기부터 하자.","아니, 네 실수도 궁금해졌어. 하나씩 교대로 말하면 되겠다."]],[["먼저 네 쪽 봤다가 신호할게.","나도 볼게. 눈 못 마주쳐도 네가 그 자리에 있는 건 아니까."],["너만 알아볼 정도로 작게 그렸어.","내가 고개 숙이면 무대 끝난 거야. 그때 별까지 같이 볼게."],["내가 먼저 사 오면 춤 얘기하다 굶지는 않겠다.","간식만 기다리는 얼굴이면 조금 서운하니까 내 신호도 해 줘."]],[["네가 내려와서 붙여 준 거니까 바로 떼긴 아깝지.","그럼 오늘까지만. 손 씻을 땐 떼어도 약속은 남아 있어."],["박자가 틀리면 신호 말고 말로 알려줘.","응. 빨리 걷고 싶으면 빨리, 더 있고 싶으면 더. 그렇게 말할게."],["나도 봤어. 이번엔 네가 먼저 해 줬네.","응. 공연 끝나도 내가 찾는 쪽은 변하지 않았다고."]]],taehun:[[["못 찾으면 찾은 척은 안 할게.","응. 어디서 헷갈렸는지 말해 줘. 그쪽부터 같이 보면 되니까."],["같은 페이지에서 다른 문장을 골라도 좋겠다.","그래야 두 번 읽게 되지. 네가 본 데를 내가 다시 읽고."],["바람 불면 내가 먼저 잡을게. 설명은 계속해.","그럼 이 별 이름부터. 이름보다 네가 잡은 페이지가 더 오래 기억날지도."]],[["그 페이지에는 책갈피 두 개 꽂아 두자.","서로 먼저 읽었는지 검사하는 용도는 아니야. 기다리는 자리 표시."],["재미없으면 솔직히 말해 줘.","재미없는 부분도 같이 말할 수 있으면 책 고르기 더 편하겠다."],["사진 제목은 흐림, 만남 취소 아님.","길지만 정확하네. 오늘 하늘보다 네 제목이 더 마음에 든다."]],[["두 장 나란히 보면 같은 구름인지 못 알아볼 수도 있겠다.","우리는 알잖아. 같은 벤치에서 서로 다른 걸 봤으니까."],["길어져도 괜찮아. 지금 앉은 자리는 안 옮길게.","그럼 처음부터. 네가 오기 전에는 구름을 빵이라고 생각했어. 배고팠거든."],["지금은 뭔가 말하려고 하다가도 하늘부터 보게 돼.","그럼 말은 나중에. 구름은 지금 지나가고 있으니까."]],[["맑은 계획 옆에도 흐린 계획 옆에도 네 이름을 쓸게.","그렇게 쓰면 예보 확인할 때마다 이름부터 보게 되겠다."],["별 못 보면 아쉽겠지만 그 책도 궁금하니까.","둘 다 기대하면 둘 중 하나는 꼭 하게 되네. 좋은 방법이다."],["오늘은 첫 부분, 내일은 그다음 이야기.","연재처럼? 그러면 다음 약속 빠지면 내용 모르게 만들 수도 있겠네. 장난이야."]],[["내가 잘못 기억한 데가 있으면 옆에 네 기억도 써 줘.","고치기보다 나란히 쓸래. 같은 날을 두 번 볼 수 있으니까."],["오늘은 목적지 없이 걷는 쪽이 더 좋다.","돌아갈 길만 기억하자. 이야기는 어디서 끝내도 다음에 이으면 되고."],["다음번에 비가 오면 우산도 계획에 넣을게.","난 책을 넣을래. 우산 안에서 못 읽으면 도서관에서 읽고."]]],seoyul:[[["나중에 포스터 걸리면 제일 먼저 이 색 찾을게.","찾아도 크게 말하지 마. 가까이 와서 나한테만 알려 줘."],["표정은 고정 못 하지만 여기엔 더 앉아 있을 수 있어.","그러면 그걸로 충분해. 움직이는 사이에도 네 얼굴이니까."],["내가 녹색이라고는 생각 못 했네.","네가 어떤 색인지는 날마다 다를걸. 오늘 보는 쪽이 이 색이야."]],[["틀렸던 부분만 따로 남길 방법도 있나?","악보 옆에 동그라미 그리자. 다음에 보면 둘 다 웃겠네."],["선 지워도 되는 곳은 먼저 물어볼게.","응. 덧그려도 되는 곳도 물어봐. 같이 그릴 때는 그게 편해."],["이번엔 네가 웃어도 나 안 멈춘다.","그런 말 하면 더 웃길 텐데. 좋아, 끝까지 가 보자."]],[["내 표정을 네가 먼저 알아봤다는 게 좀 신기해.","나는 한참 보고 그렸으니까. 너는 웃느라 못 보는 부분이지."],["내가 서 있던 방향으로 의자 조금 돌릴까?","지금 좋아. 그림 끝나도 바로 일어나지는 말고."],["이쪽 나무를 좀 크게 그려도 돼?","네가 크게 봤으면 크게. 원근법 설명은 오늘 쉬어도 돼."]],[["매듭이 잘 안 풀리게 해 줘. 내가 맨날 가방 뒤집어서.","단단히 묶되 풀 수 있게. 네가 색 바꾸고 싶을 수도 있으니까."],["내 그림은 눈이 너무 커졌네.","나를 크게 봤다는 뜻이라고 해석해도 되지? 그럼 좋은 그림이네."],["주소 말고 너 몇 시에 만나고 싶은지부터 적어 줘.","그럼 조금 일찍. 전시 열기 전에 같이 기다릴 시간도 있으면 좋겠어."]],[["네가 먼저 약속의 배경을 그려 줘.","좋아. 의자는 두 개. 사람 그리는 건 네 차례야."],["내가 그은 선이 튀어도 덮지 말고 말해 줘.","튀는 선이 하나 있어야 네가 그린 곳 찾기 쉽지. 여기 남기자."],["이 그림 볼 때마다 오늘 생각나겠네.","다음에 볼 때는 또 다른 날도 떠오를 거야. 같이 더 많이 그리면."]]],juhan:[[["둘이 움직여야 나가는 길이었구나.","응. 혼자 테스트할 때는 조작기를 번갈아 잡았는데 지금이 더 편해."],["다음에도 길 잃으면 여기로 와도 돼, 어때?","좋다. 하트 찾는 게 끝이 아니라 돌아올 곳이 되는 거네."],["그 파일은 지금처럼 잘 못 움직여도 괜찮아.","그럼 웃어도 돼. 그때 내가 진지하게 만든 거라는 것만 기억해 줘."]],[["다 고친 뒤에도 처음 보는 척 해 볼게.","처음 보는 척까지는 안 해도 돼. 네가 헷갈렸던 건 내가 기억할게."],["정답처럼 안 써도 돼. 네가 하고 싶은 말이면.","그럼 조금 길어질 수 있어. 답변 칸 너비부터 늘려야겠다."],["네가 제일 잘 만든다고 생각한 쿠키부터 보여 줘.","만든 적은 없어. 영상만 많이 봤어. 언젠가 해 보고 싶은 건 있고."]],[["기다리는 쪽도 할 일이 있네. 네가 뛰는 걸 봐야 하니까.","그래서 협동 게임 좋아해. 같은 화면 봐도 역할은 다르거든."],["이번에는 내가 먼저 떨어졌어. 기록상 공평해졌네.","그런 공평은 없어도 되는데. 웃는 횟수는 같이 늘었으니까 됐지."],["다음에 보면 우리밖에 못 알아보는 지도겠다.","그래도 우리 둘은 찾을 수 있겠네. 내가 지도를 저장할게."]],[["다섯 시. 프로그램 말고 네가 말해 줬어.","그거 다시 읽어 주니까 진짜 일정이 됐네. 내일 내가 먼저 말 걸게."],["나는 초콜릿. 쿠키랑 바꿔 먹으면 둘 다 먹겠네.","좋아. 한 입 크기는 너무 정확히 나누지 말자. 그러다 다 부서질 테니까."],["빨라도 듣고 있어. 모르면 다시 물으면 되지.","그럼 틀린 문장이라고 다 지우진 않을래. 천천히 이어서 말해 볼게."]],[["딱히 할 일 없으면 내가 하나 만들어 올게.","없어도 온다는 말이 더 좋아. 뭘 만들지는 와서 같이 정해도 되고."],["이야기 속에 쉬는 날도 넣자. 아무 사건 없는 날.","좋아. 캐릭터가 밥 먹다가 쓸데없는 농담하는 날도. 오늘처럼."],["그 작은 하트 아직 같은 자리에 있어?","응. 다른 길이 생겨도 거기는 남겨 뒀어. 네가 처음 찾았던 자리니까."]]],minhyuk:[[["둘 다 마른 쪽이 좋은 우산 위치겠지.","응. 나만 괜찮다고 정할 문제가 아니었네. 다음 횡단보도까지도 같이 봐 줘."],["늦어지면 버스는 다음 걸 타도 돼.","가방 안 공지만 마르면 오늘 급할 건 없어. 너도 안 젖게 오고."],["거기서도 비 많이 오면 내가 네 다음 길 같이 볼게.","좋아. 한 번에 다 결정하지 않아도 되는 거네. 지금은 여기 물웅덩이부터."]],[["목록 끝나고 네가 웃는 걸 처음부터 볼 수 있었네.","그럼 내일은 끝나기 전에도 웃는지 봐. 일할 때마다 굳어 있기는 싫으니까."],["한 군데 고르면 나도 가고 싶은 곳 하나 말할게.","서로 안내하는 날을 정해도 되겠네. 그건 다수결 안 해도 되고."],["정리하고 너만 남아 있으면 나도 돌아오기 애매하잖아.","그러면 처음부터 같이 끝내자. 기다리는 사람도 덜 생기게."]],[["받은 게 맛있으면 다음엔 내 쪽에서도 찾아봐야겠다.","식판 바뀌었다고 놀리면 안 된다. 내가 좋아하는 거 제대로 골랐으니까."],["오늘 아무 일도 안 해도 같이 먹을 이유는 있지.","응. 내가 자꾸 일을 이유로 붙였네. 오늘은 점심 약속이라고 하자."],["정리는 같이 빨리 하고, 밥은 같이 천천히.","순서가 마음에 든다. 내가 급해지면 아까 한 말 다시 해 줘."]],[["내가 적은 시간이니까 바뀌면 나도 직접 말할게.","고맙다. 확인 도장 대신 말로 약속하는 건 아직 조금 떨리네."],["먼저 안 갈게. 서두르지 마.","이런 작은 매듭 때문에 기다리게 할 줄은 몰랐는데. 지금은 좀 고마워."],["네가 좋아하는 가게면 길 조금 돌아도 괜찮아.","그럼 단거리 계산은 안 할게. 걷다가 이야기할 시간도 필요하니까."]],[["다음 모퉁이에서 마음 바뀌면 돌아가도 돼.","돌아간다고 실패는 아니지. 같이 걷는 시간은 그대로니까."],["그때 네가 사진까지 보여 줬잖아.","나 너무 신나서 설명했지. 오늘은 사진 말고 같이 들어가 보자."],["빈칸에는 지나가다 끌리는 거 하나씩 넣자.","완성 안 된 계획을 들고 나가는 게 오늘은 괜찮네. 네 자리도 있으니까."]]],junyeon:[[["맛 없으면 다른 맛 고르는 건 다음번 네 차례야.","그럼 내가 고른 게 틀려도 다음 차례는 없어지지 않는 거네."],["잘 쓴 장만 고르지 않아도 돼.","정리 안 된 걸 보면 답답할 수도 있는데. 그래도 원본을 가져와 볼게."],["오늘 짧다는 말은 다음에 안 보겠다는 말이 아니야.","알아. 아직 자꾸 그렇게 들려서 오늘 정한 시간을 써 둘게."]],[["너도 안 되는 시간 있으면 말해 줘.","나는 다 된다고 쓰려다가 지웠어. 내 일정도 보긴 해야겠네."],["노트가 궁금하다고 한 건 빈말이 아니야.","그럼 보여 줄 장을 너무 오래 고르진 않을게. 기다리다가 약속 놓치면 이상하니까."],["준연이랑 지킬 약속은 따로 정할 수 있어.","다른 사람이 없을 때만 오는 건 아니라는 말이지. 바로 편해지진 않아도 알겠어."]],[["나도 네가 먼저 의자를 빼 둔 게 반가웠어.","네가 안 오면 민망할까 봐 밀어 넣으려다가 그냥 뒀는데."],["내 시간도 네 시간도 같이 있는 표야.","한 칸만 보는 연습은 해야겠다. 다른 이름까지 자꾸 세게 돼서."],["다 끝내면 다음에 보여 줘. 오늘 자리에서만 해야 하는 건 아니니까.","그럼 이어서 풀어 볼게. 네가 간다고 페이지까지 끝나는 건 아니네."]],[["내 몫도 남겨 놨어. 이쪽이 좀 더 바삭해.","반씩 갈라 둔 걸 다시 나누네. 그럼 부스러기 많은 쪽은 내 거."],["오늘은 맛있다는 말만 해도 되겠다.","맛있어. 그건 안 골라도 바로 나오는 말이네."],["같이 내려가자. 버스는 어디서 타?","학교 앞 정류장. 거기까지 가면 얘기할 시간도 조금 있겠네."]],[["상대가 알아야 할 건 실제로 네가 한 행동이니까.","외로웠다는 말 뒤에 숨기지 않을게. 사실부터 적고 설명은 나중에."],["책 이야기를 해도 해야 할 일은 그대로 남아 있어.","응. 쉬었다고 끝났다고 생각하지 않을게. 확인 시간에 내가 먼저 일어나고."],["확인 마친 건 다음에 네가 말해 줘.","바로 칭찬받으러 뛰어오진 않을게. 내가 책임지고 마친 일로 남겨 둘게."]]]};function is(e,t,s,r){const a=[...r],c=l=>s.flags.includes(`read:hangout-${e}-${l}-v1`);return e==="world"&&t===2&&!c(1)&&(a[6]="혼자 흥얼거리다가 만들었어. 다른 사람한테 들려주는 건 오늘이 처음이고.",a[7]="완성되기 전부터 듣는 것도 좋네. 다음에는 달라진 데를 알아볼 수 있겠다."),e==="world"&&t===4&&(a[4]="후렴은 같은 멜로디가 두 번 돌아와. 한 번 듣고 두 번째부터 들어와도 돼.",a[5]="그럼 네가 한 번 먼저 불러 줘. 끝나는 음을 잘 들을게."),e==="hyunsol"&&t===2&&(a[2]="응. 네 건 아직 시럽 안 넣었어. 얼마나 단 쪽이 좋아?",a[3]="반만 넣어 볼게. 달면 돌릴 수 없으니까.",a[4]="생각보다 신중하네. 나는 네가 달게 마실 줄 알았는데.",a[5]="아직 내 취향은 실험 안 했잖아. 이 정도면 딱 좋아.",a[6]="그럼 오늘 값은 기억해 둘게. 다음에도 무조건 같다고 생각하진 않고."),e==="hyunsol"&&t===4&&!c(1)&&!c(2)&&!c(3)&&!c(4)&&(a[0]="계산기, 오늘 나한테 두 개 있어서 하나 빌려줄까 했어.",a[1]="오늘은 필요 없는데. 계산기 말고 같이 내려갈 사람은 필요하고.",a[2]="아. 그러면 둘 다 내 가방에 넣으면 되네.",a[3]="실험 도와줄 일이 없어도 얘기 걸어도 되잖아.",a[4]="알아. 자꾸 용건부터 찾아서 그렇지.",a[8]="계산기 있냐고 먼저 물어보려다가 네가 와서 못 했어.",a[9]="그럼 이제 밥 먹자고 물어봐 줘. 나는 그쪽이 더 반갑네."),e==="taewoo"&&t===4&&!c(4)&&(a[1]="내 쪽을 보고 웃길래 나도 손 흔들었어.",a[2]="그래서 웃은 거야. 오늘 관객 중에 아는 얼굴이 보이니까.",a[4]="지금은 객석 표시 떼는 중이야. 이 별 모양은 한 장 남겨 줄까?",a[5]="네 공연 끝난 기념으로? 그럼 내가 가져도 돼?",a[6]="응, 네 손등에 붙여 줄게. 별 보이면 나한테 이렇게 손 흔들기."),e==="taehun"&&t===3&&!c(2)&&(a[1]="별 보기 어려운 하늘이려나?"),e==="seoyul"&&t===3&&(a[7]="끝나고 가고 싶은 곳 있어? 네가 골라 줘.",a[8]="작은 전시. 내일은 공연 전에 보고 끝나고도 보니까, 세 번째는 내가 만들어 볼게."),e==="seoyul"&&t===4&&(!c(1)&&!c(3)&&(a[1]="의자가 두 개네. 이쪽은 선이 조금 연하고."),c(2)||(a[6]="그건 이제 알게 되겠지. 네가 그리는 걸 보는 건 처음이니까.",a[7]="말로 설명할 때랑 그릴 때는 다를 수도 있잖아.",a[8]="응. 그래서 한쪽을 남겨 둔 거야. 네가 보면 어떻게 그릴지 알고 싶어서.")),e==="juhan"&&t===1&&(a[0]="시연 대사에 농담을 넣을까 하는데 네가 읽어 볼래?",a[1]="프로그램도 농담을 해?",a[2]="내가 미리 쓴 문장을 보여 주는 것뿐이야. 마지막 줄 봐 줘.",a[3]="연산은 할 수 있지만 급식 줄은 대신 서 주지 않습니다.",a[4]="부스에서 사람들이 물어볼 만한 걸 떠올리다가 썼어. 재미없으면 빼고.",a[5]="너다운 말투네. 그 아래 답도 한 줄 붙이면 어때?"),e==="juhan"&&t===4&&!c(1)&&(a[0]="내가 만든 작은 게임이야. 마지막 스테이지까지 같이 해 볼래?",a[1]="첫 화면 인사말이 친절하네. 찾아와 줘서 고마워.",a[2]="혼자 만들 때 넣은 말인데, 네가 읽으니까 조금 다르게 들린다."),e==="minhyuk"&&t===4&&!c(4)&&(a[1]="너도 교문으로 나오는구나. 같이 걸어도 돼?",a[2]="응. 혼자 바로 돌아가기 아쉬워서 이걸 계속 보고 있었어."),e==="junyeon"&&t===2&&!c(1)&&!c(2)&&(a[3]="하나는 나 줘도 되겠다. 너 보여서 이야기하고 싶어 왔어."),e==="junyeon"&&t===3&&!c(1)&&!c(2)&&!c(3)&&(a[5]="네가 정리하다가 간식 봉투 쪽 보는 걸 봤어.",a[6]="그랬구나. 네가 보는 줄은 몰랐네."),a}function An(e,t){if(e==="junyeon"&&t.verdict==="exclude")return!1;const s=Math.max(0,Math.min(4,t.chapter));return!t.flags.includes(`read:hangout-${e}-${s+1}-v2`)}function Ke(e,t,s){const r=Math.max(0,Math.min(4,t.chapter)),a=ss[e][r],c=`hangout-${e}-${r+1}`,l=t.flags.includes(`read:${c}-v1`),o=`${c}-v${l?2:1}`;if(e==="junyeon"&&t.verdict==="exclude")return{id:`${c}-closed`,title:"여기서 끝내기로 한 약속",location:s,lines:[{speaker:"narrator",text:"준연과 따로 만나던 약속은 끝났다. 교사의 지도 아래 이어지는 수습을 다시 찾아가 확인할 필요는 없었다."},{speaker:"player",text:"내가 지키기로 한 다음 약속으로 가자."}],choices:[{id:"leave",text:"다음 약속으로 향한다.",response:[{speaker:"narrator",text:"나는 가방을 고쳐 메고 발걸음을 돌렸다."}]}]};if(l){const m=es[e][r],g=a.options.findIndex((A,M)=>t.flags.includes(`memory:${c}:${M}`)),z=g<0?[]:[{speaker:e,text:e==="juhan"&&r===4&&g===2&&!t.flags.includes("read:hangout-juhan-1-v1")?"인사말을 화면 밖에서 돌려준 날 기억해. 다음 인사는 내가 먼저 하겠다고 했지.":m.callbacks[g],expression:e==="junyeon"?"serious":"smile"}],v=m.lines.map((A,M)=>({speaker:M%2===0?e:"player",text:A,...M%2===0?{expression:e==="junyeon"?"serious":M===6?"shy":"neutral"}:{}})),k=m.options.map(([A,M,S,E,q,Re],O)=>({id:`option-${O+1}`,text:A,response:[{speaker:e,text:M,expression:e==="junyeon"?"serious":"surprised"},{speaker:"player",text:S},{speaker:e,text:E,expression:e==="junyeon"?"serious":q>=10?"shy":"smile"}],effects:[{person:e,affection:q+Ye(e,r,2,O).affection,trust:Re+Ye(e,r,2,O).trust}],flags:[`memory:${c}:followup:${O}`,...on(e,r,2,O)]}));return{id:o,title:m.title,location:m.location,lines:[...z,...v].map(A=>({...A,text:A.text.replaceAll("{name}",t.name)})),choices:k,memory:m.title}}const d=r===0&&e!=="junyeon"?as[e]:void 0,h=is(e,r,t,(d==null?void 0:d.lines)??a.lines).map((m,g)=>({speaker:g%2===0?e:"player",text:m,...g%2===0?{expression:e==="junyeon"?"serious":g>=6?"shy":"neutral"}:{},...d&&g>=d.reveal?{art:d.art}:{}})),p=[...(d==null?void 0:d.options)??a.options];e==="hyunsol"&&r===4&&![1,2,3,4].some(m=>t.flags.includes(`read:hangout-hyunsol-${m}-v1`))&&(p[0]=["계산기를 빌릴 핑계는 접고 다음 만남을 정한다.","물건 없이도 또 오는 거네. 그쪽이 더 좋다.",10,9]),e==="juhan"&&r===4&&!t.flags.includes("read:hangout-juhan-1-v1")&&(p[2]=["화면의 인사말을 주한에게 직접 돌려준다.","찾아와 줘서 고맙다는 말을 내가 듣네. 게임 만든 건 나인데.",10,8]);const j=p.map(([m,g,z,v],k)=>({id:`option-${k+1}`,text:m,response:[{speaker:e,text:g,expression:e==="junyeon"?"serious":z>=8?"shy":"smile"},{speaker:"player",text:e==="juhan"&&r===4&&k===2&&!t.flags.includes("read:hangout-juhan-1-v1")?"게임 밖에서도 이렇게 만났잖아.":it[e][r][k][0]},{speaker:e,text:e==="juhan"&&r===4&&k===2&&!t.flags.includes("read:hangout-juhan-1-v1")?"응. 그러면 다음 인사말은 내가 화면 밖에서 먼저 할게.":it[e][r][k][1],expression:e==="junyeon"?"serious":"smile"}].map(A=>({...A,...d?{art:d.art}:{}})),effects:[{person:e,affection:z+Ye(e,r,1,k).affection,trust:v+Ye(e,r,1,k).trust}],flags:[`memory:${c}:${k}`,...on(e,r,1,k)]})),b=rs[e][r];return{id:o,title:(d==null?void 0:d.title)??a.title,location:b,lines:h.map(m=>({...m,text:m.text.replaceAll("{name}",t.name)})),choices:j,memory:(d==null?void 0:d.title)??a.title}}const os={n:"narrator",p:"player",w:"world",h:"hyunsol",t:"taewoo",o:"taehun",s:"seoyul",j:"juhan",m:"minhyuk",b:"junyeon",a:"alter",teacher:"teacher"},Ee={world:"세계",hyunsol:"현솔",taewoo:"태우",taehun:"태훈",seoyul:"서율",juhan:"주한",minhyuk:"민혁",junyeon:"준연"},ls={world:"band",hyunsol:"chemistry",taewoo:"dance",taehun:"observatory",seoyul:"art",juhan:"computer",minhyuk:"classroom",junyeon:"garden"};function T(e,t){return e.trim().split(`
`).filter(Boolean).map(s=>{const r=s.indexOf("|"),[a,c]=s.slice(0,r).split("@");return{speaker:os[a]??"narrator",text:s.slice(r+1).replaceAll("{name}",t.name),...c?{location:c}:{}}})}const cs=[[{title:"전학생의 빈 담당 칸",location:"classroom",text:`n|사이언스 페어까지 64일. 전학 온 첫 주의 마지막 수업이 끝났다.
m|잠깐만 남아 줘. 우리 반도 과학 체험과 공연을 같이 준비하기로 했어.
w|회의 시작 음악 필요하지? 아주 짧게 해 줄게.
n|세계가 기타 줄을 한 번 튕겼다. 민혁의 분필이 칠판에서 잠깐 멈췄다.
h|이번에는 폭발 없는 걸로. 설명보다 청소가 길어지면 곤란해.
t|춤도 폭발하면 안 돼? 나는 좀 화려하게 하고 싶은데.
h|그건 가능. 바닥이 남아 있는 쪽으로.
n|웃음이 번졌다. 나는 아직 비어 있는 칠판의 담당 칸을 보았다.
m|{name}, 각자 하는 걸 먼저 보고 골라도 돼. 오늘 당장 정할 필요 없어.
p|그럼 돌아다니면서 방해 안 될 정도로 도와볼게.
s|종이 잡아 주는 사람은 늘 필요해. 내 쪽부터 와도 되고.
j|한 번 눌러 보는 사람도 필요해. 내가 만들면 내가 너무 잘 알아서.
o|나는 관측 사진 고르는 중이야. 하늘 좋아하면 와.
b|신청서는 내가 모아 둘게. 인쇄랑 공지도 맡고 있으니까.
n|준연은 종이 모서리를 맞추며 이름을 적었다. 지우개가 책상 밑으로 굴러왔다.
p|여기. 의자 밑에 들어가기 전에 잡았어.
b|고마워. 나 오늘 벌써 두 번 떨어뜨렸는데.
n|준연이 잠깐 웃었다. 나는 옆의 빈 칸에 내 이름을 적었다.
w|그럼 전학생 첫 임무. 우리 이름부터 외우기.
p|틀리면 어떤 벌이 있는데?
t|이름 틀린 사람의 일을 하루 더 도와주기. 나 은근 기대되는데.
m|벌 말고 서로 알려 주는 걸로 하자. 여기서부터 일정 늘리지 말고.
n|민혁은 그렇게 말하면서도 웃음을 참지 못했다.
p|나도 불러 줘. {name}. 오늘부터 잘 부탁해.
n|여덟 개의 대답이 조금씩 다른 박자로 돌아왔다.
n|공책의 첫 장에 이름을 썼다. 아직 누구의 옆자리가 편해질지는 몰랐다.`},{title:"쉬는 시간 세 번이면",location:"cafeteria",text:`n|첫 준비 기간의 마지막 점심. 학교 지도를 꺼내는 횟수보다 복도에서 인사하는 횟수가 많아졌다.
n|쉬는 시간에는 설명문을 고쳤고, 방과 후에는 악보가 날아가지 않게 창문을 닫았다.
w|너 여기 길 이제 안 잃네. 첫날에는 계단 반대로 내려가더니.
p|그 얘기 벌써 우리 반 전체가 아는 거야?
s|전체는 아닐걸. 나는 지금 알았어.
t|나는 그때 같이 반대로 내려갔는데. 사실 말릴 타이밍을 놓쳤어.
n|오늘의 긴급 문제는 매점에 마지막으로 남은 큰 빵 하나였다.
m|여덟 조각으로 자르면 부스러기만 남겠는데.
h|전학생까지 아홉. 계산부터 다시.
j|내 몫은 작아도 돼. 아까 이미 먹었거든.
b|나도 괜찮아. 종이 정리하고 오면서 먹었어.
p|그러면 지금 배고픈 사람끼리 나누자. 다음에는 내가 먼저 사 올게.
o|다음이 정해졌네. 빵 하나가 하는 일이 크다.
n|작은 조각을 받아 들자 세계가 냅킨을 한 장 더 밀어 주었다.
w|가방에 흘리면 개미가 네 담당 일을 도와주러 올 거야.
p|그럼 최소한 준비물 운반은 해결되겠네.
s|포스터는 못 맡겨. 점선으로만 그려 올 것 같아.
n|창문에 점심 햇빛이 길게 들어왔다. 나는 아이들이 웃는 순서를 조금씩 알게 됐다.
n|태우는 먼저 웃었고, 현솔은 남들이 멈출 무렵 짧게 웃었다.
n|서율은 컵을 보며 웃었고, 민혁은 다음 말을 찾다가 결국 같이 웃었다.
j|방과 후에 체험 화면 첫 테스트 할 거야. 지나가면 한 번 봐 줘.
o|창가 사진도 바꿨어. 구름을 솜사탕이라고 부르는 사람이 있어서.
p|범인 하나밖에 없는데 너무 자세히 설명하지 마.
b|다음 간식 시간도 알려 줘. 나도 하나 골라 오게.
m|응. 이번엔 게시판만 붙여 두지 말고 직접 말할게.
n|다음 쉬는 시간에는 누구를 먼저 찾을까. 나는 빈 시간표를 괜히 다시 펼쳤다.`},{title:"삼십 분 늦게 온 약속",location:"library",text:`n|D-51. 세계와 공용 테이블에서 간식을 먹으며 첫 작업안을 맞추기로 한 날이었다.
n|내 손의 인쇄 쪽지에는 16시 10분. 시계를 확인하고 독서실 옆 문을 열었다.
w|왔네. 내 기타가 너보다 먼저 하교할 뻔했어.
p|많이 기다렸어? 아직 열 분인데.
n|세계 앞의 음료는 미지근했다. 같은 문제의 계산이 종이에 세 번 반복돼 있었다.
w|세 시 사십 분에 보자고 적혀 있었는데. 내가 잘못 봤나?
p|내 건 네 시 십 분인데. 여기, 같은 제목이야.
n|세계가 자기 쪽지를 나란히 놓았다. 제목과 장소는 같고 시간만 달랐다.
w|진짜네. 그러면 나 혼자 한 삼십 분짜리 회의는 누가 들어 주냐.
p|어떤 회의였는데?
w|네가 오면 첫 곡 뭘 들려줄지. 네 번 바꿨어.
p|지금 고른 건 아직 들을 수 있어?
w|여기서 치면 독서실 선생님도 관객 되는데.
p|운동장 벤치로 가자. 간식 봉투는 내가 들게.
n|세계가 가방을 다시 내려놓고 남은 빵을 반으로 나눴다.
w|일단 이거부터. 기다리면서 혼자 다 먹을 뻔했어.
p|안 온 줄 알게 해서 미안해. 오늘은 내가 먼저 같이 가자고 할게.
w|쪽지 둘 다 가지고 있자. 나중에 어느 시간이 맞았는지 물어보게.
n|나는 두 원본을 구겨지지 않게 공책 사이에 넣었다.
p|다음에는 종이만 보지 말고 서로 한 번 더 확인하자.
w|좋아. 오늘 다음 약속은 지금 잡자. 벤치에서 한 곡 더 듣기.
n|세계가 기타 케이스를 들었다. 손잡이 옆에 작은 별 스티커가 하나 늘어 있었다.
p|기다리는 동안 붙인 거야?
w|응. 안 기다렸으면 없었을 별. 그렇다고 다음에도 늦으라는 건 아니고.
n@hallway|우리는 복도를 나란히 걸었다. 처음 어긋난 시간을 되돌리지는 못해도 남은 오후는 같이 쓸 수 있었다.
n|내일은 게시판에서 인쇄와 배부 안내도 확인하기로 했다. 오늘의 마지막은 기타 소리였다.`}],[{title:"오늘도 와?",location:"classroom",text:`n|D-49. 교실 뒤에 붙은 달력의 빈칸이 조금씩 줄었다.
n|내 담당을 정하고 나니 도움을 청하는 말이 달라졌다.
s|오늘도 와? 종이 잡아 줄 일은 없는데, 보여 주고 싶은 건 있어서.
p|일 없어도 가도 되는 거였네.
w|이제 알았어? 내가 맨날 기타 고장 내고 기다릴 수는 없잖아.
t|나는 같이 틀릴 사람 구하는 중. 혼자 틀리면 재미없거든.
h|그건 채용 조건이 너무 넓은데.
n|준연은 새 달력에 이름을 옮겨 적었다. 같은 칸의 두 이름을 보며 펜을 멈췄다.
b|다들 시간이 비슷하게 맞네.
m|수업 끝나는 시간은 같으니까. 준비 장소만 안 겹치면 돼.
j|내 쪽은 오후 늦게도 괜찮아. 시연 기계가 두 대뿐이라 순서대로 하려고.
o|관측은 날씨 보고. 흐리면 사진 정리하면서 같이 책 읽자.
p|도와주는 게 아니라 그냥 같이 있는 시간도 적어 둬야겠다.
n|달력 옆에 붙인 내 메모는 작았지만, 교실을 나갈 때마다 보였다.
n@cafeteria|점심에는 지난번에 좋아한다고 말한 반찬이 내 쪽으로 조금 밀려왔다.
n|나는 이름을 불러 고맙다고 했다. 건넨 사람은 대수롭지 않은 척 고개를 돌렸다.
w|연습 때 가장 어려운 건 뭔지 알아? 네가 무슨 표정 하는지 안 보는 거.
p|왜 안 봐야 하는데?
w|보면 웃어서 가사를 틀려. 아직 해결 못 했어.
t|나는 웃을 때 발을 틀리니까 서로 비슷한 문제네.
m|준비하면서 계속 웃는 건 좋은데, 밥도 좀 먹어.
h|민혁도 말하면서 자기 젓가락은 멈춰 있는데.
n|민혁이 조용히 한 입 먹자 다들 다시 웃었다.
b|정리 작업은 목요일에 할 거야. 올 수 있는 사람은 말해 줘.
p|가능한 시간 확인하고 직접 말할게.
n|누군가를 기다릴 이유가 학교 곳곳에 하나씩 생겼다.`},{title:"16시 20분의 닫힌 문",location:"dance",text:`n|작은 합동 연습 날. 태우는 물병과 운동화를 챙겨 무용실 앞에 먼저 와 있었다.
t|오늘은 시간 맞춰 시작하자. 16시 20분, 지금 딱 됐어.
n|문에 붙은 예약표에는 다른 사용 일정이 적혀 있었다.
p|우리 반 시간이 17시로 되어 있는데?
t|잠깐. 내가 받은 건 16시 20분 맞아. 또 내가 잘못 봤나?
n|태우가 안내 화면을 켰다. 손가락이 같은 숫자를 두 번 짚었다.
m|선생님께 예약 변경 여부부터 여쭤보자. 여기서 기다리면서 추측하지 말고.
p|같이 가자. 나는 네가 받은 안내를 봤어.
teacher|기존 예약이 17시로 옮겨졌구나. 변경 내역은 확인할 수 있어.
t|시간은 바뀌었는데 저한테 온 안내는 그대로였어요.
teacher|확인서를 준비해 둘게. 오늘은 17시부터 쓸 수 있고, 빈 교실은 먼저 써도 된다.
n|태우는 고개를 끄덕이고 물병 뚜껑을 열었다. 비어 있다는 걸 뒤늦게 알아차렸다.
p|물부터 채우러 갈까?
t|응. 아까도 마시려다 말았는데 내가 까먹었네.
w|마흔 분을 그냥 보내긴 아깝다. 소리 안 내고 맞출 수 있는 것부터 해 보자.
s|내가 손뼉으로 박자 잡을게. 옆 반 수업 안 들릴 정도로 작게.
h|안 들리면 박자도 안 들리는 거 아닌가.
j|소리 대신 손을 보면 되잖아. 조용한 리듬 게임이라고 생각하자.
n@classroom|우리는 빈 교실의 의자를 뒤로 밀었다. 태우가 팔 동작부터 보여 줬다.
t|하나, 둘. 발은 천천히. 누가 빨리하는 대회 아니야.
p|그 말을 내 발에도 전해 줘.
n|세 번째 박자에서 나와 세계가 반대쪽으로 움직였다. 둘 다 멈추고 웃었다.
o|둘이 갈라지는 춤으로 바꾸면 완벽했을 텐데.
b|17시까지 이제 십 분 남았어. 이동할 때 알려 줄게.
n|우리는 원래 하려던 연습의 절반을 교실에서 끝냈다.
n|시간이 왜 바뀌었는지는 기록을 보고 확인하기로 했다. 태우 혼자 시간을 잘못 외운 일은 아니었다.`},{title:"다음 달력의 같은 칸",location:"classroom",text:`n|D-32. 중간 점검을 마친 아이들이 하나둘 가방을 챙겼다.
m|오늘 정리 끝. 남는 사람은 교실 창문만 마지막에 확인해 줘.
n|나는 가방을 들었다가 다시 내려놓았다. 돌아가고 싶지 않은 이유가 준비물 때문만은 아니었다.
t|아까 마지막 박자, 일부러 나랑 다르게 한 거야?
p|내 발이 독립 선언을 했어. 아직 협상 중이야.
t|그러면 다음에 중재해 줄게. 오늘은 마지막 한 번만 더 맞춰 보자.
n|태우가 박자를 세는 동안 세계는 기타 케이스를 닫았다.
w|나는 목 쉬기 전에 끝. 대신 내려가면서 노래 말고 얘기하자.
s|그림 말리는 동안 여기 있어도 돼. 말 안 해도 괜찮고.
h|말 안 해도 되는 약속은 좋네. 자꾸 설명하면 수업 같아져서.
j|나는 내일 게임 한 판 하자고 하려고 했는데. 그건 말 많아질 수도 있어.
o|게임 끝나고 구름 보면 조용해지겠지.
n|서로 다른 제안 사이에서 나는 앞으로 가장 자주 찾아갈 얼굴을 떠올렸다.
p|준비가 끝나면 만날 이유를 또 만들어야 하나 생각했어.
m|같이 있고 싶으면 그걸 이유로 적어도 되지 않을까.
n|민혁은 말하고 나서 자기 일정표를 괜히 접었다.
b|나랑 정리하는 시간은 따로 남겨도 돼. 네가 괜찮으면.
p|응. 먼저 한 약속들을 보고 같이 정하자.
n|교실 뒤 달력에는 아직 다음 주 칸이 비어 있었다.
n|내일 방과 후 시간을 누구와 가장 많이 보내고 싶은지, 이번에는 조금 오래 생각했다.
w|너무 어려운 문제처럼 보지 마. 같이 해 보고 싶은 것부터 생각해.
t|맞아. 나랑 춤 못 춰도 된다는 뜻이기도 하고.
h|나랑 있을 때도 모든 문제를 맞힐 필요는 없어.
p|그럼 정답 찾는 얼굴은 그만할게.
n|모두가 웃었다. 선택하지 않은 친구와의 시간까지 지워지는 것은 아니었다.
n|누군가의 이름 옆에 내 이름을 적을 준비가 됐다. 혹은 아직 빈칸으로 남겨도 괜찮았다.`}],[{title:"금요일에 먼저 온 쪽지",location:"classroom",text:`n|D-31. 금요일 마지막 수업의 종이 울리기 전에 접힌 쪽지가 내 책상으로 미끄러졌다.
n|오늘 바로 집에 가? 짧은 질문 아래에는 작은 그림 하나가 붙어 있었다.
p|리허설 준비 끝나고는 시간 있어.
n|나는 답을 써서 돌려주었다. 건너편에서 먼저 가방을 여는 소리가 났다.
w|오늘은 합주 오래 안 해. 준비 끝나면 진짜 퇴근이다.
m|퇴근이라고 하니까 월급 줘야 할 것 같잖아.
h|간식으로 지급하면 동의할게.
t|그러면 나는 연습 추가해도 되겠다. 아직 출출하거든.
j|그 계산이면 모두 매일 연장 근무야.
n@cafeteria|매점 창가에는 잠깐 기대어 서 있을 만한 자리가 있었다.
n|진열대 앞에서 내가 오래 고민하자 현솔이 병 두 개를 꺼내 들었다.
p|어느 쪽이 더 단 거야? 라벨만 봐서는 모르겠네.
h|성분표는 이쪽. 근데 덜 단 걸 좋아하는지는 네가 말해 줘야 해.
o|날씨 좋다. 오늘은 돌아갈 때 하늘 좀 보고 가.
s|나도 오늘 색 예뻐서 그리려고. 해 지기 전까지는.
b|공동 리허설 안내는 게시판에 올라갈 거야. 장소 확인해 줘.
p|몇 시였지?
m|16시 40분. 장소는 최종 안내랑 맞춰 보자.
n|나는 음료 뚜껑을 돌렸다. 아직 차가운 병에 손자국이 남았다.
n|점심의 짧은 만남은 헤어지기 아쉬울 만큼 빠르게 끝났다.
p|끝나고는 그냥 돌아가지 말자. 아까 얘기 마저 듣고 싶어.
n|서율이 고개를 끄덕이며 책상 위 그림을 반으로 접었다. 다른 친구들도 오늘 작업이 끝나면 잠깐 쉬기로 했다.
w|나중에 누가 매점 문 닫는다고 하면 잡아 줘. 오늘은 늦기 싫어.
t|매점 문 말고 네 가방부터 잡아야겠는데. 계속 열려 있어.
n|세계가 가방을 확인하는 틈에 나는 웃으며 휴대전화를 넣었다.
n|오늘 기다리는 것은 공연 준비가 끝나는 시간, 그리고 그 뒤에 남을 두 사람의 오후였다.`},{title:"서로 다른 곳의 리허설",location:"computer",text:`n|16시 40분. 리허설 자동안내, 얼터에고 테스트라는 이름의 알림이 떠 있었다.
n|나는 안내에 적힌 컴퓨터실로 갔다. 책상 위 기계는 꺼져 있었고 의자도 비어 있었다.
p|내가 너무 먼저 왔나?
n|몇 분 뒤 세계에게 연락이 왔다. 밴드연습실에서 기다리고 있다는 내용이었다.
w|우리는 여기라는데. 너도 혼자 기다린 거야?
p|응. 내 안내에는 컴퓨터실. 같은 모임 맞지?
t|우리 쪽은 강당이야. 다들 어디 있어?
n@hallway|나는 문을 닫고 복도를 뛰지 않을 정도로 빠르게 걸었다.
n@classroom|교실에서 다시 모인 아이들이 각자 받은 안내 화면을 나란히 놓았다.
s|제목과 시간은 같은데 장소만 달라.
j|잠깐, 자동안내라고 적혔다고 프로그램이 장소를 정한 건 아니야.
p|그러면 이 이름은 뭘 의미하는 거야?
j|시험 게시판의 화면 이름. 누가 무엇을 넣었는지는 자료를 따로 봐야 해.
m|일단 받은 안내를 지우지 말자. 각자 가진 원문부터 보관하자.
b|그냥 새 공지를 다시 올리면 되지 않을까?
h|새 공지도 필요하고, 왜 달랐는지 확인할 원문도 필요해.
o|오늘 시간은 이미 지나갔지만 다음에도 기다리게 될지는 모르니까.
n|누구도 다른 사람의 휴대전화를 뒤지지 않았다. 각자 자신이 받은 공지만 보여 주었다.
teacher|공용 게시판 예약 목록은 내일 같이 확인하자. 허용된 프로젝트 기록만 내보내면 된다.
j|네. 표시 이름으로 사람을 정하는 건 하지 않을게요.
n|민혁이 오늘 남은 연습 시간을 다시 맞췄다. 짧게나마 모두 같은 장소에서 시작했다.
w|이제 진짜 모였으니까 한 번만 맞추자. 끝나고 약속 있는 사람도 있으니까.
p|응. 오늘 저녁까지 어긋난 채로 두고 싶진 않아.
n|음악이 시작되자 태우가 손으로 여덟 박자를 그렸다.
n|서로 다른 장소를 적은 세 안내는 내 수첩에 함께 끼워 두기로 했다.
n|지금은 누가 왜 그랬는지 단정할 수 없었다. 다만 우리가 서로를 피해서 안 만난 것은 아니었다.`},{title:"닫힌 매점 앞에서 다시",location:"garden",text:`n|D-15. 그날의 엇갈린 리허설 뒤에도 방과 후의 약속은 계속 이어졌다.
n|오늘 준비를 마치고 나왔을 때 매점 문은 이미 닫혀 있었다.
p|조금만 빨리 끝났으면 됐는데.
n|정원 벤치에는 친구들 가방이 줄지어 놓여 있었다. 민혁이 내 쪽으로 냉장 음료 한 병을 굴렸다.
m|네 몫도 샀어. 오늘 마지막이라고 매점 아저씨가 남은 걸 다 꺼내 주시더라.
p|괜히 산 게 되지 않게 와서 다행이다.
n|우리는 나란히 앉아 병을 열었다. 운동장에서는 마지막 동아리 연습 소리가 났다.
w|늦어서 못 만날 때 제일 싫은 건 준비한 말을 못 하는 거더라.
s|맞아. 기다리다 그린 의자도 사람이 앉아야 끝나는 그림이었는데.
h|그 말 들으니까 나도 차 두 잔 준비한 게 덜 유난 같네.
t|다들 비슷하네. 나는 마지막 손맞춤 혼자 하니까 좀 웃겼어.
j|협동 게임은 혼자 켜면 아예 시작이 안 되고.
m|그럼 오늘은 다들 자기 약속대로 만나면 되겠다.
n|세계가 음료 뚜껑을 돌리는 사이 태우는 이미 간식 봉투를 뜯었다. 나와 손이 같은 조각 위에서 멈췄다.
t|네가 골라. 나는 두 번째로 고를게.
p|그러면 안에 초콜릿 든 것부터. 너도 이거 고르려던 거야?
t|아니, 그 옆의 딸기. 우리가 괜히 눈치만 봤네.
s|딸기 그림이 뒤집혀 있어서 내가 초콜릿으로 봤어. 포장 잘못 그리면 이렇게 되는구나.
n|서율이 빈 봉투에 딸기를 크게 그려 넣었다. 현솔은 그 옆에 ‘먹을 수 없는 그림’이라고 덧붙였다.
n|대단한 얘기를 하지 않아도 이 자리를 오래 기억할 것 같았다.
o|먼저 갈게. 오늘 구름 모양 기억해 둬. 내일은 달라질 테니까.
p|응. 우리도 조금 있다 갈 거야.
n|나는 돌아갈 시간을 확인한 뒤 휴대전화를 다시 넣었다.
n|다음 약속은 서로 같은 시간을 말하고 같은 장소를 가리키며 정했다.
n|공용 게시판 기록을 확인하기로 한 일도 수첩에 남아 있었다. 지금의 웃음까지 그 일에 빼앗기고 싶지는 않았다.
n|해가 기울 때 우리는 함께 일어났다. 이번에는 같은 방향으로 첫발을 내디뎠다.`}],[{title:"내일의 관객은 한 사람부터",location:"auditorium",text:`n|D-14. 페어까지 이 주가 남았다. 강당의 빈 의자에 햇빛이 줄을 만들었다.
m|오늘은 전체 준비 말고 각자 마지막으로 맞출 부분을 확인하자.
w|무대 인사도 연습에 들어가? 나 그게 노래보다 어렵네.
s|키보드 커버는 다 말랐어. 손 대도 돼.
t|객석에서 나 잘 보이는 자리 골라 줘. 마지막 포즈가 이쪽이야.
p|내가 여기 앉으면 네가 나도 볼 수 있어?
t|응. 너무 잘 보여서 문제일 수도 있지.
n|태우가 먼저 웃었다. 나는 의자 등받이에 작은 표시를 붙였다.
h|전시 설명은 짧게 고쳤어. 배고픈 관람객도 버틸 수 있게.
j|시연도 중간 저장했어. 사람이 많아도 기다리는 동안 구경할 수 있어.
o|별 사진 옆에는 흐린 날 사진도 뒀어. 실패한 관측도 내 하루였으니까.
n|각자의 준비물 사이에 둘만 알아보는 흔적이 조금씩 섞여 있었다.
n|함께 고른 색, 처음 맞춘 후렴, 두 사람이 웃다가 남긴 낙서.
p|그 자리에 다른 사람이 먼저 앉으면 어떻게 해?
n|장난처럼 묻자 돌아온 대답은 의외로 짧았다. 네 자리는 알아볼 거야.
b|행사 뒤에도 약속 많이 잡았네.
m|정리 시간도 같이 남겨 뒀어. 끝나면 각자 쉬어야지.
b|응. 배부할 종이는 내가 확인할게.
n|준연이 서류를 들고 내려갔다. 나는 남은 준비물을 제자리로 옮겼다.
w|오늘 전부 다 연습하지는 말자. 내일도 목 써야 하니까.
h|좋은 의견. 밥도 오늘 한 번은 더 먹어야 하니까.
p|끝난 뒤 같이 먹을 메뉴 미리 골라 둘까?
n|준비 이야기에서 음식 이야기로 넘어가는 데는 오래 걸리지 않았다.
n|우리는 학교 앞 가게의 메뉴를 떠올리며 각자 좋아하는 것을 하나씩 말했다.
n|오래 기다린 행사가 다가오고 있었다. 끝난 다음에도 함께하고 싶은 일이 남아 있다는 게 좋았다.
n|빈 객석에서 일어서며 나는 내일 찾아올 얼굴을 한 번 더 보았다.`},{title:"같은 무대의 다른 순서",location:"auditorium",text:`n|최종 리허설. 객석에는 아직 관객이 없고 준비하는 아이들만 앉아 있었다.
w|우리 곡 시작하고 다음에 댄스 맞지?
t|내 표에는 우리가 먼저인데. 음악도 지금 내 걸로 잡혀 있어.
n|스피커에서 짧은 도입이 나왔다가 멈췄다.
m|일단 정지. 아직 올라가지 말고 다 객석으로 와 줘.
p|각자 받은 큐시트부터 맞춰 보자.
s|내 가방에 어제 선생님 확인받은 게 있어. v4라고 적혀 있네.
n|객석에 배포된 종이에는 v3가 적혀 있었다. 두 버전의 공연 순서는 달랐다.
h|이쪽을 보고 움직이면 다음 사람이 계속 밀리겠네.
j|승인된 파일과 배포된 파일이 다른 건 확인됐어. 선택 순서는 따로 봐야 해.
b|파일 이름이 비슷해서 섞였을 수도 있어.
m|그럴 수 있는지 확인하자. 아직 이유까지 정하지는 말고.
teacher|배포 대장과 공용 버전 이력을 열어 보자. 개인 기기는 볼 필요 없다.
n|확인 화면에는 승인된 v4가 먼저 존재했고, 뒤의 배포 묶음에는 v3가 선택돼 있었다.
p|이 순서는 적어 두자. 나중에 왜 그랬는지 같이 물어볼 수 있게.
t|좋아. 지금은 맞는 순서로 한 번만 끝내자. 준비한 게 아깝잖아.
n|나는 무대 옆의 물병을 가져왔다. 밤늦게 준비한 것을 펼치지도 못할 뻔한 표정이 눈에 들어왔다.
p|물 먼저 마셔. 그다음 시작하면 돼.
w|응. 목도 좀 말랐어. 네가 여기 있는 건 잘 보이네.
s|승인본 복사한 뒤에는 직접 읽으면서 확인하자.
m|내일 행사 전에 선생님과 기록 정리하는 시간도 잡을게.
n|우리는 같은 순서를 소리 내어 확인했다. 이번에는 누구도 다른 쪽을 보며 기다리지 않았다.
n|음악이 다시 시작됐다. 세계의 첫 음 뒤로 서율의 건반이 이어졌다.
t|다음 우리 차례. 이번엔 딱 맞네.
n|리허설이 끝나자 객석에서 작은 박수가 났다. 다친 사람도, 준비를 접어야 하는 사람도 없었다.
n|배포본과 승인본은 함께 보관했다. 오늘을 엉킨 순서로 끝내지는 않았다.`},{title:"전야의 세 번째 약속",location:"hallway",text:`n|D-1. 학교 계단에 앉자 그제야 하루가 길었다는 생각이 들었다.
n|서율이 내 옆 계단에 앉아 가방에서 간식 봉투를 꺼냈다. 위쪽에는 세계와 태우가 무대 신발을 갈아 신고 있었다.
p|언제 샀어? 준비하느라 계속 바빴잖아.
n|오늘 하루가 전부 준비 시간이면 좀 억울하잖아. 그런 대답과 함께 봉투가 열렸다.
s|그림 볼래? 내일 객석에서 사람 알아보는 연습 중이야.
p|이건 내 소매네. 얼굴을 그리면 더 빠르지 않아?
s|그건 자꾸 오래 보게 돼서 시간이 걸려.
w|서율이 그렇게 말하면 내가 괜히 기타 들고 도망가야 할 것 같은데.
s|아니야. 그냥 그림 이야기야.
n|세계가 웃으며 먼저 계단을 내려갔다. 서율은 그림을 접어 가방에 넣었다.
m|오늘 끝. 내일 아침 기록 확인하는 시간은 다들 알지?
j|응. 필요한 건 공용 자료만 준비했어. 다른 파일은 안 섞었고.
h|나도 원본 챙겼어. 오늘은 더 추측 안 하려고.
t|나도. 내일 무대랑 끝난 뒤 약속 생각만 할래.
n|친구들이 헤어진 뒤 잠시 바람 소리만 남았다.
p|내일 시작 전에 한 번 만나고, 끝난 뒤에 또 만나자.
n|태우가 손가락으로 두 번을 세었다. 공연 전의 긴장과 공연 뒤의 허기는 서로 다른 약속으로 챙겨야 한다며 웃었다.
p|세 번째는 네가 골라. 다음 주라도 괜찮고.
n|서율은 세 번째라는 숫자 옆에 작은 의자를 그렸다. 어디에 놓을지는 내일 정하자며 종이를 다시 접었다.
o|내일 흐리면 도서관으로 가면 돼. 하늘 때문에 모든 걸 취소할 필요 없으니까.
p|그 말 오늘은 다른 데도 쓸 수 있을 것 같네.
n@gate|계단을 내려와 교문에서 인사했다. 태훈이 손을 흔들고 돌아섰고 가로등이 하나씩 켜졌다.
b|내일 끝나고 할 말이 있어. 오늘은 아직 잘 안 나와서.
p|알겠어. 내일 필요한 얘기는 같이 하자.
n|준연이 먼저 걸어간 뒤 나는 원본 서류가 든 봉투를 가방 안쪽에 넣었다.
n|나는 휴대전화에서 내일의 시간을 다시 확인했다. 이름 옆에 직접 붙인 작은 표시가 보였다. 기다리는 것만으로도 마음이 조금 따뜻해졌다.`}],[{title:"오늘을 취소하지 않기 위해",location:"auditorium",text:`n|페어 당일, 아침 8시 20분. 세계는 현을 조율하고 있었고 태우는 관객 없는 무대에서 신발 끈을 다시 묶었다.
n|그때 담임 선생님이 강당으로 들어왔다. 아직 열리지 않은 커튼 앞에서 모두의 이름을 불렀다.
teacher|우리 반 공연을 중지해 달라는 요청을 어젯밤에 받았다. 승인본과 다른 큐시트가 돌아다닌다는 내용이 있어.
m|그건 어제 발견해서 바로잡았어요. 승인본으로 다시 리허설까지 했고요.
teacher|그 부분은 확인했어. 그런데 ‘몇몇 학생이 개인적인 약속 때문에 준비를 반복해서 빠뜨렸고, 자동안내 오류를 감췄다’는 주장도 있구나.
n|세계의 손이 기타 줄 위에서 멈췄다. 태우는 묶던 끈을 끝까지 당기지 않았다.
t|우리 기다렸는데요. 받은 시간에, 받은 장소에서.
j|제 프로그램이 공지를 바꾼 적은 없어요. 선생님이 같이 확인하셨잖아요.
teacher|맞아. 그래서 요청 내용 그대로 결정하지 않으려는 거야. 잘못된 주장을 남겨 둔 채 공연만 강행하는 것도 안 되고.
p|받은 안내부터 달랐어요. 그때 모아 둔 종이가 있는데 같이 봐 주실 수 있어요?
n|나는 가방에서 봉투를 꺼냈다. 민혁이 승인본을 찾는 동안 주한은 노트북을 덮었다.
b|그런데 시간만 다시 맞춘다고 끝나는 건 아니잖아. 왜 자꾸 안 맞았는지도 봐야지.
w|그러니까 우리 얘기도 들어 달라는 거야. 기다린 사람이 준비를 안 했다는 말이 되면 곤란하잖아.
h|지금 여기서 기억나는 순서대로 말하면 또 뒤섞일 것 같아. 종이를 펼칠 자리부터 찾자.
p|교실에 두고 온 것도 있어. 우리가 아는 부분부터 맞춰 보자.
n|준연도 봉투를 들었다. 어제 함께 보자고 했던 서류가 모서리 밖으로 나와 있었다.
n|전시장 개방까지는 아직 시간이 있었다. 바로 무대로 돌아가자는 말과 이대로 둘 수 없다는 말이 겹쳤다.
m|선생님, 우리 1반 교실에서 같이 얘기해도 될까요? 누가 어디서 기다렸는지 각자 말하게요.
teacher|응. 공연 시간은 내가 행사 담당 선생님과 조정할게. 안전 점검은 그대로 하고, 얘기는 당사자들끼리 비공개로 하자.
n@classroom|9시 10분, 우리는 1학년 1반으로 돌아왔다. 창가에는 첫날 적은 담당표가 아직 붙어 있었다.
s|지난번엔 내가 가진 종이만 보여 주고 끝났잖아. 나머지 일이랑 이어서 보면 다를 수도 있어.
o|누가 이상한 사람인지 고르는 시간 말고, 실제 있었던 일을 맞추는 시간이면 좋겠어.
j|자료만 보내면 제목 보고 프로그램이 한 일이라고 생각할 수도 있어. 내가 옆에서 어떤 기능이 있는지 설명할게.
t|나도. 기다린 애들이 한마디도 못 하고 준비 안 한 사람이 되는 건 싫어.
p|첫 쪽지부터 모아 둔 게 있어. 그때는 다음에 안 엇갈리려고 적어 둔 거였는데.
n|나는 세계와 나의 쪽지를 꺼냈다. 다른 아이들도 예약 확인서와 공지 원문, 구겨진 큐시트를 책상 위에 놓았다.
w|맨 처음엔 종이 하나 잘못 나온 줄 알았어.
t|두 번째엔 시간이 또 바뀌었고.
j|세 번째엔 장소가 세 개였지. 그건 자동으로 바뀐 게 아니었어.
s|네 번째엔 최종본을 받은 뒤에도 예전 순서가 나왔고.
n|각자 따로 겪었다고 생각한 날들이 가운데서 이어졌다. 누군가의 나쁜 성격 때문이라고 부를 수 없는 구체적인 차이들이었다.
b|그래도 그게 다 한 가지 이유라고 정한 건 아니잖아.
p|맞아. 그래서 네 말도 듣고 원본도 보려는 거야. 우리도 틀리게 기억한 게 있으면 고칠게.
teacher|지금부터 하는 건 공동 프로젝트의 사실 확인이야. 학교 징계나 누군가의 자격을 학생들끼리 결정하는 자리는 아니고.
teacher|말을 끊지 않기. 모르면 모른다고 하기. 자료가 보여 주는 것 이상으로 단정하지 않기. 이 세 가지는 내가 지킬 수 있게 돕겠다.
m|그럼 한 사람이 있었던 일을 말하면, 다른 사람이 가진 기록과 맞춰 보자. 안 맞는 부분은 바로 묻고.
w|우리끼리 학급재판이라도 하는 느낌이네.
h|누가 더 큰 소리 내는지가 아니라, 어떤 설명이 맞는지 보는 거라면 괜찮아.
teacher|그 이름을 붙이더라도 사람을 벌주는 자리는 아니야. 서로 말할 기회를 갖고 사실을 확인하는 건 동의하지?
w|응. 나도 내 말로 바로잡고 싶어. 내 쪽지부터 봐 줘.
b|……나도 여기서 말할게. 내가 맡았던 서류도 가져왔어.
n|선생님이 의자를 원으로 놓게 했다. 긴 책상 위에 서로 다른 날의 종이들이 나란히 놓였다.
p|오늘을 취소하지 않으려고 여기 온 거지, 누군가의 학교생활을 없애려고 온 게 아니야.
m|첫 질문부터 하자. 우리는 정말 같은 시간을 받아 놓고 제멋대로 행동했던 걸까?
n|세계가 두 쪽지를 손끝으로 나란히 맞췄다. 내게 처음 들려주겠다던 노래는 아직 끝나지 않았다.
n|우리가 준비한 무대와 그 뒤의 약속으로 돌아가기 위해, 처음 어긋난 날부터 천천히 말하기로 했다.`},{title:"다시 올라간 커튼",location:"auditorium",text:`n|교실에서 강당으로 돌아오자 무대 조명은 아침보다 조금 더 밝아져 있었다.
n|방금 확인한 일은 사라지지 않았다. 그래도 오늘을 기다린 사람들의 준비 역시 사라지지 않았다.
m|승인본으로 진행 순서 다시 읽을게. 밴드 다음 댄스, 전시는 안내와 함께 열기.
j|시연 기계는 켜 뒀어. 안내 화면은 교사 확인받은 문장으로 고쳤고.
h|실험 설명도 자리 잡았어. 안전 확인 끝났고.
o|사진 옆 제목도 전부 맞췄어. 구름 있는 사진이 먼저야.
n|나는 잘못 배포됐던 종이를 치우고 확인된 안내만 같은 위치에 놓았다.
p|이제 우리 차례를 놓칠 일은 없겠네.
t|응. 그러니까 너도 객석 자리 놓치지 마.
w|긴장 풀렸다고 가사 잊으면 안 되는데. 나 첫 음만 좀 들어 줘.
s|내가 같이 들어갈게. 네가 숨 쉬면 그다음부터.
n|서율이 손끝을 건반 위에 올렸다. 세계가 객석을 한 번 찾았다.
n|음악이 시작되자 아이들은 연습 때 맞춘 박자로 움직였다.
n|나는 미리 고른 자리에서 손을 들었다. 아주 작은 신호였지만 무대 위에서 웃음이 돌아왔다.
p|보였구나.
n|태우는 마지막 포즈를 끝내고 숨을 몰아쉬었다. 박수가 나자 그제야 어깨가 내려갔다.
t|이번엔 마지막 박자 안 틀렸어. 네 신호도 봤고.
w|나도 가사 다 기억했다. 오늘 제일 뿌듯한 일로 적어 줘.
h|기록할 게 갑자기 평범해져서 좋네.
j|시연도 한 번에 됐어. 농담 나오는 데서 관객이 웃었어.
m|다들 수고했어. 물 마시고, 교대로 쉬자.
n|관객들이 전시 쪽으로 이동했다. 강당 뒤편이 잠깐 조용해졌다.
p|아까 하기로 한 이야기 아직 남아 있지?
n|현솔이 가방을 들고 먼저 복도로 나갔다. 이제 실험대보다 매점이 급하다며 태우를 불렀다. 준비표에 없던 우리의 시간이 시작됐다.
n|무대를 지켜 낸 기쁨과 어려운 대화의 무게가 함께 남았다. 어느 한쪽이 다른 쪽을 없애 주지는 않았다.
n@hallway|나는 가방을 들어 복도로 나섰다. 친구들과 약속한 방향으로 걷는 동안에도 오늘의 이야기는 끝나지 않았다.`},{title:"축제가 끝나도 만날 이유",location:"garden",text:`n|축제의 마지막 손님이 나간 뒤, 학교에는 포스터 떼는 소리와 의자 끄는 소리만 남았다.
m|여기까지 정리하면 끝. 남은 건 내일 선생님이랑 확인하기로 했어.
h|그러면 지금 배고프다고 말해도 되는 시간이지?
t|나는 이미 말하고 있었어. 두 번 정도.
w|셋. 무대 내려오자마자 한 번 더 했어.
n|우리는 서로의 간식 봉투를 들여다보며 웃었다. 누가 첫 조각을 고를지도 오래 이야기했다.
j|만든 게임 엔딩은 아직 너랑 못 봤다. 그건 나중에 따로 하자.
s|그림도 하나 남았어. 아직 전시 안 한 거.
o|하늘은 흐리지만 산책은 괜찮겠네. 오늘 별 얘기만 하려던 건 아니니까.
p|축제 끝나면 갑자기 할 일 없어질 줄 알았는데.
m|다음 약속까지 끝난 건 아니잖아.
n|민혁이 완장을 벗었다. 옷소매에 접힌 자국이 잠깐 남았다.
n|친구들과의 인사가 하나씩 끝나자 이제는 내가 고른 시간이 남았다.
p|오늘 어땠어? 공연 말고, 다들.
j|끝나면 바로 잠들 줄 알았는데 계속 그 장면이 생각나. 내가 만든 농담에서 관객이 웃던 거.
s|나는 전시 보던 사람이 그림 앞에서 친구를 불렀을 때. 혼자 보고 안 가고 같이 보려고 부르는 게 좋았어.
h|나는 설명 한 번도 안 듣던 애가 두 번째엔 먼저 물어본 거. 같은 질문이어도 반갑더라.
n|친구마다 꺼내는 장면이 달랐다. 같은 하루를 보냈는데도 서로에게 더 들을 이야기가 남아 있었다.
w|다음에는 준비물 없이 만나도 되겠다. 기타는 내가 들고 올 수도 있지만.
t|그건 준비물인데. 나는 운동화만 신고 올게.
h|그것도 준비물이네. 다들 그냥 자기 모습으로 온다고 하자.
n|마지막 농담 뒤로 친구들의 발소리가 멀어졌다.
p|다음 달에도 이렇게 기억나는 일이 하나씩 늘면 좋겠다.
n|작은 약속에는 큰 박수가 없었다. 그래도 나는 다음 시간을 놓치고 싶지 않았다.
n|가방 속 기록은 그대로 남겨 두었다. 즐거웠던 장면도, 어긋났던 순간도 내 마음대로 지우지 않았다.
n|앞으로의 몇 주는 오늘 내린 선택을 실제 하루로 이어 가는 시간이었다.
n|나는 교문을 나서며 내일의 약속을 한 번 더 확인했다. 축제가 끝났다는 말보다, 또 만나자는 말이 더 오래 귀에 남았다.`}]],us={world:[["내가 치는 코드가 궁금하면 언제든 와. 물어보러 온 척 안 해도 되고.","네가 웃는 부분은 잘 알겠어. 다음 노래에도 그런 데 하나 넣어 볼까.","한 곡 더 듣겠다는 말, 내일도 유효한 거지?"],["오늘 마이크 높이 같이 맞춰 줘. 그 높이에서 네 얼굴도 보고 싶어.","나 노래하는 거 봤어? 끝난 뒤 표정 물어볼 사람으로 널 정해 뒀거든.","내일은 일 없어도 밴드실 와. 그냥 온다고 해도 반가울 것 같아."],["쪽지에 그린 거 기타 맞아. 네가 웃을 줄 알고 좀 엉망으로 그렸어.","너도 다른 데서 기다렸구나. 그럼 오늘은 내가 네 몫까지 한 곡 더 들려줄게.","손 하나 남겨 놔. 소매 잡으려다가 네가 괜찮으면 손이 더 좋을 것 같아서."],["제일 듣고 싶었던 사람이 와 줘서 좋아요. 어때, 이 말 내일도 해도 돼?","준비한 노래는 그대로야. 네가 기다린 시간까지 망치고 싶지 않아.","공연 뒤 밴드실. 공개 앙코르 끝나도 너한테는 한 곡 더야."],["무대가 늦어져도 너한테 들려줄 소절은 안 없어져.","객석에서 네 표정 보였어. 첫날처럼 안 도망갔네.","노래 끝나도 안 가면 안 돼? 오늘은 내가 다음 얘기부터 하고 싶어."]],hyunsol:[["네가 붙인 색 이름 아직 메모에 있어. 나중에 웃으려고.","실험 끝나면 밖에서 음료 마시자. 네가 고르는 맛도 좀 보게.","다음엔 나도 네 쪽으로 갈게. 항상 찾아오는 쪽만 하면 힘들잖아."],["네가 좋아하는 반찬은 알겠어. 오늘은 나도 같은 거 받아 왔고.","기다리면서 혼자 탓하지 않아도 되네. 그걸 확인한 건 좋았어.","계산기 없어도 와. 질문 대신 농담 들고 와도 상관없고."],["오늘 차는 덜 달게. 네가 지난번에 말한 거 기억했어.","나는 정리하면서 기다렸어. 다시 만나면 할 말은 남겨 뒀고.","농도는 자신 없고 네 취향은 외웠어. 틀렸으면 지금 말해 줘."],["설명문 아래는 메뉴야. 그 밑은 너랑 만날 시간. 외웠으면 접어.","물 고마워. 지금은 맞는 순서로 다시 해 보면 되겠지.","내일 다섯 시. 이건 오차 범위 없어. 배고프니까 늦지 마."],["음료 뚜껑 열어 뒀어. 긴장해서 안 돌아갈까 봐.","실험보다 오래 준비한 약속이 남았네. 정리 끝나면 나랑 가.","계산기 돌려받으면 핑계가 없어질 줄 알았는데. 그냥 만나자고 하면 되네."]],taewoo:[["너랑 같이 틀리니까 덜 창피해. 다음엔 내가 먼저 실수해 줄까?","방금 여덟 박자 맞았어. 하이파이브는 내가 먼저 할게.","다음 연습도 와. 네가 못 춰도 같이 웃는 건 잘하잖아."],["내가 시범 보이면 발 말고 어깨 봐. 네가 보면 조금 긴장되긴 하지만.","같이 확인하러 가 줘서 고마워. 내가 시간 잘못 본 줄 알았거든.","시간 비워 두려고? 그러면 나도 그날은 네 옆에 서서 알려 줄게."],["오늘 준비 끝나고 잠깐 걸을래? 춤 없는 약속도 한 번 해 보자.","기다리면서 동작 하나 만들었어. 네가 와야 마지막 손맞춤이 되는 거.","여기 손. 이번에는 박자 때문 말고 그냥 같이 가려고."],["객석에서 이 손동작 해 줘. 네가 어디 있는지 바로 찾게.","물 마시고 다시 할게. 네가 보고 있다는 건 바뀐 순서에도 안 없어졌네.","끝나면 그 자리에서 기다려. 내가 내려와서 표시 같이 떼자."],["의자는 안 미뤄지잖아. 앉아 봐. 끝나면 여기부터 볼 거야.","신호 두 번 했지? 둘 다 봤어. 웃다가 포즈 틀릴 뻔했잖아.","표시 네 손등에 붙여 줄게. 다음에도 여기. 무대가 없어도."]],taehun:[["네가 고른 문장에 책갈피 꽂았어. 다음에 다시 읽어 보려고.","하늘 보는 속도는 안 맞춰도 되네. 같은 자리에 있으면 되니까.","다음엔 네가 좋아하는 책 가져와. 내가 골라 주는 것만 읽지 말고."],["흐리면 도서관으로 가자. 관측만 취소되는 거니까.","기다리며 본 구름이 바뀌었어. 지금 너랑 볼 모양은 또 있네.","좋은 문장 찾으면 보여 줘. 다음 만남에 들고 올 이야기로 남겨 두자."],["오늘 바로 집에 가냐고 물은 건 산책하고 싶어서였어. 너랑.","서로 다른 데서 하늘 봤네. 그래도 이제는 같은 쪽을 보자.","오늘은 네가 본 쪽이 더 마음에 들어. 구름이 벤치처럼 보인다는 말."],["맑으면 운동장, 흐리면 도서관. 너 만나는 건 그대로.","공연 순서는 고치면 되겠지. 내일 함께 걷자는 약속도 그대로 두고.","비가 오면 우산 쓰면 돼. 질문이 더 생겨도 결국 만나게 해 둘 거야."],["오후 산책 시간은 그대로야. 오늘은 날씨 말고 네 상태부터 물을게.","사진 전시 끝났어. 이제 내가 보고 싶은 풍경 쪽으로 같이 가자.","오늘 쓸 건 별 말고 네 얘기인데. 다음 문장은 네가 읽을 자리 남겨 둘게."]],seoyul:[["네가 고른 색 여기 남겼어. 다른 사람은 못 찾아도 우리는 알지.","물감은 말랐는데 더 있어도 돼. 종이 때문만은 아니고.","다음에 오면 네가 앉는 쪽도 그려 둘게. 빈 의자만 놓지 말고."],["반주 한 음만 맡아 줘. 틀려도 내가 같이 멈추면 되니까.","우리 같이 틀린 순간 그려 뒀어. 완벽하게 한 데보다 더 기억나서.","일 없어도 와. 오늘 그린 걸 처음 보여 줄 사람은 필요하니까."],["쪽지 그림은 네 가방이야. 바로 알아볼 줄 알았는데.","빈 의자에 네 옆모습 채우는 중이야. 잠깐만 그쪽 보고 있어.","이제 그림이 덜 휑하다. 이 작은 낙서는 네가 가져. 큰 건 내가 갖고."],["네 소매를 그리면 객석에서 찾기 쉬울 것 같아서. 얼굴은 오래 보게 되고.","맞는 순서로 다시 하면 돼. 아까 네가 물 가져다준 건 고마웠어.","시작 전에 한 번, 끝나고 한 번. 세 번째 만남은 내가 만들어 볼게."],["그림 앞 두 자리 중 하나는 네 거야. 끝나고 다시 와.","리본 보였어. 사람 많아도 네 가방은 금방 찾겠더라.","비어 있는 데는 못 그린 게 아니야. 같이 그릴 자리를 남긴 거야."]],juhan:[["네 농담은 연습 화면에 남겼어. 볼 때마다 프로그램보다 내가 먼저 웃어서.","내가 만든 걸 같이 눌러 줄 사람이 생긴 게 좀 좋네.","다음에는 테스트 말고 게임하자. 잘해도 못해도 같이 시작하는 거."],["한 번 끝까지 눌러 줘. 네가 멈추는 곳을 보면 내가 못 본 게 보여.","오늘은 화면 정리 끝나면 직접 얘기하자. 프로그램은 잠깐 끄고.","내일도 올래? 오류가 없어도 같이 할 건 있으니까."],["두 번째 조작기 가져왔어. 공동 준비 끝나면 진짜로 한 판 하자.","표시 이름과 실제 작성자는 달라. 그건 같이 확인하고, 우리 약속은 그다음에 이어 가자.","방금 너도 같은 생각 했지? 똑같은 데서 떨어지니까 이상하게 더 웃긴다."],["시연 끝나면 창 닫을게. 그다음 약속은 내가 직접 물어보려고.","일단 승인된 화면으로 맞췄어. 오늘 네가 기다려 준 시간도 잊지 않았고.","말 빨랐지? 중요한 건 다섯 시에 나랑 같이 가자는 거였어."],["얼터에고 창은 닫았어. 같이 가자. 내가 설명할 건 내가 말할게.","관객이 우리 농담에서 웃었어. 그 순간 너도 봤으면 했는데 봤지?","화면은 잠깐 가릴게. 내가 물어볼게. 내일도 나랑 같이 할래?"]],minhyuk:[["상자는 반으로 나누자. 같이 하자고 해 놓고 내가 다 들 뻔했네.","지금은 반장 말고 같이 쉬는 사람으로 불러 줘. 음료 남아 있고.","다음에도 네가 쉬자고 먼저 말해 줘. 나도 그 말 듣는 연습하려고."],["체크리스트 끝나면 매점. 오늘은 같이 먹을 사람으로 남고 싶어.","일정 확인은 같이 하는 게 낫네. 혼자 정리하려다 놓친 게 있었어.","약속 칸에는 준비물 말고 네 이름을 적어도 되겠네."],["같이 먹으려고 기다렸어. 업무표는 가방에 넣었으니까 천천히 먹어.","먼저 같은 안내를 갖고 있는지 확인하자. 네가 또 혼자 기다리지 않게.","좋아하는 반찬이라서 주는 거야. 별로인 걸 나누자는 게 아니고."],["공동 업무는 여기까지. 그 아래는 반장이 아니라 내가 적는 거다.","혼자 다 다시 하려고 했는데 네가 옆에 있으니 나눠 할 수 있겠다.","내일 끝나면 완장 벗고 갈게. 우리 약속 자리부터 찾을 거고."],["일정 끝나고는 완장 벗겠다는 말, 그대로야. 조금만 기다려 줘.","이제 공동 업무표의 마지막 칸을 지웠어. 아래 적은 네 이름은 남아 있고.","이번엔 계획 없어도 괜찮을 것 같다. 첫 행선지는 네가 골라 줘."]],junyeon:[["네가 여기까지 찾아올 줄 몰랐어. 묶음 하나만 같이 들어 줄래?","복숭아 맛 좋아해. 다음에 음료 고를 때 그거면 돼.","같이 있을 때는 좋은데 다음 약속 말하려면 자꾸 망설여져."],["달력에 이름이 둘씩 적혀 있네. 나랑 정리할 시간도 남길 수 있어?","나중에 끝나면 잠깐 같이 걸을래? 오늘은 묻기 전에 포기하지 않으려고.","목요일. 적어 뒀어. 네 다른 약속이 없어져야 내가 생기는 건 아니겠지."],["음료 두 개 샀어. 너 오기로 했는데도 괜히 한 번 더 확인하고 싶어서.","네가 다른 데서 기다린 동안 나는 여기 있었어. 지금은 같이 앉을 수 있네.","함께 있는 건 좋아. 다음에도 나부터 찾을 건지 자꾸 묻고 싶어지는 게 문제지만."],["내일 끝나면 다들 자기 약속대로 가겠지. 나도 뭔가 정해야 하는데.","지금은 서류만 놓고 올게. 간식은 조금만 남겨 줘.","행사 끝나고 할 말 있어. 오늘은 아직 꺼낼 자신이 없어서."],["나란히 앉으려다 내가 의자를 뗐네. 지금은 어느 자리가 맞는지 모르겠어.","내가 고쳐야 하는 안내부터 확인할게. 네가 곁에 있는지와 상관없이 해야 하는 일이니까.","지금 쉬는 시간도 우리가 새로 정한 거지. 그게 없던 잘못을 만드는 건 아니고."]]};function ds(e,t,s){const r=e.focus;if(!r||t===0)return[];if(r==="junyeon"&&e.verdict==="exclude")return[{speaker:"narrator",text:"준연과 따로 만나던 약속은 끝났다. 아직 생각나는 시간이 있어도 다시 찾아가야 한다는 뜻은 아니었다."},{speaker:"player",text:"오늘 남은 시간은 내가 다시 고르자."},{speaker:"narrator",text:"친구들이 기다리는 쪽으로 발걸음을 옮겼다. 다른 누군가를 빈자리에 서둘러 세우지는 않았다."}];if(t===2&&s===0&&r!=="junyeon"){const h=an[r];return T(h.text,e).map((p,j)=>({...p,location:h.location,...p.speaker===r?{expression:j===7?"serious":j>=11?"shy":"neutral"}:{}}))}const a={world:["그 첫 관객 자리, 다른 사람한테 예약 넘기지 마.","나 지금 웃는 얼굴 아닌데. 네가 기다린 걸 가볍게 생각하지는 않아.","한 곡 끝났으니까 이번엔 내 얘기도 들어. 오늘 네가 보고 싶었어."],hyunsol:["안 바쁘면 옆에 앉아 있어도 돼? 오늘은 질문이 없어서.","나중에 계산 잘못했다고 웃으려면, 일단 오늘은 제대로 끝내야겠네.","차는 네가 골라. 다음에 내가 좋아할 만한 걸 맞혀 볼 차례야."],taewoo:["내 어깨가 네 발보다 말 잘 듣는지는 해 봐야 아는데.","혼자 연습하는 마지막 동작은 이제 없게 해 줄게.","오늘은 내가 먼저 손 내밀어도 돼?"],taehun:["그럼 나는 네가 안 고를 것 같은 문장을 골라 올게.","같은 쪽. 알겠어. 지금 네가 보고 있는 건 저기지?","다음 페이지 제목은 아직 쓰지 마. 나도 한 줄 보태게."],seoyul:["그 자리 다음에 또 앉으면 그림보다 나부터 봐 줘.","그림은 나중에 봐도 돼. 지금은 네 말부터 들을게.","작은 그림이라고 쉽게 주면 안 되는데. 나 오래 갖고 있을 거야."],juhan:["오늘은 테스트 참가자 말고 네 친구로 왔어. 더 높은 난이도인가?","프로그램이 아니라 네가 만든 거니까, 네 설명을 먼저 듣고 싶어.","다음 판 약속, 나도 하고 싶었어. 네가 먼저 물어서 조금 아쉽네."],minhyuk:["그럼 오늘 첫 일정은 쉬기. 네가 취소 못 하는 걸로.","이걸 네가 혼자 다 바로잡을 필요는 없어. 옆자리 비워 둬.","오늘은 완장 말고 네 얼굴 보고 대답할게. 나도 같이 가고 싶어."],junyeon:["빈 시간을 만드는 건 내 몫이야. 너도 원하는 시간을 말해 줘.","지금 무슨 생각하는지 네가 직접 말해 줬으면 좋겠어.","목요일엔 네 얘기 듣고, 금요일엔 먼저 잡은 약속에 갈 거야. 둘 다 약속이니까."]},c=["친구들이 준비물을 챙기는 동안 이름을 불렀다. 대답이 돌아오는 쪽으로 나도 한 걸음 가까이 갔다.","마지막 준비물을 옮기며 잠깐 눈이 마주쳤다. 다른 친구들 틈에서도 그 표정은 따로 알아볼 수 있었다.",t===2||t===4?"정원을 나와 학교 뒤 산책로로 걸으며 목소리를 조금 낮췄다. 바로 옆에 있는 사람에게만 묻고 싶은 말이 있었다.":"교실을 나와 복도를 걸으며 목소리를 조금 낮췄다. 바로 옆에 있는 사람에게만 묻고 싶은 말이 있었다."],l=r!=="junyeon"?Qr[r][`${t}:${s}`]:void 0,d=[{speaker:"narrator",text:s===2?c[s]:{world:"세계가 내 앞에서 휴대전화를 뒤집어 놓았다.",hyunsol:"현솔은 정리하던 손을 멈추고 내 쪽으로 몸을 돌렸다.",taewoo:"태우가 가방끈을 고쳐 메며 내 걸음에 맞췄다.",taehun:"태훈이 책 사이에 손가락을 끼우고 고개를 들었다.",seoyul:"서율의 시선이 들고 있던 종이에서 내 얼굴로 올라왔다.",juhan:"주한은 하려던 말을 한 번 삼킨 뒤 내 이름부터 불렀다.",minhyuk:"민혁이 친구들에게 짧게 인사하고 내 옆으로 왔다.",junyeon:"준연이 남은 종이를 가지런히 놓고 내 쪽을 보았다."}[r],...s===2?{location:t===2||t===4?"walk":"hallway"}:{}},{speaker:r,text:(l==null?void 0:l[0])??us[r][t][s]},{speaker:"player",text:(l==null?void 0:l[1])??a[r][s]}];if(t===3&&s===0&&r!=="junyeon"){const h={world:"세계는 내가 들어 봤던 무제곡을 아주 짧게 흥얼거렸다. 마지막 소절만 나를 보며 소리 없이 입 모양으로 불렀다.",hyunsol:"현솔의 가방에는 창가에서 보았던 결정 표본 사진이 달려 있었다. 사진 구석에 내가 붙였던 색 이름도 작게 남아 있었다.",taewoo:"태우가 뒤돌아 같은 손을 내밀었다. 이번에는 설명을 기다리지 않고 잡았다. 거울 없이도 마지막 발의 방향이 맞았다.",taehun:"태훈의 성도 모서리에 작은 비행기 낙서가 남아 있었다. 나는 그 옆에 금성이 아니라고 적었고, 태훈은 웃으며 지우개를 숨겼다.",seoyul:"서율은 나를 그린 두 장 중 한 장을 조심히 내밀었다. 뒷면에는 완성 날짜 대신 둘이 미술실에 남아 있던 시간이 쓰여 있었다.",juhan:"주한이 보여 준 새 시작 화면에는 벽 구석의 하트가 그대로 있었다. 숨긴 건데 네가 못 찾으면 의미 없잖아, 하고 먼저 웃었다.",minhyuk:"민혁은 말린 우산을 돌려주면서 손잡이 아래를 한 번 짚었다. 빗소리가 없는데도 그날 둘이 맞춰 걷던 속도가 떠올랐다."};e.flags.includes(`read:hangout-${r}-1-v1`)&&d.push({speaker:"narrator",text:h[r]})}if(e.bonds[r].trust<25&&t>=2&&s===1){const h={world:"좋다고 해 주는 건 기쁜데, 오늘은 네가 정말 본 것부터 말해 줘. 기분 맞추는 대답이면 나는 또 모르니까.",hyunsol:"괜찮다고 먼저 결론 내리지는 마. 아직 내가 말 안 한 부분도 있어.",taewoo:"오늘은 웃기려고 넘기지 말고 잠깐만 진지하게 들어 줘. 나도 그게 좀 어렵거든.",taehun:"내 문장 끝에 네가 먼저 뜻을 붙이면, 내가 하고 싶던 말은 어디에 두나 싶어.",seoyul:"지금은 고쳐 주기보다 그냥 한 번 봐 줘. 설명은 내가 할게.",juhan:"방금 말 지우고 다시 해도 돼? 네 대답을 예상하다가 내가 말하려던 걸 놓쳤어.",minhyuk:"네가 다 해 준다는 말보다 어디까지 함께할 수 있는지 알고 싶어. 나도 그만큼 말할게.",junyeon:"다른 애들한테 가기 전에 나한테도 한 번은 물어봐 줬으면 했어."};d.push({speaker:r,text:h[r],expression:"serious"})}else e.bonds[r].affection>=55&&t>=2&&s===2&&d.push({speaker:"narrator",text:`갈림길 앞에서 ${Ee[r]}와 눈이 마주쳤다. 누구도 먼저 작별 인사를 꺼내지 않아, 조금 더 느린 걸음으로 나란히 걸었다.`});return d}const ps={world:[["“앙코르 뒤에는 네가 먼저 하고 싶은 얘기부터 듣자”고 한다.",`p|노래는 끝까지 들을게. 그 뒤에는 네가 하려던 말부터.
w|그러면 나 지금부터 노래보다 그 뒤를 더 연습할 것 같은데.
n|세계가 기타 케이스 손잡이를 두 번 두드렸다.
w|그래도 와. 내가 말 잊으면 조금만 기다려 줘.`,3,4,"eve:world:after-song"],["“오늘 보고 싶었다”를 적은 쪽지를 기타 케이스 주머니에 넣어 준다.",`p|넣어도 돼? 내일 긴장할 때 읽으라고.
w|이미 제목 들었는데 내일까지 어떻게 안 읽어.
n|세계는 내가 건넨 쪽지를 바로 펴고는 다시 반듯하게 접었다.
w|내일 또 읽으면 되겠다. 오늘 몫도 좋네.`,4,1,"eve:world:note"],["긴장하지 말고 평소 연습처럼 하면 된다고 말한다.",`w|평소에는 네가 내 노래 기다린다고 그렇게 말 안 하잖아.
p|편하게 해 주려고 했는데.
w|응. 근데 내일은 조금 긴장할래. 내가 기다린 날이라서.`,1,-1,"eve:world:ordinary"]],hyunsol:[["현솔이 고를 차는 처음 마시는 맛이어도 같이 마셔 보겠다고 한다.",`h|끝까지 마시는 시험은 아니야. 맛없으면 네 걸로 바꿔.
p|그럼 모르는 맛 하나씩 골라서 바꿔 마실까?
h|그건 좋아. 서로 안 맞으면 한 잔씩 남기는 것도 가능하고.`,2,4,"eve:hyunsol:tea"],["쪽지에 만날 시간 대신 현솔이 웃던 얼굴을 작게 그린다.",`p|시간은 이미 외웠으니까. 이건 잊기 아까워서.
h|눈이 한쪽만 있는데 이게 나야?
p|옆모습이야. 실험 성공하고 너 이렇게 웃었잖아.
h|내일은 정면도 보여 줄게. 다시 그릴 거면.`,4,1,"eve:hyunsol:note"],["현솔의 설명은 완벽할 테니 걱정할 게 없겠다고 한다.",`h|나도 앞에서 말하면 단위 한 번씩 빼먹어.
p|너라면 괜찮을 것 같아서.
h|괜찮게 끝내고는 싶지. 그래도 처음부터 걱정 없는 사람으로 만들어 놓지는 마.`,1,-2,"eve:hyunsol:perfect"]],taewoo:[["내가 먼저 손을 내밀고, 오늘은 카운트 없이 잠깐 잡는다.",`n|태우가 내 손바닥을 한 번 보고 자기 손을 올렸다.
t|오늘은 어디로 돌아야 해?
p|안 돌아도 돼. 그냥 같이 조금 걷자.
t|이거면 나도 틀릴 일 없겠다. 네가 먼저 놓지만 마.`,4,2,"eve:taewoo:hand"],["“내일 물 마실 때 읽어”라며 물병 옆에 둘 응원 쪽지를 건넨다.",`p|봉투는 없어. 물 마실 때 한 번 보고 숨 고르라고.
t|물병보다 이거 먼저 챙겨 버리면 어떡해.
n|태우는 쪽지를 접어 물병 주머니에 함께 넣었다.
t|둘 다 챙겼어. 내일 너도 와. 쪽지한테만 잘 보이려고 춤추는 건 싫으니까.`,2,4,"eve:taewoo:note"],["멋진 무대가 끝나야 좋아한다는 말을 하겠다고 농담한다.",`t|내일 실수하면 그 말 취소야?
p|아니. 그런 뜻으로 말한 건 아닌데.
t|그러면 조건처럼 붙이지 마. 나는 내일 조금 틀려도 오늘이 좋았으면 좋겠어.
n|나는 공연과 상관없이 내일 만나고 싶다고 바로잡았다.`,-3,-2,"eve:conditional"]],taehun:[["다음 페이지의 첫 문장을 지금 한 줄 보탠다.",`p|“흐려도 만나기로 했다.” 여기서부터 네가 이어 써 줘.
o|그럼 그다음은 날씨 얘기가 아닐 수도 있어.
p|응. 그게 더 궁금한데.
n|태훈은 내 문장 뒤에 마침표 대신 작은 쉼표를 그렸다.`,3,4,"eve:taehun:sentence"],["책갈피에 “내일은 네 얘기를 먼저 듣고 싶어”라고 적어 건넨다.",`o|책 읽어 달라는 말보다 이게 더 떨리네.
p|오늘처럼 네 말이면 되잖아.
n|태훈이 책갈피를 성도가 아닌 시집에 끼웠다.
o|그럼 내일은 이 책부터 가져갈게. 말 막히면 빌릴 문장도 있게.`,4,1,"eve:taehun:note"],["내일은 별이 보이는지 확인한 뒤 산책을 정하자고 한다.",`o|나는 만나기로 한 건 그대로인 줄 알았는데.
p|흐리면 네가 아쉬울까 봐.
o|하늘은 아쉬워도 너 만나는 건 안 아쉬워. 그 둘은 나눠 줘.`,0,-2,"eve:taehun:forecast"]],seoyul:[["작은 그림을 책 사이에 넣고 내일도 가지고 오겠다고 한다.",`s|구겨질까 봐 네가 더 조심하네.
p|오래 갖고 있을 거라고 방금 말했잖아.
s|내일 찾을 표시는 그걸로 할까. 네가 잠깐 보여 주면 내가 알아볼게.`,4,2,"eve:seoyul:keep"],["그림 뒷면에 내 한 줄도 써도 되는지 묻는다.",`s|뭐라고 쓰려고?
p|“세 번째 만남은 이 그림 그린 사람이 정하기.”
n|서율이 웃으며 연필을 건넸다.
s|그럼 내 자리 남겨. 날짜는 내가 적을래.`,2,4,"eve:seoyul:note"],["내일은 전시용처럼 더 근사한 그림을 하나 부탁한다.",`s|이건 전시하려고 그린 게 아니라 너 주려고 그린 건데.
p|이게 마음에 안 든다는 뜻은 아니었어.
s|알아. 그래도 오늘 준 그림이 다음 그림의 초안은 아니었으면 해.`,-1,-2,"eve:seoyul:upgrade"]],juhan:[["이번에는 내가 “내일도 같이 할래?”를 먼저 묻는다.",`p|이번 약속은 내가 먼저. 내일 게임 다 꺼도 나랑 조금 더 있을래?
j|응. 지금 대답하면 네가 나보다 빨라지는 거지?
n|주한은 말하고 나서 자기가 더 서두른 걸 알아챘다.
j|아, 그런 경쟁 아니었는데. 그래도 대답은 안 바꿀게.`,4,2,"eve:juhan:ask-first"],["“다음 판 예약”이라고 쓴 종이 티켓을 접어 준다.",`j|이거 서버 없어도 유효한 티켓이네.
p|응. 확인은 나한테 직접.
n|주한이 티켓 뒷면에 자기 이름과 내일 날짜를 적었다.
j|나도 직접 예약했어. 자동 응답 아니고.`,2,4,"eve:juhan:note"],["말하기 쑥스러우면 내일도 게임 화면에 써 달라고 한다.",`j|오늘은 내가 직접 말해 보려고 했는데.
p|네가 더 편한 쪽으로 해도 된다는 뜻이었어.
j|응. 그런데 편한 것만 하면 계속 화면 뒤에 있을 것 같아서. 조금 느려도 들어 줘.`,1,-2,"eve:juhan:screen"]],minhyuk:[["내일은 일정표 없이 민혁이 가고 싶은 방향으로 걷자고 한다.",`m|길을 잘못 들면?
p|그럼 둘이 같이 돌아오면 되지.
n|민혁은 펴려던 일정표를 다시 접었다.
m|좋아. 반 전체를 데리고 가는 게 아니니까. 네가 옆에 있으면 한 번쯤은.`,3,4,"eve:minhyuk:no-list"],["쪽지에 업무 대신 “민혁과 만나기”만 적어 보여 준다.",`m|시간도 준비물도 없네.
p|시간은 외웠고 준비물은 나. 그리고 너.
n|민혁이 자기 이름을 한 번 더 읽었다.
m|그러면 참석자는 둘 다 확인한 걸로. 내일은 지시사항 안 붙일게.`,4,2,"eve:minhyuk:note"],["완장을 벗는 건 잊지 말라며 다시 확인한다.",`m|벗겠다고 했잖아. 그건 기억할게.
p|장난으로 한 번 더 말한 건데.
m|알아. 그런데 너 만나러 갈 때도 검사받는 기분은 조금 싫네.`,0,-2,"eve:minhyuk:check"]],junyeon:[["준연과 약속한 날도, 다른 친구와 약속한 날도 그대로 두겠다고 말한다.",`p|목요일에 너랑 책 얘기하는 것도 내가 고른 약속이야. 금요일 약속 때문에 없어지는 건 아니고.
b|……두 칸 다 남아 있는 거네.
p|응. 너도 네 다음 일정을 적어 둬.
n|준연은 내 쪽만 보던 시선을 자기 달력으로 내렸다.`,2,4,"eve:junyeon:two-days"],["“내일 네 얘기도 듣겠다”고 적은 짧은 쪽지를 건넨다.",`b|네가 먼저 적어 주니까 내가 말 안 해도 되는 것 같은데.
p|쪽지는 듣겠다는 약속이지 네 대답을 대신 쓴 건 아니야.
n|준연은 종이를 접지 않고 한동안 들고 있었다.
b|응. 내 말은 내가 할게. 내일. 아직은 조금 떨려.`,3,2,"eve:junyeon:note"],["말하기 어려우면 내일 할 이야기는 좀 더 미뤄도 된다고 한다.",`b|그러면 또 아무 일 없었던 것처럼 지나갈 수도 있겠네.
p|네가 힘들어 보여서 한 말이야.
b|고마운데… 내일은 말해야 할 것 같아. 계속 미루는 건 나도 싫어서.`,1,-1,"eve:junyeon:postpone"]]},hs=[[[["이름을 맞혀 보겠다며 기타 케이스의 주인을 찾는다.",`p|기타는 전세계. 박자에 맞춰 책상 두드린 쪽은…
s|그건 나. 반주 담당 이서율.
w|반만 맞혔네. 벌칙은 우리 연습 구경 한 번.
m|벌칙이라고 하지 말라니까. 초대면 초대라고 해.`,2,1,"intro:band"],["비어 있는 내 담당 칸에 “일단 견학”을 적는다.",`p|오늘은 전부 한 번씩 볼게.
h|화학실에서는 장갑부터 끼고.
j|컴퓨터실에서는 아무 버튼이나 눌러도 돼. 그건 테스트니까.`,1,3,"intro:tour"],["흩어진 신청서를 준연과 같이 주워 정리한다.",`b|잠깐, 그건 신청서 아니고 내 낙서…
p|안 읽었어. 뒤집어서 줄게.
n|준연이 종이를 받아 가운데 끼웠다.
b|고마워. 맨 위에 있는 줄도 몰랐네.`,2,3,"intro:junyeon"]],[["빵 가운데를 양보하고 바삭한 끝부분을 고른다.",`t|끝부분 좋아하는 거야, 양보하는 거야?
p|지금은 좋아하는 쪽. 다음엔 가운데도 먹을 거고.
h|그럼 괜히 미담으로 만들 필요 없겠네.`,2,2,"lunch:crust"],["각자 다음에 사 올 간식을 하나씩 말해 보자고 한다.",`o|다음 모임 이름은 간식 관측회로 할까.
s|나는 빵. 모양 이상하면 그리기도 좋고.
b|나는 복숭아 젤리 가져올게.
p|내 몫도 부탁해. 다음엔 내가 음료 사 올게.`,1,4,"lunch:invite"],["빵을 먹다 첫날 길 잃은 일을 일부러 과장해서 말한다.",`p|사실 지하 삼 층까지 내려갔어. 비밀 기지가 있던데.
m|우리 학교 거긴 없는데.
j|반장이 그렇게 빨리 반박하면 괴담은 누가 만들어.`,3,0,"lunch:rumour"]],[["미지근한 음료를 바꾸러 가며 세계도 같이 부른다.",`p|혼자 더 기다리게 하기는 싫어. 편의점까지 같이 갈래?
w|그 사이 첫 곡이 또 바뀌면 어떡하려고.
p|다섯 곡째까지 들으면 되지.`,3,3,"world:walk-together"],["세계가 혼자 적어 둔 네 곡의 순서부터 본다.",`w|이건 네가 좋아할 것 같은 순서.
p|내 취향 아직 말한 적 없는데.
w|그러니까 네 표정 보면서 다시 정하려고 기다렸지.`,4,1,"world:first-song"],["시간이 꼬인 건 잊고 신나는 노래부터 듣자고 한다.",`w|나 기다린 건 조금 속상했는데. 그거까지 없던 일로 하면 좀 그렇다.
p|네 기분 풀어 주려다가 내 속도로 넘겼네. 미안.
w|응. 그다음 신나는 노래는 좋아.`,0,-2,"world:rush"]]],[[["이번에는 내가 먼저 방과 후 빈 시간을 물어본다.",`p|오늘 작업 끝나고 매점 갈 사람? 일 없어도.
s|그 말을 기다리는 사람이 꽤 있었을걸.
t|난 갈래. 같이 틀린 사람끼리 당 충전하자.`,2,3,"chapter2:ask-first"],["서율이 보여 주고 싶다고 한 그림부터 보러 간다.",`s|포스터 말고 이쪽. 네가 빵 고르는 손 그린 거.
p|손만 보고 나인 줄 알겠어?
s|알지. 맨 마지막까지 고민하는 손은 네 손이었어.`,4,1,"chapter2:notice-art"],["일찍 끝내려고 친구들 몫까지 한꺼번에 맡는다.",`m|잠깐. 네가 다 들면 같이 갈 사람은 누가 남아?
p|빨리 끝내면 다들 쉬잖아.
m|그건 맞는데, 우린 같이 준비하는 것도 좋아서 온 거야.`,0,-2,"chapter2:overhelp"]],[["교실 바닥에 테이프로 태우의 마지막 발 위치를 표시한다.",`t|맞아. 여기까지 온 다음 손을 내밀면 돼.
p|발이 길 잃지 않게 표지판 세운 거야.
t|그럼 이제 너도 여기로 와. 길 잘 찾는지 볼게.`,3,3,"dance:floor-mark"],["내가 틀리는 부분을 먼저 보여 달라고 부탁한다.",`t|네가 틀리는 부분을 왜 내가 보여 줘.
p|내 눈으로 볼 수 없어서. 최대한 비슷하게.
n|태우가 내 어색한 팔 동작을 재현하다 웃고 말았다.
t|좋아. 이건 우리 둘 다의 명예가 걸렸다.`,4,1,"dance:imitate"],["다음 연습은 예약을 완전히 확정한 뒤에만 하자고 한다.",`t|그 말 맞아. 근데 오늘 연습하기 싫어졌다는 뜻은 아니지?
p|아니. 네가 또 헛걸음하는 건 싫어서.
t|그럼 오늘 남은 건 같이 해 줘. 다음 일정 걱정은 끝나고 하고.`,0,2,"dance:calendar-first"]],[["준비 없는 날에도 만날 수 있는 약속을 적는다.",`p|다음 주에 같이 걸어갈 사람. 짐 없이, 할 일 없이.
w|기타는 짐에 포함이야?
h|그 질문이 나오면 이미 탈락인데.`,3,2,"focus:ordinary"],["가장 기다려지는 목소리가 누구인지 생각해 본다.",`n|같은 질문에 돌아오는 서로 다른 말들을 떠올렸다. 내 얘기를 제일 먼저 하고 싶은 얼굴이 있었다.
p|나 잠깐 고민하고 정할래. 당번표보다 어렵네.
o|고르기 전에 하늘 한 번 보고.`,2,3,"focus:reflect"],["아직 한 사람만 기다리는 마음은 아니라고 솔직히 말한다.",`p|같이 있으면 좋은 사람은 많은데 아직 무슨 마음인지는 모르겠어.
m|모르는 걸 정했다고 말할 필요는 없지.
t|그럼 오늘은 다 같이 집에 가자.`,0,4,"focus:unhurried"]]],[[["리허설이 끝나면 하고 싶은 일을 쪽지 뒷면에 적는다.",`p|오늘 준비 끝나고는 이거. 일 얘기 금지.
o|금지라고 쓰니까 더 궁금한데.
p|끝나고 펼쳐. 그때 내가 옆에 있을게.`,3,2,"chapter3:sealed-plan"],["약속한 사람에게 직접 찾아가 시간을 다시 맞춘다.",`p|게시판에 적힌 거 말고 우리 시간. 끝나면 바로 만나는 거지?
w|응. 나 오늘은 기다릴 핑계 없이 먼저 가 있을게.
n|숫자를 다시 읽는 것보다 서로 웃는 얼굴을 확인하는 쪽이 오래 남았다.`,2,4,"chapter3:direct"],["준비에 늦지 않게 오늘의 개인 약속을 먼저 줄인다.",`p|바쁘면 오늘 조금만 만나도 괜찮아.
s|괜찮다고 먼저 정해 주면 내가 아쉽다는 말은 어디 해.
p|네가 바쁠 줄 알아서 그랬어.
s|응. 다음엔 나한테 먼저 물어봐 줘.`,-1,1,"chapter3:shorten"]],[["세 안내를 칠판에 붙이고 실제 기다린 자리에 표시한다.",`j|이렇게 보니까 같은 모임이 갈라진 게 바로 보이네.
t|내가 늦은 사람이라서 혼자 남았던 게 아니고.
p|그러니까 서로한테 먼저 미안하다고 하지는 말자.`,2,4,"noticing:compare"],["연습 시작 전에 혼자 기다린 친구들을 한 명씩 찾는다.",`w|연락 보자마자 뛰어나올 뻔했어. 네가 또 기다리나 싶어서.
p|이번에는 다 같이 모였으니까.
j|오늘 내 설명도 끝까지 들어 줘서 고마워.`,3,2,"noticing:people-first"],["자동안내 오류라면 주한이 먼저 고치면 되지 않냐고 묻는다.",`j|아직 내 프로그램이 보낸 건지부터 확인 안 됐어.
p|제목만 보고 너무 빨리 말했네.
j|고칠 건 고칠게. 그런데 하지 않은 일까지 먼저 떠안을 수는 없어.`,-2,-3,"noticing:assumed-ai"]],[["닫힌 매점 대신 운동장 가장자리로 산책 방향을 바꾼다.",`p|간식은 있고 기다릴 줄도 없네. 오늘은 한 바퀴만 더 돌자.
o|한 바퀴가 꽤 길 텐데.
p|응. 그래서 고른 건데.`,4,1,"chapter3:walk"],["아까 끊긴 이야기를 기억나는 첫 문장부터 꺼낸다.",`p|아까 “사실은”까지 들었어. 그다음이 계속 궁금했는데.
s|그걸 아직 기억하고 있었어?
p|중요한 얘기 같아서.`,2,4,"chapter3:unfinished"],["이제 공지 문제는 걱정하지 않아도 될 거라고 단정한다.",`h|괜찮아질 거라는 건 나도 바라는 쪽인데 아직 모르잖아.
p|오늘만은 편하게 웃었으면 해서.
h|그러면 같이 웃자고 해. 괜찮아졌다고 말하는 거랑은 다르니까.`,0,-2,"chapter3:too-certain"]]],[[["객석에서 서로 찾을 수 있는 작은 손짓을 정한다.",`t|그거면 멀리서도 알아보겠다. 한 번 더 해 봐.
p|너무 많이 하면 광고 신호 같아지는데.
w|오늘 우리 공연 후원자는 객석의 이상한 손짓입니다.`,4,1,"festival:signal"],["공연 뒤에 먹을 메뉴를 아무 망설임 없이 고른다.",`p|끝나면 내가 말한 가게로 가자.
m|그렇게 말하니까 이번에는 따라가 보고 싶네.
h|가게 영업시간은 확인했지?
p|응. 중요한 준비는 했어.`,2,3,"festival:meal"],["잘 보이는 첫 줄보다 방해되지 않는 뒷자리를 고른다.",`w|거긴 내가 너를 찾기 어려운데.
p|필요한 일 생기면 바로 움직이려고.
w|고마워. 근데 내 노래 듣는 시간에는 관객이어도 돼.`,0,1,"festival:back-seat"]],[["다시 시작하는 첫 박자를 객석에서 함께 세 준다.",`p|하나, 둘, 셋, 넷.
n|세계의 첫 코드와 서율의 건반이 같은 지점에 닿았다. 태우는 옆에서 손으로 박자를 세었다.
t|이번엔 누구도 안 놓쳤다.`,3,3,"rehearsal:count"],["서율이 지켜 둔 승인본 여백에 모두 확인한 표시를 남긴다.",`s|그림 그려도 돼. 글자 안 가리는 쪽에.
h|그러면 이 별은 안전 점검 완료 표시야.
w|왜 내 음표가 제일 못 그렸지.`,2,4,"rehearsal:marks"],["범인을 빨리 정하면 다음 문제가 없을 거라고 말한다.",`m|빨리 끝내고 싶은 건 나도 그래. 그래도 자료가 말하는 데까지만 가자.
p|이대로 두면 또 바뀔까 봐 무서워서.
j|그럼 게시 권한을 잠시 묶으면 돼. 이름을 먼저 고르는 대신.`,-1,-2,"rehearsal:rush-name"]],[["“내일 끝나도 우리 약속은 하나 더 남는다”고 말한다.",`p|첫 번째는 시작 전. 두 번째는 공연 뒤. 세 번째는 네가 정하기.
o|숫자가 늘어서 더 오래 만나는 기분이네.
p|기분만 그런 건 아니게 하고 싶은데.`,4,1,"eve:third-date"],["내일 긴장하면 보여 달라며 작은 쪽지를 건넨다.",`p|읽는 시간은 네가 정해. 무대 전이어도 되고 다 끝나고여도 돼.
s|봉투에 넣으면 내가 더 긴장할 것 같은데.
p|그럼 접지만 말자.`,2,4,"eve:note"],["멋진 무대가 끝나야 좋아한다는 말을 하겠다고 농담한다.",`t|내일 실수하면 그 말 취소야?
p|아니. 그런 뜻으로 말한 건 아닌데.
t|그러면 조건처럼 붙이지 마. 나는 내일 조금 틀려도 오늘이 좋았으면 좋겠어.`,-3,-2,"eve:conditional"]]],[[["내가 확인한 것만 말하겠다고 먼저 손을 든다.",`p|기억만 있는 건 기억이라고 말할게. 원본이 있는 건 같이 보자.
m|좋아. 틀린 부분을 고칠 시간도 모두한테 주자.
w|그날 기다렸던 것도 내가 내 말로 얘기할래.`,1,4,"trial:own-words"],["시작하기 전, 서로에게 해석부터 붙이지 말자고 제안한다.",`p|말이 느려도 숨기는 거라고 정하지 말자.
j|프로그램 얘기는 내가 짧게 설명할게. 모르는 용어로 밀어붙이지 않겠어.
n|준연이 봉투를 자기 앞에 놓았다. 민혁은 순서표를 모두 보이는 쪽으로 돌렸다.`,2,3,"trial:listen"],["행사 시간에 쫓기니 핵심부터 빨리 끝내자고 말한다.",`t|나도 무대로 돌아가고 싶어. 그런데 빨리 끝내려고 누가 또 혼자 잘못한 사람이 되면 안 되잖아.
p|맞아. 공연 놓칠까 봐 급했어.
teacher|진행 시간은 내가 조정할게. 지금 확인하는 일에 집중하자.`,0,-1,"trial:hurried"]],[["연습 때 정한 신호를 객석에서 정확히 한 번 보낸다.",`n|작은 손짓을 하자 무대 위의 시선이 잠깐 나를 찾았다. 그 뒤의 웃음은 연습에 없던 것이었다.
p|봤구나.
t|봤지. 그렇게 조심스럽게 하는데 어떻게 못 봐.`,4,2,"festival:kept-signal"],["무대 뒤에서 가장 잘된 부분을 구체적으로 말한다.",`p|마지막 전환 때 서로 보지도 않았는데 딱 맞았어.
s|그거 너랑 어제 세 번 맞춘 부분이야.
w|칭찬 되게 자세하게 한다. 진짜 보고 있었네.`,2,4,"festival:specific-praise"],["전부 완벽했다며 실수한 부분도 못 본 척한다.",`h|내가 설명 순서 한 번 바꾼 건 봤지?
p|응. 그래도 잘 끝났잖아.
h|그렇게 말해 주면 돼. 완벽했다고 하면 다음 질문을 못 하잖아.`,1,-1,"festival:perfect"]],[["축제 없이 만날 첫 날짜를 휴대전화에 넣는다.",`p|다음 주. 준비물 없음. 그냥 만나기.
m|날짜만 정하고 나머지는 그날 골라도 돼?
p|응. 그건 같이 정하자.`,3,3,"after:next-date"],["가장 좋았던 장면 하나를 상대에게 맞혀 보게 한다.",`p|내가 오늘 제일 좋았던 순간 맞혀 봐.
j|무대 성공했을 때?
p|그 뒤에 너희가 내 자리 찾으러 왔을 때.`,4,1,"after:moment"],["아직 정리할 마음이 남아 있다고 솔직히 말한다.",`p|오늘 좋았던 것도 맞는데 어려웠던 얘기도 남아 있어. 다음 약속은 하루만 생각하고 말해도 돼?
o|응. 좋았던 날이 항상 가벼운 날은 아니니까.
n|인사를 미루지는 않았다. 오늘 고마웠던 사람의 얼굴을 보고 제대로 말했다.`,1,4,"after:breathe"]]]];function ms(e,t,s){const r=Math.max(0,Math.min(4,e)),a=Math.max(0,Math.min(2,t)),c=s.focus&&!(s.focus==="junyeon"&&s.verdict==="exclude")?s.focus:null,l=r===2&&a===0&&c&&c!=="junyeon"?an[c].options:null,o=r===2&&a===2&&c&&c!=="junyeon"?Zr[c]:null,d=r===3&&a===2&&c?ps[c]:null;return(l??o??d??hs[r][a]).map(([p,j,b,m,g],z)=>{var E;const v=T(j,s).map(q=>l&&c&&c!=="junyeon"?{...q,location:an[c].location}:q),k=(E=v.find(q=>Object.prototype.hasOwnProperty.call(Ee,q.speaker)))==null?void 0:E.speaker,A=l||o||d?c:k??null,M=A?[{person:A,affection:b,trust:m}]:[],S=l&&c?[`moment:${c}:${z}`,`route:${c}:3:${g}`,...g==="commitment"?[`route:${c}:commitment`]:[]]:[];return{id:"main-option-"+(z+1),text:p,response:v,effects:M,flags:["main-memory:"+(r+1)+":"+(a+1)+":"+z,...!l&&g?[o?`aftertalk:${c}:${g}`:g]:[],...S]}})}const fs={"0:1":`n|운동장으로 내려가려는데 세계가 다시 가방을 열었다. 기타를 넣는 줄 알았더니 접힌 쪽지를 찾고 있었다.
w|아까 너 안 올 줄 알았을 때, 내가 좀 신나 보였나 싶었거든.
p|신나 보이면 안 되는 약속이었어?
w|아니. 그래서 더 바보 같다는 거야. 혼자 앞서갔다고 생각한 게.
n|세계는 두 쪽지의 시간만 번갈아 보았다. 그걸 비교하고 나서야 어깨가 조금 내려갔다.
w|종이 한 장 잘못 나온 걸로 사람 마음까지 맞혀 버렸네.
p|나도 네가 시간을 바꾼 줄 알고 물어보려 했어.
w|다음엔 마음 읽기 전에 시간부터 물어보기. 우리 둘 다.
n|그때는 정말 한 번 생긴 인쇄 실수라고 생각했다. 세계도 나도 다른 사람의 이름을 의심하지 않았다.
w|이거 버리지 말고 독서실 테이블에 잠깐 펴 두자. 누구한테 확인할 때 말로 하면 또 헷갈릴 것 같아.
p|좋아. 다 확인하면 노래 듣는 시간으로 돌아오고.
w|그건 확인 안 해도 돼. 지금 같이 가는 중이잖아.`,"0:2":`n|점심 종이 울리자 세계가 어제 쪽지를 찍은 사진을 잠깐 보여 주었다.
w|이거 인쇄할 때 두 버전 섞였나 물어보려고. 별일 아니겠지?
j|초안 파일 두 개 켜 놓으면 그럴 수도 있어. 나도 가끔 저장한 이름 헷갈리니까.
h|그럼 원본은 남기고 물어봐. 추측해서 답까지 만들어 주지는 말고.
b|어제 묶음은 찾아볼게. 오늘 출력할 게 좀 밀려서.
p|응. 급하게 지금 답 안 해도 돼. 다음 안내 전에만 같이 보자.
n|준연이 고개를 끄덕였다. 나는 미지근했던 음료보다 세계가 마지막에 웃던 얼굴을 더 오래 생각했다.
n|수첩 첫 메모의 제목은 ‘범인’이 아니라 ‘쪽지 시간 확인’이었다.`,"1:1":`n|교실에서 연습을 마친 태우가 테이프를 떼다가 내 수첩을 보았다.
t|너 지난번에도 시간 잘못 적힌 거 있었지?
p|세계가 받은 건 세 시 사십 분, 내 건 네 시 십 분.
w|이번엔 태우 안내만 옛날 시간이네. 기다린 사람이 또 약속 안 지킨 것처럼 된 거고.
t|잠깐만. 나는 오늘 네가 안 온다고 연락할 뻔했어. 네가 옆에 같이 있어서 말았지.
n|태우는 떼어 낸 테이프를 손끝에 감았다. 농담하던 표정이 조금 가라앉았다.
m|두 번 겹친 건 맞아. 그래도 종이 안내랑 예약은 다른 작업이니까 어느 부분에서 끊겼는지부터 보자.
h|한 사람이 기억을 자꾸 틀린 게 아니라, 받은 정보가 달랐다는 건 이제 공통이네.
j|다음엔 연락하기 전에 받은 안내부터 나란히 보면 어때? 서로 서운해지기 전에.
p|예약 바뀐 확인서랑, 누가 누구에게 전달하기로 했는지만 더 보자.
t|응. 누굴 잡으려는 것보다 다음 연습에 제대로 만나고 싶어서.
n|이번에는 ‘실수겠지’ 한마디로 종이를 버리지 않았다. 태우가 변경 확인서를 받으러 가자고 먼저 말했다.`,"1:2":`n|하교 전에 민혁이 교실 뒤 달력 옆에 투명 파일을 하나 걸었다.
m|다음부터는 받은 안내도 여기에 한 장 남겨 줘. 바뀌면 옛 종이를 버리지 말고 옆에 끼우고.
s|박물관 같네. 실수한 시간 전시관.
t|입장료는 다음번 지각 안 하기.
n|웃음이 났지만 태우는 자기 안내를 꽂기 전에 시간을 한 번 더 읽었다.
p|아직은 원인 두 개가 따로일 수도 있지?
m|응. 같은 사람 이름이 담당표에 적혀 있어도 그걸로 끝은 아니야.
w|그래도 앞으로 누가 안 오면 먼저 화내지는 않을래. 종이부터 볼 거야.
n|반 전체가 수사에 매달린 건 아니었다. 그저 약속을 취소하기 전에 서로 한 번 더 묻는 버릇이 생겼다.`,"2:1":`n|모두 같은 교실에 도착했는데도 주한은 노트북을 열지 못했다. 프로그램을 보여 주던 손이 가방 끈에 머물렀다.
j|혹시 나 때문에 약속 다 틀어졌다고 생각했어?
t|처음엔 제목 보고 그런가 했어. 미안. 네가 설명하니까 내가 너무 빨리 생각했더라.
w|나도 컴퓨터가 한 일이라고 넘기려 했어. 근데 같은 모임을 왜 세 곳으로 보내지?
h|앞의 두 번은 시간 차이였고, 이번엔 장소가 갈렸어. 그런데 결과는 똑같네. 만나려던 애들이 못 만나.
o|우리가 준비한 걸 못 하게 된다는 것도.
n|주한이 그제야 가방에서 펜을 꺼냈다. 종이 가운데 모임 하나를 그리고 바깥으로 세 줄을 뻗었다.
j|누가 일부러 했다고 지금 말할 수는 없어. 대신 ‘알아서 그렇게 됐다’는 설명도 그냥 믿지는 말자.
p|지난 두 번도 같은 방식으로 적으면 비교할 수 있겠다.
m|담당 선생님께 원문이랑 이 그림을 같이 보여 드리자. 우리끼리 화면을 몰래 열 필요는 없어.
b|다들 이것 때문에 나중 약속도 늦어지겠네.
s|조금 늦어져도 다시 만나면 돼. 누구 하나만 기다린 척하는 일로 남기는 게 더 싫어.
n|처음으로 세 번의 일을 한 페이지에 이어 적었다. 아직 이름을 향한 화살표는 없었다. 대신 반복되는 결과에 밑줄이 그어졌다.`,"2:2":`n|그날 이후 주한은 공지 제목을 볼 때마다 잠깐 멈췄다. 오늘은 내가 먼저 옆자리에 앉았다.
p|예약 공지 확인은 선생님과 약속한 시간에 하자. 지금은 뭐 만들던 거 계속 보여 줘.
j|내 프로그램 이름 지울까도 생각했어. 괜히 그 이름 쓰면 또 이상하게 볼까 봐.
s|나는 네가 그거 처음 켰을 때 표정 기억하는데. 이름을 지워야 하는 쪽은 아닌 것 같아.
n|주한이 저장해 둔 시작 화면을 열었다. 작은 캐릭터가 어색하게 인사했다.
j|이건 아직 인사밖에 못해. 사람 마음도 모르고, 공지 장소도 못 고르고.
p|그래도 만든 사람이 웃는 건 잘하네.
n|주한은 내 쪽으로 화면을 조금 돌렸다. 우리는 확인해야 할 일과 버리지 않을 즐거움을 따로 남겨 두기로 했다.`,"3:1":`n|다시 맞춘 리허설이 끝난 뒤에도 서율은 큐시트 두 장을 무릎 위에서 떼지 않았다.
s|이거, 내가 어제 승인받고 파일 올리는 것까지 봤어. 마지막까지 없었던 버전은 아니야.
j|그러면 단순히 최종본이 늦게 도착해서 구버전을 쓴 건지 확인하면 돼. 대장에 순서가 남아 있을 거야.
t|왜 자꾸 시작하기 직전에만 달라지는 것 같지?
w|우리가 서로 먼저 만나기로 한 건 그대로인데, 전달되는 것만 바뀌어.
h|누가 기다릴 사람을 아는 것처럼 느껴져서 더 이상해. 그렇다고 그 느낌을 답이라고 하면 안 되겠지만.
n|세계가 기타 케이스의 잠금을 닫았다. 이번에는 웃으면서 넘기지 않았다.
m|오늘부터 배포는 두 명이 함께 확인하자. 공용 게시판 수정도 선생님 확인 뒤에 하고.
b|그럼 내가 맡던 건…?
m|반 전체 방식 바꾸는 거야. 원인이 확인될 때까지 누구도 혼자 책임지거나 혼자 바꾸지 않게.
p|내일을 안전하게 시작하는 게 먼저야. 기록은 버리지 말고, 공개적으로 확인할 수 있는 순서만 보자.
n|나는 처음 쪽지를 넣었던 봉투를 다시 꺼냈다. 이제는 인쇄 실수 한 번이라고 부를 수 없었다. 그래도 사람 이름 대신 날짜부터 적었다.`,"3:2":`n@classroom|민혁과 나는 기록 봉투를 챙기러 교실에 잠깐 돌아왔다. 불을 끄기 전에 민혁이 책상 위에 놓인 네 묶음을 세었다.
m|한 번은 잘못 나온 쪽지, 그다음은 안 전해진 변경, 세 번째는 따로 입력된 장소. 마지막은 승인본을 받은 뒤 골라진 구버전.
h|실수일 수 있다는 설명이 하나씩 줄어들긴 하네.
p|그래도 누가 실제로 뭘 했는지는 내일 본인 말도 들어야 해.
s|우리 중 누가 일부러 그랬을 가능성을 생각해야 한다는 게 싫어.
w|나도. 근데 그 말이 무서워서 그냥 넘기면 다음 약속 잡을 때마다 눈치 볼 것 같아.
n|태우는 구겨진 예약 확인서의 모서리를 펴서 봉투에 넣었다.
t|내일 한 번 제대로 묻자. 끝내고 나면 나는 춤출 거야. 그 시간까지 안 빼앗길래.
m|선생님께 아침 확인 시간을 부탁했어. 발표 전에 짧게 만나자. 원본 가져오는 사람은 봉투에 이름만 적어 줘.
n|우리가 남긴 것은 서로를 감시할 명단이 아니었다. 어긋난 날을 다시 설명할 수 있게 하는, 함께 겪은 기억들이었다.`};function ys(e){const t=e.focus;if(!t||t==="junyeon")return[];const s=[0,1,2].find(c=>e.flags.includes(`moment:${t}:${c}`));if(s!==void 0)return[{speaker:t,text:an[t].callback[s],expression:"smile"}];const a={world:[["date:world:private","노래 제목 아직 점 두 개야. 바꾸려다가 네가 먼저 알아볼 것 같아서 남겼어.","나는 손끝으로 책상에 점 두 개를 찍었다. 세계가 같은 자리를 한 번 더 두드렸다."],["date:world:sing","네가 올려 부른 마지막 음, 그 버전도 녹음했어. 듣고 책임질 준비 됐어?","음악이 시작되기 전부터 나는 웃었다. 세계는 그 얼굴이 보고 싶었다고 중얼거렸다."],["date:world:too-soon","그때 고백 가사냐고 물었지. 오늘은 답 재촉 안 해서 좋아. 나도 안 한 척하는 건 아니야.","나는 농담부터 꺼내려던 말을 삼켰다. 세계가 자기 속도로 문장을 끝낼 때까지 기다렸다."]],hyunsol:[["date:hyunsol:portrait","같이 찍은 사진에서 병만 유난히 선명해. 우리는 웃다가 흔들렸고. 다시 찍을 이유 생겼네.","현솔은 실패한 사진이라고 지우지 않았다. 나는 다음 사진에도 같이 나오겠다고 했다."],["date:hyunsol:nickname","여름 소다 사진 찾는 거지? 파일 이름까지 그렇게 적어 놨더니 이제 원래 이름이 덜 기억나.","현솔이 작은 사진을 내밀었다. 그날 붙인 엉뚱한 이름이 이번 만남의 첫말이 됐다."],["date:hyunsol:distance","오늘은 실패한 것도 보여 줘도 돼? 완성한 뒤에만 보면 네가 놓치는 날이 너무 많아서.","나는 완성본만 보자는 뜻이 아니었다고 이번에는 분명히 말했다. 현솔은 정리 중이던 의자를 다시 꺼냈다."]],taewoo:[["date:taewoo:pace","이번 마지막 포즈는 네 박자로 해 볼래. 느려도 덜 어색해지더라.","태우가 음악을 기다리지 않고 내 손을 잡았다. 나는 둘이 익힌 느린 카운트를 셌다."],["date:taewoo:eyes","거울 안 보고 하니까 네가 웃기 전에 웃는 걸 내가 먼저 알아. 그건 조금 재밌어.","나는 웃음을 참으려다가 먼저 실패했다. 태우는 틀린 동작 말고 그 표정을 한 번 더 보여 달라고 했다."],["date:taewoo:showoff","오늘은 어려운 거 안 시켜. 그냥 마지막에 여기 있어 줘. 그건 잘할 수 있지?","내가 이번엔 제안을 덧붙이지 않고 손을 내밀자 태우의 어깨가 가벼워졌다."]],taehun:[["date:taehun:present","네가 말한 색은 사진에 잘 안 나와. 그래서 문장으로 남겨 놓은 게 다행이야.","태훈이 보여 준 노트에는 그날 바람과 내 말이 같은 줄에 적혀 있었다."],["date:taehun:joke","태훈자리 오늘도 두 번 지나갔어. 공동 발견자는 관측을 너무 쉬는 거 아니야?","나는 하늘을 올려다보며 세 번째 비행기를 찾았다. 태훈이 내 소매를 잡고 반대쪽을 가리켰다."],["date:taehun:missed","오늘은 별 없어도 조금 더 있어 줄래? 이번엔 책을 미리 안 덮어 놨어.","나는 먼저 책 모서리에 손을 얹었다. 다음에 오자는 말 대신 지금 여기 있다는 걸 보여 주고 싶었다."]],seoyul:[["date:seoyul:exchange","네가 그린 내 손 있잖아. 그거 집에서 보면 또 웃게 돼. 손가락이 너무 길어서가 아니라.","서율은 내 엉성한 그림을 자기 스케치와 같은 파일에 넣어 두었다. 나는 다음엔 서율의 웃는 얼굴도 그려 보기로 했다."],["date:seoyul:look","오늘은 네가 나 보는 표정부터 그릴래. 그러면 내가 왜 자꾸 웃었는지 네가 알 것 같아서.","나는 일부러 멋진 표정을 만들지 않았다. 서율의 연필이 전보다 빠르게 움직였다."],["date:seoyul:posing","오늘은 편하게 앉아 줘. 잘 나온 모습 말고, 내가 알아보는 네 모습이면 돼.","나는 어깨에 들어간 힘을 뺐다. 서율은 지우개 없이 첫 선을 그었다."]],juhan:[["date:juhan:save","그 스크린샷 시작 화면에 작게 넣었어. 우리 둘이 떨어지지 않고 같이 서 있는 몇 안 되는 사진이라서.","주한이 보여 준 구석을 나는 바로 알아봤다. 작은 화면을 보려고 둘의 의자가 가까워졌다."],["date:juhan:ask","오늘도 벽 끝까지 가 볼 거야? 이제는 네가 뭘 찾으려고 그러는지 나도 좀 알 것 같아.","나는 숨은 길보다 주한이 숨기다 말고 웃는 표정을 먼저 찾았다."],["date:juhan:public","그 비밀 장소, 나중에는 공개해도 될 것 같아. 오늘은 내가 고른 거고. 네가 먼저 봤다는 건 그대로니까.","나는 공유 버튼을 누르기 전에 주한에게 화면을 돌려 보였다. 이번에는 주한이 직접 눌렀다."]],minhyuk:[["date:minhyuk:pace","오늘은 비도 없는데 네 걸음에 맞춰 걷고 있네. 이상하진 않지?","나는 우산 손잡이 대신 가방끈을 고쳐 잡았다. 같은 속도로 걷는 데는 우산이 필요 없었다."],["date:minhyuk:long-way","오늘 버스 시간은 안 찾아봤어. 다음 정류장까지 가자는 말 나올 것 같아서.","민혁은 나보다 먼저 먼 정류장 쪽으로 돌아섰다. 내가 쫓아가자 그제야 짧게 웃었다."],["date:minhyuk:one-sided","가운데 기억하지? 오늘은 짐도 반씩. 한쪽만 멋있으려고 하지 말기.","나는 큰 상자를 혼자 들려다 민혁 쪽 손잡이를 남겼다. 나란히 걷자 상자의 모서리가 흔들리지 않았다."]]}[t].find(([c])=>e.flags.includes(c));return a?[{speaker:t,text:a[1]},{speaker:"narrator",text:a[2]}]:[]}function js(e,t,s){const r=a=>e.flags.includes(a);if(t===1&&s===0){if(r("lunch:invite"))return T(`n|새로운 준비 주간의 첫 점심, 준연이 작은 젤리 봉투를 내 식판 옆에 놓았다.
b|지난번에 네 몫도 부탁한다고 했잖아. 복숭아 맞지?
p|응. 말해 놓고 네가 잊을까 봐 나도 모르게 기다렸네.
b|안 잊었어. 음료는 네 차례라는 것도.`,e);if(r("intro:band"))return T(`n|세계가 교실 문에서 나를 기다렸다. 첫날 이름을 반만 맞힌 벌칙을 아직 기억하고 있었다.
w|연습 구경 오기로 한 사람, 도망 안 갔네.
p|초대라고 하기로 했잖아.
w|응. 오늘은 정확히 초대. 네가 안 오면 아쉬운 쪽이 나니까.`,e)}if(t===1&&s===2){if(r("dance:floor-mark"))return T(`n|태우가 떼어 낸 바닥 테이프를 공책 끝에 붙여 두었다. 내가 발 위치를 표시해 준 조각이었다.
t|이거 버리려다가 웃겨서 붙였어. 길 잃은 발 구조 기념.
p|다음엔 표지판 없이도 갈게.
t|그럼 내가 확인해 줄게. 딱 여기까지.`,e);if(r("dance:imitate"))return T(`t|야, 이거 누구 춤인지 맞혀 봐.
n|태우가 어깨를 어색하게 들썩이자 나는 웃으면서 손부터 들었다.
p|나. 이제 따라 하는 것도 원본보다 잘하네.
t|그러니까 다음 연습엔 원본도 좀 발전해 줘. 같이 해 줄 테니까.`,e)}return t===2&&s===2&&r("noticing:assumed-ai")?T(`p|주한아. 아까 프로그램 오류라고 먼저 말한 건 미안해. 이름만 보고 네 잘못으로 넘겼어.
j|그때 바로 대답하려다가 말 안 나왔거든. 네가 그렇게 생각한다니까 더.
p|다음엔 네 설명부터 들을게.
j|응. 오늘은 네가 먼저 말해 줘서, 나도 다시 켜 볼 마음이 드네.`,e):t===3&&s===2&&r("rehearsal:rush-name")?T(`p|아까 빨리 누군지 정하자고 한 말은 취소할게. 내가 불안하다고 사람 이름부터 답으로 쓸 수는 없겠더라.
m|나도 네 말 들을 때 잠깐 그러고 싶었어. 준비한 날을 또 놓칠까 봐.
p|내일은 우리가 본 순서부터 말하자.
m|응. 급할수록 그쪽으로 같이 가자.`,e):t===4&&s===1&&r("festival:signal")?T(`n|내가 객석에서 둘이 정한 작은 손짓을 하자 무대 쪽에서 같은 신호가 돌아왔다.
p|연습할 때 광고 같다고 웃었는데.
w|광고 효과 좋네. 관객 한 명은 확실히 찾았으니까.`,e):t===4&&s===1&&r("eve:conditional")?T(`p|어제 멋지게 해내야 좋아한다는 말, 농담이어도 이상했어. 오늘 잘한 점수 때문에 여기 온 건 아니야.
t|응. 그 말 지금 해 줘서 고마워. 나 마지막에 반 박자 늦은 거 계속 신경 쓰고 있었거든.
p|그래도 오늘 네가 웃은 건 분명히 봤어.
t|그건 네가 보여서 웃은 거야.`,e):[]}function Tn(e,t,s){const r=Math.max(0,Math.min(4,e)),a=Math.max(0,Math.min(2,t)),c=r===0?a===1?2:a===2?1:0:a,l=cs[r][c];let o=T(l.text,s);if(a===1){const m=["그 뒤 열흘 동안 교실 밖에서 인사할 사람이 늘었다. 이름을 틀릴까 걱정하던 복도에서, 이제 먼저 부르고 싶은 이름을 고르고 있었다.","두 주 동안 태우는 내 박자 세는 소리를 들으면 웃었고, 세계는 새 후렴을 만들 때마다 쉬는 시간에 한 소절씩 흘렸다. 방과 후라는 말에 이제 떠오르는 얼굴이 있었다.",s.focus?`그날 나눈 작은 비밀 뒤로 두 주가 흘렀다. 잘 잤냐는 인사가 숙제 질문보다 먼저 오기 시작했고, 내 걸음도 무심코 ${Ee[s.focus]} 쪽으로 돌아갔다.`:"새로운 준비 주간이 두 번 더 지났다. 점심 때 먼저 부를 이름은 많아졌지만, 누구의 옆자리에서 가장 오래 머물고 싶은지는 아직 알아가는 중이었다.","전시 제목이 붙고 객석 의자가 정리되는 동안에도 짧은 만남은 끊기지 않았다. 마주친 손을 급히 떼던 첫날과 달리, 이제는 다음 말을 하려고 잠깐 더 서 있는 날이 많았다.",""];m[r]&&o.unshift({speaker:"narrator",text:m[r]})}const d=js(s,r,a);d.length&&o.splice(r===4&&a===1?Math.max(0,o.length-4):Math.min(2,o.length),0,...d);const h=ds(s,r,a),p=fs[r+":"+a];p&&o.push(...T(p,s)),r===4&&a===0||o.push(...h),r===2&&a===2&&o.push(...ys(s)),r===4&&a===1&&o.splice(2,0,...T(s.verdict==="exclude"?`n|준연은 공동 준비에서 빠졌다. 교사에게 수정할 문서와 배포 대상을 넘기고 개인 연락도 끝내기로 했다.
teacher|학교생활과 별도의 수습은 내가 지도하겠다. 너희가 계속 연락을 받아 줄 의무는 없다.
n|준연은 멈춰 달라고 붙잡지 않았다. 남은 친구들은 승인된 순서로 무대를 다시 열었다.`:`n|준연은 민혁 옆에서 원본과 새 안내를 대조했다. 공지를 혼자 바꾸는 역할로 돌아가지는 않았다.
b|예약 바꾼 건 나야. 네가 시간을 잘못 외운 게 아니었어. 내 잘못처럼 보이지 않게 두었던 것도 미안해.
t|정정은 받을게. 그렇다고 오늘 끝나고 같이 놀 수 있다는 말은 아직 못 하겠어.
b|응. 네가 정해. 나는 다음 표를 확인할게.`,s));let j=l.location;o=o.map(m=>(j=m.location??j,{...m,location:j}));const b=ms(r,c,s).map(m=>({...m,response:m.response.map(g=>({...g,location:g.location??j}))}));return{id:`main-${r+1}-${a+1}`,title:l.title,location:l.location,lines:o,choices:b,memory:`${r+1}장 · ${l.title}`}}const xs=[{title:"첫째 주 · 답장이 없어도",location:"classroom",text:`n|페어가 끝난 첫째 주. 준연은 선생님과 확인한 정정문을 가져왔다.
b|첫 약속 시간을 내가 다르게 인쇄했다는 것부터 썼어.
p|받은 사람마다 자신에게 무슨 일이 있었는지 알 수 있게?
b|응. 모호하게 실수가 있었다고만 쓰면 내가 한 일이 없어지니까.
n|준연은 문장 한 줄을 지우고 다시 썼다. 타인의 사적인 이야기는 넣지 않았다.
b|답장 안 온 사람도 있어. 확인했는지 한 번 더 묻고 싶었는데 안 보냈어.
p|정정문은 네가 바로잡는 말이고, 답할지는 상대가 정하는 거니까.
b|알아. 오늘은 그 말 듣고도 내 할 일 마치려고.
m|보낸 대상과 원문은 선생님께 같이 확인받자. 답장 여부는 여기 평가 항목이 아니야.
b|응. 이 칸은 비워 둘게. 억지로 완료 표시 안 할 거야.
n|준연은 펜을 내려놓았다. 내 쪽을 보았지만 대신 사과해 달라고 하지는 않았다.
p|지금 같이 확인할 부분을 말해 줘.
b|마지막 문장. 미안하다는 말 뒤에 변명을 붙이지 않았는지 읽어 줘.
n|나는 문장을 천천히 읽었다. 오늘의 수습은 누구에게 용서받았는지로 끝나지 않았다.`},{title:"둘째 주 · 남의 약속을 지우지 않고",location:"library",text:`n|둘째 주. 새 소규모 전시의 준비 시간이 공용 달력에 적혔다.
m|준연이 정리한 표는 내가 대조했고 선생님도 확인하셨어. 이제 각자 가능한 시간을 직접 말해 줘.
b|나는 목요일이 돼. {name}은?
p|목요일에는 먼저 한 약속이 있어. 금요일은 가능해.
n|준연의 손이 달력 위에서 멈췄다. 잠시 뒤 목요일 칸에는 자기 이름만 적었다.
b|그럼 나는 목요일에 준비하고 금요일에 네가 오는 부분을 같이 확인할게.
p|내 약속을 바꾸라는 말은 안 하는구나.
b|아쉽기는 해. 그렇다고 네 시간을 몰래 고칠 수는 없으니까.
n|준연은 다른 친구의 이름도 원래 정해진 칸에 그대로 두었다.
b|전에 나는 네가 못 온다는 말 뒤에 혼자 다른 뜻을 붙였어.
p|지금은 내가 실제로 말한 날짜를 같이 보면 되겠다.
b|응. 금요일. 그날도 시간이 바뀌면 서로 직접 말하기.
n|우리는 표를 소리 내어 읽었다. 빈칸도 있지만, 누구의 약속을 지워 만든 자리는 없었다.
b|오늘은 내가 할 일 먼저 할게. 금요일에는 진행한 것부터 보여 줄 수 있게.`},{title:"셋째 주 · 한 번만 묻는 점심",location:"cafeteria",text:`n|셋째 주. 점심 종이 울리자 준연이 책상을 정리하고 내 쪽으로 왔다.
b|오늘 같이 먹을 수 있어? 안 되면 다른 날에 한 번 물어볼게.
p|지금은 잠깐 같이 앉을 수 있어. 뒤에는 내가 할 일이 있고.
b|응. 네가 일어날 때 같이 못 간다고 화내지는 않을 거야.
n|준연은 말하고 나서 조금 민망한 얼굴로 웃었다.
b|말만 그렇게 해서 되는 건 아니겠지만. 오늘은 그렇게 해 보려고.
p|요즘 읽는 책은 어디까지 갔어?
b|중간쯤. 결말부터 보려다가 이번에는 순서대로 읽고 있어.
n|식판을 놓고 앉자 준연이 반찬 하나를 가리켰다. 자기 취향 이야기를 먼저 꺼낸 것은 오랜만이었다.
b|네가 전에 이거 좋아한다고 했지? 오늘은 나는 다른 게 좋네.
p|그럼 각자 좋아하는 것부터 먹자.
n|식사가 끝날 무렵 나는 시간을 확인했다. 준연도 내 시선을 따라 시계를 봤다.
b|이제 가야 하지? 나는 여기 좀 더 있다가 도서관 갈 거야.
p|응. 오늘 이야기 들려줘서 고마워.
b|다음에도 물어볼 수는 있겠지. 답이 항상 같지 않아도.`},{title:"넷째 주 · 내가 정한 다음 일정",location:"garden",text:`n|넷째 주. 정정과 역할 조정의 확인을 마친 뒤 준연과 벤치에서 만났다.
b|15시 40분. 이번 시간은 둘 다 확인했지?
p|응. 나는 오늘 4시에 가야 해.
b|알아. 나는 그 뒤에 도서관에 갈 거야. 빌릴 책도 정했어.
n|준연은 한 가지 시간만 적힌 쪽지를 펼쳤다. 그 아래에는 자신의 다음 일정도 있었다.
p|함께 못 가서 아쉬워?
b|아쉽지. 안 아쉬운 척은 못 하겠어.
b|그래도 네가 가는 게 내가 싫다는 뜻은 아니잖아. 모르면 물어보고, 네 대답을 들으려고.
n|준연이 종이를 반으로 접었다. 내 시간을 지우지 않은 채 가방에 넣었다.
p|지난 몇 주 동안 고친 일은 네가 계속 책임질 일이야. 오늘 만남도 우리가 따로 고른 시간이고.
b|응. 누가 날 좋아해 줘야만 잘못을 고치는 건 아니라는 걸, 이제는 행동으로 더 해 볼게.
n|벤치 위에는 두 권의 책이 놓였다. 예전으로 돌아가자는 말은 나오지 않았다.
b|앞으로 어떤 사이로 지낼지도 네 말 듣고 정하고 싶어. 급히 답을 받으려는 건 아니고.
p|나도 생각한 걸 내 말로 할게. 지금까지 함께한 시간과 앞으로 원하는 시간을 나눠서.
n|우리는 다음 이야기를 꺼낼 준비를 했다. 친구로 남는 길도, 조건과 마음이 맞아 새 관계를 고르는 길도 강요할 수는 없었다.`}];function bs(e,t){const s=Math.max(0,Math.min(3,e)),r=xs[s],a=[[["정정문에서 준연의 행동을 명확히 적은 부분을 함께 읽는다.","이 문장은 남길게. 답장을 받으려고 바꾸지는 않을 거야.",5,10],["오늘 정리를 마친 뒤 잠깐 책 이야기를 듣는다.","같이 쉬는 시간이 생겨서 좋지만, 내 할 일은 먼저 마칠게.",8,7],["확인 시각을 지키고 나머지는 교사에게 맡긴다.","응. 네가 끝까지 봐 주지 않아도 내가 확인받을게.",6,9]],[["금요일 약속을 정하고 목요일의 기존 약속도 그대로 둔다.","금요일에 보자. 다른 칸이 있다고 내 칸까지 없어지는 건 아니니까.",7,10],["준연이 목요일에 하고 싶은 자기 일을 묻는다.","책 전시 소개를 쓰려고. 누가 오든 내가 해 보고 싶었던 일이야.",8,8],["둘이 적은 표를 각자 읽어 다시 확인한다.","같은 시간이네. 오늘은 확인하고 나서 다른 뜻을 덧붙이지 않을게.",5,10]],[["점심을 함께 먹고 정한 시간에 일어난다.","응, 다녀와. 나는 남은 반찬 천천히 먹을게. 오늘은 여기까지라서 괜찮아.",7,10],["짧은 만남 동안 준연이 읽는 책 이야기를 듣는다.","이 장면 설명하고 싶었어. 다음에 네가 읽은 부분도 들려줘.",8,8],["다음 점심은 가능한 날을 보고 다시 정하자고 한다.","지금 확정 안 돼도 되는 거지. 그럼 네가 확인한 뒤 다시 이야기하자.",5,10]],[["지금까지 지킨 약속을 말하고 다음 일정도 직접 확인한다.","한 번 잘했다고 끝내지 않을게. 다음에도 실제로 지키는 걸로.",6,10],["두 사람이 좋아하는 책을 잠깐 바꿔 읽는다.","같은 문장을 다르게 읽네. 그 차이도 오늘은 듣고 싶어.",8,8],["오늘 만남을 정한 시간에 마치고 다음 마음은 차분히 말하자고 한다.","응. 대답을 서두르게 만들지는 않을게. 나도 내가 원하는 걸 솔직하게 말하고.",7,9]]];return{id:`repair-${s+1}`,title:r.title,location:r.location,lines:T(r.text,t),choices:a[s].map(([c,l,o,d],h)=>({id:`repair-option-${h+1}`,text:c,response:[{speaker:"junyeon",text:l},{speaker:"narrator",text:"이번 주에 지킨 약속은 이번 주의 행동으로 남았다. 이미 지나간 시간의 호감이 뒤늦게 더해진 것은 아니었다."}],effects:[{person:"junyeon",affection:o,trust:d}],flags:[`repair-memory:${s+1}:${h}`]})),memory:r.title}}function gs(e){return new Set(e.flags.flatMap(t=>{const s=/^junyeon-focus:hangout-junyeon-([1-4])-v[12]$/.exec(t);return s?[s[1]]:[]})).size}const vs={world:`n|네 주 뒤, 카메라를 꺼 둔 밴드실에서 세계가 기타를 내려놓았다.
w|그 후렴 아직 기억해? 네가 첫 관객이었던 날부터 조금씩 바꿨는데.
p|맨 끝에 한 번 더 이어지는 부분은 그대로네.
w|응. 너한테 한 곡 더 들려주고 싶어서 남긴 거니까.
n|세계는 손가락으로 케이스를 두드리다가 멈췄다.
w|노래 끝나도 안 가면 안 돼? 공연 말고도 할 말 있어서.
p|나도 네가 없는 시간을 생각해 봤어. 무슨 일 없을 때도 먼저 찾게 되더라.
w|그 말 들으니까 나만 그런 건 아니라는 생각이 드네.
n|처음처럼 누구도 완벽한 말을 준비하지 못했다. 대신 이번에는 서로를 보며 기다렸다.
w|앞으로도 너랑 만나고 싶어. 네가 어떤 마음인지는 직접 듣고 싶고.`,hyunsol:`n|네 주 뒤, 현솔이 실험대를 정리하고 나와 휴게 공간에 앉았다.
h|계산기 가져왔어? 오늘은 돌려받으려고.
p|응. 다음에는 빌릴 핑계 없어지네.
h|그런 핑계 없어도 왔잖아. 나도 이제 다른 질문 해 보려고.
n|현솔은 내 쪽에 덜 단 차를 놓았다. 내가 좋아하는 정도를 여전히 기억하고 있었다.
h|네가 오는 날을 먼저 보게 됐어. 실험 날짜보다.
p|나도. 질문 답보다 네가 덧붙이는 농담이 궁금했어.
h|그러면 계산기 말고 내가 보고 싶었다는 뜻으로 들어도 되나.
n|현솔은 웃음을 참는 대신 컵을 내려놓고 내 얼굴을 보았다.
h|추측해서 결론 내리지 않을게. 네가 말해 줘.`,taewoo:`n|네 주 뒤, 태우는 무대가 없는 운동장 가장자리에서 나를 기다렸다.
t|오늘은 안 춰. 네가 안 틀려도 되는 날이야.
p|걷다가 박자 틀릴 수도 있는데.
t|그럼 내가 맞춰 주지. 너도 그동안 많이 맞춰 줬잖아.
n|태우가 내 손등을 한 번 보았다. 축제 날 붙였던 표시는 이미 없어졌다.
t|그 자리에 또 와 달라는 말은 아직 유효해. 무대 없어도.
p|응. 나도 공연 끝났다고 네 옆에 설 이유가 없어진 건 아니니까.
t|그러면 이제 친구라는 말 말고 다른 말을 해도 되는지 궁금해.
n|태우는 능숙하게 동작을 보여 줄 때보다 천천히 말했다.
t|나는 너 좋아해. 네 대답은 내가 기다릴 수 있어.`,taehun:`n|네 주 뒤에도 관측 예정일은 흐렸다. 우리는 계획대로 함께 걸었다.
o|별은 안 보이는데 적을 이야기는 많네.
p|노트 이번 페이지도 읽어도 돼?
o|응. 이번에는 네가 고를 문장을 기다리면서 썼어.
n|페이지에는 내가 간식을 고르는 모습과 둘이 우산을 접던 날이 적혀 있었다.
p|하늘보다 우리가 같이 있던 시간이 더 많네.
o|언제부터 그렇게 됐는지 모르겠어. 그냥 네 얘기를 먼저 쓰고 싶어졌어.
p|나는 다음 페이지에도 같이 있고 싶어.
n|태훈은 책갈피를 끼우지 않고 페이지를 열린 채 두었다.
o|그럼 어떤 사이로 다음 문장을 쓸지, 서로 말해 볼까.`,seoyul:`n|네 주 뒤, 서율이 두 사람이 그린 그림을 테이블에 펼쳤다.
s|액자는 아직 안 샀어. 하나 더 그려 보고 싶어서.
p|이번에도 내 자리 남겨 두는 거야?
s|이번에는 네가 먼저 앉아 줘. 빈 의자 안 그리고 시작하려고.
n|나는 의자를 당겨 서율 옆에 앉았다. 종이 위의 선은 서로 달라도 잘 어울렸다.
s|그림 보여 줄 사람이 생긴 줄 알았는데, 같이 그리고 싶은 사람이 된 것 같아.
p|나도 네 그림 보러 온다고 말하면서 네가 먼저 웃는지 봤어.
s|알았어. 너 그림보다 나 먼저 볼 때가 있었거든.
n|서율이 연필을 내려놓았다. 이번 말은 종이에 대신 쓰지 않았다.
s|나는 네가 좋아. 그림을 다 그린 뒤에도 같이 있고 싶어.`,juhan:`n|네 주 뒤, 주한과 나는 함께 만든 게임의 마지막 화면에 도착했다.
j|잠깐. 내일도 같이 할래라는 선택지 나오기 전에 물어볼게.
p|이번에도 화면 가리려고?
j|응. 내 말은 나한테 대답해 줬으면 해서.
n|주한이 조작기를 내려놓았다. 화면에서는 두 캐릭터가 나란히 기다렸다.
j|네가 오면 오류 찾는 것보다 오늘 무슨 얘기할지가 먼저 생각나.
p|나도. 둘 다 떨어져도 다시 하자는 말이 좋았어.
j|그럼 내가 묻는 다음 판은 게임만은 아니라는 걸 알겠지?
n|주한은 말을 빨리하려다가 숨을 골랐다. 나는 기다렸다.
j|나 너 좋아해. 내일도, 별일 없는 날에도 네 옆에 있고 싶어.`,minhyuk:`n|네 주 뒤, 민혁은 작은 일정표 하나만 들고 교문 앞에 서 있었다.
m|오늘은 완장 없어. 공동 업무도 없고.
p|일정표는 있는데?
m|첫 행선지 하나만 적었어. 나머지는 같이 정하려고.
n|종이에는 우리가 전에 말했던 작은 가게의 이름이 적혀 있었다.
p|빈칸이 꽤 많네.
m|너랑 있으면 갑자기 바뀌어도 괜찮을 것 같아서. 나한테는 꽤 큰 변화야.
p|오늘은 반장이 아니라 민혁이 고른 시간이네.
m|응. 그리고 나는 앞으로도 너랑 이런 시간을 보내고 싶어.
n|민혁은 종이를 접고 내 눈을 보았다. 이번에는 다음 지시 대신 내 대답을 기다렸다.`};function ot(e){const t=e.flags.some(h=>h.startsWith("romance:")&&h!=="romance:junyeon"),s=e.verdict==="forgive"&&gs(e)>=2&&e.repairDone&&e.bonds.junyeon.affection>=85&&e.bonds.junyeon.trust>=70&&!t&&(e.focus===null||e.focus==="junyeon"),r=e.focus??(s?"junyeon":null),a=`finale-${r??"friends"}-${e.verdict}`,c=[{speaker:"narrator",text:e.verdict==="exclude"?"준연은 교사 지도 아래 별도의 수습을 이어 갔다. 나는 끝낸 연락을 다시 열지 않고 내가 지킬 다음 약속을 골랐다.":"준연의 수습은 누군가의 호감과 별개로 이어졌다. 친구들은 각자의 속도로 답했고, 나는 내 관계를 내 말로 정하기로 했다."}];if(!r)return{id:a,title:"다음에도 같은 반에서",location:"classroom",lines:[...c,...T(`n|네 주 뒤. 교실 게시판에는 축제 사진 대신 새 시간표가 붙었다.
w|오늘 밴드실 오려면 그냥 와. 꼭 준비할 일이 있어야 하는 건 아니니까.
t|운동장도 열려 있어. 춤 안 춰도 되고.
h|점심은 같이 먹을 거지? 그건 업무 일정 아니야.
j|우리가 만든 게임 엔딩은 아직 남겨 뒀어.
s|다음 포스터는 급하게 안 그려도 되겠다.
o|흐린 날에도 만날 이유는 많네.
m|다들 오늘은 각자 먼저 한 약속부터 확인하자.
p|응. 나도 내가 고를 시간을 남겨 둘게.
n|아직 연인이라고 부르는 사람은 없었다. 하지만 어느 자리에도 갈 수 없던 첫날과는 달랐다.`,e)],choices:[{id:"friends",text:"친구들과 다음 만남을 이어 간다.",response:T(`p|다음에도 같이 웃을 일 만들자.
n|나는 빈 시간표 한 칸에 내가 하고 싶은 일을 먼저 적었다.`,e),flags:["friendship:all"]},{id:"own-time",text:"내 시간을 먼저 정하고 친구들에게 이야기한다.",response:T(`p|오늘은 도서관 갔다가 같이 내려가자.
n|혼자 할 일과 함께할 약속을 같은 하루에 남겼다.`,e),flags:["friendship:all"]}]};if(r==="junyeon"){if(e.verdict==="exclude")return{id:a,title:"비워 둔 자리를 접으며",location:"walk",lines:[...T(`n|준연과 따로 잡던 약속을 끝낸 뒤 네 주가 지났다.
n|마지막으로 받은 종이에는 처음 어긋났던 시간이 바로잡혀 있었다.
b|늦었지만 이건 돌려놔야 하니까. 네가 답하지 않아도 해야 하는 일이었어.
p|받을게. 답장은 약속 못 해.
b|응. 또 기다려 달라는 말은 안 할게.
n|그 대화 뒤로 우리는 개인 연락을 다시 열지 않았다.
teacher|준연은 내 지도 아래 별도의 수습을 하고 있다. 너희가 계속 지켜봐야 할 일은 아니다.
n|누군가가 갑자기 내 연인이 되어 빈자리를 채워 주지도 않았다.
p|내가 좋아했던 시간도, 끝내기로 한 이유도 둘 다 남겨 두자.
n|다음 만남은 서두르지 않고 내가 고를 수 있었다.`,e)],choices:[{id:"close-with-memory",text:"기억은 남겨 두고 관계를 마무리한다.",response:T("n|나는 정정된 종이를 기록 사이에 넣었다. 그 뒤의 시간표는 새로 펼쳤다.",e),flags:["friendship:junyeon","closed:junyeon"]},{id:"look-ahead",text:"다음 학기의 내 시간을 계획한다.",response:T(`p|다음에는 어떤 일을 좋아하는지부터 더 찾아보자.
n|나는 친구들이 기다리는 교실로 돌아갔다.`,e),flags:["friendship:junyeon","closed:junyeon"]}]};const h=s,p=[...c,...T(`n|네 주 뒤. 준연은 한 가지 시간만 적힌 종이와 두 권의 책을 들고 벤치에 먼저 와 있었다.
b|15시 40분. 이번엔 둘 다 같은 거 봤지?
p|응. 나는 오늘 4시에 가야 해.
b|알아. 난 그 뒤에 도서관 갈 거야.
p|같이 못 가서 아쉬워?
b|아쉽지. 그래도 네가 가는 게 내가 싫다는 뜻은 아니잖아.
n|준연은 내 시간을 지우지 않고 종이를 접었다.
b|요즘 같이 이야기할 수 있어서 좋아. 네가 다른 답을 해도 내 수습은 계속할 거고.
p|오늘 어떤 사이로 지낼지 말하는 건 우리가 새로 고르는 일이네.
n|벤치의 두 책 사이에는 손 하나만큼의 거리가 남아 있었다.`,e)];h?p.push({speaker:"junyeon",text:"나 아직 네가 좋아. 용서해 줬으니까 답해 달라는 말은 아니야. 다시 만나면서도 내 마음은 그랬다는 걸 말하고 싶어."}):p.push({speaker:"junyeon",text:"지금은 친구로 천천히 지내고 싶어. 누가 먼저 나를 찾는지만 보지 않고, 내 하루도 내가 만들면서."});const j=[{id:"junyeon-friendship",text:"친구로 천천히 관계를 이어 간다.",response:T(`p|나는 친구로 다시 알아가고 싶어.
b|응. 그 말 그대로 들을게. 다음에는 읽은 책 이야기부터 하자.
n|우리는 손을 잡지 않고 책 한 권씩을 집었다. 우정으로 남는 대답도 완성된 선택이었다.`,e),flags:["friendship:junyeon"]}];return h&&j.unshift({id:"junyeon-romance",text:"나도 다시 만나며 좋아하게 됐다고, 연인으로 시작하고 싶다고 말한다.",response:T(`p|나도 다시 만나면서 생각했어. 오늘뿐 아니라 다음에도 너를 만나고 싶어. 연인으로 천천히 시작하자.
b|응. 나도 그걸 원해. 다음 약속은 같이 정하자.
n|준연이 먼저 손을 내밀었다. 나는 그 손을 잡았다. 내 다음 시간과 준연의 다음 일정은 지우지 않은 채로였다.`,e),flags:["romance:junyeon","mutual:junyeon"]}),{id:a,title:h?"오늘은, 늦지 않았어":"같은 시간의 두 권의 책",location:"garden",lines:p,choices:j}}const l=e.bonds[r].affection>=60&&e.bonds[r].trust>=45;let o=[...c,...T(vs[r],e)];l||(o=o.slice(0,5),o.push({speaker:r,text:"너랑 함께한 시간은 기억해. 아직 우리 마음을 서둘러 다른 이름으로 부르지는 않아도 좋겠어."},{speaker:"player",text:"응. 지금 서로 말할 수 있는 마음부터 들을게."},{speaker:"narrator",text:"함께했던 일이 모두 사라진 것은 아니었다. 우리는 다음을 약속할지, 각자의 시간을 먼저 보낼지 솔직히 이야기했다."}));const d=[{id:"friendship",text:"앞으로도 솔직한 친구로 만나고 싶다고 말한다.",response:[{speaker:"player",text:"나는 네 곁에 친구로 남고 싶어. 우리가 나눈 시간도 소중하고."},{speaker:r,text:"응. 네가 직접 말해 줘서 고마워. 그러면 다음에는 우리답게 만나자."},{speaker:"narrator",text:"상대의 답을 내 마음대로 바꾸지 않았다. 함께 지킬 수 있는 다음 약속을 새로 골랐다."}],flags:[`friendship:${r}`]},{id:"own-path",text:"좋았던 시간을 고맙게 남기고 당분간 각자의 하루를 보낸다.",response:[{speaker:"player",text:"좋았던 시간은 고마워. 지금은 내 하루를 조금 더 정리하고 싶어."},{speaker:r,text:"알겠어. 내 대답을 서두르지 않은 것처럼 네 시간도 내가 정할 수는 없으니까."},{speaker:"narrator",text:"우리는 지난 기억을 지우지 않고 서로의 다른 일정으로 걸어갔다."}],flags:[`friendship:${r}`,`distance:${r}`]}];return l&&d.unshift({id:"romance",text:`나도 ${Ee[r]}를 좋아한다고, 연인으로 만나고 싶다고 말한다.`,response:[{speaker:"player",text:"나도 네가 좋아. 친구라는 말보다 조금 더 가까운 사이로 만나고 싶어. 너도 같은 마음이면."},{speaker:r,text:r==="hyunsol"?"응. 이번에는 추측 안 해도 되겠네. 나도 그 마음이야.":r==="minhyuk"?"나도 같은 마음이야. 다음 시간표는 우리 둘이 같이 쓰자.":"응. 나도 너랑 그렇게 만나고 싶어."},{speaker:"narrator",text:`${Ee[r]}가 내 손 가까이 손을 내밀었다. 나는 천천히 손을 잡았다. 사건의 정답이 아니라 두 사람이 직접 고른 다음이었다.`}],flags:[`romance:${r}`,`mutual:${r}`]}),{id:a,title:`${Ee[r]} · 축제가 끝난 뒤에도`,location:ls[r],lines:o,choices:d}}function At(e,t){const s=`route:${t}:`,r=e.flags.flatMap(b=>{const m=new RegExp(`^memory:hangout-${t}-([1-5]):(followup:)?([0-2])$`).exec(b);if(!m)return[];const g=m[2]?2:1;return e.flags.includes(`read:hangout-${t}-${m[1]}-v${g}`)?on(t,Number(m[1])-1,g,Number(m[3])):[]}),a=[...e.flags,...r],c=a.flatMap(b=>{if(!b.startsWith(s))return[];const m=/^([1-5]):([a-z][a-z-]+)$/.exec(b.slice(s.length));return m?[{chapter:Number(m[1]),key:m[2]}]:[]}),l=[...new Set(c.map(b=>b.chapter))].sort(),o=[...new Set(c.map(b=>b.key))],d=l.some(b=>b<=2),h=l.some(b=>b>=3),p=a.includes(`${s}commitment`),j=e.focus===t&&d&&h&&l.length>=3&&o.length>=3&&p&&e.bonds[t].affection>=64&&e.bonds[t].trust>=60;return{chapters:l,memories:o,committed:p,early:d,late:h,eligible:j}}const ks=(e,t)=>At(e,t).eligible,zt={world:{name:"전세계",place:"band",title:"아무에게도 공개하지 않은 앙코르",friendTitle:"첫 관객의 자리",openTitle:"아직 쓰지 않은 후렴",distanceTitle:"꺼진 카메라 뒤의 인사",promise:"공연 없는 수요일에도 만나기",intro:`n|네 주 뒤, 밴드실 문에는 연습이 끝났다는 종이가 붙어 있었다. 안에서는 튜닝하는 소리가 났다.
c|문 닫힌 줄 알고 그냥 가는지 보려고 했는데. 노크하네.
p|끝났다고 적힌 건 연습이지, 네가 집에 갔다는 건 아니니까.
c|맞아. 오늘은 촬영 안 해. 카메라 앞에서 하는 말이 자꾸 먼저 나올 것 같아서.
n|세계는 휴대전화를 뒤집어 책상 끝에 놓았다. 알림 소리도 껐다.
c|새로 쓴 노래인데 마지막 마디가 없어. 미완성인 거 들려주는 건 아직 좀 싫다.
p|그럼 오늘은 완성시키는 사람이 아니라 들어 주는 사람으로 있을게.
n|세계는 첫 음을 두 번 잘못 짚었다. 세 번째에는 내 쪽을 보지 않고 끝까지 연주했다.
c|오늘은 어느 부분이 좋았어? 그냥 다 좋았다는 답은 다음 기회에.
p|마지막 음 멈추고 네가 숨 쉬는 소리. 더 해야 하나 고민하다가 그냥 멈췄잖아.
c|거기까지 들었네. 예전 같으면 편집해서 지웠을 텐데.
n|세계는 악보를 뒤집었다. 촬영 일정이 아니라 자기 시간이 적힌 달력이 나왔다.
c|이번 주 수요일 비어 있어. 아무 일정도 없는 날을 누군가한테 보여 주는 건 처음이네.`,close:`c|나는 네가 박수 안 치는 날에도 궁금해. 나한테 아무 부탁 안 하는 날도 만나고 싶고.
p|나도 네 새 영상보다 오늘 어떻게 지냈는지 먼저 묻게 됐어.
c|그럼 서로 추측하지 말자. 나는 너를 좋아해. 관객 한 명으로 붙잡고 싶은 게 아니라.
n|세계는 내 대답을 찍지도, 대신 써 주지도 않고 기타 옆에 두 손을 놓았다.`,romance:`p|나도 좋아해. 수요일에 같이 걷자. 그리고 다른 날에는 각자 하고 싶은 일도 하고.
c|매일 나만 보겠다는 말 안 해서 오히려 좋네. 내가 그 말 듣고 싶어질 때도 있겠지만.
p|그럴 때는 직접 말해 줘. 내가 못 만나는 날에도 마음을 시험하지는 말고.
c|응. 오늘은 만나고 싶다고 말할 수 있어. 조금만 더 여기 있자.
n|나는 손을 내밀었다. 세계는 기타를 안전하게 내려놓고 그 손을 잡았다.
c|이거 사진 안 찍어도 괜찮지?
p|나도 지금은 화면 볼 손이 없는데.
n|세계가 웃었다. 악보의 마지막 마디는 여전히 비어 있었지만, 더는 급하게 채우지 않았다.
n|다음 수요일, 세계는 교문 앞에 기타 없이 왔다. 나는 공연 후기를 준비하지 않았다.
c|오늘 아무것도 안 부르면 심심하려나?
p|내가 길을 잘못 찾아서 할 얘기는 생길 것 같아.
c|좋아. 그건 편집하지 말고 처음부터 들려줘.
n|우리는 한 번 엇갈린 손을 다시 맞잡았다. 둘만 아는 앙코르는 노래가 아닌 평범한 하루로 이어졌다.`,friend:`p|네 노래도 너도 소중해. 나는 네 곁에 오래 남을 친구가 되고 싶어.
c|연인 말고. 응, 알겠어. 지금 바로 아무렇지도 않은 척은 못 하겠다.
p|다음 연습은 네가 편해질 때 불러 줘.
c|그걸 무조건 기다리겠다고 약속하진 마. 너도 네 일정은 있어야지.
n|우리는 같은 달력을 보며 다음 주 한 칸만 정했다. 모호한 기대를 빈칸에 적지는 않았다.
n|일주일 뒤 세계는 새 후렴을 반 친구들에게도 들려주었다.
c|첫 관객이 여기 있으니까 조금 덜 떨리네. 틀려도 바로 편집하라고 하지 마.
p|이번에는 끝까지 듣고 말할게.
n|나는 친구들 사이에 앉아 박수를 쳤다. 가장 가까운 자리를 차지하지 않아도, 내 자리는 남아 있었다.`,wait:`p|너를 더 알고 싶어. 하지만 내가 지금 느끼는 걸 멋있는 말로 먼저 정하고 싶진 않아.
c|나도 네가 왜 왔는지 자꾸 혼자 결론 냈던 것 같아.
p|그럼 오늘은 네가 들려주고 싶은 한 곡까지만 듣자.
c|다음 수요일 약속은 지금 잡을까, 생각하고 말할까?
p|내 시간표 보고 내가 먼저 물어볼게. 네가 비워 둘 필요는 없어.
n|세계는 수요일에 작게 찍어 둔 물음표를 지웠다. 불쾌해서가 아니라 빈 시간을 돌려놓는 손길이었다.
c|응. 다음에는 완성한 노래 가져올게. 네 대답을 가사로 대신 쓰진 않고.
n|밴드실 불을 끄며 우리는 다음을 확정하지 않았다. 한 곡이 미완성인 채로 남아도, 오늘 들은 소리까지 사라지는 것은 아니었다.`,distance:`p|네가 어떤 대답을 기다리는지 알면서 계속 어정쩡하게 있고 싶지는 않아. 나는 당분간 내 시간을 보내려고.
c|응. 이유 찾으려고 네 마지막 접속 시간 보지는 않을게.
p|고마워. 오늘 들려준 건 밖에서 얘기하지 않을게.
c|그건 부탁하고 싶었어. 아직 내 노래니까.
n|세계는 악보를 자기 이름이 적힌 파일에 넣었다. 나는 빌린 의자를 원래 자리로 옮겼다.
n|며칠 뒤 복도에서 세계를 만났다. 서로 짧게 인사했고, 세계는 서율과 연습실로 갔다.
n|내가 없는 곳에서도 노래는 이어졌다. 우리는 그 사실을 상처의 증거로 바꾸지 않았다.`,afterword:["세계는 촬영 없는 약속을 달력에 직접 적었다.","서로의 빈 시간을 모두 차지하지 않아도 이어지는 관계가 되었다."]},hyunsol:{name:"최현솔",place:"garden",title:"오차 범위 밖의 좋아해",friendTitle:"답을 보여 주는 사이",openTitle:"결론을 서두르지 않는 오후",distanceTitle:"돌려준 계산기",promise:"실험이 없는 날에도 같이 차 마시기",intro:`n|현솔에게 계산기를 돌려주러 갔더니 실험실 문이 잠겨 있었다. 대신 중정 벤치에서 손을 들었다.
c|오늘은 쉬는 날. 빌린 물건 반납은 여기서도 할 수 있잖아.
p|계산기 하나 돌려주는데 컵은 두 개네.
c|하나는 너무 달아. 어느 쪽인지 먼저 말하면 네 반응 못 보니까 안 알려 줄 거야.
n|나는 한 모금 마시고 얼굴을 찡그렸다. 현솔이 자기 컵을 반쯤 들어 보였다.
c|나도 헷갈렸네. 설탕 안 넣은 게 내 쪽이었어.
p|오늘은 완벽한 실험 계획이 아니구나.
c|쉬러 와서까지 통제 변인을 정할 필요는 없지.
n|현솔은 계산기를 가방에 넣었지만 자리에서 일어나지 않았다.
c|이제 빌릴 핑계 없어졌어. 다음에 무슨 이유로 올 건데?
p|네가 농담하고 나서 내가 알아들었는지 보는 얼굴이 궁금해서.
c|그런 관찰 결과는 처음 듣네. 기록은 하지 마.
n|현솔은 입가를 가리던 컵을 내려놓았다. 이번에는 내가 제대로 보고 있는지 피하지 않았다.`,close:`c|내가 먼저 너를 찾는 이유도 이제 핑계로 설명하기 어렵겠어.
p|계산기 확인하러 온 적은 별로 없었지.
c|응. 네가 좋아. 이건 예측도 아니고, 측정값에 적당한 이름 붙인 것도 아니야.
n|현솔은 대답을 재촉하는 대신 벤치에 놓인 가방을 옆으로 조금 밀었다.`,romance:`p|나도 네가 좋아. 앞으로 연인으로 만나고 싶어.
c|응. 이제 추론 그만해도 되겠네. 직접 들으니까 편하다.
p|그럼 이번에는 컵 안 헷갈리게 알려 줘. 동그라미가 어느 쪽이야?
c|동그라미가 조금 더 달아. 바꿔 마셔 볼래? 네가 좋다는 쪽 나도 기억해 두게.
n|현솔이 동그라미가 그려진 컵을 내밀었다. 나는 손을 뻗으며 마주 웃었다.
c|오늘은 네 마음도 컵 표시처럼 확실히 들었네. 사실 조금 긴장했어.
p|앞으로 헷갈리면 직접 물어봐. 나도 대답을 추측하게 두지는 않을게.
n|현솔은 턱을 괸 채 내 대답을 들었다. 두 컵의 동그라미와 세모 사이로 작은 웃음이 오갔다.
n|다음 주 점심, 현솔은 실험 계획표 대신 작은 가게의 메뉴 사진을 보여 주었다.
c|토요일에는 네가 고를래? 내가 네 취향 다 안다고 생각했는데 더 물어볼 게 있더라.
p|둘이 다른 걸 골라도 반씩 바꿔 먹으면 되지.
c|그건 마음에 드는 계획이네. 이번에는 너무 단 건 네 쪽에만 몰아주지 않을게.
n|서로를 알아 간다는 것은 정답을 맞힌 뒤 끝나는 일이 아니었다. 현솔은 다음 질문을 즐거운 얼굴로 꺼냈다.`,friend:`p|너와 웃으면서 이야기하는 게 좋아. 내가 바라는 건 친구로 그 시간을 이어 가는 거야.
c|확실히 말해 줘서 고마워. 나도 그 말 이상으로 해석하지 않을게.
p|오늘 차 마신 것까지 어색한 실험으로 남지는 않았으면 해.
c|그건 실패라고 적을 이유가 없지. 달기는 좀 했지만.
n|현솔은 자기 컵을 내 컵 옆에 나란히 놓았다. 손은 잡지 않았다.
n|다음 실험 날 우리는 같은 조가 아닌 책상에 앉았다.
c|끝나고 결과 비교하자. 틀린 줄은 지우지 말고 가져와.
p|그 대신 오늘 급식 메뉴는 네가 알려 줘.
n|현솔은 웃으며 고개를 끄덕였다. 연인이 되지 않아도 틀린 답을 보여 줄 수 있는 친구는 남았다.`,wait:`p|네가 궁금한데, 같이 보낸 날보다 내가 혼자 상상한 게 더 많았던 것 같아.
c|나도 아직 네가 말하지 않은 부분을 많이 채워 넣었어.
p|그러면 다음에는 정답 같은 대답 말고, 서로 좋아하는 얘기부터 하자.
c|좋아. 다만 결론이 정해져 있는 실험처럼 기다리지는 않을 거야.
n|나는 고개를 끄덕였다. 현솔은 빈 컵 두 개를 한쪽에 모아 정리했다.
c|계산기는 제대로 받았고. 다음에 올 때는 빈손으로 와도 돼.
p|그때도 괜찮은지 먼저 물어볼게.
n|우리는 대답 대신 날짜를 억지로 적지 않았다. 아직 모르는 마음은 모르는 상태로 두기로 했다.`,distance:`p|오늘은 계산기를 돌려주고 가려고. 네가 기대하는 다음을 약속할 자신은 없어.
c|응. 물건을 핑계로 계속 미루는 것보다는 그게 낫겠다.
n|현솔은 계산기의 전원을 한 번 켰다가 껐다. 필요한 확인은 그것으로 끝났다.
p|그동안 같이 한 실험은 즐거웠어.
c|나도. 즐거웠다는 사실까지 지울 필요는 없지.
n|현솔은 남은 차를 천천히 마셨고 나는 먼저 교문으로 걸어갔다.
n|다음 실험 기록에는 두 사람의 이름이 각자의 역할 옆에 적혔다. 그 밖의 관계를 증명하는 문장은 없었다.`,afterword:["계산기를 빌릴 이유가 없어져도 만남은 끝나지 않았다.","현솔은 다 안다는 말 대신 다음 질문을 남겼다."]},taewoo:{name:"김태우",place:"dance",title:"무대 없는 날의 첫 카운트",friendTitle:"서로 다른 파트의 친구",openTitle:"아직 맞추는 중인 박자",distanceTitle:"마지막 곡이 끝난 자리",promise:"잘하는 모습이 아닌 평범한 모습도 만나기",intro:`n|댄스실 음악이 끝났는데 태우는 시작 버튼을 다시 누르지 않았다. 손에는 남은 리본 두 조각이 들려 있었다.
c|공연 때 의상에 달았던 거야. 버리기 아까워서 잘랐는데 두 개가 됐네.
p|처음부터 똑같은 길이로 잘랐는데?
c|관찰력 좋네. 오늘 칭찬은 거기까지만 해.
n|태우는 바닥에 앉아 운동화 끈을 느슨하게 풀었다. 나도 옆에 조금 거리를 두고 앉았다.
c|너 처음 왔을 때는 내가 잘하는 거 보여 주려고 계속 어려운 동작 했어.
p|그래서 내가 박자 놓치면 네가 더 크게 세어 줬구나.
c|너 기다리는 척 내가 덜 떨리는 시간도 벌었지.
n|태우는 리본을 손목에 대 보다가 내려놓았다.
c|요즘은 네 앞에서 틀려도 바로 다시 춤추고 싶지는 않아. 그냥 같이 웃고 싶어.
p|오늘도 음악 안 틀어도 돼. 쉬는 태우 보러 온 거니까.
c|그런 말 들으면 오히려 어디를 봐야 할지 모르겠네.
n|태우는 거울 대신 내 얼굴을 보았다. 점수를 확인하는 눈빛은 아니었다.`,close:`c|이제 누가 먼저 좋아하게 하나 같은 내기는 안 하려고.
p|그럼 오늘 이긴 사람은 없는 거야?
c|내 마음을 말하면 충분해. 나 너 좋아해. 박자 못 맞추는 날까지.
n|태우는 리본 하나를 내 쪽에 놓고 기다렸다. 손목을 잡아 끌지는 않았다.`,romance:`p|나도 좋아해. 네 옆에 서고 싶어. 무대가 없는 날에도.
c|그러면 이거 묶어 줘도 돼? 너무 유치하면 지금 말해.
p|네 쪽은 내가 먼저 묶을게. 그다음에 내 쪽은 네가.
n|태우는 내 손목을 받쳐 들고 작은 매듭을 만들었다. 길이를 맞추는 손끝이 안무보다 조심스러웠다.
c|조이면 바로 말해. 예쁘게 보이는 것보다 네가 편해야 하니까.
p|괜찮아. 네 쪽에 내가 묶은 것도 너무 조이지 않아?
n|서투른 내 매듭을 보고 태우가 웃었다. 자기 손목에도 같은 리본이 묶여 있다는 게 좋은 듯했다.
c|오늘은 네가 먼저 걸어. 속도는 내가 맞출게.
n|주말에는 운동장 바깥 길을 걸었다. 태우는 연습복 대신 가벼운 겉옷을 입었다.
p|오늘은 춤 안 춰도 정말 괜찮아?
c|응. 대신 네가 웃긴 얘기 하나 해. 나도 잘 듣는 거 연습해야지.
n|태우는 내 말에 크게 웃다가 발걸음을 늦췄다. 나는 그 옆으로 한 걸음 다가갔다.
n|같은 박자는 누가 앞서는지 정하는 것이 아니었다. 서로를 기다리며 다시 시작하는 리듬이었다.`,friend:`p|나는 네가 힘 빼고 웃을 수 있는 친구로 남고 싶어.
c|아쉽긴 해. 그래도 친구라는 말이 위로용은 아니었으면 좋겠어.
p|그냥 하는 말 아니야. 네 연습도, 쉬는 시간도 같이 즐거웠어.
n|태우는 리본 두 개를 운동화 끈 옆에 내려놓고 물병을 건넸다.
c|알았어. 그러면 다음 응원은 다른 친구들 앞에서도 크게 해.
n|다음 발표 때 나는 객석 가운데 친구들과 앉았다. 태우가 멀리서 장난스럽게 엄지를 들었다.
p|이번에는 네 마지막 카운트 안 놓쳤다!
c|봤어. 친구 응원 실력은 합격.
n|무대와 객석 사이의 거리는 그대로였지만, 인사만큼은 망설이지 않았다.`,wait:`p|네가 웃으면 나도 기분이 좋아. 그런데 그 마음을 아직 다른 말로 정확히 못 하겠어.
c|그럼 내가 결승선 먼저 그어 놓고 뛰라고 할 수는 없지.
p|기다려 달라고 하려는 건 아니야. 같이 있을 때의 나도 좀 더 알고 싶어.
c|응. 다음에 만날 때 괜히 연인인 척하지는 말자. 더 헷갈리니까.
n|태우는 내 앞에 둔 리본을 돌돌 말아 주머니에 넣었다.
c|오늘 마지막 곡은 같이 스트레칭하는 걸로 끝낼까?
p|그건 지금 정할 수 있어.
n|우리는 각자 매트 위에서 몸을 풀었다. 아직 다른 박자를 억지로 하나로 만들지 않은 채였다.`,distance:`p|계속 응원하러 온다고 말했는데, 내 마음은 그 약속을 따라가지 못했던 것 같아.
c|그래서 오늘은 인사하러 온 거구나.
p|응. 애매하게 약속만 늘리고 싶지는 않아.
n|태우는 잠시 바닥을 보다가 고개를 들었다.
c|내가 잘 추면 마음 바꿀 거냐는 질문은 안 할게. 춤은 내가 좋아해서 계속할 거고.
p|그건 멀리서도 응원할게.
n|태우는 음악을 한 곡 골랐다. 나는 문을 닫고 나왔다. 이번 마지막 카운트는 각자 다른 곳에서 셌다.`,afterword:["공연의 리본은 서로의 손목에 작은 약속으로 남았다.","태우는 멋있게 이기는 법 대신 함께 쉬는 법을 배웠다."]},taehun:{name:"고태훈",place:"roof",title:"흐린 밤에도 함께 쓰는 페이지",friendTitle:"서로 다른 책갈피",openTitle:"별을 기다리는 문장",distanceTitle:"돌려준 한 권의 노트",promise:"하늘이 흐려도 만날 이유를 함께 만들기",intro:`n|예보보다 구름이 조금 걷혔지만 하늘은 아직 얼룩져 있었다. 태훈은 옥상 쉼터에 담요와 노트만 가져왔다.
c|오늘은 망원경 안 빌렸어. 구름이 계속 지나가니까 정식 관측은 다른 날 하려고.
p|그럼 관측 취소?
c|별 관측은. 네 표정 관측은 계속할 수 있지.
n|태훈은 말한 뒤 자기 농담이 조금 부끄러운지 노트 모서리를 만졌다.
p|이번 페이지 읽어도 돼?
c|이번 건 내 일기라서 조금 골라서 보여 줄게. 여기부터.
n|구름의 이동 방향 옆에 급식실에서 함께 웃었던 일이 적혀 있었다. 그 아래에는 둘이 말없이 걸은 날도 있었다.
p|하늘 상태보다 우리 얘기가 길어졌네.
c|사실은 하늘부터 쓰면 사람 얘기 꺼내기 덜 부끄러워서.
n|태훈은 빈 페이지 한 장을 폈다. 관측 수치를 적는 칸도, 미리 정한 제목도 없었다.
c|오늘은 첫 문장을 네가 말해 줄래? 마음에 안 들면 나도 의견 낼 거야.
p|그럼 작가 둘이 같이 쓰는 페이지네.`,close:`c|나는 네가 좋아. 네가 내 문장을 예쁘다고 말해 줘서만은 아니야.
p|다른 생각을 말해도 끝까지 들어 줬지.
c|응. 내가 상상한 사람이 아니라 옆에서 자기 말을 하는 네가 좋아졌어.
n|태훈은 노트를 내 쪽에만 넘기지 않고 둘 사이에 놓았다.`,romance:`p|나도 태훈이 좋아. 다음 페이지에는 연인으로 같이 있고 싶어.
c|그 단어를 내가 먼저 쓰면 네 마음까지 정하는 것 같아서 아껴 뒀어.
p|이번엔 둘이 같이 골랐잖아.
n|태훈은 펜을 내려놓고 손을 내밀었다. 나는 담요 위에서 그 손을 잡았다.
c|구름 사이로 별이 조금 보이네. 오래 보기는 어렵겠지만.
p|그러면 첫 문장에는 잠깐 보여서 더 반가웠다고 쓰자. 아쉬웠던 것도 같이.
c|그리고도 좋은 밤이었다고. 그다음 문장은 내가 쓸래.
n|노트에는 별자리 선 대신 두 사람이 번갈아 쓴 짧은 문장이 늘어났다.
n|다음 관측일, 태훈은 일기와 과학 기록장을 따로 들고 왔다.
c|관측값은 공동 기록에, 네가 추워서 코 빨개진 건 내 허락받은 메모에.
p|그 메모는 내가 검토해도 돼?
c|응. 네 문장도 한 줄 필요하고.
n|나는 태훈에게 가까이 앉았다. 함께 본 하늘보다 함께 고른 문장이 오래 남을 것 같았다.`,friend:`p|나는 네 이야기를 읽는 친구로 오래 남고 싶어. 다른 의미를 기대하게 하고 싶지는 않아.
c|응. 그러면 이 노트도 고백 대신 읽어 달라고 줄 수 있겠다.
p|대신 싫은 문장은 솔직히 말해도 되지?
c|당연하지. 좋다고만 하면 다음 문장을 못 고치잖아.
n|우리는 손을 잡는 대신 각자 책갈피를 골랐다. 같은 페이지에서도 표시한 문장은 달랐다.
n|며칠 뒤 태훈은 새 시를 문예 게시판에 붙였다.
c|네가 고치자고 한 한 줄, 이번에는 남겼어. 나는 그 부분이 좋더라.
p|그럼 왜 남겼는지 들려줘.
n|의견이 달라도 이어지는 대화가 생겼다. 그것도 우리가 함께 쓴 한 가지 결말이었다.`,wait:`p|이 페이지에 내가 어떤 이름으로 남고 싶은지 아직 모르겠어.
c|그러면 빈칸을 먼저 채우지는 말자. 이름 붙이면 그 말대로 해야 할 것 같으니까.
p|다음에 만나도 같은 질문부터 하지는 않았으면 해.
c|응. 그날 읽은 책 얘기부터 할 수 있지.
n|태훈은 빈 페이지에 오늘의 날짜만 적었다. 나를 기다린다는 문장은 붙이지 않았다.
c|비 오기 전에 내려가자. 오늘 보여 준 일기는 여기까지.
p|고마워. 나머지는 네가 보여 주고 싶을 때.
n|우리는 노트를 닫고 계단을 내려갔다. 읽지 않은 페이지가 있다는 사실을 미완성의 잘못으로 생각하지 않았다.`,distance:`p|빌린 노트 돌려줄게. 다음 페이지까지 같이 쓰겠다는 약속은 못 하겠어.
c|응. 노트가 대답을 대신해 주지는 않으니까.
n|태훈은 내가 끼운 책갈피를 빼서 내게 돌려주었다.
c|네가 좋아했던 문장은 기억할게. 그렇다고 앞으로도 네 취향대로 쓰지는 않을 거고.
p|그게 태훈의 글이지.
n|옥상에서 내려가기 전 우리는 구름 낀 하늘을 한 번 더 보았다.
n|그 뒤의 관측 기록에는 태훈의 글씨만 이어졌다. 내가 읽지 않아도 이야기는 계속될 수 있었다.`,afterword:["잠깐 보인 별보다 두 사람이 함께 쓴 문장이 오래 남았다.","관측 일정이 취소되어도 만남의 이유는 사라지지 않았다."]},seoyul:{name:"이서율",place:"art",title:"너와 나를 같은 종이에",friendTitle:"나란히 걸린 두 그림",openTitle:"지우지 않은 밑그림",distanceTitle:"돌려놓은 빈 의자",promise:"서로의 선을 덮지 않고 같은 그림 그리기",intro:`n|서율이 미술실 문을 발로 조금 열어 주었다. 양손에는 말리지 않은 그림이 들려 있었다.
c|문만 잡아. 그림 잡으면 오늘 손 씻는 데 십 분 추가야.
p|오늘은 뭘 그렸는데?
c|빈 의자. 자꾸 사람이 앉는 것보다 그리기 쉬워서.
n|서율은 그림을 세워 두고 진짜 의자를 내 쪽으로 당겼다.
c|그런데 의자만 계속 그리니까 내가 뭘 기다리는지 너무 티 나더라.
p|그럼 오늘은 앉아도 돼?
c|응. 자세 잡으라는 말은 안 할게. 네가 편한 쪽으로.
n|책상에는 새 종이 한 장과 서로 다른 색연필 두 자루가 있었다.
p|오늘은 네가 먼저 그리지 않네.
c|내가 다 정해 놓으면 네 자리가 남은 칸이 되니까. 이번에는 처음부터 같이 해 보려고.
n|나는 종이의 한쪽에 작은 선을 그었다. 서율은 그 선을 지우지 않고 옆으로 이어 그렸다.
c|이상하네. 혼자 그릴 때보다 비뚤어진 데가 많은데 자꾸 마음에 들어.`,close:`c|나는 너를 좋아해. 내 그림 속에 넣기 좋은 사람이라서가 아니라, 밖에서도 계속 보고 싶어.
p|나도 그림 구경한다면서 네 표정을 먼저 봤어.
c|알았어. 이제는 모른 척 안 할래. 네가 같은 마음인지는 네 말로 듣고 싶어.
n|서율은 연필을 내려놓았다. 내 대답을 대신 그릴 생각은 없어 보였다.`,romance:`p|나도 서율이 좋아. 우리 둘이 같은 쪽에 앉는 사이가 되고 싶어.
c|그럼 오늘 그린 선부터 끝까지 같이 책임져. 멋없어져도 내 탓만 하지 말고.
p|내가 그린 파도가 제일 비뚤어진 건 인정할게.
n|서율이 웃으며 노란 별을 하나 더 그렸다. 나는 그 아래에 푸른 파도를 이어 그렸다.
c|손 여기 잠깐 둬 봐. 그림자 모양이 예쁘다.
p|손 그림 말고 손을 잡고 싶은 건 아니고?
c|둘 다. 일단 이 별 끝까지 그리고. 지금 손 놓으면 네 파도에 빠질 것 같거든.
n|나는 서율의 별 아래에 파도 한 줄을 더 그렸다. 그림을 마친 다음에도 함께 있고 싶은 마음은 서로 알고 있었다.
n|다음 주에는 둘이 그린 종이를 책상 위에 다시 펼쳤다.
c|제목은 내가 정하고 싶은데, 「처음부터 두 사람」 어때?
p|공동 작가 이름은 같은 크기로 써 줘.
c|당연하지. 네가 그린 비뚤어진 파도도 그대로 둘 거야.
n|서율은 자기 이름 옆에 내 이름을 적었다. 둘 중 누구도 다른 사람의 선을 덮어 완성하지 않았다.`,friend:`p|나는 네 그림 앞에서 솔직하게 얘기하는 친구로 남고 싶어.
c|응. 그럼 오늘 그림에도 괜히 연인처럼 보이는 제목은 안 붙일게.
p|친구 둘이 그린 그림도 괜찮잖아.
c|괜찮지. 그렇다고 아쉽지 않은 척까지 잘 그려지진 않네.
n|서율은 잠시 창밖을 보다가 새 종이를 한 장 더 꺼냈다.
c|이번에는 각자 그려 보자. 서로 참고는 해도 베끼지 말고.
n|며칠 뒤 게시판에 두 그림이 나란히 걸렸다. 비슷한 창문인데 색과 모양은 달랐다.
p|네 쪽 하늘이 더 밝다.
c|네 쪽은 구름이 웃기네. 그건 다음에 나도 좀 참고할래.
n|같은 그림이 되지 않아도 서로 곁에 걸릴 수 있었다.`,wait:`p|내가 네 그림에 어떤 사람으로 들어가고 싶은지 아직 선명하지 않아.
c|그러면 선을 진하게 누르지는 말자. 나중에 지우기 힘들게.
p|오늘 같이 그린 것까지 지워야 하는 건 아니지?
c|그건 싫어. 오늘은 진짜 즐거웠으니까 밑그림으로 남길래.
n|서율은 종이 위에 얇은 덮개를 씌웠다. 완성 날짜는 쓰지 않았다.
c|다음에 이 그림을 다시 꺼낼지는 둘 다 생각해 보자. 새 종이를 골라도 되고.
p|응. 네가 혼자 완성해도 되는 그림이기도 하고.
n|의자를 밀어 넣으며 나는 처음보다 조심스럽게 그림 가장자리를 잡았다. 아직 모르는 마음까지 아름답게 꾸미지는 않았다.`,distance:`p|오늘은 오래 못 있을 것 같아. 앞으로도 같은 약속을 잡기는 어려울 것 같고.
c|그럼 의자 비워 두고 기다리라는 말은 아닌 거네.
p|응. 늦게 말해서 미안해.
n|서율은 내 앞의 연필을 통에 돌려놓았다.
c|그림은 내가 마저 그릴게. 네가 그은 선은 남겨도 될까?
p|네가 남기고 싶으면.
n|서율은 의자를 원래 자리로 옮겼다. 빈 의자는 더 이상 누군가의 답을 기다리는 표시가 아니었다.`,afterword:["완성작에는 같은 크기의 두 이름이 적혔다.","서율은 상대를 그리는 사람에서 함께 그리는 사람이 되었다."]},juhan:{name:"이주한",place:"computer",title:"저장하지 않은 다음 판",friendTitle:"같은 편의 두 커서",openTitle:"대답을 기다리는 화면",distanceTitle:"각자의 새 프로젝트",promise:"화면 밖의 질문에는 서로 직접 답하기",intro:`n|컴퓨터실 구석의 게임 화면에는 두 캐릭터가 출구 앞에 서 있었다. 주한은 마지막 조작기를 내 쪽으로 밀었다.
c|이번에는 정답 미리 안 알려 줄게. 같이 움직여야 문이 열려.
p|한 명이 먼저 가면?
c|문 안 열려. 그런데 그냥 기다리라고 써 놓지는 않았어. 서로 말하게 하려고.
n|우리는 두 번 실패하고 세 번째에 타이밍을 맞췄다. 마지막 화면에서 두 캐릭터는 작은 섬 위에 나란히 섰다.
p|축하 문구는 없네.
c|일단 앉아서 쉬어도 된다는 뜻이야. 계속 뭔가 달성하라고 하고 싶지는 않아서.
n|주한은 조작기를 내려놓고 모니터를 조금 옆으로 돌렸다.
c|지금부터 하는 말은 얼터에고에 안 넣었어. 내가 직접 해야 할 것 같아서.
p|버그 나면 다시 말해도 돼.
c|그 농담은 좋다. 나 지금 다음 문장 세 가지 정도 고르다가 멈췄거든.
n|주한은 웃고 나서 숨을 한 번 골랐다. 나는 화면의 선택지 대신 주한을 보았다.
c|네가 찾아오는 날에는 프로그램 켜기 전에 문 쪽부터 보게 됐어.`,close:`c|나 너 좋아해. 같이 문제를 잘 풀어서만 그런 건 아니야. 아무것도 못 끝낸 날에도 네가 오면 좋았어.
p|나도 마지막 스테이지보다 주한이 무슨 얘기를 할지 더 궁금했어.
c|그러면 지금 대답은 나한테 해 줘. 자동 저장도, 추천 문장도 없이.
n|주한은 손을 무릎 위에 가지런히 놓았다가, 조금 편하게 풀었다.`,romance:`p|나도 주한이 좋아. 다음 판은 연인으로 같이 시작하고 싶어.
c|잠깐, 이번에는 저장 버튼 누르면 안 되는 순간이지?
p|응. 대신 내일도 같은 말 할 수 있어.
n|주한은 웃으며 조작기를 멀리 밀었다. 내가 내민 손 위에 자기 손을 조심스럽게 올렸다.
c|손 잡는 건 연습 모드 없어서 좀 서툴러도 괜찮아?
p|나도 처음에는 같은 버튼 두 번 누를 것 같은데.
n|주한의 손에 힘이 조금 풀렸다. 화면에서는 두 캐릭터가 조용히 같은 섬 위에 서 있었다.
c|내일은 컴퓨터 말고 밖에서 만나자. 나도 말하면서 걷는 속도 맞춰 볼래.
n|다음 날 도서관 가는 길에 주한이 먼저 내 손을 찾았다.
c|아까 하고 싶던 말 생각났어. 어제만 좋아한 건 아니라고.
p|오늘 업데이트 내용이구나.
c|아니. 그냥 오늘 내가 직접 하는 말.
n|우리는 웃으며 걸었다. 되돌리기 버튼이 없어도, 잘못 말하면 다시 설명할 수 있는 사이가 되었다.`,friend:`p|나는 주한이랑 같은 편인 친구로 계속 만나고 싶어.
c|알겠어. 그러면 대답을 예쁜 문장으로 바꿔서 저장하지 않을게.
p|오늘 같이 끝낸 게임은 그대로 즐거웠어.
c|나도. 다음 프로젝트 같이 하자는 말이 고백의 다른 표현은 아니어도 되겠네.
n|주한은 화면을 다시 가운데로 돌리고 게임 제작자 이름 옆에 테스트 도우미 이름을 적었다.
c|네 이름, 이 크기 괜찮아?
p|같이 테스트한 친구들도 넣어 줘.
n|새 프로젝트에는 여러 개의 커서가 생겼다. 주한은 나를 찾을 때에도 다른 사람들의 자리를 지우지 않았다.
c|다음에는 네 아이디어부터 만들어 보자.
n|나는 조작기를 집었다. 같은 편이라는 말은 연인이 아니라는 뜻만으로 설명되지 않았다.`,wait:`p|주한이랑 더 만나고 싶지만 지금 내 마음을 확정해서 말할 자신은 없어.
c|그러면 답변 대기 화면처럼 계속 멈춰 있지는 말자. 나도 하고 싶은 일이 있으니까.
p|응. 기다려 달라는 뜻으로 말한 건 아니야.
n|주한은 모니터의 엔딩 화면을 닫았다. 미완료 표시를 남기지는 않았다.
c|오늘 게임은 끝냈어. 관계까지 같이 완료되어야 하는 건 아니잖아.
p|다음에 볼 때는 새 아이디어 얘기부터 해 줘.
c|그건 좋아. 내일까지 생각해 볼 게 많네.
n|컴퓨터실 불을 끄며 우리는 각자 가방을 들었다. 저장되지 않은 대답을 오류로 처리하지는 않았다.`,distance:`p|계속 다음 판을 약속했는데, 당분간은 같이하기 어려울 것 같아.
c|알겠어. 기다리는 사람 자리 하나를 계속 비워 놓지는 않을게.
p|내가 없는 프로젝트도 끝까지 만들어 줘.
c|그건 내가 하고 싶어서 시작한 거니까 할 거야. 네 허락이 필요한 일도 아니고.
n|주한은 테스트 목록에서 내 다음 주 이름만 지웠다. 이미 한 일의 이름은 남겼다.
p|그동안 같이해서 즐거웠어.
n|우리는 각자 새 파일을 열었다. 같은 편이었던 시간은 남았지만 다음 프로젝트의 제목은 서로 달랐다.`,afterword:["주한은 중요한 대답을 프로그램에 맡기지 않았다.","두 사람의 다음 약속은 화면 밖에서 직접 오갔다."]},minhyuk:{name:"황민혁",place:"gate",title:"완장을 벗은 다음 일정",friendTitle:"반장 말고 내 친구",openTitle:"비워 둔 토요일",distanceTitle:"각자의 하교 시간",promise:"역할이나 의무가 아닌 민혁의 시간을 함께 보내기",intro:`n|교문 앞 민혁의 가방에는 완장이 반듯하게 접혀 있었다. 손에는 작은 일정표가 들려 있었다.
p|오늘도 반장 업무야?
c|아니. 그 질문부터 예상해서 완장은 넣었어. 오늘은 내가 먼저 만나자고 한 거야.
n|민혁이 펼친 종이에는 출발 시각 하나만 적혀 있었다. 목적지는 연필로 적었다 지운 흔적뿐이었다.
p|계획표가 많이 비었네.
c|내가 가고 싶은 곳을 적으려니까 다들 편한 곳부터 생각나더라. 두 명인데도.
p|오늘은 내 의견 잠깐 빼고 말해 봐.
c|작은 디저트 가게. 사진은 여러 번 봤는데 혼자 가기는 조금 망설여져서.
p|좋다. 뭘 먹고 싶은데?
c|제일 작은 케이크 말고, 내가 제일 궁금한 걸 고르고 싶어.
n|민혁은 말하고 나서 의외라는 듯 자기 일정표를 보았다.
c|나한테 원하는 걸 물어보는 일이 이렇게 어려운 줄 몰랐어.
p|그래도 방금은 네가 골랐네.`,close:`c|하나 더 고른 게 있어. 너랑 가고 싶다는 거. 단순히 같이 가 줄 사람이 필요해서는 아니야.
p|반장 업무 도와준 답례도 아니고?
c|응. 나는 네가 좋아. 아무 일도 맡기지 않은 날에도 만나고 싶어.
n|민혁은 일정표를 접었다. 오늘만큼은 종이에 적힌 순서가 대화를 앞서가지 않았다.`,romance:`p|나도 민혁이 좋아. 오늘은 연인으로 같이 가고 싶어.
c|그럼 출발 전에 하나만 물을게. 손 잡아도 돼?
p|응. 그것까지 승인 문서 만들 필요는 없고.
n|민혁이 웃으며 손을 내밀었다. 나는 그 손을 잡았다. 가방 안 완장이 두 사람의 발걸음에 가볍게 흔들렸다.
c|다음에는 내가 쉬는 날을 네가 대신 정하지 않아도 돼. 내가 먼저 알려 줄게.
p|나도 바쁘면 바쁘다고 말할게. 안 된다는 대답까지 편하게 하자.
c|좋아. 그 약속은 계획표 말고 기억해 둘게.
n|우리는 정한 길을 조금 돌아 가게에 도착했다. 민혁은 시간을 확인하다가 시계를 가방에 넣었다.
n|다음 월요일, 교실에서 민혁은 다시 반장이었다. 내 이름도 다른 친구들과 똑같이 출석부에서 불렀다.
c|점심 지나고 잠깐 얘기할래? 업무 말고 어제 사진 보여 주려고.
p|좋아. 오늘은 내가 찍은 것도 있어.
n|민혁은 완장 아래로 손을 작게 흔들었다. 우리는 반의 규칙과 둘만의 약속을 서로 대신하게 하지 않았다.`,friend:`p|나는 민혁을 반장만이 아니라 내 친구로 만나고 싶어. 지금 내 마음은 그쪽이야.
c|응. 단정하게 말해 줘서 고마워. 아쉬운 마음은 내가 좀 정리할게.
p|오늘 가게는 다음에 가도 돼. 네가 편한 쪽으로.
c|오늘은 가 보고 싶어. 친구랑 가는 것도 내가 고른 일정이니까.
n|민혁은 일정표에 있던 두 개의 작은 하트를 지우고 가게 이름을 다시 적었다.
n|가게에서 우리는 케이크를 각자 하나씩 골랐다. 민혁은 처음으로 다른 사람과 나눌 양부터 계산하지 않았다.
c|이건 정말 내 취향이다. 다음에 다른 친구들도 오면 내가 추천할 수 있겠네.
p|반장 추천 말고 민혁 추천으로.
n|민혁은 웃으며 고개를 끄덕였다. 일을 부탁하지 않아도 함께 앉을 친구가 생겼다.`,wait:`p|민혁이 고른 시간을 같이 보내고 싶어. 다만 지금 바로 어떤 사이라고 정하는 건 조심스러워.
c|그럼 일정부터 확정해서 마음을 따라오게 하지는 말자.
p|네 토요일을 내 대답 때문에 비워 둘 필요는 없어.
c|알겠어. 가게는 내가 가 보고 싶었던 곳이니까 먼저 가 볼 수도 있어.
n|민혁은 출발 시각 옆의 작은 물음표를 지웠다.
c|나중에 다시 만날 때는 가능한 날을 새로 물을게. 정해진 약속을 취소하는 것처럼 느끼지 않게.
p|그때 나도 내 쪽에서 먼저 말해 볼게.
n|우리는 교문에서 서로 다른 정류장으로 걸었다. 아직 비어 있는 시간을 실패한 일정으로 표시하지 않았다.`,distance:`p|오늘이 지나도 계속 이런 약속을 잡기는 어려울 것 같아. 애매하게 따라가기 전에 말하고 싶었어.
c|응. 함께하는 일정은 두 사람 다 원해야 하니까.
n|민혁은 두 사람 몫으로 접은 종이를 다시 펼쳤다.
c|나는 가게에 가 볼래. 네가 못 간다고 내가 원했던 일까지 취소할 필요는 없겠지.
p|응. 민혁이 고른 시간이니까.
n|민혁은 가방 끈을 고쳐 메고 먼저 인사했다.
n|다음 날 우리는 평소처럼 출석을 확인했다. 같은 반이라는 사실이 끝난 약속을 다시 열게 하지는 않았다.`,afterword:["민혁은 자기 취향으로 행선지를 고르고 먼저 손을 내밀었다.","공적인 역할과 개인적인 마음이 서로의 자리를 침범하지 않게 되었다."]}},ws={world:`n|새 학기 공연 포스터가 붙던 날, 밴드실 앞에서 세계와 마주쳤다.
c|아, 안녕. 연습 보러 왔어? 오늘은 다 끝났는데.
p|잠깐 인사하고 싶어서. 준비하느라 바빴지?
c|응. 준비 중에는 다들 정신이 없었지. 너랑 따로 얘기할 틈도 별로 없었고.
n|세계는 기타 케이스를 닫았다. 둘만 아는 추억을 꺼내는 대신 오늘의 일을 물었다.
p|이제 공연이 없어도 하고 싶은 일은 있어?
c|그냥 친구들이랑 놀기. 다음 노래도 내가 하고 싶을 때 정하고.
n|나는 출입문을 가리지 않도록 한 발 옆으로 비켰다. 같은 반이라는 사실만으로 특별한 자리가 생기지는 않았다.`,hyunsol:`n|현솔은 실험실 문에 다음 실험 날짜를 붙이고 있었다.
c|선생님 찾는 거면 교무실에 계셔.
p|아니. 네가 보여서 인사하려고.
c|그래? 실험할 때 말고는 따로 얘기할 일이 별로 없었네.
n|현솔은 테이프 끝을 접어 넣고 나를 보았다.
p|이번에는 무슨 실험이야?
c|다음 시간에 같이 설명 들을 거야. 오늘은 기록만 정리하고 집에 가려고.
n|나는 고개를 끄덕였다. 같은 수업에 앉았다는 것과 서로를 많이 안다는 것은 다른 일이었다.`,taewoo:`n|댄스실에서 나온 태우는 수건으로 이마를 닦다가 나를 알아보았다.
c|어, 너도 아직 학교에 있었네. 연습 보려고 했으면 조금 늦었어.
p|오늘 잘됐어?
c|응. 다음 공연은 동작이 조금 달라질 거야. 같이 연습한 친구들이랑 바꿔 봤거든.
n|태우는 물병 뚜껑을 닫았다. 서로의 일상을 모르던 사이에는 물어볼 질문도 잠시 생각이 필요했다.
p|나는 공연 보는 건 좋았어. 네가 즐거워 보여서.
c|고마워. 그 말은 진짜 기분 좋다.
n|태우는 다음 일정에 늦지 않게 가방을 고쳐 멨다. 오늘의 칭찬이 그동안 나누지 않은 시간을 대신하지는 않았다.`,taehun:`n|도서관 반납대에서 태훈을 만났다. 태훈은 책 안에 끼운 메모를 조심스럽게 빼고 있었다.
c|이건 내 메모라서 빼야 해. 다음에 빌리는 사람이 책 내용인 줄 알면 곤란하니까.
p|이번에는 어떤 책 읽었어?
c|구름 관측 얘기. 조금 어렵지만 실제 기록이 많아서 좋았어.
n|나는 책 표지를 보았다. 태훈이 무엇을 읽는지 처음 묻는 질문처럼 느껴졌다.
p|재밌었던 부분 한 가지 들려줄래?
c|짧게는 가능해. 뒤에 예약한 관측 모임이 있어서.
n|태훈은 책을 내 쪽으로 조금 돌렸다. 빌려 주는 몇 분을 더 큰 약속으로 생각하지 않기로 했다.`,seoyul:`n|미술실 복도에 새 그림이 걸려 있었다. 서율이 작품 아래 작은 이름표를 붙였다.
p|이거 네가 그렸어?
c|응. 이번에는 색을 좀 줄였어. 가까이서 보면 덧칠한 데 많지만.
n|나는 한 걸음 다가가 그림을 보았다. 서율의 최근 그림을 제대로 보는 것은 오랜만이었다.
p|어느 부분부터 그렸어?
c|그 질문은 좋네. 여기 창문. 나머지는 그다음에 생각났고.
n|서율은 그림의 모서리를 짚었다. 나를 기다린 그림이라고 말하지는 않았다.
n|나는 그 선이 생겨난 이야기를 들었다. 내가 없던 시간에도 서율의 그림은 계속 자라고 있었다.`,juhan:`n|컴퓨터실 앞에서 주한이 만든 작은 게임의 시연 안내를 보았다.
p|새로 만든 거야?
c|응. 시간 있으면 해 봐. 처음 하는 사람한테 설명이 충분한지 궁금해서.
n|주한은 빈 조작기를 가리켰다. 다른 친구가 남긴 테스트 메모도 옆에 놓여 있었다.
p|혼자 만든 부분이 많아 보이네.
c|그래도 도와준 친구들 있어. 마지막 화면에 이름 적어 뒀고.
n|나는 첫 스테이지를 해 봤다. 주한은 내가 모르는 규칙을 차근차근 설명했다.
n|화면 안 캐릭터는 출발선에 있었다. 주한과 나도 함께한 시간을 실제보다 길게 말하지 않았다.`,minhyuk:`n|교문 앞 민혁은 완장을 벗어 가방에 넣고 있었다.
p|오늘 업무 끝났어?
c|응. 다음 당번에게 전달까지 했어. 이제 내 일정으로 가려고.
n|민혁의 손에는 반 활동표가 아닌 작은 가게 지도가 있었다.
p|어디 가는지는 내가 잘 몰랐네.
c|말할 기회가 없었지. 학교에서는 늘 확인할 일부터 얘기했으니까.
p|업무 말고 네 얘기도 물어볼걸.
n|민혁은 지도를 반으로 접었다. 늦은 관심을 이미 쌓인 친밀함처럼 받아들이지는 않았다.`};function De(e,t,s,r){const a={world:"gate",hyunsol:"cafeteria",taewoo:"walk",taehun:"roof",seoyul:"art",juhan:"hallway",minhyuk:"classroom"};return e.split(`
`).filter(Boolean).map((c,l)=>{const o=c.slice(0,1),d=o==="c"?t:o==="p"?"player":"narrator";return{speaker:d,text:c.slice(2).replaceAll("{name}",s),...d===t?{expression:o==="c"&&l>2?"shy":"neutral"}:{},...r&&l>=3&&l<=7?{art:r}:{},...r&&l>=8?{location:a[t]}:{}}})}function Ns(e){var l;const s=((l=e.ending)==null?void 0:l.match(/^(romance|friendship|unresolved|distance):([^:]+)/))??[...e.flags].reverse().map(o=>o.match(/^(romance|friendship|unresolved|distance):([^:]+)$/)).find(Boolean),r=s==null?void 0:s[2],a=r==="all"||r==="class"?null:U.includes(r)?r:e.focus,c=s==null?void 0:s[1];return{person:a,kind:c??"friendship"}}function $s(e){const{person:t,kind:s}=Ns(e);if(!t)return{kind:"friendship",person:null,title:"다음에도 같은 반에서",subtitle:"우리들의 봄",summary:"누군가 한 사람과 연인이 되지는 않았지만, 다시 찾아갈 수 있는 자리가 생겼다.",afterword:["함께했던 날을 지우지 않고 각자의 다음 시간을 골랐다.","연애를 선택하지 않은 봄도 하나의 완성된 이야기로 남았다."]};if(t==="junyeon")return{kind:e.flags.includes("closed:junyeon")?"distance":s,person:t,title:s==="romance"?"오늘은, 늦지 않았어":e.flags.includes("closed:junyeon")?"비워 둔 자리를 접으며":"같은 시간의 두 권의 책",subtitle:"방준연",summary:s==="romance"?"수습을 관계의 대가로 삼지 않고, 새롭게 원하는 마음을 서로 확인했다.":e.flags.includes("closed:junyeon")?"기억은 남겼지만 개인적인 관계는 끝내기로 했다.":"상대의 시간을 대신 정하지 않는 우정으로 다시 만났다.",afterword:["잘못을 바로잡는 일은 관계의 결말과 별개로 계속된다.","다음 약속은 두 사람이 원할 때에만 새로 정한다."]};const r=zt[t],a=s==="romance"?r.title:s==="unresolved"?r.openTitle:s==="distance"?r.distanceTitle:r.friendTitle,c=s==="romance"?r.promise:s==="unresolved"?"서로를 향한 마음을 성급히 확정하지 않았다. 기다림을 요구하지 않은 채 오늘의 만남을 마쳤다.":s==="distance"?"좋았던 시간까지 부정하지 않고, 더는 같은 약속을 이어 가지 않기로 했다.":"연인이라는 이름 대신, 서로가 받아들일 수 있는 우정을 선택했다.";return{kind:s,person:t,title:a,subtitle:r.name,summary:c,afterword:s==="romance"?r.afterword:s==="friendship"?["함께한 기억은 남고, 다음 만남의 방식은 달라졌다.","상대의 대답을 바꾸려 하지 않는 선택도 관계의 완성이다."]:s==="unresolved"?["미정인 마음을 약속으로 포장하지 않았다.","그다음의 선택은 서로에게 열려 있지만, 누구도 기다릴 의무는 없다."]:["두 사람은 각자 고른 다음 일정으로 걸었다.","이별이 앞선 시간을 모두 실패로 만드는 것은 아니었다."],...s==="romance"?{image:`${t}-ending`}:{}}}function Ss(e){if(e.flags.includes("legacy:finale")||e.focus==="junyeon")return ot(e);if(e.focus===null){const h=ot(e);if(h.id.startsWith("finale-junyeon-"))return h;const p=[{speaker:"narrator",text:"하교 종이 울린 뒤에도 모두 한꺼번에 나가지는 않았다. 누군가는 먼저 한 약속이 있었고, 누군가는 오늘 혼자 있고 싶어 했다."},{speaker:"taewoo",text:"오늘 다 같이 못 간다고 다음까지 취소되는 건 아니지? 나는 연습 끝나고 합류할게."},{speaker:"hyunsol",text:"그러면 먼저 먹는 사람들은 먹자. 늦게 오는 사람한테 식은 거 남겨 놓지 말고."},{speaker:"seoyul",text:"일단 지금 있는 사람들 그림부터 그려 둘래. 빈 의자에 억지로 이름은 안 적고."},{speaker:"juhan",text:"난 도서관 들렀다 갈게. 단체 사진 찍으면 나중에 보여 줘."},{speaker:"world",text:"올릴 사진 말고 우리끼리 보는 것도 남기자. 표정 이상해도 지우라고 하기 전에 웃고."},{speaker:"taehun",text:"오늘 날씨 메모는 맑음. 나머지 문장은 집에 가서 써야겠다."},{speaker:"minhyuk",text:"나도 오늘은 늦게 확인할게. 개인 약속 있어서. 반장도 답장 바로 못 하는 날 있어."},{speaker:"narrator",text:"교실에는 서로 다른 방향으로 향하는 발소리가 남았다. 나는 누구의 빈칸도 대신 채우려 하지 않고 내 가방을 들었다."}];return{...h,lines:[...h.lines,...p],choices:h.choices.map(j=>({...j,response:[...j.response,{speaker:"narrator",text:"다음 주 월요일, 나는 교실 문을 혼자 열었다. 모두 동시에 나를 돌아보지는 않았지만 곧 몇 군데에서 인사가 건너왔다."},{speaker:"player",text:"좋은 아침. 주말에 얘기해 주기로 한 거 아직 기억해?"},{speaker:"narrator",text:"가까운 자리에서 웃음이 났다. 누군가의 연인이 되는 장면은 없었지만, 나도 이 반의 일상에 내 이야기를 보탤 수 있었다."},{speaker:"narrator",text:"내가 고르지 않은 관계의 가능성까지 모두 약속으로 남기지는 않았다. 대신 오늘 직접 지킬 수 있는 다음 만남을 골랐다."}]}))}}const t=e.focus,s=zt[t],r=At(e,t),a=e.bonds[t].trust<30||e.bonds[t].affection<30,c=a?`c|오늘 와 준 건 고마워. 그렇지만 같이 겪은 일만으로 우리가 가까워졌다고 말하기는 어렵겠어.
p|응. 내가 네 마음을 미리 정해 버리지는 않을게.
n|대답을 재촉하면 거리가 줄어드는 것은 아니었다. 우리는 지금 말할 수 있는 만큼만 솔직하게 말하기로 했다.`:`c|너랑 더 얘기해 보고 싶은 마음은 있어. 하지만 아직 연인이라고 부를 만큼 서로를 알지는 못한 것 같아.
p|좋았던 몇 장면만으로 나머지 마음까지 알았다고 생각했나 봐.
c|그 장면이 없던 일이 되는 건 아니야. 오늘 이후를 어떻게 지낼지는 따로 이야기하자.
n|좋아한다는 말과 같은 미래를 고른다는 말 사이에는, 아직 함께 보내지 않은 시간이 있었다.`,l=[{id:"friendship",text:"연인이 아니라 친구로 만나고 싶다는 내 마음을 말한다.",response:De(s.friend,t,e.name),flags:[`friendship:${t}`]},{id:"own-path",text:"좋았던 시간을 남기고 개인적인 약속은 여기서 마무리한다.",response:De(s.distance,t,e.name),flags:[`distance:${t}`]}];r.eligible?l.unshift({id:"romance",text:"나도 같은 마음이라고, 연인으로 만나고 싶다고 말한다.",response:De(s.romance,t,e.name,`${t}-ending`),flags:[`romance:${t}`,`mutual:${t}`]}):a||l.unshift({id:"not-yet",text:"더 알아가고 싶지만 아직 약속할 수 없는 마음도 솔직히 말한다.",response:De(s.wait,t,e.name),flags:[`unresolved:${t}`]});const o=r.chapters.length<2,d=t==="taehun"?"library":t==="hyunsol"?"chemistry":s.place;return{id:`finale-${t}-${e.verdict}`,title:r.eligible?s.title:a?s.distanceTitle:s.openTitle,location:o?d:s.place,lines:De(`${o?ws[t]:s.intro}
${r.eligible?s.close:c}`,t,e.name),choices:l}}const Rt=[{id:"world-earbud",person:"world",title:"한쪽씩 나눠 듣는 봄",alt:"노을이 비치는 밴드실에서 세계가 옆에 앉은 나에게 이어폰 한쪽을 건넨다."},{id:"hyunsol-crystal",person:"hyunsol",title:"같은 빛을 들여다볼 때",alt:"실험실 창가에서 현솔이 밀봉된 푸른 결정 표본을 들어 보이고 나는 흰 종이를 받쳐 준다."},{id:"taewoo-hand",person:"taewoo",title:"마지막 박자에 내 손을",alt:"댄스실에서 마지막 포즈를 가르쳐 준 태우가 웃으며 내 쪽으로 손을 내민다."},{id:"taehun-atlas",person:"taehun",title:"바람이 넘기지 못한 페이지",alt:"안전 난간이 있는 관측 테라스에서 태훈과 별자리지도의 양쪽 페이지를 함께 잡는다."},{id:"seoyul-sketch",person:"seoyul",title:"그림 밖에서 마주친 눈",alt:"미술실에서 내 얼굴을 그리던 서율이 스케치북 위로 눈을 맞춘다."},{id:"juhan-pixel",person:"juhan",title:"너만 찾은 숨은 화면",alt:"컴퓨터실에서 주한이 직접 만든 게임 속 작은 픽셀 하트를 보여 주며 수줍게 웃는다."},{id:"minhyuk-rain",person:"minhyuk",title:"우산의 가운데",alt:"비 오는 정문에서 민혁과 나란히 우산을 나누어 쓰며 손잡이를 함께 잡는다."},{id:"world-ending",person:"world",title:"화면 밖의 약속",alt:"기타를 내려놓은 밴드실에서 세계가 휴대폰을 뒤집어 놓고 내 손을 잡는다."},{id:"hyunsol-ending",person:"hyunsol",title:"정답이 없는 오후",alt:"정원 벤치에서 현솔이 두 찻잔 중 하나를 내게 건네며 웃는다."},{id:"taewoo-ending",person:"taewoo",title:"같은 색의 마지막 박자",alt:"연습이 끝난 댄스실에서 태우가 내 손목에 작은 리본을 묶어 준다."},{id:"taehun-ending",person:"taehun",title:"다음 별을 기다리며",alt:"안전 난간이 있는 옥상에서 태훈과 담요 위로 손을 잡고 다음 별을 기다린다."},{id:"seoyul-ending",person:"seoyul",title:"둘이 그린 빈칸",alt:"미술실에서 서율의 노란 연필과 내 파란 연필이 한 장의 그림을 채운다."},{id:"juhan-ending",person:"juhan",title:"저장되지 않는 온도",alt:"협동 게임의 컨트롤러를 내려놓은 주한이 컴퓨터실에서 내 손을 잡는다."},{id:"minhyuk-ending",person:"minhyuk",title:"당번이 아닌 약속",alt:"완장을 가방에 넣은 민혁이 노을 진 정문에서 나에게 손을 내민다."},{id:"memory-time",person:"world",title:"두 장의 오후",alt:"도서관에서 세계와 서로 다른 약속 쪽지를 나란히 확인한다."},{id:"memory-reservation",person:"taewoo",title:"우리가 기다린 시간",alt:"댄스실 앞에서 태우의 휴대폰 안내와 예약 변경 확인서를 비교한다."},{id:"memory-meeting",person:"seoyul",title:"세 곳으로 갈라진 약속",alt:"밴드실 앞에서 서율과 세 모둠이 받은 모임 안내를 펼쳐 본다."},{id:"memory-cues",person:"minhyuk",title:"리허설 뒤의 두 순서",alt:"강당 객석의 진행 테이블에서 민혁과 승인본 및 배포본을 비교한다."}];function $e(e){return Rt.find(t=>t.id===e)}function Pe(e){return`assets/romance-cg/${e}.png`}function Cs(e){const t=[{title:"첫 약속",text:"친구들과 페어 준비를 시작했다.",after:"read:main-1-1"},{title:"엇갈린 시간",text:"같은 약속 쪽지에 다른 시간이 적혀 있었다.",after:"read:main-1-2"},{title:"바뀐 예약",text:"태우의 연습실 예약도 안내와 달랐다.",after:"read:main-2-2"},{title:"세 곳의 안내",text:"같은 모임인데 기다린 장소가 달랐다.",after:"read:main-3-2"},{title:"남아 있던 옛 순서",text:"승인본이 준비된 뒤에도 옛 큐시트가 배포됐다.",after:"read:main-4-2"},{title:"원본을 펼치며",text:"함께 겪은 일을 원본과 맞춰 보기로 했다.",after:"read:main-5-1"}];return[...t].reverse().find(s=>e.flags.includes(s.after))??t[0]}function Es({game:e,paused:t,onLog:s,onGallery:r,onTitle:a}){const c=$s(e),l=$e(c.image);return n.jsxs("section",{className:`romance-ending ending-${c.kind}`,inert:t,children:[n.jsx("div",{className:"romance-ending-visual",children:l?n.jsx("img",{src:`./${Pe(l.id)}`,alt:l.alt}):c.person?n.jsx(le,{id:c.person}):n.jsx(Le,{size:64})}),n.jsxs("div",{className:"romance-ending-copy",children:[n.jsx("small",{children:c.subtitle}),n.jsx("h1",{children:c.title}),n.jsx("p",{children:c.summary}),n.jsx("div",{className:"romance-ending-afterword",children:c.afterword.map(o=>n.jsx("p",{children:o},o))}),n.jsxs("div",{className:"romance-inline",children:[l&&n.jsxs("button",{className:"r-secondary",onClick:()=>r(l.id),children:[n.jsx(ne,{size:16}),"그림 보기"]}),n.jsx("button",{className:"r-secondary",onClick:s,children:"대화 다시 보기"}),n.jsxs("button",{className:"r-primary",onClick:a,children:["처음으로",n.jsx(Rn,{size:16})]})]})]})]})}function As(e,t){for(let s=Math.min(t,e.length-1);s>=0;s--){if(e[s].art)return e[s].art;if(e[s].location)return}}function zs(e,t,s,r){return r?s:e.key===t?Math.min(s,e.count):0}const Tt=Object.fromEntries(Sr.flatMap(e=>e.evidence.map(t=>[t.id,{id:t.id,image:`assets/evidence/${t.id}.svg`,alt:`${t.name} 자료 그림. ${t.description}`,caption:"게임 내 가상 자료 · 실제 인물이나 학교의 기록이 아닙니다."}])));function lt({evidenceId:e,visual:t}){const[s,r]=f.useState(!1),a=f.useRef(null);f.useEffect(()=>r(!1),[e]),f.useEffect(()=>{a.current&&(a.current.scrollLeft=0,a.current.scrollTop=0)},[e,s]);const c=t??Tt[e];if(!c)return null;const l=`./${c.image}`;return n.jsxs("figure",{className:"evidence-viewer",children:[n.jsxs("div",{className:"evidence-viewer-toolbar",children:[n.jsx("span",{children:"자료 이미지"}),n.jsxs("div",{children:[n.jsxs("button",{type:"button","aria-pressed":s,onClick:()=>r(o=>!o),children:[s?n.jsx(pr,{size:18}):n.jsx(hr,{size:18})," ",s?"원래 크기":"2배 확대"]}),n.jsxs("a",{href:l,download:`${c.id}.svg`,children:[n.jsx(mr,{size:18})," 이미지 저장"]})]})]}),n.jsx("div",{ref:a,className:`evidence-viewer-scroll${s?" is-zoomed":""}`,tabIndex:s?0:void 0,role:s?"region":void 0,"aria-label":s?"확대된 증거 자료. 스크롤해서 모든 부분을 볼 수 있습니다.":void 0,children:n.jsx("img",{src:l,alt:c.alt,width:1200,height:820,draggable:!1})}),n.jsxs("figcaption",{children:[c.caption,s&&n.jsx("span",{children:" 확대 중 · 좌우와 위아래로 스크롤할 수 있어요."})]})]})}function Rs({evidence:e,selected:t,disabled:s,onSelect:r,onInspect:a,visuals:c=Tt}){const l=Math.max(0,e.findIndex(b=>b.id===t)),o=e[l],d=o?c[o.id]:null,h=f.useRef(0),p=f.useRef(l);if(p.current!==l){const b=e.length,m=(l-p.current+b+b/2)%b-b/2;h.current-=m*360/b,p.current=l}if(!o||!d)return null;const j=b=>r(e[(l+b+e.length)%e.length].id);return n.jsxs("section",{className:"trial-revolver","aria-label":"증거 말 탄환",children:[n.jsxs("header",{children:[n.jsx(Qn,{size:17}),n.jsxs("div",{children:[n.jsx("b",{children:"말 탄환"}),n.jsx("small",{children:"자료를 골라 발언의 모순에 제시하세요"}),n.jsxs("select",{className:"revolver-touch-select","aria-label":"장전할 증거 선택",value:t??"",disabled:s,onChange:b=>r(b.target.value),children:[n.jsx("option",{value:"",disabled:!0,children:"증거 선택"}),e.map(b=>n.jsx("option",{value:b.id,children:b.name},b.id))]})]}),n.jsxs("span",{children:[l+1," / ",e.length]})]}),n.jsxs("div",{className:"revolver-assembly",children:[n.jsxs("div",{className:"revolver-loader",children:[n.jsxs("div",{className:"revolver-cylinder",role:"group","aria-label":"회전 약실에서 증거 선택",style:{"--cylinder-turn":`${h.current}deg`,"--cylinder-counter-turn":`${-h.current}deg`},onKeyDown:b=>{s||!["ArrowLeft","ArrowRight"].includes(b.key)||(b.preventDefault(),j(b.key==="ArrowRight"?1:-1))},children:[n.jsx("div",{className:"revolver-rotor",children:e.map((b,m)=>{const g=m/e.length*Math.PI*2;return n.jsxs("button",{className:`revolver-chamber${b.id===t?" is-loaded":""}`,style:{left:`${50+Math.sin(g)*34}%`,top:`${50-Math.cos(g)*34}%`},"aria-label":`${b.name} 말 탄환 장전`,"aria-pressed":b.id===t,disabled:s,onClick:()=>r(b.id),children:[n.jsx("i",{"aria-hidden":"true"}),n.jsx("span",{children:String(m+1).padStart(2,"0")})]},b.id)})}),n.jsxs("div",{className:"revolver-hub","aria-hidden":"true",children:[n.jsx(Qn,{size:26}),n.jsx("small",{children:"EVIDENCE"})]})]}),n.jsxs("div",{className:"revolver-navigation",children:[n.jsx("button",{type:"button",disabled:s,onClick:()=>j(-1),"aria-label":"이전 말 탄환",children:n.jsx(fr,{size:18})}),n.jsx("span",{children:"약실 회전"}),n.jsx("button",{type:"button",disabled:s,onClick:()=>j(1),"aria-label":"다음 말 탄환",children:n.jsx(Ne,{size:18})})]})]}),n.jsxs("div",{className:"loaded-evidence","aria-live":"polite","aria-atomic":"true",children:[n.jsxs("button",{className:"loaded-evidence-image",onClick:()=>a(o.id),"aria-label":`${o.name} 이미지 확대`,children:[n.jsx("img",{src:`./${d.image}`,alt:d.alt}),n.jsxs("span",{children:[n.jsx(zn,{size:13}),"자료 확대"]})]}),n.jsxs("div",{className:"loaded-evidence-copy",children:[n.jsxs("small",{children:[t?"장전한 증거":"약실을 눌러 장전"," · ",String(l+1).padStart(2,"0")]}),n.jsx("h2",{children:o.name}),n.jsx("p",{children:o.description})]})]})]})]})}function Ts({eventId:e}){const[t,s]=f.useState(!0);return f.useEffect(()=>{s(!0);const r=window.setTimeout(()=>s(!1),1100);return()=>window.clearTimeout(r)},[e]),t?n.jsxs("div",{className:"rebuttal-burst","aria-hidden":"true",children:[n.jsx("div",{className:"rebuttal-slash"}),n.jsxs("div",{className:"rebuttal-word",children:[n.jsx("span",{children:"모순을 밝혀냈다"}),n.jsx("strong",{children:"논파"}),n.jsx("small",{children:"RE:ACTION / COUNTERARGUMENT"})]})]}):null}let _=null,de=null,qe=null,Ms=0;const ct=[261.63,329.63,392,523.25,440,392,329.63,293.66,220,261.63,329.63,392,349.23,329.63,293.66,261.63];function ut(e,t){if(!e){qe&&clearInterval(qe),qe=null,de&&_&&de.gain.setTargetAtTime(0,_.currentTime,.1);return}try{if(_??(_=new AudioContext),_.resume(),de??(de=_.createGain()),de.disconnect(),de.connect(_.destination),de.gain.setTargetAtTime(t*.2,_.currentTime,.2),qe)return;const s=()=>{if(!_||!de)return;const r=_.createOscillator(),a=_.createGain();r.type="sine",r.frequency.value=ct[Ms++%ct.length],a.gain.setValueAtTime(0,_.currentTime),a.gain.linearRampToValueAtTime(.3,_.currentTime+.06),a.gain.exponentialRampToValueAtTime(.001,_.currentTime+2.7),r.connect(a),a.connect(de),r.start(),r.stop(_.currentTime+3),r.onended=()=>{r.disconnect(),a.disconnect()}};s(),qe=setInterval(s,850)}catch{}}function Fs(e,t){const s=e.visualViewport,r=()=>{if(s&&Math.abs(s.scale-1)>.01)return;const a=(s==null?void 0:s.height)??e.innerHeight;Number.isFinite(a)&&a>0&&t.style.setProperty("--game-viewport-height",`${Math.round(a)}px`)};return r(),e.addEventListener("resize",r),s==null||s.addEventListener("resize",r),()=>{e.removeEventListener("resize",r),s==null||s.removeEventListener("resize",r),t.style.removeProperty("--game-viewport-height")}}const u=(e,t,s)=>({speaker:e,text:t,...s?{art:s}:{}}),pe=e=>`assets/romance-evidence/memory-${e}.svg`,Y=[{id:"memory-01",code:"E01",name:"서로 다른 약속 쪽지",chapter:0,unlockAct:1,location:"library",spot:"독서실 옆 공용 테이블",lead:"세계가 기다리던 테이블에서 두 장의 안내를 나란히 본다.",description:"세계가 받은 원본은 15:40, 내가 받은 원본은 16:10이다. 장소와 모임 내용은 같지만 시간이 30분 다르다.",limit:"두 안내가 다르다는 사실을 보여 준다. 이 종이만으로 작성자나 바뀐 이유는 알 수 없다.",requires:[],image:pe("01"),lines:[u("narrator","세계와 남은 오후를 함께 보낸 뒤, 독서실 옆 공용 테이블에서 아까 남겨 둔 두 쪽지를 다시 펼쳤다."),u("world","다음에 물어볼 때 헷갈리지 않게 지금 적어 두자. 어느 종이가 누구 건지도."),u("player","내가 받은 원본은 네 시 십 분. 이쪽 종이가 내 거야."),u("world","내가 기다리며 보고 있던 건 세 시 사십 분. 여기 나란히 놓을게."),u("narrator","내 쪽지에는 16:10, 세계의 쪽지에는 15:40. 독서실 옆 공용 테이블이라는 장소는 같았다.","memory-time"),u("player","장소와 모임 내용은 같고 시간만 삼십 분 달라. 여기까지는 두 원본으로 확인되네."),u("world","응. 누가 왜 다르게 적었는지는 아직 모르고. 기다린 이유를 네 탓으로 적지는 말자."),u("player","원본은 그대로 보관하고, 옆에 확인한 장소랑 날짜를 적을게."),u("world","내 종이도 맡길게. 음료 컵에서는 좀 멀리 두고. 거의 젖을 뻔했거든."),u("narrator","나는 두 원본을 수첩 사이에 나란히 넣었다. 함께 확인한 사람과 삼십 분의 차이를 짧게 기록했다."),u("world","다음 약속은 아까 말한 대로 직접도 확인하기. 그건 우리 둘 다 기억하는 거지?"),u("player","응. 오늘 같이 보낸 시간도 기억할게. 쪽지 확인은 여기까지 하자.")]},{id:"memory-02",code:"E02",name:"인쇄·배부 역할표",chapter:0,unlockAct:2,location:"classroom",spot:"교실 뒤 공개 게시판",lead:"다음 준비물을 확인하다 종이 안내 담당이 적힌 역할표를 읽는다.",description:"공개 역할표에 안내문 인쇄와 배부 담당이 방준연으로 적혀 있다. 무대·전시 준비와 별개의 통상적인 업무다.",limit:"담당자가 누구인지 확인하는 자료다. 역할을 맡았다는 사실만으로 잘못된 쪽지를 만들었다고 단정할 수 없다.",requires:["memory-01"],image:pe("02"),lines:[u("narrator","다음 날 교실 뒤 게시판에 준비물 목록이 새로 붙었다. 민혁이 풀리지 않은 압정을 다시 눌렀다."),u("minhyuk","이쪽이 물품 목록이고, 오른쪽은 역할표다. 자기 준비물을 확인하고 가라."),u("player","종이 안내도 여기에 담당이 나뉘어 있네."),u("minhyuk","초안은 모임을 잡은 사람이 쓰고, 인쇄와 배부는 준연이 모아서 맡는다. 제출 시간을 맞추려고 나눴어."),u("junyeon","프린터 옆에 쌓아 두면 순서가 섞여서. 봉투를 따로 만들어 뒀어."),u("player","어제 내 안내랑 세계 안내는 시간이 달랐어. 남겨 둔 두 장을 나중에 같이 확인할 수 있을까?"),u("junyeon","……그래. 어느 묶음이었는지 봐야겠다."),u("hyunsol","일단 내 실험 설명문은 세 장 더 필요해. 프린터한테까지 재실험시키진 말고."),u("junyeon","세 장. 응, 적었어."),u("narrator","준연이 여분 종이를 세었다. 나는 게시판에서 확인한 역할을 어제 쪽지 옆 메모에 적었다."),u("minhyuk","확인 끝났으면 복도 좀 비켜 줘. 물건 들고 오는 애들이 있다."),u("player","이 상자부터 옮길게. 어느 책상이 비어 있어?")]},{id:"memory-03",code:"E03",name:"댄스실 예약 변경 확인서",chapter:1,unlockAct:1,location:"dance",spot:"댄스연습실 앞 예약 안내대",lead:"태우의 안내와 문에 붙은 예약 시간이 달라 담당 선생님에게 확인한다.",description:"우리 반 연습 예약이 16:20에서 17:00으로 옮겨졌다. 태우가 가지고 온 안내에는 이전 시간이 남아 있다.",limit:"예약 변경과 전달 불일치를 확인한다. 변경 접수 내역만으로 실제 신청자와 이유까지 정하지 않는다.",requires:[],image:pe("03"),lines:[u("narrator","연습 뒤 댄스연습실 앞 예약 안내대로 돌아왔다. 선생님이 아까 준비해 주기로 한 변경 확인서를 놓았다."),u("taewoo","아까 문 앞에서는 정신없었으니까, 지금 내가 받은 안내랑 같이 봐 두자."),u("player","네 원래 안내는 네 시 이십 분. 그걸 보고 제시간에 왔던 거지."),u("taewoo","응. 이 화면은 그대로 남겨 뒀어. 나 혼자 시간을 잘못 외운 게 아니었다는 것부터 적고 싶어."),u("teacher","확인서에는 우리 반 예약이 16시 20분에서 17시로 변경됐다고 적혀 있다. 변경 전후를 함께 보자."),u("narrator","변경 전과 변경 후 시간이 한 장에 적혀 있었다. 태우는 자기 안내 화면을 그 옆에 놓았다.","memory-reservation"),u("taewoo","예약은 바뀌었는데 내 안내에는 이전 시간이 남아 있었네. 이 차이를 기록하면 되겠다."),u("teacher","누가 어떤 전달을 맡았는지는 공개 인계표도 확인하자. 이 확인서만으로 신청한 사람이나 이유까지 정하지는 말고."),u("world","그래도 빈 교실에서 맞춘 손뼉은 꽤 괜찮았어. 기다린 시간을 전부 버리진 않았네."),u("taewoo","맞아. 확인서랑 내 안내는 같이 남겨 두자. 다음에 또 헷갈리지 않게."),u("player","원래 시간, 바뀐 시간, 네가 받은 안내까지 적었어. 손뼉 틀린 건 안 적고."),u("taewoo","그건 내가 기억해. 다음에 나랑 한 번 더 맞추면 되니까.")]},{id:"memory-04",code:"E04",name:"예약·공지 업무 인계표",chapter:1,unlockAct:2,location:"classroom",spot:"준비 서류를 모아 둔 공용 파일철",lead:"연습 뒤 공개 파일철에서 예약 변경과 공지 갱신의 인계 흐름을 확인한다.",description:"연습 조정 업무는 민혁에게서 준연에게 인계됐고, 예약 변경 뒤 참가자 안내를 갱신하는 일이 포함돼 있다.",limit:"통상적인 담당과 인계 범위를 보여 준다. 서명이나 이름 하나만으로 특정 행동의 수행자를 확정하지 않는다.",requires:["memory-03"],image:pe("04"),lines:[u("narrator","연습을 마치고 교실로 돌아오자 민혁이 공용 파일철을 펼쳤다. 창밖에는 운동부가 정리하는 소리가 들렸다."),u("minhyuk","여기다. 내가 전시 물품을 받으러 간 동안 연습 조정 업무를 넘긴 기록."),u("player","받은 담당은 준연, 업무는 예약 변경 접수랑 참가자 안내 갱신이라고 적혀 있어."),u("minhyuk","맞아. 예약을 바꾸면 오는 애들한테도 새 시간을 전달하게 돼 있다."),u("taewoo","나는 옛 시간을 받은 채로 왔어. 그래서 어디서 전달이 끊겼는지 알고 싶은 거야."),u("junyeon","내가 맡은 부분…… 맞아. 서류 묶음을 다시 볼게."),u("player","확인서랑 이 페이지를 함께 남겨 두자. 다음 연습에서도 같은 일이 생기면 곤란하니까."),u("minhyuk","공개 준비 서류니까 필요한 부분은 같이 볼 수 있어. 개인 수첩을 뒤질 필요는 없다."),u("narrator","파일철의 해당 쪽과 예약 변경 확인서를 나란히 정리했다. 이것으로 누가 무슨 생각을 했는지까지 알게 된 것은 아니었다."),u("taewoo","오늘 틀린 박자까지 적는 건 아니지?"),u("player","그건 나만 기억할게."),u("taewoo","너도 꽤 틀렸거든? 다음 연습 때 같이 갚아.")]},{id:"memory-05",code:"E05",name:"엇갈린 리허설 공지 원문",chapter:2,unlockAct:1,location:"band",spot:"밴드연습실 앞 게시판",lead:"같은 모임을 다른 곳에서 기다렸던 친구들이 각자 받은 공지를 비교한다.",description:"16:40 합동 준비 모임을 준비 지원은 컴퓨터실, 밴드는 밴드연습실, 댄스는 강당으로 안내한다. 표시명은 모두 리허설 자동안내(얼터에고 테스트)다.",limit:"안내문과 수신 집단의 차이를 보여 준다. 표시명만으로 얼터에고나 주한이 작성했다고 볼 수 없다.",requires:[],image:pe("05"),lines:[u("narrator","합동 연습을 마친 뒤 밴드연습실 앞 게시판에서 다시 모였다. 아까 비교한 공지 원문을 정식으로 보관하기 위해서였다."),u("world","아까는 장소만 급하게 맞췄잖아. 이번에는 받은 모둠 이름까지 같이 적어 두자."),u("player","내가 받은 준비 지원 안내는 네 시 사십 분, 컴퓨터실. 표시명은 리허설 자동안내, 얼터에고 테스트야."),u("seoyul","우리가 받은 밴드 안내는 같은 시각에 밴드연습실. 원문 화면 그대로 남겨 뒀어."),u("taewoo","댄스 안내는 강당. 아까 내가 기다렸던 장소가 여기에도 그대로 적혀 있어."),u("narrator","저장한 원문 화면은 그대로 두고, 비교하기 쉽게 출력한 세 장을 보면대에 펼쳤다. 제목은 같았지만 받는 모둠과 안내 장소가 달랐다.","memory-meeting"),u("player","같은 모임인데 모둠마다 다른 장소로 안내됐어. 표시 이름만으로 누가 썼는지는 정할 수 없고."),u("world","응. 내가 혼자 기다린 것도 너희를 피해서는 아니었다는 게 여기 남겠네."),u("seoyul","공용 게시판의 원문을 그대로 저장하자. 우리가 요약한 메모랑은 따로 두고."),u("taewoo","저장했어. 내 쪽은 댄스 모둠, 강당. 두 항목 다 보이지?"),u("narrator","모두가 보여 준 공용 안내를 묶었다. 개인 대화창을 살필 필요는 없었다."),u("world","이 묶음은 내일 선생님이랑 보자. 오늘은 연습도 했고 기록도 남겼으니까, 각자 약속하러 가도 되겠다.")]},{id:"memory-06",code:"E06",name:"예약 공지 대기열 내보내기",chapter:2,unlockAct:2,location:"computer",spot:"교사가 열어 준 공용 게시판 관리 화면",lead:"다음 날 주한과 함께 허가된 예약 공지 목록과 게시 설정을 확인한다.",description:"같은 시험용 서식의 예약 공지 3건에 수신 집단과 장소가 개별 입력돼 있다. 자동 장소 변경은 꺼져 있고 얼터에고는 게시 권한이 없다.",limit:"게시 방식과 권한을 확인한다. 표시 이름·계정만으로 입력한 사람을 식별하지 않으며, 개인 메시지는 포함하지 않는다.",requires:["memory-05"],image:pe("06"),lines:[u("narrator","다음 날 컴퓨터실. 선생님이 어제 공지가 저장된 공용 게시판 화면을 열었다. 주한은 옆자리에 자기 노트북을 내려놓았다."),u("teacher","어제 올라간 예약 공지와 게시 설정만 내보냈어. 개인 대화나 개인 계정 자료는 이 파일에 없다."),u("juhan","서식 이름은 리허설 시험용 안내야. 제목의 얼터에고 테스트는 직접 넣는 표시 문구고."),u("player","같은 서식인데 장소가 세 개야. 준비 지원은 컴퓨터실, 밴드는 밴드연습실, 댄스는 강당."),u("juhan","수신 집단과 장소를 각각 입력한 다음 예약한 거야. 자동 장소 변경은 사용 안 함으로 되어 있어."),u("teacher","예약은 입력된 글을 정해진 때에 게시하는 기능이야. 장소를 판단해서 고르는 기능은 아니다."),u("player","얼터에고가 그 장소들을 고를 수는 있어?"),u("juhan","내 시연 프로그램에는 게시판 쓰기 권한이 없어. 여기 나온 제목만 보고 내가 만든 프로그램이 썼다고 하긴 어려워."),u("narrator","주한이 입력 항목과 권한 설정을 가리켰다. 어제 우리가 서로 다른 곳을 기다린 이유가 조금 더 구체적으로 보였다."),u("player","이름보다 실제로 어떤 설정으로 올라왔는지를 남기자."),u("teacher","담당 인계와 원문은 모두 보관할게. 누가 입력했는지는 기록과 당사자 설명을 함께 확인해야 해."),u("juhan","……그럼 시연 연습도 조금 해 볼래? 내 프로그램은 사람 찾는 것보다 인사하는 걸 더 잘하거든.")]},{id:"memory-07",code:"E07",name:"구버전과 승인본 큐시트",chapter:3,unlockAct:1,location:"auditorium",spot:"최종 리허설 객석의 진행 테이블",lead:"음악 순서가 맞지 않아 배포본과 서율이 가지고 있던 승인본을 비교한다.",description:"배포된 v3는 댄스 다음 밴드, 서명된 승인본 v4는 밴드 다음 댄스다. 공연 순서와 전환 안내가 서로 다르다.",limit:"다른 버전이 배포됐음을 보여 준다. 이 두 장만으로 누가 어느 시점에 골랐는지까지는 알 수 없다.",requires:[],image:pe("07"),lines:[u("narrator","승인된 순서로 리허설을 마친 뒤, 강당 객석의 진행 테이블에 두 큐시트를 다시 펼쳤다."),u("minhyuk","아까 급히 맞춘 차이를 지금 기록하자. 배포본과 승인본은 섞이지 않게 따로 놓고."),u("taewoo","우리가 연습한 건 밴드 뒤에 댄스야. 다시 맞췄을 때는 전환도 제대로 됐어."),u("world","맞아. 처음 받은 표대로 시작했으면 서로 다음 차례를 다르게 기다렸겠네."),u("seoyul","여기가 내가 어제 확인받아서 가지고 있던 종이야. 승인 표시도 그대로 있어."),u("narrator","서율이 펼친 v4에는 승인 확인이 있었다. 객석에 나눠진 종이는 그 전 버전인 v3였다.","memory-cues"),u("player","v3는 댄스 다음 밴드고, v4는 밴드 다음 댄스야. 전환 안내도 같이 바뀌었네."),u("seoyul","둘 다 원본으로 보관하자. 어느 버전이 배포됐는지 나중에도 직접 비교할 수 있게."),u("teacher","관객이 들어오기 전 연습에서 확인했고 다친 사람은 없었다. 누가 언제 이 버전을 골랐는지는 배포 기록을 더 확인하자."),u("taewoo","응. 지금은 순서가 달랐다는 사실까지. 아까 멈추고 다시 맞춘 것도 적어 두고."),u("player","기록했어. 아까 가져온 물도 아직 남았는데 마실 사람?"),u("world","나 한 병. 이제 종이 덮고 목부터 쉬게 하자.")]},{id:"memory-08",code:"E08",name:"큐시트 배포 대장과 버전 이력",chapter:3,unlockAct:2,location:"media",spot:"교사와 확인하는 프로젝트 공용 서류대",lead:"승인본이 언제 준비됐는지 배포 대장과 공용 버전 이력을 나란히 확인한다.",description:"전날 승인된 v4가 공용 폴더에 공유되고 배포 담당의 수령 확인이 남은 뒤, 다음 날 v3가 배포 대상으로 선택됐다.",limit:"승인본이 배포 전에 존재했다는 순서를 입증한다. 이름·확인란만으로 행위자를 단정하지 않고 당사자의 실제 인계를 대조한다.",requires:["memory-07"],image:pe("08"),lines:[u("narrator","미디어실의 공용 서류대에 두 큐시트를 올렸다. 선생님은 프로젝트 폴더의 버전 이력과 배포 대장을 함께 열었다."),u("teacher","여기가 전날 v4를 승인하고 공용 폴더에 올린 기록이야. 그다음 칸은 배포 담당이 받았는지 확인하는 곳이고."),u("minhyuk","수령 확인이 먼저, 오늘 v3를 배포 대상으로 고른 기록이 나중이군."),u("player","그럼 배포가 끝난 다음에야 최종본이 생긴 건 아니네."),u("teacher","그래. 적어도 이 순서는 분명해. 누가 어떤 경위로 골랐는지는 원본과 실제로 인계받은 설명을 더 맞춰 봐야 한다."),u("seoyul","내가 가지고 있던 승인본이랑 내용도 같아. 밴드, 전환, 댄스 순서."),u("junyeon","그 서류…… 내일 같이 볼게. 오늘 나눠진 묶음도 가져올게."),u("player","그럼 원본은 섞이지 않게 여기에 남겨 두자."),u("narrator","버전 순서와 배포 순서를 한 묶음으로 보관했다. 아직 누구를 정해 놓고 부르는 자리는 아니었다."),u("minhyuk","내일 아침 선생님이 계실 때 다 같이 확인하자. 오늘 연습은 승인본으로 마무리하고."),u("seoyul","응. 남은 시간까지 전부 이 종이한테 주지는 말자."),u("player","끝나면 계단에서 잠깐 쉬자. 아까 사 둔 간식이 아직 있어.")]}],Be=[{id:"different-originals",title:"같은 시간을 잘못 기억한 걸까?",claims:[{id:"memory-only",speaker:"junyeon",text:"같은 안내를 받고 우리가 시간을 잘못 기억한 거 아닐까? 종이에 적힌 시간은 같았을 텐데."},{id:"waited-there",speaker:"world",text:"나는 내 쪽지의 시간에 맞춰 독서실 옆에서 기다렸어. 그 쪽지를 그대로 가져왔어."},{id:"compare-originals",speaker:"minhyuk",text:"기억이 다른지 종이가 다른지부터 구분하자. 그다음에 예약과 공지를 시간 순서로 보자."}],target:"memory-only",evidence:"memory-01",reason:"세계의 원본에는 15:40, 주인공의 원본에는 16:10이 적혀 있다. 같은 안내를 다르게 기억했다는 설명만으로는 서로 다른 두 종이를 설명할 수 없다. 누가 바꿨는지는 아직 별도로 확인해야 한다.",hint:"기억에 기대지 않아도 직접 나란히 읽을 수 있는 두 원본을 찾자."},{id:"who-set-the-place",title:"얼터에고가 장소를 바꿨을까?",claims:[{id:"ai-changed-it",speaker:"junyeon",text:"공지에 얼터에고 테스트라고 돼 있었잖아. 프로그램이 장소를 자동으로 바꿔 보낸 걸 거야."},{id:"check-capability",speaker:"juhan",text:"내 프로그램 이름과 같은 문구는 맞아. 하지만 이름만으로 쓰기 권한이나 실제 동작까지 같아지는 건 아니야."},{id:"three-destinations",speaker:"taewoo",text:"같은 시간에 세 곳으로 갈라졌어. 우리가 받은 문구와 실제 게시 방식을 같이 봐야 해."}],target:"ai-changed-it",evidence:"memory-06",reason:"허가된 내보내기에는 장소가 수신 집단별로 직접 입력됐고 자동 장소 변경은 꺼져 있다. 얼터에고에는 게시 권한도 없다. 표시 이름을 프로그램의 행동으로 여길 수는 없다. 누가 입력했는지는 인계와 당사자의 설명을 함께 대조한다.",hint:"제목이 아니라 수신 집단별 입력 항목, 자동 변경 설정, 게시 권한을 함께 보여 주는 자료다."},{id:"approved-before-distribution",title:"승인본은 배포 뒤에 도착했을까?",claims:[{id:"v4-was-too-late",speaker:"junyeon",text:"v3를 나눌 때는 승인된 v4가 아직 공용 폴더에 없었어. 최종본을 받을 수 없었던 거야."},{id:"kept-v4",speaker:"seoyul",text:"내가 전날 확인받아 챙긴 종이는 v4야. 그 종이와 공개된 버전 이력을 맞춰 보자."},{id:"need-receipt-order",speaker:"minhyuk",text:"승인, 공유, 수령 확인, 배포 선택이 어떤 순서인지 확인해야 해. 이름 하나로 끝낼 일은 아니야."}],target:"v4-was-too-late",evidence:"memory-08",reason:"E08에는 v4 승인·공유와 배포 담당 수령 확인이 먼저 있고, 다음 날 v3 선택·배포가 뒤에 있다. 배포 때 v4가 존재하지 않았다는 설명과 맞지 않는다. 실제 수령과 선택의 주체는 지금부터 본인의 설명을 원본에 맞춰 확인한다.",hint:"v3와 v4가 다르다는 자료만으로는 부족하다. 승인본이 언제 준비됐는지와 배포 순서가 함께 있는 기록을 고르자."}],Ae=[{id:"slip-1610",text:"1장 · 같은 만남의 쪽지에 15:40과 16:10이 나뉘어 적혔다."},{id:"booking-1700",text:"2장 · 댄스실 예약은 16:20에서 17:00으로 바뀌었지만 안내는 그대로였다."},{id:"split-notifications",text:"3장 · 16:40 모임 공지가 수신 집단마다 서로 다른 장소를 안내했다."},{id:"cue-v3",text:"4장 · 승인된 v4가 준비된 뒤에도 구버전 v3가 배포됐다."}];function Is(e,t){const s=Y.find(r=>r.id===e);return s?{id:`discover-${s.id}`,title:s.name,location:s.location,lines:s.lines,choices:[],memory:s.id,image:s.image}:{id:"discovery-unavailable",title:"아직 펼치지 않은 기록",location:t.location,lines:[u("narrator","이곳에서는 아직 확인할 자료가 보이지 않는다.")],choices:[]}}const Os={world:"그날 음료가 식도록 기다린 건 사실이야. 하지만 내가 {name}을 기다리고 싶었던 마음까지 네가 결정할 수는 없어.",hyunsol:"준비를 망친 게 무서웠던 건 아니야. 다음 약속도 틀어질까 봐 서로 눈치를 보게 된 게 싫었어.",taewoo:"기다리는 동안 내가 시간을 잘못 본 줄 알았어. 다음 연습에 오고 싶다는 말까지 겁내게 만들진 말아 줘.",taehun:"우리가 만나기로 했던 시간에는 별것 아닌 얘기도 있었어. 네 눈에 작아 보여도 우리한테는 필요한 시간이었어.",seoyul:"빈 의자를 그리다가 사람이 돌아오면 좋았어. 그 사람이 안 오게 만들고 나서 내 그림이 외로워 보인다고 말하면 안 되는 거야.",juhan:"네가 만든 알림에 내 프로그램 이름이 붙어 있었어. 내가 좋아해서 만든 것까지 친구들 사이를 갈라놓는 핑계가 된 건 속상해.",minhyuk:"내가 맡긴 일을 믿고 다른 준비를 했어. 그 믿음을 이용한 일은 반장으로서도, 친구로서도 그냥 넘길 수 없어.",junyeon:"네가 나랑 시간을 보내 줘도 다른 애들이랑 만나는 건 싫었어. 그 마음을 말하는 대신, 너희 약속부터 틀어지게 했어."};function Ds(e){const t=e.focus??"world",s=e.bonds.junyeon.affection>=70?"너는 가까이 와 줬는데, 나는 그때마다 더 많은 걸 확인하려고 했어. 다른 친구한테도 웃으면 나랑 있었던 시간이 사라지는 것처럼 굴었어.":e.bonds.junyeon.affection>=35?"네가 몇 번이나 같이 가자고 해 줬는데도, 다른 약속이 보이면 내 자리는 없는 거라고 단정했어.":"너랑 아직 잘 알지도 못하면서, 다른 애들이랑 가까워지는 것만 보고 나는 앞으로도 혼자일 거라고 정해 버렸어.";return{id:"revelation-responsibility",title:"상처받은 마음과, 상처 준 선택",location:"classroom",choices:[],lines:[u("narrator","네 번의 어긋남을 시간 순서로 놓았다. 종이, 예약 확인서, 공지 원문, 큐시트가 교실 가운데 놓여 있었다."),u("teacher","자료에 적힌 사실까지는 함께 확인했다. 이제 실제로 어떤 업무를 받았고 어떤 행동을 했는지 듣자."),u("player","담당이라는 이유만으로 전부 준연이 했다고 말하려는 건 아니야. 이 인계와 수령 확인부터 물어볼게."),u("minhyuk","첫 역할표의 인쇄·배부 업무를 네가 맡았고, 두 번째 장의 연습 조정 업무도 내가 직접 넘겼지."),u("junyeon","응. 그건 내가 받은 일이야. 내가 인계받고 확인한 것도 맞아."),u("player","큐시트 배포 대장의 수령 확인도 네가 실제로 받은 다음에 남긴 거야?"),u("junyeon","맞아. 다른 사람이 내 이름을 쓴 게 아니야. v4를 받아서 내용을 봤어."),u("teacher","지금 확인한 인계와 원본은 따로 대조하겠다. 모르는 부분까지 답할 필요는 없어. 쉬어야 하면 잠깐 멈출 수도 있고."),u("narrator","준연은 물컵을 쥐었다가 내려놓았다. 누구도 컵을 뺏거나 대답을 재촉하지 않았다."),u("junyeon","……첫 쪽지는 내가 고쳤어. 원래 약속은 세 시 사십 분이었어."),u("junyeon","세계한테 갈 건 그대로 두고, {name}한테 줄 것만 네 시 십 분으로 다시 뽑았어."),u("world","그래서 내 건 15:40이었구나. 우리가 서로 다른 시간을 말한 거고."),u("player","우리가 그날 접어 둔 두 장과 맞아. 장소는 같았고 내 시간만 늦었어."),u("junyeon","약속이 틀어지면 그날 네가 다른 데 안 가고, 내 옆에 올 줄 알았어."),u("narrator","세계가 책상 위의 쪽지를 다시 보았다. 처음 만났던 날의 간식 봉투가 잠깐 떠올랐다."),u("taewoo","연습실은? 나는 왜 옛 시간을 가지고 기다렸어?"),u("junyeon","내가 조정 업무를 맡았을 때 예약을 다섯 시로 바꿨어. 태우한테는 새 시간을 안 보냈어."),u("minhyuk","예약 변경 확인서에는 16:20에서 17:00. 인계표에는 변경 뒤 안내를 갱신하는 일까지 적혀 있어."),u("junyeon","알고 있었어. 전달해야 한다는 것도. 그냥 빠뜨린 게 아니었어."),u("player","세 곳으로 나뉜 공지도 같은 이유였어?"),u("junyeon","준비 지원에는 컴퓨터실, 밴드에는 밴드연습실, 댄스에는 강당이라고 썼어. 네 시 사십 분은 다 같게."),u("juhan","보관한 공지 세 장과 내보낸 대기열의 장소가 같아. 내 프로그램이 고른 곳이 아니었어."),u("junyeon","시험용 서식을 쓸 수 있는 담당 권한이 있었어. 얼터에고 테스트라는 제목이면 나한테 먼저 묻지 않을 것 같았어."),u("juhan","나는 그 이름 때문에 친구들 약속을 망친 줄 알고 내가 만든 것부터 다시 봤어."),u("junyeon","네 탓처럼 보이게 한 것도 내가 한 일이야. 미안해."),u("seoyul","마지막 큐시트는 승인본을 봤는데도 바꾼 거야?"),u("junyeon","응. v4가 맞다는 걸 봤어. 그런데 공용 폴더에 남아 있던 v3를 골라서 나눴어."),u("junyeon","공연까지 어긋나면 너희가 서로 못 믿게 될 거라고 생각했어. 그러면 나만 빼고 즐거운 날은 안 될 것 같았어."),u("taewoo","누구도 없는 연습 때 알아챘으니 다행이지, 그래서 괜찮았던 건 아니야. 우리 그 무대 정말 기다렸어."),u("junyeon","알아. 잘되라고 한 일도, 도와주려다 생긴 실수도 아니었어. 안 되게 하려고 골랐어."),u("teacher","오늘 아침 얘기했던 공연 중지 요청에도 지금 확인한 것과 다른 설명이 있어. 약속 때문에 준비를 빠뜨렸고 프로그램이 공지를 바꿨다는 내용이지. 그 요청에 관해서도 말해 줄 수 있니?"),u("junyeon","……그것도 내가 보냈어요. 내가 시간을 바꿔 놓고 애들이 늦은 것처럼. 내가 장소를 입력해 놓고 주한이 만든 프로그램 때문인 것처럼 썼어요."),u("juhan","그래서 아침에 내 이름이 나온 거구나. 프로그램을 지워야 하나까지 생각했는데."),u("junyeon","미안해. 이름을 지워야 하는 건 네 프로그램이 아니라, 내가 보낸 요청 안의 거짓말이야. 선생님께 정정할게."),u("world","처음엔 우리가 서로 오해한 것만 풀면 되는 줄 알았어. 네가 계속 그렇게 보이게 만들었다는 게 지금은 제일 화나."),u("narrator","세계의 말끝이 떨렸다. 누구도 지금 바로 괜찮다고 말하라고 하지 않았다."),u("narrator","준연의 마지막 말 뒤에 잠깐 정적이 남았다. 교실 밖에서는 페어 안내 방송을 시험하는 소리가 났다."),u("player","우리한테 서운했던 일이 있었던 건 들을게. 하지만 지금 말한 행동과 섞어서 없던 일로 만들지는 못해."),u("junyeon","너희가 둘씩 다음 약속을 잡으면, 나는 처음부터 없는 사람인 것 같았어. 내가 오면 웃음이 멈춘 날도 있었고."),u("hyunsol","준연이 말하려는데 우리가 장비 얘기로 넘어간 날은 있었어. 그건 내가 미안해. 그래도 일부러 널 빼자는 약속을 한 건 아니야."),u("taehun","서운했던 순간은 다시 이야기할 수 있어. 우리가 다른 친구를 만나는 시간을 지우지 않고도."),u("junyeon",s),u(t,Os[t]),u("player",t==="junyeon"?"너랑 같이 있던 시간도 내 선택이었어. 다른 친구들과 만날 시간도 내가 고를 수 있어야 해.":"내가 누군가를 만나고 싶었던 마음은 실제였어. 기다리고 헷갈렸던 그 사람의 마음도."),u("junyeon","상처받았다고 말하면 내가 고친 시간까지 이해받을 수 있을 줄 알았어. 그런데 그건 내가 다른 사람을 기다리게 만든 시간이네."),u("teacher","당사자의 설명은 보관된 두 쪽지, 예약 변경과 인계, 공지 원문, 버전 순서와 맞는다. 공연 중지 요청의 잘못된 주장도 지금 확인한 내용으로 정정하겠다."),u("teacher","행사 담당 선생님께는 승인된 v4로 안전하게 진행할 준비가 됐다고 전달할게. 공연 시간은 조금 늦춰 두었어. 준비한 학생들이 무대로 돌아갈 수 있다."),u("taewoo","그러면 끝난 게 아니네. 우리 아직 오늘 춤출 수 있네."),u("minhyuk","담당 업무를 넘기고 받았다는 확인도 본인에게 들었어. 이름이나 계정 표시만으로 결정한 건 아니다."),u("junyeon","내가 잘못 보낸 안내를 정정할게. 받은 사람이 다시 헷갈리지 않도록 원래 시간과 장소를 적어서."),u("world","그건 해 줘. 하지만 오늘 바로 예전처럼 둘이 만나겠다고는 못 하겠어."),u("junyeon","응. 미안하다고 했으니까 지금 웃어 달라는 말은 안 할게."),u("taewoo","우리는 승인된 순서로 공연할 거야. 기다려 준 사람들 앞에서, 연습한 것까지 없애지는 않을 거야."),u("seoyul","전시도 마저 걸자. 고쳐야 할 건 고치고, 약속한 시간도 되찾고."),u("teacher","이제 정할 것은 함께 하는 프로젝트와 개인적인 관계다. 수업을 받을 권리나 학교를 다닐 자격을 여기서 표결하지는 않는다."),u("teacher","프로젝트 참여를 끝내는 경우에도 정정과 자료 반환은 필요하다. 다시 기회를 주면 감독 아래 맡길 일과 지켜야 할 조건을 구체적으로 정하자."),u("junyeon","어느 쪽이든 내가 한 일을 다른 사람한테 넘기지는 않을게."),u("narrator","나는 기록 옆에 놓인 손을 거두고 준연을 보았다. 누군가를 불쌍히 여기는 마음만으로 답할 수 없는 약속이 남아 있었다.")]}}const Ve=(e,t=100)=>Math.max(0,Math.min(t,e)),ce=e=>typeof e=="string"&&U.includes(e),ln=e=>typeof e=="string"&&Se.some(t=>t.id===e),H=e=>[...new Set(e)],_e=[["D − 64","D − 51","D − 50"],["D − 49","D − 33","D − 32"],["D − 31","D − 16","D − 15"],["D − 14","D − 2","D − 1"],["FAIR DAY · 오전","FAIR DAY · 공연","FAIR DAY · 저녁"]],qs={world:["band","garden","media","classroom","cafeteria","auditorium"],hyunsol:["chemistry","library","classroom","garden","computer","cafeteria"],taewoo:["dance","auditorium","garden","classroom","cafeteria","walk"],taehun:["observatory","library","garden","classroom","walk","cafeteria"],seoyul:["art","band","garden","media","classroom","cafeteria"],juhan:["computer","library","garden","classroom","media","cafeteria"],minhyuk:["classroom","auditorium","garden","library","cafeteria","walk"],junyeon:["chemistry","library","classroom","garden","computer","cafeteria"]};function Mt(e){return e.verdict==="forgive"?100:70}function Ft(e){const t=e.trim();return Array.from(t).length>=1&&Array.from(t).length<=12&&!/[<>\u0000-\u001f\u007f]/.test(t)}function Ps(e,t){if(typeof e!="string"||!Ft(e))throw new RangeError("이름을 1~12자로 입력해 주세요.");const s={version:2,name:e.trim(),seed:Number.isFinite(t)?t>>>0:0,chapter:0,act:0,phase:"story",mode:"main",line:0,response:null,focus:null,visitor:null,location:"classroom",bonds:Object.fromEntries(U.map(r=>[r,{affection:8,trust:8}])),flags:["edition:earned-routes"],clues:[],actions:2,visited:[],visits:Object.fromEntries(U.map(r=>[r,0])),sceneKey:"",backlog:[],verdict:"pending",repairStep:0,repairDone:!1,trialRound:0,trialFeedback:null,trialOrder:[],ending:null,date:_e[0][0]};return W(s,"main")}function me(e){var t;if(e.mode==="hangout"&&e.visitor){const s=`meeting-place:${e.sceneKey}:`,r=(t=e.flags.find(a=>a.startsWith(s)))==null?void 0:t.slice(s.length);return Ke(e.visitor,e,ln(r)?r:e.location)}return e.mode==="discovery"?Is(e.sceneKey.replace(/^discover-/,""),e):e.mode==="revelation"?Ds(e):e.mode==="repair"?bs(Math.min(3,e.repairStep),e):e.mode==="finale"?Ss(e):Tn(e.chapter,e.act,e)}function Mn(e){return e.response??me(e).lines}function Ls(e,t){return be(t,`${e.seed}:romance:${e.sceneKey}`)}function It(e,t){const s=un(e).find(c=>{var l;return((l=c.lines.find(o=>ce(o.speaker)))==null?void 0:l.speaker)===t});if(s)return s.location;const r=qs[t],a=U.indexOf(t);return r[(e.seed%r.length+e.chapter*3+e.act*2+(2-e.actions)+a)%r.length]}function W(e,t,s){let r={...e,phase:"story",mode:t,line:0,response:null,sceneKey:s??e.sceneKey,flags:t==="finale"?H([...e.flags,"edition:earned-routes"]):e.flags};const a=me(r);return r={...r,sceneKey:s??a.id,location:a.location},r}function Ot(e,...t){return{...e,backlog:[...e.backlog,...t].slice(-800)}}function Dt(e,t=[]){const s={...e.bonds};for(const r of t){if(!ce(r.person)||r.person==="junyeon"&&e.verdict==="exclude")continue;const a=s[r.person],c=Number.isFinite(r.affection)?r.affection??0:0,l=Number.isFinite(r.trust)?r.trust??0:0;s[r.person]={affection:Ve(a.affection+c,r.person==="junyeon"?Mt(e):100),trust:Ve(a.trust+l)}}return{...e,bonds:s}}function Ks(e){return new Set(e.flags.flatMap(t=>{const s=/^junyeon-focus:hangout-junyeon-([1-4])-v[12]$/.exec(t);return s?[s[1]]:[]})).size}function Bs(e){return e.verdict==="forgive"&&e.repairDone&&Ks(e)>=2&&e.bonds.junyeon.affection>=85&&e.bonds.junyeon.trust>=70&&(e.focus===null||e.focus==="junyeon")&&!e.flags.some(t=>t.startsWith("romance:")&&t!=="romance:junyeon")}function Vs(e,t){const s=(t.flags??[]).filter(r=>r.startsWith("romance:"));return s.length?e.mode!=="finale"?!1:s.every(r=>{const a=r.slice(8);return ce(a)&&(a==="junyeon"?Bs(e):e.focus===a&&(e.flags.includes("legacy:finale")||ks(e,a)))}):!0}function dt(e,t){if(e.phase!=="story"||e.response!==null)return e;const s=me(e),r=s.choices.find(l=>l.id===t);if(e.line<s.lines.length||!r||!Vs(e,r)||e.flags.includes(`choice:${e.sceneKey}:${r.id}`))return e;const a=e.flags.includes(`read:${s.id}`)?e:Dt(e,r.effects),c=Ot({...a,line:0,response:r.response,flags:H([...a.flags,`choice:${e.sceneKey}:${r.id}`,...r.flags??[]])},{speaker:"player",text:r.text});return r.response.length?c:We(c,s)}function pt(e){if(e.phase!=="story")return e;const t=me(e),s=Mn(e);if(e.line>=s.length)return e.response===null&&t.choices.length?e:We(e,t);const r=Ot({...e,line:e.line+1},s[e.line]);return r.line===s.length&&(e.response!==null||!t.choices.length)?We(r,t):r}function We(e,t){if(e.mode==="hangout"&&e.visitor&&Tr(e.visitor,e.chapter,e.sceneKey.includes("-v2:")?2:1)&&!e.flags.includes(`activity:${e.sceneKey}`)&&!e.flags.includes(`activity-skipped:${e.sceneKey}`))return{...e,phase:"activity-invite",line:0,response:null};let s={...e,flags:H([...e.flags,`read:${t.id}`]),line:0,response:null};if(e.mode==="discovery"){const r=Y.find(a=>`discover-${a.id}`===e.sceneKey);return r&&(s={...s,clues:H([...s.clues,r.id])}),{...s,phase:"map"}}if(e.mode==="hangout"&&e.visitor)return e.visitor==="junyeon"&&e.chapter<4&&e.verdict==="pending"&&(s={...s,flags:H([...s.flags,`junyeon-focus:${t.id}`])}),{...s,phase:"map",visits:{...s.visits,[e.visitor]:s.visits[e.visitor]+1}};if(e.mode==="revelation")return{...s,phase:"verdict"};if(e.mode==="repair")return e.repairStep<3?W({...s,repairStep:e.repairStep+1,date:`후일담 · ${e.repairStep+2}주째`},"repair"):W({...s,repairStep:4,repairDone:!0,date:"후일담 · 4주 뒤"},"finale");if(e.mode==="finale"){const r=[...s.flags].reverse().find(a=>/^(romance|friendship|unresolved|distance):/.test(a));return{...s,phase:"ending",ending:`${r??`friendship:${e.focus??"class"}`}:${e.verdict}`}}return s={...s,actions:2,visited:[],visitor:null},e.chapter===4&&e.act===0&&e.verdict==="pending"&&qt(s)?_s(s):{...s,phase:"map"}}function qt(e){return Y.every(t=>e.clues.includes(t.id))}function cn(e){return Y.filter(t=>!e.clues.includes(t.id)&&(t.chapter<e.chapter||t.chapter===e.chapter&&t.unlockAct<=e.act)).map(t=>({id:t.id,location:t.location,label:`${Se.find(s=>s.id===t.location).name}에서 확인하기`}))}function Pt(e){return W({...e,visitor:null,trialRound:0,trialFeedback:null,trialOrder:[],flags:e.flags.filter(t=>!t.startsWith("choice:main-5-1:"))},"main","main-5-1")}function _s(e){return{...e,phase:"trial",trialRound:0,trialFeedback:null,trialOrder:[],flags:H([...e.flags,"trial:convened"])}}function Ws(e){return e.phase!=="map"||!e.flags.includes(`read:${Tn(e.chapter,e.act,e).id}`)||cn(e).length?e:e.chapter===4&&e.act===0&&e.verdict==="pending"?Pt(e):e.act<2?W({...e,act:e.act+1,date:_e[e.chapter][e.act+1],visitor:null},"main"):e.chapter===1?{...e,phase:"focus"}:e.chapter<4?W({...e,chapter:e.chapter+1,act:0,date:_e[e.chapter+1][0],visitor:null},"main"):e.verdict==="pending"?e:e.verdict==="forgive"&&!e.repairDone?W({...e,repairStep:0,date:"후일담 · 1주째",visitor:null},"repair"):W({...e,date:"후일담 · 4주 뒤",visitor:null},"finale")}function ht(e,t){return e.phase!=="focus"||e.chapter!==1||e.act!==2||!(t===null||ce(t))||cn(e).length||!e.flags.includes("read:main-2-3")?e:W({...e,focus:t,chapter:2,act:0,visitor:null,date:_e[2][0],flags:H([...e.flags,`focus:${t??"none"}`])},"main")}function Hs(e,t,s,r=!1){if(e.phase!=="map"||!ce(t)||!ln(s)||e.actions<1||e.visited.includes(t)||!An(t,e)||t==="junyeon"&&e.verdict==="exclude"||It(e,t)!==s)return e;const a=Ke(t,e,s),c=`${a.id}:visit-${e.visits[t]+1}`;return W({...e,actions:e.actions-1,visited:[...e.visited,t],visitor:t,location:s,flags:H([...e.flags,`meeting-place:${c}:${s}`])},"hangout",c)}function mt(e,t){return e.phase!=="activity-invite"||e.mode!=="hangout"||!e.visitor?e:t?{...e,phase:"activity"}:We({...e,flags:H([...e.flags,`activity-skipped:${e.sceneKey}`])},me(e))}function Gs(e,t){if(e.phase!=="activity"||e.mode!=="hangout"||!e.visitor||e.flags.includes(`activity:${e.sceneKey}`))return e;const s=Number.isFinite(t)?Math.floor(Ve(t,3)):0,r=s?Dt(e,[{person:e.visitor,affection:s*2,trust:s*3}]):e;return We({...r,flags:H([...r.flags,`activity:${e.sceneKey}`,`activity-score:${e.sceneKey}:${s}`])},me(e))}function un(e,t){return e.phase!=="map"?[]:Y.filter(s=>!e.clues.includes(s.id)&&(e.chapter>s.chapter||e.chapter===s.chapter&&e.act>=s.unlockAct)&&s.requires.every(r=>e.clues.includes(r))&&(!t||s.location===t))}function Us(e,t){const s=un(e,e.location).find(r=>r.id===t);return s?W({...e,visitor:null,location:s.location},"discovery",`discover-${t}`):e}function Js(e,t,s){if(e.phase!=="trial"||e.trialFeedback||e.trialRound>=Be.length)return e;const r=Be[e.trialRound];if(!r.claims.some(c=>c.id===t)||!e.clues.includes(s))return e;const a=r.target===t&&r.evidence===s;return{...e,trialFeedback:{ok:a,text:a?r.reason:r.hint}}}function Sn(e){return e.phase!=="trial"||!e.trialFeedback?e:{...e,trialRound:e.trialRound+(e.trialFeedback.ok?1:0),trialFeedback:null}}function Xs(e,t){return e.phase!=="trial"||e.trialRound!==Be.length||e.trialFeedback||t.length!==Ae.length||new Set(t).size!==t.length||t.some(r=>!Ae.some(a=>a.id===r))?e:Ae.every((r,a)=>r.id===t[a])?W({...e,trialOrder:[...t],trialFeedback:null},"revelation"):{...e,trialOrder:[...t],trialFeedback:{ok:!1,text:"처음 어긋난 쪽지부터 페어 전야의 배포까지, 일어난 순서를 다시 살펴보자."}}}function ft(e,t){return e.phase!=="verdict"||e.verdict!=="pending"||e.chapter!==4||t!=="exclude"&&t!=="forgive"?e:W({...e,verdict:t,act:1,visitor:null,date:_e[4][1],flags:H([...e.flags,`verdict:${t}`])},"main")}const Ys=["main","hangout","discovery","revelation","repair","finale"],Zs=["story","map","focus","activity-invite","activity","trial-briefing","trial","verdict","ending"],yt=e=>{if(!e||typeof e!="object"||!("speaker"in e)||!("text"in e)||!(ce(e.speaker)||["player","narrator","teacher","alter"].includes(String(e.speaker)))||typeof e.text!="string"||e.text.length>1e4)return!1;const t=e;return(t.location===void 0||ln(t.location))&&(t.art===void 0||typeof t.art=="string"&&!!$e(t.art))&&(t.expression===void 0||["neutral","smile","shy","serious","surprised","sad"].includes(t.expression))},Ze=(e,t=5e3)=>Array.isArray(e)&&e.length<=t&&e.every(s=>typeof s=="string"&&s.length<=500),he=(e,t,s)=>typeof e=="number"&&Number.isInteger(e)&&e>=t&&e<=s;function Lt(e){var t,s,r;try{if(!e||typeof e!="object")return null;const a=e;if(a.version!==2||typeof a.name!="string"||!Ft(a.name)||!he(a.seed,0,4294967295)||!he(a.chapter,0,4)||!he(a.act,0,2)||!Zs.includes(a.phase)||!Ys.includes(a.mode)||!he(a.line,0,2e3)||!(a.response===null||Array.isArray(a.response)&&a.response.length<=2e3&&a.response.every(yt))||!(a.focus===null||ce(a.focus))||!(a.visitor===null||ce(a.visitor))||!ln(a.location)||!Ze(a.flags)||!Ze(a.clues,8)||!he(a.actions,0,2)||!Ze(a.visited,8)||!a.visited.every(ce)||typeof a.sceneKey!="string"||a.sceneKey.length>300||!["pending","exclude","forgive"].includes(a.verdict)||!he(a.repairStep,0,4)||typeof a.repairDone!="boolean"||!he(a.trialRound,0,Be.length)||!Ze(a.trialOrder,4)||!(a.ending===null||typeof a.ending=="string")||typeof a.date!="string"||a.date.length>100||!Array.isArray(a.backlog)||a.backlog.length>800||!a.backlog.every(yt)||!(a.trialFeedback===null||typeof a.trialFeedback=="object"&&typeof a.trialFeedback.ok=="boolean"&&typeof a.trialFeedback.text=="string"&&a.trialFeedback.text.length<=2e3)||a.chapter<4&&(a.verdict!=="pending"||["trial-briefing","trial","verdict","ending"].includes(a.phase)||["revelation","repair","finale"].includes(a.mode))||a.repairDone&&(a.verdict!=="forgive"||a.repairStep!==4)||a.mode==="repair"&&(a.verdict!=="forgive"||a.repairStep>3)||a.phase==="focus"&&(a.chapter!==1||a.act!==2)||(a.phase==="activity"||a.phase==="activity-invite"||a.mode==="hangout")&&!a.visitor||(a.phase==="activity"||a.phase==="activity-invite")&&a.mode!=="hangout"||(a.phase==="trial"||a.phase==="trial-briefing")&&(a.chapter!==4||a.act!==0||a.verdict!=="pending"||!qt(a))||a.phase==="verdict"&&(a.mode!=="revelation"||a.verdict!=="pending")||a.clues.some(p=>!Y.some(j=>j.id===p&&(j.chapter<a.chapter||j.chapter===a.chapter&&j.unlockAct<=a.act)&&j.requires.every(b=>a.clues.includes(b))))||new Set(a.trialOrder).size!==a.trialOrder.length||a.trialOrder.some(p=>!Ae.some(j=>j.id===p)))return null;const c={},l={};for(const p of U){const j=(t=a.bonds)==null?void 0:t[p];if(!j||typeof j.affection!="number"||!Number.isFinite(j.affection)||typeof j.trust!="number"||!Number.isFinite(j.trust)||!he((s=a.visits)==null?void 0:s[p],0,1e4))return null;c[p]={affection:Ve(j.affection,p==="junyeon"?Mt(a):100),trust:Ve(j.trust)},l[p]=a.visits[p]}const o={...a,name:a.name.trim(),bonds:c,visits:l,flags:H(a.flags),clues:H(a.clues),visited:H(a.visited),trialOrder:[...a.trialOrder],backlog:a.backlog.map(p=>({...p})),response:((r=a.response)==null?void 0:r.map(p=>({...p})))??null,trialFeedback:a.trialFeedback?{...a.trialFeedback}:null};if(o.mode==="finale"&&!o.flags.includes("edition:earned-routes")&&!o.flags.includes("legacy:finale")&&o.flags.push("legacy:finale"),o.phase==="activity"&&!o.flags.some(p=>p.startsWith(`choice:${o.sceneKey}:`))&&(o.phase="story",o.line=0,o.response=null),o.phase==="trial-briefing"||o.phase==="trial"&&!o.flags.includes("read:main-5-1"))return Pt(o);if(o.phase==="trial"&&!o.flags.includes("trial:convened")&&o.flags.push("trial:convened"),o.phase==="focus"&&(cn(o).length||!o.flags.includes("read:main-2-3"))&&(o.phase="map"),o.phase==="map"&&!o.flags.includes(`read:${Tn(o.chapter,o.act,o).id}`))return W({...o,visitor:null},"main");if(o.mode==="discovery"&&!Y.some(p=>`discover-${p.id}`===o.sceneKey)||o.mode==="discovery"&&o.phase==="story"&&!un({...o,phase:"map"},o.location).some(p=>`discover-${p.id}`===o.sceneKey))return null;const d=me(o),h=Mn(o);return o.response!==null&&!d.choices.some(p=>o.flags.includes(`choice:${o.sceneKey}:${p.id}`))||o.phase==="story"&&o.line>h.length||o.phase==="story"&&o.mode!=="hangout"&&o.sceneKey!==d.id||(o.phase==="story"||o.phase==="activity"||o.phase==="activity-invite")&&o.mode==="hangout"&&o.sceneKey!==`${d.id}:visit-${o.visits[o.visitor]+1}`?null:o}catch{return null}}const Kt="reaction-romance-v2:",Bt=["auto",1,2,3,4,5,6,7,8,9,10],Vt=e=>Bt.includes(e);function Fn(){try{return globalThis.localStorage??null}catch{return null}}function jt(e,t,s=Fn()){if(!Vt(e)||!s)return!1;const r=Lt(t);if(!r)return!1;try{return s.setItem(`${Kt}${e}`,JSON.stringify({state:r,savedAt:new Date().toISOString()})),!0}catch{return!1}}function rn(e,t=Fn()){if(!Vt(e)||!t)return null;try{const s=t.getItem(`${Kt}${e}`);if(!s)return null;const r=JSON.parse(s);if(typeof r.savedAt!="string"||!Number.isFinite(Date.parse(r.savedAt)))return null;const a=Lt(r.state);return a?{state:a,savedAt:r.savedAt}:null}catch{return null}}function Qs(e=Fn()){return Bt.flatMap(t=>{const s=rn(t,e);return s?[{slot:t,...s}]:[]})}const Qe=(e,t)=>{try{const s=localStorage.getItem(`reaction-romance-v2:${e}`);return s?JSON.parse(s):t}catch{return t}},en=(e,t)=>{try{localStorage.setItem(`reaction-romance-v2:${e}`,JSON.stringify(t))}catch{}},Cn=e=>{const t=Y.find(s=>s.id===e);return t?{id:t.id,image:t.image,alt:`${t.name}. ${t.description}`,caption:"이야기 속 자료"}:void 0},nn=e=>e==="auto"?"auto":Number(e),xt=e=>`./${St(e)}`,tn=e=>{var t;return e==="player"?"나":e==="narrator"?"":e==="teacher"?"담임 선생님":e==="alter"?"얼터에고":((t=Ce[e])==null?void 0:t.name)??""},je=e=>Ce[e].name;function bt({title:e,onClose:t,children:s}){const r=f.useRef(null);return f.useEffect(()=>{var c;const a=document.activeElement;return(c=r.current)==null||c.focus(),()=>a==null?void 0:a.focus()},[]),n.jsx("div",{className:"romance-modal-backdrop",onClick:t,children:n.jsxs("section",{className:"romance-modal",role:"dialog","aria-modal":"true","aria-label":e,tabIndex:-1,ref:r,onClick:a=>a.stopPropagation(),onKeyDown:a=>{var d;if(a.key!=="Tab")return;const c=Array.from(((d=r.current)==null?void 0:d.querySelectorAll('button:not(:disabled),a[href],input,select,[tabindex="0"]'))??[]),l=c[0],o=c.at(-1);l&&(a.shiftKey&&(document.activeElement===l||document.activeElement===r.current)?(a.preventDefault(),o==null||o.focus()):!a.shiftKey&&document.activeElement===o&&(a.preventDefault(),l.focus()))},children:[n.jsxs("header",{children:[n.jsx("h2",{children:e}),n.jsx("button",{"aria-label":"창 닫기",onClick:t,children:n.jsx(gr,{size:21})})]}),n.jsx("div",{className:"romance-modal-body",children:s})]})})}function ea(){var Gn,Un,Jn,Xn;f.useEffect(()=>Fs(window,document.documentElement),[]);const[e,t]=f.useState(null),[s,r]=f.useState(""),[a,c]=f.useState(""),[l,o]=f.useState("none"),[d,h]=f.useState("classroom"),[p,j]=f.useState(!1),[b,m]=f.useState({key:"",count:0}),[g,z]=f.useState(document.hidden),[v,k]=f.useState(()=>{const i=Qe("read",[]);return Array.isArray(i)?i.filter(y=>typeof y=="string"):[]}),[A,M]=f.useState(()=>{const i=Qe("endings",[]);return Array.isArray(i)?i.filter(y=>typeof y=="string"):[]}),[S,E]=f.useState(()=>{const i=Qe("art",[]);return Array.isArray(i)?i.filter(y=>typeof y=="string"&&$e(y)):[]}),[q,Re]=f.useState(null),[O,He]=f.useState(()=>{const i=Qe("settings",{});return{speed:[0,12,24,45].includes(Number(i==null?void 0:i.speed))?Number(i.speed):24,music:(i==null?void 0:i.music)===!0,volume:typeof(i==null?void 0:i.volume)=="number"?Math.max(0,Math.min(.8,i.volume)):.35}}),[Ge,In]=f.useState(""),[_t,Wt]=f.useState(null),[V,dn]=f.useState(null),[Te,On]=f.useState(null),[Me,Dn]=f.useState(null),[pn,Ht]=f.useState(0),[qn,Gt]=f.useState(0),[Pn,hn]=f.useState(null),[Fe,Ut]=f.useState("world"),Ln=f.useRef(!1),Jt=f.useRef(e);Jt.current=e;const P=e?me(e):null,Ue=e?Mn(e):[],F=e?Ue[e.line]:void 0,L=(F==null?void 0:F.text.replaceAll("{name}",(e==null?void 0:e.name)??""))??"",se=e?`${e.sceneKey}:${e.response?"r":"l"}:${e.line}:${(F==null?void 0:F.speaker)??""}:${L}`:"",fe=zs(b,se,L.length,O.speed===0),Kn=i=>m({key:se,count:i}),Je=(e==null?void 0:e.trialOrder)??[],mn=i=>t(y=>y&&{...y,trialOrder:typeof i=="function"?i(y.trialOrder):i}),ue=!!e&&e.phase==="story"&&!e.response&&e.line>=Ue.length&&!!(P!=null&&P.choices.length),Bn=e&&P?Ls(e,P.choices):[],fn=F&&U.includes(F.speaker)?F.speaker:(e==null?void 0:e.visitor)??((Gn=Ue.slice(0,((e==null?void 0:e.line)??0)+1).reverse().find(i=>U.includes(i.speaker)))==null?void 0:Gn.speaker),yn=e?un(e):[],Xt=yn.filter(i=>i.location===d),Z=e?cn(e):[],Vn=e?U.filter(i=>!(i==="junyeon"&&e.verdict==="exclude")).map(i=>({id:i,name:je(i),color:Ce[i].color,place:It(e,i),available:e.actions>0&&!e.visited.includes(i)&&An(i,e),visited:e.visited.includes(i),exhausted:!An(i,e)})):[],_n=Vn.filter(i=>i.place===d),Ie=Y.filter(i=>e==null?void 0:e.clues.includes(i.id)),ae=Ie.find(i=>i.id===_t)??Ie[0],ge=e?Be[e.trialRound]:void 0,Yt=e&&ge?be(ge.claims,`${e.seed}:${ge.id}:claims`).map(i=>i.value):[],Zt=e?be(Ae,`${e.seed}:reconstruction`).map(i=>i.value):[],Qt=Ie.map(i=>({id:i.id,name:i.name,location:i.location,description:i.description,inspection:[]})),er=Object.fromEntries(Y.map(i=>[i.id,Cn(i.id)])),ie=F??(ue?P==null?void 0:P.lines.at(-1):void 0),G=$e(As(Ue,(e==null?void 0:e.line)??0)),jn=e?Cs(e):null,Wn=e!=null&&e.sceneKey.includes("-v2:")?2:1,ve=e!=null&&e.visitor?Et(e.visitor,e.chapter,Wn,e.seed):null,xn=i=>i.replaceAll("{name}",(e==null?void 0:e.name)??""),ke=()=>{o("none"),hn(null)},Q=i=>In(i),K=i=>t(y=>y&&i(y));function bn(){if(!(!e||l!=="none"||V||e.phase!=="story"||ue)){if(fe<L.length){Kn(L.length);return}L&&!v.includes(se)&&k(i=>[...i,se]),K(pt)}}function nr(i){i.preventDefault();try{const y=Ps(s,crypto.getRandomValues(new Uint32Array(1))[0]);document.activeElement instanceof HTMLElement&&document.activeElement.blur(),t(y),c(""),j(!1),h("classroom")}catch{c("이름을 1~12자로 입력해 주세요. 한글·영문·숫자를 사용할 수 있어요.")}}function I(i){j(!1),o(i),hn(null)}function tr(i){const y=rn(nn(i));if(!y){Q("저장 파일을 불러올 수 없어요.");return}t(y.state),Gt(X=>X+1),h(y.state.location),j(!1),ke(),Q("불러왔어요.")}function rr(i){if(e){if(rn(nn(i))&&Pn!==i){hn(i);return}jt(nn(i),e)?(ke(),Q(`${i}번 슬롯에 저장했어요.`)):Q("브라우저 저장 공간을 확인해 주세요.")}}function sr(){if(!e)return;if(Z.length){h(Z[0].location),Q(Z[0].label);return}const i=Ws(e);if(i===e){Q("진행 중인 이야기를 마쳐 주세요.");return}t(i),h("classroom")}function Hn(){var y;if(!e||!Te||!Me)return;const i=Js(e,Te,Me);t(i),i!==e&&((y=i.trialFeedback)!=null&&y.ok)&&Ht(X=>X+1)}function ar(){document.fullscreenElement?document.exitFullscreen().catch(()=>Q("전체화면을 종료하지 못했어요.")):document.documentElement.requestFullscreen?document.documentElement.requestFullscreen().catch(()=>Q("이 브라우저에서는 전체화면을 지원하지 않아요.")):Q("이 브라우저에서는 전체화면을 지원하지 않아요.")}return f.useEffect(()=>{e&&!jt("auto",e)&&!Ln.current&&(Ln.current=!0,Q("자동 저장을 하지 못했어요. 저장 공간을 확인해 주세요."))},[e]),f.useEffect(()=>{en("read",v)},[v]),f.useEffect(()=>{(e==null?void 0:e.phase)==="story"&&G&&E(i=>i.includes(G.id)?i:[...i,G.id])},[e==null?void 0:e.phase,G==null?void 0:G.id]),f.useEffect(()=>{en("art",S)},[S]),f.useEffect(()=>(en("settings",O),ut(O.music,O.volume),()=>ut(!1,0)),[O]),f.useEffect(()=>{const i=()=>z(document.hidden);return document.addEventListener("visibilitychange",i),()=>document.removeEventListener("visibilitychange",i)},[]),f.useEffect(()=>{if(g||l!=="none"||V||!L||O.speed===0||fe>=L.length)return;const i=setTimeout(()=>m({key:se,count:Math.min(fe+1,L.length)}),O.speed);return()=>clearTimeout(i)},[se,fe,L,O.speed,g,l,V]),f.useEffect(()=>{if(!p||g||l!=="none"||V||(e==null?void 0:e.phase)!=="story"||ue||fe<L.length)return;const i=setTimeout(bn,Math.max(1300,L.length*30));return()=>clearTimeout(i)},[p,g,l,V,se,fe,ue,e==null?void 0:e.phase]),f.useEffect(()=>{if(Ge){const i=setTimeout(()=>In(""),4300);return()=>clearTimeout(i)}},[Ge]),f.useEffect(()=>{On(null),Dn(null)},[e==null?void 0:e.trialRound,e==null?void 0:e.phase,qn]),f.useEffect(()=>{(e==null?void 0:e.phase)==="map"&&h(e.location)},[e==null?void 0:e.phase,e==null?void 0:e.sceneKey]),f.useEffect(()=>{var i;e!=null&&e.trialFeedback&&((i=document.querySelector(".romance-trial-feedback"))==null||i.scrollIntoView({block:"nearest"}))},[e==null?void 0:e.trialFeedback]),f.useEffect(()=>{if((e==null?void 0:e.phase)==="ending"&&e.ending&&!A.includes(e.ending)){const i=[...A,e.ending];M(i),en("endings",i)}},[e==null?void 0:e.phase,e==null?void 0:e.ending]),f.useEffect(()=>{const i=y=>{if(y.key==="Escape"){y.preventDefault(),V?dn(null):l!=="none"?ke():I("menu");return}if(!(l!=="none"||V||y.ctrlKey||y.metaKey||y.altKey||y.target instanceof HTMLElement&&y.target.closest("input,textarea,select,button,a"))){if((e==null?void 0:e.phase)==="story"&&(y.key===" "||y.key==="Enter"))y.preventDefault(),bn();else if(ue&&/^[1-9]$/.test(y.key)){const X=Bn[Number(y.key)-1];X&&(y.preventDefault(),K(gn=>dt(gn,X.value.id)))}}};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)}),n.jsxs("main",{className:`romance-app${e?" in-game":""}`,children:[n.jsx("div",{className:"romance-backdrop",style:{backgroundImage:`url(${xt(e?e.phase==="map"?d:(ie==null?void 0:ie.location)??(P==null?void 0:P.location)??e.location:"classroom")})`}}),n.jsxs("header",{className:"romance-header",children:[n.jsxs("button",{className:"romance-brand",onClick:()=>I("menu"),"aria-label":"메뉴 열기",children:[n.jsx("span",{children:"RE:ACTION"}),n.jsx("small",{children:"빈자리에 남긴 약속"})]}),n.jsxs("div",{className:"romance-header-right",children:[e&&n.jsxs("span",{className:"romance-calendar",children:[e.date,n.jsxs("small",{children:[e.chapter+1,"장 · 1학년 1반"]})]}),n.jsx("button",{"aria-label":O.music?"배경음 끄기":"배경음 켜기",onClick:()=>He(i=>({...i,music:!i.music})),children:O.music?n.jsx(wt,{size:19}):n.jsx(yr,{size:19})}),n.jsx("button",{"aria-label":"전체화면",onClick:ar,children:n.jsx(jr,{size:19})}),n.jsx("button",{"aria-label":"설정",onClick:()=>I("settings"),children:n.jsx(et,{size:19})}),n.jsx("button",{"aria-label":"메뉴",onClick:()=>I("menu"),children:n.jsx(xr,{size:21})})]})]}),e?n.jsxs(n.Fragment,{children:[e.phase==="story"&&P&&n.jsxs("section",{className:"romance-story","aria-label":"이야기",inert:l!=="none"||!!V,children:[n.jsxs("div",{className:`romance-stage${G?" has-event-art":""}`,children:[n.jsxs("div",{className:"romance-scene-title",children:[n.jsx("h1",{children:P.title}),n.jsxs("p",{children:[n.jsx(sn,{size:14}),xe[(ie==null?void 0:ie.location)??P.location].name]})]}),G?n.jsxs("figure",{className:"romance-event-art",children:[n.jsx("img",{src:`./${Pe(G.id)}`,alt:G.alt}),n.jsxs("figcaption",{children:[n.jsx(ne,{size:13}),G.title,n.jsx("button",{onClick:()=>{Re(G.id),I("gallery")},children:"그림 보기"})]})]},G.id):P.image?n.jsx("img",{className:"romance-scene-art",src:`./${P.image}`,alt:`${P.title} - 함께한 순간`}):fn&&n.jsx("div",{className:`romance-portrait-card emotion-${(ie==null?void 0:ie.expression)??"neutral"}`,children:n.jsx(le,{id:fn})},fn)]}),n.jsx("div",{className:`romance-dialogue${ue?" with-choices":""}`,children:ue?n.jsx("div",{className:"romance-choices","aria-label":"대답 선택",children:Bn.map(({value:i},y)=>n.jsxs("button",{onClick:()=>K(X=>dt(X,i.id)),children:[n.jsx("span",{children:String(y+1).padStart(2,"0")}),n.jsx("b",{children:xn(i.text)}),n.jsx(Ne,{size:18})]},i.id))}):n.jsxs("button",{className:"romance-line",onClick:bn,"aria-label":L?`${(F==null?void 0:F.speaker)==="player"?e.name:tn((F==null?void 0:F.speaker)??"")} ${L} - 다음 대사`:"이야기 이어가기",children:[n.jsx("b",{children:(F==null?void 0:F.speaker)==="player"?e.name:tn((F==null?void 0:F.speaker)??"")}),n.jsxs("p",{className:"romance-line-text",children:[n.jsx("span",{className:"romance-line-measure","aria-hidden":"true",children:L||"계속"}),n.jsx("span",{"aria-hidden":"true",children:L.slice(0,fe)||(L?" ":"계속")})]}),n.jsx("span",{"aria-hidden":"true",children:n.jsx(Ne,{size:18})})]},se)},`${e.sceneKey}:${e.line}:${!!e.response}`),n.jsxs("nav",{className:"romance-toolbar","aria-label":"대화 도구",children:[n.jsxs("button",{onClick:()=>I("backlog"),children:[n.jsx(Le,{size:15}),"기록"]}),n.jsxs("button",{"aria-pressed":p,onClick:()=>j(!p),children:[p?n.jsx(vt,{size:15}):n.jsx(En,{size:15}),"자동"]}),n.jsxs("button",{disabled:!v.includes(se)||ue,onClick:()=>{Kn(L.length),K(pt)},children:[n.jsx(kt,{size:15}),"읽은 대사"]}),n.jsxs("button",{onClick:()=>I("notebook"),children:[n.jsx(Oe,{size:15}),"기억"]}),n.jsxs("button",{onClick:()=>I("bonds"),children:[n.jsx(ne,{size:15}),"관계"]}),n.jsxs("button",{onClick:()=>I("save"),children:[n.jsx(nt,{size:15}),"저장"]})]})]}),e.phase==="map"&&n.jsxs("section",{className:"romance-map",inert:l!=="none"||!!V,children:[n.jsxs("div",{className:"romance-map-heading",children:[n.jsx("h1",{children:"방과 후"}),n.jsxs("div",{className:"romance-actions",children:[n.jsx("b",{children:e.actions}),n.jsx("span",{children:"남은 만남"})]})]}),n.jsxs("div",{className:"romance-map-body",children:[n.jsx(zr,{selected:d,students:Vn,locked:()=>!1,onSelect:h,discoveries:Object.fromEntries(yn.map(i=>[i.location,yn.filter(y=>y.location===i.location).length]))}),n.jsxs("aside",{className:"romance-place",children:[n.jsx("img",{className:"romance-place-background",src:xt(d),alt:xe[d].name}),n.jsxs("div",{className:"romance-place-content",children:[n.jsx("h2",{children:xe[d].name}),Xt.map(i=>n.jsxs("button",{className:"romance-memory-discovery",onClick:()=>{j(!1),K(y=>Us({...y,location:d},i.id))},children:[n.jsx(zn,{size:18}),n.jsxs("span",{children:[n.jsx("b",{children:i.spot}),n.jsx("small",{children:i.lead})]}),n.jsx(Ne,{size:18})]},i.id)),_n.length?_n.map(i=>n.jsxs("div",{className:"romance-meeting",children:[n.jsx(le,{id:i.id}),n.jsxs("div",{children:[n.jsxs("b",{children:[i.name,e.focus===i.id&&n.jsx(ne,{size:12})]}),i.available&&n.jsx("small",{children:Ke(i.id,e,i.place).title}),n.jsx("div",{children:n.jsx("button",{disabled:!i.available,onClick:()=>{j(!1),K(y=>Hs(y,i.id,d))},children:i.available?Ke(i.id,e,i.place).location===d?"만나기":`함께 ${xe[Ke(i.id,e,i.place).location].name} 가기`:i.exhausted||i.visited?"만남 완료":"오늘은 여기까지"})})]})]},i.id)):n.jsx("p",{className:"romance-quiet",children:"지금은 아무도 없어요."})]})]},d)]}),n.jsxs("footer",{className:"romance-map-footer",children:[n.jsxs("button",{onClick:()=>I("notebook"),children:[n.jsx(Oe,{size:16}),"수첩",e.clues.length>0&&n.jsx("b",{children:e.clues.length})]}),n.jsx("div",{className:"romance-pending-events",children:Z[0]&&n.jsxs("button",{onClick:()=>h(Z[0].location),"aria-label":`${Z[0].label} · ${xe[Z[0].location].name} 선택`,children:[n.jsx(sn,{size:15}),n.jsx("span",{children:Z[0].label})]})}),n.jsxs("button",{className:"r-primary",disabled:Z.length>0,title:Z.length?"남은 약속을 먼저 확인해 주세요.":void 0,onClick:sr,children:["계속",n.jsx(ee,{size:17})]})]})]}),e.phase==="focus"&&n.jsxs("section",{className:"romance-focus",inert:l!=="none",children:[n.jsx("header",{children:n.jsx("h1",{children:"누구를 더 만나고 싶어?"})}),n.jsx("div",{className:"romance-focus-grid",children:U.map(i=>n.jsxs("button",{onClick:()=>K(y=>ht(y,i)),children:[n.jsx(le,{id:i}),n.jsx("span",{children:n.jsx("b",{children:je(i)})}),n.jsx(Ne,{size:18})]},i))}),n.jsx("button",{className:"r-secondary",onClick:()=>K(i=>ht(i,null)),children:"아직 정하지 않을래"})]}),e.phase==="activity-invite"&&e.visitor&&n.jsxs("section",{className:"romance-invitation",inert:l!=="none",children:[n.jsx(le,{id:e.visitor}),n.jsxs("div",{children:[n.jsx("h1",{children:ve==null?void 0:ve.title}),n.jsx("p",{children:ve==null?void 0:ve.invitation}),n.jsxs("div",{className:"romance-inline",children:[n.jsxs("button",{className:"r-primary",onClick:()=>K(i=>mt(i,!0)),children:["함께하기",n.jsx(ee,{size:17})]}),n.jsx("button",{className:"r-secondary",onClick:()=>K(i=>mt(i,!1)),children:"다음에 할래"})]})]})]}),e.phase==="activity"&&e.visitor&&n.jsx(Kr,{person:e.visitor,chapter:e.chapter,encounter:Wn,seed:e.seed,paused:l!=="none"||!!V,onFinish:i=>K(y=>Gs(y,i))},`${qn}:${e.sceneKey}`),e.phase==="trial"&&n.jsxs("section",{className:"romance-trial",inert:l!=="none"||!!V,children:[n.jsxs("header",{children:[n.jsx("span",{className:"romance-kicker",children:"학급재판"}),n.jsx("h1",{children:ge?ge.title:"우리가 겪은 일을 순서대로"})]}),ge?n.jsxs("div",{className:"romance-trial-body",children:[n.jsxs("div",{className:"romance-claims",children:[n.jsx("h2",{children:"확인할 발언"}),Yt.map((i,y)=>n.jsxs("button",{disabled:!!e.trialFeedback,"aria-pressed":Te===i.id,onClick:()=>On(i.id),children:[n.jsxs("small",{children:[y+1," / ",tn(i.speaker)]}),n.jsx("p",{children:xn(i.text)})]},i.id)),e.trialFeedback?n.jsxs("div",{className:`romance-trial-feedback ${e.trialFeedback.ok?"correct":""}`,role:"status",children:[n.jsx("b",{children:e.trialFeedback.ok?"확인된 사실":"다시 살펴볼 부분"}),n.jsx("p",{children:e.trialFeedback.text}),n.jsxs("button",{className:"r-primary",onClick:()=>K(Sn),children:["계속",n.jsx(ee,{size:16})]})]}):n.jsxs("button",{className:"r-primary",disabled:!Te||!Me,onClick:Hn,children:["증거 제시",n.jsx(ee,{size:17})]})]}),n.jsx(Rs,{evidence:Qt,selected:Me,disabled:!!e.trialFeedback,onSelect:Dn,onInspect:dn,visuals:er}),n.jsx("div",{className:"romance-mobile-submit",children:e.trialFeedback?n.jsxs("button",{className:"r-primary",onClick:()=>K(Sn),children:["계속",n.jsx(ee,{size:16})]}):n.jsxs("button",{className:"r-primary",disabled:!Te||!Me,onClick:Hn,children:["증거 제시",n.jsx(ee,{size:17})]})})]}):n.jsxs("div",{className:"romance-reconstruction",children:[n.jsx("p",{children:"일어난 순서대로 놓아 주세요."}),n.jsx("div",{className:"romance-sequence-slots",children:Array.from({length:4},(i,y)=>{var X;return n.jsxs("div",{children:[n.jsx("b",{children:y+1}),n.jsx("span",{children:((X=Ae.find(gn=>gn.id===Je[y]))==null?void 0:X.text)??"기록 선택"})]},y)})}),n.jsx("div",{className:"romance-sequence-options",children:Zt.map(i=>n.jsx("button",{disabled:Je.includes(i.id)||!!e.trialFeedback,onClick:()=>mn(y=>[...y,i.id]),children:i.text},i.id))}),e.trialFeedback?n.jsxs("div",{role:"status",className:"romance-trial-feedback",children:[n.jsx("p",{children:e.trialFeedback.text}),n.jsx("button",{className:"r-primary",onClick:()=>{K(Sn),mn([])},children:"계속"})]}):n.jsxs("div",{className:"romance-inline",children:[n.jsx("button",{className:"r-secondary",onClick:()=>mn([]),children:"다시 놓기"}),n.jsx("button",{className:"r-primary",disabled:Je.length!==4,onClick:()=>K(i=>Xs(i,Je)),children:"확인"})]})]})]}),e.phase==="verdict"&&n.jsxs("section",{className:"romance-verdict",inert:l!=="none",children:[n.jsx("h1",{children:"이제, 어떤 관계로 남을까?"}),n.jsxs("div",{children:[n.jsxs("button",{onClick:()=>K(i=>ft(i,"exclude")),children:[n.jsx("h2",{children:"프로젝트에서는 여기까지 하자."}),n.jsx("p",{children:"개인적인 약속은 끝낸다. 잘못된 안내를 바로잡는 일은 선생님과 계속해 줘."}),n.jsx(ee,{size:19})]}),n.jsxs("button",{onClick:()=>K(i=>ft(i,"forgive")),children:[n.jsx("h2",{children:"바꾼 것부터 바로잡아 줘."}),n.jsx("p",{children:"선생님과 약속한 역할부터 다시 해 보자. 내 마음까지 곧바로 돌아오진 않겠지만."}),n.jsx(ee,{size:19})]})]})]}),e.phase==="ending"&&n.jsx(Es,{game:e,paused:l!=="none",onLog:()=>I("backlog"),onGallery:i=>{E(y=>y.includes(i)?y:[...y,i]),Re(i),I("gallery")},onTitle:()=>{t(null),j(!1),r("")}})]}):n.jsxs("section",{className:"romance-title",children:[n.jsxs("div",{className:"romance-title-copy",children:[n.jsxs("h1",{children:["너와의 약속을,",n.jsx("br",{}),n.jsx("em",{children:"기억할게."})]}),n.jsx("p",{children:"인천과학고 1학년 1반, 우리의 봄."}),n.jsxs("form",{onSubmit:nr,children:[n.jsx("label",{htmlFor:"romance-name",children:"이름"}),n.jsxs("div",{className:"romance-name-box",children:[n.jsx("input",{id:"romance-name",value:s,onChange:i=>{r(i.target.value),c("")},maxLength:12,autoComplete:"off",placeholder:"이름을 입력해 주세요","aria-describedby":a?"romance-name-help":void 0,"aria-invalid":!!a}),n.jsx(Oe,{size:20})]}),a&&n.jsx("small",{id:"romance-name-help",className:"romance-error",children:a}),n.jsxs("button",{className:"r-primary",disabled:!s.trim(),type:"submit",children:["시작하기",n.jsx(ee,{size:18})]})]}),n.jsxs("div",{className:"romance-title-links",children:[n.jsxs("button",{onClick:()=>I("load"),children:[n.jsx(Le,{size:16}),"이어하기"]}),n.jsxs("button",{onClick:()=>I("gallery"),children:[n.jsx(ne,{size:16}),"갤러리"]})]})]}),n.jsxs("aside",{className:"romance-cast-preview",children:[n.jsxs("div",{className:"romance-featured-person",children:[n.jsx(le,{id:Fe}),n.jsxs("div",{children:[n.jsx("small",{children:Ce[Fe].role}),n.jsx("h2",{children:je(Fe)}),n.jsxs("p",{children:["“",Ce[Fe].quote,"”"]})]})]}),n.jsx("div",{className:"romance-cast-tabs","aria-label":"등장인물 둘러보기",children:U.map(i=>n.jsxs("button",{"aria-pressed":Fe===i,onClick:()=>Ut(i),children:[n.jsx(le,{id:i}),n.jsx("span",{children:je(i)})]},i))})]}),n.jsx("footer",{children:"등장인물과 이야기는 허구입니다."})]}),l!=="none"&&n.jsxs(bt,{title:{notebook:"수첩",bonds:"관계",save:"저장",load:"불러오기",settings:"설정",backlog:"대화 기록",menu:"메뉴",gallery:"갤러리"}[l],onClose:ke,children:[l==="notebook"&&jn&&n.jsxs("div",{className:"romance-notice",children:[n.jsx("b",{children:jn.title}),n.jsx("p",{children:jn.text})]}),l==="notebook"&&(Ie.length?n.jsxs("div",{className:"romance-notebook",children:[n.jsx("nav",{"aria-label":"찾아 둔 기록",children:Ie.map(i=>n.jsxs("button",{"aria-pressed":(ae==null?void 0:ae.id)===i.id,onClick:()=>Wt(i.id),children:[n.jsx("b",{children:i.name}),n.jsx("small",{children:xe[i.location].name})]},i.id))}),ae&&n.jsxs("article",{children:[n.jsx("h3",{children:ae.name}),n.jsx(lt,{evidenceId:ae.id,visual:Cn(ae.id)}),n.jsx("p",{children:ae.description}),n.jsxs("div",{className:"romance-note-limit",children:[n.jsx("b",{children:"아직 모르는 점"}),n.jsx("p",{children:ae.limit})]})]})]}):n.jsxs("div",{className:"romance-empty",children:[n.jsx(Oe,{size:36}),n.jsx("h3",{children:"아직 남긴 기록이 없어요."})]})),l==="bonds"&&e&&n.jsx("div",{className:"romance-bonds",children:U.map(i=>n.jsxs("article",{children:[n.jsx(le,{id:i}),n.jsxs("div",{children:[n.jsxs("h3",{children:[je(i)," ",e.focus===i&&n.jsx(ne,{size:15})]}),n.jsxs("label",{children:["호감 ",n.jsx("b",{children:e.bonds[i].affection})]}),n.jsx("meter",{min:0,max:100,value:e.bonds[i].affection}),n.jsxs("label",{children:["신뢰 ",n.jsx("b",{children:e.bonds[i].trust})]}),n.jsx("meter",{min:0,max:100,value:e.bonds[i].trust})]})]},i))}),(l==="save"||l==="load")&&n.jsx("div",{className:"romance-save-grid",children:["auto",...Array.from({length:10},(i,y)=>String(y+1))].map(i=>{const y=rn(nn(i));return n.jsxs("button",{disabled:l==="save"?i==="auto"||!e:!y,onClick:()=>l==="save"?rr(i):tr(i),children:[n.jsx("small",{children:i==="auto"?"자동 저장":`저장 ${i.padStart(2,"0")}`}),n.jsx("b",{children:y?`${y.state.name} · ${y.state.chapter+1}장`:"빈 슬롯"}),y&&n.jsx("span",{children:new Date(y.savedAt).toLocaleString("ko-KR")}),Pn===i&&n.jsx("em",{children:"한 번 더 누르면 덮어씁니다."})]},i)})}),l==="settings"&&n.jsxs("div",{className:"romance-settings",children:[n.jsxs("label",{children:["대사 속도",n.jsxs("select",{value:O.speed,onChange:i=>He(y=>({...y,speed:Number(i.target.value)})),children:[n.jsx("option",{value:45,children:"천천히"}),n.jsx("option",{value:24,children:"보통"}),n.jsx("option",{value:12,children:"빠르게"}),n.jsx("option",{value:0,children:"즉시 표시"})]})]}),n.jsxs("label",{children:["배경음",n.jsx("input",{type:"checkbox",checked:O.music,onChange:i=>He(y=>({...y,music:i.target.checked}))})]}),n.jsxs("label",{children:["음량",n.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:O.volume,onChange:i=>He(y=>({...y,volume:Number(i.target.value)}))})]}),n.jsx("p",{className:"romance-keyboard-help",children:"Space / Enter: 다음 · 숫자키: 선택 · Esc: 메뉴"}),n.jsx("p",{className:"romance-touch-help",children:"대사창을 터치하면 이어집니다."})]}),l==="backlog"&&n.jsx("div",{className:"romance-log",children:e!=null&&e.backlog.length?e.backlog.map((i,y)=>n.jsxs("p",{children:[n.jsx("b",{children:i.speaker==="player"?e.name:tn(i.speaker)}),xn(i.text)]},y)):n.jsx("p",{children:"아직 나눈 대사가 없어요."})}),l==="gallery"&&n.jsxs("div",{className:"romance-art-gallery",children:[q&&S.includes(q)&&n.jsxs("figure",{children:[n.jsx("img",{src:`./${Pe(q)}`,alt:(Un=$e(q))==null?void 0:Un.alt}),n.jsxs("figcaption",{children:[(Jn=$e(q))==null?void 0:Jn.title,n.jsx("a",{className:"r-secondary",href:`./${Pe(q)}`,download:`RE_ACTION-${q}.png`,children:"원본 저장"})]})]}),n.jsx("div",{className:"romance-art-grid",children:Rt.filter(i=>S.includes(i.id)).map(i=>n.jsxs("button",{onClick:()=>Re(i.id),children:[n.jsx("img",{src:`./${Pe(i.id)}`,alt:i.alt,loading:"lazy"}),n.jsx("b",{children:je(i.person)}),n.jsx("small",{children:i.title})]},i.id))}),!S.length&&n.jsx("p",{className:"romance-empty",children:"아직 함께한 그림이 없어요."})]}),l==="gallery"&&A.length>0&&n.jsxs("div",{className:"romance-gallery",children:[n.jsx("h3",{children:"함께한 결말"}),A.map(i=>n.jsxs("div",{children:[n.jsx(ne,{size:18}),n.jsx("span",{children:i.split(":").map(y=>U.includes(y)?je(y):{romance:"연애",friendship:"우정",unresolved:"아직 하지 않은 약속",distance:"각자의 다음 길",friend:"우정",exclude:"관계 단절",forgive:"두 번째 기회",normal:"우리의 다음 페이지",alone:"나의 다음 페이지",class:"1반 친구들"}[y]??y).join(" · ")})]},i))]}),l==="menu"&&n.jsxs("div",{className:"romance-menu",children:[e&&n.jsxs(n.Fragment,{children:[n.jsxs("button",{onClick:()=>I("save"),children:[n.jsx(nt,{size:18}),"저장"]}),n.jsxs("button",{onClick:()=>I("notebook"),children:[n.jsx(Oe,{size:18}),"수첩"]}),n.jsxs("button",{onClick:()=>I("bonds"),children:[n.jsx(ne,{size:18}),"관계"]})]}),n.jsxs("button",{onClick:()=>I("load"),children:[n.jsx(Le,{size:18}),"불러오기 ",n.jsx("small",{children:Qs().length})]}),n.jsxs("button",{onClick:()=>I("settings"),children:[n.jsx(et,{size:18}),"설정"]}),n.jsxs("button",{onClick:()=>I("gallery"),children:[n.jsx(ne,{size:18}),"갤러리"]}),e&&n.jsxs("button",{onClick:()=>{t(null),j(!1),ke()},children:[n.jsx(br,{size:18}),"처음으로"]}),n.jsxs("button",{className:"r-primary",onClick:ke,children:["닫기",n.jsx(En,{size:17})]})]})]}),V&&n.jsxs(bt,{title:"기록 원본 보기",onClose:()=>dn(null),children:[n.jsx(lt,{evidenceId:V,visual:Cn(V)}),n.jsx("p",{children:(Xn=Y.find(i=>i.id===V))==null?void 0:Xn.limit})]}),!!pn&&(e==null?void 0:e.phase)==="trial"&&n.jsx(Ts,{eventId:`romance-${pn}`},pn),Ge&&n.jsx("div",{className:"romance-toast",role:"status",children:Ge})]})}class na extends Nt.Component{constructor(){super(...arguments);Yn(this,"state",{error:!1})}static getDerivedStateFromError(){return{error:!0}}render(){return this.state.error?n.jsxs("div",{className:"recovery",children:[n.jsx("h1",{children:"잠깐, 페이지가 접혔어요."}),n.jsx("p",{children:"저장된 기록은 그대로 있어요. 페이지를 다시 열어 주세요."}),n.jsx("button",{onClick:()=>location.reload(),children:"다시 열기"})]}):this.props.children}}vr.createRoot(document.getElementById("root")).render(n.jsx(Nt.StrictMode,{children:n.jsx(na,{children:n.jsx(ea,{})})}));
