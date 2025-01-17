SELECT
	[PeakName],
	[RiverName],
	LOWER(CONCAT(p.[PeakName], SUBSTRING(r.[RiverName], 2, LEN(r.[RiverName]) - 1))) AS [Mix]
FROM [Peaks] AS p
JOIN [Rivers] AS r ON LOWER(RIGHT(p.[PeakName], 1)) = LOWER(LEFT(r.[RiverName], 1))
ORDER BY [Mix];