# 문자열 해싱을 이용한 검색 함수 만들기

### 문제 설명

<p>
문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때 각 쿼리 리스트에 있는 문자열이 stringList의 문자열 리스트에 있는지 여부를 확인해야 합니다. 문자열이 있으면 true, 없으면 false가 됩니다. 각 문자열에 대해서 문자열의 존재 여부를 리스트 형태로 반환하는 solution() 함수를 작성해주세요.
</p>

<h5>제한 조건</h5>

<ul>
    <li>입력 문자열은 영어 소문자로만 이루어져 있습니다.</li>
    <li>문자열의 최대 길이는 10^6입니다.</li>
    <li>해시 충돌은 없습니다.</li>
    <li>아래와 같은 문자열 해싱 방법을 활용해서 해싱 함수를 구현하세요.</li>
    <li>다음 식에서 p는 31, m은 1,000,000,007로 합니다. - hash(s) = (s[0] + s[1]*p + ... s[n- 1]*p^n-1) mod m</li>
</ul>

<h5>입출력 예</h5>

<table class="table">
    <thead>
        <tr>
            <th>stringList</th>
            <th>queryList</th>
            <th>return</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>["apple", "banana", "cherry"]</td>
            <td>["banana", "kiwi", "melon", "apple"]</td>
            <td>[True,false, false, true]</td>
        </tr>
    </tbody>
</table>

> 출처: 코딩 테스트 합격자 되기 자바스크립트 편 244 page
