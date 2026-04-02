# 문자열 압축

### 구분

문자열 순회 문제 (feat.Claude AI)

### 문제 설명

<p>문자열 <code>s</code>가 주어집니다.</p>
<p>연속된 같은 문자를 <code>숫자+문자</code> 형태로 압축하세요.</p>
<p>단, 1개면 숫자 생략!</p>

<h5>제한 조건</h5>

<ul>
    <li>1 ≤ s.length ≤ 1000</li>
    <li>s는 알파벳 소문자로만 구성</li>
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
            <td>"aabcccccaaa"</td>
            <td>"2ab5c3a"</td>
        </tr>
        <tr>
            <td>"abc"</td>
            <td>"abc"</td>
        </tr>
        <tr>
            <td>"aaaa"</td>
            <td>"4a"</td>
        </tr>
        <tr>
            <td>"aabbccdd"</td>
            <td>"2a2b2c2d"</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

**입출력 예 #1**

```
"aabcccccaaa"

aa → 2a
b → b (1개는 생략)
ccccc → 5c
aaa → 3a

답: "2ab5c3a"
```
