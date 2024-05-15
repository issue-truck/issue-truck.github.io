---
title: "중력 포텐셜의 간단한 유도 05c D"
description: ""
coverImage: "/assets/img/2024-05-16-SimplerDerivationofGravitationalPotential05cD_0.png"
date: 2024-05-16 01:07
ogImage: 
  url: /assets/img/2024-05-16-SimplerDerivationofGravitationalPotential05cD_0.png
tag: Tech
originalTitle: "Simpler Derivation of Gravitational Potential = 0.5×c² D²"
link: "https://medium.com/timematters/simpler-derivation-of-gravitational-potential-0-5-c%C2%B2-d%C2%B2-26b8dced19da"
---


## (c는 빛의 속도이고, D는 그 지역의 시간 확장)

최근에는 중력 포텐셜 = 0.5×c²/D²에 대한 공식을 도출했습니다. 이 공식은 어떤 매질에서의 파동 속도 "c"에 대한 뉴턴-라플라스 공식으로부터 유도되었습니다.

c = sqrt(γ×P/ρ)

파동 속도 "c"를 시간 확장된 빛의 속도 c/D로 대체하고, γ와 ρ 종속성을 제외하여 (즉, 공식을 c/D~sqrt(P)로 단순화하고), 나중에 누락된 요인들을 복구하기 위해 Dr. Robinson의 결과와 통합할 때 사용됩니다. 이제, 더 간단한 접근법을 사용해 보겠습니다. γ와 ρ를 그대로 유지하면서:



- c/D = sqrt(γ×P/ρ). 이제 양변을 제곱하여 sqrt를 제거합니다:
- c²/D² = γ×P/ρ
- X 지점에서: c²/D(X)² = γ×P(X)/ρ
- X+Δ 지점에서: c²/D(X+Δ)² = γ×P(X+Δ)/ρ
- 빼보면: c²/D(X+Δ)² - c²/D(X)² = γ×(P(X+Δ) - P(X))/ρ

양변을 Δ로 나눈 후, 우변을 1m²로 곱하고 나눕니다:

💥 (c²/D(X+Δ)² - c²/D(X)²) / Δ = γ×(P(X+Δ) - P(X)) ×1m² / (ρ×1m²×Δ)

(P(X+Δ) - P(X))×1m² = - F(X), 이때 F(X)는 1m²×Δ 층에 작용하는 결과적인 힘입니다.



음수 부호가 F(X) 앞에 있으면 F의 반대 방향을 나타냅니다. P(X+Δ)`P(X)일 때:

![image](/assets/img/2024-05-16-SimplerDerivationofGravitationalPotential05cD_0.png)

P(X+Δ)`P(X)일 때, P(X+Δ)–P(X)는 음수이며, -F(X)도 음수이므로, F(X)는 양수입니다. 따라서 결과적인 힘 F는 X와 같은 방향을 가리킵니다.

ρ×1m²×Δ는 이 레이어의 질량을 나타냅니다. 힘을 질량으로 나눈 것이 가속도이거나 음의 부호를 가진 가능성의 미분이기 때문에:



- γ×(P(X+Δ) – P(X)) ×1m² / (ρ×1m²×Δ) = γ×Potential`(X).

아포스트로피 `는 이 위치의 도함수 (이 경우 X)를 나타냅니다.

그리고 (c²/D(X+Δ)² – c²/D(X)²) / Δ = (c²/D(X)²)`, 공식

💥 (c²/D(X+Δ)² — c²/D(X)²) / Δ = γ×(P(X+Δ) — P(X)) ×1m² / (ρ×1m²×Δ)



아래 텍스트를 친절한 톤으로 한국어로 번역해드리겠습니다.

- (c²/D(X)²) = γ×Potential(X)
- c²/D² = γ×Potential (물리학에서 포텐셜에 대한 상수는 무시됨).

요인 γ는 매짤 "입자"의 자유도 f와 관련이 있으며, γ = 1+2/f로 매칭됩니다 (자유도와의 관련에 대한 설명은 자유도와 관련에서 볼 수 있음). 속도가 광속인 입자의 경우, 두 가지의 자유도만 있으며, 입자의 속도가 변경되지 않도록 하기 위해 입자 속도에 수직인 평면에서만 진동할 수 있습니다. 이는 비교적 정식적인 설명은 이하 P.S.에서 확인할 수 있습니다. 따라서, f = 2 및 γ = 1+2/f = 2로 가정하면:

- c²/D² = γ×Potential = c²/D² = 2×Potential = Potential = 0.5×c²/D²



```markdown
![그림](/assets/img/2024-05-16-SimplerDerivationofGravitationalPotential05cD_1.png)

중력 g는 D` 또는 ∇D(위치에 대한 미분 또는 D의 그래디언트)에만 의존합니다.

추신: 이론 물리학자의 격언: "요약하면, 질량이 없는 입자들은 회전군 SO(2)의 두 차원 회전 군을 나타내는 스핀 상태만을 가지기 때문에 자유도가 두 개뿐이죠. 이 회전 군은 Abel적입니다..."

추신2: (아직 읽지 않으셨다면) 2024년에 출간된 "아인슈타인의 일반 상대성 이론이 기본으로"의 시간 이완 D = exp(G×M/(R×c²))의 거리 R로부터의 질량 M을 삭제합니다. 물리학에서 "사건 지평선"을 제거합니다.
```