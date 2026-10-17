/*
1. 상반기 동안 상반기 동안 각 아이스크림 성분 타입과 성분 타입에 대한 아이스크림을 조회해야합니다.
`FIRST_HALF` 테이블은 상반기 주문 정보를 담고, `ICECREAM_INFO` 테이블은 아이스크림 정보를 담고있습니다.
따라서 상반기에 주문한 아이스크림의 정보를 알기 위해 
두 테이블의 공통 컬럼인 FLAVOR 로 두 테이블을 조인합니다.

이때, 두 테이블에 별칭을 사용합니다.
`FROM FIRST_HALF fh JOIN ICECREAM_INFO ii ON fh.FLAVOR = ii.FLAVOR`

2. 성분 타입에 대한 총 주문량을 조회해야 하기 때문에 INGREDIENT_TYPE 컬럼으로 그룹화 합니다.

3. SELECT 문에 SUM으로 성분 타입별 총 주문량의 합계를 구합니다.
이때 해당 컬럼은 `TOTAL_ORDER`로 지정해야하기 때문에 별칭(as)를 이용합니다.

4. 결과 리스트를 총 주문량이 작은 순서대로 조회해야 하기때문에 `ORDER BY TOTAL_ORDER`를 적용하며
오름차순은 ASC를 사용하며 생략 가능합니다.
*/

SELECT
    ii.INGREDIENT_TYPE,
    SUM(fh.TOTAL_ORDER) as TOTAL_ORDER
FROM FIRST_HALF fh JOIN ICECREAM_INFO ii ON fh.FLAVOR = ii.FLAVOR
GROUP BY ii.INGREDIENT_TYPE
ORDER BY TOTAL_ORDER