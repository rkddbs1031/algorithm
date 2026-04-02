# 완주하지 못한 선수

### 구분

해시 맵 문제 (feat.Claude AI)

### 문제 설명

<p>마라톤 대회에 참여한 선수들의 이름이 담긴 배열 <code>participant</code>와 완주한 선수들의 이름이 담긴 배열 <code>completion</code>이 주어집니다.</p>
<p>완주하지 못한 <strong>단 한 명</strong>의 선수 이름을 반환하세요.</p>

<h5>제한 조건</h5>

<ul>
    <li>1 ≤ <code>participant.length</code> ≤ 100,000</li>
    <li><code>completion.length = participant.length - 1</code></li>
    <li>참가자 이름은 알파벳 소문자</li>
    <li>참가자 중 <strong>동명이인</strong>이 있을 수 있음</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>participant</th>
            <th>completion</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>["leo", "kiki", "eden"]</td>
            <td>["eden", "kiki"]</td>
            <td>"leo"</td>
        </tr>
        <tr>
            <td>["marina", "josipa", "nikola", "vinko", "filipa"]</td>
            <td>["josipa", "filipa", "marina", "nikola"]</td>
            <td>"vinko"</td>
        </tr>
        <tr>
            <td>["mislav", "stanko", "mislav", "ana"]</td>
            <td>["stanko", "ana", "mislav"]</td>
            <td>"mislav"</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

**입출력 예 #1**

```
participant = ["mislav", "stanko", "mislav", "ana"]
completion = ["stanko", "ana", "mislav"]

mislav이 2명인데 1명만 완주
답: "mislav"
```
