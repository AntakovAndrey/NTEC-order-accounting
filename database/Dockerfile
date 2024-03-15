FROM postgres:latest

ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=NTEC-Order-Accounting-DB
ENV POSTGRES_USER=postgres
ENV POSTGRES_INITDB_ARGS="--data-checksums"

COPY ./initializeDB.sql /docker-entrypoint-initdb.d/
