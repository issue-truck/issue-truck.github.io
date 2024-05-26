---
title: "AIML 제품 UX에 대한 최상의 실천 방안"
description: ""
coverImage: "/assets/img/2024-05-17-BestPracticesforAIMLProductUX_0.png"
date: 2024-05-17 23:48
ogImage: 
  url: /assets/img/2024-05-17-BestPracticesforAIMLProductUX_0.png
tag: Tech
originalTitle: "Best Practices for AIML Product UX"
link: "https://medium.com/towards-data-science/best-practices-for-aiml-product-ux-f62da32d5392"
---


## 이 블로그 글은 AIML UX에서 "좋은 모습이 무엇인지"에 대한 실천 방법을 설명하고 예시를 제안하며 제품 리더들을 위한 전진 경로를 제시합니다.

최근 몇 년간 인공 지능 및 머신 러닝(AIML) 모델, 그 크기와 성능, 빠른 진화, 교육 비용, 보안, 지연 시간, 그리고 클라우드, 로컬 및 엣지에서의 다양한 모델 호스팅 선택에 초점을 맞추기 위해 시간, 피, 땀, 눈물, 잉크가 낭비되었습니다. 그러나 한 가지 간과된 영역은 최종 단계 제품 사용자 경험(UX)이며, AIML을 제품에 어떻게 효율적으로 통합할지에 대한 사항입니다.

본 블로그 글에서는 AIML UX에서 "좋은 모습이 무엇인지"에 대한 여러 실천 방법을 설명하고 참고 사례를 제시하며 제품 관리자와 리더가 제품과 비즈니스의 미래를 구성하는 데 전진 경로를 제시합니다. 또한, 아마존 리더십 원칙(LP)과 각각 "일상의 디자인"과 "나를 생각하게 하지 말라"를 집필한 돈 노먼 박사와 스티브 크러그가 제시한 UX 원칙과 이러한 실천 방법을 이중으로 조정하는 독특한 관점을 살펴봅니다. 이러한 원칙과 실천 방법은 AIML 솔루션을 구축할 때 특정 UX 조치와 아이디어를 권장하는 이유를 이해하는 데 견고한 기반이 됩니다.

# 관심은 당신이 필요한 모든 것입니다.

<div class="content-ad"></div>

![image](/assets/img/2024-05-17-BestPracticesforAIMLProductUX_0.png)

제품 기능은 AI 관련 여부와 관계없이, 편리하고 사용하기 쉽고 발견하기 쉽고 시각적으로 고객에게 보이는 방식으로 제시되지 않으면 영향을 미치지 않을 것입니다. 시각성은 UX 디자인에서 중요한 요소이며, 아마존의 발명과 단순화 LP와 일치하는데, 이는 제품 기능이 주의와 인식의 표면에서 쉽게 접근 가능하고 수월하고 헤매거나 헤매거나 찾거나 고군분투하지 않아도 되도록 하는 것을 제안하는 것입니다. 콘텐츠, 대화 또는 연락처에 관계없이, 올바른 정보를 올바른 시간에 올바른 사람에게 제공하는 것이 여기에서 중요합니다. 이제 어떤 것이 좋은지 살펴봅시다.

예를 들어, Google Workspaces는 제품 기능을 직접 Docs, Mail 및 기타 Google 앱의 UX에 포함시킴으로써 사용자가 새 문서를 작성하거나 기존 문서를 요약하는 것을 쉽게 할 수 있도록 합니다. Google Docs의 경우, 문구 아래에 콘텐츠가 생성되며, AIML 모델에 의해 생성되었음을 별표 (*) 기호로 명확히 표시됩니다. AIML에 의해 생성된 것으로 표시하는 이러한 방식은 예시 전체에서 자주 나타날 것입니다.

![image](/assets/img/2024-05-17-BestPracticesforAIMLProductUX_1.png)

<div class="content-ad"></div>

또 다른 예시로는 Slack AI가 있습니다. 이를 통해 검색 결과를 개인화하고 채널 활동 및 긴 복잡한 쓰레드를 요약할 수 있습니다. 이 경우에 생성된 콘텐츠는 주 창을 보강하는 맥락 세부 정보가 담긴 압축된 오른쪽 패널에 표시됩니다. 이는 편리하며 사용자를 과부하시키지 않으며 AI로 생성되었음을 명확히 표시합니다.

이후, Amazon.com은 이제 제품 리뷰의 요약을 생성 및 표시합니다. Amazon에 따르면, 2022년에만 1억 2천5백만 명의 고객이 Amazon.com에 거의 15억 개 리뷰 및 평점을 제공했으며, 일부 제품은 수천 개의 리뷰를 갖고 있습니다. 따라서 고객이 제품이 자신에게 적합한지 이해하는 데 도움을 주기 위해, Amazon.com은 제품 세부 페이지에 제품 특징 및 리뷰에서 자주 언급되는 고객 의견을 강조하는 짧은 단락을 제공합니다. AI로 생성된 리뷰는 제품 속성을 강조하고 고객이 특정 제품 속성을 언급하는 특정 인간 리뷰를 더 쉽게 찾도록 도와줍니다. 다시 말해, AI 콘텐츠는 압축되어 있고 기계로 생성되었음이 명확히 표시되며 일부 측면은 시각적 아이콘으로 표시됩니다.

[이미지](/assets/img/2024-05-17-BestPracticesforAIMLProductUX_3.png)

<div class="content-ad"></div>

# 그 말은 인용할 만하다구요

![이미지](/assets/img/2024-05-17-BestPracticesforAIMLProductUX_4.png)

신문사업계에서는 독자들이 당신을 믿기를 원한다면 소스를 "기록에 남겨" 굳이 그들의 동의를 얻어 인용할 수 있도록 고려하는 것이 좋다는 오래된 속담이 있습니다. 문헌적 소스를 인용하는 것은 학술 및 과학적 작성에 일반적으로 사용되는 관행입니다. 이 관행의 목적은 Amazon LPs 중 하나인 신뢰 획득 및 UX 원칙 중 하나인 도움됨을 달성하는 데 있습니다. 다른 사람들이 출처를 제공하는 좋은 예시를 통해 이 관행이 가장 잘 설명됩니다.

나는 AWS로 구축된 AI 기반 대화형 검색 서비스인 Perplexity.ai에게 "다중 대상 노드 간에 올바르게 로드 밸런싱되지 않고 1개의 IP 주소만 잘못된 캐싱을 하는 HAProxy 설치 문제를 해결하는 데 도와주세요. 자세하고 단계적인 지침을 제공해주세요." 라고 요청했습니다. 아래의 응답에서는 상단에 여러 소스가 목록화되어 있고 해당 소스를 참조하는 숫자 인용문 (예: [1])이 흩뿌려져 있는 것을 주목하세요.

<div class="content-ad"></div>

<img src="/assets/img/2024-05-17-BestPracticesforAIMLProductUX_5.png" />

다음으로, Amazon Q와 상호 작용하여 다음 질문을 하였습니다. "하루에 10만 건의 요청을 처리하는 Serverless API를 만들 계획입니다. 각 요청은 데이터베이스에서 데이터를 읽어야 합니다. 이 작업에 대해 최적의 서비스는 무엇인가요?" 한 번 더, 서비스가 내 질문에 대답하고 소스도 제공했지만, 응답에는 소스가 추가되어 있고, 실제 참조 사항은 응답 내에서 독자의 편의를 위해 식별되지 않았습니다. 또한, 믿음을 얻는 또 다른 메커니즘인 'Responsible AI policy'에 대한 명확한 링크에 대해 칭찬합니다. 어떤 접근 방식이 더 읽기 쉽고 이해하기 쉬운지는 구체적인 애플리케이션의 맥락에 따라 달라집니다. 인용이 명확히 해주나요? 주의를 산란시키나요? 어디에 위치시키는 것이 가장 적절한가요?

<img src="/assets/img/2024-05-17-BestPracticesforAIMLProductUX_6.png" />

# 사용자를 통해 배우는 방법.

<div class="content-ad"></div>

<img src="/assets/img/2024-05-17-BestPracticesforAIMLProductUX_7.png" />

사용자로부터 배우는 것은 비즈니스 결과에 결합된 계속적인 제품 개발에 중요합니다. 이 관행은 Amazon LP의 "배우고 호기심을 갖는" 및 UX 원칙인 피드백과 일치합니다. 사용자의 마음의 모든 것을 알 수 없으므로 질문하세요. 그들을 추적하고 측정한 다음 수집된 데이터를 결과와 일치시키세요. 주문을 증가시키고 보류 중인 장바구니, 즉 전환율로도 불리는 것을 줄이려면 전자 상거래 쇼핑 카트 경험을 최적화하는 것을 고려하세요. 사이트에서 보낸 시간과 클릭을 사용자 참여의 대리자로 간주하세요. 새로운 시스템에 참여할 때 반영하세요. 최적의 작업 성공률을 극대화하고 오류율을 줄이기 위해 참가 과정의 처음 몇 번의 클릭, 단계 및 분이 중요합니다. 이제 이러한 아이디어를 일반적인 상황에 맞추어보세요. 공개 제품에서 매우 새로운 인공 지능의 생성에 대한 것입니다. "좋아요/좋아하지 않음" 및 공유를 지원하는 조치와 같은 이 관행에 대한 일반적인 접근 방식이 있습니다.

Microsoft 365의 Copilot는 "좋아요/좋아하지 않음"에 대한 일등 좌석 단추를 통해 이 관행을 보여줍니다. 다른 칭찬할 만한 측면은 “AI가 생성한 콘텐츠가 부정확할 수 있다”는 명확하게 이탤릭체로 표시된 메시지입니다. 이것도 신뢰를 얻는 데 도움이 됩니다.

<img src="/assets/img/2024-05-17-BestPracticesforAIMLProductUX_8.png" />

<div class="content-ad"></div>

Salesforce용 Einstein Copilot은 좋아요/싫어요 액션 쌍을 잘 지원하며, 오른쪽 패널에서 요약이 AI로 생성되었음을 명확하게 표시하고, 사용자에게 출력 의도를 더 명확하게 만들기 위해 수용 vs 작성을 구분합니다.

![이미지](/assets/img/2024-05-17-BestPracticesforAIMLProductUX_9.png)

# 랜덤 포레스트 지도 만들기.

![이미지](/assets/img/2024-05-17-BestPracticesforAIMLProductUX_10.png)

<div class="content-ad"></div>

Lewis Carroll, "Alice in Wonderland"의 작가를 바꿔 말하자면, 당신이 어디로 가고 있는지 모른다면, 그 어떤 길도 당신을 거기로 데려다 줄 것입니다. AIML을 위한 핵심 UX 실천 방안을 지원하는 것은, 오래된 방식의 제품 로드맵이며, 이 큰 그림에 도달하기 위한 바로 가기는 없습니다. 이 실천 방안을 지원하는 원칙은 Amazon LP, 큰 그림으로 생각하기, 일관성을 위한 UX 원칙입니다. 대상 사용자, 제품 사용 사례 및 그들의 목표를 식별하십시오. 그리고 거꾸로 생각해보세요. 저희 Amazon에서는 종종 미래가 어떨 것인지 상상하고 외부 PR 측면과 내부 FAQ 세부 측면에서 생각해보는 PRFAQ 문서를 작성합니다. 고객 목표를 달성하기 위해 필요한 고수준 솔루션 정보 및 프로세스를 고민해보세요. 그런 다음 UX 레이어 및 다른 기술 레이어의 솔루션 구성 요소로 집어들어 가세요. 위험, ROI, 반드시 필요한 항목 대 좋아하는 항목 등을 기준으로 솔루션 및 구성 요소의 마일스톤을 조정하고 우선순위를 정하세요. 제품, 엔지니어링 및 영업 팀 간에 합의를 이루세요. 그런 다음 여정 중에 일부 조정을 할 것이라는 전제하에 로드맵에 따라 실행하세요.

# 결론

본 블로그에서는 4가지 AIML 제품 UX 실천 방안을 다루었습니다: Attention is All You Need (시각화/단순화), You Can Quote me on That (신뢰 쌓기/도움이 됨), Learning from Users through Loops (학습하고 호기심을 갖기/피드백), Have a Map for the Random Forest (큰 그림으로 생각하기/일관성). 또한 Amazon, Google, Microsoft, Perplexity, Salesforce, Slack를 포함한 선진 기술 기업들의 실제 제품 예시를 통해 이러한 실천 방안과 원칙을 설명했습니다. 여러분이 본인의 제품과 솔루션에 즉시 적용할 수 있는 새로운 정보를 얻길 바라며, 앞으로 나아가서 창조해보세요!

면책사항: 본 기사 내용은 제 개인 의견일 뿐, 근로자의 의견이 아닐 수 있음을 참고해 주세요.

<div class="content-ad"></div>

이 기사가 마음에 드셨나요? 의견을 공유해 주세요. 더 많은 업데이트를 받으려면 저를 Medium과 Twitter에서 팔로우해주세요.

# 참고 자료

- https://www.nngroup.com/articles/principles-visual-design/
- https://www.nngroup.com/articles/product-ux-benchmarks/
- https://sensible.com/dont-make-me-think/
- https://workspace.google.com/solutions/ai/?
- https://slack.com/blog/news/slack-ai-has-arrived
- https://www.aboutamazon.com/about-us/leadership-principles
- https://www.aboutamazon.com/news/amazon-ai/amazon-improves-customer-reviews-with-generative-ai
- https://www.microsoft.com/en-us/microsoft-365/enterprise/copilot-for-microsoft-365
- https://ui-patterns.com/patterns