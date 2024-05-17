---
title: "ChatGPT를 혁신에 활용하기 Journey mapping, 스토리보드"
description: ""
coverImage: "/assets/img/2024-05-17-UsingChatGPTforinnovationJourneymappingStoryboarding_0.png"
date: 2024-05-17 23:47
ogImage: 
  url: /assets/img/2024-05-17-UsingChatGPTforinnovationJourneymappingStoryboarding_0.png
tag: Tech
originalTitle: "Using ChatGPT for innovation: Journey mapping , Storyboarding"
link: "https://medium.com/@christian.graham_49279/using-chatgpt-for-innovation-journey-mapping-storyboarding-aa693cc8c69e"
---


# 소개

여정 매핑은 디자인 중인 제품 또는 서비스를 이용하는 사용자가 어떻게 체험할지를 이해하는 데 유용한 방법입니다. 프로토타입 초기 단계에서는 주로 다음과 같은 중요한 순간에 초점을 맞출 수 있습니다.

- 인지 — 사용자가 제품/서비스에 대해 알아낼 방법
- 고려 — 사용자가 그것을 사용하는 방법과 선택에 대한 결정
- 초기 상호작용 — 사용하는 첫 경험
- 채택 — 그것을 계속 사용하게 만드는 것
- 영향 — 그들의 삶에 미치는 차이
- 옹호 — 사용자가 제품 또는 서비스를 위한 챔피언이 되는 방법

그리고 각 단계에서는 사용자가 필요로 할 수 있는 지원이 무엇인지 고려합니다.

<div class="content-ad"></div>

스토리보드는 우리의 여정 지도를 기반으로 "낮은 해상도 프로토 타입"을 만들어 피드백을 받을 수 있는 기회를 제공합니다.

이 블로그 게시물에서는 IDEO의 DesignKit을 기반으로 한 AI 지원 프로세스를 소개할 것입니다. 이 프로세스는 초기 컨셉을 여정 맵핑을 통해 스토리보드로 이어지도록 도와줍니다. 이미 찾아보지 않았다면, 사용자 페르소나 생성에 관한 저의 이전 포스트를 유용하게 활용할 수 있을 것입니다.

# 옥토파이 소개

당신이 제시하는 아이디어를 여정 상에서 스토리보드로 가는 과정을 도와줄, IDEO의 DesignKit를 기반으로 한 AI 지원 프로세스를 소개하겠습니다. 이 프로세스는 많은 양의 데이터를 요약하고 거의 모든 것을 시뮬레이션할 수 있는 능력으로, 자연세계의 숨겨진 음성을 기업 의사 결정에 더 잘 대변할 수 있는 방법을 고민해왔습니다. 여기에 제가 매우 잘 설명하지 못한 컨셉이 있습니다 (자유롭게 차용하거나 적응해도 좋습니다):

<div class="content-ad"></div>

뭐든 상관없어요. 우리 AI 도구에 좋은 출발점이에요. 똑같이, 누가 그것을 사용할지에 대한 명확한 그림이 없어서, 도구가 몇 가지 제안을 해보도록 할게요. 하지만 더 나은 결과를 위해서, 사용자 페르소나, 시장 통찰력 등이 담긴 좀 더 확실한 컨셉을 가져오는 것이 좋을 거에요.

# GPTs 입력하기

저가 지난 번에 올릴 때부터 ChatGPT에서 가장 유용한 혁신 중 하나는 GPTs를 생성할 수 있는 능력이에요. 이들은 ChatGPT의 특정 작업에 초점을 맞춘 ChatGPT의 구체적인 인스턴스로, ChatGPT+ 계정이 있는 누구나 만들 수 있어요 (곧 모두에게 사용할 수 있을 거에요).

우리가 사용할 첫 번째 GPT는 Journey Map Creator라고 불리는 것이에요. 저는 여기서 시스템 프롬프트를 반복하지 않을 거에요 (도구에게 재생산하도록 요청해도 괜찮아요) - 그리고 당신이 입력한 내용을 보거나 저장하거나 어떠한 방식으로도 캡처하지 않을 거에요. 당연히, OpenAI는 그렇죠!

<div class="content-ad"></div>

```markdown
![이미지](/assets/img/2024-05-17-UsingChatGPTforinnovationJourneymappingStoryboarding_0.png)

우리가 개념을 입력하면 다음과 같은 응답이 옵니다:

그럴싸해 보이고, 사용자가 누구인지에 대해 흥미로우나 공정한 가정을 했다. 분명히, 이를 이어서 대규모 다국적 석유 회사의 임원과 같이 더 어려운 사용자 페르소나로 바꾸는 요청을 할 수 있습니다. 또는 여행지도에서 일부 단계를 추가/삭제할 수도 있습니다.

다음 단계는 이 출력물을 다시 다른 GPT인 "여행지도 스토리보드 생성기"에 입력하는 것입니다. 이 GPT는 우리의 여행지도로부터 6개 패널 스토리보드를 생성하는 데 집중할 것입니다.
```

<div class="content-ad"></div>

![이미지](/assets/img/2024-05-17-UsingChatGPTforinnovationJourneymappingStoryboarding_1.png)

우리는 그런 다음 ChatGPT에게 DALL-E를 사용하여 각 패널용 이미지를 만들도록 요청할 수 있습니다.

보통 나는 현대적인 그래픽 소설 스타일의 이미지를 요청하는데, 사실적인 것보다 혼란을 피하기 위해서입니다.

![이미지](/assets/img/2024-05-17-UsingChatGPTforinnovationJourneymappingStoryboarding_2.png)

<div class="content-ad"></div>

![이미지](/assets/img/2024-05-17-UsingChatGPTforinnovationJourneymappingStoryboarding_3.png)

이를 더욱 발전시켜, 한 대화 내에서 여러 번 사용한 GPT를 호출하여 작업 흐름을 더욱 원활하게 만들 수 있습니다. 간단히 "@" 기호를 사용하여 GPT를 호출하고 목록에서 선택하세요:

![이미지](/assets/img/2024-05-17-UsingChatGPTforinnovationJourneymappingStoryboarding_4.png)

# 마지막으로

<div class="content-ad"></div>

AI를 혁신에 활용하는 것은 많은 이점을 제공할 수 있지만, 윤리적이고 효과적인 사용을 보장하기 위해 프로세스 전반에 인간 감독과 책임이 있는 것이 중요합니다. AI를 사용한 이 차에 탑승자가 아니라 운전자가 되는 것을 명심하세요!

# 추가로 알아보기

다음 항목에서 ChatGPT를 활용한 혁신에 대한 내 다른 게시물을 참고하세요:

- 사용자 페르소나 및 사용자 그룹

<div class="content-ad"></div>

미래와 선견지명에 대해 다루는 것들도 포함되어 있습니다.

크리스천 그레이엄은 지구 친구들의 실험팀을 공동 지도하며 혁신을 위한 네트워크의 스티어링 그룹 회원이기도 합니다.