INSERT INTO users (username, password, name, token)
WITH RECURSIVE seq AS (
    SELECT 1 AS n
    UNION ALL
    SELECT n + 1 FROM seq WHERE n < 100
)
SELECT
    CONCAT('user', LPAD(n,3,'0')) AS username,
    CONCAT('$2b$10$', SUBSTRING(SHA2(CONCAT('user',LPAD(n,3,'0')),256),1,53)) AS password,
    ELT(
        FLOOR(1 + (RAND()*10)),
        'Raka','Budi','Sinta','Dewi','Agus','Putri','Andi','Rina','Fajar','Lina'
    ) AS name,
    UUID() AS token
FROM seq;