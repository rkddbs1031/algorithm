# 기능 개발

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42586)

### 문제 설명

<p>
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.</br>
또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.</br>
먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
</p>

<h5>제약 조건</h5>

<ul>
    <li>작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.</li>
    <li>작업 진도는 100 미만의 자연수입니다.</li>
    <li>작업 속도는 100 이하의 자연수입니다.</li>
    <li>배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
    <thead>
        <tr>
            <th>progress</th>
            <th>speeds</th>
            <th>return</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[93, 30, 55]</td>
            <td>[1, 30, 5]</td>
            <td>[2, 1]</td>
        </tr>
        <tr>
            <td>[95, 90, 99, 99, 80, 99]</td>
            <td>[1, 1, 1, 1, 1, 1]	</td>
            <td>[1, 3, 2]</td>
        </tr>
    </tbody>
</table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
