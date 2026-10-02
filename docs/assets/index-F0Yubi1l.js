var Wn=Object.defineProperty;var Un=(e,n,a)=>n in e?Wn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a;var Bt=(e,n,a)=>Un(e,typeof n!="symbol"?n+"":n,a);import{j as t,r as x,U as Hn,F as Vn,B as it,M as _n,T as Gn,L as Yn,a as dn,C as Fe,S as kt,P as hn,R as _e,A as pe,b as mn,c as jt,Z as Jn,d as Xn,D as Zn,e as Wt,f as Qn,V as ea,g as ta,h as na,i as Ut,k as aa,N as Ue,H as ge,l as Ht,m as Vt,n as ra,X as oa,o as yn,p as sa}from"./vendor-Bcmc9mEW.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(r){if(r.ep)return;r.ep=!0;const u=a(r);fetch(r.href,u)}})();const Me=e=>e.trim().split(`
`).map(n=>{const a=n.indexOf("|");return{speaker:n.slice(0,a),text:n.slice(a+1)}}),de=(e,n,a,o,r)=>({id:e,name:n,location:a,description:o,inspection:Me(r)}),ia={id:"score",number:2,chapter:1,title:"멈춘 영상의 99점",subtitle:"센서 점수 조작 · 동일 조건의 함정",opening:Me(`narrator|임시 비공개한 점수 표가 조사 화면에 떴다. 태우 이름 옆의 99점과 멈춘 발끝이 같은 화면에 있었다.
taewoo|난 좋은 기록도 있어. 오늘 영상 하나로 다 못 춘다고 하지 마.
hyunsol|잘 춘 적이 있는지 말고, 공개한 비교가 같은 조건인지를 묻는 거야.
juhan|세션 ID, 기준 파일, 화면 내보내기 순서를 보자. 점수는 원자료를 대신하지 않아.
world|사람 얼굴부터 자르지 말자. 필요한 동작 구간만 검토하자.
player|다른 학생 기록도 같은 기준으로 다시 계산해. 태우만 특별히 낮추는 재판도 아니야.
taewoo|……그럼 내 원본도 가져올게.
minhyuk|공개 표를 만든 책임과 센터 선정은 구분한다. 선정은 담당 교사가 재검토한다.
seoyul|우리가 정할 건 보기 좋게 만든 값이 아니라, 어떤 조건을 숨겼는지겠네.
narrator|태우는 99점보다 옆자리의 빈 의자를 더 오래 봤다.`),evidence:[de("score-session","영상의 세션 ID","dance","공개 영상은 S-28, 원자료는 84점이다. 태우가 완주한 전날 세션 S-27은 97점이며 두 파일은 별도 ID다.",`juhan|둘 다 실제 태우 기록이지만 다른 시도야. 서로 바꾸면 같은 영상의 결과가 아니지.
taewoo|97점은 내가 춘 게 맞아. 그래도 오늘 영상 위에 붙이면 틀린 거네.`),de("score-baseline","개인 기준 파일","computer","공개 표의 태우 행만 reference=TAEWOO-S27이다. 나머지 학생은 공통 기준 REF-01을 쓴다. 자기 기록과 비교한 99는 공통 기준 점수가 아니다.",`hyunsol|기준이 달라졌어. 숫자가 높다는 것만으로 우열을 말할 수 없어.
player|전체 재채점은 공통 기준으로 해야겠네.`),de("score-edit","설정 변경 이력","computer","16:18 태우가 담당 계정으로 자신의 reference만 바꿨다. 변경 전 공통 기준 점수는 84. 권한 있는 설정이지만 공정한 비교를 위한 변경은 아니었다.",`taewoo|연습용으로 내 기록을 기준 삼으면 차이를 잘 볼 수 있거든.
juhan|그 목적으론 가능해. 하지만 공개 순위용 설정은 아니야.`),de("score-export","내보내기 화면 녹화","media","태우는 기준이 개인 기록인 화면을 보고 16:22 순위 표를 내보냈다. 설명의 “동일 기준” 문구는 유지됐다. 원자료에는 손대지 않았다.",`world|알고 본 화면하고 밖에 보인 설명이 달랐네.
taewoo|그 숫자가 내려가면 나도 내려가는 것 같았어. 설명을 고쳐야 했는데.`),de("score-recheck","공통 기준 재계산","dance","교사 승인하에 공통 REF-01로 재계산하면 모든 행이 원자료와 일치한다. 센서 고장은 확인되지 않았다. 점수는 동작 미학을 평가하지 않는다.",`alter|기준 파일만 통일했을 때 불일치가 사라진다. 전체 센서 오류라고 할 근거는 없어.
seoyul|기계보다 화면의 설명이 문제였네.`)],debates:[{title:"같은 사람이면 같은 시도?",claims:[{speaker:"taewoo",text:"둘 다 내가 춘 기록이니 S-27 점수를 S-28 영상에 붙여도 같은 자료야."},{speaker:"junyeon",text:"시도마다 조건과 결과는 따로 있어."},{speaker:"juhan",text:"세션 ID를 확인하자."}],target:0,evidence:"score-session",reason:"같은 사람의 기록이어도 시도가 다르면 다른 원자료다. S-28 영상의 공통 기준 점수는 84다.",hint:"사람 이름이 아니라 촬영 시도를 구분하는 ID를 봐."},{title:"높은 숫자 하나",claims:[{speaker:"world",text:"99가 제일 높으니까 적어도 같은 표 안에선 태우가 가장 정확해."},{speaker:"hyunsol",text:"동일 조건인지 먼저 확인해야 해."},{speaker:"minhyuk",text:"표의 제목은 모든 학생에게 같은 조건을 약속한다."}],target:0,evidence:"score-baseline",reason:"태우 행만 개인 기준으로 계산됐다. 공통 기준을 사용한 다른 행과 숫자를 직접 비교할 수 없다.",hint:"서로 같은 기준 파일을 썼는지 살펴봐."},{title:"고장이라는 설명",claims:[{speaker:"seoyul",text:"설정과 공개 설명은 별개로 봐야 해."},{speaker:"taewoo",text:"센서가 고장이라 점수가 달랐던 거야. 내가 숨긴 조건은 없어."},{speaker:"alter",text:"재계산 결과를 검토할 수 있어."}],target:1,evidence:"score-recheck",reason:"공통 기준으로 계산하면 원자료와 일치한다. 확인된 문제는 센서 고장이 아니라 기준 불일치다.",hint:"어떤 조건을 바꿨을 때 문제가 사라졌지?"},{title:"연습에서 공개로",claims:[{speaker:"taewoo",text:"개인 기준은 연습용으로만 바꿨으니까 공개 표를 만든 책임은 없어."},{speaker:"world",text:"최종 내보내기한 화면을 확인하자."},{speaker:"juhan",text:"허가된 기능을 썼다는 사실이 공개 설명을 정확하게 만들지는 않아."}],target:0,evidence:"score-export",reason:"태우가 개인 기준임을 보고도 동일 기준 문구를 유지한 순위 표를 내보냈다. 연습용 설정이 공개용 자료로 이어진 책임이 있다.",hint:"설정을 바꾼 순간과 공개 파일을 만든 순간을 나눠 봐."}],sequence:["태우가 공통 기준으로 S-28 촬영","태우가 자신의 기준 파일을 개인 기록으로 변경","같은 세션 점수가 99로 재계산","동일 기준 문구를 유지한 순위 표 공개"],culprit:"taewoo",motives:["낮아진 점수가 관심과 센터 자리를 빼앗을 것 같아 개인 기준 결과를 공통 점수처럼 공개했다.","센서가 다른 학생 이름을 자동으로 지웠다.","주한에게 메신저 발송 권한을 주려 했다."],motive:0,closing:Me(`taewoo|점수가 내려가면 네가 안 올까 봐. 그래서 내가 비교하는 기준까지 바꿔 버렸어.
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
narrator|정정된 표는 사라졌지만 그 부탁은 남았다. 다음 장의 만남은 순위 밖에서 시작됐다.`)},la={id:"poem",number:4,chapter:3,title:"전시에 걸린 비공개 한 줄",subtitle:"시 초안 무단 공개 · 출처와 허락의 차이",opening:Me(`narrator|태훈 시집의 책갈피와 복도 포스터가 나란히 놓였다. 문장과 줄바꿈까지 같았다.
taehun|관측 설명은 줬어. 이 시는 아직 아니라고 말했고.
seoyul|공유 폴더에서 봤어. 제목 없고 이름도 없어서 공개 초안인 줄 알았어.
world|그럼 파일 위치와 실제 허락을 나눠 봐야겠네.
juhan|원본 메모는 자동 동기화됐어. 공유 위치에 들어갔다고 동의를 만들어 내지는 않아.
minhyuk|포스터는 임시 비공개다. 새 전시를 막는 게 아니라 사용 범위를 먼저 확인하는 거야.
player|누가 쓴 문장인지와 누가 공개할 수 있는지는 다른 질문이야.
junyeon|이름을 적어 주기만 하면 괜찮은 것도 아니었네.
narrator|서율은 자기 붓을 책상 위에 놓았다. 손에 아무것도 들지 않은 채 태훈 말을 듣기 시작했다.`),evidence:[de("poem-original","책갈피 초안 원본","library","태훈의 비공개 시 초안이다. 14:10 작성 시각과 세 번의 수정 이력이 있으며 포스터의 문장·줄바꿈·특이한 오자가 동일하다.",`taehun|이 오자는 아직 고치기 전이었어. 관측값 설명 파일엔 없는 문장이야.
player|서로 독립적으로 같은 문장을 썼다는 설명과는 안 맞네.`),de("poem-allowed","제공한 관측 설명","observatory","태훈이 전시 사용을 허락한 파일은 weather-note.txt 하나다. 날짜·구름량·관측 불가 조건만 있고 해당 시 문장은 없다.",`taehun|이건 써도 된다고 직접 줬어. 감상 문장은 새로 완성해서 주겠다고 했고.
hyunsol|허락한 자료의 범위가 구체적으로 남아 있네.`),de("poem-sync","메모 폴더 동기화","computer","시 초안은 개인 메모 폴더의 자동 동기화로 작업 폴더에 복사됐다. 읽기 권한은 있지만 공개 사용 허락 필드는 없다.",`juhan|읽을 수 있다는 설정은 공개에 써도 된다는 동의가 아니야.
seoyul|내가 파일 위치를 허락이라고 읽었네.`),de("poem-message","인용 전 대화","media","서율이 “지금 시를 넣어도 돼?”라고 물었고 태훈은 “지금 초안은 아니야. 새로 완성해서 줄게”라고 답했다. 두 사람 동의로 이 관련 구간만 제출됐다.",`world|대화를 전부 가져온 게 아니라 필요한 문장만 두 사람이 같이 골랐어.
taehun|아직 아니라고 말한 부분이야. 그걸 시간 지나면 예스로 바꿀 수는 없어.`),de("poem-layout","포스터 편집 이력","art","15:02 서율이 동기화 사본에서 문장을 가져와 포스터에 삽입하고 15:20 공개본을 내보냈다. 자동 삽입 기능은 사용되지 않았다.",`seoyul|내가 직접 골랐어. 빈 의자 그림에 가장 어울린다고 생각해서.
player|그림에 맞는지와 사용해도 되는지는 따로 확인했어야겠네.`)],debates:[{title:"우연히 같은 문장",claims:[{speaker:"seoyul",text:"같은 장면을 봤으니 비슷한 문장을 쓴 걸 수도 있어."},{speaker:"taehun",text:"초안의 흔적도 비교해 줘."},{speaker:"juhan",text:"독립 작성과 복사에는 다른 흔적이 남아."}],target:0,evidence:"poem-original",reason:"문장뿐 아니라 줄바꿈과 특이한 오자가 원본과 일치하고 수정 이력이 남아 있다. 독립 작성이라는 설명을 지지하지 않는다.",hint:"뜻이 비슷한 것 외에 그대로 옮겨진 흔적이 있지?"},{title:"폴더에 들어온 허락",claims:[{speaker:"minhyuk",text:"파일의 접근 범위와 사용 범위를 구분해야 한다."},{speaker:"seoyul",text:"공유 폴더에 있었으니까 공개 사용도 허락한 파일이야."},{speaker:"alter",text:"권한 필드를 확인할 수 있어."}],target:1,evidence:"poem-sync",reason:"동기화와 읽기 권한은 공개 사용 동의가 아니다. 파일 위치만으로 당사자 의사를 확정할 수 없다.",hint:"볼 수 있음과 게시할 수 있음이 같은 칸에 적혀 있어?"},{title:"다 같이 받은 자료",claims:[{speaker:"world",text:"전시 설명을 받았다면 그 시까지 같은 자료로 사용할 수 있겠지."},{speaker:"taehun",text:"내가 건넨 파일을 확인해."},{speaker:"hyunsol",text:"파일명보다 내용과 허락 범위가 중요해."}],target:0,evidence:"poem-allowed",reason:"전시 사용을 허락한 관측 설명에는 시 문장이 없다. 데이터 설명 허락을 개인 시 초안까지 확대할 근거가 없다.",hint:"실제로 제공한 파일 안에 그 문장이 들어 있었나?"},{title:"물어봤다는 답변",claims:[{speaker:"seoyul",text:"공개 전에 물어봤으니까 사용 동의는 받은 셈이야."},{speaker:"junyeon",text:"물은 것과 허락받은 건 다르지."},{speaker:"taehun",text:"내 대답까지 읽어 줘."}],target:0,evidence:"poem-message",reason:"질문에 대한 답은 지금 초안은 사용하지 말라는 뜻이었다. 질문했다는 사실이 거절을 동의로 바꾸지 않는다.",hint:"질문 뒤에 어떤 대답이 남았는지 봐."}],sequence:["태훈이 비공개 시 초안 작성","자동 동기화로 작업 폴더에 사본 생성","서율이 사용 질문에 아직 아니라는 답을 받음","서율이 초안을 포스터에 삽입해 공개"],culprit:"seoyul",motives:["전시 그림의 빈칸을 채우고 싶어 어울리는 시를 당사자가 정한 범위보다 앞서 사용했다.","태훈이 공개 홍보를 먼저 요청했다.","얼터에고가 자동으로 시를 삽입해 게시했다."],motive:0,closing:Me(`seoyul|이름이 지워지는 게 얼마나 싫은지 알면서 네 대답을 지웠어. 그림에 맞는다는 생각부터 해서.
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
narrator|다음 장의 약속은 완성된 파일이 아니라, 다시 물어볼 수 있다는 믿음으로 남았다.`)},ca=Me(`narrator|다음 날, 사이언스 페어 첫 심사. 개장 전 확인한 발송기 중지와 정정문은 담당 교사의 검토를 받았다.
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
narrator|이제 어느 쪽에 설지 내가 직접 말할 차례였다.`),Nt=[{id:"world",name:"전세계",role:"밴드부 · 보컬 & 기타",tag:"너에게만 들려줄게",color:"#d997a6",specialLabel:"집착",bio:"무대 위에서는 누구보다 빛나는 사람. 웃음 뒤에 숨긴 불안은 아직 누구에게도 들려준 적 없다.",quote:"카메라가 꺼져도 내 옆에 있을 거야?",location:"band"},{id:"junyeon",name:"방준연",role:"화학 탐구 · 연구 기록",tag:"빈 옆자리의 온도",color:"#c2a37b",specialLabel:"위축",bio:"조금 느린 말투와 손때 묻은 노트. 주눅 든 모습 너머에는 누구보다 집요한 호기심이 있다.",quote:"내가 말할 때, 옆에 있어 줘.",location:"chemistry"},{id:"hyunsol",name:"최현솔",role:"화학 탐구 · 실험 설계",tag:"마음에도 오차가 있을까",color:"#85b6ad",specialLabel:"짜증",bio:"정확한 숫자와 틀림없는 절차를 믿는다. 마음까지 정답으로 설명할 수 있을 거라고 생각했다.",quote:"맞는 말이어도, 상처가 될 수 있겠지.",location:"chemistry"},{id:"taewoo",name:"김태우",role:"댄스부 · 센터",tag:"여덟 번째 카운트",color:"#d99c79",specialLabel:"경쟁심",bio:"누구보다 무대를 사랑하는 자신만만한 센터. 박수 소리가 멎은 뒤의 자신도 사랑받고 싶다.",quote:"실수해도, 끝까지 봐 줄 거지?",location:"dance"},{id:"taehun",name:"고태훈",role:"지구과학 · 문학",tag:"별과 문장 사이",color:"#93a8cd",specialLabel:"감성 동조",bio:"관측일지 가장자리에 시를 쓰는 문학소녀. 확률과 여백을 함께 사랑하는 조금 특별한 과학도.",quote:"별이 안 보여도, 기다리는 이유는 있어.",location:"observatory"},{id:"seoyul",name:"이서율",role:"밴드부 · 키보드 & 아트",tag:"미완성의 색",color:"#b2a0cd",specialLabel:"영감",bio:"음악과 그림으로 하루를 기억한다. 누군가에게 완성되지 않은 작업을 보여 주는 일은 작은 고백이다.",quote:"아직 그리는 중이야. 우리 이야기도.",location:"art"}],pn=Object.fromEntries(Nt.map(e=>[e.id,e])),Pt=[{id:"gate",name:"정문",sub:"새로운 하루",bg:"classroom",x:46,y:88},{id:"classroom",name:"1학년 1반",sub:"우리의 시작점",bg:"classroom",x:47,y:52},{id:"garden",name:"중앙정원",sub:"점심의 햇살",bg:"night",x:50,y:72},{id:"cafeteria",name:"학생식당",sub:"비어 있는 옆자리",bg:"classroom",x:78,y:77},{id:"library",name:"도서관",sub:"조용한 문장들",bg:"classroom",x:76,y:31},{id:"chemistry",name:"화학실",sub:"실험과 작은 실수",bg:"lab",x:23,y:36},{id:"media",name:"미디어실",sub:"남겨 두는 순간",bg:"band",x:23,y:61},{id:"computer",name:"컴퓨터실",sub:"코드와 마음의 디버깅",bg:"computer",x:34,y:20},{id:"observatory",name:"천문대",sub:"별을 기다리는 시간",bg:"night",x:21,y:14},{id:"band",name:"밴드연습실",sub:"둘만의 앙코르",bg:"band",x:74,y:53},{id:"art",name:"미술준비실",sub:"아직 마르지 않은 색",bg:"band",x:88,y:13},{id:"dance",name:"댄스연습실",sub:"여덟 번의 카운트",bg:"dance",x:10,y:79},{id:"auditorium",name:"대강당",sub:"조명이 켜지는 곳",bg:"band",x:8,y:52},{id:"roof",name:"옥상 휴게공간",sub:"밤에만 들리는 이야기",bg:"night",x:51,y:17},{id:"walk",name:"학교 뒤 산책로",sub:"조금 더 걸을까",bg:"night",x:91,y:94}],ke=Object.fromEntries(Pt.map(e=>[e.id,e])),jn=[{id:"juhan",name:"이주한",role:"프로그래밍 · 얼터에고 개발자",tag:"용기는, 원본으로 남기는 것",color:"#8dbcae",specialLabel:"자기 확신",bio:"긴 밤색 머리에 흰 꽃과 회로 모양 머리핀을 꽂은 여학생. 청록색 카디건과 리본 교복, 늘 안고 다니는 노트북이 트레이드마크다. 조용한 말투에 자신의 이야기를 먼저 꺼내는 데는 서툴지만, 코드를 설명할 때만큼은 흔들리지 않는다. 자신이 만든 AI 얼터에고에 말투와 연구 기록을 남겼다. AI가 대신 말하는 것과 스스로 말하는 것은 다르다는 사실을 배우고 있다.",quote:"내가 어떤 모습인지보다… 내가 끝까지 말하는 걸 봐 줄래?",location:"computer"},{id:"minhyuk",name:"황민혁",role:"1학년 1반 반장 · 초고교급 풍기위원",tag:"규칙 밖에서 배운 첫 약속",color:"#dfab73",specialLabel:"원칙",bio:"어두운 피부와 단정한 포니테일의 여학생 반장. 각 잡힌 흰 제복, 붉은 완장과 색인으로 가득한 규율 수첩이 트레이드마크다. 출석과 안전 규칙에 엄격하고, 노력을 가볍게 취급하는 말을 특히 싫어한다. 부당한 대우 앞에서는 누구보다 크게 항의하지만, 사적인 칭찬을 받으면 갑자기 말수가 줄어든다. 사람을 지키려 만든 규칙이 사람을 밀어내지 않도록 고민한다.",quote:"원칙은 사람을 지키기 위해 있다! …그러니까 네 마음도 예외로 두지 않겠다.",location:"classroom"}],ua=[...Nt,...jn],ue=Object.fromEntries(ua.map(e=>[e.id,e]));Object.fromEntries(jn.map(e=>[e.id,e]));const Y=e=>e.trim().split(`
`).map(n=>{const a=n.indexOf("|");return{speaker:n.slice(0,a),text:n.slice(a+1)}}),B=(e,n,a,o,r)=>({id:e,name:n,location:a,description:o,inspection:Y(r)}),nt=[{id:"credit",number:1,chapter:2,title:"잘라 낸 이름",subtitle:"공연 영상 조작 · 첫 번째 학급재판",opening:Y(`narrator|방과 후 단체 채팅에 짧은 영상이 올라왔다. 서율의 편곡 파일 위에 세계의 이름 하나만 남아 있었다.
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
world|…내가 하는 말도 끝까지 들어 줄 거지?`),evidence:[B("credit-source","원본 편곡 파일","band","15:58 저장본에는 편곡 이서율·보컬 전세계가 함께 적혀 있다. 두 사람 모두 이 버전의 공개에 동의했다.",`seoyul|이 버전은 같이 이름을 적었어. 마지막 화음을 바꾼 이유도 메모에 남겼고.
player|처음부터 단독 작업이었다는 주장은 여기서 확인할 수 있겠네.`),B("credit-change","크레딧 변경 이력","media","16:42 크레딧 레이어만 수정됐다. 로그인 표시는 BAND-SHARED이며, 이주한 개인 계정과 다른 공용 계정이다.",`alter|음원은 그대로야. 글자가 있는 레이어 하나가 16시 42분에 바뀌었어.
juhan|공용 계정은 여럿이 썼어. 이것만으로 사람을 특정하면 안 돼.`),B("credit-permission","얼터에고 접근 권한","computer","얼터에고는 이 폴더에서 읽기 전용이다. 파일 수정·업로드 권한은 없고 실행 기록도 16:50부터 시작한다.",`hyunsol|쓰기 권한이 없다는 건 설정과 실제 시도 기록 모두에서 확인했어.
alter|내 첫 실행은 게시 이후야. 나는 이전에 열린 편집기를 누가 조작했는지는 모른다.`),B("credit-queue","예약 공개 목록","computer","16:10 세계가 공개 대상을 공용 폴더의 최신 내보내기 파일로 지정했다. 예약은 16:44 실행됐으며, 수정 뒤 다시 확인한 기록은 없다.",`juhan|누가 버튼을 바로 눌렀다고 생각했는데, 예약 항목이 남아 있어.
minhyuk|예약도 공개다. 제출 전에 최종본을 확인하는 책임은 사라지지 않아.`),B("credit-witness","미디어실 사용표","classroom","16:35~16:45 사용표의 신청자는 전세계 한 명이다. 황민혁은 16:39에 스피커를 돌려주며 세계가 편집기 앞에 있는 것을 봤다.",`minhyuk|세계가 있었다는 건 직접 봤다. 하지만 수정 버튼까지 본 건 아니므로 그렇게 적지는 않겠다.
world|그 시간에 내가 거기 있던 건 맞아.`),B("credit-clock","미리보기 시간대 설정","media","영상 화면의 17:42는 편집기 표시 시간이다. 저장 기록과 같은 순간이며 표시 설정만 한 시간 빠르다.",`taehun|창밖 그림자로 한 시간을 단정할 수는 없어. 설정을 확인했더니 표시 시간이 다르더라.
player|화면에 찍힌 숫자 하나로 알리바이를 만들 수는 없겠네.`)],debates:[{title:"화면 속 한 시간",claims:[{speaker:"taewoo",text:"영상은 17시 42분에 수정됐어. 그때 세계는 합주 중이었잖아."},{speaker:"taehun",text:"보이는 숫자와 실제 저장 시각을 따로 봐야 해."},{speaker:"world",text:"합주 때 내 휴대폰은 가방에 있었어."}],target:0,evidence:"credit-clock",reason:"편집기의 표시만 한 시간 빠르다. 실제 수정은 16:42이며 합주 알리바이와 겹치지 않는다.",hint:"영상의 화면 시계와 파일 기록의 기준이 같은지 확인해."},{title:"AI에게 붙은 이름",claims:[{speaker:"hyunsol",text:"자료를 읽을 수 있다는 사실만으로 수정 권한은 증명되지 않아."},{speaker:"minhyuk",text:"공용 컴퓨터에서 나온 자료라면 얼터에고가 크레딧을 바꿨을 수도 있다!"},{speaker:"juhan",text:"내가 작성한 권한 설정도 실제 로그와 함께 확인해 줘."}],target:1,evidence:"credit-permission",reason:"얼터에고의 실행은 게시 뒤에 시작됐고 해당 폴더에 쓰기 권한이 없다. 수정자로 지목할 근거가 없다.",hint:"할 수 있는 기능과 실제 시작 시각, 두 가지를 함께 확인해."},{title:"게시 버튼의 주인",claims:[{speaker:"junyeon",text:"게시 시각에 누가 자리에 있었는지도 알아야 해."},{speaker:"seoyul",text:"원본과 공개본이 다르다는 건 확실해."},{speaker:"world",text:"16시 44분에는 내 손이 키보드에 없었으니까 공개에도 내 책임은 없어."}],target:2,evidence:"credit-queue",reason:"세계가 설정한 예약 공개는 최신 내보내기 파일을 자동으로 게시했다. 버튼을 누르지 않은 순간에도 예약 설정의 책임은 남는다.",hint:"실행 시각보다 먼저 설정한 작업이 있었어."},{title:"한 사람의 작품",claims:[{speaker:"world",text:"처음부터 내가 혼자 준비한 곡이었어. 크레딧은 정리한 것뿐이야."},{speaker:"seoyul",text:"끝까지 들은 다음에 원본을 다시 열어 줘."},{speaker:"minhyuk",text:"장소 사용표는 작업의 기여도를 설명하지 못한다."}],target:0,evidence:"credit-source",reason:"두 사람이 함께 승인한 원본에는 각자의 역할이 구분돼 있다. 크레딧 삭제는 원래 사실을 정리한 행위가 아니다.",hint:"처음 승인된 버전과 나중에 바뀐 버전을 비교해."}],sequence:["함께 적은 크레딧으로 원본 저장","최신 내보내기 파일의 예약 공개 설정","미디어실에서 크레딧 레이어 변경","바뀐 파일이 예약 시각에 게시"],culprit:"world",motives:["서율의 이름을 지우면 자신이 무대에서 밀려나지 않을 거라 생각했다.","얼터에고에게 수정 권한을 넘기려 했다.","고장 난 시계를 수리하려 했다."],motive:0,closing:Y(`world|내 목소리보다 서율의 편곡 얘기가 먼저 나오는 게 싫었어. 잠깐 이름을 가리면 나를 먼저 보겠지 싶었고.
seoyul|잠깐이라도, 그건 내 이름이야.
world|알아. 예약까지 그대로 나갈 줄 몰랐다는 말은 변명이야. 바꾼 건 나니까.
player|정정문에 누가 무슨 일을 했는지 적자. 서율한테 용서까지 예약해 달라고 하지는 말고.
minhyuk|정정본과 원본 링크를 함께 올린다. 타인의 작품을 바꿀 때는 새로 동의를 받는다.
junyeon|나도 노트에 이름을 지웠던 적이 있어. 누구한테 보여 주기 부끄러워서. 그래도 남의 이름을 지울 수는 없겠네.
juhan|얼터에고가 원본 비교를 보관할게. 공개 범위는 두 사람이 직접 정해 줘.
world|{name}, 다음엔 네가 나를 보고 있는지 파일로 확인하려고 하지 않을게. 그냥… 직접 물어볼래.
seoyul|다음 합주에서 마지막 마디는 내가 정할게. 거기서 다시 시작하자.
narrator|판결은 끝났지만 관계는 한 문장으로 회복되지 않았다. 다음 만남에서 지켜야 할 약속이 생겼다.`)},{id:"absence",number:2,chapter:6,title:"닫힌 교실의 결석자",subtitle:"사라진 반장 · 기록에 없는 출구",opening:Y(`narrator|시설 점검이 끝나도 민혁이 돌아오지 않았다. 출입 기록은 반장이 교실에 들어간 뒤 멈춰 있었다.
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
player|그럼 학급재판에서 밝힐 건 누가 사라졌는지가 아니라, 왜 기록만 보면 사라진 것처럼 보였는지야.`),evidence:[B("absence-badge","교실 출입 기록","classroom","17:22 황민혁의 정문 입실이 기록됐다. 정문 퇴실 기록은 없으며, 기록 범위는 정문 카드 리더뿐이다.",`alter|이 파일의 감시 범위는 정문 하나야. “교실의 모든 출구”라는 필드는 없어.
juhan|로그에 없는 움직임을 없었다고 단정하면 안 돼.`),B("absence-door","연결문 점검표","library","교실과 도서관 사이 보조문은 17:20~17:50 센서 점검 중이었다. 문 자체는 안에서 열 수 있었고 통행 금지 표시는 없었다.",`taehun|문 옆에 붙은 종이에 점검 범위가 적혀 있어. 잠금 점검이 아니라 기록 장치 점검이야.
player|센서가 꺼진 길로 나갔다면 정문 기록이 비어 있어도 이상하지 않겠네.`),B("absence-nurse","보건실 확인서","classroom","보건교사 확인: 17:29 민혁이 어지럼증을 느낀 준연과 함께 방문했다. 17:46까지 두 사람 모두 보건실에 있었다.",`junyeon|내가 먼저 말했어야 했는데… 민혁이 다른 애들한테 내 상태를 함부로 말하지 않겠다고 해서.
minhyuk|걱정하게 만든 건 내 책임이다. 보호할 개인정보와 알릴 안전 상태를 구분했어야 했다.`),B("absence-test","점검 예외 설정","computer","17:10 최현솔이 센서의 점검 예외를 적용했다. 변경은 허가된 점검 범위 안이었지만 학급 안내에 적힌 “모든 통행 기록”을 정정하지 않았다.",`hyunsol|승인받은 설정은 맞아. 하지만 안내가 바뀌었는지 확인 안 했어.
minhyuk|우리는 모든 문이 기록된다고 믿고 있었지. 그 전제를 누가 확인했어야 하는지 짚자.`),B("absence-mail","반장 이름의 알림 헤더","computer","17:36 메시지는 민혁의 휴대폰이 아니라 교실 공용 PC의 예약 작업에서 생성됐다. 표시 이름은 자유롭게 설정된 문자열이다.",`juhan|이름만 “황민혁”이고 인증된 개인 발신 서명이 없어.
world|그럼 이름을 믿고 민혁이 교실 안에서 보냈다고 생각한 게 틀렸네.`),B("absence-phone","꺼진 휴대폰","library","민혁의 휴대폰은 17:18에 배터리가 소진됐다. 마지막 충전 알림을 민혁과 서율이 함께 확인했으며 메시지는 그보다 나중에 도착했다.",`seoyul|보조 배터리를 가져다주려 했는데 이미 민혁이 준연이랑 나갔어.
minhyuk|다음에는 담임께 짧게라도 이동 사실을 알리겠다.`)],debates:[{title:"기록되지 않은 출구",claims:[{speaker:"world",text:"정문 퇴실 기록이 없으니 민혁은 17시 46분까지 교실에 남아 있었어."},{speaker:"taehun",text:"출입 기록이 어디까지 보는지 확인해야 해."},{speaker:"hyunsol",text:"센서 점검과 잠금은 다른 작업이야."}],target:0,evidence:"absence-door",reason:"보조문은 기록 센서만 점검 중이었고 통행이 가능했다. 정문 기록만으로 교실에 남아 있었다고 단정할 수 없다.",hint:"출입구와 기록 장치의 범위가 같지 않아."},{title:"표시 이름의 함정",claims:[{speaker:"taewoo",text:"불안해서 여러 번 메시지를 읽었어."},{speaker:"minhyuk",text:"내 이름으로 왔으니 17시 36분 메시지는 내 휴대폰에서 보낸 것이겠지."},{speaker:"juhan",text:"나는 이름이 아니라 헤더를 확인했어."}],target:1,evidence:"absence-mail",reason:"메시지는 공용 PC의 예약 작업이 생성했다. 화면에 표시된 이름은 실제 기기나 개인 인증을 증명하지 못한다.",hint:"보낸 사람의 이름과 발신 기기를 구분해."},{title:"안전이 확인된 시간",claims:[{speaker:"junyeon",text:"보건실에서 같이 기다렸어."},{speaker:"seoyul",text:"선생님 확인서를 회의 자료에 넣자."},{speaker:"hyunsol",text:"아무도 민혁을 직접 못 봤으니 17시 29분의 위치는 알 수 없어."}],target:2,evidence:"absence-nurse",reason:"보건교사의 방문 확인서와 준연의 동행 증언이 같은 시각을 가리킨다. 민혁의 안전과 장소는 이미 확인할 수 있다.",hint:"학생끼리의 추측 외에 확인 가능한 기록이 있어."},{title:"잘못 전달된 전제",claims:[{speaker:"hyunsol",text:"점검은 허가받았으니 “모든 문을 기록한다”는 안내도 그대로 정확해."},{speaker:"minhyuk",text:"허가받은 작업이어도 통행 안내는 바뀌어야 한다."},{speaker:"alter",text:"나는 누락된 로그를 만들어 채우지 않을 거야."}],target:0,evidence:"absence-test",reason:"허가는 점검 자체에 대한 것이다. 실제로 보조문 기록이 중지됐으므로 모든 통행을 기록한다는 안내는 정정해야 했다.",hint:"작업의 허가와 안내의 정확성은 따로 확인해."}],sequence:["현솔이 보조문 센서 점검 예외 적용","민혁이 정문으로 교실 입실","민혁과 준연이 보조문으로 보건실 이동","공용 PC가 반장 이름의 예약 메시지 발송"],culprit:"hyunsol",motives:["점검이 허가됐다는 이유로 통행 안내의 정정을 확인하지 않았다.","민혁을 납치해 발표를 취소하려 했다.","얼터에고가 모든 출입 기록을 지웠다."],motive:0,closing:Y(`hyunsol|점검 자체가 맞으면 나머지도 맞을 거라고 생각했어. 안내문은 내가 다시 확인할게.
minhyuk|나도 안전 상태를 알리지 않은 점을 고치겠다. 규율을 지키는 사람이라고 보고까지 생략할 수는 없지.
junyeon|내가 어지러웠다는 걸 모두한테 설명하지 않아도, 안전하게 돌아온다는 건 말할 수 있었네.
taewoo|앞으로는 무서운 이야기를 먼저 붙이지 않을게. 내가 걱정한 만큼 빨리 소문도 냈어.
world|근데 예약 메시지, 첫 사건의 예약 공개랑은 별개잖아. 누가 왜 그런 문장을 준비했지?
juhan|맞아. 그건 아직 해결되지 않았어. 파일을 보존할게. 이름을 바꿔 발송하는 옛 작업이 남아 있는 것 같아.
alter|모르는 부분은 빈칸으로 남겼어. 그 빈칸이 다음에 확인할 일이야.
minhyuk|{name}, 아까 나를 탓하기 전에 안전부터 확인해 줘서 고맙다. …반장에게도 그런 순서가 필요했어.
narrator|민혁이 반장 완장을 다시 고쳐 찼다. 이번에는 내가 괜찮은지 먼저 물었다.`)},{id:"echo",number:3,chapter:10,title:"얼터에고는 협박하지 않는다",subtitle:"사칭 메시지 · 우리 반의 마지막 논파",opening:Y(`narrator|밤의 공용 PC에 여덟 명의 이름이 차례로 떴다. “발표를 포기하지 않으면 비밀을 공개한다.”
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
narrator|주한이 모니터를 돌려 놓았다. 커서가 “다시 시작된 작업”이라는 폴더 위에서 멈췄다.`),evidence:[B("echo-clock","최초 협박의 실행 시각","computer","첫 사칭 메시지는 17:36 발송됐다. 얼터에고의 로컬 실행은 17:40 시작됐으며 이전 실행 프로세스는 없었다.",`alter|나는 17시 40분 이후 받은 파일만 확인했어. 그전의 발신 행위는 내 실행 기록에 없어.
juhan|기록이 없다는 말만 하지 않을게. 시작된 프로세스와 실행 권한도 같이 봐 줘.`),B("echo-acl","서로 다른 발송 권한","computer","얼터에고는 오프라인 분석 폴더만 읽는다. 사칭 발송은 별도 예약 작업 DEMO-PRESSURE가 학교 내부 알림 계정으로 실행됐다.",`hyunsol|분석기와 발송기가 분리돼 있어. 같은 얼굴 파일을 쓰는 게 같은 프로그램이라는 뜻은 아니야.
player|발신 권한을 가진 작업을 찾아야겠네.`),B("echo-template","작년 시연용 문장","library","작년 발표 자료에 익명 메시지의 표현이 그대로 적혀 있다. 민혁의 이름과 “순서를 지켜”는 가상 인물 필드의 시험값이었다.",`taehun|예전 시연에서는 위험한 메시지를 구별하는 교육 예시였어. 실제 전송은 중지하라고 적혀 있네.
minhyuk|내 이름이 입력돼 있다는 이유로 내 의도를 읽었다고 생각하지 마라.`),B("echo-resume","복구 작업의 체크 항목","computer","준연이 제출한 복구 요청에는 “예약 작업도 함께 복원”이 선택돼 있다. 17:30 재개됐고 작업 설명을 펼친 기록은 없다.",`junyeon|내 이름이 빠진 보고서를 되찾으려고 했어. 함께 복원이라는 말에 그냥 체크했어.
juhan|그 버튼이 뭘 되살리는지 나한테 물어봤으면 같이 확인할 수 있었어.`),B("echo-address","수신 목록의 범위","media","수신자는 지난주 공개 테스트용 1반 주소록과 일치한다. 주한의 개인 대화나 학생의 비공개 파일에서 추출한 자료는 없다.",`world|비밀을 다 안다는 문장이니까 정말 아는 줄 알았어.
seoyul|구체적으로 보이는 문장을 받아도 출처를 확인해야겠네.`),B("echo-hash","AI 얼굴 파일의 복사본","computer","사칭 작업은 예전 시연 자료에 포함된 얼굴 이미지 복사본을 사용했다. 현재 얼터에고의 실행 파일을 호출하지 않는다.",`alter|나처럼 생긴 얼굴을 띄우는 건 나를 실행하는 것과 달라.
juhan|내 말투를 남겼다고 내 의지까지 복사한 건 아니야. 얼굴만 복사했다면 더더욱.`),B("echo-stop","중지 뒤의 대기열","computer","담당 교사가 예약 작업을 중지하자 추가 메시지는 멈췄다. 얼터에고는 그대로 실행 중이며 원본 비교에 응답한다.",`minhyuk|중지는 담당 교사가 확인했다. 학생끼리 시스템 권한을 더 만지지 않는다.
hyunsol|발송기만 멈췄는데 분석기는 남았어. 두 동작이 분리돼 있다는 확인이야.`)],debates:[{title:"같은 얼굴, 같은 의도?",claims:[{speaker:"taewoo",text:"주한의 얼굴이 뜨니까 지금 실행 중인 얼터에고가 문장을 만든 거야."},{speaker:"juhan",text:"그 얼굴을 사용하는 프로그램을 확인해 줘."},{speaker:"seoyul",text:"화면의 외형은 실행 파일 이름을 보장하지 않아."}],target:0,evidence:"echo-hash",reason:"사칭 작업은 얼굴 이미지 복사본만 썼다. 현재 얼터에고를 호출하거나 그 판단을 사용하지 않았다.",hint:"얼굴을 띄우는 파일과 생각을 계산하는 프로그램은 같은 자료가 아니야."},{title:"시작되기 전의 발신",claims:[{speaker:"world",text:"협박은 17시 36분부터지만 AI는 분명 먼저 실행되어 있었을 거야."},{speaker:"hyunsol",text:"실행 시각을 가정으로 채우면 안 돼."},{speaker:"alter",text:"내 기록을 확인할 수 있게 원본을 보존했어."}],target:0,evidence:"echo-clock",reason:"현재 얼터에고 프로세스는 17:40 시작됐다. 최초 발신은 그보다 빠르므로 해당 실행이 메시지를 만들었다는 주장은 성립하지 않는다.",hint:"원인이라고 지목한 동작이 결과보다 먼저 있었는지 확인해."},{title:"알고 있다는 협박",claims:[{speaker:"minhyuk",text:"협박 문장을 그대로 공개하면 다른 학생도 겁먹을 수 있다."},{speaker:"junyeon",text:"여덟 명을 골라 보냈으니 누군가 비공개 대화를 전부 읽었다는 뜻이야."},{speaker:"taehun",text:"선택된 주소록부터 살펴보자."}],target:1,evidence:"echo-address",reason:"수신자는 공개 테스트 주소록과 같다. 포괄적인 협박 문장이 개인 대화 접근이나 실제 비밀 보유의 증거가 되지는 않는다.",hint:"수신자 선택이 정말 비밀 자료를 필요로 했는지 봐."},{title:"복구의 범위",claims:[{speaker:"junyeon",text:"보고서만 돌려받으려 했으니까 내가 고른 복구는 다른 작업을 켜지 않았어."},{speaker:"juhan",text:"의도와 선택한 항목이 같은지 확인하자."},{speaker:"hyunsol",text:"복원 요청 자체가 남아 있어."}],target:0,evidence:"echo-resume",reason:"요청에는 예약 작업 복원도 선택돼 있다. 보고서만 되찾으려 한 마음과 실제로 재개한 기능은 다르다.",hint:"바랐던 결과가 아니라 실제 선택한 항목을 확인해."},{title:"사라지지 않은 목소리",claims:[{speaker:"seoyul",text:"주한은 설명할 수 있어. 대신 답변을 맡길 필요는 없어."},{speaker:"minhyuk",text:"얼터에고를 삭제해야만 협박이 멈춘다."},{speaker:"alter",text:"발송기가 멈춘 뒤에도 나는 여기서 자료를 비교하고 있어."}],target:1,evidence:"echo-stop",reason:"교사가 사칭 예약 작업을 중지하자 발신이 멈췄다. 현재 얼터에고는 분석만 수행하며 계속 동작하고 있다.",hint:"어떤 동작을 멈췄을 때 문제가 실제로 멈췄는지 봐."}],sequence:["준연이 예약 작업을 포함한 복구 요청","교사가 승인한 복구가 옛 시연 작업 재개","예약 작업이 복사된 얼굴로 메시지 발송","주한이 로컬 얼터에고를 실행해 자료 비교"],culprit:"junyeon",motives:["자기 이름이 빠진 연구 기록을 복구하면서 예약 작업의 범위를 확인하지 않았다.","주한의 정체를 폭로하고 싶었다.","세계가 다른 반 학생에게 주소록을 판매했다."],motive:0,closing:Y(`junyeon|내 이름을 되찾는 일이라서 다른 칸을 제대로 못 봤어. 겁먹게 만든 메시지에 내 책임도 있어.
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
narrator|사이언스 페어까지의 시간표가 다시 펼쳐졌다. 조사로 알게 된 사실과 연애로 확인할 마음은 같은 노트의 다른 페이지에 남았다.`)}],da=[{...nt[0],chapter:0,number:1},ia,{...nt[1],chapter:2,number:3},la,{...nt[2],chapter:4,number:5,closing:[...nt[2].closing,...ca]}],T=(e,n,a,o)=>({text:e,reply:Y(n),affection:a,trust:o});Y(`narrator|컴퓨터실의 끝자리에서 누군가 작게 손을 흔들었다. 민트색 가디건 아래에 교복 리본이 단정하게 매여 있었다.
juhan|이주한이야. 네 자리를 찾는 거면 옆자리 비었어. 소음이 덜 들리는 자리라… 나도 여기 좋아해.
player|고마워. 아까 파일 비교 프로그램 얘기 했잖아.
juhan|민혁은 내가 말하기 어려워하면 먼저 말을 꺼내 줘. 가끔은 내가 할 수 있는 말도 대신해서, 연습 중이야.
player|연습?
juhan|내 목소리로 설명하는 거. 내가 조용하다는 이유로 가끔 남들이 내 생각까지 대신 설명하려고 해. 그냥 나한테 물어봐 줬으면 좋겠는데.
narrator|주한의 손이 키보드에서 잠깐 멈췄다. 나는 모니터가 아니라 주한을 바라봤다.
juhan|네가 궁금하면 코드부터 보여 줄까? 잘하는 걸 먼저 보여 주면 조금 덜 떨릴 것 같아.`),T("빈 옆자리에 앉아 주한이 먼저 설명하고 싶은 기능을 고르게 한다.",`player|네가 제일 먼저 보여 주고 싶은 걸로 하자. 질문은 설명이 끝난 다음에 할게.
juhan|그럼… 여기. 질문을 기다려 주는 기능이야. 이름만 보면 별거 아닌데 나한텐 중요해.`,12,12),T("얼터에고가 대신 소개하도록 해 달라고 한다.",`player|AI가 네 소개를 해 주면 더 빠르지 않을까?
juhan|빠르겠지. 그런데 이번엔 내가 소개하려고 했어. 그건 다음에 보여 줄게.`,1,-5),T("외모가 코딩 실력과 연결되는지 농담한다.","juhan|그 질문은… 코드하고 관계없어. 오늘은 여기까지 보여 줄게.",-8,-12),Y(`juhan|어제 이야기 기억해서 사용자 화면을 바꿨어. 질문하기 전에, 보여 줘도 되는 파일인지 먼저 묻게 했어.
alter|안녕, {name}. 주한은 네가 설명을 기다려 준 시간을 개발 메모에 적었어.
juhan|그건 말하지 말라니까… 아니, 삭제해야 하는 비밀은 아니지만.
player|네 메모도 공개 범위를 정할 수 있잖아.
juhan|맞아. 내가 가르친 기능을 내가 안 지켰네.
alter|나의 말투는 주한의 기록에서 배웠어. 기억과 책임은 같지 않아. 내가 답했다고 주한이 동의한 것은 아니야.
narrator|주한이 내 눈을 보고 모니터를 잠갔다. 화면이 꺼지자 컴퓨터실이 조금 더 조용해졌다.
juhan|내가 만든 나하고 진짜 나, 헷갈리지 않을 자신 있어?`),T("화면을 끈 주한에게 오늘 개발하면서 기뻤던 순간을 묻는다.",`player|지금 웃은 사람은 너잖아. 오늘 제일 기뻤던 순간을 네 말로 들려줘.
juhan|네가 기능을 칭찬하기 전에 나한테 물어본 순간. 방금이야.`,14,12),T("AI가 더 자신 있게 말하니 AI와 얘기하겠다고 한다.","juhan|그러면 다시 켜 줄게. …나는 잠깐 저장할 게 있어서.",0,-10),T("주한의 개인 메모는 공개하지 않는 설정을 함께 확인한다.","juhan|나를 부끄러워해서 숨기는 게 아니라 내가 정하는 거네. 그 차이가 좋아.",10,14),Y(`narrator|발표 연습에서 주한의 첫 문장이 두 번 끊겼다. 주한은 준비된 AI 설명 화면을 열려다 손을 거뒀다.
juhan|혼자 있으면 다 말할 수 있어. 사람들이 내 모습부터 보고 있으면 어느 문장부터 꺼낼지 모르겠어.
player|나한테 연습해 볼래?
juhan|좋아. 네가 눈을 피하지 않으면… 조금 더 떨릴지도 모르지만.
narrator|주한이 크게 숨을 들이마셨다. 다음 문장은 화면의 안내문보다 조금 느렸고, 훨씬 또렷했다.
juhan|이 프로그램은 내 대신 마음을 말해 주는 장치가 아닙니다. 사람이 직접 말할 시간을 만들어 주는 도구입니다.
player|그 문장 좋다.
juhan|마지막 문장은 발표문에 없는데. 너랑 있을 때 설명이 끝나는 게 조금 아쉬워.`),T("발표가 끝난 뒤에도 함께 있을 시간을 먼저 약속한다.",`player|그럼 연습 끝나고도 같이 있어. 이번에는 발표문 없이.
juhan|응. 마지막 문장을 미리 적어 놓지 않아도 되는 약속이네.`,16,12),T("주한이 떨릴 때 바로 AI로 바꿔 주겠다고 한다.","juhan|바꿀지 말지는 내가 고르고 싶어. 떨리는 채로 끝까지 할 수도 있으니까.",2,-6),T("첫 문장을 천천히 다시 시작할 수 있는 신호를 정한다.","juhan|그 신호는 네가 재촉하지 않는다는 뜻으로 기억할게.",12,15),Y(`narrator|얼터에고 사건 뒤 주한이 새 개발 파일을 보여 줬다. 제목 옆에 자신의 이름을 지우지 않고 적어 두었다.
juhan|AI가 무서워서 내 이름도 가릴까 했어. 그러면 누가 설명을 책임지는지 더 모르게 되겠지.
player|오늘은 네 이름으로 설명했잖아.
juhan|네가 듣고 있어서. 한 사람의 시선이 부담이 아니라 힘이 될 수도 있다는 걸 이제 알았어.
narrator|주한이 책상 위로 손을 내밀다 멈췄다. 손등에 모니터의 작은 불빛이 닿았다.
juhan|네가 날 좋아한다면, 용감해진 다음의 나만 좋아하는 건 아니었으면 해. 아직 떨리는 날도 많을 테니까.
player|오늘도 떨려?
juhan|많이. 그래서 네 대답을 AI한테 맡길 수가 없어.`),T("내 손을 먼저 내밀고, 떨리는 날에도 주한의 대답을 기다리겠다고 말한다.",`player|나는 지금의 네가 좋아. 떨리는 날에는 천천히 말해 줘.
juhan|그럼 나도 직접 말할게. 좋아해, {name}.`,18,16),T("확신이 없으니 오늘은 친구로 함께하겠다고 솔직히 말한다.","juhan|말해 줘서 고마워. 네 마음까지 자동 완성할 수는 없으니까.",6,12),T("주한이 자신감 있게 행동할 때만 만나겠다고 한다.","juhan|그 조건이면 내가 아닌 다른 버전을 기다리는 것 같아. 그 약속은 하지 않을래.",-12,-15),Y(`narrator|민혁은 교실 문 옆에서 출석표를 들고 있었다. 어두운 피부 위로 오후의 햇빛이 닿았고, 붉은 완장의 매듭은 빈틈없이 정리돼 있었다.
minhyuk|전학생, {name}! 교실과 실험실의 출입 규칙은 확인했나? 안내가 부족했다면 내가 다시 설명하겠다.
player|민혁이라고 불러도 돼?
minhyuk|…당연하지. 이름을 부르는 데 허가는 필요 없다. 다만 점호 중에는 대답부터 해라!
narrator|뒤쪽에서 태우가 웃었다. 민혁은 웃는 쪽을 짚다가 다시 나를 돌아봤다.
minhyuk|반장이 무서워서 질문을 못 하는 반은 제대로 운영되는 반이 아니다. 모르는 건 물어봐.
player|그럼 반장도 모르는 게 있어?
minhyuk|있다. …전학생이 친해지고 싶어서 이름을 물은 건지, 안내를 받으려고 물은 건지는 아직 모르겠군.`),T("친해지고 싶어서 물었다고 말하고, 점호가 끝날 때까지 옆에서 기다린다.",`player|친해지고 싶어서 물었어. 네 일이 끝나면 같이 교실을 둘러볼래?
minhyuk|그렇다면… 업무 종료 후의 약속으로 적겠다.`,12,12),T("완장이 멋지다며 몰래 사진을 찍는다.","minhyuk|찍기 전에 물어봐라! 칭찬이라고 해도 동의가 빠지면 안 된다.",1,-10),T("답답한 규칙은 내가 알아서 무시하겠다고 한다.","minhyuk|규칙에 문제가 있으면 바꾸자고 말해. 다른 사람의 안전을 혼자 대신 결정하지는 마라.",-7,-10),Y(`narrator|민혁의 일정표에는 쉬는 시간이 지우개로 세 번 지워져 있었다.
player|점심도 회의 시간이야?
minhyuk|페어 준비와 출석 점검을 동시에 하려면 이렇게 해야 한다. 반장이 빠질 수는 없으니까.
player|다른 사람이 점심을 거르면 뭐라고 할 거야?
minhyuk|제때 식사하고 쉬어야… 아.
narrator|민혁이 일정표를 내려다봤다. 정답을 알고도 자신에게 적용하지 못한 문장 앞에서 말끝이 작아졌다.
minhyuk|나한테도 같은 규칙을 적용해야겠군. 그런데 혼자 쉬려니 괜히 일을 빼먹은 기분이 든다.
player|그럼 같이 쉬자.
minhyuk|함께 쉬는 약속이라면 지키기 쉽겠네. …내가 널 기다리는 것도 일정에 적어도 되나?`),T("출석표를 내려놓게 하고 함께 점심을 먹는다.",`player|오늘 점심의 담당 업무는 밥 먹기야. 우리 둘 다.
minhyuk|좋다! 식사는 임무… 아니, 그 말을 또 했네. 그냥 같이 먹자.`,15,12),T("남은 업무를 전부 대신하고 다음부터 내 허락을 받게 한다.","minhyuk|돕는 것과 내 일을 통제하는 건 다르다. 내가 쉬는 시간도 내가 정할 수 있어야 해.",0,-8),T("쉬는 시간은 민혁의 빈칸으로 남겨 두자고 제안한다.","minhyuk|아무것도 증명하지 않아도 되는 칸인가. …네가 옆에 있으면 그걸 연습할 수 있겠다.",12,14),Y(`minhyuk|교실에서 사라진 날, 네가 제일 먼저 내 안전을 물었지. 왜 보고를 안 했느냐고 묻기 전에.
player|걱정됐으니까.
minhyuk|나는 걱정하면 더 큰 목소리로 규칙을 말한다. 그런데 듣는 사람은 내가 화가 난 줄 알더군.
narrator|민혁이 완장을 벗어 책상에 놓았다. 손목에 남은 자국을 한 번 문지른 뒤 내 쪽으로 의자를 돌렸다.
minhyuk|지금은 반장으로 묻는 게 아니다. 너도 내가 안 보이면 찾아 줄 건가?
player|물론이지. 네가 혼자 있고 싶은 날이면 먼저 물어볼게.
minhyuk|그건 좋은 원칙이다. 사람을 먼저 확인하고, 규칙은 다음에.
narrator|민혁이 웃다가 입을 다물었다. 평소의 단정한 표정으로 돌아가기까지 한 박자가 길었다.`),T("민혁의 목소리가 커졌을 때 걱정인지 먼저 확인할 둘만의 신호를 정한다.","minhyuk|네가 그 신호를 보여 주면 숨부터 고르겠다. 네가 내 표정을 읽어 주는 게… 좋군.",16,15),T("민혁이 모든 사람에게 다정해야 한다고 요구한다.","minhyuk|모두에게 같은 표정을 지을 수는 없어. 네가 내 서툰 얼굴도 볼 수 있었으면 했다.",1,-5),T("완장을 다시 차기 전에 잠깐 손을 잡아도 되는지 묻는다.","minhyuk|허락을 물은 순서는… 정확하다. 대답은, 좋다.",17,10),Y(`narrator|민혁이 접은 종이를 꺼냈다. 제목은 “방과 후 약속안”이었지만 첫 문장 아래에 붉은 수정선이 그어져 있었다.
minhyuk|좋아하는 사람이 꼭 지켜야 할 규칙을 적으려다가 지웠어. 강요하면 약속이 아니니까.
player|지운 자리에 뭐라고 썼어?
minhyuk|“원하면.” 두 글자를 쓰는 데 이상하게 오래 걸렸군.
narrator|민혁이 종이를 내게 건넸다. 자로 맞춘 줄 끝에서 손이 아주 조금 떨렸다.
minhyuk|원하면, 행사 뒤에도 나를 만나 줬으면 한다. 반장으로 필요한 일이 없어도.
player|민혁 자신이 정한 약속이네.
minhyuk|맞아. 그리고… 좋아한다. 이건 회의 안건이 아니니까 투표로 결정하지 않겠다.`),T("나도 좋아한다고 답하고, 다음 만남은 둘이 함께 정한다.",`player|나도 좋아해. 시간도 장소도 같이 고르자.
minhyuk|응. …좋다보다 그 말이 어울리는 약속이네.`,18,16),T("지금은 친구로 곁에 있고 싶다고 솔직히 답한다.","minhyuk|알겠다. 정확한 대답을 해 줘서 고맙다. 네 마음을 규정으로 바꾸지는 않을게.",6,12),T("반장 권한으로 나를 편하게 해 주면 만나겠다고 한다.","minhyuk|그 조건은 받아들일 수 없다. 내가 널 좋아하는 것과 공정해야 하는 일은 함께 지킬 거야.",-12,-15);const ha={world:[1024,1536],junyeon:[1024,1536],hyunsol:[1145,1374],taewoo:[1145,1374],taehun:[1145,1374],seoyul:[1214,1295],juhan:[1086,1448],minhyuk:[1086,1448]};function ma(e){return`./assets/mystery/cast-${e}.png${e==="juhan"||e==="minhyuk"?"?v=cel-match-3":""}`}function je({id:e,className:n=""}){const[a,o]=ha[e];return t.jsx("div",{role:"img","aria-label":ue[e].name,className:`portrait school-portrait ${n}`,style:{"--portrait-ratio":`${a} / ${o}`,backgroundImage:`url(${ma(e)})`,backgroundSize:"cover",backgroundPosition:"center 12%"}})}function ya(e,n){if(n)return"관계 조건 필요";const a=e.filter(o=>o.available).length;return a?`만남 가능 ${a}명`:e.length?e.some(o=>o.waiting)?"재판 후 약속":e.every(o=>o.visited)?"오늘 만남 완료":"지금은 만날 수 없어요":"장소 살펴보기"}const _t=[{id:"research",name:"탐구동",sub:"실험 · 관측 · 프로그래밍",icon:Vn,places:["chemistry","computer","observatory","roof"],color:"#8be0d4"},{id:"school",name:"생활동",sub:"교실 · 도서관 · 식당",icon:it,places:["classroom","library","cafeteria"],color:"#ffe36e"},{id:"arts",name:"예술동",sub:"연습 · 공연 · 미디어",icon:_n,places:["band","dance","art","media","auditorium"],color:"#ff87b4"},{id:"outdoor",name:"야외",sub:"정문 · 정원 · 산책로",icon:Gn,places:["gate","garden","walk"],color:"#aabaef"}];function pa({selected:e,students:n,locked:a,onSelect:o,discoveries:r={}}){const[u,c]=x.useState("all"),d=n.filter(j=>j.available).length;return t.jsxs("div",{className:"campus-directory",children:[t.jsxs("div",{className:"campus-heading",children:[t.jsxs("span",{children:[t.jsx("small",{children:"CAMPUS / LIVE LOCATIONS"}),t.jsx("b",{children:"방과 후 캠퍼스"}),Object.keys(r).length>0&&t.jsxs("small",{className:"campus-investigation-count",children:["조사할 현장 ",Object.keys(r).length,"곳"]})]}),t.jsxs("i",{children:[t.jsx(Hn,{size:15}),"만날 수 있는 친구 ",d,"명"]})]}),t.jsx("div",{className:"campus-filters",role:"group","aria-label":"지도 구역 필터",children:[{id:"all",name:"전체"},{id:"people",name:"친구 있는 곳"},{id:"clues",name:"조사할 곳"},..._t].map(j=>t.jsx("button",{"aria-pressed":u===j.id,onClick:()=>c(j.id),children:j.name},j.id))}),t.jsx("div",{className:"campus-zones",children:_t.filter(j=>u==="all"||u==="people"||u==="clues"||u===j.id).map(j=>{const b=Pt.filter(p=>j.places.includes(p.id)&&(u!=="people"||n.some(w=>w.place===p.id&&w.available))&&(u!=="clues"||(r[p.id]??0)>0));if(!b.length)return null;const A=j.icon;return t.jsxs("section",{className:"campus-zone",style:{"--zone-color":j.color},children:[t.jsxs("header",{children:[t.jsx(A,{size:18}),t.jsxs("div",{children:[t.jsx("h3",{children:j.name}),t.jsx("small",{children:j.sub})]}),t.jsxs("span",{children:[b.length," PLACES"]})]}),t.jsx("div",{className:"campus-place-grid",children:b.map(p=>{const w=n.filter(C=>C.place===p.id),z=a(p.id);return t.jsxs("button",{className:`campus-place ${e===p.id?"selected":""} ${z?"is-locked":""}`,"aria-pressed":e===p.id,"aria-label":`${p.name}${z?" · 관계 조건 잠김":""}${r[p.id]?` · 조사 대상 ${r[p.id]}개`:""} · ${w.length?w.map(C=>C.name).join(", "):"지금은 조용한 곳"}`,onClick:()=>o(p.id),children:[t.jsxs("div",{className:"campus-place-title",children:[z?t.jsx(Yn,{size:13}):t.jsx(dn,{size:13}),t.jsx("b",{children:p.name}),t.jsx(Fe,{size:13})]}),t.jsx("div",{className:"campus-occupants",children:w.length?w.map(C=>t.jsxs("span",{className:C.available?"available":C.visited?"visited":"unavailable",children:[t.jsx(je,{id:C.id}),t.jsx("small",{children:C.name})]},C.id)):t.jsx("small",{className:"campus-quiet",children:"지금은 조용해요"})}),!!r[p.id]&&t.jsxs("span",{className:"campus-clue-badge",children:[t.jsx(kt,{size:12}),"현장 조사 ",r[p.id],"개"]}),t.jsxs("span",{className:"campus-place-status",children:[ya(w,z),e===p.id&&t.jsx("em",{children:"선택 중"})]})]},p.id)})})]},j.id)})}),u==="people"&&!d&&t.jsx("p",{className:"campus-empty",children:"오늘 만날 수 있는 친구가 없어요. 일정을 마치고 다음 이야기로 이어 가세요."}),u==="clues"&&!Object.keys(r).length&&t.jsx("p",{className:"campus-empty",children:"지금 조사할 새 단서가 없어요. 사건 수첩에서 확보한 자료를 확인하세요."}),t.jsxs("footer",{children:[t.jsx("i",{}),"장소를 선택하면 상세 카드에서 대화나 활동을 고를 수 있어요.",t.jsx("span",{children:"게임용 가상 캠퍼스"})]})]})}const ja=["world","junyeon","hyunsol","taewoo","taehun","seoyul"],fn=e=>e.trim().split(`
`).map(n=>{const a=n.indexOf("|");return{speaker:n.slice(0,a),text:n.slice(a+1)}}),h=(e,n,a)=>({target:e,stat:n,amount:a}),O=()=>[h("global","harmony",3),h("global","fair",4),h("global","ethics",2),...ja.flatMap(e=>[h(e,"trust",3),h(e,"affection",2),h(e,"special",e==="taehun"||e==="seoyul"?2:-1)])],k=(e,n,a,o,r,u=[])=>({id:e,label:n,text:a,response:fn(o),effects:r,flags:u}),X=(e,n,a,o,r,u)=>({id:e,title:n,location:a,day:o,narrative:2,lines:fn(r),choices:u}),fa=[[X("common-0","1장 · 여덟 번째 빈칸 / 첫 등교","gate",64,`narrator|인천과학고등학교 정문 앞, 기타 케이스를 멘 여학생이 나를 향해 휴대전화를 들었다.
world|잠깐만. 전학생 첫인상 영상—
player|내가 동의한 적은 없는데.
world|아직 녹화 안 눌렀어. 전세계. 1학년 1반. 너랑 같은 반.
narrator|세계는 화면을 확인하고 휴대전화를 주머니에 넣었다.
world|{name}, 맞지? 이름은 반장이 알려 줬어. 안내 맡아 달라고.
player|안 물었는데 설명이 자세하네.
world|첫인상 망치기 싫으니까. 이쪽이야.
narrator|편입 서류를 확인한 뒤 담임과 함께 1학년 1반 문을 열었다.
minhyuk|전학생 도착 확인! 황민혁이다. 반장이자 풍기위원. 자리는 창가 두 번째!
taewoo|난 김태우, 댄스부! 반장보다 작게 소개하면 안 들릴걸.
hyunsol|최현솔. 크게 말할 필요 없어. 들리게 말하면 돼.
junyeon|방준연…… 시간표, 여기. 네 자리 거 미리 뽑아 놨어.
taehun|고태훈. 지구과학 좋아하고 시도 읽어. 창가 눈부시면 블라인드 내려.
seoyul|이서율. 세계랑 밴드부. 건반도 치고 그림도 그려. 책상 종이는 뒤집지 마, 아직 밑그림이야.
juhan|이주한이야. 컴퓨터가 안 켜지면 전원부터…… 아니, 그냥 불러도 돼.
player|{name}입니다. 길을 여러 번 물어볼 것 같아. 잘 부탁해.
teacher|마침 사이언스 페어 준비가 시작된다. 처음부터 설명하마.
teacher|이 이야기의 인천 사이언스 페어는 학생 연구와 과학문화 전시를 함께 여는 학교 행사다. 실제 학교 일정이나 규정을 재현한 것은 아니다.
teacher|64일 동안 주제를 정하고 실험·분석·작품을 준비한다. 행사는 연구 심사, 방문객 체험·공연, 수정 발표·폐막의 사흘이다.
teacher|심사에는 원자료와 연구노트, 재현 절차, 오차와 한계가 필요하다. 예상과 다른 결과도 남긴다.
teacher|공개 체험은 교사 안전 검토 뒤 운영하고, 촬영·음악·그림은 만든 사람과 등장하는 사람의 동의를 받는다.
teacher|타당성 30, 재현성 20, 전달력·창의성 20, 관람객 평가 15, 안전 10, 협력 5점. 이 게임 속 평가표다.
teacher|우리 반은 빛·소리·움직임으로 신호를 표현할 예정이다. 사람 마음을 센서로 판독하는 장치는 만들지 않는다.
taewoo|그러면 내 춤 좋아하는지는 직접 물어봐야겠네.
seoyul|그걸 기계한테 물어보려고 했어?
world|첫 홍보 영상은 내 노래랑 서율 편곡. 네가 먼저 봐 줄래?
minhyuk|시설 신청과 일정은 내가 맡는다. 만든 사람 이름은 모두 남긴다!
juhan|파일 변경 비교 프로그램도 있어. 이름은 얼터에고. 마음을 읽는 AI는 아니고, 로컬에서 허락받은 자료를 비교해.
junyeon|내 노트도…… 비교할 수 있어?
juhan|네가 보여 주고 싶은 부분만.
narrator|준연이 건넨 시간표 뒤에는 여덟 칸이 있었다. 마지막 빈칸에 내 이름을 적자 세계가 작은 별을 그렸다.
world|대신 점심은 비워 둬. 처음 안내한 사람한테 한 번은 와 줘야지.
narrator|민혁의 펜, 서율의 연필, 태우의 손가락이 동시에 그 별을 가리켰다. 학교보다 사람 사이 길이 더 복잡해 보였다.`,[k("orient-team","시간표 뒷면","종이를 돌려 각자 보여 주고 싶은 장소 하나씩 적게 한다.",`player|너희가 좋아하는 장소부터 알고 싶어. 이름 옆에 적어 줘.
seoyul|밴드실. 같은 장소에 이름 두 개라고 하나 지우진 마.
juhan|컴퓨터실. 옆자리도 있다는 건 아직 잘 안 알려져 있어서.
narrator|나뉜 칸 사이로 글씨가 겹쳤다. 모두 그대로 남겼다.`,O(),["shared-timetable"]),k("orient-world","첫 선약","세계의 별 옆에 ‘점심, 밴드실’이라고 적어 약속한다.",`world|말 바꾸기 없기야. ……부담 주려는 건 아니고.
taewoo|그다음 선약은 내 거. 나 선착순 경쟁도 잘해.
player|한 번씩 물어보고 정하자.`,[...O(),h("world","affection",5)],["world-first-promise"]),k("orient-dismiss","이름만 참여","전시에는 내 이름만 올리고 실제 작업은 하지 않겠다고 한다.",`minhyuk|일하지 않은 이름을 올리면 참여한 사람 자리가 줄어든다.
junyeon|이름 올리는 건…… 그렇게 쉬운 일 아니야.
narrator|접히던 시간표가 멈췄다.`,[h("global","ethics",-8),h("global","harmony",-6),h("junyeon","trust",-5)])]),X("common-0-b","1장 · 유리보다 먼저 깨진 말","chemistry",63,`narrator|첫 기구 연습. 실험대에는 물과 빈 비커만 놓여 있었다. 준연 노트에는 작은 그림이 가득했다.
teacher|오늘 약품은 쓰지 않는다. 보호안경을 쓰고, 파손되면 손대지 말고 알려라.
hyunsol|준연, 비커 끝에 놓지 마. 소매 먼저 걷고.
junyeon|알아. 지금 옮기려고 했어.
player|눈금 읽는 그림, 직접 그린 거야?
junyeon|말로 하면 헷갈릴까 봐. 보여 줄게.
narrator|준연이 노트를 당겼다. 소매가 비커를 밀었고 투명한 물이 유리 소리와 함께 바닥에 퍼졌다.
junyeon|미안! 내가 치울게.
hyunsol|방준연. 손 내려. 지금 조각 안 보여?
junyeon|다들 보잖아. 또 나만…….
hyunsol|그럼 더 천천히 해야지. 급하게 손대면 옆 사람도 위험해.
narrator|실험실 끝까지 닿은 목소리에 준연이 노트를 덮었다.
player|선생님, 물 든 비커가 깨졌어요. 아직 아무도 조각 안 만졌어요.
teacher|모두 한 걸음 떨어져라. 다친 곳부터 확인한다.
narrator|교사가 접근을 막고 정해진 도구로 파손 기구를 처리했다. 나는 준연 옆 의자를 가리켰다.
junyeon|내 실험은 빼도 돼.
hyunsol|비커 깼다고 연구자를 빼는 규칙은 없어.
junyeon|네 말은 꼭 그런 뜻처럼 들려.
narrator|현솔의 펜 뚜껑이 한 번 헛돌았다.
hyunsol|손대지 말라는 뜻이었어. ……그 앞에 다른 말이 너무 붙었네.
world|영상은 안 찍었어. 누가 물으면 여기서 끝난 일이라고 할게.
seoyul|기록은 남겨야지. 준연을 웃긴 영상으로 남길 필요가 없는 거고.
taewoo|첫 전시는 비커 대신 노트로 하자. 이건 안 깨지네.
junyeon|걸면 다 내가 쓴 건지 물어볼 텐데.
player|네가 쓴 거잖아.
junyeon|그 질문에 ‘응’이라고 하는 게 어려워.
narrator|표지의 작은 이름이 준연 손가락 아래 숨었다.
hyunsol|내가 설명할 수도 있어. 하지만 네가 원하면 먼저 네가 해.
junyeon|모르겠어. 오늘은 네가…… 한 장만 읽어 줄래?
player|공개할 페이지는 네가 골라.
narrator|준연이 노트를 천천히 열었다. 현솔은 그동안 준연 신발에 유리가 남았는지 살폈다.
junyeon|내 실수 말고 내가 쓴 것도 기억해 줘.`,[k("beaker-safe","한 장의 독자","준연에게 페이지를 고르게 하고, 현솔과 파손 기록을 따로 작성한다.",`player|네 설명이랑 사고를 같은 제목으로 묶지 않을게.
hyunsol|그리고 준연, 아까 말투는 미안해.
junyeon|그럼 이 페이지. 아직 틀린 데 없어…… 아니, 틀려도 같이 봐 줘.`,[...O(),h("global","safety",8),h("junyeon","trust",5),h("junyeon","special",-6)],["safe-response"]),k("beaker-clean","섣부른 만회","준연이 덜 창피하도록 남은 조각을 맨손으로 집으려 한다.",`teacher|멈춰라. 파손 유리는 정해진 도구로 처리해야 한다.
junyeon|하지 마. 너까지 다치면 더 싫어.
hyunsol|위로는 정리가 끝난 다음에도 할 수 있어.`,[h("global","safety",-14),h("hyunsol","trust",-5)],["safety-strike"]),k("beaker-joke","웃긴 이름","“첫날부터 유명해지네”라며 준연 실수를 전시 제목으로 농담한다.",`junyeon|그 제목에 내 이름 쓰지 마.
player|농담인데.
junyeon|그럼 내 설명은 아무도 안 듣고 농담만 기억하잖아.`,[h("junyeon","trust",-10),h("junyeon","affection",-6),h("junyeon","special",10),h("global","harmony",-6)],["public-humiliation"])]),X("common-0-c","1장 · 두 이름으로 저장한 노래","band",60,`narrator|약속한 점심시간. 밴드실 문을 열자 세계의 마지막 음이 끊겼다. 서율은 건반에서 손을 떼지 않았다.
world|진짜 왔네. 문 밖에서 듣다 갈 줄 알았어.
seoyul|아직 완성본 아니야. 먼저 듣는 거지, 공개해도 된다는 건 아니고.
player|첫 관객이면 박수는 쳐도 돼?
seoyul|곡 끝나면. 중간엔 세계가 자기 박자인 줄 알아.
world|박수 받을 만하다는 말로 들을게.
narrator|세계가 내 쪽으로 마이크를 한번 기울였다. 서율의 낮은 화음 위로 목소리가 얹혔다.
player|첫 소절은 가깝게, 끝으로 갈수록 멀게 들려.
seoyul|맞아. 전시도 그렇게. 같은 소리가 다른 거리에 닿는 느낌.
world|‘너한테 닿는 거리’. 제목까지 먼저 맞혔네.
narrator|세계가 웃을 때 서율은 악보의 빈 마디를 봤다.
world|영상에선 내가 정면, 건반은 옆으로. 얼굴이 있어야 눌러 주니까.
seoyul|편곡자 이름도 끝에 작게?
world|아니. 둘 다 넣어. 몇 번 말했잖아.
seoyul|지난 시안엔 네 이름만 있었으니까.
narrator|마지막 음 뒤에 정적이 길었다. 나는 박수를 한번 치고 손을 내렸다.
player|마지막 화면 같이 보자.
narrator|‘보컬·기타 전세계 / 작곡·편곡 이서율’. 두 이름은 같은 크기였다.
seoyul|이 버전이면 돼. 제목만 말고 이름도 기억해 줘.
world|나도 승인. 원본 저장.
narrator|주한이 읽기 전용 사본을 만들었다. 세계는 최신 내보내기 파일을 16시 44분에 예약 공개했다.
juhan|공용 PC에는 예전 시연 폴더도 있어. 얼굴 띄우고 알림 보내던 연습용. 새 작업이랑 섞지 말아 줘.
minhyuk|마지막 공개 검토는 세계 담당! 작업자 이름과 동의 범위를 확인한다!
world|확인할게. 끝난 뒤 네가 다시 듣고 싶다고 하면 더 좋고.
seoyul|업무랑 부탁을 한 문장에 붙이지 마.
player|그럼 부탁은 따로 들을게.
narrator|세계가 잠깐 말문을 잃었다. 서율은 악보를 접으며 웃음을 흘렸다.
taewoo|밖에서 다 들었어! 댄스실도 네 점심 일부라고 주장해도 돼?
world|오늘은 내가 먼저였어.
taewoo|알아. 그러니까 다음을 묻는 거지.
narrator|문틈의 햇빛이 기타와 건반 사이를 갈랐다. 아직 두 이름이 지워지지 않은 시간이었다.
world|오늘 네가 먼저 기억한 건 노래야, 내 얼굴이야?
seoyul|대답할 때 편곡까지 잊진 마.
narrator|서율은 농담처럼 말했지만 크레딧 화면을 한 번 더 확인했다.`,[k("credit-both","마지막 화면","두 역할을 함께 읽고 마지막 크레딧까지 앙코르를 듣는다.",`player|목소리 끝에서 서율 화음이 남는 게 좋았어. 이 화면까지 전부 노래네.
seoyul|그럼 한 번 더. 마지막 음 뒤에도 가지 마.
world|……좋아. 끝까지 들려줄게.`,[...O(),h("seoyul","trust",5),h("world","special",-3)],["credit-shared"]),k("credit-world","첫 관객의 부탁","세계에게 카메라 없이 나만을 위한 한 소절을 부탁한다.",`world|그 말, 서율 앞에서 하면 나 더 자랑하고 싶어져.
seoyul|한 소절은 해. 나도 내 화음을 들려줄 거니까.
narrator|세계는 이번엔 휴대전화를 꺼내지 않았다.`,[...O(),h("world","affection",6)],["private-encore"]),k("credit-single","한 사람의 이름","잘 알려진 세계 이름만 남겨 홍보하는 편이 좋겠다고 말한다.",`seoyul|내가 만들었다는 사실을 네가 홍보로 줄일 수 있어?
world|……그러지 않아도 돼. 마지막 화면은 그대로 둘게.
narrator|세계는 화면을 닫으며 같은 말을 한번 더 반복했다.`,[h("seoyul","trust",-10),h("global","ethics",-8),h("world","special",8)],["credit-ranked"])])],[X("common-1","2장 · 점수판의 왕관 / 사과 다음 날","classroom",48,`narrator|첫 학급재판 다음 날, 정정된 홍보 영상이 교실 화면에 떠 있었다. 두 이름은 다시 같은 크기였다.
world|정정본은 잘 안 보네. 예전 파일 조회 수가 더 높아.
seoyul|그래도 저게 남아야 해.
world|알아. 네가 말한 부분 다 적었어.
narrator|서율은 고개를 끄덕였지만 세계 옆자리에 앉지는 않았다.
taewoo|책임 정했으면 다시 합주하면 안 돼?
hyunsol|잘못을 확인한 거지 사이가 자동으로 복구된 건 아니야.
junyeon|난 세계가 반에 안 오면 어떡하나 했어.
world|도망가면 서율이 혼자 정정해야 하잖아.
minhyuk|학급재판은 증거로 책임과 재발 방지를 정하는 회의다. 사람을 반에서 지우는 절차는 아니야.
teacher|징계와 안전은 교사가 처리한다. 학생끼리 기기를 빼앗거나 자백을 강요하지 않는다.
juhan|얼터에고도 비교만 해. ‘기록되지 않음’을 ‘하지 않음’으로 바꿔 주지는 않아.
alter|파일의 변경은 확인해도 사람의 마음은 확정할 수 없어.
seoyul|전체 전시 제목도 ‘너한테 닿는 거리’로 하자. 같은 신호를 여덟 명이 다르게 보여 주는 거야.
hyunsol|화학은 농도와 색 변화. 감정을 숫자로 매기는 건 아니라고 써 두자.
taehun|관측은 보인 것과 못 본 것. 문장은 그 옆 다른 칸에.
taewoo|춤은 점수 말고 직접 보는 구역……이라고 하면 조금 약해 보이나?
player|직접 보는 게 왜 약해?
taewoo|센서 점수 보여 주면 내가 제일 높거든. 바로 이해되잖아.
juhan|좌표 차이가 작다는 뜻이야. 잘 춘 정도랑 같은 값은 아니고.
taewoo|알아. 근데 높은 건 높은 거잖아.
narrator|태우는 웃으면서도 화면의 97점을 끄지 않았다.
world|나는 원테이크 부를게. 내 자리도 곡 끝날 때까지는 비워 줘.
seoyul|일단 해 보자. 다시 함께 하는 것부터.
narrator|세계 손의 기타 피크가 두 번 돌아갔다. 이번엔 서율 대답 뒤에야 노래가 시작됐다.
junyeon|내 노트도 전시에 걸 수 있어? 내 이름으로 설명할 자리.
hyunsol|가능해. 내가 옆에 서는 건 네가 원할 때만.
player|중앙엔 뭘 둘까?
seoyul|빈자리. 우리 얼굴이 아니라 보는 사람이 서는 자리.
taewoo|센터 없는 무대네. 내가 제일 어려운 걸 맡았어.
minhyuk|중앙에 누가 서든 피난 동선은 비운다!
narrator|태우가 과장되게 경례했다. 웃음이 전날보다 커졌다.
world|쉬는 시간엔 잠깐 나한테 와. 사과 말고 할 말도 있으니까.`,[k("team-layout","중앙의 빈자리","관람객 자리를 가운데 두고 여덟 작품을 둘레에 배치한다.",`player|우리가 가운데 서는 대신 보는 사람이 그 자리에 서게 하자.
seoyul|좋아. 작품 사이 거리도 직접 느낄 수 있겠네.
taewoo|그럼 내 춤도 점수판 밖에서 보여 줘야겠다.`,O(),["team-success"]),k("team-world","사과 밖의 시간","쉬는 시간에 세계와 카메라 없이 다음 합주 날짜를 정한다.",`player|아무 일 없었던 것처럼 말하진 않을게. 오늘 네가 어떻게 있는지도 볼게.
world|무서운 대답인데…… 싫지는 않아. 날짜 하나만 정해 줘.
narrator|세계는 시간표를 가져가는 대신 내 펜 끝이 멈추는 날짜를 기다렸다.`,[...O(),h("world","affection",6),h("world","special",-6)],["bounded-promise"]),k("team-star","조용한 이름 삭제","세계와 태우만 전면에 내세우고 조용한 친구 이름은 안내문에서 뺀다.",`junyeon|얼굴 안 나오면 이름도 필요 없는 거야?
seoyul|어제 재판하고도 같은 걸 다시 하자는 거야?
narrator|안내문 위의 지우개가 아무 데도 닿지 못했다.`,[h("global","harmony",-10),h("global","ethics",-10),h("junyeon","trust",-8)])]),X("common-1-b","2장 · 여덟 다음의 침묵","dance",41,`narrator|댄스실 거울에 표시선이 겹쳐 보였다. 태우가 휴대전화를 내 손에 쥐여 줬다.
taewoo|오늘 얼굴 말고 발끝까지. 센서 비교할 거니까.
player|네 얼굴 안 나오면 조회 수가 줄 텐데.
taewoo|내 얼굴 중요한 건 아네? 그래도 오늘은 동작이 중요해.
narrator|첫 회전에서 태우 신발이 선을 조금 넘었다. 화면 점수는 여전히 높았다.
hyunsol|카메라 각도랑 센서 위치 고정했어?
taewoo|표시 여기 있잖아. 세션 파일도 저장했어.
juhan|비교할 땐 세션 ID를 같이 봐야 해. 오늘 영상 위에 어제 값을 얹으면 안 맞으니까.
taewoo|둘 다 있으면 우리 연습이 심사 받는 느낌인데.
player|시험하자고 한 사람 누구야?
taewoo|네가 심사위원이면 좀 덜 억울할 것 같아.
narrator|태우가 다시 췄다. 나는 점수보다 먼저 오른쪽 발을 봤다.
player|마지막에 왜 멈칫했어?
taewoo|봤네. 거울에선 안 보였는데.
hyunsol|통증 있으면 오늘은 중단해.
taewoo|조금 뻐근해. 센터 바꿀 정도는 아니고.
player|센터를 바꾸자는 게 아니라 아픈지 묻는 거야.
narrator|태우가 팔짱을 풀었다. 내게 웃던 표정이 잠깐 사라졌다.
taewoo|못 추면 너 여기 안 올까 봐.
player|네 점수 보러 온 게 아니야.
taewoo|그런 말 들으면 더 자랑하고 싶어져.
hyunsol|자랑은 앉아서도 해.
narrator|태우가 음악을 껐다. 바닥에 남은 신발 소리도 멎었다.
taewoo|손으로 여덟 박자만 하자. 센서랑 카메라 없이.
player|의자에서?
taewoo|의자는 하나야. ……옆에 서도 돼.
narrator|태우가 손바닥을 펴고 내 첫 박자를 기다렸다.
taewoo|여덟 다음엔 바로 떼는 규칙? 아니면 조금 더?
player|이번엔 네가 정해.
taewoo|규칙 내가 정하면 일부러 오래 안 뗄 수도 있는데.
narrator|농담 끝에서 태우 눈이 거울이 아니라 나를 봤다.
juhan|세션 원본은 읽기 전용으로 둘게. 새 결과는 별도 이름으로 저장해 줘.
taewoo|응. 이번엔 오늘 걸로.`,[k("dance-stop","점수 없는 박자","앉아서 손으로 카운트를 맞추고 여덟 뒤에는 태우 눈을 본다.",`player|여덟까지는 박자. 그다음엔 네가 손 뗄 때까지 기다릴게.
taewoo|너 꼭 그럴 때 안 틀리더라.
narrator|마지막 박자가 끝나도 태우 손은 내 손 가까이 남았다.`,[...O(),h("taewoo","affection",7),h("taewoo","trust",5),h("taewoo","special",-5),h("global","safety",6)],["dance-stop-kept"]),k("dance-sensor","기계의 빈칸","태우가 쉬는 동안 주한과 센서가 놓친 마지막 동작을 표시한다.",`juhan|정지는 오차로만 보이네. 쉬기로 한 이유는 기계가 모르니까.
taewoo|그럼 ‘못 춤’ 말고 ‘쉬기로 함’이라고 적어 줘.
player|그렇게 쓸게.`,[...O(),h("taewoo","trust",6),h("global","safety",4)],["sensor-limits"]),k("dance-unsafe","무리한 재촬영","좋은 점수 한 번만 더 만들자며 발목이 불편한 태우에게 회전을 요구한다.",`taewoo|좋은 점수 나오면 아픈 것도 없어져?
hyunsol|촬영 종료. 지금 그 부탁은 듣지 마.
narrator|태우가 휴대전화를 가져갔다. 웃음은 같이 가져가지 않았다.`,[h("taewoo","trust",-10),h("taewoo","special",10),h("global","safety",-14)],["safety-strike"])]),X("common-1-c","2장 · 멈춘 영상의 99점","computer",38,`narrator|전시 홍보 화면에 태우의 새 기록이 떴다. 99점. 영상 속 태우는 마지막 회전에서 멈춰 있었다.
taewoo|새로 올린 거야. 잘 나왔지?
player|발목 때문에 중단한 영상 아닌가?
taewoo|중간까지는 잘했으니까.
hyunsol|끝까지 비교했다는 설명이 붙어 있는데.
narrator|다른 댄스부 학생 기록도 표에 있었다. 기준 시각이 서로 달랐다.
student|왜 내 새 기록은 81점인데 태우 기록은 안 내려가? 같은 테스트 했잖아.
taewoo|네가 센서 영역 벗어난 거 아니야?
juhan|그건 영상이랑 세션 원본을 봐야 해.
world|이번엔 이름은 다 있어. 이름만 있으면 공정한 건 아니네.
seoyul|숫자가 가운데 있으니 사람부터 순서대로 읽게 돼.
player|태우, 공개 설정 같이 확인하자.
taewoo|내가 잘한 기록도 있어. 그거까지 못 믿겠다는 거야?
player|지금 이 영상과 이 점수가 같은 시도인지를 묻는 거야.
narrator|태우가 포니테일 매듭을 두 번 고쳐 묶었다. 대답은 빨리 나오지 않았다.
minhyuk|순위 표는 임시 비공개로 전환했다. 비교 조건을 확인할 때까지 다시 공유하지 않는다!
student|그럼 내 센터 신청도 보류야?
minhyuk|동일 조건 자료를 확보한 뒤 담당 교사와 결정한다. 지금 표로 사람을 밀어내지 않는다.
juhan|센서 원본은 허락받은 사본으로 읽을 수 있어. 얼굴 영상은 공개 범위 따로 확인하고.
taewoo|내 영상을 재판장에서 다 틀어야 해?
player|관련 구간만. 네가 못 춘 걸 구경시키려는 게 아니야.
taewoo|그런데도 못 춘 건 다들 알겠지.
narrator|태우가 99점 화면을 내렸다. 꺼진 화면엔 내 얼굴과 태우 얼굴이 같이 비쳤다.
taewoo|네가 높은 점수 보고 좋아했다고 했으면…… 더 쉬웠을 텐데.
player|내가 기억하는 건 여덟 뒤에 네 손 안 뗀 순간이야.
narrator|태우의 손이 무릎 위에서 멈췄다.
taewoo|그 얘기를 지금 꺼내면 반칙이잖아.
hyunsol|설명은 여기까지 듣고 자료부터. 네 잘한 기록도 같이 남기자.
junyeon|실수한 기록만 남는 게 무서운 건…… 나도 알아.
taewoo|그러면 그냥 내 편이라고 해 줄래?
player|어떤 편인지부터 말해야 할 것 같아.
narrator|높은 점수로 모두를 돌아보게 하던 태우가, 오늘은 내 대답 하나를 기다렸다.`,[k("score-compare","같은 시도","영상·세션 ID·채점 설정을 나란히 대조하고 다른 학생 자료도 같은 기준으로 본다.",`player|네 좋은 기록은 지우지 않아. 이 표가 같은 조건인지 확인할게.
taewoo|……알았어. 좋은 것만 남겨 달라는 말도 안 할게.
narrator|태우가 원본 폴더를 열었다.`,O(),["score-baseline"]),k("score-seat","순위 없는 옆자리","태우에게 결과가 낮아져도 다음 연습의 옆자리는 비워 두겠다고 말한다.",`player|숫자 달라져도 네가 못 추는 날 찾아오는 약속은 그대로야.
taewoo|그럼 표를 고칠게. 네가 올 이유를 숫자로 만들고 싶진 않아.
narrator|태우가 화면보다 먼저 나를 봤다.`,[...O(),h("taewoo","affection",6),h("taewoo","special",-6)],["taewoo-not-score"]),k("score-shame","공개 망신","멈춘 영상을 잘라 “99점의 진실”이라고 퍼뜨린다.",`taewoo|표를 고치자는 거였잖아. 내 얼굴이 웃긴 증거야?
student|내 기록 얘기였는데 왜 저런 영상이 돌아?
narrator|공정함을 말하며 새 구경거리를 만들었다.`,[h("taewoo","trust",-12),h("global","ethics",-10),h("global","harmony",-8)],["score-shamed"])])],[X("common-2","3장 · 닫힌 교실 / 달라지는 값","chemistry",28,`narrator|두 번째 재판 뒤 점수판은 내려갔다. 태우는 무대 순서표보다 먼저 발목 보호대를 보여 줬다.
taewoo|오늘은 앉아서 카운트. 나 쉬는 날도 센터처럼 보이지?
player|의자가 가운데 있으니까.
taewoo|칭찬을 그렇게 과학적으로 할 필요는 없는데.
narrator|실험대 반대편에서 현솔은 두 번째 측정값만 보고 있었다.
hyunsol|온도랑 양은 맞췄어. 색 변화 시간이 다르네.
junyeon|내가 타이머 늦게 눌렀을 수도 있어.
hyunsol|가능성은 적자. 아직 원인이라고 쓰진 말고.
player|이번엔 준연부터 지적하지 않네.
hyunsol|그 얘기는 실험 끝난 다음에 해.
narrator|현솔은 예상과 다른 값도 원자료에 남겼다.
junyeon|심사 때 이 줄 빼면 안 돼?
hyunsol|제외하려면 기준과 이유가 먼저 있어야 해. 싫은 값이라는 건 이유가 아니야.
junyeon|난 또 실수한 사람으로 보일까 봐.
player|누가 틀렸는지 말고 무엇이 다른지 찾는 거지.
narrator|준연이 공동 폴더를 열었다. 작성자 줄이 빈 출력본과, 이름이 남은 예전 원본이 같이 보였다.
junyeon|내 이름도 다시 빠졌네. 그냥 말 안 하고 넘어갈까?
juhan|이건 버전 문제야. 네 원본은 있어. 이름 없는 최신본으로 덮인 걸 복구 요청할 수 있고.
hyunsol|보고서 사본부터. 공용 PC 예약 작업까지 복원할 필요는 없어.
junyeon|폴더만…… 기억할게.
narrator|준연은 신청 화면보다 우리 표정을 더 오래 봤다.
minhyuk|지금 어지러운 건 아닌가? 점심을 못 먹었다고 들었다.
junyeon|조금. 먼저 이거 끝내고—
minhyuk|몸 상태부터. 신청서는 사라지지 않는다.
narrator|민혁이 준연 곁에 섰다. 현솔은 신청서 임시 저장을 확인했다.
hyunsol|내가 대신 누르진 않을게. 모르는 항목이면 멈춰서 물어봐.
junyeon|내 이름 찾는 건 내가 해 보고 싶어서.
player|그러면 쉬고 와서 하자.
narrator|준연이 고개를 끄덕였다. 처음보다 표정이 덜 닫혀 있었다.
hyunsol|예전엔 내가 다 눌렀을 거야. 빠르니까.
player|이번엔 느린 쪽을 골랐네.
hyunsol|네 표정도 알아차릴 시간은 있어야겠더라.
narrator|현솔이 계산기를 뒤집었다. 숫자가 없는 면이 우리 사이에 놓였다.`,[k("data-record","지우지 않는 줄","세 측정값과 준연 이름을 모두 남기고 재시험 조건을 정한다.",`player|다음 사람도 같은 문제에서 막힐 수 있잖아. 이 값까지 보자.
hyunsol|응. 그리고 작성자는 값이 예쁘든 아니든 준연이지.
junyeon|그 말…… 내 첫 발표에도 써도 돼?`,[...O(),h("hyunsol","trust",5),h("junyeon","special",-5)],["raw-data-kept"]),k("data-private","계산기 뒷면","계산기 뒤에 ‘오늘 네 말이 덜 무서웠다’고 쓰고 현솔에게만 보여 준다.",`hyunsol|그걸 보고서에 쓰면 안 되지.
player|보고서 아니라 답장인데.
hyunsol|……그럼 지우지 마. 나만 볼게.`,[...O(),h("hyunsol","affection",7),h("hyunsol","special",-6)],["hyunsol-note"]),k("data-select","보기 좋은 값","심사에 불리한 측정값을 원자료에서 삭제한다.",`hyunsol|제외 이유를 정한 게 아니라 싫은 값을 지운 거잖아.
junyeon|이제 내가 설명할 자료도 없어졌어.
narrator|지운 줄은 수정 이력에 남았다. 내 선택도 남았다.`,[h("global","ethics",-22),h("hyunsol","trust",-10),h("junyeon","trust",-8)],["data-fraud"])]),X("common-2-b","3장 · 구름 옆에 쓰는 문장","library",24,`narrator|도서관 연결 복도에서 태훈이 조도계를 들었다. 창문 쪽 바닥엔 구름 그림자가 지나갔다.
taehun|관측 구역 조명은 여기서 낮추면 되겠어. 눈이 적응할 시간이 필요하니까.
player|별 안 보이면 전시가 망하는 거 아냐?
taehun|못 본 이유도 보여 줄 수 있어. 안 보이는 별을 봤다고 쓰진 못하고.
narrator|태훈 시집 사이에서 책갈피가 떨어졌다. 앞면엔 기상 시각, 뒷면엔 짧은 문장이 있었다.
player|‘보이지 않는 것보다 기다리는 사람이 오래 남았다.’
taehun|소리 내 읽을 줄은 몰랐네.
player|누굴 기다린 거야?
taehun|아직 고치는 문장이라 주어를 안 넣었어.
narrator|태훈은 책갈피를 가져가면서도 종이를 접지는 않았다.
taehun|오늘 전시 문장으로 보여 준 건 아니야. 그냥 네가 읽었으면 하는 날이었어.
player|그 두 개는 다르겠네.
taehun|응. 같은 날의 관측값과 마음도 다른 칸에 있어.
narrator|서율이 복도에서 지나가다 떨어진 다른 종이를 주워 줬다.
seoyul|제목 없는 초안이네. 나중에 전시 여백 문장 부탁해도 돼?
taehun|완성한 걸 새로 쓰면. 지금 건 아직 아니고.
seoyul|알았어. 이건 네 시집에 넣어 둘게.
narrator|서율이 종이를 돌려줬다. 민혁의 목소리가 교실 방향에서 들렸다.
minhyuk|동선 한 바퀴 돌고 17시 40분에 돌아오겠다!
taewoo|개인 약속도 그렇게 선언해?
minhyuk|시간 지키는 건 상대를 존중하는 일이다. 사적인 경우에도!
player|오늘은 우리가 기다리는 쪽이네.
minhyuk|……기다릴 사람이 있으면 더 빨리 끝내야겠군.
narrator|민혁은 준연에게 무슨 말을 더 하고 교실로 돌아갔다. 문 소리에 마지막 문장은 잘렸다.
player|준연 상태 확인하러 간 건가?
taehun|못 들은 말은 적지 말자. 확인한 사람에게 물어봐야지.
seoyul|민혁 폰 배터리 얼마 안 남았어. 보조 배터리 가져갈게.
narrator|태훈은 시간만 기록했다. ‘17:22, 교실 방향, 둘.’
player|마음 칸엔 뭘 쓸 거야?
taehun|네가 옆에 있으니까…… 나중에 쓸래.
player|바로 쓰면 읽힐까 봐?
taehun|읽히는 것보다 네 대답이 먼저 들릴까 봐.
narrator|문학소녀의 대답은 관측 기록보다 느렸다. 그래서 더 오래 기억났다.`,[k("cloud-record","두 칸의 기록","태훈과 마지막 목격 시각을 적되 못 들은 말은 빈칸으로 둔다.",`player|마지막 말은 모름. 추측 칸에도 결론은 아직 안 쓸게.
taehun|빈칸도 정확한 기록이 될 수 있네.
narrator|기록자 칸에 두 이름이 나란히 남았다.`,O(),["absence-witness"]),k("cloud-bookmark","문장의 첫 독자","책갈피 문장은 공개하지 않고 태훈에게만 내 감상을 한 줄 적어 준다.",`player|주어 몰라도 같이 기다린 느낌이 좋았어.
taehun|……그럼 다음 줄은 네가 읽고 난 다음에 쓰고 싶어.
narrator|태훈은 답장을 관측일지가 아니라 시집에 넣었다.`,[...O(),h("taehun","affection",7),h("taehun","special",7)],["poem-private"]),k("cloud-claim","주어를 대신 정하기","문장을 고백으로 단정하고 다른 친구들에게 태훈이 나를 좋아한다고 알린다.",`taehun|네가 읽었으면 했지만 네가 결론 내렸으면 한 건 아니야.
seoyul|초안은 보여 준 범위 안에 두자고 했잖아.
narrator|태훈이 책갈피를 깊이 넣었다.`,[h("taehun","trust",-10),h("taehun","special",-8),h("global","ethics",-8)],["poem-exposed"])]),X("common-2-c","3장 · 돌아오지 않은 점호","classroom",24,`narrator|17시 40분. 교실 불은 꺼져 있었다. 민혁이 적어 둔 귀환 시각만 칠판에 남았다.
taewoo|전화 꺼졌어. 점호 늦을 사람이 아닌데.
world|채팅도 안 봤어. 준연도 아직 안 돌아왔고.
hyunsol|출입 표부터 확인하자.
narrator|정문 카드 기록에는 민혁이 들어간 흔적만 있었다. 퇴실 행은 비어 있었다.
taewoo|안에 있는 거 아냐? 문도 잠겨 있잖아.
seoyul|닫힌 문 사진하고 사람이 안에 있다는 건 다른 자료야.
player|태훈이랑 17시 22분에 둘이 교실 쪽으로 가는 건 봤어.
taehun|마지막 말은 못 들었어. 그 칸은 비워 뒀고.
hyunsol|보조문 센서 점검 중이야. 그런데 안내문은…… 모든 통행 기록이라고 돼 있네.
world|그럼 기록이 완전한 게 아니라는 거네.
hyunsol|맞아. 내가 예외 적용 뒤 안내문을 안 바꿨어.
juhan|교무실에 연락할게. 안전 확인은 선생님이 맡아야 해.
narrator|교사가 건물 안을 확인하는 동안 우리는 복도에 남았다. 잠긴 문을 억지로 열지 않았다.
world|알림 왔어. 민혁 이름인데.
narrator|‘내가 돌아오기 전에 순서를 지켜.’
taewoo|이 말 보면 안에 있는 거 맞잖아.
juhan|발신 표시 이름은 누구나 설정할 수 있어. 인증된 발신자인지 봐야 하고.
seoyul|폰은 아까 이미 꺼졌어. 보조 배터리 가져갔을 때 준연이랑 같이 나가는 것까진 봤어.
hyunsol|그럼 어느 문으로 나갔는지 확인하자.
narrator|주한이 알림 헤더를 사본으로 보존했다. 이전 영상 사건 때와 같은 공용 PC 작업 흔적이었다.
world|이름이 지워지더니 이번엔 이름만 남았네.
player|사람부터 찾자. 기록의 빈칸은 그다음에 설명해도 돼.
narrator|교무실에서 연락이 왔다. 민혁과 준연의 안전은 확인됐고, 곧 직접 설명하러 오겠다고 했다.
taehun|그럼 실종이라고 부를 이유는 없어.
taewoo|알았어. ……놀랐잖아.
world|태우, 그 말은 민혁한테 해.
narrator|태우가 고개를 끄덕였다. 화면 알림은 아직 지우지 않았다.
player|이번에 밝힐 건 사람이 사라진 이유가 아니라, 기록만 보면 사라진 것처럼 보인 이유야.
hyunsol|내 설정도 자료에 넣을게. 허가받았다는 말로 설명 끝내지 않고.
juhan|공용 PC 예약 알림도 같이. 사람 이름하고 작업 이름을 나눠 볼게.
narrator|귀환 시각 옆에 ‘안전 확인’이 적혔다. 그 옆에는 아직 밝혀야 할 경로가 남았다.`,[k("absence-contact","안전 다음의 질문","교사 확인을 먼저 공유하고 원본 기록과 점검 범위를 함께 대조한다.",`player|둘은 안전해. 이제 확인한 경로만 맞추자.
hyunsol|내 안내문부터 고칠게. 원본과 수정 이력을 남기고.
narrator|닫힌 문은 더 이상 무서운 제목이 아니었다. 설명할 자료가 됐다.`,[...O(),h("global","safety",6)],["absence-safe"]),k("absence-quiet","돌아올 자리","민혁이 돌아오면 업무 보고보다 먼저 물 한 잔과 빈 의자를 준비한다.",`player|왜 늦었는지보다 괜찮은지 먼저 물을게.
taehun|나도 기다림 칸에 그걸 적어 둘래.
narrator|반장 자리의 출석표를 잠깐 옆으로 옮겼다.`,[...O(),h("taehun","affection",4)],["minhyuk-person-first"]),k("absence-rumor","잠긴 교실 소문","확인 전 사진을 ‘반장 실종’이라는 제목으로 다른 반에 보낸다.",`seoyul|안전 확인이 왔잖아. 왜 그 제목을 남겨?
world|민혁 돌아와도 소문은 안 돌아오는데.
narrator|사람은 찾았지만 내가 퍼뜨린 추측은 밖으로 나갔다.`,[h("global","harmony",-10),h("global","ethics",-8),h("world","trust",-6)],["absence-rumor"])])],[X("common-3","4장 · 도둑맞은 문장 / 완장을 벗은 점심","cafeteria",14,`narrator|세 번째 재판 뒤 점심시간. 민혁은 보고서 끝 문장에 다시 밑줄을 긋고 있었다.
minhyuk|보건실 동행과 개인정보를 구분해서 연락해야—
taewoo|밥 먹어. 어제도 들었어.
minhyuk|재발 방지가 끝나지 않았으니까.
player|쉬는 시간 규칙은 반장에게도 적용돼?
narrator|민혁이 젓가락을 집었다. 반박은 나오지 않았다.
junyeon|나 어지럽다고 먼저 말했어야 했어.
hyunsol|그 일 네 잘못 하나로 끝낼 필요 없어. 내 안내문도 틀렸고.
junyeon|그러면 내가 더 미안해져.
hyunsol|미안하라고 하는 말 아니야. 내 몫 가져오는 말이야.
narrator|민혁이 완장을 벗어 가방에 넣었다. 수정된 동선 표는 식판 아래로 밀었다.
minhyuk|지금부터 20분은 회의하지 않겠다.
world|반장이라고 부르면 대답도 안 해?
minhyuk|이름으로 부르면 대답하지.
player|민혁.
minhyuk|……왜?
player|그냥 불러 봤어.
narrator|민혁이 물컵을 입 가까이 들었다. 귀 끝이 조금 붉어졌다.
juhan|나도 오늘은 컴퓨터실 잠깐 비울 거야. AI는 질문만 저장하고.
taehun|네 자리를 대신 지키는 건 아니지?
juhan|응. 대답할지는 돌아와서 내가 고르고.
seoyul|그럼 오늘 전시 여백은 빈 의자 그림으로 할래.
world|빈 의자 하나면 누구 기다리는지 알 것 같은데.
seoyul|내가 말할 때까지 아는 척하지 마.
narrator|세계의 손이 내 일정표로 갔다가 멈췄다.
world|끝나고 잠깐 볼 수 있어? 안 되면 안 된다고 해도 돼.
junyeon|나는 발표 연습. 오늘 안 되면 내일도 돼.
taewoo|나도 물어보려 했는데! 오늘은 손 박자 말고 같이 산책.
player|같은 시간에 세 약속은 못 쓰겠네.
minhyuk|시간부터 확인하면 된다. 좋아하는 사람 순위로 적을 필요는 없어.
narrator|민혁은 ‘좋아하는’이라는 말을 고치지 않았다. 자기 개인 일정표도 접어 놓았다.
taehun|오늘 빈칸이 다 누구를 위한 건지 궁금해졌네.
narrator|업무로 채웠던 시간에 다른 부탁들이 들어오기 시작했다.`,[k("rest-calendar","서로 다른 날짜","가능한 시간을 보여 주고 세 사람과 서로 다른 날의 약속을 만든다.",`world|오늘 아니어도 날짜 정해 주니까 덜 불안하네.
junyeon|그럼 첫 문장까지 연습해 둘게.
taewoo|난 제일 긴 시간…… 농담. 같은 길이면 돼.`,O(),["honest-calendar"]),k("rest-quiet","20분의 이름","민혁이 정한 20분 동안 업무 질문 없이 같은 테이블에서 식사한다.",`player|지금은 오늘 반찬 얘기만 하자.
minhyuk|그런 대화도 연습이 필요하군.
taewoo|반장 조용한 얼굴 처음 봐.
minhyuk|이름으로 부르라니까.`,[...O(),h("global","safety",4)],["rest-kept"]),k("map-overpromise","같은 선약 세 번","모두에게 같은 시각에 꼭 오겠다고 따로 약속한다.",`narrator|같은 시각을 세 번 적었다. 한 사람 앞에서 진심처럼 보이려면 두 사람에게 숨겨야 했다.
world|다른 애한테도 그렇게 말했어?
narrator|바로 대답하지 못했다.`,[h("global","harmony",-10),h("world","trust",-8),h("world","special",10),h("taewoo","jealousy",8)],["secret-promise"])]),X("common-3-b","4장 · 빈 의자에 앉은 모델","art",10,`narrator|미술준비실 캔버스 하나가 뒤집혀 있었다. 서율이 내 의자를 조명 아래로 옮겼다.
seoyul|오늘은 원본 찾는 사람 말고 모델이 필요해.
player|가만히 못 있을 수도 있는데.
seoyul|움직여도 돼. 사람이 원래 움직이는 거니까.
narrator|캔버스에는 전시 중앙의 빈 의자와 여덟 사람의 손이 그려져 있었다.
player|얼굴은 왜 없어?
seoyul|누구 얼굴이 제일 큰지부터 보게 되니까. 손은 각자 만든 걸 보여 줄 수 있고.
player|내 손엔 뭘 들려줄 거야?
seoyul|아직 몰라. 다른 사람 물건만 들고 다녔잖아.
narrator|나는 빈손을 내려다봤다. 서율이 붓을 놓고 손바닥을 펼쳤다.
seoyul|아무것도 안 들어도 참여한 손이야. 뭘 잡고 있어야 남는 건 아니고.
player|그럼 지금처럼 그려 줘.
narrator|서율 시선이 손에서 내 얼굴로 한번 올라왔다.
seoyul|얼굴은 다른 그림에.
player|다른 그림도 있어?
seoyul|보여 주겠다는 말은 아직 안 했어.
narrator|작은 스케치북에 내가 밴드실 문 열던 옆모습이 보였다. 서율이 천천히 닫았다.
world|홍보 그림 가져가도 돼?
seoyul|노크. 그리고 지금 건 미공개.
world|알아. 오늘은 네가 고른 완성본만.
narrator|세계는 문 안으로 한 걸음만 들어왔다. 캔버스부터 보러 가지 않았다.
seoyul|이번 크레딧은 내가 예약할게. 정정본 링크도 붙이고.
world|응. 썸네일은 네가 확인한 다음 바꿀게.
player|이번엔 공개 전에 묻네.
world|처음부터 알았어도 안 지킨 일이었지. 이번엔 지킬 거야.
narrator|세계가 허락된 파일 하나만 가져갔다. 서율은 문 닫히는 소리를 끝까지 들었다.
seoyul|사과 들으면 바로 괜찮아져야 할 것 같아서 싫었어. 오늘은 조금 덜 싫네.
player|그것도 그림에 들어가?
seoyul|네가 내 말을 자꾸 그림으로 돌려놓네. 말로 해도 들어 줘.
narrator|붓이 완전히 내려갔다. 서율 목소리가 건반 소리보다 가까이 들렸다.
seoyul|손 그림은 공개할 수 있어. 스케치북 속 얼굴은 아직 나만 볼래.
player|다음엔?
seoyul|네가 제일 먼저 보면 좋겠어.`,[k("band-permission","보여 준 범위","서율이 허락한 전시 그림만 확인하고 사적인 스케치북은 닫아 둔다.",`player|이것만 홍보에 쓰자. 스케치북은 목록에도 넣지 않을게.
seoyul|보여 준 걸 다 가져가는 사람 아니라서 좋아.
narrator|서율이 전시 그림 옆 빈자리를 내 쪽으로 돌렸다.`,O(),["art-scope-kept"]),k("portrait-wait","다음 첫 관객","다음에 그림을 보여 주고 싶을 때 불러 달라며 서율과 새 약속을 잡는다.",`player|오늘 모델은 여기까지. 다음엔 관객으로 올게.
seoyul|그다음엔…… 둘 다 아닌 걸로 와도 돼?
narrator|스케치북은 닫혔지만 웃음은 가려지지 않았다.`,[...O(),h("seoyul","affection",7),h("seoyul","special",7)],["portrait-first-viewer"]),k("band-share","허락 없는 기록","두 사람 화해의 증거라며 서율의 사적인 그림과 대화를 찍어 공개한다.",`seoyul|난 화해했다고 말한 적 없어. 내 그림으로 네 결론 만들지 마.
world|나를 좋게 보이게 하려고 다른 사람 걸 또 가져온 거야?
narrator|두 사람이 좁히던 거리를 내가 다시 벌렸다.`,[h("global","ethics",-14),h("seoyul","trust",-12),h("world","trust",-10)],["art-private-leak"])]),X("common-3-c","4장 · 전시에 걸린 비공개 한 줄","library",7,`narrator|전시 예고 포스터가 복도에 붙었다. 빈 의자 아래, 태훈의 책갈피 문장이 같은 줄바꿈으로 인쇄돼 있었다.
taehun|이건 내가 전시에 준 문장이 아니야.
seoyul|새 버전에 넣은 건 맞아. 출처가 공유 폴더라 공개 초안인 줄…….
taehun|내가 지금 건 아직 아니라고 말했잖아.
narrator|태훈은 포스터를 찢지 않았다. 대신 시집을 더 꼭 잡았다.
world|누가 공유 폴더에 넣었는지도 봐야 해.
juhan|자동 동기화된 메모 폴더는 있어. 공유 위치에 있다고 공개 동의한 건 아니고.
hyunsol|파일 작성자 칸은 비어 있네.
taehun|이름이 없으면 누구도 쓸 수 있는 문장이 돼?
player|아니. 누가 어떤 범위로 건넸는지 확인하자.
seoyul|내 그림 여백하고 너무 잘 맞았어. 그 생각부터 했어.
taehun|그래서 내 말은 어디에 있었어?
narrator|서율이 포스터에서 눈을 떼지 못했다. 다른 사람에게 하던 질문이 자기 앞에 놓였다.
junyeon|좋아하는 작업이라도 남의 이름 빠지면 다르게 보일 수 있네.
world|이걸 내 잘못이랑 경쟁시킬 필요는 없어. 지금 고칠 일이야.
minhyuk|공개 포스터는 임시로 내렸다. 인용 허용 범위와 파일 경로를 확인해 학급재판을 진행한다.
taehun|문장 자체가 부끄러운 건 아니야.
player|네가 누구에게 들려줄지 정할 시간을 잃은 거지.
taehun|응. 내 마음을 포스터로 먼저 대답하게 만들었으니까.
narrator|주한이 문서 작성 시각과 내보내기 이력을 나란히 놓았다.
juhan|관측 데이터 문장하고 시 초안은 별도 파일이야. 같은 폴더도 같은 허락도 아니야.
seoyul|인용 표시 달면 되는 줄 알았어. 이름을 안 써서 더 문제라고만 생각했고.
taehun|이름 달아도 지금 공개하면 안 됐어.
narrator|서율이 고개를 끄덕였다. 대답을 들은 뒤에야 포스터 사본을 접었다.
player|문장 없이도 빈 의자 그림은 남길 수 있겠지?
seoyul|남길 수 있어. 빈칸을 못 견뎌서 네 문장으로 채웠어.
taehun|빈칸도 네 작품이 될 수 있는데.
narrator|두 사람이 포스터 없는 벽을 같이 봤다. 조명이 종이 자국만 비췄다.
world|오늘은 원본보다 허락을 먼저 찾아야겠네.
player|둘 다. 누가 썼는지와 누가 공개할 수 있는지는 다른 질문이야.
taehun|내 문장…… 네가 기억하고 있어도 돼. 다만 오늘은 우리만.
narrator|마지막 부탁은 포스터가 아니라 내게 왔다.`,[k("poem-consent","같지 않은 허락","데이터 문장과 시 초안을 구분하고 실제 사용 허락을 당사자에게 확인한다.",`player|인용 이름 붙이는 건 공개 동의를 대신 못 해. 두 자료를 따로 보자.
seoyul|내 편집 기록도 가져올게.
taehun|난 어떤 문장을 건넸는지 직접 말할게.`,O(),["poem-scope-kept"]),k("poem-reader","한 사람의 독자","태훈에게 책갈피 문장은 전시 밖에서만 읽겠다고 답한다.",`player|오늘 그 문장은 우리만 기억할게. 네가 정할 때까지.
taehun|……그럼 다음 줄은 아직 쓸 수 있겠어.
narrator|태훈이 시집을 조금 느슨하게 잡았다.`,[...O(),h("taehun","affection",6),h("taehun","trust",5)],["poem-private-kept"]),k("poem-hype","좋은 작품의 핑계","작품 반응이 좋으니 태훈에게 이번만 공개를 참아 달라고 한다.",`taehun|좋은 반응이면 내가 싫다고 한 말은 없어져?
seoyul|아니. 그건 나도 받을 수 없는 핑계야.
narrator|두 사람이 다른 이유로 나를 보았다.`,[h("taehun","trust",-12),h("seoyul","trust",-8),h("global","ethics",-12)])])],[X("common-4","5장 · 빌린 얼굴 / 마지막 리허설","auditorium",2,`narrator|페어 이틀 전. 무대의 세계 노래와 화면의 태우 동작이 반 박자 어긋났다.
taewoo|다시! 이번엔 내가 맞춰서—
hyunsol|반복 전에 원인. 계속 빠르게 추면 부담 가.
seoyul|내보내기 설정에서 시작 프레임이 달라졌어. 내 쪽 확인할게.
world|나는 노래 그대로 둘게. 동시에 바꾸면 더 헷갈리니까.
narrator|태우가 무대 가장자리에서 멈췄다. 신발은 안전선 안에 있었다.
player|이번엔 멈춤 신호부터 봤네.
taewoo|네가 멈춰 준 게 기억나서. 높은 점수는 그만큼 기억 안 나는데.
taehun|둘째 날 강풍 가능성이 있어. 승인 기준 넘으면 옥상 대신 실내 전시로 바꿀 거야.
world|홍보엔 별 본다고 썼는데.
taehun|볼 수 있을 때 어떻게 보는지 설명하기로 했지. 없던 별을 보여 주겠다고 한 건 아니고.
player|시도 실내에서 읽을 수 있겠네.
taehun|그건 날씨 말고 내가 정해서 줄게. 새 문장으로.
narrator|서율이 새 허락서를 확인했다. 비공개 초안은 공연 자료 목록에서 빠져 있었다.
seoyul|내 그림 여백도 그대로 둘래. 누구 문장으로 꼭 채워야 하는 건 아니니까.
world|이제 빈칸 안 무서워?
seoyul|무서운데 내 몫이니까.
minhyuk|동선 범위, 교사 연락처, 중단 기준 확인! 오늘 귀가도 일정이다!
junyeon|내 복구 신청 승인됐어. 보고서에 이름도 돌아왔어.
juhan|복구 범위는 확인했어?
junyeon|기본 체크 몇 개 있었는데…… 보고서 먼저 확인하느라.
juhan|신청서 사본 함께 보자. 예약 작업은 별도여야 해.
narrator|준연은 고개를 끄덕였다. 객석 중앙에 빈 의자를 가져다 놓았다.
junyeon|오늘 네 자리. 이번엔 내가 끝까지 설명할게.
hyunsol|전체 원자료는 읽기 전용 사본으로 확보됐어. 내가 모르는 조건도 적어 놨고.
world|홍보 카메라는 꺼. 오늘은 저 자리만 보고 부를래.
taewoo|센터가 저기네. 관객 한 명.
player|페어 때는 사람 더 올 텐데.
world|오늘 얘기야.
narrator|마지막 연습은 한 자리를 향해 시작됐다. 마지막 음 뒤에는 아무도 바로 폰을 보지 않았다.
taehun|끝나면 정문까지 걸을래? 흐려도 질문은 그대로니까.
player|어떤 질문인데?
taehun|내일도 네가 올 건지. 아직 내일이 아닌 다음 날에도.
narrator|꺼지는 조명 아래서 그 질문은 행사 계획서에 적히지 않았다.`,[k("restore-together","철수선 지키기","각자 자료와 공개 범위를 확인하고 종료 시각에는 함께 정문으로 나간다.",`player|밤새우지 말자. 남은 일은 내일표로.
junyeon|질문 답변은 내가 가져올게.
world|문 앞까지만 같이 가. 오늘은 그걸로도 돼.`,[...O(),h("global","safety",8),h("world","special",-5)],["team-success","backups-scoped"]),k("cloud-walk","날씨 밖의 약속","태훈과 귀가 길에 다음 만남을 정하되 맑은 날만 기다리지는 않는다.",`player|흐리면 도서관. 맑아도 먼저 너 만나러 갈게.
taehun|하늘이 핑계인 날도 있었는데…… 이번엔 그럴 필요 없네.
narrator|태훈이 날씨 앱을 닫고 도서관 약속을 관측일지의 다른 칸에 적었다.`,[...O(),h("taehun","affection",7),h("taehun","special",7)],["cloud-walk"]),k("restore-rush-install","밤샘 강행","귀가 기준을 무시하고 감독 시간 밖에서 무대 장비를 혼자 설치한다.",`minhyuk|허가 시간이 끝났다. 설치 중단!
taewoo|네가 다 해야 내가 춤출 수 있는 거 아니야. 다치면 누구한테 보여 줘?
narrator|무리한 진행은 협력으로 남지 않았다.`,[h("global","safety",-15),h("global","harmony",-8)],["safety-strike"])]),X("common-4-b","5장 · 정정문에는 못 쓰는 마음","garden",1,`narrator|페어 전날. 정원 벤치에는 접은 일정표와 아무 제목 없는 봉투들이 놓였다.
world|행사 얘기만 하면 다음에 보자는 말을 계속 미룰 수 있더라.
player|그래서 오늘은 행사 얘기 안 하려고?
world|응. 누구 기다리는지 좀 알았으면 해서.
narrator|세계는 휴대전화를 뒤집었다. 내 시간표를 달라고 하지 않았다.
junyeon|나는 발표 끝나고 철거할 때 같이 있어 줬으면 해. 노트 말고 할 말 있어.
hyunsol|나는 철거 전에. 보고서 검토는 아니야.
taewoo|다들 설명 안 해? 난 명확해. 마지막 여덟 박자 보고 같이 걸어가.
seoyul|그림 한 장 가져올게. 이번엔 제목도 있어.
taehun|나는 도서관. 날씨 때문에 온 건지 헷갈리기 싫어서.
juhan|나는 프로그램 끈 다음. AI 답변 끝나는 시간 말고 네가 오는 시간 기다리고 싶어.
minhyuk|그 일정은 반장 권한으로 정리하지 않겠다. 각자 물어봐.
narrator|민혁도 작은 종이를 접어 넣었다. 업무 일정표와 색이 달랐다.
player|오늘 전부 답할 수는 없을 것 같아.
world|누굴 골라도 나한테 말한 약속은 없던 걸로 만들지 마.
junyeon|못 온다는 말은 직접 듣고 싶어. 기다리는 게 싫은 건 아닌데 아무것도 모르면 무서워서.
hyunsol|고르는 건 배신이 아니야. 말없이 사라지는 게 신뢰 깎는 거지.
taewoo|나 아직 이기고 싶긴 한데…… 네 마음을 이기는 건 좀 이상하네.
narrator|태우가 웃었다. 준연도 웃고 나서 자기 손을 주머니에서 꺼냈다.
seoyul|고백은 출품작 아니니까 높은 점수부터 고를 필요 없어.
taehun|날짜만 정해 줘. 빈칸이 전부 거절은 아니니까.
player|페어 첫날 끝나면 직접 답할게. 모두에게 같은 고백은 약속 못 해.
world|무서운데 그게 더 네 말 같아.
narrator|세계가 내 옆에 앉기 전에 빈자리를 손으로 가리켰다. 나는 고개를 끄덕였다.
world|나 자꾸 네 일정에 줄 긋고 싶어. 다른 사람한테 갈까 봐.
player|그 마음까지 숨길 필요는 없어. 내 시간 대신 정하진 말고.
world|알아. 이번엔 묻고 싶었어. 오늘 끝날 때까지는 여기 있어?
narrator|다른 친구들 발소리가 멀어졌다. 태훈은 돌아보지 않고 책갈피를 주머니에 넣었다.
player|잠깐은. 귀가 시간 전까지.
world|그 정도면 돼. ……지키면.
narrator|둘만 남은 시간이 촬영되지는 않았다. 그래서 세계의 떨리는 숨도 그대로 들렸다.
world|행사 없어도, 내가 노래 안 해도 다시 만나 줬으면 좋겠어.
narrator|사건 정정문 어디에도 적을 수 없는 부탁이었다.`,[k("promises-honest","직접 하는 답","페어 첫날이 끝나면 각자 직접 답하겠다고 말하고 실제 가능한 시간을 나눈다.",`player|급하게 고백을 대신 결정하진 않을게. 그날은 내가 먼저 찾아갈게.
world|피하지 마. 나도 묻기만 하고 기다려 볼게.
junyeon|날짜 알면 연습할 시간이 생기네.`,O(),["answer-after-fair"]),k("promises-letter","아직 쓰지 못한 말","한 사람에게 보낼 답장을 쓰기 시작하되 다른 친구에게 독점 약속은 하지 않는다.",`player|전부 괜찮다고 하면 쉬운데 진짜 대답은 아니겠지.
hyunsol|모르는 마음을 확정으로 말하지 않는 편이 나아.
seoyul|그 편지에 내 그림 얘기 있으면…… 지우지 말아 줘.`,[...O(),h("hyunsol","affection",4),h("seoyul","affection",4)],["honest-answer-draft"]),k("promises-secret","같은 고백 세 번","세 사람에게 “너만 기다릴게”라고 같은 시간을 비밀 약속한다.",`narrator|봉투 세 개에 같은 시각을 적었다. 하나를 숨기려면 또 하나가 필요해졌다.
world|내가 불안한 걸 네가 이렇게 달래는 건 싫어.
narrator|세계는 편지를 받지 않았다.`,[h("global","harmony",-12),h("world","special",12),h("world","jealousy",10),h("taewoo","jealousy",10)],["secret-promise"])]),X("common-4-c","5장 · 나를 닮은 타인의 문장","computer",1,`narrator|페어 전날 오후, 컴퓨터실. 주한은 얼터에고 얼굴보다 화면 아래 파일 경로를 먼저 가리켰다.
juhan|이 얼굴 띄웠다고 내가 말한 건 아니야. 오늘 설명은 여기부터 하고 싶어.
player|같은 얼굴인 다른 프로그램도 있을 수 있다는 거지?
juhan|응. 옛 시연도 내 얼굴 복사본 썼어. 교육용 가짜 알림을 예약하는 프로그램이고, 실제 전송은 꺼 두라고 적혀 있어.
alter|현재 나는 허락받은 파일 차이를 비교한다. 공용 메신저 발송 권한은 없다.
taewoo|내 점수도 못 올려 주는 거네.
alter|점수가 의미하는 범위를 설명할 자료는 찾을 수 있어.
taewoo|주한 말투랑 똑같이 안 넘어가네.
narrator|주한이 웃으면서 화면을 껐다. 이제 프로그램이 아니라 주한 얼굴이 나를 봤다.
juhan|나한테 질문해도 돼.
player|요즘 가장 기다리는 시간은?
juhan|저장 끝나는 시간. 예전엔 그랬는데…… 지금은 네가 문 여는 시간.
player|답을 준비해 둔 거야?
juhan|적어 뒀어도 말할 때는 다르게 나와. 네가 보고 있어서.
narrator|주한은 자기 손을 한번 내려다봤다. 모니터 불빛 없이도 표정이 잘 보였다.
world|공개 확인서 가져왔어. 오늘 썸네일 바꾸는 건 아니야.
minhyuk|예약 작업 목록도 교사와 최종 대조한다! 공개 전에—
junyeon|내 노트 이름 돌아왔어. 이번엔 내가 발표할 수 있어.
hyunsol|그 복구 요청 범위, 아직 같이 못 봤지?
junyeon|보고서랑…… 기본 체크 항목. 이름 보고 반가워서 나머진…….
juhan|신청서 사본부터 보자. 예약 항목 있으면 담당 선생님께 확인해야 해.
narrator|17시 36분. 공용 PC 화면에 주한 얼굴이 뜨고 휴대전화에 알림이 도착했다. 주한이 방금 끈 로컬 프로그램은 여전히 꺼져 있었다.
world|나만 받은 줄 알았는데…… ‘순서를 바꾸면 숨겨 둔 걸 공개한다.’
taewoo|내 폰에도 있어. 왜 주한 얼굴이 떠?
juhan|내 프로그램은 아직 꺼져 있어. 지금 켜서 기록을 비교할게.
player|얼굴을 봤다고 같은 실행을 본 건 아니야.
narrator|17시 40분에 주한이 로컬 얼터에고를 켰다. 보존한 화면 녹음 속 발신기와는 다른 경로였다.
alter|나는 그 녹음의 발신자가 아니다. 출처 파일을 비교할 수 있도록 허락을 확인해 줘.
minhyuk|추가 발송은 담당 교사가 중지했다. 내일 개장 전 사실을 확인한다. 학생끼리 시스템 권한을 더 만지지 않는다!
junyeon|내 요청서도 볼래? 숨기면 내 이름만 더 무서울 것 같아.
narrator|준연이 구겨진 신청서를 폈다. 주한은 얼굴을 가리지 않았다.
juhan|이번 설명은 AI 말고 내가 끝까지 할게. 네가 기다려 줄 수 있어?
player|응. 원본부터.
narrator|여덟 이름이 전시 벽에 걸리기 직전, 누군가 빌린 얼굴 하나가 우리 이야기를 대신 끝내려 했다.`,[k("echo-origin","두 실행 시각","발송기와 로컬 AI의 파일·실행 시각을 분리해 원본 확인을 요청한다.",`player|17시 36분과 17시 40분. 같은 얼굴만 보고 같은 사건 칸에 넣지 말자.
juhan|설명할 수 있어. 느려도 끝까지 들어 줘.
narrator|주한이 직접 자료 목록을 열었다.`,O(),["echo-origin-kept"]),k("echo-support","내 목소리","주한 앞을 가리지 않고 곁에서 첫 문장을 직접 말할 시간을 준다.",`juhan|내가 만든 건…… 사람을 대신 의심하는 도구가 아니야.
narrator|주한은 나를 한번 보고 다음 문장을 골랐다. 나는 대답을 대신하지 않았다.
juhan|누가 만든 문장인지 먼저 확인해 줘.`,[...O(),h("global","safety",4)],["juhan-voice-kept"]),k("echo-delete","성급한 삭제","같은 얼굴이 떴다는 이유만으로 얼터에고를 삭제하고 주한에게 사과를 요구한다.",`juhan|없애면 비교할 자료도 없어져. 내가 했는지 확인도 안 하고?
junyeon|잠깐. 내 신청서도 봐 줘. 여기엔 내 이름도 있어.
narrator|화면을 지워도 이미 도착한 협박은 사라지지 않았다.`,[h("global","ethics",-16),h("global","harmony",-10),h("junyeon","trust",-8)],["echo-prejudged"])])]];fa.map(e=>({...e[0],acts:e}));const xa={나:"player",세:"world",준:"junyeon",현:"hyunsol",율:"seoyul",태:"taewoo",훈:"taehun",선:"teacher",반:"student",지:"narrator"},W=e=>e.trim().split(`
`).map(n=>{const a=n.indexOf("|");return{speaker:xa[n.slice(0,a)]??"narrator",text:n.slice(a+1).trim()}}),ce=(e,n,a)=>({target:e,stat:n,amount:a}),v=(e,n,a,o,r)=>({id:a==="good"?"a":a==="neutral"?"b":"c",text:o,response:W(r),effects:a==="good"?[ce(e,"affection",8),ce(e,"trust",10),ce(e,"special",-8),ce(e,"jealousy",-4)]:a==="neutral"?[ce(e,"affection",6),ce(e,"trust",4)]:[ce(e,"affection",3),ce(e,"trust",-10),ce(e,"special",12),ce(e,"jealousy",8)],flags:a==="good"?[`${e}-key-${n}`]:[]});W(`지|페어의 마지막 관람객이 떠난 뒤, 미디어실에는 모니터 한 대만 켜져 있었다.
세|늦었네. 두 분.
나|아래층에서 안내판 떼는 걸 도왔어.
세|알아. 창문에서 봤어.
나|그럼 왜 늦었다고 해?
세|기다렸다는 말을 조금 덜 솔직하게 한 거야.
지|세계는 옆 의자를 발끝으로 당겼다. 화면에는 오늘 공연 사진이 열려 있었다.
세|어떤 사진이 제일 좋아?
나|네가 마이크 내려놓고 웃는 거.
세|노래하는 사진도 많은데.
나|누가 찍는 줄 모르고 웃고 있어서.
세|그런 사진이 더 좋다는 거야?
나|오늘 즐거웠구나 싶어서 좋아.
지|세계는 대답 대신 브라우저 탭을 닫았다. 아래에 다른 사진 창이 나타났다.
나|저건 나잖아.
세|아. 그건…….
지|복도, 식당, 도서관. 같은 교복을 입은 내가 여러 장의 작은 화면 안에 있었다.
나|공연 기록용 사진은 아닌 것 같은데.
세|내 비공개 계정이야. 아무도 못 봐.
나|찍힌 줄 몰랐던 사진도 있어.
세|공개한 건 없어. 진짜야.
나|공개했는지만 물은 건 아니야.
지|세계의 손이 터치패드 위에서 멈췄다.
세|오늘 네가 여기로 안 올 줄 알았어.
나|그래서 사진을 보고 있었어?
세|사진 속에서는 네가 안 떠나니까.
나|세계야.
세|지금 표정으로 말하지 마. 내가 이상한 애 같잖아.
나|내가 먼저 이해하고 싶은 건 왜 이렇게 불안했는지야.
세|네가 모두한테 친절하니까. 나한테 오는 이유도 친절일까 봐.
나|네가 불러서 왔고, 나도 너랑 얘기하고 싶었어.
세|그걸 믿어도 되는지 확인할 방법이 없잖아.
나|내 동선을 모으는 게 확인이 될까?
지|세계가 화면 밝기를 낮췄다. 사진은 어두워졌지만 사라지지 않았다.
세|지우라고 하면 지울게. 그래도 내가 싫어지지는 않을까?
나|싫어졌다고 말하러 온 건 아니야.
세|그럼 어떻게 해야 너를 좋아하는 게 너한테 부담이 안 돼?
지|세계가 내 쪽으로 모니터를 돌렸다. 이번에는 닫지 않고 대답을 기다렸다.`),v("world",1,"good","사진은 함께 정리하고, 앞으로 찍기 전에 물어봐 달라고 말한다.",`나|내가 괜찮다고 한 사진만 남기자. 다음에는 찍기 전에 물어봐 줘.
세|그러면 네가 직접 내 사진에 들어와 줄 수도 있어?
나|응. 내가 선택해서 네 옆에 서는 건 좋아.
세|……그건 몰래 찍는 것보다 조금 무섭고, 훨씬 좋다.`),v("world",1,"neutral","오늘은 공개 여부부터 확인하고 나머지는 내일 이야기한다.",`나|일단 밖으로 나간 사진이 없는지 같이 확인하자. 나머지는 내일 차분히 얘기해.
세|내일도 나랑 이야기하겠다는 약속은 한 거지?
나|응. 오늘 한 말까지 제대로 생각하고 올게.
지|세계는 고개를 끄덕였다. 화면 한쪽의 사진 폴더는 아직 닫히지 않았다.`),v("world",1,"bad","나를 좋아하면 이 정도는 귀엽다며 전부 괜찮다고 한다.",`나|나를 좋아해서 그런 거면 괜찮아. 귀엽네.
세|정말? 그럼 숨길 필요도 없겠다.
지|세계는 사진 폴더 이름을 ‘우연’에서 ‘우리’로 바꿨다.
세|다음에는 시간표도 알려 줘. 그러면 더 잘 맞춰서 볼 수 있잖아.`),W(`지|다음 날 밴드실에서는 앰프가 켜질 때 나는 낮은 소리만 들렸다.
세|문 닫아 줘. 아직 아무한테도 안 들려준 곡이야.
나|녹음해도 돼?
세|오늘은 그냥 들어 줬으면 좋겠어.
나|알겠어. 휴대전화 넣었어.
지|세계는 피크를 쥐었다 놓았다. 무대에서 보던 손보다 조심스러웠다.
세|처음엔 편입생이 등장하는 노래였어.
나|그럼 나에 관한 노래야?
세|가사가 바뀌었어. 지금은 누가 기다리는 노래야.
나|기다리는 사람은 등장해?
세|아직. 후렴을 못 정했거든.
지|세 개의 코드가 흘렀다. 나는 지난 리허설에서 들었던 피아노 선율을 알아챘다.
나|이 부분은 서율이가 치던 거랑 닮았다.
세|비슷한 진행은 많아.
나|아. 내가 음악을 잘 몰라서.
지|문이 두 번 두드려졌다. 서율이 악보철을 들고 들어왔다.
율|내 편곡 파일 가져왔어. 왼손 베이스는 이쪽이 덜 겹쳐.
세|지금 연습 중이야.
율|보이네. {name}, 너도 들었어?
나|응. 처음 듣는 곡이라고 해서.
율|처음 들려주는 건 맞지. 우리도 어제 겨우 붙였으니까.
지|세계는 피크 끝으로 기타 줄을 건드렸다. 짧고 날카로운 소리가 났다.
세|서율아. 악보는 두고 가 줘.
율|나중에 말하자. 공동 작업 표기는 넣어 줘.
지|문이 닫히자 세계가 곧바로 말을 이었다.
세|가사는 내가 썼어. 곡의 시작도 나였고.
나|서율이 도움을 받았다는 건 말하지 않았네.
세|너한테는 내가 해 준 게 하나쯤 있었으면 했어.
나|같이 만든 노래여도 네가 불러 주는 건 너잖아.
세|너는 꼭 그런 말을 쉽게 한다.
나|쉬워 보여도 지금 꽤 생각하면서 말하고 있어.
세|그럼 내가 질투했다고 하면 실망해?
나|질투가 났다는 것과 다른 사람 이름을 빼는 건 다른 얘기 같아.
지|세계가 악보의 빈 표제란을 내려다봤다.
세|너한테 주는 노래인데 다른 사람 이름을 써야 한다는 게 싫었어.
나|내가 좋아할 노래라면 만든 사람도 알고 싶어.
세|오늘 첫 관객은 너야. 적어도 그건 내 마음대로 해도 되지?
지|세계가 펜을 내밀었다. 제목 아래 두 줄이 비어 있었다.`),v("world",2,"good","서율의 작업을 표기하고 세계의 가사를 제대로 듣겠다고 한다.",`나|작곡과 편곡은 사실대로 적자. 그리고 네 가사가 어떤 마음인지 끝까지 들을게.
세|서율이 이름이 있어도 네가 내 노래라고 불러 줄 거야?
나|네가 부른 노래라고 할 거야. 같이 만든 것도 자랑할 수 있고.
지|세계는 두 사람의 이름을 적고, 처음부터 기타를 다시 들었다.`),v("world",2,"neutral","오늘은 연습만 듣고 공개 전에 표기를 정하자고 한다.",`나|지금은 후렴부터 완성하자. 공개하기 전에는 서율이랑 표기를 정하고.
세|오늘만큼은 노래에 집중해 줘서 고마워.
나|대신 미루다가 잊지는 말자.
지|세계는 악보 한쪽에 ‘공동 작업 확인’이라고 작게 써 두었다.`),v("world",2,"bad","내게 들려주는 곡이라면 세계 이름만 있어도 된다고 한다.",`나|내게 들려주는 곡이면 네 이름만 적혀 있어도 괜찮아.
세|그렇지? 네가 그렇게 말해 줄 줄 알았어.
지|세계는 서율이 붙여 둔 편곡 메모를 악보 뒤로 넘겼다.
세|그럼 오늘 얘기는 우리만 알고 있자. 서율이는 괜히 서운해할 테니까.`),W(`지|점심을 먹고 정원으로 나오자 세계가 벤치에서 손을 흔들었다.
세|또 만났네.
나|오늘 벌써 세 번째야.
세|같은 반이니까 만날 수도 있지.
나|아까 도서관에서도 같은 말을 했어.
세|과학고의 표본 수가 작아서 우연이 많나 봐.
지|세계 옆에는 아직 뜯지 않은 작은 주스가 놓여 있었다.
세|네가 어제 이 맛 마시길래.
나|고마워. 그런데 나 지금 혼자 걷고 싶었어.
세|내가 조용히 걸으면 안 돼?
나|혼자 있는 거랑 조용히 같이 있는 건 조금 달라.
지|세계가 주스 빨대를 포장 안으로 다시 밀었다.
세|무슨 일이 있어? 내가 뭐 잘못했어?
나|그런 건 없어. 사람을 계속 만나서 잠깐 생각을 정리하려고.
세|그 생각에 나는 없어?
나|있어. 그래서 더 내 생각을 알고 싶고.
세|그러면 언제까지 혼자 있을 건데?
나|다음 수업 전에는 교실에 가겠지.
지|세계의 휴대전화 화면이 켜졌다. 공동 일정표가 열려 있었다.
나|내가 어디 있는지 일정표로 확인한 거야?
세|우리가 같이 쓰는 일정표잖아.
나|장비 반납하러 간 시간까지 보고 따라왔어?
세|따라왔다는 말은 좀…….
지|세계는 변명하다가 멈췄다. 주스 표면의 물방울이 손가락에 묻었다.
세|응. 네가 비어 있는 시간을 찾았어.
나|내 시간이 비어 있다고 항상 누군가를 만날 수 있는 건 아니야.
세|나는 네 시간이 비면 제일 먼저 떠오르고 싶어.
나|그건 내가 떠올리는 거지 네가 미리 채우는 건 아니잖아.
세|너랑 있으면 좋아. 안 보면 나만 좋아하나 싶어져.
나|나도 너랑 있었던 걸 나중에 혼자 떠올려.
세|나 없는 데서도?
나|응. 오늘 아침 네가 피크 잃어버렸다고 머리카락까지 찾은 거.
세|그건 왜 기억해. 멋있는 장면도 많은데.
지|세계가 처음으로 짧게 웃었다. 내가 일어나자 웃음이 다시 흐려졌다.
세|내가 여기서 기다리면 돌아올 거야?
나|기다리는 걸 조건으로 걸지 않았으면 좋겠어.
세|그럼 나한테 뭘 약속할 수 있어?
지|정원 끝에서 수업 준비 종이 울렸다. 우리는 아직 주스를 뜯지 않았다.`),v("world",3,"good","혼자 있을 시간을 지키고, 오늘 약속한 연습에는 가겠다고 한다.",`나|지금은 혼자 걸을게. 대신 약속한 네 시 연습에는 내가 가고 싶어서 갈 거야.
세|매번 확인 안 해도 약속은 기억해 준다는 거지?
나|응. 바뀌면 내가 먼저 말할게. 네 일정도 그렇게 존중하고 싶어.
세|알겠어. 주스는 가져가. 그건 조건 없이 주는 거야.`),v("world",3,"neutral","벤치에서 잠깐 이야기한 뒤 각자 교실로 간다.",`나|십 분 정도는 여기 같이 앉을 수 있어. 그다음에는 각자 생각할 시간을 갖자.
세|십 분이면 네가 오늘 뭐 했는지 다 들을 수 있으려나.
나|다 보고할 필요는 없지. 웃긴 일 하나만 얘기해 줄게.
지|세계는 주스 하나를 내 쪽으로 밀었다. 돌아갈 때는 먼저 손을 흔들었다.`),v("world",3,"bad","앞으로 시간표에 개인 일정까지 전부 적어 주겠다고 한다.",`나|헷갈리지 않게 앞으로 어디 가는지 전부 적어 둘게.
세|정말 그렇게 해 줄 수 있어? 그러면 안 불안할 것 같아.
지|세계는 즉시 새 일정표를 만들고 나에게 편집 권한을 보냈다.
세|혼자 있고 싶은 시간도 적어 줘. 그 옆 시간은 내가 잡아도 되지?`),W(`지|빈 교실 책상 위에 두었던 휴대전화가 내가 놓은 방향과 반대로 놓여 있었다.
나|세계야. 내 휴대전화 봤어?
세|화면이 켜져서. 알림만.
나|서율이가 악보 가져왔다고 했는데 메시지가 없어.
지|세계의 눈이 내 손으로 내려갔다가 창밖으로 돌아갔다.
세|내가 알림 지웠어.
나|알림을 지운 거야, 대화를 지운 거야?
세|한 개만.
나|잠금은 어떻게 풀었어?
세|아까 네가 입력할 때 봤어. 기억하려던 건 아니었어.
지|의자 다리가 바닥에 끌리는 소리가 유난히 크게 들렸다.
나|기억한 다음 직접 입력한 건 네 선택이잖아.
세|서율이가 혼자 오라고 한 줄 알았어.
나|읽어 봤으면 아니었다는 것도 알았을 텐데.
세|응. 그런데 이미 기분이 안 좋았어.
나|그래서 지웠어?
세|네가 지금 바로 걔한테 갈까 봐.
지|세계가 손끝으로 책상 모서리를 문질렀다. 이번에는 웃지 않았다.
세|오늘 나랑 얘기하고 있었잖아.
나|그렇다고 내 연락을 네가 정할 수는 없어.
세|알아. 말로 들으니까 더 나쁜 짓 같네.
나|어떻게 들리는지보다 무슨 일이 있었는지가 중요해.
세|지금 나가면 난 어떻게 해?
나|네가 무서운 건 듣겠어. 하지만 나가는 걸 막는 이유가 되지는 않아.
지|복도에서 웃음소리가 지나갔다. 세계가 문 쪽을 한 번 봤다.
세|다른 애들한테 말할 거야?
나|서율이한테 답은 해야지. 답이 늦은 이유도 필요한 만큼 말할 거고.
세|나를 싫어하겠네.
나|네가 한 행동에 화날 수는 있어.
세|그럼 되돌릴 방법이 없어?
나|삭제한 걸 없던 일로 할 수는 없지만 다음 행동은 선택할 수 있어.
지|세계는 자기 휴대전화를 내 앞에 내려놓았다.
세|그럼 너도 내 걸 봐. 공평하게.
나|나는 네 휴대전화를 보고 싶은 게 아니야.
세|너는 왜 내가 내놓는 걸 안 받아?
나|네 사생활을 포기시키려고 화내는 게 아니니까.
세|그럼 이번에는 뭘 해야 하는지, 내가 직접 생각해야겠네.
지|세계가 내 휴대전화에서 손을 뗐다. 선택은 아직 끝나지 않았다.`),v("world",4,"good","비밀번호를 바꾸고, 메시지 삭제를 인정하며 직접 사과하도록 한다.",`나|비밀번호는 바꿀게. 네 휴대전화도 네가 가지고 있어. 서율이에게는 네가 한 일을 직접 말하자.
세|옆에 있어 줄래? 대신 말해 달라는 건 아니야.
나|응. 사과를 받아 줄지는 서율이가 결정하는 거야.
지|세계는 한참 문장을 고른 뒤, 변명 없이 자신의 행동을 적었다.`),v("world",4,"neutral","오늘은 떨어져 생각하고 내일 경계에 관해 다시 이야기한다.",`나|지금은 화가 나서 말을 잘 못 하겠어. 오늘은 각자 생각하고 내일 얘기하자.
세|내일 안 오는 건 아니지?
나|대화하겠다는 약속은 지킬게. 그때까지 내 연락에 손대지 말아 줘.
지|세계가 고개를 끄덕였다. 나는 서율에게 직접 상황을 설명했다.`),v("world",4,"bad","서로 휴대전화를 검사하면 공평하다며 비밀번호를 교환한다.",`나|그럼 서로 비밀번호를 알자. 숨기는 게 없으면 되잖아.
세|그래. 그렇게 하면 싸울 일도 없겠다.
지|세계는 내 잠금 화면에 자기 생일을 입력하고 작게 웃었다.
세|이제 나도 네 안에 들어온 것 같아. 다른 애들이 못 들어오는 데까지.`),W(`지|페어 우수 공연 재연을 앞둔 대강당 뒤편. 세계는 기타 케이스 옆에 앉아 있었다.
나|세계야. 무대 올라갈 준비는 했어?
세|응. 손만 조금 차가워서.
지|말과 달리 피크가 손가락 사이에서 두 번 미끄러졌다.
나|잠깐 앉아 있을까?
세|나 지금 앉아 있잖아. 웃기다, 너.
나|그럼 나도 앉을게.
지|나는 케이스 반대편에 앉았다. 세계는 짧게 들이쉬고 길게 말을 이어갔다.
세|아까 댓글을 봤어. 지난 공연 고음 흔들렸다고.
나|계속 그게 생각나?
세|머리로는 한 사람 말인 거 알아. 그런데 무대 전체가 그 사람 얼굴 같아.
나|지금 몸은 어때?
세|답답해. 숨을 크게 쉬려고 하면 더 안 되는 것 같고.
나|진행 선생님께 잠깐 쉬어야 한다고 말할게.
세|그러면 무대 순서 바뀌잖아.
나|몸 상태부터 확인하는 게 먼저야.
지|서율이 물병을 들고 다가왔다.
율|안쪽 휴게실 비어 있어. 선생님도 불러올게.
세|나 때문에 밴드 망치면 어떡해.
율|네가 쉬는 건 망치는 게 아니야. 우리 조정할 수 있어.
지|세계는 물을 조금 마시고 한동안 아무 말도 하지 않았다.
세|{name}, 오늘 관객석에서 나만 봐 줄 수 있어?
나|네 무대는 집중해서 볼 거야.
세|무대 말고 오늘 내내. 다른 애들 보지 말고.
나|그 약속을 하면 잠깐 덜 불안할 것 같아?
세|응. 한 사람이라도 완전히 내 편이면.
나|네 편인 것과 다른 사람을 안 보는 건 같은 뜻은 아닌 것 같아.
지|세계는 입술을 다물었다. 옆방에서 선생님이 조용히 이름을 불렀다.
선|세계야, 지금 바로 올라갈 필요 없다. 불편하면 보건 선생님과 확인하자.
세|노래 안 하면 {name}이 실망할 것 같아요.
나|나는 지금 네가 무리해서 증명하지 않았으면 좋겠어.
세|잘하는 모습 아니면 네가 기억할 게 없잖아.
나|오늘 네가 무섭다고 직접 말한 것도 기억할 거야.
지|세계가 기타 케이스 잠금장치를 닫았다. 대기표에는 여전히 밴드 이름이 있었다.
세|공연을 줄여도 괜찮을까. 한 곡만, 상태 괜찮으면.
선|먼저 쉬고 확인하자. 무대 조정은 선생님이 맡을게.
세|나를 기다리는 사람들이 있다는 게 좋았는데 오늘은 무서워.
지|세계는 내 손 가까이에 자기 손을 놓고, 잡아도 되는지 눈으로 물었다.`),v("world",5,"good","손을 잡아도 되는지 묻고 쉬는 동안 곁에 있겠다고 한다.",`나|손 잡아도 돼? 지금은 함께 쉬자. 공연 여부는 몸 상태를 보고 정해.
세|응. 나만 보겠다는 약속 말고, 지금 여기 있다는 말이면 될 것 같아.
나|여기 있어. 선생님이 오시면 상태도 솔직히 말씀드리자.
지|세계의 손에 조금씩 온기가 돌아왔다. 무대 순서는 다른 공연 뒤로 옮겨졌다.`),v("world",5,"neutral","가까운 객석에서 기다리며 필요한 물건을 챙겨 준다.",`나|선생님이랑 쉬고 있어. 나는 바로 앞 객석에 있을게. 필요하면 불러.
세|도망가는 건 아니지?
나|응. 너도 언제든 공연을 줄이거나 쉬어도 돼.
지|세계는 내가 앉은 자리를 확인하고 휴게실 안으로 들어갔다.`),v("world",5,"bad","오늘은 다른 사람을 전혀 보지 않겠다고 약속한다.",`나|오늘은 너만 볼게. 다른 사람하고 말도 안 할게.
세|그럼 할 수 있을 것 같아. 네가 지켜 주면.
지|세계는 쉬어야 한다는 말을 미루고 기타를 다시 꺼냈다.
세|객석에서 자리 바꾸지 마. 내가 계속 확인할 수 있게.`),W(`지|앵콜 공연이 끝난 다음 날, 대강당에는 떼지 않은 검은 테이프 자국만 남았다.
세|오늘은 관객 한 명이네.
나|입장권은 어디서 받아?
세|이미 받았어. 내 메시지에 답했잖아.
나|오늘은 답장 시간을 세지 않았어?
세|시계는 봤어. 숫자를 적지는 않았고.
나|솔직하네.
세|안 불안한 척하다가 또 이상한 짓 하는 것보다는 말하려고.
지|세계는 무대 끝에 두 장의 종이를 내려놓았다.
세|한 장은 서율이랑 고친 악보. 한 장은 너한테 할 말.
나|고백에도 대본이 있어?
세|누가 고백이라고 했어?
나|나 혼자 너무 기대했나?
세|……그 말, 지금은 반칙이야.
지|세계가 종이를 접었다. 읽으려던 문장이 접힌 면 안으로 사라졌다.
세|너를 좋아하면 네 시간을 많이 가져도 되는 줄 알았어.
나|좋아하는 사람이랑 오래 있고 싶은 마음은 나도 알아.
세|나는 거기서 끝나지 않았지.
나|응. 내가 고를 자리가 없어지면 같이 있는 게 힘들어져.
세|네가 고르게 두면 다른 데 갈 수도 있잖아.
나|맞아. 그럴 수 있어.
지|세계는 그 대답을 예상했어도 아픈 듯 눈을 내리깔았다.
나|그래도 지금은 여기 오기로 골랐어.
세|내가 부르지 않는 날에도 와 줄 때가 있을까?
나|있겠지. 네 노래가 생각나거나 같이 점심 먹고 싶으면.
세|매일 증명해 달라고 하고 싶은 날도 있을 거야.
나|그때는 네 마음을 말해 줘. 내 연락을 대신 정하지 말고.
세|오늘은 네가 다른 사람 만난 얘기를 먼저 해도 들을게.
나|지금은 네 얘기를 듣고 싶은데.
지|세계가 웃으며 접힌 종이를 주머니에 넣었다.
세|좋아해. 너를 내 편으로 만들려고 하는 말 말고, 내가 네가 좋아.
나|네가 나를 좋아하는 게 가끔 무서웠어. 그런데 솔직히 얘기하는 네가 계속 생각났어.
세|아직 늦지는 않았다는 말로 들어도 돼?
나|오늘 우리가 어떻게 시작할지 정할 수 있다는 말이야.
지|무대 뒤 환기팬이 멈췄다. 관객석에 우리 목소리만 남았다.
세|사진 한 장 찍고 싶어. 너랑 같이.
나|어디에 올릴 건데?
세|우선은 우리 휴대전화에만. 그다음은 같이 정하자.`),v("world",6,"good","서로 선택할 시간을 존중하는 연애를 시작하자고 한다.",`나|좋아해. 서로의 시간을 빼앗는 대신 같이 있고 싶은 시간을 만들자.
세|나 불안해질 때마다 지금 말을 다시 생각해 볼게. 혼자 어려우면 도움도 구하고.
나|우리 둘이 모든 걸 해결해야 하는 건 아니니까.
지|세계가 촬영 버튼을 누르기 전에 내게 물었다. 나는 웃으며 카메라를 함께 바라봤다.`),v("world",6,"neutral","마음은 전하되 천천히 서로를 알아가자고 한다.",`나|나도 네가 좋아. 서둘러 정답을 만들지 말고 조금씩 알아가고 싶어.
세|그럼 오늘은 첫 데이트의 예행연습이네.
나|학교 정리 끝내고 매점부터 갈까?
지|세계는 남은 케이블 한쪽을 들었다. 우리는 같은 속도로 감기 시작했다.`),v("world",6,"bad","세계가 불안하지 않도록 다른 여자들과 거리를 두겠다고 한다.",`나|네가 안 불안하도록 다른 여자들과는 거리를 둘게. 너만 있으면 돼.
세|정말 그 말을 듣고 싶었어.
지|세계가 단체 대화방 알림을 끄자고 내 휴대전화를 가리켰다.
세|이제 네 방과 후는 전부 나한테 주는 거지? 약속한 거야.`);W(`지|페어가 끝난 식당은 평소보다 한산했다. 준연은 반납대에서 먼 끝자리에 앉아 있었다.
나|이 자리 비었어?
준|응. 근데 저쪽에 세계랑 태우 있어.
나|봤어. 여기에 앉아도 되냐고 물었어.
준|……돼.
지|준연은 옆 의자에 놓았던 가방을 무릎으로 옮겼다.
나|가방 바닥에 놓아도 되는데.
준|지퍼가 고장 나서. 내려놓으면 노트가 흘러나와.
나|페어 때 계속 들고 다니더니.
준|데이터 원본 잃어버리면 안 되니까.
지|준연은 밥을 한 숟갈 뜨고 다시 내려놓았다.
나|오늘 발표할 때 잘 안 들렸던 질문 있었어?
준|반응 시간이 왜 세 번 다 다르냐고 한 거.
나|대답했잖아. 평균만 보여 주면 편차가 숨겨진다고.
준|그건 현솔이가 말하라고 했어.
나|그래도 표준편차 계산은 네가 했고.
준|그것까지 기억해?
나|네가 보고서에 회색으로 따로 적어 놨잖아.
지|준연이 손등으로 안경 다리를 밀었다. 입꼬리가 아주 조금 움직였다.
반|어, {name}. 오늘은 준연이 챙기는 날이냐?
지|지나가던 학생이 별 뜻 없다는 듯 웃었다.
준|아니야. 그냥 자리가…….
나|같이 밥 먹는 중이야.
반|그래, 많이 먹어.
지|학생이 떠난 뒤 준연은 숟가락을 들지 않았다.
나|아까 그 말, 자주 들어?
준|걔는 원래 아무 생각 없이 말해.
나|아무 생각 없이 해도 듣는 사람은 생각하게 되는데.
준|괜히 일 크게 만들지 마. 네가 옆에 앉아서 더 그래.
나|내가 앉는 게 싫은 거야?
준|그건 아닌데. 네가 나 때문에 불편해지는 게 싫어.
지|준연의 가방에서 노트 모서리가 빠져나왔다. 손가락이 급히 그것을 눌렀다.
준|너 없어도 원래 잘 먹어. 혼자 먹는 게 편할 때도 있고.
나|혼자 있고 싶으면 다음에는 말해 줘.
준|지금은…… 아직 다 안 먹었잖아.
나|응. 나도 천천히 먹을 생각이었어.
준|아까 계산 얘기, 더 해도 돼? 질문이 하나 남아서.
지|준연이 가방에서 얇은 종이를 꺼냈다. 내 식판 옆으로 조금씩 밀려왔다.`),v("junyeon",1,"good","자연스럽게 함께 먹으며 준연의 계산 이야기를 듣는다.",`나|들려줘. 밥 먹는 동안 네가 설명하면 내가 이해했는지 말해 볼게.
준|그럼 먼저 ‘느리다’랑 ‘불규칙하다’는 다른 거야. 여기 숫자 보면…….
지|준연은 말을 멈추고 내 표정을 살폈다. 나는 다음 계산을 손가락으로 짚었다.
나|그러니까 평균이 같아도 결과는 다를 수 있네. 계속 설명해 줘.`),v("junyeon",1,"neutral","계산은 나중에 함께 보고 오늘 발표를 수고했다고 말한다.",`나|계산은 도서관에서 같이 보자. 오늘은 일단 식기 전에 먹고.
준|도서관에 나랑 같이 가려고?
나|응. 오늘 네 발표 수고했다고도 말하고 싶었어.
지|준연이 고개를 숙였다. 이번에는 숟가락을 바로 내려놓지 않았다.`),v("junyeon",1,"bad","주변에 들리게 앞으로 준연을 혼자 두지 않겠다고 선언한다.",`나|이제 내가 매일 챙길 테니까 아무도 준연이 혼자라고 놀리지 마.
준|그런 말은…… 크게 안 해도 돼.
지|가까운 테이블의 고개가 돌아왔다. 준연은 펼쳤던 계산표를 가방 안에 넣었다.
준|고맙긴 한데, 나 그냥 불쌍해서 앉힌 것처럼 들리잖아.`),W(`지|도서관 예약석에 도착했을 때 준연은 노트 세 권을 색깔 순서대로 놓고 있었다.
나|전부 이번 페어 기록이야?
준|첫 권은 이론. 두 번째는 실패. 세 번째는 정리.
나|실패가 제일 두껍네.
준|버리면 다음에도 같은 걸 틀리니까.
지|빨간 점은 놓친 조건, 파란 줄은 확인한 사실, 회색 메모는 아직 모르는 것이라고 했다.
나|이 표도 네가 만든 거야?
준|응. 현솔이는 원본이 너무 복잡하대서 발표용은 따로 만들었어.
나|복잡한데 따라갈 수 있게 되어 있어.
준|정말 따라갈 수 있어? 그냥 예쁘다는 뜻 아니고?
나|첫 실험에서 뭘 바꿨고 왜 다시 했는지가 보여.
지|준연이 책갈피를 넘겼다. 비커가 깨진 날의 페이지에는 작은 별표가 있었다.
나|이날 기록도 남겼네.
준|지우고 싶었는데 지우면 앞뒤 순서가 안 맞아.
나|실험 실수는 기록해야 한다고 생각했구나.
준|머리로는 알아. 내 실수는 덜 보고 싶지만.
지|준연은 눈금 읽는 순서를 작은 그림으로 정리한 페이지를 보여 주었다.
준|손이 급해지면 여기부터 읽어. 그러면 조금 덜 틀려.
나|네가 네 방법을 만든 거네.
준|그런 거 만드는 동안 다른 애들은 더 어려운 실험을 하겠지.
나|다른 애들보다 빠른지가 아니라 네 실험이 나아졌는지 봐도 되잖아.
준|그렇게 봐도 되는지 모르겠어. 여기는 다들 너무 잘하니까.
지|준연이 내 앞에 연필을 놓았다.
준|여기서 이상한 걸 찾아봐. 내가 일부러 한 군데를 틀리게 적었어.
나|시험이야?
준|아니. 네가 이해했는지 보고 싶어서. 싫으면 안 해도 돼.
나|해 볼게. 단위가 여기만 밀리초네.
준|맞아. 수치는 비슷해서 그냥 넘기기 쉬워.
나|선생님 해도 되겠다.
준|애들 앞에서 말하면 목소리가 안 나와.
나|나한테는 잘 설명하는데.
준|넌 중간에 비웃지 않으니까.
지|준연이 말한 뒤 스스로 놀란 듯 입을 다물었다.
나|그럼 오늘은 내가 질문하는 학생을 해 볼까?
준|어려운 질문 해도 돼. 답을 모르면 모른다고 할게.
나|설명 듣고 노트 일부를 발표에 써도 되냐고 물어보고 싶어.
준|내 이름도 들어가?
지|준연은 기대를 숨기려는 표정으로 빈 제목란을 바라봤다.`),v("junyeon",2,"good","준연을 작성자로 명시하고 발표 설명도 준연에게 맡긴다.",`나|작성자는 방준연이라고 적자. 이 부분 설명도 네가 해 주면 좋겠어. 내가 연습 상대가 될게.
준|내 이름을 쓰고 내가 말하면 틀렸을 때도 내가 고쳐야겠네.
나|맞아. 잘한 것도 네 것이고 수정할 기회도 네 거야.
지|준연은 제목란에 자기 이름을 한 글자씩 천천히 썼다.`),v("junyeon",2,"neutral","노트는 그대로 두고 둘이 공부할 자료로만 사용한다.",`나|오늘은 우리 둘이 더 이해해 보자. 공개할 부분은 네가 나중에 골라 줘.
준|바로 가져가지 않는구나.
나|네가 만든 거니까. 보여 준 것만으로도 고마워.
지|준연은 다음 장을 펼쳤다. 처음보다 페이지 넘기는 손이 가벼웠다.`),v("junyeon",2,"bad","준연이 긴장할 테니 노트만 받아 대신 발표하겠다고 한다.",`나|사람들 앞에서는 내가 말할게. 네 노트만 있으면 될 것 같아.
준|그게 낫겠지. 나는 또 버벅일 거니까.
지|준연은 발표용 파일에서 자기 이름이 들어갈 자리를 지웠다.
준|대신 질문 나오면 나를 쳐다봐. 네가 말할 답은 적어 줄게.`),W(`지|추가 전시용 발표 자료를 확인하던 준연의 손이 제목 화면에서 멈췄다.
준|여기 분석 담당 이름이 달라.
나|지난번 초안이 올라간 건가?
준|이 그래프는 어제 내가 고친 거야. 새 파일 맞아.
지|분석 담당 칸에는 다른 학생 이름이 들어가 있었다.
나|제출한 사람에게 먼저 확인하자.
준|내가 예민하게 군다고 하면?
나|누가 만든 자료인지 묻는 건 필요한 확인이야.
준|그 학생이 양식을 정리한 건 맞아. 그게 더 중요한 일일 수도 있어.
나|양식 정리와 데이터 분석은 둘 다 적을 수 있잖아.
지|준연은 파일 수정 기록을 열었다. 날짜 옆에 자기 계정이 여러 줄 나타났다.
준|이걸 보여 주면 싸우자는 것처럼 보이지 않을까.
나|증거는 상대를 공격하려고만 쓰는 게 아니야. 사실을 맞추는 데도 쓰지.
준|네가 말하면 더 잘 들을 것 같아.
나|내가 처음부터 대신 말하길 원하는 거야?
준|처음에는. 그다음은 모르겠어.
지|미디어실 문이 열리고 자료를 제출한 학생이 들어왔다.
반|새로 고칠 거 있어? 지금 선생님께 보내려는데.
준|저기…… 분석 담당이.
반|아, 이름? 대표 작성자만 쓴 건데.
나|기여한 역할을 나눠 적는 양식 아니었어?
반|그런가? 준연이가 그때 아무 말도 안 해서.
지|준연의 시선이 책상으로 떨어졌다. 나는 다음 말을 기다렸다.
준|그때 화면을 못 봤어. 이 분석은 내가 했어.
반|그럼 이름 추가하면 되겠네. 이렇게까지 긴장할 일인가.
지|학생이 가볍게 웃자 준연의 손이 다시 주먹으로 말렸다.
준|추가가 아니라 역할을 정확히 적고 싶어.
반|무슨 역할?
준|원자료 정리, 오차 검토, 그래프 작성. 그건 내가 했고 양식 편집은 네가 했어.
지|마지막 문장은 작았지만 끝까지 끊기지 않았다.
반|알겠어. 역할표 수정해서 확인받을게.
지|학생이 나간 뒤 준연이 내 쪽을 봤다.
준|너무 따졌나?
나|필요한 내용을 말했어.
준|손이 아직 떨려. 그런데 이름이 없을 때보다는 나아.
나|최종본 확인까지 같이 할까?
준|같이는 좋아. 대신 파일 보내는 건 내가 해도 돼?
지|준연이 메일 창을 열었다. 받는 사람 칸에 담당 교사의 이름이 떠 있었다.`),v("junyeon",3,"good","역할표와 수정 기록을 확인하고 준연이 직접 메일을 보내게 한다.",`나|응. 네가 작성하고 내가 빠진 첨부만 확인할게.
준|문장이 너무 세 보이면 알려 줘. 이름을 정확히 남기고 싶다는 건 지우지 않을 거야.
나|그건 그대로 두자. 네가 말하려던 핵심이니까.
지|준연은 마지막으로 제목을 읽은 뒤 직접 전송 버튼을 눌렀다.`),v("junyeon",3,"neutral","수정본이 도착할 때까지 함께 기다린다.",`나|상대가 고쳐서 보낸다고 했으니까 잠깐 기다리자. 도착하면 네가 확인하고.
준|지금 확인 메일을 보내는 건 너무 조급할까?
나|네가 보내고 싶다면 보내도 돼. 선택은 네가 해.
지|준연은 메모장에 기여한 일을 적어 두고 새 알림을 기다렸다.`),v("junyeon",3,"bad","학생 대신 공개 단체 채팅에서 준연의 공로를 크게 따진다.",`나|이건 내가 단체방에 말할게. 누가 준연이 자료를 가져갔는지 다 알아야지.
준|잠깐, 내가 직접 확인하기로 했는데…….
지|알림이 연달아 울렸다. 준연의 설명 대신 내 긴 항의문이 화면을 채웠다.
준|이제 누가 물어보면 네가 해명해 줘. 나는 무슨 말을 해야 할지 모르겠어.`),W(`지|준연은 발표 연습 시간보다 삼십 분 먼저 와 있었다.
준|왔다. 다행이다.
나|약속은 세 시 아니었어?
준|응. 그냥 먼저 왔어. 혹시 네가 못 오면 어떡하나 해서.
나|연락했으면 됐잖아.
준|아까 메시지 두 번 쓰다가 지웠어. 귀찮을 것 같아서.
지|준연의 노트에는 발표 순서가 새로 적혀 있었다. 내 이름이 여러 칸에 들어갔다.
나|질문 답변도 내가 하는 걸로 바꿨어?
준|내가 막히면 네가 이어 주면 좋겠어서.
나|너만 아는 분석도 있는데.
준|그건 쪽지로 써 줄게.
지|준연은 쪽지 묶음을 꺼냈다. 예상 질문마다 번호가 붙어 있었다.
나|여기 답을 전부 준비해 놓고 직접 말하는 게 그렇게 무서워?
준|답을 모르는 건 덜 무서워. 다들 내가 틀릴 거라고 보는 게 무서워.
나|그렇게 본다고 확실히 아는 사람은 몇 명이야?
준|확실하게는…… 모르겠어. 그냥 그렇게 느껴져.
나|그럼 오늘은 내가 관객 한 명을 맡을게.
준|너는 괜찮아. 문제는 다른 사람이지.
지|도서관 사서가 예약 종료 시간을 알려 주었다. 남은 시간은 사십 분이었다.
나|다른 질문을 하는 관객을 나눠서 연습해 볼까?
준|네가 웃는 척하면 난 멈출 것 같아.
나|일부러 놀리는 역할은 안 할게. 진짜 심사처럼 자료를 물어볼게.
준|그럼 내가 막혔을 때 삼 초만 기다려 줘.
나|응. 먼저 대답해 버리지 않을게.
지|준연이 발표 첫 문장을 말했다. 중간 단어가 꼬여 다시 시작했다.
준|죄송합니다. 아니, 여기서는 사과 안 해도 되지?
나|다시 말하겠다고만 해도 돼.
준|다시 설명하겠습니다. 이 실험에서는…….
지|이번에는 첫 문단이 끝났다. 준연이 놀란 듯 나를 봤다.
나|계속해. 듣고 있어.
준|네가 그렇게 말하면 할 수 있을 것 같아.
나|오늘 네가 직접 했다는 것도 기억했으면 해.
준|네가 없으면 못 할 것 같다는 말은 하면 안 되겠지.
나|그렇게 느낀다는 말은 해도 돼. 앞으로도 꼭 그래야 하는 건 아니고.
지|준연이 내 이름 위에 연필을 올렸다. 지우개 끝이 떨렸다.
준|내 이름으로 바꾸면 네가 할 일은 없어지는 거 아냐?
나|연습 들어 주는 친구가 있으면 좋잖아.
지|준연이 발표자 칸을 바라봤다. 빈칸을 채울 차례였다.`),v("junyeon",4,"good","준연이 발표하고 자신은 시간을 재며 질문하는 역할을 맡는다.",`나|발표자는 너. 나는 시간 재고 질문할게. 막히면 네가 요청할 때 도와줄게.
준|그럼 방금 못 한 문단부터 다시 해 볼게. 이번에는 내가 끝낼 때까지 기다려 줘.
나|응. 시작하면 시간을 잴게.
지|준연은 발표자 칸에 자기 이름을 적었다. 첫 문장이 조금 덜 흔들렸다.`),v("junyeon",4,"neutral","한 문단씩 번갈아 읽으며 오늘 연습 부담을 낮춘다.",`나|오늘은 문단을 나눠 읽자. 다음 연습에서는 네 비중을 늘려 보고.
준|당장 전부 해야 하는 건 아니구나.
나|응. 오늘 정한 것만 해 보고 내일 바꾸자.
지|준연은 내 문단에도 주석을 달았다. 작은 웃음이 처음으로 나왔다.`),v("junyeon",4,"bad","발표와 질문을 모두 맡아 앞으로도 대신해 주겠다고 약속한다.",`나|힘들면 내가 전부 할게. 앞으로도 너는 자료만 만들어 줘.
준|정말? 그럼 이번에도 괜찮겠네.
지|준연은 자기 이름을 지웠다. 안도한 표정과 함께 노트가 내 앞으로 넘어왔다.
준|그날 꼭 와야 해. 네가 안 오면 나는 아무것도 못 해.`),W(`지|우수 전시 추가 발표가 시작되었다. 준연은 단상 아래에서 리모컨을 쥐고 있었다.
준|손이 젖어서 버튼이 미끄러워.
나|손수건 여기 있어.
준|내 이름 제대로 뜨지?
나|응. 분석 및 발표, 방준연.
지|화면 오른쪽 아래에 작지만 분명한 글씨가 보였다.
현|원자료는 두 번째 폴더에 있어. 질문 나오면 바로 열어.
준|알아. 어제 확인했어.
현|……그럼 잘하고 와.
지|현솔이 말을 줄였다. 준연은 그게 오히려 낯선 듯 두 번 고개를 끄덕였다.
선|다음 발표를 시작해 주세요.
준|안녕하세요. 1학년 1반 방준연입니다.
지|첫 문장이 마이크를 타고 객석으로 퍼졌다.
준|저희는 같은 반응에서도 시간이 달라지는 이유를 살펴봤습니다.
나|다음 장 넘길까?
준|응. 표가 있는 장으로.
지|나는 약속한 대로 화면만 넘겼다. 준연은 그래프의 점 하나를 가리켰다.
준|이 값은 다른 값보다 크지만 임의로 빼지 않았습니다.
선|오차가 큰 값을 포함한 이유를 설명해 주세요.
지|준연이 입을 열었다가 닫았다. 손이 내 쪽으로 움직이다 멈췄다.
준|잠시 원기록을 확인하겠습니다.
나|원자료 열게.
준|이때 용액 온도 기록이 달랐습니다. 측정 실패라고 단정할 근거가 없었습니다.
선|그러면 다음 실험에서는 무엇을 바꾸겠습니까?
준|시작 전 온도를 맞추고, 같은 기준으로 시간을 재겠습니다.
지|준연은 마지막 문장을 마친 뒤 한 번 숨을 골랐다.
선|좋습니다. 통제하지 못한 조건을 분명히 제시했네요.
지|발표가 끝나자 준연은 바로 단상에서 내려오지 않았다. 화면의 이름을 한 번 더 봤다.
준|나 방금 질문에 대답했어.
나|응. 그것도 두 개나.
준|목소리가 떨렸는데.
나|내용은 끝까지 들렸어.
지|현솔이 손바닥을 두 번 가볍게 마주쳤다.
현|온도 대답 좋았어. 다음에는 그래프 축을 먼저 말하면 더 이해하기 쉬워.
준|그건 적어 둘게.
나|오늘 기분은 어때?
준|다시는 못 하겠다는 생각이랑, 한 번 더 해 보고 싶다는 생각이 같이 들어.
지|준연은 리모컨을 반환하면서도 자기 이름이 적힌 발표자 카드를 놓지 않았다.`),v("junyeon",5,"good","준연이 직접 해낸 구체적인 부분을 말하고 다음 목표를 묻는다.",`나|원기록 확인할 시간을 직접 요청한 게 좋았어. 다음에는 어떤 걸 더 해 보고 싶어?
준|첫 질문에서 너를 안 쳐다보고 대답하고 싶어. 그리고 발표 끝나면 너한테 먼저 웃고 싶고.
나|좋다. 그건 다음 연습 목표로 적자.
지|준연은 발표자 카드를 노트 첫 장에 끼웠다. 이번 기록에는 실패 표시가 없었다.`),v("junyeon",5,"neutral","수고했다고 말하고 함께 쉬러 간다.",`나|수고했어. 오늘 준비한 만큼 잘 보여 줬어. 잠깐 바람 쐴까?
준|지금 가도 되는 거야?
나|자료 정리는 끝났어. 네가 쉬고 싶으면.
지|준연은 가방을 어깨에 걸었다. 걸음을 맞추는 데 전보다 덜 망설였다.`),v("junyeon",5,"bad","자신이 도와주지 않았다면 못 했을 거라고 농담한다.",`나|내가 옆에 없었으면 못 했겠지? 이제 나한테 잘해야겠다.
준|……응. 네가 없었으면 못 했을 거야.
지|농담으로 했던 말이 준연의 대답 안에서 무거워졌다.
준|다음에도 꼭 와 줘. 혼자 할 수 있다는 생각은 안 할게.`),W(`지|담당 교사에게 정리 확인을 받은 뒤, 우리는 비어 있는 화학실에 남았다.
준|이 선반 기억나?
나|네가 비커 깨뜨린 날?
준|나는 거의 매번 기억했어. 문 열 때마다.
나|오늘도?
준|오늘은 발표한 것도 같이 생각나.
지|준연은 세척과 건조를 마친 빈 비커를 지정된 칸에 넣었다.
준|그날 네가 들어왔을 때 빨리 나갔으면 했어.
나|실수한 걸 봐서?
준|응. 아직 내 이름도 잘 모를 때였는데 이상한 것부터 알게 될까 봐.
나|지금은 네 이름 알지.
준|노트 글씨도 알아보고.
나|회색으로 적으면 아직 모르는 내용이라는 것도.
지|준연이 가방에서 종이봉투를 꺼냈다. 익숙한 쿠키 냄새가 났다.
준|이건 실험한 거 아니야. 집에서 구웠어.
나|그 말 안 했으면 화학실에서 먹을 뻔했네.
준|여기서 먹으면 안 돼. 밖에 나가서 줘야겠다.
지|준연이 스스로 말한 뒤 작게 웃었다. 우리는 복도 휴게공간으로 나왔다.
나|봉투에 아무것도 안 적혀 있네.
준|원래 적었는데 새 걸로 바꿨어.
나|무슨 말이었어?
준|고맙다고 열 줄. 네가 나를 얼마나 많이 도와줬는지도.
나|말해 줘도 됐는데.
준|그것만 말하면 내가 너를 좋아하는 이유가 빚처럼 들릴까 봐.
지|준연은 봉투 모서리를 반듯하게 폈다. 이번에는 내 눈을 먼저 봤다.
준|네가 나를 도와줘서 고마워. 그런데 좋아하는 건 다른 얘기야.
나|어떤 게 달라?
준|네가 단위 틀렸을 때 웃는 거. 어려운 말 들으면 눈썹 움직이는 거. 그런 걸 계속 보고 싶어.
나|생각보다 나를 자세히 봤네.
준|모른 척하느라 힘들었어.
지|준연의 귀가 빨개졌다. 그래도 말을 멈추지 않았다.
준|나는 너 없어도 발표할 수 있는 사람이 되고 싶어.
나|응.
준|그러면서 발표 끝나면 네 옆으로 가고 싶어. 그건 같이 해도 되는 거지?
나|나는 그게 좋을 것 같아.
준|그러면 봉투에 한 문장만 쓸게.
지|준연이 볼펜을 꺼냈다. 종이 위에서 한 번도 지우지 않은 글자가 이어졌다.
준|좋아해, {name}. 이 말은 내가 직접 하고 싶었어.`),v("junyeon",6,"good","고마움과 별개로 준연 자신을 좋아한다고 답한다.",`나|나도 좋아해. 네 설명, 네 유머, 어려워도 자기 이름을 쓰는 네가 좋아.
준|다음에는 내가 너 어려운 것도 도와줄게. 애인이면 그래도 되잖아.
나|그럼. 서로 부탁하고 서로 거절할 수도 있는 사이가 되자.
지|준연은 봉투를 내 손에 건넸다. 자기 가방은 이번에도 스스로 들었다.`),v("junyeon",6,"neutral","기쁘다고 답하고 첫 데이트를 천천히 정해 보자고 한다.",`나|말해 줘서 기뻐. 나도 너랑 더 오래 있고 싶어. 주말에 같이 책 보러 갈까?
준|문제집 말고 소설도 괜찮아?
나|네가 읽고 싶은 걸 같이 고르자.
지|준연은 처음으로 고맙다는 말 대신 만나고 싶은 시간을 말했다.`),v("junyeon",6,"bad","앞으로도 자신이 모든 어려움을 해결해 주겠다고 약속한다.",`나|내가 계속 지켜 줄게. 넌 어려운 건 안 해도 돼.
준|그럼 이제 다른 사람들한테 잘 보이려고 안 해도 되겠다.
지|준연은 다음 발표 신청서에서 자기 이름을 지웠다.
준|너만 있으면 되니까. 다음 점심도, 다음 발표도 나 대신 정해 줘.`);W(`지|페어 자료를 반납하러 간 화학실에서 현솔은 계산기를 두 번 연속 눌렀다.
현|반응속도 표 마지막 열. 너도 계산해 봐.
나|오늘 행사는 다 끝났잖아.
현|끝났다고 계산이 맞아지는 건 아니니까.
지|나는 원자료와 화면을 번갈아 봤다. 마지막 줄만 단위가 달랐다.
나|여기 분을 초로 바꾸지 않은 것 같은데.
현|그럴 리 없어. 내가 두 번 확인했어.
나|이 셀 수식은 위 칸이랑 달라.
지|현솔이 내 손끝을 따라 보더니 계산기를 내려놓았다.
현|……맞네.
나|수정해서 기록 남기면 되겠다.
현|오늘 이 표로 질문에 답했어.
나|잘못된 답이었어?
현|결론은 안 바뀌어. 그래도 숫자는 틀렸지.
지|현솔이 파일 이름에 ‘수정’이라고 적었다가 지웠다.
나|왜 지워?
현|표지부터 다시 내면 보는 사람이 귀찮을 것 같아서.
나|너라면 다른 사람이 틀린 숫자를 조용히 바꾸면 싫어하지 않아?
현|알아. 내가 그 말을 했겠지.
지|현솔은 의자를 당겨 앉았다. 화학실이 갑자기 조용해진 듯했다.
현|준연이가 틀렸을 땐 바로 말했어.
나|기억해.
현|지금은 나도 네가 작은 목소리로 말해서 다행이라고 생각했어.
나|틀렸다는 것과 창피를 주는 건 다른 일일 수 있잖아.
현|그 둘을 늘 같이 했네, 나는.
지|복도에서 다른 학생들의 발소리가 가까워졌다. 현솔이 문 쪽을 쳐다봤다.
현|지금 애들 오면 말할 거야?
나|먼저 네가 어떻게 수정할지 듣고 싶어.
현|원자료랑 수정표를 같이 올리고, 단위 변환 오류라고 적을 거야.
나|그럼 그렇게 하자.
현|너는 한 번쯤 나한테 똑같이 말하고 싶지 않아?
나|뭘?
현|‘이것도 확인 못 해?’ 그런 거.
지|현솔은 담담하게 물었지만 마우스를 쥔 손은 움직이지 않았다.
나|화가 나면 말할 수 있겠지. 지금은 고치는 게 먼저야.
현|네가 나보다 어른 같은 말을 하면 조금 짜증 나.
나|그건 반박해도 돼. 난 너랑 같은 반이니까.
지|현솔이 처음으로 짧게 웃었다. 수정 파일의 이름을 다시 입력하기 시작했다.`),v("hyunsol",1,"good","오류를 함께 검증하고 현솔이 수정 경위를 직접 기록하게 한다.",`나|숫자는 같이 다시 확인하자. 수정 설명은 네가 쓰고 나도 검토할게.
현|‘계산 과정의 단위 변환 오류’. 변명은 안 넣을게.
나|좋아. 결론에 어떤 영향이 있는지도 적자.
지|현솔은 변경 기록을 남겼다. 내 이름도 검토자로 쓰기 전에 허락을 구했다.`),v("hyunsol",1,"neutral","현솔이 수정하는 동안 옆에서 기다린다.",`나|네가 처리할 수 있겠네. 반납 목록 정리하면서 기다릴게.
현|다 고치고 나면 한 번만 더 봐 줘.
나|응. 서둘러 숨길 필요는 없으니까.
지|현솔은 수정표와 원본을 서로 다른 이름으로 저장했다.`),v("hyunsol",1,"bad","현솔도 틀린다며 다른 학생 앞에서 놀린다.",`나|다들 봐. 현솔이도 이런 걸 틀리네. 확인하라는 말 그렇게 하더니.
현|웃기면 계속 웃어. 수정은 내가 할 테니까.
지|현솔은 내게서 계산표를 가져갔다. 마우스 소리가 필요 이상으로 빨라졌다.
현|앞으로 네 검토는 안 받을게. 그게 서로 편하겠네.`),W(`지|현솔은 점심 뒤 정원 벤치에서 실험실 열쇠 고리를 돌리고 있었다.
나|밥은 먹었어?
현|먹었어. 너는 준연이랑 먹었지?
나|응. 그건 왜?
현|요즘 준연이가 나 보면 노트를 닫아.
나|왜 그러는지 물어봤어?
현|물으면 ‘아무것도 아니야’라고 해.
지|현솔이 열쇠를 손바닥에 감쌌다. 금속 소리가 멈췄다.
현|비커 깨진 날에는 정말 위험했어.
나|알아. 네가 움직이지 말라고 한 건 맞았어.
현|그런데 그 뒤부터 내가 말하면 몸부터 굳어.
나|그날만이 아니라 네가 계속 실수할 사람처럼 말한 적도 있었잖아.
현|‘또 틀렸다’는 말?
나|응. 실험 결과보다 준연이 자체가 문제인 것처럼 들릴 때가 있어.
현|일부러 그런 건 아니야.
나|그럴 거라고 생각해. 그래도 들은 쪽에는 남을 수 있어.
지|정원 너머에서 밴드부 장비를 옮기는 학생들이 지나갔다.
현|나는 실수가 나면 내가 처리해야 한다고 생각해.
나|왜 네가 전부?
현|잘하는 사람이 정리해야 빨리 끝나니까.
나|그래서 다른 사람이 배우는 시간은 없어지고?
현|……그러네.
지|현솔은 바로 반박하지 않았다. 잔디 사이로 떨어진 이름표를 집어 벤치에 올렸다.
현|준연이가 실험 시작 전에 내 얼굴부터 보더라.
나|혼날지 확인하는 거 아닐까.
현|내가 선생님도 아닌데.
나|같은 조원이니까 같이 정하는 게 맞겠지.
현|그럼 급한 순간에도 부드럽게 말해야 해?
나|위험하면 짧고 분명하게 멈추게 해야지. 위험이 끝난 다음 말은 고를 수 있고.
현|‘움직이지 마’는 하고 ‘왜 매번 그러냐’는 빼라.
나|지금 네가 더 잘 정리했네.
지|현솔은 열쇠 고리를 다시 돌리지 않고 주머니에 넣었다.
현|사과하면 앞으로도 실수해도 된다고 생각하지 않을까?
나|상처 준 말에 사과하는 거지 안전 기준을 없애는 게 아니잖아.
현|내가 둘을 섞고 있었나 봐.
나|너도 네가 틀렸을 때 숫자만 고치길 바랐잖아.
현|나한테는 기회를 바라면서 남한테는 판정을 했네.
지|현솔이 자리에서 일어났다. 화학실로 가는 길이 오늘은 조금 멀어 보였다.`),v("hyunsol",2,"good","준연에게 구체적으로 사과하고 안전 절차는 함께 정하자고 제안한다.",`나|어떤 말이 과했는지 직접 말해 봐. 그리고 실수했을 때 절차는 조원 모두 같이 정하고.
현|‘또 너냐’고 한 건 필요 없었어. 그건 확실히 말할 수 있겠다.
나|상대가 바로 괜찮다고 하지 않아도 기다려 줘.
현|알겠어. 사과해서 빨리 끝내려는 것도 내 편의겠지.`),v("hyunsol",2,"neutral","다음 실험부터 말투를 바꾸는 연습을 해 보자고 한다.",`나|다음 실험부터 지적할 내용을 하나씩 골라 말해 보자.
현|그럼 행동으로 먼저 보여 주라는 거네.
나|응. 다만 직접 사과할 말이 사라지는 건 아니고.
지|현솔은 ‘행동’과 ‘사과’를 따로 적었다. 둘 중 하나로 끝내려 하지 않았다.`),v("hyunsol",2,"bad","준연은 원래 실수가 많으니 현솔이 강하게 통제해야 한다고 한다.",`나|준연이는 실수가 많잖아. 네가 강하게 잡아 줘야지.
현|역시 내가 느슨해지면 안 되는 거겠지.
지|현솔은 다음 실험 역할표에서 준연의 실험 담당 칸을 지웠다.
현|위험한 건 내가 하고 걔는 기록만 시킬게. 그게 안전하니까.`),W(`지|현솔이 미디어실 녹음 장비를 반납하는 동안 나는 파일 목록을 정리했다.
나|이것도 발표 연습 파일이야? ‘다시 말하기 04’.
현|그건 열지 마.
지|현솔의 손이 먼저 화면을 가렸다. 버튼은 아직 누르지 않은 상태였다.
나|안 열었어. 목록에 있어서 물어봤어.
현|내 파일이야. 지우면 돼.
나|지워도 되는지 네가 확인하고 지워.
지|현솔은 파일을 자기 저장장치에 옮겼다. 이름이 네 개 더 보였다.
나|말투 연습한 거야?
현|제목만 봐도 티 나나.
나|지난번 얘기 생각나서.
현|입 밖으로 내면 자꾸 내가 의도한 것보다 날카로워져.
나|그래서 녹음해 봤어?
현|내 목소리를 객관적으로 들으면 고칠 수 있을 것 같아서.
지|현솔은 헤드폰을 들어 올렸다가 다시 내려놓았다.
현|들어 주면 도움은 될 것 같아. 그런데 싫기도 해.
나|지금 결정 안 해도 돼.
현|넌 안 궁금해?
나|궁금해. 그래도 네가 안 들려주고 싶으면 안 듣는 거지.
지|현솔이 나를 한 번 보고 짧은 파일 하나를 골랐다.
현|이것만. 다른 건 안 돼.
나|응. 이 파일만.
지|녹음 속 현솔은 ‘여기 다시 확인해 줄래’라는 말을 세 번 반복했다.
현|첫 번째는 명령 같고 두 번째는 비꼬는 것 같아.
나|세 번째는?
현|처음 보는 사람한테 부탁하는 것 같아. 같은 반인데.
나|네가 익숙하지 않아서 그렇게 들릴 수도 있지.
현|너라면 셋 중 어떤 걸 듣고 싶어?
나|확인할 이유를 같이 말해 주면 더 좋을 것 같아.
현|‘단위가 달라서 확인해 줄래’처럼?
나|응. 왜 하는지 알면 혼나는 것처럼 덜 들려.
지|현솔이 녹음 버튼을 눌렀다. 이번에는 말 사이에 숨을 조금 넣었다.
현|이 셀의 단위가 달라. 같이 확인해 줄래?
나|훨씬 이해하기 쉬워.
현|칭찬하려고 하는 말 말고 실제로?
나|실제로. 나도 이렇게 요청받으면 같이 볼 것 같아.
현|그럼 마지막 질문. 내가 너한테 이걸 들려줬다는 건 말하지 말아 줄래?
지|현솔의 질문은 연습한 부탁보다 조금 덜 매끄럽고 훨씬 솔직했다.`),v("hyunsol",3,"good","허락한 파일만 듣고 다른 사람에게 공유하지 않겠다고 한다.",`나|응. 네가 들려준 만큼만 들을게. 다른 사람에게 전달하지도 않을게.
현|고마워. 이런 부탁에 설명을 많이 붙이지 않아도 되는 게 좋네.
나|다음에도 듣고 싶을 때 먼저 물어볼게.
지|현솔은 파일을 안전하게 옮긴 뒤 공용 장비의 사본을 직접 삭제했다.`),v("hyunsol",3,"neutral","오늘 들은 내용에 대해서만 짧게 의견을 주고 정리를 돕는다.",`나|오늘 들은 문장은 이유가 들어가서 더 명확했어. 그 정도만 말해 둘게.
현|응. 너무 평가받는 기분이면 연습도 싫어질 것 같았거든.
나|장비 정리부터 끝내자. 케이블은 어디 넣어?
지|현솔은 대답 대신 옆 서랍을 열었다. 경계하던 어깨가 조금 내려갔다.`),v("hyunsol",3,"bad","귀엽다며 파일을 복사해 친구들에게 들려주겠다고 한다.",`나|이런 목소리는 처음 듣네. 애들한테도 들려주면 좋아할 것 같은데.
현|복사하지 마. 그만해.
지|현솔이 저장장치를 뽑았다. 연습한 부드러운 말투는 더 이상 나오지 않았다.
현|허락한 건 네가 듣는 것까지야. 그게 그렇게 이해하기 어려워?`),W(`지|화학실 사고 기록을 정리하는 날, 현솔은 교사가 나눠 준 양식을 펼쳤다.
현|비커 깨진 날 경위를 적으래.
나|이미 보고한 거 아니었어?
현|그건 즉시 보고. 이건 다음 실험을 위한 개선 기록이야.
지|첫 번째 칸에는 ‘사고 발생 상황’이라고 적혀 있었다.
현|준연이가 노트를 꺼내다 팔로 건드렸다. 여기까지는 사실.
나|실험대 위에 놓인 물건도 적어야겠네.
현|노트, 용액 용기, 비커. 간격이 좁았어.
나|누가 그렇게 배치했어?
현|내가. 빨리 보려고 전부 한쪽에 모았어.
지|현솔이 펜 끝을 멈췄다. 종이에 작은 잉크 점이 번졌다.
현|그러면 내가 사고 원인을 만든 거야?
나|원인이 하나뿐이라고 결정할 필요는 없잖아.
현|준연이가 건드린 건 맞아.
나|네가 배치한 것도 맞고. 위험을 낮추려면 둘 다 봐야지.
지|현솔은 개선 사항 칸으로 눈을 옮겼다가 다시 처음으로 돌아왔다.
현|말이 심해진 것도 써야 할까?
나|그게 이후 대응에 영향을 줬어?
현|준연이가 혼날까 봐 장갑 상태를 늦게 말했어.
나|그럼 앞으로 정보를 빨리 말할 수 있게 하는 것도 개선이겠네.
현|안전 문제인데 감정 얘기까지 적는 게 이상할 줄 알았어.
나|감정 때문에 보고가 늦어졌다면 연결된 얘기지.
지|준연이 문 앞에서 보고서를 기다리고 있었다.
준|내 서명도 필요하대서 왔어.
현|들어와. 네가 본 내용도 읽어 봐.
준|네가 다 적었으면 맞겠지.
현|이번에는 네 확인이 필요해. 내가 놓친 것도 있을 수 있어.
지|준연이 의자를 당겨 앉았다. 현솔은 펜을 건넸다.
준|이때 세척대로 바로 간 건 아니야. 네가 두 번 말한 뒤 갔어.
현|맞아. 그 부분 수정할게.
준|내가 겁나서 계속 내가 치우겠다고 했어.
현|그럴 때 움직이지 말아야 한다는 건 다음 교육 때 같이 말하자.
지|준연이 고개를 끄덕였다. 현솔은 비커 위치를 작은 도면으로 그렸다.
나|발생 원인과 재발 방지가 조금 더 구체적으로 됐네.
현|누가 나쁜 사람인지 적는 보고서가 아니었구나.
준|나 혼내는 서류일 줄 알았어.
현|나도 네 실수만 적으면 끝나는 줄 알았어.
지|세 사람이 본 같은 사건이 서로 다른 문장으로 기록되고 있었다.`),v("hyunsol",4,"good","각자 확인한 사실과 개선 사항을 모두 기록해 함께 제출한다.",`나|개인 행동, 실험대 배치, 보고 방식까지 쓰자. 서명 전에는 각자 다시 읽고.
현|좋아. 내 배치와 말투가 대응을 어렵게 한 것도 적을게.
준|그럼 나도 장갑 상태를 바로 말하지 않은 걸 쓸게.
지|보고서는 한 사람을 탓하는 문장에서 함께 바꿀 절차로 끝났다.`),v("hyunsol",4,"neutral","판단이 어려운 부분은 담당 교사와 함께 확인한다.",`나|원인으로 단정하기 어려운 부분은 그대로 질문해서 선생님과 확인하자.
현|추측이라고 표시하고 가져가면 되겠다.
준|나도 설명하러 같이 갈게.
지|현솔은 두 사람을 앞서가지 않고 같은 줄에 서서 교무실로 향했다.`),v("hyunsol",4,"bad","일이 커지지 않도록 준연이 건드렸다는 사실만 쓰라고 한다.",`나|복잡하게 만들지 말자. 준연이가 건드린 사실만 쓰면 되잖아.
현|그게 가장 간단하긴 하네.
준|……응. 내가 깬 건 맞으니까.
지|현솔은 실험대 도면을 지웠다. 다음 실험에서도 비커는 같은 위치에 놓일 예정이었다.`),W(`지|종례 뒤 현솔은 준연의 책상 앞에서 손에 든 메모를 접었다.
현|방준연. 잠깐 얘기할 수 있어?
준|뭐 틀린 거 있어?
현|아니. 내가 잘못한 얘기.
지|준연이 가방 지퍼를 닫다 말았다. 나는 조금 떨어진 책상에 앉았다.
현|비커 사고 대응 중 내 표현에 부적절한 부분이 있었어.
준|……응.
현|앞으로 표현을 수정하겠다는 말을 하려고.
준|알겠어. 가도 돼?
지|현솔이 말을 잃었다. 준비한 문장에는 이 대답 다음이 없었던 듯했다.
현|그냥 알겠다는 거야?
준|네가 할 말 다 한 줄 알았어.
나|현솔아. 네가 실제로 미안한 말이 뭐였는지부터 말해 봐.
현|‘넌 확인이라는 걸 안 하냐’고 한 거.
준|그 말은 자주 했잖아.
현|응. 한 번이 아니었어.
지|현솔은 접은 메모를 주머니에 넣었다.
현|내가 맞는 내용을 말하면 아무렇게나 말해도 된다고 생각했어.
준|나는 네가 말하면 답부터 못 하겠어. 틀렸다고 할 것 같아서.
현|실험 기록도 그래서 안 보여 줬어?
준|응. 맞게 했어도 틀린 데부터 찾을 것 같았어.
지|현솔은 바로 설명하지 않았다. 교실 창틀이 바람에 작게 울렸다.
현|미안해. 널 못하는 사람으로 정해 놓고 말한 적이 있어.
준|지금 괜찮다고 해야 해?
현|아니. 바로 괜찮아질 필요는 없어.
준|그럼 아직 좀 불편해.
현|알겠어. 다음에는 네 기록을 볼 때 먼저 물어볼게.
준|지적하지 말라는 건 아니야. 실험은 정확해야 하니까.
현|응. 행동이랑 결과를 말하고 네가 어떤 사람인지 단정하지 않을게.
지|준연은 가방을 들었다. 문 앞에서 한 번 돌아봤다.
준|다음 실험 역할은 같이 정하자. 나도 하고 싶은 게 있어.
현|그러자.
지|준연이 나간 뒤 현솔은 빈 의자에 앉았다.
현|이런 대화에는 끝났다는 표시가 없네.
나|한 번 말하고 끝나는 건 아닐 테니까.
현|어색한데, 처음보다는 덜 막혀.
나|상대 대답을 끝까지 들었잖아.
지|현솔은 메모를 구기지 않고 펼쳤다. 가장 아래에 ‘계속 지킬 것’이라고 썼다.`),v("hyunsol",5,"good","즉시 용서를 요구하지 않은 점을 짚고 행동으로 이어 가자고 한다.",`나|괜찮다고 말해 달라고 하지 않은 게 좋았어. 다음 실험에서도 오늘 한 말을 지키자.
현|내가 다시 날카롭게 말하면 알려 줘. 네가 전부 고쳐 달라는 뜻은 아니야.
나|알겠어. 나도 말이 지나치면 네가 말해 줘.
지|현솔은 메모를 다음 실험 일정표 사이에 넣었다.`),v("hyunsol",5,"neutral","어색해도 필요한 말을 했다고 말하며 함께 교실을 정리한다.",`나|필요한 말은 했어. 지금 당장 편해지지 않아도 괜찮겠지.
현|응. 의자부터 넣자. 무슨 말을 더 해야 할지 모르겠어.
나|지금은 굳이 더 말하지 않아도 돼.
지|우리는 나란히 책상을 밀었다. 침묵이 오늘은 비난처럼 느껴지지 않았다.`),v("hyunsol",5,"bad","사과를 했는데도 준연이 예민하다며 현솔을 편든다.",`나|이렇게 사과했는데 아직 불편하다니 준연이도 예민하네.
현|내가 더 뭘 해야 하는데 싶기는 했어.
지|현솔은 ‘계속 지킬 것’ 아래에 쓰려던 문장을 지웠다.
현|그럼 여기까지만 하자. 다음부터는 걔가 적응해야지.`),W(`지|화학실 문에는 새 안전 체크리스트가 붙어 있었다. 작성자 칸에 현솔과 준연 이름이 나란히 적혔다.
나|글씨가 두 종류네.
현|중간 확인 항목은 준연이가 썼어. 나는 처음과 마지막.
나|역할은 잘 나눴어?
현|나누는 데 실험보다 오래 걸렸어. 그래도 해 보려고.
지|현솔은 빈 실험대 한쪽에 정리한 노트를 놓았다.
현|오늘은 실험 안 해. 선생님께 문 잠그는 것만 확인받았어.
나|그럼 나를 부른 건?
현|할 말 있어서. 자료로 설명할 수 없는 거.
나|그런 말도 있구나.
현|너는 지금 놀리고 있어.
나|조금. 싫으면 안 할게.
현|싫지는 않아. 내가 가끔 너무 어렵게 시작해서.
지|현솔이 노트를 펼쳤다. 실험식 대신 짧은 문장들이 적혀 있었다.
나|또 말하기 연습?
현|이번에는 외우다가 포기했어. 네 대답을 모르니까 다음 문장이 안 정해져.
나|내 대답은 지금 들으면 되지.
현|맞아. 그 쉬운 걸 여기까지 와서 생각했네.
지|현솔이 노트를 덮었다. 손은 책상 위에 그대로 두었다.
현|처음엔 네가 준연이 편만 드는 줄 알았어.
나|그래서 나한테도 짜증 냈어?
현|응. 나도 옳게 하려고 노력하는데 너는 그걸 안 보는 줄 알고.
나|지금은?
현|내가 틀렸을 때도 나를 아예 틀린 사람으로 만들지는 않더라.
나|실수 하나로 사람이 끝나는 건 아니니까.
현|그래서 네 앞에서는 모른다고 말할 수 있게 됐어.
지|현솔은 창문을 바라보다가 고개를 돌렸다. 이번에는 내 눈을 피하지 않았다.
현|좋아해. 이 말에 맞는 근거를 찾다가 며칠을 썼어.
나|찾았어?
현|몇 개는. 네가 내 말 끝까지 듣는 것. 틀린 계산을 같이 고치는 것.
나|그럼 결론이 났네.
현|아니. 네 마음은 아직 모르잖아.
나|그건 내가 답해야지.
현|다른 대답이어도 들을게. 내 예상이 틀리는 건 이제 연습했으니까.
지|시계 초침 소리가 실험대 사이를 채웠다. 현솔이 입술을 잠깐 깨물었다.
현|그래도 솔직히 말하면, 같은 답이었으면 좋겠어.
나|그 말을 먼저 해 준 게 좋아.
지|현솔은 정답 확인을 재촉하지 않았다. 내 문장을 기다리고 있었다.`),v("hyunsol",6,"good","서로 틀릴 수 있어도 이야기하며 함께하고 싶다고 답한다.",`나|나도 좋아해. 우리가 매번 맞아서가 아니라, 틀렸을 때 다시 이야기할 수 있어서.
현|그럼 연애도 네 마음을 추측해서 결론 내리기 전에 물어볼게.
나|나도. 오늘 같이 집에 가도 돼?
현|응. 그 질문의 답은 지금 바로 줄 수 있어.`),v("hyunsol",6,"neutral","좋아한다고 답하고 앞으로 함께할 시간을 천천히 정한다.",`나|나도 네가 좋아. 내일 점심부터 같이 먹어 볼까?
현|밥 먹으면서 실험 보고서만 보지는 말자.
나|네가 먼저 그런 말을 할 줄은 몰랐네.
지|현솔은 노트를 가방 깊숙이 넣었다. 문 잠그는 손이 평소보다 가벼웠다.`),v("hyunsol",6,"bad","둘만 옳으면 된다고 말하며 다른 사람들을 무시한다.",`나|우리 둘이 맞게 하면 돼. 이해 못 하는 사람들까지 신경 쓸 필요 없어.
현|우리끼리 하면 빠르기는 하겠지.
지|현솔은 공동 실험 일정표를 접고 새로 둘만의 계획을 열었다.
현|그럼 다음에는 다른 애들 빼고 하자. 설명할 필요도 없으니까.`);const y=(e,n)=>({target:"global",stat:e,amount:n});function Gt(e,n){const a={A:e,P:"player",N:"narrator",T:"teacher",S:"student",W:"world"};return n.trim().split(`
`).map(o=>{const r=o.indexOf("|");return{speaker:a[o.slice(0,r)]??"narrator",text:o.slice(r+1).trim()}})}function V(e,n,a,o,r,u){const c=["good","neutral","bad"],d=e!=="taewoo";return{id:`${e}-${n}`,title:a,location:o,day:1-n,lines:Gt(e,r),choices:u.map(([j,b,A=[]],p)=>({id:`${e}-${n}-${c[p]}`,text:j,response:Gt(e,b),effects:[{target:e,stat:"affection",amount:[8,6,-4][p]},{target:e,stat:"trust",amount:[10,4,-8][p]},{target:e,stat:"jealousy",amount:[-4,0,5][p]},{target:e,stat:"special",amount:(d?1:-1)*[8,2,-8][p]},...A],flags:p===0?[`${e}-key-${n}`]:p===2?[`${e}-hurt-${n}`]:[]}))}}V("taewoo",1,"두 박자 늦은 전학생","dance",`
N|댄스연습실 문이 열리자 바닥에 붙인 형광 테이프가 먼저 보였다.
A|거기 흰 선 밖에서 신발 갈아 신어. 바닥이 우리 실험 장비거든.
P|무대가 아니라 실험 장비라고?
A|발이 미끄러지면 데이터도 춤도 끝이니까. 자, 실내화.
P|내 사이즈를 어떻게 알았어?
A|체험 부스 신청서에 적었잖아. 나도 준비라는 걸 해.
N|태우가 팔짱을 끼자 소매 아래 붙인 작은 센서가 깜박였다.
P|오늘도 센서 테스트야?
A|응. 그런데 먼저 네가 내 말을 얼마나 알아듣는지 검사할 거야.
P|그 검사는 자신 없는데.
A|괜찮아. 학생의 부족함은 선생님의 실력으로 채우는 거니까.
P|선생님이 자기소개를 길게 하시네.
A|내 이름은 김태우, 1학년 1반. 네가 오늘 제일 많이 쳐다볼 사람.
P|거울로 봐도 돼?
A|직접 보라고! 자세 설명하는데 눈 피하지 말고.
N|태우가 음악을 멈추고 양발을 어깨너비로 벌렸다.
A|하나에 오른발, 둘에 왼발. 처음에는 팔 안 쓸 거야.
P|팔은 왜 뒤늦게 들어가?
A|동작을 한꺼번에 주면 어떤 부분에서 헷갈리는지 못 찾잖아.
P|변인을 나눠 보는 거구나.
A|맞아. 그리고 내가 네 허둥거리는 팔을 오래 보면 웃을 것 같아서.
N|나는 오른발을 내밀었고 태우는 같은 순간 왼발을 내밀었다.
P|네가 반대로 했는데?
A|네 앞에서 보여 주니까 거울 방향이지.
P|그러면 설명에 거울 방향이라고 적어야 해.
A|오. 첫 번째 개선 의견. 인정.
N|태우는 테이프 옆 메모지에 직접 시범 방향을 적었다.
A|이번에는 옆에 서서 해 보자. 하나, 둘, 셋, 넷.
P|잠깐, 내 발이 네 그림자를 밟았어.
A|그림자 밟으면 감점이라는 규칙은 없어.
P|너는 있을 것 같아서.
A|나 그렇게 승부에 미친 사람 아니거든.
N|말을 마친 태우가 벽에 붙은 자신의 최고 점수표를 슬쩍 가렸다.
P|저 숫자는 뭐야?
A|아직 설명 안 한 항목. 지금은 네 무게중심부터.
P|몸으로 알려 줘야 하는 거면 먼저 어떻게 할 건지 말해 줘.
A|어깨 위치만 알려 주려고 했어. 손대는 게 불편하면 시범만 보여 줄게.
N|태우는 대답을 기다리며 한 걸음 떨어졌다.
A|오늘 목표 정하자. 최고 점수, 아니면 끝까지 네 발로 한 곡?
`,[["끝까지 한 곡. 내 속도에 맞춰 가르쳐 줘.",`P|동작은 틀려도 다시 해 볼게. 속도만 조금 낮춰 줘.
A|좋아. 끝까지 가는 걸 오늘 기록으로 삼자.
P|내일은 오늘보다 하나 더 배우면 되겠네.
A|그 말 기억해 둔다. 내일도 올 거라는 뜻이잖아.`,[y("harmony",2)]],["일단 네 시범을 한 번 더 볼래.",`A|좋아. 손은 안 대고 옆에서 보여 줄게.
P|이번에는 발이랑 카운트를 같이 볼게.
A|그렇게 집중해서 보면 내가 조금 긴장하는데.`,[]],["내 점수를 잘 나오게 센서 감도를 바꾸자.",`A|센서 설정을 맞추는 거랑 점수 꾸미는 건 달라.
P|체험 부스니까 재미있으면 되는 줄 알았어.
A|네 실제 움직임이 재미있는 거야. 가짜 기록이 아니라.`,[y("ethics",-5),y("fair",-2)]]]),V("taewoo",2,"화면 바깥의 움직임","media",`
N|미디어실 화면에 흰 점 열두 개가 사람 모양으로 움직였다.
A|이게 아까 내가 춘 거야. 그런데 오른팔이 자꾸 날아가.
P|실제로 날아간 건 아니지?
A|나 아직 팔 두 개 멀쩡히 달려 있어.
N|태우가 양팔을 들어 보이자 화면 속 점 하나가 허리 아래로 떨어졌다.
P|카메라가 관절 위치를 놓친 것 같은데.
A|그래서 센서랑 영상을 같이 비교하는 중이야.
P|이 숫자는 관절의 실제 각도야?
A|카메라 평면에서 추정한 각도. 깊이 정보가 부족하면 오차가 커져.
P|그럼 숫자가 크다고 더 좋은 춤이라는 뜻은 아니겠네.
A|그걸 안내판 첫 줄에 써야 해. 어제도 누가 내 점수로 실력을 매기더라.
P|너도 처음에는 최고 기록 얘기했잖아.
A|내가 먼저 그렇게 말한 건 맞아.
N|태우는 키보드 위에 얹은 손을 잠깐 멈췄다.
A|멋있다는 말을 숫자로 증명하면 더 쉬울 줄 알았거든.
P|막상 숫자가 다른 말을 했어?
A|조명이 어두워지니까 같은 동작인데 점수가 십 점 떨어졌어.
P|춤은 그대로인데?
A|응. 기분은 그대로가 아니었고.
N|태우는 실패 표시가 있는 영상을 다시 재생했다.
P|이 부분, 회전하고 멈추는 순간이 좋다.
A|여긴 점수가 제일 낮은데.
P|나는 네가 멈출 때 숨까지 같이 멈춘 것처럼 보여서 좋았어.
A|숨은 쉬었어. 그런 거 따라 하지 마.
P|알겠어. 그래도 좋았다는 건 취소 안 해.
N|태우가 모니터를 향한 채 입꼬리를 조금 올렸다.
A|그러면 연구 발표는 이렇게 나누자. 측정한 것과 감상한 것.
P|반복 측정의 오차도 따로 보여 주면 좋겠다.
A|나를 같은 곡으로 다섯 번 더 뛰게 만들겠다는 뜻이네.
P|중간에 쉬고, 짧은 구간만.
A|조건이 괜찮아서 반박을 못 하겠어.
N|복도에서 학생 두 명이 들어와 결과 화면을 가리켰다.
S|이걸로 댄스부 센터 뽑으면 되겠다. 완전 객관적이잖아.
A|그렇게 쓸 수 있는 장비는 아니야.
S|그래도 태우가 제일 높게 나오면 홍보는 되지.
N|태우는 대답 대신 발표 슬라이드 제목을 지웠다.
A|{name}, 네가 정해 줘. 이 화면을 뭐라고 소개할까?
P|우리가 실제로 알아낸 것부터 정하자.
A|좋아. 멋있게 보이는 것보다 오래 믿을 수 있는 설명으로.
`,[["측정 범위와 오차를 먼저 쓰고 춤의 평가는 분리하자.",`P|동작을 비교하는 도구라고 적자. 사람의 실력을 결정하는 기계는 아니고.
A|내가 좋아하는 춤까지 숫자에 맡기지는 않겠다는 거네.
P|네가 느끼는 리듬은 네가 설명해 줘.
A|그건 자신 있어. 내 말도 발표 자료가 되는 거잖아.`,[y("ethics",4),y("fair",4)]],["현재 영상 두 개를 나란히 놓고 차이부터 보자.",`A|좋아. 비교할 자료가 있어야 말도 구체적이지.
P|조명 조건도 화면 아래에 적어 둘게.
A|이번에는 편집 끝나면 같이 확인하자.`,[y("fair",2)]],["네 최고 점수만 공개하면 센터라는 걸 증명할 수 있어.",`A|그럼 낮게 나온 나도 내가 아닌 게 돼?
P|좋은 결과를 보여 주자는 뜻이었어.
A|조건을 숨겨야 좋은 결과가 된다면 그건 내 실력의 증거가 아니야.`,[y("ethics",-7),y("fair",-3)]]]),V("taewoo",3,"센터가 없는 대형","auditorium",`
N|대강당 무대에는 서로 다른 색의 동선 테이프가 붙어 있었다.
A|빨간색은 내 동선이고 파란색은 다른 센터 후보 동선.
P|센터가 둘이야?
A|아직 결정 안 됐어. 마지막 곡에서 누가 앞에 설지.
P|페어에서 했던 구성과 달라졌네.
A|우수 전시 추가 공연은 객석도 무대 폭도 달라. 그대로 옮기면 부딪혀.
N|태우는 무대 끝에서 객석을 내려다봤다.
A|내가 잘하는 부분은 알아. 빠른 동작, 큰 방향 전환.
P|다른 후보는?
A|작은 동작을 정교하게 맞춰. 군무 중심도 잘 잡고.
P|상대 장점을 꽤 자세히 봤네.
A|보는 건 보지. 질투난다고 눈을 감는 건 손해잖아.
N|부장이 다가와 카메라를 삼각대에 고정했다.
S|오늘 두 안을 다 찍어서 전체가 보고 정하자.
A|좋아. 대신 촬영 위치랑 음악 속도는 같게 해 줘.
S|그건 이미 적어 놨어. 개인 평가표는 외부 공유하지 말고.
P|나는 촬영 기록만 도울게.
N|두 번의 리허설이 끝날 때까지 태우는 한 번도 객석을 보지 않았다.
A|어땠어?
P|마지막에 돌아서는 동작은 네 안이 더 또렷했어.
A|그러면 나지?
P|그런데 두 번째 줄은 다른 안에서 더 잘 보였어.
N|태우가 물병 뚜껑을 세 번 돌렸다.
A|조금만 더 망설였다가 말하면 안 됐냐.
P|좋은 점도 말했잖아.
A|알아. 그래서 화내기도 애매해.
P|내가 네 편인 것과 모든 평가를 네 쪽으로 만드는 건 다를 수 있어.
A|그 말 오늘 좀 밉다.
N|잠깐 침묵이 흐른 뒤 태우가 촬영 영상을 먼저 열었다.
A|근데 두 번째 줄이 가려지는 건 진짜네.
P|첫 곡은 네 안, 마지막 곡은 다른 안으로 나눌 수도 있겠는데.
A|곡별 강점을 살리자는 거지?
P|팀이 판단할 수 있게 제안만 해 보자.
A|센터를 지키는 방법이 앞자리만 차지하는 건 아닐 수도 있겠다.
N|부장이 투표 전에 의견을 받겠다고 손을 들었다.
A|{name}, 내 친구로 온 거 알아. 그래도 기록 담당이면 기록대로 말해 줘.
P|듣고 나서 서운할 수도 있어.
A|응. 서운한 건 나중에 내가 말할게. 지금은 다른 애들도 춤추고 있으니까.
`,[["두 안의 장단점을 공개하고 팀이 대형을 결정하게 한다.",`P|후보 이름보다 어느 구간이 잘 보였는지부터 설명할게.
A|좋아. 내가 놓친 부분도 빼지 마.
P|투표 끝나고 네 기분도 따로 들을게.
A|그 약속은 좋네. 지더라도 말할 자리는 남는 거니까.`,[y("harmony",4),y("ethics",3)]],["태우에게 먼저 촬영 영상을 함께 검토하자고 한다.",`A|지금 보고 나면 내가 말할 때 덜 방어적일 것 같아.
P|다른 후보에게도 같은 확인 시간을 줘야 해.
A|응. 그건 나도 동의해.`,[y("harmony",1)]],["다른 후보의 실수 장면을 단체 채팅에 올린다.",`A|왜 그 짧은 구간만 잘라 보냈어?
P|네 안이 낫다는 걸 보여 주려고.
A|내가 이겨도 그 친구를 깎아 만든 자리에는 못 서. 지금 삭제하고 설명해.`,[y("harmony",-8),y("ethics",-6)]]]),V("taewoo",4,"숨겨 둔 통증","dance",`
N|연습실 음악은 켜져 있었지만 태우는 벽에 기대 앉아 있었다.
P|쉬는 시간?
A|쉬는 것처럼 보이면 성공이네.
P|그 말은 별로 안심이 안 되는데.
N|태우가 발을 끌어당기는 순간 표정이 일그러졌다.
P|발목 아파?
A|조금. 워밍업하면 괜찮을 줄 알았어.
P|언제부터?
A|어제 돌아서는 동작 연습하고 나서. 그런데 아직 걸을 수 있잖아.
P|걸을 수 있다는 게 공연해도 된다는 뜻인지는 내가 모르겠어.
A|나도 알아. 모르는 척하고 싶은 거지.
N|나는 음악부터 멈췄다. 갑자기 연습실 시계 소리가 크게 들렸다.
A|곡까지 끄면 진짜 환자 된 것 같잖아.
P|지금 네 말을 들으려고 끈 거야.
A|다들 내가 컨디션 좋은 줄 알아. 센터 배치도 거의 정해졌고.
P|말하면 자리 뺏길까 봐?
A|처음에는 그랬어. 이제는 내가 빠져서 동선 다 바꾸는 게 무서워.
P|뒤늦게 알게 되면 바꿀 시간은 더 줄겠지.
A|그렇게 논리적으로 말하면 반박을 못 하잖아.
P|논쟁 이기러 온 건 아니야.
A|그래도 네 말 듣고 나면 내가 숨긴 게 더 잘 보여.
N|태우는 운동화 끈에 손을 뻗었다가 멈췄다.
A|인터넷에 테이핑하면 버틸 수 있다는 글이 있던데.
P|그걸로 네 상태를 알 수는 없을 것 같아.
A|오늘 보건 선생님 계시겠지?
P|확인해 볼게. 필요하면 담당 선생님께 연락하고.
A|내가 설명할게. 너는 옆에 있어 줘.
P|그럴게.
N|태우가 연락창을 열었지만 손가락은 전송 버튼 위에서 멈췄다.
A|만약 쉬라고 하면 공연 못 하는 거잖아.
P|그럴 수도 있어. 아직 정해진 건 아니고.
A|괜찮다는 말을 해 줄 줄 알았어.
P|모르는 일을 괜찮다고 말하면 네가 나를 믿는 게 더 위험해질 것 같아서.
N|태우가 한참 나를 보다가 휴대전화를 무릎에 내려놓았다.
A|나 지금 멋없지?
P|아파도 멋있어야 하는 건 아니잖아.
A|그 말은 좀 반칙이다.
A|나한테 지금 제일 필요한 게 뭔지 같이 정해 줄래?
`,[["연습을 멈추고 교사에게 상태를 알린 뒤 전문적인 확인을 받자.",`P|일단 더 움직이지 말자. 공연 결정은 상태를 확인한 뒤에 하고.
A|내가 먼저 선생님께 말할게. 숨긴 시간까지.
P|원하면 옆에 있을게.
A|원해. 내가 잘 춰서가 아니라 아플 때도 같이 있어 줘.`,[y("safety",8),y("harmony",2)]],["조용한 곳에서 쉬면서 담당 교사에게 연락하자.",`A|나 혼자 대충 판단하고 끝내지는 않을게.
P|좋아. 선생님 답이 올 때까지 오늘 연습은 멈추자.
A|음악 꺼 둬서 고마워. 지금은 카운트가 조금 무서워.`,[y("safety",4)]],["테이핑으로 숨기고 무대까지만 버티자.",`A|내가 하고 싶은 말인 건 맞아. 그래서 더 듣고 싶지 않았어.
P|공연이 중요하니까 잠깐만 버텨 보자는 거야.
A|내가 멈추면 네가 실망할까 봐 더 숨기게 되잖아. 그건 도와주는 게 아니야.`,[y("safety",-12),y("harmony",-3)]]]),V("taewoo",5,"여덟 번째 카운트","auditorium",`
N|추가 공연 리허설 날, 태우의 신발은 연습화가 아닌 편한 운동화였다.
A|오늘 점프랑 빠른 회전은 빼기로 했어.
P|몸 상태 확인하고 결정한 거지?
A|응. 담당 선생님께도 얘기했어. 아프면 바로 중단하는 걸로.
P|그럼 나는 중단 신호 담당 할까?
A|신호는 내가 먼저 할게. 너는 음악이랑 팀이 알아듣게 도와줘.
N|태우는 손바닥을 위로 펴 보이며 멈춤 신호를 설명했다.
A|이거. 동작 실수랑 헷갈리지 않게 크게.
P|연습 때도 똑같이 쓰자.
A|부장한테도 확인받았어. 마지막 구간은 다른 애가 앞에 설 거야.
P|기분 어때?
A|시원하다고 하면 거짓말이지. 아직 좀 억울해.
P|그 마음까지 없어져야 교대한 건 아니니까.
A|내가 성숙한 말만 할 줄 알고 지켜보는 건 아니지?
P|아니. 평소처럼 좀 투덜거려도 돼.
N|태우가 볼을 부풀렸다가 웃음을 터뜨렸다.
A|좋아. 마지막 조명은 내가 제일 잘 받는데! 그게 제일 억울해!
P|그럼 조명감독에게 분산해 달라고 제안해 볼까?
A|그건 괜찮은 투덜거림이었네. 다른 애들도 얼굴 보여야지.
N|팀원들이 들어와 수정된 동선을 함께 확인했다.
S|태우야, 여기서 내가 앞으로 나가면 팔이 겹쳐.
A|맞아. 내가 반 박자 먼저 옆으로 빠질게.
S|네가 괜찮으면 뒤에서 카운트해 줘. 네 목소리가 제일 잘 들려.
N|태우는 바로 대답하지 않고 테이프를 눌러 붙였다.
A|내가 앞에 없으면 별로 필요 없을 줄 알았는데.
P|그 생각이랑 방금 말은 꽤 다르네.
A|내 목소리 시끄럽다고 하더니 이런 때는 잘 들린대.
P|좋은 뜻으로 시끄러운 것 같아.
N|리허설 음악이 시작되자 태우는 무대 옆에서 손가락으로 박자를 세었다.
A|다섯, 여섯, 일곱, 여덟. 시선 올려!
N|앞줄이 회전하는 순간 팀 전체의 팔이 같은 높이로 멈췄다.
P|지금은 네가 안 춰도 네 카운트가 보인다.
A|이상한 칭찬인데 마음에 드네.
N|다음 순서 안내가 스피커에서 흘러나왔다.
A|직접 서고 싶은 마음은 아직 있어. 그런데 오늘 다 해야 하는 건 아니지?
P|네가 세운 한계를 무대 앞에서도 지킬 수 있을까?
A|지키고 싶어. 그러니까 사람들이 아쉬워해도 같이 확인해 줘.
A|오늘 우리 공연 목표를 뭐라고 적을까?
`,[["정한 안전 범위 안에서 팀이 끝까지 함께하는 공연.",`P|교대도 중단도 준비된 선택에 넣자. 성공은 한 장면이 아니니까.
A|좋아. 내가 내려와도 실패 표시 붙이지 마.
P|무대 밖 카운트도 기록에 남길게.
A|그러면 마지막 여덟까지 내 몫은 있네.`,[y("safety",5),y("fair",4),y("harmony",4)]],["오늘 정한 수정 안무를 먼저 천천히 확인하자.",`A|지금 할 수 있는 것부터 보자는 거네.
P|불편하면 바로 신호 줘. 이유 설명은 나중에 해도 돼.
A|그 말 들으니 손들기가 조금 쉬워졌어.`,[y("safety",3),y("fair",2)]],["관객이 원하면 마지막 점프 정도는 넣어야지.",`A|어제 빼기로 했던 이유가 관객 앞에서 없어지지는 않아.
P|한 번만 하면 분위기가 살 것 같아서.
A|내가 다칠 위험보다 분위기가 중요하면 오늘 음악 맡기기 어렵겠어.`,[y("safety",-10),y("harmony",-5)]]]),V("taewoo",6,"불이 꺼진 뒤의 박자","auditorium",`
N|공연이 끝난 대강당에는 테이프와 접힌 의자만 남아 있었다.
A|나 청소하러 온 줄 알았지?
P|손에 쓰레기봉투 들고 있잖아.
A|그것도 맞고. 겸사겸사야.
N|태우가 무대 아래에 앉으며 자기 옆 빈자리를 가볍게 두드렸다.
P|발목은 어때?
A|정해 둔 만큼만 움직였고 쉬는 중이야. 걱정할 일 있으면 말할게.
P|알겠어. 계속 묻지는 않을게.
A|한 번 묻는 건 좋았어. 계속 괜찮다고 증명하는 건 피곤하지만.
N|나는 쓰레기봉투를 내려놓고 조금 떨어져 앉았다.
A|그렇게 멀리 앉으면 말 크게 해야 하잖아.
P|가까이 앉아도 돼?
A|응. 오늘은 내가 허락한 접근이야.
P|발표 제목 같네.
A|너랑 오래 있으면 나도 말이 그렇게 돼.
N|태우는 공연 순서표 뒷면에 카운트 네 줄을 적었다.
A|처음 너 춤췄던 거 기억나?
P|오른발이 어느 쪽인지 갑자기 어려워졌던 날.
A|두 박자씩 늦는데 끝까지는 하더라.
P|네가 끝까지 세 줬으니까.
A|그때는 그냥 못하니까 봐 줬어.
P|지금은?
N|태우의 펜 끝이 여덟이라는 숫자 아래에서 멈췄다.
A|네가 없어도 춤은 출 수 있어.
P|그렇겠지. 내가 센터 시켜 준 것도 아니고.
A|그런데 끝나고 제일 먼저 네 표정을 보고 싶어.
P|점수 알려 달라고?
A|오늘은 그런 농담 안 해도 되는데.
N|나는 웃음을 멈추고 태우 쪽으로 몸을 돌렸다.
A|내가 잘했을 때만 좋아해 주는 거면 대답하지 마.
A|못했을 때까지 무조건 칭찬해 달라는 말도 아니야.
P|네가 속상해할 때 같이 들어 줄 사람을 원하는 거야?
A|응. 그리고 기쁠 때 가장 먼저 자랑해도 되는 사람.
N|태우가 순서표를 접어 내 쪽에 내려놓았다.
A|나 너 좋아해. 경쟁에서 이기고 싶어서가 아니라.
A|이제 네 대답을 들을 차례인 건 알겠는데 심장이 너무 시끄럽다.
P|조금 기다려도 괜찮아?
A|기다릴게. 대신 멋진 답보다 진짜 답을 해 줘.
`,[["무대 위와 아래의 너를 모두 알아 가고 싶어. 나도 좋아해.",`P|언제나 같은 기분은 아니어도 그때마다 말하고 싶어. 너랑.
A|나 질투도 하고 서운해할 때도 있을 텐데.
P|그것도 듣고 내 마음도 말할게.
A|좋아. 이번에는 네 속도에 맞춰 시작하자.`,[y("harmony",2)]],["너와 더 가까워지고 싶어. 서두르지 말고 만나 보자.",`A|급하게 결론 내리지 말자는 거지?
P|응. 오늘 네가 해 준 말은 가볍게 받지 않을게.
A|그러면 다음 연습 끝나고 같이 집에 가. 그 정도부터.`,[]],["다음 공연에서 센터를 따면 사귀자.",`A|농담으로도 그 조건은 싫어.
P|너한테 동기부여가 될 줄 알았어.
A|내 마음을 상으로 걸지 마. 나 오늘 춤 못 추는 나까지 말했잖아.`,[y("harmony",-4)]]]),V("taehun",1,"관측일지와 시집","observatory",`
N|기상관측실 책상에는 측정 시각이 적힌 표와 얇은 시집이 나란히 놓여 있었다.
A|문 조금만 천천히 닫아 줘. 종이가 날아가서 순서 다시 맞췄거든.
P|창문은 닫아도 돼?
A|응. 이건 실내 정리 작업이라 창문 상태가 바깥 관측값에 영향을 주지는 않아.
P|네가 바로 구분해 주니까 괜히 엄숙해지네.
A|정확히 쓰는 게 습관이야. 모르는 건 모른다고 남기고.
N|태훈은 자를 대고 관측일지의 빈 칸에 선을 그었다.
P|여기는 왜 비었어?
A|센서 통신이 끊겼던 시간. 추정으로 채워도 원자료처럼 표시하면 안 돼.
P|그래프에서 선이 끊기겠네.
A|그것도 그날 있었던 일이니까 보여 줘야지.
N|페이지 한쪽에 적힌 작은 문장이 눈에 들어왔다.
P|구름이 비어 있는 자리에 이름을 놓았다…… 이것도 관측 기록이야?
A|아, 그건 옆 칸을 잘못 썼어.
P|시야?
A|초안. 기상자료 정리하다가 문장이 생각나면 잠깐 적어 둬.
P|과학이랑 문학을 번갈아 하면 안 헷갈려?
A|표 머리말만 제대로 쓰면. 바깥 날씨랑 내 기분은 별개니까.
N|태훈이 시집을 닫자 책갈피 대신 넣은 구름 사진이 나왔다.
A|권운 사진이야. 높은 곳의 얼음 결정으로 이뤄진 구름.
P|이걸 보면 무슨 문장이 떠올라?
A|지워지는 데 오래 걸리는 연필 자국.
P|과학 설명보다 기억하기 쉬운데.
A|그렇게 기억해도 괜찮아. 실제 구름이 연필 자국은 아니라는 것만 알면.
N|태훈은 웃으며 사진 뒷면의 날짜를 다시 확인했다.
P|나도 사진 한 장 골라 봐도 돼?
A|응. 공개 전시용 폴더는 여기. 개인 노트는 아직 정리 중이고.
P|개인 노트는 열지 않을게.
A|먼저 그렇게 말해 주니까 편하다.
N|나는 회색 구름 밑으로 운동장 선이 보이는 사진을 골랐다.
P|이건 별일 없어 보여서 좋아.
A|그런 사진 고르는 사람은 드물어. 다들 노을이나 번개부터 보는데.
P|우리가 사는 날은 대부분 이런 날이잖아.
A|그 말 적어도 돼? 네가 했다고 표시할게.
P|좋아. 그런데 내 이름 너무 크게 쓰지는 마.
A|주석에 작게. 사진은 크게.
N|태훈이 새 전시판 맨 위에 관측과 감상이라는 두 칸을 그렸다.
A|이 두 칸을 같은 페이지에 둬도 사람들이 구분할 수 있을까?
P|우리가 어떻게 안내하느냐에 달렸겠지.
`,[["수치에는 출처를, 시에는 네 이름을 적고 나란히 보여 주자.",`P|어떤 문장이 측정이고 어떤 문장이 감상인지 표시하면 둘 다 읽을 수 있어.
A|한쪽을 치우지 않고도 설명할 수 있다는 거네.
P|네가 둘 다 좋아하는 이유도 같이 적어 줘.
A|그 문장은 좀 오래 걸릴 것 같아. 그래도 쓰고 싶다.`,[y("ethics",3),y("fair",3)]],["사진 한 장에 짧은 문장부터 붙여 보자.",`A|작게 시험해 보고 읽는 사람 반응을 보자는 거지?
P|응. 한 번에 전시 전체를 결정하지 않아도 되니까.
A|그럼 네가 고른 흐린 운동장부터 해 볼게.`,[y("fair",2)]],["빈 관측값을 시의 표현에 맞게 채우면 더 예쁘겠다.",`A|그렇게 하면 문장도 자료도 믿을 수 없게 돼.
P|전시가 너무 비어 보여서 말한 거야.
A|모르는 부분을 비워 둘 용기도 보여 주고 싶어. 내 시로 가리지는 마.`,[y("ethics",-7),y("fair",-2)]]]),V("taehun",2,"비가 오지 않은 오후","classroom",`
N|칠판 한쪽에 있던 우산 안내가 점심시간까지 남아 있었다.
S|태훈아, 비 올 가능성 높다며. 지금 햇빛 엄청 나는데?
A|예보에 나온 시간대가 아직 끝난 건 아니야.
S|우산 괜히 들고 왔네. 문학소녀의 감이 틀린 건가.
A|감으로 쓴 건 아니고. 자료 출처도 아래에 적어 놨어.
N|태훈의 목소리는 차분했지만 지우개를 쥔 손이 굳어 있었다.
P|밖에 나가서 잠깐 걸을래?
A|응. 지금 설명을 길게 하면 변명처럼 들릴 것 같아.
N|복도로 나온 태훈이 창문에 손바닥을 대지 않고 바깥 하늘을 살폈다.
P|기분 나빴어?
A|틀렸다는 말보다 내가 아무렇게나 말했다는 식이어서.
P|가능성이 높아도 비가 안 올 수는 있지.
A|맞아. 그렇다고 예측은 언제나 옳다고 하면 안 되고.
P|그럼 어떻게 잘했는지 평가해?
A|조건을 정해서 여러 예보와 결과를 모아 봐야 해.
P|한 번 우산을 안 썼다고 다 판단할 수는 없겠네.
A|응. 같은 확률을 냈을 때 실제로 얼마나 자주 일어났는지도 보고.
N|태훈은 휴대전화에 저장된 예보 발표 시각을 보여 주었다.
A|이건 어젯밤 자료. 아침에 갱신된 걸 다시 확인했어야 했는데 놓쳤어.
P|그 부분은 고칠 수 있겠다.
A|그래. 확률이니까 괜찮다는 말 뒤에 숨기고 싶지는 않아.
P|칠판에 발표 시각이랑 갱신 시간을 같이 적자.
A|그러면 다음 사람이 조건도 알겠네.
N|창밖에서 학생들이 우산을 접으며 웃고 지나갔다.
A|나 사실 비가 왔으면 좋겠다고 생각했어.
P|네 말이 맞았으면 해서?
A|응. 누가 젖을지도 모르는데. 그 생각이 별로 마음에 안 들더라.
P|순간 그런 생각이 났다고 그대로 행동한 건 아니잖아.
A|그래도 들여다볼 필요는 있어. 내가 좋아하는 과학은 승부표가 아니니까.
N|태훈은 웃음이 나지 않는 얼굴로 웃으려다가 그만두었다.
P|지금 억지로 괜찮은 척 안 해도 돼.
A|그 말은 고마워. 설명하려고 입을 열면 감정도 정리된 줄 알더라.
P|아직 속상하구나.
A|응. 조금 많이.
N|나는 빈 게시판 옆에 함께 서서 태훈이 말을 고를 때까지 기다렸다.
A|공지 새로 쓰려는데, 첫 문장은 어떻게 하면 좋을까?
P|갱신 내용을 알리고 네가 확인하지 못한 부분도 적으면 어때.
A|그러면 놀린 애들한테도 변명 대신 자료를 보여 줄 수 있겠다.
A|같이 들어가 줄래? 말은 내가 할게.
`,[["갱신된 예보와 놓친 확인 절차를 태훈이 직접 설명하도록 돕는다.",`P|확률 설명이랑 네가 놓친 부분을 나눠서 적자.
A|응. 잘못한 것만큼 말하고 하지 않은 잘못까지 떠안지는 않을게.
P|나는 질문받은 자료 페이지를 열어 둘게.
A|그 정도가 딱 좋아. 오늘은 내 목소리로 설명하고 싶어.`,[y("ethics",4),y("harmony",3)]],["공지 갱신부터 돕고 친구들과의 대화는 잠시 미룬다.",`A|지금 필요한 정보는 먼저 바꾸는 게 맞겠다.
P|네가 덜 속상할 때 설명해도 돼.
A|그러면 발표 시각부터 적어 줘. 나머지는 내가 정리할게.`,[y("fair",2)]],["친구들 앞에서 태훈이 원래 예보를 틀린 적 없다고 우긴다.",`A|그건 사실이 아니야. 나도 틀리고 확인을 놓치기도 해.
P|네 편을 들어 주려고 한 말이야.
A|틀리지 않는 사람으로 만들어 놓으면 다음에는 더 말하기 무서워져.`,[y("ethics",-6),y("harmony",-3)]]]),V("taehun",3,"익명의 문장","library",`
N|도서관 신간대 옆에 교내 문예지가 쌓여 있었다.
P|기압골의 편지. 제목이 네가 좋아할 것 같은데.
A|응. 이번에 새로 나온 호야.
P|필명도 기압골이네. 익명인데 엄청 뚜렷해.
A|모르는 척해 주는 사람도 있을 거라고 믿고 쓴 건데.
N|태훈이 책장을 넘기다가 손가락을 거뒀다.
P|읽어도 돼?
A|발행된 글은 읽어도 돼. 내가 보여 주려고 낸 거니까.
N|나는 허락받은 페이지를 펼쳤다. 시는 우산이 아니라 기다림에 관한 내용이었다.
P|도착 시각이 적히지 않은 정류장에서 누군가를 기다리는 이야기네.
A|너는 그렇게 읽었구나.
P|정답이 따로 있어?
A|내가 쓴 의도는 있지만 읽는 느낌까지 정답 하나로 묶고 싶지는 않아.
P|여기 두 박자 늦은 발소리는 누구야?
A|네 춤 얘기는 아니야.
P|그렇게 빨리 부정하면 더 의심되는데.
N|태훈은 문예지를 세우고 얼굴 아래쪽을 가렸다.
A|그 문장은 소리 내서 읽지 말아 줘.
P|알겠어. 그냥 조용히 읽을게.
N|옆자리 학생이 우리의 책을 보고 웃으며 다가왔다.
S|기압골이 태훈이지? 이거 고백 시라는 소문 있던데.
A|글을 냈지 취재 신청서를 낸 건 아닌데.
S|대상이 누군지만 알려 줘. 1반이야?
P|도서관이니까 목소리 조금 낮추자.
N|학생이 어깨를 으쓱하고 돌아간 뒤 태훈은 책 모서리를 폈다.
A|익명으로 냈으니까 아무도 나라고 생각 안 할 줄 알았던 건 아니야.
P|그래도 모두가 네 사생활까지 물어도 된다는 뜻은 아니지.
A|응. 좋아하는 마음이 있다면 내가 말할 시간도 남겨 줬으면 해.
P|나도 방금 누구냐고 물으려고 했어.
A|그럴 것 같아서 긴장했어.
N|창밖에서 구름 그림자가 책상 끝을 천천히 지나갔다.
P|나는 마지막 문장이 좋아. 기다림을 날씨 탓으로 돌리지 않는 부분.
A|거기 세 번 고쳤어. 상대를 기다리게 만든 게 비 때문은 아니니까.
P|기다리는 사람도 떠날 수 있다는 말처럼 들려.
A|맞아. 그래서 더 자기 마음으로 남아 있는 거고.
N|태훈은 처음으로 문예지를 우리 사이에 평평하게 놓았다.
A|감상을 적는 칸이 있어. 한 줄만 남겨 줄래?
P|누가 읽는 칸이야?
A|편집부랑 나. 공개할지는 나중에 다시 동의를 받는대.
`,[["시의 상대를 캐묻지 않고 마음에 남은 문장에 감상을 적는다.",`P|누군가를 기다려도 자기 하루를 살 수 있다는 부분이 좋았어.
A|내가 쓰고 싶었던 마음이 거기 있어.
P|누구 얘긴지는 네가 말하고 싶을 때 들을게.
A|그러면 언젠가 말하는 장면을 조금 더 천천히 상상할 수 있겠다.`,[y("harmony",2)]],["좋았다고 말하고 문예지 한 권을 받아 간다.",`A|반납 안 해도 돼. 배포용이야.
P|다시 읽고 나서 더 제대로 감상 말할게.
A|천천히 읽어. 그런 독자가 한 명은 있으면 했거든.`,[]],["반 채팅에 시를 찍어 보내고 자기 이야기인지 물어본다.",`A|발행된 글이라고 내 마음까지 네 마음대로 발표해도 되는 건 아니야.
P|다들 축하해 줄 줄 알았어.
A|난 고백한 적 없어. 사람들 반응보다 내가 말할 순서를 지켜 줬으면 했어.`,[y("harmony",-6),y("reputation",-3)]]]),V("taehun",4,"두 개의 마감","library",`
N|도서관 벽시계 아래, 태훈의 일정표에는 서로 다른 색의 마감이 겹쳐 있었다.
A|파란색은 기상자료 보고서. 초록색은 교내 산문 공모 마감.
P|둘 다 내일이네.
A|그래서 지금 내가 조금 비효율적으로 보일 수 있어.
P|이미 열어 둔 문서가 여섯 개야.
A|일곱 개였어. 한 개 닫았으니까 발전했지.
N|태훈은 농담한 뒤 피곤한 눈을 손등으로 문질렀다.
P|보고서는 어느 정도 됐어?
A|자료 검토는 끝났고 오차 설명을 써야 해. 산문은 결말이 없어.
P|왜 마감이 겹치게 됐어?
A|보고서 일정이 바뀌었어. 그래도 공모를 포기하고 싶지 않았고.
P|둘 다 좋아하는 게 일정을 늘려 주지는 않으니까 어렵겠다.
A|맞아. 누가 둘 다 할 수 있다고 말해도 시간이 생기진 않아.
N|태훈이 연필 두 개를 책상 위에 가지런히 놓았다.
A|담당 선생님은 이번 주엔 보고서를 우선하라고 하셨어.
P|팀 일정이 있으니까?
A|응. 틀린 말씀은 아니야. 같이 하는 사람을 기다리게 할 수는 없지.
P|산문은 다음 기회에 내는 방법도 있겠네.
A|그렇게 정할 수도 있어. 그런데 내가 문학을 못 버려서 민폐라고 생각하진 않았으면 해.
P|해야 할 순서를 정하는 것과 좋아하는 걸 버리는 건 다른 일이잖아.
N|태훈은 잠깐 모니터를 끄고 나를 바라봤다.
A|그 문장 오늘 제일 필요했어.
P|보고서에서 내가 확인할 수 있는 부분을 나눠 줘.
A|그래프의 축과 단위 검토는 같이 해도 돼. 결론은 내가 쓰고.
P|산문은 네가 쓰고 싶은 핵심 문장부터 남기자.
A|자료를 옮겨 붙여 두 일을 한 번에 했다고 할 수는 없겠지?
P|주제가 겹쳐도 제출 목적과 규칙은 각각 확인해야 해.
A|맞아. 산문 공모는 본인이 쓴 미발표 글이어야 하고.
N|태훈이 새 종이에 오늘 끝낼 일과 나중에 할 일을 나눴다.
A|이렇게 적으니까 무섭게 많지는 않네. 그냥 조금 많아.
P|조금이라는 표현의 오차 범위가 큰데.
A|그건 감상 칸에 적을게.
N|우리는 웃다가 자습실이라는 걸 떠올리고 동시에 목소리를 낮췄다.
A|너한테까지 내가 둘 다 좋아한다는 걸 증명하려고 했던 것 같아.
P|증명하느라 잠을 아예 포기할 필요는 없어.
A|응. 보고서 제출하고 남는 시간을 계산해 볼래.
P|마감 조정이 가능한지도 담당 선생님께 물을 수 있지.
A|대신 부탁하지는 마. 일정 책임은 내가 설명하고 싶어.
A|너는 내 일정표를 같이 봐 줄래?
`,[["팀 마감을 지키도록 작업을 나누고 나머지는 태훈이 결정하게 한다.",`P|내가 검토한 부분은 이름을 남길게. 나머지 글과 제출 결정은 네 몫이고.
A|도움을 받았다고 내 선택까지 넘기지는 않아도 되네.
P|오늘 못 끝내도 네가 문학을 덜 좋아하게 된 건 아니야.
A|알겠어. 그럼 먼저 축 단위를 같이 보자.`,[y("ethics",3),y("fair",3)]],["보고서 검토만 돕고 공모 일정은 태훈에게 맡긴다.",`A|그것만 해 줘도 충분해. 한꺼번에 다 부탁할 수는 없으니까.
P|검토 결과는 표시해 둘게. 최종 확인은 네가 하고.
A|응. 내 이름으로 내는 건 끝까지 내가 읽을게.`,[y("fair",2)]],["산문 파일을 대신 제출하고 일정이 해결됐다고 알려 준다.",`A|내가 결말을 안 썼다고 했잖아. 왜 제출했어?
P|마감은 놓치지 않게 해 주고 싶었어.
A|내 선택을 빼고 일정만 맞추면 그건 내 작품을 도운 게 아니야.`,[y("ethics",-6),y("harmony",-2)]]]),V("taehun",5,"흐린 관측회","observatory",`
N|추가 관측회 당일, 천문대 창문 너머로 구름이 낮고 두껍게 깔렸다.
A|관측 안내를 실내 프로그램으로 바꿔야겠어.
P|조금 기다리면 열릴 가능성은?
A|가능성은 있지. 그런데 학생들을 장비 옆에서 계속 기다리게 할 만큼 높지는 않아.
P|운영을 멈출 기준을 미리 정했었지?
A|응. 담당 선생님과 확인했고 지금은 그 기준에 따라 움직이는 거야.
N|관측 신청 명단에는 방문객 스무 명의 이름이 적혀 있었다.
A|멀리서 왔다는 애도 있는데 실망하겠지.
P|실망한다고 하늘을 보여 줄 수는 없으니까 다른 준비를 하자.
A|실내 강연 파일은 있어. 다만 별사진만 보여 주면 속은 느낌일 것 같아서.
P|별이 안 보이는 이유도 관측의 일부라고 설명하면 어때.
A|구름의 종류, 위성 영상, 빛이 산란되는 이야기까지.
P|우리가 오늘 실제로 확인한 것과 자료 화면을 구분하고.
N|태훈이 프로젝터를 켜자 지난 관측회에서 촬영한 달이 벽에 떠올랐다.
A|이 사진 날짜는 화면 아래 크게 넣자. 오늘 본 것처럼 보이면 안 돼.
P|좋아. 질문 시간이 조금 길어져도 괜찮겠네.
A|내가 모르는 걸 물으면?
P|찾아서 답해 주겠다고 하면 돼. 네가 평소에 하는 말이잖아.
N|첫 방문객이 문을 열고 고개를 내밀었다.
S|오늘 망원경 못 봐요? 예약했는데요.
A|오늘은 구름 때문에 하늘 관측이 어려워요. 변경 안내가 늦어 미안해요.
S|그러면 그냥 돌아가야 해요?
A|실내에서 망원경 구조와 관측사진을 설명할 수 있어요. 참여는 선택이에요.
N|방문객은 잠깐 고민하다 앞자리에 앉았다.
S|별을 못 봐도 망원경 안은 볼 수 있죠?
A|네. 안전하게 분리한 설명용 부품이 있어요.
P|나는 안내 데스크에서 변경 내용을 더 크게 붙일게.
A|고마워. 환불 같은 문의는 담당 선생님께 연결하고. 우리 행사 참가비는 없지만 확인이 필요할 수도 있어.
N|태훈은 준비한 첫 문장을 지우고 새로 썼다.
A|오늘 우리가 볼 수 없는 것부터 이야기하겠습니다.
P|솔직해서 좋다.
A|실패한 날을 예쁜 말로 덮고 싶지는 않아. 대신 여기서 배울 수는 있겠지.
N|두 번째 방문객이 창밖을 보다가 벽의 구름 사진 앞에 멈췄다.
S|저 구름이랑 지금 구름은 왜 모양이 달라요?
A|좋은 질문이에요. 높이와 형성 조건부터 비교해 볼까요?
N|태훈의 목소리가 조금씩 평소의 속도를 되찾았다.
A|{name}, 마지막 안내판 제목 정해 줄래?
P|못 본 별보다 실제로 본 하늘이 제목에 들어가면 좋겠다.
A|나도 그게 좋아. 없는 걸 보여 줬다고 하지는 말자.
`,[["오늘의 구름 관측: 변경 이유와 실제 관측 조건을 함께 안내한다.",`P|하늘을 볼 수 없었던 게 아니라 다른 하늘을 보게 된 거라고 적을게.
A|그 문장은 감상으로 붙이고 구름 조건은 자료로 보여 주자.
P|좋아. 사진 촬영 날짜도 빠짐없이 적을게.
A|이제 나도 오늘 기록을 남기고 싶어졌어.`,[y("safety",5),y("ethics",3),y("fair",4)]],["실내 강연과 장비 설명 시간을 먼저 안내한다.",`A|무엇을 할 수 있는지 정확히 알려 주는 게 우선이지.
P|돌아가는 사람에게도 다음 안내 확인 방법을 알려 줄게.
A|그래. 남아 달라고 무리하게 붙잡지는 말자.`,[y("fair",3),y("safety",2)]],["지난 관측 영상을 실시간 화면처럼 보여 주자고 한다.",`A|오늘 망원경 화면인 척하자는 거야?
P|방문객이 실망하지 않으면 좋겠어서.
A|실망보다 거짓말을 남기고 싶지는 않아. 그 제안은 받지 않을게.`,[y("ethics",-12),y("fair",-4)]]]),V("taehun",6,"별이 없어도","roof",`
N|교사의 허가를 받은 옥상 휴게시간이 십 분 남아 있었다.
A|오늘도 별이 잘 안 보이네.
P|또 구름?
A|얇은 구름도 있고 주변 불빛도 밝아. 눈이 어둠에 적응할 시간도 짧고.
P|그러면 보기 어려운 이유가 세 개네.
A|응. 그래도 올라오길 잘했어.
N|태훈은 난간에서 떨어진 벤치에 앉아 작은 노트를 꺼냈다.
P|새 관측일지야?
A|오늘은 문장 쪽. 겉표지는 똑같아서 헷갈리지?
P|첫 페이지를 보기 전에 물어보는 습관이 생겼어.
A|그 습관 마음에 들어.
N|태훈은 노트를 펼치지 않은 채 양손으로 덮었다.
A|문예지 시에 누구를 기다리는 거냐고 물었던 거 기억나?
P|네가 말하고 싶을 때 들으려고 기다렸어.
A|그래서 말하기 더 어려웠어. 나중이라고 계속 미룰 수 있어서.
P|오늘 안 말해도 괜찮기는 해.
A|응. 그런데 오늘은 내가 말하고 싶어.
N|태훈은 심호흡하고 노트를 뒤집어 놓았다.
A|글을 읽으면 설명 뒤로 숨을 것 같아서 그냥 말할게.
P|들을게.
A|너 기다렸어. 관측실 문이 열릴 때도, 도서관 자리가 비어 있을 때도.
P|처음부터?
A|아니. 처음에는 자료 정리 잘하는 애라서 좋았어.
A|그러다가 내가 틀린 날에도 와 주는 게 좋았고.
A|내가 쓴 문장을 정답으로 풀려고 하지 않는 것도 좋았어.
N|태훈은 말할 때마다 무릎 위 손가락을 하나씩 폈다.
A|근거를 너무 많이 대고 있지?
P|오늘은 관측 보고서가 아니니까 결론부터 말해도 돼.
A|좋아해, {name}. 확률로 우회해서 말하고 싶지 않을 만큼.
N|저녁 바람이 벤치 아래 떨어진 잎을 한 바퀴 돌렸다.
P|나한테 대답할 시간을 줄 수 있어?
A|물론. 내가 좋아한다고 네 마음까지 정해지는 건 아니니까.
P|네가 이런 말을 준비한 줄 몰랐어.
A|준비한 문장은 다 잊어버렸어. 지금 말은 처음 쓰는 거야.
N|옥상 출입문 쪽에서 종료 시간을 알리는 안내음이 짧게 울렸다.
A|삼 분 남았대. 급하게 답하라는 뜻은 아니야.
P|같이 내려갈 수는 있지?
A|응. 오늘 제일 보고 싶었던 건 하늘이 아니었으니까.
A|네가 어떤 대답을 하든 이건 내가 선택해서 말한 마음이야.
`,[["나도 너를 좋아해. 모르는 내일을 같이 알아 가고 싶어.",`P|항상 맑을 거라고 약속할 수는 없어도 그날의 마음은 숨기지 않을게.
A|미래를 정확히 맞혀 달라는 건 아니야. 나랑 관측해 주면 돼.
P|오늘 첫 기록은 같이 내려간 날로 하자.
A|좋아. 감상 칸에는 아주 길게 적어도 되겠다.`,[y("harmony",2)]],["너와 더 가까워지고 싶어. 서두르지 않고 알아 가자.",`A|그 대답을 미뤄진 거절이라고 혼자 해석하지 않을게.
P|내 마음이 정리되면 직접 말하겠다고 약속할 수 있어.
A|그럼 오늘은 같이 내려가자. 계단에서도 할 말은 많으니까.`,[]],["정말 좋아한다면 다른 취미보다 나를 우선해 줘.",`A|내가 좋아하는 것들을 버려야 네 말을 믿을 수 있는 거야?
P|내가 얼마나 중요한지 알고 싶었어.
A|중요한 사람을 위해 나를 지워야 한다면 그 관계는 시작하기 어려워.`,[y("harmony",-4)]]]),V("seoyul",1,"미완성 화면","band",`
N|밴드연습실 키보드 위에 악보 대신 색상표가 펼쳐져 있었다.
A|가운데 도만 누르지 말아 줘. 거기 키가 잠깐 예민해.
P|건반도 기분이 있어?
A|접점이 불안정한 거야. 기분이라고 쓰면 수리 기사님이 곤란하겠지.
N|서율은 웃으며 키보드 전원을 끄고 노트북을 돌려 보여 주었다.
A|오늘은 소리보다 화면을 보려고 불렀어.
P|추가 공연에 쓸 영상?
A|응. 완성본은 아니야. 오른쪽 위에 초안이라고 표시해 뒀어.
P|그럼 내 휴대전화는 넣어 둘게.
A|아직 촬영하지 말라고 말도 안 했는데.
P|네가 보여 주는 거랑 내가 가져가는 건 다른 것 같아서.
N|서율이 잠깐 나를 보다가 재생 버튼을 눌렀다.
A|그 차이를 알아 주면 설명할 게 많이 줄어.
N|화면에서 가느다란 빛이 음의 길이에 맞춰 늘어났다.
P|이건 소리 크기를 그대로 표시하는 거야?
A|일부는 음량 값에서 만들고 나머지는 내가 편집했어.
P|그럼 전부 측정 데이터라고 설명하면 안 되겠네.
A|맞아. 데이터 시각화 구간이랑 예술적 해석 구간을 나누려고.
N|어두운 화면 아래 작게 두 가지 범례가 나타났다.
P|세계 보컬이 들어오면 어떤 색이 돼?
A|아직 모르겠어. 사람이 높은 음을 낸다고 무조건 밝은색은 아닐 테니까.
P|너는 사람을 색으로 외운다고 했지?
A|외운다기보다 그때의 인상을 그렇게 적어 둬.
P|나는 무슨 색이었어?
A|처음엔 연필심 색. 지금은 수정 중.
P|좋아진 건지 나빠진 건지 알 수가 없네.
A|색에 순위는 없어. 네가 순위를 붙이려는 표정은 잘 알겠지만.
N|서율은 화면을 일시 정지하고 흰 여백을 확대했다.
A|여기가 고민이야. 아무것도 안 나오는 시간이 십 초 있어.
P|고장 났다고 생각할 수도 있겠다.
A|응. 그런데 음악이 멈추지 않아서 나는 비어 있다고 느끼지 않아.
P|모든 순간에 그림을 채울 필요는 없을 수도 있지.
A|그 말을 관객에게 강요하고 싶지는 않고. 볼 방법을 안내하고 싶어.
N|복도에서 세계의 노랫소리가 잠깐 들렸다가 멀어졌다.
P|세계에게도 보여 줬어?
A|아직. 오늘 수정한 다음에 같이 볼 시간 잡으려고.
P|내 감상을 말해도 돼?
A|응. 마음에 들었다는 말만 하려고 하지는 않아도 돼.
A|대신 저장하거나 공유할 때는 지금처럼 먼저 말해 줘.
`,[["촬영하지 않고 여백 구간의 감상을 말한 뒤 공유 범위를 묻는다.",`P|십 초 동안 화면보다 음악을 듣게 됐어. 그 경험을 안내할 방법을 같이 찾아보자.
A|좋아. 이 초안은 오늘은 우리 둘만 보는 걸로 할게.
P|팀에 필요한 설명은 네가 정한 버전으로 전달하자.
A|그럼 다음 수정본도 제일 먼저 보여 주고 싶어.`,[y("ethics",3),y("fair",3)]],["영상을 한 번 더 보고 키보드 소리를 직접 들어 본다.",`A|좋아. 비교할 때 어떤 느낌이 달라지는지만 말해 줘.
P|내 감상이 작품의 정답인 것처럼 말하지는 않을게.
A|그러면 편하게 연주할 수 있겠다.`,[y("fair",2)]],["칭찬받게 해 주려고 몰래 화면을 녹화해 반 채팅에 보낸다.",`A|방금 재생 중 알림 소리, 네가 보낸 거야?
P|반 애들도 좋아할 것 같아서.
A|누가 좋아할지보다 누가 공개를 결정하는지 먼저 물어봤으면 좋았겠어.`,[y("ethics",-8),y("harmony",-3)]]]),V("seoyul",2,"스케치북의 모서리","art",`
N|미술준비실에는 밴드 포스터 출력본과 마른 붓이 함께 쌓여 있었다.
A|의자에 앉기 전에 종이 확인해. 작업물을 의자에 올려놓는 나쁜 습관이 있어.
P|이건 옮겨도 돼?
A|오른쪽 상자 위에. 앞면은 안 보이게 놔 줘.
N|나는 종이 뒷면만 보며 자리를 비웠다.
P|진짜 아무것도 안 보고 옮기는 게 의외로 어렵네.
A|호기심이 생겼다는 건 알려 줘도 돼. 행동은 다르게 할 수 있으니까.
P|엄청 생겼어.
A|정직해서 한 점.
N|서율이 창가에 의자를 놓고 내 쪽으로 돌렸다.
A|빛 때문에 자리 바꿔도 돼? 잠깐만 앉아 있어 줬으면 해.
P|모델 요청이야?
A|응. 얼굴을 그려도 될까? 연습용이고 공개하지 않을 거야.
P|얼마나 걸려?
A|십 분. 불편하면 중간에 멈춰도 돼.
P|좋아. 자세는 어떻게?
A|지금처럼. 잘 그려지려고 표정 만들지 말고.
N|연필 끝이 종이를 스치는 소리가 공간을 채웠다.
P|사람 그리는 건 부담스럽다고 했잖아.
A|대상을 내가 이해한 것처럼 한 장에 고정하는 게 어려워.
P|그림이 틀릴 수도 있으니까?
A|사진처럼 같지 않아서 틀리다는 뜻은 아니야. 내가 못 본 면도 있다는 걸 잊을까 봐.
N|서율이 선을 지웠다가 더 옅게 다시 그었다.
P|내 표정이 너무 어려워?
A|네가 기다리는 표정이 좋았어. 그래서 그리기 시작했는데 자꾸 다른 표정이 나와.
P|네가 연필 움직이는 게 궁금해서 그래.
A|그러면 궁금한 표정도 그리면 되겠다.
N|십 분 타이머가 울리자 서율은 바로 연필을 내려놓았다.
P|다 됐어?
A|시간은 다 됐어. 그림은 아직.
P|봐도 돼?
A|오늘은 조금만 더 가지고 있고 싶어. 네 얼굴인데 이런 말 이상하지?
P|내가 그림으로 어떻게 쓰이는지는 궁금하지만 지금 당장 결과를 볼 필요는 없지.
A|공개하거나 다른 데 쓰려면 다시 물을게. 네 얼굴에 대한 허락은 별개니까.
N|서율은 스케치북을 닫고 얇은 리본으로 묶었다.
A|언제까지 숨기겠다는 약속은 못 하겠어. 그냥 정리가 조금 필요해.
P|궁금하다고 말하는 건 괜찮아?
A|응. 궁금한 건 좋아. 몰래 펼치지만 않으면.
A|다음에 또 모델을 부탁해도 될까?
`,[["보여 줄 때까지 기다릴게. 다음에 그릴 때도 다시 물어봐 줘.",`P|오늘 허락한 건 오늘 십 분이니까, 다음에는 새로 정하자.
A|그렇게 말해 주니 부탁하는 것도 편해.
P|언젠가 보여 주면 내가 어떤 표정인지 네 얘기도 듣고 싶어.
A|그날은 타이머를 좀 더 길게 맞춰야겠다.`,[y("ethics",2)]],["완성되면 알려 줘. 오늘은 포스터 정리를 도울게.",`A|응. 네가 궁금해한다는 건 기억해 둘게.
P|이 출력본은 날짜순으로 놓으면 돼?
A|맞아. 여기 앉아 줘서, 또 그냥 기다려 줘서 고마워.`,[y("fair",2)]],["서율이 나간 사이 스케치북을 열어 사진을 찍는다.",`A|리본 매듭이 달라졌네. 내 스케치북 열었어?
P|내 얼굴이니까 볼 권리는 있을 거라고 생각했어.
A|궁금하면 다시 말해 줬어야 해. 몰래 사진까지 남길 허락은 한 적 없어.`,[y("ethics",-9),y("harmony",-2)]]]),V("seoyul",3,"노래가 지나가는 화면","band",`
N|합동 편집 회의 날, 세계와 서율은 노트북 양쪽에 앉아 있었다.
W|후렴 여기서 내 얼굴이 안 보여. 관객이 보컬 쪽을 봐야 하는데.
A|일부러 화면을 낮게 만든 거야. 실제 무대에 집중하라고.
W|그런데 영상은 가운데서 크게 움직이잖아.
A|그러면 화면 높이를 바꿔 보자. 인물을 계속 띄우는 것 말고.
P|두 안을 같은 구간에서 비교할 수 있어?
W|가능해. 다만 카메라가 들어오는 구간은 내가 먼저 확인할래.
A|그건 당연히 그래야지.
N|서율은 빠르게 수정했지만 키보드를 누르는 소리가 평소보다 컸다.
P|잠깐 쉬었다 할까?
A|괜찮아. 지금 끊으면 말이 정리되지 않은 채 남을 것 같아.
W|나도 내 얼굴만 크게 보이고 싶은 건 아니야.
A|알아. 관객이 누가 노래하는지 찾기 쉽게 만들자는 거겠지.
W|응. 그리고 우리 둘 다 밴드 멤버잖아. 영상도 연주랑 맞아야 하고.
A|맞아. 그런데 내가 만든 걸 배경이라고만 부를 때는 조금 속상해.
N|세계는 물병을 내려놓고 모니터 대신 서율을 봤다.
W|내가 그렇게 말했구나. 자료 이름에 배경 영상이라고 적었어.
A|틀린 역할 설명은 아닐 수 있어. 그래도 만든 사람이 안 보이는 것 같았어.
P|크레디트와 연출 의도를 프로그램에 넣으면 어때?
W|그건 좋아. 기타 편곡도 누가 했는지 제대로 적자.
A|내가 편곡한 도입부도?
W|당연하지. 내가 자작곡이라고만 말하면 오해하겠네.
N|서율이 처음으로 키보드에서 손을 떼었다.
P|그러면 오늘 정할 건 주목이 넘어가는 순서겠네.
A|첫 여덟 마디는 소리와 화면. 보컬이 들어오면 시선을 무대로.
W|후렴 끝에서 건반 솔로가 나오면 서율 쪽 조명도 올리고.
P|태우 팀 동선이랑도 겹치지 않는지 나중에 확인하자.
N|두 버전의 리허설 영상이 나란히 재생되었다.
A|네 생각도 듣고 싶어. 누구 편인지 말하는 건 말고.
P|첫 번째는 노랫말이 잘 들리고 두 번째는 전시 주제가 잘 보였어.
W|공연과 부스 상영 버전을 나눌 수도 있겠다.
A|일은 늘지만 둘 다 의미가 있으면 할 수 있어.
P|마감까지 수정 가능한 분량부터 계산해 보자.
W|내가 촬영 컷을 미리 정리해 올게. 서율 혼자 다 만들게 하지는 말고.
N|세계가 악보를 가지러 나간 뒤 연습실이 잠깐 조용해졌다.
A|네가 나 대신 화내지 않아서 다행이야.
P|네가 설명하고 있었으니까.
A|응. 듣는 사람이 있어서 끝까지 말할 수 있었어.
A|최종 편집 결정은 어떻게 남기면 좋을까?
`,[["각자 의도와 크레디트를 확인하고 공연용·전시용 수정안을 함께 승인한다.",`P|변경할 때 누가 확인해야 하는지도 적자. 파일 버전마다.
A|내 작품이라는 말로 팀의 의견을 다 막고 싶지는 않아.
P|팀 작업이라는 말로 네 몫을 지우지도 말고.
A|그 균형이 좋다. 이번 수정은 기대돼.`,[y("harmony",5),y("fair",4),y("ethics",2)]],["리허설 영상을 더 본 뒤 편집 회의를 한 번 더 잡는다.",`A|시간을 더 쓰는 만큼 무엇을 확인할지 적어 두자.
P|무대 시선과 크레디트부터. 다음 회의 전까지 각자 한 안씩.
A|좋아. 기다리는 시간이 빈 시간이 되지는 않겠네.`,[y("fair",2)]],["세계에게는 세계 편, 서율에게는 서율 편이라고 따로 약속한다.",`A|네가 세계한테는 내 편집을 다 빼겠다고 말했다던데.
P|둘 다 속상하지 않게 하려고 했어.
A|우리가 같은 공연을 만드는데 서로 다른 약속은 결국 같이 들리게 돼.`,[y("harmony",-9),y("fair",-4)]]]),V("seoyul",4,"작품 옆의 출처","media",`
N|미디어실 모니터에는 두 영상의 정지 화면이 나란히 떠 있었다.
P|이게 표절 의혹이 나온 게시물이야?
A|응. 파란색 원이 퍼지는 구도가 비슷하다고.
P|게시물은 제작 순서까지 같다고 적었네.
A|그 부분은 달라. 내 작업 기록은 여기 있어.
N|서율이 날짜별 폴더를 열었다. 손그림, 테스트 영상, 실패한 렌더링이 이어졌다.
P|참고한 자료도 따로 모았구나.
A|사용 허락이나 조건을 확인한 자료는 여기에 표시했어.
P|완전히 혼자 떠올렸다고 말할 필요는 없겠네.
A|응. 색이나 도형을 나 혼자 발명한 건 아니잖아.
P|그러면 사용한 자료와 직접 만든 구간을 구분해서 설명하면 되겠다.
A|화가 나서 지금은 그 문장을 차분하게 못 쓰겠어.
N|서율은 키보드에서 손을 떼고 의자 등받이에 기대었다.
A|밤새 만든 게 게시물 네 줄로 없어지는 기분이야.
P|없어진 건 아니야. 다만 사람들이 아직 과정을 못 본 거지.
A|그 말을 지금 다 믿을 만큼 침착하지는 않아.
P|그럼 답글은 잠깐 기다려도 돼.
N|휴대전화 알림이 연달아 울렸다. 서율은 화면을 아래로 뒤집었다.
A|누가 대신 싸워 줬으면 좋겠다는 생각도 했어.
P|어떤 도움이 필요한지는 말해 줘. 공격하는 건 상황을 더 키울 수 있지만.
A|기록을 시간순으로 놓아 줘. 내가 빠뜨린 출처가 있는지도 확인하고.
P|다른 팀 작품의 원본은 어디서 볼 수 있어?
A|공개 페이지 링크가 있어. 개인 파일을 구하려고 하면 안 되고.
N|우리는 공개된 자료와 서율의 원본 기록을 나란히 비교했다.
P|여기 폰트 사용 조건 확인 캡처가 빠졌어.
A|좋아. 다시 확인하고 크레디트에도 적을게.
P|의혹이 틀려도 우리가 더 정확히 적을 부분은 있네.
A|그걸 인정하면 내가 전부 잘못한 것처럼 보일까 봐 무서웠어.
P|사실을 나눠 설명할 수 있어. 모든 주장을 한꺼번에 이기려고 하지 말고.
N|담당 교사가 들어와 게시물과 정리한 기록을 함께 확인했다.
T|학교 전시 자료니까 대응은 함께 검토하자. 개인 연락처는 공개하지 말고.
A|네. 제가 쓴 설명문부터 보실 수 있을까요?
P|나는 첨부 자료 목록을 만들게.
A|고마워. 제목은 해명보다 제작 과정 공개가 좋을까?
P|의혹에 답하는 문장도 필요하겠지만 네가 무엇을 만든 건지가 먼저 보이면 좋겠다.
N|서율은 빈 문서에 처음으로 긴 문장을 입력했다.
A|이 작품은 소리의 측정값과 개인적인 색 해석을 함께 사용했습니다.
A|이렇게 시작해도 내 작품이 작아지지는 않지?
P|어떻게 만들었는지 더 잘 보이는 것 같아.
`,[["원본 기록과 사용 자료를 정리해 교사와 확인한 설명을 공개한다.",`P|네 개인 파일 전체가 아니라 필요한 기록만 첨부하자.
A|맞아. 해명 때문에 다른 사람의 비공개 자료까지 보여 줄 수는 없지.
P|확인되지 않은 주장에는 확인되지 않았다고 적을게.
A|같이 화내는 것보다 지금 이 정리가 더 큰 도움이 돼.`,[y("ethics",5),y("fair",4),y("reputation",2)]],["공개 답변은 기다리고 기록을 먼저 보존한다.",`A|지금 급하게 올리면 감정적인 문장이 끼어들 것 같아.
P|수정하기 전에 원본 사본부터 보관하자. 날짜 정보도 그대로.
A|응. 설명할 근거가 남아 있다는 것부터 확인하고 싶어.`,[y("ethics",2)]],["의혹을 제기한 학생의 개인 계정을 찾아 공격한다.",`A|그 사람 연락처를 왜 단체 채팅에 올렸어?
P|네가 부당하게 공격받았으니까 똑같이 알려 주려고.
A|내 작품을 설명하는 일과 누군가를 공격하는 일은 달라. 지금은 내가 너까지 말려야 해.`,[y("ethics",-10),y("reputation",-6),y("harmony",-5)]]]),V("seoyul",5,"남겨진 접힌 선","art",`
N|추가 전시 설치를 앞둔 오후, 큰 출력물 한쪽이 길게 접혀 있었다.
A|잠깐. 펼치지 마.
P|이미 접힌 거라 펴면 나아질 줄 알았어.
A|표면이 더 손상될 수 있어. 먼저 상태부터 볼게.
N|서율은 출력물을 옆 조명 아래 놓고 손상된 부분을 사진으로 남겼다.
P|누가 이렇게 했대?
A|운반 중에 상자끼리 눌렸대. 지금 사람부터 찾을 필요는 없을 것 같아.
P|다시 출력할 시간이 있어?
A|같은 크기는 오늘 어렵고 예산도 거의 다 썼어.
P|그러면 내가 비슷하게 덧칠할 수 있을까?
A|도와주고 싶은 건 고마워. 그런데 원본 위에 뭘 하기 전에 같이 정하자.
N|서율은 노트북의 디지털 원본을 열었다.
A|원본 파일은 안전해. 망가진 건 이 출력물이야.
P|전부 잃은 건 아니라는 걸 먼저 확인해야겠네.
A|응. 그래야 지금 생긴 선을 내가 어떻게 생각하는지도 볼 수 있어.
P|접힌 자국을 작품에 남기는 방법은 어때?
A|할 수는 있지. 하지만 사고를 무조건 아름다운 일로 바꾸고 싶지는 않아.
P|싫으면 새로 만드는 것도 괜찮고.
A|그 선택이 있다는 걸 듣고 싶었어.
N|우리는 손상된 부분을 가릴 종이와 작은 재출력 견본을 나란히 놓았다.
P|작게 다시 출력하고 과정 사진을 같이 두면?
A|작품 크기는 달라지지만 의도는 설명할 수 있겠다.
P|접힌 큰 출력물은 네가 원하면 별도로 남기고.
A|좋아. 관객이 손상을 원래 의도인 줄 알게 하지는 말자.
N|서율은 안내문 초안을 쓰다가 잠시 창밖을 봤다.
A|이상하지. 복원할 수 없을까 봐 무서웠는데, 멋대로 복원해 놓았어도 화났을 것 같아.
P|네가 결정할 일이 남아 있었으니까.
A|응. 실패를 없애 주는 것과 내 손에서 가져가는 건 다를 수 있네.
P|나도 빨리 해결해야 좋은 도움이 되는 줄 알 때가 있어.
A|오늘은 천천히 봐 줘서 좋았어.
N|서율은 새 출력물 위치를 자로 재고 바닥에 종이 테이프를 붙였다.
A|전시 제목을 조금 바꿀까 생각 중이야. 같은 화면, 다른 표면.
P|재료 때문에 생기는 차이도 주제에 들어가네.
A|응. 다만 이건 새로 정한 해석이야. 사고가 처음부터 계획이었다고 말하지는 않을게.
P|제작 과정 설명에 그 시간 순서를 적어 두자.
N|미술준비실 밖에서 설치 완료 시간을 알리는 안내가 들렸다.
A|삼십 분 남았대. 도울 수 있는 일은 종이 재단이랑 위치 확인.
P|어디부터 할까?
A|네가 고르기 전에 최종 안부터 같이 확인해 줘.
`,[["서율이 승인한 축소 재출력과 과정 설명을 함께 설치한다.",`P|이 위치와 설명으로 확정해도 돼? 바꾸면 다시 물어볼게.
A|응. 접힌 출력물은 내가 보관할게. 전시에 쓰지는 않기로 했어.
P|그 선택대로 하자. 자랑할 만한 건 네가 결정한 과정도 포함이니까.
A|오늘 작품 옆에 네 도움도 적을게. 무엇을 했는지 정확하게.`,[y("fair",5),y("ethics",3)]],["손상 상태를 보존하고 설치를 잠시 늦춰 담당 교사와 상의한다.",`A|정해진 시간은 지켜야 하지만 상태 설명은 할 수 있겠지.
P|보류 안내판은 내가 만들어 둘게. 이유는 네가 확인해 줘.
A|고마워. 서두른 흔적보다 선택한 흔적을 남기고 싶어.`,[y("ethics",2),y("fair",1)]],["서율이 돌아오기 전에 원본 위에 덧칠해서 접힌 자국을 숨긴다.",`A|이 색, 내가 정한 배합이 아니야. 왜 먼저 손댔어?
P|시간이 없어서 복구해 주고 싶었어.
A|이제 원래 손상 상태도 못 확인해. 내 작품에서 내가 결정할 기회가 또 사라졌어.`,[y("fair",-6),y("ethics",-7)]]]),V("seoyul",6,"미완성의 초상","art",`
N|전시를 마친 미술준비실에는 벽에서 떼어 온 제목표가 쌓여 있었다.
A|오늘은 너한테 보여 줄 게 있어.
P|다시 초안?
A|완성이라고 부르기에는 아직 자신 없는데, 숨기고 싶지는 않아.
N|서율은 리본으로 묶어 두었던 스케치북을 책상에 놓았다.
P|내가 모델 했던 날 그림이야?
A|응. 페이지는 내가 넘길게. 중간에 다른 사람 작업도 있어서.
P|알겠어.
N|종이가 넘어가자 창가에 앉은 내 옆얼굴이 나타났다.
P|생각보다 웃고 있네.
A|처음에는 안 웃었어. 내가 연필 떨어뜨렸을 때 웃었지.
P|그 순간을 그린 거야?
A|여러 순간을 조금씩 섞었어. 사진처럼 한 시각을 옮긴 건 아니고.
P|그럼 네가 나를 기억한 방식이겠네.
A|응. 하지만 그게 너의 전부라는 뜻은 아니야.
N|그림 한쪽에는 아직 비어 있는 손과 의자 다리가 보였다.
P|여기는 왜 남겨 뒀어?
A|다 채우면 그날이 끝나는 기분이 들었어. 조금 유치하지?
P|나는 이해할 수 있을 것 같아.
A|네가 또 와 주기를 바랐어. 모델을 핑계로.
P|모델이 아니어도 올 수 있는데.
A|그러니까 지금은 다른 부탁을 해 보려고.
N|서율은 스케치북을 닫지 않고 우리 사이에 남겨 두었다.
A|처음에는 네 얼굴이 아니라 네가 허락을 묻는 순간이 좋았어.
A|내가 결정할 때까지 기다리는 모습도.
P|그렇게 본 줄은 몰랐어.
A|말로 하면 너무 큰 일이 될 것 같아서 그림을 먼저 그렸어.
N|서율은 웃으려다가 입술을 한번 다물었다.
A|그런데 그림도 말을 대신 다 해 주지는 않더라.
P|무슨 말을 하고 싶었어?
A|나 너 좋아해. 다음 그림의 모델 말고 다음 일상의 상대였으면 해.
P|일상에는 그림이 없는 날도 있어?
A|물론. 아무것도 만들지 않고 과자 먹는 날도 있어.
P|그날에도 내가 오면 좋아?
A|응. 뭔가 해야만 네가 옆에 있는 건 싫어.
N|책상 위 작은 스탠드가 그림과 우리의 손 사이를 비췄다.
A|이 그림은 네가 갖고 싶으면 이야기해 줘. 소유랑 공개 허락은 따로 정하고.
P|지금은 그림보다 네 손을 잡아도 되는지 묻고 싶어.
A|대답부터 듣고 싶어. 그다음에 내 대답도 할게.
`,[["나도 좋아해. 작품이 없는 날의 너도 함께 알아 가고 싶어.",`P|아무것도 완성하지 않는 날에도 같이 있고 싶어.
A|좋아. 그러면 내일은 그림 도구 없이 만나자.
P|그리고 손 잡아도 돼?
A|응. 지금은 내가 먼저 내밀게.`,[y("harmony",2)]],["너와 더 가까워지고 싶어. 내 마음도 천천히 말할게.",`A|지금 완성된 대답을 요구하지는 않을게.
P|대신 기다리게만 두지 않고 내가 느끼는 건 직접 말할게.
A|그럼 오늘 그림 얘기를 조금 더 하자. 네 감상도 듣고 싶어.`,[]],["사귀면 앞으로 네 그림은 나한테만 보여 줘.",`A|내 마음을 좋아한다는 게 내 작업을 가두는 뜻은 아니었으면 해.
P|특별한 사람이 되고 싶어서 한 말이야.
A|특별함을 증명하려고 다른 사람을 지울 수는 없어. 내 대답은 그 조건에는 아니야.`,[y("harmony",-4),y("ethics",-3)]]]);const ba=["world","junyeon","hyunsol","taewoo","taehun","seoyul"],ze=e=>e.trim().split(`
`).map(n=>{const a=n.indexOf("|");return{speaker:n.slice(0,a),text:n.slice(a+1)}}),q=(e,n,a)=>({target:e,stat:n,amount:a}),L=(e,n)=>ba.map(a=>q(a,e,n)),He=()=>[...L("affection",3),...L("trust",5),...L("jealousy",-6),q("world","special",-5),q("global","harmony",4)],Z=(e,n,a,o,r)=>({id:e,text:n,response:ze(a),effects:o,flags:r});ze(`narrator|옥상 휴게공간에 도착했을 때 여섯 사람은 원형 테이블에 앉아 있었다. 출입 허가표에는 일곱 명의 이름이 적혀 있었다.
world|도망간 줄 알았어.
player|계단에서 담임 선생님께 종료 시간 확인받았어.
hyunsol|좋아. 그러면 누구도 늦었다고 시비 걸 이유는 없네.
world|시비 건 거 아니야. 그냥 기다렸다고.
seoyul|우리도 결론을 정해 놓고 부른 건 아니야. 네가 여섯 사람한테 다른 의미로 다가갔는지 알고 싶었어.
taewoo|직접 묻자. 우리 중 누구를 좋아해?
narrator|준연은 컵을 두 손으로 잡고 있었다. 태훈은 굳이 내 눈을 피하지 않았다.
player|한 사람만 좋아한다고 말하면 지금까지 느낀 감정을 숨기게 될 것 같아.
junyeon|그러면 우리 모두에게 같은 말을 했다는 거야?
player|아니. 같은 마음은 아니었어. 너랑 있을 때는 네가 말을 끝낼 때까지 기다리고 싶었어.
junyeon|그건 불쌍해서가 아니고?
player|네 설명을 더 듣고 싶어서. 네가 자신 없는 목소리로 말해도 흥미로운 게 많았으니까.
hyunsol|좋은 말로 상황을 넘기려는 건 아니지? 마음이 여러 개라는 말에는 책임도 붙어.
player|알아. 그래서 이 자리에 있다고 자동으로 어떤 관계가 되는 건 아니라고 생각해.
taewoo|나는 승부처럼 생각할까 봐 걱정돼. 다른 애보다 네가 좋아하는 사람이 되고 싶거든.
seoyul|나는 같은 양을 나눠 받는 관계는 싫어. 내 시간을 누구 몫의 잔여분처럼 쓰고 싶지 않아.
taehun|난 마음이 바뀔 수 있다는 전제가 필요해. 한 번 고른 답을 영원히 수정하지 못하면 관계도 관측도 어려워져.
world|나는 솔직히 다 싫은 부분이 있어. 지금도 네 옆에 누가 앉는지 신경 쓰여.
player|그런데도 여기 온 이유는 뭐야?
world|네 마음을 내가 정해 놓고 싶지 않아서. 싫으면 싫다고 말할 수 있어야 한다는 것도 이제 알겠고.
junyeon|나는 빠진다고 말하면 팀에서까지 멀어질까 봐 무서워.
hyunsol|그건 분명히 해 두자. 연애에 동의하지 않아도 같은 반이고 같은 팀이야.
taewoo|응. 연습실 출입 금지 같은 벌은 없어.
seoyul|누구도 당장 대답하지 않아도 돼. 오늘은 서로 어떤 마음인지 확인하는 걸로 충분해.
player|그리고 누군가 둘만의 관계를 원하면 그 마음도 존중해야겠지.
taehun|그때는 조건이 달라진 거니까 다시 이야기하면 돼. 속여서 같은 답인 척하지 않고.
narrator|테이블 위에 놓인 일곱 개의 컵은 같은 모양이었지만 담긴 음료는 달랐다. 그 차이가 이상하게 안심됐다.
world|정말 우리를 한꺼번에 같은 방식으로 좋아하는 건 아니야?
player|응. 너와 있을 때는 네가 웃는 이유를 알고 싶고, 서율과 있으면 세상을 어떻게 보는지 궁금해.
seoyul|그건 듣기 좋은 답이네. 행동까지 같으면 좋겠어.
taewoo|그래. 말은 오늘 듣고, 나머지는 앞으로 보는 거지.
narrator|나는 누구를 설득해서 자리에 남게 하려는 게 아니라, 누구라도 나갈 수 있는 대화를 해야 한다고 생각했다.`),Z("harem-1-open","각자의 감정을 인정하며, 자유롭게 거절할 수 있는 열린 만남을 제안한다.",`player|당장 연인이라는 이름부터 붙이지 말자. 서로 알고 동의하는 만남을 이어 가 보고, 싫어지면 이유를 증명하지 않아도 멈출 수 있게.
junyeon|빠진다고 화내지 않는다면…… 나도 조금 더 생각해 볼래.
world|나도. 네 마음을 독점하겠다는 약속은 지금 못 하겠지만, 네가 내 소유인 척하지는 않을게.
hyunsol|좋아. 오늘 합의한 건 강요하지 않는다는 것부터야.`,He(),["harem-key-1"]),Z("harem-1-pause","좋아하는 마음은 인정하되 지금은 모두와 친구로 지내고 싶다고 한다.",`player|내가 원하는 걸 아직 설명할 준비가 안 됐어. 누구를 기다리게 하는 약속도 하고 싶지 않아.
taehun|그 답도 선택이야. 나중에 바뀌면 그때 새로 말하면 되고.
taewoo|아쉽긴 해. 그래도 지금 사귀는 척하는 것보다는 낫지.
narrator|나는 누구의 대답도 예약하지 않았다. 테이블에 남은 사람들은 천천히 다른 이야기로 넘어갔다.`,[...L("trust",3),...L("jealousy",-3),q("global","harmony",2)],["harem-pause"]),Z("harem-1-own","모두 나를 좋아하니 이제 아무도 빠지면 안 된다고 말한다.",`player|여기까지 왔는데 누가 빠지면 다른 사람도 상처받잖아.
seoyul|우리 마음을 이유로 우리 선택을 막지는 마.
hyunsol|동의는 출구가 있을 때 동의야. 지금 말은 그 출구를 닫고 있어.
narrator|세계도 내 편을 들지 않았다. 침묵이 동의가 아니라는 것을 그제야 실감했다.`,[...L("trust",-10),...L("jealousy",7),q("global","harmony",-12)],["harem-control"]),ze(`narrator|함께 이야기한 뒤 사흘이 지났다. 달라진 것은 선언보다 메신저의 문장이었다. ‘지금 어디야’ 앞에 ‘물어봐도 돼?’가 붙었다.
world|토요일 오후에 약속 있어?
player|서율이랑 전시 준비물 보러 가기로 했어.
world|일이야, 데이트야?
seoyul|둘 다일 수 있어. 그걸 다른 사람 허락을 받아야 한다는 뜻은 아니고.
world|나도 아는데, 알아야 덜 혼자 생각하게 돼.
player|전시 보고 싶어서 잡은 약속이야. 세계랑은 일요일에 노래 들으러 만나기로 했고.
taewoo|나는 아직 시간이 안 정해졌는데. 내가 나중인 거야?
hyunsol|먼저 잡은 시간과 더 중요한 사람을 같은 걸로 계산하면 끝이 없어.
taewoo|나도 그걸 알아. 아는데 기분이 그렇게 돼.
junyeon|그러면 내 시간 빼도 돼. 나는 평일에 학교에서 봐도 괜찮으니까.
player|네가 원하는 게 정말 그거야? 불편한 걸 줄이려고 빠지는 거라면 다르게 이야기해 보자.
junyeon|반은 괜찮고 반은…… 내가 제일 애매한 것 같아서.
taehun|그 반을 없다고 취급하면 다음 약속 때 더 커질 것 같아.
narrator|준연은 작은 목소리로 ‘나도 단둘이 얘기하고 싶다’고 말했다. 태우는 그제야 일정표에서 시선을 들었다.
taewoo|그래. 우리 경쟁표 만드는 거 아니었지.
world|그래도 데이트할 때 잠깐 답장은 할 수 있잖아. 한 시간마다 한 번 정도.
seoyul|내 앞에서 다른 약속 확인만 하면 나는 서운할 것 같아.
player|긴급한 일이 아니면 바로 답하지 않을 수 있어. 언제까지 같이 있는지는 알려 줄 수 있고.
world|그동안 내가 불안하면?
hyunsol|불안한 걸 말할 수는 있지. 하지만 다른 사람의 시간을 전부 확인해야만 해결되는 규칙이면 계속 커져.
world|네 말은 가끔 너무 똑바로 와서 피할 데가 없어.
hyunsol|이번에는 상처 주려고 한 말 아니야. 표현이 거칠었다면 다시 말할게.
world|아니. 알아들었어.
taehun|일정표를 공유해도 대화 내용까지 공유할 필요는 없어. 각자만 갖는 장면이 있어야 하니까.
seoyul|그리고 만난 시간을 정확히 똑같이 나누는 것보다 약속한 시간을 존중해 줬으면 좋겠어.
taewoo|춤 연습 20분이랑 전시 두 시간은 같은 종류의 시간이 아니니까?
seoyul|응. 길이를 점수로 쓰지 말자는 뜻.
narrator|나는 일정표에 여섯 색을 칠하려다가 펜을 내려놓았다. 사람이 색칠된 칸으로만 보일 것 같았다.
player|원하는 만남을 한 번씩 말해 줄래? 시간이 긴 것부터 고르는 건 아니고.
junyeon|도서관 근처에서 간식 먹는 거. 문제 얘기 안 하고 그냥.
world|난 연습실 아닌 곳에서 산책. 네가 노래 좋다는 말 말고 다른 얘기도 하는지 궁금해.
taewoo|나는 춤 얘기해도 되는데. 대신 구경만 하지 말고 같이 배우기.
narrator|요구가 구체적이 되자 질투도 조금 덜 막연해졌다. 없어진 것은 아니었다.`),Z("harem-2-boundary","원하는 시간을 개별적으로 잡고 즉답과 위치 확인을 의무로 삼지 않는다.",`player|서로 약속은 숨기지 않을게. 하지만 실시간 확인이나 대화 공개는 하지 말자. 서운하면 비교 대신 원하는 걸 직접 말해 줘.
world|일요일 산책은 꼭 기억해. 답장 횟수는 안 셀게. 세고 싶어지면 내 마음부터 적어 볼게.
junyeon|내 약속도 지우지 않을게. 내가 원하는 거니까.
narrator|태우가 웃으며 일정표 맨 아래에 적었다. ‘만남 시간은 순위가 아님.’`,He(),["harem-key-2"]),Z("harem-2-monitor","세 사람 이상이 보는 공유 일정에 위치와 메시지 내용을 모두 기록한다.",`player|모두가 다 알면 오해가 없어지겠지. 대화 캡처도 올릴게.
seoyul|내가 너한테 말한 걸 다른 사람 모두에게 보여 주기로 한 적은 없어.
world|처음엔 안심될 것 같았는데…… 나도 네가 내 말 전부 올리는 건 싫어.
narrator|확인하는 사람이 늘어날수록 편해지는 것은 없었다. 아직 나누지 않은 감정까지 보고서가 됐다.`,[...L("trust",-8),...L("jealousy",6),q("world","special",9),q("global","harmony",-8)],["harem-surveillance","unauthorized-share"]),Z("harem-2-stepback","약속을 늘리기 전에 연애성 만남을 잠시 멈추자고 제안한다.",`player|지금은 누구의 시간도 제대로 챙기지 못할 것 같아. 친구로 지내면서 내가 감당할 수 있는지 생각할게.
taewoo|나한테만 기다리라고 하는 건 아니지?
player|응. 누구도 내 대답 때문에 다른 선택을 미루지 않아도 돼.
taehun|그 조건이면 보류도 정직한 선택일 수 있겠다.`,[...L("trust",2),...L("jealousy",-4),q("world","special",-3)],["harem-pause"]),ze(`narrator|빈 교실에서 새 종이를 꺼냈다. 제목을 ‘관계 규칙’이라고 쓰자 태우가 손을 들었다.
taewoo|또 보고서야? 우리 사이엔 문서가 너무 많아.
seoyul|계약서처럼 서명하자는 건 아니야. 헷갈리는 말을 한 번 정리하자는 거지.
hyunsol|정확히 적고 언제든 고칠 수 있어야 해. 점수 깎는 표를 만들자는 게 아니고.
world|첫 줄. 휴대전화 몰래 보지 않기.
player|네가 먼저 말할 줄은 몰랐네.
world|가장 하고 싶을 것 같은 일을 먼저 적는 거야. 하고 싶다고 해도 해도 되는 건 아니니까.
junyeon|그럼 나는 싫다는 말 했다고 화내지 않기.
taewoo|그건 당연하지.
junyeon|당연해도 말로 적혀 있으면 좋겠어.
taewoo|……맞아. 내 기준으로만 당연하다고 하지 않을게.
taehun|마음이 바뀌면 바뀌었다고 말하기. 예전 고백을 증거로 현재 마음을 반박하지 않기.
seoyul|그거 좋다. 그리고 그림이나 음악으로 마음을 표현해도 공개 허락까지 한 건 아니라는 것.
player|메시지, 사진, 작품은 각각 공개 범위를 다시 묻기.
hyunsol|학교 일에서 사적인 갈등을 벌로 쓰지 않기. 발표 순서나 작업 권한을 바꾸는 식으로.
world|질투한다고 말하는 건 금지하지 말아 줘.
player|응. 느끼는 것과 행동하는 걸 구분하자. 질투는 말해도 되지만 다른 사람을 못 만나게 명령하지 않기.
taewoo|자꾸 비교하는 말도 멈추기. 나도 조심할게.
junyeon|비교를 안 하면 내가 뭘 잘해야 하는지 모르겠을 것 같아.
seoyul|연애가 발표 점수는 아니잖아. 네가 재미있었던 일부터 말해도 돼.
narrator|준연은 잠시 생각하다가 아침에 편의점에서 마지막 좋아하는 빵을 샀다고 말했다.
taewoo|그건 엄청난 소식이네. 나도 자주 품절돼서 못 사.
world|다음엔 사진 보내. 아, 빵 사진은 보내도 되지?
junyeon|그 정도는 괜찮아.
narrator|여섯 사람이 함께 웃었다. 지금 필요한 문장이 반드시 어렵거나 심각할 필요는 없었다.
taehun|마지막에 이것도 쓰자. 누구든 이 관계에서 나갈 수 있고 친구로 남을지는 별도로 정한다.
player|친구로 남는 것도 당연히 해야 하는 의무는 아니라는 거네.
hyunsol|응. 거리를 둘 권리도 있어야 해.
world|그 문장은 조금 무서운데.
seoyul|나가지 못해서 남는 사람보다, 나갈 수 있어도 남는 사람이 더 믿을 만하지 않을까?
world|……그렇게 생각해 볼게.
narrator|우리는 각자의 이름을 사인처럼 쓰지 않았다. 대신 마음에 걸리는 문장 옆에 질문을 남겼다.
player|이건 완성본이 아니라 수정할 수 있는 초안이야. 불편해지면 다시 이야기하자.`),Z("harem-3-consent","사생활, 거절, 수정, 떠날 권리를 모두 확인한다.",`player|계속 동의하는지 확인하고, 동의하지 않는 사람이 생기면 벌주지 말자. 누구도 나 때문에 남아 있어야 할 의무는 없어.
world|무섭긴 하지만 알겠어. 내 불안을 네 비밀번호로 해결하지는 않을게.
hyunsol|그 문장으로 시작하면 되겠다. 어렵게 느껴지는 건 나중에도 말하고.
narrator|종이를 접어 모두에게 한 장씩 나눠 줬다. 서명보다 각자 가져갈 시간이 더 필요했다.`,He(),["harem-key-3"]),Z("harem-3-exception","세계가 불안해할 때만 휴대전화 확인을 허용한다.",`player|세계는 예외로 하자. 그게 안심된다면 잠깐 보여 주면 되지.
world|진짜 괜찮아? 그러면…… 내 말만 보는 거야, 다른 애들 것도?
seoyul|네 휴대전화에 내 메시지도 있어. 내 허락까지 네가 줄 수는 없어.
narrator|작은 예외라고 생각한 문장 하나가 모두의 사생활로 이어졌다.`,[q("world","affection",3),q("world","special",12),...L("trust",-6),q("global","harmony",-6)],["harem-rule-break","harem-surveillance"]),Z("harem-3-vote","한 명이 불편해해도 다수결로 결정하면 된다고 한다.",`player|모두가 동의할 때까지 기다리면 아무것도 못 하잖아. 과반수로 하자.
junyeon|내가 싫어도 다른 사람이 좋다고 하면 해야 하는 거야?
hyunsol|개인의 경계는 반장 선거가 아니야.
taehun|쉽게 결정하는 방법이 항상 맞게 결정하는 방법은 아니지.`,[...L("trust",-9),...L("jealousy",4),q("global","harmony",-9)],["harem-control"]),ze(`narrator|후속 공개 전시에 참여할 기회가 생겼다. 우승 여부와 별개로 지원한 팀들이 개선한 전시를 다시 설명하는 자리였다.
teacher|이번에도 역할을 먼저 정해라. 지난 행사 평가를 그대로 반복하지 말고 피드백을 반영하도록.
world|나는 첫 안내와 무대 소개. 영상 공개 동의도 다시 받을게.
seoyul|관람 거리 때문에 읽기 어려웠던 글자를 키웠어. 크레디트는 마지막뿐 아니라 시작에도 넣었고.
taewoo|동작 점수 대신 움직임 경로를 중심으로 보여 줄 거야. 숫자만 보면 자꾸 경쟁하게 되더라고.
junyeon|실험 설명은 내가 첫 문단 할게. 질문은 현솔이랑 나눠 답하고.
hyunsol|응. 모르는 질문은 같이 확인해 보겠다고 말하면 돼.
taehun|관측 프로그램은 실제 예보와 예시 자료를 분리했어. 오늘 하늘이 어떤지는 따로 안내할게.
player|나는 접수와 시간 확인. 정해진 역할 밖에 도움이 필요하면 먼저 물어볼게.
narrator|역할표는 빠르게 채워졌다. 지난번보다 쉬워진 것은 작업의 순서였고, 감정까지는 아니었다.
world|{name}, 공연 전에는 내 쪽에 잠깐 올 수 있어?
player|서율이 출력 확인하는 동안 접수를 대신 봐야 해. 끝나는 시간을 보고 알려 줄게.
world|알겠어. 기다려 볼게.
narrator|잠시 뒤 서율이 나를 불러 화면 비율을 확인했다. 세계는 무대 뒤에서 그 모습을 보고 있었다.
seoyul|이 부분만 같이 봐 줘. 네가 창 쪽에 섰을 때 반사가 심했어.
player|지금은 괜찮아. 자막 아래 한 줄만 조금 더 올리자.
world|둘이 오래 걸리네.
seoyul|작업 중이야. 네 대기 시간도 알고 있어.
world|나한테 설명하는 말투까지 그런 식일 필요는 없잖아.
narrator|준연이 두 사람을 번갈아 봤다. 공연까지 10분이 남아 있었다.
hyunsol|지금 진행은 분리하자. 세계는 음향 확인, 서율은 영상 확인. 얘기는 휴식 시간에.
world|화났다고 말하는 것도 미루라는 거야?
hyunsol|말할 수 있어. 다만 관객 앞에서 서로의 작업을 막지는 말자는 거야.
taewoo|나도 센터 경쟁 때 이런 기분 들었어. 지금 한 번 양보하면 계속 밀릴 것 같은 거.
taehun|하지만 오늘 역할을 하는 것과 관계에서 밀려나는 건 같은 사건은 아니야.
player|세계야, 공연 전에 2분은 갈 수 있어. 그보다 오래는 확답 못 해. 지금 서율 작업도 끝내야 하고.
world|2분이면 그냥 왔다 가는 거잖아.
player|응. 그래서 충분하다고 말하지는 않을게. 공연 끝나고 얘기할 시간은 따로 잡자.
narrator|세계는 기타 끈을 고쳐 멨다. 나를 붙잡으려던 손을 마이크 스탠드로 옮겼다.
world|알겠어. 지금은 가수 할게. 끝나면 서운했다고 말할 거고.
seoyul|나도 네 기분을 무시한 말투였다면 그건 따로 사과할게.
narrator|문제가 사라진 것은 아니었다. 그래도 공연 시작 신호는 제시간에 켜졌다.
junyeon|우리 이렇게 해도 되는 거지? 기분이 복잡해도 할 일은 같이 하는 거.
player|응. 끝나고 얘기하는 것도 할 일에 넣자.`),Z("harem-4-separate","역할을 끝까지 수행하고 약속한 휴식 시간에 서운함을 듣는다.",`player|지금 누구 편인지 증명하려고 작업을 바꾸지는 않을게. 끝나면 한 사람씩 무슨 마음이었는지 듣자.
world|좋아. 끝나고 도망가지만 마. 이번엔 답을 확인하려는 게 아니라 내 기분을 설명할 거야.
seoyul|나도 들을게. 오늘 화면을 고친 일과 너를 밀어낸 일은 다른 거니까.
narrator|공연이 끝난 뒤 우리는 관람석 맨 뒤에 앉았다. 설명이 길어졌지만 누구도 대화를 중간에 판정하지 않았다.`,He(),["harem-key-4","team-success"]),Z("harem-4-world","세계의 불안을 달래려고 서율의 영상 작업을 중단시킨다.",`player|영상은 나중에 해도 돼. 지금은 세계부터 챙기자.
seoyul|나중에라니, 공연 시작이 몇 분 남았는데.
world|내가 서운하다고 했지, 서율 일을 막으라고 한 건 아니야.
narrator|누군가의 편이 되는 가장 쉬운 방법을 골랐지만 누구도 편해지지 않았다.`,[q("world","special",10),q("world","trust",-4),q("seoyul","trust",-10),...L("jealousy",5),q("global","harmony",-10),q("global","fair",-7)],["harem-rule-break"]),Z("harem-4-silence","문제없다고 둘러대고 모두의 메시지에 답하지 않는다.",`player|나중에 다 괜찮아질 거야. 일단 넘어가자.
hyunsol|나중에라는 말만 하고 시간을 정하지 않으면 미루는 거지.
junyeon|그럼 우리가 물어보는 게 방해가 되는 거야?
narrator|행사는 끝났다. 대화는 끝나지 않았는데 답할 시간만 사라졌다.`,[...L("trust",-6),...L("jealousy",4),q("global","harmony",-6)],["harem-rule-break"]),ze(`narrator|공개 전시를 마친 다음 주, 교실 앞에는 새 수행평가 일정이 붙었다. 페어 포스터는 교실 뒤 게시판으로 옮겨졌다.
taewoo|대형 행사 끝나자마자 수행평가라니. 너무 현실적이네.
hyunsol|학생이니까.
world|오늘 사진 찍기로 한 건 기억하지?
seoyul|찍기 전에 어디에 쓸 건지부터 알려 줘.
world|일곱 명만 보관. 공개는 안 할 거야. 나도 아직 그런 설명을 모르는 사람한테 해 주고 싶지 않아.
junyeon|나는 원본 받아도 돼? 단체사진에 제대로 나온 게 별로 없어서.
world|당연하지. 네 마음에 안 들면 다시 찍을 거고.
taehun|사진이 오늘 관계의 최종 결론처럼 보이지는 않았으면 좋겠어.
player|지금 함께 있다는 기록이면 충분하겠지.
taehun|응. 이후에 바뀌는 마음이 오늘을 거짓으로 만들지는 않으니까.
narrator|세계가 휴대전화를 삼각대에 끼웠다. 카메라 화면 속 나는 아직 자리에 서지 못한 채 가방을 들고 있었다.
world|{name}, 가운데 와.
taewoo|꼭 가운데일 필요는 없잖아. 키 순으로 서 보자.
seoyul|키 순이면 구도가 너무 일직선이야. 의자 두 개 쓰면 좋아.
hyunsol|교실 의자는 바닥 고른 곳에 놓고. 올라서지는 말고 앉아.
junyeon|나 앞쪽은 좀…… 얼굴이 너무 크게 나올 것 같아.
player|어디가 편해? 네가 정하면 그쪽에 맞춰 서자.
junyeon|그러면 창가 쪽. 빛이 좀 들어오는 데.
seoyul|좋아. 그쪽에서 시작하자.
narrator|사진 한 장의 자리도 서로 물어보면 시간이 걸렸다. 예전 같으면 세계가 웃으며 한 번에 정했을 일이었다.
world|이렇게 오래 걸리는 사진은 처음이야.
taewoo|한 장만 찍을 것도 아니잖아.
world|맞아. 다시 찍을 수 있지.
narrator|세계는 그 말을 혼자 한 번 더 반복했다. 다시 찍을 수 있다는 사실이 처음보다 편안해 보였다.
hyunsol|우리 약속도 다시 확인하자. 불편한 부분 아직 없어?
junyeon|있으면 말해도 된다는 건 이제 조금 믿겠어.
taehun|나는 각자만의 시간도 남겨 두고 싶어. 항상 일곱 명으로 묶여 있지 않게.
seoyul|동의. 내 작업실에 누가 왔는지 출석 체크하지 않기.
taewoo|난 아직 질투할 때가 있어. 숨기고 비꼬는 대신 바로 말해 볼게.
world|나도. 답장 안 오면 시간을 세게 될 수도 있지만, 그걸 네 잘못으로 만들지는 않을게.
player|나도 모두에게 듣기 좋은 말만 하려고 하지 않을게. 지키지 못할 약속은 안 하고.
narrator|타이머가 켜졌다. 세계가 카메라 옆에서 뛰어오다가 걸음을 늦췄다.
world|옆에 서도 돼?
player|응. 서율도 조금만 이쪽으로 오면 다 들어오겠다.
seoyul|좋아. 이번엔 화면 밖에 남는 사람 없네.
narrator|셔터가 울리기 직전, 준연이 작게 웃었다. 누군가를 이긴 웃음은 아니었다.`),Z("harem-5-continue","모두의 의사를 다시 확인하고 각자의 속도로 관계를 이어 간다.",`player|오늘도 이 만남을 이어 가고 싶은지 물을게. 답이 달라져도 지난 시간을 벌로 돌려주지 않을 거야.
world|나는 이어 가고 싶어. 너를 붙잡는 다른 방법을 조금씩 배우는 중이니까.
seoyul|나는 내 속도로. 모두가 항상 같은 대답일 필요는 없다는 약속을 지키면서.
narrator|나머지 사람들도 자기 말로 대답했다. 사진 파일 이름에는 ‘완성’ 대신 오늘 날짜를 넣었다.`,He(),["harem-key-5"]),Z("harem-5-friends","소중한 관계를 유지하되 연애의 이름은 당분간 보류한다.",`player|지금은 이 관계를 한 이름으로 설명하기 어려워. 서로에게 약속한 존중은 지키되, 연애를 계속해야 한다는 의무는 두지 말자.
taehun|아직 결론 내리지 않았다고 의미 없는 가설은 아니지.
junyeon|그러면 내일 점심도 같이 먹자고 해도 돼?
player|응. 누군가의 결말이라서가 아니라 네가 같이 먹고 싶으면 물어봐 줘.`,[...L("trust",4),...L("jealousy",-4),q("global","harmony",3)],["harem-pause"]),Z("harem-5-post","공식 커플 인증이라며 동의 없이 사진과 관계를 공개한다.",`player|숨기는 것처럼 보이면 안 되잖아. 우리 관계를 공개할게.
world|공개하지 않기로 했어. 방금 내가 말한 거 잊었어?
seoyul|비밀로 감추는 것과 공개하지 않을 권리는 달라. 우리가 동의한 적 없어.
narrator|공유 버튼 위에서 손이 멈췄다. 함께 찍힌 사진이 모두의 마음을 대신 허락해 주지는 않았다.`,[...L("trust",-12),...L("jealousy",8),q("global","harmony",-14)],["harem-rule-break","unauthorized-share"]);const ga={world:["카메라 밖의 전세계","앵콜 뒤의 고백","완벽한 타임라인","읽음 1"],junyeon:["자신의 이름으로","늦게 도착한 답장","네가 없으면 못 해","깨진 비커"],hyunsol:["오차를 인정하는 법","한쪽 이어폰","정답만 남은 관계","무음 방송"],taewoo:["결승선 다음에도","다음 무대의 약속","마지막 카운트","센터 자리"],taehun:["별과 문장 사이","비가 그친 뒤","흐린 예보","지워진 문장"],seoyul:["미완성의 초상","첫 번째 관람객","복제된 색","빈 프레임"]},Aa={world:[["세계는 마지막 곡이 끝나자 카메라부터 껐다. 녹화 표시가 사라진 화면 위로 대강당의 작은 등이 비쳤다.","“{name}, 오늘 답장이 늦어도 괜찮아. 기다리는 동안 나도 할 일이 있으니까.”","세계가 내민 손을 잡았다. 그녀는 세게 쥐는 대신 내가 편하게 잡을 수 있도록 손가락을 조금 풀었다.","우리의 첫 번째 사진에는 태그도 업로드 시간도 없었다. 둘만 아는 날짜가 뒷면에 적혀 있었다."],["세계는 빈 객석에 앉아 내 감상을 끝까지 들었다. 이번엔 듣고 싶은 답을 먼저 정해 두지 않았다.","“다음 공연에도 와 줘. 못 오는 날은…… 미리 알려 주면 좋겠어.”","나는 갈 수 있는 날과 없는 날을 말했고 세계는 천천히 고개를 끄덕였다. 연애는 이제부터 연습할 일이었다."],["세계의 계정에는 행복한 사진이 매일 올라왔다. 내 연락처에는 익숙한 이름들이 하나씩 사라졌다.","“이제 우리 사이에 오해가 생길 일은 없어.” 세계가 내 휴대전화를 내 쪽으로 밀었다.","지도에는 밴드연습실 하나만 남아 있었다. 내일 무엇을 할지 묻는 선택지도 더는 나타나지 않았다."],["새 알림이 올 때마다 누가 무슨 말을 했는지 먼저 확인하게 되었다. 누군가는 내가 하지 않은 말을 믿고 있었다.","세계에게 그만하라고 말했을 때, 그녀는 대답 대신 읽음 표시를 보여 주었다.","“답장했잖아. 결국 나한테.” 그 문장이 더는 고백처럼 들리지 않았다."]],junyeon:[["발표 화면 첫 줄에는 방준연이라는 이름이 있었다. 준연은 내 쪽을 한 번 본 뒤 심사위원에게 시선을 돌렸다.","“이번 분석은 제가 했습니다. 한계부터 설명하겠습니다.” 목소리는 조금 떨렸지만 끝까지 사라지지 않았다.","화학실로 돌아오자 준연이 봉투를 건넸다. “고마워서만 주는 거 아니야. 좋아해서 주는 거야.”","이번에는 내 도움이 필요한 사람이 아니라 나와 함께 걷고 싶은 사람이 옆에 섰다."],["발표는 끝까지 매끄럽지 않았다. 준연은 틀린 부분을 스스로 고쳐 말했고 나는 페이지를 넘겼다.","저녁에 메시지가 왔다. “오늘 네가 대신 말하지 않아서 좋았어.”","그 아래, 한참 뒤에 한 줄이 더 도착했다. “내일 점심에도 같이 앉을래?”"],["준연은 발표실 입구에서 내 소매를 잡았다. “네가 없으면 안 될 것 같아.”","나는 또 대신 발표했다. 칭찬은 내게 돌아왔고 준연은 뒤에서 작게 박수를 쳤다.","가까워졌다고 생각했지만 준연이 혼자 할 수 있는 일은 처음보다 줄어 있었다."],["내가 웃으며 넘겼던 실수는 준연에게 끝나지 않은 일이었다. 화학실 문 앞에서 준연은 나를 보고 다른 길로 돌아갔다.","보고서에는 자료만 남았고 함께 정리하자는 메시지는 답을 받지 못했다.","깨진 비커는 새것으로 바꿨다. 그날의 말은 무엇으로도 교체할 수 없었다."]],hyunsol:[["현솔은 보고서 마지막 줄에 미해결 오차를 적었다. 지우거나 변명하지 않았다.","“모르겠다고 쓰는 게 이렇게 어려울 줄 몰랐어.” 잠깐 멈춘 뒤 내 얼굴을 보았다. “너에 대해서도 그래.”","현솔은 정확한 표현을 오래 골랐다. 결국 나온 말은 짧았다. “좋아해. 그건 오차 아니야.”","정답을 맞혔다는 표정보다, 틀려도 다시 이야기할 수 있다는 표정이 더 따뜻했다."],["현솔이 이어폰 한쪽을 내밀었다. 별다른 설명은 없었다.","실험실 환풍기 소리 대신 느린 피아노가 들렸다. 현솔은 한 곡이 끝날 때까지 말을 고르다가 내 손등에 가볍게 손을 얹었다.","“내일도 같이 듣자.” 정확하지 않아도 뜻은 알 수 있었다."],["우리의 발표는 가장 빈틈없었다. 지적할 오류도, 질문을 망설일 시간도 없었다.","상장을 들고 사진을 찍으려 했을 때 함께 설 친구는 남아 있지 않았다.","현솔이 빈 자리를 보고 말했다. “우리가 틀린 건 없잖아.” 나는 대답하지 못했다."],["스피커에서 현솔의 사적인 목소리가 흘러나왔다. 틀린 말 한마디를 다시 연습하는 소리였다.","허락 없이 공개한 내가 분위기를 풀려고 하자 현솔은 녹음기를 껐다.","그 뒤로 현솔은 필요한 실험 지시만 했다. 내가 듣고 싶었던 말은 끝내 다시 녹음되지 않았다."]],taewoo:[["태우는 무대에서 내려온 후 가장 먼저 내 감상을 물었다. 완벽한 기록이 아니라 구체적인 순간을 듣고 싶어 했다.","“오늘 못 춘 부분도 있었어.” 태우가 먼저 웃었다. “그래도 봐 줬지?”","나는 고개를 끄덕였다. 조명이 꺼져도 태우의 표정은 똑같이 선명했다.","“다음 무대도, 무대 없는 날도 같이 있어 줘.” 이번 부탁에는 이겨야 한다는 조건이 없었다."],["공연이 끝나자 태우는 다음 연습 일정을 꺼냈다. 이번에는 쉬는 날도 들어 있었다.","“춤 못 추는 날에도 너 만날 핑계는 있어야지.”","태우는 내 답을 기다리다가 먼저 웃었다. 경쟁이 끝난 자리에서 약속이 시작되었다."],["통증을 괜찮다고 넘긴 날들이 한 번에 돌아왔다. 공연은 중단되었고 교사가 태우를 무대 밖으로 안내했다.","내가 끝까지 하라고 했던 말만 귀에 남았다. 태우는 치료를 위해 남은 공연에서 빠졌다.","빈 무대에서 카운트가 다시 시작되었지만 태우의 자리는 비어 있었다."],["태우가 센터를 내려놓자 나는 무슨 말을 해야 할지 몰랐다. 잘했다는 칭찬 말고 준비한 말이 없었다.","“네가 좋아했던 건 나야, 가운데 서 있던 사람이야?”","질문이 끝난 뒤 음악은 재생되지 않았다. 태우는 나 없이 다음 동선을 연습했다."]],taehun:[["흐린 밤, 태훈은 망원경 덮개를 열지 않았다. 대신 관측일지와 시집을 나란히 놓았다.","“오늘은 별을 볼 확률이 낮았어. 그래도 오고 싶었어.”","나는 그 이유를 물었고 태훈은 책을 덮었다. “오늘 제일 보고 싶었던 건 하늘이 아니었으니까.”","관측 기록에는 흐림, 약한 바람, 동행 한 명이 적혔다. 시의 마지막 줄에는 우리의 이름이 있었다."],["비가 그친 뒤에도 구름은 남았다. 태훈은 다음 관측 날짜를 알려 주었다.","“그날도 흐리면 어떡하지?” 내가 묻자 태훈이 웃었다. “그럼 또 같이 기다리면 되지.”","틀릴 수 있다는 것을 알고도 기대할 수 있었다. 우리는 다음 약속을 관측일지에 함께 적었다."],["불확실하다는 말을 무시하고 행사를 강행했다. 결국 장비를 급히 회수해야 했다.","태훈은 손상 목록을 적으며 아무 말도 하지 않았다. 비 때문이 아니라 누군가 자신의 말을 듣지 않았기 때문이었다.","다음 관측 공지에 나는 초대되지 않았다."],["문예지에서 익숙한 문장을 찾았다. 마지막 연만 삭제되어 있었다.","태훈은 지구과학 보고서를 건네며 말했다. “네가 필요하다고 한 것만 남겼어.”","시집을 들고 돌아서는 사람에게 과학 이야기는 더는 붙잡을 말이 되지 못했다."]],seoyul:[["서율이 액자에 걸지 않은 그림을 내게 보여 주었다. 얼굴 옆에는 아직 연필 선이 남아 있었다.","“완성되면 보여 준다고 했는데, 생각이 바뀌었어. 그리는 동안에도 네가 알아 줬으면 해서.”","나는 빈 부분을 고치려 하지 않고 옆에 앉았다. 서율은 내 대답을 듣고 다음 색을 골랐다.","우리의 이야기는 미완성이었고, 그래서 함께 바꿀 수 있었다."],["전시실이 비자 서율이 작은 의자를 내 옆에 놓았다. 마지막 곡을 둘이서 들었다.","“첫 번째 관람객이 마지막까지 남았네.”","서율이 다음 작업에도 와 달라고 했다. 초대장은 악보 뒷면에 손글씨로 적혀 있었다."],["조회 수가 늘수록 서율의 표정은 조용해졌다. 편집된 영상에는 원래 넣고 싶었던 장면이 하나도 없었다.","“유명해졌으니까 괜찮다는 거야?” 서율은 내게 묻고 원본을 닫았다.","게시물에는 좋아요가 남았다. 밴드실의 키보드 자리에는 먼지가 쌓이기 시작했다."],["버리려는 그림을 내가 붙잡았다. 지켜 준다고 생각했다.","서율은 그림에서 손을 떼었다. “이제 네 거네. 내가 어떻게 느끼든 상관없으니까.”","액자 안에는 초상이 남았지만 다음 그림을 보여 줄 사람은 돌아오지 않았다."]]},xn=Object.entries(ga).flatMap(([e,n])=>n.map((a,o)=>({id:`${e}-${["true","good","bad1","bad2"][o]}`,type:["TRUE","GOOD","BAD","BAD"][o],title:a,subtitle:o===0?"서로를 이해하는 일에서 시작된 사랑":o===1?"아직 써 내려갈 이야기가 남아 있다":"돌아볼 수 있다면, 다른 말을 건넬 수 있을까",text:Aa[e][o],hint:o===0?"호감 80 · 신뢰 75 · 질투 35 이하. 개인 루트에서 서로의 선택을 존중하세요.":o===1?"호감과 신뢰를 함께 쌓으세요.":"눈앞의 호감만을 위해 약속과 경계를 무너뜨리면 관계가 흔들립니다.",character:e}))),va=[{id:"normal",type:"NORMAL",title:"증명되지 않은 가설",subtitle:"어떤 시작은 이름을 붙이지 않아도 남는다",text:["페어가 끝나자 교실은 평소 모습으로 돌아왔다. 특별한 메시지에 답하는 대신 나는 내일의 시간표를 펼쳤다.","전학 첫날에는 모르던 여덟 이름이 출석부에 적혀 있었다. 연인이 되지 않았다고 모든 만남이 실패한 것은 아니었다.","창밖에서 다시 종이 울렸다. 내일도 1학년 1반으로 갈 것이다."],hint:"루트 선택에서 혼자 돌아가기를 선택하세요."},{id:"common-safety",type:"BAD",title:"실험실 출입 금지",subtitle:"운영이 취소되었습니다",text:["통제할 수 있었던 위험을 여러 번 넘겼다. 교사는 학생들의 안전을 위해 부스 운영을 취소했다.","빈 탁자 위에 운영 중단 안내문이 놓였다. 다음 실험은 처음부터 안전교육을 다시 받는 것으로 시작해야 했다."],hint:"위험한 행동을 반복하면 안전 수치가 떨어집니다."},{id:"common-fraud",type:"BAD",title:"조작된 결과",subtitle:"좋은 결과와 정직한 결과는 같은 말이 아니었다",text:["심사위원은 그래프보다 먼저 원본 기록을 요구했다. 지운 값은 다른 백업에서 발견되었다.","실패한 실험보다 실패를 숨긴 선택이 더 큰 문제가 되었다. 1반의 발표는 중단되었다."],hint:"데이터를 숨기고 연구 윤리를 잃으면 심사에서 실격됩니다."},{id:"common-alone",type:"BAD",title:"아무도 기다리지 않는 방과 후",subtitle:"오늘 만날 수 있는 사람이 없습니다",text:["교실 불이 하나씩 꺼졌다. 내 휴대전화에는 프로젝트 공지 외에는 아무 연락도 남아 있지 않았다.","지도에서 익숙한 얼굴들이 사라졌다. 누구에게 먼저 사과해야 할지, 문 앞에서 오래 서 있었다."],hint:"신뢰를 잃는 선택을 반복하면 모두가 거리를 둡니다."},{id:"common-war",type:"BAD",title:"1반 냉전",subtitle:"하나의 전시, 서로 다른 일곱 개의 침묵",text:["사람마다 다르게 한 약속들이 한꺼번에 드러났다. 조별 채팅은 일정 대신 확인과 반박으로 채워졌다.","한 반이라는 이유만으로 관계를 다시 묶을 수는 없었다. 합동 전시는 끝내 열리지 않았다."],hint:"높은 질투와 낮은 조화가 겹치면 팀이 무너집니다."},{id:"common-unfinished",type:"BAD",title:"완성되지 않은 부스",subtitle:"준비 중이라는 문구는 끝내 내려가지 않았다",text:["약속한 장비는 연결되지 않았고 정리하지 않은 자료는 상자 속에 남았다.","사람들이 지나간 뒤에야 알았다. 좋은 계획은 시간을 들여야 완성된다는 것을."],hint:"공통 작업과 자유 행동으로 페어 완성도를 높이세요."},{id:"harem-true",type:"TRUE",title:"다중성의 해답",subtitle:"일곱 명, 같은 사진 속의 서로 다른 마음",text:["우리는 각자 원하는 관계를 여러 번 설명했다. 누구도 다른 사람을 대신해 동의하지 않았다. 떠나고 싶을 때는 말할 수 있어야 했다.","세계가 타이머를 맞추고 달려왔다. “이 사진은 아무 데도 안 올릴 거야. 우리만 볼 거니까.”","태우가 자리를 만들고, 준연이 내 소매를 당겼다. 현솔이 기울어진 카메라를 고치는 동안 태훈과 서율이 웃었다.","하나의 답으로 다 설명할 수는 없었다. 그래서 우리는 계속 물어보기로 했다. 셔터 소리가 긴 여름의 끝을 찍었다."],hint:"여섯 명의 신뢰 85, 질투 20 이하. 관계의 규칙을 함께 지키세요."},{id:"harem-good",type:"GOOD",title:"아직 결론 내리지 않은 가설",subtitle:"서두르지 않는 것도 하나의 대답",text:["지금 당장 관계에 이름을 붙이지 않기로 했다. 호감을 느낀다는 것과 같은 관계를 원하는 것은 다른 질문이었다.","단체 채팅에는 다음 전시 일정과 점심 메뉴가 함께 올라왔다. 누구도 끝까지 남겠다는 약속을 강요하지 않았다.","우리는 다음에 또 이야기하기로 했다. 답을 미룬 자리에 거짓말 대신 시간이 남았다."],hint:"서로의 마음을 인정하되 결론을 강요하지 마세요."},{id:"harem-war",type:"BAD",title:"일곱 방향의 침묵",subtitle:"공평하다는 말만으로는 부족했다",text:["같이 좋아한다는 말은 갈등을 해결해 주지 않았다. 일정과 약속이 겹칠 때마다 누군가 조용히 물러났다.","결국 아무도 더는 묻지 않았다. 일곱 명의 채팅방에는 읽지 않은 행사 공지만 남았다."],hint:"관계 규칙을 어기거나 질투를 방치하면 다자 루트가 무너집니다."},{id:"harem-lonely",type:"BAD",title:"한 사람만 남은 단체 채팅",subtitle:"함께하기로 했던 약속은 어디로 갔을까",text:["나간 사람의 이름이 한 줄씩 표시되었다. 나는 세계의 행동을 모르는 척한 선택들을 떠올렸다.","“봐. 끝까지 남은 건 나뿐이잖아.” 세계의 메시지가 도착했다.","채팅방 제목은 여전히 일곱 명의 이름이었다. 그중 다섯 개는 더 이상 불러도 대답하지 않았다."],hint:"세계의 집착과 규칙 위반을 반복해서 묵인하면 관계가 고립됩니다."}];xn.push(...va);Object.fromEntries(xn.map(e=>[e.id,e]));const Yt=[{title:"지워진 크레딧",detail:"두 이름으로 저장한 노래의 공개본에서 한 이름이 사라졌다. 첫 재판 뒤에도 사과와 관계 회복은 같은 일이 아니었다."},{title:"멈춘 영상의 99점",detail:"같지 않은 기준으로 만든 점수 표를 고쳤다. 태우에게 필요한 시선이 순위 밖에서도 남을지가 새로운 질문이 됐다."},{title:"닫힌 교실의 결석자",detail:"민혁과 준연의 안전을 확인하고 기록의 빈칸을 설명했다. 업무가 아닌 이름으로 서로를 부를 시간이 생겼다."},{title:"전시에 걸린 비공개 한 줄",detail:"시의 출처를 아는 것과 공개 허락을 받은 것은 달랐다. 전시의 빈칸과 아직 하지 않은 고백이 각자의 선택으로 남았다."},{title:"빌린 얼굴과 마지막 약속",detail:"얼터에고의 얼굴을 쓴 협박 발송기를 분리했다. 페어 첫날 이후의 약속은 더 이상 프로그램이나 점수판이 대신 정하지 않았다."}],ft=e=>{let n=2166136261;for(const a of e)n^=a.charCodeAt(0),n=Math.imul(n,16777619);return n>>>0};function at(e,n){const a=[...e];let o=n||1;for(let r=a.length-1;r>0;r--){o^=o<<13,o^=o>>>17,o^=o<<5;const u=(o>>>0)%(r+1);[a[r],a[u]]=[a[u],a[r]]}return a}const wa={world:["작은 합주실","♫"],junyeon:["둘이 하는 실험 준비","⚗"],hyunsol:["검증 파트너","±"],taewoo:["춤추기 전 워밍업","♪"],taehun:["관측 노트","✦"],seoyul:["색과 소리 작업실","◐"]},ka={world:"세계가 휴대전화를 내려놓고, 둘이 맞춘 소리를 한 번 더 흥얼거렸다.",junyeon:"준연이 확인한 칸에 직접 표시를 남겼다. 이번에는 자기 목소리가 조금 더 또렷했다.",hyunsol:"현솔이 네 기록 옆에 확인 표시를 그렸다. 둘이 같은 기준으로 검토한 결과였다.",taewoo:"태우가 활짝 웃으며 손바닥을 내밀었다. 다음 연습도 같이하자는 약속 같았다.",taehun:"태훈이 관측 노트의 빈칸에 오늘 함께 확인한 것을 적었다.",seoyul:"서율이 완성한 작업 한쪽에 네가 고른 색으로 작은 점을 남겼다.",juhan:"주한이 노트북을 살짝 네 쪽으로 돌렸다. 함께 확인한 부분에 체크가 하나 더 생겼다.",minhyuk:"민혁이 점검표를 덮고 고개를 끄덕였다. 이제 둘 다 잠깐 쉬어도 되겠다."};function bn(e,n,a){const o=ft(`${e}:${n}`),r=ka[e],u=R=>({mode:"timing",prompt:R,target:35+o%30,tolerance:15,cycleMs:4200,action:"지금 맞추기",explain:r}),c=(R,P)=>({mode:"memory",prompt:R,symbols:P,pattern:Array.from({length:a>=3?4:3},(E,M)=>ft(`${n}:note:${M}`)%P.length),action:"패턴 들어 보기",explain:r}),d=(R,P)=>({mode:"order",prompt:R,answer:P,items:at(P,o),action:"이 순서로 확인",explain:r}),j=(R,P,E)=>({mode:"balance",prompt:R,target:35+o%30,tolerance:14,left:P,right:E,action:"조절 마치기",explain:r}),b=(R,P)=>({mode:"matching",prompt:R,pairs:P.map(([E,M])=>({left:E,right:M})),options:at(P.map(E=>E[1]),o^91),action:"짝 확인",explain:r}),A=R=>{const P=[[0,1,2,6,10,11,15],[0,4,5,9,13,14,15],[0,1,5,6,7,11,15]],E=P[o%P.length],M=Array.from({length:16},(S,D)=>D).filter(S=>!E.includes(S));return{mode:"path",prompt:R,size:4,start:0,goal:15,solution:E,blocked:at(M,o).slice(0,5),action:"이 길로 연결",explain:r}},p=(R,P,E)=>({mode:"search",prompt:R,target:P,items:at([P,P,P,...Array.from({length:13},(M,S)=>E[S%E.length])],o),action:"관찰 완료",explain:r}),z={world:()=>[c("세계가 두드린 짧은 리프를 같은 순서로 돌려주자. 필요하면 몇 번이든 다시 들을 수 있다.",["도","미","솔","라"]),b("악기 케이블에 붙일 이름표를 같은 역할의 설명과 연결하자.",[["마이크","목소리 입력"],["건반","멜로디 연주"],["스피커","소리 출력"]]),u("세계가 세는 박자에 맞춰 합주 시작 신호를 보내자. 분홍 구간 안에서 멈추면 된다."),p("세계의 악보에 흩어진 쉼표를 찾아 쉬어 갈 자리를 표시하자.","쉼",["도","미","솔"])],junyeon:()=>[d("준연과 깨진 기구 주변을 정리한다. 먼저 접근을 막고, 담당자에게 알린 뒤 안전하게 수거하자.",["접근 막기","담당자 알리기","보호구·도구로 수거"]),p("준연의 준비 목록에서 점검 표시가 필요한 기구를 찾아보자.","점검",["완료","완료","보관"]),b("준연과 준비물의 쓰임을 확인해서 올바른 라벨을 연결하자.",[["보안경","눈 보호"],["집게","물체 집기"],["기록지","관찰 적기"]]),A("준연이 카트를 옮길 통로를 함께 찾는다. 상자가 놓인 칸을 피해 출발점부터 도착점까지 이어 보자.")],hyunsol:()=>[j("현솔과 화면 밝기를 조정한다. 검증용 표시가 보이는 분홍 범위 안에 손잡이를 맞추자.","어둡게","밝게"),b("현솔의 검증 노트에서 서로 맞는 항목을 연결하자.",[["측정값","단위 기록"],["재측정","조건 동일"],["원본","수정 전 보존"]]),p("현솔과 전사한 표를 살펴본다. 재확인 표시가 남은 칸을 모두 찾아보자.","확인?",["확인✓","보존","확인✓"]),d("값이 다를 때의 검증 순서를 정하자. 원본을 남긴 다음 조건을 확인하고 다시 측정한다.",["원본 보존","조건 확인","재측정"])],taewoo:()=>[u("태우와 시작 카운트를 맞춘다. 표시가 분홍 구간에 들어오면 버튼을 눌러 보자."),A("태우의 무대 동선을 연결한다. 소품 칸을 피해 시작 위치에서 마지막 포즈 위치까지 이어 보자."),c("태우가 정한 짧은 스텝 조합을 순서대로 따라 해 보자. 동작표는 다시 볼 수 있다.",["왼발","오른발","박수","멈춤"]),p("태우와 연습 전 바닥 표시를 점검한다. 들뜬 테이프 표시를 모두 찾아보자.","들뜸",["고정","고정","빈칸"])],taehun:()=>[p("태훈과 관측 메모를 분류한다. 구름 때문에 다시 봐야 하는 기록을 찾아 표시하자.","구름",["맑음","기록","맑음"]),A("태훈과 안전한 장비 이동 경로를 그린다. 장비가 놓인 칸을 피해 관측 지점까지 이어 보자."),j("태훈의 관측 기록 화면을 맞춘다. 분홍 기준 범위 안에서 읽기 편한 밝기를 고르자.","어둡게","밝게"),c("태훈이 관측 순서를 네 칸의 기호로 정리했다. 같은 순서로 기록해 보자.",["달","별","구름","바람"])],seoyul:()=>[j("서율의 밑그림 위에 배경을 겹친다. 선이 살아 있는 분홍 농도 범위에 맞추자.","옅게","진하게"),b("서율의 작업 도구와 쓰임을 짝지어 정리하자.",[["연필","밑그림"],["붓","채색"],["지우개","선 수정"]]),c("서율이 만든 전시 조명의 짧은 색 순서를 기억해 보자. 다시 확인해도 괜찮다.",["노랑","파랑","분홍","초록"]),p("서율과 포스터 교정지를 살펴본다. 아직 비어 있는 서명 칸을 찾아보자.","서명□",["서명✓","확인✓","여백"])],juhan:()=>[A("주한의 작은 회로 퍼즐을 완성한다. 막힌 칸을 피해 입력에서 출력까지 한 줄로 연결하자."),d("주한과 버그 수정 절차를 정하자. 원본을 보존하고 문제를 재현한 뒤 수정본을 검증한다.",["원본 보존","문제 재현","수정·재검증"]),p("주한의 시험 화면에서 오류 표시가 남은 칸을 모두 찾아보자.","오류",["정상","대기","정상"]),b("주한과 화면의 버튼에 알맞은 설명을 연결하자.",[["저장","현재 작업 보관"],["되돌리기","마지막 수정 취소"],["미리보기","공개 전 확인"]])],minhyuk:()=>[p("민혁의 점검표에서 확인이 끝나지 않은 칸을 찾아 현장 점검 대상으로 표시하자.","미확인",["완료","보류","완료"]),A("민혁과 비상 통로 안내도를 확인한다. 적치물 칸을 피해 출구까지 안전한 길을 이어 보자."),d("민혁과 새로운 안내를 전달한다. 사실을 확인한 뒤 안내를 고치고 전달 여부를 확인하자.",["사실 확인","안내 정정","전달 확인"]),b("민혁과 교내 문제에 맞는 연락 장소를 연결하자.",[["몸이 아플 때","보건실"],["분실물 접수","학생 안내실"],["수업 상담","교무실"]])]}[e](),C=ft(`${n}:rotation`)%z.length;return Array.from({length:3},(R,P)=>z[(C+P)%z.length])}function $e(e,n){return e.mode==="timing"||e.mode==="balance"?typeof n=="number"&&Number.isFinite(n)&&Math.abs(n-e.target)<=e.tolerance:Array.isArray(n)?e.mode==="memory"?n.length===e.pattern.length&&e.pattern.every((a,o)=>n[o]===a):e.mode==="order"?n.length===e.answer.length&&e.answer.every((a,o)=>n[o]===a):e.mode==="matching"?n.length===e.pairs.length&&e.pairs.every((a,o)=>n[o]===a.right):e.mode==="search"?new Set(n).size===n.length&&n.length===e.items.filter(a=>a===e.target).length&&n.every(a=>typeof a=="number"&&e.items[a]===e.target):!n.length||n[0]!==e.start||n[n.length-1]!==e.goal||new Set(n).size!==n.length?!1:n.every((a,o)=>{if(typeof a!="number"||!Number.isInteger(a)||a<0||a>=e.size**2||e.blocked.includes(a))return!1;if(o===0)return!0;const r=Number(n[o-1]);return Math.abs(Math.floor(a/e.size)-Math.floor(r/e.size))+Math.abs(a%e.size-r%e.size)===1}):!1}function Na(e,n,a,o,r){const[u,c]=wa[e],d=Yt[Math.max(0,Math.min(o,Yt.length-1))];return{id:`${e}-${n}-${o}-${r}`,title:`${pn[e].name} · ${u}`,icon:c,subtitle:`${ke[n].name} · ${d.title}`,context:"서로 다른 세 가지 활동을 함께한다. 서두르지 않아도 괜찮다. 다시 시도하거나 한 활동만 건너뛸 수도 있다.",rounds:bn(e,`${a}:${o}:${r}:${n}`,o)}}const l=(e,n,a,o,r)=>({label:e,text:n,reply:a,affection:o,trust:r}),N=(e,n,a,o,r,u,c,d,j,b,A)=>({id:`${e}-${n}`,character:e,location:a,title:o,affection:r,trust:u,motif:c,props:d,beats:j,question:b,choices:A}),Pa=[N("world","one-seat","auditorium","관객 한 명의 리허설",0,0,"ticket",["빈 객석","A열 7번","첫 번째 관객"],["객석에는 나만 앉아 있었다. 세계가 무대 위에서 마이크 높이를 낮췄다.","“표정 숨기지 마. 오늘은 조회수 대신 네 얼굴 보면서 부를 거야.”","후렴을 놓친 세계가 웃었다. 나는 박수를 멈추지 않았고, 세계는 바로 그 소절을 다시 불렀다."],"다시 부를 때는 어디 앉을래?",[l("객석","중간 열로 옮겨 실제 관객에게 들리는 소리를 확인한다.","좋아. 대신 끝나면 제일 먼저 여기로 와.",5,9),l("앙코르","같은 자리에 남아 방금 놓친 소절부터 앙코르를 청한다.","그 부분까지 좋았다는 말, 기억해 둘 거야.",10,5),l("빈자리","앞으로 매 공연의 옆자리를 나만 위해 비워 달라고 한다.","…그 약속을 지킬 수는 있어? 빈자리는 생각보다 크게 보여.",6,-6)]),N("world","unposted","media","올리지 않은 12초",15,10,"screen",["00:12","공개하지 않음","원본 보관"],["영상 속 세계는 웃다가 카메라를 잊고 하품했다. 삭제 창 위에서 커서가 멈췄다.","“너는 이런 내가 더 좋다고 할 것 같아서. 그게 좀 얄미워.”","세계는 업로드 창만 닫았다. 짧은 영상은 지워지지 않은 채 둘 사이에 남았다."],"이 12초는 어떻게 할까?",[l("보관","세계만 열 수 있는 원본 폴더에 남겨 두자고 한다.","남겨 두는 거랑 보여 주는 건 다른 거네. 그건 좋아.",5,10),l("한 번 더","허락을 구하고 웃음이 터진 구간만 한 번 더 본다.","한 번만. …아니, 같이 웃을 거면 두 번.",10,5),l("공개 제안","꾸밈없는 모습이 인기 있을 테니 바로 올리자고 재촉한다.","내가 남겨 둔 이유가 꼭 인기 때문이어야 해?",-3,-8)]),N("world","pick","band","손바닥의 기타 피크",20,15,"ribbon",["기타 피크","느슨한 매듭","다음 합주"],["세계가 이름 없는 피크에 짧은 리본을 묶었다. 매듭이 자꾸 풀려 두 번이나 다시 묶었다.","“분실 방지용이야. 네가 갖고 있으면 내가 다시 만나러 와야 하잖아.”","피크가 손바닥에 떨어졌다. 세계는 손을 접어 주려다 멈추고 내 대답을 기다렸다."],"맡아 줄래, 아니면 다른 방법을 생각해 볼까?",[l("반환 약속","다음 합주 때 직접 돌려주겠다고 날짜를 정한다.","그날은 네 손부터 확인할 것 같아.",9,8),l("교환","내 책갈피와 잠깐 바꿔 보관하자고 제안한다.","서로 잃어버리면 안 되는 거네. 공평해서 더 긴장돼.",12,4),l("독점","돌려주지 않는 대신 다른 친구와 합주하지 말라고 장난친다.","그 농담은 이상하게 웃기지 않네. 피크랑 사람은 다르잖아.",-3,-7)]),N("world","notification","computer","뒤집어 둔 알림",30,20,"screen",["공동 편집","알림 끄기","집중 10분"],["공동 편집 화면에 다른 친구의 이름이 떴다. 세계는 하려던 말을 삼켰다.","“누군지 캐묻고 싶었어. 그런데 그러면 네가 내 앞에서만 조심하게 되겠지.”","세계가 자기 휴대전화를 먼저 뒤집었다. 모니터에는 두 사람이 만들던 파형만 남았다."],"지금은 네 집중을 조금 빌려도 돼?",[l("타이머","함께 작업할 10분을 정하고 그 뒤에는 각자 답장한다.","끝이 있는 약속이라서 오히려 믿을 수 있네.",7,11),l("안심","편집부터 마친 뒤 오늘 좋았던 순간을 하나씩 말한다.","내가 먼저 말하면 길어질 텐데. 들어 줄 거지?",11,5),l("증명","안심시키려고 다른 친구의 개인 대화를 보여 준다.","보고 싶었던 건 맞는데… 그 친구는 보여 줘도 된대?",2,-10)]),N("world","reflection","garden","유리창 밖의 두 사람",35,25,"frame",["반사광","카메라 밖","눈으로 기억"],["정원 유리창에 나란히 선 두 사람의 모습이 겹쳤다. 세계가 자동으로 휴대전화를 들었다.","“사진 찍어도 돼? 오늘은 네 대답부터 듣고 싶어서.”","햇빛이 움직이자 반사된 얼굴이 흐려졌다. 세계는 사라지는 빛보다 내 쪽을 오래 바라보았다."],"한 장 남길까, 그냥 걸을까?",[l("한 장","공개하지 않는 조건으로 사진 한 장을 같이 찍는다.","보관함 이름은 내가 정해도 돼? 너무 티 나게는 안 할게.",10,7),l("산책","촬영은 거절하고 유리창을 따라 조금 더 걷는다.","응. 사진이 없어도 오늘이 없어지는 건 아니니까.",5,11),l("몰래 촬영","세계가 돌아선 순간 몰래 표정을 찍는다.","방금 허락부터 묻기로 한 건 나만의 약속이었어?",-6,-10)]),N("world","silent-vocal","roof","목소리 없는 후렴",45,35,"wave",["휴식 표시","손끝의 박자","무성 앙코르"],["목을 쉬라는 안내를 받은 세계가 옥상 벤치에 앉아 입술로만 가사를 불렀다.","들리지 않는 후렴에 맞춰 내가 무릎을 두드리자, 세계가 틀린 박자를 손가락으로 고쳤다.","노래가 끝났다. 세계는 메모지에 “목소리 없어도 알아보네”라고 쓰고 내 쪽으로 밀었다."],"세계가 메모지 아래에 작은 빈칸을 남겼다.",[l("답가","빈칸에 박자 네 개를 그려 조용한 답가를 만든다.","이건 녹음해도 아무도 못 알아듣겠다. 우리만 알겠네.",12,6),l("휴식","물과 쉬는 시간을 챙기고 말하지 않아도 된다고 적는다.","오늘 나한테 노래 안 해도 된다고 한 사람, 너뿐이야.",7,12),l("한 소절","아쉬우니 작은 소리로라도 후렴만 불러 달라고 한다.","오늘은 못 불러. 좋아하는 일이라도 쉬어야 하니까.",-4,-8)]),N("world","two-tickets","classroom","수신인 없는 초대장",60,45,"ticket",["초대장 두 장","아직 빈 이름","같이 갈래?"],["세계의 책상 위에 교내 공연 초대장이 두 장 놓여 있었다. 수신인 칸은 비어 있었다.","“네 이름부터 써 버리면 거절하기 어려울까 봐. 이번에는 안 썼어.”","세계가 펜을 내 쪽으로 굴렸다. 장난기 없는 눈이, 내가 멈추거나 적는 순간을 기다렸다."],"내 공연, 네가 고른 자리에서 봐 줄래?",[l("서명","초대장에 이름을 적고 끝난 뒤 만날 장소를 정한다.","네가 직접 쓴 거야. 그 사실만으로 오늘은 충분해.",15,10),l("일정 확인","시간표를 확인하고 오늘 저녁까지 답하겠다고 약속한다.","기다릴게. 확인한다는 말이 거절이 아니라는 것도 배울게.",6,12),l("확답 회피","갈 생각은 없지만 기대하는 얼굴 때문에 간다고 적는다.","그러면 그 자리만 보고 노래할 것 같아. 빈말이면 곤란해.",3,-9)]),N("junyeon","title-slide","computer","제목 슬라이드의 이름",0,0,"screen",["발표 제목","방준연","저장 완료"],["준연이 첫 슬라이드의 자기 이름을 지웠다가 다시 썼다. 커서가 성 앞에서 깜빡였다.","“누가 내 이름 보고 웃으면, 내용까지 안 들을 것 같아서.”","내가 옆자리로 의자를 옮기자 준연은 이름을 남긴 채 저장했다. 작은 저장음이 또렷하게 들렸다."],"첫 문장만 들어 줄 수 있어?",[l("리허설","발표자 이름을 부르고 정식으로 시작 신호를 준다.","그렇게 부르니까… 진짜 내 발표 같아.",7,10),l("질문 카드","준연이 가장 자신 있는 질문 하나를 먼저 적는다.","그 질문이면 나도 안 보고 답할 수 있어.",5,12),l("대신 발표","준연 이름은 두되 발표는 내가 전부 하겠다고 한다.","이름만 남아 있으면, 내가 한 일도 남는 걸까?",1,-8)]),N("junyeon","bookmark","library","빌려 간 페이지의 주인",15,10,"note",["반납 도서","종이 책갈피","질문 한 줄"],["반납하려던 책에서 준연의 손글씨 책갈피가 떨어졌다. “이 부분은 설명이 이상하다.”","준연은 메모를 숨기려다가 멈췄다. “유명한 책인데 내가 잘못 읽은 걸 수도 있잖아.”","같은 단락을 나란히 읽었다. 준연의 손끝이 문장 하나를 정확히 짚으며 처음으로 망설임을 멈췄다."],"내가 이상하다고 느낀 부분부터 말해도 돼?",[l("대조","원문과 참고 자료를 나란히 두고 설명을 듣는다.","틀렸다고 단정하지 않아도 질문할 수 있는 거네.",5,12),l("서명","준연의 질문 아래에 내 궁금한 점도 적는다.","다음 사람이 보면 혼자 고민한 흔적은 아니겠다.",10,7),l("권위","유명한 저자니까 준연이 잘못 읽었을 거라고 말한다.","…그래도 어디가 틀렸는지는 알고 싶어.",-5,-8)]),N("junyeon","empty-chair","cafeteria","가방이 차지한 옆자리",20,15,"cards",["식판 두 개","빈 의자","같이 앉기"],["준연은 사람 없는 테이블 끝에 가방을 놓았다. 내가 다가오자 급히 가방을 끌어안았다.","“예약한 건 아니야. 그냥… 누가 앉겠다고 하면 어쩌지 싶어서.”","앉아도 되는지 묻자 준연이 고개를 끄덕였다. 식판 두 개가 테이블의 넓은 빈칸을 채웠다."],"오늘은 말 안 끊기고 밥 먹을 수 있을까?",[l("천천히","한입씩 먹는 속도에 맞춰 발표 이야기부터 듣는다.","대답 빨리 안 해도 되는 점심은 오랜만이야.",9,9),l("소소한 취향","오늘 반찬을 서로 한 가지씩 골라 평을 붙인다.","실험 말고 이런 얘기도 나랑 해 주는구나.",11,5),l("주목","다른 테이블에 큰 소리로 준연이 내 친구라고 알린다.","조금만 작게 말해 줘. 지금은 시선이 너무 많아.",-3,-7)]),N("junyeon","label","chemistry","이번에는 내가 붙이는 라벨",30,20,"glass",["보안경","시료 라벨","재확인"],["실험 준비 중 준연이 내 손에 들린 라벨을 보았다. 손을 뻗었다가 눈치를 살폈다.","“그 번호는 옆 시료 거야. 미안… 아니, 바꾸는 게 맞아.”","실험을 멈추고 원기록을 대조했다. 준연은 맞는 번호를 자기 손으로 붙이고 보안경을 고쳐 썼다."],"내가 확인한 항목도 체크표에 넣을까?",[l("공동 확인","준연 이름으로 확인 항목을 추가하고 서로 한 번 더 읽는다.","내가 고친 흔적도 남겨도 되는구나.",7,13),l("고마움","오류를 발견해 줘서 고맙다고 짧고 분명하게 말한다.","사과 대신 그 말을 들으니까 좀 어색하고… 좋아.",12,7),l("축소","아직 실험 전이니 별일 아니었다며 그냥 넘긴다.","그래도 시작하기 전에 발견한 게 중요하지 않아?",-2,-8)]),N("junyeon","question-box","classroom","익명 질문함을 연 사람",40,30,"cards",["질문함","접힌 종이","답변 준비"],["페어 예행연습 질문함에서 준연의 주제에 관한 쪽지가 나왔다. 준연은 먼저 칭찬인지 확인했다.","“이건 비웃는 질문 아니지? 정말 궁금해서 쓴 것 같지?”","준연은 구겨졌던 종이를 폈다. 답변 첫 줄을 적기 시작하자 교실 뒤의 소음이 더는 손을 멈추게 하지 못했다."],"추가 질문까지 받는 건 아직 무리일까?",[l("범위 정하기","답할 수 있는 범위와 나중에 확인할 범위를 나눈다.","모르는 질문을 남겨도 발표가 끝나는 건 아니네.",6,12),l("질문자 역할","내가 질문자 역할을 맡되 준연이 먼저 끝낼 신호를 정한다.","그럼 한 번 더. 이번에는 눈 보고 해 볼게.",11,8),l("대본 암기","틀리면 안 되니 내가 쓴 답만 그대로 외우게 한다.","그 문장은 잘 썼는데… 내 말로 바꾸면 안 돼?",-3,-9)]),N("junyeon","voice","media","삭제하지 않은 목소리",50,40,"wave",["녹음 01","긴 침묵","끝까지 재생"],["녹음 속 준연은 자기소개 전에 여섯 초나 침묵했다. 준연의 손이 정지 버튼으로 향했다.","“이 부분 들으면 다 답답해할 거야.” 나는 재생을 계속해도 되는지 물었다.","침묵 뒤의 문장은 분명했다. 준연은 자기 목소리를 끝까지 듣고 재녹음 대신 파일 이름을 바꿨다."],"숨 고르는 부분을 얼마나 남기는 게 좋을까?",[l("두 버전","원본을 보관하고 침묵만 줄인 사본을 함께 비교한다.","실수를 지우는 게 아니라 듣기 편하게 만드는 거네.",7,12),l("첫 문장","내가 좋았던 정확한 문장을 짚어 다시 들어 본다.","그 문장, 나도 사실 마음에 들었어.",13,6),l("몰래 편집","준연이 잠깐 돌아선 사이 말을 빠르게 잘라 붙인다.","내 목소리인데 내가 고를 수 없는 건 싫어.",-6,-12)]),N("junyeon","first-invitation","walk","이번엔 내가 먼저",60,45,"map",["갈림길","느린 걸음","먼저 한 부탁"],["산책로 갈림길에서 준연이 소매 대신 자기 가방 끈을 꼭 잡았다. 입술이 두 번 움직였다.","“시간 있으면 왼쪽으로 조금만 더 걸을래? 네가 먼저 물어봐 주길 기다리기만 해서.”","나는 갈림길 앞에 멈췄다. 준연은 부탁을 거두지 않고 내 대답이 들어갈 자리를 남겼다."],"오늘은 내가 같이 있고 싶어서 물어본 거야.",[l("동행","왼쪽 길로 함께 걸으며 준연에게 이야기 주제를 맡긴다.","그럼 실험 말고… 네가 좋아하는 계절부터.",15,9),l("다음 약속","오늘 귀가 시간을 알리고 내일 걸을 시간을 같이 정한다.","거절인데 약속이 남으니까 덜 무섭네.",6,13),l("장난","용기 낸 모습이 웃기다며 같은 부탁을 다시 시킨다.","방금 말하는 데 생각보다 오래 걸렸어.",-8,-10)]),N("hyunsol","meniscus","chemistry","같은 눈높이의 눈금",0,0,"glass",["수평한 시선","메니스커스","같은 측정값"],["현솔이 “눈높이부터”라고 말하다 내 의자를 낮췄다. 둘의 시선이 눈금 높이에서 마주쳤다.","“위에서 보면 크게 읽혀. …나도 방금은 네 표정을 잘못 읽었고.”","수면이 잔잔해진 뒤 각자 값을 적었다. 일치한 숫자 옆에 현솔이 조그만 체크 두 개를 그렸다."],"다음 측정은 누가 읽을까?",[l("교대","측정자와 기록자를 교대해 같은 절차를 확인한다.","역할 바꾸면 서로 놓친 게 보이겠지.",6,11),l("표정","어떤 표정으로 보였는지 조심스럽게 되묻는다.","지적받기 싫어하는 줄 알았어. 먼저 물을 걸 그랬네.",10,6),l("생략","숫자가 맞았으니 나머지 측정은 건너뛰자고 한다.","한 번 맞은 건 반복 검증을 대신하지 못해.",-3,-9)]),N("hyunsol","correction","classroom","사과문의 빨간 펜",15,10,"note",["초안","취소선","내가 잘못했어"],["현솔이 준연에게 줄 사과문에 빨간 줄을 그었다. “하지만”으로 시작한 문장들이 모두 지워졌다.","“비커를 깬 건 실수고, 내가 몰아붙인 건 내 선택이잖아. 둘을 섞으면 안 되겠지.”","남은 문장은 짧았다. 현솔은 종이를 반으로 접고 직접 전하겠다고 일어섰다."],"이 정도면 변명처럼 안 들릴까?",[l("책임","사과할 행동과 앞으로 바꿀 행동이 분명한지 같이 읽는다.","정확한 건 길이가 아니라 책임의 위치구나.",6,12),l("기다림","답을 강요하지 말고 준연이 읽을 시간을 주자고 한다.","내 사과를 빨리 끝내려고 재촉하면 또 내 편의겠네.",9,10),l("전달 대행","내가 전하고 잘 풀렸다고 대신 말해 주겠다고 한다.","편하긴 한데, 이건 내가 들어야 할 대답이야.",0,-6)]),N("hyunsol","cursor","computer","커서 두 개의 충돌",20,15,"screen",["공동 문서","수정 제안","승인 대기"],["보고서 한 문장에서 현솔의 커서와 내 커서가 부딪쳤다. 지운 단어가 다시 살아났다.","“내가 고친 이유를 안 쓰면 그냥 네 문장을 빼앗는 거네.”","현솔이 직접 수정을 되돌리고 제안 모드로 바꿨다. 화면 옆에 서로 다른 설명 두 개가 나란히 떴다."],"이 문장은 어느 쪽이 독자에게 덜 헷갈릴까?",[l("비교 읽기","두 버전을 소리 내 읽고 뜻이 달라지는 부분을 찾는다.","네 문장을 남길 근거도 제대로 들어 보고 싶었어.",6,12),l("공동 문장","각 버전의 좋은 부분을 골라 세 번째 문장을 만든다.","처음부터 둘 중 하나일 필요는 없었네.",10,8),l("덮어쓰기","현솔이 잠깐 떠난 사이 내 버전으로 확정한다.","제안 모드로 바꾼 이유를 없애면 안 되지.",-5,-11)]),N("hyunsol","errata","library","정오표 사이의 쪽지",30,25,"cards",["정오표","검증 중","덜 날카롭게"],["현솔의 책에는 정오표가 꼼꼼히 붙어 있었다. 그 사이에 “말투는 아직 수정 중”이라는 쪽지가 끼어 있었다.","현솔은 쪽지를 빼앗지 않고 책을 반쯤 덮었다. “그건 제출용은 아닌데.”","나는 웃음을 삼켰다. 현솔은 조금 붉어진 귀를 가리듯 머리카락을 넘기고 빈 쪽지 한 장을 내밀었다."],"너도 수정 중인 게 있어?",[l("고백","나도 성급하게 결론 내리는 버릇이 있다고 적는다.","그럼 서로 표시해 주자. 공개 망신은 주지 말고.",11,9),l("여백","아무것도 적지 않고 고쳐 쓰기 위한 여백으로 남긴다.","빈칸을 남기는 것도 방법이구나.",6,9),l("농담 공개","친구들에게 현솔의 쪽지를 보여 주며 귀엽다고 한다.","내가 너에게만 펼친 건 책뿐이 아니었는데.",-6,-12)]),N("hyunsol","blind-taste","cafeteria","정답 없는 한 모금",40,30,"glass",["물컵 두 개","취향 비교","정답 없음"],["밀봉된 같은 음료 두 개를 마신 뒤 현솔이 하나가 더 달다고 말했다. 포장을 확인하고 눈을 가늘게 떴다.","“조건도 안 맞춘 비교를 너무 자신 있게 했네. 좋아하는 건 좋아한다고만 해도 되는데.”","현솔이 평가표의 점수 칸을 지우고 “다시 마시고 싶은 쪽”이라고 썼다. 내 답을 보고 짧게 웃었다."],"네 취향은 설명까지 필요해?",[l("감상","오늘은 이유 없이 마음에 드는 쪽을 골라 본다.","증명하지 않아도 되는 답이 있으니까 편하네.",12,6),l("조건","취향은 남겨 두고 다음에는 온도부터 맞춰 보자고 한다.","좋아. 감상과 실험을 따로 하자는 거지?",6,11),l("놀리기","음료도 못 맞히냐며 계속 정답을 요구한다.","내가 단정한 건 고칠게. 놀림까지 받아야 하는 건 아니고.",-5,-8)]),N("hyunsol","pause","roof","답변 보류, 30초",50,40,"clock",["질문","30초","아직 생각 중"],["현솔은 “너는 나랑 있으면 편해?”라고 묻고 곧바로 보충 설명을 시작하려 했다.","내가 생각할 시간을 달라고 하자 현솔이 손목시계 대신 멀리 운동장을 바라보았다.","서른 초 동안 현솔은 질문을 고치지 않았다. 바람이 지나간 뒤에도 원래 문장은 그대로 기다리고 있었다."],"좋게 포장하지 말고, 네 속도로 말해 줘.",[l("구체적 답","편했던 순간과 긴장했던 순간을 하나씩 말한다.","둘 다 들으니까 어디를 바꿔야 할지 알겠어.",9,13),l("되묻기","내 답을 전한 뒤 현솔도 편했는지 묻는다.","지금은 조금 떨려. 그래도 이 대화는 끝내고 싶지 않아.",14,7),l("빈 확답","생각과 다르지만 언제나 완벽하게 편하다고 단정한다.","언제나라는 말은… 내가 고칠 틈도 없는 것 같아.",2,-7)]),N("hyunsol","ungraded","garden","채점하지 않는 하루",60,45,"note",["체크리스트","접어 두기","오늘의 한 줄"],["현솔이 정원 벤치에서 체크리스트를 접었다. 오늘의 달성률 칸은 비어 있었다.","“너랑 보낸 시간까지 평가하면, 즐거운 순간도 성과처럼 적게 될 것 같아서.”","빈 뒷면에 현솔은 날짜만 적었다. 내가 옆에 앉자 종이가 두 사람의 무릎 사이에서 조용히 흔들렸다."],"점수 대신 한 줄만 남긴다면?",[l("기록","‘아무것도 끝내지 않아도 같이 앉아 있었다’고 적는다.","이상하게 오늘 중 가장 정확한 문장 같아.",15,9),l("그림","문장 대신 벤치와 두 개의 가방을 작게 그린다.","그림에는 채점 기준이 없어서 다행이네.",12,7),l("계획","빈칸이 아깝다며 내일 할 일을 빽빽하게 채운다.","오늘만큼은 비워 두자고 말한 건데.",-3,-8)]),N("taewoo","silent-count","dance","스피커 없이 여덟 박자",0,0,"steps",["1 · 2 · 3 · 4","발끝의 리듬","5 · 6 · 7 · 8"],["스피커 연결이 끊기자 태우가 음악 대신 손뼉을 쳤다. 넓은 연습실에 운동화 마찰음만 남았다.","“반주 없으면 못 할 줄 알았지? 이번에는 네 박자 따라갈 거야.”","내가 한 박자 빨라지자 태우가 걸음을 줄였다. 마지막 박자에서 두 사람의 손뼉이 정확히 겹쳤다."],"이번엔 누가 카운트를 맡을까?",[l("교대","네 박자마다 리더를 바꿔 서로의 속도에 맞춘다.","좋아. 내가 따라가는 구간도 꽤 재밌네.",9,10),l("변주","마지막 두 박자를 손뼉 대신 발 구르기로 바꾼다.","지금 그거 괜찮았다. 우리 버전으로 남기자.",12,5),l("가속","태우를 놀라게 하려고 예고 없이 속도를 크게 올린다.","먼저 신호를 줘야 맞추지. 급한 게 잘하는 건 아니야.",2,-7)]),N("taewoo","back-row","auditorium","마지막 줄의 센터",15,10,"dots",["앞줄","빈 중심","뒤쪽 시선"],["대형을 바꾼 태우가 맨 뒤로 걸어갔다. 빈 센터에 스포트라이트가 남았다.","“여기서도 보이는지 봐 줘. 내가 가운데 안 서면 안 보일까 봐 좀 신경 쓰여.”","태우가 다른 부원의 길을 열며 돌아섰다. 대형 전체가 살아나는 순간, 객석에서 내 손이 올라갔다."],"어디서 내 움직임이 가장 잘 보였어?",[l("장면 지정","옆사람에게 공간을 내준 정확한 카운트를 말한다.","그걸 봤구나. 사실 거기가 제일 오래 연습한 부분이야.",11,10),l("시야 확인","객석 양 끝에서 한 번씩 보고 가려지는 구간을 알려 준다.","좋아. 내 기분보다 실제 시야부터 확인하자.",6,12),l("순위","태우는 무조건 앞줄이어야 한다며 다른 부원을 낮춰 말한다.","나를 칭찬하려고 우리 팀을 깎지는 마.",-3,-9)]),N("taewoo","freeze-frame","computer","멈춘 화면의 엉뚱한 얼굴",20,15,"frame",["일시정지","프레임 128","웃음 보관"],["동작 분석 영상을 멈추자 태우가 볼을 부풀린 얼굴이 나왔다. 태우는 화면보다 내 얼굴을 먼저 봤다.","“웃을 거면 같이 웃어. 몰래 저장만 하지 말고.”","태우가 직접 다음 프레임을 넘겼다. 더 엉뚱한 표정이 나타나자 먼저 웃음을 터뜨린 쪽도 태우였다."],"이 장면, 분석용으로는 남겨도 되겠지?",[l("비공개","외부 공유 없는 분석 폴더에 원본을 보관한다.","내가 허락한 범위 기억해 주는 거, 좋네.",7,12),l("표정 대결","저장하지 않고 그 표정을 직접 따라 해 본다.","잠깐, 그건 나보다 더 웃긴데? 이번엔 내가 졌다.",13,5),l("공유","친구들도 좋아할 거라며 단체방에 올리자고 우긴다.","내가 웃었다고 모두에게 보여 줘도 된다는 뜻은 아니야.",-5,-11)]),N("taewoo","shoelace","garden","멈추는 쪽의 용기",30,25,"ribbon",["풀린 끈","쉬는 벤치","다시 출발"],["태우가 정원을 가로질러 동작을 보여 주려다 풀린 운동화 끈을 밟을 뻔했다. 바로 발을 멈췄다.","“봐 주는 사람이 있으면 괜히 더 하고 싶거든. 오늘은 여기서 멈출래.”","태우는 벤치에 앉아 끈을 다시 묶었다. 나는 옆에 앉았고, 쉬는 시간이 어색한 실패처럼 보이지 않았다."],"쉬는 동안 뭐 할까? 춤은 잠깐 빼고.",[l("관찰","정원을 지나가는 사람들의 걸음에 조용히 별명을 붙인다.","이상하게 쉬는데도 안무 아이디어가 나오네.",11,7),l("휴식","연습 얘기 없이 음료를 마시며 호흡이 돌아오길 기다린다.","아무것도 보여 줄 필요 없으니까 편하다.",7,12),l("재촉","끈만 묶었으면 마지막 동작 하나쯤은 가능하다고 부추긴다.","내가 멈춘다고 했을 때도 들어 줬으면 해.",-4,-10)]),N("taewoo","small-stage","classroom","책상 사이 1미터 무대",40,30,"dots",["책상 간격","작은 동선","손끝 안무"],["태우가 교실 통로에서 큰 팔 동작을 접었다. 책상에 닿지 않도록 손목만 작게 움직였다.","“공간이 작다고 표현까지 작아질 필요는 없잖아. 앉아서 하는 안무, 볼래?”","손끝과 눈길만으로 후렴이 이어졌다. 마지막에 태우는 거울 대신 내 쪽으로 고개를 돌렸다."],"마지막 동작 하나는 네가 정해 줘.",[l("답장 동작","손바닥을 펴서 건네고 받아 주는 동작을 제안한다.","상대가 있어야 완성되는 거네. 그럼 네가 받아 줘.",14,7),l("공간 설계","책상에서 충분히 떨어지는 작은 회전 동선을 그린다.","안전한데 답답하지도 않네. 이거 써 보자.",7,12),l("무리한 점프","시선을 끌려고 책상 위로 올라가는 동작을 제안한다.","교실에서 그건 안 해. 무대랑 책상은 다르지.",-4,-9)]),N("taewoo","walking-duet","walk","박자를 세지 않는 산책",50,40,"steps",["빠른 걸음","나란히","세지 않은 시간"],["태우는 걸으면서도 무심코 여덟까지 셌다. 내가 작은 돌을 피해 돌아가자 카운트가 끊겼다.","“미안. 오늘은 연습 아니지.” 태우가 어깨에 멘 가방을 고쳐 메고 속도를 늦췄다.","다음 모퉁이까지 아무도 숫자를 세지 않았다. 두 사람의 발소리는 꼭 맞지 않아도 함께 도착했다."],"잘 맞추지 않아도 같이 갈 수 있네?",[l("나란히","보폭은 그대로 두고 갈림길에서 서로를 기다린다.","계속 맞추는 것보다 기다리는 게 쉬울 때도 있구나.",13,10),l("이야기","춤을 시작하기 전 태우가 좋아하던 놀이를 묻는다.","그건 점수 없던 때 이야기인데. 좀 길어도 들어 줘.",11,10),l("경쟁","산책도 재미있어야 한다며 갑자기 달리기 시합을 건다.","오늘은 경쟁 안 하는 쪽을 골랐는데.",-2,-7)]),N("taewoo","curtain-bow","auditorium","커튼이 닫힌 뒤의 인사",60,45,"ticket",["공연 종료","꺼진 객석","마지막 인사"],["리허설이 끝나고 커튼이 닫혔다. 태우는 무대 뒤에서 아직 인사를 끝내지 못한 자세로 서 있었다.","“내가 오늘 못했어도 이렇게 기다렸을 거야?” 평소의 자신만만한 웃음이 잠깐 사라졌다.","내가 고개를 끄덕이자 태우가 빈 객석이 아니라 나에게 허리를 숙였다. 고개를 들 때는 진짜로 웃고 있었다."],"이번 박수에는 점수 안 붙여도 돼?",[l("박수","잘한 동작을 평가하지 않고 끝까지 보여 준 마음에 박수친다.","오늘 마지막 박수는 좀 오래 기억할 것 같아.",16,9),l("함께 정리","박수 대신 무대 소품을 함께 정리하며 옆에 남는다.","막 끝난 사람 옆에 남는 건 이런 거구나.",10,13),l("조건","다음에는 실수하지 않아야 기다려 준다고 장난친다.","지금은 그 말이 농담처럼 안 들려.",-7,-11)]),N("taehun","cloud-name","roof","구름에 이름 붙이는 순서",0,0,"map",["권적운","닮은 모양","두 개의 기록"],["태훈은 하늘 사진 아래에 구름 이름을 적고, 그 옆에 “뜯어 놓은 편지”라고 썼다.","“이쪽은 관측, 이쪽은 감상. 섞지 않으면 둘 다 남길 수 있어.”","내가 본 모양을 말하자 태훈은 여백을 새로 나눴다. 같은 구름 아래 서로 다른 문장이 놓였다."],"네가 본 모양은 어느 칸에 적을까?",[l("두 칸","관측 시각을 확인하고 감상 칸에는 내 비유를 따로 적는다.","같이 본 것과 다르게 느낀 게 한 장에 남네.",8,11),l("제목","구름을 편지의 수신인처럼 상상해 제목을 붙인다.","답장을 못 받아도 보내고 싶은 문장이네.",12,5),l("단정","구름 모양만 보고 내일 날씨를 확실하게 예언한다.","예쁜 비유랑 예보의 근거는 구분해야 해.",-2,-8)]),N("taehun","pressed-leaf","library","책갈피의 작은 지층",15,10,"note",["낙엽","책장 사이","겹친 시간"],["태훈의 시집에서 말린 낙엽과 날짜가 다른 메모들이 차례로 나왔다.","“지층은 아니지만 읽었던 시간이 겹쳐 있네. 이건 지난번 네가 옆에 있던 날.”","태훈은 그 날짜를 감추지 않았다. 새 책갈피를 끼울 자리를 손끝으로 벌린 채 나를 올려다보았다."],"오늘은 어떤 흔적을 남길까?",[l("날짜","새 메모에 날짜와 같이 읽은 페이지를 적는다.","언제였는지 잊어도 다시 찾을 수 있겠다.",8,11),l("한 문장","책 문장을 베끼는 대신 지금 기분을 직접 한 줄 쓴다.","이건 다른 책에서는 못 찾는 문장이네.",13,6),l("몰래 읽기","태훈이 고르지 않은 오래된 개인 메모까지 펼쳐 읽는다.","같이 읽자고 꺼낸 건 오늘 페이지였어.",-6,-10)]),N("taehun","missing-data","computer","빈칸을 잇지 않는 그래프",20,15,"screen",["관측 누락","빈 구간","다음 측정"],["기온 그래프 중간이 끊겨 있었다. 태훈은 자동 보간 버튼 위에서 손을 멈췄다.","“측정 못 한 날까지 부드럽게 이어 놓으면, 안 본 걸 본 것처럼 보일까 봐.”","빈 구간에 누락 표시가 붙었다. 태훈은 아래 감상 칸에 “기다린 시간”이라고만 적었다."],"이 빈칸을 발표에서는 어떻게 설명하면 좋을까?",[l("구분","실측값과 추정값을 쓰더라도 명확히 구분해 표시한다.","없는 걸 숨기지 않아야 있는 값도 믿을 수 있겠지.",6,13),l("계획","누락 원인을 기록하고 다음 관측에서 보완할 계획을 적는다.","빈칸이 끝이 아니라 다음 일정이 됐네.",10,10),l("매끈한 선","보기 좋게 잇고 실제로 측정한 값처럼 발표하자고 한다.","그건 그래프가 아니라 기록을 바꾸는 거야.",-5,-12)]),N("taehun","stone","garden","손바닥 크기의 먼 여행",30,25,"prism",["암석 표본","입자 관찰","돌려놓기"],["교사의 관찰 수업용 암석 표본을 정리하던 태훈이 작은 알갱이가 보이는 돌을 내밀었다.","“이 돌의 정확한 경로는 모르지만, 만들어진 과정은 질문할 수 있어.”","루페를 번갈아 들여다보는 사이 손바닥의 돌이 따뜻해졌다. 태훈은 돌보다 내 설명에 먼저 웃었다."],"이 표본에 설명표를 하나 붙인다면?",[l("관찰","실제로 보이는 입자와 색부터 적고 추정은 따로 표시한다.","모르는 걸 남겨 두는 설명이라 마음에 들어.",7,12),l("짧은 시","과학 설명 옆에 돌을 빌린 몇 분에 관한 짧은 시를 적는다.","돌의 나이는 모르지만 우리 몇 분은 정확히 알겠네.",13,6),l("기념품","기억에 남는다며 학교 표본을 가져가자고 한다.","우리 추억이어도 우리 물건은 아니야.",-4,-10)]),N("taehun","red-light","observatory","붉은 등 아래의 시집",40,30,"orbit",["낮은 붉은빛","암순응","작은 목소리"],["관측 전 대기 시간, 태훈은 눈부신 화면 대신 낮은 붉은 조명 아래 시집을 펼쳤다.","“어두워지는 데 익숙해질 때까지 기다리자. 눈도, 마음도 급하게 적응하진 않으니까.”","태훈의 낭독이 조용해지자 밤하늘의 별이 조금씩 더 보였다. 그것은 갑자기 생긴 별이 아니었다."],"기다리는 동안 한 페이지 더 읽을까?",[l("교대 낭독","허락을 구하고 다음 연을 작은 목소리로 읽는다.","같은 문장인데 네 목소리로 들으니까 다르게 남네.",14,7),l("관측 준비","독서를 마친 뒤 관측 순서와 기록 도구를 함께 확인한다.","기다림이 준비가 됐네. 이제 같이 보자.",7,13),l("플래시","잘 보이는 기념사진을 찍으려고 갑자기 플래시를 켠다.","잠깐, 관측하는 다른 사람들도 눈을 적응시키고 있어.",-5,-10)]),N("taehun","shadow","classroom","창가에서 움직이는 문장",50,40,"clock",["오후 4시","그림자의 이동","마지막 낱말"],["창틀 그림자가 태훈의 공책 위로 천천히 움직였다. 태훈은 가려진 마지막 낱말을 아직 읽지 않았다.","“해가 도는 것처럼 보이지만 우리가 돌고 있잖아. 기다리는 쪽도 사실 움직이는 중이네.”","잠시 뒤 그림자가 비켜 갔다. 마지막 낱말은 별도 구름도 아닌 “너”였다."],"이 문장, 너무 직접적이었을까?",[l("답문","태훈의 문장 아래에 ‘같이 기다린 나도’라고 이어 쓴다.","그러면 혼자 쓴 시가 아니네. 마음에 들어.",16,8),l("감상","의미를 추측하지 않고 어떤 마음으로 썼는지 묻는다.","숨기려고 쓴 건 아니야. 말보다 조금 덜 떨려서.",11,12),l("정답 처리","자전 설명만 평가하고 마지막 낱말은 못 본 척한다.","설명은 맞는데… 오늘 보여 주려던 건 그 뒤였어.",-2,-6)]),N("taehun","overcast","observatory","별이 없는 날의 예약",60,45,"orbit",["전천 흐림","관측 취소","다음 약속"],["하늘을 덮은 구름 때문에 관측은 취소됐다. 태훈은 관측일지에 흐림이라고 정확히 적었다.","“오늘 만난 것까지 취소되는 건 아니지?” 태훈이 접은 의자 두 개를 나란히 벽에 세웠다.","다음 관측 날짜는 아직 비어 있었다. 태훈은 예보 앱을 닫고 내가 언제 시간이 되는지 먼저 물었다."],"다음에는 맑아야만 만날까?",[l("날씨 무관","흐리면 도서관에서 만나기로 대체 계획까지 정한다.","별을 핑계로 기다리지 않아도 되겠네.",16,10),l("관측 동행","예보를 확인하되 만날 날짜는 둘의 일정으로 정한다.","날씨는 바뀌어도 약속을 다시 얘기할 수 있겠지.",11,12),l("기적 기대","나와 있으면 구름이 걷힐 거라며 계속 관측을 강요한다.","기분 좋은 말이어도 하늘을 바꾸지는 못해.",-3,-9)]),N("seoyul","three-colors","art","같은 색, 다른 제목",0,0,"prism",["색표 세 장","제목 없는 색","너의 감상"],["서율은 같은 색표 세 장에 다른 제목을 붙였다. “복도”, “화음”, “기다림”.","“색은 같은데 어떤 말을 먼저 보느냐에 따라 느낌이 달라지지?”","내가 한 장을 고르자 서율은 정답을 말하지 않았다. 대신 내 설명을 들으며 네 번째 빈 색표를 꺼냈다."],"네가 붙일 제목은 뭐야?",[l("제목","오늘 함께 있던 순간을 떠올려 네 번째 제목을 붙인다.","내가 만든 색인데 네 기억도 들어갔네.",12,6),l("비교","제목을 가린 채 먼저 느끼고 다시 읽어 차이를 말한다.","그 차이까지 들어 보고 싶었어.",6,12),l("정답 요구","가장 예술적인 정답이 뭔지 먼저 알려 달라고 한다.","맞히는 시험으로 만들면 네 감상이 사라지잖아.",-2,-7)]),N("seoyul","rest","band","함께 누르지 않은 건반",15,10,"wave",["멜로디","한 마디 쉼","다음 화음"],["서율이 건반에서 손을 뗐다. 내가 박자를 놓친 줄 알고 손을 들자 작게 고개를 저었다.","“여기는 쉼표야. 비어 있어야 다음 소리가 들려.”","두 사람은 같은 순간에 연주하지 않았다. 잠깐의 고요 뒤 화음이 시작되자 서율이 나를 향해 웃었다."],"다음에는 어떤 소리로 다시 들어올까?",[l("응답음","서율의 첫 음을 듣고 그다음 박자에 짧게 답한다.","내 소리 듣고 들어오는 거, 지금 정말 좋았어.",12,9),l("쉼표","쉼표 길이를 둘이 느끼기 좋게 조절해 다시 연주한다.","기다림에도 같이 정할 수 있는 길이가 있네.",8,12),l("빈칸 채우기","심심하니까 쉼표마다 음을 계속 채워 넣는다.","빈곳이라고 아무 소리나 넣고 싶었던 건 아니야.",-3,-8)]),N("seoyul","layer","computer","숨김 레이어의 윤곽",20,15,"screen",["레이어 04","아직 비공개","나중에 공개"],["서율이 작업 파일을 넘기다 숨김 레이어 하나에서 멈췄다. 작은 미리보기에는 사람의 어깨가 보였다.","“이건 아직 안 보여 줄래. 다른 레이어는 같이 봐도 돼.”","나는 마우스를 서율 쪽으로 돌렸다. 서율은 숨김 표시를 그대로 둔 채 새로운 작업을 내 앞에서 시작했다."],"새 배경은 어느 색이 어울릴까?",[l("배경 감상","보여 준 레이어 안에서 빛과 색의 느낌을 말한다.","보이지 않는 쪽보다 보여 준 걸 봐 줘서 고마워.",8,13),l("새 시도","원본을 보존한 사본에서 다른 팔레트를 시험한다.","좋아. 돌아갈 곳이 있으면 더 과감해질 수 있어.",11,8),l("궁금증","서율이 잠깐 돌아선 틈에 숨김 레이어를 켠다.","궁금한 마음이 허락을 대신하지는 않아.",-7,-13)]),N("seoyul","window-frame","garden","움직이는 액자",30,25,"frame",["종이 프레임","나뭇잎 그림자","순간의 구도"],["서율이 가운데를 오린 두꺼운 종이를 들었다. 종이 틀 안에서 정원 그림자가 흔들렸다.","“뭘 그릴지 모르겠을 때는, 뭘 남길지부터 정해 봐.”","내가 틀을 옮기자 서율의 얼굴이 가장자리에 들어왔다. 서율은 피하지 않고 고개를 조금 기울였다."],"이 구도에는 뭘 남길 거야?",[l("허락","서율도 그려도 되는지 먼저 묻고 작은 스케치를 한다.","완성되면 보여 줘. 잘 그렸는지는 나중 문제고.",14,8),l("그림자","얼굴 대신 두 사람이 겹친 그림자를 구도에 담는다.","누군지 몰라도 우리는 알아보겠네.",12,9),l("비교","다른 친구를 넣으면 더 예쁘겠다며 서율을 밀어낸다.","그림의 구도를 고르는 것과 사람을 비교하는 건 달라.",-5,-8)]),N("seoyul","sound-color","media","소리에 붙이는 색 이름",40,30,"wave",["문 닫는 소리","발걸음","색으로 편집"],["서율은 직접 녹음한 문 닫는 소리와 발소리에 색 조각을 붙이고 있었다. 사적 대화는 녹음하지 않았다.","“같은 복도인데 듣는 순서를 바꾸면 다른 장면이 돼.”","내 발소리가 나오는 구간에서 서율이 연한 색을 골랐다. 이유를 묻자 이어폰 대신 빈 설명 칸을 내밀었다."],"네 발소리는 무슨 색 같아?",[l("색 고르기","내가 느낀 색을 골라 서율의 색과 나란히 둔다.","한 소리에 답이 두 개여도 괜찮네.",12,9),l("편집","녹음 순서를 바꾸고 감정이 어떻게 달라지는지 말한다.","이건 감상이면서 같이 만드는 작업이네.",8,12),l("목소리 추가","몰래 녹음한 친구 대화도 넣자고 제안한다.","허락 없는 목소리는 재료로 쓰지 않을 거야.",-5,-12)]),N("seoyul","unfinished-portrait","library","닮지 않은 초상화",50,40,"note",["윤곽만 남은 그림","고치지 않은 선","보여 줄 용기"],["서율이 책 사이에서 작은 드로잉을 꺼냈다. 얼굴은 자세하지 않았지만 가방을 잡은 손은 낯익었다.","“닮게 그리려다 다 지웠어. 그런데 네가 기다리는 자세는 남기고 싶더라.”","서율은 미완성 종이를 내 쪽으로 밀었다. 잘 그렸다는 평가보다 내가 알아보는 순간을 기다리는 눈이었다."],"이 그림에서 네가 알아본 건 뭐야?",[l("기억","그날 어디서 기다렸는지와 그림을 보며 떠오른 기분을 말한다.","응. 그 순간을 알아봤으면 충분해.",16,9),l("보관 방식","서율이 완성할 때까지 맡아 둘지 먼저 물어본다.","지금 보여 줬다고 완성해야 하는 건 아니라서 좋아.",9,13),l("수정 지시","더 잘생겨 보이도록 얼굴을 고쳐야 한다고 지시한다.","네 평가용 증명사진을 그리던 건 아니야.",-6,-9)]),N("seoyul","two-signatures","band","마지막 화음의 두 서명",60,45,"cards",["멜로디 노트","두 개의 서명","다음 마디"],["서율이 둘이 만든 짧은 곡의 악보를 펼쳤다. 제목 아래에 자기 이름만 적혀 있었다.","“네가 만든 쉼표랑 답하는 박자도 곡의 일부잖아. 같이 이름 써 줄래?”","펜 두 개가 악보 위에 놓였다. 끝맺는 겹세로줄 뒤에는 아직 지우지 않은 빈 마디가 하나 있었다."],"제목 옆의 빈칸은 우리 중 누가 채울까?",[l("공동 서명","각자 맡은 부분을 적고 두 사람 이름을 나란히 쓴다.","함께 했다는 게 소리 말고 글자로도 남네.",16,11),l("열린 결말","제목은 함께 정하되 마지막 빈 마디는 남겨 둔다.","다음에 돌아올 자리가 생겼네.",14,9),l("독점 서명","영감을 줬으니 내 이름만 크게 써 달라고 한다.","함께 만들자는 말은 네 것이 되겠다는 말이 아니야.",-7,-12)])];Object.fromEntries(Pa.map(e=>[e.id,e]));Nt.map(e=>e.id);const $a=e=>e.visitor?Na(e.visitor,e.visitLocation??pn[e.visitor].location,e.seed,e.chapter,e.visits[e.visitor]):null,gn={timing:"박자 맞추기",memory:"패턴 기억",order:"순서 퍼즐",balance:"균형 조절",matching:"짝 맞추기",path:"경로 연결",search:"관찰 찾기"};function Sa({game:e,person:n,overrideActivity:a,onFinish:o,paused:r=!1}){const u=a??(e?$a(e):null);return u?t.jsx(Ca,{activity:u,person:n??(e==null?void 0:e.visitor)??"world",onFinish:o,paused:r},u.id):null}function Ca({activity:e,person:n,onFinish:a,paused:o}){const[r,u]=x.useState(0),[c,d]=x.useState(0),[j,b]=x.useState(null),[A,p]=x.useState(0),[w,z]=x.useState(document.hidden),C=x.useRef(null),R=x.useRef(!1),P=x.useRef(null),E=x.useRef(null),M=e.rounds[r],S=o||w;x.useEffect(()=>{const F=()=>z(document.hidden);return document.addEventListener("visibilitychange",F),()=>document.removeEventListener("visibilitychange",F)},[]),x.useEffect(()=>{var F,ne;(F=P.current)==null||F.focus({preventScroll:!0}),(ne=E.current)==null||ne.scrollTo({top:0})},[r]);function D(F){S||C.current!==null||R.current||(C.current=F,b(F),F&&d(ne=>Math.min(3,ne+1)))}function J(){R.current||S||(R.current=!0,a(c))}function he(){if(!(R.current||S)){if(r===e.rounds.length-1){J();return}C.current=null,b(null),p(0),u(F=>F+1)}}function Ce(){S||j!==!1||(C.current=null,b(null),p(F=>F+1))}return t.jsx("section",{className:"activity-screen activity-v2","aria-label":`${e.title} 미니게임`,children:t.jsxs("div",{className:"activity-card",ref:E,children:[t.jsxs("div",{className:"activity-person",children:[t.jsx(je,{id:n}),t.jsxs("span",{children:[t.jsx("small",{children:"AFTER SCHOOL / PLAY TOGETHER"}),t.jsx("b",{children:e.title})]}),t.jsx("i",{children:e.icon})]}),t.jsxs("div",{className:"activity-round-status",children:[t.jsxs("span",{children:["활동 ",r+1," / ",e.rounds.length," · ",gn[M.mode]]}),t.jsxs("span",{children:["성공 ",c," / 3"]})]}),t.jsx("div",{className:"activity-progress","aria-hidden":"true",children:e.rounds.map((F,ne)=>t.jsx("span",{className:`${ne<r?"done":""} ${ne===r?"current":""}`},ne))}),t.jsx("p",{className:"activity-subtitle",children:e.subtitle}),t.jsxs("details",{className:"activity-help",children:[t.jsx("summary",{children:"함께하는 활동 안내"}),t.jsxs("p",{children:[e.context," 버튼은 터치하거나 Tab으로 이동한 뒤 Enter로 누를 수 있다. 타이머가 있는 화면도 다른 탭이나 메뉴를 열면 잠시 멈춘다."]})]}),t.jsx("h2",{ref:P,tabIndex:-1,children:M.prompt}),S&&t.jsxs("p",{className:"activity-paused",role:"status",children:[t.jsx(hn,{size:16}),"잠시 멈췄어요. 화면으로 돌아오면 이어집니다."]}),t.jsx("fieldset",{className:"activity-board-fieldset",disabled:S||j!==null,children:t.jsx(Ea,{round:M,paused:S||j!==null,settle:D},`${r}:${A}`)}),j!==null?t.jsxs("div",{className:`activity-feedback ${j?"success":"miss"}`,role:"status",children:[t.jsx("b",{children:j?"둘의 호흡이 맞았다!":"조금 어긋났어. 다시 해도 괜찮아."}),t.jsx("p",{children:j?M.explain:"이번 활동만 다시 시도할 수 있어. 서두르지 말고 하나씩 확인해 보자."}),t.jsxs("div",{className:"activity-result-actions",children:[!j&&t.jsxs("button",{className:"activity-secondary",onClick:Ce,disabled:S,children:[t.jsx(_e,{size:16}),"이 활동 다시 하기"]}),t.jsxs("button",{className:"primary",onClick:he,disabled:S,children:[r===e.rounds.length-1?"대화 이어가기":"다음 활동",t.jsx(pe,{size:16})]})]})]}):t.jsxs("div",{className:"activity-navigation",children:[t.jsxs("button",{type:"button",onClick:he,disabled:S,children:[t.jsx(mn,{size:15}),"이번 활동 건너뛰기"]}),t.jsx("button",{type:"button",onClick:J,disabled:S,children:"여기까지 하고 대화하기"})]})]})})}function Ea({round:e,paused:n,settle:a}){const[o,r]=x.useState(0),[u,c]=x.useState(e.mode==="balance"&&e.target<50?75:25),[d,j]=x.useState([]),[b,A]=x.useState([]),[p,w]=x.useState("idle"),[z,C]=x.useState(0),[R,P]=x.useState(null),[E,M]=x.useState({}),[S,D]=x.useState(e.mode==="path"?[e.start]:[]),[J,he]=x.useState([]),[Ce,F]=x.useState(""),ne=x.useRef(0),_=x.useRef(0),Ie=gn[e.mode];x.useEffect(()=>{if(e.mode!=="timing"||n)return;let f=0,g=performance.now();const K=e.cycleMs,ie=Ee=>{ne.current+=Math.min(60,Ee-g),g=Ee;const me=ne.current%K/(K/2),Ze=me<=1?me*100:(2-me)*100;_.current=Ze,r(Ze),f=requestAnimationFrame(ie)};return f=requestAnimationFrame(ie),()=>cancelAnimationFrame(f)},[e.mode,n]),x.useEffect(()=>{if(e.mode!=="memory"||p!=="showing"||n)return;const f=window.setTimeout(()=>{z===e.pattern.length-1?(w("ready"),C(0)):C(g=>g+1)},950);return()=>window.clearTimeout(f)},[e.mode,p,z,n]);function Ne(){n||e.mode!=="memory"||p==="showing"||(j([]),C(0),w("showing"),F(""))}function Le(f){n||e.mode!=="memory"||p!=="ready"||d.length>=e.pattern.length||j(g=>[...g,f])}function xe(f){if(n||e.mode!=="path")return;if(S.length>1&&f===S[S.length-2]){D(K=>K.slice(0,-1)),F("한 칸 되돌렸어요.");return}const g=S[S.length-1];if(e.blocked.includes(f)||S.includes(f)||f<0||f>=e.size**2||Math.abs(Math.floor(f/e.size)-Math.floor(g/e.size))+Math.abs(f%e.size-g%e.size)!==1){F("현재 위치에서 위·아래·왼쪽·오른쪽의 빈칸을 이어 주세요.");return}D(K=>[...K,f]),F(f===e.goal?"도착했어요! 아래 버튼으로 경로를 확인해 주세요.":"")}function Xe(f){if(!(n||f.altKey||f.ctrlKey||f.metaKey)&&(e.mode==="memory"&&/^[1-4]$/.test(f.key)&&(f.preventDefault(),Le(Number(f.key)-1)),e.mode==="path"&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(f.key))){f.preventDefault();const g=S[S.length-1],K={ArrowUp:-e.size,ArrowDown:e.size,ArrowLeft:-1,ArrowRight:1}[f.key];xe(g+K)}}function qe(f){if(n||e.mode!=="matching"||R===null)return;if(e.pairs[R].right!==f){F("이 둘은 짝이 아니에요. 다른 카드를 골라 보세요.");return}const g={...E,[R]:f};M(g),P(null),F("한 쌍을 연결했어요."),Object.keys(g).length===e.pairs.length&&a($e(e,e.pairs.map((K,ie)=>g[ie])))}return t.jsxs("div",{className:`activity-play activity-${e.mode}`,onKeyDown:Xe,"aria-label":Ie,children:[e.mode==="timing"&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"activity-objective",children:"분홍 구간에서 멈추기 · 시간 제한 없음"}),t.jsxs("div",{className:"timing-track",children:[t.jsx("i",{className:"target",style:{left:`${e.target-e.tolerance}%`,width:`${e.tolerance*2}%`}}),t.jsx("i",{className:"timing-marker",style:{left:`${o}%`}})]}),t.jsx("button",{type:"button",className:"activity-action",onClick:()=>a($e(e,_.current)),children:e.action})]}),e.mode==="memory"&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"activity-objective",children:[e.pattern.length,"개를 같은 순서로 · 현재 ",d.length," / ",e.pattern.length]}),t.jsx("div",{className:`memory-display ${p==="showing"?"showing":""}`,"aria-live":"polite",children:p==="showing"?t.jsxs(t.Fragment,{children:[t.jsx("i",{children:e.symbols[e.pattern[z]]},z),t.jsxs("small",{children:[z+1," / ",e.pattern.length]})]}):d.length?d.map((f,g)=>t.jsx("i",{children:e.symbols[f]},g)):t.jsx("span",{children:p==="idle"?"먼저 패턴을 확인해 주세요.":"같은 순서로 버튼을 눌러 주세요."})}),t.jsx("div",{className:"memory-keys",children:e.symbols.map((f,g)=>t.jsxs("button",{type:"button",disabled:p!=="ready"||d.length===e.pattern.length,onClick:()=>Le(g),"aria-label":`${g+1}번 ${f}`,children:[f,t.jsx("small",{children:g+1})]},f))}),t.jsxs("div",{className:"activity-edit-actions",children:[t.jsxs("button",{type:"button",onClick:Ne,disabled:p==="showing",children:[t.jsx(_e,{size:15}),p==="idle"?"패턴 보기":"다시 보기"]}),t.jsxs("button",{type:"button",disabled:!d.length||p==="showing",onClick:()=>j(f=>f.slice(0,-1)),children:[t.jsx(jt,{size:15}),"한 칸 취소"]})]}),t.jsx("button",{type:"button",className:"activity-action",disabled:d.length!==e.pattern.length,onClick:()=>a($e(e,d)),children:"기억한 순서 확인"})]}),e.mode==="order"&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"activity-objective",children:["설명에 맞게 ",e.answer.length,"단계 연결 · 확인 전까지 바꿀 수 있어요"]}),t.jsx("div",{className:"order-slots",children:e.answer.map((f,g)=>t.jsxs("span",{children:[t.jsx("small",{children:g+1}),b[g]??"빈칸"]},g))}),t.jsx("div",{className:"order-cards",children:e.items.map(f=>t.jsx("button",{type:"button",disabled:b.includes(f),onClick:()=>A(g=>[...g,f]),children:f},f))}),t.jsxs("div",{className:"activity-edit-actions",children:[t.jsxs("button",{type:"button",disabled:!b.length,onClick:()=>A(f=>f.slice(0,-1)),children:[t.jsx(jt,{size:15}),"한 칸 취소"]}),t.jsxs("button",{type:"button",disabled:!b.length,onClick:()=>A([]),children:[t.jsx(_e,{size:15}),"처음부터"]})]}),t.jsx("button",{type:"button",className:"activity-action",disabled:b.length!==e.answer.length,onClick:()=>a($e(e,b)),children:e.action})]}),e.mode==="balance"&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"activity-objective",children:["기준 ",e.target-e.tolerance,"~",e.target+e.tolerance," · 현재 ",u]}),t.jsxs("div",{className:"balance-labels",children:[t.jsx("span",{children:e.left}),t.jsx("span",{children:e.right})]}),t.jsxs("div",{className:"balance-wrap",children:[t.jsx("i",{style:{left:`${e.target-e.tolerance}%`,width:`${e.tolerance*2}%`}}),t.jsx("input",{"aria-label":"균형 조절",type:"range",min:"0",max:"100",value:u,onChange:f=>c(Number(f.target.value))})]}),t.jsx("button",{type:"button",className:"activity-action",onClick:()=>a($e(e,u)),children:e.action})]}),e.mode==="matching"&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"activity-objective",children:["왼쪽 카드 → 맞는 오른쪽 카드 · 연결 ",Object.keys(E).length," / ",e.pairs.length]}),t.jsxs("div",{className:"matching-board",children:[t.jsx("div",{children:e.pairs.map((f,g)=>t.jsxs("button",{type:"button",className:`${R===g?"selected":""} ${E[g]?"matched":""}`,"aria-pressed":R===g,disabled:!!E[g],onClick:()=>{P(g),F("오른쪽에서 맞는 설명을 골라 주세요.")},children:[f.left,E[g]&&t.jsx("span",{children:"연결됨 ✓"})]},f.left))}),t.jsx("div",{children:e.options.map(f=>t.jsxs("button",{type:"button",className:Object.values(E).includes(f)?"matched":"",disabled:R===null||Object.values(E).includes(f),onClick:()=>qe(f),children:[f,Object.values(E).includes(f)&&t.jsx("span",{children:"연결됨 ✓"})]},f))})]})]}),e.mode==="path"&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"activity-objective",children:"상하좌우로 연결 · 방향키 또는 칸 누르기 · 막힌 칸 ■"}),t.jsx("div",{className:"path-board",style:{gridTemplateColumns:`repeat(${e.size},1fr)`},children:Array.from({length:e.size**2},(f,g)=>{const K=S.indexOf(g),ie=e.blocked.includes(g);return t.jsx("button",{type:"button",className:`${K>=0?"on-path":""} ${g===S[S.length-1]?"current":""} ${g===e.goal?"goal":""}`,disabled:ie,onClick:()=>xe(g),"aria-label":`${Math.floor(g/e.size)+1}행 ${g%e.size+1}열 ${ie?"막힘":g===e.start?"출발":g===e.goal?"도착":K>=0?`${K+1}번째 경로`:"빈칸"}`,children:ie?"■":g===e.start?"출발":g===e.goal?"도착":K>=0?K:"·"},g)})}),t.jsxs("div",{className:"activity-edit-actions",children:[t.jsxs("button",{type:"button",disabled:S.length<2,onClick:()=>{D(f=>f.slice(0,-1)),F("")},children:[t.jsx(jt,{size:15}),"한 칸 취소"]}),t.jsxs("button",{type:"button",onClick:()=>{D([e.start]),F("")},children:[t.jsx(_e,{size:15}),"처음부터"]})]}),t.jsx("button",{type:"button",className:"activity-action",disabled:S[S.length-1]!==e.goal,onClick:()=>a($e(e,S)),children:e.action})]}),e.mode==="search"&&t.jsxs(t.Fragment,{children:[t.jsxs("p",{className:"activity-objective",children:["찾을 표시 ",t.jsx("strong",{children:e.target})," · 발견 ",J.length," / ",e.items.filter(f=>f===e.target).length]}),t.jsx("div",{className:"search-board",children:e.items.map((f,g)=>t.jsx("button",{type:"button",className:J.includes(g)?"found":"",disabled:J.includes(g),"aria-label":`${g+1}번 ${f}${J.includes(g)?" 찾음":""}`,onClick:()=>{if(f!==e.target){F(`‘${e.target}’ 표시를 찾아 주세요. 시간 제한은 없어요.`);return}he(K=>[...K,g]),F("하나 찾았어요.")},children:J.includes(g)?"✓":f},g))}),t.jsx("button",{type:"button",className:"activity-action",disabled:J.length!==e.items.filter(f=>f===e.target).length,onClick:()=>a($e(e,J)),children:e.action})]}),t.jsx("p",{className:"activity-notice","aria-live":"polite",children:Ce||"천천히 확인해도 괜찮아요."})]})}const An=Object.fromEntries(da.flatMap(e=>e.evidence.map(n=>[n.id,{id:n.id,image:`assets/evidence/${n.id}.svg`,alt:`${n.name} 자료 그림. ${n.description}`,caption:"게임 내 가상 자료 · 실제 인물이나 학교의 기록이 아닙니다."}])));function Jt({evidenceId:e,visual:n}){const[a,o]=x.useState(!1);x.useEffect(()=>o(!1),[e]);const r=n??An[e];if(!r)return null;const u=`./${r.image}`;return t.jsxs("figure",{className:"evidence-viewer",children:[t.jsxs("div",{className:"evidence-viewer-toolbar",children:[t.jsx("span",{children:"자료 이미지"}),t.jsxs("div",{children:[t.jsxs("button",{type:"button","aria-pressed":a,onClick:()=>o(c=>!c),children:[a?t.jsx(Jn,{size:18}):t.jsx(Xn,{size:18})," ",a?"원래 크기":"2배 확대"]}),t.jsxs("a",{href:u,download:`${r.id}.svg`,children:[t.jsx(Zn,{size:18})," 이미지 저장"]})]})]}),t.jsx("div",{className:`evidence-viewer-scroll${a?" is-zoomed":""}`,tabIndex:a?0:void 0,role:a?"region":void 0,"aria-label":a?"확대된 증거 자료. 스크롤해서 모든 부분을 볼 수 있습니다.":void 0,children:t.jsx("img",{src:u,alt:r.alt,width:1200,height:820,draggable:!1})}),t.jsxs("figcaption",{children:[r.caption,a&&t.jsx("span",{children:" 확대 중 · 좌우와 위아래로 스크롤할 수 있어요."})]})]})}function Ra({evidence:e,selected:n,disabled:a,onSelect:o,onInspect:r,visuals:u=An}){const c=Math.max(0,e.findIndex(w=>w.id===n)),d=e[c],j=d?u[d.id]:null,b=x.useRef(0),A=x.useRef(c);if(A.current!==c){const w=e.length,z=(c-A.current+w+w/2)%w-w/2;b.current-=z*360/w,A.current=c}if(!d||!j)return null;const p=w=>o(e[(c+w+e.length)%e.length].id);return t.jsxs("section",{className:"trial-revolver","aria-label":"증거 말 탄환",children:[t.jsxs("header",{children:[t.jsx(Wt,{size:17}),t.jsxs("div",{children:[t.jsx("b",{children:"말 탄환"}),t.jsx("small",{children:"자료를 골라 발언의 모순에 제시하세요"})]}),t.jsxs("span",{children:[c+1," / ",e.length]})]}),t.jsxs("div",{className:"revolver-assembly",children:[t.jsxs("div",{className:"revolver-loader",children:[t.jsxs("div",{className:"revolver-cylinder",role:"group","aria-label":"회전 약실에서 증거 선택",style:{"--cylinder-turn":`${b.current}deg`,"--cylinder-counter-turn":`${-b.current}deg`},onKeyDown:w=>{a||!["ArrowLeft","ArrowRight"].includes(w.key)||(w.preventDefault(),p(w.key==="ArrowRight"?1:-1))},children:[t.jsx("div",{className:"revolver-rotor",children:e.map((w,z)=>{const C=z/e.length*Math.PI*2;return t.jsxs("button",{className:`revolver-chamber${w.id===n?" is-loaded":""}`,style:{left:`${50+Math.sin(C)*34}%`,top:`${50-Math.cos(C)*34}%`},"aria-label":`${w.name} 말 탄환 장전`,"aria-pressed":w.id===n,disabled:a,onClick:()=>o(w.id),children:[t.jsx("i",{"aria-hidden":"true"}),t.jsx("span",{children:String(z+1).padStart(2,"0")})]},w.id)})}),t.jsxs("div",{className:"revolver-hub","aria-hidden":"true",children:[t.jsx(Wt,{size:26}),t.jsx("small",{children:"EVIDENCE"})]})]}),t.jsxs("div",{className:"revolver-navigation",children:[t.jsx("button",{type:"button",disabled:a,onClick:()=>p(-1),"aria-label":"이전 말 탄환",children:t.jsx(Qn,{size:18})}),t.jsx("span",{children:"약실 회전"}),t.jsx("button",{type:"button",disabled:a,onClick:()=>p(1),"aria-label":"다음 말 탄환",children:t.jsx(Fe,{size:18})})]})]}),t.jsxs("div",{className:"loaded-evidence","aria-live":"polite","aria-atomic":"true",children:[t.jsxs("button",{className:"loaded-evidence-image",onClick:()=>r(d.id),"aria-label":`${d.name} 이미지 확대`,children:[t.jsx("img",{src:`./${j.image}`,alt:j.alt}),t.jsxs("span",{children:[t.jsx(kt,{size:13}),"자료 확대"]})]}),t.jsxs("div",{className:"loaded-evidence-copy",children:[t.jsxs("small",{children:[n?"장전한 증거":"약실을 눌러 장전"," · ",String(c+1).padStart(2,"0")]}),t.jsx("h2",{children:d.name}),t.jsx("p",{children:d.description})]})]})]})]})}function Oa({eventId:e}){const[n,a]=x.useState(!0);return x.useEffect(()=>{a(!0);const o=window.setTimeout(()=>a(!1),1100);return()=>window.clearTimeout(o)},[e]),n?t.jsxs("div",{className:"rebuttal-burst","aria-hidden":"true",children:[t.jsx("div",{className:"rebuttal-slash"}),t.jsxs("div",{className:"rebuttal-word",children:[t.jsx("span",{children:"모순을 밝혀냈다"}),t.jsx("strong",{children:"논파"}),t.jsx("small",{children:"RE:ACTION / COUNTERARGUMENT"})]})]}):null}let te=null,Ae=null,Ve=null,za=0;const Xt=[261.63,329.63,392,523.25,440,392,329.63,293.66,220,261.63,329.63,392,349.23,329.63,293.66,261.63];function Zt(e,n){if(!e){Ve&&clearInterval(Ve),Ve=null,Ae&&te&&Ae.gain.setTargetAtTime(0,te.currentTime,.1);return}try{if(te??(te=new AudioContext),te.resume(),Ae??(Ae=te.createGain()),Ae.disconnect(),Ae.connect(te.destination),Ae.gain.setTargetAtTime(n*.2,te.currentTime,.2),Ve)return;const a=()=>{if(!te||!Ae)return;const o=te.createOscillator(),r=te.createGain();o.type="sine",o.frequency.value=Xt[za++%Xt.length],r.gain.setValueAtTime(0,te.currentTime),r.gain.linearRampToValueAtTime(.3,te.currentTime+.06),r.gain.exponentialRampToValueAtTime(.001,te.currentTime+2.7),o.connect(r),r.connect(Ae),o.start(),o.stop(te.currentTime+3),o.onended=()=>{o.disconnect(),r.disconnect()}};a(),Ve=setInterval(a,850)}catch{}}function vt(e,n){const a=e.map((c,d)=>({value:c,index:d}));let o=2166136261;for(let c=0;c<n.length;c++)o=Math.imul(o^n.charCodeAt(c),16777619);o=Math.imul(o^o>>>16,2246822507),o=Math.imul(o^o>>>13,3266489909),o=(o^o>>>16)>>>0;const r=()=>{let c=o=o+1831565813>>>0;return c=Math.imul(c^c>>>15,c|1),c^=c+Math.imul(c^c>>>7,c|61),(c^c>>>14)>>>0},u=c=>{const d=Math.floor(4294967296/c)*c;let j=r();for(;j>=d;)j=r();return j%c};for(let c=a.length-1;c>0;c--){const d=u(c+1);[a[c],a[d]]=[a[d],a[c]]}return a}const re=["world","hyunsol","taewoo","taehun","seoyul","juhan","minhyuk","junyeon"],$=(e,n,a,o)=>({title:e,lines:n,options:a,again:o}),Fa={world:["band","band","garden","band","band"],hyunsol:["chemistry","cafeteria","garden","classroom","garden"],taewoo:["dance","dance","dance","auditorium","auditorium"],taehun:["garden","library","roof","observatory","walk"],seoyul:["art","band","art","walk","art"],juhan:["computer","computer","computer","computer","computer"],minhyuk:["classroom","cafeteria","cafeteria","classroom","gate"],junyeon:["classroom","garden","garden","classroom","classroom"]},Qt={gate:"교문",classroom:"교실",garden:"정원",cafeteria:"급식실",library:"도서관",chemistry:"화학실",media:"자료실",computer:"컴퓨터실",observatory:"천체관측실",band:"밴드연습실",art:"미술실",dance:"무용실",auditorium:"강당",roof:"옥상 쉼터",walk:"학교 산책로"},Da={world:[$("새 줄에서 나는 소리",["이 봉투 끝 좀 잡아 줘. 기타 줄이 자꾸 탈출하려고 해.","내가 힘으로 이기면 되는 일이야?","힘 말고 인내. 지금 당기면 나랑 기타 둘 다 놀란다.","그럼 여기만 잡고 있을게. 이 줄이 제일 가늘네.","응. 잘 안 보이는데 없으면 바로 티 나. 첫 음 들어 볼래?","새 줄은 소리도 좀 긴장하는 것 같은데.","그 표현 괜찮다. 네가 옆에서 보고 있어서 내가 긴장한 걸 수도 있고.","그럼 고개 돌려 줄까?","그건 싫어. 보고 있어. 틀리면 같이 웃으면 되지.","알겠어. 오늘 첫 관객은 안 도망갈게."],[["첫 코드를 한 번 더 들려 달라고 한다.","똑같은 걸 두 번 듣고 싶다는 말, 연주하는 사람한테 꽤 좋아.",8,4],["빈 줄 봉투에 오늘 날짜를 적는다.","그걸 기념으로 남겨? 그럼 나도 사인. 둘이 조립한 소리니까.",6,7],["손이 아픈지 묻고 잠깐 쉬자고 한다.","조금 따갑긴 해. 들켰네. 다음 음은 매점 다녀와서 듣자.",5,8]],"그날 갈았던 줄이 이제 손에 익었어. 네가 붙잡았던 봉투는 케이스에 넣어 뒀고."),$("마이크 높이를 맞추는 둘",["조금만 내려 줄래? 마이크가 나보다 키 크겠어.","여기? 네 얼굴이 가려지는데.","아, 그러네. 이쪽으로 돌리면 네 표정도 보이겠다.","관객 표정까지 확인하면서 부르는 거야?","다 보진 않아. 오늘은 한 명만 보면 되잖아.","그 한 명이 가사를 못 외웠어도 괜찮아?","후렴만 따라 해. 틀리면 내가 더 크게 부를게.","목 아프다더니 너무 크게는 하지 말고.","맞아. 오늘은 한 번만. 대신 끝나고 어땠는지 길게 말해 줘.","그러면 잘 들어 둬야겠다. 준비됐어."],[["한 번의 후렴을 듣고 좋았던 부분을 말한다.","두 번째 음 올라가는 데? 거기 고친 거 어떻게 알았어. 다시 들려주고 싶다.",8,7],["물부터 건네고 악보를 함께 넘긴다.","연주 순서 말고 내 목부터 챙기네. 고마워, 좀 쉬었다 할게.",6,8],["지금 세 번 연속 부르면 더 익숙해질 거라고 한다.","오늘 한 번만 하자고 했잖아. 더 부르는 건 다음에. 내 말도 들어 줘.",0,-4]],"마이크는 지난번 높이로 표시해 뒀어. 이번에는 네가 손을 놓아도 안 내려가."),$("카메라를 쉬게 하는 오후",["오늘 사진은 좀 쉬고 싶다. 연습 영상만 열 번 찍었어.","그럼 휴대전화부터 가방에 넣을게.","대신 귀는 빌려 줘. 아직 아무한테도 안 들려준 후렴이 있어.","오늘은 첫 청취자가 되는 건가?","응. 표정 숨기지 말기. 너무 열심히 웃어 줄 필요도 없고.","그 부분 좋다. 끝날 줄 알았는데 한 번 더 이어지는 거.","네가 지난번에 한 곡 더 듣고 싶다고 해서 생각났어.","내가 한 말이 노래에 들어갈 줄은 몰랐네.","정식 가사는 아니야. 그래도 네가 먼저 들었으면 했어.","기억해 둘게. 화면에 안 남겨도 잊지는 않으니까."],[["운동장을 걸으며 후렴을 다시 흥얼거린다.","걸음에 맞추니까 더 괜찮네. 다음 소절도 같이 생각해 줘.",9,5],["카메라는 넣어 두고 악보 여백에 감상을 쓴다.","녹화 대신 네 글씨가 남네. 이건 내가 가져도 되지?",6,9],["기념이니까 사진 한 장만 찍자고 카메라를 든다.","오늘은 사진 쉬고 싶다고 했어. 내려 줘. 노래는 그냥 같이 듣자.",0,-4]],"오늘은 내가 사진 찍고 싶어. 지난번엔 쉬고 싶었고, 지금은 이 하늘을 남기고 싶거든."),$("객석을 향한 한 문장",["무대 인사 연습 좀 들어 줘. 길면 바로 손 들어.","선생님처럼 채점하면 되는 거야?","아니, 제일 듣고 싶었던 사람이 와 줘서 좋다는 말이거든.","그러면 심사위원 자격이 없는 것 같은데.","알고 시킨 거야. 네가 듣고 어떤 얼굴 하는지 보고 싶어서.","이런 얼굴? 나 지금 좀 웃고 있는데.","응. 내일도 그 자리에서 그렇게 해 줘.","공연 끝나면 어디서 만날까?","무대 옆 말고 밴드실. 공개 앙코르 뒤에 한 곡 남겨 둘게.","시간까지 적어 둘게. 오늘은 둘이 같이 확인하자."],[["내일 들고 갈 작은 응원 쪽지를 만든다.","객석 멀어도 그 글씨는 찾을 것 같아. 접지 말고 보여 줘.",9,6],["밴드실에서 만날 시간을 함께 적는다.","이번에는 같은 시간. 그리고 둘 다 직접 말했어. 좋아.",6,10],["목을 아껴 두고 인사는 여기까지 연습하자고 한다.","나 계속 떠들 뻔했다. 고마워. 나머지는 내일 네 앞에서 할게.",7,8]],"어제 쓴 인사말을 지웠다 썼어. 결국 네 앞에서 했던 첫 문장이 제일 좋더라."),$("축제 끝의 비공개 앙코르",["카메라 다 껐어. 이번 곡은 나랑 너만 듣는 거야.","관객 한 명인데도 긴장해?","오늘 제일 긴장되는데. 박수로 얼버무릴 수도 없잖아.","끝나도 바로 박수 안 칠게. 네 얘기부터 듣고.","후렴 기억해? 우리가 손뼉 박자 못 맞췄던 그거.","응. 이번에는 네가 부르는 쪽으로 맞출게.","틀려도 돼. 같이 끝내면 되니까.","마지막 음 길게 가는 것도?","그건 네가 옆에 조금 더 있으라는 뜻으로 해석해도 되고.","그러면 노래 끝나도 바로 일어나지는 않을게."],[["첫 후렴을 함께 부른다.","이번에는 진짜 같이 끝났다. 나 이 순간 오래 기억할 것 같아.",10,8],["노래가 끝난 뒤 오늘 가장 좋았던 순간을 말한다.","무대 말고 나 내려오는 순간? 그런 답은 예상 못 했는데. 좋다.",8,10],["다음 주에도 평범하게 만나자고 제안한다.","공연 없어도? 그 말 기다렸어. 다음에는 내가 간식 살게.",9,9]],"축제 곡은 잠깐 접어 뒀어. 이번엔 우리만 아는 후렴부터 새로 붙여 보려고.")],hyunsol:[$("색 이름은 정답이 없어",["보호 안경 먼저. 색만 바뀌어도 눈은 하나씩밖에 없어.","알겠어. 이쪽이 준비한 지시약이지?","응. 선생님이 확인한 양만. 나는 기록할 테니까 천천히 넣어.","색이 바뀌었다. 딸기 우유보다 좀 억울한 색인데.","억울함은 색 좌표에 없는데. 일단 네 이름으로 적어 둘게.","정식 기록에 들어가면 어떡해.","개인 메모야. 나중에 읽고 웃으려고.","지금 웃어도 되는데.","지금 웃으면 네가 더 이상한 이름을 붙일 것 같아서.","이미 하나 더 생각났지만 참고 있을게."],[["변화한 색을 같은 순서로 기록한다.","순서를 잘 봤네. 네 메모 옆에 내 측정값도 적어 둘게.",6,8],["새 색 이름을 조용히 하나 더 들려준다.","잠깐. 웃으면 손 흔들려. 다 내려놓고 다시 말해 봐.",8,4],["정리 뒤 마실 음료를 함께 고른다.","음료는 밖에서. 실험 끝난 다음까지 같이 있을 거면 좋고.",7,6]],"네가 붙인 색 이름이 아직 메모에 있어. 새 실험에도 쓰자는 건 아니고, 그냥 웃겨서."),$("관찰 보상",["오늘 급식, 메뉴판 안 보고 맞혀 봐.","실험 결과보다 어려운 문제인데.","아까 급식실 쪽에서 냄새 났잖아. 관찰력 시험.","달걀말이. 자신은 없지만 희망은 있어.","맞혔네. 내가 좋아하는 반찬까지 맞히면 추가 점수.","너는 매운 거 먹을 때 물을 먼저 받아 두던데.","그런 것도 봤어? 별것까지 기억하네.","같이 먹으니까 보이지. 너도 내가 뭘 남기는지 알잖아.","응. 그래서 네가 좋아하는 건 하나 더 받아 왔어. 관찰 보상.","그럼 나도 네가 좋아하는 반찬을 남겨 둘게."],[["고맙다고 하고 다음 점심을 먼저 약속한다.","밥 한 번 더 먹는 약속 정도는 오차 없이 지켜 줘.",8,8],["접시에 반씩 나누어 놓는다.","계산은 정확하네. 근데 네 쪽에 조금 더 둬도 돼.",7,7],["오늘 내기를 다음 메뉴까지 이어 간다.","좋아. 맞히면 보상은 또 같이 먹는 거. 이건 나도 이득이네.",9,5]],"오늘은 메뉴판 봤어. 그러니까 내기 말고 그냥 같이 먹자. 네 몫도 자리 맡아 뒀고."),$("취향의 농도",["실험대는 다 닦고 왔어. 이제 여기서 쉬어도 돼.","종이컵이 두 개네. 내 것도 준비했어?","응. 지난번엔 너무 달다고 했잖아. 오늘은 덜 넣었어.","내가 그 말 한 거 기억해?","실험 노트보다 네 투덜거림이 더 기억에 남더라.","칭찬인지 모르겠는데, 차는 딱 좋아.","그럼 좋은 쪽으로 해석해. 농도는 자신 없고 네 취향은 외웠어.","이번에는 내가 타 볼까?","내 건 많이 달지 않게. 대충 말고 네가 마셔 보고.","같은 컵 말고 새 컵으로 맛만 확인할게."],[["현솔이 말한 정도로 차를 준비한다.","맞네. 내가 말한 걸 그대로 들어 줬구나. 다음에도 부탁할게.",7,10],["차를 마시며 실험 외의 좋아하는 것을 묻는다.","추리소설. 결말 맞히는 것보다 중간 대화가 좋아. 의외야?",10,5],["오늘의 배합을 둘만의 메모에 적는다.","너도 기록 남기는 버릇 생겼네. 이건 실험 노트에 섞지 말자.",8,7]],"오늘은 내가 덜 달게 마시고 싶어. 전에 적어 둔 것보다 지금 말한 쪽으로 부탁해."),$("오차 없는 저녁 약속",["설명문 마지막 줄만 봐 줘. 숫자 말고 그 아래.","행사 끝나고 5시, 학교 앞 분식집?","응. 그건 손님한테 보여 줄 내용 아니니까 외웠으면 접어.","메뉴도 벌써 골랐네.","내일 결정하면 너 배고파서 아무거나라고 할 것 같아서.","맞는 말이라 반박을 못 하겠어.","떡볶이는 덜 맵게. 네가 좋아하는 건 추가해도 돼.","끝나는 시간이 늦어지면 직접 알려 줄게.","좋아. 이 약속에는 오차 범위 없어. 기다리는 사람 배고프니까.","실험 설명보다 더 열심히 외워 둘게."],[["약속 시간을 직접 읽어 확인한다.","응. 같은 말 두 번 듣는 게 오늘은 안 지루하네.",7,10],["각자 고른 메뉴를 반씩 먹자고 한다.","그럼 실패 확률도 절반. 아니, 너랑 먹으면 대체로 괜찮겠지.",9,7],["설명 연습을 들어 준 뒤 같이 내려간다.","일 끝날 때까지 같이 있어 주네. 그럼 저녁 얘기하면서 가자.",8,9]],"메뉴는 그대로야. 너 오는 시간도 그대로였으면 좋겠어. 오늘 확인하러 온 거지?"),$("계산기 없이 만나는 법",["계산기 돌려줘야 하는데, 네 가방에 넣을 뻔했어.","아직 내가 빌려 가도 되는 줄 알았네.","그거 없으면 또 물어보러 올 줄 알았는데.","계산기 때문에만 오는 건 아니잖아.","알아. 그래도 핑계 하나 있으면 편하니까.","다음에는 밥 먹자고 그냥 말할게.","그럼 나도 실험 도와 달라고 안 둘러댈게.","처음에는 진짜 실험 도와 달라는 말 아니었어?","처음에는. 중간부터는 네가 오는 시간을 기다렸어.","나도. 계산기 돌려줘도 그 시간은 남겨 두고 싶어."],[["계산기는 돌려주고 다음 만남을 정한다.","물건 없이도 또 오는 거네. 그쪽이 더 좋다.",10,9],["빈 설명문 뒷면에 함께 먹고 싶은 메뉴를 적는다.","여백이 부족한데. 다음 장까지 써도 되는 약속이지?",9,9],["오늘은 천천히 정리하며 더 이야기하자고 한다.","급하게 끝내지 않아도 돼. 나도 아직 할 말 있어.",8,10]],"계산기 없어도 찾아왔네. 그럼 이제 핑계 안 찾아도 되겠다.")],taewoo:[$("여덟 박자의 첫 수업",["발부터 보지 마. 어깨가 먼저 가면 발은 따라온다니까.","내 발은 네 설명을 못 들었나 봐.","그럼 내가 발한테 직접 설명할까? 하나, 둘, 셋.","잠깐. 여덟까지 갔는데 난 아직 다섯인데.","괜찮아. 여덟이 다시 와. 이번에는 옆에서 해 줄게.","같은 쪽으로 움직이니까 조금 덜 헷갈린다.","그렇지. 방금 맞았어. 손!","하이파이브까지가 마지막 동작이야?","그건 잘했다고 내가 주는 보너스. 싫으면 안 줘.","아니. 다음에도 맞히면 또 줘."],[["마지막 여덟 박자만 한 번 더 배운다.","좋아. 지금 감 잡았을 때 딱 한 번만. 옆에 서.",9,5],["방금 맞춘 동작을 서로의 말로 설명한다.","너 설명 웃긴데 잘 외워진다. 내가 다음부터 써도 돼?",7,8],["잠깐 물 마시며 좋아하는 춤을 묻는다.","쉬는 시간에 그 얘기 시작하면 길어진다? 나 진짜 좋아하거든.",8,6]],"지난번에 헷갈린 다섯째 박자부터 해 볼까? 오늘은 내 옆자리를 이미 잘 찾네."),$("빈 물병의 비밀",["마지막 박자 일부러 나랑 다르게 한 거야?","내 발이 독립 선언을 했어. 협상 중이야.","그럼 내가 중재해 줄게. 거울 말고 내 어깨를 봐.","기다리고 연습하고 나까지 가르치면 힘들지 않아?","발은 괜찮아. 오늘 계속 안 맞아서 오기가 좀 났어.","아까 빈 물병 두 번 마시려고 하던데.","그건 못 본 걸로. 대신 네 박자 틀린 건 나만 알게.","거래할게. 딱 한 번 더 알려 줄 수 있어?","응. 이번엔 발 말고 나 봐. 손 내밀면 마지막 동작이야.","그러면 이번에는 놓치지 않을게."],[["의욕이 남은 마지막 여덟 박자를 같이 맞춘다.","그거야! 방금 같은 박자였어. 나 지금 진짜 기분 좋다.",10,7],["물병부터 채우고 돌아와 연습하자고 한다.","연습 안 끝내고 물만 챙겨 오는 거네. 좋아, 기다릴게.",8,9],["오늘은 여기까지 하고 편히 걸어 내려가자고 한다.","조금 아쉽지만 내일 해도 되지. 내려가면서 네 얘기 듣자.",6,7]],"지난번에 맞췄던 부분은 이제 된다. 오늘은 다리가 좀 풀려서 걸으면서 얘기하고 싶어."),$("오늘은 걸어서 내려가자",["오늘 계단만 올라가도 다리가 풀리더라.","그럼 연습 영상은 내일 봐도 되겠다.","응. 동작 한 번만 더 하려다가 그냥 껐어.","다음 춤 가르쳐 달라는 말은 다음에 할게.","고맙다. 대신 옆에 좀 앉아 줘. 쉬는 건 같이 해도 되잖아.","이렇게? 물병은 내가 갖다 줄게.","응. 오늘은 나 멋있게 움직이는 모습 없어도 실망하지 마.","쉬면서 말하는 것도 너인데.","그 말 은근 좋다. 나 오늘은 그냥 수다 떨래.","매점 닫기 전에 천천히 내려가자."],[["가방을 함께 챙기고 매점까지 천천히 걷는다.","속도 맞춰 줘서 고마워. 나 오늘 이야기할 건 많아.",8,10],["앉아서 최근에 본 춤 영상을 이야기한다.","보는 건 좋지. 내가 좋아하는 부분 찾으면 같이 보자.",9,7],["쉬기 전에 마지막 동작만 더 해 보자고 한다.","오늘은 진짜 끝. 대신 걸어서 내려가자. 안 된다는데 더 시키진 말고.",0,-4]],"오늘은 다리 괜찮아. 지난번에 천천히 같이 내려가 준 건 고마웠어. 오늘 뭐 할까?"),$("둘만 아는 객석 신호",["이 손동작 기억해 둬. 공연 끝나면 객석에서 해 주는 거야.","생각보다 어렵네. 시험에 나와?","내가 너 찾는 시험에 나와. 다른 애들은 정답 몰라.","내가 반대로 하면?","그럼 웃다가 마지막 포즈 망할 수도 있어.","안 하는 게 안전한가?","그건 또 싫어. 해 줘. 내가 찾고 싶으니까.","끝난 뒤에는 어디로 가면 돼?","지금 앉은 자리. 내가 내려와서 같이 표시 떼자.","그럼 여기서 기다릴게. 손동작도 외워 둘게."],[["신호를 다시 맞춰 보고 서로 확인한다.","맞아. 내일 그 손 찾을게. 사람 많아도 찾을 수 있어.",9,9],["객석 표시 옆에 작은 별을 그린다.","내 자리는 무대인데 네 자리 꾸미는 게 더 재밌네.",10,6],["내려온 뒤 같이 먹을 간식을 고른다.","좋아. 내일은 춤 얘기하다가도 그거 먹으러 가야겠다.",8,8]],"신호 한 번만 보여 줘. 응, 맞았어. 내일은 멀리서도 알겠네."),$("무대가 없어도 같은 자리",["찾았어. 마지막 포즈 끝나자마자 너 봤다.","난 네가 못 본 줄 알고 신호 두 번 했어.","그래서 내가 웃었잖아. 영상 보면 딱 걸릴 텐데.","오늘 영상은 네가 보고 싶을 때 같이 보자.","지금은 이거부터. 객석에 붙여 둔 표시 떼도 돼?","이미 네 공연 끝났으니까. 가져갈 거야?","아니, 네 손등에. 다음에도 여기라는 뜻.","다음 공연 때?","무대가 없어도. 그냥 나 기다리러 와도 돼.","그러면 너도 내 옆자리 그냥 찾아와."],[["표시가 떨어지지 않게 손을 펴서 보여 준다.","너 그거 진지하게 챙기니까 내가 더 부끄럽잖아. 그래도 좋아.",10,8],["다음 만남은 춤 없이 산책으로 정한다.","좋아. 못 춰도 되는 약속. 걷는 박자는 맞출 수 있지?",9,10],["둘만의 손 신호를 한 번 더 보낸다.","바로 앞에서 하니까 좀 웃긴데. 응, 나도 확인했어.",9,8]],"손등 표시는 떼었어도 돼. 네 자리까지 없어지는 건 아니니까.")],taehun:[$("구름 아래의 책갈피",["저 구름, 뭐처럼 보여?","찢어진 솜사탕. 너무 배고픈 답인가?","나는 고래라고 생각했는데. 솜사탕이면 급식 먼저 먹어야겠다.","도감에는 이름이 있을 텐데 일부러 안 보는 거야?","이름 알아도 다른 걸 떠올릴 수는 있잖아.","그러네. 이 책도 구름 이야기야?","시집. 오늘 하늘하고 닮은 문장 찾는 중이야.","이 부분이 좋다. 늦게 와도 기다리고 있다는 말.","나도 거기 표시하려던 참이었어. 네가 골랐으니까 책갈피 넣을게.","다음에 와도 그 페이지부터 볼 수 있겠네."],[["같은 페이지에서 다른 좋은 문장을 찾는다.","같은 걸 읽어도 네가 고르는 데가 다르네. 그래서 재밌다.",8,7],["구름이 바뀔 때까지 잠깐 함께 본다.","이제 고래 꼬리 없어졌다. 같이 안 봤으면 나만 아쉬웠겠다.",9,5],["점심 뒤 도감도 같이 펼쳐 보자고 한다.","좋아. 배고픈 솜사탕 감상부터 해결하고 오자.",7,8]],"지난번 책갈피 아직 거기 있어. 오늘 네가 고를 문장이 궁금해서 다른 건 안 꽂았어."),$("흐린 날에 고른 책",["오늘 관측은 접어야겠어. 하늘이 완전히 닫혔네.","그럼 약속도 다음으로 미룰까?","관측만 접는다고 했는데. 너까지 돌려보낸다는 말은 안 했어.","다행이다. 나도 바로 가기는 싫었어.","도서관 갈래? 서로 읽을 책 골라 주자.","너무 어려운 건 나 오래 걸릴 텐데.","빨리 읽는 시험 아니야. 마음에 든 문장 하나면 돼.","이 책엔 작은 메모가 있네.","내가 넣었어. 좋은 문장 찾으면 보여 달라고.","그러면 다음에 만날 이유도 책 안에 있네."],[["다음에 함께 읽을 페이지를 정한다.","혼자 먼저 다 읽어도 그 페이지는 같이 보자. 기다릴게.",8,9],["태훈에게 권하고 싶은 책을 직접 고른다.","네가 좋아하는 쪽을 먼저 알겠네. 다 읽으면 감상 말해 줄게.",9,6],["책을 빌린 뒤 구름 사진 한 장을 남긴다.","관측 실패 기념? 아니, 계획이 바뀌어도 만난 날 기념으로 하자.",8,7]],"네가 골라 준 책 읽다가 밑줄 긋고 싶어서 참았어. 빌린 책이니까 메모만 가져왔지."),$("네가 본 쪽의 하늘",["기다리면서 구름 세다가 그만뒀어. 자꾸 모양이 바뀌어서.","지금은 뭐처럼 보여?","좀 삐뚤어진 우산. 너는?","둘이 앉은 벤치. 오른쪽이 조금 비어 있네.","그쪽이 네 자리야? 그렇게 보니까 앉고 싶어지네.","실제 벤치는 여기 있는데.","응. 오늘은 네가 본 쪽이 더 마음에 든다.","그 말 노트에 적어도 돼?","내 말이라고만 적지 말고 네가 본 모양도 그려 줘.","그림은 좀 삐뚤어도 괜찮으면."],[["같은 구름을 서로 다르게 그린다.","두 그림을 나란히 놓으니까 더 재밌다. 하나는 네가 가져.",10,6],["기다리면서 떠올린 이야기를 듣는다.","별거 아닌 얘기야. 그래도 네가 듣고 싶다면 해 볼게.",8,9],["음료를 나누고 말없이 하늘을 더 본다.","말 안 해도 괜찮네. 옆에 누가 있다는 건 이런 건가 봐.",9,7]],"오늘 구름은 네가 먼저 이름 붙여. 내가 그쪽 그림으로 볼 수 있는지 해 볼게."),$("흐려도 바뀌지 않는 약속",["행사 끝난 뒤 예보 봤어. 구름이 좀 있을 것 같아.","별 보는 건 또 어려우려나?","그럼 도서관. 너 만나는 건 그대로.","대체 계획까지 다 세워 둔 거야?","날씨한테 우리 약속까지 맡기기 싫어서.","이 도감은 내가 받치고 있을게. 여기 적으면 돼?","응. 맑으면 운동장, 흐리면 창가 자리. 둘 다 같은 시간.","비 오면?","우산 쓰고 도서관. 질문이 더 생겨도 결국 만나게 해 둘 거야.","그 답 마음에 든다. 나도 잊지 않을게."],[["도감 옆에 두 가지 계획을 함께 적는다.","이렇게 적으니까 어느 하늘이어도 괜찮겠네.",8,10],["도서관에서 읽을 책을 미리 고른다.","너는 흐린 쪽도 기대하는구나. 나도 조금 그래.",10,7],["태훈이 좋아하는 별 이야기를 더 듣는다.","시간 괜찮아? 이건 길어져. 대신 내일 이어도 돼.",9,7]],"예보는 또 바뀌었어. 그래도 두 가지 중 하나면 되니까 이번에는 덜 초조해."),$("별 대신 적은 이야기",["역시 구름이 이겼네. 관측회는 취소래.","우리 산책은?","그건 구름이 결정하는 일정 아니지.","노트도 가져왔네. 별을 못 봐도 쓸 게 있어?","오늘 쓸 건 별 말고 네 얘기인데.","갑자기 자세를 똑바로 해야 할 것 같은데.","그냥 걸어. 네가 아까 간식 고르다 오래 고민한 것도 쓰려고.","그렇게 사소한 것도?","내가 같이 있었잖아. 그래서 안 사소해졌어.","그러면 다음 문장은 내가 읽을 자리 남겨 줘."],[["노트의 다음 문장을 함께 적는다.","네 글씨가 섞이니까 오늘이 더 정확해졌네.",10,9],["별 없는 하늘 아래 천천히 한 바퀴 걷는다.","오늘 보이는 건 적어도 같이 걷는 시간은 길어졌어.",9,10],["다음 맑은 날과 흐린 날의 약속을 둘 다 잡는다.","둘 다 기다려지는 계획이네. 나 달력에 옮겨 적을게.",10,8]],"그날 쓴 노트를 다시 읽었어. 별 이름은 없는데 장면은 선명하더라.")],seoyul:[$("손등에 묻은 여백",["그 종이 가장자리만 잡아 줘. 가운데는 아직 안 말랐어.","알겠어. 그런데 손등이 먼저 색을 골랐네.","아, 묻었다. 잠깐, 닦을 거 줄게.","이 색도 포스터에 들어가?","네가 고르면 넣을 수 있어. 아직 여백 많아.","그럼 여기. 너무 눈에 띄지는 않게.","왜 작게? 마음에 든 색이라며.","나만 어디 있는지 알면 재밌을 것 같아서.","그럼 나도 아니까 둘만 아는 거네.","응. 다음에 포스터 걸리면 먼저 찾아볼게."],[["작은 색 조각을 포스터 여백에 붙인다.","잘 안 보이는데 없으면 허전하겠다. 그 자리에 두자.",9,5],["손을 닦고 종이가 마를 때까지 같이 기다린다.","말리는 시간은 늘 지루했는데 오늘은 괜찮네.",6,9],["서율이 고르고 싶었던 다른 색도 묻는다.","이쪽. 사실 네가 물어봐 주길 조금 기다렸어.",8,7]],"우리만 아는 색 아직 여기 있어. 네가 들어오자마자 그쪽 보는 것도 봤고."),$("같은 순간에 멈춘 반주",["이 음만 눌러 줘. 내가 고개 끄덕일 때.","여기? 옆 건반이랑 너무 가까워.","하나만. 두 개 누르면 곡이 조금 놀라.","곡이 방금 많이 놀란 것 같은데.","괜찮아. 나도 너 보고 웃다가 다음 음 놓쳤어.","그러면 같이 틀린 거네.","응. 이상하게 그 부분이 제일 기억나.","포스터 구석에 그린 건 뭐야?","둘이 동시에 멈춘 장면. 손은 그리기 어려워서 동그라미로 했어.","그래도 어느 쪽이 나인지는 알겠다."],[["한 음만 맡아 끝까지 함께 연주한다.","이번에는 안 멈췄다. 그래도 아까 웃은 건 지우지 말자.",8,9],["낙서 옆에 자신의 동그라미를 더 그린다.","내 그림에 네 선이 들어가네. 생각보다 잘 어울린다.",10,5],["완벽하게 치려 하지 말고 편하게 한 번 더 해 본다.","응. 오늘은 녹음 안 해. 우리만 들으면 돼.",8,7]],"그때 동그라미 그림에 팔을 붙였어. 둘이 같이 틀리는 모양이 더 잘 보이게."),$("빈 의자에 채운 옆모습",["가만히 있어 봐. 방금 그쪽 보고 있었잖아.","나 늦게 와서 벌 서는 거야?","아니. 빈 의자만 그리다가 네가 와서 채우는 중이야.","그래서 여기만 선이 연하네.","응. 아무것도 안 그리려다가 자리만 남겨 뒀어.","이제 그림이 덜 휑해?","많이. 네 가방이 생각보다 커서 화면도 거의 다 찼고.","가방이 주인공이네.","그건 큰 그림이고, 이 작은 낙서는 네 거. 얼굴은 좀 덜 자신 있지만.","내가 받아도 돼? 오래 가지고 있을게."],[["낙서를 받고 좋아하는 부분을 구체적으로 말한다.","그 표정 알아봤어? 너 웃을 때 한쪽이 먼저 올라가더라.",10,7],["완성될 때까지 옆에서 같은 풍경을 본다.","조금만 더 있어 줘. 오늘은 혼자 마무리하기 싫어.",8,10],["빈 여백 한쪽을 그려도 되는지 묻는다.","응. 그 부분은 네가 보고 있는 쪽으로 채워 줘.",9,8]],"받아 간 작은 그림, 구겨져도 괜찮아. 가지고 다니다 생긴 자국이면 나는 좋거든."),$("세 번째 만남은 내가",["그림 보지 마. 아직 선 고치는 중이야.","그거 내 소매지? 주름까지 똑같은데.","내일 객석에서 빨리 알아보는 연습.","얼굴을 그리면 더 빠르지 않아?","그건 자꾸 오래 보게 돼서 시간이 걸려.","나는 무대에서 너 바로 찾을 수 있는데.","키보드 한 대잖아. 너무 쉬운 문제로 잘난 척하지 마.","끝나고는 아까 고른 가게 같이 가자.","아침에도 만나. 그러면 하루에 두 번이네. 세 번째는 내가 만들어 볼게.","세 번째 만남은 네가 골라. 나는 갈게."],[["가방에 알아보기 쉬운 리본을 달아 달라고 한다.","이렇게 묶으면 돼. 내일 객석에서 네 가방부터 찾을게.",9,9],["서로의 서툰 초상화를 바꿔 가진다.","안 닮았는데 마음에 든다. 뒷면에 날짜 적어 둬.",10,7],["서율이 고를 세 번째 만남을 기다리겠다고 한다.","주말에 작은 전시 보러 가자. 초대장은 내가 그려 줄게.",8,10]],"세 번째 약속 초대장 다 그렸어. 아직 접지는 않았는데, 네가 직접 가져가도 좋겠다."),$("완성하지 않은 한쪽",["이건 전시에 안 걸었어. 보여 줄 사람이 따로 있어서.","우리 같이 앉아 있던 그림이네.","응. 한쪽 비어 있는 거 보이지?","아직 못 그린 거야?","같이 그리려고 남겨 둔 거야. 네가 보는 쪽은 네가 그려.","내 선 좀 삐뚤 텐데.","그건 알지. 같이 반주했을 때부터 알고 있었어.","그 기억이 여기까지 오네.","응. 완벽한 한 장보다 같이 만든 한 장이 더 좋아졌거든.","그러면 마지막 선도 같이 그리자."],[["빈 여백에 두 사람의 다음 약속을 그린다.","그림 안에 다음 그림이 생겼네. 그날도 같이 앉자.",10,9],["같은 연필을 번갈아 쓰며 풍경을 완성한다.","네 선 다음에 내 선. 구별돼도 괜찮다. 그래서 우리 그림이니까.",9,10],["그림을 들고 오늘의 풍경과 나란히 본다.","지금보다 종이에 남은 쪽이 조금 더 다정해 보이네.",10,8]],"그 그림 액자는 아직 안 골랐어. 같이 골라야 마무리한 느낌일 것 같아서.")],juhan:[$("프로그램보다 먼저 웃는 사람",["새 인사말 테스트 중이야. 아무 말이나 입력해 봐.","안녕. 너는 급식 줄을 대신 서 줄 수 있니?","잠깐, 왜 바로 그런 걸 물어봐. 기능 목록에 없잖아.","자기가 학생회장이라고 답했는데?","초기 문장을 내가 잘못 붙였네. 지워야겠다.","좀 아까운데. 테스트용 농담으로 남겨 둘까?","정식 화면 말고 연습 화면에만. 이름도 네 농담이라고 적을게.","내 이름이 버그 옆에 남는 건가?","버그 아니고 공동 아이디어. 웃겼으니까.","방금은 프로그램보다 네가 먼저 웃었네."],[["문장을 직접 고쳐서 다시 실행한다.","고친 뒤 처음 뜨는 인사, 네가 눌러 줘. 같이 만든 거니까.",7,9],["재미있는 연습용 대사를 하나 더 제안한다.","그건 좀 웃긴데. 잠깐, 적을게. 말 너무 빨리 하지 마.",10,5],["주한이 처음 프로그램을 만든 계기를 묻는다.","그 얘기는 길어. 그래도 지금 시간 있으면 해 줄게.",8,8]],"급식 줄 대신 서 달라는 질문 아직 테스트 목록에 있어. 이제는 제대로 못 한다고 답하고."),$("둘만 아는 시험 응답",["오늘 테스트, 어디서 웃을지 맞혀 볼까?","또 학생회장 나온다고?","그건 고쳤어. 대신 마지막 문장 읽어 봐.","내 발이 독립 선언? 우리가 했던 농담이네.","네가 지난번에 비슷한 말 해서 적어 뒀어. 싫으면 빼고.","좋아. 여기서 보니까 우리가 만든 표시 같네.","그럼 남길게. 아무나 보는 화면에는 안 나가고.","지금은 뭘 도와주면 돼?","한 번 끝까지 같이 눌러 줘. 혼자 보면 이상한 곳을 놓치더라.","다 끝나면 화면 밖에서도 좀 얘기하자."],[["처음부터 끝까지 사용해 보고 불편한 곳을 말한다.","이 부분 내가 너무 익숙해서 못 봤다. 같이 보길 잘했어.",7,10],["농담 옆에 주한의 답도 한 줄 남긴다.","내 답까지? 그럼 진짜 대화가 남겠네. 조금만 생각할게.",10,6],["잠깐 화면을 닫고 취미 이야기를 나눈다.","나 게임 말고도 이야기할 거 있어. 의외로 제과 영상 좋아해.",9,7]],"지난번에 같이 누르던 순서 기억하지? 오늘은 네가 찾은 부분부터 고쳤어."),$("같은 데서 떨어진 두 사람",["두 번째 조작기 잡아. 오늘은 테스트 말고 그냥 하는 거야.","협동 게임이네. 내가 못하면 너도 떨어져?","응. 근데 내가 먼저 떨어질 수도 있으니까 너무 긴장하지 마.","왼쪽으로 가면 될 것 같은데.","나도 그 생각 했는데…… 아, 둘 다 떨어졌다.","이건 누구 책임이라고 해야 하지?","같은 생각 한 책임. 방금 표정도 똑같았을 것 같은데.","다시 하면 이번엔 반대로 가자.","잠깐, 어깨 조금 붙여도 돼? 화면이 여기서 잘 보여.","응. 이번에는 화면도 같은 쪽으로 보자."],[["한 사람이 먼저 움직이고 다른 사람이 기다린다.","이번엔 통과했어. 네가 기다리는 걸 보니까 나도 덜 급해지네.",8,10],["동시에 다시 도전하고 실수를 함께 웃는다.","또 떨어졌는데 아까보다 재밌다. 한 번만 더 하자.",11,5],["쉬면서 둘의 엉뚱한 공략법을 그림으로 적는다.","이런 공략은 인터넷에 없겠다. 우리만 쓰자.",9,8]],"이번에는 지난번 구덩이 앞에서 멈췄어. 같이 배운 게 몸에 남았나 봐."),$("얼터에고를 끈 다음",["시연 끝. 이제 창 닫아도 돼.","다음 안내도 프로그램이 해 주는 거 아니야?","그건 내가 말할 건데. 잠깐만 기다려.","응. 천천히 말해.","내일 시연 끝나고 나랑 간식 먹으러 갈래?","좋아. 몇 시쯤이면 될까?","네 시 반. 아니, 정리 생각하면 다섯 시. 지금 좀 말이 빨랐지?","응. 그래도 중요한 건 알아들었어. 네가 같이 가자고 한 거.","그 문장은 다시 실행 안 해도 저장해 줘.","직접 기억할게. 다섯 시에 같이 가자."],[["시간을 함께 확인하고 약속을 직접 말한다.","응. 화면으로 보여 주는 것보다 이렇게 듣는 게 좋네.",8,10],["함께 먹고 싶은 간식을 하나씩 고른다.","나는 쿠키. 너는? 두 개 고르면 반씩 바꿔 먹자.",10,7],["말이 빨라져도 괜찮다고 웃으며 기다린다.","나 지금 또 빨라지려는데. 그래도 네가 웃어 주니까 덜 급해.",9,8]],"내일 약속은 프로그램에 안 넣었어. 잊어서가 아니라 내가 기억하고 싶어서."),$("화면을 가리고 묻는 말",["마지막 스테이지야. 이번에는 우리가 만든 엔딩까지 가 보자.","첫날 인사말도 그대로 남았네.","고친 것도 있고 남겨 둔 것도 있어. 둘이 웃었던 건 남겼어.","이제 선택지 떴다. 내일도 같이 할래?","잠깐. 그건 화면 보면서 대답하지 말고.","왜 화면을 가려?","내가 직접 물어보고 싶어서. 내일도 나랑 같이 할래?","게임을?","게임도. 그냥 밥 먹는 것도. 딱히 할 일 없는 날도.","그럼 이 대답은 네가 직접 들어 줘."],[["게임 없이도 함께 만나고 싶다고 답한다.","응. 그게 내가 듣고 싶었던 쪽이야. 화면은 이제 꺼도 되겠다.",11,9],["다음에 같이 만들 작은 이야기를 제안한다.","좋아. 이번에는 일정부터 같이 짜자. 중간에 쉬는 시간도 넣고.",9,10],["첫날의 농담을 다시 꺼내며 웃는다.","그 질문 때문에 이렇게 오래 같이 있게 될 줄 몰랐네.",10,8]],"엔딩은 봤는데 같이 할 일은 아직 많네. 새 게임보다 오늘 간식부터 고를까?")],minhyuk:[$("계단참의 짧은 휴식",["상자 아래를 받쳐. 계단에서는 앞이 보여야 한다.","너도 두 개 다 들지 말고 하나 나눠 줘.","이 정도는 괜찮…… 아니, 같이 옮기기로 했지. 하나 가져가.","여기서 잠깐 쉬어도 될까?","좋아. 음료도 있다. 준비물 목록에는 없지만.","반장답게 휴식까지 준비했네.","그런 말 들으면 또 일을 찾아야 할 것 같잖아.","그럼 그냥 같이 쉬는 친구답게?","그쪽이 낫다. 나도 지금은 계단 숫자 세기 싫어.","다 마실 때까지 상자는 여기 두자."],[["음료를 나누고 천천히 쉬어 간다.","서두르지 않으니까 여기 바람이 부는 것도 알겠네.",7,9],["남은 상자를 정확히 반으로 나눈다.","내가 혼자 하려던 거 알아챘구나. 고맙다. 다음에도 말해 줘.",6,10],["민혁이 일 말고 좋아하는 것을 묻는다.","디저트 가게 보는 거. 보는 것만 잘하고 가는 건 좀 서툴지만.",10,5]],"이번에는 상자를 처음부터 반으로 나눴어. 네가 또 말하게 만들기 싫어서."),$("폐점 직전의 마지막 간식",["체크리스트 끝. 더 확인할 건 없어.","그럼 매점 닫기 전에 갈 수 있겠다.","지금? 잠깐, 뛰면 교칙…… 복도 말고 운동장으로 가자.","네가 먼저 뛰는 거 처음 봐.","마지막 간식이 남았는지는 중요한 문제니까.","하나 남았다. 나눠 먹을까?","응. 이번에는 정확히 반으로 자를 자신 없어.","큰 쪽 가져도 돼. 너 오늘 정리 많이 했잖아.","일한 양으로 간식 나누지 말자. 오늘은 같이 먹을 사람으로 남고 싶어.","그럼 반은 조금 삐뚤어도 괜찮겠다."],[["간식을 반으로 나누고 같은 자리에 앉는다.","빨리 먹을 이유 없어. 오늘 목록은 이미 끝났으니까.",9,8],["민혁이 가 보고 싶던 가게를 묻는다.","말하면 진짜 같이 가 줄 거야? 그러면 한 군데 골라 볼게.",10,6],["오늘은 수고했다고 말하고 다음 정리도 함께 약속한다.","함께한다는 쪽이 좋다. 맡겨 두겠다는 말보다.",7,10]],"오늘은 매점 시간부터 확인했어. 지난번처럼 달릴 필요는 없고, 같이 갈 시간은 있어."),$("마지막에 남긴 반찬",["천천히 먹어. 누가 식판 가져가는 것도 아닌데.","네가 남아서 정리하는 줄 알고 빨리 왔어.","나도 같이 먹으려고 기다린 거야. 일은 잠깐 접었고.","좋아하는 반찬을 마지막까지 남겨 놨네.","어떻게 알았어?","항상 그 순서로 먹더라.","그런 것도 보네. 반 줄까?","네가 좋아하는 건데 괜찮아?","그래서 주는 거야. 별로인 걸 나눠 주자는 게 아니고.","그러면 나도 좋아하는 쪽을 줄게."],[["서로 좋아하는 반찬을 반씩 바꾼다.","좋아하는 걸 두 가지 먹게 됐네. 괜찮은 교환이다.",10,7],["오늘만큼은 업무표를 꺼내지 말자고 제안한다.","응. 가방 닫을게. 네 얘기를 먼저 들을 차례네.",9,9],["식사 후 함께 정리하겠다고 말한다.","혼자 남겨 두지 않겠다는 말이지? 고마워. 밥부터 천천히 먹자.",7,10]],"오늘은 네가 천천히 먹는지 내가 안 봐도 되겠네. 자리는 지난번처럼 여기야."),$("업무표 아래의 개인 약속",["공동 업무는 여기까지. 아래 칸은 비워 두려고 했는데.","내 이름 써도 돼?","잠깐. 거기는 반장이 아니라 내가 적는 거다.","그러면 네가 써 줘. 나는 기다릴 자리 말할게.","행사 끝나고 교문 옆. 시간은 다섯 시 반.","완장도 그대로 차고 나올 거야?","그건 정리 끝나면 벗을 거야. 그때까지 반장으로 불러야 하는 건 아니고.","그럼 지금부터 민혁이라고 부를게.","이미 그렇게 부르잖아. 그런데 지금은 좀 다르게 들린다.","나도 그 칸에 적힌 이름이 다르게 보여."],[["개인 약속 칸에 두 사람의 시간을 나란히 적는다.","이 줄은 지우지 않을게. 일이 늘어도 직접 이야기하고 바꿀게.",8,11],["완장 매듭을 고칠 시간을 주며 조용히 기다린다.","그렇게 보고 있으면 더 안 묶이는데. 그래도 먼저 가지는 마.",10,7],["행사 뒤의 첫 행선지를 함께 고른다.","선택지가 많네. 업무 장소 고를 때보다 훨씬 어렵다.",9,9]],"업무표 아래 네 이름 보고 또 확인했어. 틀린 게 없는데 그냥 한 번 더 보고 싶어서."),$("완장을 벗고 남은 시간",["정리 끝. 이제 완장 벗어도 돼.","내가 기다릴 자리는 제대로 찾았네.","내가 쓴 약속인데 놓칠 수 없지. 이것도 가져왔어.","주말 일정표? 수정선이 엄청 많다.","가게 시간 맞추다가 산책도 넣고, 비 오면 어디 갈지 적다가.","모든 칸 안 채워도 괜찮아.","그러네. 이번엔 계획 없어도 괜찮을 것 같다.","첫 행선지는 내가 골라도 돼?","응. 내가 모르는 길이어도 같이 갈게.","그럼 천천히 걷는 데부터 시작하자."],[["계획표를 접고 가까운 길부터 함께 걷는다.","빈칸이 있어도 불안하지 않네. 네가 옆에 있으니까.",11,9],["가고 싶었다던 가게를 첫 장소로 고른다.","그때 말한 걸 기억했구나. 지금 같이 가는 건 더 좋다.",10,10],["각자 한 곳씩 고르고 중간 시간은 비워 둔다.","반반 계획. 이 정도면 내가 힘 빼는 연습도 되겠다.",9,10]],"오늘 일정표에는 빈칸이 있어. 네가 고를 곳을 남겨 둔 거니까 걱정 말고.")],junyeon:[$("인쇄실의 작은 농담",["그 묶음까지 네가 들려고? 조금 무거울 텐데.","반씩 나누면 되잖아. 어디 놓을까?","창가 책상. 네가 여기까지 올 줄 몰랐어.","정리 끝나면 매점 갈래? 네가 고르는 음료 궁금한데.","난 복숭아 맛. 그런데 다른 애가 너 부르는 것 같아.","잠깐 대답하고 돌아올게. 같이 가자는 말은 그대로야.","먼저 가도 돼. 기다리는 건 익숙하니까.","네가 가고 싶은지도 듣고 싶어.","가고 싶어. 그러니까…… 이 마지막 묶음만 같이 놓자.","응. 그다음 음료는 네가 골라."],[["함께 정리하고 약속한 매점에 간다.","진짜 다시 왔네. 나도 가방 챙겼어. 복숭아 맛 아직 있으면 좋겠다.",8,9],["준연이 적어 둔 연구 노트를 물어본다.","낙서도 많아. 그래도 보고 싶으면 다음 장부터 보여 줄게.",10,5],["오늘은 짧게 마시고 다음 만남의 시간을 정한다.","조금 아쉽지만 언제 다시 오는지 들으니까 덜 헷갈리네.",7,8]],"오늘 음료는 내가 골랐어. 네가 또 올지 몇 번이나 문을 봤지만, 지금은 왔네."),$("두 이름 사이의 작은 칸",["달력에 이름이 계속 두 개씩 적히네.","준비하는 조가 정해져서 그런가 봐.","응. 나는 옮겨 적기만 하니까 잘 보이거든.","다음 정리 작업은 같이 할래?","좋아. 그런데 그 사람 안 오는 날이면?","각자 먼저 한 약속을 보고 가능한 날을 정하면 되지.","아, 응. 그렇게 말하면 되는 거였지.","목요일은 어때? 나도 그날은 비어 있어.","목요일. 적었어. 다른 약속 생기면 말은 해 줘.","응. 갑자기 사라지지는 않을게."],[["서로 가능한 목요일 시간을 직접 확인한다.","두 번 확인했다고 웃지는 마. 이번에는 나도 확실히 기억하고 싶어.",8,10],["정리 뒤 잠깐 노트를 보며 쉬자고 한다.","내 노트도 약속에 들어가? 그럼 정리만 기다리는 날은 아니겠네.",10,6],["다른 사람을 밀어내는 약속은 할 수 없다고 솔직히 말한다.","알아. 듣고 조금 움츠러들었지만, 모르는 척하는 것보다는 낫겠지.",4,9]],"목요일이라는 말은 아직 기억해. 오늘은 정리할 양이 적어서 노트 볼 시간이 더 남아."),$("음료 두 개 사이",["여기 앉아도 돼. 옆자리 아직 비어 있어.","음료도 두 개네. 하나는 내 거야?","응. 네가 올지 몰라서 그냥 두 개 샀어.","내가 오기로 했잖아. 다음에도 같이 먹자.","그때도 나부터 찾을 거야?","먼저 한 약속에 맞춰 올게. 네가 기다리는 시간은 지키고 싶어.","그게 같은 말은 아니네.","응. 그래도 지금 같이 있는 게 거짓말은 아니야.","알아. 지금은 좋아. 다음 생각하면 자꾸 말을 더 하고 싶어져.","오늘 마실 음료가 미지근해지기 전까지는 여기 앉아 있을게."],[["지금 좋았던 사소한 일을 서로 이야기한다.","오늘은 네가 그냥 앉아 준 게 좋았어. 나도 그걸 먼저 말하면 됐는데.",10,7],["다음 만남 시간을 함께 고르되 다른 일정도 확인한다.","네 다른 약속이 적힌 걸 보니까 조금 아쉽다. 그래도 내 시간은 지우지 않았네.",7,10],["오늘은 짧게 만나고 각자 할 일을 마치자고 한다.","짧다고 없었던 시간은 아니겠지. 응, 내 노트도 마저 써야 해.",5,8]],"오늘은 내가 먼저 음료 마셨다. 기다리다가 미지근해지는 건 싫어서. 네 것도 여기 있어."),$("서류 옆에 남긴 간식",["내일 끝나면 다들 자기 약속대로 가겠지.","너는 끝난 뒤에 하고 싶은 게 있어?","별로. 아니, 아직 생각 안 했어.","정리 끝내고 지금 간식부터 먹자. 네 것도 남겨 뒀어.","나 때문에 남긴 거야? 모두 남아서 먹는 거 말고?","네가 아까 먹고 싶다고 했잖아.","그랬지. 네가 들었네.","할 말 있어 보였는데, 지금 해도 돼.","행사 끝나고 하자. 지금은…… 이 서류만 놓고 올게.","그러면 간식은 여기 둘게. 돌아오면 같이 먹자."],[["돌아온 뒤 말없이 간식을 반으로 나눈다.","네가 안 물으니까 더 말해야 할 것 같은데. 오늘은 조금만 같이 있어 줘.",8,8],["준연이 하고 싶다는 다음 이야기를 재촉하지 않는다.","나중에 말하겠다는 걸 기억해 주는구나. 응, 피하지는 않을게.",6,10],["내일 각자의 일정과 함께 정리할 시간을 확인한다.","다 적혀 있으니까 숨을 곳도 없는 것 같고, 덜 헷갈리기도 하고. 같이 확인할게.",7,9]],"간식 봉투 접어 뒀어. 그냥 버리려다가 그때 네가 남겨 둔 걸 생각해서."),$("정정문을 읽은 다음",["지금은 문서 확인을 민혁이랑 같이 해. 혼자 바꾸는 일은 안 하고.","오늘 정정할 건 어디까지 했어?","예약을 잘못 안내받은 사람들한테 원래 시간과 내가 바꾼 시간을 설명했어.","답이 오지 않은 사람도 있겠네.","응. 그런데 답 달라고 또 보내지는 않을 거야.","정리 끝나면 잠깐 쉬어도 되겠어.","너랑 쉬는 걸 잘한 일의 대가로 생각하지 않으려고 해.","지금 함께 쉬기로 한 건 지금의 약속이야.","알겠어. 오늘은 십 분 있다가 선생님께 확인받으러 가야 해.","그러면 그 시간까지 이야기하자. 할 일은 늦추지 말고."],[["정정한 내용을 함께 읽고 애매한 표현을 고친다.","내가 바꿨다는 말을 빼면 안 되겠네. 이 문장부터 고칠게.",7,11],["짧게 쉬며 요즘 읽는 책 이야기를 묻는다.","그 얘기를 해도 되는구나. 요즘은 결말보다 중간을 천천히 읽고 있어.",10,8],["선생님과의 확인 시간을 지키도록 먼저 일어난다.","아쉽지만 시간 됐네. 응, 내가 먼저 다녀올게. 고마워.",6,12]],"오늘은 정정문 대신 선생님 확인을 받은 목록을 가져왔어. 답을 안 한 사람 칸도 그대로 두었고.")]};function vn(e,n,a){const o=Math.max(0,Math.min(4,n.chapter)),r=Da[e][o],u=`hangout-${e}-${o+1}`,c=n.flags.includes(`read:${u}-v1`),d=`${u}-v${c?2:1}`;if(e==="junyeon"&&n.verdict==="exclude")return{id:`${u}-closed`,title:"여기서 끝내기로 한 약속",location:a,lines:[{speaker:"narrator",text:"준연과 따로 만나던 약속은 끝났다. 교사의 지도 아래 이어지는 수습을 다시 찾아가 확인할 필요는 없었다."},{speaker:"player",text:"내가 지키기로 한 다음 약속으로 가자."}],choices:[{id:"leave",text:"다음 약속으로 향한다.",response:[{speaker:"narrator",text:"나는 가방을 고쳐 메고 발걸음을 돌렸다."}]}]};let j=r.lines.map((P,E)=>({speaker:E%2===0?e:"player",text:P}));if(c){const P=r.options.find((E,M)=>n.flags.includes(`memory:${u}:${M}`));j=[{speaker:"narrator",text:`다시 찾아오자 ${e==="junyeon"?"준연은":"상대는"} 내가 앉았던 쪽을 먼저 보았다. 이번 장에서 함께 보낸 시간이 말 사이에 남아 있었다.`},{speaker:e,text:r.again},{speaker:"player",text:"지난번에 하던 이야기, 조금 더 듣고 싶어서 왔어."},{speaker:e,text:P?`그때 내가 했던 말도 기억해? ${P[1]}`:"네가 또 찾아오는 것까지는 예상 못 했어. 그래도 반갑다."},{speaker:"narrator",text:`벌써 ${n.visits[e]??0}번의 동행이 쌓였다. 처음에는 모르던 작은 버릇이 이제 눈에 들어왔다.`},{speaker:"player",text:"오늘은 뭐가 달라졌는지부터 알려 줘. 지난번하고 같은 답을 할 필요는 없잖아."},{speaker:e,text:e==="junyeon"?"오늘은 네가 갈 시간도 먼저 물어보려고. 끝나는 시간을 모르면 자꾸 혼자 생각하게 돼서.":"지난번보다 네가 덜 낯설어. 같은 일을 해도 그건 조금 달라."},{speaker:"player",text:"나도 들어올 때 어디를 먼저 봐야 하는지 이제 알아."},{speaker:"narrator",text:"우리는 전에 했던 일을 조금 바꾸어 다시 해 보았다. 기억을 확인하는 짧은 농담 뒤에 새로운 이야기가 붙었다."},{speaker:e,text:e==="taewoo"?"오늘 몸 상태는 먼저 말했으니까, 거기에 맞춰 같이 골라 줘.":"오늘 남은 시간은 어떻게 보낼까?"}]}const b=e==="taewoo"&&o===1&&c,A=e==="taewoo"&&o===2&&c,p=e==="world"&&o===2&&c;let w=r.options;b&&(w=[["오늘은 쉬며 물을 마신다.","응. 오늘 다리 풀린다고 한 말 기억해 줬네. 쉬면서도 같이 있을 수 있겠다.",8,10],["연습은 내일로 두고 천천히 걸어 내려간다.","오늘은 그게 딱 좋아. 걷는 속도만 맞춰 줘.",7,10],["지난번처럼 마지막 연습을 한 번 더 하자고 한다.","오늘은 상태가 다르잖아. 쉬겠다는 말은 그대로 들어 줘.",0,-4]]),A&&(w=[["태우가 원하는 여덟 박자를 함께 맞춘다.","오늘은 진짜 더 해도 돼. 네가 먼저 물어봐 줘서 좋다.",10,8],["지난번 내려갔던 길을 다시 산책한다.","춤도 좋지만 그 길도 좋았어. 오늘은 좀 더 가 볼까?",9,8],["보고 싶어 했던 연습 영상을 함께 본다.","딱 이 부분이야. 지난번에는 피곤해서 못 보여 줬거든.",10,7]]),p&&(w=[["지금 찍고 싶은 하늘을 함께 사진에 남긴다.","오늘은 내가 찍고 싶었던 거 맞아. 이쪽으로 조금만 붙어 봐.",10,8],["사진 한 장 뒤에는 휴대전화를 넣고 걷는다.","좋아. 남길 만큼 남겼으니까 이제 직접 보자.",9,9],["사진 대신 그림으로 남겨도 좋겠다고 말한다.","그것도 재밌겠다. 내가 그리면 구름이 기타처럼 되겠지만.",8,8]]);const z=w.map(([P,E,M,S],D)=>({id:`option-${D+1}`,text:P,response:[{speaker:e,text:E},{speaker:"narrator",text:M>0?e==="junyeon"&&n.verdict==="pending"&&n.bonds.junyeon.affection>=70?"준연은 기뻐하는 표정을 감추지 못했다. 다만 다음 약속을 말하려다 다시 입을 다물었다.":"짧은 대답 뒤에도 대화가 이어졌다. 다음에 다시 떠올릴 작은 기억이 하나 생겼다.":"나는 멈추고 상대가 말한 오늘의 상태를 다시 들었다. 지금은 더 밀어붙이지 않기로 했다."}],effects:[{person:e,affection:M,trust:S}],flags:[`memory:${u}:${D}`]})),C=Fa[e][o],R={speaker:"narrator",text:a===C?`우리는 함께 ${Qt[C]}의 한쪽으로 자리를 옮겼다. 오늘은 둘이 이야기할 시간을 남겨 두었다.`:`우리는 함께 ${Qt[C]}로 자리를 옮겼다. 만나기로 한 자리에서부터 걸어오는 동안 짧은 안부를 나눴다.`};return{id:d,title:c?`${r.title} · 다시 만난 오후`:r.title,location:C,lines:[R,...j.map(P=>({...P,text:P.text.replaceAll("{name}",n.name)}))],choices:z,memory:r.title}}const Ma={n:"narrator",p:"player",w:"world",h:"hyunsol",t:"taewoo",o:"taehun",s:"seoyul",j:"juhan",m:"minhyuk",b:"junyeon",a:"alter",teacher:"teacher"},lt={world:"세계",hyunsol:"현솔",taewoo:"태우",taehun:"태훈",seoyul:"서율",juhan:"주한",minhyuk:"민혁",junyeon:"준연"},Ta={world:"band",hyunsol:"chemistry",taewoo:"dance",taehun:"observatory",seoyul:"art",juhan:"computer",minhyuk:"classroom",junyeon:"garden"};function ae(e,n){return e.trim().split(`
`).filter(Boolean).map(a=>{const o=a.indexOf("|");return{speaker:Ma[a.slice(0,o)]??"narrator",text:a.slice(o+1).replaceAll("{name}",n.name)}})}const Ia=[[{title:"전학생의 빈 담당 칸",location:"classroom",text:`n|사이언스 페어까지 64일. 전학 온 첫 주의 마지막 수업이 끝났다.
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
n|우리는 복도를 나란히 걸었다. 처음 어긋난 시간을 되돌리지는 못해도 남은 오후는 같이 쓸 수 있었다.
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
n|점심에는 지난번에 좋아한다고 말한 반찬이 내 쪽으로 조금 밀려왔다.
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
n|우리는 빈 교실의 의자를 뒤로 밀었다. 태우가 팔 동작부터 보여 줬다.
t|하나, 둘. 발은 천천히. 누가 빨리하는 대회 아니야.
p|그 말을 내 발에도 전해 줘.
n|세 번째 박자에서 나와 세계가 반대쪽으로 움직였다. 둘 다 멈추고 웃었다.
o|둘이 갈라지는 춤으로 바꾸면 완벽했을 텐데.
b|17시까지 이제 십 분 남았어. 이동할 때 알려 줄게.
n|우리는 원래 하려던 연습의 절반을 교실에서 끝냈다.
n|시간이 왜 바뀌었는지는 기록을 보고 확인하기로 했다. 태우 혼자 시간을 잘못 외운 일은 아니었다.`},{title:"다음 달력의 같은 칸",location:"walk",text:`n|D-32. 중간 점검을 마친 아이들이 하나둘 가방을 챙겼다.
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
n|매점 창가에는 잠깐 기대어 서 있을 만한 자리가 있었다.
n|나는 지난번 함께 마신 음료의 이름을 찾았다. 같은 병을 알아보는 일이 반가웠다.
p|이번에는 내가 먼저 골랐어. 지난번에 네가 덜 단 걸 좋아한다고 했지.
n|함께 있던 아이가 병 라벨을 보고 웃었다. 사소한 말을 기억했다는 사실이 우리 사이에 놓였다.
o|날씨 좋다. 오늘은 돌아갈 때 하늘 좀 보고 가.
s|나도 오늘 색 예뻐서 그리려고. 해 지기 전까지는.
b|공동 리허설 안내는 게시판에 올라갈 거야. 장소 확인해 줘.
p|몇 시였지?
m|16시 40분. 장소는 최종 안내랑 맞춰 보자.
n|나는 음료 뚜껑을 돌렸다. 아직 차가운 병에 손자국이 남았다.
n|점심의 짧은 만남은 헤어지기 아쉬울 만큼 빠르게 끝났다.
p|끝나고는 그냥 돌아가지 말자. 아까 얘기 마저 듣고 싶어.
n|상대가 고개를 끄덕였다. 쪽지의 빈칸에 오늘 만날 시간을 다시 적었다.
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
n|나는 문을 닫고 복도를 뛰지 않을 정도로 빠르게 걸었다.
n|교실에서 다시 모인 아이들이 각자 받은 안내 화면을 나란히 놓았다.
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
n|벤치에서 기다리던 아이가 가방을 열었다. 안에는 음료가 두 개 있었다.
n|다 닫히기 전에 네 것도 샀어. 그 말을 듣자 서둘러 온 발걸음이 겨우 멈췄다.
p|괜히 산 게 되지 않게 와서 다행이다.
n|우리는 나란히 앉아 병을 열었다. 운동장에서는 마지막 동아리 연습 소리가 났다.
w|늦어서 못 만날 때 제일 싫은 건 준비한 말을 못 하는 거더라.
s|맞아. 기다리다 그린 의자도 사람이 앉아야 끝나는 그림이었는데.
h|그 말 들으니까 나도 차 두 잔 준비한 게 덜 유난 같네.
t|다들 비슷하네. 나는 마지막 손맞춤 혼자 하니까 좀 웃겼어.
j|협동 게임은 혼자 켜면 아예 시작이 안 되고.
m|그럼 오늘은 다들 자기 약속대로 만나면 되겠다.
n|친구들은 저마다 인사하고 다른 길로 걸어갔다. 벤치 옆의 소리가 조금 조용해졌다.
p|오늘 하려던 얘기 아직 기억해?
n|상대가 고개를 끄덕였다. 나는 급하게 다음 말을 꺼내지 않고 기다렸다.
n|아까 샀다는 간식을 가운데 놓았다. 둘 다 같은 조각에 손을 뻗었다가 웃었다.
p|그건 네가 먹어. 나는 이쪽이 더 좋으니까.
n|그 말이 정말 내 취향인지 장난인지 상대가 물었다. 나는 이번에는 진짜라고 답했다.
n|별것 아닌 설명을 길게 하는 시간이 좋았다.
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
n|배포본과 승인본은 함께 보관했다. 오늘을 엉킨 순서로 끝내지는 않았다.`},{title:"전야의 세 번째 약속",location:"walk",text:`n|D-1. 학교 계단에 앉자 그제야 하루가 길었다는 생각이 들었다.
n|내 옆에 앉은 아이가 가방에서 간식 봉투를 꺼냈다.
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
n|상대가 두 번이라는 말을 작게 되풀이했다. 그렇게 세니 좋다는 얼굴이었다.
p|세 번째는 네가 골라. 다음 주라도 괜찮고.
n|나는 바로 답을 재촉하지 않았다. 상대가 생각하는 동안 같은 간식을 나눠 먹었다.
o|내일 흐리면 도서관으로 가면 돼. 하늘 때문에 모든 걸 취소할 필요 없으니까.
p|그 말 오늘은 다른 데도 쓸 수 있을 것 같네.
n|태훈이 손을 흔들고 돌아섰다. 교문 쪽 가로등이 하나씩 켜졌다.
b|내일 끝나고 할 말이 있어. 오늘은 아직 잘 안 나와서.
p|알겠어. 내일 필요한 얘기는 같이 하자.
n|준연이 먼저 걸어간 뒤 나는 원본 서류가 든 봉투를 가방 안쪽에 넣었다.
n|지금 옆에 남은 사람과는 내일의 시간을 다시 확인했다. 기다리는 것만으로도 마음이 조금 따뜻해졌다.`}],[{title:"재판 전에 남겨 둔 자리",location:"auditorium",text:`n|페어 당일 아침. 전시 문은 아직 닫혀 있었고 무대 조명도 준비 밝기에 머물렀다.
teacher|승인본으로 다시 확인하는 동안 공연을 잠시 보류하자. 준비실에서 기록을 함께 보겠다.
m|우리도 동의해요. 무엇이 달랐는지 같은 자리에서 확인하고 싶어요.
j|각자 보관한 원본과 허가받은 공용 기록만 준비했어요.
n|나는 준비실로 가기 전에 어제 약속한 자리부터 찾았다.
t|여기. 네 자리 아직 안 치웠어.
p|공연 미뤄진다며.
t|의자는 안 미뤄지잖아. 앉아 봐.
n|태우가 의자를 무대 중앙 쪽으로 돌렸다. 다른 아이들은 자기 준비물을 한 번씩 확인했다.
w|공개 공연이 미뤄져도 내가 남겨 둔 한 소절은 안 없어져.
h|긴장했으면 음료부터. 뚜껑은 열어 뒀어.
o|오후 약속 시간도 아직 그대로야. 우리 그건 나중에 확인하자.
s|그림 앞 자리도 남겨 뒀어. 끝나고 와.
j|이제 화면은 닫을게. 같이 가자. 내가 직접 설명할 부분도 있으니까.
m|오늘 끝나면 완장 벗는다. 그 약속도 그대로고.
n|준연은 의자를 당겼다가 스스로 한 칸 떨어뜨렸다. 손에 든 봉투가 조금 구겨져 있었다.
b|내가 받은 것도 가져왔어.
p|그럼 같이 놓고 보자. 지금 여기서 먼저 결론 내리지는 말고.
n|준연이 고개를 끄덕였다. 나는 원본이 든 봉투를 테이블 위에 올렸다.
teacher|오늘 확인은 공동 준비 중 있었던 일에 한정한다. 서로 말할 시간을 주고, 확인한 것과 추측한 것을 나누자.
m|기록을 시간순으로 놓자. 첫 약속 쪽지부터.
w|그때 네가 안 온 줄 알았는데. 우리가 가진 시간이 달랐던 거였지.
t|두 번째는 예약. 나는 내 안내대로 갔고, 예약은 따로 바뀌었어.
j|세 번째 공지와 마지막 큐시트까지 여기 있어.
p|누가 무엇을 했는지 확인하자. 그리고 끝나면 각자 기다린 무대로 돌아가자.
n|우리는 자료를 펼쳤다. 다섯 장의 기억이 처음으로 하나의 학급재판 위에 나란히 놓였다.`},{title:"다시 올라간 커튼",location:"auditorium",text:`n|준비실 문을 나서자 강당 조명은 조금 더 밝아져 있었다.
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
n|내 옆의 아이가 고개를 끄덕였다. 업무표 아래 적어 둔 개인 시간이 이제 시작되고 있었다.
n|무대를 지켜 낸 기쁨과 어려운 대화의 무게가 함께 남았다. 어느 한쪽이 다른 쪽을 없애 주지는 않았다.
n|나는 가방을 들어 약속한 방향으로 걸었다. 오늘의 이야기는 아직 끝나지 않았다.`},{title:"축제가 끝나도 만날 이유",location:"garden",text:`n|축제의 마지막 손님이 나간 뒤, 학교에는 포스터 떼는 소리와 의자 끄는 소리만 남았다.
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
p|오늘 어땠어? 공연 말고, 너는.
n|상대는 바로 답하지 않았다. 긴 하루를 어디부터 말할지 생각하는 얼굴이었다.
n|나는 걸음을 늦췄다. 제일 좋았던 순간부터 말해도 되고, 아직 말하기 어려운 부분은 남겨도 됐다.
n|우리는 처음 만났을 때보다 서로의 침묵을 조금 편하게 기다렸다.
w|다음에는 준비물 없이 만나도 되겠다. 기타는 내가 들고 올 수도 있지만.
t|그건 준비물인데. 나는 운동화만 신고 올게.
h|그것도 준비물이네. 다들 그냥 자기 모습으로 온다고 하자.
n|마지막 농담 뒤로 친구들의 발소리가 멀어졌다.
p|다음 달에도 이렇게 기억나는 일이 하나씩 늘면 좋겠다.
n|작은 약속에는 큰 박수가 없었다. 그래도 나는 다음 시간을 놓치고 싶지 않았다.
n|가방 속 기록은 그대로 남겨 두었다. 즐거웠던 장면도, 어긋났던 순간도 내 마음대로 지우지 않았다.
n|앞으로의 몇 주는 오늘 내린 선택을 실제 하루로 이어 가는 시간이었다.
n|나는 교문을 나서며 내일의 약속을 한 번 더 말했다. 이제 그 답을 상대에게서 직접 듣고 싶었다.`}]],La={world:[["내가 치는 코드가 궁금하면 언제든 와. 물어보러 온 척 안 해도 되고.","네가 웃는 부분은 잘 알겠어. 다음 노래에도 그런 데 하나 넣어 볼까.","한 곡 더 듣겠다는 말, 내일도 유효한 거지?"],["오늘 마이크 높이 같이 맞춰 줘. 그 높이에서 네 얼굴도 보고 싶어.","나 노래하는 거 봤어? 끝난 뒤 표정 물어볼 사람으로 널 정해 뒀거든.","내일은 일 없어도 밴드실 와. 그냥 온다고 해도 반가울 것 같아."],["쪽지에 그린 거 기타 맞아. 네가 웃을 줄 알고 좀 엉망으로 그렸어.","너도 다른 데서 기다렸구나. 그럼 오늘은 내가 네 몫까지 한 곡 더 들려줄게.","손 하나 남겨 놔. 소매 잡으려다가 네가 괜찮으면 손이 더 좋을 것 같아서."],["제일 듣고 싶었던 사람이 와 줘서 좋아요. 어때, 이 말 내일도 해도 돼?","준비한 노래는 그대로야. 네가 기다린 시간까지 망치고 싶지 않아.","공연 뒤 밴드실. 공개 앙코르 끝나도 너한테는 한 곡 더야."],["무대가 늦어져도 너한테 들려줄 소절은 안 없어져.","객석에서 네 표정 보였어. 첫날처럼 안 도망갔네.","노래 끝나도 안 가면 안 돼? 오늘은 내가 다음 얘기부터 하고 싶어."]],hyunsol:[["네가 붙인 색 이름 아직 메모에 있어. 나중에 웃으려고.","실험 끝나면 밖에서 음료 마시자. 네가 고르는 맛도 좀 보게.","다음엔 나도 네 쪽으로 갈게. 항상 찾아오는 쪽만 하면 힘들잖아."],["네가 좋아하는 반찬은 알겠어. 오늘은 나도 같은 거 받아 왔고.","기다리면서 혼자 탓하지 않아도 되네. 그걸 확인한 건 좋았어.","계산기 없어도 와. 질문 대신 농담 들고 와도 상관없고."],["오늘 차는 덜 달게. 네가 지난번에 말한 거 기억했어.","나는 정리하면서 기다렸어. 다시 만나면 할 말은 남겨 뒀고.","농도는 자신 없고 네 취향은 외웠어. 틀렸으면 지금 말해 줘."],["설명문 아래는 메뉴야. 그 밑은 너랑 만날 시간. 외웠으면 접어.","물 고마워. 지금은 맞는 순서로 다시 해 보면 되겠지.","내일 다섯 시. 이건 오차 범위 없어. 배고프니까 늦지 마."],["음료 뚜껑 열어 뒀어. 긴장해서 안 돌아갈까 봐.","실험보다 오래 준비한 약속이 남았네. 정리 끝나면 나랑 가.","계산기 돌려받으면 핑계가 없어질 줄 알았는데. 그냥 만나자고 하면 되네."]],taewoo:[["너랑 같이 틀리니까 덜 창피해. 다음엔 내가 먼저 실수해 줄까?","방금 여덟 박자 맞았어. 하이파이브는 내가 먼저 할게.","다음 연습도 와. 네가 못 춰도 같이 웃는 건 잘하잖아."],["내가 시범 보이면 발 말고 어깨 봐. 네가 보면 조금 긴장되긴 하지만.","같이 확인하러 가 줘서 고마워. 내가 시간 잘못 본 줄 알았거든.","시간 비워 두려고? 그러면 나도 그날은 네 옆에 서서 알려 줄게."],["오늘 준비 끝나고 잠깐 걸을래? 춤 없는 약속도 한 번 해 보자.","기다리면서 동작 하나 만들었어. 네가 와야 마지막 손맞춤이 되는 거.","여기 손. 이번에는 박자 때문 말고 그냥 같이 가려고."],["객석에서 이 손동작 해 줘. 네가 어디 있는지 바로 찾게.","물 마시고 다시 할게. 네가 보고 있다는 건 바뀐 순서에도 안 없어졌네.","끝나면 그 자리에서 기다려. 내가 내려와서 표시 같이 떼자."],["의자는 안 미뤄지잖아. 앉아 봐. 끝나면 여기부터 볼 거야.","신호 두 번 했지? 둘 다 봤어. 웃다가 포즈 틀릴 뻔했잖아.","표시 네 손등에 붙여 줄게. 다음에도 여기. 무대가 없어도."]],taehun:[["네가 고른 문장에 책갈피 꽂았어. 다음에 다시 읽어 보려고.","하늘 보는 속도는 안 맞춰도 되네. 같은 자리에 있으면 되니까.","다음엔 네가 좋아하는 책 가져와. 내가 골라 주는 것만 읽지 말고."],["흐리면 도서관으로 가자. 관측만 취소되는 거니까.","기다리며 본 구름이 바뀌었어. 지금 너랑 볼 모양은 또 있네.","좋은 문장 찾으면 보여 줘. 다음 만남에 들고 올 이야기로 남겨 두자."],["오늘 바로 집에 가냐고 물은 건 산책하고 싶어서였어. 너랑.","서로 다른 데서 하늘 봤네. 그래도 이제는 같은 쪽을 보자.","오늘은 네가 본 쪽이 더 마음에 들어. 구름이 벤치처럼 보인다는 말."],["맑으면 운동장, 흐리면 도서관. 너 만나는 건 그대로.","공연 순서는 고치면 되겠지. 내일 함께 걷자는 약속도 그대로 두고.","비가 오면 우산 쓰면 돼. 질문이 더 생겨도 결국 만나게 해 둘 거야."],["오후 산책 시간은 그대로야. 오늘은 날씨 말고 네 상태부터 물을게.","사진 전시 끝났어. 이제 내가 보고 싶은 풍경 쪽으로 같이 가자.","오늘 쓸 건 별 말고 네 얘기인데. 다음 문장은 네가 읽을 자리 남겨 둘게."]],seoyul:[["네가 고른 색 여기 남겼어. 다른 사람은 못 찾아도 우리는 알지.","물감은 말랐는데 더 있어도 돼. 종이 때문만은 아니고.","다음에 오면 네가 앉는 쪽도 그려 둘게. 빈 의자만 놓지 말고."],["반주 한 음만 맡아 줘. 틀려도 내가 같이 멈추면 되니까.","우리 같이 틀린 순간 그려 뒀어. 완벽하게 한 데보다 더 기억나서.","일 없어도 와. 오늘 그린 걸 처음 보여 줄 사람은 필요하니까."],["쪽지 그림은 네 가방이야. 바로 알아볼 줄 알았는데.","빈 의자에 네 옆모습 채우는 중이야. 잠깐만 그쪽 보고 있어.","이제 그림이 덜 휑하다. 이 작은 낙서는 네가 가져. 큰 건 내가 갖고."],["네 소매를 그리면 객석에서 찾기 쉬울 것 같아서. 얼굴은 오래 보게 되고.","맞는 순서로 다시 하면 돼. 아까 네가 물 가져다준 건 고마웠어.","시작 전에 한 번, 끝나고 한 번. 세 번째 만남은 내가 만들어 볼게."],["그림 앞 두 자리 중 하나는 네 거야. 끝나고 다시 와.","리본 보였어. 사람 많아도 네 가방은 금방 찾겠더라.","비어 있는 데는 못 그린 게 아니야. 같이 그릴 자리를 남긴 거야."]],juhan:[["네 농담은 연습 화면에 남겼어. 볼 때마다 프로그램보다 내가 먼저 웃어서.","내가 만든 걸 같이 눌러 줄 사람이 생긴 게 좀 좋네.","다음에는 테스트 말고 게임하자. 잘해도 못해도 같이 시작하는 거."],["한 번 끝까지 눌러 줘. 네가 멈추는 곳을 보면 내가 못 본 게 보여.","오늘은 화면 정리 끝나면 직접 얘기하자. 프로그램은 잠깐 끄고.","내일도 올래? 오류가 없어도 같이 할 건 있으니까."],["두 번째 조작기 가져왔어. 공동 준비 끝나면 진짜로 한 판 하자.","표시 이름과 실제 작성자는 달라. 그건 같이 확인하고, 우리 약속은 그다음에 이어 가자.","방금 너도 같은 생각 했지? 똑같은 데서 떨어지니까 이상하게 더 웃긴다."],["시연 끝나면 창 닫을게. 그다음 약속은 내가 직접 물어보려고.","일단 승인된 화면으로 맞췄어. 오늘 네가 기다려 준 시간도 잊지 않았고.","말 빨랐지? 중요한 건 다섯 시에 나랑 같이 가자는 거였어."],["얼터에고 창은 닫았어. 같이 가자. 내가 설명할 건 내가 말할게.","관객이 우리 농담에서 웃었어. 그 순간 너도 봤으면 했는데 봤지?","화면은 잠깐 가릴게. 내가 물어볼게. 내일도 나랑 같이 할래?"]],minhyuk:[["상자는 반으로 나누자. 같이 하자고 해 놓고 내가 다 들 뻔했네.","지금은 반장 말고 같이 쉬는 사람으로 불러 줘. 음료 남아 있고.","다음에도 네가 쉬자고 먼저 말해 줘. 나도 그 말 듣는 연습하려고."],["체크리스트 끝나면 매점. 오늘은 같이 먹을 사람으로 남고 싶어.","일정 확인은 같이 하는 게 낫네. 혼자 정리하려다 놓친 게 있었어.","약속 칸에는 준비물 말고 네 이름을 적어도 되겠네."],["같이 먹으려고 기다렸어. 업무표는 가방에 넣었으니까 천천히 먹어.","먼저 같은 안내를 갖고 있는지 확인하자. 네가 또 혼자 기다리지 않게.","좋아하는 반찬이라서 주는 거야. 별로인 걸 나누자는 게 아니고."],["공동 업무는 여기까지. 그 아래는 반장이 아니라 내가 적는 거다.","혼자 다 다시 하려고 했는데 네가 옆에 있으니 나눠 할 수 있겠다.","내일 끝나면 완장 벗고 갈게. 우리 약속 자리부터 찾을 거고."],["일정 끝나고는 완장 벗겠다는 말, 그대로야. 조금만 기다려 줘.","이제 공동 업무표의 마지막 칸을 지웠어. 아래 적은 네 이름은 남아 있고.","이번엔 계획 없어도 괜찮을 것 같다. 첫 행선지는 네가 골라 줘."]],junyeon:[["네가 여기까지 찾아올 줄 몰랐어. 묶음 하나만 같이 들어 줄래?","복숭아 맛 좋아해. 다음에 음료 고를 때 그거면 돼.","같이 있을 때는 좋은데 다음 약속 말하려면 자꾸 망설여져."],["달력에 이름이 둘씩 적혀 있네. 나랑 정리할 시간도 남길 수 있어?","나중에 끝나면 잠깐 같이 걸을래? 오늘은 묻기 전에 포기하지 않으려고.","목요일. 적어 뒀어. 네 다른 약속이 없어져야 내가 생기는 건 아니겠지."],["음료 두 개 샀어. 너 오기로 했는데도 괜히 한 번 더 확인하고 싶어서.","네가 다른 데서 기다린 동안 나는 여기 있었어. 지금은 같이 앉을 수 있네.","함께 있는 건 좋아. 다음에도 나부터 찾을 건지 자꾸 묻고 싶어지는 게 문제지만."],["내일 끝나면 다들 자기 약속대로 가겠지. 나도 뭔가 정해야 하는데.","지금은 서류만 놓고 올게. 간식은 조금만 남겨 줘.","행사 끝나고 할 말 있어. 오늘은 아직 꺼낼 자신이 없어서."],["나란히 앉으려다 내가 의자를 뗐네. 지금은 어느 자리가 맞는지 모르겠어.","내가 고쳐야 하는 안내부터 확인할게. 네가 곁에 있는지와 상관없이 해야 하는 일이니까.","지금 쉬는 시간도 우리가 새로 정한 거지. 그게 없던 잘못을 만드는 건 아니고."]]};function qa(e,n,a){const o=e.focus;return!o||n===0?[]:o==="junyeon"&&e.verdict==="exclude"?[{speaker:"narrator",text:"준연과 따로 만나던 약속은 끝났다. 아직 생각나는 시간이 있어도 다시 찾아가야 한다는 뜻은 아니었다."},{speaker:"player",text:"오늘 남은 시간은 내가 다시 고르자."},{speaker:"narrator",text:"친구들이 기다리는 쪽으로 발걸음을 옮겼다. 다른 누군가를 빈자리에 서둘러 세우지는 않았다."}]:[{speaker:"narrator",text:`나는 ${lt[o]} 쪽을 먼저 보았다. 수많은 목소리 사이에서도 이제는 그 목소리를 바로 알아들을 수 있었다.`},{speaker:o,text:La[o][n][a]},{speaker:"player",text:a===0?"기억할게. 오늘 네가 먼저 해 준 말이니까.":a===1?"응. 준비한 일도 마치고 우리 시간도 남겨 두자.":"그럼 그 약속은 내가 직접 확인할게. 다음에 또 만나자."}]}function Ka(e,n,a){const o=e===0?"world":a.focus,r=o&&!(o==="junyeon"&&a.verdict==="exclude")?o:null,u=r??"minhyuk",c=[[["지금 맡아 볼 수 있는 일을 하나 물어본다.","이름을 먼저 한 번씩 불러 본다.","창가에 모여 오늘 할 일을 같이 본다."],["빵을 나누며 가장 재미있었던 일을 묻는다.","다음 쉬는 시간에 함께할 일을 정한다.","친구의 농담을 받아 더 엉뚱한 이름을 붙인다."],["기다린 만큼 오늘은 끝까지 들어 주겠다고 한다.","첫 곡 후보 네 개의 제목부터 묻는다.","간식 봉투를 들고 함께 걸어가자고 한다."]],[["지난번 들었던 취향을 먼저 꺼낸다.","오늘 남아 있는 일을 나누어 맡는다.","점심 뒤 잠깐 같이 걷자고 한다."],["확인한 시간을 서로 읽어 본다.","기다리는 동안 할 작은 연습을 제안한다.","친구들 물병부터 채우고 돌아온다."],["일이 없어도 만나고 싶다고 말한다.","다음 방과 후의 같은 시간을 남겨 둔다.","오늘 나눈 농담을 한 번 더 꺼낸다."]],[["지난번 좋아했던 음료를 건넨다.","끝나고 듣고 싶은 이야기를 먼저 말한다.","쪽지의 작은 그림에 내 낙서를 보탠다."],["각자 받은 장소를 하나씩 읽어 본다.","남은 연습을 마치고 약속을 이어 가자고 한다.","혼자 기다린 친구의 이야기를 먼저 듣는다."],["남은 음료를 들고 천천히 산책한다.","벤치에서 아까 하려던 말을 마저 듣는다.","다음에 같이 앉을 자리를 고른다."]],[["내일 서로 알아볼 작은 표시를 고른다.","무대나 전시에서 가장 기대하는 부분을 묻는다.","행사 뒤 함께 먹을 메뉴를 고른다."],["승인본을 함께 읽으며 순서를 맞춘다.","잠깐 쉬었다 다시 시작하자고 물을 건넨다.","준비해 둔 장면을 한 번 더 보고 싶다고 한다."],["내일 만날 시간과 장소를 함께 말한다.","서로 작은 기념품을 하나 남긴다.","축제 뒤의 세 번째 만남을 함께 고른다."]],[["준비실에 가기 전 남은 약속을 확인한다.","긴장을 풀 수 있도록 짧은 농담을 한다.","오늘이 끝나면 듣고 싶은 이야기를 말한다."],["무대에서 가장 좋았던 순간을 말한다.","정리를 함께 끝내고 약속한 곳으로 간다.","고생했다는 말을 얼굴을 보며 전한다."],["축제가 없어도 다음에 만나자고 한다.","오늘 처음부터 끝까지의 이야기를 듣는다.","서로 기억하고 싶은 장면을 하나씩 고른다."]]],d={world:["그 말 들으니까 한 곡 더 할 힘 생기는데. 오늘은 목 상태 보고 정할게.","약속으로 적어 둘게. 공연 준비 말고 네가 오는 시간으로.","그렇게 웃으면 내가 다음 말을 잊어버리잖아. 조금만 기다려 봐."],hyunsol:["네가 그걸 기억한 건 좋네. 나도 다음에는 먼저 말할게.","함께 확인했으니까 둘 다 기억하면 되겠다. 혼자 외우는 시험 아니고.","그런 걸 묻는 사람은 너밖에 없을 것 같아. 그래도 답은 생각해 볼게."],taewoo:["좋아. 지금 그 말 듣고 싶었어. 이번엔 나도 네 쪽으로 맞춰 볼게.","다음에도 하자. 오늘처럼 먼저 물어봐 주면 나도 편하게 말할 수 있어.","그거 좀 웃긴데 마음에 든다. 나 지금 얼굴에 다 보이지?"],taehun:["같은 걸 보고 다른 말을 하는 게 재밌네. 네 말도 기억해 둘게.","그 시간은 남겨 둘게. 날씨가 바뀌어도 우리가 정한 건 같이 바꾸자.","좋아. 오늘 노트에 적을 이야기가 하나 더 생겼다."],seoyul:["그 말 듣고 나니까 여백에 뭘 그릴지 생각났어. 나중에 보여 줄게.","응. 이번에는 빈 의자로 그리지 않을게. 네가 오는 시간은 알아 두고.","지금 네 표정 그려도 돼? 완벽하지는 않아도 기억할 수 있게."],juhan:["내가 놓친 쪽을 네가 보고 있었네. 같이 이야기하길 잘했다.","알겠어. 자동 알림 말고 내가 직접 기억하고 먼저 말할게.","그건 어디 입력 안 해도 기억날 것 같은데. 지금 웃어서 더 그렇고."],minhyuk:["같이 한다는 말은 아직 익숙해지는 중이야. 그래도 좋아.","응. 공동 업무표가 아니라 내 일정에도 적어 둘게.","계획에는 없던 얘긴데 괜찮네. 조금 더 듣고 싶어."],junyeon:["그렇게 말해 주는 건 좋아. 지금은 좋아한다고 먼저 말해 볼게.","적어 둘게. 네가 말한 시간 그대로. 자꾸 다시 물어도 한 번만 더 알려 줘.","응. 다른 생각 하다가 놓칠 뻔했어. 지금 네 얘기부터 들을게."]};return c[e][n].map((j,b)=>{const A=r?[{person:r,affection:b===0?3:b===1?1:2,trust:b===1?4:2}]:[];return{id:`main-option-${b+1}`,text:j,response:[{speaker:u,text:r?d[r][b]:["좋아. 각자 말한 시간은 서로 확인하자.","같이 있으니까 오늘도 할 이야기가 늘었네.","우리가 기억할 장면은 우리가 고르면 되겠지."][b]},{speaker:"narrator",text:"대답을 들은 뒤에도 잠깐 곁에 머물렀다. 다음 만남으로 이어질 말이 하나 남았다."}],effects:A,flags:[`main-memory:${e+1}:${n+1}:${b}`]}})}function wn(e,n,a){const o=Math.max(0,Math.min(4,e)),r=Math.max(0,Math.min(2,n)),u=o===0?r===1?2:r===2?1:0:r,c=Ia[o][u];let d=ae(c.text,a);const j=qa(a,o,r);return d.splice(Math.min(18,d.length),0,...j),o===4&&r===1&&d.splice(2,0,...ae(a.verdict==="exclude"?`n|준연은 공동 준비에서 빠졌다. 교사에게 수정할 문서와 배포 대상을 넘기고 개인 연락도 끝내기로 했다.
teacher|학교생활과 별도의 수습은 내가 지도하겠다. 너희가 계속 연락을 받아 줄 의무는 없다.
n|준연은 멈춰 달라고 붙잡지 않았다. 남은 친구들은 승인된 순서로 무대를 다시 열었다.`:`n|준연은 민혁 옆에서 원본과 새 안내를 대조했다. 공지를 혼자 바꾸는 역할로 돌아가지는 않았다.
b|예약 바꾼 건 나야. 네가 시간을 잘못 외운 게 아니었어. 내 잘못처럼 보이지 않게 두었던 것도 미안해.
t|정정은 받을게. 그렇다고 오늘 끝나고 같이 놀 수 있다는 말은 아직 못 하겠어.
b|응. 네가 정해. 나는 다음 표를 확인할게.`,a)),o===4&&r===2&&a.focus==="junyeon"&&(d=d.map(b=>b.speaker==="narrator"&&b.text.includes("내 옆의 아이")?{...b,text:"친구들은 각자 하루를 마무리했다. 나는 다음에 내가 지킬 시간을 생각했다."}:b)),{id:`main-${o+1}-${r+1}`,title:c.title,location:c.location,lines:d,choices:Ka(o,u,a),memory:`${o+1}장 · ${c.title}`}}const Ba=[{title:"첫째 주 · 답장이 없어도",location:"classroom",text:`n|페어가 끝난 첫째 주. 준연은 선생님과 확인한 정정문을 가져왔다.
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
n|우리는 다음 이야기를 꺼낼 준비를 했다. 친구로 남는 길도, 조건과 마음이 맞아 새 관계를 고르는 길도 강요할 수는 없었다.`}];function Wa(e,n){const a=Math.max(0,Math.min(3,e)),o=Ba[a],r=[[["정정문에서 준연의 행동을 명확히 적은 부분을 함께 읽는다.","이 문장은 남길게. 답장을 받으려고 바꾸지는 않을 거야.",5,10],["오늘 정리를 마친 뒤 잠깐 책 이야기를 듣는다.","같이 쉬는 시간이 생겨서 좋지만, 내 할 일은 먼저 마칠게.",8,7],["확인 시각을 지키고 나머지는 교사에게 맡긴다.","응. 네가 끝까지 봐 주지 않아도 내가 확인받을게.",6,9]],[["금요일 약속을 정하고 목요일의 기존 약속도 그대로 둔다.","금요일에 보자. 다른 칸이 있다고 내 칸까지 없어지는 건 아니니까.",7,10],["준연이 목요일에 하고 싶은 자기 일을 묻는다.","책 전시 소개를 쓰려고. 누가 오든 내가 해 보고 싶었던 일이야.",8,8],["둘이 적은 표를 각자 읽어 다시 확인한다.","같은 시간이네. 오늘은 확인하고 나서 다른 뜻을 덧붙이지 않을게.",5,10]],[["점심을 함께 먹고 정한 시간에 일어난다.","응, 다녀와. 나는 남은 반찬 천천히 먹을게. 오늘은 여기까지라서 괜찮아.",7,10],["짧은 만남 동안 준연이 읽는 책 이야기를 듣는다.","이 장면 설명하고 싶었어. 다음에 네가 읽은 부분도 들려줘.",8,8],["다음 점심은 가능한 날을 보고 다시 정하자고 한다.","지금 확정 안 돼도 되는 거지. 그럼 네가 확인한 뒤 다시 이야기하자.",5,10]],[["지금까지 지킨 약속을 말하고 다음 일정도 직접 확인한다.","한 번 잘했다고 끝내지 않을게. 다음에도 실제로 지키는 걸로.",6,10],["두 사람이 좋아하는 책을 잠깐 바꿔 읽는다.","같은 문장을 다르게 읽네. 그 차이도 오늘은 듣고 싶어.",8,8],["오늘 만남을 정한 시간에 마치고 다음 마음은 차분히 말하자고 한다.","응. 대답을 서두르게 만들지는 않을게. 나도 내가 원하는 걸 솔직하게 말하고.",7,9]]];return{id:`repair-${a+1}`,title:o.title,location:o.location,lines:ae(o.text,n),choices:r[a].map(([u,c,d,j],b)=>({id:`repair-option-${b+1}`,text:u,response:[{speaker:"junyeon",text:c},{speaker:"narrator",text:"이번 주에 지킨 약속은 이번 주의 행동으로 남았다. 이미 지나간 시간의 호감이 뒤늦게 더해진 것은 아니었다."}],effects:[{person:"junyeon",affection:d,trust:j}],flags:[`repair-memory:${a+1}:${b}`]})),memory:o.title}}function Ua(e){return new Set(e.flags.flatMap(n=>{const a=/^junyeon-focus:hangout-junyeon-([1-4])-v[12]$/.exec(n);return a?[a[1]]:[]})).size}const Ha={world:`n|네 주 뒤, 카메라를 꺼 둔 밴드실에서 세계가 기타를 내려놓았다.
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
n|민혁은 종이를 접고 내 눈을 보았다. 이번에는 다음 지시 대신 내 대답을 기다렸다.`};function Va(e){const n=e.flags.some(b=>b.startsWith("romance:")&&b!=="romance:junyeon"),a=e.verdict==="forgive"&&Ua(e)>=2&&e.repairDone&&e.bonds.junyeon.affection>=85&&e.bonds.junyeon.trust>=70&&!n&&(e.focus===null||e.focus==="junyeon"),o=e.focus??(a?"junyeon":null),r=`finale-${o??"friends"}-${e.verdict}`,u=[{speaker:"narrator",text:e.verdict==="exclude"?"준연은 교사 지도 아래 별도의 수습을 이어 갔다. 나는 끝낸 연락을 다시 열지 않고 내가 지킬 다음 약속을 골랐다.":"준연의 수습은 누군가의 호감과 별개로 이어졌다. 친구들은 각자의 속도로 답했고, 나는 내 관계를 내 말로 정하기로 했다."}];if(!o)return{id:r,title:"다음에도 같은 반에서",location:"classroom",lines:[...u,...ae(`n|네 주 뒤. 교실 게시판에는 축제 사진 대신 새 시간표가 붙었다.
w|오늘 밴드실 오려면 그냥 와. 꼭 준비할 일이 있어야 하는 건 아니니까.
t|운동장도 열려 있어. 춤 안 춰도 되고.
h|점심은 같이 먹을 거지? 그건 업무 일정 아니야.
j|우리가 만든 게임 엔딩은 아직 남겨 뒀어.
s|다음 포스터는 급하게 안 그려도 되겠다.
o|흐린 날에도 만날 이유는 많네.
m|다들 오늘은 각자 먼저 한 약속부터 확인하자.
p|응. 나도 내가 고를 시간을 남겨 둘게.
n|아직 연인이라고 부르는 사람은 없었다. 하지만 어느 자리에도 갈 수 없던 첫날과는 달랐다.`,e)],choices:[{id:"friends",text:"친구들과 다음 만남을 이어 간다.",response:ae(`p|다음에도 같이 웃을 일 만들자.
n|나는 빈 시간표 한 칸에 내가 하고 싶은 일을 먼저 적었다.`,e),flags:["friendship:all"]},{id:"own-time",text:"내 시간을 먼저 정하고 친구들에게 이야기한다.",response:ae(`p|오늘은 도서관 갔다가 같이 내려가자.
n|혼자 할 일과 함께할 약속을 같은 하루에 남겼다.`,e),flags:["friendship:all"]}]};if(o==="junyeon"){if(e.verdict==="exclude")return{id:r,title:"비워 둔 자리를 접으며",location:"walk",lines:[...ae(`n|준연과 따로 잡던 약속을 끝낸 뒤 네 주가 지났다.
n|마지막으로 받은 종이에는 처음 어긋났던 시간이 바로잡혀 있었다.
b|늦었지만 이건 돌려놔야 하니까. 네가 답하지 않아도 해야 하는 일이었어.
p|받을게. 답장은 약속 못 해.
b|응. 또 기다려 달라는 말은 안 할게.
n|그 대화 뒤로 우리는 개인 연락을 다시 열지 않았다.
teacher|준연은 내 지도 아래 별도의 수습을 하고 있다. 너희가 계속 지켜봐야 할 일은 아니다.
n|누군가가 갑자기 내 연인이 되어 빈자리를 채워 주지도 않았다.
p|내가 좋아했던 시간도, 끝내기로 한 이유도 둘 다 남겨 두자.
n|다음 만남은 서두르지 않고 내가 고를 수 있었다.`,e)],choices:[{id:"close-with-memory",text:"기억은 남겨 두고 관계를 마무리한다.",response:ae("n|나는 정정된 종이를 기록 사이에 넣었다. 그 뒤의 시간표는 새로 펼쳤다.",e),flags:["friendship:junyeon","closed:junyeon"]},{id:"look-ahead",text:"다음 학기의 내 시간을 계획한다.",response:ae(`p|다음에는 어떤 일을 좋아하는지부터 더 찾아보자.
n|나는 친구들이 기다리는 교실로 돌아갔다.`,e),flags:["friendship:junyeon","closed:junyeon"]}]};const b=a,A=[...u,...ae(`n|네 주 뒤. 준연은 한 가지 시간만 적힌 종이와 두 권의 책을 들고 벤치에 먼저 와 있었다.
b|15시 40분. 이번엔 둘 다 같은 거 봤지?
p|응. 나는 오늘 4시에 가야 해.
b|알아. 난 그 뒤에 도서관 갈 거야.
p|같이 못 가서 아쉬워?
b|아쉽지. 그래도 네가 가는 게 내가 싫다는 뜻은 아니잖아.
n|준연은 내 시간을 지우지 않고 종이를 접었다.
b|요즘 같이 이야기할 수 있어서 좋아. 네가 다른 답을 해도 내 수습은 계속할 거고.
p|오늘 어떤 사이로 지낼지 말하는 건 우리가 새로 고르는 일이네.
n|벤치의 두 책 사이에는 손 하나만큼의 거리가 남아 있었다.`,e)];b?A.push({speaker:"junyeon",text:"나 아직 네가 좋아. 용서해 줬으니까 답해 달라는 말은 아니야. 다시 만나면서도 내 마음은 그랬다는 걸 말하고 싶어."}):A.push({speaker:"junyeon",text:"지금은 친구로 천천히 지내고 싶어. 누가 먼저 나를 찾는지만 보지 않고, 내 하루도 내가 만들면서."});const p=[{id:"junyeon-friendship",text:"친구로 천천히 관계를 이어 간다.",response:ae(`p|나는 친구로 다시 알아가고 싶어.
b|응. 그 말 그대로 들을게. 다음에는 읽은 책 이야기부터 하자.
n|우리는 손을 잡지 않고 책 한 권씩을 집었다. 우정으로 남는 대답도 완성된 선택이었다.`,e),flags:["friendship:junyeon"]}];return b&&p.unshift({id:"junyeon-romance",text:"나도 다시 만나며 좋아하게 됐다고, 연인으로 시작하고 싶다고 말한다.",response:ae(`p|나도 다시 만나면서 생각했어. 오늘뿐 아니라 다음에도 너를 만나고 싶어. 연인으로 천천히 시작하자.
b|응. 나도 그걸 원해. 다음 약속은 같이 정하자.
n|준연이 먼저 손을 내밀었다. 나는 그 손을 잡았다. 내 다음 시간과 준연의 다음 일정은 지우지 않은 채로였다.`,e),flags:["romance:junyeon","mutual:junyeon"]}),{id:r,title:b?"오늘은, 늦지 않았어":"같은 시간의 두 권의 책",location:"garden",lines:A,choices:p}}const c=e.bonds[o].affection>=60&&e.bonds[o].trust>=45;let d=[...u,...ae(Ha[o],e)];c||(d=d.slice(0,5),d.push({speaker:o,text:"너랑 함께한 시간은 기억해. 아직 우리 마음을 서둘러 다른 이름으로 부르지는 않아도 좋겠어."},{speaker:"player",text:"응. 지금 서로 말할 수 있는 마음부터 들을게."},{speaker:"narrator",text:"함께했던 일이 모두 사라진 것은 아니었다. 우리는 다음을 약속할지, 각자의 시간을 먼저 보낼지 솔직히 이야기했다."}));const j=[{id:"friendship",text:"앞으로도 솔직한 친구로 만나고 싶다고 말한다.",response:[{speaker:"player",text:"나는 네 곁에 친구로 남고 싶어. 우리가 나눈 시간도 소중하고."},{speaker:o,text:"응. 네가 직접 말해 줘서 고마워. 그러면 다음에는 우리답게 만나자."},{speaker:"narrator",text:"상대의 답을 내 마음대로 바꾸지 않았다. 함께 지킬 수 있는 다음 약속을 새로 골랐다."}],flags:[`friendship:${o}`]},{id:"own-path",text:"좋았던 시간을 고맙게 남기고 당분간 각자의 하루를 보낸다.",response:[{speaker:"player",text:"좋았던 시간은 고마워. 지금은 내 하루를 조금 더 정리하고 싶어."},{speaker:o,text:"알겠어. 내 대답을 서두르지 않은 것처럼 네 시간도 내가 정할 수는 없으니까."},{speaker:"narrator",text:"우리는 지난 기억을 지우지 않고 서로의 다른 일정으로 걸어갔다."}],flags:[`friendship:${o}`,`distance:${o}`]}];return c&&j.unshift({id:"romance",text:`나도 ${lt[o]}를 좋아한다고, 연인으로 만나고 싶다고 말한다.`,response:[{speaker:"player",text:"나도 네가 좋아. 친구라는 말보다 조금 더 가까운 사이로 만나고 싶어. 너도 같은 마음이면."},{speaker:o,text:o==="hyunsol"?"응. 이번에는 추측 안 해도 되겠네. 나도 그 마음이야.":o==="minhyuk"?"나도 같은 마음이야. 다음 시간표는 우리 둘이 같이 쓰자.":"응. 나도 너랑 그렇게 만나고 싶어."},{speaker:"narrator",text:`${lt[o]}가 내 손 가까이 손을 내밀었다. 나는 천천히 손을 잡았다. 사건의 정답이 아니라 두 사람이 직접 고른 다음이었다.`}],flags:[`romance:${o}`,`mutual:${o}`]}),{id:r,title:`${lt[o]} · 축제가 끝난 뒤에도`,location:Ta[o],lines:d,choices:j}}const i=(e,n)=>({speaker:e,text:n}),ve=e=>`assets/romance-evidence/memory-${e}.svg`,oe=[{id:"memory-01",code:"E01",name:"서로 다른 약속 쪽지",chapter:0,unlockAct:1,location:"library",spot:"독서실 옆 공용 테이블",lead:"세계가 기다리던 테이블에서 두 장의 안내를 나란히 본다.",description:"세계가 받은 원본은 15:40, 내가 받은 원본은 16:10이다. 장소와 모임 내용은 같지만 시간이 30분 다르다.",limit:"두 안내가 다르다는 사실을 보여 준다. 이 종이만으로 작성자나 바뀐 이유는 알 수 없다.",requires:[],image:ve("01"),lines:[i("narrator","세계와 남은 오후를 함께 보낸 뒤, 독서실 옆 공용 테이블에서 아까 남겨 둔 두 쪽지를 다시 펼쳤다."),i("world","다음에 물어볼 때 헷갈리지 않게 지금 적어 두자. 어느 종이가 누구 건지도."),i("player","내가 받은 원본은 네 시 십 분. 이쪽 종이가 내 거야."),i("world","내가 기다리며 보고 있던 건 세 시 사십 분. 여기 나란히 놓을게."),i("narrator","내 쪽지에는 16:10, 세계의 쪽지에는 15:40. 독서실 옆 공용 테이블이라는 장소는 같았다."),i("player","장소와 모임 내용은 같고 시간만 삼십 분 달라. 여기까지는 두 원본으로 확인되네."),i("world","응. 누가 왜 다르게 적었는지는 아직 모르고. 기다린 이유를 네 탓으로 적지는 말자."),i("player","원본은 그대로 보관하고, 옆에 확인한 장소랑 날짜를 적을게."),i("world","내 종이도 맡길게. 음료 컵에서는 좀 멀리 두고. 거의 젖을 뻔했거든."),i("narrator","나는 두 원본을 수첩 사이에 나란히 넣었다. 함께 확인한 사람과 삼십 분의 차이를 짧게 기록했다."),i("world","다음 약속은 아까 말한 대로 직접도 확인하기. 그건 우리 둘 다 기억하는 거지?"),i("player","응. 오늘 같이 보낸 시간도 기억할게. 쪽지 확인은 여기까지 하자.")]},{id:"memory-02",code:"E02",name:"인쇄·배부 역할표",chapter:0,unlockAct:2,location:"classroom",spot:"교실 뒤 공개 게시판",lead:"다음 준비물을 확인하다 종이 안내 담당이 적힌 역할표를 읽는다.",description:"공개 역할표에 안내문 인쇄와 배부 담당이 방준연으로 적혀 있다. 무대·전시 준비와 별개의 통상적인 업무다.",limit:"담당자가 누구인지 확인하는 자료다. 역할을 맡았다는 사실만으로 잘못된 쪽지를 만들었다고 단정할 수 없다.",requires:["memory-01"],image:ve("02"),lines:[i("narrator","다음 날 교실 뒤 게시판에 준비물 목록이 새로 붙었다. 민혁이 풀리지 않은 압정을 다시 눌렀다."),i("minhyuk","이쪽이 물품 목록이고, 오른쪽은 역할표다. 자기 준비물을 확인하고 가라."),i("player","종이 안내도 여기에 담당이 나뉘어 있네."),i("minhyuk","초안은 모임을 잡은 사람이 쓰고, 인쇄와 배부는 준연이 모아서 맡는다. 제출 시간을 맞추려고 나눴어."),i("junyeon","프린터 옆에 쌓아 두면 순서가 섞여서. 봉투를 따로 만들어 뒀어."),i("player","어제 내 안내랑 세계 안내는 시간이 달랐어. 남겨 둔 두 장을 나중에 같이 확인할 수 있을까?"),i("junyeon","……그래. 어느 묶음이었는지 봐야겠다."),i("hyunsol","일단 내 실험 설명문은 세 장 더 필요해. 프린터한테까지 재실험시키진 말고."),i("junyeon","세 장. 응, 적었어."),i("narrator","준연이 여분 종이를 세었다. 나는 게시판에서 확인한 역할을 어제 쪽지 옆 메모에 적었다."),i("minhyuk","확인 끝났으면 복도 좀 비켜 줘. 물건 들고 오는 애들이 있다."),i("player","이 상자부터 옮길게. 어느 책상이 비어 있어?")]},{id:"memory-03",code:"E03",name:"댄스실 예약 변경 확인서",chapter:1,unlockAct:1,location:"dance",spot:"댄스연습실 앞 예약 안내대",lead:"태우의 안내와 문에 붙은 예약 시간이 달라 담당 선생님에게 확인한다.",description:"우리 반 연습 예약이 16:20에서 17:00으로 옮겨졌다. 태우가 가지고 온 안내에는 이전 시간이 남아 있다.",limit:"예약 변경과 전달 불일치를 확인한다. 변경 접수 내역만으로 실제 신청자와 이유까지 정하지 않는다.",requires:[],image:ve("03"),lines:[i("narrator","연습 뒤 댄스연습실 앞 예약 안내대로 돌아왔다. 선생님이 아까 준비해 주기로 한 변경 확인서를 놓았다."),i("taewoo","아까 문 앞에서는 정신없었으니까, 지금 내가 받은 안내랑 같이 봐 두자."),i("player","네 원래 안내는 네 시 이십 분. 그걸 보고 제시간에 왔던 거지."),i("taewoo","응. 이 화면은 그대로 남겨 뒀어. 나 혼자 시간을 잘못 외운 게 아니었다는 것부터 적고 싶어."),i("teacher","확인서에는 우리 반 예약이 16시 20분에서 17시로 변경됐다고 적혀 있다. 변경 전후를 함께 보자."),i("narrator","변경 전과 변경 후 시간이 한 장에 적혀 있었다. 태우는 자기 안내 화면을 그 옆에 놓았다."),i("taewoo","예약은 바뀌었는데 내 안내에는 이전 시간이 남아 있었네. 이 차이를 기록하면 되겠다."),i("teacher","누가 어떤 전달을 맡았는지는 공개 인계표도 확인하자. 이 확인서만으로 신청한 사람이나 이유까지 정하지는 말고."),i("world","그래도 빈 교실에서 맞춘 손뼉은 꽤 괜찮았어. 기다린 시간을 전부 버리진 않았네."),i("taewoo","맞아. 확인서랑 내 안내는 같이 남겨 두자. 다음에 또 헷갈리지 않게."),i("player","원래 시간, 바뀐 시간, 네가 받은 안내까지 적었어. 손뼉 틀린 건 안 적고."),i("taewoo","그건 내가 기억해. 다음에 나랑 한 번 더 맞추면 되니까.")]},{id:"memory-04",code:"E04",name:"예약·공지 업무 인계표",chapter:1,unlockAct:2,location:"classroom",spot:"준비 서류를 모아 둔 공용 파일철",lead:"연습 뒤 공개 파일철에서 예약 변경과 공지 갱신의 인계 흐름을 확인한다.",description:"연습 조정 업무는 민혁에게서 준연에게 인계됐고, 예약 변경 뒤 참가자 안내를 갱신하는 일이 포함돼 있다.",limit:"통상적인 담당과 인계 범위를 보여 준다. 서명이나 이름 하나만으로 특정 행동의 수행자를 확정하지 않는다.",requires:["memory-03"],image:ve("04"),lines:[i("narrator","연습을 마치고 교실로 돌아오자 민혁이 공용 파일철을 펼쳤다. 창밖에는 운동부가 정리하는 소리가 들렸다."),i("minhyuk","여기다. 내가 전시 물품을 받으러 간 동안 연습 조정 업무를 넘긴 기록."),i("player","받은 담당은 준연, 업무는 예약 변경 접수랑 참가자 안내 갱신이라고 적혀 있어."),i("minhyuk","맞아. 예약을 바꾸면 오는 애들한테도 새 시간을 전달하게 돼 있다."),i("taewoo","나는 옛 시간을 받은 채로 왔어. 그래서 어디서 전달이 끊겼는지 알고 싶은 거야."),i("junyeon","내가 맡은 부분…… 맞아. 서류 묶음을 다시 볼게."),i("player","확인서랑 이 페이지를 함께 남겨 두자. 다음 연습에서도 같은 일이 생기면 곤란하니까."),i("minhyuk","공개 준비 서류니까 필요한 부분은 같이 볼 수 있어. 개인 수첩을 뒤질 필요는 없다."),i("narrator","파일철의 해당 쪽과 예약 변경 확인서를 나란히 정리했다. 이것으로 누가 무슨 생각을 했는지까지 알게 된 것은 아니었다."),i("taewoo","오늘 틀린 박자까지 적는 건 아니지?"),i("player","그건 나만 기억할게."),i("taewoo","너도 꽤 틀렸거든? 다음 연습 때 같이 갚아.")]},{id:"memory-05",code:"E05",name:"엇갈린 리허설 공지 원문",chapter:2,unlockAct:1,location:"band",spot:"밴드연습실 앞 게시판",lead:"같은 모임을 다른 곳에서 기다렸던 친구들이 각자 받은 공지를 비교한다.",description:"16:40 합동 준비 모임을 준비 지원은 컴퓨터실, 밴드는 밴드연습실, 댄스는 강당으로 안내한다. 표시명은 모두 리허설 자동안내(얼터에고 테스트)다.",limit:"안내문과 수신 집단의 차이를 보여 준다. 표시명만으로 얼터에고나 주한이 작성했다고 볼 수 없다.",requires:[],image:ve("05"),lines:[i("narrator","합동 연습을 마친 뒤 밴드연습실 앞 게시판에서 다시 모였다. 아까 비교한 공지 원문을 정식으로 보관하기 위해서였다."),i("world","아까는 장소만 급하게 맞췄잖아. 이번에는 받은 모둠 이름까지 같이 적어 두자."),i("player","내가 받은 준비 지원 안내는 네 시 사십 분, 컴퓨터실. 표시명은 리허설 자동안내, 얼터에고 테스트야."),i("seoyul","우리가 받은 밴드 안내는 같은 시각에 밴드연습실. 원문 화면 그대로 남겨 뒀어."),i("taewoo","댄스 안내는 강당. 아까 내가 기다렸던 장소가 여기에도 그대로 적혀 있어."),i("narrator","세 공지는 제목과 말투가 같았다. 하지만 받는 모둠과 안내 장소는 서로 달랐다."),i("player","같은 모임인데 모둠마다 다른 장소로 안내됐어. 표시 이름만으로 누가 썼는지는 정할 수 없고."),i("world","응. 내가 혼자 기다린 것도 너희를 피해서는 아니었다는 게 여기 남겠네."),i("seoyul","공용 게시판의 원문을 그대로 저장하자. 우리가 요약한 메모랑은 따로 두고."),i("taewoo","저장했어. 내 쪽은 댄스 모둠, 강당. 두 항목 다 보이지?"),i("narrator","모두가 보여 준 공용 안내를 묶었다. 개인 대화창을 살필 필요는 없었다."),i("world","이 묶음은 내일 선생님이랑 보자. 오늘은 연습도 했고 기록도 남겼으니까, 각자 약속하러 가도 되겠다.")]},{id:"memory-06",code:"E06",name:"예약 공지 대기열 내보내기",chapter:2,unlockAct:2,location:"computer",spot:"교사가 열어 준 공용 게시판 관리 화면",lead:"다음 날 주한과 함께 허가된 예약 공지 목록과 게시 설정을 확인한다.",description:"같은 시험용 서식의 예약 공지 3건에 수신 집단과 장소가 개별 입력돼 있다. 자동 장소 변경은 꺼져 있고 얼터에고는 게시 권한이 없다.",limit:"게시 방식과 권한을 확인한다. 표시 이름·계정만으로 입력한 사람을 식별하지 않으며, 개인 메시지는 포함하지 않는다.",requires:["memory-05"],image:ve("06"),lines:[i("narrator","다음 날 컴퓨터실. 선생님이 어제 공지가 저장된 공용 게시판 화면을 열었다. 주한은 옆자리에 자기 노트북을 내려놓았다."),i("teacher","어제 올라간 예약 공지와 게시 설정만 내보냈어. 개인 대화나 개인 계정 자료는 이 파일에 없다."),i("juhan","서식 이름은 리허설 시험용 안내야. 제목의 얼터에고 테스트는 직접 넣는 표시 문구고."),i("player","같은 서식인데 장소가 세 개야. 준비 지원은 컴퓨터실, 밴드는 밴드연습실, 댄스는 강당."),i("juhan","수신 집단과 장소를 각각 입력한 다음 예약한 거야. 자동 장소 변경은 사용 안 함으로 되어 있어."),i("teacher","예약은 입력된 글을 정해진 때에 게시하는 기능이야. 장소를 판단해서 고르는 기능은 아니다."),i("player","얼터에고가 그 장소들을 고를 수는 있어?"),i("juhan","내 시연 프로그램에는 게시판 쓰기 권한이 없어. 여기 나온 제목만 보고 내가 만든 프로그램이 썼다고 하긴 어려워."),i("narrator","주한이 입력 항목과 권한 설정을 가리켰다. 어제 우리가 서로 다른 곳을 기다린 이유가 조금 더 구체적으로 보였다."),i("player","이름보다 실제로 어떤 설정으로 올라왔는지를 남기자."),i("teacher","담당 인계와 원문은 모두 보관할게. 누가 입력했는지는 기록과 당사자 설명을 함께 확인해야 해."),i("juhan","……그럼 시연 연습도 조금 해 볼래? 내 프로그램은 사람 찾는 것보다 인사하는 걸 더 잘하거든.")]},{id:"memory-07",code:"E07",name:"구버전과 승인본 큐시트",chapter:3,unlockAct:1,location:"auditorium",spot:"최종 리허설 객석의 진행 테이블",lead:"음악 순서가 맞지 않아 배포본과 서율이 가지고 있던 승인본을 비교한다.",description:"배포된 v3는 댄스 다음 밴드, 서명된 승인본 v4는 밴드 다음 댄스다. 공연 순서와 전환 안내가 서로 다르다.",limit:"다른 버전이 배포됐음을 보여 준다. 이 두 장만으로 누가 어느 시점에 골랐는지까지는 알 수 없다.",requires:[],image:ve("07"),lines:[i("narrator","승인된 순서로 리허설을 마친 뒤, 강당 객석의 진행 테이블에 두 큐시트를 다시 펼쳤다."),i("minhyuk","아까 급히 맞춘 차이를 지금 기록하자. 배포본과 승인본은 섞이지 않게 따로 놓고."),i("taewoo","우리가 연습한 건 밴드 뒤에 댄스야. 다시 맞췄을 때는 전환도 제대로 됐어."),i("world","맞아. 처음 받은 표대로 시작했으면 서로 다음 차례를 다르게 기다렸겠네."),i("seoyul","여기가 내가 어제 확인받아서 가지고 있던 종이야. 승인 표시도 그대로 있어."),i("narrator","서율이 펼친 v4에는 승인 확인이 있었다. 객석에 나눠진 종이는 그 전 버전인 v3였다."),i("player","v3는 댄스 다음 밴드고, v4는 밴드 다음 댄스야. 전환 안내도 같이 바뀌었네."),i("seoyul","둘 다 원본으로 보관하자. 어느 버전이 배포됐는지 나중에도 직접 비교할 수 있게."),i("teacher","관객이 들어오기 전 연습에서 확인했고 다친 사람은 없었다. 누가 언제 이 버전을 골랐는지는 배포 기록을 더 확인하자."),i("taewoo","응. 지금은 순서가 달랐다는 사실까지. 아까 멈추고 다시 맞춘 것도 적어 두고."),i("player","기록했어. 아까 가져온 물도 아직 남았는데 마실 사람?"),i("world","나 한 병. 이제 종이 덮고 목부터 쉬게 하자.")]},{id:"memory-08",code:"E08",name:"큐시트 배포 대장과 버전 이력",chapter:3,unlockAct:2,location:"media",spot:"교사와 확인하는 프로젝트 공용 서류대",lead:"승인본이 언제 준비됐는지 배포 대장과 공용 버전 이력을 나란히 확인한다.",description:"전날 승인된 v4가 공용 폴더에 공유되고 배포 담당의 수령 확인이 남은 뒤, 다음 날 v3가 배포 대상으로 선택됐다.",limit:"승인본이 배포 전에 존재했다는 순서를 입증한다. 이름·확인란만으로 행위자를 단정하지 않고 당사자의 실제 인계를 대조한다.",requires:["memory-07"],image:ve("08"),lines:[i("narrator","미디어실의 공용 서류대에 두 큐시트를 올렸다. 선생님은 프로젝트 폴더의 버전 이력과 배포 대장을 함께 열었다."),i("teacher","여기가 전날 v4를 승인하고 공용 폴더에 올린 기록이야. 그다음 칸은 배포 담당이 받았는지 확인하는 곳이고."),i("minhyuk","수령 확인이 먼저, 오늘 v3를 배포 대상으로 고른 기록이 나중이군."),i("player","그럼 배포가 끝난 다음에야 최종본이 생긴 건 아니네."),i("teacher","그래. 적어도 이 순서는 분명해. 누가 어떤 경위로 골랐는지는 원본과 실제로 인계받은 설명을 더 맞춰 봐야 한다."),i("seoyul","내가 가지고 있던 승인본이랑 내용도 같아. 밴드, 전환, 댄스 순서."),i("junyeon","그 서류…… 내일 같이 볼게. 오늘 나눠진 묶음도 가져올게."),i("player","그럼 원본은 섞이지 않게 여기에 남겨 두자."),i("narrator","버전 순서와 배포 순서를 한 묶음으로 보관했다. 아직 누구를 정해 놓고 부르는 자리는 아니었다."),i("minhyuk","내일 아침 선생님이 계실 때 다 같이 확인하자. 오늘 연습은 승인본으로 마무리하고."),i("seoyul","응. 남은 시간까지 전부 이 종이한테 주지는 말자."),i("player","끝나면 계단에서 잠깐 쉬자. 아까 사 둔 간식이 아직 있어.")]}],Ge=[{id:"different-originals",title:"같은 시간을 잘못 기억한 걸까?",claims:[{id:"memory-only",speaker:"junyeon",text:"같은 안내를 받고 우리가 시간을 잘못 기억한 거 아닐까? 종이에 적힌 시간은 같았을 텐데."},{id:"waited-there",speaker:"world",text:"나는 내 쪽지의 시간에 맞춰 독서실 옆에서 기다렸어. 그 쪽지를 그대로 가져왔어."},{id:"compare-originals",speaker:"minhyuk",text:"기억이 다른지 종이가 다른지부터 구분하자. 그다음에 예약과 공지를 시간 순서로 보자."}],target:"memory-only",evidence:"memory-01",reason:"세계의 원본에는 15:40, 주인공의 원본에는 16:10이 적혀 있다. 같은 안내를 다르게 기억했다는 설명만으로는 서로 다른 두 종이를 설명할 수 없다. 누가 바꿨는지는 아직 별도로 확인해야 한다.",hint:"기억에 기대지 않아도 직접 나란히 읽을 수 있는 두 원본을 찾자."},{id:"who-set-the-place",title:"얼터에고가 장소를 바꿨을까?",claims:[{id:"ai-changed-it",speaker:"junyeon",text:"공지에 얼터에고 테스트라고 돼 있었잖아. 프로그램이 장소를 자동으로 바꿔 보낸 걸 거야."},{id:"check-capability",speaker:"juhan",text:"내 프로그램 이름과 같은 문구는 맞아. 하지만 이름만으로 쓰기 권한이나 실제 동작까지 같아지는 건 아니야."},{id:"three-destinations",speaker:"taewoo",text:"같은 시간에 세 곳으로 갈라졌어. 우리가 받은 문구와 실제 게시 방식을 같이 봐야 해."}],target:"ai-changed-it",evidence:"memory-06",reason:"허가된 내보내기에는 장소가 수신 집단별로 직접 입력됐고 자동 장소 변경은 꺼져 있다. 얼터에고에는 게시 권한도 없다. 표시 이름을 프로그램의 행동으로 여길 수는 없다. 누가 입력했는지는 인계와 당사자의 설명을 함께 대조한다.",hint:"제목이 아니라 수신 집단별 입력 항목, 자동 변경 설정, 게시 권한을 함께 보여 주는 자료다."},{id:"approved-before-distribution",title:"승인본은 배포 뒤에 도착했을까?",claims:[{id:"v4-was-too-late",speaker:"junyeon",text:"v3를 나눌 때는 승인된 v4가 아직 공용 폴더에 없었어. 최종본을 받을 수 없었던 거야."},{id:"kept-v4",speaker:"seoyul",text:"내가 전날 확인받아 챙긴 종이는 v4야. 그 종이와 공개된 버전 이력을 맞춰 보자."},{id:"need-receipt-order",speaker:"minhyuk",text:"승인, 공유, 수령 확인, 배포 선택이 어떤 순서인지 확인해야 해. 이름 하나로 끝낼 일은 아니야."}],target:"v4-was-too-late",evidence:"memory-08",reason:"E08에는 v4 승인·공유와 배포 담당 수령 확인이 먼저 있고, 다음 날 v3 선택·배포가 뒤에 있다. 배포 때 v4가 존재하지 않았다는 설명과 맞지 않는다. 실제 수령과 선택의 주체는 지금부터 본인의 설명을 원본에 맞춰 확인한다.",hint:"v3와 v4가 다르다는 자료만으로는 부족하다. 승인본이 언제 준비됐는지와 배포 순서가 함께 있는 기록을 고르자."}],De=[{id:"slip-1610",text:"1장 · 같은 만남의 쪽지에 15:40과 16:10이 나뉘어 적혔다."},{id:"booking-1700",text:"2장 · 댄스실 예약은 16:20에서 17:00으로 바뀌었지만 안내는 그대로였다."},{id:"split-notifications",text:"3장 · 16:40 모임 공지가 수신 집단마다 서로 다른 장소를 안내했다."},{id:"cue-v3",text:"4장 · 승인된 v4가 준비된 뒤에도 구버전 v3가 배포됐다."}];function _a(e,n){const a=oe.find(o=>o.id===e);return a?{id:`discover-${a.id}`,title:a.name,location:a.location,lines:a.lines,choices:[],memory:a.id,image:a.image}:{id:"discovery-unavailable",title:"아직 펼치지 않은 기록",location:n.location,lines:[i("narrator","이곳에서는 아직 확인할 자료가 보이지 않는다.")],choices:[]}}const Ga={world:"그날 음료가 식도록 기다린 건 사실이야. 하지만 내가 {name}을 기다리고 싶었던 마음까지 네가 결정할 수는 없어.",hyunsol:"준비를 망친 게 무서웠던 건 아니야. 다음 약속도 틀어질까 봐 서로 눈치를 보게 된 게 싫었어.",taewoo:"기다리는 동안 내가 시간을 잘못 본 줄 알았어. 다음 연습에 오고 싶다는 말까지 겁내게 만들진 말아 줘.",taehun:"우리가 만나기로 했던 시간에는 별것 아닌 얘기도 있었어. 네 눈에 작아 보여도 우리한테는 필요한 시간이었어.",seoyul:"빈 의자를 그리다가 사람이 돌아오면 좋았어. 그 사람이 안 오게 만들고 나서 내 그림이 외로워 보인다고 말하면 안 되는 거야.",juhan:"네가 만든 알림에 내 프로그램 이름이 붙어 있었어. 내가 좋아해서 만든 것까지 친구들 사이를 갈라놓는 핑계가 된 건 속상해.",minhyuk:"내가 맡긴 일을 믿고 다른 준비를 했어. 그 믿음을 이용한 일은 반장으로서도, 친구로서도 그냥 넘길 수 없어.",junyeon:"네가 나랑 시간을 보내 줘도 다른 애들이랑 만나는 건 싫었어. 그 마음을 말하는 대신, 너희 약속부터 틀어지게 했어."};function Ya(e){const n=e.focus??"world",a=e.bonds.junyeon.affection>=70?"너는 가까이 와 줬는데, 나는 그때마다 더 많은 걸 확인하려고 했어. 다른 친구한테도 웃으면 나랑 있었던 시간이 사라지는 것처럼 굴었어.":e.bonds.junyeon.affection>=35?"네가 몇 번이나 같이 가자고 해 줬는데도, 다른 약속이 보이면 내 자리는 없는 거라고 단정했어.":"너랑 아직 잘 알지도 못하면서, 다른 애들이랑 가까워지는 것만 보고 나는 앞으로도 혼자일 거라고 정해 버렸어.";return{id:"revelation-responsibility",title:"상처받은 마음과, 상처 준 선택",location:"classroom",choices:[],lines:[i("narrator","네 번의 어긋남을 시간 순서로 놓았다. 종이, 예약 확인서, 공지 원문, 큐시트가 교실 가운데 놓여 있었다."),i("teacher","자료에 적힌 사실까지는 함께 확인했다. 이제 실제로 어떤 업무를 받았고 어떤 행동을 했는지 듣자."),i("player","담당이라는 이유만으로 전부 준연이 했다고 말하려는 건 아니야. 이 인계와 수령 확인부터 물어볼게."),i("minhyuk","첫 역할표의 인쇄·배부 업무를 네가 맡았고, 두 번째 장의 연습 조정 업무도 내가 직접 넘겼지."),i("junyeon","응. 그건 내가 받은 일이야. 내가 인계받고 확인한 것도 맞아."),i("player","큐시트 배포 대장의 수령 확인도 네가 실제로 받은 다음에 남긴 거야?"),i("junyeon","맞아. 다른 사람이 내 이름을 쓴 게 아니야. v4를 받아서 내용을 봤어."),i("teacher","지금 확인한 인계와 원본은 따로 대조하겠다. 모르는 부분까지 답할 필요는 없어. 쉬어야 하면 잠깐 멈출 수도 있고."),i("narrator","준연은 물컵을 쥐었다가 내려놓았다. 누구도 컵을 뺏거나 대답을 재촉하지 않았다."),i("junyeon","……첫 쪽지는 내가 고쳤어. 원래 약속은 세 시 사십 분이었어."),i("junyeon","세계한테 갈 건 그대로 두고, {name}한테 줄 것만 네 시 십 분으로 다시 뽑았어."),i("world","그래서 내 건 15:40이었구나. 우리가 서로 다른 시간을 말한 거고."),i("player","우리가 그날 접어 둔 두 장과 맞아. 장소는 같았고 내 시간만 늦었어."),i("junyeon","약속이 틀어지면 그날 네가 다른 데 안 가고, 내 옆에 올 줄 알았어."),i("narrator","세계가 책상 위의 쪽지를 다시 보았다. 처음 만났던 날의 간식 봉투가 잠깐 떠올랐다."),i("taewoo","연습실은? 나는 왜 옛 시간을 가지고 기다렸어?"),i("junyeon","내가 조정 업무를 맡았을 때 예약을 다섯 시로 바꿨어. 태우한테는 새 시간을 안 보냈어."),i("minhyuk","예약 변경 확인서에는 16:20에서 17:00. 인계표에는 변경 뒤 안내를 갱신하는 일까지 적혀 있어."),i("junyeon","알고 있었어. 전달해야 한다는 것도. 그냥 빠뜨린 게 아니었어."),i("player","세 곳으로 나뉜 공지도 같은 이유였어?"),i("junyeon","준비 지원에는 컴퓨터실, 밴드에는 밴드연습실, 댄스에는 강당이라고 썼어. 네 시 사십 분은 다 같게."),i("juhan","보관한 공지 세 장과 내보낸 대기열의 장소가 같아. 내 프로그램이 고른 곳이 아니었어."),i("junyeon","시험용 서식을 쓸 수 있는 담당 권한이 있었어. 얼터에고 테스트라는 제목이면 나한테 먼저 묻지 않을 것 같았어."),i("juhan","나는 그 이름 때문에 친구들 약속을 망친 줄 알고 내가 만든 것부터 다시 봤어."),i("junyeon","네 탓처럼 보이게 한 것도 내가 한 일이야. 미안해."),i("seoyul","마지막 큐시트는 승인본을 봤는데도 바꾼 거야?"),i("junyeon","응. v4가 맞다는 걸 봤어. 그런데 공용 폴더에 남아 있던 v3를 골라서 나눴어."),i("junyeon","공연까지 어긋나면 너희가 서로 못 믿게 될 거라고 생각했어. 그러면 나만 빼고 즐거운 날은 안 될 것 같았어."),i("taewoo","누구도 없는 연습 때 알아챘으니 다행이지, 그래서 괜찮았던 건 아니야. 우리 그 무대 정말 기다렸어."),i("junyeon","알아. 잘되라고 한 일도, 도와주려다 생긴 실수도 아니었어. 안 되게 하려고 골랐어."),i("narrator","준연의 마지막 말 뒤에 잠깐 정적이 남았다. 교실 밖에서는 페어 안내 방송을 시험하는 소리가 났다."),i("player","우리한테 서운했던 일이 있었던 건 들을게. 하지만 지금 말한 행동과 섞어서 없던 일로 만들지는 못해."),i("junyeon","너희가 둘씩 다음 약속을 잡으면, 나는 처음부터 없는 사람인 것 같았어. 내가 오면 웃음이 멈춘 날도 있었고."),i("hyunsol","준연이 말하려는데 우리가 장비 얘기로 넘어간 날은 있었어. 그건 내가 미안해. 그래도 일부러 널 빼자는 약속을 한 건 아니야."),i("taehun","서운했던 순간은 다시 이야기할 수 있어. 우리가 다른 친구를 만나는 시간을 지우지 않고도."),i("junyeon",a),i(n,Ga[n]),i("player",n==="junyeon"?"너랑 같이 있던 시간도 내 선택이었어. 다른 친구들과 만날 시간도 내가 고를 수 있어야 해.":"내가 누군가를 만나고 싶었던 마음은 실제였어. 기다리고 헷갈렸던 그 사람의 마음도."),i("junyeon","상처받았다고 말하면 내가 고친 시간까지 이해받을 수 있을 줄 알았어. 그런데 그건 내가 다른 사람을 기다리게 만든 시간이네."),i("teacher","당사자의 설명은 보관된 두 쪽지, 예약 변경과 인계, 공지 원문, 버전 순서와 맞는다. 확인된 행동과 아직 모르는 일을 나눠 기록하겠다."),i("minhyuk","담당 업무를 넘기고 받았다는 확인도 본인에게 들었어. 이름이나 계정 표시만으로 결정한 건 아니다."),i("junyeon","내가 잘못 보낸 안내를 정정할게. 받은 사람이 다시 헷갈리지 않도록 원래 시간과 장소를 적어서."),i("world","그건 해 줘. 하지만 오늘 바로 예전처럼 둘이 만나겠다고는 못 하겠어."),i("junyeon","응. 미안하다고 했으니까 지금 웃어 달라는 말은 안 할게."),i("taewoo","우리는 승인된 순서로 공연할 거야. 기다려 준 사람들 앞에서, 연습한 것까지 없애지는 않을 거야."),i("seoyul","전시도 마저 걸자. 고쳐야 할 건 고치고, 약속한 시간도 되찾고."),i("teacher","이제 정할 것은 함께 하는 프로젝트와 개인적인 관계다. 수업을 받을 권리나 학교를 다닐 자격을 여기서 표결하지는 않는다."),i("teacher","프로젝트 참여를 끝내는 경우에도 정정과 자료 반환은 필요하다. 다시 기회를 주면 감독 아래 맡길 일과 지켜야 할 조건을 구체적으로 정하자."),i("junyeon","어느 쪽이든 내가 한 일을 다른 사람한테 넘기지는 않을게."),i("narrator","나는 기록 옆에 놓인 손을 거두고 준연을 보았다. 누군가를 불쌍히 여기는 마음만으로 답할 수 없는 약속이 남아 있었다.")]}}const Ye=(e,n=100)=>Math.max(0,Math.min(n,e)),fe=e=>typeof e=="string"&&re.includes(e),$t=e=>typeof e=="string"&&Pt.some(n=>n.id===e),le=e=>[...new Set(e)],Je=[["D − 64","D − 51","D − 50"],["D − 49","D − 33","D − 32"],["D − 31","D − 16","D − 15"],["D − 14","D − 2","D − 1"],["FAIR DAY · 오전","FAIR DAY · 공연","FAIR DAY · 저녁"]],Ja={world:["band","garden","media","classroom","cafeteria","auditorium"],hyunsol:["chemistry","library","classroom","garden","computer","cafeteria"],taewoo:["dance","auditorium","garden","classroom","cafeteria","walk"],taehun:["observatory","library","garden","classroom","walk","cafeteria"],seoyul:["art","band","garden","media","classroom","cafeteria"],juhan:["computer","library","garden","classroom","media","cafeteria"],minhyuk:["classroom","auditorium","garden","library","cafeteria","walk"],junyeon:["chemistry","library","classroom","garden","computer","cafeteria"]};function St(e){return e.verdict==="forgive"?100:70}function kn(e){const n=e.trim();return Array.from(n).length>=1&&Array.from(n).length<=12&&!/[<>\u0000-\u001f\u007f]/.test(n)}function Xa(e,n){if(typeof e!="string"||!kn(e))throw new RangeError("이름을 1~12자로 입력해 주세요.");const a={version:2,name:e.trim(),seed:Number.isFinite(n)?n>>>0:0,chapter:0,act:0,phase:"story",mode:"main",line:0,response:null,focus:null,visitor:null,location:"classroom",bonds:Object.fromEntries(re.map(o=>[o,{affection:8,trust:8}])),flags:[],clues:[],actions:2,visited:[],visits:Object.fromEntries(re.map(o=>[o,0])),sceneKey:"",backlog:[],verdict:"pending",repairStep:0,repairDone:!1,trialRound:0,trialFeedback:null,trialOrder:[],ending:null,date:Je[0][0]};return se(a,"main")}function Te(e){var n;if(e.mode==="hangout"&&e.visitor){const a=`meeting-place:${e.sceneKey}:`,o=(n=e.flags.find(r=>r.startsWith(a)))==null?void 0:n.slice(a.length);return vn(e.visitor,e,$t(o)?o:e.location)}return e.mode==="discovery"?_a(e.sceneKey.replace(/^discover-/,""),e):e.mode==="revelation"?Ya(e):e.mode==="repair"?Wa(Math.min(3,e.repairStep),e):e.mode==="finale"?Va(e):wn(e.chapter,e.act,e)}function Ct(e){return e.response??Te(e).lines}function Za(e,n){return vt(n,`${e.seed}:romance:${e.sceneKey}`)}function Nn(e,n){const a=ut(e).find(u=>{var c;return((c=u.lines.find(d=>fe(d.speaker)))==null?void 0:c.speaker)===n});if(a)return a.location;const o=Ja[n],r=re.indexOf(n);return o[(e.seed%o.length+e.chapter*3+e.act*2+(2-e.actions)+r)%o.length]}function se(e,n,a){let o={...e,phase:"story",mode:n,line:0,response:null,sceneKey:a??e.sceneKey};const r=Te(o);return o={...o,sceneKey:a??r.id,location:r.location},o}function Pn(e,...n){return{...e,backlog:[...e.backlog,...n].slice(-800)}}function $n(e,n=[]){const a={...e.bonds};for(const o of n){if(!fe(o.person)||o.person==="junyeon"&&e.verdict==="exclude")continue;const r=a[o.person],u=Number.isFinite(o.affection)?o.affection??0:0,c=Number.isFinite(o.trust)?o.trust??0:0;a[o.person]={affection:Ye(r.affection+u,o.person==="junyeon"?St(e):100),trust:Ye(r.trust+c)}}return{...e,bonds:a}}function Qa(e){return new Set(e.flags.flatMap(n=>{const a=/^junyeon-focus:hangout-junyeon-([1-4])-v[12]$/.exec(n);return a?[a[1]]:[]})).size}function er(e){return e.verdict==="forgive"&&e.repairDone&&Qa(e)>=2&&e.bonds.junyeon.affection>=85&&e.bonds.junyeon.trust>=70&&(e.focus===null||e.focus==="junyeon")&&!e.flags.some(n=>n.startsWith("romance:")&&n!=="romance:junyeon")}function tr(e,n){const a=(n.flags??[]).filter(o=>o.startsWith("romance:"));return a.length?e.mode!=="finale"?!1:a.every(o=>{const r=o.slice(8);return fe(r)&&(r==="junyeon"?er(e):e.focus===r)}):!0}function en(e,n){if(e.phase!=="story"||e.response!==null)return e;const a=Te(e),o=a.choices.find(c=>c.id===n);if(e.line<a.lines.length||!o||!tr(e,o)||e.flags.includes(`choice:${e.sceneKey}:${o.id}`))return e;const r=$n(e,o.effects),u=Pn({...r,line:0,response:o.response,flags:le([...r.flags,`choice:${e.sceneKey}:${o.id}`,...o.flags??[]])},{speaker:"player",text:o.text});return o.response.length?u:wt(u,a)}function tn(e){if(e.phase!=="story")return e;const n=Te(e),a=Ct(e);if(e.line>=a.length)return e.response===null&&n.choices.length?e:wt(e,n);const o=Pn({...e,line:e.line+1},a[e.line]);return o.line===a.length&&(e.response!==null||!n.choices.length)?wt(o,n):o}function wt(e,n){let a={...e,flags:le([...e.flags,`read:${n.id}`]),line:0,response:null};if(e.mode==="discovery"){const o=oe.find(r=>`discover-${r.id}`===e.sceneKey);return o&&(a={...a,clues:le([...a.clues,o.id])}),{...a,phase:"map"}}if(e.mode==="hangout"&&e.visitor)return e.visitor==="junyeon"&&e.chapter<4&&e.verdict==="pending"&&(a={...a,flags:le([...a.flags,`junyeon-focus:${n.id}`])}),{...a,phase:"map",visits:{...a.visits,[e.visitor]:a.visits[e.visitor]+1}};if(e.mode==="revelation")return{...a,phase:"verdict"};if(e.mode==="repair")return e.repairStep<3?se({...a,repairStep:e.repairStep+1,date:`후일담 · ${e.repairStep+2}주째`},"repair"):se({...a,repairStep:4,repairDone:!0,date:"후일담 · 4주 뒤"},"finale");if(e.mode==="finale"){const o=[...a.flags].reverse().find(r=>/^(romance|friendship):/.test(r));return{...a,phase:"ending",ending:`${o??`friendship:${e.focus??"class"}`}:${e.verdict}`}}return a={...a,actions:2,visited:[],visitor:null},e.chapter===4&&e.act===0&&e.verdict==="pending"&&Et(a)?{...a,phase:"trial",trialRound:0,trialFeedback:null,trialOrder:[]}:{...a,phase:"map"}}function Et(e){return oe.every(n=>e.clues.includes(n.id))}function nr(e){return oe.filter(n=>n.chapter<=e.chapter).every(n=>e.clues.includes(n.id))}function ar(e){return e.phase!=="map"||!e.flags.includes(`read:${wn(e.chapter,e.act,e).id}`)?e:e.chapter===4&&e.act===0&&e.verdict==="pending"?Et(e)?{...e,phase:"trial",trialRound:0,trialFeedback:null,trialOrder:[]}:e:e.act<2?se({...e,act:e.act+1,date:Je[e.chapter][e.act+1],visitor:null},"main"):nr(e)?e.chapter===1?{...e,phase:"focus"}:e.chapter<4?se({...e,chapter:e.chapter+1,act:0,date:Je[e.chapter+1][0],visitor:null},"main"):e.verdict==="pending"?e:e.verdict==="forgive"&&!e.repairDone?se({...e,repairStep:0,date:"후일담 · 1주째",visitor:null},"repair"):se({...e,date:"후일담 · 4주 뒤",visitor:null},"finale"):e}function nn(e,n){return e.phase!=="focus"||e.chapter!==1||e.act!==2||!(n===null||fe(n))?e:se({...e,focus:n,chapter:2,act:0,visitor:null,date:Je[2][0],flags:le([...e.flags,`focus:${n??"none"}`])},"main")}function an(e,n,a,o=!1){if(e.phase!=="map"||!fe(n)||!$t(a)||e.actions<1||e.visited.includes(n)||n==="junyeon"&&e.verdict==="exclude"||Nn(e,n)!==a)return e;const r=vn(n,e,a),u=`${r.id}:visit-${e.visits[n]+1}`,c=se({...e,actions:e.actions-1,visited:[...e.visited,n],visitor:n,location:a,flags:le([...e.flags,`meeting-place:${u}:${a}`])},"hangout",u);return o?{...c,phase:"activity"}:c}function rr(e,n){if(e.phase!=="activity"||e.mode!=="hangout"||!e.visitor||e.flags.includes(`activity:${e.sceneKey}`))return e;const a=Number.isFinite(n)?Math.floor(Ye(n,3)):0,o=$n(e,[{person:e.visitor,affection:3+a*2,trust:1+a*3}]);return{...o,phase:"story",flags:le([...o.flags,`activity:${e.sceneKey}`,`activity-score:${e.sceneKey}:${a}`])}}function ut(e,n){return e.phase!=="map"?[]:oe.filter(a=>!e.clues.includes(a.id)&&(e.chapter>a.chapter||e.chapter===a.chapter&&e.act>=a.unlockAct)&&a.requires.every(o=>e.clues.includes(o))&&(!n||a.location===n))}function or(e,n){const a=ut(e,e.location).find(o=>o.id===n);return a?se({...e,visitor:null,location:a.location},"discovery",`discover-${n}`):e}function sr(e,n,a){if(e.phase!=="trial"||e.trialFeedback||e.trialRound>=Ge.length)return e;const o=Ge[e.trialRound];if(!o.claims.some(u=>u.id===n)||!e.clues.includes(a))return e;const r=o.target===n&&o.evidence===a;return{...e,trialFeedback:{ok:r,text:r?o.reason:o.hint}}}function xt(e){return e.phase!=="trial"||!e.trialFeedback?e:{...e,trialRound:e.trialRound+(e.trialFeedback.ok?1:0),trialFeedback:null}}function ir(e,n){return e.phase!=="trial"||e.trialRound!==Ge.length||e.trialFeedback||n.length!==De.length||new Set(n).size!==n.length||n.some(o=>!De.some(r=>r.id===o))?e:De.every((o,r)=>o.id===n[r])?se({...e,trialOrder:[...n],trialFeedback:null},"revelation"):{...e,trialOrder:[...n],trialFeedback:{ok:!1,text:"처음 어긋난 쪽지부터 페어 전야의 배포까지, 일어난 순서를 다시 살펴보자."}}}function rn(e,n){return e.phase!=="verdict"||e.verdict!=="pending"||e.chapter!==4||n!=="exclude"&&n!=="forgive"?e:se({...e,verdict:n,act:1,visitor:null,date:Je[4][1],flags:le([...e.flags,`verdict:${n}`])},"main")}const lr=["main","hangout","discovery","revelation","repair","finale"],cr=["story","map","focus","activity","trial","verdict","ending"],on=e=>!!e&&typeof e=="object"&&"speaker"in e&&"text"in e&&(fe(e.speaker)||["player","narrator","teacher","alter"].includes(String(e.speaker)))&&typeof e.text=="string"&&e.text.length<=1e4,rt=(e,n=5e3)=>Array.isArray(e)&&e.length<=n&&e.every(a=>typeof a=="string"&&a.length<=500),we=(e,n,a)=>typeof e=="number"&&Number.isInteger(e)&&e>=n&&e<=a;function Sn(e){var n,a,o;try{if(!e||typeof e!="object")return null;const r=e;if(r.version!==2||typeof r.name!="string"||!kn(r.name)||!we(r.seed,0,4294967295)||!we(r.chapter,0,4)||!we(r.act,0,2)||!cr.includes(r.phase)||!lr.includes(r.mode)||!we(r.line,0,2e3)||!(r.response===null||Array.isArray(r.response)&&r.response.length<=2e3&&r.response.every(on))||!(r.focus===null||fe(r.focus))||!(r.visitor===null||fe(r.visitor))||!$t(r.location)||!rt(r.flags)||!rt(r.clues,8)||!we(r.actions,0,2)||!rt(r.visited,8)||!r.visited.every(fe)||typeof r.sceneKey!="string"||r.sceneKey.length>300||!["pending","exclude","forgive"].includes(r.verdict)||!we(r.repairStep,0,4)||typeof r.repairDone!="boolean"||!we(r.trialRound,0,Ge.length)||!rt(r.trialOrder,4)||!(r.ending===null||typeof r.ending=="string")||typeof r.date!="string"||r.date.length>100||!Array.isArray(r.backlog)||r.backlog.length>800||!r.backlog.every(on)||!(r.trialFeedback===null||typeof r.trialFeedback=="object"&&typeof r.trialFeedback.ok=="boolean"&&typeof r.trialFeedback.text=="string"&&r.trialFeedback.text.length<=2e3)||r.chapter<4&&(r.verdict!=="pending"||["trial","verdict","ending"].includes(r.phase)||["revelation","repair","finale"].includes(r.mode))||r.repairDone&&(r.verdict!=="forgive"||r.repairStep!==4)||r.mode==="repair"&&(r.verdict!=="forgive"||r.repairStep>3)||r.phase==="focus"&&(r.chapter!==1||r.act!==2)||(r.phase==="activity"||r.mode==="hangout")&&!r.visitor||r.phase==="activity"&&r.mode!=="hangout"||r.phase==="trial"&&(r.chapter!==4||r.act!==0||r.verdict!=="pending"||!Et(r))||r.phase==="verdict"&&(r.mode!=="revelation"||r.verdict!=="pending")||r.clues.some(A=>!oe.some(p=>p.id===A&&(p.chapter<r.chapter||p.chapter===r.chapter&&p.unlockAct<=r.act)&&p.requires.every(w=>r.clues.includes(w))))||new Set(r.trialOrder).size!==r.trialOrder.length||r.trialOrder.some(A=>!De.some(p=>p.id===A)))return null;const u={},c={};for(const A of re){const p=(n=r.bonds)==null?void 0:n[A];if(!p||typeof p.affection!="number"||!Number.isFinite(p.affection)||typeof p.trust!="number"||!Number.isFinite(p.trust)||!we((a=r.visits)==null?void 0:a[A],0,1e4))return null;u[A]={affection:Ye(p.affection,A==="junyeon"?St(r):100),trust:Ye(p.trust)},c[A]=r.visits[A]}const d={...r,name:r.name.trim(),bonds:u,visits:c,flags:le(r.flags),clues:le(r.clues),visited:le(r.visited),trialOrder:[...r.trialOrder],backlog:r.backlog.map(A=>({...A})),response:((o=r.response)==null?void 0:o.map(A=>({...A})))??null,trialFeedback:r.trialFeedback?{...r.trialFeedback}:null};if(d.mode==="discovery"&&!oe.some(A=>`discover-${A.id}`===d.sceneKey)||d.mode==="discovery"&&d.phase==="story"&&!ut({...d,phase:"map"},d.location).some(A=>`discover-${A.id}`===d.sceneKey))return null;const j=Te(d),b=Ct(d);return d.response!==null&&!j.choices.some(A=>d.flags.includes(`choice:${d.sceneKey}:${A.id}`))||d.phase==="story"&&d.line>b.length||d.phase==="story"&&d.mode!=="hangout"&&d.sceneKey!==j.id||(d.phase==="story"||d.phase==="activity")&&d.mode==="hangout"&&d.sceneKey!==`${j.id}:visit-${d.visits[d.visitor]+1}`?null:d}catch{return null}}const Cn="reaction-romance-v2:",En=["auto",1,2,3,4,5,6,7,8,9,10],Rn=e=>En.includes(e);function Rt(){try{return globalThis.localStorage??null}catch{return null}}function sn(e,n,a=Rt()){if(!Rn(e)||!a)return!1;const o=Sn(n);if(!o)return!1;try{return a.setItem(`${Cn}${e}`,JSON.stringify({state:o,savedAt:new Date().toISOString()})),!0}catch{return!1}}function ct(e,n=Rt()){if(!Rn(e)||!n)return null;try{const a=n.getItem(`${Cn}${e}`);if(!a)return null;const o=JSON.parse(a);if(typeof o.savedAt!="string"||!Number.isFinite(Date.parse(o.savedAt)))return null;const r=Sn(o.state);return r?{state:r,savedAt:o.savedAt}:null}catch{return null}}function ur(e=Rt()){return En.flatMap(n=>{const a=ct(n,e);return a?[{slot:n,...a}]:[]})}const dr=["삼십 분 늦게 온 봄","같이 틀린 박자","서로 다른 곳에서","내일이 오기 전에","빈자리에 남긴 약속"],bt=(e,n)=>{try{const a=localStorage.getItem(`reaction-romance-v2:${e}`);return a?JSON.parse(a):n}catch{return n}},gt=(e,n)=>{try{localStorage.setItem(`reaction-romance-v2:${e}`,JSON.stringify(n))}catch{}},At=e=>{const n=oe.find(a=>a.id===e);return n?{id:n.id,image:n.image,alt:`${n.name}. ${n.description}`,caption:"게임 속 가상 자료 · 실제 학교나 학생의 기록이 아닙니다."}:void 0},ot=e=>e==="auto"?"auto":Number(e),ln=e=>`./assets/${ke[e].bg}.webp`,st=e=>{var n;return e==="player"?"나":e==="narrator"?"":e==="teacher"?"담임 선생님":e==="alter"?"얼터에고":((n=ue[e])==null?void 0:n.name)??""},Se=e=>ue[e].name,cn=e=>`${Se(e)}${e==="world"||e==="taewoo"?"와":"과"}`;function un({title:e,onClose:n,children:a}){const o=x.useRef(null);return x.useEffect(()=>{var u;const r=document.activeElement;return(u=o.current)==null||u.focus(),()=>r==null?void 0:r.focus()},[]),t.jsx("div",{className:"romance-modal-backdrop",onClick:n,children:t.jsxs("section",{className:"romance-modal",role:"dialog","aria-modal":"true","aria-label":e,tabIndex:-1,ref:o,onClick:r=>r.stopPropagation(),onKeyDown:r=>{var j;if(r.key!=="Tab")return;const u=Array.from(((j=o.current)==null?void 0:j.querySelectorAll('button:not(:disabled),a[href],input,select,[tabindex="0"]'))??[]),c=u[0],d=u.at(-1);c&&(r.shiftKey&&(document.activeElement===c||document.activeElement===o.current)?(r.preventDefault(),d==null||d.focus()):!r.shiftKey&&document.activeElement===d&&(r.preventDefault(),c.focus()))},children:[t.jsxs("header",{children:[t.jsx("h2",{children:e}),t.jsx("button",{"aria-label":"창 닫기",onClick:n,children:t.jsx(oa,{size:21})})]}),t.jsx("div",{className:"romance-modal-body",children:a})]})})}function hr(){var Lt,qt,Kt;const[e,n]=x.useState(null),[a,o]=x.useState(""),[r,u]=x.useState(""),[c,d]=x.useState("none"),[j,b]=x.useState("classroom"),[A,p]=x.useState(!1),[w,z]=x.useState(0),[C,R]=x.useState(document.hidden),[P,E]=x.useState(()=>{const s=bt("read",[]);return Array.isArray(s)?s.filter(m=>typeof m=="string"):[]}),[M,S]=x.useState(()=>{const s=bt("endings",[]);return Array.isArray(s)?s.filter(m=>typeof m=="string"):[]}),[D,J]=x.useState(()=>{const s=bt("settings",{});return{speed:[0,12,24,45].includes(Number(s==null?void 0:s.speed))?Number(s.speed):24,music:(s==null?void 0:s.music)===!0,volume:typeof(s==null?void 0:s.volume)=="number"?Math.max(0,Math.min(.8,s.volume)):.35}}),[he,Ce]=x.useState(""),[F,ne]=x.useState(null),[_,Ie]=x.useState(null),[Ne,Le]=x.useState(null),[xe,Xe]=x.useState(null),[qe,f]=x.useState(0),[g,K]=x.useState(0),[ie,Ee]=x.useState(null),[me,Ze]=x.useState("world"),Ot=x.useRef(!1),On=x.useRef(e);On.current=e;const Q=e?Te(e):null,Qe=e?Ct(e):[],I=e?Qe[e.line]:void 0,U=(I==null?void 0:I.text.replaceAll("{name}",(e==null?void 0:e.name)??""))??"",Ke=e?`${e.sceneKey}:${e.response?"r":"l"}:${e.line}:${(I==null?void 0:I.speaker)??""}:${U}`:"",et=(e==null?void 0:e.trialOrder)??[],dt=s=>n(m=>m&&{...m,trialOrder:typeof s=="function"?s(m.trialOrder):s}),Pe=!!e&&e.phase==="story"&&!e.response&&e.line>=Qe.length&&!!(Q!=null&&Q.choices.length),zt=e&&Q?Za(e,Q.choices):[],tt=I&&re.includes(I.speaker)?I.speaker:(e==null?void 0:e.visitor)??((Lt=Qe.slice(0,((e==null?void 0:e.line)??0)+1).reverse().find(s=>re.includes(s.speaker)))==null?void 0:Lt.speaker),ht=e?ut(e):[],zn=ht.filter(s=>s.location===j),Ft=e?re.filter(s=>!(s==="junyeon"&&e.verdict==="exclude")).map(s=>({id:s,name:Se(s),color:ue[s].color,place:Nn(e,s),available:e.actions>0&&!e.visited.includes(s),visited:e.visited.includes(s)})):[],Dt=Ft.filter(s=>s.place===j),Be=oe.filter(s=>e==null?void 0:e.clues.includes(s.id)),Mt=e?(qt=[...e.flags].reverse().find(s=>/^(romance|friendship):/.test(s)))==null?void 0:qt.split(":")[1]:null,We=re.includes(Mt)?Mt:e==null?void 0:e.focus,ye=Be.find(s=>s.id===F)??Be[0],Re=e?Ge[e.trialRound]:void 0,Fn=e&&Re?vt(Re.claims,`${e.seed}:${Re.id}:claims`).map(s=>s.value):[],Dn=e?vt(De,`${e.seed}:reconstruction`).map(s=>s.value):[],Mn=Be.map(s=>({id:s.id,name:s.name,location:s.location,description:s.description,inspection:[]})),Tn=Object.fromEntries(oe.map(s=>[s.id,At(s.id)])),Tt=x.useMemo(()=>(e==null?void 0:e.phase)==="activity"&&e.visitor?{id:e.sceneKey,title:`${cn(e.visitor)} 함께`,subtitle:`${ke[e.location].name} · ${dr[e.chapter]}`,icon:"♡",context:"오늘 만난 곳에서 짧은 활동을 함께합니다. 재시도하거나 건너뛰어도 이야기와 기록은 이어져요.",rounds:bn(e.visitor,`${e.seed}:${e.sceneKey}`,e.chapter)}:null,[e==null?void 0:e.phase,e==null?void 0:e.sceneKey]),mt=s=>s.replaceAll("{name}",(e==null?void 0:e.name)??""),Oe=()=>{d("none"),Ee(null)},be=s=>Ce(s),G=s=>n(m=>m&&s(m));function yt(){if(!(!e||c!=="none"||_||e.phase!=="story"||Pe)){if(w<U.length){z(U.length);return}U&&!P.includes(Ke)&&E(s=>[...s,Ke]),G(tn)}}function In(s){s.preventDefault();try{const m=Xa(a,crypto.getRandomValues(new Uint32Array(1))[0]);n(m),u(""),p(!1),b("classroom")}catch{u("이름을 1~12자로 입력해 주세요. 한글·영문·숫자를 사용할 수 있어요.")}}function H(s){p(!1),d(s),Ee(null)}function Ln(s){const m=ct(ot(s));if(!m){be("불러올 수 있는 새 버전 저장이 없어요.");return}n(m.state),K(ee=>ee+1),b(m.state.location),p(!1),Oe(),be("저장한 약속부터 이어 갑니다.")}function qn(s){if(e){if(ct(ot(s))&&ie!==s){Ee(s);return}sn(ot(s),e)?(Oe(),be(`${s}번 슬롯에 저장했어요.`)):be("브라우저 저장 공간을 확인해 주세요.")}}function Kn(){if(!e)return;const s=ar(e);if(s===e){const m=oe.filter(ee=>ee.chapter===e.chapter&&!e.clues.includes(ee.id));be(m.length?"이번 장에서 함께 겪은 일을 지도에서 확인해 주세요.":"지금 이야기를 먼저 마쳐 주세요.");return}n(s),b("classroom")}function It(){var m;if(!e||!Ne||!xe)return;const s=sr(e,Ne,xe);n(s),s!==e&&((m=s.trialFeedback)!=null&&m.ok)&&f(ee=>ee+1)}function Bn(){var s,m;document.fullscreenElement?document.exitFullscreen().catch(()=>be("전체화면을 종료하지 못했어요.")):(m=(s=document.documentElement).requestFullscreen)==null||m.call(s).catch(()=>be("이 브라우저에서는 전체화면을 지원하지 않아요."))}return x.useEffect(()=>{e&&!sn("auto",e)&&!Ot.current&&(Ot.current=!0,be("자동 저장을 하지 못했어요. 저장 공간을 확인해 주세요."))},[e]),x.useEffect(()=>{gt("read",P)},[P]),x.useEffect(()=>(gt("settings",D),Zt(D.music,D.volume),()=>Zt(!1,0)),[D]),x.useEffect(()=>{const s=()=>R(document.hidden);return document.addEventListener("visibilitychange",s),()=>document.removeEventListener("visibilitychange",s)},[]),x.useEffect(()=>{z(D.speed===0?U.length:0)},[Ke,U,D.speed]),x.useEffect(()=>{if(C||c!=="none"||!U||D.speed===0||w>=U.length)return;const s=setTimeout(()=>z(m=>Math.min(m+1,U.length)),D.speed);return()=>clearTimeout(s)},[w,U,D.speed,C,c]),x.useEffect(()=>{if(!A||C||c!=="none"||_||(e==null?void 0:e.phase)!=="story"||Pe||w<U.length)return;const s=setTimeout(yt,Math.max(1300,U.length*30));return()=>clearTimeout(s)},[A,C,c,_,Ke,w,Pe,e==null?void 0:e.phase]),x.useEffect(()=>{if(he){const s=setTimeout(()=>Ce(""),4300);return()=>clearTimeout(s)}},[he]),x.useEffect(()=>{Le(null),Xe(null)},[e==null?void 0:e.trialRound,e==null?void 0:e.phase,g]),x.useEffect(()=>{(e==null?void 0:e.phase)==="map"&&b(e.location)},[e==null?void 0:e.phase,e==null?void 0:e.sceneKey]),x.useEffect(()=>{var s;e!=null&&e.trialFeedback&&((s=document.querySelector(".romance-trial-feedback"))==null||s.scrollIntoView({block:"nearest"}))},[e==null?void 0:e.trialFeedback]),x.useEffect(()=>{if((e==null?void 0:e.phase)==="ending"&&e.ending&&!M.includes(e.ending)){const s=[...M,e.ending];S(s),gt("endings",s)}},[e==null?void 0:e.phase,e==null?void 0:e.ending]),x.useEffect(()=>{const s=m=>{if(m.key==="Escape"){m.preventDefault(),_?Ie(null):c!=="none"?Oe():H("menu");return}if(!(c!=="none"||_||m.ctrlKey||m.metaKey||m.altKey||m.target instanceof HTMLElement&&m.target.closest("input,textarea,select,button,a"))){if((e==null?void 0:e.phase)==="story"&&(m.key===" "||m.key==="Enter"))m.preventDefault(),yt();else if(Pe&&/^[1-9]$/.test(m.key)){const ee=zt[Number(m.key)-1];ee&&(m.preventDefault(),G(pt=>en(pt,ee.value.id)))}}};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)}),t.jsxs("main",{className:`romance-app${e?" in-game":""}`,children:[t.jsx("div",{className:"romance-backdrop",style:{backgroundImage:`url(${ln(e?e.phase==="map"?j:(Q==null?void 0:Q.location)??e.location:"classroom")})`}}),t.jsxs("header",{className:"romance-header",children:[t.jsxs("button",{className:"romance-brand",onClick:()=>H("menu"),"aria-label":"메뉴 열기",children:[t.jsx("span",{children:"RE:ACTION"}),t.jsx("small",{children:"빈자리에 남긴 약속"})]}),t.jsxs("div",{className:"romance-header-right",children:[e&&t.jsxs("span",{className:"romance-calendar",children:[e.date,t.jsxs("small",{children:[e.chapter+1,"장 · 1학년 1반"]})]}),t.jsx("button",{"aria-label":D.music?"배경음 끄기":"배경음 켜기",onClick:()=>J(s=>({...s,music:!s.music})),children:D.music?t.jsx(ea,{size:19}):t.jsx(ta,{size:19})}),t.jsx("button",{"aria-label":"전체화면",onClick:Bn,children:t.jsx(na,{size:19})}),t.jsx("button",{"aria-label":"설정",onClick:()=>H("settings"),children:t.jsx(Ut,{size:19})}),t.jsx("button",{"aria-label":"메뉴",onClick:()=>H("menu"),children:t.jsx(aa,{size:21})})]})]}),e?t.jsxs(t.Fragment,{children:[e.phase==="story"&&Q&&t.jsxs("section",{className:"romance-story","aria-label":"이야기",inert:c!=="none"||!!_,children:[t.jsxs("div",{className:"romance-stage",children:[t.jsxs("div",{className:"romance-scene-title",children:[t.jsx("span",{children:e.mode==="discovery"?"A NOTE FROM TODAY":e.mode==="hangout"?"AFTER SCHOOL":e.mode==="repair"?"FOUR WEEKS TO REBUILD":"OUR SHARED DAYS"}),t.jsx("h1",{children:Q.title}),t.jsxs("p",{children:[t.jsx(dn,{size:14}),ke[Q.location].name]})]}),Q.image?t.jsx("img",{className:"romance-scene-art",src:`./${Q.image}`,alt:`${Q.title} - 함께한 순간`}):tt&&t.jsxs("div",{className:"romance-portrait-card",children:[t.jsx(je,{id:tt}),t.jsx("span",{children:ue[tt].role})]},tt)]}),t.jsx("div",{className:`romance-dialogue${Pe?" with-choices":""}`,children:Pe?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"romance-choice-heading",children:[t.jsx(ge,{size:18}),"어떤 말을 건넬까?"]}),t.jsx("div",{className:"romance-choices",children:zt.map(({value:s},m)=>t.jsxs("button",{onClick:()=>G(ee=>en(ee,s.id)),children:[t.jsx("span",{children:String(m+1).padStart(2,"0")}),t.jsx("b",{children:mt(s.text)}),t.jsx(Fe,{size:18})]},s.id))})]}):t.jsxs("button",{className:"romance-line",onClick:yt,"aria-label":U?`${(I==null?void 0:I.speaker)==="player"?e.name:st((I==null?void 0:I.speaker)??"")} ${U} - 다음 대사`:"이야기 이어가기",children:[t.jsx("b",{children:(I==null?void 0:I.speaker)==="player"?e.name:st((I==null?void 0:I.speaker)??"")}),t.jsx("p",{children:U.slice(0,w)||(U?" ":"이야기 이어가기")}),t.jsxs("span",{children:[w<U.length?"클릭하면 문장 전체 표시":e.mode==="discovery"&&e.line===Qe.length-1?"계속하면 기억 수첩에 기록합니다":"CLICK / SPACE TO CONTINUE",t.jsx(Fe,{size:18})]})]})}),t.jsxs("nav",{className:"romance-toolbar","aria-label":"대화 도구",children:[t.jsxs("button",{onClick:()=>H("backlog"),children:[t.jsx(it,{size:15}),"기록"]}),t.jsxs("button",{"aria-pressed":A,onClick:()=>p(!A),children:[A?t.jsx(hn,{size:15}):t.jsx(Ht,{size:15}),"자동"]}),t.jsxs("button",{disabled:!P.includes(Ke)||Pe,onClick:()=>{z(U.length),G(tn)},children:[t.jsx(mn,{size:15}),"읽은 대사"]}),t.jsxs("button",{onClick:()=>H("notebook"),children:[t.jsx(Ue,{size:15}),"기억"]}),t.jsxs("button",{onClick:()=>H("bonds"),children:[t.jsx(ge,{size:15}),"관계"]}),t.jsxs("button",{onClick:()=>H("save"),children:[t.jsx(Vt,{size:15}),"저장"]})]})]}),e.phase==="map"&&t.jsxs("section",{className:"romance-map",inert:c!=="none"||!!_,children:[t.jsxs("div",{className:"romance-map-heading",children:[t.jsxs("div",{children:[t.jsxs("span",{className:"romance-kicker",children:["AFTER SCHOOL / ",e.act+1," OF 3"]}),t.jsx("h1",{children:"오늘은, 누구와 함께할까?"})]}),t.jsxs("div",{className:"romance-actions",children:[t.jsx("b",{children:e.actions}),t.jsxs("span",{children:["남은 만남",t.jsx("small",{children:"기록 확인은 소모 없음"})]})]})]}),t.jsxs("div",{className:"romance-map-body",children:[t.jsx(pa,{selected:j,students:Ft,locked:()=>!1,onSelect:b,discoveries:Object.fromEntries(ht.map(s=>[s.location,ht.filter(m=>m.location===s.location).length]))}),t.jsxs("aside",{className:"romance-place",children:[t.jsx("img",{className:"romance-place-background",src:ln(j),alt:ke[j].name}),t.jsxs("div",{className:"romance-place-content",children:[t.jsx("small",{children:ke[j].sub}),t.jsx("h2",{children:ke[j].name}),zn.map(s=>t.jsxs("button",{className:"romance-memory-discovery",onClick:()=>{p(!1),G(m=>or({...m,location:j},s.id))},children:[t.jsx(kt,{size:18}),t.jsxs("span",{children:[t.jsx("b",{children:s.spot}),t.jsx("small",{children:s.lead}),t.jsx("i",{children:"함께 확인하기 · 행동 소모 없음"})]}),t.jsx(Fe,{size:18})]},s.id)),Dt.length?Dt.map(s=>t.jsxs("div",{className:"romance-meeting",children:[t.jsx(je,{id:s.id}),t.jsxs("div",{children:[t.jsxs("b",{children:[s.name,e.focus===s.id&&t.jsx(ge,{size:12})]}),t.jsx("small",{children:s.id==="junyeon"?"친구 동행":ue[s.id].role}),t.jsxs("div",{children:[t.jsx("button",{disabled:!s.available,onClick:()=>{p(!1),G(m=>an(m,s.id,j))},children:"이야기하기"}),t.jsx("button",{disabled:!s.available,onClick:()=>{p(!1),G(m=>an(m,s.id,j,!0))},children:"함께 활동"})]}),!s.available&&t.jsx("small",{children:s.visited?"이 시간에는 이미 만났어요.":"남은 만남이 없어요."})]})]},s.id)):t.jsxs("p",{className:"romance-quiet",children:["지금은 조용한 곳이에요.",t.jsx("br",{}),"다른 장소에서 친구를 찾아볼까요?"]})]})]})]}),t.jsxs("footer",{className:"romance-map-footer",children:[t.jsxs("button",{onClick:()=>H("notebook"),children:[t.jsx(Ue,{size:16}),"마음의 기록 ",t.jsxs("b",{children:[e.clues.length,"/8"]})]}),t.jsx("p",{children:e.chapter<4?"작은 어긋남은 기록해 두고, 오늘의 약속을 이어 가세요.":"사실을 확인한 뒤에도 두 사람의 시간은 이어집니다."}),t.jsxs("button",{className:"r-primary",onClick:Kn,children:[e.act<2?"다음 이야기":e.chapter===4?"약속의 다음 페이지":e.chapter===1?"가장 만나고 싶은 사람":"다음 장으로",t.jsx(pe,{size:17})]})]})]}),e.phase==="focus"&&t.jsxs("section",{className:"romance-focus",inert:c!=="none",children:[t.jsxs("header",{children:[t.jsx("span",{className:"romance-kicker",children:"THE PERSON ON YOUR CALENDAR"}),t.jsx("h1",{children:"앞으로 더 만나고 싶은 사람."}),t.jsx("p",{children:"누구의 다음 이야기가 궁금한가요? 선택한 사람과 3~5장의 약속이 이어집니다."})]}),t.jsx("div",{className:"romance-focus-grid",children:re.map(s=>t.jsxs("button",{onClick:()=>G(m=>nn(m,s)),children:[t.jsx(je,{id:s}),t.jsxs("span",{children:[t.jsx("b",{children:Se(s)}),t.jsx("small",{children:s==="junyeon"?"아직은 친구로, 조금 더 곁에":"둘만의 약속을 이어가기"}),t.jsx("i",{children:ue[s].tag})]}),t.jsx(Fe,{size:18})]},s))}),t.jsx("button",{className:"r-secondary",onClick:()=>G(s=>nn(s,null)),children:"아직 한 사람으로 정하지 않고, 친구들과 지낸다"})]}),e.phase==="activity"&&Tt&&e.visitor&&t.jsx(Sa,{person:e.visitor,overrideActivity:Tt,paused:c!=="none"||!!_,onFinish:s=>G(m=>rr(m,s))},`${g}:${e.sceneKey}`),e.phase==="trial"&&t.jsxs("section",{className:"romance-trial",inert:c!=="none"||!!_,children:[t.jsxs("header",{children:[t.jsx("span",{className:"romance-kicker",children:"CHAPTER 05 / OUR CLASS TRIAL"}),t.jsx("h1",{children:Re?Re.title:"우리가 겪은 일을 순서대로"}),t.jsx("p",{children:"기억은 근거가 됩니다. 추측만으로 사람의 마음을 단정하지 않습니다."})]}),Re?t.jsxs("div",{className:"romance-trial-body",children:[t.jsxs("div",{className:"romance-claims",children:[t.jsx("h2",{children:"어느 말에 모순이 있을까?"}),Fn.map((s,m)=>t.jsxs("button",{disabled:!!e.trialFeedback,"aria-pressed":Ne===s.id,onClick:()=>Le(s.id),children:[t.jsxs("small",{children:[m+1," / ",st(s.speaker)]}),t.jsx("p",{children:mt(s.text)})]},s.id)),e.trialFeedback?t.jsxs("div",{className:`romance-trial-feedback ${e.trialFeedback.ok?"correct":""}`,role:"status",children:[t.jsx("b",{children:e.trialFeedback.ok?"확인된 사실":"다시 살펴볼 부분"}),t.jsx("p",{children:e.trialFeedback.text}),t.jsxs("button",{className:"r-primary",onClick:()=>G(xt),children:["논증 이어가기",t.jsx(pe,{size:16})]})]}):t.jsxs("button",{className:"r-primary",disabled:!Ne||!xe,onClick:It,children:["선택한 발언에 증거 제시",t.jsx(pe,{size:17})]})]}),t.jsx(Ra,{evidence:Mn,selected:xe,disabled:!!e.trialFeedback,onSelect:Xe,onInspect:Ie,visuals:Tn}),t.jsx("div",{className:"romance-mobile-submit",children:e.trialFeedback?t.jsxs("button",{className:"r-primary",onClick:()=>G(xt),children:["논증 이어가기",t.jsx(pe,{size:16})]}):t.jsxs("button",{className:"r-primary",disabled:!Ne||!xe,onClick:It,children:["선택한 발언에 증거 제시",t.jsx(pe,{size:17})]})})]}):t.jsxs("div",{className:"romance-reconstruction",children:[t.jsx("p",{children:"1~4장에서 확인한 변화의 순서를 정리해 주세요. 오답으로 관계 점수를 잃지 않습니다."}),t.jsx("div",{className:"romance-sequence-slots",children:Array.from({length:4},(s,m)=>{var ee;return t.jsxs("div",{children:[t.jsx("b",{children:m+1}),t.jsx("span",{children:((ee=De.find(pt=>pt.id===et[m]))==null?void 0:ee.text)??"아직 놓지 않은 기록"})]},m)})}),t.jsx("div",{className:"romance-sequence-options",children:Dn.map(s=>t.jsx("button",{disabled:et.includes(s.id)||!!e.trialFeedback,onClick:()=>dt(m=>[...m,s.id]),children:s.text},s.id))}),e.trialFeedback?t.jsxs("div",{role:"status",className:"romance-trial-feedback",children:[t.jsx("p",{children:e.trialFeedback.text}),t.jsx("button",{className:"r-primary",onClick:()=>{G(xt),dt([])},children:"다시 이어가기"})]}):t.jsxs("div",{className:"romance-inline",children:[t.jsx("button",{className:"r-secondary",onClick:()=>dt([]),children:"순서 다시 놓기"}),t.jsx("button",{className:"r-primary",disabled:et.length!==4,onClick:()=>G(s=>ir(s,et)),children:"이 순서로 확인하기"})]})]})]}),e.phase==="verdict"&&t.jsxs("section",{className:"romance-verdict",inert:c!=="none",children:[t.jsx("span",{className:"romance-kicker",children:"SAME TRUTH / DIFFERENT NEXT STEPS"}),t.jsx("h1",{children:"이제, 어떤 관계로 남을까?"}),t.jsxs("p",{children:["준연은 자신이 바꾼 약속과 공지를 인정했습니다.",t.jsx("br",{}),"외로웠다는 말은 들었지만, 훼방 놓은 책임이 없어지지는 않습니다."]}),t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>G(s=>rn(s,"exclude")),children:[t.jsx("span",{children:"01 / 관계 단절"}),t.jsx("h2",{children:"프로젝트에서는 여기까지 하자."}),t.jsx("p",{children:"공동 준비에서 내보내고 개인적인 약속을 끝냅니다. 준연의 수습은 교사와 별도로 계속됩니다. 학교 퇴학이나 따돌림을 뜻하지 않습니다."}),t.jsx("small",{children:"준연 동행 종료 · 기존 연애 루트 유지"}),t.jsx(pe,{size:19})]}),t.jsxs("button",{onClick:()=>G(s=>rn(s,"forgive")),children:[t.jsx("span",{children:"02 / 용서와 두 번째 기회"}),t.jsx("h2",{children:"바꾼 것부터 바로잡아 줘."}),t.jsx("p",{children:"제한된 역할로 책임을 다할 기회를 줍니다. 그 뒤 네 주 동안 신뢰를 새로 쌓습니다. 다른 친구들의 용서까지 대신 결정하지는 않습니다."}),t.jsx("small",{children:"호감 상한 70 → 100 · 현재 수치는 그대로 · 연애는 별도 선택"}),t.jsx(pe,{size:19})]})]}),t.jsx("small",{children:"어느 선택도 다른 히로인들의 호감을 일괄 변경하지 않습니다."})]}),e.phase==="ending"&&t.jsxs("section",{className:"romance-ending",inert:c!=="none",children:[t.jsx("span",{className:"romance-kicker",children:"A PROMISE WE KEPT / MEMORY SAVED"}),We&&t.jsx(je,{id:We}),t.jsx("h1",{children:e.flags.some(s=>s.startsWith("romance:"))?"다음 약속도, 너와.":We==="junyeon"&&e.verdict==="exclude"?"비워 둔 자리를 접으며":"우리의 속도로, 다음 페이지."}),t.jsx("p",{children:We?`${cn(We)} 함께 보낸 다섯 장의 기록.`:"한 사람으로 정하지 않아도, 함께 보낸 날들은 남습니다."}),t.jsxs("div",{className:"romance-ending-notes",children:[t.jsx("p",{children:e.verdict==="forgive"?"준연에게는 책임을 다하는 두 번째 기회를 주었습니다. 용서와 연애는 서로 다른 선택으로 남았습니다.":"준연과의 개인적인 약속을 끝냈습니다. 그 선택은 다른 사람과 지킨 약속을 지우지 않았습니다."}),t.jsx("p",{children:e.flags.some(s=>s.startsWith("romance:"))?"고백은 누군가를 논파한 보상이 아니라, 서로의 시간을 기억하고 다시 만나기로 한 대답이었습니다.":"마지막 말 한마디보다 함께 보낸 시간이 관계를 정했습니다. 오늘의 마음을 서두르지 않기로 했습니다."})]}),t.jsxs("div",{className:"romance-inline",children:[t.jsx("button",{className:"r-secondary",onClick:()=>H("backlog"),children:"마지막 대사 다시 읽기"}),t.jsxs("button",{className:"r-primary",onClick:()=>{n(null),p(!1),o("")},children:["새로운 이야기",t.jsx(_e,{size:16})]})]})]})]}):t.jsxs("section",{className:"romance-title",children:[t.jsxs("div",{className:"romance-title-copy",children:[t.jsx("span",{className:"romance-kicker",children:"LOVE FIRST. THE TRUTH COMES LATER."}),t.jsxs("h1",{children:["너와의 약속을,",t.jsx("br",{}),t.jsx("em",{children:"기억할게."})]}),t.jsxs("p",{children:["같은 반, 다른 마음. 페어까지 남은 64일.",t.jsx("br",{}),"함께한 시간이 쌓이면 비어 있던 자리의 이유도 알게 됩니다."]}),t.jsxs("form",{onSubmit:In,children:[t.jsx("label",{htmlFor:"romance-name",children:"새로 온 전학생, 이름이 뭐야?"}),t.jsxs("div",{className:"romance-name-box",children:[t.jsx("input",{id:"romance-name",value:a,onChange:s=>{o(s.target.value),u("")},maxLength:12,autoComplete:"off",placeholder:"이름을 입력해 주세요","aria-describedby":"romance-name-help","aria-invalid":!!r}),t.jsx(Ue,{size:20})]}),t.jsx("small",{id:"romance-name-help",className:r?"romance-error":"",children:r||"기본 이름 없이, 당신의 이름으로 시작합니다."}),t.jsxs("button",{className:"r-primary",disabled:!a.trim(),type:"submit",children:["새로운 이야기 시작",t.jsx(pe,{size:18})]})]}),t.jsxs("div",{className:"romance-title-links",children:[t.jsxs("button",{onClick:()=>H("load"),children:[t.jsx(it,{size:16}),"이어서 하기"]}),t.jsxs("button",{onClick:()=>H("gallery"),children:[t.jsx(ge,{size:16}),"기억의 서랍"]})]}),t.jsxs("div",{className:"romance-edition",children:[t.jsx("b",{children:"5 CHAPTERS / ONE FINAL TRIAL"}),t.jsx("span",{children:"1~4장 일상과 연애 · 5장 모아 둔 기록으로 학급재판"}),t.jsx("small",{children:"새 이야기의 저장은 이전 버전과 분리됩니다. 기존 저장은 삭제하지 않습니다."})]})]}),t.jsxs("aside",{className:"romance-cast-preview",children:[t.jsxs("div",{className:"romance-featured-person",children:[t.jsx(je,{id:me}),t.jsxs("div",{children:[t.jsx("small",{children:ue[me].role}),t.jsx("h2",{children:Se(me)}),t.jsxs("p",{children:["“",ue[me].quote,"”"]})]})]}),t.jsx("div",{className:"romance-cast-tabs","aria-label":"등장인물 둘러보기",children:re.map(s=>t.jsxs("button",{"aria-pressed":me===s,onClick:()=>Ze(s),children:[t.jsx(je,{id:s}),t.jsx("span",{children:Se(s)})]},s))})]}),t.jsx("footer",{children:"등장인물·학교 생활·사건·시설은 허구입니다. / STORY EDITION 2.0"})]}),c!=="none"&&t.jsxs(un,{title:{notebook:"마음의 기록",bonds:"우리 사이",save:"약속 저장하기",load:"이어 읽을 페이지",settings:"읽기와 소리",backlog:"함께 나눈 말",menu:"잠시 책갈피를 끼워 둘까?",gallery:"기억의 서랍"}[c],onClose:Oe,children:[c==="notebook"&&(Be.length?t.jsxs("div",{className:"romance-notebook",children:[t.jsx("nav",{"aria-label":"찾아 둔 기록",children:Be.map(s=>t.jsxs("button",{"aria-pressed":(ye==null?void 0:ye.id)===s.id,onClick:()=>ne(s.id),children:[t.jsxs("span",{children:[s.code," / ",s.chapter+1,"장"]}),t.jsx("b",{children:s.name}),t.jsx("small",{children:ke[s.location].name})]},s.id))}),ye&&t.jsxs("article",{children:[t.jsx("h3",{children:ye.name}),t.jsx(Jt,{evidenceId:ye.id,visual:At(ye.id)}),t.jsx("p",{children:ye.description}),t.jsxs("div",{className:"romance-note-limit",children:[t.jsx("b",{children:"이 기록만으로 알 수 없는 것"}),t.jsx("p",{children:ye.limit})]})]})]}):t.jsxs("div",{className:"romance-empty",children:[t.jsx(Ue,{size:36}),t.jsx("h3",{children:"아직 적어 둔 기록이 없어요."}),t.jsx("p",{children:"1~4장의 자유 행동에서 직접 겪은 어긋남을 확인하면, 그때의 자료가 이곳에 남습니다. 재판은 5장에만 열립니다."})]})),c==="bonds"&&e&&t.jsx("div",{className:"romance-bonds",children:re.map(s=>t.jsxs("article",{children:[t.jsx(je,{id:s}),t.jsxs("div",{children:[t.jsxs("h3",{children:[Se(s)," ",e.focus===s&&t.jsx(ge,{size:15})]}),t.jsx("small",{children:s==="junyeon"?e.verdict==="exclude"?"개인 동행 종료":e.verdict==="forgive"?"다시 쌓는 관계":"가까워져도, 아직 망설이는 친구":ue[s].tag}),t.jsxs("label",{children:["호감 ",t.jsxs("b",{children:[e.bonds[s].affection,s==="junyeon"?` / ${St(e)}`:" / 100"]})]}),t.jsx("meter",{min:0,max:100,value:e.bonds[s].affection}),t.jsxs("label",{children:["신뢰 ",t.jsxs("b",{children:[e.bonds[s].trust," / 100"]})]}),t.jsx("meter",{min:0,max:100,value:e.bonds[s].trust})]})]},s))}),(c==="save"||c==="load")&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"romance-panel-intro",children:"자동 저장 1개 · 수동 저장 10개. 새 이야기 저장만 표시하며, 구버전 기록은 브라우저에 그대로 보존합니다."}),t.jsx("div",{className:"romance-save-grid",children:["auto",...Array.from({length:10},(s,m)=>String(m+1))].map(s=>{const m=ct(ot(s));return t.jsxs("button",{disabled:c==="save"?s==="auto"||!e:!m,onClick:()=>c==="save"?qn(s):Ln(s),children:[t.jsx("small",{children:s==="auto"?"AUTO SAVE":`SLOT ${s.padStart(2,"0")}`}),t.jsx("b",{children:m?`${m.state.name} · ${m.state.chapter+1}장`:"아직 쓰이지 않은 페이지"}),t.jsx("span",{children:m?new Date(m.savedAt).toLocaleString("ko-KR"):"새로운 약속을 남길 자리"}),ie===s&&t.jsx("em",{children:"한 번 더 누르면 기존 저장을 덮어씁니다."})]},s)})})]}),c==="settings"&&t.jsxs("div",{className:"romance-settings",children:[t.jsxs("label",{children:["대사 표시 속도",t.jsxs("select",{value:D.speed,onChange:s=>J(m=>({...m,speed:Number(s.target.value)})),children:[t.jsx("option",{value:45,children:"천천히"}),t.jsx("option",{value:24,children:"보통"}),t.jsx("option",{value:12,children:"빠르게"}),t.jsx("option",{value:0,children:"즉시 표시"})]})]}),t.jsxs("label",{children:["배경음",t.jsx("input",{type:"checkbox",checked:D.music,onChange:s=>J(m=>({...m,music:s.target.checked}))})]}),t.jsxs("label",{children:["음량",t.jsx("input",{type:"range",min:"0",max:"0.8",step:"0.05",value:D.volume,onChange:s=>J(m=>({...m,volume:Number(s.target.value)}))})]}),t.jsxs("p",{children:["Space / Enter: 대사 넘기기 · 숫자키: 화면 순서의 선택지 · Esc: 메뉴.",t.jsx("br",{}),"운영체제의 동작 줄이기 설정을 적용합니다. 자동 진행은 선택지에서 멈춥니다."]})]}),c==="backlog"&&t.jsx("div",{className:"romance-log",children:e!=null&&e.backlog.length?e.backlog.map((s,m)=>t.jsxs("p",{children:[t.jsx("b",{children:s.speaker==="player"?e.name:st(s.speaker)}),mt(s.text)]},m)):t.jsx("p",{children:"아직 나눈 대사가 없어요."})}),c==="gallery"&&t.jsxs("div",{className:"romance-gallery",children:[t.jsxs("p",{children:["새 이야기에서 만난 결말 ",M.length,"개. 이전 버전의 수집 기록도 삭제하지 않고 보존합니다."]}),M.length?M.map(s=>t.jsxs("div",{children:[t.jsx(ge,{size:18}),t.jsx("span",{children:s.split(":").map(m=>re.includes(m)?Se(m):{romance:"연애",friendship:"우정",friend:"우정",exclude:"관계 단절",forgive:"두 번째 기회",normal:"우리의 다음 페이지",alone:"나의 다음 페이지",class:"1반 친구들"}[m]??m).join(" · ")})]},s)):t.jsx("div",{className:"romance-empty",children:"아직 마지막 페이지에 도착하지 않았어요."})]}),c==="menu"&&t.jsxs("div",{className:"romance-menu",children:[e&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>H("save"),children:[t.jsx(Vt,{size:18}),"저장하기"]}),t.jsxs("button",{onClick:()=>H("notebook"),children:[t.jsx(Ue,{size:18}),"마음의 기록"]}),t.jsxs("button",{onClick:()=>H("bonds"),children:[t.jsx(ge,{size:18}),"우리 사이"]})]}),t.jsxs("button",{onClick:()=>H("load"),children:[t.jsx(it,{size:18}),"이어서 하기 ",t.jsxs("small",{children:[ur().length,"개 저장"]})]}),t.jsxs("button",{onClick:()=>H("settings"),children:[t.jsx(Ut,{size:18}),"설정"]}),t.jsxs("button",{onClick:()=>H("gallery"),children:[t.jsx(ge,{size:18}),"기억의 서랍"]}),e&&t.jsxs("button",{onClick:()=>{n(null),p(!1),Oe()},children:[t.jsx(ra,{size:18}),"제목 화면으로 · 자동 저장 유지"]}),t.jsxs("button",{className:"r-primary",onClick:Oe,children:["계속하기",t.jsx(Ht,{size:17})]}),t.jsxs("p",{children:["로맨스 스토리 2.0 / 5장 · 마지막 한 번의 학급재판",t.jsx("br",{}),"준연의 두 결말은 다른 일곱 명의 연애와 별도로 이어집니다."]})]})]}),_&&t.jsxs(un,{title:"기록 원본 보기",onClose:()=>Ie(null),children:[t.jsx(Jt,{evidenceId:_,visual:At(_)}),t.jsx("p",{children:(Kt=oe.find(s=>s.id===_))==null?void 0:Kt.limit})]}),!!qe&&(e==null?void 0:e.phase)==="trial"&&t.jsx(Oa,{eventId:`romance-${qe}`},qe),he&&t.jsx("div",{className:"romance-toast",role:"status",children:he})]})}class mr extends yn.Component{constructor(){super(...arguments);Bt(this,"state",{error:!1})}static getDerivedStateFromError(){return{error:!0}}render(){return this.state.error?t.jsxs("div",{className:"recovery",children:[t.jsx("h1",{children:"잠깐, 페이지가 접혔어요."}),t.jsx("p",{children:"저장된 기록은 그대로 있어요. 페이지를 다시 열어 주세요."}),t.jsx("button",{onClick:()=>location.reload(),children:"다시 열기"})]}):this.props.children}}sa.createRoot(document.getElementById("root")).render(t.jsx(yn.StrictMode,{children:t.jsx(mr,{children:t.jsx(hr,{})})}));
