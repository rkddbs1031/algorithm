/*
1. APPOINTMENT 테이블에서 2022년 5월에 예약한 환자를 기준으로 집계해야합니다.
따라서 `FROM APPOINTMENT` 와 WHERE APNT_YMD LIKE '2022-05%'를 적용합니다.

2. 진료과코드 별로 조회해야합니다. 따라서 GROUP BY 절을 `GROUP BY MCDP_CD` 이용합니다.

3. 컬럼 명은 진료과 코드와 5월예약건수로 지정해야 하기때문에 as(별칭)을 사용합니다.

4. 5월예약건수 기준으로 오름차순하고, 그다음 순서 기준은 진료과 코드기준 오름차순입니다.
따라서 `ORDER BY 5월예약건수, 진료과코드`
이때 `ORDER BY '5월예약건수', '진료과코드'` 와 같이 별칭에 따옴표를 붙이면 안됩니다. 
**'5월예약건수'와 동일하게 적힌 문자로 정렬을 해주겠다는 의미가 되기 때문에 주의해야합니다.**
*/

SELECT 
  MCDP_CD as 진료과코드
  COUNT(*) as 5월예약건수
FROM APPOINTMENT
WHERE APNT_YMD LIKE '2022-05%'
GROUP BY MCDP_CD
ORDER BY 5월예약건수, 진료과코드