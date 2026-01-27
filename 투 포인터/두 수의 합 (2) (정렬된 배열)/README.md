# 두 수의 합 (2)

### 구분

투 포인터 문제 (feat.Claude AI)

### 문제 설명

<p><strong>정렬된</strong> 정수 배열 <code>numbers</code>와 목표값 <code>target</code>이 주어집니다.</p><p>두 수를 더해서 <code>target</code>이 되는 두 수의 <strong>인덱스</strong>를 반환하세요. (0-based)</p><p>정확히 하나의 답만 있으며, 같은 원소를 두 번 사용할 수 없습니다.</p>

<h5>제한 조건</h5>

<ul>
    <li>2 ≤ <code>numbers.length</code> ≤ 3 × 10^4</li>
    <li><code>numbers</code>는 오름차순 정렬됨</li>
    <li>-1000 ≤ <code>numbers[i]</code> ≤ 1000</li>
    <li>-1000 ≤ <code>target</code> ≤ 1000</li>
    <li><strong>답이 없으면 -1 반환</strong></li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>numbers</th>
            <th>target</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[2, 7, 11, 15]</td>
            <td>9</td>
            <td>[0, 1]</td>
        </tr>
        <tr>
            <td>[2, 3, 4]</td>
            <td>6</td>
            <td>[0, 2]</td>
        </tr>
        <tr>
            <td>[-1, 0]</td>
            <td>-1</td>
            <td>[0, 1]</td>
        </tr>
        <tr>
            <td>[1, 2, 3, 4, 5, 6]</td>
            <td>10</td>
            <td>[3, 5]</td>
        </tr>
    </tbody>
</table>

**입출력 예 #1**

```
numbers = [2, 7, 11, 15], target = 9

left=0, right=3:
2 + 15 = 17 > 9 → right--

left=0, right=2:
2 + 11 = 13 > 9 → right--

left=0, right=1:
2 + 7 = 9 ✓

답: [0, 1]
```

**입출력 예 #2**

```
numbers = [1, 2, 3, 4, 5, 6], target = 10

left=0, right=5:
1 + 6 = 7 < 10 → left++

left=1, right=5:
2 + 6 = 8 < 10 → left++

left=2, right=5:
3 + 6 = 9 < 10 → left++

left=3, right=5:
4 + 6 = 10 ✓

답: [3, 5]
```
