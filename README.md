# task
Note: This work is done in a day and with no prior experience with sequelize, connecting with postgress(used mongodb before), faker.(you can check the repo creation date)(https://github.com/Noragamal/task)
it probably wouldn't compile because of further modifications; however, till seeding the data and creating the models it's absolutely working aka part one (https://www.oriechinedu.com/posts/getting-started-with-sequelize-and-postgres)


-had a problem with env also so went to the dummier approach by adding username and password.


-also didn't use faker.



postgres was used as the db by sqlshell and pgAdmin.
To run the code just command 
node index.js 

for the bonus index it would be on the product type as the time range wouldn't be as bulky as the type. In real stores it would be max. 5 different time ranges


syntax:
CREATE INDEX IDX_PRODUCT_TYPE
ON Product (type);


-unit tests, required a function class which also unfortunalety I didn't have time.
