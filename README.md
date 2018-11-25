
# Zoocasa Data Import Exercise

Given: Small sample of school data in CSV format (file attached). Goal: Import this data into a database. See below for further details.


## Getting Started

These instructions will allow you to run this program in your local machine.

### Prerequisites

ruby 2.5.1

rails 5.2.1

PostgresSQL 10.5

### Installing

Inside the app root folder - In your terminal

```
bundle update
```

run database migration
```
rails db:migrate
```

seeding db by running rails task

```
rails import:data

```


## Running server

```
rails s

```


## API endpoints

GET/  
http://localhost:3000/schools

This will give you all the schools seeded in the DB

GET/  
http://localhost:3000/schools/st--jean-marie-vianney-catholic-elementary-school

This will give you one school with the slug 'st--jean-marie-vianney-catholic-elementary-school'



## Authors

* **Bibek Thapa**
