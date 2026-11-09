-- Up: Una aventura de altura - Esquema de base de datos Supabase
-- Tabla de visitas del sitio web
CREATE TABLE IF NOT EXISTS visits (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    ip_port VARCHAR(46) NOT NULL DEFAULT 'obtido-geral',
    user_agent VARCHAR(500),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de calificaciones (rating 1-5) por escena y por personaje
CREATE TABLE IF NOT EXISTS ratings (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    character VARCHAR(100) NOT NULL,
    scene VARCHAR(200),
    rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de resultados del rompecabezas
CREATE TABLE IF NOT EXISTS puzzle_results (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    player_name VARCHAR(100),
    score SMALLINT NOT NULL,
    completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Politica de seguridad: lectura libre
ALTER TABLE visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE puzzle_results ENABLE ROW LEVEL SECURITY;

-- Visitas: se permiten inserciones anonimas (visitas generales)
-- y lectura anonima
CREATE POLICY "visits_insert" ON visits FOR INSERT WITH CHECK (true);
CREATE POLICY "visits_select" ON visits FOR SELECT USING (true);

-- Ratings: se permiten inserciones anonimas y lectura publica
-- (en un entorno real se recomienda autenticacion)
CREATE POLICY "ratings_insert" ON ratings FOR INSERT WITH CHECK (true);
CREATE POLICY "ratings_select" ON ratings FOR SELECT USING (true);

-- Puzzle results: inserciones anonimas
CREATE POLICY "puzzle_insert" ON puzzle_results FOR INSERT WITH CHECK (true);
CREATE POLICY "puzzle_select" ON puzzle_results FOR SELECT USING (true);

-- Indices para rendimiento
CREATE INDEX IF NOT EXISTS visits_created_idx ON visits (created_at);
CREATE INDEX IF NOT EXISTS ratings_created_idx ON ratings (created_at);

-- Permitir usos generales (anónimo para este proyecto demo)
ALTER TABLE visits ENABLE ROW LEVEL SECURITY;
