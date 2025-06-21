# 간단한 유니온-파인드 알고리즘 구현하기

### 문제 설명

<p>상호배타적 집합을 표현하고 관리하는 데 다음 두 연산이 필요합니다.</p>

<ul>
    <li>union(x, y): x와 y가 속한 두 집합을 합칩니다.</li>
    <li>find(x,y): x가 속한 집합의 대표원소를 찾습니다.</li>
</ul>

<p>
operations라는 배열은 수행할 연산을 의미합니다.연산 종류는 2개입니다.
</p>

<ul>
    <li>['u',1, 2]는 노드1과 노드 2에 대해 union 연산 수행/</li>
    <li>[f',3]노드 3의 루트 노드 찾기, find 연산 수행</li>
</ul>

<p>
초기의 노드는 부모 노드를 자신의 값으로 설정했다고 가정하며, 여기서는 각 집합의 루트노드를 기준으로 루트 노드가 작은 노드를 더 큰 노드의 자식으로 연결하는 방법을 사용합니다. </br>
operations에 있는 연산을 모두 수행한 후 집합의 개수를 반환하는 solution() 함수를 구현해 주세요.
</p>

<h5>제약조건</h5>

<ul>
    <li>0 ≤ k ≤ 1,000 : 노 드 의 개 수</li>
    <li>1 ≤ operations.length ≤ 100,000</li>
    <li>operations[i][0]은 문자열 'u' 또 는 'f' 중 하나</li>
    <li>'u' 는 union 연산, union 연산 뒤로는 두 개의 정수 X, y가 나옴</li>
    <li>'f' 는 find 연산, find 연산 뒤로는 두 개의 정수 X가 나옴</li>
    <li>x와 y는 0 이상 k-1 이하의 정수</li>
    <li>연산은 항상 유효함
    - 즉, union,find 연산의 인수는 상호배타적 집합 내에 있는 노드 번호</li>
</ul>

<h5>입출력의 예</h5>

<table>
    <thead>
        <tr>
            <td>k</td>
            <td>operations</td>
            <td>return</td>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td>3</td>
            <td>[['u', 0, 1], ['u', 1, 2], ['f', 2]]</td>
            <td>1</td>
        </tr>
        <tr>
            <td>3</td>
            <td>[['u', 0, 1], ['u', 2, 3], ['f', 0]]</td>
            <td>2</td>
        </tr>
    </tbody>
</table>
