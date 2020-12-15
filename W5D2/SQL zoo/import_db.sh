#!/usr/bin/env sh

sudo service postgresql start
dropdb sqlzoo
createdb sqlzoo
psql sqlzoo < data/create_tables.sql
