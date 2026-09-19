import type { Scene, Line, Effect, Choice, CharacterId, StatKey, GlobalKey } from '../types';

const d = (text: string): Line[] => text.trim().split('\n').map(row => {
  const cut = row.indexOf('|');
  return { speaker: row.slice(0, cut) as Line['speaker'], text: row.slice(cut + 1) };
});
const e = (target: CharacterId | 'global', stat: StatKey | GlobalKey, amount: number): Effect => ({ target, stat, amount });
const c = (id: string, text: string, response: string, effects: Effect[], flags?: string[]): Choice => ({ id, text, response: d(response), effects, flags });

export const commonScenes: Scene[] = [
  {
    id: 'common-0', title: '프롤로그 · 증명되지 않은 전학생', location: 'gate', day: 64,
    lines: d(`narrator|인천과학고등학교 정문에서 휴대전화를 쥐었다. 학교 앱 맨 위에 ‘인천 사이언스 페어 D-64’라는 글자가 떠 있었다.
player|교무실부터 찾으면 되겠지. 그런데 본관이 어느 쪽이지?
world|휴대전화만 보고 걸으면 화단으로 들어가겠는데.
player|아, 고마워. 교무실 어디인지 알아?
world|알지. {name}, 맞아? 오늘 우리 반으로 온다는 애.
player|이름까지 알고 있네.
world|반 단체 공지에 있었어. 사진은 없어서 조금 헤맸지만.
player|날 찾고 있었어?
world|새로 오는 사람이 누군지 궁금했지. 전세계야. 나도 1학년 1반.
narrator|세계가 자신의 기타 케이스를 고쳐 멨다. 케이스에 작은 별 모양 스티커가 여러 개 붙어 있었다.
player|아침부터 연습해?
world|페어 공연 준비. 오늘부터 네가 그 단어를 엄청 자주 듣게 될 거야.
player|축제 같은 거야?
world|비슷한데, 여기서는 축제에도 실험노트를 가져와야 해.
narrator|세계는 계단 앞에서 잠깐 멈춰 내가 따라오는지 확인했다.
world|길 헷갈리면 나한테 물어봐. 다른 애한테 묻기 전에.
player|다른 애들은 길을 몰라?
world|아니. 내가 먼저 안내했으니까 기억해 달라는 거지.
narrator|교무실에서 서류를 확인한 뒤 담임을 따라 1학년 1반으로 들어갔다.
teacher|오늘부터 함께 공부할 편입생이다. 자기소개해 볼까?
player|{name}입니다. 아직 학교 지리도 모르지만, 잘 부탁드립니다.
taewoo|춤은 알아?
hyunsol|길도 모른다는데 첫 질문이 그거야?
taewoo|둘은 별개의 능력이잖아.
seoyul|맞는 말이네. 나는 이서율. 세계랑 같은 밴드부야.
world|그리고 나랑 같은 반이지. 여기 있는 애들 전부 1학년 1반이고.
junyeon|방준연이야. 그, 시간표 필요하면 남는 거 있어.
taehun|고태훈. 창가 자리는 오후에 눈부셔서 블라인드를 내려야 해.
hyunsol|최현솔. 실험실 들어올 때는 가방을 복도 보관함에 넣어.
taewoo|김태우. 댄스부. 나중에 무대 보면 이름 안 잊을 거야.
teacher|소개는 쉬는 시간에 이어 하고, 페어 안내를 다시 하겠다. 편입생에게도 처음부터 설명할 필요가 있겠지.
narrator|칠판에 ‘인천 사이언스 페어: 학생 연구와 과학문화제’라는 제목이 떴다.
teacher|우리 학교 학생들이 연구를 직접 설명하고 공개하는 행사다. 앞으로 두 달 동안 각자 맡은 부분을 함께 준비한다.
teacher|행사는 사흘이다. 첫날은 연구 심사, 둘째 날은 공개 체험과 공연, 셋째 날은 최종 발표와 폐막 행사다.
teacher|첫날에는 외부 심사위원이 포스터와 연구노트, 원자료를 함께 본다. 결과가 맞는 것만큼 과정이 설명되는지가 중요하다.
hyunsol|실험이 예상과 다르게 나와도 기록하면 되는 거죠?
teacher|그렇다. 실패 결과를 빼고 성공한 결과만 보여 주면 결론을 왜곡할 수 있다. 오차와 한계를 설명해야 한다.
junyeon|재현이 완전히 똑같지 않으면요?
teacher|허용 가능한 변동인지, 조건이 달랐는지 먼저 검토한다. 다른 팀도 같은 절차를 이해하고 따라갈 수 있어야 해.
teacher|둘째 날에는 초청한 학부모와 중학생이 방문한다. 설명은 쉬워야 하고, 관람객이 직접 하는 활동은 별도 안전 검토를 받아야 한다.
taewoo|모션센서로 춤 동작 비교하는 체험도 가능해요?
teacher|가능하다. 다만 우열을 단정하기보다 센서의 한계와 개인차를 함께 보여 주도록 해.
seoyul|영상이랑 소리 전시도 과학 전시로 인정되나요?
teacher|무엇을 측정하고 어떻게 시각화했는지 설명하면 된다. 조명과 음량, 저작권, 관람 동선도 계획서에 넣어라.
world|밴드 공연이랑 전시 발표는 시간이 따로죠?
teacher|그렇다. 공연은 오후 대강당에서 진행한다. 리허설 시간은 밴드부와 댄스부가 협의해서 제출해.
taehun|야간 관측은 구름이나 강풍 때문에 취소될 수도 있어요. 실내 프로그램을 같이 준비할게요.
teacher|좋다. 취소 기준을 미리 정하는 것도 연구와 행사 운영의 일부다. 무조건 강행하는 건 성실함이 아니야.
teacher|셋째 날에는 수정한 최종 발표와 관람객 질문에 대한 답변을 제출한다. 결과를 합산한 뒤 폐막 공연을 한다.
teacher|평가는 타당성 30, 재현성 20, 전달력과 창의성 20, 관람객 평가 15, 안전 10, 협력 5점이다.
player|우승하면 무엇을 받나요?
teacher|이 이야기에서는 후속 공동 연구 지원을 받는다. 다만 점수 때문에 학급 친구를 밀어내는 행동은 협력이 아니다.
teacher|우리 반의 전시 주제는 아직 정하지 않았다. 화학 실험, 음악, 춤, 기상관측, 시각예술을 연결할 생각이다.
teacher|{name}, 자료와 일정 기록을 맡아 보겠니? 지금 당장 모든 결정을 책임지라는 뜻은 아니다. 의견을 정리해 주면 된다.
player|학교에 대해 배우면서 할 수 있으면 해 볼게요.
teacher|좋다. 실험실은 교사 감독과 허가된 시간에만 사용한다. 방과 후 늦게 남는 일정도 사전에 신청해야 한다.
narrator|세계가 책상 모서리에 접은 종이를 놓았다. 급하게 그린 교실, 식당, 연습실 지도가 있었다.
world|자, 첫 번째 기록물. 이건 잃어버리지 마.
seoyul|밴드실만 유난히 크게 그렸네.
world|중요한 장소니까.
taewoo|댄스실은 점 하나잖아!
junyeon|화학실 문도 반대편인데…….
hyunsol|첫 자료부터 수정사항이 많네.
taehun|그러면 다 같이 고치면 되지. 아직 첫날이잖아.
narrator|종이 위에 여섯 사람의 펜이 모였다. 낯선 학교가 아주 조금 작아 보이기 시작했다.`),
    choices: [
      c('orient-team', '각자의 장소를 지도에 함께 표시해 달라고 한다.', `player|한 명씩 알려 줘. 잘못 기록하면 내가 다음에 길을 잃으니까.
taehun|그럼 관측실 가는 계단부터 그릴게.
world|좋아. 대신 밴드실 별 표시는 지우지 마.
narrator|서로 다른 글씨가 종이 한 장에 남았다. 내 이름 옆에는 ‘기록 담당’이라고 적혔다.`, [e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2), e('world', 'trust', 3), e('taehun', 'trust', 3)]),
      c('orient-world', '세계에게 먼저 밴드실을 안내해 달라고 한다.', `player|네가 먼저 안내했으니까 밴드실부터 볼게.
world|그 말 기억할게. 점심시간 비워 둬.
taewoo|벌써 선약 생겼네. 우리 쪽도 나중에 와.
narrator|세계는 지도에 작은 별을 하나 더 그렸다.`, [e('world', 'affection', 5), e('world', 'special', 3), e('taewoo', 'jealousy', 2)]),
      c('orient-dismiss', '축제쯤은 대충해도 되는 것 아니냐고 말한다.', `player|공부도 바쁜데 축제까지 그렇게 해야 해?
hyunsol|실험을 남한테 보여 주는 순간 대충할 수 없는 부분이 생겨.
seoyul|아직 귀찮은 행사로만 보일 수는 있지. 그래도 우리 작업도 한번 봐 줘.
narrator|분위기가 잠깐 굳었다. 나는 설명을 다시 읽어 보기로 했다.`, [e('global', 'harmony', -4), e('global', 'fair', -2), e('hyunsol', 'trust', -3), e('seoyul', 'affection', -2)])
    ]
  },
  {
    id: 'common-1', title: '1장 · 깨진 비커', location: 'chemistry', day: 63,
    lines: d(`narrator|화학실 문 앞에는 ‘안전교육 진행 중’이라는 종이가 붙어 있었다.
teacher|실험대에는 필요한 물건만 놓고, 복도 쪽 통로를 비워라.
hyunsol|{name}, 가방은 저 보관함. 보호안경도 먼저 써.
player|알겠어. 여기 앉으면 돼?
junyeon|내 옆자리 비어 있어. 아니, 현솔 옆도 괜찮고.
hyunsol|어디 앉든 실험대 끝에는 물건 올리지 마.
narrator|준연은 프린트 세 장을 순서대로 펼쳤다. 귀퉁이마다 작고 반듯한 글씨가 있었다.
player|준비를 많이 했네.
junyeon|뭐부터 해야 할지 잊어버릴까 봐 써 둔 거야.
hyunsol|그럼 읽으면서 해. 손부터 움직이지 말고.
teacher|지금은 기구 다루기 연습이다. 시범 용액도 함부로 만지지 말고 흘리면 즉시 알려라.
narrator|교사는 옆 조의 보호안경을 확인하러 갔다. 준연이 메스실린더를 기울여 보았다.
hyunsol|방준연, 눈높이.
junyeon|응. 지금 맞추고 있어.
hyunsol|위에서 내려다보면 눈금이 다르게 보이잖아.
junyeon|알아. 노트에도 썼어.
player|여기 물높이 읽는 그림도 그렸네.
junyeon|내가 직접 그린 건데…… 보여 줄게.
narrator|준연이 노트를 당기는 순간 소매가 비커 옆면을 스쳤다.
narrator|짧은 마찰음 뒤에 유리가 바닥에 부딪혔다. 투명한 액체가 의자 다리 아래로 퍼졌다.
junyeon|아…… 미안, 내가 치울게.
hyunsol|움직이지 마.
junyeon|큰 조각만 먼저—
hyunsol|손 대지 말라고. 장갑 꼈다고 유리까지 안전한 건 아니야.
junyeon|다들 보잖아. 내가 또…….
hyunsol|그래서 더 조용히 앉아 있어. 발밑도 확인 못 했으면서.
narrator|준연의 얼굴이 붉어졌다. 손을 놓을 곳을 찾지 못한 채 양팔을 들고 있었다.
player|다친 데 있어?
junyeon|없는 것 같아. 그냥 놀라서.
hyunsol|추측하지 말고 선생님한테 확인받아. {name}, 입구 쪽으로 사람이 들어오지 않게 해 줘.
junyeon|선생님 부르면 기록 남겠지.
hyunsol|사고를 기록해야 다음 사람이 같은 실수 안 해.
player|그건 맞아. 그런데 준연한테 말하는 목소리는 조금 낮춰도 될 것 같아.
hyunsol|……지금은 치우는 게 먼저야.
narrator|교사가 소리를 듣고 다가왔다. 누구도 바닥으로 손을 뻗지 않게 주변을 살폈다.
teacher|모두 한 걸음씩 떨어져라. 무엇이 들어 있었는지 라벨부터 확인하겠다.
narrator|준연은 계속 내 눈을 피했다. 현솔은 바닥을 보면서도 준연의 신발 쪽을 살피고 있었다.`),
    choices: [
      c('beaker-safe', '통로를 막고 교사에게 상황을 설명한 뒤 준연의 상태를 확인한다.', `player|아무도 이쪽으로 오지 않게 할게요. 준연이 손이나 옷에 튄 곳도 확인해 주세요.
teacher|좋다. 기구 파손은 정해진 절차대로 처리하마.
junyeon|고마워. 나 때문에 네 첫 실험까지 망친 것 같아서…….
hyunsol|실험은 다시 하면 돼. 네가 다치면 그게 더 큰 문제야.`, [e('junyeon', 'affection', 2), e('junyeon', 'trust', 5), e('junyeon', 'special', -3), e('hyunsol', 'trust', 4), e('global', 'safety', 8), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['safe-response']),
      c('beaker-clean', '괜찮다고 달래며 준연과 조각을 먼저 치우려 한다.', `player|큰 조각만 치우면 통로가 덜 위험하겠지?
teacher|멈춰라. 노출 위험을 확인하고 적절한 도구로 처리해야 한다.
hyunsol|도와주려는 마음이랑 안전한 행동은 다른 거야.
junyeon|내가 급하게 굴어서 너도…… 미안해.`, [e('junyeon', 'affection', 2), e('junyeon', 'trust', -2), e('hyunsol', 'trust', -5), e('global', 'safety', -12)], ['safety-strike']),
      c('beaker-joke', '“첫날부터 유명해지네”라며 웃는다.', `player|이 정도면 반에서 다 알겠다.
junyeon|……나도 알고 있어.
hyunsol|재미없어. 서 있을 거면 통로라도 비켜.
narrator|준연은 노트를 접었다. 아까 보여 주려던 그림도 함께 가려졌다.`, [e('junyeon', 'affection', -6), e('junyeon', 'trust', -9), e('junyeon', 'special', 9), e('hyunsol', 'trust', -3), e('global', 'harmony', -6)], ['public-humiliation'])
    ]
  },
  {
    id: 'common-2', title: '2장 · 첫 번째 지도', location: 'classroom', day: 60,
    lines: d(`narrator|점심 종이 울리자 교실 의자가 한꺼번에 움직였다. 가방 속에는 네 번이나 고친 학교 지도가 있었다.
taewoo|오늘은 정말 길 안 잃겠지?
player|어제는 자료실이 옮겨진 걸 몰랐어.
hyunsol|문에 이전 안내문도 있었어.
seoyul|안내문 글자가 너무 작긴 했어. 그것도 디자인 문제야.
world|결론은 내가 데려가면 된다는 거네.
taehun|본인이 찾아가 보는 것도 필요하지 않을까?
world|태훈은 너무 자립적으로 살아.
junyeon|식당이 지금 붐빌 텐데…… 나는 조금 뒤에 갈 거야.
player|혼잡한 시간 피하는 거야?
junyeon|그런 것도 있고. 자리가 애매하면 좀 그래서.
narrator|준연이 손가락으로 식권 모서리를 접었다. 태우는 휴대전화 화면을 옆으로 돌려 내게 보여 주었다.
taewoo|이거 봐. 여기서 회전한 다음에 무게중심이 뒤로 빠지지?
player|화면만 보면 잘 모르겠는데.
taewoo|그럼 중앙정원으로 와. 직접 보여 주면 바로 알아.
seoyul|잔디에서 돌다가 미끄러지지 마.
taewoo|포장된 데서 할 거야. 나도 생각은 해.
taehun|나는 도서관에 예약 도서 찾으러 가. 같이 오면 지도 확인은 해 줄 수 있어.
player|무슨 책인데?
taehun|기상관측 입문서랑 시집. 둘 다 반납 예정일이 똑같아서 기억하기 좋아.
world|나는 밴드실. 점심 먹고 잠깐 마이크 테스트할 거야.
seoyul|그리고 테스트가 끝나면 음량 기록도 해야 해. 자꾸 노래만 하고 나오지 말고.
world|내 노래가 그렇게 빨리 끝나면 아쉽지 않아?
seoyul|자료가 비어 있으면 아쉬워.
hyunsol|도서관에서 우리 실험 참고문헌도 찾아 줄 수 있어?
taehun|제목 보내 줘. 대출 가능하면 가져올게.
narrator|혼자였으면 교실에 남았을 점심시간이었다. 오늘은 갈 수 있는 곳이 여러 개였다.
player|각자 부탁을 전부 들으면 점심을 못 먹겠네.
taewoo|그러니까 선택해. 댄스부 일정은 기다려 주지 않아.
world|점심시간마다 어디 있는지 정도는 알려 줘도 되잖아.
seoyul|그건 의무가 아니지. 아직 길 안내하는 중이잖아.
world|알아. 궁금해서 그런 거야.
junyeon|난 정말 아무 때나 괜찮아. 나 때문에 바꾸지 않아도 돼.
narrator|괜찮다는 말이 사람마다 다르게 들렸다. 오늘 누구 옆에 앉을지 결정해야 했다.`),
    choices: [
      c('map-junyeon', '준연에게 함께 먹자고 묻고 나머지 부탁은 시간표에 정리한다.', `player|준연아, 자리 같이 찾을래? 다른 부탁은 방과 후에 하나씩 할게.
junyeon|응. 같이 찾으면…… 조금 덜 애매할 것 같아.
taewoo|좋아. 그럼 내 영상은 나중에 봐 줘.
narrator|교실 문을 나서기 전에 약속 시간을 적었다. 아무에게나 동시에 갈 수 있다고 말하지 않기로 했다.`, [e('junyeon', 'affection', 4), e('junyeon', 'trust', 4), e('junyeon', 'special', -4), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)]),
      c('map-taewoo', '태우와 중앙정원에서 영상을 보고 함께 점심을 먹는다.', `player|영상 먼저 보자. 단, 식사 시간은 남겨 둬.
taewoo|좋아. 보는 눈부터 키워 주지.
world|약속 잘 기억하네. 다음에는 밴드실도 와.
narrator|태우가 만족스럽게 휴대전화를 들었다. 준연은 혼자 식권을 챙겼지만 다음 약속까지 사라진 것은 아니었다.`, [e('taewoo', 'affection', 5), e('taewoo', 'trust', 3), e('world', 'jealousy', 2)]),
      c('map-overpromise', '세 사람 모두에게 지금 바로 가겠다고 말한다.', `player|식당 갔다가 정원 갔다가 도서관도 갈게. 다 할 수 있어.
taehun|점심시간이 그렇게 길지는 않은데.
junyeon|기다려야 하는 건지 몰라서…… 먼저 먹을게.
narrator|시간을 계산하지 않은 약속은 세 개의 애매한 기다림이 됐다.`, [e('junyeon', 'trust', -4), e('taewoo', 'trust', -4), e('taehun', 'trust', -4), e('global', 'harmony', -4)], ['broken-promise'])
    ]
  },
  {
    id: 'common-3', title: '3장 · 우리를 움직이는 반응', location: 'classroom', day: 58,
    lines: d(`narrator|칠판에는 ‘1반 전시 주제 최종 회의’라고 적혀 있었다. 세계가 칠판 한가운데 커다란 무대를 그렸다.
world|첫 10초에 재미있어 보여야 사람들이 들어와. 음악으로 시작하자.
hyunsol|들어온 다음에 실험이 설명되지 않으면 소용없어.
world|설명할 사람도 안 들어오면 소용없지.
taewoo|관객이 직접 움직이면 둘 다 해결돼. 모션센서 체험을 입구에 두자.
seoyul|입구가 막힐 거야. 움직이는 공간과 관람 동선을 나눠야 해.
taehun|관측자료를 보여 주는 화면은 햇빛을 피해야 읽기 편할 거고.
player|그러면 지금 장소 배치부터 정하는 거야, 주제부터 정하는 거야?
hyunsol|주제. 아직 그것도 없어.
narrator|준연은 종이에 무언가를 쓰다가 지웠다. 내가 보자 손바닥으로 가렸다.
player|준연이는 어떤 생각이야?
junyeon|내 건 그냥 실험 이름이라서. 다 같이 쓰기엔 이상할 수도 있어.
world|일단 말해 봐. 이상하면 바꾸면 돼.
junyeon|반응속도. 같은 양을 준비해도 조건이 다르면 시간이 달라지잖아.
taewoo|사람 반응시간이랑 춤 시작하는 박자도 연결할 수 있겠다.
hyunsol|화학반응속도랑 사람의 반응시간은 같은 개념은 아니야. 구역을 구분해야 해.
seoyul|같은 단어의 다른 뜻으로 연결하는 전시라면 가능하지.
taehun|연결하되 같다고 말하지 않는 거네.
player|그러면 주제는 ‘우리를 움직이는 반응’ 어때?
world|영어로 RE:ACTION. 포스터에 잘 보이겠다.
seoyul|콜론을 전시 구역 사이를 이어 주는 표식으로 써도 좋고.
junyeon|내 말을 쓸 거야?
player|네가 시작한 얘기잖아. 회의록에도 그렇게 적을게.
narrator|준연이 가렸던 종이를 조금 앞으로 밀었다. 반응시간을 비교하는 작은 도표였다.
hyunsol|화학 시연은 선생님이 승인한 절차만 쓰자. 관객이 시약을 직접 섞는 구성은 빼고.
taewoo|춤 체험은 점수로 외모나 체형을 평가하지 말자. 동작 위치만 보여 주면 돼.
taehun|날씨는 모든 결과를 설명하는 만능 변수가 아니야. 관련 있는 항목만 연결해야 해.
seoyul|미술은 화면을 꾸미는 마지막 작업으로 넣지 말아 줘. 정보 배치부터 같이 해야 해.
world|그러면 나는 홍보랑 공연 연결. 영상에 얼굴이 나오는 사람은 먼저 동의받고.
player|동의 여부도 표에 적어 둘게.
junyeon|발표는…… 여러 명이 나눠 하면 안 될까?
hyunsol|가능하지. 대신 맡은 부분은 서로 설명할 수 있어야 해.
narrator|교실 뒤에서 듣고 있던 담임이 고개를 끄덕였다.
teacher|좋다. 오늘은 가장 큰 아이디어보다, 실제로 함께 할 수 있는 계획을 정해 보자.
narrator|투표할 종이를 나누었다. 종이 위에는 같은 제목 아래 서로 다른 여섯 개의 밑그림이 있었다.`),
    choices: [
      c('theme-combine', '준연의 제안을 출발점으로 구역별 목적과 담당자를 함께 정한다.', `player|이름은 하나로 하고 설명은 구역마다 정확히 나누자. 만든 사람도 전부 표시하고.
seoyul|좋아. 그러면 영상이 실험을 덮지 않고 이어 줄 수 있겠다.
junyeon|내 도표도 써도 돼. 다시 깔끔하게 그릴게.
hyunsol|회의록 보내 줘. 내가 절차 부분 확인할게.`, [e('junyeon', 'affection', 3), e('junyeon', 'trust', 4), e('seoyul', 'trust', 3), e('hyunsol', 'trust', 3), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['team-success']),
      c('theme-spectacle', '세계의 공연 중심 제안으로 일단 관심을 모은다.', `player|우선 눈길을 끌자. 설명은 다음에 붙이면 되니까.
world|좋아. 그런데 진짜 설명도 만들기는 해야 해.
hyunsol|다음으로 미뤄진 일이 마지막까지 안 되는 걸 자주 봤어.
narrator|홍보 일정은 빠르게 잡혔지만 실험 구성표에는 빈칸이 남았다.`, [e('world', 'affection', 5), e('global', 'reputation', 4), e('hyunsol', 'trust', -3), e('global', 'fair', -1)]),
      c('theme-exclude', '준연은 실수가 많으니 기록에서만 돕게 하자고 제안한다.', `player|준연이는 뒤에서 기록만 하면 안전하지 않을까?
junyeon|……내가 말한 건데 내가 설명하면 안 되는 거야?
hyunsol|역할은 잘하는 걸 보고 정해. 비커 하나로 사람 전체를 판단하지 말고.
narrator|회의록의 담당자 칸을 채우려던 손이 멈췄다.`, [e('junyeon', 'affection', -5), e('junyeon', 'trust', -8), e('junyeon', 'special', 8), e('hyunsol', 'trust', -3), e('global', 'harmony', -7)], ['public-humiliation'])
    ]
  },
  {
    id: 'common-4', title: '4장 · 두 사람의 밴드', location: 'band', day: 53,
    lines: d(`narrator|밴드실 문 너머로 같은 네 마디가 세 번째 들렸다. 문을 두드리자 음악이 한꺼번에 멈췄다.
world|왔네. 지금 딱 네 의견이 필요했어.
seoyul|의견을 묻기 전에 어느 버전인지부터 알려 줘야지.
player|두 버전이 있어?
world|내가 노래하기 편한 버전, 서율이 아름답다고 생각하는 버전.
seoyul|리듬이 다르게 들리는 버전이야. 목소리를 가리려는 게 아니고.
narrator|서율이 키보드를 눌렀다. 짧은 음들이 멀리 번지는 것처럼 이어졌다.
player|첫 번째는 바로 따라 부를 수 있을 것 같고, 이건 조금 오래 듣고 싶어.
world|결국 둘 다 좋다는 거네?
player|쓰는 장면이 다를 것 같다는 뜻이야.
seoyul|입구 영상에는 반복이 선명한 쪽. 공연 마지막에는 여백이 있는 쪽.
world|좋아. 그러면 두 버전 다 만들어야 하잖아.
player|일정표에 넣으면 되지.
narrator|세계가 웃으며 내 앞에 마이크 스탠드를 조금 가까이 옮겼다.
world|그럼 테스트 관객 해 줘. 후렴 들으면서 딴생각하면 바로 알아챌 거야.
player|내 표정 보면서 노래하면 가사 틀리지 않아?
world|너 때문에 틀리면 네가 책임져.
seoyul|녹음 시작할게. 두 사람 얘기는 따로 저장하지 않을 거야.
narrator|노래가 끝나자 세계는 내 반응을 가장 먼저 살폈다. 서율은 파형과 출력 음량을 확인했다.
player|후렴 마지막 음이 좋아. 멈춘 다음에도 남는 느낌이야.
world|그거 일부러 그렇게 불렀어.
seoyul|내 편곡 덕분이기도 하고.
world|알아. 크레디트 써 줄게, 이서율 님.
narrator|서율의 노트북에는 공연 영상 초안이 열려 있었다. 글자와 색이 아직 불규칙하게 바뀌었다.
player|이것도 보여 줘도 되는 거야?
seoyul|여기서 보는 건 괜찮아. 아직 다른 데 보내거나 찍지는 말아 줘.
world|저 부분만 5초 올리면 반응 좋겠다. 어차피 다 같이 만든 행사잖아.
seoyul|함께 만든다고 전부 공개해도 된다는 뜻은 아니야.
world|내 얼굴도 들어가 있는데?
seoyul|그래서 네 동의도 따로 받고 있어. 내 작업에 대한 동의도 필요해.
narrator|세계가 휴대전화를 내려놓았다. 웃고 있었지만 기타 피크를 돌리는 손이 빨라졌다.
world|{name}, 네 생각은 어때? 티저를 빨리 올리자는 것뿐인데.
player|홍보 일정은 촉박하지만, 아직 확인 안 된 부분이 있는 거네.
seoyul|완성된 구간만 따로 내보내는 건 할 수 있어. 오늘은 목록부터 정하면 좋겠어.
narrator|서로에게 하고 싶은 말이 내 쪽을 거쳐 갔다. 나는 두 사람 중 심판이 된 기분이 들었다.`),
    choices: [
      c('band-permission', '공개 가능한 구간과 크레디트를 두 사람과 함께 정한다.', `player|서율이 승인한 구간만 쓰고, 세계가 얼굴과 음성을 확인한 뒤 올리자.
world|조금 늦어지겠네. 그래도 내 목소리도 직접 고를 수 있는 거지?
seoyul|응. 편곡 이름도 제대로 넣고.
narrator|두 사람은 처음으로 같은 타임라인을 보며 수정할 부분을 표시했다.`, [e('world', 'trust', 4), e('world', 'special', -2), e('seoyul', 'affection', 3), e('seoyul', 'trust', 6), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['privacy-respected', 'team-success']),
      c('band-share', '세계에게 미완성 파일을 몰래 전달한다.', `player|짧게 쓰면 서율도 나중에 이해하겠지.
world|진짜 보내도 돼? 네가 얘기해 둘 거야?
seoyul|……방금 전송 소리 났어. 내가 하지 말라고 한 거 들었잖아.
narrator|서율이 노트북을 닫았다. 음악이 끊긴 뒤에는 팬 돌아가는 소리만 남았다.`, [e('world', 'affection', 3), e('world', 'special', 4), e('seoyul', 'trust', -12), e('seoyul', 'affection', -5), e('global', 'ethics', -6)], ['unauthorized-share']),
      c('band-withdraw', '괜히 휘말리기 싫으니 둘이 알아서 하라고 한다.', `player|음악은 너희가 더 잘 아니까. 결정되면 알려 줘.
seoyul|음악 문제가 아니라 공개 범위를 정하는 문제야.
world|넌 의견이 하나도 없어?
narrator|나는 일정표만 챙겼다. 작업할 시간은 남았지만 함께 앉을 자리가 멀어진 것 같았다.`, [e('world', 'trust', -3), e('seoyul', 'trust', -3), e('global', 'fair', -3), e('global', 'harmony', -2)])
    ]
  },
  {
    id: 'common-5', title: '5장 · 여덟 번의 카운트', location: 'dance', day: 48,
    lines: d(`narrator|댄스연습실 거울 아래에는 테이프로 표시한 사각형이 있었다. 태우가 그 안에 서서 팔을 들었다.
taewoo|카메라에 전신 들어와? 발까지 보여야 해.
player|응. 지금 빨간 점이 어깨 따라 움직이는데.
taewoo|관절 위치 추정값이야. 내 몸속을 보는 마법 카메라는 아니고.
player|설명부터 그렇게 할 생각이야?
taewoo|중학생들한테는 기억에 남겠지.
narrator|태우가 짧은 동작을 끝내자 화면에 팔꿈치 각도와 이동 경로가 표시됐다.
player|실제로 본 각도랑 조금 다른 것 같아.
taewoo|가려진 관절은 오차가 커져. 그래서 이 숫자 하나로 춤을 잘춘다고 평가하면 안 돼.
player|그런 설명도 네가 준비했어?
taewoo|내가 춤만 추는 줄 알았냐?
player|지금은 춤도 아직 제대로 못 봤는데.
taewoo|그럼 집중해. 특별 관객은 딴 데 보면 안 돼.
narrator|음악이 시작됐다. 태우의 발이 박자보다 조금 먼저 준비하고 다음 순간 정확히 바닥을 눌렀다.
player|여기서는 몸이 먼저 움직인 것 같아.
taewoo|다음 박자를 준비한 거야. 자, 너도 해 봐.
player|나는 구경만 하러 온 줄 알았는데.
taewoo|체험이 작동하는지 보려면 초보자도 해 봐야지.
narrator|나는 표시 안으로 들어갔다. 첫 동작에서 오른발과 왼발을 반대로 내밀었다.
taewoo|좋아. 두 박자 늦은 것만 빼면 시작은 했네.
player|칭찬이 짧다.
taewoo|앞으로 길어질 여지가 많다는 뜻이야.
narrator|태우가 내 옆으로 다가왔다. 바로 손을 대지 않고 거울 속 내 자세를 가리켰다.
taewoo|어깨 방향 조금만 바꿔도 돼? 불편하면 말로 설명할게.
player|잠깐. 발 위치부터 다시 기억할게.
world|여기서 둘이 뭐 해?
narrator|문에 기대 선 세계의 손에는 대강당 예약표가 있었다.
taewoo|체험 테스트. 관객이 필요하면 들어와.
world|{name}이 테스트 관객인 곳이 많네.
player|오늘 일정표에 적었어. 밴드 리허설 전까지는 시간 있어.
world|알아. 그냥 생각보다 재미있어 보여서.
taewoo|그럼 세계도 해. 내 옆자리보다 센서 앞이 더 넓거든.
narrator|세계가 내 쪽을 잠깐 보았다. 태우는 음악을 처음으로 되돌렸다.
taewoo|둘 다 참가하면 비교 영상도 찍을 수 있어. 얼굴 공개는 따로 물을 거고.
player|그러면 먼저 촬영 범위부터 정하자. 움직임 데이터만 남기는 것도 가능하지?`),
    choices: [
      c('dance-together', '세계도 초대해 동의를 확인하고 세 사람의 체험 데이터를 비교한다.', `player|누가 더 잘하는지보다 센서가 어떤 동작을 놓치는지 보자.
taewoo|좋아. 내가 옆으로 도는 부분에서 오차가 생길 거야.
world|좋아, 대신 내 첫 동작 실패한 건 홍보 영상에 쓰지 마.
narrator|웃음이 터진 뒤 촬영 동의 범위를 함께 표시했다. 테스트 노트에는 실패도 빠짐없이 남았다.`, [e('taewoo', 'affection', 3), e('taewoo', 'trust', 5), e('world', 'trust', 4), e('world', 'jealousy', -3), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['team-success']),
      c('dance-close', '태우에게 자세를 직접 교정해 달라고 한다.', `player|어깨 방향만 도와줘. 나머지는 한번 해 볼게.
taewoo|좋아. 여기. 생각보다 긴장 많이 했네.
world|둘이 계속해. 예약표는 책상에 둘게.
narrator|세계가 문을 닫았다. 태우는 카운트를 세면서도 내 표정을 한 번 확인했다.`, [e('taewoo', 'affection', 6), e('taewoo', 'trust', 2), e('world', 'jealousy', 5), e('world', 'special', 3)]),
      c('dance-taunt', '센서 점수가 낮은 세계를 태우와 비교하며 놀린다.', `player|세계는 무대에선 노래만 해야겠다.
world|센서 오차가 있다고 방금 들었는데.
taewoo|그렇게 비교하라고 만든 건 아니야. 내 이름 끌어와서 놀리지 마.
narrator|나는 농담이라고 덧붙였지만 두 사람 모두 다음 동작을 시작하지 않았다.`, [e('world', 'affection', -4), e('world', 'trust', -5), e('taewoo', 'trust', -4), e('global', 'harmony', -5)]),
      c('dance-unsafe', '준비운동과 공간 확인을 건너뛰고 회전 점프를 따라 하며 촬영을 시작한다.', `player|쉬운 동작만 하면 재미없잖아. 아까 네가 한 회전부터 찍어 보자.
narrator|급하게 몸을 돌리다 표시 밖으로 발을 디뎠다. 신발이 센서 케이블에 걸렸고 태우가 즉시 촬영을 멈췄다.
taewoo|멈춰. 주변 확인도 안 하고 배운 적 없는 동작을 따라 하면 다쳐. 안전 점검부터 다시 할 거야.
world|괜찮은지 먼저 확인받아. 재미있는 영상보다 네가 다치지 않는 게 중요해.`, [e('taewoo', 'trust', -6), e('world', 'trust', -4), e('global', 'safety', -15), e('global', 'fair', -3)], ['safety-strike'])
    ]
  },
  {
    id: 'common-6', title: '6장 · 구름과 문장', location: 'observatory', day: 42,
    lines: d(`narrator|기상관측실 창밖에는 얇은 구름이 길게 펼쳐져 있었다. 태훈은 측정 기록과 시집을 번갈아 보고 있었다.
player|한 번에 두 권을 읽는 거야?
taehun|한쪽은 수치를 확인하고 다른 쪽은 눈을 쉬게 해 줘.
player|시를 읽으면 눈이 쉬어?
taehun|마음이 쉬는 건가. 표현을 고칠게.
narrator|태훈이 웃으며 노트북을 내 쪽으로 돌렸다. 날짜별 온도와 습도 그래프가 있었다.
taehun|화학실에서 받은 질문을 정리했어. 반응시간이 왜 달라졌는지 알아보자는 거지?
player|응. 준연이가 날씨 때문일 수도 있냐고 물었어.
taehun|실내에서 조건을 통제한 용액이라면 바깥 습도만으로 설명하기는 어려워. 용액 온도와 준비 과정을 먼저 비교해야 해.
player|그럼 이 기상자료는 필요 없어?
taehun|관련성을 확인할 참고자료는 돼. 근거 없이 원인이라고 결론 내리지 않으면 되고.
player|모든 답을 바로 안 내놓는 게 오히려 어렵네.
taehun|모른다고 적어 두는 칸도 있어야 관측일지지.
narrator|태훈이 시집을 옮기는 순간 접힌 종이가 바닥으로 떨어졌다. 첫 줄에 ‘오늘의 구름은 말을 아낀다’고 쓰여 있었다.
player|떨어졌어.
taehun|아. 그건…… 자료는 아니야.
player|직접 쓴 거야?
taehun|응. 아직 다 쓴 건 아니고.
narrator|태훈은 손을 내밀다가 멈췄다. 내가 얼마나 읽었는지 묻고 싶은 표정이었다.
junyeon|저기, 들어가도 돼?
player|응. 준연아, 여기.
junyeon|실험 기록 다시 가져왔어. 내 계산이 틀렸으면 말해 줘.
taehun|계산보다 조건부터 같이 보자. 첫날엔 용액 온도를 언제 쟀어?
junyeon|시작 10분 전에. 다른 날은 바로 직전에 쟀고.
player|그러면 비교 기준이 같지는 않네.
junyeon|역시 내 잘못이었구나.
taehun|누구 잘못인지 정하기 전에 빠진 조건을 찾은 거야.
junyeon|그런 식으로 말해 주니까 좀…… 덜 무서워.
narrator|태훈이 기록지 맨 아래에 ‘추가 확인 필요’라고 적었다. 단정하지 않은 문장은 이상하게 단단해 보였다.
player|네 시도 관측일지랑 비슷해?
taehun|조금. 수치로는 표현할 수 없는 걸 따로 적어 두는 거니까.
junyeon|나도 읽어도 되는 거야?
taehun|완성하면 보여 줄게. 지금은 바람만 불어도 흩어질 것 같아서.
narrator|바람은 닫힌 창문 밖에만 있었다. 태훈은 내 손에 들린 종이를 조심스럽게 바라봤다.`),
    choices: [
      c('cloud-return', '종이를 돌려주고 자료의 불확실성과 창작의 경계를 함께 존중한다.', `player|완성되면 네가 보여 줘. 지금은 추가 실험에서 맞출 조건부터 적자.
taehun|고마워. 그 말은 시에 써도 될까?
junyeon|그럼 내가 온도 확인 시점을 통일해 볼게.
narrator|태훈은 종이를 시집 안에 넣었다. 다음 페이지를 보여 주고 싶은 사람으로 남았으면 좋겠다고 생각했다.`, [e('taehun', 'affection', 3), e('taehun', 'trust', 6), e('taehun', 'special', 4), e('junyeon', 'trust', 3), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['privacy-respected']),
      c('cloud-read', '시의 나머지를 읽고 누구를 생각하며 썼는지 묻는다.', `player|‘다가오는 발소리’는 누구야?
taehun|내가 보여 준 게 아닌데 그렇게 물으면…… 대답하기 어려워.
junyeon|{name}, 돌려주는 게 좋을 것 같아.
narrator|태훈이 종이를 접는 소리가 생각보다 크게 들렸다.`, [e('taehun', 'trust', -7), e('taehun', 'affection', -2), e('junyeon', 'trust', -2)], ['privacy-broken']),
      c('cloud-dismiss', '문학보다 확실한 과학에 집중하라고 한다.', `player|페어가 급하니까 시는 나중에 써도 되잖아.
taehun|내 시간을 전부 네 일정표에 넣은 적은 없어.
junyeon|자료는 이미 다 정리해 줬는데…….
narrator|태훈은 시집을 가방 깊숙이 넣었다. 이후 설명은 정확했지만 더 짧아졌다.`, [e('taehun', 'affection', -6), e('taehun', 'trust', -5), e('taehun', 'special', -8), e('global', 'harmony', -3)], ['erased-sentence'])
    ]
  },
  {
    id: 'common-7', title: '7장 · 야간 자습', location: 'library', day: 36,
    lines: d(`narrator|도서관 시계가 저녁 여덟 시를 가리켰다. 허가받은 공동 자습 시간이 끝나려면 한 시간이 남아 있었다.
taewoo|문제 하나 푸는 데 노래 두 곡이 끝났어.
hyunsol|노래를 안 들으면 더 빨리 풀겠지.
taewoo|박자가 있으면 집중된다고.
seoyul|지금 발끝도 박자 타고 있어. 책상이 떨려.
narrator|태우가 의자를 조금 뒤로 옮겼다. 세계는 내 옆 의자에 가방을 놓아 두었다.
world|여기 앉아. 아까 남겨 놨어.
player|나 준연이랑 풀이 비교하기로 했는데.
world|이쪽에서 해도 되잖아. 자리 두 개 있네.
junyeon|나는 다른 데서 해도 돼. 서 있는 건 아니고…….
taehun|서로 허락하기 전에 먼저 누가 무엇을 약속했는지 확인하면 편할 것 같아.
player|준연이랑 20분. 그다음엔 세계 보고서 문장을 보기로 했어.
world|내 약속도 기억하고 있었네.
player|일정표에 적었잖아.
world|그거랑 기억하는 건 조금 다르지.
narrator|준연은 풀이를 펼쳤다. 계산식 마지막 줄의 단위가 맞지 않았다.
junyeon|여기부터 값이 계속 이상해. 다른 식은 맞는 것 같은데.
hyunsol|단위 환산에서 한 자리 밀렸네.
junyeon|아, 맞다. 이런 걸 또 놓쳤네.
student|준연이는 풀이를 길게 쓰고 마지막에서 틀리더라.
narrator|뒤쪽에서 작은 웃음이 났다. 준연은 지우개를 잡고 정답뿐 아니라 중간 풀이까지 지우기 시작했다.
player|잠깐, 위에 건 남겨 둬. 과정이 틀린 건 아니잖아.
junyeon|그래도 틀렸으면 틀린 거니까.
hyunsol|전체를 지우면 어디서 실수했는지 못 봐. 고칠 줄만 표시해.
seoyul|색을 다르게 쓰면 보일 거야. 파란 펜 빌려줄까?
junyeon|응. 고마워.
narrator|세계가 물병을 내 앞에 놓았다. 내 이름이 적힌 작은 포스트잇이 붙어 있었다.
world|아까 안 마시길래. 목소리 갈라지면 설명하기 힘들잖아.
player|고마워. 그런데 내 물병처럼 표시까지 할 필요는 없는데.
world|다른 사람이 가져가면 곤란하니까.
taewoo|물병도 약속이 있는 교실이네.
taehun|자습 끝나면 모두 함께 내려갈래? 복도 조명이 일찍 꺼지는 구간이 있어.
hyunsol|감독 선생님 확인 받고 가야지. 실험실은 오늘 들르지 말고.
narrator|나는 남은 시간을 확인했다. 한 사람을 챙기려고 다른 사람의 약속을 잊지 않으려면 말이 필요했다.
junyeon|혹시 너무 늦어지면 나중에 해도 돼. 진짜로.`),
    choices: [
      c('study-keep', '준연과 약속한 시간을 지키고 세계에게 다음 시간을 다시 알려 준다.', `player|지금 20분은 준연이랑 하기로 했어. 세계야, 그다음에 보자. 늦어지면 먼저 말할게.
world|……알겠어. 끝났다는 말은 해 줘.
junyeon|그럼 지운 부분 말고, 남은 식부터 설명해 볼게.
narrator|준연이 풀이를 읽는 동안 세계는 자기 보고서를 정리했다. 기다리는 이유가 서로에게 보였다.`, [e('junyeon', 'affection', 3), e('junyeon', 'trust', 5), e('junyeon', 'special', -4), e('world', 'trust', 4), e('world', 'special', -3), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['boundary-set']),
      c('study-switch', '세계가 기다리니 준연과의 약속을 미루고 옆에 앉는다.', `player|준연아, 이것만 먼저 보고 돌아올게.
junyeon|응. 얼마나 걸리는지만…… 아니, 괜찮아.
world|내 거부터? 고마워. 여기 표시한 문장 봐 줘.
narrator|서율이 준연에게 빈 의자를 내주었다. 나는 돌아갈 시간을 정하지 못한 채 보고서를 펼쳤다.`, [e('world', 'affection', 4), e('world', 'special', 5), e('junyeon', 'trust', -6), e('junyeon', 'special', 5), e('global', 'harmony', -3)], ['broken-promise']),
      c('study-rescue', '준연이 혼자서는 아무것도 못 한다며 문제를 대신 다 풀어 준다.', `player|내가 풀어 줄 테니까 옮겨 적어. 네가 하면 또 늦어질 거야.
junyeon|……그렇게까지 말할 필요는 없잖아.
hyunsol|풀이를 이해해야 다음 문제를 풀지. 답을 대신 쓰면 공부가 아니야.
narrator|준연은 내가 쓴 종이를 받았지만 공책에 옮기지는 않았다.`, [e('junyeon', 'affection', -3), e('junyeon', 'trust', -6), e('junyeon', 'special', 7), e('hyunsol', 'trust', -3)], ['public-humiliation'])
    ]
  },
  {
    id: 'common-8', title: '8장 · 재현되지 않는 반응', location: 'chemistry', day: 30,
    lines: d(`narrator|중간 점검을 앞둔 화학실에서 타이머 세 개가 나란히 놓였다. 기록된 반응시간은 서로 달랐다.
junyeon|처음에 나온 값하고 차이가 너무 커. 횟수를 늘렸는데 더 벌어졌어.
hyunsol|큰 값을 지우지 말고 그대로 둬. 준비 과정을 비교해야 해.
world|내일 보여 줄 영상은 이미 처음 실험으로 편집했는데.
seoyul|숫자 자막은 바꿀 수 있어. 시간이 걸릴 뿐이야.
taewoo|모션센서도 처음엔 같은 동작을 다르게 읽었어. 원인을 찾으면 설명할 거리가 되지 않을까?
junyeon|그건 장비 문제였잖아. 이건 내가 손으로 한 거라서.
player|손으로 했다는 이유로 네 탓이라고 정해지는 건 아니야.
taehun|원자료부터 순서대로 보자. 용액 온도를 재는 시점이 달랐다는 건 확인했지?
hyunsol|응. 시작 신호도 사람마다 달라. 섞기 시작할 때 누른 조, 섞고 난 뒤 누른 조가 있어.
player|준비 시간, 측정 시작점, 용액 온도. 통일해야 할 게 세 가지네.
taehun|농도와 부피 기록도 선생님과 확인해야 해. 바깥 습도를 곧바로 원인으로 붙이진 말고.
teacher|좋다. 오늘은 승인된 실험 절차 안에서 조건을 맞추자. 재실험은 감독 가능한 시간까지만 한다.
junyeon|그 시간에 결과가 안 나오면요?
teacher|확인한 것과 아직 모르는 것을 구분해서 발표하면 된다.
world|하지만 다른 반은 완성된 시연을 보여 준대요.
teacher|다른 반의 발표가 우리 자료를 바꾸지는 않는다.
narrator|세계는 입술을 살짝 깨물었다. 책상 위 홍보 포스터에는 ‘정확히 맞춰지는 순간’이라는 문장이 있었다.
seoyul|이 문구부터 바꿔야겠네.
world|다 지우면 멋이 없어지잖아.
seoyul|‘조건에 따라 달라지는 순간’도 멋있게 만들 수 있어.
taewoo|나도 춤에서 늘 같은 숫자가 나오는 척은 안 할게.
junyeon|내가 먼저 결과를 확실하다고 말해서 그런 거야. 내가 설명할게.
hyunsol|우리가 함께 확인한 자료야. 네 혼자 말할 문제 아니야.
player|처음 기대했던 결과랑 실제 결과를 나란히 보여 주면 어떨까?
world|그러면 실수한 영상도 들어가겠네.
player|사람을 웃음거리로 만들지 않고 조건이 달랐던 이유만 보여 주면 돼.
narrator|현솔이 노트 한가운데 선을 그었다. 왼쪽에는 ‘확인’, 오른쪽에는 ‘미확인’이라고 썼다.
hyunsol|지금 고쳐야 하는 건 데이터가 아니라 설명이야.
junyeon|그 말…… 발표할 때 써도 돼?
hyunsol|네가 이해해서 설명할 수 있으면.
taehun|그럼 나는 환경자료가 증명하는 범위와 증명하지 않는 범위를 써 줄게.
seoyul|나는 편집 시간을 다시 잡을게. 누가 뭐라고 해도 원본은 지우지 마.
narrator|포스터 문구 하나를 고치는 일이 이렇게 큰 선택일 줄은 몰랐다.
world|{name}, 기록 담당 의견이 필요해. 내일 뭘 보여 줄 거야?`),
    choices: [
      c('data-honest', '전체 결과와 한계를 공개하고 승인된 시간에 추가 검증한다.', `player|성공한 값만 골라서 보여 주지는 말자. 조건을 맞춰 다시 해 보고 모르는 건 표시할게.
world|알겠어. 문구는 내가 다시 쓸게. ‘정확히’는 빼고.
junyeon|그럼 이상한 값도 지우지 않아도 되네.
hyunsol|그래. 그게 우리가 실제로 한 실험이니까.`, [e('junyeon', 'trust', 5), e('hyunsol', 'trust', 6), e('taehun', 'trust', 4), e('world', 'affection', -1), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 12), e('global', 'safety', 3)], ['ethical-report', 'team-success']),
      c('data-select', '좋게 나온 값만 발표하고 나머지는 나중에 수정한다.', `player|점검을 통과하는 게 먼저야. 잘 나온 영상에 맞추자.
junyeon|그럼 다른 결과가 있었다는 말은 안 해?
hyunsol|자료가 있는 걸 알면서 빼는 거잖아. 나는 동의 못 해.
narrator|표는 깔끔해졌다. 대신 표 밖으로 밀려난 기록이 점점 많아졌다.`, [e('global', 'fair', 3), e('global', 'reputation', 4), e('global', 'ethics', -25), e('hyunsol', 'trust', -10), e('junyeon', 'trust', -6)], ['data-fraud']),
      c('data-blame', '준연의 실수라고 적어 제출하면 빨리 끝난다고 한다.', `player|처음 준비한 사람이 준연이니까 그렇게 적으면 되잖아.
junyeon|내가 뭘 틀렸는지는 아직 안 찾았는데.
taehun|원인을 모르면 모른다고 적어야지. 사람 이름이 설명은 아니야.
hyunsol|그 보고서에 내 이름은 넣지 마. 나는 그런 결론에 동의하지 않았어.`, [e('junyeon', 'affection', -8), e('junyeon', 'trust', -13), e('junyeon', 'special', 9), e('hyunsol', 'trust', -7), e('global', 'ethics', -12), e('global', 'harmony', -10)], ['public-humiliation'])
    ]
  },
  {
    id: 'common-9', title: '9장 · 잘라 붙인 장면', location: 'media', day: 24,
    lines: d(`narrator|교실에 들어갔을 때 웃음소리가 먼저 멈췄다. 세계가 내 책상 위에 휴대전화를 놓았다.
world|봤어?
player|뭘?
narrator|익명 계정에 나와 세계가 함께 교문을 나서는 사진이 있었다. 제목은 ‘편입생의 가장 빠른 적응법’이었다.
world|하교 사진이야. 내가 기타 줄 사러 어디 가는지 알려 준 날.
player|설명 없이 보면 다른 장면처럼 보이겠다.
world|다른 장면이면 넌 곤란해?
player|네가 원하지 않은 식으로 올라온 게 먼저 곤란하지.
narrator|세계의 다음 말이 잠깐 멈췄다. 화면 아래에는 화학실 영상도 있었다.
junyeon|그거…… 비커 깼을 때야.
hyunsol|내 말만 잘라 놨네. 선생님 부르라고 한 부분은 없어.
seoyul|원본을 가지고 있는 사람이 누군지부터 확인해야겠어. 단정은 하지 말고.
taewoo|나랑 자세 연습한 사진도 있잖아. 왜 내 팔을 잡은 부분만 잘랐어?
player|춤 체험 테스트라는 내용이 빠졌어.
taewoo|댓글이 더 짜증 나. 우리가 일정도 없이 너한테 붙어 있는 것처럼 말하네.
taehun|지금 화난 상태에서 댓글을 달면 다른 문장도 잘라 갈 수 있어.
world|그럼 계속 가만히 있어?
taehun|대응하지 말자는 뜻은 아니야. 무엇을 공개할지 먼저 정하자는 거야.
junyeon|내가 비커 깬 영상은 없어졌으면 좋겠어.
hyunsol|나도 원본을 막 올리고 싶지는 않아. 준연 얼굴이 크게 나와.
player|당사자마다 원하는 게 조금 다르네.
world|난 네가 나랑 찍힌 사진을 숨기려고만 하지 않았으면 좋겠어.
seoyul|사진이 싫다는 말과 같이 있던 시간이 싫다는 말은 다르니까.
narrator|세계는 그 말을 듣고 화면을 껐다. 손가락이 휴대전화 모서리를 세게 눌렀다.
teacher|게시물은 확인했다. 원본과 게시 시점을 보존하고, 학생 개인이 서로 범인을 지목하지 않도록 하자.
hyunsol|댓글 반박은요?
teacher|공개 대응의 범위도 당사자와 함께 정한다. 사진 삭제 요청과 교내 지도 절차를 진행하겠다.
junyeon|제가 먼저 말을 잘하면 덜 퍼질까요?
teacher|네가 피해를 줄이기 위해 모든 일을 책임질 필요는 없다.
player|우리 전시 계정에도 질문이 오고 있어. 어떻게 답할지 정해야 할 것 같아요.
seoyul|우선 사실관계만. 남의 사적인 대화를 해명 자료로 쓰지는 말자.
taewoo|누가 올렸든 만나면 먼저 한마디 하고 싶긴 해.
hyunsol|지금은 추측밖에 없어. 엉뚱한 사람한테 하면 같은 일이 반복돼.
narrator|단체 채팅의 입력 표시가 여러 번 켜졌다 꺼졌다. 다들 말하고 싶었고, 아무도 다음 사진이 되고 싶지는 않았다.
world|{name}. 우리가 같이 있던 건 네게 뭐였어? 그 말부터 듣고 싶어.`),
    choices: [
      c('rumor-consent', '함께한 시간을 인정하고 각자의 공개 범위를 확인해 교사와 대응한다.', `player|같이 준비하고 지낸 건 나한테 중요한 시간이었어. 그래서 더 함부로 증명 자료로 쓰고 싶지 않아.
world|……그 말이면 됐어. 사진 삭제 요청에는 동의할게.
junyeon|내 얼굴은 안 나오게 해 줬으면 좋겠어.
hyunsol|안전 상황만 설명하는 문장은 내가 쓰고 선생님께 확인받을게.`, [e('world', 'trust', 5), e('junyeon', 'trust', 4), e('hyunsol', 'trust', 4), e('taewoo', 'trust', 4), e('seoyul', 'trust', 3), e('taehun', 'trust', 3), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['privacy-respected', 'consent-first']),
      c('rumor-unilateral', '사실을 증명하려고 사적인 채팅 화면을 바로 게시한다.', `player|대화를 보면 오해가 풀리겠지. 내가 올릴게.
seoyul|잠깐. 그 대화에는 공개하기 싫다고 한 부분도 있잖아.
world|네가 나를 설명하는 것까지 혼자 정할 거야?
narrator|해명 게시물 아래에는 새로운 질문이 달렸다. 오해를 줄이려다 다른 비밀을 내놓은 셈이었다.`, [e('global', 'reputation', 3), e('global', 'ethics', -9), e('world', 'trust', -7), e('seoyul', 'trust', -8), e('taewoo', 'trust', -4)], ['unauthorized-share']),
      c('rumor-shrug', '소문은 금방 지나간다며 웃고 넘긴다.', `player|다들 며칠 지나면 잊겠지. 신경 쓰지 말자.
junyeon|오늘 점심에도 내 얘기했어. 나는 신경이 쓰여.
taewoo|안 쓰이는 사람 혼자 그렇게 말하면 끝이 아니지.
narrator|휴대전화를 끈다고 다른 사람의 화면에서도 게시물이 사라지지는 않았다.`, [e('junyeon', 'trust', -6), e('taewoo', 'trust', -5), e('world', 'trust', -5), e('global', 'harmony', -6), e('global', 'reputation', -4)])
    ]
  },
  {
    id: 'common-10', title: '10장 · 세 개의 방과 후', location: 'garden', day: 17,
    lines: d(`narrator|중간 점검이 끝난 금요일, 여섯 사람의 일정표를 펼쳤다. 같은 시간에 세 개의 장소가 겹쳤다.
world|오늘은 네가 밴드실 올 줄 알았어.
player|확정한 적은 없는데. 작업 파일 보내 준다는 얘기만 했잖아.
world|그래도 내가 기다리고 있다는 건 알았을 것 같아서.
seoyul|기다리기 전에 약속을 잡아야 상대도 알지.
world|서율은 모든 걸 그렇게 정확히 정해?
seoyul|기다리는 건 정확하지 않으면 기분이 나빠지니까.
narrator|태우가 음료 두 병을 들고 정원 벤치로 왔다.
taewoo|이거 하나는 실험 보조 보상. 춤을 못 춰도 보조는 잘하더라.
player|칭찬이 조금 늘었네.
taewoo|더 듣고 싶으면 오늘 리허설 와.
world|봐. 다들 비슷하게 말하잖아.
taewoo|나는 방금 직접 물어봤는데?
narrator|준연은 전시 자료를 가슴에 안고 서 있었다. 앞장에 내 이름이 작게 적혀 있었다.
junyeon|난 10분만 있으면 돼. 보고서 제목 옆에 누구 이름을 넣는지 확인하려고.
hyunsol|그 전에 내가 한 계산 오류부터 수정해야 해.
player|네 계산에 오류가 있었어?
hyunsol|응. 두 번째 표에. 맞는 말만 하는 사람 취급하지 마. 나도 놓쳐.
junyeon|현솔이 먼저 말해 줬어. 그래서 같이 고쳤어.
taehun|나는 내일 관측 공지를 보내야 해. 예보가 바뀌어서 실내 대안도 적어 두려고.
player|그러면 세 장소에 두 명씩 있겠네.
seoyul|오늘 꼭 해야 할 일과 오늘 하고 싶은 일이 섞였어. 나누면 선택하기 쉬울 거야.
world|나는 네가 노래 한 번만 듣고 갔으면 좋겠어. 일 말고.
narrator|세계는 이번에는 웃으며 말을 감추지 않았다. 태우도 장난을 멈추고 내 대답을 기다렸다.
taewoo|나도 네가 봐 줬으면 좋겠어. 촬영 담당이 필요해서만은 아니고.
junyeon|나는…… 발표 연습이 끝난 뒤에 잠깐 얘기하고 싶어.
hyunsol|모두의 말을 잘 들어 준다는 이유로 다 가능하다고 하지 마.
taehun|불가능한 약속보다 정확한 다음 약속이 낫지.
player|누군가를 선택하면 다른 사람을 밀어내는 것처럼 느껴져.
seoyul|오늘 어디에 갈지 정하는 거야. 사람의 가치를 순서 매기는 게 아니고.
narrator|바람에 일정표 가장자리가 들렸다. 처음 이 종이를 만들 때는 시간만 적으면 되는 줄 알았다.
world|싫으면 싫다고 말해도 돼. 대신 모른 척은 하지 마.
taewoo|좋아. 오늘 못 오면 다음에는 제대로 봐 주기.
player|그것도 지금 약속하면 지켜야 하는 거네.
narrator|지도 위에 표시된 장소는 그대로였다. 그곳에서 기다리는 사람들의 의미가 달라져 있었다.`),
    choices: [
      c('afternoon-clear', '할 일은 공유하고 개인 약속은 확답할 수 있는 시간에만 잡는다.', `player|자료는 공용 폴더에서 함께 확인하자. 오늘 갈 곳은 정해서 알려 줄게. 못 가는 약속은 잡지 않을게.
hyunsol|그렇게 말하면 돼. 모두를 달래려고 둘러대지 말고.
world|아쉽기는 한데…… 적어도 오늘 계속 문만 보진 않아도 되겠네.
narrator|각자 원하는 시간을 적었다. 기다림이 벌처럼 남지 않도록 약속을 다시 나눴다.`, [e('world', 'trust', 4), e('world', 'special', -4), e('hyunsol', 'trust', 3), e('seoyul', 'trust', 3), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['boundary-set']),
      c('afternoon-world', '오늘 방과 후는 세계의 노래를 듣는 데 쓰겠다고 정한다.', `player|오늘은 밴드실로 갈게. 다른 일정은 새로 약속 잡자.
world|응. 연습이 아니라 네게 들려주는 거라고 생각하고 부를게.
taewoo|오케이. 내 리허설은 영상 남겨 둘게.
narrator|세계가 벤치에 놓인 악보를 챙겼다. 선택하지 않은 시간들이 마음 한편에 남았다.`, [e('world', 'affection', 6), e('world', 'trust', 2), e('taewoo', 'jealousy', 3), e('junyeon', 'jealousy', 2)]),
      c('afternoon-secret', '각자에게 아무도 모르게 시간을 비워 두었다고 말한다.', `player|너한테는 시간 있어. 다른 애들한테는 말하지 마.
seoyul|방금 세계한테도 비슷한 말 하는 거 들었는데.
taewoo|시간이 복사돼? 왜 비밀이어야 해?
narrator|휴대전화에 남긴 문장들이 동시에 돌아왔다. 작은 친절처럼 보이던 말이 서로를 비교하게 만들었다.`, [e('world', 'trust', -7), e('seoyul', 'trust', -7), e('taewoo', 'trust', -7), e('global', 'harmony', -9), e('world', 'jealousy', 8)], ['secret-promise'])
    ]
  },
  {
    id: 'common-11', title: '11장 · 세 갈래의 위기', location: 'classroom', day: 10,
    lines: d(`narrator|페어 열흘 전의 아침, 칠판의 할 일 목록은 지우는 속도보다 늘어나는 속도가 빨랐다.
world|홍보 담당 선생님이 우리 영상에 ‘완벽히 증명된 원리’라는 문구를 넣자고 하셨어.
hyunsol|우리 실험이 그렇게 말할 수 있는 건 아니라고 다시 설명해야 해.
seoyul|그리고 내 배경 영상이 다른 팀 영상이랑 비슷하다는 글이 올라왔어.
player|어떤 부분이?
seoyul|색과 파형 배치. 나는 작업 파일이 다 있어. 비교하려면 과정부터 봐야 해.
junyeon|우리 쪽도 이름이 이상해. 제출 목록에는 분석 담당이 다른 사람으로 돼 있어.
hyunsol|공유 양식 이전 버전을 썼을 수도 있어. 수정 기록부터 확인하자.
junyeon|내가 말하면 이름에 너무 집착한다고 생각하지 않을까?
player|누가 한 작업인지 정확히 적는 건 필요한 일이야.
taewoo|잠깐. 대강당 순서도 바뀌었어. 우리 다음에 바로 밴드 세팅이래.
world|그건 어제 조정됐다고 들었는데.
taewoo|내 발 상태 때문에 동작 몇 개 바꿔야 해서 리허설 시간이 더 필요해.
narrator|태우는 말을 끝내자마자 입을 다물었다. 운동화 끈을 만지는 손이 멈췄다.
player|발이 아파?
taewoo|조금. 무슨 큰일 난 것처럼 보지는 마.
taehun|그리고 야간 관측은 대안을 공지해야 해. 바람 예보가 좋지 않아.
world|아직 열흘 남았는데 취소부터 말하면 사람들이 안 오지 않을까?
taehun|확정 취소가 아니라 변경될 수 있다고 알리는 거야. 당일 기준은 담당 선생님과 정했고.
hyunsol|내 음성 메모도 방송용 컴퓨터에 남아 있었어. 오늘 지워야 해.
player|오늘 직접 확인할 일이 셋 이상이네.
seoyul|네가 전부 해결할 수는 없어. 대신 자료가 어느 폴더에 있는지만 정확히 남겨 줘.
junyeon|나도 담당 선생님께 이름 얘기는 할 수 있어. 같이 증거만 확인해 주면.
taewoo|나는 보건실 갈게. 검사도 안 받고 괜찮다고 우기는 건 데이터 무시하는 거니까.
world|다들 갑자기 모범답안을 말하네.
taewoo|모범답안대로 하기가 어려운 거지. 말은 원래 쉬워.
narrator|세계가 홍보 문구 파일을 내게 보여 주었다. 화면 속 ‘완벽히’라는 단어가 유난히 크게 보였다.
world|너 지금 누구한테 먼저 갈 거야?
player|급한 일과 나만 할 수 있는 일을 구분해야겠어.
hyunsol|혼자 결정하지 말고 상황을 공유해. 안 온다고 우리가 멈추는 건 아니야.
seoyul|맞아. 내 작업은 내가 제일 잘 알아. 너는 확인할 사람이 필요할 때 와 줘.
taehun|관측 공지 초안을 단체 채팅에 올릴게. 수정할 점은 거기 남겨 줘.
narrator|각자 할 수 있다는 말이 안심되면서도 조금 서운했다. 내 도움이 필요하다는 말을 좋아하고 있었는지도 몰랐다.
teacher|급한 일을 나눠 맡는 게 오늘의 협력이다. 누구도 혼자서 반 전체를 떠맡지 말아라.
narrator|나는 칠판을 세 칸으로 나누었다. 어떤 칸을 선택하든 나머지 칸이 비어 있지 않게 해야 했다.`),
    choices: [
      c('crisis-band', '업무를 나눈 뒤 밴드·미술팀에서 문구와 원본 제작 과정을 확인한다.', `player|준연이 자료는 현솔과 선생님이 확인하고, 태우는 보건실부터. 나는 서율 원본과 세계 홍보 문구를 볼게.
world|좋아. 과장 없이 눈에 띄게 쓰는 건 내가 해 볼게.
seoyul|작업 기록을 날짜순으로 정리했어. 공개할 범위는 같이 확인하자.
narrator|단체 채팅에는 다른 팀의 진행 상황도 올라왔다. 직접 곁에 없는 사람의 일도 지워지지 않았다.`, [e('world', 'affection', 4), e('world', 'trust', 4), e('seoyul', 'affection', 4), e('seoyul', 'trust', 4), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['crisis-band']),
      c('crisis-chem', '업무를 나눈 뒤 화학팀에서 기여 기록과 사적 파일 분리를 확인한다.', `player|서율은 원본을 보존하고 세계는 문구를 수정해 줘. 나는 준연의 기록과 현솔의 파일을 확인할게.
junyeon|내가 쓴 부분을 먼저 표시했어. 이제 선생님께 설명해 볼게.
hyunsol|내 음성 메모는 듣지 말고 지워 줘. 방송 파일 목록만 남기면 돼.
narrator|우리는 공개 자료와 사적인 자료를 다른 폴더에 나눴다. 이름이 빠진 칸도 정확히 고쳤다.`, [e('junyeon', 'affection', 4), e('junyeon', 'trust', 5), e('hyunsol', 'affection', 3), e('hyunsol', 'trust', 5), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2)], ['crisis-chem', 'privacy-respected']),
      c('crisis-stage', '업무를 나눈 뒤 태우·태훈과 공연 변경안과 관측 대안을 마련한다.', `player|자료 문제는 원본을 보존해서 선생님과 확인해 줘. 나는 무대 동선과 관측 공지를 맡을게.
taewoo|내가 빠지는 경우까지 적어 줘. 그렇게 말한다고 포기한 건 아니니까.
taehun|실내 대안도 관측을 이해하는 데 도움이 될 거야. 별이 없다고 아무것도 못 보는 건 아니지.
narrator|계획표에 취소와 변경 칸이 생겼다. 그 빈칸을 채운 뒤 오히려 행사가 더 가까워 보였다.`, [e('taewoo', 'affection', 4), e('taewoo', 'trust', 5), e('taehun', 'affection', 4), e('taehun', 'trust', 5), e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2), e('global', 'safety', 4)], ['crisis-stage', 'safe-response'])
    ]
  },
  {
    id: 'common-12', title: '12장 · 사라진 최종본', location: 'media', day: 1,
    lines: d(`narrator|허가받은 설치 시간이 한 시간 남았을 때, 미디어실 화면에서 최종 발표 폴더가 사라졌다.
seoyul|잠깐. 이건 지난주 영상인데.
player|파일 이름에는 최종이라고 적혀 있어.
hyunsol|파일 이름 말고 수정 시각을 봐. 동기화된 계정이 달라.
junyeon|내 그래프도 예전 버전이야. 원자료는 따로 있어.
taewoo|누가 지웠어?
hyunsol|아직 삭제인지 덮어쓴 건지 몰라. 먼저 연결을 멈추고 상태를 보존하자.
taehun|기상관측 자료 원본은 내 저장장치에 있어. 지금 복사해도 돼?
hyunsol|별도 폴더에. 기존 파일 위에는 덮지 말고.
narrator|세계는 가방 손잡이를 쥔 채 화면을 보고 있었다.
player|세계야, 네가 확인한 홍보 영상은 어느 버전이야?
world|어제 밤 버전. 내 노트북에 받아 뒀어.
seoyul|그걸 먼저 말했으면 좋았잖아.
world|정말 같은 건지 몰라서.
hyunsol|그러면 함께 확인하면 돼. 혼자 확신할 때까지 기다릴 시간이 없어.
world|알아. 지금 켤게.
narrator|세계의 목소리가 작아졌다. 혼나서인지, 내가 다른 사람부터 찾았기 때문인지는 알 수 없었다.
player|백업이 있어서 다행이야. 어느 파일인지 목록으로 비교하자.
junyeon|실험값은 내가 읽을게. 현솔이 표시해 줘.
hyunsol|응. 마지막 보고서와 맞춰 보자.
taewoo|난 대강당에 남은 애들 불러올게. 설치 작업은 따로 이어 가면 되잖아.
taehun|관측 자료에는 내려받은 날짜를 표시할게. 예보와 실제 관측이 섞이지 않게.
seoyul|영상 복원은 내가 할 수 있어. 다만 완전히 확인 못 한 효과는 빼야 해.
world|내 노트북 파일에는 마지막 음량 조정이 안 돼 있어. 그건 다시 해야 해.
player|좋아. 미확인 목록부터 만들자.
narrator|복도에서 담임이 들어와 남은 시간을 확인했다.
teacher|최종 점검은 내일 아침에도 할 수 있다. 시간 넘겨 무리하지 말고 작동하는 범위를 확실히 정해라.
taewoo|완벽하지 않아도 열어도 되는 거예요?
teacher|안전하고 설명이 정직한 전시라면 그렇다. 작동하지 않는 기능은 운영하지 않으면 된다.
junyeon|그러면 실패한 게 아니라 범위를 바꾸는 거네요.
hyunsol|이번엔 그 말이 맞아.
narrator|세계가 내게 이어폰 한쪽을 내밀었다. 복원된 노래의 시작 부분이 흘렀다.
world|여기, 네가 좋아한다고 했던 부분. 아직 남아 있어.
player|응. 없어지지 않았네.
seoyul|좋아. 이제 우리가 남길 부분을 정확히 정하자.
narrator|다시 뜬 폴더는 조금 작아져 있었다. 대신 어느 파일이 누구의 것인지 분명해졌다.`),
    choices: [
      c('restore-together', '백업을 분리 보존하고 검증한 기능만 함께 복구한다.', `player|원본은 그대로 두고 새 폴더에 복원하자. 검증한 사람 이름과 시간을 적고 오늘은 허가 시간에 끝내자.
hyunsol|좋아. 원인도 기록할게. 버전 충돌을 다시 만들지 않게.
world|내 파일 늦게 말해서 미안해. 다음에는 먼저 공유할게.
narrator|화면 위 작은 확인 표시가 하나씩 늘었다. 마지막 불을 끌 때 모두가 같은 방향으로 걸어 나갔다.`, [e('world', 'trust', 4), e('world', 'special', -3), e('seoyul', 'trust', 4), e('junyeon', 'trust', 3), e('hyunsol', 'trust', 3), e('taewoo', 'trust', 3), e('taehun', 'trust', 3), e('global', 'harmony', 7), e('global', 'fair', 8), e('global', 'ethics', 3), e('global', 'safety', 3)], ['team-success']),
      c('restore-cover', '겉보기에 완성된 이전 버전을 최종본이라고 제출한다.', `player|지금 보이는 것만 완성돼 있으면 되잖아. 수정 이력은 빼자.
hyunsol|그 안에는 틀린 값도 있어. 알고 제출하는 건 실수가 아니야.
seoyul|영상이 예쁘게 나오면 사실도 달라진다고 생각해?
narrator|전시 화면은 빠르게 돌아왔다. 누구도 그 화면 앞에서 안도하지는 않았다.`, [e('global', 'fair', 3), e('global', 'ethics', -20), e('hyunsol', 'trust', -9), e('seoyul', 'trust', -8), e('global', 'harmony', -6)], ['data-fraud']),
      c('restore-world', '세계의 백업을 받는 대신 앞으로 항상 함께 작업하겠다고 약속한다.', `player|다음부터는 무조건 네 옆에서 할게. 그러니까 지금 파일 보내 줘.
world|정말? 다른 애들한테 가는 시간도 줄일 거야?
seoyul|공동 파일을 받으면서 그런 약속을 할 이유는 없어.
narrator|복구는 시작됐지만 내일의 일정표에 지킬 수 있을지 모를 문장이 남았다.`, [e('world', 'affection', 5), e('world', 'special', 9), e('world', 'trust', -3), e('seoyul', 'trust', -5), e('global', 'harmony', -4)], ['secret-promise']),
      c('restore-rush-install', '허가 시간에 맞추려고 전원 연결을 확인하지 않고 전시 장비를 혼자 옮긴다.', `player|파일은 너희가 보고 있어. 나는 연결된 것까지 통째로 옮기면 시간을 줄일 수 있겠지.
narrator|당겨진 케이블 때문에 받침대가 흔들렸다. 설치를 감독하던 교사가 즉시 작업을 중단시키고 주변을 비웠다.
teacher|전원이 연결된 장비를 무리하게 옮기면 안 된다. 네가 정한 안전 절차부터 어겼구나. 이 작업은 담당자가 다시 확인한다.
seoyul|늦더라도 같이 확인하자고 했잖아. 지금은 설치보다 네가 왜 무리했는지부터 이야기해야겠어.`, [e('seoyul', 'trust', -7), e('hyunsol', 'trust', -5), e('global', 'safety', -15), e('global', 'fair', -5), e('global', 'harmony', -4)], ['safety-strike'])
    ]
  },
  {
    id: 'common-13', title: '13장 · 반응이 남는 시간', location: 'auditorium', day: 0,
    lines: d(`narrator|첫날 아침, 1반 전시 앞에 ‘RE:ACTION’이라는 간판이 걸렸다. 처음 그 이름을 적었던 칠판은 비어 있었다.
teacher|첫 심사까지 10분이다. 각자 원자료와 역할을 확인하고, 모르는 질문에는 아는 범위까지만 대답해라.
junyeon|손이 떨려. 자료 넘기는 건 할 수 있을 것 같은데.
hyunsol|떨려도 글자는 안 바뀌어. 네가 정리한 거니까 천천히 읽어.
player|내가 다음 화면 신호를 기다릴게. 네가 멈추면 나도 멈출게.
narrator|준연이 고개를 끄덕였다. 심사위원은 화려한 첫 화면보다 옆에 놓인 실험노트를 먼저 펼쳤다.
student|예상과 다른 값이 나온 시행은 어떻게 처리했나요?
hyunsol|전체 원자료를 보존했습니다. 측정 시작 시점과 준비 조건의 차이를 확인했고, 아직 분리하지 못한 영향은 한계로 표시했습니다.
junyeon|그리고 추가 시행은 같은 기준으로 기록했어요. 여기 날짜별로 보실 수 있어요.
taehun|기상자료는 배경 조건을 보여 줍니다. 이 자료만으로 실험실의 반응 차이를 설명했다고 주장하지는 않습니다.
narrator|질문이 끝났을 때 준연이 조용히 숨을 내쉬었다. 현솔은 그제야 손에 쥔 펜을 내려놓았다.
world|나 방금 홍보 화면 설명 잘했어?
player|네가 직접 만든 것과 서율이 만든 걸 구분해서 말한 게 좋았어.
world|당연한 걸 칭찬하네. 그래도 좋아.
seoyul|당연한 걸 실제로 하는 건 꽤 중요해.
narrator|둘째 날, 전시실에는 학생들과 가족들의 목소리가 가득 찼다. 센서 앞에는 작은 대기줄이 생겼다.
taewoo|한 명씩 표시 안으로 들어와 주세요. 점수는 춤 실력 등수가 아니라 동작 위치를 이해하기 위한 화면이에요.
student|선배랑 똑같이 해야 높은 점수예요?
taewoo|체형과 가려짐 때문에 다르게 보여요. 왜 다른지 같이 보는 게 더 재미있어요.
narrator|세계는 밴드 공연 시작 전에 대강당 조명을 살폈다. 서율이 마지막 영상 크레디트를 확인했다.
world|내 이름 좀 더 크게 할까?
seoyul|지금도 충분히 커.
world|농담이야. {name}, 공연 끝나고 바로 가지 마.
taewoo|내 공연도 보고 가. 무대 순서 잘 나눠 쓴 첫날이니까.
player|둘 다 볼게. 그건 시간표상 가능해.
taehun|관측은 담당 선생님이 최종 조건 확인 중이야. 변경되면 실내 강연으로 안내할게.
narrator|늦은 오후, 관람객 한 명이 그래프의 빈칸을 가리켰다. 나는 확인하지 못한 자료를 채우지 않은 이유를 설명했다.
junyeon|빈칸 보고 실수라고 할 줄 알았는데, 오히려 질문을 오래 하시네.
hyunsol|그 질문에 답할 수 있으면 된 거야.
narrator|셋째 날에는 수정한 발표와 질문 답변을 정리했다. 게시판에 최종 결과가 붙기 전, 우리는 처음으로 모두 의자에 앉았다.
taewoo|끝나면 엄청 소리 지를 줄 알았는데 지금은 배고파.
world|난 노래 가사가 아직 머릿속에서 반복돼.
seoyul|나는 수정할 장면이 세 개 더 보여.
taehun|관측일지에는 ‘행사 종료 후에도 하늘은 흐렸음’이라고 적을 것 같아.
junyeon|나는…… 다음 발표도 조금은 할 수 있을 것 같아.
hyunsol|그 말은 보고서보다 더 오래 남겠다.
narrator|담임은 결과가 나오면 안내하겠다고 말했다. 우리의 성적은 실제로 준비한 기록과 운영 결과에 따라 정해질 것이었다.
player|처음에는 이 행사가 끝나기만 기다렸는데.
world|지금은?
player|끝난 뒤에도 만나고 싶은 사람이 생겼어.
narrator|여섯 사람이 잠깐 말이 없어졌다. 누군가는 웃었고 누군가는 시선을 피했다.
seoyul|그 말, 아무 뜻 없이 한 건 아니지?
taewoo|이제 일정 담당 핑계는 못 대겠네.
taehun|마감이 사라져도 남는 문장이 있지.
narrator|휴대전화 화면이 켜졌다. 전시가 끝난 뒤의 시간은 아직 누구의 것도 아니었다.`),
    choices: [
      c('fair-finish', '공동 정리를 마치고 각자의 기여를 기록한 뒤 솔직하게 다음 만남을 정한다.', `player|먼저 우리가 함께 한 일부터 마무리하자. 그다음에 만나고 싶다는 말은 제대로 할게.
junyeon|보고서에 내 이름, 이번엔 내가 직접 확인해도 되지?
seoyul|우리 모두 확인하자. 처음 만든 영상부터 마지막 질문까지.
narrator|서명을 끝낸 뒤 휴대전화가 다시 울렸다. 이번 메시지는 행사 공지가 아니었다.`, [e('global', 'harmony', 5), e('global', 'fair', 4), e('global', 'ethics', 2), e('world', 'trust', 3), e('junyeon', 'trust', 3), e('hyunsol', 'trust', 3), e('taewoo', 'trust', 3), e('taehun', 'trust', 3), e('seoyul', 'trust', 3)], ['team-success']),
      c('fair-spotlight', '인터뷰에서 내가 모두를 이끌었다는 점을 강조한다.', `player|편입하고 제가 전체를 맡아서 여기까지 온 것 같아요.
taewoo|네가 많이 한 건 맞는데 우리가 따라오기만 한 건 아니잖아.
junyeon|내 이름은 또 안 나오네.
narrator|인터뷰용 사진에서 나는 가운데에 섰다. 옆 사람들과의 간격이 유난히 넓어 보였다.`, [e('global', 'reputation', 8), e('global', 'harmony', -8), e('junyeon', 'trust', -6), e('taewoo', 'trust', -6), e('seoyul', 'trust', -5)]),
      c('fair-evade', '감정 얘기는 농담이었다고 하고 정리도 남에게 맡긴다.', `player|아까 말은 너무 진지하게 받지 마. 나 먼저 갈게.
world|그렇게 말하면 우리가 기다린 게 전부 웃긴 일이 되잖아.
hyunsol|정리 시간도 네가 적었어. 끝까지 책임은 져야지.
narrator|문밖에 나와도 휴대전화는 조용했다. 끝내지 않은 말이 많을수록 걸음이 무거워졌다.`, [e('global', 'harmony', -9), e('global', 'fair', -4), e('world', 'trust', -6), e('hyunsol', 'trust', -5), e('taehun', 'trust', -4)], ['broken-promise'])
    ]
  }
];
