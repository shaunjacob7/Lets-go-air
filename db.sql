use airdb;

create table flightchart
(
flight_id int,
depart_date date,
depart_time time,
source_airport varchar(10),
destination_airport varchar(10),
ticket_price double 
);



insert into flightchart values(8,'2021-08-25',TIME_FORMAT("08:30", "%H %i"),'bombay','delhi',6000.00);

alter table flightchart
add column Arrival_time time;

update flightchart
set Arrival_time=TIME_FORMAT("02:30", "%H %i");




select * from flightchart;

select * from flightchart
where source_airport='bombay'