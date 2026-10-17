/*
1. ANIMAL_INS 테이블에서 이름이 없는 것은 집계에 제외해야합니다.
따라서 `WHERE NAME IS NOT NULL`를 적용해야합니다. 

2. 동물 이름이 두 번 이상 쓰인 이름을 찾아야하므로
이름으로 그룹을 잡고 그 그룹의 횟수를 세며, 그 횟수가 2회 이상인 수를 찾아야합니다.
따라서 이름으로 그룹을 잡은뒤 `GROUP BY NAME`,
이 그룹의 횟수를 셉니다. `HAVING COUNT >= 2`

3. 이름 순으로 조회해야하므로 `ORDER BY NAME`를 적용합니다. 
ASC는 오름차순이며 사용하지 않아도 기본 값으로 적용됩니다.


*/

SELECT NAME, COUNT(*) AS COUNT
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
GROUP BY NAME
HAVING COUNT >= 2
ORDER BY NAME
