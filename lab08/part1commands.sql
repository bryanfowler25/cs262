-- Bryan Fowler
-- Calvin University
-- CS 262 Lab 08
-- 10/25/2019

-- Part 1

-- a.
-- Retrieve a list of all the games, ordered by date with the most recent game coming first.
-- SELECT * 
-- FROM Game 
-- ORDER BY time DESC;

-- b.
-- Retrieve all the games that occurred in the past week.
-- got the idea of this from https://www.plumislandmedia.net/mysql/sql-reporting-time-intervals/
-- SELECT *
-- FROM Game
-- WHERE time > Now() - INTERVAL 7 DAYS;

-- c.
-- Retrieve a list of players who have (non-NULL) names.
-- SELECT * 
-- FROM Player 
-- WHERE name IS NOT NULL;

-- d.
-- Retrieve a list of IDs for players who have some game score larger than 2000.
-- SELECT Player.ID
-- FROM Player, PlayerGame
-- WHERE Player.ID = PlayerGame.playerID
-- AND PlayerGame.score > 2000.00;

-- e.
-- Retrieve a list of players who have GMail accounts.
-- SELECT *
-- FROM Player
-- WHERE emailAddress LIKE '*gmail.*';

-- Part 2

-- a.
-- Retrieve all “The King”’s game scores in decreasing order.
-- SELECT PlayerGame.score 
-- FROM PlayerGame, Player
-- WHERE PlayerGame.ID = Player.ID
-- AND Player.name = 'The King'
-- ORDER BY PlayerGame.score DESC;

-- b. 
-- Retrieve the name of the winner of the game played on 2006-06-28 13:20:00.
-- SELECT Player.name 
-- FROM Player, Game, PlayerGame
-- WHERE PlayerGame.ID = Player.ID
-- AND Game.time = '2006-06-28 13:20:00'
-- AND Game.ID = PlayerGame.gameID
-- ORDER BY PlayerGame.score DESC
-- LIMIT 1;

-- c. 
-- I think it is in there so that players with the same name aren't double counted.
-- so if ID 1 had the name Bryan and ID 2 had the name Bryan,
-- 1 < 2 so that would count as one, and then 2 < 1 wouldn't count, so it would only
-- count the second Bryan once. 

-- d.
-- I searched on Google and on https://stackoverflow.com/questions/3362038/what-is-self-join-and-when-would-you-use-it
-- I read that it is useful when the table references data in itself.
-- More generally, when there is a relationship between rows stored in the same table. 
