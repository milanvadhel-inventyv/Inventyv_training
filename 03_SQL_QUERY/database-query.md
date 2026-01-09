# SQL Practice – Actor_Movie_SQL_Demo

This file contains **50 SQL practice questions with queries and outputs**.
All questions are solved using the **Movie Database schema**.

---

##  Database Tables Used

The following tables are used across the queries:

- movie
- actor
- director
- movie_cast
- movie_rating
- movie_reviewer
- movie_genres
- genres
- movie_direction

---



# Basic Queries:

## Question 1. 

Write a SQL query to find the name and year of the movies. Return 
``` sql

movie title, movie release year.

```

## output    
    


    | MOV_TITLE                | MOV_YEAR |
    | :----------------------- | :------- |
    | Vertigo                  | 1958     |
    | The Innocents            | 1961     |
    | Lawrence of Arabia       | 1962     |
    | The Deer Hunter          | 1978     |
    | Amadeus                  | 1984     |
    | Blade Runner             | 1982     |
    | Eyes Wide Shut           | 1999     |
    | The Usual Suspects       | 1995     |
    | Chinatown                | 1974     |
    | Boogie Nights            | 1997     |
    | Annie Hall               | 1977     |
    | Princess Mononoke        | 1997     |
    | The Shawshank Redemption | 1994     |
    | American Beauty          | 1999     |
    | Titanic                  | 1997     |
    | Good Will Hunting        | 1997     |
    | Deliverance              | 1972     |
    | Trainspotting            | 1996     |
    | The Prestige             | 2006     |
    | Donnie Darko             | 2001     |
    | Slumdog Millionaire      | 2008     |
    | Aliens                   | 1986     |
    | Beyond the Sea           | 2004     |
    | Avatar                   | 2009     |
    | Seven Samurai            | 1954     |
    | Spirited Away            | 2001     |
    | Back to the Future       | 1985     |
    | Braveheart               | 1995     |

   ---     
## Question 2. 
Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.

``` sql
select mov_year from movie where MOV_TITLE='American Beauty';
```
## output

    | MOV_YEAR |
    | :------- |
    | 1999     |
    |          |
---
## Question 3.
Write a SQL query to find the movie that was released in 1999. Return movie title.

```sql
select  mov_title from movie where MOV_year=1999;
```

## output
    
    | MOV_TITLE       |
    | :-------------- |
    | Eyes Wide Shut  |
    | American Beauty |
---        

## Question 4.
 Write a SQL query to find those movies, which were released before 1998. Return movie title.

``` sql
select  mov_title from movie where MOV_year<1998;
```
## output

    | MOV_TITLE                |
    | :----------------------- |
    | Vertigo                  |
    | The Innocents            |
    | Lawrence of Arabia       |
    | The Deer Hunter          |
    | Amadeus                  |
    | Blade Runner             |
    | The Usual Suspects       |
    | Chinatown                |
    | Boogie Nights            |
    | Annie Hall               |
    | Princess Mononoke        |
    | The Shawshank Redemption |
    | Titanic                  |
    | Good Will Hunting        |
    | Deliverance              |
    | Trainspotting            |
    | Aliens                   |
    | Seven Samurai            |
    | Back to the Future       |
    | Braveheart               |
 ---       

## Question 5. 
Write a SQL query to find the name of all reviewers and movies together in a single list.

``` sql
    SELECT rev_name AS name FROM movie_reviewer
    UNION
    SELECT mov_title AS name FROM movie;
```
## output
    
    | NAME                     |
    | :----------------------- |
    | Righty Sock              |
    | Jack Malvern             |
    | Flagrant Baronessa       |
    | Alec Shaw                |
    | Victor Woeltjen          |
    | Simon Wright             |
    | Neal Wruck               |
    | Paul Monks               |
    | Mike Salvati             |
    | Wesley S. Walker         |
    | Sasha Goldshtein         |
    | Josh Cates               |
    | Krug Stillo              |
    | Scott LeBrun             |
    | Hannah Steele            |
    | Vincent Cadena           |
    | Brandt Sponseller        |
    | Richard Adams            |
    | Vertigo                  |
    | The Innocents            |
    | Lawrence of Arabia       |
    | The Deer Hunter          |
    | Amadeus                  |
    | Blade Runner             |
    | Eyes Wide Shut           |
    | The Usual Suspects       |
    | Chinatown                |
    | Boogie Nights            |
    | Annie Hall               |
    | Princess Mononoke        |
    | The Shawshank Redemption |
    | American Beauty          |
    | Titanic                  |
    | Good Will Hunting        |
    | Deliverance              |
    | Trainspotting            |
    | The Prestige             |
    | Donnie Darko             |
    | Slumdog Millionaire      |
    | Aliens                   |
    | Beyond the Sea           |
    | Avatar                   |
    | Seven Samurai            |
    | Spirited Away            |
    | Back to the Future       |
    | Braveheart               |
    ---
## Question 6.
 Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.
 
 ``` sql
select distinct REV_name from MOVIE_REVIEWER m1 ,MOVIE_RATING m2  where  m1.rev_id =m2.rev_id and m2.rev_stars>=7

```
## output

    | REV_NAME           |
    | :----------------- |
    | Righty Sock        |
    | Jack Malvern       |
    | Flagrant Baronessa |
    |                    |
    | Victor Woeltjen    |
    | Simon Wright       |
    | Mike Salvati       |
    | Sasha Goldshtein   |
    | Krug Stillo        |
    | Hannah Steele      |
    | Vincent Cadena     |
    | Brandt Sponseller  |
---
## Question 7. 
Write a SQL query to find the movies without any rating. Return movie title.

``` sql
select mov_title from movie m left join MOVIE_RATING m1 on m.mov_id=m1.mov_id where m1.mov_id is null
```
## output
    
    | MOV_TITLE                |
    | :----------------------- |
    | The Deer Hunter          |
    | Amadeus                  |
    | Eyes Wide Shut           |
    | The Shawshank Redemption |
    | Deliverance              |
    | The Prestige             |
    | Spirited Away            |
    | Back to the Future       |
    | Braveheart               |
---
## Question 8. 
Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.
``` sql
select mov_title from movie where mov_id in (905,907,917)
```
## output
    
    | MOV_TITLE |
    | :-------- |
    |           |
---

## Question 9.
 Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year. Return movie ID, movie title and movie release year.

``` sql
select mov_id,mov_title,mov_year from movie where mov_title like '%Boogie Nights%' order by mov_year ASC
```
## output

    | MOV_ID | MOV_TITLE     | MOV_YEAR |
    | :----- | :------------ | :------- |
    | 10     | Boogie Nights | 1997     |
---

## Question 10. 
Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.

``` sql
select act_id from actor where act_fname='Woody' and act_lname='Allen';
```

## output

    
    | ACT_ID |
    | :----- |
    | 11     |
---
---
# Sub-Queries :

## Question 11. 
Write a SQL query to find the actors who played a role in the movie 'Annie Hall'. Return all the fields of actor table.

``` sql
select * from actor where act_id in (select m.act_id from movie_cast m where m.role='Annie Hall');
```
## output

| ACT_ID | ACT_FNAME | ACT_LNAME | ACT_GENDER |
| :----- | :-------- | :-------- | :--------- |
|        |           |           |            |
---
## Question 12. 
Write a SQL query to find the director of a film that cast a role in 'Eyes Wide Shut'. Return director first name, last name.

``` sql
select dir_fname,dir_lname from director where dir_id in (select m.dir_id from movie_direction m join movie m1 on m.mov_id =m1.mov_id where m1.mov_title='Eyes Wide Shut')
```
## output
    
    | DIR_FNAME | DIR_LNAME |
    | :-------- | :-------- |
    | Stanley   | Kubrick   |
    |           |           |
---

## Question 13. 
Write a SQL query to find those movies that have been released in countries other than the United Kingdom. Return movie title, movie year, movie time, and date of release, releasing country.

``` sql
select mov_title,mov_year,mov_time,mov_dt_rel,mov_rel_country from movie where mov_rel_country != 'UK'
```
## output
    
    | MOV_TITLE     | MOV_YEAR | MOV_TIME | MOV_DT_REL           | MOV_REL_COUNTRY |
    | :------------ | :------- | :------- | :------------------- | :-------------- |
    | The Innocents | 1961     | 100      | 1962-02-19T00:00:00Z | SW              |
    | Annie Hall    | 1977     | 93       | 1977-04-20T00:00:00Z | USA             |
    | Seven Samurai | 1954     | 207      | 1954-04-26T00:00:00Z | JP              |
---

## Question 14. 
Write a SQL query to find for movies whose reviewer is unknown. Return movie title, year, release date, director first name, last name, actor first name, last name.

``` sql
SELECT mov_title,mov_year,mov_dt_rel, (SELECT dir_fname  FROM director  WHERE dir_id = (SELECT dir_id  FROM movie_direction  WHERE mov_id = m.mov_id)) AS director_fname,(SELECT dir_lname  FROM director  WHERE dir_id = (SELECT dir_id  FROM movie_direction  WHERE mov_id = m.mov_id)) AS director_lname,(SELECT act_fname  FROM actor  WHERE act_id = (SELECT act_id  FROM movie_cast  WHERE mov_id = m.mov_id)) AS actor_fname,(SELECT acrt_lname  FROM actor WHERE act_id = (SELECT act_id 
FROM movie_cast  WHERE mov_id = m.mov_id)) AS actor_lnameFROM movie m WHERE  mov_id IN (SELECT mov_id  FROM movie_rating WHERE rev_id IN (SELECT rev_id FROM movie_reviewer WHERE rev_name is null) );
```

## output
    
    | MOV_TITLE         | MOV_YEAR | MOV_DT_REL           | DIRECTOR_FNAME | DIRECTOR_LNAME | ACTOR_FNAME | ACTOR_LNAME |
    | :---------------- | :------- | :------------------- | :------------- | :------------- | :---------- | :---------- |
    | Blade Runner      | 1982     | 1982-09-09T00:00:00Z | Ridley         | Scott          | Harrison    | Ford        |
    | Princess Mononoke | 1997     | 2001-10-19T00:00:00Z | Hayao          | Miyazaki       | Claire      | Danes       |
---
 
 ## question 15.
  Write a SQL query to find those movies directed by the director whose first name is Woddy and last name is Allen. Return movie title.

  ``` sql
    select mov_title from movie where mov_id in (select mov_id from movie_direction where dir_id in (select dir_id from director where dir_fname='Woody' and dir_lname='Allen'))
```
## output
    
    | MOV_TITLE  |
    | :--------- |
    | Annie Hall |
---

## question 16. 
Write a SQL query to determine those years in which there was at least one movie that received a rating of at least three stars. Sort the result-set in ascending order by movie year. Return movie year.

``` sql
select mov_year from movie where mov_id in (select mov_id from movie_rating where rev_stars>=3) order by mov_year asc
```
## output
    
    | MOV_YEAR |
    | :------- |
    | 1954     |
    | 1958     |
    | 1961     |
    | 1962     |
    | 1977     |
    | 1982     |
    | 1986     |
    | 1995     |
    | 1997     |
    | 1997     |
    | 1997     |
    | 1997     |
    | 1999     |
    | 2001     |
    | 2004     |
    | 2008     |
    | 2009     |
---

## Question 17.
 Write a SQL query to search for movies that do not have any ratings. Return movie title.

 ``` sql
select mov_title from movie where mov_id in(select mov_id from movie_rating where num_o_ratings is null)
```
## output
    
    | MOV_TITLE         |
    | :---------------- |
    | Princess Mononoke |
    | Avatar            |
---

## Question 18.
 Write a SQL query to find those reviewers who have not given a rating to certain films. Return reviewer name.

 ``` sql
select rev_name from movie_reviewer where rev_id in (select rev_id from movie_rating where rev_stars is null)
```
## output

    
    | REV_NAME     |
    | :----------- |
    | Neal Wruck   |
    | Scott LeBrun |
---

## Question 19. 
Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Sort the result-set in ascending order by reviewer name, movie title, review Stars. Return reviewer name, movie title, review Stars.

``` sql
SELECT (SELECT mr.rev_name  FROM movie_reviewer mr  WHERE mr.rev_id = r.rev_id) AS rev_name,(SELECT m.mov_title  FROM movie m  WHERE m.mov_id = r.mov_id) AS mov_title,r.rev_stars FROM movie_rating r WHERE r.rev_stars IS NOT NULL ORDER BYrev_name ASC,mov_title ASC,r.rev_stars ASC;
```

## output

    | REV_NAME           | MOV_TITLE           | REV_STARS |
    | :----------------- | :------------------ | :-------- |
    | Brandt Sponseller  | Aliens              | 8.4       |
    | Flagrant Baronessa | Lawrence of Arabia  | 8.3       |
    | Hannah Steele      | Donnie Darko        | 8.1       |
    | Jack Malvern       | The Innocents       | 7.9       |
    | Josh Cates         | Good Will Hunting   | 4         |
    | Krug Stillo        | Seven Samurai       | 7.7       |
    | Mike Salvati       | Annie Hall          | 8.1       |
    | Paul Monks         | Boogie Nights       | 3         |
    | Richard Adams      | Beyond the Sea      | 6.7       |
    | Righty Sock        | Titanic             | 7.7       |
    | Righty Sock        | Vertigo             | 8.4       |
    | Sasha Goldshtein   | American Beauty     | 7         |
    | Simon Wright       | The Usual Suspects  | 8.6       |
    | Victor Woeltjen    | Avatar              | 7.3       |
    | Vincent Cadena     | Slumdog Millionaire | 8         |
    | Blade Runner       | 8.2                 |           |
    | Princess Mononoke  | 8.4                 |           |
---

## Question 20.
 Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Group the result set on reviewer’s name, movie title. Return reviewer’s name, movie title.

``` sql
SELECT DISTINCT(SELECT mr.rev_name FROM movie_reviewer mr WHERE mr.rev_id = r.rev_id) AS rev_name,(SELECT m.mov_title FROM movie m WHERE m.mov_id = r.mov_id) AS mov_title FROM movie_rating r WHERE r.rev_stars IS NOT NULL;
```

## output

    | REV_NAME           | MOV_TITLE           |
    | :----------------- | :------------------ |
    | Righty Sock        | Vertigo             |
    | Jack Malvern       | The Innocents       |
    | Flagrant Baronessa | Lawrence of Arabia  |
    | Blade Runner       |                     |
    | Victor Woeltjen    | Avatar              |
    | Simon Wright       | The Usual Suspects  |
    | Paul Monks         | Boogie Nights       |
    | Mike Salvati       | Annie Hall          |
    | Princess Mononoke  |                     |
    | Sasha Goldshtein   | American Beauty     |
    | Righty Sock        | Titanic             |
    | Josh Cates         | Good Will Hunting   |
    | Krug Stillo        | Seven Samurai       |
    | Hannah Steele      | Donnie Darko        |
    | Vincent Cadena     | Slumdog Millionaire |
    | Brandt Sponseller  | Aliens              |
    | Richard Adams      | Beyond the Sea      |
---

## Question 21. 
Write a SQL query to find those movies, which have received highest number of stars. Group the result set on movie title and sorts the result-set in ascending order by movie title. Return movie title and maximum number of review stars.

``` sql
select m.mov_title,max(r.rev_stars) AS max_stars from movie m, movie_rating r where m.mov_id = r.mov_id and r.rev_stars = (select MAX(rev_stars) from movie_rating
where rev_stars IS NOT NULL) GROUP BY m.mov_title ORDER BY m.mov_title ASC;
```
## output

    | MOV_TITLE          | MAX_STARS |
    | :----------------- | :-------- |
    | The Usual Suspects | 8.6       |
---

## Question 22. 
Write a SQL query to find all reviewers who rated the movie 'American Beauty'. Return reviewer name.

``` sql
select rev_name from movie_reviewer where rev_id in (select rev_id from movie_rating where mov_id in(select mov_id from movie where mov_title='American Beauty'))
```
## output
    
    | REV_NAME         |
    | :--------------- |
    | Sasha Goldshtein |
    |                  |
---

## Question  23.
 Write a SQL query to find the movies that have not been reviewed by any reviewer body other than 'Paul Monks'. Return movie title.

``` sql
select mov_title from movie where mov_id in (select mov_id from movie_rating where rev_id in(select rev_id from movie_reviewer where rev_name='Paul Monks') )
```

## output
    
    | MOV_TITLE     |
    | :------------ |
    | Boogie Nights |
---

## Question 24.
 Write a SQL query to find the movies with the lowest ratings. Return reviewer name, movie title, and number of stars for those movies.

``` sql
SELECT(SELECT mr.rev_name FROM movie_reviewer mr WHERE mr.rev_id = r.rev_id) AS reviewer_name,(SELECT m.mov_title FROM movie m WHERE m.mov_id = r.mov_id) AS movie_title,r.rev_stars FROM movie_rating r WHERE r.rev_stars = ( SELECT MIN(rev_stars) FROM movie_ratingWHERE rev_stars IS NOT NULL);
```

## output
    
    | REVIEWER_NAME | MOVIE_TITLE   | REV_STARS |
    | :------------ | :------------ | :-------- |
    | Paul Monks    | Boogie Nights | 3         |
---      

## Question 25. 
Write a SQL query to find the movies directed by 'James Cameron'. Return movie title.

``` sql
select mov_title from movie where mov_id in (select mov_id from movie_direction where dir_id in (select dir_id from director where dir_fname='James' and dir_lname = 'Cameron'))
```
## output
    
    | MOV_TITLE |
    | :-------- |
    | Titanic   |
    | Aliens    |
---

## Question 26. 
Write a query in SQL to find the movies in which one or more actors appeared in more than one film.

``` sql
select distinct mov_title from movie m join MOVIE_CAST mc on m.mov_id=mc.MOV_ID where mc.ACT_ID in(select act_id from movie_cast GROUP by act_id having (count(mov_id)>1));
```
## output

    | MOV_TITLE       |
    | :-------------- |
    | American Beauty |
    | Beyond the Sea  |
    |                 |
---

# Joins:

## Question 27. 
Write a SQL query to find all reviewers whose ratings contain a NULL value. Return reviewer name.
``` sql
SELECT DISTINCT r.rev_name FROM movie_reviewer r JOIN movie_rating mr ON r.rev_id = mr.rev_id
WHERE mr.rev_stars IS NULL;
```
## output
    
    | REV_NAME     |
    | :----------- |
    | Neal Wruck   |
    | Scott LeBrun |
---

## Question 28. 
Write a SQL query to find out who was cast in the movie 'Annie Hall'. Return actor first name, last name and role.
``` sql
 select a.act_fname,a.act_lname,mc.role from actor a join MOVIE_CAST mc on a.act_id =mc.act_id join movie m on m.mov_id=mc.mov_id where m.mov_title= 'Annie Hall'
 ```
## output
    
    | ACT_FNAME | ACT_LNAME | ROLE        |
    | :-------- | :-------- | :---------- |
    | Woody     | Allen     | Alvy Singer |
---

## Question 29.
Write a SQL query to find the director who directed a movie that featured a role in 'Eyes Wide Shut'. Return director first name, last name and movie title.
``` sql
select d.dir_fname,d.dir_lname,m.mov_title from director d join movie_direction md on d.dir_id=md.dir_id join movie m on m.mov_id=md.mov_id where m.mov_title='Eyes Wide Shut'
```
## output 

    | DIR_FNAME | DIR_LNAME | MOV_TITLE      |
    | :-------- | :-------- | :------------- |
    | Stanley   | Kubrick   | Eyes Wide Shut |
    
---

## Question 30. 
Write a SQL query to find the director of a movie that cast a role as Sean Maguire. Return director first name, last name and movie title.
``` sql
SELECT DISTINCT d.dir_fname, d.dir_lname, m.mov_title FROM director d JOIN movie_direction md ON d.dir_id = md.dir_id JOIN movie m ON md.mov_id = m.mov_id JOIN movie_cast mc ON m.mov_id = mc.mov_idWHERE mc.role = 'Sean Maguire';
```
## output
    
    | DIR_FNAME | DIR_LNAME | MOV_TITLE         |
    | :-------- | :-------- | :---------------- |
    | Gus       | Van Sant  | Good Will Hunting |
---

## Question 31.
 Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included.). Return actor first name, last name, movie title and release year.

``` sql
select a.act_fname,a.act_lname,m.mov_title,m.mov_year from actor a join MOVIE_CAST mc on a.act_id=mc.act_id join movie m on m.mov_id=mc.mov_id where m.MOV_YEAR <1990 or m.mov_year > 2000
```
## output

    | ACT_FNAME | ACT_LNAME  | MOV_TITLE           | MOV_YEAR |
    | :-------- | :--------- | :------------------ | :------- |
    | James     | Stewart    | Vertigo             | 1958     |
    | Deborah   | Kerr       | The Innocents       | 1961     |
    | Peter     | OToole     | Lawrence of Arabia  | 1962     |
    | Robert    | De Niro    | The Deer Hunter     | 1978     |
    | F. Murray | Abraham    | Amadeus             | 1984     |
    | Harrison  | Ford       | Blade Runner        | 1982     |
    | Jack      | Nicholson  | Chinatown           | 1974     |
    | Woody     | Allen      | Annie Hall          | 1977     |
    | Kevin     | Spacey     | Beyond the Sea      | 2004     |
    | Jon       | Voight     | Deliverance         | 1972     |
    | Christian | Bale       | Chinatown           | 1974     |
    | Maggie    | Gyllenhaal | Donnie Darko        | 2001     |
    | Dev       | Patel      | Slumdog Millionaire | 2008     |
    | Sigourney | Weaver     | Aliens              | 1986     |
---
## Question32.
 Write a SQL query to find the directors who have directed films in a variety of genres. Group the result set on director first name, last name and generic title. Sort the result-set in ascending order by director first name and last name. Return director first name, last name and number of genres movies.
``` sql    
select d.dir_fname,d.dir_lname,count (distinct g.gen_title)  from director d join movie_direction md on d.dir_id=md.dir_id join movie_genres mg on mg.mov_id =md.mov_id join genres g on g.gen_id=mg.gen_id group by d.dir_fname,d.dir_lname,g.gen_title having(count(distinct g.gen_title)>1) order by d.dir_fname asc ,d.dir_lname asc
```
## output

    | DIR_FNAME | DIR_LNAME | COUNT(DISTINCTG.GEN_TITLE) |
    | :-------- | :-------- | :------------------------- |
    |           |           |                            |
---
## Question 33. 
Write a SQL query to find the movies with year and genres. Return movie title, movie year and generic title.
``` sql
select m.mov_title,m.mov_year,g.gen_title from movie m join  movie_genres mg on  m.mov_id=mg.mov_id join genres g on mg.gen_id=g.gen_id;
```
## output
    
    | MOV_TITLE                | MOV_YEAR | GEN_TITLE |
    | :----------------------- | :------- | :-------- |
    | Aliens                   | 1986     | Action    |
    | Lawrence of Arabia       | 1962     | Adventure |
    | Deliverance              | 1972     | Adventure |
    | Princess Mononoke        | 1997     | Animation |
    | Annie Hall               | 1977     | Comedy    |
    | The Usual Suspects       | 1995     | Crime     |
    | The Shawshank Redemption | 1994     | Crime     |
    | Trainspotting            | 1996     | Drama     |
    | Slumdog Millionaire      | 2008     | Drama     |
    | Spirited Away            | 2001     | Drama     |
    | Braveheart               | 1995     | Drama     |
    | The Innocents            | 1961     | Horror    |
    | Beyond the Sea           | 2004     | Music     |
    | Vertigo                  | 1958     | Mystery   |
    | Eyes Wide Shut           | 1999     | Mystery   |
    | Back to the Future       | 1985     | Mystery   |
    | American Beauty          | 1999     | Romance   |
    | Blade Runner             | 1982     | Thriller  |
    | The Deer Hunter          | 1978     | War       |
---
## Question 34. 
Write a SQL query to find all the movies with year, genres, and name of the director.
``` sql
select m.mov_title,m.mov_year,g.gen_title,concat(d.dir_fname,' ',d.dir_lname )As director_name from movie m join movie_direction md on m.mov_id=md.mov_id join director d on d.dir_id=md.dir_id join movie_genres mg on mg.mov_id=m.mov_id join genres g on g.gen_id=mg.gen_id;
```
## output
    
    | MOV_TITLE                | MOV_YEAR | GEN_TITLE | DIRECTOR_NAME    |
    | :----------------------- | :------- | :-------- | :--------------- |
    | Vertigo                  | 1958     | Mystery   | Alfred Hitchcock |
    | The Innocents            | 1961     | Horror    | Jack Clayton     |
    | Lawrence of Arabia       | 1962     | Adventure | David Lean       |
    | The Deer Hunter          | 1978     | War       | Michael Cimino   |
    | Blade Runner             | 1982     | Thriller  | Ridley Scott     |
    | Eyes Wide Shut           | 1999     | Mystery   | Stanley Kubrick  |
    | The Usual Suspects       | 1995     | Crime     | Bryan Singer     |
    | Annie Hall               | 1977     | Comedy    | Woody Allen      |
    | Princess Mononoke        | 1997     | Animation | Hayao Miyazaki   |
    | The Shawshank Redemption | 1994     | Crime     | Frank Darabont   |
    | American Beauty          | 1999     | Romance   | Sam Mendes       |
    | Aliens                   | 1986     | Action    | James Cameron    |
    | Deliverance              | 1972     | Adventure | John Boorman     |
    | Trainspotting            | 1996     | Drama     | Danny Boyle      |
    | Slumdog Millionaire      | 2008     | Drama     | Danny Boyle      |
    | Beyond the Sea           | 2004     | Music     | Kevin Spacey     |
---
## Question 35. 
Write a SQL query to find the movies released before 1st January 1989. Sort the result-set in descending order by date of release. Return movie title, release year, date of release, duration, and first and last name of the director.
```sql
select mv.mov_title, mv.mov_year, mv.mov_dt_rel, mv.mov_time, dr.dir_fname,dr.dir_lname from movie mv join movie_direction md on mv.mov_id = md.mov_id join director dr on dr.dir_id = md.dir_id where mv.mov_dt_rel < DATE '1989-01-01' order by mv.mov_dt_rel desc;
```
## output
    
    | MOV_TITLE          | RELEASE_YEAR | MOV_DT_REL           | MOVIE_DURATION | DIR_FNAME | DIR_LNAME |
    | :----------------- | :----------- | :------------------- | :------------- | :-------- | :-------- |
    | Aliens             | 1986         | 1986-08-29T00:00:00Z | 137            | James     | Cameron   |
    | Amadeus            | 1984         | 1985-01-07T00:00:00Z | 160            | Milos     | Forman    |
    | Deliverance        | 1972         | 1982-10-05T00:00:00Z | 109            | John      | Boorman   |
    | Blade Runner       | 1982         | 1982-09-09T00:00:00Z | 117            | Ridley    | Scott     |
    | The Deer Hunter    | 1978         | 1979-03-08T00:00:00Z | 183            | Michael   | Cimino    |
    | Annie Hall         | 1977         | 1977-04-20T00:00:00Z | 93             | Woody     | Allen     |
    | Chinatown          | 1974         | 1974-08-09T00:00:00Z | 130            | Roman     | Polanski  |
    | Lawrence of Arabia | 1962         | 1962-12-11T00:00:00Z | 216            | David     | Lean      |
    | The Innocents      | 1961         | 1962-02-19T00:00:00Z | 100            | Jack      | Clayton   |
    | Vertigo            | 1958         | 1958-08-24T00:00:00Z | 128            | Alfred    | Hitchcock |
---
## Question 36. 
Write a SQL query to calculate the average movie length and count the number of movies in each genre. Return genre title, average time and number of movies for each genre.
``` sql
select gn.gen_title, AVG(mv.mov_time), COUNT(mg.mov_id) from movie mv join movie_genres mg on
mv.mov_id = mg.mov_id join genres gn on gn.gen_id = mg.gen_id group by gn.gen_title
```
## output
    
    | GEN_TITLE | AVG(MV.MOV_TIME)   | COUNT(MG.MOV_ID) |
    | :-------- | :----------------- | :--------------- |
    | Action    | 137                | 1                |
    | Adventure | 162.5              | 2                |
    | Animation | 134                | 1                |
    | Comedy    | 93                 | 1                |
    | Crime     | 124                | 2                |
    | Drama     | 129.25             | 4                |
    | Horror    | 100                | 1                |
    | Music     | 118                | 1                |
    | Mystery   | 134.33333333333334 | 3                |
    | Romance   | 122                | 1                |
    | Thriller  | 117                | 1                |
    | War       | 183                | 1                |
---

## Question 37.
 Write a SQL query to find movies with the shortest duration. Return movie title, movie year, director first name, last name, actor first name, last name and role.

``` sql
SELECT mv.mov_title , mv.mov_year , dr.dir_fname,dr.dir_lname , ac.act_fname, ac.act_lname , mc.role FROM movie mv JOIN movie_cast mc ON mc.mov_id = mv.mov_id
JOIN actor ac ON ac.act_id = mc.act_id
JOIN movie_direction md ON md.mov_id = mv.mov_id
JOIN director dr ON dr.dir_id = md.dir_id
WHERE mv.mov_time <= ALL(SELECT mov_time FROM movie);
```
## output
    
    | MOV_TITLE  | MOV_YEAR | DIR_FNAME | DIR_LNAME | ACT_FNAME | ACT_LNAME | ROLE        |
    | :--------- | :------- | :-------- | :-------- | :-------- | :-------- | :---------- |
    | Annie Hall | 1977     | Woody     | Allen     | Woody     | Allen     | Alvy Singer |
---
## Question 38. 
Write a SQL query to find the years in which a movie received a rating of 3 or 4. Sort the result in increasing order on movie year.
``` sql
 SELECT mv.mov_year  FROM movie mv JOIN movie_rating mrt ON mv.mov_id = mrt.mov_idWHERE mrt.rev_stars= 3 OR mrt.rev_stars = 4 GROUP BY mv.mov_yearORDER BY mv.mov_year;
 ```
 ## output
    
    | MOV_YEAR |
    | :------- |
    | 1997     |
---

## question 39. 
Write a SQL query to get the reviewer name, movie title, and stars in an order that reviewer name will come first, then by movie title, and lastly by number of stars.
``` sql
SELECT mr.rev_name  , mv.mov_title  , mrt.rev_starsFROM
movie mv JOIN movie_rating mrt ON mv.mov_id = mrt.mov_id JOIN movie_reviewer mr ON mr.rev_id = mrt.rev_idORDER BY mr.rev_name ASC,mv.mov_title ASC,mrt.rev_stars ASC;
```
## output
    
    | REV_NAME           | MOV_TITLE           | REV_STARS |
    | :----------------- | :------------------ | :-------- |
    | Brandt Sponseller  | Aliens              | 8.4       |
    | Flagrant Baronessa | Lawrence of Arabia  | 8.3       |
    | Hannah Steele      | Donnie Darko        | 8.1       |
    | Jack Malvern       | The Innocents       | 7.9       |
    | Josh Cates         | Good Will Hunting   | 4         |
    | Krug Stillo        | Seven Samurai       | 7.7       |
    | Mike Salvati       | Annie Hall          | 8.1       |
    | Neal Wruck         | Chinatown           |           |
    | Paul Monks         | Boogie Nights       | 3         |
    | Richard Adams      | Beyond the Sea      | 6.7       |
    | Righty Sock        | Titanic             | 7.7       |
    | Righty Sock        | Vertigo             | 8.4       |
    | Sasha Goldshtein   | American Beauty     | 7         |
    | Scott LeBrun       | Trainspotting       |           |
    | Simon Wright       | The Usual Suspects  | 8.6       |
    | Victor Woeltjen    | Avatar              | 7.3       |
    | Vincent Cadena     | Slumdog Millionaire | 8         |
    | Blade Runner       | 8.2                 |           |
    | Princess Mononoke  | 8.4                 |           |
---
## Question 40. 
Write a SQL query to find those movies that have at least one rating and received the most stars. Sort the result-set on movie title. Return movie title and maximum review stars.

``` sql
SELECT mv.mov_title,MAX(mrt.rev_stars) FROM movie mv
JOIN movie_rating mrt ON mv.mov_id = mrt.mov_id
GROUP BY mv.mov_title
HAVING MAX(mrt.rev_stars) = (
SELECT MAX(rev_stars)
FROM movie_rating
)
ORDER BY mv.mov_title;
``` 
## output
    
    | MOV_TITLE          | MAX(MRT.REV_STARS) |
    | :----------------- | :----------------- |
    | The Usual Suspects | 8.6                |
---
## Question 41. 
Write a SQL query to find out which movies have received ratings. Return movie title, director first name, director last name and review stars.
``` sql
SELECT mv.mov_title, dr.dir_fname , dr.dir_lname, mrt.rev_stars AS review_stars
FROM movie mv JOIN movie_rating mrt ON mv.mov_id = mrt.mov_idJOIN movie_direction md ON mv.mov_id = md.mov_id
JOIN director dr ON dr.dir_id = md.dir_id WHERE mrt.num_o_ratings > 0;
```
## output
    
    | MOV_TITLE           | DIR_FNAME | DIR_LNAME       | REVIEW_STARS |
    | :------------------ | :-------- | :-------------- | :----------- |
    | Vertigo             | Alfred    | Hitchcock       | 8.4          |
    | The Innocents       | Jack      | Clayton         | 7.9          |
    | Lawrence of Arabia  | David     | Lean            | 8.3          |
    | Blade Runner        | Ridley    | Scott           | 8.2          |
    | The Usual Suspects  | Bryan     | Singer          | 8.6          |
    | Chinatown           | Roman     | Polanski        |              |
    | Boogie Nights       | Paul      | Thomas Anderson | 3            |
    | Annie Hall          | Woody     | Allen           | 8.1          |
    | American Beauty     | Sam       | Mendes          | 7            |
    | Titanic             | James     | Cameron         | 7.7          |
    | Aliens              | James     | Cameron         | 8.4          |
    | Good Will Hunting   | Gus       | Van Sant        | 4            |
    | Trainspotting       | Danny     | Boyle           |              |
    | Slumdog Millionaire | Danny     | Boyle           | 8            |
    | Donnie Darko        | Richard   | Kelly           | 8.1          |
    | Beyond the Sea      | Kevin     | Spacey          | 6.7          |
---

## Question42.
 Write a SQL query to find movies in which one or more actors have acted in more than one film. Return movie title, actor first and last name, and the role.

``` sql
SELECTmv.mov_title,ac.act_fname,ac.acrt_lname,mc.role FROM movie_cast mc JOIN actor ac ON mc.act_id = ac.act_idJOIN movie mv ON mc.mov_id = mv.mov_id JOIN movie_cast mc2 ON mc.act_id = mc2.act_idAND mc.mov_id <> mc2.mov_id ORDER BY ac.act_fname, mv.mov_title;
```
## output
    | MOV_TITLE       | ACT_FNAME | ACT_LNAME | ROLE           |
    | :-------------- | :-------- | :-------- | :------------- |
    | American Beauty | Kevin     | Spacey    | Lester Burnham |
    | Beyond the Sea  | Kevin     | Spacey    | Bobby Darin    |
    |                 |           |           |                |
---
## Question43.
 Write a SQL query to find the actor whose first name is 'Claire' and last name is 'Danes'. Return director first name, last name, movie title, actor first name and last name, role.
``` sql
SELECT dr.dir_fname, dr.dir_lname,mv.mov_title , ac.act_fname , ac.act_lname , mc.roleFROM actor ac JOIN movie_cast mc ON mc.act_id = ac.act_id JOIN movie mv ON mv.mov_id = mc.mov_id JOIN movie_direction md on md.mov_id = mc.mov_id JOIN director dr ON dr.dir_id = md.dir_id WHERE ac.act_fname = 'Claire' AND ac.act_lname='Danes';
```
## output
    
    | DIR_FNAME | DIR_LNAME | MOV_TITLE         | ACT_FNAME | ACT_LNAME | ROLE |
    | :-------- | :-------- | :---------------- | :-------- | :-------- | :--- |
    | Hayao     | Miyazaki  | Princess Mononoke | Claire    | Danes     | San  |
---
## Question 44. 
Write a SQL query to find for actors whose films have been directed by them. Return actor first name, last name, movie title and role.
``` sql
SELECT ac.act_fname,ac.act_lname,mv.mov_title,mc.role FROM actor acJOIN movie_cast mc ON ac.act_id = mc.act_idJOIN movie mv ON mc.mov_id = mv.mov_idJOIN movie_direction md ON mv.mov_id = md.mov_idJOIN director dr ON md.dir_id = dr.dir_id WHERE ac.act_fname = dr.dir_fname AND ac.act_lname = dr.dir_lname;
```
## output

    | ACT_FNAME | ACT_LNAME | MOV_TITLE      | ROLE        |
    | :-------- | :-------- | :------------- | :---------- |
    | Woody     | Allen     | Annie Hall     | Alvy Singer |
    | Kevin     | Spacey    | Beyond the Sea | Bobby Darin |
---
## Question 45.
 Write a SQL query to find the cast list of the movie ‘Chinatown’. Return first name, last name.
``` sql
SELECT ac.act_fname, ac.act_lname FROM actor ac JOIN movie_cast mc ON ac.act_id = mc.act_id
JOIN movie mv ON mc.mov_id = mv.mov_id WHERE mv.mov_title = 'Chinatown';
```
## output
    
    | ACT_FNAME | ACT_LNAME |
    | :-------- | :-------- |
    | Jack      | Nicholson |
    | Christian | Bale      |
---
## Question 46. 
Write a SQL query to find those movies where actor’s first name is 'Harrison' and last name is 'Ford'. Return movie title.
``` sql
SELECT mv.mov_title FROM movie mv JOIN movie_cast mc ON mv.mov_id = mc.mov_id
JOIN actor ac ON ac.act_id = mc.act_id WHERE ac.act_fname='Harrison' AND ac.act_lname='Ford';
```
## output
    
    | MOV_TITLE    |
    | :----------- |
    | Blade Runner |
---

## Question 47. 
Write a SQL query to find the highest-rated movies. Return movie title, movie year, review stars and releasing country.
``` sql
 SELECT mv.mov_title, mv.mov_year,mrt.rev_stars,mv.mov_rel_country FROM movie mv JOIN movie_rating mrt ON mv.mov_id = mrt.mov_id WHERE mrt.rev_stars = (select max(rev_stars) from movie_rating);
```
## output
    
    | MOV_TITLE          | MOV_YEAR | REV_STARS | MOV_REL_COUNTRY |
    | :----------------- | :------- | :-------- | :-------------- |
    | The Usual Suspects | 1995     | 8.6       | UK              |
---
## Question 48. 
Write a SQL query to find the highest-rated ‘Mystery Movies’. Return the title, year, and rating.
``` sql
SELECTmv.mov_title, mv.mov_year,mrt.rev_stars FROM movie mv JOIN movie_rating mrt ON mv.mov_id = mrt.mov_id
JOIN movie_genres mg ON mg.mov_id = mv.mov_id JOIN genres gn ON mg.gen_id = gn.gen_id
WHERE gn.gen_title = 'Mystery' GROUP BY mv.mov_title, mv.mov_year, mrt.rev_starsHAVING mrt.rev_stars = MAX(mrt.rev_stars);
```
## output
    
    | MOV_TITLE | MOV_YEAR | REV_STARS |
    | :-------- | :------- | :-------- |
    | Vertigo   | 1958     | 8.4       |
---

## Question 49. 
Write a SQL query to find the years when most of the ‘Mystery Movies’ produced. Count the number of generic title and compute their average rating. Group the result set on movie release year, generic title. Return movie year, generic title, number of generic title and average rating.

``` sql
    SELECTmv.mov_year,gn.gen_title,COUNT(mv.mov_id),AVG(mrt.rev_stars)FROM movie mvJOIN movie_genres mgON mv.mov_id = mg.mov_idJOIN genres gn ON mg.gen_id = gn.gen_id LEFT JOIN movie_rating mrt ON mv.mov_id = mrt.mov_id WHERE gn.gen_title = 'Mystery' GROUP BY mv.mov_year,gn.gen_title;
```
## output
    
    | MOV_YEAR | GEN_TITLE | COUNT(MV.MOV_ID) | AVG(MRT.REV_STARS) |
    | :------- | :-------- | :--------------- | :----------------- |
    | 1958     | Mystery   | 1                | 8.4                |
    | 1985     | Mystery   | 1                |                    |
    | 1999     | Mystery   | 1                |                    |
---
    
## Question 50. 
Write a query in SQL to generate a report, which contain the fields movie title, name of the female actor, year of the movie, role, movie genres, the director, date of release, and rating of that movie.

``` sql
SELECT mv.mov_title, ac.act_fname, ac.act_lname,mv.mov_year,mc.role,gn.gen_title,dr.dir_fname,dr.dir_lname,mv.mov_dt_rel,
mrt.rev_starsFROM movie mv JOIN movie_cast mc ON mv.mov_id = mc.mov_id JOIN actor ac ON ac.act_id = mc.act_id
JOIN movie_genres mg ON mg.mov_id = mv.mov_idJOIN genres gn ON gn.gen_id = mg.gen_id
JOIN movie_direction md ON md.mov_id = mv.mov_id JOIN director dr ON dr.dir_id = md.dir_id
LEFT JOIN movie_rating mrt ON mrt.mov_id = mv.mov_id WHERE ac.act_gender = 'F';
```
## output
    
    | MOV_TITLE         | ACT_FNAME | ACT_LNAME | MOV_YEAR | ROLE          | GEN_TITLE | DIR_FNAME | DIR_LNAME | MOV_DT_REL           | REV_STARS |
    | :---------------- | :-------- | :-------- | :------- | :------------ | :-------- | :-------- | :-------- | :------------------- | :-------- |
    | Aliens            | Sigourney | Weaver    | 1986     | Ripley        | Action    | James     | Cameron   | 1986-08-29T00:00:00Z | 8.4       |
    | Princess Mononoke | Claire    | Danes     | 1997     | San           | Animation | Hayao     | Miyazaki  | 2001-10-19T00:00:00Z | 8.4       |
    | The Innocents     | Deborah   | Kerr      | 1961     | Miss Giddens  | Horror    | Jack      | Clayton   | 1962-02-19T00:00:00Z | 7.9       |
    | Eyes Wide Shut    | Nicole    | Kidman    | 1999     | Alice Harford | Mystery   | Stanley   | Kubrick   |                      |           |
    |                   |           |           |          |               |           |           |           |                      |           |
---
---