# 가장 많이 나온 문자의 빈도

### 구분

해시 문제 (feat.Claude AI)

### 문제 설명

<p>문자열 <code>s</code>가 주어집니다.</p><p>가장 많이 나온 문자의 <strong>빈도(횟수)</strong>를 반환하세요. (공백 제외)</p>

<h5>제한 조건</h5>
<ul>
    <li>1 ≤ <code>s.length</code> ≤ 10^5</li>
    <li>소문자 알파벳만 포함 (공백 포함 가능)</li>
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
            <td>"hello"</td>
            <td>2</td>
        </tr>
        <tr>
            <td>"programming"</td>
            <td>2</td>
        </tr>
        <tr>
            <td>"aabbcc"</td>
            <td>2</td>
        </tr>
        <tr>
            <td>"aaabbc"</td>
            <td>3</td>
        </tr>
    </tbody>
</table>

**입출력 예 #1**

```
"hello"

h: 1번
e: 1번
l: 2번 ✓ (최대!)
o: 1번

답: 2
```

**입출력 예 #2**

```
"programming"

p: 1번
r: 2번 ✓
o: 1번
g: 2번 ✓
a: 1번
m: 2번 ✓
i: 1번
n: 1번

답: 2
```

**입출력 예 #3**

```
"aaabbc"

a: 3번 ← 최대!
b: 2번
c: 1번

답: 3
```
