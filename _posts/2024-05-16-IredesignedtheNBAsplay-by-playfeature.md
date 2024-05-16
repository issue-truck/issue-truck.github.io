---
title: "NBA의 플레이 바이 플레이 기능을 재디자인했어요"
description: ""
coverImage: "/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_0.png"
date: 2024-05-16 10:49
ogImage: 
  url: /assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_0.png
tag: Tech
originalTitle: "I redesigned the NBA’s play-by-play feature"
link: "https://medium.com/@Pabloesquivelc/i-redesigned-the-nbas-play-by-play-feature-8d28f3a4fdc8"
---


시카고 불즈의 디자인 직무 면접에서는 앱 내의 play by play 기능을 재디자인하는 것을 요청받았어요. 일자리를 얻지는 못했지만, 만들어본 것을 공유할 가치는 충분하다고 생각해요.

(참고로, 시카고 불즈에서 만난 모든 분들이 정말 멋있었어요. 절대로 상처 받은 건 없답니다).

# 기회의 여지:

이 기능은 TV나 온라인 스트리밍에 접근할 수 없는 시카고 불즈 팬들을 대상으로 디자인되었어요. 팬들이 쉽게 각 플레이를 이해할 수 있는 방법을 만드는 것이 목표였죠. 정보의 계층 구조를 재정렬하고 코트 위의 플레이를 나타내는 그래픽 요소를 추가함으로써 사용자 친화적인 방식으로 각 플레이를 이해할 수 있도록 했어요. 주요 문제점은 아래와 같았어요:



- 모든 플레이가 비슷해 보였어요
- 게임을 상상하기가 어려웠어요
- 플레이 업데이트가 명확하지 않았어요
- 각 플레이에 복잡한 세부 정보를 표시해주세요

![이미지](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_0.png)

# 연구:

시장에서 기존 플레이-바이-플레이 기능을 분석하여 긍정적인 측면과 부정적인 측면을 평가하며 프로세스를 시작했습니다. 몇 가지 앱이 어떻게 농구 플레이를 제시하는지, 그리고 다른 스포츠에서 어떻게 플레이가 제시되는지 살펴보았습니다. 연구 결과, 특히 과도하게 빠른 농구 게임의 맥락에서 플레이-바이-플레이 기능을 재설정하는 큰 기회가 있다는 것을 강조했습니다.



![이미지](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_1.png)

이 예시들 각각의 플레이 요소를 분석하여 가장 중요한 정보를 추출했어요. 이 정보를 나중에 시각적으로 매력적이고 일관성 있게 재구성할 거에요.

![이미지](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_2.png)

# 영감



프로젝트 개요와 제가 진행한 보조 연구는 전체 과정을 안내하기 위한 명확한 우선 순위 목록을 제공했어요:

- 게임의 명확한 흐름을 보여주기
- 사용자에게 각 플레이에 대한 시각 정보 제공하기
- 게임 진행 상황 보여주기

디자인 과정에서 더 발전시킨 농구 코트 모델에서 플레이를 표현하는 아이디어가 나왔어요.

# 정보 구조화



간단한 카드 정렬 연습을 통해 정보의 계층을 정립할 수 있었습니다. 이번 기회에는 iPad에 생각나는 모든 구성 요소를 나열하고 화면에서 그 순서를 바꿔 보았어요.

![이미지에 대한 대체 텍스트](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_3.png)

이 연습 중에 가장 중요한 요소가 스플레이 유형이라는 결론에 도달했습니다. 선수나 팀과 같은 다른 요소들도 중요하지만, 리바운드나 어시스트 등의 양은 "통계" 탭에 더 어울릴 것으로 생각했습니다. 중요도순으로 요소들을 순위 매겼죠:

- 스플레이 유형
- 선수
- 팀
- 시간
- 쿼터



# Symbols 아이디어

사용자가 플레이 유형을 즉시 식별할 수 있도록하는 첫 번째 아이디어는 플레이 유형을 그래픽으로 나타내는 일련의 아이콘을 생성하는 것이었습니다. 처음에는 이 아이디어가 좋은 것 같았기 때문에, 빠르게 시도할 수 있는 아이콘 세트를 스케치해보았습니다.

그런 다음, 실제 UI에서 이 아이디어가 어떻게 작동하는지 시각적으로 이해하기 위해 와이어프레임을 그리기 시작했습니다.

또한, 플레이를 공간에 표현하기 위해 농구 코트가 있는 것이 좋을 것이라는 나의 아이디어를 도입하기로 결정했습니다. 어떻게 작동할지 정확히 알 수 없었지만, 일단 그것을 시도하기로 결정했습니다.



```markdown
![Image 1](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_4.png)

At this stage, I felt ready to start prototyping some medium fidelity wireframes.

![Image 2](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_5.png)

I incorporated some of the iconography that I had briefly developed into the wireframes. However, I quickly realized that the team's colors were not enough to identify the team, and having the team logo beside each play was crucial.
```



```markdown
![Play-by-Play Feature Redesign](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_6.png)

Sadly, this meant that the icons would have to be scrapped due to the lack of space in the UI. I revisited incorporating the icons later on, but I found them to be redundant in the end.

## Colour Bars Idea

I liked how placing a color bar beside every play helped indicate which team had made the play.
```



물론, 지금은 각 팀의 로고가 있겠지만, 막대들이 각 플레이에 멋진 시각적 신호를 추가할 것이야. 처음에는 막대가 각 팀의 색과 일치할 것이라는 것이 약간 명백했어.

<img src="/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_7.png" />

그런 다음, 불스(Bulls)팀을 위한 빨간색 막대와 다른 팀을 위한 회색 막대를 가지는 것을 생각했어. 왜냐하면 불스(Bulls) 팬들은 상대팀이 하는 플레이보다 자신의 팀이 하는 플레이에 더 신경을 쓸 것이기 때문이지.

<img src="/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_8.png" />



그러나 사용성 테스트 중에 점수를 강조하기 위해 색상을 사용하는 것이 더 의미가 있고 마이크로 디자인 시스템을 위한 훌륭한 기반이 될 것이라는 것을 발견했습니다.

![play information](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_9.png)

# 재생 정보

처음에는 많은 플레이 세부사항을 생략할 수 있을 것으로 생각했습니다. 그러나 프로세스를 더 깊이 파고들수록, 한발의 슛 거리와 같은 제외한 일부 세부사항이 사용자에게 실제로 가치 있을 것이라는 것을 깨달았습니다. 물론 이를 더 깊이 연구해야 할 필요가 있지만, 이 연습에서는 사용자가 그 정보를 가치 있다고 가정했습니다.



게임 중에는 확장 가능한 플레이 구성 요소를 사용했어요. 사용자가 그 위를 탭하면 더 많은 정보가 나타났어요. 그런데 빠른 템포의 라이브 게임 상황에서는 이 상호작용이 전혀 의미가 없었어요. 사용자들은 플레이를 훑어볼 때 바로 모든 정보를 알고 싶었어요.

여기서 요령은 모든 필요한 정보를 작은 공간 안에 포장하고 이해하기 쉽게 하는 것이었어요. 일반적인 또는 스코어링으로 플레이를 나누는 레이아웃을 개발했어요. 각각이 관련 정보를 명확하고 간결하게 표시해주었어요.

이 레이아웃에 굉장히 만족했어요. 처음에 설정한 모든 기준을 충족했거든요. 시각적으로 명확하고 아름답고, 많은 정보를 잃지 않으면서 빠르게 훑어볼 수 있었어요. 그리고 더 많은 정보가 필요한 것을 실제 테스트를 통해 확인하면 빠르게 수정할 수 있다는 것이 최고의 장점이었어요.



# Visual Court

저의 실험적인 아이디어에 도착했어요. 가진 시간과 자원의 양으로 많은 사용자들과 완전히 테스트할 수 없었어요. 기술적으로 실현 가능한지에 대한 지식도 없어서요. 그러나 이것은 탐구할 가치가 있다고 생각했어요.

팬들이 게임이 진행되는 것을 실제 코트에서 시각화할 수 있다면 멋지겠다고 생각했어요. 저는 2D와 3D 농구 코트를 디자인했는데, 3D 코트가 게임을 시뮬레이션하는 데 더 잘 동작하는 것을 발견했어요. 왜냐하면 그게 관중석에서 보이는 코트의 모습이기 때문이죠.

![이미지](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_11.png)



경기의 플레이들은 플레이메이커의 위치를 원 형태로, 패스를 선으로, 그리고 드리블을 점선으로 코트에 반영됩니다. 플레이가 업데이트될 때마다 공의 위치와 궤적도 동시에 업데이트되며, 이전 정보는 투명도를 줄이며 사라집니다. 공의 소유권이 변경되면 라인은 상대팀의 공격을 위해 재설정됩니다.

마지막으로, 훅이 자연스럽게 만들어낸 공간을 활용해 불스가 득점할 때마다 재미있는 애니메이션을 보여줄 수 있습니다.

![이미지](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_12.png)

# 플레이 영상



한 명의 사용자가 기능을 시험한 후, 그는 연극이 끝난 후 짧은 클립을 볼 수 있다면 정말 멋진 아이디어일 것이라고 언급했어요. 저는 이것이 정말 멋진 아이디어라고 생각했죠. 이 기능을 통합하기 위해 UI를 더 개선했어요. 연극의 비디오가 준비되면 사용자는 앱에서 play를 클릭하여 간단히 시청할 수 있어요. 비디오가 팝오버되고 짧은 클립이 재생될 거예요.

![](/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_13.png)

# 결론

전체적으로 리디자인은 완벽한 성공이었다고 생각해요. 프로토타입을 테스트한 사람들로부터 받은 질적 피드백은 전반적으로 매우 긍정적이었어요. 앞으로 더 탐구하고 싶은 것은 '실시간' 농구 코트 플레이예요. 더 많은 시간과 자원이 있다면, 팬들이 각 플레이를 다시 경험할 수 있도록 하는 풀스크린 몰입형 경험을 탐구할 수 있는 기회가 있다고 생각해요. 이 경험으로 팬들은 자신의 팀이 경기 중인 유나이티드 센터에 앉아있는 느낌을 받을 수 있을 거에요.



<img src="/assets/img/2024-05-16-IredesignedtheNBAsplay-by-playfeature_14.png" />

읽어 주셔서 감사합니다!