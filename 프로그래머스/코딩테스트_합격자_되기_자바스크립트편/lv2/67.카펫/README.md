# 카펫

[문제링크](https://school.programmers.co.kr/learn/courses/30/lessons/42842)

### 구분

코딩테스트 연습 > 완전 탐색

### 채점결과

채점 결과 <br>
정확성: 100.0 <br>
합계: 100.0 / 100.0

### 문제 설명

<p>레오는 카펫을 사러 갔다가 다음 그림과 같이 중앙에는 흰색으로 칠해져 있고 테두리 1줄은 노란색으로 칠해져 있는 격자 모양 카펫을 봤습니다.</p>

<p>레오는 집으로 돌아와서 아까 본 카펫의 흰색과 노란색으로 색칠된 격자의 개수를 기억했지만 카펫의 크기는 기억하지 못했습니다. 레오가 본 카펫에서 노란색 격자의 수 yellow, 흰색 격자의 수 white가 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 반환하는 solution()함수를 작성해주세요.</p>

<h5>제한사항</h5>

<ul>
    <li>갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.</li>
    <li>노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.</li>
    <li>카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>brown</th>
            <th>yellow</th>
            <th>return</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>10</td>
            <td>2</td>
            <td>[4, 3]</td>
        </tr>
        <tr>
            <td>8</td>
            <td>1</td>
            <td>[3, 3]</td>
        </tr>
        <tr>
            <td>24</td>
            <td>24</td>
            <td>[8, 6]</td>
        </tr>
    </tbody>
</table>
