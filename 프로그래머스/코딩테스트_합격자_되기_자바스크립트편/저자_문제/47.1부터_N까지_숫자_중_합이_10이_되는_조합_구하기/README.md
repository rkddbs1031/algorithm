# 1부터 N까지 숫자 중 합이 10이 되는 조합 구하기

## 문제 풀이

<p>
정수 N을 입력받아 1부터 N까지의 숫자 중에서 합이 10이 되는 조합을 배열로 반환하는 solution()함수를 작성하세요.
</p>

<h5>제약 조건</h5>

<ul>
    <li>백트래킹을 활용해야 합니다.</li>
    <li>숫자 조합은 오름차순으로 정렬되어야 합니다.</li>
    <li>같은 숫자는 한 번만 선택할 수 있습니다.</li>
    <li>N은 1이상 10이하인 정수입니다.</li>
</ul>

<h5>입출력의 예</h5>

<table>
    <thead>
        <tr>
            <td>N</td>
            <td>result</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>5</td>
            <td>[[1,2,3,4], [1,4,5], [2,3,5]]</td>
        </tr>
        <tr>
            <td>2</td>
            <td>[]</td>
        </tr>
        <tr>
            <td>7</td>
            <td>[[1,2,3,4], [1,2, 7], [1, 3, 6], [1,4,5], [2,3,5], [4,6]]</td>
        </tr>
    </tbody>
</table>
