# 동전 거스름돈

### 구분

DP 연습 문제 (feat.Claude AI)

### 문제 설명

<p>여러 종류의 동전이 주어집니다. 이 동전들을 사용하여 특정 금액을 만들려고 합니다.</p>
<p>각 동전은 <strong>무한히 사용</strong>할 수 있으며, 목표 금액을 만드는 데 필요한 <strong>최소 동전 개수</strong>를 구하세요.</p>
<p>만약 목표 금액을 만들 수 없다면 ``-1``을 반환하세요.</p>

<h5>제한 조건</h5>

<ul>
    <li>1 ≤ <code>coins.length</code> ≤ 12</li>
    <li>1 ≤ <code>coins[i]</code> ≤ 2^31 - 1</li>
    <li>0 ≤ <code>amount</code> ≤ 10^4</li>
    <li>동전은 각각 무한히 사용 가능</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>coins</th>
            <th>amount</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[1, 2, 5]</td>
            <td>11</td>
            <td>3</td>
        </tr>
        <tr>
            <td>[2]</td>
            <td>3</td>
            <td>-1</td>
        </tr>
        <tr>
            <td>[1]</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>[1, 5, 6, 9]</td>
            <td>11</td>
            <td>2</td>
        </tr>
    </tbody>
</table>
### 입출력 예 설명

**입출력 예 #1**

```
coins = [1, 2, 5]
amount = 11

가능한 방법:
- 5 + 5 + 1 = 11 (3개) ✓
- 5 + 2 + 2 + 2 = 11 (4개)
- 1 + 1 + ... + 1 = 11 (11개)

답: 3 (최소 개수)
```

**입출력 예 #2**

```
coins = [2]
amount = 3

2원 동전으로는 3원을 만들 수 없음
답: -1
```

**입출력 예 #3**

```
coins = [1]
amount = 0

0원을 만드는데 동전 불필요
답: 0
```

**입출력 예 #4**

```
coins = [1, 5, 6, 9]
amount = 11

가능한 방법:
- 5 + 6 = 11 (2개) ✓
- 9 + 1 + 1 = 11 (3개)
- 1 × 11 = 11 (11개)

답: 2
```
