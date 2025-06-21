# 이진 탐색 트리

### 문제 설명

<p>
첫 번째 인수 Ist를 이용하여 이진 탐색 트리를 생성하고, 두 번째 인수 searchList에 있는 각 노드를 이진 탐색 트리에서 찾을 수 있는지 확인하여 true 또는 false를 담은 배열 result를 반환하는 함수 solution()을 작성하세요.
</p>

<h5>제한 조건</h5>

<ul>
    <li>Ist의 노드는 정수로 이루어져 있으며 1,000,000개를 초과하지 않습니다.</li>
    <li>이진 탐색 트리의 삽입과 탐색 기능을 구현해야 합니다.</li>
    <li>searchList의 길이는 10이하입니다.</li>
</ul>

<h5>입출력의 예</h5>

<table>
    <thead>
        <tr>
            <td>Ist</td>
            <td>searchList</td>
            <td>return</td>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td>[5, 3, 8, 4, 2, 1, 7, 10]</td>
            <td>[1, 2, 5, 6]</td>
            <td>[true, true, true, false]</td>
        </tr>
        <tr>
            <td>[1, 3, 5, 7, 9]</td>
            <td>[2, 4, 6, 8, 10]</td>
            <td>[false, false, false, false, false]</td>
        </tr>
    </tbody>
</table>

```

```
