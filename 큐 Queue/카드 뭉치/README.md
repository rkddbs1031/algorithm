# 카드 뭉치

### 구분

queue 문제 (feat.Claude AI)

### 문제 설명

<p>카드 뭉치 2개 <code>cards1</code>, <code>cards2</code>와 원하는 순서 배열 <code>goal</code>이 주어집니다.</p>
<p>각 카드 뭉치는 <strong>순서대로만</strong> 사용할 수 있습니다. (맨 위부터 차례로)</p>
<p><code>goal</code> 배열을 만들 수 있으면 <code>"Yes"</code>, 없으면 <code>"No"</code>를 반환하세요.</p>

<h5>제한 조건</h5>

<ul>
    <li>1 ≤ <code>cards1.length, cards2.length</code> ≤ 10</li>
    <li>1 ≤ <code>goal.length</code> ≤ cards1.length + cards2.length</li>
    <li>모든 문자열은 알파벳 소문자</li>
    <li>중복 없음</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>cards1</th>
            <th>cards2</th>
            <th>goal</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>["i", "drink", "water"]</td>
            <td>["want", "to"]</td>
            <td>["i", "want", "to", "drink", "water"]</td>
            <td>"Yes"</td>
        </tr>
        <tr>
            <td>["i", "water", "drink"]</td>
            <td>["want", "to"]</td>
            <td>["i", "want", "to", "drink", "water"]</td>
            <td>"No"</td>
        </tr>
    </tbody>
</table>

**입출력 예 #1**

```
cards1 = ["i", "drink", "water"]
cards2 = ["want", "to"]
goal = ["i", "want", "to", "drink", "water"]

"i" → cards1 맨 위 ✓
"want" → cards2 맨 위 ✓
"to" → cards2 다음 ✓
"drink" → cards1 다음 ✓
"water" → cards1 다음 ✓

답: "Yes"
```

**입출력 예 #2**

```
cards1 = ["i", "water", "drink"]
cards2 = ["want", "to"]
goal = ["i", "want", "to", "drink", "water"]

"i" → cards1 맨 위 ✓
"want" → cards2 맨 위 ✓
"to" → cards2 다음 ✓
"drink" → cards1 다음은 "water"인데 "drink" 필요 ❌

답: "No"
```
