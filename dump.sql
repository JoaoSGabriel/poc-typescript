--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: residents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.residents (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: residents_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.residents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: residents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.residents_id_seq OWNED BY public.residents.id;


--
-- Name: tasks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tasks (
    id integer NOT NULL,
    description text NOT NULL,
    responsible integer NOT NULL,
    completed boolean DEFAULT false NOT NULL
);


--
-- Name: tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;


--
-- Name: residents id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.residents ALTER COLUMN id SET DEFAULT nextval('public.residents_id_seq'::regclass);


--
-- Name: tasks id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);


--
-- Data for Name: residents; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.residents VALUES (1, 'Rodrigo');
INSERT INTO public.residents VALUES (2, 'Marcos');
INSERT INTO public.residents VALUES (3, 'Felipe');
INSERT INTO public.residents VALUES (4, 'João');


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tasks VALUES (1, 'Limpar a sala, quartos e banheiros', 1, false);
INSERT INTO public.tasks VALUES (2, 'Limpar a cozinha, lavanderia e quintal', 2, false);
INSERT INTO public.tasks VALUES (3, 'Lavar, secar e guardar a louça', 3, false);
INSERT INTO public.tasks VALUES (5, 'Limpar fogão, geladeira e micro-ondas', 2, false);
INSERT INTO public.tasks VALUES (6, 'Passar pano nos armários da cozinha', 1, false);
INSERT INTO public.tasks VALUES (7, 'Lavar as janelas', 3, false);
INSERT INTO public.tasks VALUES (8, 'Pagar as contas', 4, false);
INSERT INTO public.tasks VALUES (9, 'Fazer o mercado', 4, false);
INSERT INTO public.tasks VALUES (10, 'Colocar o lixo para fora', 4, false);
INSERT INTO public.tasks VALUES (4, 'Arrumar a despensa', 3, false);


--
-- Name: residents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.residents_id_seq', 4, true);


--
-- Name: tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tasks_id_seq', 11, true);


--
-- Name: residents residents_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.residents
    ADD CONSTRAINT residents_pk PRIMARY KEY (id);


--
-- Name: tasks tasks_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pk PRIMARY KEY (id);


--
-- Name: tasks tasks_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_fk0 FOREIGN KEY (responsible) REFERENCES public.residents(id);


--
-- PostgreSQL database dump complete
--

