# React Tinder Card Demo

A demo project to my [react-tinder-card](https://github.com/3DJakob/react-tinder-card) npm module.

## Try the demo

![](demo.gif)

Try the demo on the gh-pages site [here!](https://3djakob.github.io/react-tinder-card-demo/)

## The code

Feel free to check out the code in [react-tinder-card-demo/src/examples](https://github.com/3DJakob/react-tinder-card-demo/tree/master/src/examples) for a usage example of how this application uses the module.

### Simple

The simple example is the minimum code needed to get you started.

### Advanced

The advanced example implements a state with references to swipe and restore cards using buttons.

## Demo

Both code examples can be tested on the [demo page.](https://3djakob.github.io/react-tinder-card-demo/)

## Props (ko)

### `flickOnSwipe`

- optional
- type: `boolean`
- default: `true`

스와이프 후 요소를 화면 밖으로 튕겨낼지 여부를 나타냅니다. 밖으로 나가는 애니메이션과 `display: none` 속성을 부여합니다.

### `onSwipe`

- optional
- type: `SwipeHandler`

스와이프가 완료되었을 때 실행될 콜백입니다. `'left'`, `'right'`, `'up'`, `'down'` 중 어느 방향으로 스와이프가 진행되었는지를 나타내는 단일 문자열로 호출됩니다.

### `onCardLeftScreen`

- optional
- type: `CardLeftScreenHandler`

`TinderCard`가 화면을 떠났을 때 실행되는 콜백입니다. `'left'`, `'right'`, `'up'`, `'down'` 중 어느 방향으로 스와이프가 진행되었는지를 나타내는 단일 문자열로 호출됩니다. (`display: none` 이 되고 실행됩니다.)

### `preventSwipe`

- optional
- type: `Array<string>`
- default: `[]`

화면 밖으로 스와이프되지 않도록 하는 방향 배열입니다. 유효한 인수는 `'left'`, `'right'`, `'up'`, `'down'`입니다.

### `swipeRequirementType`

- optional
- type: `'velocity' | 'position'`
- default: `'velocity'`

출시 시 카드를 어떤 방향으로 던질지 평가할 방법입니다. `'velocity'`는 스위핑 동작의 방향을 기준으로 방향을 평가합니다. `'position'`은 앱 Tinder에서처럼 스크린에서 카드의 위치를 기준으로 방향을 평가합니다. `'position'`으로 설정된 경우, 수동으로 스와이프를 설정하는 것이 좋습니다. 모든 장치가 기본 거리인 300px와 크기에 따른 임계값은 1px을 수용하지는 않으므로 바람직하지 않은 낮은 값일 가능성이 높기 때문입니다.

### `swipeThreshold`

- optional
- type: `number`
- default: `300`

스와이프를 허용하는 임계값입니다. 스위핑 시 요구사항 유형이 Velocity로 설정됩니다.

### `onSwipeRequirementFulfilled`

- optional
- type: `SwipeRequirementFufillUpdate`

TinderCard가 해제 시 ('스와이프가 완료되었을 때'와 비슷한 어감으로 사료된다.), 스와이프에 필요한 요구 사항을 충족했을 때 실행될 콜백입니다. 이 기능은 `onSwipeRequirementUnfilled`와 함께 사용하면 카드에 사용자 피드백을 표시하는 데 유용합니다. 이 기능을 사용할 때는 스와이프 요구 사항을 사용하는 것이 좋습니다. 'swipeRequirementType position'을 입력하십시오. 그렇지 않으면 불이 많이 붙습니다. 사용자가 스위핑하는 방향을 나타내는 단일 문자열(`'left'`, `'right'`, `'up'` 또는 `'down'`)로 호출됩니다.

### `onSwipeRequirementUnfulfilled`

- optional
- type: `SwipeRequirementUnfufillUpdate`

TinderCard가 해제 시, 스와이프에 필요한 요구 사항을 충족하지 못할 때 실행될 콜백입니다.

### `className`

- optional
- type: `string`

HTML attribute class

## API (ko)

### `swipe([dir])`

- `dir` (`Direction`, optional) - The direction in which the card should be swiped. One of: `'left'`, `'right'`, `'up'` and `'down'`.
- returns `Promise<void>`

`'left'`, `'right'`, `'up'` and `'down'` 방향 중 하나로 trigger 합니다. `TinderCard` 인스턴스의 참조에서 호출할 수 있습니다. Check the [example](https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js) code for more details on how to use this.

### `restoreCard()`

- returns `Promise<void>`

스와이프된 카드 상태를 복원합니다. 스와이프된 카드를 실행 취소하려면 이 기능을 사용하십시오. 카드가 반환되면 Promise는 resolve 상태를 반환한다.
