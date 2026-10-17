/*
1. 개발자가 사용하는 언어의 이름과 범주를 확인하기 위해 DEVELOPERS 테이블과 SKILLCODES 테이블을 조인합니다.

이때, DEVELOPERS 테이블의 SKILL_CODE와 SKILLCODES 테이블의 CODE는 
일반적인 ID처럼 값을 직접 비교하는 것이 아닙니다.
SKILL_CODE는 비트 값을 의미하므로 비트 AND 연산자(&)를 이용해 특정 기술을 보유하고 있는지 확인합니다.

`JOIN SKILLCODES s ON d.SKILL_CODE & s.CODE <> 0`

e.g) 
```
a) 10진수를 2진수로 변환
10 => 1010
 2 => 0010


b) 각 비트를 AND 연산하여 비교 (같은 자릿수에서 둘 다 1일 때만 1이됩니디.)
  1010
& 0010
------ 
  0010

c) 0010 은 2진수이며, 이를 10진수로 변환하면 2입니다.
연산 결과가 0이 아니므로 개발자의 SKILL_CODE에 해당 기술의 비트가 포함되어 있다고 판단할 수 있습니다.
```

2. 스킬명이 Python이나 C# 스킬을 가져야하므로 IN절로 둘 중에 하나만 있어도 출력될 수 있도록 합니다.
`WHERE s.NAME IN ('Python', 'C#')`

3. 이때, 개발자가 가진 스킬은 유니크가 아닌 즉 n개를 가질 수 있습니다.
Python, C# 둘 다 가진 개발자는  두 번 나오므로 DISTINCT를 사용하여 중복을 제거합니다.

4. ID으로 오름차순을 합니다. `ORDER BY d.ID` 
오름차순은 ASC를 사용하며 생략이 가능합니다.
*/

SELECT DISTINCT d.ID, d.EMAIL, d.FIRST_NAME, d.LAST_NAME
FROM DEVELOPERS d
JOIN SKILLCODES s
  ON d.SKILL_CODE & s.CODE <> 0
WHERE s.NAME IN ('Python', 'C#')
ORDER BY d.ID;