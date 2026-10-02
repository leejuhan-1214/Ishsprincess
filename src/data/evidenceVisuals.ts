import {caseFiles} from './classroomMystery';

export type EvidenceVisual={id:string;image:string;alt:string;caption:string};
export type EvidenceArtwork={
 kind:'waveform'|'layers'|'permissions'|'queue'|'table'|'clock'|'sessions'|'references'|'history'|'export'|'recheck'|'route'|'inspection'|'certificate'|'battery'|'timeline'|'split'|'document'|'restore'|'address'|'face'|'stop'|'poem'|'weather'|'sync'|'chat'|'poster';
 heading:string;label:string;rows:[string,string][];note?:string;
};

// These are faithful illustrations of the existing records, not photographs
// or new sources of evidence. Unknown names, scores and poem text stay unknown.
export const evidenceArtwork:Record<string,EvidenceArtwork>={
 'credit-source':{kind:'waveform',heading:'승인된 원본 · 15:58',label:'편곡 파일 / 크레딧',rows:[['편곡','이서율'],['보컬','전세계'],['공개 동의','두 사람 모두 동의']],note:'음원 파형은 화면 구성을 위한 도식입니다.'},
 'credit-change':{kind:'layers',heading:'편집기 변경 이력',label:'공용 미디어 작업',rows:[['16:42','크레딧 레이어 수정'],['로그인 표시','BAND-SHARED'],['음원 레이어','변경 없음'],['개인 계정 여부','이주한 개인 계정과 다름']]},
 'credit-permission':{kind:'permissions',heading:'얼터에고 / 폴더 접근',label:'권한 및 실행 기록',rows:[['읽기','허용'],['파일 수정','권한 없음'],['업로드','권한 없음'],['최초 실행','16:50']]},
 'credit-queue':{kind:'queue',heading:'예약 공개 작업',label:'공용 PC / 예약 목록',rows:[['16:10','전세계가 예약 설정'],['공개 대상','공용 폴더의 최신 내보내기'],['16:44','예약 작업 실행'],['수정 후 확인','다시 확인한 기록 없음']]},
 'credit-witness':{kind:'table',heading:'미디어실 사용표',label:'장소 신청 / 직접 관찰',rows:[['사용 시간','16:35 ~ 16:45'],['신청자','전세계'],['16:39 / 황민혁','스피커를 반환하며 편집기 앞의 세계를 봄'],['관찰 범위','수정 버튼을 누르는 모습은 보지 못함']]},
 'credit-clock':{kind:'clock',heading:'화면 시각 / 저장 시각',label:'미리보기 시간대 설정',rows:[['편집기 표시','17:42'],['실제 저장','16:42'],['표시 설정','저장 시각보다 한 시간 빠름'],['기록 비교','같은 순간의 기록']]},
 'score-session':{kind:'sessions',heading:'서로 다른 두 세션',label:'영상 / 원자료 연결',rows:[['S-28','공개 영상 / 원자료 84점'],['S-27','전날 완주 / 97점'],['시도 식별','파일마다 별도 세션 ID']],note:'아래 선은 동작 측정의 도식이며 실제 원자료를 재현하지 않습니다.'},
 'score-baseline':{kind:'references',heading:'공개 표의 기준 파일',label:'reference 필드 비교',rows:[['태우 행','TAEWOO-S27 / 개인 기준'],['나머지 학생','REF-01 / 공통 기준'],['개인 기준 결과','99'],['비교 조건','같은 기준 파일을 사용하지 않음']]},
 'score-edit':{kind:'history',heading:'설정 변경 이력',label:'담당 계정 / reference 설정',rows:[['16:18 / 김태우','자신의 reference만 변경'],['변경 전','REF-01 / 공통 기준 / 84'],['변경 후','TAEWOO-S27 / 개인 기준'],['권한','허가된 설정 변경']]},
 'score-export':{kind:'export',heading:'내보내기 화면 기록',label:'순위 표 공개 화면',rows:[['16:22 / 김태우','순위 표 내보내기'],['화면의 reference','개인 기록 기준'],['남겨 둔 설명','동일 기준'],['원자료','변경 없음']]},
 'score-recheck':{kind:'recheck',heading:'공통 기준 재계산',label:'담당 교사 승인',rows:[['재계산 기준','모든 행에 REF-01 적용'],['결과','모든 행이 원자료와 일치'],['센서 고장','확인되지 않음'],['평가 범위','좌표 차이 / 동작 미학은 평가하지 않음']]},
 'absence-badge':{kind:'route',heading:'정문 카드 리더 기록',label:'교실 / 기록 범위',rows:[['17:22','황민혁 / 정문 입실'],['정문 퇴실','기록 없음'],['이 파일의 범위','정문 카드 리더만']],note:'평면도는 기록 범위를 설명하기 위한 도식입니다.'},
 'absence-door':{kind:'inspection',heading:'연결문 센서 점검표',label:'교실 ↔ 도서관 / 보조문',rows:[['센서 점검','17:20 ~ 17:50'],['점검 대상','기록 장치'],['문 상태','안에서 열 수 있음'],['안내','통행 금지 표시 없음']]},
 'absence-nurse':{kind:'certificate',heading:'보건실 방문 확인',label:'보건교사 확인 자료',rows:[['17:29','황민혁 · 방준연 함께 방문'],['방문 사유','준연의 어지럼증'],['17:46까지','두 학생 모두 보건실에 있음'],['확인자','보건교사']]},
 'absence-test':{kind:'history',heading:'점검 예외 설정',label:'센서 설정 / 학급 안내',rows:[['17:10 / 최현솔','센서 점검 예외 적용'],['변경 범위','허가된 점검 범위'],['학급 안내','모든 통행 기록'],['안내 정정','정정되지 않음']]},
 'absence-mail':{kind:'split',heading:'메시지 표시 / 실제 발신',label:'알림 헤더 확인',rows:[['17:36 / 표시 이름','황민혁'],['생성 위치','교실 공용 PC 예약 작업'],['표시 이름 필드','자유롭게 설정 가능한 문자열'],['개인 발신 서명','인증된 서명 없음']]},
 'absence-phone':{kind:'battery',heading:'휴대폰 전원 상태',label:'마지막 배터리 알림',rows:[['17:18','배터리 소진 / 전원 꺼짐'],['직접 확인','황민혁 · 이서율'],['메시지 도착','배터리 소진보다 나중']]},
 'poem-original':{kind:'poem',heading:'책갈피의 비공개 시 초안',label:'개인 메모 / 수정 흔적',rows:[['작성 시각','14:10'],['수정 이력','세 번의 수정'],['포스터와 비교','문장 · 줄바꿈 · 특이한 오자 동일'],['공개 범위','비공개 초안']],note:'비공개 시의 실제 구절은 그림에 재게시하지 않습니다.'},
 'poem-allowed':{kind:'weather',heading:'weather-note.txt',label:'전시 사용을 허락한 파일',rows:[['허락한 자료','weather-note.txt 하나'],['포함 항목','날짜 · 구름량 · 관측 불가 조건'],['시 문장','포함되지 않음'],['사용 허락','이 관측 설명 파일에 한함']]},
 'poem-sync':{kind:'sync',heading:'개인 메모의 동기화',label:'파일 위치 / 사용 동의',rows:[['원본 위치','개인 메모 폴더'],['사본 위치','작업 폴더 / 자동 동기화'],['파일 읽기','권한 있음'],['공개 사용 허락','허락 필드 없음']]},
 'poem-message':{kind:'chat',heading:'인용 전 관련 대화',label:'두 사람 동의로 제출된 구간',rows:[['이서율','지금 시를 넣어도 돼?'],['고태훈','지금 초안은 아니야. 새로 완성해서 줄게.'],['제출 범위','이 관련 구간만 / 다른 대화는 제외']]},
 'poem-layout':{kind:'poster',heading:'포스터 편집 이력',label:'작업 폴더 사본 / 전시 공개',rows:[['15:02 / 이서율','동기화 사본의 문장을 직접 삽입'],['15:20','공개본 내보내기'],['자동 삽입','사용되지 않음']],note:'포스터 그림은 빈 의자를 나타낸 도식입니다. 시 구절은 재게시하지 않습니다.'},
 'echo-clock':{kind:'timeline',heading:'최초 발신 / 로컬 실행',label:'프로세스 실행 시각',rows:[['17:36','첫 사칭 메시지 발송'],['17:40','로컬 얼터에고 실행 시작'],['그 이전','얼터에고 실행 프로세스 없음']]},
 'echo-acl':{kind:'split',heading:'서로 다른 프로그램 권한',label:'분석기 / 발송기',rows:[['얼터에고','오프라인 분석 폴더 읽기'],['별도 예약 작업','DEMO-PRESSURE'],['사칭 발송','학교 내부 알림 계정'],['작업 관계','분석과 발송은 별도 동작']]},
 'echo-template':{kind:'document',heading:'작년 발표의 시연 자료',label:'위험한 메시지 구별 교육 예시',rows:[['예시 문장','발표를 포기하지 않으면 비밀을 공개한다.'],['가상 인물 필드','황민혁 / 순서를 지켜'],['표현 비교','익명 메시지와 같은 표현'],['자료의 안내','실제 전송은 중지']]},
 'echo-resume':{kind:'restore',heading:'복구 요청의 선택 항목',label:'방준연 제출 / 복원 범위',rows:[['선택된 항목','예약 작업도 함께 복원'],['17:30','예약 작업 재개'],['작업 설명','펼친 기록 없음'],['요청 목적','이름이 빠진 보고서 복구']]},
 'echo-address':{kind:'address',heading:'수신 목록 비교',label:'공개 테스트 주소록',rows:[['수신 목록','지난주 공개 테스트용 1반 주소록과 일치'],['주한 개인 대화','추출 자료 없음'],['학생 비공개 파일','추출 자료 없음']]},
 'echo-hash':{kind:'face',heading:'얼굴 이미지 / 실행 파일',label:'예전 시연 자료의 복사본',rows:[['사칭 작업에 사용','얼굴 이미지 복사본'],['복사본 출처','예전 시연 자료'],['현재 얼터에고','실행 파일 호출 없음']],note:'작은 아바타는 파일 유형 표시이며 캐릭터 얼굴을 재현하지 않습니다.'},
 'echo-stop':{kind:'stop',heading:'중지 후 실행 상태',label:'담당 교사의 중지 확인',rows:[['예약 작업','중지'],['추가 메시지','멈춤'],['로컬 얼터에고','계속 실행 중'],['원본 비교','응답 가능']]},
};

export const evidenceVisuals:Record<string,EvidenceVisual>=Object.fromEntries(
 caseFiles.flatMap(file=>file.evidence.map(clue=>[clue.id,{
  id:clue.id,image:`assets/evidence/${clue.id}.svg`,
  alt:`${clue.name} 자료 그림. ${clue.description}`,
  caption:'게임 내 가상 자료 · 실제 인물이나 학교의 기록이 아닙니다.',
 }]))
);
