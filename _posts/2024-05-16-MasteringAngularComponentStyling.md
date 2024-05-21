---
title: "앵귤러 컴포넌트 스타일링 마스터하기"
description: ""
coverImage: "/assets/img/2024-05-16-MasteringAngularComponentStyling_0.png"
date: 2024-05-16 00:26
ogImage: 
  url: /assets/img/2024-05-16-MasteringAngularComponentStyling_0.png
tag: Tech
originalTitle: "Mastering Angular Component Styling"
link: "https://medium.com/@nandeepbarochiya/mastering-angular-component-styling-d1fd40cd9b17"
---



<img src="/assets/img/2024-05-16-MasteringAngularComponentStyling_0.png" />

이 블로그 포스트에서는 Angular의 Shadow DOM 모드 및 Emulated 모드, 스타일 스코프, 템플릿에서 스타일 정의, 외부 스타일 파일 참조 및 의사 클래스에 대해 알아볼 것입니다. 각 개념에 대한 예제 코드도 제공할 것입니다.

# 컴포넌트 스타일링

컴포넌트는 컴포넌트의 DOM에 적용되는 CSS 스타일을 포함할 수 있습니다. 이러한 스타일은 @Component 데코레이터의 styles 속성을 사용하여 인라인으로 정의하거나 styleUrl 속성을 사용하여 별도의 파일에서 정의할 수 있습니다.




# 스타일 스코핑

각 컴포넌트마다 뷰 캡슐화 설정이 있어서 프레임워크가 컴포넌트의 스타일을 적용하는 방식을 결정합니다. 세 가지 뷰 캡슐화 모드가 있습니다: 모의, 쉐도우 돔, 그리고 없음.

## 모의:

- 모의 모드는 Angular 컴포넌트의 기본 모드로, 컴포넌트의 스타일은 해당 컴포넌트의 템플릿에서 정의된 요소에만 적용됩니다. Angular는 각 컴포넌트 인스턴스마다 고유한 HTML 속성을 생성하고 해당 컴포넌트의 템플릿 요소에 추가합니다. 이로써 컴포넌트의 스타일이 애플리케이션의 다른 부분에 영향을 미치지 않습니다.
- 다음은 모의 모드로 지정된 컴포넌트의 예시입니다:



```js
@Component({
  selector: 'app-example',
  template: `
    <h1>This is an example component</h1>
    <p>This paragraph will be styled</p>
  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class ExampleComponent { }
```

- 이 예시에서 p 태그는 빨간색 텍스트로 스타일이 지정됩니다. 그러나 이 스타일은 이 컴포넌트 바깥의 다른 p 태그에는 영향을 주지 않습니다.

## Shadow DOM:

- Shadow DOM 모드는 스타일을 컴포넌트 뷰에 지정하는 데 네이티브 Shadow DOM API를 사용합니다. 이렇게 함으로써 스타일이 더 잘 격리되어 컴포넌트별 스타일을 쉽게 작성할 수 있습니다. 그러나 이 모드는 Shadow DOM API를 지원하는 현대적인 브라우저가 필요합니다.
- 엄격히 말해서, 컴포넌트의 스타일만 컴포넌트 템플릿 내의 요소에 적용됨을 보장합니다.
- Shadow DOM 모드를 사용한 예시는 다음과 같습니다:```



```js
@Component({
  selector: 'app-example',
  template: `
    <h1>이것은 예제 컴포넌트입니다</h1>
    <p>이 단락은 스타일이 적용될 것입니다</p>
  `,
  styleUrls: ['./example.component.shadow.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ExampleComponent { }
```

- 이 예제에서 styleUrls 속성은 이 컴포넌트의 스타일을 포함하는 별도의 CSS 파일을 가리킵니다. 캡슐화 속성은 ViewEncapsulation.ShadowDom으로 설정되어 Shadow DOM 모드를 활성화합니다.

## None:

- None 모드에서 Angular는 컴포넌트의 모든 스타일 캡슐화를 비활성화하여 스타일이 다른 부분에 영향을 줄 수 있는 전역 스타일로 동작합니다.
- None 모드를 사용하는 컴포넌트의 예시는 다음과 같습니다:```



```js
@Component({
  selector: 'app-example',
  template: `
    <h1>This is an example component</h1>
    <p>This paragraph will be styled</p>
  `,
  styles: [`
    p {
      color: red;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent { }
```

- 위 예제에서는 view 캡슐화를 비활성화하기 위해 encapsulation 속성이 ViewEncapsulation.None으로 설정되어 있습니다. 이는 p 태그를 빨간색 텍스트로 스타일링하지만, 이 스타일이 이 컴포넌트 외부의 다른 p 태그에도 영향을 미칠 수 있음을 의미합니다.

# 템플릿에서 스타일 정의하기

컴포넌트 템플릿에서 `style` 요소를 사용하여 추가 스타일을 정의할 수 있습니다. 이 방법으로 정의된 스타일에는 컴포넌트의 view 캡슐화 모드가 적용됩니다.




# 외부 스타일 파일 참조

컴포넌트 템플릿은 `link` 요소를 사용하여 CSS 파일을 참조할 수 있습니다. 또한 CSS는 @import at-rule을 사용할 수 있습니다.

# 가상 클래스

Angular의 emulated 캡슐화 모드는 :host와 :host-context() 가상 클래스를 지원하며, 사용자 정의 가상 클래스 ::ng-deep도 지원합니다. 그러나 Angular 팀은 ::ng-deep의 신규 사용을 강력히 권장하지 않습니다.



# Shadow DOM Mode vs Emulated Mode

앵귤러에서는 Shadow DOM 모드와 Emulated 모드가 컴포넌트 스타일을 적용하는 두 가지 다른 방식입니다. 아래는 두 모드를 비교한 내용입니다:

## Emulated Mode

- 기본 모드: 이것은 앵귤러의 기본 뷰 캡슐화 모드입니다.
- 속성 기반 스코프: 앵귤러는 각 컴포넌트 인스턴스에 대해 고유한 HTML 속성을 생성하고 컴포넌트 템플릿의 요소에 추가합니다. 이 속성은 스타일을 적용하는 데 사용됩니다.
- 네이티브 Shadow DOM 없음: Emulated 모드는 네이티브 Shadow DOM API를 사용하지 않습니다.
- 브라우저 지원: 이 모드는 구식 브라우저를 포함한 모든 브라우저에서 작동합니다.
- 성능: Shadow DOM 모드보다 빠릅니다. 왜냐하면 브라우저가 Shadow DOM을 생성할 필요가 없기 때문입니다.
- 스타일 제한: :host와 같은 일부 CSS 선택기가 예상대로 작동하지 않을 수 있습니다.



## 셰도우 DOM 모드

- 네이티브 셰도우 DOM: 이 모드는 원본 셰도우 DOM API를 사용하여 스타일을 정확하게 스코핑합니다.
- 네이티브 스코핑: 스타일은 컴포넌트의 셰도우 DOM 내에서 스코핑되어 해당 컴포넌트 내 요소에만 적용됩니다.
- 더 나은 스타일 격리: 스타일을 더 잘 격리시켜 컴포넌트별 스타일 작성이 쉬워집니다.
- 브라우저 지원: Chrome, Firefox, Edge와 같은 새로운 브라우저를 지원합니다.
- 성능: Emulated 모드보다 느릴 수 있으며, 브라우저가 셰도우 DOM을 생성해야 합니다.
- 스타일 제한: :host와 같은 고급 CSS 선택자를 지원하며 CSS 가상 요소에 대한 더 나은 지원을 제공합니다.

<img src="/assets/img/2024-05-16-MasteringAngularComponentStyling_1.png" />

Angular 가이드의 컴포넌트 스타일링에 대한 모든 주제를 다루었기를 바라며!