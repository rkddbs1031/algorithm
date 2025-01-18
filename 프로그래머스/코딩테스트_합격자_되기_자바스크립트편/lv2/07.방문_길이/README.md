# [level 2] 방문 길이 (49994)

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/49994) 


### 구분

코딩테스트 연습 > Summer/Winter Coding(~2018)


### 채점결과
<br/>정확성: 100.0 <br/>
합계: 100.0 / 100.0

### 문제 설명

<p>게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.</p>
<ul>
    <li>U: 위쪽으로 한 칸 가기</li>
    <li>D: 아래쪽으로 한 칸 가기</li>
    <li>R: 오른쪽으로 한 칸 가기</li>
    <li>L: 왼쪽으로 한 칸 가기</li>
</ul>

<p>캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.</p>


![main](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ace0e7bc-9092-4b95-9bfb-3a55a2aa780e/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B51_qpp9l3.png)

<p>예를 들어, "ULURRDLLU"로 명령했다면</p>

![main](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/668c7458-e184-472d-9d32-f5d2acca759a/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B52_lezmdo.png)
<ul>
    <li>1번 명령어부터 7번 명령어까지 다음과 같이 움직입니다.</li>
</ul>

![main](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/08558e36-d667-4160-bfec-b754c78a7d85/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B53_sootjd.png)

<ul><li>8번 명령어부터 9번 명령어까지 다음과 같이 움직입니다.</li></ul>

![main](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/a52af28e-5835-438b-9f40-5467ebf9bf03/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B54_hlpiej.png)


<p>이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)</p>

<p>단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.<br/>
예를 들어, "LULLLLLLU"로 명령했다면</p>

![main](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/f631f005-f8de-4392-a76c-a9ef64b6de08/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B55_nitjwj.png)

<ul>
    <li>1번 명령어부터 6번 명령어대로 움직인 후, 7, 8번 명령어는 무시합니다. 다시 9번 명령어대로 움직입니다.</li>
</ul>

![main](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/35e62f0a-43c6-4142-bec6-6d28fbc57216/%E1%84%87%E1%85%A1%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%B5%E1%86%AF%E1%84%8B%E1%85%B56_nzhumd.png)
<p>이때 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다.<br/>
명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.</p>


<h5>제한 조건</h5>

<ul>
    <li>dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.</li>
    <li>dirs의 길이는 500 이하의 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
    <thead>
        <tr>
            <th>dirs</th>
            <th>answer</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>"ULURRDLLU"</td>
            <td>7</td>
        </tr>
         <tr>
            <td>"LULLLLLLU"</td>
            <td>7</td>
        </tr>
    </tbody>
</table>

<h5>입출력 예 설명</h5>
<p>입출력 예 #1<br/>
    문제의 예시와 같습니다. 
</p>

<p>입출력 예 #2<br/>
    문제의 예시와 같습니다.
</p>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
