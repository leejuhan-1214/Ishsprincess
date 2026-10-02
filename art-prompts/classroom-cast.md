# 캐릭터 디자인 프롬프트

Built-in image_gen 사용. 최종 게임용 PNG는 public/assets/mystery/에 저장.

## 2026-10-02 · 기존 캐릭터와 화풍 통일

Built-in image_gen edit mode, transparent_background=true. Both final PNGs: 1086 × 1448, RGBA. No post-generation repainting or filters.

Input 1: previous cast-juhan.png or cast-minhyuk.png as the identity/costume target. Inputs 2–4 (shared style references): cast-hyunsol.png, cast-seoyul.png, cast-taehun.png. Each actual prompt was the common text below plus its character-specific text. The output uses each character's existing design with unified eye construction, tapered ink lines, flat shadow planes and a transparent silhouette.

### Common prompt (verbatim)

Use case: style-transfer.
Asset type: one production character sprite for an existing Korean school visual novel.
Input images: Image 1 is the EDIT TARGET: preserve this character's identity, outfit, props and personality. Images 2, 3, 4 are the SAME GAME'S ART STYLE REFERENCES, not characters to include.
Primary request: Re-illustrate Image 1 so it looks convincingly drawn by the exact same illustrator in the same session as Images 2–4. Closely match their controlled dark fine-to-medium tapered ink contours, crisp angular 2–3 tone cel shading, small etched hatch shadows, detailed narrow almond anime eyes with restrained highlights, refined point of the nose and jaw, separated angular locks of hair, muted cloth colors, and planar sharp clothing folds. No glossy soft airbrush skin, bloom, painterly gradient shadows, rounded cartoon face, photorealism or 3D.
Composition: one girl alone, waist-up sprite matching the style references' medium portrait framing and relative head size. Entire hair crown, all hands, elbows and essential prop visible within canvas with a small clean margin, no legs. Subject fills the canvas. Transparent background like the style-reference sprites, no black haze, gradient, border, frame, panels, lettering or watermarks. Fully clothed ordinary school character; age-appropriate nonsexual illustration. Output a single portrait PNG around 1152 x 1536.

### Juhan continuation (verbatim)

Subject invariants: Lee Juhan remains a female programmer: long chestnut-brown hair, small white flower and silver circuit-shaped hairpin, soft reserved green eyes and a gentle shy smile; teal cardigan with pale trim over a white collared blouse and dark emerald ribbon; a closed silver laptop hugged in one arm, other hand softly touching hair near ear. Keep her specific long-haired feminine design; do not revert to a boy or short haircut. Keep the small laptop sticker/pin details understated. Restyle her face, linework and shading to the reference portraits, with far less soft blush and hair sheen. No other character.

### Minhyuk continuation (verbatim)

Subject invariants: Hwang Minhyuk is a dark-brown-skinned FEMALE class president/disciplinary committee leader. Preserve the rich dark brown skin tone; black high ponytail, defined earnest eyebrows and firm principled alert expression. Mouth slightly open as if giving a clear instruction. Her richly structured ivory stand-collar school uniform has navy piping, neat brass buttons, braided shoulder cord, burgundy neck ribbon, crimson upper-arm band with gold stripe, small school shield emblem, and white cuffs. Keep regulations notebook with colored tabs held under one arm and other hand held forward in a natural open-palm stop gesture. All five fingers anatomically correct. Retain detailed uniform hierarchy, but align her face shape, eye construction, slender angular ink contours and restrained flat shadow palette exactly with the reference girls. Do not lighten her skin. No weapons, no added accessories, no other character.

## 전체 화풍
Original Danganronpa-inspired angular anime ink contours, high contrast sharp cel shading. Waist-up game portrait, fully clothed, entire head/hands, individual character, transparent-background request.

## world
Female vocalist Jeon Segye: long wavy black hair, a deep red rose hair ornament, navy school blazer, dark ribbon tie, piercing violet eyes, confident possessive smile, one hand near chin, guitar pick in the other.

## junyeon
Female science notebook keeper Bang Junyeon: soft short chestnut bob, round glasses, green cardigan, white school shirt, holding a research notebook, slightly shy but alert expression.

## hyunsol
Female chemistry researcher Choi Hyunsol: sharp straight black bob, dark eyes, white laboratory coat over school shirt and teal tie, safety goggles resting on head, holding a checklist, calm analytical expression.

## taewoo
Female dancer Kim Taewoo: auburn brown high ponytail, bright confident eyes, blue varsity jacket over ordinary white athletic shirt, hand raised in a playful rhythmic pose, sporty cheerful smile.

## taehun
Female earth-science literary enthusiast Go Taehun: long gray-brown hair in one braid, violet-gray cardigan over school uniform, star-shaped pin, holding an observation journal, thoughtful gentle expression.

## seoyul
Female musician and artist Lee Seoyul: short softly tousled mauve-purple hair with tiny flower pin, pale yellow school cardigan, ordinary uniform, paintbrush and folded music sheet in hands, imaginative wry smile.

## juhan
Female programmer Lee Juhan: long chestnut hair, white flower-and-circuit hairpin, green ribbon, teal cardigan over a collared school blouse, pleated school skirt, laptop held close, shy warm eyes. The current long-haired design below supersedes the earlier short-bob concept.

## minhyuk
Female disciplinary committee leader Hwang Minhyuk: DARK BROWN skin, black ponytail, thick earnest eyebrows, tailored ivory stand-collar uniform, shoulder cord, brass buttons, red armband, regulations notebook, firm open-palm stop gesture. Final detailed costume correction below supersedes the initial blazer concept.

## 현재 최종 디자인: 긴머리 여학생 이주한 / 황민혁 풍기위원
### juhan
Current asset: `public/assets/mystery/cast-juhan.png`, 1086 × 1448. This long-haired female portrait uses the shared cel-shaded style revision recorded in this file, superseding the earlier soft-shaded long-haired and chestnut-bob portraits.

Design direction: original FEMALE high-school programmer for a Korean school romance and mystery game. Long soft chestnut hair, a white flower hairpin with a circuit motif, gentle shy expression, green ribbon at a white collared school blouse, teal cardigan and a pleated school skirt. Hold a laptop close as her programming prop. Keep expressive angular anime ink contours and sharp high-contrast cel shading, with a clean character silhouette. Show the head and hands clearly, fully clothed and age-appropriate; no sexualized costume, franchise logo or text. The hairpin, ribbon and laptop identify her as a quiet programmer without relying on the former short-haired design.

### minhyuk
Use case: stylized-concept. Edit target: supplied female portrait. Major costume redesign of Hwang Minhyuk, FEMALE, keep DARK BROWN skin, black high ponytail, thick angular eyebrows, fierce principled expression. Make her immediately recognizable as an ultra-elite school disciplinary committee leader, not a generic blazer class president. Structured ivory-white stand-collar school uniform jacket, sharply squared shoulders, dark navy seam piping, two neat rows of brass buttons, braided navy shoulder cord, small shield-shaped discipline badge, bold crimson upper-arm committee armband with simple gold stripe (no text), white cuffs, burgundy ribbon at throat, dark pleated school skirt visible at lower edge. Regulations notebook with color coded tabs firmly under one arm, other hand in a decisive open-palm stop gesture. Rigid upright energetic stance and intense wide eyes convey passionate rules/effort obsessed leader; no weapon/no police badge/no hat. Original character design inspired by Danganronpa's theatrical angular silhouettes, thick black ink, scratchy hair lines, sharp high contrast cel shading, dramatic but clean, costume richly designed with meaningful hierarchy and layered details. Keep female and dark brown skin. Portrait waist-up entire head and hands visible, true transparent background, no backdrop/no dark fog/no words/no franchise logos. Fully clothed age appropriate.

