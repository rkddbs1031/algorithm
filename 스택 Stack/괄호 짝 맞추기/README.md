# 회문 검사

### 구분

Stack 문제 (feat.Claude AI)

### 문제 설명

<p>괄호 문자열 <code>s</code>가 주어집니다.</p>
<p>괄호가 올바르게 짝지어져 있으면 <code>true</code>, 아니면 <code>false</code>를 반환하세요.</p>
<p>괄호 종류: <code>( ) { } [ ]</code></p>

<h5>제한 조건</h5>

<ul>
    <li>1 ≤ <code>s.length</code> ≤ 10^4</li>
    <li><code>s</code>는 괄호로만 구성</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>s</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>"()"</td>
            <td>true</td>
        </tr>
        <tr>
            <td>"()[]{}"</td>
            <td>true</td>
        </tr>
        <tr>
            <td>"(]"</td>
            <td>false</td>
        </tr>
        <tr>
            <td>"([)]"</td>
            <td>false</td>
        </tr>
        <tr>
            <td>"{[]}"</td>
            <td>true</td>
        </tr>
    </tbody>
</table>

<h5>입출력 예 설명</h5>

**입출력 예 #1**

```
"()"
( 넣기 → stack: [(]
) 나오면 ( 빼기 → stack: []
비어있음 ✓

답: true
```

**입출력 예 #2**

```
"()[]{}"
( → [(]
) → []
[ → [[]
] → []
{ → [{]
} → []

답: true
```

**입출력 예 #3**

```
"(]"
( → [(]
] → 매칭 안 됨! ❌

답: false
예제 4:
"([)]"
( → [(]
[ → [(, []
) → [ 와 ) 매칭 안 됨! ❌

답: false
```

**입출력 예 #4**

```
"{[]}"
{ → [{]
[ → [{, []
] → [{]
} → []

답: true
```
