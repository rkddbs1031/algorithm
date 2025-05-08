# [level 1] 완주하지 못한 선수 - 42576

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42576)

</br>

### 구분

코딩테스트 연습 > 해시

### 채점결과

정확성: 58.3 </br>
효율성: 41.7</br>
합계: 100.0 / 100.0

### 문제 설명

<p>
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

</br>
</br>

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

</p>

<h5>제약 조건</h5>

<ul>
    <li>마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
    <li>completion의 길이는 participant의 길이보다 1 작습니다.</li>
    <li>참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.</li>
    <li>참가자 중에는 동명이인이 있을 수 있습니다.</li>
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

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
