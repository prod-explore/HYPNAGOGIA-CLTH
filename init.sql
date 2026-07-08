-- Schemat bazy danych dla HYPNAGOGIA-CLTH
-- Wykorzystujemy potęgę PostgreSQL (kolumny JSONB) do elastycznego przechowywania danych
-- takich jak zagnieżdżone ceny wielowalutowe, kolory i media,
-- co jest standardem w nowoczesnych aplikacjach e-commerce (np. Stripe, Shopify).

CREATE TABLE IF NOT EXISTS drops (
    id VARCHAR(50) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(255),
    description TEXT,
    story TEXT,
    price JSONB NOT NULL, -- np. {"PLN": 299.00, "EUR": 69.00, "USD": 75.00}
    status VARCHAR(50) NOT NULL, -- preorder, coming, soldout
    preorder_deadline TIMESTAMP WITH TIME ZONE,
    estimated_ship_date DATE,
    category VARCHAR(100),
    sizes JSONB, -- tablica stringów: ["S", "M", "L", "XL"]
    colors JSONB, -- tablica obiektów: [{"name": "Black", "hex": "#000", "images": []}]
    media JSONB, -- obiekt: {"heroVideo": null, "gallery": []}
    size_guide JSONB, -- obiekt wymiarów dla różnych rozmiarów
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS shipping_methods (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price JSONB NOT NULL,
    estimated_days VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS shipping_settings (
    id INT PRIMARY KEY DEFAULT 1,
    free_shipping_threshold JSONB NOT NULL
);

-- Przykładowe dane z pliku shipping.json
INSERT INTO shipping_methods (id, name, description, price, estimated_days) VALUES
('inpost-paczkomat', 'InPost Paczkomat', 'Delivery to InPost parcel locker', '{"PLN": 12.99, "EUR": 3.00, "USD": 3.50}', '2-3'),
('inpost-courier', 'InPost Kurier', 'Courier delivery to your address', '{"PLN": 18.99, "EUR": 4.50, "USD": 5.00}', '1-2')
ON CONFLICT (id) DO NOTHING;

INSERT INTO shipping_settings (id, free_shipping_threshold) VALUES
(1, '{"PLN": 300, "EUR": 70, "USD": 75}')
ON CONFLICT (id) DO NOTHING;

-- Funkcja aktualizująca pole updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_drops_updated_at
    BEFORE UPDATE ON drops
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
