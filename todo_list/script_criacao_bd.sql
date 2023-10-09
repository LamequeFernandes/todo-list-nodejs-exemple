-- POSTGRES:

CREATE DATABASE todo_list;

\c todo_list;

SET search_path TO public;

-- Criar um tipo ENUM para o status da tarefa
CREATE TYPE status_enum AS ENUM ('A_FAZER', 'EM_ANDAMENTO', 'CONCLUIDA');

CREATE TABLE USUARIO (
    id_usuario BIGSERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    admin BOOLEAN NOT NULL
);

CREATE TABLE TAREFA (
    id_tarefa BIGSERIAL NOT NULL PRIMARY KEY,
    status status_enum NOT NULL,
    titulo TEXT NOT NULL,
    detalhes TEXT,
    id_usuario BIGINT NOT NULL,
    CONSTRAINT USUARIO_TAREFA_FK FOREIGN KEY (id_usuario)
        REFERENCES USUARIO (id_usuario)
        ON DELETE CASCADE
);

-- Alterar a tabela TAREFA para usar o tipo ENUM
ALTER TABLE TAREFA
    ALTER COLUMN status TYPE status_enum USING status::text::status_enum;



-- MYSQL:

-- CREATE TABLE USUARIO (
--     id_usuario BIGINT PRIMARY KEY,
--     nome TEXT NOT NULL,
--     email TEXT NOT NULL UNIQUE,
--     senha TEXT,
--     `admin` BIT NOT NULL
-- );

-- CREATE TABLE TAREFA (
--     id_tarefa BIGINT NOT NULL PRIMARY KEY,
--     status ENUM( 'A_FAZER', 'EM_ANDAMENTO', 'CONCLUIDA') NOT NULL,
--     titulo TEXT NOT NULL,
--     detalhes TEXT,
--     id_usuario BIGINT NOT NULL,
--     CONSTRAINT USUARIO_TAREFA_FK FOREIGN KEY (id_usuario)
--         REFERENCES USUARIO (id_usuario)
--         ON DELETE CASCADE
-- );
