# 중복 찾기

### 구분

해시 문제 (feat.Claude AI)

### 문제 설명

<p>정수 배열 <code>nums</code>가 주어집니다.</p>
<p>배열에 <strong>중복된 값</strong>이 있으면 <code>true</code>, 없으면 <code>false</code>를 반환하세요.</p>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>nums</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[1, 2, 3, 1]</td>
            <td>true</td>
        </tr>
        <tr>
            <td>[1, 2, 3, 4]</td>
            <td>false</td>
        </tr>
        <tr>
            <td>[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]</td>
            <td>true</td>
        </tr>
    </tbody>
</table>
### 입출력 예 설명

**입출력 예 #1**

```
[1, 2, 3, 1]
 ↑        ↑  1이 중복!
답: true
```

**입출력 예 #2**

```
[1, 2, 3, 4]
모두 다름
답: false
```

**입출력 예 #3**

```
[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
여러 개 중복
답: true
```

**입출력 예 #3**

```
heights = [10, 20, 10], k = 1

k=1이므로 1칸씩만!

경로: 0 → 1 → 2
에너지: |20-10| + |10-20| = 10 + 10 = 20 ✓

답: 20
```
