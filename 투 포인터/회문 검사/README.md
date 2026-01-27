# 회문 검사

### 구분

투 포인터 문제 (feat.Claude AI)

### 문제 설명

<p>문자열 <code>s</code>가 주어집니다.</p>
<p>알파벳과 숫자만 고려하고, 대소문자를 무시했을 때 <strong>회문(팰린드롬)</strong>인지 판별하세요.</p>
<p>회문: 앞에서 읽으나 뒤에서 읽으나 같은 문자열</p>

<h5>제한 조건</h5>

<ul>
    <li>1 ≤ <code>s.length</code> ≤ 2 × 10^5</li>
    <li><code>s</code>는 영문자, 숫자, 공백, 특수문자 포함 가능</li>
    <li>알파벳과 숫자만 비교 (공백, 특수문자 무시)</li>
    <li>대소문자 구분 안 함</li>
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
            <td>"A man, a plan, a canal: Panama"</td>
            <td>true</td>
        </tr>
        <tr>
            <td>"race a car"</td>
            <td>false</td>
        </tr>
        <tr>
            <td>" "</td>
            <td>true</td>
        </tr>
        <tr>
            <td>"ab_a"</td>
            <td>true</td>
        </tr>
    </tbody>
</table>

**입출력 예 #1**

```
"A man, a plan, a canal: Panama"

알파벳/숫자만: "AmanaplanacanalPanama"
소문자로: "amanaplanacanalpanama"

앞: a m a n a p l a n a c a n a l p a n a m a
뒤: a m a n a p l a n a c a n a p l a n a m a

같음! ✓
답: true
```

**입출력 예 #2**

```
"race a car"

알파벳/숫자만: "raceacar"
소문자로: "raceacar"

앞: r a c e a c a r
뒤: r a c a e c a r

다름! ❌
답: false
```

**입출력 예 #3**

```
" "

알파벳/숫자 없음 → 빈 문자열 → 회문!
답: true
```

**입출력 예 #4**

```
"ab_a"

알파벳/숫자만: "aba"

앞: a b a
뒤: a b a

같음! ✓
답: true
```
