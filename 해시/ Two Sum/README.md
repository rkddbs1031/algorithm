# Two Sum

### 구분

해시맵 기본 문제 (feat.Claude AI)

### 문제 설명

<p>정수 배열 <code>nums</code>와 목표값 <code>target</code>이 주어집니다.</p>
<p>배열에서 <strong>두 수를 더해서 target이 되는 두 수의 인덱스</strong>를 찾으세요.</p>
<p>각 입력은 <strong>정확히 하나의 답</strong>만 있으며, 같은 원소를 두 번 사용할 수 없습니다.</p>

<h5>제한 조건</h5>

<ul>
    <li>2 ≤ <code>nums.length</code> ≤ 10^4</li>
    <li>-10^9 ≤ <code>nums[i]</code> ≤ 10^9</li>
    <li>-10^9 ≤ <code>target</code> ≤ 10^9</li>
    <li>정답은 항상 존재함</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>nums</th>
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
            <td>[3, 2, 4]</td>
            <td>6</td>
            <td>[1, 2]</td>
        </tr>
        <tr>
            <td>[3, 3]</td>
            <td>6</td>
            <td>[0, 1]</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

**입출력 예 #1**

```
nums = [2, 7, 11, 15], target = 9

2 + 7 = 9 ✓
인덱스: [0, 1]

답: [0, 1]
```

**입출력 예 #2**

```
nums = [3, 2, 4], target = 6

3 + 2 = 5 ❌
3 + 4 = 7 ❌
2 + 4 = 6 ✓

인덱스: [1, 2]
답: [1, 2]
```

**입출력 예 #3**

```
nums = [3, 3], target = 6

3 + 3 = 6 ✓
인덱스: [0, 1]

답: [0, 1]
```

**입출력 예 #3**

```
heights = [10, 20, 10], k = 1

k=1이므로 1칸씩만!

경로: 0 → 1 → 2
에너지: |20-10| + |10-20| = 10 + 10 = 20 ✓

답: 20
```
