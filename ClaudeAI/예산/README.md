# 예산

### 구분

그리디 / 정렬

### 문제 설명

<p>부서별로 신청한 금액이 들어있는 배열 <code>d</code>와 예산 <code>budget</code>이 주어집니다.</p>
<p>최대한 많은 부서에 물품을 지원해주려고 합니다.</p>
<p>예산 내에서 <strong>최대 몇 개 부서</strong>를 지원할 수 있는지 반환하세요.</p>

<h5>제한 조건</h5>

<ul>
    <li>1 ≤ <code>d.length</code> ≤ 100</li>
    <li>1 ≤ <code>d[i]</code> ≤ 100,000</li>
    <li>1 ≤ <code>budget</code> ≤ 10,000,000</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>d</th>
            <th>budget</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[1, 3, 2, 5, 4]</td>
            <td>9</td>
            <td>3</td>
        </tr>
        <tr>
            <td>[2, 2, 3, 3]</td>
            <td>10</td>
            <td>4</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

**입출력 예 #1**

```
d = [1, 3, 2, 5, 4], budget = 9
[1,2,3,4,5]
작은 것부터 선택:
1 → 남은 예산: 8
2 → 남은 예산: 6
3 → 남은 예산: 3
4 → 예산 초과!

답: 3개 부서
```

**입출력 예 #2**

```
d = [2, 2, 3, 3], budget = 10

2 → 남은 예산: 8
2 → 남은 예산: 6
3 → 남은 예산: 3
3 → 남은 예산: 0

답: 4개 부서
```
