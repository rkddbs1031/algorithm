# 배열 회전

### 구분

배열 / 구현 문제 (feat.Claude AI)

### 문제 설명

<p>정수 배열 <code>arr</code>와 정수 <code>k</code>가 주어집니다.</p>
<p>배열을 <strong>오른쪽으로 k칸</strong> 회전시킨 결과를 반환하세요.</p>

<h5>제한 조건</h5>

<ul>
    <li>1 ≤ <code>arr.length</code> ≤ 100</li>
    <li>0 ≤ <code>k</code> ≤ 1000</li>
    <li>-100 ≤ <code>arr[i]</code> ≤ 100</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>arr</th>
            <th>k</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[1, 2, 3, 4, 5]</td>
            <td>2</td>
            <td>[4, 5, 1, 2, 3]</td>
        </tr>
        <tr>
            <td>[1, 2, 3]</td>
            <td>4</td>
            <td>[3, 1, 2]</td>
        </tr>
        <tr>
            <td>[1, 2, 3, 4]</td>
            <td>0</td>
            <td>[1, 2, 3, 4]</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

**입출력 예 #1**

```
[1, 2, 3, 4, 5], k=2

오른쪽 1칸: [5, 1, 2, 3, 4]
오른쪽 2칸: [4, 5, 1, 2, 3]

답: [4, 5, 1, 2, 3]
```

**입출력 예 #2**

```
[1, 2, 3], k=4

k=4는 k=1과 같음 (4 % 3 = 1)
오른쪽 1칸: [3, 1, 2]

답: [3, 1, 2]
```
