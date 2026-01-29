# Profit Analysis

### 구분

전체 탐색

### 문제 설명

<p>You need to analyze the performance of investments in a stock. The profit and loss (PnL) for each month is represented in an array where each value indicates the profit earned (positive value) or loss incurred (negative value) in that month. </p>

<p>
Your task is to find the maximum net profit that can be gained from any contiguous segment of months, with the constraint that the segment cannot exceed a given number of months k.
</p>

<h5>제한 조건</h5>
<ul>
    <li>1 ≤ <code>n</code> ≤ 2 × 10<sup>5</sup></li>
    <li>-10<sup>9</sup> ≤ <code>pnl[i]</code> ≤ 10<sup>9</sup></li>
    <li>1 ≤ <code>k</code> ≤ <code>n</code></li>
</ul>

<h5>예시</h5>

```
입력:

n = 6
pnl = [-3, 4, 3, -2, 2, 5]
k = 4

설명:

최적의 부분배열은 [3, -2, 2, 5]이며 합은 3 + (-2) + 2 + 5 = 8입니다.
부분배열 [4, 3, -2, 2, 5]는 합이 12로 더 크지만, 길이가 5로 제약 조건 k = 4를 초과합니다.

답: 8

```

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>pnl</th>
            <th>k</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[4, 3, -2, 9, -4, 2, 7]</td>
            <td>6</td>
            <td>15</td>
        </tr>
        <tr>
            <td>[2, 5, -7, 8, -6, 4, 1, -9]</td>
            <td>5</td>
            <td>8</td>
        </tr>
        <tr>
            <td>[-3, 4, 3, -2, 2, 5]</td>
            <td>4</td>
            <td>8</td>
        </tr>
    </tbody>
</table>
```

### 입출력 예 설명

**입출력 예 #1**

```
pnl = [4, 3, -2, 9, -4, 2, 7] k = 6

[3, -2, 9, -4, 2, 7]을 선택할 수 있으며,
합은 15이고 크기는 6으로 k와 같습니다.

답: 15

```

**입출력 예 #2**

```
pnl = [2, 5, -7, 8, -6, 4, 1, -9] k = 5

[2, 5, -7, 8]을 선택할 수 있으며, 합은 8이고 크기는 4로 k보다 작습니다

답: 8
```
