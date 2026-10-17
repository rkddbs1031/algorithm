/*
1. CAR_RENTAL_COMPANY_CAR 테이블내 OPTIONS는 array가 아닌 
"가죽시트,열선시트,후방카메라" 이런 형식으로 ","으로 구별한 문자열 형식입니다.
따라서 LIKE 절과 OR를 이용하여 
'통풍시트', '열선시트', '가죽시트' 중 하나 이상의 옵션이 포함된 자동차를 기준으로 잡습니다.
`
WHERE OPTIONS LIKE '%통풍시트%' 
    OR OPTIONS LIKE '%열선시트%'
    OR OPTIONS LIKE '%가죽시트%'
`

2. 자동차 종류 별로 몇 대인지 출력해야 합니다.
따라서 CAR_TYPE로 그룹을 잡고, 
출력 값에 COUNT(*)로 출력합니다.

3. 자동차 수에 대한 컬럼명은 CARS로 해야하기 때문에 별칭(as)을 사용합니다.

4. 결과 리스트는 자동차 종류를 기준으로 오름차순 해야하기 때문에 `ORDER BY CAR_TYPE`를 적용합니다.
오름차순은 ASC를 사용하며 생략 가능합니다.

*/

SELECT CAR_TYPE, COUNT(*) AS CARS
FROM CAR_RENTAL_COMPANY_CAR
WHERE OPTIONS LIKE '%통풍시트%' 
    OR OPTIONS LIKE '%열선시트%'
    OR OPTIONS LIKE '%가죽시트%'
GROUP BY CAR_TYPE
ORDER BY CAR_TYPE ASC;